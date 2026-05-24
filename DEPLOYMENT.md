# 🚀 Deployment Guide — AJ Wealth Solutions

Step-by-step, beginner-friendly. Total cost: **₹0**. Time: ~20 minutes.

---

## STEP 1 — Put your code on GitHub

GitHub stores your code online and connects to the hosting service.

### Option A — Easiest (website upload, no commands)
1. Create a free account at **https://github.com**
2. Click the **+** (top-right) → **New repository**
3. Name it `aj-wealth-solutions`, keep it **Public**, click **Create repository**
4. On the next page click **uploading an existing file**
5. Drag in **all the files and folders from this project** — *except* the `node_modules` folder (never upload that, it's huge and rebuilds automatically)
6. Click **Commit changes**

### Option B — Using Git (if you have it installed)
```bash
cd aj-wealth
git init
git add .
git commit -m "Initial commit - AJ Wealth Solutions website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/aj-wealth-solutions.git
git push -u origin main
```

---

## STEP 2 — Deploy free on Vercel (recommended)

1. Go to **https://vercel.com** → **Sign up with GitHub**
2. Click **Add New → Project**
3. **Import** your `aj-wealth-solutions` repository
4. Vercel auto-detects Vite. Leave defaults:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy** and wait ~1 minute
6. 🎉 Your site is live at `https://aj-wealth-solutions.vercel.app`

**Every future change:** edit code → push to GitHub → Vercel redeploys automatically.

### Alternative — Netlify
1. **https://netlify.com** → Sign up with GitHub
2. **Add new site → Import an existing project** → pick your repo
3. Build command: `npm run build`, Publish directory: `dist` → **Deploy**
   *(The included `public/_redirects` file already handles routing.)*

---

## STEP 3 — (Optional) Custom domain

A custom domain like `ajwealthsolutions.com` looks more professional (~₹800/year).

1. Buy a domain from any registrar (GoDaddy, Hostinger, Namecheap, etc.)
2. In **Vercel → your project → Settings → Domains**, add your domain
3. Copy the DNS records Vercel shows you into your registrar's DNS settings
4. Wait for it to verify (a few minutes to a few hours)

> 💡 After adding a custom domain, update the URLs in `index.html`,
> `src/components/SEO.jsx`, `public/sitemap.xml` and `public/robots.txt`
> from `ajwealthsolutions.vercel.app` to your real domain, then push again.

---

## STEP 4 — SEO setup (get found on Google)

1. **Google Search Console** → https://search.google.com/search-console
   - Add your site URL → verify (Vercel/Netlify make this easy)
   - Submit your sitemap: `https://YOUR-DOMAIN/sitemap.xml`
2. **Google Business Profile** → https://www.google.com/business
   - Create a free listing for "AJ Wealth Solutions" with your phone, area & hours.
   - This is the **single most powerful** thing for local SEO ("mutual fund distributor near me").
3. The site already includes: title/description tags, Open Graph (nice WhatsApp/FB previews),
   local-business structured data, mobile optimization and fast loading.

**Keywords already targeted:** Mutual Fund Distributor, SIP Investment, Wealth Planning,
Financial Planning, Retirement Planning (+ "Pune" for local reach).

---

## Backend alternatives (if you outgrow Formspree's 50/month)

| Option            | Best for                          | Notes |
|-------------------|-----------------------------------|-------|
| **Formspree**     | Simplest, email leads (default)   | No code. Free 50/mo. |
| **Google Sheets** | Leads straight into a spreadsheet | Use a free "Sheet Monkey" or Apps Script endpoint; swap the URL in `site.js`. |
| **Supabase**      | A real free database, scalable    | Create a table + REST insert; needs a little setup. |

All three work by changing where the form POSTs — only `EnquiryForm.jsx` / `site.js` need edits.

---

## Troubleshooting

- **Page refresh shows 404 on /services:** make sure `vercel.json` (Vercel) or
  `public/_redirects` (Netlify) was uploaded. Both are included here.
- **Form not sending:** confirm you replaced `formspreeEndpoint` in `src/data/site.js`
  and verified your Formspree email.
- **Logo not showing:** ensure `public/logo.jpg` exists (it's included).
