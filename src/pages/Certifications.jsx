import Button from '../components/Button.jsx';
import Container from '../components/Container.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import { companyCertificates, courseCertificates } from '../data/profile.js';

const Certifications = () => (
  <div className="space-y-18">
    <Seo
      title="Certifications"
      description="The split certificate pages from Aarush Gupta's 19-page certificate PDF."
      url="https://harshk.is-a.dev/harsh-certifications"
    />

    <section>
      <Container className="ui-surface grid gap-8 rounded-3xl border border-slate-200 bg-white/80 p-8 text-left shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-5">
          <SectionTitle
            eyebrow="Credentials"
            title="Course and company certificates"
            description="The certificates are now grouped into online course completions and company/service certificates."
          />
          <div className="flex flex-wrap gap-3">
            <Button as="a" to="/harsh-resume" variant="secondary">
              View resume overview
            </Button>
          </div>
        </div>
        <div className="ui-surface space-y-4 rounded-2xl border border-slate-200 bg-white/90 p-5 text-sm text-slate-700 shadow-sm hover:border-primary/40 dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-200">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            What you’ll find here
          </p>
          <ul className="mt-2 space-y-2">
            <li>• 6 online course completion certificates.</li>
            <li>• 13 company/service certificates.</li>
            <li>• Direct links to the renamed PDFs inside `public/certificates`.</li>
          </ul>
        </div>
      </Container>
    </section>

    <section>
      <Container className="space-y-8">
        <div className="space-y-6">
          <h3 className="text-sm font-heading font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
            Course completion certificates
          </h3>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {courseCertificates.map((certificate) => (
              <article
                key={certificate.title}
                className="ui-surface-strong flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                      {certificate.category}
                    </p>
                    <h4 className="mt-2 text-base font-heading font-semibold text-slate-900 dark:text-white">
                      {certificate.title}
                    </h4>
                  </div>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                    PDF
                  </span>
                </div>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{certificate.description}</p>
                <Button
                  as="a"
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="mt-6 w-max"
                >
                  Open page
                </Button>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-sm font-heading font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
            Company and service certificates
          </h3>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {companyCertificates.map((certificate) => (
              <article
                key={certificate.title}
                className="ui-surface-strong flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                      {certificate.category}
                    </p>
                    <h4 className="mt-2 text-base font-heading font-semibold text-slate-900 dark:text-white">
                      {certificate.title}
                    </h4>
                  </div>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                    PDF
                  </span>
                </div>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{certificate.description}</p>
                <Button
                  as="a"
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="mt-6 w-max"
                >
                  Open page
                </Button>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  </div>
);

export default Certifications;
