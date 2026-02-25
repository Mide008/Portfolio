# Olumide Sajowa - Portfolio Website

A modern, professional portfolio website built with HTML, CSS, and JavaScript.

## 📁 Project Structure

```
portfolio/
├── index.html              # Home page
├── work.html               # Projects/Work page
├── about.html              # About page
├── contact.html            # Contact page
├── project-fintech.html    # Case study: FinTech app
├── project-ecommerce.html  # Case study: E-commerce (duplicate fintech template)
├── project-health.html     # Case study: Health app (duplicate fintech template)
├── project-dashboard.html  # Case study: Dashboard (duplicate fintech template)
├── styles.css              # Main stylesheet
├── about.css               # About page styles
├── contact.css             # Contact page styles
├── case-study.css          # Case study page styles
├── script.js               # Main JavaScript
├── work.js                 # Work page filtering
└── README.md               # This file
```

## 🚀 Setup Instructions

### 1. Create Project Folder
```bash
mkdir portfolio
cd portfolio
```

### 2. Create All Files
Create the following files in your project folder:

**HTML Files:**
- `index.html` (Home page)
- `work.html` (Projects page)
- `about.html` (About page)
- `contact.html` (Contact page)
- `project-fintech.html` (Case study template - FinTech app)
- Duplicate the fintech template for other projects:
  - `project-ecommerce.html`
  - `project-health.html`
  - `project-dashboard.html`

**CSS Files:**
- `styles.css` (Main styles)
- `about.css` (About page styles)
- `contact.css` (Contact page styles)
- `case-study.css` (Case study page styles)

**JavaScript Files:**
- `script.js` (Main functionality)
- `work.js` (Project filtering)

### 3. Copy Code
Copy the code from each artifact into the corresponding file. All files have been provided above.

### 4. Test Locally with VS Code Live Server

1. **Install Live Server Extension:**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X or Cmd+Shift+X)
   - Search for "Live Server" by Ritwick Dey
   - Click Install

2. **Run the Website:**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Your website will open in your default browser
   - The URL will typically be: `http://127.0.0.1:5500/index.html`

## 🌐 Deploy to Netlify

### Method 1: Drag and Drop (Easiest)

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up or log in
3. Click "Add new site" → "Deploy manually"
4. Drag and drop your entire project folder
5. Your site will be live in seconds!
6. You'll get a random URL like `random-name-123.netlify.app`
7. You can change this to `olumide-sajowa.netlify.app` in Site Settings

### Method 2: GitHub + Netlify (Recommended for Updates)

1. **Create a GitHub Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to Netlify and click "Add new site"
   - Choose "Import an existing project"
   - Select GitHub
   - Choose your repository
   - Click "Deploy site"

3. **Automatic Updates:**
   - Every time you push to GitHub, Netlify will automatically update your site

## 🚀 Deploy to Vercel

### Method 1: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd portfolio
   vercel
   ```
   
3. Follow the prompts and your site will be live!

### Method 2: GitHub + Vercel

1. **Push to GitHub** (same as Netlify method above)

2. **Import to Vercel:**
   - Go to [Vercel](https://vercel.com/)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"

## ✏️ Customization Guide

### 1. Replace Personal Information

**In all HTML files, update:**
- Email: `hello@olumide.design` → your email
- Phone: `+234 801 234 5678` → your phone
- Social media links (LinkedIn, Twitter, Dribbble, Behance)

**Search and replace in all files:**
- Find: `Olumide Sajowa`
- Replace with: Your actual name

### 2. Replace Images

**Profile Image (about.html):**
```html
<!-- Replace this URL -->
<img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&q=80" alt="Your Name">
<!-- With your own image path -->
<img src="images/profile.jpg" alt="Your Name">
```

**Project Images:**
All project images use Unsplash URLs. Replace them with your actual project screenshots:
```html
<!-- Current -->
<img src="https://images.unsplash.com/photo-..." alt="Project">
<!-- Replace with -->
<img src="images/project-1.jpg" alt="Project Name">
```

### 3. Update Content

**Hero Headline (index.html):**
```html
<h1 class="hero-title">
    Transforming Ideas<br>
    Into Exceptional<br>
    <span class="gradient-text">Digital Experiences</span>
</h1>
```

**About Text (about.html):**
Update the paragraphs in the about section with your own story.

**Experience Timeline (about.html):**
Add your actual work experience, education, and achievements.

**Projects (work.html):**
Replace sample projects with your actual work.

### 4. Color Scheme

To change colors, edit the CSS variables in `styles.css`:

```css
:root {
    --color-bg: #000000;           /* Background color */
    --color-text: #ffffff;         /* Text color */
    --color-text-secondary: #a0a0a0; /* Secondary text */
    --color-gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --color-gradient-2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --color-gradient-3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    --color-gradient-4: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}
```

## 📱 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ Project filtering functionality
- ✅ Working contact form (with validation)
- ✅ Interactive hover effects
- ✅ Fast loading performance
- ✅ SEO-friendly structure
- ✅ Cross-browser compatible

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid and Flexbox
- **JavaScript (Vanilla)** - No frameworks needed
- **Google Fonts** - Inter font family

## 📊 Performance Tips

1. **Optimize Images:**
   - Use WebP format for better compression
   - Resize images before uploading (max width: 1920px)
   - Use tools like TinyPNG or Squoosh

2. **Add Favicon:**
   Create a `favicon.ico` and add to `<head>`:
   ```html
   <link rel="icon" type="image/x-icon" href="favicon.ico">
   ```

3. **Enable Gzip Compression:**
   Both Netlify and Vercel do this automatically

## 📝 Adding New Projects

1. **Duplicate the case study template:**
   - Copy `project-fintech.html`
   - Rename to your project (e.g., `project-crypto.html`)

2. **Update the content:**
   ```html
   <!-- Change the title -->
   <title>Your Project Name - Case Study | Olumide Sajowa</title>
   
   <!-- Update project hero -->
   <h1 class="project-hero-title">Your Project Name</h1>
   <p class="project-hero-subtitle">Your project description...</p>
   
   <!-- Update all sections with your content -->
   ```

3. **Add to work.html:**
   ```html
   <a href="project-yourproject.html" class="project-card" data-category="web">
       <div class="project-image">
           <img src="images/your-project.jpg" alt="Your Project">
           <div class="project-overlay gradient-1"></div>
       </div>
       <div class="project-info">
           <span class="project-year">2024</span>
           <h3 class="project-title">Your Project Title</h3>
           <p class="project-category">Category • Type</p>
           <span class="project-link">View Case Study →</span>
       </div>
   </a>
   ```

## 📚 Case Study Structure

Each case study follows this proven structure:

1. **Hero Section** - Project title, subtitle, and key metadata
2. **Overview** - Problem statement and solution summary
3. **Problem** - The challenges you addressed
4. **Research** - User interviews, competitive analysis, insights
5. **Design Process** - Your methodology and iterations
6. **Key Features** - Highlight 3-4 main features with visuals
7. **Design Decisions** - Explain your choices (colors, typography, etc.)
8. **Results** - Metrics and impact of your design
9. **Learnings** - What you learned from the project
10. **Next Project** - Link to another case study

## 🐛 Common Issues

### Issue: Live Server not working
**Solution:** Make sure you're right-clicking on the HTML file itself, not the folder.

### Issue: Images not showing
**Solution:** Check that image paths are correct. If using local images, create an `images/` folder.

### Issue: Navigation not working on mobile
**Solution:** Make sure `script.js` is properly linked before the closing `</body>` tag.

### Issue: Form not submitting
**Solution:** The form currently shows a notification. To actually send emails, you'll need to integrate a service like:
- [Formspree](https://formspree.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [EmailJS](https://www.emailjs.com/)

## 📧 Contact Form Integration

To make the contact form actually send emails:

### Using Netlify Forms (Easiest):

1. Add `netlify` attribute to form in `contact.html`:
   ```html
   <form id="contactForm" class="contact-form" name="contact" method="POST" data-netlify="true">
       <input type="hidden" name="form-name" value="contact">
       <!-- rest of form fields -->
   </form>
   ```

2. Deploy to Netlify
3. Form submissions will appear in your Netlify dashboard

## 🎨 Design Credits

Inspired by modern portfolio designs from:
- Dann Petty
- Marcos Rezende
- Emilio Merbilhaa
- Lu Yu

## 📄 License

This portfolio template is free to use for personal and commercial projects.

## 🤝 Support

If you have questions or need help:
1. Check this README first
2. Google the specific issue
3. Check VS Code Live Server documentation
4. Check Netlify/Vercel deployment guides

---

**Built with ❤️ for Olumide Sajowa**

Good luck with your portfolio! 🚀