# 🚀 Deployment Checklist

## ✅ Pre-Deployment Checklist

### Code Quality
- [x] Build passes: `npm run build` ✓
- [x] No console errors in production build
- [x] All images optimized and loading correctly
- [x] Environment variables properly configured
- [x] `.env` file in `.gitignore` ✓
- [x] Security headers configured in `vercel.json` ✓

### Content & SEO
- [x] All personal information updated in `src/constants/index.js`
- [x] SEO meta tags configured in `src/components/SEO.jsx`
- [x] Resume PDF uploaded to `/public/Resume1.pdf`
- [x] Favicon added to `/public/logo.png`
- [ ] Create Open Graph image (1200x630px) → `/public/profile-og.png`
- [x] All project links working and up-to-date

### Analytics & Tracking
- [x] Google Analytics GA4 ID configured: `VITE_GA4_MEASUREMENT_ID=G-K6JCXGV4CW`
- [x] Vercel Analytics component added to `main.jsx`
- [x] Event tracking implemented:
  - [x] Resume downloads
  - [x] Project clicks
  - [x] Contact form submissions
  - [x] Social media clicks
  - [x] Email clicks

### Contact & Forms
- [x] Web3Forms API key configured: `VITE_WEB3FORMS_ACCESS_KEY`
- [x] Contact form rate limiting enabled (3 messages/week)
- [x] Email address verified: `vineetagarwal540@gmail.com`
- [x] All social media links working

### Security
- [x] Environment variables not committed to Git
- [x] `.env.example` created for reference
- [x] Security headers configured
- [x] No exposed API keys in code

---

## 🌐 Deployment Steps (Vercel)

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to: https://vercel.com/dashboard
   - Click "Add New" → "Project"
   - Import repository: `vineetagarwal54/portfolio`
   - Framework preset: **Vite** (auto-detected)
   - Build command: `npm run build` (auto-filled)
   - Output directory: `dist` (auto-filled)

3. **Add Environment Variables**
   In Vercel project settings → Environment Variables:
   ```
   VITE_WEB3FORMS_ACCESS_KEY = b5f26cb3-f6c2-4da2-89b2-c1e5e1a214de
   VITE_GA4_MEASUREMENT_ID = G-K6JCXGV4CW
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment (usually 2-3 minutes)
   - Get your live URL: `https://your-project.vercel.app`

### Option 2: Vercel CLI

```bash
# Install Vercel CLI (if not already)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Set environment variables (in Vercel dashboard)
```

---

## 📋 Post-Deployment Tasks

### Immediate (Day 1)
- [ ] Visit live site and test all features
- [ ] Test contact form submission
- [ ] Verify resume download works
- [ ] Test all social media links
- [ ] Check mobile responsiveness on real device
- [ ] Verify dark mode toggle works
- [ ] Test all project card links

### Analytics Setup (Day 1-2)
- [ ] **Google Analytics**:
  - Go to https://analytics.google.com
  - Navigate to property `G-K6JCXGV4CW`
  - Check Realtime reports for live visitors
  - Verify events are tracking correctly
  - Set up custom reports if needed

- [ ] **Vercel Analytics**:
  - Enable in Vercel Dashboard → Settings → Analytics
  - Wait 24 hours for data to populate
  - Review page views and performance metrics

### SEO & Social (Week 1)
- [ ] Create and upload Open Graph image:
  - Size: 1200x630px
  - Include: Your photo, name, title
  - Upload to: `/public/profile-og.png`
  - Redeploy after adding image

- [ ] Test social sharing previews:
  - Facebook: https://developers.facebook.com/tools/debug/
  - Twitter: https://cards-dev.twitter.com/validator
  - LinkedIn: Share and check preview

- [ ] Submit sitemap to Google Search Console:
  - Verify domain ownership
  - Submit sitemap (if generated)
  - Request indexing

### Domain Setup (Optional)
- [ ] Purchase custom domain
- [ ] Add domain in Vercel settings
- [ ] Update DNS records
- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Update SEO.jsx with new domain URL

---

## 🔍 Testing Checklist

### Desktop Testing
- [ ] Chrome - Latest
- [ ] Firefox - Latest
- [ ] Safari - Latest
- [ ] Edge - Latest

### Mobile Testing
- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Responsive breakpoints (sm, md, lg, xl)

### Feature Testing
- [ ] Resume download (PDF opens/downloads)
- [ ] Contact form (success + error states)
- [ ] Rate limiting (3 messages max)
- [ ] Project cards (hover effects, links)
- [ ] Social media links (all open in new tab)
- [ ] Dark mode toggle
- [ ] Animations (smooth, no jank)
- [ ] Image loading (lazy load works)

### Performance Testing
- [ ] Lighthouse score (aim for 90+ on all metrics)
- [ ] Core Web Vitals
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
- [ ] Page load time < 3s

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Environment Variables Not Working
- Ensure variables start with `VITE_`
- Restart dev server after adding `.env`
- In Vercel: Redeploy after adding env vars

### Contact Form Not Working
- Verify Web3Forms API key is correct
- Check browser console for errors
- Test rate limiting by clearing localStorage

### Analytics Not Tracking
- Check GA4 Measurement ID is correct
- Verify events in GA4 DebugView (realtime)
- Ensure ad blockers are disabled when testing

---

## 📞 Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **GA4 Setup**: https://analytics.google.com
- **Web3Forms**: https://web3forms.com
- **React Helmet**: https://github.com/staylor/react-helmet-async

---

## ✅ Deployment Complete!

Your portfolio is now live and ready to impress recruiters! 🎉

**Next Steps:**
1. Share on LinkedIn, Twitter, GitHub
2. Add to resume
3. Include in job applications
4. Monitor analytics weekly
5. Keep projects updated

**Live URL**: _[Add after deployment]_

Last updated: November 27, 2025
