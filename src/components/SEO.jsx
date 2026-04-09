import { Helmet } from 'react-helmet-async'
import { FIRM, PRACTICE_AREAS } from '../data/firm'

const SITE_URL = 'https://summitlawyers.vercel.app'

const LEGAL_SERVICE_LD = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: FIRM.name,
  alternateName: FIRM.shortName,
  url: SITE_URL,
  telephone: FIRM.phone,
  faxNumber: FIRM.fax,
  email: FIRM.email,
  image: `${SITE_URL}/office.webp`,
  priceRange: '$$',
  foundingDate: '1981',
  address: {
    '@type': 'PostalAddress',
    streetAddress: FIRM.address.street,
    addressLocality: FIRM.address.city,
    addressRegion: 'NJ',
    postalCode: '07901',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Union County, NJ' },
    { '@type': 'AdministrativeArea', name: 'Morris County, NJ' },
    { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
    { '@type': 'AdministrativeArea', name: 'Somerset County, NJ' },
    { '@type': 'State', name: 'New Jersey' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
    opens: '09:00',
    closes: '17:00',
  },
  knowsAbout: PRACTICE_AREAS.map(p => p.name),
}

export default function SEO({ title, description, path = '', jsonLd }) {
  const fullTitle = title ? `${title} — ${FIRM.shortName}` : `${FIRM.name} — Counselors at Law`
  const desc = description || `${FIRM.name}. Summit, New Jersey law firm established 1981. Personal Injury, Estate Planning, Real Estate, Family Law, and more.`
  const canonical = `${SITE_URL}${path}`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <link rel="canonical" href={canonical} />
      {path === '/' && (
        <script type="application/ld+json">{JSON.stringify(LEGAL_SERVICE_LD)}</script>
      )}
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  )
}
