import { NavLink, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { FIRM } from '../data/firm'

export function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">{FIRM.shortName}</Link>
      <ul className="nav-links">
        <li><NavLink to="/" end>The Firm</NavLink></li>
        <li><NavLink to="/practice">Practice Areas</NavLink></li>
        <li><NavLink to="/attorneys">Attorneys</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <a href={FIRM.phoneHref} className="nav-cta">{FIRM.phone}</a>
    </nav>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer-logo">{FIRM.name}</div>
        <div className="footer-address">
          {FIRM.address.street} &nbsp;·&nbsp; {FIRM.address.city}, {FIRM.address.state} {FIRM.address.zip}<br />
          {FIRM.phone} Tel. &nbsp;·&nbsp; {FIRM.fax} Fax.
        </div>
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
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
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
