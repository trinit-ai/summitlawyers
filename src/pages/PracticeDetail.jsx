import { useParams, Link, Navigate } from 'react-router-dom'
import { Breadcrumb } from '../components/Layout'
import { FIRM, PRACTICE_AREAS, PRACTICE_DETAIL, getPracticeArea, getAttorney } from '../data/firm'

export default function PracticeDetail() {
  const { slug } = useParams()
  const area = getPracticeArea(slug)
  if (!area) return <Navigate to="/practice" replace />

  const detail = PRACTICE_DETAIL[slug] || {}
  const attorneys = (detail.attorneyIds || []).map(getAttorney).filter(Boolean)

  return (
    <>
      <Breadcrumb trail={[
        { to: '/', label: 'Home' },
        { to: '/practice', label: 'Practice Areas' },
        { label: area.name },
      ]} />

      <div className="practice-hero">
        <div className="practice-hero-bg"></div>
        <div className="practice-hero-index">{area.numeral}</div>
        <div className="practice-hero-num">Practice Area &nbsp;·&nbsp; {area.numeral}</div>
        <div className="practice-hero-title">{area.name}</div>
        <div className="practice-hero-rule"></div>
        <div className="practice-hero-lead">{detail.lead || area.desc}</div>
      </div>

      <div className="detail-main">
        <div className="detail-content">
          <div className="section-label">Overview</div>
          {(detail.overview || [`${area.name} — detailed overview forthcoming.`]).map((p, i) => <p key={i}>{p}</p>)}

          {detail.caseTypes && (
            <div className="case-types">
              <div className="section-label">Case Types We Handle</div>
              <div className="case-grid">
                {detail.caseTypes.map(c => <div key={c} className="case-item">{c}</div>)}
              </div>
            </div>
          )}

          {detail.closing && <p>{detail.closing}</p>}

          {detail.process && (
            <div className="process">
              <div className="section-label">Our Process</div>
              <div className="process-steps">
                {detail.process.map((step, i) => (
                  <div key={i} className="process-step">
                    <div className="step-num">{i + 1}</div>
                    <div>
                      <div className="step-title">{step.title}</div>
                      <div className="step-desc">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="sidebar">
          <div className="sidebar-block">
            <div className="sidebar-label">Free Consultation</div>
            <div className="sidebar-contact-item">
              <div className="sidebar-contact-label">Telephone</div>
              <div className="sidebar-contact-val"><a href={FIRM.phoneHref}>{FIRM.phone}</a></div>
            </div>
            <div className="sidebar-contact-item" style={{ marginBottom: 24 }}>
              <div className="sidebar-contact-label">Note</div>
              <div style={{ fontSize: 12, color: 'rgba(11,21,37,0.45)', lineHeight: 1.7 }}>
                Home and hospital visits available for clients unable to travel.
              </div>
            </div>
            <Link to="/contact" className="btn-full">Request a Consultation &nbsp;↗</Link>
            <a href={FIRM.phoneHref} className="btn-full-outline">Call {FIRM.phone}</a>
          </div>

          {attorneys.length > 0 && (
            <div className="sidebar-block">
              <div className="sidebar-label">Attorneys in This Practice</div>
              {attorneys.map(a => (
                <Link key={a.slug} to={`/attorneys/${a.slug}`} className="atty-mini">
                  <div className="atty-mini-mono">{a.initials}</div>
                  <div>
                    <div className="atty-mini-name">{a.name}</div>
                    <div className="atty-mini-role">{a.role}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="sidebar-block">
            <div className="sidebar-label">Service Area</div>
            <div style={{ fontSize: 12.5, color: 'rgba(11,21,37,0.5)', lineHeight: 1.85 }}>
              Summit · Westfield · Chatham · Madison · Millburn · Livingston · West Orange · Maplewood · Elizabeth · Cranford and throughout Union, Morris, Essex, Somerset, Middlesex, and Monmouth Counties.
            </div>
          </div>
        </aside>
      </div>

      <section className="all-practices">
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span className="section-header-label">All Practice Areas</span>
          <div className="section-header-rule"></div>
        </div>
        <div className="all-practices-grid">
          {PRACTICE_AREAS.map(p => (
            <Link key={p.slug} to={`/practice/${p.slug}`} className={`ap-item${p.slug === slug ? ' current' : ''}`}>
              <span className="ap-name">{p.name}</span>
              <span className="ap-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
