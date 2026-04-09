import { useState } from 'react'
import { FIRM } from '../data/firm'

// Swap with your real Formspree endpoint (or any form-to-email service).
// Until set, the form falls back to opening the user's mail client.
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || ''

export default function ContactForm({ subject = '', compact = false }) {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot
    if (data.get('company')) return

    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      subject: subject || data.get('subject') || 'Website Inquiry',
      message: data.get('message'),
    }

    if (!FORM_ENDPOINT) {
      // Mailto fallback
      const body = `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\n\n${payload.message}`
      window.location.href = `mailto:${FIRM.email}?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(body)}`
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('sent')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError('Something went wrong. Please call us at ' + FIRM.phone + '.')
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-success">
        <div className="form-success-title">Thank you.</div>
        <div className="form-success-body">
          Your message has been received. A member of the firm will be in touch shortly.
          For urgent matters, please call <a href={FIRM.phoneHref}>{FIRM.phone}</a>.
        </div>
      </div>
    )
  }

  return (
    <form className={`contact-form${compact ? ' compact' : ''}`} onSubmit={handleSubmit} noValidate>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true" />

      <div className="form-row">
        <div className="form-field">
          <label>Name</label>
          <input type="text" name="name" required />
        </div>
        <div className="form-field">
          <label>Email</label>
          <input type="email" name="email" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label>Phone</label>
          <input type="tel" name="phone" />
        </div>
        {!subject && (
          <div className="form-field">
            <label>Matter</label>
            <input type="text" name="subject" placeholder="e.g. Personal Injury" />
          </div>
        )}
      </div>
      <div className="form-field">
        <label>How can we help?</label>
        <textarea name="message" rows={compact ? 4 : 6} required></textarea>
      </div>
      {error && <div className="form-error">{error}</div>}
      <button type="submit" className="form-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Inquiry ↗'}
      </button>
      <div className="form-disclaimer">
        Submitting this form does not create an attorney-client relationship. Please do not include confidential information.
      </div>
    </form>
  )
}
