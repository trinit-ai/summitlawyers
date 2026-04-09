import { NavLink, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FIRM } from '../data/firm'
import ContactModal from './ContactModal'
import { getLenis } from '../hooks/useSmoothScroll'

export function Nav() {
  const [open, setOpen] = useState(false)
  const [modal, setModal] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); setModal(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-logo">{FIRM.shortName}</Link>
        <ul className="nav-links">
          <li><NavLink to="/" end>The Firm</NavLink></li>
          <li><NavLink to="/practice">Practice Areas</NavLink></li>
          <li><NavLink to="/attorneys">Attorneys</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="nav-actions">
          <a href={FIRM.phoneHref} className="nav-phone">{FIRM.phone}</a>
          <button className="nav-cta-btn" onClick={() => setModal(true)}>Free Consultation ↗</button>
        </div>
        <button
          className={`nav-burger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
      {open && (
        <div className="mobile-menu">
          <NavLink to="/" end>The Firm</NavLink>
          <NavLink to="/practice">Practice Areas</NavLink>
          <NavLink to="/attorneys">Attorneys</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <a href={FIRM.phoneHref} className="mobile-menu-cta">Call {FIRM.phone}</a>
          <button className="mobile-menu-cta" style={{ marginTop: 12 }} onClick={() => { setOpen(false); setModal(true) }}>Free Consultation</button>
        </div>
      )}
      <ContactModal open={modal} onClose={() => setModal(false)} />
    </>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer-logo">{FIRM.name}</div>
        <ul className="footer-address">
          <li>{FIRM.address.street}</li>
          <li>{FIRM.address.city}, {FIRM.address.state} {FIRM.address.zip}</li>
          <li><a href={FIRM.phoneHref}>{FIRM.phone}</a> <span>Tel.</span></li>
          <li>{FIRM.fax} <span>Fax.</span></li>
        </ul>
      </div>
      <div className="footer-right">
        <div className="footer-links">
          <Link to="/legal/privacy">Privacy Policy</Link>
          <Link to="/legal/disclaimer">Disclaimer</Link>
          <Link to="/legal/advertising">Attorney Advertising</Link>
        </div>
        <div className="footer-copy">© {new Date().getFullYear()} {FIRM.name} All Rights Reserved.</div>
      </div>
      <div className="footer-disclaimer">
        Attorney Advertising. This website is designed for general information only. The information presented at this site should not be construed to be formal legal advice nor the formation of a lawyer/client relationship. Prior results do not guarantee a similar outcome.
      </div>
    </footer>
  )
}

export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export function Breadcrumb({ trail }) {
  return (
    <div className="breadcrumb">
      {trail.map((item, i) => {
        const last = i === trail.length - 1
        return (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {i > 0 && <span className="breadcrumb-sep">/</span>}
            {last
              ? <span className="breadcrumb-current">{item.label}</span>
              : <Link to={item.to}>{item.label}</Link>}
          </span>
        )
      })}
    </div>
  )
}
