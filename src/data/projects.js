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
      'A structured framework for moving from a problem statement to a sharper business concept, a clearer value proposition, and practical next steps.',
    image: '/images/ideacanvas.png',
    tags: ['Strategy', 'Innovation'],
    filter: ['business', 'innovation'],
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    id: 'market-notes',
    title: 'Market Signals',
    description:
      'A research log for collecting customer insights, competitor observations, and market patterns before making decisions.',
    image: '/images/marketsignal.png',
    tags: ['Research', 'Business'],
    filter: ['research', 'business'],
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    id: 'pitch-deck',
    title: 'Pitch Narrative',
    description:
      'A concise storytelling structure for presenting an idea with clarity, confidence, and investor-friendly logic.',
    image: '/images/pitchnarrative.png',
    tags: ['Communication', 'Innovation'],
    filter: ['technology', 'innovation'],
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    id: 'finance-tracker',
    title: 'Finance Snapshot',
    description:
      'A lightweight financial view for tracking budget decisions, planning priorities, and staying close to the numbers.',
    image: '/images/finance.png',
    tags: ['Planning', 'Business'],
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
      'A simple system for capturing team feedback, action items, and the follow-through that keeps momentum moving.',
    image: '/images/collaboration.png',
    tags: ['Leadership', 'Research'],
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
      'A practical reference for choosing AI tools that support research, writing, presentation design, and planning.',
    image: '/images/aitools.png',
    tags: ['Technology', 'Productivity'],
    filter: ['technology', 'innovation'],
    links: {
      demo: '#',
      github: '#',
    },
  },
];

export const featuredProjects = projects.slice(0, 3);
