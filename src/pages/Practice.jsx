import { Link } from 'react-router-dom'
import { Breadcrumb } from '../components/Layout'
import SEO from '../components/SEO'
import { PRACTICE_AREAS } from '../data/firm'

export default function Practice() {
  return (
    <>
      <SEO path="/practice" title="Practice Areas" description="Fourteen practice areas — Personal Injury, Estate Planning, Real Estate, Family Law, and more. Ventura, Miesowitz & Keough, P.C., Summit, NJ." />
      <Breadcrumb trail={[{ to: '/', label: 'Home' }, { label: 'Practice Areas' }]} />
      <div className="practice-hero">
        <div className="practice-hero-bg"></div>
        <div className="practice-hero-num">Areas of Practice</div>
        <div className="practice-hero-title">Fourteen disciplines.<br />One firm.</div>
        <div className="practice-hero-rule"></div>
        <div className="practice-hero-lead">
          From a complex personal injury matter to a routine real estate closing, our practice spans the full range of legal services that individuals, families, and closely-held businesses need over the course of a lifetime. Each discipline below is led by an experienced attorney — and, in every matter, the principal who handles your case is the principal you will work with from start to finish.
        </div>
      </div>
      <section className="practice">
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
    </>
  )
}
