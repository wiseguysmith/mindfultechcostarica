# Deployment Guide for MindfulTech Services

This guide will help you deploy your Next.js site to production.

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended for Next.js)
Vercel is made by the creators of Next.js and offers the best Next.js experience.

#### Steps:
1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Configure:
     - **Framework Preset**: Next.js (auto-detected)
     - **Root Directory**: `./` (root)
     - **Build Command**: `npm run build` (auto)
     - **Output Directory**: `.next` (auto)
   
3. **Set Environment Variables**
   In Vercel dashboard → Project Settings → Environment Variables:
   ```
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/mindfultechnology
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

4. **Configure Domain**
   - Go to Project Settings → Domains
   - Add `mindfultech.services`
   - Follow DNS instructions (add CNAME record)

5. **Deploy!**
   - Click "Deploy"
   - Your site will be live in ~2 minutes

---

### Option 2: Netlify

#### Steps:
1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repo
   - Configure:
     - **Build command**: `npm run build`
     - **Publish directory**: `.next`
     - **Node version**: 18 (in Environment variables)

3. **Set Environment Variables**
   In Site Settings → Environment Variables:
   ```
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/mindfultechnology
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

4. **Configure Domain**
   - Go to Site Settings → Domain management
   - Add custom domain: `mindfultech.services`
   - Follow DNS instructions

---

### Option 3: Self-Hosted (VPS/Server)

If you have your own server:

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

3. **Use PM2 for process management**
   ```bash
   npm install -g pm2
   pm2 start npm --name "mindfultech" -- start
   pm2 save
   pm2 startup
   ```

4. **Set up Nginx reverse proxy** (recommended)
   - Configure Nginx to proxy to `localhost:3000`
   - Set up SSL with Let's Encrypt

---

## 📋 Pre-Deployment Checklist

### ✅ Before You Deploy:

1. **Environment Variables**
   - [ ] Set `NEXT_PUBLIC_CALENDLY_URL` (your Calendly URL)
   - [ ] Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (your Formspree form ID)

2. **Test Locally**
   ```bash
   npm run build
   npm start
   ```
   - [ ] Test all pages load correctly
   - [ ] Test forms submit successfully
   - [ ] Test Calendly embed works
   - [ ] Test mobile responsiveness

3. **Content Review**
   - [ ] Review all copy in `/lib/site-data.ts`
   - [ ] Verify partner names and locations
   - [ ] Check all links work

4. **SEO**
   - [ ] Verify metadata in each page
   - [ ] Check OpenGraph tags
   - [ ] Test social sharing previews

---

## 🔧 Environment Variables

Create a `.env.local` file for local development (don't commit this):

```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/mindfultechnology
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

**Important**: 
- Variables starting with `NEXT_PUBLIC_` are exposed to the browser
- Never commit `.env.local` to git (it's in `.gitignore`)
- Set these in your hosting platform's dashboard

---

## 🌐 Domain Configuration

### For Vercel:
1. Add domain in Vercel dashboard
2. Add DNS records:
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `cname.vercel-dns.com`

### For Netlify:
1. Add domain in Netlify dashboard
2. Add DNS records:
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `your-site.netlify.app`

---

## 📝 Post-Deployment

After deploying:

1. **Test Everything**
   - [ ] Visit all pages
   - [ ] Test forms
   - [ ] Test Calendly embed
   - [ ] Test on mobile devices
   - [ ] Test on different browsers

2. **Set Up Analytics** (optional)
   - Google Analytics
   - Plausible Analytics
   - Vercel Analytics (if using Vercel)

3. **Monitor Performance**
   - Check Core Web Vitals
   - Monitor error logs
   - Set up uptime monitoring

---

## 🆘 Troubleshooting

### Build Fails
- Check Node.js version (need 18+)
- Run `npm install` again
- Check for TypeScript errors: `npm run lint`

### Forms Don't Work
- Verify `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is set correctly
- Check Formspree form is active
- Check browser console for errors

### Calendly Doesn't Load
- Verify `NEXT_PUBLIC_CALENDLY_URL` is correct
- Check if Calendly allows iframe embedding
- Check browser console for errors

### Styling Issues
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`
- Check Tailwind classes are correct

---

## 📞 Need Help?

If you run into issues:
1. Check the hosting platform's logs
2. Check browser console for errors
3. Verify all environment variables are set
4. Test locally first with `npm run build && npm start`

---

## 🎉 You're Ready!

Once deployed, your site will be live at `mindfultech.services`!

