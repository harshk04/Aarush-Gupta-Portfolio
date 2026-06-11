export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'technology', label: 'Technology' },
  { id: 'business', label: 'Business' },
  { id: 'research', label: 'Research' },
  { id: 'innovation', label: 'Innovation' },
];

export const projects = [
  {
    id: 'idea-canvas',
    title: 'Idea Canvas',
    description:
      'A simple framework for moving from a problem statement to a business idea, value proposition, and first actions.',
    image: '/images/aarush.png',
    tags: ['Business', 'Innovation'],
    filter: ['business', 'innovation'],
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    id: 'market-notes',
    title: 'Market Research Notes',
    description:
      'A research board for collecting observations, competitor insights, and customer questions before building anything.',
    image: '/images/aarush.png',
    tags: ['Research', 'Business'],
    filter: ['research', 'business'],
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    id: 'pitch-deck',
    title: 'Pitch Deck Draft',
    description:
      'A presentation-first way to explain an idea clearly using structure, visuals, and concise storytelling.',
    image: '/images/aarush.png',
    tags: ['Technology', 'Innovation'],
    filter: ['technology', 'innovation'],
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    id: 'finance-tracker',
    title: 'Finance Tracker',
    description:
      'A spreadsheet-driven tracker for simple budgeting, planning, and understanding the numbers behind decisions.',
    image: '/images/aarush.png',
    tags: ['Business', 'Technology'],
    filter: ['business', 'technology'],
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    id: 'collaboration-log',
    title: 'Collaboration Log',
    description:
      'A notebook for keeping track of team feedback, action items, and what should happen next after a discussion.',
    image: '/images/aarush.png',
    tags: ['Innovation', 'Research'],
    filter: ['innovation', 'research'],
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    id: 'ai-tools-playbook',
    title: 'AI Tools Playbook',
    description:
      'A practical guide for choosing AI tools that help with research, writing, presentation design, and planning.',
    image: '/images/aarush.png',
    tags: ['Technology', 'Innovation'],
    filter: ['technology', 'innovation'],
    links: {
      demo: '#',
      github: '#',
    },
  },
];

export const featuredProjects = projects.slice(0, 3);
