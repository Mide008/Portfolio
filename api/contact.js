// /api/contact.js
// Vercel Serverless Function — Contact Form Handler
// Uses Resend to send emails from hello@olumidesajowa.com
// Dependencies: npm install resend (add to package.json)

const { Resend } = require('resend');

// ── Rate limiting (in-memory, resets per cold start) ──────────
// For a portfolio this is sufficient. For production use Upstash Redis.
const rateLimitMap = new Map();
const RATE_LIMIT_MAX = 3;      // max submissions per IP
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function isRateLimited(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }
  if (now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }
  if (record.count >= RATE_LIMIT_MAX) return true;
  record.count++;
  return false;
}

// ── reCAPTCHA v3 server-side verification ─────────────────────
async function verifyRecaptcha(token) {
  if (!token) return { success: false, score: 0 };
  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });
    const data = await res.json();
    return data;
  } catch {
    return { success: false, score: 0 };
  }
}

// ── HTML email template: notification to Olumide ─────────────
function buildNotificationEmail(name, email, subject, message, sentAt, score) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>New Portfolio Message</title>
</head>
<body style="margin:0;padding:0;background:#F4F6F9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F4F6F9;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFFFF;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.06);">
        
        <!-- Header -->
        <tr>
          <td style="background:#2A4B7C;padding:32px 40px;">
            <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.6);text-transform:uppercase;letter-spacing:1px;">Portfolio Contact</p>
            <h1 style="margin:8px 0 0;font-size:22px;font-weight:600;color:#FFFFFF;">New message from your portfolio</h1>
          </td>
        </tr>

        <!-- Sender details -->
        <tr>
          <td style="padding:32px 40px 0;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFF;border-radius:8px;overflow:hidden;border:1px solid #E5ECF9;">
              <tr>
                <td style="padding:16px 20px;border-bottom:1px solid #E5ECF9;">
                  <p style="margin:0;font-size:12px;color:#8A94A6;text-transform:uppercase;letter-spacing:0.5px;">From</p>
                  <p style="margin:4px 0 0;font-size:16px;font-weight:600;color:#1E1E1E;">${name}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 20px;border-bottom:1px solid #E5ECF9;">
                  <p style="margin:0;font-size:12px;color:#8A94A6;text-transform:uppercase;letter-spacing:0.5px;">Email</p>
                  <a href="mailto:${email}" style="display:block;margin:4px 0 0;font-size:15px;color:#2A4B7C;text-decoration:none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 20px;border-bottom:1px solid #E5ECF9;">
                  <p style="margin:0;font-size:12px;color:#8A94A6;text-transform:uppercase;letter-spacing:0.5px;">Subject</p>
                  <p style="margin:4px 0 0;font-size:15px;color:#1E1E1E;font-weight:500;">${subject}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 20px;">
                  <p style="margin:0;font-size:12px;color:#8A94A6;text-transform:uppercase;letter-spacing:0.5px;">Sent</p>
                  <p style="margin:4px 0 0;font-size:14px;color:#5B5B5B;">${sentAt}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Message -->
        <tr>
          <td style="padding:24px 40px 0;">
            <p style="margin:0 0 12px;font-size:13px;color:#8A94A6;text-transform:uppercase;letter-spacing:0.5px;">Message</p>
            <div style="background:#FAFAFA;border-left:3px solid #2A4B7C;border-radius:0 8px 8px 0;padding:20px 24px;">
              <p style="margin:0;font-size:15px;line-height:1.7;color:#1E1E1E;white-space:pre-wrap;">${message}</p>
            </div>
          </td>
        </tr>

        <!-- Reply CTA -->
        <tr>
          <td style="padding:32px 40px;">
            <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" 
               style="display:inline-block;background:#2A4B7C;color:#FFFFFF;text-decoration:none;font-size:14px;font-weight:600;padding:12px 28px;border-radius:8px;letter-spacing:0.3px;">
              Reply to ${name}
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:0 40px 32px;border-top:1px solid #F0F0F0;">
            <p style="margin:24px 0 4px;font-size:12px;color:#B0B8C4;">reCAPTCHA score: ${score} (1.0 = human, 0.0 = bot) &middot; Sent from portfolio-uvgo.vercel.app</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ── HTML email template: confirmation to sender ───────────────
function buildConfirmationEmail(name, subject, sentAt) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Message received</title>
</head>
<body style="margin:0;padding:0;background:#F4F6F9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F4F6F9;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFFFF;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.06);">

        <!-- Header -->
        <tr>
          <td style="background:#2A4B7C;padding:40px;">
            <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase;">Olumide Sajowa</p>
            <h1 style="margin:10px 0 0;font-size:26px;font-weight:700;color:#FFFFFF;line-height:1.3;">Message received.</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <p style="margin:0 0 20px;font-size:16px;line-height:1.7;color:#1E1E1E;">Hi ${name},</p>
            <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#5B5B5B;">
              Thank you for reaching out. I've received your message about <strong style="color:#1E1E1E;">"${subject}"</strong> 
              and I'll be in touch within 2 business days.
            </p>
            <p style="margin:0 0 32px;font-size:15px;line-height:1.7;color:#5B5B5B;">
              In the meantime, you're welcome to explore my work at the link below.
            </p>

            <a href="https://portfolio-uvgo.vercel.app" 
               style="display:inline-block;background:#1E1E1E;color:#FFFFFF;text-decoration:none;font-size:14px;font-weight:600;padding:14px 32px;border-radius:8px;letter-spacing:0.3px;">
              View portfolio
            </a>
          </td>
        </tr>

        <!-- Divider -->
        <tr><td style="padding:0 40px;"><div style="height:1px;background:#F0F0F0;"></div></td></tr>

        <!-- Sender details recap -->
        <tr>
          <td style="padding:24px 40px;">
            <p style="margin:0 0 8px;font-size:12px;color:#B0B8C4;text-transform:uppercase;letter-spacing:0.5px;">Your message summary</p>
            <p style="margin:0 0 4px;font-size:14px;color:#8A94A6;">Subject: <span style="color:#1E1E1E;">${subject}</span></p>
            <p style="margin:0;font-size:14px;color:#8A94A6;">Sent: ${sentAt}</p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:0 40px 32px;">
            <p style="margin:0;font-size:13px;color:#1E1E1E;font-weight:600;">Olumide Sajowa</p>
            <p style="margin:4px 0 0;font-size:13px;color:#8A94A6;">Design Engineer &middot; Brand to Backend</p>
            <a href="https://portfolio-uvgo.vercel.app" style="font-size:13px;color:#2A4B7C;text-decoration:none;">portfolio-uvgo.vercel.app</a>
            <p style="margin:20px 0 0;font-size:11px;color:#C8D0DA;line-height:1.5;">
              This is an automated confirmation. Please do not reply to this email.<br>
              To follow up directly: <a href="mailto:hello@olumidesajowa.com" style="color:#2A4B7C;text-decoration:none;">hello@olumidesajowa.com</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ── Input sanitisation ────────────────────────────────────────
function sanitise(str, maxLen = 2000) {
  if (typeof str !== 'string') return '';
  return str
    .slice(0, maxLen)
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ── Main handler ──────────────────────────────────────────────
module.exports = async function handler(req, res) {
  // Only accept POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS — only allow your portfolio domain
  const allowedOrigins = [
    'https://portfolio-uvgo.vercel.app',
    'http://localhost:3000',
    'http://127.0.0.1:5500',
    'http://127.0.0.1:3000',
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Rate limiting
  const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  try {
    const { name, email, subject, message, honey, recaptchaToken } = req.body;

    // Honeypot check
    if (honey) {
      // Silently return 200 to fool bots
      return res.status(200).json({ ok: true });
    }

    // Server-side field validation
    if (!name || name.trim().length < 2)    return res.status(400).json({ error: 'Invalid name.' });
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return res.status(400).json({ error: 'Invalid email.' });
    if (!subject || subject.trim().length < 1) return res.status(400).json({ error: 'Subject required.' });
    if (!message || message.trim().length < 20) return res.status(400).json({ error: 'Message too short.' });

    // reCAPTCHA verification (server-side — the right way)
    const recaptchaResult = await verifyRecaptcha(recaptchaToken);
    const score = recaptchaResult.score ?? 0;
    if (process.env.NODE_ENV !== 'development' && (!recaptchaResult.success || score < 0.5)) {
      return res.status(400).json({ error: 'Security check failed. Please refresh and try again.' });
    }

    // Sanitise inputs before embedding in HTML
    const safeName    = sanitise(name.trim(), 100);
    const safeEmail   = sanitise(email.trim(), 254);
    const safeSubject = sanitise(subject.trim(), 200);
    const safeMessage = sanitise(message.trim(), 2000);
    const sentAt = new Date().toLocaleString('en-GB', {
      dateStyle: 'long', timeStyle: 'short', timeZone: 'Europe/London'
    });

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send both emails concurrently
    const [notifyResult, confirmResult] = await Promise.allSettled([
      // 1. Notification to Olumide
      resend.emails.send({
        from:    'Portfolio Contact <hello@olumidesajowa.com>',
        to:      ['hello@olumidesajowa.com'],
        replyTo: safeEmail,
        subject: `New message: ${safeSubject}`,
        html:    buildNotificationEmail(safeName, safeEmail, safeSubject, safeMessage, sentAt, score),
      }),
      // 2. Confirmation to the person who messaged
      resend.emails.send({
        from:    'Olumide Sajowa <hello@olumidesajowa.com>',
        to:      [safeEmail],
        subject: `I've received your message — Olumide Sajowa`,
        html:    buildConfirmationEmail(safeName, safeSubject, sentAt),
      }),
    ]);

    // The notification email is critical — fail if it didn't send
    if (notifyResult.status === 'rejected' || notifyResult.value?.error) {
      console.error('Notification email failed:', notifyResult.reason || notifyResult.value?.error);
      return res.status(500).json({ error: 'Failed to send message. Please email directly.' });
    }

    // Confirmation failing is non-critical — log but don't fail the request
    if (confirmResult.status === 'rejected') {
      console.warn('Confirmation email failed (non-critical):', confirmResult.reason);
    }

    return res.status(200).json({ ok: true });

  } catch (err) {
    console.error('Contact handler error:', err);
    return res.status(500).json({ error: 'Server error. Please email directly.' });
  }
};