import { Breadcrumb } from '../components/Layout'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import { FIRM } from '../data/firm'

export default function Contact() {
  return (
    <>
      <SEO path="/contact" title="Contact" description="Schedule a free consultation. Ventura, Miesowitz & Keough, P.C., 783 Springfield Avenue, Summit, NJ. Call 908.277.2410." />
      <Breadcrumb trail={[{ to: '/', label: 'Home' }, { label: 'Contact' }]} />
      <div className="office-hero">
        <img src="/office.webp" alt="Ventura, Miesowitz & Keough, P.C. — 783 Springfield Avenue, Summit, NJ" />
      </div>
      <section className="cta">
        <div className="cta-left">
          <div className="eyebrow">Begin the Conversation</div>
          <h2>Your first consultation<br />is always without charge.</h2>
          <p>We believe the attorney-client relationship begins with listening. Tell us about your matter — we'll tell you honestly what we can do and what to expect.</p>
          <ContactForm />
        </div>
        <div className="cta-right">
          <div className="contact-item">
            <div className="ci-label">Address</div>
            <div className="ci-val">{FIRM.address.street}<br />{FIRM.address.city}, {FIRM.address.state} 07901</div>
          </div>
          <div className="contact-item">
            <div className="ci-label">Telephone</div>
            <div className="ci-val"><a href={FIRM.phoneHref}>{FIRM.phone}</a></div>
          </div>
          <div className="contact-item">
            <div className="ci-label">Facsimile</div>
            <div className="ci-val">{FIRM.fax}</div>
          </div>
          <div className="contact-item">
            <div className="ci-label">Office Hours</div>
            <div className="ci-val">Monday – Friday<br />9:00 a.m. – 5:00 p.m.</div>
          </div>
          <div className="contact-item">
            <div className="ci-label">Evening Appointments</div>
            <div className="ci-val">Available by arrangement<br /><a href={FIRM.phoneHref}>{FIRM.phone}</a></div>
          </div>
        </div>
      </section>
      <section className="map-section">
        <div className="section-header">
          <span className="section-header-label" style={{ color: 'var(--gold)' }}>Maps &amp; Directions</span>
          <div className="section-header-rule light"></div>
        </div>
        <iframe
          title="Office Location"
          src="https://www.google.com/maps?q=783+Springfield+Avenue+Summit+NJ+07901&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map-embed"
        />
        <p className="map-note">
          Our office is accessible via Routes 24, 78, and 287 and the Garden State Parkway. We serve clients throughout Summit, New Providence, Berkeley Heights, Westfield, Chatham, Madison, and every county in New Jersey.{' '}
          <a href="https://maps.google.com/?q=783+Springfield+Avenue+Summit+NJ+07901" target="_blank" rel="noreferrer">Open in Google Maps ↗</a>
        </p>
      </section>
    </>
  )
}
