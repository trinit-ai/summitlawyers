// Generates public/sitemap.xml from src/data/firm.js routes
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SITE = 'https://summitlawyers.vercel.app'

// Mirror the routes — kept inline so this script has zero deps on src/
const PRACTICE_SLUGS = [
  'personal-injury','estate-planning','trust-estate-administration','estate-litigation',
  'mediation-arbitration','business-law','commercial-real-estate','residential-real-estate',
  'property-tax-appeals','matrimonial-family','elder-law','workers-compensation',
  'social-security-disability','criminal-municipal',
]
const ATTORNEY_SLUGS = [
  'michael-ventura','john-miesowitz','daniel-keough','sean-rankin',
  'maria-blancato','august-ventura','laurie-levine','james-vigliotti',
]
const LEGAL_SLUGS = ['privacy','disclaimer','advertising']

const routes = [
  '/', '/practice', '/attorneys', '/contact',
  ...PRACTICE_SLUGS.map(s => `/practice/${s}`),
  ...ATTORNEY_SLUGS.map(s => `/attorneys/${s}`),
  ...LEGAL_SLUGS.map(s => `/legal/${s}`),
]

const today = new Date().toISOString().slice(0, 10)
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${SITE}${r}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${r === '/' ? '1.0' : '0.7'}</priority>
  </url>`).join('\n')}
</urlset>
`

fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), xml)
console.log(`✓ sitemap.xml — ${routes.length} routes`)
