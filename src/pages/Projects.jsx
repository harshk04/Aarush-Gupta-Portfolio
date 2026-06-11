import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

import Container from '../components/Container.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import { projectFilters, projects } from '../data/projects.js';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((project) => project.filter?.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="space-y-16">
      <Seo
        title="Projects"
        description="A curated showcase of ideas, research, and practical work shaped by Aarush Gupta's interests in business, innovation, and technology."
        url="https://aarushgupta.is-a.dev/projects"
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.16),transparent_55%),radial-gradient(circle_at_bottom,rgba(45,212,191,0.18),transparent_55%)]" />
        <Container className="ui-surface grid gap-10 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-soft backdrop-blur hover:border-primary/40 dark:border-white/10 dark:bg-white/10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-4 text-left">
            <SectionTitle
              eyebrow="Projects"
              title="Ideas shaped with purpose."
              description="A curated collection of concepts, research, and practical thinking that reflects how Aarush approaches business and innovation."
            />
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="ui-surface space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5 lg:sticky lg:top-24 lg:self-start">
            <h3 className="text-sm font-heading font-semibold text-slate-900 dark:text-white">
              Filters
            </h3>
            <div className="space-y-2">
              {projectFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`ui-surface flex w-full items-center justify-between rounded-full border px-4 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                    activeFilter === filter.id
                      ? 'border-primary bg-primary text-primary-foreground shadow-soft'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-primary/40 hover:text-primary dark:border-white/10 dark:bg-transparent dark:text-slate-300'
                  }`}
                >
                  <span>{filter.label}</span>
                </button>
              ))}
            </div>
          </aside>

          <motion.div
            key={activeFilter}
            layout
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default Projects;
