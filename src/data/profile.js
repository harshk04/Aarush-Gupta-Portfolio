export const personalInfo = {
  name: 'Aarush Gupta',
  displayName: 'Aarush Gupta',
  role: 'Aspiring Entrepreneur | Student | Future Business Leader',
  location: 'Jaipur, India',
  email: 'aarushgupta2026@gmail.com',
  phone: '+91 8209414035',
  age: 18,
  resumeUrl: '/resume',
  availability: 'In 12th',
};

export const socialLinks = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aarush-gupta-051795304/',
  },
];

export const heroContent = {
  eyebrow: 'Aspiring Entrepreneur | Student | Future Business Leader',
  heading: 'Building the Future Through Innovation & Entrepreneurship',
  subheading: 'Student • Future Entrepreneur • Business Enthusiast',
  primaryCta: {
    label: 'View Projects',
    href: '/projects',
  },
  secondaryCta: {
    label: 'Contact Me',
    href: '/contact',
  },
};

export const profileCard = {
  title: 'Aspiring Entrepreneur',
  description:
    'Passionate about innovation, startups, leadership, and creating meaningful business solutions.',
};

export const homeCta = {
  heading: "Let's build something incredible together.",
  paragraph:
    "Whether you're looking for a collaborator, a mentee, or just want to discuss the future of innovation, I'd love to hear from you.",
  primaryLabel: 'Send an Email',
  primaryHref: `mailto:${personalInfo.email}`,
  secondaryLabel: 'Connect on LinkedIn',
  secondaryHref: socialLinks[0]?.href ?? '/contact',
  image: '/images/aarush.png',
  imageAlt: 'Aarush Gupta',
};

export const overviewStats = [
  { label: 'Academic Journey', value: 'IBDP Student' },
  { label: 'Internships Completed', value: 'Multiple' },
  { label: 'Future Goal', value: 'Entrepreneur' },
];

export const coreCompetencies = [
  'Entrepreneurship',
  'Leadership',
  'Business Strategy',
  'Innovation & Problem Solving',
];

export const aboutContent = {
  title: 'My Journey',
  description:
    'I am a student with a strong passion for entrepreneurship, innovation, and business leadership. I actively participate in internships and practical learning experiences to develop real-world skills while preparing for higher education and future business ventures.',
  introduction:
    'I am passionate about solving real-world problems through business, innovation, and technology. My goal is to pursue higher education, gain valuable experience, and build impactful companies that create lasting value.',
  futureVision:
    'I believe in continuous learning, practical experience, and creating solutions that make a real impact. Through internships, projects, and academic growth, I am building the foundation for my entrepreneurial journey.',
  focusAreas: [
    'Entrepreneurship',
    'Leadership',
    'Business Strategy',
    'Innovation & Problem Solving',
  ],
  traits: [
    'Creativity & Innovation',
    'Integrity & Honesty',
    'Continuous Learning',
    'Leadership',
    'Excellence & Discipline',
  ],
};

export const philosophyQuote = {
  text: 'Success comes from consistent learning, disciplined execution, and the courage to innovate.',
  attribution: '',
};

export const coreValues = [
  {
    title: 'Creativity & Innovation',
    description:
      'I believe in finding creative solutions to real-world problems and continuously exploring new ideas that can create meaningful impact.',
  },
  {
    title: 'Integrity & Honesty',
    description:
      'I value honesty, transparency, and ethical decision-making in every aspect of my academic, professional, and personal journey.',
  },
  {
    title: 'Continuous Learning',
    description:
      'I strive to improve myself every day by embracing new knowledge, practical experiences, and lifelong learning.',
  },
  {
    title: 'Leadership',
    description:
      'I believe true leadership is about inspiring others, taking responsibility, and working collaboratively toward a shared vision.',
  },
  {
    title: 'Excellence & Discipline',
    description:
      'I am committed to delivering my best in everything I do, maintaining high standards, discipline, and consistency in achieving my goals.',
  },
];

export const education = [
  {
    school: 'Jayshree Periwal International School',
    program: '6th to 12th',
    period: 'April 2020 to Present',
    status: 'Current School',
    image: '/images/jpis.jpeg',
    description: 'Currently in 12th and studying at JPIS in Jaipur.',
  },
  {
    school: 'Maharaja Sawai Man Singh Vidyalaya',
    program: 'UKG to 5th',
    period: 'April 2014 to March 2020',
    status: 'Completed',
    image: '/images/maharajaschool.png',
    description: 'Early schooling and a strong foundation in academics and habits of learning.',
  },
];

export const experience = [
  {
    company: 'Internships and Practical Learning',
    role: 'Student Intern',
    period: 'Present',
    tag: 'Experience',
    category: 'professional',
    description: [
      'Participate in internships and practical learning experiences to develop real-world skills.',
      'Use each opportunity to strengthen communication, responsibility, and execution.',
      'Learn how ideas are shaped, tested, and improved in real business settings.',
    ],
  },
  {
    company: 'Independent Learning',
    role: 'Business and Innovation Explorer',
    period: 'Ongoing',
    tag: 'Self-Directed',
    category: 'professional',
    description: [
      'Study business, innovation, and technology through self-directed learning.',
      'Turn ideas into notes, plans, presentations, and simple working models.',
    ],
  },
  {
    company: 'Academic Growth',
    role: 'Dedicated Student',
    period: 'Ongoing',
    tag: 'Academic',
    category: 'community',
    description: [
      'Balance academics with practical learning so the two reinforce each other.',
      'Build the discipline needed for higher education and future business ventures.',
    ],
  },
  {
    company: 'Collaborative Projects',
    role: 'Team Contributor',
    period: 'Ongoing',
    tag: 'Leadership',
    category: 'community',
    description: [
      'Work with others to communicate clearly, stay organised, and move ideas forward.',
      'Practice leadership by listening, planning, and helping teams stay focused.',
    ],
  },
];

export const professionalExperience = experience.filter((item) => item.category === 'professional');
export const otherExperience = experience.filter((item) => item.category !== 'professional');

export const services = [
  {
    title: 'Entrepreneurship Mindset',
    description:
      'Looking at problems like opportunities and turning early ideas into simple, testable plans.',
    highlights: ['Problem framing', 'Opportunity spotting', 'Idea validation'],
    icon: 'brain-circuit',
  },
  {
    title: 'Business Strategy',
    description:
      'Thinking about markets, value, and execution so a concept can move from thought to action.',
    highlights: ['Planning', 'Decision-making', 'Financial awareness'],
    icon: 'layers',
  },
  {
    title: 'Communication and Presentation',
    description:
      'Using writing, slides, and speaking to make ideas easier to understand and support.',
    highlights: ['Public speaking', 'PowerPoint', 'Canva'],
    icon: 'cloud',
  },
];

export const courseCertificates = [
  {
    title: 'AI For Beginners',
    description: 'Online course completion certificate.',
    link: '/certificates/AI For Beginners.pdf',
    category: 'Course completion',
  },
  {
    title: 'Agile Project Maqnagement',
    description: 'Online course completion certificate.',
    link: '/certificates/Agile Project Maqnagement.pdf',
    category: 'Course completion',
  },
  {
    title: 'AI for Business Professionals',
    description: 'Online course completion certificate.',
    link: '/certificates/AI for Business Professionals.pdf',
    category: 'Course completion',
  },
  {
    title: 'Professional Networking for Career Growth',
    description: 'Online course completion certificate.',
    link: '/certificates/Professional Networking for Career Growth.pdf',
    category: 'Course completion',
  },
  {
    title: 'Introduction to Cybersecurity Awareness',
    description: 'Online course completion certificate.',
    link: '/certificates/Introduction to Cybersecurity Awareness.pdf',
    category: 'Course completion',
  },
  {
    title: 'CX For Business Success',
    description: 'Online course completion certificate.',
    link: '/certificates/CX For Business Success.pdf',
    category: 'Course completion',
  },
];

export const companyCertificates = [
  {
    title: 'Asha Ferrous Industries',
    description: 'Certificate from company/service involvement.',
    link: '/certificates/Asha Ferrous Industries.pdf',
    category: 'Company / service',
  },
  {
    title: 'Deepak Transformers Private Limited',
    description: 'Certificate from company/service involvement.',
    link: '/certificates/Deepak Transformers Private Limited.pdf',
    category: 'Company / service',
  },
  {
    title: 'Divya Electricals',
    description: 'Certificate from company/service involvement.',
    link: '/certificates/Divya Electricals.pdf',
    category: 'Company / service',
  },
  {
    title: 'Jupiter Lamination',
    description: 'Certificate from company/service involvement.',
    link: '/certificates/Jupiter Lamination.pdf',
    category: 'Company / service',
  },
  {
    title: 'Pulkit Oil And Chem LLP',
    description: 'Certificate from company/service involvement.',
    link: '/certificates/Pulkit Oil And Chem LLP.pdf',
    category: 'Company / service',
  },
  {
    title: 'Raj Trans Stamping Pvt. Ltd.',
    description: 'Certificate from company/service involvement.',
    link: '/certificates/Raj Trans Stamping Pvt. Ltd..pdf',
    category: 'Company / service',
  },
  {
    title: 'Rajasthan Metal & Chemical Industries',
    description: 'Certificate from company/service involvement.',
    link: '/certificates/Rajasthan Metal & Chemical Industries.pdf',
    category: 'Company / service',
  },
  {
    title: 'Rajasthan Metal Industries',
    description: 'Certificate from company/service involvement.',
    link: '/certificates/Rajasthan Metal Industries.pdf',
    category: 'Company / service',
  },
  {
    title: 'Rama Stamping',
    description: 'Certificate from company/service involvement.',
    link: '/certificates/Rama Stamping.pdf',
    category: 'Company / service',
  },
  {
    title: 'Sharad Industrial Products',
    description: 'Certificate from company/service involvement.',
    link: '/certificates/Sharad Industrial Products.pdf',
    category: 'Company / service',
  },
  {
    title: 'Shri Nath Cable & Condusctors',
    description: 'Certificate from company/service involvement.',
    link: '/certificates/Shri Nath Cable & Condusctors.pdf',
    category: 'Company / service',
  },
  {
    title: 'Super Conductor Industries',
    description: 'Certificate from company/service involvement.',
    link: '/certificates/Super Conductor Industries.pdf',
    category: 'Company / service',
  },
  {
    title: 'Super Transformer & Electricals',
    description: 'Certificate from company/service involvement.',
    link: '/certificates/Super Transformer & Electricals.pdf',
    category: 'Company / service',
  },
];

export const certifications = [...courseCertificates, ...companyCertificates];
export const featuredCertificates = certifications.slice(0, 4);

export const blogPosts = [
  {
    slug: 'why-entrepreneurship-feels-natural-to-me',
    title: 'Why Entrepreneurship Feels Natural to Me',
    description:
      'A short reflection on why business, innovation, and leadership fit the way I like to learn and solve problems.',
    date: 'Mar 2026',
    readTime: '4 min read',
    tags: ['Entrepreneurship', 'Mindset', 'Business'],
    heroImage: '/images/aarush.png',
    content: [
      'Entrepreneurship feels natural to me because it connects curiosity, problem-solving, and execution. I enjoy looking at how an idea can become something useful in the real world.',
      'What keeps me interested is the mix of creativity and discipline. New ideas matter, but structure and follow-through are what make them valuable.',
      'I also like that entrepreneurship rewards learning by doing. Every project, internship, or experiment becomes a chance to improve judgment and communication.',
    ],
  },
  {
    slug: 'what-practical-learning-is-teaching-me',
    title: 'What Practical Learning Is Teaching Me',
    description:
      'A note on internships, hands-on experience, and why real-world learning matters so much to me.',
    date: 'Feb 2026',
    readTime: '5 min read',
    tags: ['Learning', 'Internships', 'Growth'],
    heroImage: '/images/aarush.png',
    content: [
      'Practical learning is valuable because it shows how ideas behave outside a textbook. It forces me to notice details, manage time, and communicate clearly.',
      'Internships and real projects make it easier to understand what businesses actually need from people: reliability, clarity, and the ability to keep improving.',
      'Every experience like that helps me prepare for higher education and the larger responsibilities that come with building companies later on.',
    ],
  },
  {
    slug: 'how-i-approach-opportunities-and-ideas',
    title: 'How I Approach Opportunities and Ideas',
    description:
      'A simple framework for staying curious, staying organised, and deciding which ideas are worth pursuing.',
    date: 'Jan 2026',
    readTime: '3 min read',
    tags: ['Ideas', 'Focus', 'Student Life'],
    heroImage: '/images/aarush.png',
    content: [
      'When I see an opportunity, I try to understand the problem first. A good idea only becomes useful if it solves something people actually care about.',
      'I usually start with a simple outline, then add research, a clearer plan, and a few next actions. That keeps the idea manageable.',
      'This approach helps me stay focused on work that can turn into meaningful progress instead of just interesting notes.',
    ],
  },
];

export const contactChannels = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
  },
  {
    label: 'LinkedIn',
    value: 'aarush-gupta-051795304',
    href: socialLinks[0].href,
  },
];
