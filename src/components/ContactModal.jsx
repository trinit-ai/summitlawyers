import { useEffect } from 'react'
import ContactForm from './ContactForm'

export default function ContactModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
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
          <p>Tell us briefly about your matter — we'll be in touch shortly. There is no charge for an initial consultation.</p>
        </div>
        <ContactForm compact />
      </div>
    </div>
  )
}
