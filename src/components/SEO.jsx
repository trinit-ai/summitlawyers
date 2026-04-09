import { Helmet } from 'react-helmet-async'
import { FIRM } from '../data/firm'

export default function SEO({ title, description, path = '' }) {
  const fullTitle = title ? `${title} — ${FIRM.shortName}` : `${FIRM.name} — Counselors at Law`
  const desc = description || `${FIRM.name}. Summit, New Jersey law firm established 1981. Personal Injury, Estate Planning, Real Estate, Family Law, and more.`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      {path && <link rel="canonical" href={`https://summitlawyers.vercel.app${path}`} />}
    </Helmet>
  )
}
