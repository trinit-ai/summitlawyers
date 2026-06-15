import { useEffect } from 'react'
import ContactForm from './ContactForm'
import { getLenis } from '../hooks/useSmoothScroll'

export default function ContactModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const lenis = getLenis()
    if (lenis) lenis.stop()
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => {
      if (lenis) lenis.start()
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="modal-header">
          <div className="eyebrow" style={{ marginBottom: 12 }}>Free Consultation</div>
          <h2>Schedule a Consultation</h2>
        </div>
        <ContactForm compact />
      </div>
    </div>
  )
}
