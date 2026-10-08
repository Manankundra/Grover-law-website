export const FIRM = {
  name: 'Grover Law Offices',
  tagline: 'Advocates & Consultants',
  email: 'vaibhavgrover.adv@gmail.com',
  phones: [
    { label: '+91 99583 86067', href: 'tel:+919958386067' },
    { label: '+91 85953 95272', href: 'tel:+918595395272' },
  ],
  offices: [
    { label: 'Okhla Office', lines: ['A-83, 1st Floor, Okhla Phase II,', 'Okhla Industrial Area,', 'New Delhi 110020'] },
    { label: 'Radheypuri Office', lines: ['23/2, Ground Floor, St No. 3,', 'Radheypuri Extn II,', 'Delhi 110051'] },
  ],
  est: 2021,
} as const;

export const NAV = [
  { href: '/firm', label: 'The Firm' },
  { href: '/practice-areas', label: 'Areas of Practice' },
  { href: '/counsel', label: 'Counsel' },
  { href: '/forums', label: 'Forums' },
  { href: '/contact', label: 'Contact' },
] as const;

export type PracticeArea = {
  slug: string; title: string; short: string; intro: string[]; servicesTitle: string; services: string[];
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: 'litigation-dispute-resolution',
    title: 'Litigation & Dispute Resolution',
    short: 'Civil, commercial, criminal, consumer and appellate matters before courts and tribunals.',
    intro: [
      'The Firm maintains an active litigation practice across multiple judicial and quasi-judicial forums, handling Civil and Commercial Suits, Execution Petitions, Arbitration matters and Criminal Complaints, including Section 138 of the Negotiable Instruments Act (cheque dishonour).',
      'The practice extends to Writ Petitions, Quashing Petitions and Appeals before High Courts, RERA Complaints and Appellate Proceedings, Consumer Litigation at all levels, and MACT Claims.',
      'At the pre-litigation stage, the Firm evaluates legal risk, formulates dispute resolution strategy and, where feasible, pursues commercially efficient resolution.',
    ],
    servicesTitle: 'Matters Handled',
    services: [
      'Civil and Commercial Suits', 'Execution Petitions', 'Arbitration', 'Criminal Complaints and Section 138 NI Act',
      'Writ Petitions, Quashing Petitions and High Court Appeals', 'RERA Complaints and Appellate Proceedings',
      'Consumer Litigation at all levels', 'MACT Claims', 'Pre-litigation Risk Assessment and Strategy',
    ],
  },
  {
    slug: 'corporate-advisory-compliance',
    title: 'Corporate Advisory, Compliance & Legal Risk Management',
    short: 'Day-to-day legal, commercial and regulatory advisory for businesses across industries.',
    intro: [
      'The Firm advises businesses on day-to-day legal, commercial and regulatory matters across diverse industries.',
      'The objective is practical legal advice that allows a business to operate efficiently while its legal and regulatory risks are managed.',
    ],
    servicesTitle: 'Areas of Advisory',
    services: [
      'Commercial and business contracts', 'Employment and HR documentation', 'Labour law advisory', 'Regulatory compliance',
      'Consumer protection advisory', 'Product and advertising compliance', 'Data privacy documentation',
      'Vendor and procurement agreements', 'Internal policies and corporate governance frameworks', 'Legal risk assessment',
      'Corporate documentation', 'Contract review and negotiation',
    ],
  },
  {
    slug: 'commercial-transactions-real-estate',
    title: 'Commercial Transactions & Real Estate',
    short: 'Transaction documents, title diligence and regulatory advisory for property and development.',
    intro: [
      'The Firm advises on and drafts a wide range of commercial and transactional documents, including Joint Development Agreements, Share Purchase Agreements, Shareholders’ and Subscription Agreements, Investment Agreements, Service and Vendor Agreements, Non-Disclosure Agreements, Title Deeds and Powers of Attorney.',
      'The Firm has extensive experience in title search reports, legal due diligence and title verification for commercial, residential, industrial and agricultural properties across India, and advises developers, investors, financial institutions, corporates and private clients on acquisitions, development transactions and regulatory requirements.',
      'It also advises on real estate development and regulatory approvals in the State of Haryana, including feasibility assessments, legal opinions, licensing-related advisory and regulatory structuring of proposed projects.',
    ],
    servicesTitle: 'Documents & Diligence',
    services: [
      'Joint Development Agreements (JDA)', 'Share Purchase Agreements (SPA)', 'Shareholders’ and Subscription Agreements (SHA/SSA)',
      'Investment Agreements', 'Service and Vendor Agreements', 'Non-Disclosure Agreements', 'Title Deeds and Powers of Attorney',
      'Title search reports and legal due diligence', 'Title verification across property classes', 'Haryana development and licensing advisory',
    ],
  },
  {
    slug: 'rera-consultancy-compliance',
    title: 'RERA Consultancy & Compliance',
    short: 'Registration, filings and representation before HRERA Gurugram, Panchkula and HREAT.',
    intro: [
      'The Firm provides consultancy and liaisoning services for registration and compliance of real estate projects before the Haryana Real Estate Regulatory Authorities at Gurugram and Panchkula.',
      'Advisory is structured to secure regulatory compliance while limiting the legal, operational and commercial risks of real estate development.',
    ],
    servicesTitle: 'Services',
    services: [
      'Project registration before HRERA Gurugram and Panchkula', 'Liaisoning with regulatory authorities',
      'Preparation and filing of registration applications', 'Quarterly Progress Report filings', 'Annual compliance filings',
      'Project documentation review', 'Regulatory advisory for developers and promoters', 'Compliance management across the project lifecycle',
      'Representation in RERA proceedings and complaints', 'Appellate proceedings before HREAT',
    ],
  },
];

export const FORUMS = [
  { group: 'Courts', items: ['District Courts across Delhi NCR', 'Hon’ble High Court of Delhi', 'Hon’ble High Court of Punjab & Haryana'] },
  { group: 'Real Estate', items: ['HRERA Gurugram', 'HRERA Panchkula', 'Haryana Real Estate Appellate Tribunal (HREAT)'] },
  { group: 'Consumer Forums', items: ['District Consumer Disputes Redressal Commissions (DCDRC)', 'State Consumer Disputes Redressal Commissions (SCDRC)', 'National Consumer Disputes Redressal Commission (NCDRC)'] },
  { group: 'Tribunals & Arbitration', items: ['National Company Law Tribunal (NCLT)', 'National Green Tribunal (NGT)', 'Motor Accident Claims Tribunal (MACT)', 'Delhi International Arbitration Centre (DIAC)'] },
];

export const PRINCIPLES = [
  { title: 'Direct involvement', body: 'Each matter is handled with direct involvement, with a defined legal strategy from the outset and consistent execution throughout.' },
  { title: 'Commercial practicality', body: 'Legal precision is paired with commercial reality, so that advice is both legally sound and workable for the business concerned.' },
  { title: 'Anticipating risk', body: 'Advice should resolve disputes and also help clients anticipate risk, strengthen governance and take informed decisions.' },
];

export const DISCLAIMER = [
  { t: 'Voluntary Access', b: 'By clicking "I AGREE", I confirm that my access to the website of Grover Law Offices is entirely voluntary and undertaken solely to obtain general information concerning the Law Office, its members and professional areas of engagement.' },
  { t: 'No Solicitation or Advertising', b: 'This website has been prepared and made available in strict conformity with Rule 36, Section IV, Chapter II, Part VI of the Bar Council of India Rules, as amended in 2008, which prohibits advocates from soliciting work or advertising, directly or indirectly. Accordingly, no material or statement contained herein shall be construed as an attempt by Grover Law Offices or its members to advertise, solicit or invite the engagement of professional services in any manner whatsoever.' },
  { t: 'Purpose of the Website', b: 'The contents of this website are intended solely to furnish general and factual information regarding the Law Offices, its members and its professional practice, in accordance with the aforesaid Rules. Nothing contained herein shall be construed as legal advice, opinion or guidance on any matter of law, nor as a substitute for formal legal consultation.' },
  { t: 'No Creation of Advocate-Client Relationship', b: 'Mere access to or use of this website, including the review or download of any information contained herein, does not establish and shall not be deemed to establish an advocate-client relationship between the user and Grover Law Offices or any of its members.' },
  { t: 'Accuracy and Limitation of Liability', b: 'While due care and diligence have been exercised in preparing the materials presented on this website, Grover Law Offices makes no representation or warranty, express or implied, as to the accuracy, completeness or currency of the information provided. The Law Office expressly disclaims any liability arising from reliance placed upon such information or material.' },
  { t: 'Intellectual Property', b: 'All material, including text, design, graphics and other content forms part of the intellectual property of Grover Law Offices. No portion of this website may be reproduced, distributed or used in any form without the prior written consent of the Law Office.' },
  { t: 'Privacy and Data Use', b: 'The Law Office accords due respect to the privacy of all users. Any personal information voluntarily shared through or based on this website shall be utilised solely for legitimate professional correspondence and shall not be disclosed to any third party, save as required by law.' },
  { t: 'User Declaration', b: 'By proceeding further and clicking “I AGREE”, I acknowledge that I have read and understood this Acknowledgement & Disclaimer, including the section on Privacy and Data Use, and that I am accessing this website of my own accord and solely for informational purposes.' },
];

export const SHORT_DISCLAIMER =
  'As per the rules of the Bar Council of India, advocates are prohibited from soliciting work or advertising their services in any manner. By accessing this website, the visitor acknowledges that its contents are provided solely for information, that nothing here is legal advice, and that no advocate-client relationship is created by its use.';
