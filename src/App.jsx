import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { Nav, Footer, ScrollToTop } from './components/Layout'
import Home from './pages/Home'
import Attorneys from './pages/Attorneys'
import AttorneyDetail from './pages/AttorneyDetail'
import Practice from './pages/Practice'
import PracticeDetail from './pages/PracticeDetail'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

export default function App() {
  useSmoothScroll()
  useScrollReveal()
  return (
    <>
      <ScrollToTop />
      <Nav />
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
      <Footer />
    </>
  )
}
