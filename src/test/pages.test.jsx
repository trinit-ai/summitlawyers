import { describe, it, expect } from 'vitest'
import { Routes, Route } from 'react-router-dom'
import { renderWithProviders } from './test-utils'
import { PRACTICE_AREAS, ATTORNEYS } from '../data/firm'
import Home from '../pages/Home'
import Attorneys from '../pages/Attorneys'
import AttorneyDetail from '../pages/AttorneyDetail'
import Practice from '../pages/Practice'
import PracticeDetail from '../pages/PracticeDetail'
import Contact from '../pages/Contact'
import Legal from '../pages/Legal'
import NotFound from '../pages/NotFound'

const routedApp = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/attorneys" element={<Attorneys />} />
    <Route path="/attorneys/:slug" element={<AttorneyDetail />} />
    <Route path="/practice" element={<Practice />} />
    <Route path="/practice/:slug" element={<PracticeDetail />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/legal/:slug" element={<Legal />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

describe('page smoke tests', () => {
  it('home renders', () => {
    const { container } = renderWithProviders(routedApp, { route: '/' })
    expect(container.textContent).toMatch(/Counselors at Law/i)
  })

  it('attorneys index renders', () => {
    const { container } = renderWithProviders(routedApp, { route: '/attorneys' })
    expect(container.textContent).toMatch(/Partners/i)
    expect(container.textContent).toMatch(/Attorneys & Counsel/i)
  })

  it('practice index renders', () => {
    const { container } = renderWithProviders(routedApp, { route: '/practice' })
    expect(container.textContent).toMatch(/Areas of Practice/i)
  })

  it('contact page renders form', () => {
    const { container } = renderWithProviders(routedApp, { route: '/contact' })
    expect(container.textContent).toMatch(/Free Consultation|Schedule|consultation/i)
  })

  it('404 page renders for unknown route', () => {
    const { container } = renderWithProviders(routedApp, { route: '/this-does-not-exist' })
    expect(container.textContent).toMatch(/Not Found|404/i)
  })

  it.each(PRACTICE_AREAS.map(p => [p.slug, p.name]))(
    'practice page /%s renders',
    (slug, name) => {
      const { container } = renderWithProviders(routedApp, { route: `/practice/${slug}` })
      expect(container.textContent).toContain(name)
    },
  )

  it.each(ATTORNEYS.map(a => [a.slug, a.name]))(
    'attorney bio /%s renders',
    (slug, name) => {
      const { container } = renderWithProviders(routedApp, { route: `/attorneys/${slug}` })
      expect(container.textContent).toContain(name)
    },
  )

  it.each([['privacy','Privacy Policy'],['disclaimer','Disclaimer'],['advertising','Attorney Advertising']])(
    'legal page /legal/%s renders',
    (slug, title) => {
      const { container } = renderWithProviders(routedApp, { route: `/legal/${slug}` })
      expect(container.textContent).toContain(title)
    },
  )
})
