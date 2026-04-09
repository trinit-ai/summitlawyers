// Generates public/og.png — 1200x630 social preview card
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <radialGradient id="g" cx="50%" cy="100%" r="80%">
      <stop offset="0%" stop-color="#1E3460" stop-opacity="0.55"/>
      <stop offset="70%" stop-color="#1E3460" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- bg -->
  <rect width="1200" height="630" fill="#0B1525"/>
  <rect width="1200" height="630" fill="url(#g)"/>

  <!-- top + bottom rules -->
  <rect x="0" y="0" width="1200" height="3" fill="#B8972A" opacity="0.4"/>
  <rect x="0" y="627" width="1200" height="3" fill="#B8972A" opacity="0.4"/>

  <!-- monogram seal -->
  <g transform="translate(600,170)">
    <circle r="58" fill="none" stroke="#B8972A" stroke-width="1.2" opacity="0.45"/>
    <circle r="44" fill="none" stroke="#B8972A" stroke-width="1" opacity="0.55"/>
    <text y="14" font-family="Georgia, 'Times New Roman', serif" font-size="28" font-style="italic" fill="#B8972A" text-anchor="middle" letter-spacing="2">VMK</text>
  </g>

  <!-- eyebrow rule + label -->
  <g transform="translate(600,275)">
    <line x1="-180" y1="0" x2="-50" y2="0" stroke="#B8972A" stroke-width="1" opacity="0.45"/>
    <line x1="50" y1="0" x2="180" y2="0" stroke="#B8972A" stroke-width="1" opacity="0.45"/>
    <text y="5" font-family="Helvetica, Arial, sans-serif" font-size="13" fill="#B8972A" text-anchor="middle" letter-spacing="3" opacity="0.85">COUNSELORS AT LAW</text>
  </g>

  <!-- name -->
  <text x="600" y="355" font-family="Georgia, 'Times New Roman', serif" font-size="58" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">Ventura, Miesowitz</text>
  <text x="600" y="420" font-family="Georgia, 'Times New Roman', serif" font-size="58" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">&amp; Keough, P.C.</text>

  <!-- diamond divider -->
  <g transform="translate(600,460)">
    <line x1="-40" y1="0" x2="-12" y2="0" stroke="#B8972A" stroke-width="1" opacity="0.5"/>
    <rect x="-3" y="-3" width="6" height="6" fill="#B8972A" opacity="0.7" transform="rotate(45)"/>
    <line x1="12" y1="0" x2="40" y2="0" stroke="#B8972A" stroke-width="1" opacity="0.5"/>
  </g>

  <!-- tagline -->
  <text x="600" y="510" font-family="Helvetica, Arial, sans-serif" font-size="15" fill="#D4AF5A" fill-opacity="0.55" text-anchor="middle" letter-spacing="3">PERSONAL INJURY  ·  ESTATE  ·  REAL ESTATE  ·  FAMILY LAW</text>

  <!-- est -->
  <text x="600" y="565" font-family="Georgia, 'Times New Roman', serif" font-size="13" font-style="italic" fill="#FFFFFF" fill-opacity="0.3" text-anchor="middle" letter-spacing="2">Summit, New Jersey  ·  Established 1981</text>
</svg>`

await sharp(Buffer.from(svg))
  .png({ quality: 95 })
  .toFile(path.join(__dirname, '..', 'public', 'og.png'))

console.log('✓ og.png — 1200×630')
