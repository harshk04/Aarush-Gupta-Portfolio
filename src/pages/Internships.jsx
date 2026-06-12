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
import { exploredSectors, industrySkillCards, learningHighlights } from '../data/internships.js';
import { useInternships } from '../admin/hooks/useInternships.js';

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

const internshipGallery = [
  {
    src: '/images/internship1.jpg',
    alt: 'Industry exposure internship image',
    title: 'Industry Exposure',
    subtitle: 'Real-world business learning and practical insights',
  },
  {
    src: '/images/internship2.jpg',
    alt: 'Professional recognition internship image',
    title: 'Professional Recognition',
    subtitle: 'Certificates and documented achievements',
  },
];

const modalAnimation = {
  initial: { opacity: 0, scale: 0.96, y: 16 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.96, y: 16 },
};

const Internships = () => {
  const internshipTimeline = useInternships();
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
        <Container className="grid gap-12 py-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.85fr)] lg:items-stretch">
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

          <div className="relative mx-auto flex h-full w-full max-w-md lg:self-stretch">
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 via-cyan-400/20 to-emerald-400/20 blur-3xl" />
            <div className="ui-surface relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] border border-white/40 bg-slate-950/90 p-4 shadow-soft dark:border-white/10">
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
              </div>

              <div className="relative flex flex-1 flex-col gap-4 px-1 py-4">
                {internshipGallery.map((image, index) => (
                  <motion.div
                    key={image.src}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                    className="group relative flex-1 min-h-0 w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 transition-opacity duration-500" />
                    <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white sm:text-[0.9rem]">
                        {image.title}
                      </p>
                      <p className="mt-1 max-w-[90%] text-xs leading-relaxed text-white/90 sm:text-sm">
                        {image.subtitle}
                      </p>
                    </div>
                  </motion.div>
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
                      type="button"
                      onClick={() => setActiveCertificate(item)}
                      icon={ArrowUpRight}
                      iconPosition="right"
                    >
                      Open
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
                  className="group/preview relative hidden overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 text-left shadow-sm transition hover:-translate-y-1 hover:border-primary/40 dark:border-white/10 dark:bg-white/5 lg:block"
                  aria-label={`Open for ${item.company}`}
                >
                  <img
                    src={item.thumbnail}
                    alt={`${item.company} certificate preview`}
                    className="h-full w-full object-cover transition duration-300 group-hover/preview:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-[9998] flex items-center justify-center overflow-y-auto bg-black/60 p-2 backdrop-blur-lg sm:p-4"
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
              className="relative z-[9999] flex h-[90vh] w-[95vw] max-w-5xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl dark:bg-slate-950 lg:h-auto lg:max-h-[92vh]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="absolute right-3 top-3 z-[10000] inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-sm transition hover:border-primary/40 hover:text-primary dark:border-white/10 dark:bg-white/10 dark:text-white sm:right-4 sm:top-4"
                aria-label="Close certificate preview"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid min-h-0 flex-1 gap-0 overflow-hidden lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
                <div className="flex min-h-0 items-center justify-center bg-slate-950 p-3 sm:p-6">
                  <img
                    src={activeCertificate.thumbnail}
                    alt={`${activeCertificate.company} certificate preview`}
                    className="max-h-full max-w-full rounded-[1.5rem] object-contain bg-white"
                    decoding="async"
                  />
                </div>

                <div className="min-h-0 space-y-6 overflow-y-auto p-6 sm:p-8">
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
                      Open
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
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Internships;
