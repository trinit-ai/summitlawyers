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
    lead: "Our team of Personal Injury lawyers offers more than 35 years of experience obtaining substantial recoveries for our clients. If you have been injured due to the negligence or wrongdoing of another, our goal is to provide the highest level of personal service and to achieve the best result possible for you.",
    overview: [
      "With a team of four highly experienced and compassionate lawyers, we work together to diligently pursue all claims for your losses, and to assist you in any way during this traumatic period of your life.",
      "Our team has a broad range of experience in all areas of personal injury claims, including Wrongful Death Actions, Construction Job Site Accidents, Premises Liability Claims, Sidewalk and Parking Lot Slip and Falls, Automobile, Motorcycle and Truck Accidents, Pedestrian Accidents, Elder Abuse and Nursing Home Negligence, Retail Store Slip and Falls, Defective Products Liability, Dog Bites, and Workers' Compensation.",
      "We take great pride in our dedication to our clients, which has resulted in tens of millions of dollars in compensation, including numerous seven-figure recoveries for all types of serious injuries. Once we are retained, our private investigator and experts will work with our team to fully investigate and develop the full value of your case. Additionally, we will assist you and your loved ones with all aspects of your claim — arranging for necessary medical treatment, getting your medical or auto insurance company to pay for your treatment, and applying for Social Security Disability or other Disability Coverage available to you.",
      "There is no case too big or too small for us to handle. We will go out of our way to make every client and their family feel protected, comfortable, and informed throughout the legal process. If you cannot come to our office, we will always come to you.",
    ],
    caseTypes: [
      'Wrongful Death','Construction Site Accidents','Premises Liability','Slip & Fall',
      'Auto, Motorcycle & Truck Accidents','Pedestrian Accidents','Elder Abuse & Nursing Home','Retail Slip & Falls',
      'Defective Products','Dog Bites',"Workers' Compensation",'Catastrophic Injury',
    ],
    closing: "If you have been injured and would like to know your rights, please contact Michael Ventura by phone at 908.277.2410 or email mventura@summitlawyers.net.",
    attorneyIds: ['michael-ventura','maria-blancato','august-ventura'],
  },

  'estate-planning': {
    lead: "Estate Planning is the process of arranging — during an individual's lifetime — for the distribution of the individual's estate following death, as well as arranging for financial and medical decisions to be made in the event of incapacity.",
    overview: [
      "The process is completed through the design and execution of legal documentation, including a Will (which names the representative of an estate, defines who will receive assets, establishes trusts for creditor protection, and sets directions for asset treatment after death), or a Revocable Living Trust (a will substitute that allows assets to avoid probate, ensures privacy, and avoids state death tax liens).",
      "Other essential documents include a Health Care Directive — defining who has legal authority to direct healthcare decisions in the event of incapacity; a Power of Attorney — appointing another individual or corporation to handle financial affairs; and Trusts — which establish rules governing how an asset or class of assets will be treated, and can be used to limit estate taxes, safeguard privacy, protect assets from creditors, and provide for beneficiaries with special needs.",
      "Estate Planning documentation must be drafted and executed in strict accordance with complex laws and regulations established by the Internal Revenue Service, the New Jersey Division of Taxation, and other state and federal statutes. The laws, regulations, tools, and standards governing Estate Planning are constantly changing.",
      "Our Estate Planning department boasts two attorneys with advanced degrees in taxation (LL.M. in Taxation), who both teach Estate Planning to other professionals. We pride ourselves on keeping abreast of the constantly changing guidelines governing the practice.",
    ],
    closing: "We particularly specialize in coordinating personal Estate Plans with the business succession plans of closely-held business owners, including the creation of succession plans through Buy-Sell Agreements, Corporate Restructuring, and the gifting of non-controlling interests in business.",
    process: [
      { title: 'Explore Your Goals', desc: "We begin by understanding what matters most — family, business succession, charitable intent, tax minimization." },
      { title: 'Explain the Framework', desc: 'We walk you through the basic rules and tools relevant to achieving your goals.' },
      { title: 'Craft the Plan', desc: 'We coordinate your goals within the framework of applicable laws and regulations.' },
      { title: 'Draft & Execute', desc: 'We prepare the documentation necessary to memorialize and effectuate your plan.' },
      { title: 'Update Over Time', desc: 'We work with you to amend your plan as your goals and the regulatory framework evolve.' },
    ],
    attorneyIds: ['john-miesowitz','sean-rankin','laurie-levine'],
  },

  'trust-estate-administration': {
    lead: "Estate Administration (or probate) is the process by which an individual's financial affairs are resolved following death. We guide families through every facet of the process.",
    overview: [
      "The process involves determining who is entitled to serve as the legal representative of the decedent's estate and obtaining their formal appointment; identifying, marshalling, and valuing the assets of the deceased; identifying and satisfying the debts of the deceased and the expenses of the estate; determining and satisfying state and federal taxes resulting from the death; obtaining a release of the New Jersey Transfer and Inheritance Tax Lien; and distributing net assets pursuant to the decedent's testamentary intent — or, if no formal estate plan exists, pursuant to the applicable state laws of intestacy.",
      "Appointment as the representative of an estate (called the \"executor\" if appointed under a will, or the \"administrator\" if appointed under intestacy statutes) creates personal liability on the part of the representative to the extent of the value of the decedent's assets.",
      "We are expert at limiting the extent of estate and inheritance tax liability, to the extent permitted under applicable federal and state law, and at ensuring that the personal liability resulting from the representative's appointment is fully discharged at the conclusion of the administration process.",
    ],
    closing: "We are able to guide you through all facets of the estate administration process, including the preparation and filing of all applicable state and federal estate and inheritance tax returns.",
    attorneyIds: ['john-miesowitz','sean-rankin','laurie-levine'],
  },

  'estate-litigation': {
    lead: "Our litigators and trust and estates counsel work together in a coordinated approach to identify potential issues and resolve them through whatever means is appropriate and effective.",
    overview: [
      "If litigation is necessary to achieve a client's goals, our skilled courtroom advocates are prepared to take an aggressive posture, presenting matters of any magnitude and complexity in the courtroom. The substantive knowledge of our litigators regarding trust and estate issues provides them with an invaluable advantage in developing and implementing litigation strategies.",
      "Our attorneys have handled a wide variety of estate disputes including will contests, will construction actions, reciprocal will cases, omitted spouse statute claims, guardianship proceedings, challenges to inter vivos transfers, lost will cases, claims of breach of fiduciary duty and fiduciary removal, will revocation and prevention of revocation claims, and accounting actions.",
      "Members of our Firm are frequently appointed by the Probate Part of the Superior Court, Chancery Division, as counsel for alleged incapacitated persons, guardians, and guardians ad litem, as well as early settlement panelists for probate cases pending in Union, Somerset, and Morris County Superior Court.",
    ],
    attorneyIds: ['michael-ventura','john-miesowitz'],
  },

  'mediation-arbitration': {
    lead: "Our attorneys regularly participate in both Mediations and Arbitrations, serving both as advocates and as third-party neutrals.",
    overview: [
      "Our litigators frequently utilize alternative dispute resolution mechanisms as a means of effectuating the best results for our clients in a very cost-effective manner.",
      "Members of our Firm serve as Rule 1:40 court-appointed mediators and as Court-appointed Arbitrators in Somerset, Union, Morris, and Middlesex Counties. We also serve as Early Settlement Panelists regularly appointed by the Probate Part of both the Union and Morris County Superior Courts.",
      "Mr. Ventura has served as a Court-appointed Mediator/Receiver in complex Business Litigation, as well as an Arbitrator in UM/UIM Arbitrations.",
    ],
    attorneyIds: ['michael-ventura'],
  },

  'business-law': {
    lead: "From small business formation to mergers, succession planning, and contract negotiation — we serve as long-term counsel to closely-held businesses across New Jersey and New York.",
    overview: [
      "While it is simple to form a legal entity for the operation of a business, it is necessary to respect certain formalities in order to gain the benefit of any limited liability. We can assist you in choosing the appropriate form of entity for your intended use and provide guidance on how best to use that entity to minimize your personal liabilities.",
      "Corporations have many more regulatory requirements than LLCs — bylaws, stock issuance, transfer ledgers, annual meetings, corporate taxes, and annual reports. LLCs are only required to file annual reports, but performing certain regulatory functions of a corporation will increase the likelihood that the LLC is treated as a separate entity. We can prepare and maintain the consents, resolutions, operating agreements, and stock ledgers necessary for proper operation.",
      "Whether a small business is run by a single family or is a broader coalition of business associates, coordinating and planning the fate of the business in the event of the death or incapacity of a principal is essential. The most common tool used in business succession planning is the buy-sell agreement, which allows shareholders/members to negotiate a price (or formula) for the buy-out of a deceased or disabled shareholder's interest, and to allow for continuity of management. We have assisted in the negotiation and preparation of many buy-sell agreements for a vast range of businesses.",
      "We have experience with mergers — both combining two separate businesses into a single entity, and converting one form of entity into another. We also draft, review, and negotiate contracts of every kind: purchase and sale agreements, waivers, employment agreements, independent contractor agreements, consulting agreements, non-disclosure / non-compete / non-solicitation agreements, profit sharing agreements, and joint venture agreements.",
      "We have significant experience with the drafting, review, and negotiation of commercial real estate contracts and leases, and serve as the sole attorneys of commercial landlords and property managers in both New Jersey and New York City.",
    ],
    closing: "If you have questions or require assistance in any of these areas, please contact Sean Rankin at 908.277.2410 or srankin@summitlawyers.net.",
    attorneyIds: ['sean-rankin','john-miesowitz'],
  },

  'commercial-real-estate': {
    lead: "Whether you are an owner, landlord, or lessee, your business needs the advice and guidance of a commercial real estate attorney with experience handling all aspects of real estate matters.",
    overview: [
      "Although commercial real estate investment may be very profitable, there is always an element of risk involved — non-payment of rent, depreciation, environmental liability. Regardless of your company's industry, its commercial real estate holdings can have a tremendous impact on the bottom line.",
      "We handle everything from drafting and negotiating leases and sales agreements to addressing zoning issues and environmental problems. From the moment your business decides to invest in new property, divest existing property, or renegotiate a lease, a commercial real estate attorney should be your first call — due to their experience working with buyers, sellers, landlords, real estate agents, title insurers, lenders, and mortgage companies.",
    ],
    attorneyIds: ['daniel-keough','sean-rankin'],
  },

  'residential-real-estate': {
    lead: "The sale or purchase of a home is one of the most important legal transactions in a person's life — and understanding the process is essential to avoid future litigation.",
    overview: [
      "Real estate attorneys advise and assist homeowners in all stages of property ownership, including negotiating, drafting, and reviewing all legal documents that form part of the real estate transaction.",
      "We can represent homeowners in the event of defect or non-disclosure litigation, apply for zoning variances, appeal property tax assessments, clear liens, explore options to prevent foreclosure, and defend homeowners during foreclosure proceedings.",
      "Residential real estate attorneys can also represent either landlords or tenants on lease negotiations, in landlord-tenant disputes, or in eviction proceedings.",
    ],
    attorneyIds: ['daniel-keough','james-vigliotti'],
  },

  'property-tax-appeals': {
    lead: "Dan Keough, Esq. specializes in filing and litigating real estate tax appeals against municipalities, for all types of real estate in New Jersey, on behalf of taxpayers who believe their assessment is too high.",
    overview: [
      "Mr. Keough handles appeals for residential, commercial, industrial, hotel, multi-family, and other property types. He will analyze the taxpayer's data to determine whether an appeal is warranted — taxes can actually be increased in New Jersey if an appeal is filed on an under-assessed property. The party appealing bears the burden to disprove the assessment, which is presumed correct, by clear and convincing evidence that the assessment is not based on fair market value.",
      "Tax appeals are filed both at the County Tax Boards and the Tax Court of New Jersey, based on certain criteria. There is an annual filing deadline for New Jersey real estate tax appeals as early as January 15 (for Monmouth County properties) and April 1 of the year of appeal (for all other Counties). Municipalities that were either revalued or reassessed may extend their annual deadlines, so filing dates must be checked on a case-by-case basis.",
      "It is important that a property owner considering a tax appeal seek professional advice from an attorney like Mr. Keough, who specializes in this field of law.",
    ],
    closing: "Mr. Keough's legal fees are based on a percentage of the tax savings he achieves for the client. If no savings are achieved, no legal fee is due. Hourly and project fees are also available.",
    attorneyIds: ['daniel-keough'],
  },

  'matrimonial-family': {
    lead: "We are acutely aware that family law matters can be quite emotional and stressful for everyone involved. When we represent a client under these circumstances, we try to take the emotion out of a difficult process by being calm, deliberate, and considerate of your distress.",
    overview: [
      "With that in mind, our first priority is to make a good faith effort to settle your case before any litigation commences, if possible. We believe it is much better for you to decide your own fate, rather than a judge who does not know you or your circumstances as well as you do.",
      "By the same token, we will work zealously to protect your legal rights so that there is a fair resolution of all of the outstanding issues in your matter. That may also mean commencing litigation as appropriate to vigorously present your position to the Court.",
      "Throughout this process, we remain mindful of your legal fees and costs. No one wants to see their family's assets depleted by professional fees. We try to minimize legal fees and costs to the extent possible, without compromising the quality of our services.",
    ],
    closing: "Since there are a variety of family law situations (divorce, custody, domestic violence, paternity, etc.), please contact us so we can determine how we can best assist you. Our goal is to provide \"large firm expertise with small firm service and care.\"",
    attorneyIds: ['august-ventura','james-vigliotti'],
  },

  'elder-law': {
    lead: "Elder law focuses on the legal needs of the elderly — retirement planning, medical costs, estate planning, and the protection of assets and dignity in later life.",
    overview: [
      "Elder planning often goes hand in hand with estate planning. Attorneys who specialize in elder law help protect assets while preventing the risk of penalties. We advise and assist in matters of Medicare, Social Security, veteran's benefits, and other government benefit programs; powers of attorney for medical and financial decisions; health and personal care planning, including medical care directives, long-term care plans, and end-of-life decisions; insurance; quality of life and independence; retirement planning; and estate planning, wills, and trusts.",
      "Elder law attorneys also handle issues concerning elder abuse — including physical abuse and financial abuse. Financial abuse occurs when someone takes advantage of an elderly person's physical or mental incapacitation to steal money from him or her.",
      "It is best to seek an elder law attorney's services before illness or incapacity becomes an issue, so they can help you draft legal documents detailing exactly how certain situations should be handled if you are not able to make decisions for yourself.",
    ],
    attorneyIds: ['john-miesowitz'],
  },

  'workers-compensation': {
    lead: "Did you know you are entitled to three distinct benefits if you are hurt at work? There is no legal fee unless we obtain a settlement for you.",
    overview: [
      "Your employer is obligated to provide: (1) temporary disability if your injury keeps you out of work for more than three business days; (2) medical treatment with no co-pays or deductibles charged to you (however, you must be treated by the doctors assigned to you by your employer's carrier); and (3) an award for partial permanent disability if your injury is permanent, even if you return to the same job.",
      "Maria Blancato will be the only attorney working on your case. She is committed to working on your matter not only to get you the best result possible, but also to make sure you feel confident and comfortable in the process.",
    ],
    closing: "I would be honored to discuss your Worker's Compensation claim with you. Please call me at 908.277.2410, ext. 131 or email me at mblancato@summitlawyers.net.",
    attorneyIds: ['maria-blancato'],
  },

  'social-security-disability': {
    lead: "Were you forced to stop working because of disabling pain, illness, or mental health? You may be entitled to Social Security Disability Benefits — and there is no legal fee unless we obtain benefits for you.",
    overview: [
      "If you have worked, you could be entitled to Social Security Disability Benefits known as SSDI. If you are of limited assets with little or no work history, you may be entitled to SSI benefits.",
      "The Social Security disability system is an important safety net that allows qualified injured or disabled people to receive some income and health benefits if they can no longer work because they are disabled.",
      "Maria Blancato can help you apply for these benefits. Please call 908.277.2410, ext. 131 or email mblancato@summitlawyers.net to discuss your SSD application.",
    ],
    attorneyIds: ['maria-blancato'],
  },

  'criminal-municipal': {
    lead: "Have you or your teenager been charged with a traffic violation, DWI, simple assault, criminal mischief, or shoplifting? Maria Blancato served as an Assistant Prosecutor in Somerset County for four years and brings extensive trial experience to your defense.",
    overview: [
      "Charges we handle include speeding, careless driving, reckless driving, leaving the scene of an accident, driving under the influence, possession of drugs/CDS in a car or in a park, simple or aggravated assault, criminal mischief, and shoplifting.",
      "Ms. Blancato worked on both juvenile and adult matters as a prosecutor. Her goal is to get you the best result — whether that is a plea or a trial. She will be the only person responsible for your matter if you hire her.",
    ],
    closing: "Please call 908.277.2410, ext. 131 or email mblancato@summitlawyers.net to discuss your matter.",
    attorneyIds: ['maria-blancato','august-ventura'],
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
