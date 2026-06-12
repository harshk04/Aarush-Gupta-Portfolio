import Button from '../components/Button.jsx';
import Container from '../components/Container.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import Timeline from '../components/Timeline.jsx';
import { ArrowUpRight, BadgeCheck, BriefcaseBusiness, GraduationCap, Target, Zap } from 'lucide-react';
import {
  aboutContent,
  coreCompetencies,
  coreValues,
  education,
  personalInfo,
  socialLinks,
  professionalExperience,
} from '../data/profile.js';

const About = () => {
  return (
    <div className="space-y-24">
      <Seo
        title="About"
        description="A closer look at Aarush Gupta's journey, values, education, and entrepreneurial direction."
        url="https://aarushgupta.is-a.dev/about"
      />

      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_38%),radial-gradient(circle_at_85%_15%,rgba(168,85,247,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.1),transparent_36%),linear-gradient(135deg,rgba(14,165,233,0.05),transparent_36%,rgba(236,72,153,0.06))]" />
        <Container className="grid gap-8 py-4 lg:grid-cols-[minmax(0,1.85fr)_minmax(0,0.85fr)] lg:items-start lg:gap-16 lg:py-6">
          <div className="ui-surface relative order-2 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white/85 p-4 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-5 md:p-6 lg:order-1 lg:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-primary to-emerald-400" />
            <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_70%)] blur-3xl animate-vector-drift" />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.12),transparent_70%)] blur-3xl animate-vector-sweep" />

            <div className="relative space-y-5 sm:space-y-6">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-200 sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.32em]">
                  <BadgeCheck className="h-4 w-4" />
                  Student Entrepreneur
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.28em]">
                  <Zap className="h-4 w-4 text-emerald-400" />
                  Innovation Enthusiast
                </span>
              </div>

              <div className="max-w-3xl space-y-4 sm:space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                  About Me
                </p>
                <h1 className="font-heading text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[4.1rem] dark:text-white">
                  My Journey
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-200 sm:text-lg">
                  {aboutContent.description}
                </p>
              </div>

              <div className="space-y-4 border-t border-slate-200 pt-4 dark:border-white/10 sm:pt-5">
                <div className="space-y-2.5">
                  <h2 className="text-sm font-heading font-semibold uppercase tracking-[0.3em] text-primary">
                    Introduction
                  </h2>
                  <p className="max-w-2xl text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                    {aboutContent.introduction}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <h2 className="text-sm font-heading font-semibold uppercase tracking-[0.3em] text-primary">
                    Entrepreneurial Vision
                  </h2>
                  <p className="max-w-2xl text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                    {aboutContent.futureVision}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <h2 className="text-sm font-heading font-semibold uppercase tracking-[0.3em] text-primary">
                    What I’m Focused On
                  </h2>
                  <p className="max-w-2xl text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                    Right now, I am focused on school, internships, self-learning, and practical
                    experiences that sharpen how I think, communicate, and execute.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {aboutContent.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2.5">
                  <h2 className="text-sm font-heading font-semibold uppercase tracking-[0.3em] text-primary">
                    Long-Term Goal
                  </h2>
                  <p className="max-w-2xl text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                    I want to become a business leader who creates meaningful impact through
                    innovation, discipline, and thoughtful decision-making.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-1 sm:pt-2">
                <Button as="a" to="/contact">
                  Connect with me
                </Button>
                <Button as="a" to="/projects" variant="secondary">
                  View Projects
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-3 sm:gap-3 xl:grid-cols-4">
                {[
                  { label: 'Academic Journey', value: 'IBDP Student', icon: GraduationCap },
                  { label: 'Internships', value: 'Multiple', icon: BriefcaseBusiness },
                  { label: 'Certifications', value: '19+', icon: BadgeCheck },
                  { label: 'Goal', value: 'Entrepreneur', icon: Target },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-[1.4rem] border border-slate-200 bg-white/90 p-3 shadow-[0_12px_30px_-22px_rgba(15,23,42,0.22)] dark:border-white/10 dark:bg-white/5 sm:p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400 sm:text-[10px] sm:tracking-[0.28em]">
                          {item.label}
                        </p>
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <p className="mt-1.5 text-sm font-heading font-semibold text-slate-900 dark:text-white sm:mt-2 sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {socialLinks.slice(0, 3).map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={social.label}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 transition hover:border-primary/40 hover:text-primary dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                  >
                    {social.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative order-1 w-full lg:order-2 lg:mx-auto lg:max-w-[420px] lg:sticky lg:top-[100px] lg:pt-10 lg:self-start">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_40%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.14),transparent_36%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white p-2 shadow-[0_30px_75px_-35px_rgba(15,23,42,0.32)] backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-2.5 md:p-3">
              <div className="relative overflow-hidden rounded-[1.9rem] border border-slate-200 bg-slate-950 dark:border-white/10">
                <div className="h-[300px] overflow-hidden sm:h-[360px] md:h-[440px] lg:aspect-[4/5.1] lg:h-auto">
                  <img
                    src="/images/about.png"
                    alt={personalInfo.name}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

              </div>

              <div className="grid grid-cols-2 gap-2 p-2.5 sm:gap-3 sm:p-3">
                <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/5 sm:p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                    Academic Stage
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-900 dark:text-white">
                    Class 12
                  </p>
                </div>
                <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/5 sm:p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                    Future Role
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-900 dark:text-white">
                    Future Business Leader
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionTitle
            eyebrow="Academic Timeline"
            title="Schooling and learning path"
            description="These two schools laid the foundation for the habits, perspective, and resilience I bring today."
          />
          <Timeline
            items={education.map((item) => ({
              company: item.school,
              role: item.program,
              period: item.period,
              tag: item.status,
              description: [item.description],
            }))}
          />
        </Container>
      </section>

      <section>
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-10">
            <SectionTitle
              eyebrow="Now"
              title="How I’m building experience"
              description="These are the kinds of practical experiences I’m leaning into while preparing for higher education and future business work."
            />
            <Timeline items={professionalExperience} collapsible maxPoints={2} />
          </div>

          <div className="space-y-10">
            <SectionTitle
              eyebrow="Core Competencies"
              title="What I focus on"
              description="These are the skills and ways of thinking I keep strengthening through school, projects, and internships."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {coreCompetencies.map((item) => (
                <div
                  key={item.title}
                  className="ui-surface rounded-3xl border border-slate-200 bg-white p-5 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionTitle
            eyebrow="Guiding Principles"
            title="What guides me"
            description="These principles shape how I learn, work with others, and approach leadership."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="ui-surface rounded-3xl border border-slate-200 bg-white p-6 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
