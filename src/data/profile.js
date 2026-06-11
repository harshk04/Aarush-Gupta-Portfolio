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
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${personalInfo.email}`,
  },
  {
    id: 'phone',
    label: 'Call',
    href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
  },
];

export const heroContent = {
  eyebrow: 'Innovation Enthusiast | Future Business Leader',
  heading: 'Building the Future Through Innovation & Entrepreneurship',
  subheading: 'A student-led portfolio shaped by leadership, curiosity, and real-world learning.',
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
    'Focused on turning ideas into practical work through discipline, creativity, and a strong sense of purpose.',
};

export const homeCta = {
  heading: "Let's build something incredible together.",
  paragraph:
    'If you are exploring collaboration, mentorship, or a meaningful conversation about business and innovation, I would love to connect.',
  primaryLabel: 'Send an Email',
  primaryHref: `mailto:${personalInfo.email}`,
  secondaryLabel: 'Connect on LinkedIn',
  secondaryHref: socialLinks[0]?.href ?? '/contact',
  image: '/images/connect.png',
  imageAlt: 'Aarush Gupta',
};

export const overviewStats = [
  { label: 'Academic Journey', value: 'IBDP Student' },
  { label: 'Internships Completed', value: 'Multiple' },
  { label: 'Future Goal', value: 'Entrepreneur' },
];

export const coreCompetencies = [
  {
    title: 'Entrepreneurship',
    description:
      'Spotting opportunities, shaping ideas clearly, and thinking about value before execution begins.',
  },
  {
    title: 'Leadership',
    description:
      'Taking initiative, communicating with clarity, and helping teams stay aligned around a shared goal.',
  },
  {
    title: 'Business Strategy',
    description:
      'Connecting planning, judgment, and execution so ideas can move from concept to real-world traction.',
  },
  {
    title: 'Innovation & Problem Solving',
    description:
      'Approaching challenges with curiosity, practical thinking, and the willingness to test better solutions.',
  },
];

export const aboutContent = {
  title: 'My Journey',
  description:
    'I am a student in Jaipur building toward a future in entrepreneurship and business leadership. My growth comes from academics, internships, self-directed learning, and the discipline to turn ideas into action.',
  introduction:
    'What draws me to entrepreneurship is the combination of creativity and responsibility. I enjoy understanding problems, thinking through solutions, and learning how to turn insight into meaningful work.',
  futureVision:
    'Over time, I want to develop the judgment, leadership, and execution needed to create businesses that are practical, ethical, and genuinely useful to people.',
  focusAreas: [
    'Entrepreneurship',
    'Leadership',
    'Business Strategy',
    'Innovation & Problem Solving',
  ],
  traits: [
    'Curiosity & Initiative',
    'Integrity & Accountability',
    'Continuous Learning',
    'Leadership',
    'Discipline & Excellence',
  ],
};

export const coreValues = [
  {
    title: 'Curiosity',
    description:
      'I stay open to new ideas, ask better questions, and keep learning so I can grow through every experience.',
  },
  {
    title: 'Integrity',
    description:
      'I value honesty, accountability, and ethical decision-making in both academic work and everyday life.',
  },
  {
    title: 'Discipline',
    description:
      'I believe consistent effort, structure, and follow-through are essential for long-term progress.',
  },
  {
    title: 'Initiative',
    description:
      'I like taking ownership early, turning ideas into action, and helping momentum build around meaningful work.',
  },
  {
    title: 'Impact',
    description:
      'I aim to create work that is practical, thoughtful, and genuinely useful to the people it reaches.',
  },
];

export const education = [
  {
    school: 'Jayshree Periwal International School',
    program: '6th to 12th',
    period: 'April 2020 to Present',
    status: 'Current School',
    image: '/images/jpis.jpeg',
    description:
      'Currently in 12th at JPIS in Jaipur, where I am strengthening academics, communication, and the discipline needed for higher education.',
  },
  {
    school: 'Maharaja Sawai Man Singh Vidyalaya',
    program: 'UKG to 5th',
    period: 'April 2014 to March 2020',
    status: 'Completed',
    image: '/images/maharajaschool.png',
    description:
      'An early foundation that built curiosity, consistency, and the habits that continue to shape how I learn today.',
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
      'Apply classroom learning in practical settings to better understand how business decisions are made.',
      'Strengthen communication, responsibility, and execution through real-world exposure.',
      'Observe how ideas are refined through feedback, structure, and consistent follow-through.',
    ],
  },
  {
    company: 'Independent Learning',
    role: 'Business and Innovation Explorer',
    period: 'Ongoing',
    tag: 'Self-Directed',
    category: 'professional',
    description: [
      'Study business, innovation, and technology through self-directed research and reflection.',
      'Turn ideas into notes, plans, and simple working models that make the next step clearer.',
    ],
  },
  {
    company: 'Academic Growth',
    role: 'Dedicated Student',
    period: 'Ongoing',
    tag: 'Academic',
    category: 'community',
    description: [
      'Balance academic responsibility with practical learning so each experience adds depth to the other.',
      'Build the discipline and perspective needed for higher education and future business ventures.',
    ],
  },
  {
    company: 'Collaborative Projects',
    role: 'Team Contributor',
    period: 'Ongoing',
    tag: 'Leadership',
    category: 'community',
    description: [
      'Work with others to communicate clearly, stay organised, and move ideas forward with purpose.',
      'Practice leadership by listening well, planning carefully, and helping teams stay focused.',
    ],
  },
];

export const professionalExperience = experience.filter((item) => item.category === 'professional');
export const otherExperience = experience.filter((item) => item.category !== 'professional');

export const courseCertificates = [
  {
    title: 'AI For Beginners',
    description: 'A strong introduction to artificial intelligence concepts and practical awareness.',
    link: '/certificates/AI For Beginners.pdf',
    category: 'Course completion',
  },
  {
    title: 'Agile Project Management',
    description: 'Built a stronger understanding of planning, iteration, and responsive execution.',
    link: '/certificates/Agile Project Maqnagement.pdf',
    category: 'Course completion',
  },
  {
    title: 'AI for Business Professionals',
    description: 'Explored how AI can support business decisions, productivity, and smarter workflows.',
    link: '/certificates/AI for Business Professionals.pdf',
    category: 'Course completion',
  },
  {
    title: 'Professional Networking for Career Growth',
    description: 'Focused on building professional relationships with clarity, confidence, and purpose.',
    link: '/certificates/Professional Networking for Career Growth.pdf',
    category: 'Course completion',
  },
  {
    title: 'Introduction to Cybersecurity Awareness',
    description: 'Gained practical awareness of digital safety, privacy, and responsible online behavior.',
    link: '/certificates/Introduction to Cybersecurity Awareness.pdf',
    category: 'Course completion',
  },
  {
    title: 'CX For Business Success',
    description: 'Learned how customer experience shapes trust, retention, and long-term business success.',
    link: '/certificates/CX For Business Success.pdf',
    category: 'Course completion',
  },
];

export const companyCertificates = [
  {
    title: 'Asha Ferrous Industries',
    description: 'Industry exposure that helped connect classroom ideas with real operational work.',
    link: '/certificates/Asha Ferrous Industries.pdf',
    category: 'Company / service',
  },
  {
    title: 'Deepak Transformers Private Limited',
    description: 'Practical learning experience that added perspective on business processes and teamwork.',
    link: '/certificates/Deepak Transformers Private Limited.pdf',
    category: 'Company / service',
  },
  {
    title: 'Divya Electricals',
    description: 'A meaningful step in understanding how consistent effort supports real business outcomes.',
    link: '/certificates/Divya Electricals.pdf',
    category: 'Company / service',
  },
  {
    title: 'Jupiter Lamination',
    description: 'Exposure to a working environment where observation and discipline mattered every day.',
    link: '/certificates/Jupiter Lamination.pdf',
    category: 'Company / service',
  },
  {
    title: 'Pulkit Oil And Chem LLP',
    description: 'A practical introduction to business activity, responsibility, and operational learning.',
    link: '/certificates/Pulkit Oil And Chem LLP.pdf',
    category: 'Company / service',
  },
  {
    title: 'Raj Trans Stamping Pvt. Ltd.',
    description: 'Real-world exposure that strengthened awareness of industrial processes and standards.',
    link: '/certificates/Raj Trans Stamping Pvt. Ltd..pdf',
    category: 'Company / service',
  },
  {
    title: 'Rajasthan Metal & Chemical Industries',
    description: 'Learning that highlighted how structure, scale, and process shape business performance.',
    link: '/certificates/Rajasthan Metal & Chemical Industries.pdf',
    category: 'Company / service',
  },
  {
    title: 'Rajasthan Metal Industries',
    description: 'Exposure that reinforced the value of observation, consistency, and professional conduct.',
    link: '/certificates/Rajasthan Metal Industries.pdf',
    category: 'Company / service',
  },
  {
    title: 'Rama Stamping',
    description: 'Hands-on learning that offered a clearer view of how businesses operate in practice.',
    link: '/certificates/Rama Stamping.pdf',
    category: 'Company / service',
  },
  {
    title: 'Sharad Industrial Products',
    description: 'Practical exposure that helped connect ideas, systems, and business outcomes.',
    link: '/certificates/Sharad Industrial Products.pdf',
    category: 'Company / service',
  },
  {
    title: 'Shri Nath Cable & Condusctors',
    description: 'Learning experience that added perspective on industry operations and workplace discipline.',
    link: '/certificates/Shri Nath Cable & Condusctors.pdf',
    category: 'Company / service',
  },
  {
    title: 'Super Conductor Industries',
    description: 'Exposure to a practical setting where attention, responsibility, and process mattered.',
    link: '/certificates/Super Conductor Industries.pdf',
    category: 'Company / service',
  },
  {
    title: 'Super Transformer & Electricals',
    description: 'A useful industry visit that strengthened awareness of production and business context.',
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
];
