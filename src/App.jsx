import { Routes, Route } from 'react-router-dom'
import { Nav, Footer, ScrollToTop } from './components/Layout'
import Home from './pages/Home'
import Attorneys from './pages/Attorneys'
import AttorneyDetail from './pages/AttorneyDetail'
import Practice from './pages/Practice'
import PracticeDetail from './pages/PracticeDetail'
import Contact from './pages/Contact'

export default function App() {
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
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}
