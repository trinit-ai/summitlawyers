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
      "Michael Ventura is the founding member and managing partner of Ventura, Miesowitz, Keough & Warner, which he established in January of 1981. Mr. Ventura's practice is comprised of diverse areas of Civil Litigation. In recent years, he has received numerous appointments from the Chancery Division to serve as Receiver/Fiscal Agent, to manage and sell businesses and commercial properties in litigation.",
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
    ],
  },
  {
    slug: 'john-miesowitz', initials: 'JM', name: 'John J. Miesowitz',
    role: 'Shareholder', tier: 'partner', position: 'Shareholder',
    department: 'Partners',
    education: ['Trinity College, B.A.', 'Seton Hall Law School, J.D.', 'New York University, LL.M. in Taxation'],
    email: 'jmiesowitz@summitlawyers.net',
    practiceSlugs: ['estate-planning','trust-estate-administration','elder-law','business-law'],
    bio: [
      "\"Jack\" Miesowitz is former Chair of the New Jersey State Bar Association Taxation section, where he twice served as a Chair of its Transfer Taxes Committee and is currently a member of the Executive Council. He is the long-time Co-Moderator of the Institute of Continuing Legal Education Semi-Annual Tax and Estate Planning Forum and also recently designed and presented a seminar on International Estate Planning for ICLE and was the 2012 recipient of ICLE's Distinguished Service Award.",
      "He is an author and frequent lecturer to professional and business groups and civic organizations on Estate Planning and Elder Law. Mr. Miesowitz is a Trustee of the Robert Wood Johnson University Hospital at Rahway Foundation, and has served as a member of the Professional Advisors Council of the University of Medicine and Dentistry of New Jersey as well as the New Jersey Performing Arts Center. He is also a UBS network attorney and a Fellow of the American College of Trust and Estate Counsel.",
      "Mr. Miesowitz graduated from Trinity College and Seton Hall Law School and has an LL.M. in taxation from New York University. Mr. Miesowitz specializes in designing estate plans for high net worth individuals. He also practices in the areas of Business Planning, Estate Administration, Elder Law, Corporate and Individual Taxation, Charitable Giving, and Planning for Individuals with Disabilities. Mr. Miesowitz has been published in the New Jersey Law Journal and has been a guest on both local and New York radio shows.",
    ],
    bar: [
      'New Jersey State Bar Association — Taxation Section, former Chair',
      'National Association of Elder Law Attorneys',
      'Union County Bar Association',
      'Summit Bar Association',
      'Real Property, Probate and Trust Law Section, NJSBA',
      'Elder Law Section, NJSBA',
      'American College of Trust and Estate Counsel — Fellow',
    ],
  },
  {
    slug: 'daniel-keough', initials: 'DK', name: 'Daniel Keough',
    role: 'Shareholder', tier: 'partner', position: 'Shareholder',
    department: 'Partners',
    education: ['Georgetown University, B.A. 1979', 'Seton Hall University School of Law, J.D. 1983'],
    email: 'dkeough@summitlawyers.net',
    practiceSlugs: ['property-tax-appeals','commercial-real-estate','residential-real-estate'],
    bio: [
      "Mr. Keough enjoys a statewide reputation as one of the foremost authorities in the area of Real Estate Tax Appeals, having concentrated more than 90% of his law practice for nearly 37 years in this field. He has represented banks, commercial real estate operators, and developers throughout New Jersey in tax appeals, as well as individuals and corporate clients in many other areas of real estate law, including acquisitions, commercial evictions, leasing, and general litigation.",
      "Mr. Keough has litigated tax appeals before every County Board of Taxation in New Jersey, and every Judge who has been an active member of the Tax Court of New Jersey, being counsel of record in a number of published judicial decisions. He also handled tax appeals and other real estate matters before the Appellate Division of the Superior Court of New Jersey and the Supreme Court of New Jersey.",
      "Mr. Keough is a graduate of Georgetown University where he obtained his B.A. in 1979. He obtained his law degree from Seton Hall University School of Law (J.D. 1983), and was admitted to the New Jersey Bar that same year.",
    ],
    bar: [
      'Union County Bar Association',
      'New Jersey State Bar Association',
      'American Bar Association',
    ],
  },
  {
    slug: 'sean-rankin', initials: 'SR', name: 'Sean L. Rankin',
    role: 'Partner', tier: 'partner', position: 'Partner',
    department: 'Partners',
    education: [
      'University of Pittsburgh, B.A. cum laude 2002',
      'New England School of Law, J.D. 2006',
      'University of Alabama School of Law, LL.M. in Taxation, magna cum laude 2010',
    ],
    email: 'srankin@summitlawyers.net',
    practiceSlugs: ['estate-planning','trust-estate-administration','business-law'],
    bio: [
      "Mr. Rankin's practice is focused on transactional legal services. His areas of practice include Estate Administration, Estate Planning, Contracts, and Corporate Law.",
      "Mr. Rankin is a graduate of the University of Pittsburgh (B.A. cum laude 2002); New England School of Law (J.D. 2006); and University of Alabama School of Law (LL.M. in Taxation, magna cum laude, 2010). He is admitted to practice law by New Jersey, New York, and the United States District Court, District of New Jersey.",
      "Recent lectures include: Client Identification and Scope of Representation in Estate Planning and Administration; Administration of the Estate of a Closely Held Business Owner; Who is Responsible for Death Taxes on Non-Probate Assets?; Elections Under I.R.C. Section 6166; Estate Planning in the Shadow of Divorce; Basic Estate Administration; Cancelling LLCs: Counseling Small Business Clients Before and After Insolvency; and Estate Planning 101.",
    ],
    bar: [
      'New Jersey Bar',
      'New York Bar',
      'United States District Court, District of New Jersey',
    ],
  },
  {
    slug: 'maria-blancato', initials: 'MB', name: 'Maria Blancato',
    role: 'Partner', tier: 'partner', position: 'Senior Associate',
    department: 'Partners',
    education: [
      'Muhlenberg College, B.A. cum laude 1986 (Accounting & Business Administration)',
      'Rutgers School of Law – Newark, J.D. 1989',
    ],
    email: 'mblancato@summitlawyers.net',
    practiceSlugs: ['personal-injury','social-security-disability','workers-compensation','criminal-municipal'],
    bio: [
      "Ms. Blancato has been a part of our firm for over 24 years, starting out a couple of days a week when her children were babies and working up to a full practice. Her areas of practice include personal injury litigation, social security disability applications, workers' compensation claims, municipal court matters and juvenile cases.",
      "Ms. Blancato served as an Assistant Prosecutor in Somerset County for approximately four years where she had extensive trial experience including 11 jury trials and over 50 bench trials. She served as the supervisor over all juvenile matters in the County. She remains abreast of the current workers compensation as she is a member of the Justice H. Coleman, Jr., New Jersey Workers Compensation Inn of Court.",
      "She was appointed by the Supreme Court of NJ to the District Fee Arbitration Committee in Union County for 4 years, initially serving as a Panel Member and then as Panel Chair for which she wrote several opinions.",
      "She is committed to her clients by making sure they receive compassion and courtesy as to all aspects of their case. Emails and phone calls are returned in a timely fashion so her clients know they are each her priority. While no outcome is guaranteed, you can be guaranteed Ms. Blancato will work hard for you and give your case her dedicated attention.",
    ],
    bar: [
      'Justice H. Coleman, Jr., New Jersey Workers Compensation Inn of Court',
      'Former Assistant Prosecutor, Somerset County',
      'District Fee Arbitration Committee, Union County — Former Panel Chair',
    ],
  },
  {
    slug: 'august-ventura', initials: 'AV', name: 'August M. Ventura',
    role: 'Partner', tier: 'partner', position: 'Partner',
    department: 'Partners',
    education: ['Boston College, B.A. 2008', 'Seton Hall University School of Law, J.D. 2014'],
    email: 'aventura@summitlawyers.net',
    practiceSlugs: ['personal-injury','matrimonial-family','criminal-municipal'],
    bio: [
      "August M. Ventura received his undergraduate degree from Boston College in 2008, where he double majored in Human Development and English. Following college, Mr. Ventura worked for Ventura, Miesowitz, Keough & Warner as a Personal Injury Paralegal before attending Law School.",
      "Mr. Ventura received his Juris Doctorate Degree from the Seton Hall University School of Law in May of 2014. Prior to returning to the firm, Mr. Ventura served as a law clerk to the Honorable Bradford M. Bury (J.S.C.) in the Chancery Division - Family Law Part in both Union and Hunterdon Counties. Mr. Ventura has also served two internships with the Union County Prosecutor's Office (Fall of 2008 and Summer of 2012).",
      "Mr. Ventura handles cases in the firm's Civil, Family and Criminal Litigation practice. Mr. Ventura served as the President of the Summit Bar Association for the 2019-2020 Term.",
    ],
    bar: [
      'New Jersey State Bar Association',
      'Union County Bar Association',
      'Summit Bar Association — Former President (2019–2020)',
      'New Jersey Association for Justice',
    ],
  },
  {
    slug: 'laurie-levine', initials: 'LL', name: 'Laurie K. Levine',
    role: 'Associate', tier: 'counsel', position: 'Associate',
    department: 'Attorneys',
    education: [
      'State University College at Oneonta, B.S. 1991',
      'Baruch College, M.S. Ed. 1993',
      'New York Law School, J.D. 1997',
    ],
    email: 'llevine@summitlawyers.net',
    practiceSlugs: ['estate-planning','trust-estate-administration'],
    bio: [
      "Ms. Levine's areas of practice include Estate Planning and Estate Administration. Ms. Levine is a graduate of the State University College at Oneonta (B.S. 1991), Baruch College (M.S. Ed. 1993), and New York Law School (J.D. 1997).",
      "Prior to joining Ventura, Miesowitz, Keough & Warner, P.C., Ms. Levine was a partner at a law firm in Westbury, Long Island, where she focused on Estate Planning, Estate Administration, Corporate and Tax Planning.",
    ],
    bar: [
      'New Jersey State Bar Association',
      'New York State Bar Association',
    ],
  },
  {
    slug: 'james-vigliotti', initials: 'JV', name: 'James A. Vigliotti',
    role: 'Of Counsel', tier: 'counsel', position: 'Of Counsel',
    department: 'Attorneys',
    education: ['Rutgers College, B.A. 1972 (Economics)', 'Widener University School of Law, J.D. 1976'],
    email: 'jvigliotti@summitlawyers.net',
    practiceSlugs: ['matrimonial-family','residential-real-estate','commercial-real-estate','criminal-municipal'],
    bio: [
      "Mr. Vigliotti brings an extensive and varied background from the public and private sectors of the practice of law. He served a judicial clerkship in the state courts in 1976-1977. He also was employed by the state as a Public Defender in both its appellate and trial offices from 1977-1981. While in private practice, he served as a municipal prosecutor for two municipalities and was designated as special litigation counsel for one of the municipalities. He also represented a sewerage authority in complex environmental litigation.",
      "In addition to his trial litigation practice, he has argued various appellate cases before the Appellate Division of the Superior Court of New Jersey, the Supreme Court of New Jersey, and the Federal Third Circuit Court of Appeals in Philadelphia.",
      "The major portion of Mr. Vigliotti's practice is now devoted to family law matters, including divorce, post divorce, child custody, and domestic violence cases. He also has extensive experience in residential and commercial real estate transactions and litigation. He has represented lenders and borrowers in foreclosure and deficiency litigation and both landlords and tenants in commercial and residential litigation. He has pursued zoning matters before planning and zoning boards and related litigation. In addition, he handles criminal matters for both defendants and victims, as well as municipal court matters.",
      "Mr. Vigliotti graduated from Rutgers College in 1972 with a B.A. in economics, and in 1976 received his J.D. from Widener University School of Law, where among other activities, he served as articles editor for the law review in his senior year.",
    ],
    bar: [
      'New Jersey State Bar Association',
      'Family Law Section, NJSBA',
      'Union County Bar Association',
      'Summit Bar Association',
    ],
  },
]

export const getAttorney = (slug) => ATTORNEYS.find(a => a.slug === slug)
export const getPracticeArea = (slug) => PRACTICE_AREAS.find(p => p.slug === slug)
