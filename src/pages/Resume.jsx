import Button from '../components/Button.jsx';
import Container from '../components/Container.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import { certifications, personalInfo, professionalExperience, education } from '../data/profile.js';
import { skills } from '../data/skills.js';

const Resume = () => (
  <div className="space-y-20">
    <Seo
      title="Resume"
      description="A resume-style overview of Aarush Gupta's skills, education, experience, and certificate pages."
      url="https://harshk.is-a.dev/harsh-resume"
    />

    <section>
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Skills"
          title="Self-assessed strengths"
          description="These bars show the areas Aarush wants to keep strengthening as he builds toward higher education and future business work."
        />
        <div className="flex flex-wrap gap-3">
          <Button as="a" href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
            Open resume overview
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="ui-surface rounded-3xl border border-slate-200 bg-white p-6 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  {skill.name}
                </h3>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {skill.level}%
                </span>
              </div>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary via-emerald-400 to-sky-400"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>

    <section>
      <Container className="space-y-6">
        <SectionTitle
          eyebrow="Experience"
          title="Internships and practical learning"
          description="These entries keep the resume honest by focusing on the kinds of learning experiences Aarush actually described."
        />
        <div className="ui-surface space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5">
          {professionalExperience.map((item) => (
            <div
              key={`${item.company}-${item.role}-${item.period}`}
              className="border-b border-slate-100 pb-6 pt-2 last:border-b-0 last:pb-0 dark:border-white/10"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {item.role} · {item.company}
                </p>
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  {item.period}
                </p>
              </div>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                {item.tag}
              </p>
              {item.description && (
                <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  {item.description.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>

    <section>
      <Container className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <SectionTitle
            eyebrow="Education"
            title="School path and timeline"
            description="The timeline uses the dates and schools you provided directly."
          />
          <div className="ui-surface space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5">
            {education.map((item) => (
              <div
                key={item.school}
                className="flex items-center gap-3 border-b border-slate-100 pb-4 last:border-b-0 last:pb-0 dark:border-white/10"
              >
                <div className="h-10 w-10 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.school}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                      {item.period}
                    </span>
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/80">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
                    {item.school}
                  </p>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    {item.program}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <SectionTitle
            eyebrow="Certificates"
            title="Split certificate pages"
            description="Each certificate page opens as its own PDF so the original 19-page document is easy to browse."
          />
          <div className="ui-surface space-y-3 rounded-3xl border border-slate-200 bg-white p-6 text-sm shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5">
            {certifications.slice(0, 6).map((certificate) => (
              <a
                key={certificate.title}
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0 dark:border-white/10"
              >
                <div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">
                    {certificate.title}
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300">
                    {certificate.description}
                  </p>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                  Open
                </span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  </div>
);

export default Resume;
