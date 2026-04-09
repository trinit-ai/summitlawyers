import { Link } from 'react-router-dom'
import { Breadcrumb } from '../components/Layout'
import { PRACTICE_AREAS } from '../data/firm'

export default function Practice() {
  return (
    <>
      <Breadcrumb trail={[{ to: '/', label: 'Home' }, { label: 'Practice Areas' }]} />
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
