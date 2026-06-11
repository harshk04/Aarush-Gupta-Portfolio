import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  Download,
  FileBadge,
  Lightbulb,
  MessageSquare,
  Network,
  Presentation,
  ShieldCheck,
  Sparkles,
  Target,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import Button from '../components/Button.jsx';
import Container from '../components/Container.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import { exploredSectors, industrySkillCards, internshipTimeline, learningHighlights } from '../data/internships.js';
import { personalInfo } from '../data/profile.js';

const skillIconMap = {
  'Business Operations': BriefcaseBusiness,
  Communication: MessageSquare,
  Documentation: FileBadge,
  'Digital Workflows': Presentation,
  'Customer Insight': BadgeCheck,
  'Research and Analysis': Lightbulb,
  'Professional Networking': Network,
  'AI and Productivity': Sparkles,
};

const highlightIconMap = {
  'Professional communication': MessageSquare,
  'Team collaboration': BriefcaseBusiness,
  'Business processes': FileBadge,
  'Operational efficiency': Target,
  'Digital workflows': Presentation,
  'Research and analysis': Lightbulb,
  'Entrepreneurial thinking': Sparkles,
  'Workplace responsibility': ShieldCheck,
};

const featuredPreview = [
  internshipTimeline.find((item) => item.id === 'asha-ferrous-industries'),
  internshipTimeline.find((item) => item.id === 'deepak-transformers'),
  internshipTimeline.find((item) => item.id === 'jupiter-lamination'),
].filter(Boolean);

const modalAnimation = {
  initial: { opacity: 0, scale: 0.96, y: 16 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.96, y: 16 },
};

const Internships = () => {
  const [activeCertificate, setActiveCertificate] = useState(null);

  useEffect(() => {
    if (!activeCertificate) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveCertificate(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeCertificate]);

  return (
    <div className="space-y-24">
      <Seo
        title="Internships"
        description="Aarush Gupta's internships, industry exposure, certificates, and practical learning experiences."
        url="https://aarushgupta.is-a.dev/internships"
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-slate-50 dark:bg-slate-950" />
        <div className="pointer-events-none absolute -left-24 top-4 h-80 w-80 rounded-full bg-cyan-400/12 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-primary/12 blur-3xl" />
        <Container className="grid gap-12 py-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.85fr)] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-900 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10 dark:text-slate-100">
              Internships & Industry Exposure
            </span>

            <div className="space-y-5">
              <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.06] text-slate-900 sm:text-5xl lg:text-[3.5rem] dark:text-white">
                Learning business by working with businesses.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-200">
                A collection of practical experiences, industry exposure programs, business internships,
                certifications, and professional learning opportunities that have helped shape my
                understanding of business, operations, technology, communication, and entrepreneurship.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button as="a" href="#timeline">
                Explore experiences
              </Button>
              <Button as="a" to="/certifications" variant="secondary">
                View certificates
              </Button>
              <Button as="a" to="/contact" variant="ghost">
                Contact me
              </Button>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">
                Sectors explored
              </p>
              <div className="flex flex-wrap gap-2">
                {exploredSectors.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 via-cyan-400/20 to-emerald-400/20 blur-3xl" />
            <div className="ui-surface relative overflow-hidden rounded-[2rem] border border-white/40 bg-slate-950/90 p-4 shadow-soft dark:border-white/10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_28%)]" />
              <div className="relative flex items-center justify-between gap-3 border-b border-white/10 px-2 pb-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-200">
                    Practical learning
                  </p>
                  <p className="mt-1 text-sm text-slate-200">
                    Certificates, exposure, and real-world growth.
                  </p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-100">
                  {personalInfo.location}
                </div>
              </div>

              <div className="relative grid gap-3 px-1 py-4">
                {featuredPreview.map((item, index) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveCertificate(item)}
                    initial={{ opacity: 0, y: 18, rotate: -1 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
                    className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 text-left shadow-lg transition-transform hover:-translate-y-1 ${
                      index === 0 ? 'ml-0' : index === 1 ? 'ml-8' : 'ml-16'
                    }`}
                  >
                    <img
                      src={item.thumbnail}
                      alt={`${item.company} certificate preview`}
                      className="h-44 w-full object-cover opacity-90 transition duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/92 via-slate-950/70 to-transparent px-4 py-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-200">
                        {item.type}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">{item.company}</p>
                    </div>
                  </motion.button>
                ))}
              </div>

            </div>
          </div>
        </Container>
      </section>

      <section id="timeline">
        <Container className="space-y-10">
          <SectionTitle
            eyebrow="Experience Timeline"
            title="Internships, exposure, and practical learning"
            description="These entries show how classroom learning, workplace observation, and hands-on support came together across business, technology, and communication."
          />

          <div className="grid gap-6 xl:grid-cols-2">
            {internshipTimeline.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.42, ease: 'easeOut', delay: index * 0.03 }}
                className="ui-surface-strong group grid h-full gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5 md:p-6 lg:grid-cols-[minmax(0,1.2fr)_220px]"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">
                        {item.type}
                      </p>
                      <h3 className="mt-2 text-xl font-heading font-semibold text-slate-900 dark:text-white">
                        {item.company}
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {item.date}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.summary}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button
                      as="a"
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={ArrowUpRight}
                      iconPosition="right"
                    >
                      View certificate
                    </Button>
                    <Button
                      as="a"
                      href={item.pdf}
                      download
                      variant="secondary"
                      icon={Download}
                      iconPosition="right"
                    >
                      Download
                    </Button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveCertificate(item)}
                  className="group/preview relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 text-left shadow-sm transition hover:-translate-y-1 hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
                  aria-label={`Preview certificate for ${item.company}`}
                >
                  <img
                    src={item.thumbnail}
                    alt={`${item.company} certificate preview`}
                    className="h-full w-full object-cover transition duration-300 group-hover/preview:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/55 to-transparent px-4 py-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-200">
                      Preview
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      Click to open the certificate preview
                    </p>
                  </div>
                </button>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionTitle
            eyebrow="Industry Skills"
            title="Skills shaped by real exposure"
            description="These categories reflect the kinds of work, observation, and small responsibilities that helped turn experience into practical understanding."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {industrySkillCards.map((skill, index) => {
              const Icon = skillIconMap[skill.title] ?? BriefcaseBusiness;
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.05 }}
                  className="ui-surface rounded-3xl border border-slate-200 bg-white p-6 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-heading font-semibold text-slate-900 dark:text-white">
                    {skill.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionTitle
            eyebrow="Learning Highlights"
            title="What these experiences taught me"
            description="The value of these certificates is not just the credential itself, but the habits, perspective, and maturity that came with each one."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {learningHighlights.map((highlight, index) => {
              const Icon = highlightIconMap[highlight.title] ?? Sparkles;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.04 }}
                  className="ui-surface flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-heading font-semibold text-slate-900 dark:text-white">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      <AnimatePresence>
        {activeCertificate ? (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeCertificate.company} certificate preview`}
            onClick={() => setActiveCertificate(null)}
          >
            <motion.div
              initial={modalAnimation.initial}
              animate={modalAnimation.animate}
              exit={modalAnimation.exit}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl dark:bg-slate-950"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 transition hover:border-primary/40 hover:text-primary dark:border-white/10 dark:bg-white/10 dark:text-white"
                aria-label="Close certificate preview"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
                <div className="bg-slate-950 p-4 sm:p-6">
                  <img
                    src={activeCertificate.thumbnail}
                    alt={`${activeCertificate.company} certificate preview`}
                    className="max-h-[78vh] w-full rounded-[1.5rem] object-contain bg-white"
                  />
                </div>

                <div className="space-y-6 p-6 sm:p-8">
                  <div className="space-y-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">
                      {activeCertificate.type}
                    </p>
                    <h3 className="text-3xl font-heading font-semibold text-slate-900 dark:text-white">
                      {activeCertificate.company}
                    </h3>
                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                      {activeCertificate.title}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {activeCertificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {activeCertificate.summary}
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <a
                      href={activeCertificate.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                    >
                      Open in new tab
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href={activeCertificate.pdf}
                      download
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-primary/40 hover:text-primary dark:border-white/10 dark:text-slate-200"
                    >
                      Download certificate
                      <Download className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Internships;
