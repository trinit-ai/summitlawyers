import { useParams, Link, Navigate } from 'react-router-dom'
import { Breadcrumb } from '../components/Layout'
import ClosingCard from '../components/ClosingCard'
import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'
import { FIRM, ATTORNEYS, getAttorney, getPracticeArea } from '../data/firm'

export default function AttorneyDetail() {
  const { slug } = useParams()
  const attorney = getAttorney(slug)
  if (!attorney) return <Navigate to="/attorneys" replace />

  const others = ATTORNEYS.filter(a => a.tier === attorney.tier && a.slug !== attorney.slug).slice(0, 4)
  const practices = (attorney.practiceSlugs || []).map(getPracticeArea).filter(Boolean)

  return (
    <>
      <SEO
        path={`/attorneys/${attorney.slug}`}
        title={attorney.name}
        description={`${attorney.name}, ${attorney.position || attorney.role} at Ventura, Miesowitz & Keough, P.C. in Summit, NJ. ${attorney.bio?.[0]?.slice(0, 140) || ''}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Attorney',
          name: attorney.name,
          jobTitle: attorney.position || attorney.role,
          email: attorney.email,
          image: `https://summitlawyers.vercel.app/attorneys/${attorney.slug}.webp`,
          worksFor: {
            '@type': 'LegalService',
            name: 'Ventura, Miesowitz & Keough, P.C.',
            url: 'https://summitlawyers.vercel.app',
          },
        }}
      />
      <Breadcrumb trail={[
        { to: '/', label: 'Home' },
        { to: '/attorneys', label: attorney.tier === 'partner' ? 'Partners' : 'Attorneys & Counsel' },
        { label: attorney.name },
      ]} />

      <div className="bio-hero">
        <div className="bio-hero-bg"></div>
        <div className="bio-photo-wrap">
          <div className="bio-photo"><img src={`/attorneys/${attorney.slug}.webp`} alt={attorney.name} data-slug={attorney.slug} /></div>
        </div>
        <div className="bio-hero-text">
          {attorney.department && <div className="bio-hero-dept">{attorney.department}</div>}
          <div className="bio-hero-name">{attorney.name}</div>
          <div className="bio-hero-rule"></div>
          <div className="bio-meta">
            {attorney.position && (
              <div className="bio-meta-item">
                <span className="bio-meta-label">Position</span>
                <span className="bio-meta-val">{attorney.position}</span>
              </div>
            )}
            {attorney.education && (
              <div className="bio-meta-item">
                <span className="bio-meta-label">Education</span>
                <span className="bio-meta-val">{attorney.education.map((e, i) => <span key={i}>{e}{i < attorney.education.length - 1 && <br />}</span>)}</span>
              </div>
            )}
            {attorney.email && (
              <div className="bio-meta-item">
                <span className="bio-meta-label">Email</span>
                <span className="bio-meta-val"><a href={`mailto:${attorney.email}`}>{attorney.email}</a></span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="detail-main">
        <div className="detail-content">
          <div className="section-label">Biography</div>
          {(attorney.bio || ['Biography forthcoming.']).map((p, i) => <p key={i}>{p}</p>)}

          {attorney.bar && (
            <div className="bar-memberships">
              <div className="section-label">Bar Memberships &amp; Affiliations</div>
              <ul className="bar-list">
                {attorney.bar.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
          )}
          {attorney.testimonials && (
            <div className="bar-memberships">
              <div className="section-label">Client Reviews</div>
              <div className="testimonials">
                {attorney.testimonials.map((t, i) => (
                  <div key={i} className="testimonial">
                    <div className="testimonial-stars">{'★'.repeat(t.rating)}</div>
                    <p className="testimonial-body">{t.body}</p>
                    <div className="testimonial-meta">— {t.author}, {t.date}</div>
                  </div>
                ))}
              </div>
              {attorney.testimonialsSource && (
                <p style={{ fontSize: 11, color: 'rgba(11,21,37,0.4)', marginTop: 16 }}>
                  Additional reviews available on{' '}
                  <a href={attorney.testimonialsSource} target="_blank" rel="noreferrer" style={{ color: 'var(--navy-mid)', textDecoration: 'underline' }}>Avvo ↗</a>.
                </p>
              )}
            </div>
          )}
          <ClosingCard />
        </div>

        <aside className="sidebar">
          <div className="sidebar-block">
            <div className="sidebar-label">Contact</div>
            {attorney.email && (
              <div className="sidebar-contact-item">
                <div className="sidebar-contact-label">Direct</div>
                <div className="sidebar-contact-val"><a href={`mailto:${attorney.email}`}>{attorney.email}</a></div>
              </div>
            )}
            <div className="sidebar-contact-item">
              <div className="sidebar-contact-label">Telephone</div>
              <div className="sidebar-contact-val"><a href={FIRM.phoneHref}>{FIRM.phone}</a></div>
            </div>
            <div className="sidebar-contact-item" style={{ marginBottom: 24 }}>
              <div className="sidebar-contact-label">Office</div>
              <div className="sidebar-contact-val">{FIRM.address.street}<br />{FIRM.address.city}, NJ 07901</div>
            </div>
            <Link to="/contact" className="btn-full">Request a Consultation &nbsp;↗</Link>
            <a href={FIRM.phoneHref} className="btn-full-outline">Call {FIRM.phone}</a>
          </div>

          {practices.length > 0 && (
            <div className="sidebar-block">
              <div className="sidebar-label">Practice Areas</div>
              <div className="practice-links">
                {practices.map(p => (
                  <Link key={p.slug} to={`/practice/${p.slug}`} className="practice-link">
                    {p.name} <span className="practice-link-arrow">↗</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="sidebar-block">
            <div className="sidebar-label">Send a Message</div>
            <div className="sidebar-form">
              <ContactForm compact subject={`Inquiry for ${attorney.name}`} />
            </div>
          </div>

          <div className="sidebar-block">
            <div className="sidebar-label">Office Hours</div>
            <div style={{ fontSize: 13, color: 'rgba(11,21,37,0.6)', lineHeight: 1.8 }}>
              Monday – Friday<br />9:00 a.m. – 5:00 p.m.<br />
              <span style={{ fontSize: 11, color: 'rgba(11,21,37,0.4)' }}>Evening appointments available by arrangement.</span>
            </div>
          </div>
        </aside>
      </div>

      {others.length > 0 && (
        <section className="related">
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <span className="section-header-label">{attorney.tier === 'partner' ? 'Other Partners' : 'Other Attorneys'}</span>
            <div className="section-header-rule"></div>
          </div>
          <div className="related-grid">
            {others.map(o => (
              <Link key={o.slug} to={`/attorneys/${o.slug}`} className="related-card">
                <div className="related-monogram"><img src={`/attorneys/${o.slug}.webp`} alt={o.name} data-slug={o.slug} /></div>
                <div className="related-name">{o.name}</div>
                <div className="related-role">{o.role}</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
