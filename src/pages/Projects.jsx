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
        description="A gallery of idea-driven projects focused on business, research, technology, and innovation."
        url="https://harshk.is-a.dev/harsh-projects"
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.16),transparent_55%),radial-gradient(circle_at_bottom,rgba(45,212,191,0.18),transparent_55%)]" />
        <Container className="ui-surface grid gap-10 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-soft backdrop-blur hover:border-primary/40 dark:border-white/10 dark:bg-white/10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-4 text-left">
            <SectionTitle
              eyebrow="Project gallery"
              title="Idea-led work, not filler."
              description="Each card here points to a concept or working direction that fits Aarush's interests in business, innovation, research, and technology."
            />
          </div>
          <div className="ui-surface space-y-4 rounded-2xl border border-slate-200 bg-white/90 p-5 text-sm text-slate-700 shadow-sm hover:border-primary/40 dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-200">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              How to read this page
            </p>
            <p>
              Use the filters to browse the projects by theme. The cards are designed to keep the portfolio useful and honest while still feeling complete.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="ui-surface space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5 lg:sticky lg:top-24 lg:self-start">
            <h3 className="text-sm font-heading font-semibold text-slate-900 dark:text-white">
              Filter by theme
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
                  {activeFilter === filter.id && (
                    <span className="text-[10px] uppercase tracking-[0.2em]">Active</span>
                  )}
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
