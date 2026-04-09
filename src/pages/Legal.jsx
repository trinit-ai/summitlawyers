import { useParams, Navigate } from 'react-router-dom'
import { Breadcrumb } from '../components/Layout'
import { FIRM } from '../data/firm'

const PAGES = {
  privacy: {
    title: 'Privacy Policy',
    body: [
      `${FIRM.name} ("the Firm") respects the privacy of visitors to this website. This Privacy Policy describes the information we collect and how we use it.`,
      'Information We Collect. We collect personal information that you voluntarily provide to us through our contact forms, including your name, email address, telephone number, and the contents of your message. We also collect non-identifying information such as browser type, device, and pages visited through standard web analytics.',
      'How We Use Your Information. Information you submit through our contact forms is used solely to respond to your inquiry and to evaluate whether we may be able to assist you. We do not sell, rent, or trade your personal information to third parties.',
      'Confidentiality. Information transmitted via this website may not be secure. Please do not include confidential or sensitive information in any inquiry submitted through this site until an attorney-client relationship has been formally established.',
      'Cookies. This site may use cookies for basic functionality and analytics. You may disable cookies in your browser settings, though some features may not function correctly as a result.',
      'Third-Party Services. We may use third-party services such as form processors, analytics providers, and hosting platforms. These services have their own privacy policies governing their handling of data.',
      `Contact. For questions about this Privacy Policy, contact us at ${FIRM.email} or ${FIRM.phone}.`,
    ],
  },
  disclaimer: {
    title: 'Disclaimer',
    body: [
      'The information contained on this website is provided for general informational purposes only and should not be construed as legal advice on any matter.',
      'No Attorney-Client Relationship. The transmission and receipt of information from this website, in whole or in part, or communication via email or contact form does not constitute or create an attorney-client relationship between this firm and any recipient. You should not act, or refrain from acting, based upon any information available through this website without seeking professional legal counsel.',
      `Prior Results. Any references to prior case results, verdicts, or settlements on this site do not guarantee or predict a similar outcome in any future matter. Each legal matter is unique and must be evaluated on its own merits.`,
      'Confidential Information. Please do not send any confidential or time-sensitive information to the Firm through this website until an attorney-client relationship has been established in writing.',
      'Jurisdiction. The attorneys of the Firm are licensed to practice in the State of New Jersey, with selected attorneys also admitted in New York. Information on this site is intended for prospective clients located in jurisdictions where the Firm is authorized to practice.',
      'External Links. This website may contain links to third-party websites. The Firm is not responsible for the content or privacy practices of any external sites.',
    ],
  },
  advertising: {
    title: 'Attorney Advertising Notice',
    body: [
      'This website constitutes ATTORNEY ADVERTISING within the meaning of the Rules of Professional Conduct of the Supreme Court of New Jersey.',
      `${FIRM.name} maintains its principal office at ${FIRM.address.street}, ${FIRM.address.city}, ${FIRM.address.state} ${FIRM.address.zip}. Telephone: ${FIRM.phone}.`,
      'No aspect of this advertisement has been approved by the Supreme Court of New Jersey.',
      'The materials contained on this website have been prepared for informational purposes only and are not intended as legal advice. Use of this website does not create an attorney-client relationship between the Firm and the user.',
      'Prior results described on this website do not guarantee a similar outcome. Each case is unique and must be evaluated on its own merits.',
    ],
  },
}

export default function Legal() {
  const { slug } = useParams()
  const page = PAGES[slug]
  if (!page) return <Navigate to="/" replace />

  return (
    <>
      <Breadcrumb trail={[{ to: '/', label: 'Home' }, { label: page.title }]} />
      <div className="practice-hero">
        <div className="practice-hero-bg"></div>
        <div className="practice-hero-num">Legal Notice</div>
        <div className="practice-hero-title">{page.title}</div>
        <div className="practice-hero-rule"></div>
      </div>
      <div className="detail-main">
        <div className="detail-content" style={{ borderRight: 'none' }}>
          <div className="section-label">{page.title}</div>
          {page.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </>
  )
}
