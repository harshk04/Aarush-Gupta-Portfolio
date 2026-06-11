import Button from '../components/Button.jsx';
import Container from '../components/Container.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import Timeline from '../components/Timeline.jsx';
import {
  aboutContent,
  coreCompetencies,
  coreValues,
  education,
  personalInfo,
  philosophyQuote,
  professionalExperience,
} from '../data/profile.js';

const About = () => {
  return (
    <div className="space-y-24">
      <Seo
        title="About"
        description="A detailed look at Aarush Gupta's journey, values, education, and entrepreneurial ambitions."
        url="https://aarushgupta.is-a.dev/about"
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_45%),linear-gradient(135deg,rgba(14,165,233,0.08),transparent_35%,rgba(236,72,153,0.08))]" />
        <Container className="grid gap-10 py-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
          <div className="space-y-6">
            <SectionTitle eyebrow="About Me" title="My Journey" description={aboutContent.description} />
            <div className="space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
              <p>{aboutContent.introduction}</p>
              <p>{aboutContent.futureVision}</p>
              <p>
                Right now, I’m focused on school, internships, self-learning, and practical experiences
                that help me grow as a future business leader. I like learning by doing, because that is
                where ideas become real skills.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button as="a" to="/contact">
                Connect with me
              </Button>
              <Button as="a" to="/projects" variant="secondary">
                View projects
              </Button>
            </div>
          </div>

          <div className="ui-surface relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950/80 p-2 shadow-soft hover:border-primary/40 dark:border-white/10">
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
              <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.72)_0%,rgba(59,130,246,0.45)_34%,rgba(168,85,247,0.5)_64%,transparent_78%)] blur-3xl animate-vector-drift" />
              <div
                className="absolute -right-20 bottom-[-3rem] h-72 w-[26rem] rounded-[3rem] bg-[linear-gradient(120deg,rgba(14,165,233,0.18),rgba(168,85,247,0.46),rgba(236,72,153,0.34),rgba(34,197,94,0.2))] blur-2xl opacity-80 animate-vector-sweep"
                style={{ clipPath: 'polygon(12% 8%, 100% 0, 84% 100%, 0 86%)' }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(15,23,42,0.55)_0%,rgba(15,23,42,0.15)_45%,rgba(255,255,255,0.06)_100%)]" />
            </div>

            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="aspect-[4/4.4] overflow-hidden">
                <img
                  src="/images/aarush.png"
                  alt={personalInfo.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="grid gap-4 border-t border-white/10 p-5 text-sm text-slate-100 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    Name
                  </p>
                  <p className="mt-1 font-medium">{personalInfo.name}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    Role
                  </p>
                  <p className="mt-1 font-medium">{personalInfo.role}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    Location
                  </p>
                  <p className="mt-1 font-medium">{personalInfo.location}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    Status
                  </p>
                  <p className="mt-1 font-medium">{personalInfo.availability}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionTitle
            eyebrow="Philosophy"
            title="What drives me"
            description="The quote below reflects how I approach school, internships, and the long-term path toward entrepreneurship."
          />
          <div className="ui-surface rounded-3xl border border-slate-200 bg-white p-8 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5">
            <blockquote className="text-lg leading-relaxed text-slate-700 dark:text-slate-200 sm:text-xl">
              “{philosophyQuote.text}”
            </blockquote>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionTitle
            eyebrow="Academic Timeline"
            title="Schooling and learning path"
            description="These are the two key schooling stages you shared, shown in chronological order."
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
              description="These are the skills and thinking styles I keep developing through school, projects, and internships."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {coreCompetencies.map((item) => (
                <div
                  key={item}
                  className="ui-surface rounded-3xl border border-slate-200 bg-white p-5 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                    {item}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    Built through active learning, practice, and a genuine interest in creating useful
                    work.
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
            eyebrow="Core Values"
            title="What guides me"
            description="The values below shape how I learn, work with others, and think about leadership."
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
