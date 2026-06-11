import Button from '../components/Button.jsx';
import Container from '../components/Container.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import { education, certifications, courseCertificates } from '../data/profile.js';
import { internshipTimeline } from '../data/internships.js';
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Lightbulb,
  MessageSquare,
  Presentation,
  Rocket,
  Search,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { motion } from 'framer-motion';

const resumeStats = [
  { label: 'Academic Stage', value: 'Class 12 (IBDP)' },
  { label: 'Internships Completed', value: String(internshipTimeline.length) },
  { label: 'Certifications Earned', value: String(certifications.length) },
  { label: 'Focus Areas', value: 'Entrepreneurship, Business, Innovation' },
];

const strengthCards = [
  {
    title: 'Leadership',
    description:
      'Bringing structure, clarity, and steady direction to group work and practical tasks.',
    icon: Users,
  },
  {
    title: 'Entrepreneurship',
    description:
      'Looking for useful opportunities and turning early ideas into thoughtful next steps.',
    icon: Rocket,
  },
  {
    title: 'Business Strategy',
    description:
      'Connecting planning, judgment, and execution so ideas can move forward with purpose.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Public Speaking',
    description:
      'Using clear, confident communication to present ideas and build trust with others.',
    icon: MessageSquare,
  },
  {
    title: 'Research & Analysis',
    description:
      'Comparing information carefully, identifying patterns, and turning notes into insight.',
    icon: Search,
  },
  {
    title: 'Innovation & Problem Solving',
    description:
      'Approaching challenges with curiosity and a practical mindset for better solutions.',
    icon: Lightbulb,
  },
  {
    title: 'AI & Technology Tools',
    description:
      'Using digital tools and AI-aware thinking to work smarter and stay adaptable.',
    icon: BrainCircuit,
  },
  {
    title: 'Communication',
    description:
      'Writing and speaking with clarity so ideas are easy to understand and act on.',
    icon: Presentation,
  },
];

const focusAreas = [
  'Entrepreneurship',
  'Business Strategy',
  'Innovation',
  'Leadership',
  'Research',
  'AI Tools',
  'Communication',
  'Productivity',
];

const featuredCerts = courseCertificates;

const Resume = () => {
  const featuredExperience = internshipTimeline.slice(0, 6);

  return (
    <div className="space-y-20">
      <Seo
        title="Resume"
        description="A concise executive summary of Aarush Gupta's academic journey, practical experience, certifications, and future direction."
        url="https://aarushgupta.is-a.dev/resume"
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.1),transparent_34%)]" />
        <Container className="space-y-8">
          <div className="ui-surface grid gap-8 rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                PROFILE OVERVIEW
              </p>
              <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.08] text-slate-900 sm:text-5xl lg:text-[3.5rem] dark:text-white">
                A concise summary of my academic journey, practical experience, and future aspirations.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-200">
                I am a student entrepreneur and business & innovation enthusiast shaped by internships,
                certifications, and a steady commitment to continuous learning. I care about building
                practical knowledge, communicating clearly, and growing through real-world exposure.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
              {resumeStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.04 }}
                  className="rounded-[1.4rem] border border-slate-200 bg-white/90 p-4 text-center shadow-[0_12px_30px_-22px_rgba(15,23,42,0.22)] dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-base font-heading font-semibold text-slate-900 dark:text-white">
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionTitle
            eyebrow="Key Highlights"
            title="Strengths that show up across school, projects, and internships"
            description="These are the capabilities I keep strengthening as I prepare for higher education and future business work."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {strengthCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.04 }}
                  className="ui-surface rounded-3xl border border-slate-200 bg-white p-6 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-heading font-semibold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {card.description}
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
            eyebrow="Academic Journey"
            title="Schooling that shaped the foundation"
            description="A simple timeline of the schools and stages that helped build discipline, perspective, and consistency."
          />
          <div className="relative space-y-6 border-l border-slate-200 pl-6 dark:border-white/10 md:pl-8">
            {education.map((item, index) => (
              <motion.article
                key={item.school}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.05 }}
                className="relative ui-surface rounded-3xl border border-slate-200 bg-white p-6 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
              >
                <span className="absolute -left-[33px] top-7 h-3 w-3 rounded-full border-2 border-primary bg-white dark:bg-background" />
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">
                      {item.program}
                    </p>
                    <h3 className="mt-2 text-xl font-heading font-semibold text-slate-900 dark:text-white">
                      {item.school}
                    </h3>
                  </div>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                    {item.status}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span>{item.period}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-400" />
                  <span>{item.status}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionTitle
            eyebrow="Practical Experience"
            title="Internships and industry exposure"
            description="A focused look at the real-world experiences that helped connect classroom learning with business practice."
          />

          <div className="grid gap-6 xl:grid-cols-2">
            {featuredExperience.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.42, ease: 'easeOut', delay: index * 0.04 }}
                className="ui-surface-strong grid gap-5 overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5 md:p-6 lg:grid-cols-[minmax(0,1fr)_280px]"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">
                        Industry Exposure
                      </p>
                      <h3 className="mt-2 text-xl font-heading font-semibold text-slate-900 dark:text-white">
                        {item.company}
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      {item.date}
                    </span>
                  </div>

                  <p className="text-sm font-medium uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">
                    {item.sector}
                  </p>

                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.summary}
                  </p>

                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                      Skills developed
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
                      View Certificate
                    </Button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => window.open(item.pdf, '_blank', 'noopener,noreferrer')}
                  className="relative flex min-h-[360px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
                  aria-label={`Open certificate for ${item.company}`}
                >
                  <img
                    src={item.thumbnail}
                    alt={`${item.company} certificate preview`}
                    className="h-full w-full object-contain object-center"
                    loading="lazy"
                  />
                </button>
              </motion.article>
            ))}
          </div>

          <div className="flex justify-start">
            <Button as="a" to="/internships" variant="secondary">
              View internships
            </Button>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionTitle
            eyebrow="Certifications Snapshot"
            title="Featured learning credentials"
            description="A compact set of certifications that supports my interest in business, technology, and continuous learning."
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {featuredCerts.map((certificate, index) => (
              <motion.article
                key={certificate.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.04 }}
                className="ui-surface rounded-3xl border border-slate-200 bg-white p-5 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-base font-heading font-semibold text-slate-900 dark:text-white">
                  {certificate.title}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                  {certificate.category}
                </p>
                <Button
                  as="a"
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="mt-5 w-max"
                >
                  View
                </Button>
              </motion.article>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button as="a" to="/certifications">
              View All Certifications
            </Button>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionTitle
            eyebrow="Focus Areas"
            title="Topics I keep building around"
            description="These are the ideas and skill areas that consistently shape my learning and direction."
          />
          <div className="flex flex-wrap gap-3">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                {area}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="ui-surface grid gap-8 rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-soft hover:border-primary/40 sm:p-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-center">
            <div className="max-w-3xl space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Where I&apos;m Headed
              </p>
              <h2 className="font-heading text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
                Building practical business knowledge and leadership through real-world exposure.
              </h2>
              <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200">
                I’m focused on learning through internships, projects, and everyday problem solving so I
                can strengthen execution, judgment, and leadership. My long-term direction is to become
                an entrepreneur and business leader who builds meaningful value with discipline and
                clarity.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button as="a" to="/projects">
                  View Full Portfolio
                </Button>
                <Button as="a" to="/contact" variant="secondary">
                  Contact Me
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.25rem] bg-gradient-to-tr from-primary/20 via-cyan-400/15 to-emerald-400/20 blur-3xl" />
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_50px_-28px_rgba(15,23,42,0.28)] dark:border-white/10 dark:bg-white/5">
                <img
                  src="/images/connect.png"
                  alt="Aarush Gupta connecting with collaborators"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Resume;
