import { Link } from 'react-router-dom'
import { Breadcrumb } from '../components/Layout'
import { ATTORNEYS, FIRM } from '../data/firm'

export default function Attorneys() {
  const partners = ATTORNEYS.filter(a => a.tier === 'partner')
  const counsel = ATTORNEYS.filter(a => a.tier === 'counsel')

  return (
    <>
      <Breadcrumb trail={[{ to: '/', label: 'Home' }, { label: 'Attorneys' }]} />
      <section className="attorneys" style={{ paddingTop: 68 }}>
        <div className="section-header">
          <span className="section-header-label" style={{ color: 'var(--gold)' }}>Our Attorneys</span>
          <div className="section-header-rule light"></div>
        </div>
        <div className="atty-cols">
          <div className="atty-col">
            <div className="atty-col-label">Partners</div>
            {partners.map(a => (
              <Link key={a.slug} to={`/attorneys/${a.slug}`} className="atty-item">
                <div className="atty-monogram"><img src={`/attorneys/${a.slug}.webp`} alt={a.name} data-slug={a.slug} /></div>
                <div>
                  <div className="atty-name">{a.name}</div>
                  <div className="atty-role">{a.role}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="atty-col">
            <div className="atty-col-label">Attorneys &amp; Counsel</div>
            {counsel.map(a => (
              <Link key={a.slug} to={`/attorneys/${a.slug}`} className="atty-item">
                <div className="atty-monogram"><img src={`/attorneys/${a.slug}.webp`} alt={a.name} data-slug={a.slug} /></div>
                <div>
                  <div className="atty-name">{a.name}</div>
                  <div className="atty-role">{a.role}</div>
                </div>
              </Link>
            ))}
            <div className="atty-item" style={{ borderBottom: 'none', paddingBottom: 0 }}>
              <div className="atty-callout">
                <div className="atty-callout-label">Free Consultations Available</div>
                <div className="atty-callout-num">{FIRM.phone}</div>
                <div className="atty-callout-note">Evening &amp; weekend appointments by arrangement</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
