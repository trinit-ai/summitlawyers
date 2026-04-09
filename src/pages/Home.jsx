import { Link } from 'react-router-dom'
import { FIRM, PRACTICE_AREAS, ATTORNEYS, TOWNS, COUNTIES } from '../data/firm'

export default function Home() {
  const partners = ATTORNEYS.filter(a => a.tier === 'partner')
  const counsel = ATTORNEYS.filter(a => a.tier === 'counsel')

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-seal">
          <div className="hero-seal-inner">
            <span className="hero-seal-glyph">VMK</span>
          </div>
        </div>
        <div className="hero-eyebrow">
          <span></span>
          <em>Counselors at Law</em>
          <span></span>
        </div>
        <div className="hero-name">Ventura, Miesowitz<br />&amp; Keough</div>
        <div className="hero-pc">P.C.</div>
        <div className="hero-divider"><span></span><i></i><span></span></div>
        <div className="hero-tagline">
          Personal Injury &nbsp;·&nbsp; Commercial Litigation &nbsp;·&nbsp; Estate Planning &nbsp;·&nbsp; Real Estate &nbsp;·&nbsp; Family Law
        </div>
        <div className="hero-est">Est. {FIRM.established}</div>
      </section>

      {/* BAND */}
      <div className="band">
        <span className="band-item">Summit, New Jersey</span>
        <span className="band-dot"></span>
        <span className="band-item">Union County</span>
        <span className="band-dot"></span>
        <span className="band-item">Morris County</span>
        <span className="band-dot"></span>
        <span className="band-item">Essex County</span>
        <span className="band-dot"></span>
        <span className="band-item">Statewide Practice</span>
      </div>

      {/* INTRO */}
      <section className="intro" id="about">
        <div className="intro-left">
          <div className="eyebrow">The Firm</div>
          <h2>Large firm expertise.<br />Small firm service<br />and care.</h2>
          <p>{FIRM.name} is comprised of highly experienced attorneys who have successfully represented both individual and corporate clients across a broad spectrum of legal matters. Founded by Michael Ventura in 1981, the firm has grown steadily on a foundation of personal attention and principled counsel.</p>
        </div>
        <div className="intro-right">
          <p>The hallmark of the firm's success is its ability to provide excellent legal representation in both a personalized and cost-effective manner. This is primarily due to the firm's management philosophy and structure, in which the firm's principals deal directly with its clients' legal matters — at every stage, without exception.</p>
          <Link to="/contact" className="btn">Schedule a Free Consultation &nbsp;↗</Link>
        </div>
      </section>

      {/* PRACTICE */}
      <section className="practice" id="practice">
        <div className="section-header">
          <span className="section-header-label">Areas of Practice</span>
          <div className="section-header-rule"></div>
          <span className="section-header-label">Fourteen Disciplines</span>
        </div>
        <div className="practice-grid">
          {PRACTICE_AREAS.map(p => (
            <Link key={p.slug} to={`/practice/${p.slug}`} className="pi">
              <span className="pi-num">{p.numeral}</span>
              <div>
                <div className="pi-name">{p.name}</div>
                <div className="pi-desc">{p.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ATTORNEYS */}
      <section className="attorneys" id="attorneys">
        <div className="section-header">
          <span className="section-header-label" style={{ color: 'var(--gold)' }}>Our Attorneys</span>
          <div className="section-header-rule light"></div>
        </div>
        <div className="atty-cols">
          <div className="atty-col">
            <div className="atty-col-label">Partners</div>
            {partners.map(a => (
              <Link key={a.slug} to={`/attorneys/${a.slug}`} className="atty-item">
                <div className="atty-monogram">{a.initials}</div>
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
                <div className="atty-monogram">{a.initials}</div>
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

      {/* COMMITMENT */}
      <section className="commitment">
        <div className="commitment-left">
          <div className="eyebrow">A Commitment to Excellence</div>
          <h3>Principal-led representation, at every stage of your matter.</h3>
          <p>The firm's management philosophy is straightforward: clients work directly with the partners who are responsible for their cases. There is no delegation to junior associates on substantive matters, no hand-offs, and no surprises. You will always know who is handling your case — and why.</p>
          <p>We also offer home and hospital visits for clients who are unable to travel, and evening appointments are available by arrangement.</p>
        </div>
        <div className="commitment-right">
          <div className="eyebrow">Serving Communities Across New Jersey</div>
          <div className="counties">
            {TOWNS.map(t => <span key={t} className="county">{t}</span>)}
          </div>
          <p>{COUNTIES.join(' · ')} — and throughout the State of New Jersey.</p>
          <p>Our office is conveniently accessible via Routes 24, 78, and 287 and the Garden State Parkway.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="cta-left">
          <div className="eyebrow">Begin the Conversation</div>
          <h2>Your first consultation<br />is always without charge.</h2>
          <p>We believe the attorney-client relationship begins with listening. Tell us about your matter — we'll tell you honestly what we can do and what to expect. We are available evenings and weekends by appointment, and can come to you if you cannot come to us.</p>
          <a href={FIRM.phoneHref} className="btn-inv">Call {FIRM.phone} &nbsp;↗</a>
        </div>
        <div className="cta-right">
          <div className="contact-item">
            <div className="ci-label">Address</div>
            <div className="ci-val">{FIRM.address.street}<br />{FIRM.address.city}, {FIRM.address.state} 07901</div>
          </div>
          <div className="contact-item">
            <div className="ci-label">Telephone</div>
            <div className="ci-val"><a href={FIRM.phoneHref}>{FIRM.phone}</a></div>
          </div>
          <div className="contact-item">
            <div className="ci-label">Facsimile</div>
            <div className="ci-val">{FIRM.fax}</div>
          </div>
          <div className="contact-item">
            <div className="ci-label">Office Hours</div>
            <div className="ci-val">Monday – Friday<br />9:00 a.m. – 5:00 p.m.</div>
          </div>
          <div className="contact-item">
            <div className="ci-label">Evening Appointments</div>
            <div className="ci-val">Available by arrangement<br /><a href={FIRM.phoneHref}>{FIRM.phone}</a></div>
          </div>
        </div>
      </section>
    </>
  )
}
