import { useParams, Navigate } from 'react-router-dom'
import { Breadcrumb } from '../components/Layout'
import ClosingCard from '../components/ClosingCard'
import { FIRM } from '../data/firm'

const PAGES = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      {
        h: 'Introduction',
        p: [
          `${FIRM.name} ("the Firm," "we," "us," or "our") respects the privacy of visitors to this website. This Privacy Policy describes the categories of information we collect, how we use that information, the limited circumstances in which we share it, and the choices available to you.`,
          'By accessing or using this website, you consent to the collection and use of your information as described in this Policy. If you do not agree with the terms of this Policy, please do not use this website.',
        ],
      },
      {
        h: 'Information We Collect',
        p: [
          'Information You Provide. We collect personal information that you voluntarily submit through our contact forms or by emailing us directly. This typically includes your name, email address, telephone number, the nature of the matter you are inquiring about, and the contents of your message.',
          'Information Collected Automatically. When you visit our website, we may automatically collect certain non-identifying technical information through standard web analytics tools. This may include your browser type and version, device type, operating system, the pages you visit, the time and date of your visit, the referring website, and aggregated visitor statistics.',
          'Cookies and Similar Technologies. This website may use cookies and similar technologies for basic site functionality, performance monitoring, and analytics. You may disable cookies in your browser settings, though doing so may affect the functionality of certain features.',
        ],
      },
      {
        h: 'How We Use Your Information',
        p: [
          'Information you submit through our contact forms is used solely to respond to your inquiry, to evaluate whether we may be able to assist you, and to communicate with you about your potential matter. We do not sell, rent, lease, or trade your personal information to third parties for marketing purposes.',
          'We may use aggregated, non-identifying information to understand how visitors use our website, to improve the content and functionality of the site, and to inform future updates.',
        ],
      },
      {
        h: 'Disclosure of Information',
        p: [
          'We do not disclose your personal information to third parties except in the following limited circumstances: (i) to service providers who assist us in operating our website, communicating with clients, or delivering email — and only to the extent necessary for them to perform those services on our behalf; (ii) when required by law, court order, or legal process; (iii) when necessary to protect the rights, property, or safety of the Firm, our clients, or others; and (iv) in connection with the sale, merger, or transfer of all or a substantial portion of the Firm.',
        ],
      },
      {
        h: 'Confidentiality and Email Security',
        p: [
          'Information transmitted via the internet, including email and web forms, is not guaranteed to be secure. Please do not include confidential, privileged, or highly sensitive information in any inquiry submitted through this website until an attorney-client relationship has been formally established in writing.',
          'Submitting an inquiry through this website does not create an attorney-client relationship between you and the Firm.',
        ],
      },
      {
        h: 'Third-Party Services and Links',
        p: [
          'This website may contain links to third-party websites operated by parties not affiliated with the Firm. We are not responsible for the privacy practices or the content of any third-party websites. We encourage you to review the privacy policies of any third-party sites you visit.',
          'We may use third-party services such as form processors, analytics providers, hosting platforms, and email delivery services. These providers have their own privacy policies governing their handling of data.',
        ],
      },
      {
        h: 'Children\'s Privacy',
        p: [
          'This website is not directed to children under the age of thirteen, and we do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us so that we can take appropriate action.',
        ],
      },
      {
        h: 'Changes to This Policy',
        p: [
          'We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The most current version will always be posted on this page. We encourage you to review this Policy periodically.',
        ],
      },
      {
        h: 'Contact Us',
        p: [
          `If you have any questions about this Privacy Policy or about how we handle your information, please contact us at ${FIRM.email}, by telephone at ${FIRM.phone}, or by mail at ${FIRM.address.street}, ${FIRM.address.city}, ${FIRM.address.state} ${FIRM.address.zip}.`,
        ],
      },
    ],
  },

  disclaimer: {
    title: 'Disclaimer',
    sections: [
      {
        h: 'General Information Only',
        p: [
          'The information contained on this website is provided for general informational purposes only. It is not intended to be, and should not be construed as, legal advice on any specific matter. The information on this website is not a substitute for professional legal advice from a licensed attorney who is familiar with the particular facts and circumstances of your situation.',
          'You should not act, or refrain from acting, based on any information found on this website without first seeking appropriate professional legal counsel.',
        ],
      },
      {
        h: 'No Attorney-Client Relationship',
        p: [
          `The transmission and receipt of information from this website — whether by viewing the site, sending or receiving email, or submitting an inquiry through any contact form — does not constitute or create an attorney-client relationship between ${FIRM.name} and any recipient. An attorney-client relationship is established only after the Firm has agreed in writing to represent a client and the client has signed a written engagement agreement.`,
          'Until that formal relationship has been established, no information you transmit to the Firm should be considered confidential or privileged. Please do not send any confidential or time-sensitive information through this website.',
        ],
      },
      {
        h: 'Prior Results',
        p: [
          'Any references on this website to prior case results, verdicts, settlements, awards, or recoveries are provided for illustrative purposes only. Prior results do not guarantee or predict a similar outcome in any future matter. Each legal matter is unique and must be evaluated on its own merits, on the basis of its own facts, and within the framework of the applicable law at the time the matter arises.',
          'Outcomes in legal matters are inherently uncertain and depend on numerous factors, many of which are outside the control of any attorney or law firm.',
        ],
      },
      {
        h: 'Jurisdictional Limitations',
        p: [
          'The attorneys of the Firm are licensed to practice law in the State of New Jersey, and certain attorneys are also admitted to practice in the State of New York and in the United States District Court for the District of New Jersey. The information on this website is intended for prospective clients located in jurisdictions where the Firm and its attorneys are authorized to practice.',
          'Nothing on this website is intended to constitute, and should not be construed as, the practice of law or the offering of legal services in any jurisdiction in which the Firm or its individual attorneys are not authorized to practice.',
        ],
      },
      {
        h: 'Accuracy and Currency of Information',
        p: [
          'While we make reasonable efforts to ensure that the information contained on this website is accurate and current, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information for any particular purpose. The law changes frequently, and the information on this website may not reflect the most current legal developments.',
        ],
      },
      {
        h: 'External Links',
        p: [
          'This website may contain links to third-party websites that are not maintained or controlled by the Firm. The Firm is not responsible for the content, accuracy, or privacy practices of any linked site. The inclusion of any link does not constitute an endorsement of the linked site or its content by the Firm.',
        ],
      },
      {
        h: 'Limitation of Liability',
        p: [
          'In no event shall the Firm or its attorneys be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, use of, or inability to use this website or any information contained on it.',
        ],
      },
    ],
  },

  advertising: {
    title: 'Attorney Advertising Notice',
    sections: [
      {
        h: 'Notice',
        p: [
          'This website may be considered ATTORNEY ADVERTISING within the meaning of the Rules of Professional Conduct of the Supreme Court of New Jersey and similar rules in other jurisdictions where our attorneys are admitted to practice.',
          'Before making your choice of attorney, you should give this matter careful thought. The selection of an attorney is an important decision that should not be based solely upon advertising.',
        ],
      },
      {
        h: 'Firm Identification',
        p: [
          `${FIRM.name} maintains its principal office at ${FIRM.address.street}, ${FIRM.address.city}, ${FIRM.address.state} ${FIRM.address.zip}. The Firm may be reached by telephone at ${FIRM.phone} or by facsimile at ${FIRM.fax}.`,
          'The attorney responsible for the content of this website is Michael Ventura, founding member and managing partner.',
        ],
      },
      {
        h: 'No Approval by Court',
        p: [
          'No aspect of this advertisement has been approved by the Supreme Court of New Jersey or by any other court or governmental authority. Any awards, recognitions, or comparative ratings referenced on this website have not been approved by the Supreme Court of New Jersey.',
        ],
      },
      {
        h: 'Informational Purposes',
        p: [
          'The materials contained on this website have been prepared for informational purposes only and are not intended as legal advice. Use of this website does not create an attorney-client relationship between you and the Firm. Prospective clients should not act or rely on information presented here without first seeking the advice of a licensed attorney concerning the specific facts of their matter.',
        ],
      },
      {
        h: 'Prior Results',
        p: [
          'Any reference on this website to prior results obtained on behalf of clients is intended only to illustrate the types of matters the Firm has handled. Prior results do not guarantee a similar outcome in any future matter. Each case is different and must be evaluated on its own facts.',
        ],
      },
      {
        h: 'Free Consultation',
        p: [
          `${FIRM.name} offers an initial consultation at no charge. To schedule a consultation, please call ${FIRM.phone} or use the contact form on this website. Evening and weekend appointments are available by arrangement, and we are available to travel to clients who are unable to come to our office.`,
        ],
      },
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
      <div className="detail-main" style={{ gridTemplateColumns: '1fr' }}>
        <div className="detail-content" style={{ borderRight: 'none', maxWidth: 820, margin: '0 auto' }}>
          {page.sections.map((s, i) => (
            <div key={i} className="legal-section">
              <h2>{s.h}</h2>
              {s.p.map((para, j) => <p key={j}>{para}</p>)}
            </div>
          ))}
          <ClosingCard />
        </div>
      </div>
    </>
  )
}
