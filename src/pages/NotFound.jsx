import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ClosingCard from '../components/ClosingCard'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" path="/404" />
      <section className="hero" style={{ padding: '120px 72px 120px' }}>
        <div className="hero-bg"></div>
        <div className="hero-eyebrow">
          <span></span>
          <em>Error 404</em>
          <span></span>
        </div>
        <div className="hero-name" style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}>
          Page Not Found
        </div>
        <div className="hero-pc" style={{ marginBottom: 28 }}>
          The page you are looking for does not exist
        </div>
        <div className="hero-divider"><span></span><i></i><span></span></div>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, maxWidth: 520, textAlign: 'center', lineHeight: 1.8, marginBottom: 36 }}>
          The page may have been moved, renamed, or no longer exists. Please use the navigation above, or return to the homepage to find what you are looking for.
        </p>
        <div style={{ display: 'flex', gap: 14 }}>
          <Link to="/" className="nav-cta" style={{ borderRadius: 0 }}>Return Home ↗</Link>
          <Link to="/contact" className="nav-cta" style={{ borderRadius: 0 }}>Contact Us ↗</Link>
        </div>
      </section>
      <div className="detail-content" style={{ borderRight: 'none' }}>
        <ClosingCard />
      </div>
    </>
  )
}
