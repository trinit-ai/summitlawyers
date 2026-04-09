import { Link } from 'react-router-dom'
import { Breadcrumb } from '../components/Layout'
import SEO from '../components/SEO'
import { ATTORNEYS, FIRM } from '../data/firm'

export default function Attorneys() {
  const partners = ATTORNEYS.filter(a => a.tier === 'partner')
  const counsel = ATTORNEYS.filter(a => a.tier === 'counsel')

  return (
    <>
      <SEO path="/attorneys" title="Our Attorneys" description="Meet the attorneys of Ventura, Miesowitz & Keough, P.C. — partners and counsel serving Summit, NJ and the surrounding region since 1981." />
      <Breadcrumb trail={[{ to: '/', label: 'Home' }, { label: 'Attorneys' }]} />
      <div className="practice-hero">
        <div className="practice-hero-bg"></div>
        <div className="practice-hero-num">Our Attorneys</div>
        <div className="practice-hero-title">Principals who<br />handle your matter.</div>
        <div className="practice-hero-rule"></div>
        <div className="practice-hero-lead">
          Every case at the firm is handled directly by an experienced attorney — not delegated, not handed off, not assigned to a junior associate. You will know who is responsible for your matter from the first call, and that person will remain responsible from start to finish.
        </div>
      </div>
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
                <div className="atty-monogram"><img src={`/attorneys/${a.slug}.webp`} alt={a.name} data-slug={a.slug} width="44" height="44" loading="lazy" /></div>
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
                <div className="atty-monogram"><img src={`/attorneys/${a.slug}.webp`} alt={a.name} data-slug={a.slug} width="44" height="44" loading="lazy" /></div>
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
