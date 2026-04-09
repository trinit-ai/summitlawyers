// @ts-check

export const FIRM = {
  name: 'Ventura, Miesowitz & Keough, P.C.',
  shortName: 'Ventura, Miesowitz & Keough',
  established: 1981,
  phone: '908.277.2410',
  phoneHref: 'tel:9082772410',
  fax: '908.277.1374',
  address: {
    street: '783 Springfield Avenue',
    city: 'Summit',
    state: 'New Jersey',
    zip: '07901-2332',
  },
  email: 'info@summitlawyers.net',
}

export const COUNTIES = [
  'Union County', 'Morris County', 'Somerset County', 'Essex County',
  'Hunterdon County', 'Hudson County', 'Middlesex County', 'Monmouth County',
]

export const TOWNS = [
  'Summit','Westfield','Chatham','Madison','Morristown','Millburn','Short Hills',
  'Livingston','West Orange','Maplewood','South Orange','Elizabeth','Cranford',
  'Springfield','Berkeley Heights','New Providence',
]

const ROMAN = ['i','ii','iii','iv','v','vi','vii','viii','ix','x','xi','xii','xiii','xiv']

export const PRACTICE_AREAS = [
  { slug: 'personal-injury', name: 'Personal Injury Litigation', desc: 'Accidents, serious injury, and wrongful death claims' },
  { slug: 'estate-planning', name: 'Estate Planning', desc: 'Wills, trusts, and advance directives for individuals and families' },
  { slug: 'trust-estate-administration', name: 'Trust & Estate Administration', desc: 'Probate, executor representation, and fiduciary counsel' },
  { slug: 'estate-litigation', name: 'Estate Litigation', desc: 'Will contests, breach of fiduciary duty, and inheritance disputes' },
  { slug: 'mediation-arbitration', name: 'Mediation & Arbitration', desc: 'Alternative dispute resolution across civil and commercial matters' },
  { slug: 'business-law', name: 'Business Law', desc: 'Entity formation, governance, contracts, and corporate counsel' },
  { slug: 'commercial-real-estate', name: 'Commercial Real Estate', desc: 'Acquisition, disposition, leasing, and development transactions' },
  { slug: 'residential-real-estate', name: 'Residential Real Estate', desc: 'Purchase, sale, refinancing, and title matters' },
  { slug: 'property-tax-appeals', name: 'Local Property Tax Appeals', desc: 'Assessment challenges for residential and commercial properties' },
  { slug: 'matrimonial-family', name: 'Matrimonial & Family Law', desc: 'Divorce, custody, support, and equitable distribution' },
  { slug: 'elder-law', name: 'Elder Law', desc: 'Medicaid planning, guardianship, and senior advocacy' },
  { slug: 'workers-compensation', name: "Worker's Compensation", desc: 'Workplace injury claims and employer defense' },
  { slug: 'social-security-disability', name: 'Social Security Disability', desc: 'SSD applications, appeals, and administrative hearings' },
  { slug: 'criminal-municipal', name: 'Criminal & Municipal Court Law', desc: 'DWI, traffic matters, and municipal court representation' },
].map((p, i) => ({ ...p, numeral: ROMAN[i] }))

// Detail content for practice pages — falls back gracefully if missing
export const PRACTICE_DETAIL = {
  'personal-injury': {
    lead: "When injury changes everything, you deserve an advocate with the experience and resources to fight for full and fair compensation — and the personal attention of a partner, not an associate.",
    overview: [
      "Ventura, Miesowitz & Keough, P.C. has represented injured individuals and their families throughout New Jersey for over four decades. Our personal injury practice is built on a straightforward conviction: that every injured person deserves the same quality of legal representation as a major corporation — and that they should receive it from an experienced partner, not a junior associate.",
      "Mr. Ventura and his team have litigated hundreds of Personal Injury and Workers' Compensation claims and have recovered substantial awards for injured plaintiffs, including a verdict with a minimum payout of $4,775,000. We handle matters from first consultation through trial and, when necessary, through appeal.",
      "Our attorneys are available for home and hospital visits for clients who are unable to travel to our Summit office. All personal injury consultations are provided at no charge.",
    ],
    caseTypes: [
      'Motor Vehicle Accidents','Slip & Fall Injuries','Truck & Commercial Vehicle','Wrongful Death',
      'Premises Liability','Construction Site Accidents','Dog Bites & Animal Attacks','Insurance Bad Faith',
      'Catastrophic Injury',"Workers' Compensation",
    ],
    closing: "We represent clients in courts throughout Union, Morris, Essex, Somerset, Middlesex, and Monmouth Counties, as well as in federal courts when jurisdiction requires. Our office is accessible via Routes 24, 78, and 287 and the Garden State Parkway.",
    process: [
      { title: 'Free Initial Consultation', desc: 'We meet with you — at our office, your home, or your hospital room — to understand what happened and evaluate your case. There is no charge and no obligation.' },
      { title: 'Investigation & Demand', desc: 'We gather evidence, retain experts when necessary, and prepare a comprehensive demand that accurately reflects the full extent of your losses — current and future.' },
      { title: 'Negotiation', desc: 'Most cases resolve before trial. We negotiate from a position of preparation and credibility, so insurers know we are ready to litigate if necessary.' },
      { title: 'Trial & Appeal', desc: 'When a fair settlement is not possible, our attorneys are experienced trial lawyers prepared to take your case to verdict — and, if required, through the appellate courts.' },
    ],
    attorneyIds: ['michael-ventura','daniel-keough','sean-rankin'],
  },
}

export const ATTORNEYS = [
  {
    slug: 'michael-ventura', initials: 'MV', name: 'Michael Ventura',
    role: 'Founding Partner', tier: 'partner', position: 'Shareholder & Managing Partner',
    department: 'Partners · Founding Member',
    education: ['Boston College, B.A. 1974', 'Seton Hall University School of Law, J.D. 1978'],
    email: 'mventura@summitlawyers.net',
    practiceSlugs: ['personal-injury','estate-litigation','workers-compensation','matrimonial-family'],
    bio: [
      "Michael Ventura is the founding member and managing partner of Ventura, Miesowitz & Keough, P.C., which he established in January of 1981. Mr. Ventura's practice is comprised of diverse areas of civil litigation. In recent years, he has received numerous appointments from the Chancery Division to serve as Receiver/Fiscal Agent, to manage and sell businesses and commercial properties in litigation.",
      "Over the years, Mr. Ventura and his team have litigated hundreds of Personal Injury and Workers' Compensation claims and have received substantial awards for injured plaintiffs, including an award with a minimum payout of $4,775,000. In addition, he has represented major banks and corporations in complex commercial litigation and served as house counsel to an insurance company for thirteen years, litigating hundreds of insurance defense matters.",
      "In the Chancery Division, Mr. Ventura has handled complex Estate Litigation, Will Contests and Formal Accountings, as well as substantial Matrimonial Actions.",
      "Mr. Ventura is a graduate of Boston College (B.A. 1974) and Seton Hall University School of Law (J.D. 1978). He has served as a member of the Professional Advisory Board for numerous banks, is the founder of two not-for-profit organizations, and has served on the Board of numerous other charitable organizations.",
    ],
    bar: [
      'New Jersey State Bar Association',
      'Union County Bar Association — Former Trustee',
      'American Trial Lawyers Association',
      'Summit Bar Association — Former President',
      'Ethics Committee of Union County',
      'Professional Advisory Board, numerous banking institutions',
    ],
  },
  { slug: 'john-miesowitz', initials: 'JM', name: 'John J. Miesowitz', role: 'Partner', tier: 'partner' },
  { slug: 'daniel-keough', initials: 'DK', name: 'Daniel G. Keough', role: 'Partner', tier: 'partner' },
  { slug: 'sean-rankin', initials: 'SR', name: 'Sean L. Rankin', role: 'Partner', tier: 'partner' },
  { slug: 'maria-blancato', initials: 'MB', name: 'Maria Blancato', role: 'Partner', tier: 'partner' },
  { slug: 'august-ventura', initials: 'AV', name: 'August M. Ventura', role: 'Partner', tier: 'partner' },
  { slug: 'laurie-levine', initials: 'LL', name: 'Laurie K. Levine', role: 'Attorney', tier: 'counsel' },
  { slug: 'james-vigliotti', initials: 'JV', name: 'James A. Vigliotti', role: 'Of Counsel', tier: 'counsel' },
]

export const getAttorney = (slug) => ATTORNEYS.find(a => a.slug === slug)
export const getPracticeArea = (slug) => PRACTICE_AREAS.find(p => p.slug === slug)
