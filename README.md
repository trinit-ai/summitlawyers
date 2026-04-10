# Ventura, Miesowitz & Keough, P.C.

Website for Ventura, Miesowitz & Keough, P.C. — Counselors at Law, Summit, New Jersey. Established 1981.

**Live:** [summitlawyers.vercel.app](https://summitlawyers.vercel.app)

## Stack

- Vite + React 19 + React Router v7
- Lenis smooth scroll
- react-helmet-async (SEO per route)
- lucide-react (icons)
- Vitest (43 tests)

## Routes

| Route | Page |
|---|---|
| `/` | Home — hero, intro, practice grid, attorneys, CTA |
| `/practice` | Practice areas index with intro hero |
| `/practice/:slug` | 14 practice area detail pages |
| `/attorneys` | Attorneys index with intro hero |
| `/attorneys/:slug` | 8 attorney bio pages |
| `/contact` | Office photo, contact form, Google Map |
| `/legal/:slug` | Privacy, Disclaimer, Attorney Advertising |
| `*` | 404 |

## Data

All firm content lives in `src/data/firm.js` — attorneys, practice areas, detail copy, testimonials. Pages read from this file; no CMS.

## Features

- Contact form with modal (Formspree-ready via `VITE_FORM_ENDPOINT` env var)
- Sidebar contact forms on practice + attorney pages
- Scroll reveal animations
- Route fade transitions + image preloading
- JSON-LD structured data (LegalService + Attorney schemas)
- sitemap.xml + robots.txt (auto-generated on build)
- Security headers (CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy)
- Error boundary
- Mobile hamburger menu
- Per-attorney headshot crop overrides via `data-slug` CSS

## Scripts

```bash
npm run dev          # local dev server
npm run build        # generate sitemap + production build
npm test             # run vitest (43 tests)
npm run test:watch   # vitest in watch mode
```

## Deploy

Hosted on Vercel. SPA rewrites configured in `vercel.json`. Push to `main` to deploy.

## Template

This site's design was extracted into a reusable template: [trinit-ai/esquire-majesty](https://github.com/trinit-ai/esquire-majesty)
