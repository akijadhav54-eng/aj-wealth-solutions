# AJ Wealth Solutions — Website

The official website for **AJ Wealth Solutions**, an AMFI-registered Mutual Fund Distributor.
Built with **React + Vite + Tailwind CSS + Framer Motion**. 100% free to run and host.

> **Tagline:** Turning Dreams Into Disciplined Investments

---

## ✨ What's inside

- Premium dark-navy + gold fintech design (matches your logo)
- Fully mobile responsive
- Pages: **Home**, **Services**, **Contact**
- Hero with 3 CTAs, About, Services, Why Choose Us, Process Timeline, **interactive SIP Calculator**, Testimonials slider, FAQ accordion, Blog placeholder
- **Lead form** with validation + success popup (saves leads via free Formspree)
- WhatsApp + Call + Scroll-to-top floating buttons
- Sticky navigation, smooth scrolling, fade-in animations
- SEO meta tags, Open Graph, local-business schema, sitemap & robots.txt

---

## 🚀 Quick Start (run on your computer)

You need **Node.js** installed first → download the "LTS" version from https://nodejs.org

Then, in a terminal inside this folder:

```bash
npm install      # install everything (run once)
npm run dev      # start the site locally
```

Open the link it prints (usually **http://localhost:5173**). The site reloads automatically as you edit.

To make a production build:

```bash
npm run build    # output goes into the /dist folder
npm run preview  # preview that build locally
```

---

## 🗂️ Folder structure

```
aj-wealth/
├── public/                 # static files served as-is
│   ├── logo.jpg            # your logo (used everywhere)
│   ├── card.jpg            # your business card (reference)
│   ├── robots.txt          # SEO
│   └── sitemap.xml         # SEO
├── src/
│   ├── data/               # 👈 EDIT YOUR CONTENT HERE
│   │   ├── site.js         # contact info, links, Formspree endpoint
│   │   ├── services.js     # all services
│   │   ├── faqs.js         # FAQ questions/answers
│   │   └── testimonials.js # client reviews
│   ├── components/         # reusable UI pieces
│   ├── pages/              # Home, Services, Contact
│   ├── App.jsx             # routes + layout
│   ├── main.jsx            # app entry point
│   └── index.css           # global styles + colors helpers
├── index.html              # SEO meta tags + fonts
├── tailwind.config.js      # 🎨 brand colors & fonts
├── vercel.json             # Vercel routing config
└── package.json
```

---

## ✏️ How to edit content later (no coding needed for most)

Almost everything you'll change lives in **`src/data/`**. Edit a file, save, and the site updates.

### Change phone / email / address / WhatsApp / social links
Open **`src/data/site.js`** and edit the values. Example:

```js
phone: '+919766291265',
email: 'akijadhav54@gmail.com',
social: { instagram: 'https://instagram.com/yourhandle', ... },
```

### Add or edit a service
Open **`src/data/services.js`**, copy one `{ ... }` block, and edit the text.
For the icon, pick any name from https://lucide.dev/icons (e.g. `PiggyBank`).

> ⚠️ If you use a **brand-new** icon, also open `src/components/ServiceCard.jsx`,
> add it to the import line and to the `iconMap`. (The 9 common ones are already wired up.)

### Add an FAQ or testimonial
Edit **`src/data/faqs.js`** or **`src/data/testimonials.js`** — copy a block, change the text.

### Change brand colors or fonts
Open **`tailwind.config.js`** → edit the `navy` / `gold` colors or the `fontFamily`.
Change it in one place and the whole site re-themes.

### Update the enquiry form fields
Open **`src/components/EnquiryForm.jsx`**. The `goals` and `budgets` arrays at the top
control the dropdown options. To add a field, copy a `<Field>` block and add it to the
`initial` state object + the `validate()` function.

---

## 📨 Lead form setup (Formspree — free)

The form sends every lead to your email + a dashboard. No backend code needed.

1. Sign up free at **https://formspree.io**
2. Click **+ New Form**, name it "AJ Wealth Leads"
3. Copy the form endpoint — it looks like `https://formspree.io/f/abcdwxyz`
4. Open **`src/data/site.js`** and paste it into `formspreeEndpoint`
5. Submit a test from your site — confirm the email Formspree sends you

Free plan = 50 submissions/month. (See `DEPLOYMENT.md` for Google Sheets & Supabase alternatives.)

---

## 🌐 Deploy for free + GitHub guide

See **`DEPLOYMENT.md`** for full step-by-step instructions (GitHub upload, Vercel/Netlify,
custom domain, and SEO submission to Google).

---

## 🔧 Maintaining the site for free — checklist

- **Hosting:** Vercel/Netlify free tier is enough for a business site. Every time you push to GitHub, it redeploys automatically.
- **Leads:** Check Formspree dashboard + your email. Export leads to CSV anytime.
- **Updates:** Edit files in `src/data/`, commit to GitHub → site updates in ~1 minute.
- **Backups:** Your code lives safely on GitHub. Nothing to lose.
- **Cost:** ₹0/month (only a custom domain like `.com` is optional paid, ~₹800/year).

---

## 📋 Tech stack

| Purpose        | Tool                    | Free? |
|----------------|-------------------------|-------|
| Framework      | React + Vite            | ✅    |
| Styling        | Tailwind CSS            | ✅    |
| Animations     | Framer Motion           | ✅    |
| Icons          | Lucide React            | ✅    |
| Routing        | React Router            | ✅    |
| Leads/backend  | Formspree               | ✅    |
| Hosting        | Vercel / Netlify        | ✅    |
| Code storage   | GitHub                  | ✅    |
