// api/contact.js - For Vercel Serverless Function
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, subject, message } = req.body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Email to you
        await resend.emails.send({
            from: 'Portfolio Contact <contact@yourdomain.com>', // Replace with your verified domain
            to: 'olumidesajowa@gmail.com',
            subject: `New Contact: ${subject}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p>Sent from your portfolio contact form.</p>
            `
        });

        // Confirmation email to user
        await resend.emails.send({
            from: 'Olumide Sajowa <hello@olumidesajowa.com>', // Replace with your verified domain
            to: email,
            subject: 'Thanks for reaching out!',
            html: `
                <h2>Thank you for your message!</h2>
                <p>Hi ${name},</p>
                <p>I've received your message regarding "${subject}" and will get back to you within 48 hours.</p>
                <p>In the meantime, you can:</p>
                <ul>
                    <li>Check out my latest work on <a href="https://yourportfolio.com">my portfolio</a></li>
                    <li>Connect with me on <a href="https://linkedin.com/in/olumidesajowa">LinkedIn</a></li>
                    <li>Follow my design thoughts on <a href="https://twitter.com/olumidesajowa">Twitter</a></li>
                </ul>
                <p>Best regards,<br>Olumide Sajowa</p>
                <hr>
                <p style="color: #666; font-size: 12px;">
                    This is an automated response. Please do not reply to this email.
                </p>
            `
        });

        res.status(200).json({ success: true, message: 'Emails sent successfully' });

    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({ error: 'Failed to send emails' });
    }
}