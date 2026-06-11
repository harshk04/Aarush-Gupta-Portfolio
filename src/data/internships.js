const certificateUrl = (file) => `/certificates/${encodeURIComponent(file)}`;
const thumbnailUrl = (file) => `/images/internships/${encodeURIComponent(file)}`;

export const internshipHeroStats = [
  { label: 'Internships completed', value: '13' },
  { label: 'Certificates earned', value: '19' },
  { label: 'Industry sectors explored', value: '7' },
  { label: 'Timeline of experience', value: 'Nov 2025 - Feb 2026' },
];

export const exploredSectors = [
  'Manufacturing',
  'Electricals',
  'Transformers',
  'Chemicals',
  'Customer Experience',
  'Digital Skills',
  'AI and Productivity',
];

export const internshipTimeline = [
  {
    id: 'asha-ferrous-industries',
    company: 'Asha Ferrous Industries',
    title: 'Social Media Content Support',
    date: '29 Nov 2025',
    type: 'Industry exposure',
    sector: 'Brand communication',
    summary:
      'Supported social media content planning by organising captions, visual assets, and posting flow so the brand could present a more consistent online presence.',
    skills: ['Content organisation', 'Visual planning', 'Brand consistency'],
    pdf: certificateUrl('Asha Ferrous Industries.pdf'),
    thumbnail: thumbnailUrl('Asha_Ferrous_Industries.jpg'),
  },
  {
    id: 'super-conductor-industries',
    company: 'Super Conductor Industries',
    title: 'Operational Support and Coordination',
    date: '18 Dec 2025',
    type: 'Industry exposure',
    sector: 'Operations',
    summary:
      'Provided organisational support with coordination, materials, and documentation, reinforcing accountability and steady execution in a busy work environment.',
    skills: ['Coordination', 'Documentation', 'Responsibility'],
    pdf: certificateUrl('Super Conductor Industries.pdf'),
    thumbnail: thumbnailUrl('Super_Conductor_Industries.jpg'),
  },
  {
    id: 'raj-trans-stamping',
    company: 'Raj Trans Stamping Pvt. Ltd.',
    title: 'Business Awareness and Team Coordination',
    date: '19 Dec 2025',
    type: 'Industry exposure',
    sector: 'Digital collaboration',
    summary:
      'Worked on digital and business-awareness tasks with peers, building confidence in collaboration, planning, and responsibility.',
    skills: ['Teamwork', 'Planning', 'Digital tools'],
    pdf: certificateUrl('Raj Trans Stamping Pvt. Ltd..pdf'),
    thumbnail: thumbnailUrl('Raj_Trans_Stamping_Pvt_Ltd.jpg'),
  },
  {
    id: 'pulkit-oil-and-chem',
    company: 'Pulkit Oil and Chem LLP',
    title: 'Organisational Support',
    date: '20 Dec 2025',
    type: 'Industry exposure',
    sector: 'Community support',
    summary:
      'Provided one-day organisational support by helping with coordination, records, and basic team tasks while observing how shared responsibility keeps work moving.',
    skills: ['Coordination', 'Team support', 'Adaptability'],
    pdf: certificateUrl('Pulkit Oil And Chem LLP.pdf'),
    thumbnail: thumbnailUrl('Pulkit_Oil_And_Chem_LLP.jpg'),
  },
  {
    id: 'rajasthan-metal-industries',
    company: 'Rajasthan Metal Industries',
    title: 'Digital Record Conversion',
    date: '21 Dec 2025',
    type: 'Industry exposure',
    sector: 'Data organisation',
    summary:
      'Helped convert paper-based business records into digital spreadsheets, learning how careful data handling improves access, accuracy, and long-term record keeping.',
    skills: ['Data entry', 'Spreadsheet organisation', 'Accuracy'],
    pdf: certificateUrl('Rajasthan Metal Industries.pdf'),
    thumbnail: thumbnailUrl('Rajasthan_Metal_Industries.jpg'),
  },
  {
    id: 'sharad-industrial-products',
    company: 'Sharad Industrial Products',
    title: 'Inventory and Operations Support',
    date: '27 Dec 2025',
    type: 'Industry exposure',
    sector: 'Inventory management',
    summary:
      'Supported inventory records and routine operational documentation, seeing how organisation and consistency can improve day-to-day efficiency.',
    skills: ['Stock tracking', 'Operational documentation', 'Organisation'],
    pdf: certificateUrl('Sharad Industrial Products.pdf'),
    thumbnail: thumbnailUrl('Sharad_Industrial_Products.jpg'),
  },
  {
    id: 'shri-nath-cable-conductors',
    company: 'Shri Nath Cable & Conductors',
    title: 'Digital Workflow Support',
    date: '29 Dec 2025',
    type: 'Industry exposure',
    sector: 'Technology support',
    summary:
      'Assisted with digital records and basic technology tools, gaining confidence in simple workflows that keep operations organised and responsive.',
    skills: ['Digital records', 'Workflow support', 'Technology use'],
    pdf: certificateUrl('Shri Nath Cable & Condusctors.pdf'),
    thumbnail: thumbnailUrl('Shri_Nath_Cable_and_Condusctors.jpg'),
  },
  {
    id: 'rajasthan-metal-chemical-industries',
    company: 'Rajasthan Metal & Chemical Industries',
    title: 'Research and Structured Learning',
    date: '4 Jan 2026',
    type: 'Industry exposure',
    sector: 'Research and analysis',
    summary:
      'Used the opportunity to research business and technology ideas independently, turning curiosity into structured notes, comparison, and reflection.',
    skills: ['Research', 'Structured notes', 'Analytical thinking'],
    pdf: certificateUrl('Rajasthan Metal & Chemical Industries.pdf'),
    thumbnail: thumbnailUrl('Rajasthan_Metal_and_Chemical_Industries.jpg'),
  },
  {
    id: 'super-transformer-electricals',
    company: 'Super Transformer & Electricals',
    title: 'Presentation Design and Business Communication',
    date: '5 Jan 2026',
    type: 'Industry exposure',
    sector: 'Presentation design',
    summary:
      'Helped build a digital presentation by structuring slides, organising business information, and using visuals to improve clarity and communication.',
    skills: ['Slide design', 'Information structure', 'Visual communication'],
    pdf: certificateUrl('Super Transformer & Electricals.pdf'),
    thumbnail: thumbnailUrl('Super_Transformer_and_Electricals.jpg'),
  },
  {
    id: 'divya-electricals',
    company: 'Divya Electricals',
    title: 'Customer Feedback Review',
    date: '31 Jan 2026',
    type: 'Industry exposure',
    sector: 'Customer insight',
    summary:
      'Reviewed customer feedback, grouped recurring themes, and turned raw responses into a clearer view of what could improve the customer experience.',
    skills: ['Feedback analysis', 'Organisation', 'Decision support'],
    pdf: certificateUrl('Divya Electricals.pdf'),
    thumbnail: thumbnailUrl('Divya_Electricals.jpg'),
  },
  {
    id: 'deepak-transformers',
    company: 'Deepak Transformers Private Limited',
    title: 'Digital Stock Record Management',
    date: '1 Feb 2026',
    type: 'Industry exposure',
    sector: 'Inventory systems',
    summary:
      'Updated stock records in a digital app, strengthening accuracy, inventory tracking, and the discipline needed for day-to-day operations.',
    skills: ['Inventory management', 'Data entry', 'Operational efficiency'],
    pdf: certificateUrl('Deepak Transformers Private Limited.pdf'),
    thumbnail: thumbnailUrl('Deepak_Transformers_Private_Limited.jpg'),
  },
  {
    id: 'jupiter-lamination',
    company: 'Jupiter Lamination',
    title: 'Client Coordination and Scheduling',
    date: '6 Feb 2026',
    type: 'Industry exposure',
    sector: 'Client coordination',
    summary:
      'Coordinated client meetings and schedules, reinforcing the value of reliability, timing, and clear communication in a busy business setting.',
    skills: ['Client communication', 'Scheduling', 'Time management'],
    pdf: certificateUrl('Jupiter Lamination.pdf'),
    thumbnail: thumbnailUrl('Jupiter_Lamination.jpg'),
  },
  {
    id: 'rama-stamping',
    company: 'Rama Stamping',
    title: 'Professional Email Communication',
    date: '7 Feb 2026',
    type: 'Industry exposure',
    sector: 'Business communication',
    summary:
      'Drafted and structured professional email communication, strengthening clarity, tone, and practical business writing for workplace use.',
    skills: ['Email writing', 'Tone and clarity', 'Professional communication'],
    pdf: certificateUrl('Rama Stamping.pdf'),
    thumbnail: thumbnailUrl('Rama_Stamping.jpg'),
  },
];

export const industrySkillCards = [
  {
    title: 'Business Operations',
    description:
      'Seen across stock records, scheduling, and daily coordination work that keeps an organisation moving.',
  },
  {
    title: 'Communication',
    description:
      'Strengthened through client contact, email drafting, and social content support that required clarity and tone.',
  },
  {
    title: 'Documentation',
    description:
      'Built by organising feedback, records, and notes into clearer, more usable formats.',
  },
  {
    title: 'Digital Workflows',
    description:
      'Improved through inventory apps, spreadsheets, presentations, and digital record handling.',
  },
  {
    title: 'Customer Insight',
    description:
      'Developed from reviewing feedback, studying customer experience, and noticing what people value most.',
  },
  {
    title: 'Research and Analysis',
    description:
      'Strengthened by independent study, structured note-making, and the habit of comparing ideas carefully.',
  },
  {
    title: 'Professional Networking',
    description:
      'Built through networking coursework and the practice of connecting learning with people and opportunity.',
  },
  {
    title: 'AI and Productivity',
    description:
      'Improved by understanding how AI can support business thinking, prompt writing, and efficient work.',
  },
];

export const learningHighlights = [
  {
    title: 'Professional communication',
    description:
      'Writing, speaking, and structuring information clearly made everyday work easier and more effective.',
  },
  {
    title: 'Team collaboration',
    description:
      'Working with peers showed me how much better outcomes come from shared responsibility and trust.',
  },
  {
    title: 'Business processes',
    description:
      'I started seeing the small, repeated steps that keep a business organised and dependable.',
  },
  {
    title: 'Operational efficiency',
    description:
      'Good systems save time, reduce errors, and make work smoother for everyone involved.',
  },
  {
    title: 'Digital workflows',
    description:
      'Moving from paper to digital tools made records easier to manage and revisit.',
  },
  {
    title: 'Research and analysis',
    description:
      'Observing, comparing, and organising information helped me think more carefully before acting.',
  },
  {
    title: 'Entrepreneurial thinking',
    description:
      'Even small tasks showed me how value is created through consistency, judgement, and intention.',
  },
  {
    title: 'Workplace responsibility',
    description:
      'Each experience reinforced the importance of being reliable, respectful, and prepared.',
  },
];
