import Button from '../components/Button.jsx';
import Container from '../components/Container.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import SocialLinks from '../components/SocialLinks.jsx';
import Timeline from '../components/Timeline.jsx';
import {
  aboutContent,
  coreCompetencies,
  education,
  featuredCertificates as certificateHighlights,
  homeCta,
  heroContent,
  overviewStats,
  personalInfo,
  professionalExperience,
  profileCard,
  socialLinks,
} from '../data/profile.js';
import { featuredProjects } from '../data/projects.js';

const Home = () => {
  const featuredExperience = professionalExperience.slice(0, 2);

  return (
    <div className="space-y-24">
      <Seo
        title="Home"
        description="Aarush Gupta's portfolio focused on entrepreneurship, innovation, business leadership, and practical learning."
        url="https://harshk.is-a.dev"
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.22),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.16),transparent_55%)]" />
        <Container className="grid gap-12 py-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-900 shadow-sm backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-slate-100">
              {heroContent.eyebrow}
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-heading font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] dark:text-white">
                Hi, I’m{' '}
                <span className="bg-gradient-to-r from-primary via-emerald-400 to-sky-400 bg-clip-text text-transparent animated-gradient-text">
                  {personalInfo.displayName}
                </span>
                .
                <br className="hidden sm:block" />
                {heroContent.heading}
              </h1>
              <p className="max-w-2xl text-base text-slate-700 sm:text-lg dark:text-slate-200">
                {heroContent.subheading}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button as="a" to={heroContent.primaryCta.href} iconPosition="right">
                {heroContent.primaryCta.label}
              </Button>
              <Button
                as="a"
                to={heroContent.secondaryCta.href}
                variant="secondary"
              >
                {heroContent.secondaryCta.label}
              </Button>
              <Button as="a" to="/harsh-contact" variant="ghost">
                Say hello
              </Button>
            </div>

            {socialLinks.length > 0 ? (
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">
                  Find me on
                </span>
                <SocialLinks links={socialLinks} className="gap-2" />
              </div>
            ) : (
              <p className="text-sm text-slate-600 dark:text-slate-300">
                I’m keeping public links minimal for now, so the contact page is the best place to start a conversation.
              </p>
            )}
          </div>

          <div className="relative mx-auto max-w-sm">
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[2.75rem] bg-gradient-to-tr from-fuchsia-500/20 via-cyan-400/20 to-emerald-400/20 blur-3xl" />
            <div className="ui-surface relative overflow-hidden rounded-[2.25rem] border border-white/30 bg-slate-950/70 p-2 shadow-soft backdrop-blur hover:border-primary/40 dark:border-white/10">
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.25rem]">
                <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.72)_0%,rgba(59,130,246,0.48)_34%,rgba(168,85,247,0.5)_64%,transparent_78%)] blur-3xl animate-vector-drift" />
                <div
                  className="absolute -right-20 bottom-[-3rem] h-72 w-[26rem] rounded-[3rem] bg-[linear-gradient(120deg,rgba(14,165,233,0.18),rgba(168,85,247,0.45),rgba(236,72,153,0.35),rgba(34,197,94,0.2))] blur-2xl opacity-80 animate-vector-sweep"
                  style={{ clipPath: 'polygon(12% 8%, 100% 0, 84% 100%, 0 86%)' }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(15,23,42,0.5)_0%,rgba(15,23,42,0.1)_45%,rgba(255,255,255,0.04)_100%)]" />
              </div>
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-sm">
                <img
                  src="/images/aarush.png"
                  alt={personalInfo.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative space-y-2 border-t border-white/10 px-5 py-4 text-xs text-slate-100">
                <p className="font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  {profileCard.title}
                </p>
                <p className="text-sm text-slate-200/90">
                  {profileCard.description}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="ui-surface grid gap-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
            {overviewStats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-3xl font-heading font-semibold text-primary">{stat.value}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionTitle eyebrow="About" title={aboutContent.title} />
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="ui-surface space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Story
              </h3>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                My journey is shaped by the goal of becoming a business leader who creates meaningful impact through innovation and disciplined execution.
              </p>
            </div>
            <div className="ui-surface space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Core values
              </h3>
              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                {aboutContent.traits.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionTitle
            eyebrow="Core Competencies"
            title="What I focus on"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {coreCompetencies.map((item) => (
              <div
                key={item}
                className="ui-surface rounded-3xl border border-slate-200 bg-white p-6 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">{item}</p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  A core strength I want to keep building through school, projects, and experience.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="ui-surface space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5">
            <SectionTitle
              eyebrow="Journey"
              title="A quick timeline of school and practical learning."
              description="The timeline below follows the academic path and the kind of real-world learning experiences described in the biography."
            />
            <Timeline items={featuredExperience} maxPoints={2} />
            <Button as="a" to="/harsh-about" variant="secondary">
              See the full story
            </Button>
          </div>

          <div className="ui-surface space-y-5 rounded-3xl border border-primary/20 bg-primary/5 p-6 shadow-soft hover:border-primary/40">
            <h3 className="text-base font-heading font-semibold text-primary">Projects</h3>
            <p className="text-sm text-slate-700 dark:text-slate-100">
              View the projects page to explore the work areas and ideas I’m building around.
            </p>
            <div className="space-y-4">
              {featuredProjects.slice(0, 3).map((project) => (
                <div
                  key={project.id}
                  className="ui-surface rounded-2xl border border-white/40 bg-white/40 p-4 text-sm shadow-sm hover:border-primary/40 dark:border-white/20 dark:bg-white/10"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                    {project.title}
                  </p>
                  <p className="mt-2 text-slate-700 dark:text-slate-200">{project.description}</p>
                </div>
              ))}
            </div>
            <Button as="a" to="/harsh-projects" variant="secondary">
              View projects
            </Button>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <SectionTitle
            eyebrow="Education"
            title="Schooling and academic milestones."
            description="These are the two education stops you shared, shown with the dates that matter most."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <div
                key={item.school}
                className="ui-surface-strong flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.school}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                      {item.period}
                    </span>
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/80">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-slate-900 dark:text-white">
                    {item.school}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    {item.program}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <SectionTitle
            eyebrow="Certificates"
            title="Certificates grouped by type."
            description="The first cards are online course completions, followed by company and service certificates, all linked to the renamed PDFs in `public/certificates`."
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {certificateHighlights.map((certificate, index) => (
              <a
                key={certificate.title}
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ui-surface rounded-2xl border border-slate-200 bg-white p-4 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                  Page {String(index + 1).padStart(2, '0')}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                  {certificate.title}
                </p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                  {certificate.description}
                </p>
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Button as="a" to="/harsh-certifications" variant="secondary">
              Open all certificate pages
            </Button>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              The full list contains 19 linked pages, one PDF per page of the original document.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#5b33ef_0%,#4528d6_54%,#8c57f4_100%)] px-6 py-8 text-white shadow-[0_30px_80px_-30px_rgba(55,33,165,0.8)] ring-1 ring-white/15 sm:px-8 sm:py-10 lg:px-14 lg:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(30deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.07)_18%,transparent_18%,transparent_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.14),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(255,255,255,0.08),transparent_26%)]" />
            <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-center">
              <div className="space-y-8">
                <div className="max-w-3xl space-y-5">
                  <h3 className="max-w-3xl text-4xl font-heading font-semibold leading-[1.06] text-white sm:text-5xl lg:text-[3.9rem]">
                    {homeCta.heading}
                  </h3>
                  <p className="max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
                    {homeCta.paragraph}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    as="a"
                    href={homeCta.primaryHref}
                    className="bg-white px-7 py-4 text-lg font-semibold text-primary shadow-[0_18px_40px_-22px_rgba(0,0,0,0.35)] hover:bg-white/95 hover:text-primary"
                  >
                    {homeCta.primaryLabel}
                  </Button>
                  <Button
                    as="a"
                    href={homeCta.secondaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    className="border border-white/25 bg-white/10 px-7 py-4 text-lg font-semibold text-white shadow-[0_18px_40px_-22px_rgba(0,0,0,0.35)] hover:bg-white/15"
                  >
                    {homeCta.secondaryLabel}
                  </Button>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[560px]">
                <div className="absolute -inset-4 rounded-[2rem] border border-white/20 bg-white/10" />
                <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/20 p-5 shadow-2xl">
                  <div className="overflow-hidden rounded-[1.2rem] bg-black">
                    <img
                      src={homeCta.image}
                      alt={homeCta.imageAlt}
                      className="aspect-square w-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
