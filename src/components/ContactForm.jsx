import { useState } from 'react'
import { FIRM, PRACTICE_AREAS } from '../data/firm'

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || ''

const REFERRAL_SOURCES = [
  'Search Engine','Google Ads','Facebook','Instagram','Other Social Media',
  'Email','Newspaper','Word of Mouth','Other',
]

export default function ContactForm({ subject = '', compact = false }) {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('company')) return // honeypot

    if (!data.get('agree')) {
      setError('Please acknowledge the disclaimer to continue.')
      return
    }

    const payload = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      phone: data.get('phone'),
      service: subject || data.get('service') || 'General Inquiry',
      message: data.get('message'),
      referral: data.get('referral'),
    }

    if (!FORM_ENDPOINT) {
      const body = `Name: ${payload.firstName} ${payload.lastName}
Email: ${payload.email}
Phone: ${payload.phone}
Inquiring About: ${payload.service}
Heard About Us: ${payload.referral || '—'}

${payload.message}`
      window.location.href = `mailto:${FIRM.email}?subject=${encodeURIComponent('Website Inquiry — ' + payload.service)}&body=${encodeURIComponent(body)}`
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
      if (!res.ok) throw new Error('failed')
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
          <label>First Name *</label>
          <input type="text" name="firstName" required />
        </div>
        <div className="form-field">
          <label>Last Name *</label>
          <input type="text" name="lastName" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label>Email *</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-field">
          <label>Phone *</label>
          <input type="tel" name="phone" required />
        </div>
      </div>

      {!subject && (
        <div className="form-field">
          <label>Inquiring About</label>
          <select name="service" defaultValue="">
            <option value="" disabled>Choose a service…</option>
            {PRACTICE_AREAS.map(p => (
              <option key={p.slug} value={p.name}>{p.name}</option>
            ))}
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>
      )}

      <div className="form-field">
        <label>Description of Legal Matter *</label>
        <textarea name="message" rows={compact ? 4 : 6} required></textarea>
      </div>

      <div className="form-field">
        <label>How Did You Hear About Us?</label>
        <div className="form-checks">
          {REFERRAL_SOURCES.map(src => (
            <label key={src} className="form-check">
              <input type="radio" name="referral" value={src} />
              <span>{src}</span>
            </label>
          ))}
        </div>
      </div>

      <label className="form-check form-agree">
        <input type="checkbox" name="agree" required />
        <span>
          I have read and agree to the disclaimer below. The information I provide is not confidential and submitting this form does not create an attorney-client relationship.
        </span>
      </label>

      {error && <div className="form-error">{error}</div>}

      <button type="submit" className="form-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Inquiry ↗'}
      </button>

      <div className="form-disclaimer">
        The information you obtain at this site is not, nor is it intended to be, legal advice. You should consult an attorney for advice regarding your individual situation. Contacting us does not create an attorney-client relationship. Please do not send any confidential information until such a relationship has been established.
      </div>
    </form>
  )
}
