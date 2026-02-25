# Quick Setup Guide - Olumide Sajowa Portfolio

## 🎯 Complete File List

You need to create **13 files total** in your portfolio folder:

### HTML Files (8 files)
1. ✅ `index.html` - Home page
2. ✅ `work.html` - All projects page
3. ✅ `about.html` - About page
4. ✅ `contact.html` - Contact page
5. ✅ `project-fintech.html` - PayFlow case study (TEMPLATE)
6. ⚠️ `project-ecommerce.html` - ShopHub case study (copy from fintech)
7. ⚠️ `project-health.html` - WellnessPro case study (copy from fintech)
8. ⚠️ `project-dashboard.html` - DataViz case study (copy from fintech)

### CSS Files (4 files)
1. ✅ `styles.css` - Main stylesheet
2. ✅ `about.css` - About page styles
3. ✅ `contact.css` - Contact page styles
4. ✅ `case-study.css` - Case study page styles

### JavaScript Files (2 files)
1. ✅ `script.js` - Main functionality
2. ✅ `work.js` - Project filtering

---

## ⚡ Step-by-Step Setup (5 Minutes)

### Step 1: Create Project Folder
```bash
# On Windows (Command Prompt or PowerShell)
mkdir portfolio
cd portfolio

# On Mac/Linux (Terminal)
mkdir portfolio
cd portfolio
```

### Step 2: Create All Files

**Option A: Using VS Code**
1. Open VS Code
2. File → Open Folder → Select your `portfolio` folder
3. Create new files by clicking the "New File" icon
4. Create all 13 files listed above

**Option B: Using Command Line**
```bash
# Create all HTML files
touch index.html work.html about.html contact.html
touch project-fintech.html project-ecommerce.html project-health.html project-dashboard.html

# Create all CSS files
touch styles.css about.css contact.css case-study.css

# Create all JS files
touch script.js work.js
```

### Step 3: Copy Code into Files

Copy the code from the artifacts into each corresponding file:

1. **index.html** → Copy from "index.html" artifact
2. **work.html** → Copy from "work.html" artifact
3. **about.html** → Copy from "about.html" artifact
4. **contact.html** → Copy from "contact.html" artifact
5. **project-fintech.html** → Copy from "project-fintech.html" artifact
6. **styles.css** → Copy from "styles.css" artifact
7. **about.css** → Copy from "about.css" artifact
8. **contact.css** → Copy from "contact.css" artifact
9. **case-study.css** → Copy from "case-study.css" artifact
10. **script.js** → Copy from "script.js" artifact
11. **work.js** → Copy from "work.js" artifact

### Step 4: Create Other Case Studies

For the remaining case study pages, duplicate `project-fintech.html`:

```bash
# Copy the template
cp project-fintech.html project-ecommerce.html
cp project-fintech.html project-health.html
cp project-fintech.html project-dashboard.html
```

Then edit each file to update:
- Page title
- Project name
- Project description
- Images
- All content sections

### Step 5: Test Locally

1. Install Live Server in VS Code:
   - Extensions → Search "Live Server" → Install

2. Right-click `index.html` → "Open with Live Server"

3. Your site opens at `http://127.0.0.1:5500`

4. Test all navigation links work properly

---

## 🎨 Customization Checklist

### Phase 1: Basic Info (15 minutes)
- [ ] Replace "Olumide Sajowa" with your name (in ALL files)
- [ ] Update email: `hello@olumide.design` → your email
- [ ] Update phone: `+234 801 234 5678` → your phone
- [ ] Update social media URLs (LinkedIn, Twitter, Dribbble, Behance)
- [ ] Update location if needed

### Phase 2: Content (30-60 minutes)
- [ ] Write your own hero headline (index.html)
- [ ] Write your about story (about.html)
- [ ] Add your work experience (about.html)
- [ ] Update skills and tools (about.html)
- [ ] Customize services section (index.html)

### Phase 3: Projects (Variable time)
- [ ] Replace project images with your screenshots
- [ ] Update project titles and descriptions
- [ ] Write case studies for each project
- [ ] Add real metrics and results

### Phase 4: Visual Polish (30 minutes)
- [ ] Add your profile photo
- [ ] Optimize all images
- [ ] Test on mobile devices
- [ ] Check all links work

---

## 🖼️ Image Guidelines

### Where to Get Images

**Free Stock Photos:**
- [Unsplash](https://unsplash.com) - High quality, free
- [Pexels](https://pexels.com) - Great variety
- [Pixabay](https://pixabay.com) - Large collection

### Image Sizes & Optimization

**Profile Photo:**
- Size: 600x800px (portrait)
- Format: JPG or WebP
- Location: `images/profile.jpg`

**Project Hero Images:**
- Size: 1400x900px
- Format: JPG or WebP
- Quality: 80-85%
- Location: `images/project-name-hero.jpg`

**Feature Screenshots:**
- Size: 600x800px (mobile) or 1200x800px (web)
- Format: PNG (if UI) or JPG (photos)
- Location: `images/project-name-feature-1.jpg`

**Optimization Tools:**
- [TinyPNG](https://tinypng.com) - Compress images
- [Squoosh](https://squoosh.app) - Google's image optimizer
- [ImageOptim](https://imageoptim.com) - Mac app

### Folder Structure for Images

```
portfolio/
├── images/
│   ├── profile.jpg
│   ├── project-fintech-hero.jpg
│   ├── project-fintech-feature-1.jpg
│   ├── project-fintech-feature-2.jpg
│   ├── project-ecommerce-hero.jpg
│   └── ...
├── index.html
├── work.html
└── ...
```

---

## 🚀 Deployment Checklist

### Pre-Deployment
- [ ] All links tested and working
- [ ] All images optimized
- [ ] Mobile responsive check
- [ ] Browser compatibility test (Chrome, Firefox, Safari)
- [ ] Spell check all content
- [ ] Test contact form

### Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `portfolio` folder
3. Change site name to `olumide-sajowa` or your preferred name
4. Done! Your site is live

### Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository (or drag & drop)
4. Click "Deploy"
5. Done! Your site is live

### Custom Domain (Optional)
- Buy domain from Namecheap, GoDaddy, or Google Domains
- Connect to Netlify/Vercel in their settings
- Wait 24-48 hours for DNS propagation

---

## 📋 Common Issues & Solutions

### Issue: "Live Server not working"
**Solution:** 
- Make sure you're right-clicking the HTML file, not the folder
- Reinstall Live Server extension
- Try opening browser manually: `http://127.0.0.1:5500`

### Issue: "Images not showing"
**Solution:**
- Check image paths are correct
- Make sure images are in the `images/` folder
- Check file names match exactly (case-sensitive)

### Issue: "Mobile menu not closing"
**Solution:**
- Make sure `script.js` is linked before `</body>`
- Clear browser cache and refresh

### Issue: "Styles not applying"
**Solution:**
- Check all CSS files are linked in `<head>`
- Make sure file names match exactly
- Clear browser cache

### Issue: "Project filtering not working on work.html"
**Solution:**
- Make sure `work.js` is linked after `script.js`
- Check console for JavaScript errors (F12 → Console tab)

---

## 🎯 Success Metrics

After deployment, track these metrics:

- **Google Analytics** - Install to track visitors
- **Hotjar** - See how users interact with your site
- **Google Search Console** - Monitor search performance
- **PageSpeed Insights** - Check site speed

---

## 💡 Pro Tips

1. **Update Regularly** - Add new projects every 2-3 months
2. **Get Feedback** - Share with designer friends for critiques
3. **A/B Test** - Try different headlines and see what works
4. **Blog** - Consider adding a blog section for SEO
5. **Case Studies** - Quality > Quantity (3-4 amazing projects > 10 mediocre)
6. **Mobile First** - 60% of traffic is mobile, test there first
7. **Fast Loading** - Aim for under 3 seconds load time
8. **SEO** - Add meta descriptions, alt tags, and proper headings

---

## 📞 Need Help?

If you get stuck:

1. **Google the error** - Most issues have solutions online
2. **Check browser console** - F12 → Console tab shows errors
3. **VS Code Live Server docs** - [Read here](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
4. **Netlify docs** - [Read here](https://docs.netlify.com)
5. **Vercel docs** - [Read here](https://vercel.com/docs)

---

## ✅ Final Checklist Before Going Live

- [ ] All personal info updated
- [ ] Profile photo added
- [ ] At least 3-4 case studies complete
- [ ] All images optimized
- [ ] Mobile tested
- [ ] Desktop tested
- [ ] All links work
- [ ] Contact form tested
- [ ] Spell checked
- [ ] SEO meta tags added
- [ ] Favicon added
- [ ] Analytics installed
- [ ] Shared with friends for feedback

---

**You're ready to launch! 🚀**

Good luck with your portfolio!