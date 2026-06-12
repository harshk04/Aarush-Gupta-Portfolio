import { useEffect, useState } from 'react';
import { ArrowUpRight, Download, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import Button from '../components/Button.jsx';
import Container from '../components/Container.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';

const certificates = [
  {
    title: 'Effective Leadership',
    description: 'A certificate that highlights practical leadership thinking and responsible direction.',
    pdf: '/certificates/Effective%20Leadership.pdf',
    preview: '/images/internships/effective-leadership.jpg',
  },
  {
    title: 'Resume Writing and Job Interviewing',
    description: 'Covers the essentials of presenting experience clearly and approaching interviews well.',
    pdf: '/certificates/Resume%20Writing%20and%20Job%20Interviewing.pdf',
    preview: '/images/internships/resume-writing-job-interviewing.jpg',
  },
  {
    title: 'Professional Networking for Career Growth',
    description: 'A practical introduction to building meaningful professional relationships with confidence.',
    pdf: '/certificates/Professional%20Networking%20for%20Career%20Growth.pdf',
    preview: '/images/internships/Professional_Networking_for_Career_Growth.jpg',
  },
  {
    title: 'AI for Business Professionals',
    description: 'Explores how AI can support smarter business decisions, productivity, and ethical use.',
    pdf: '/certificates/AI%20for%20Business%20Professionals.pdf',
    preview: '/images/internships/AI_for_Business_Professionals.jpg',
  },
  {
    title: 'AI for Beginners',
    description: 'A clear starting point for understanding AI concepts, data, and responsible use.',
    pdf: '/certificates/AI%20For%20Beginners.pdf',
    preview: '/images/internships/AI_For_Beginners.jpg',
  },
  {
    title: 'CX for Business Success',
    description: 'Focuses on customer experience, trust, and the role of listening in business growth.',
    pdf: '/certificates/CX%20For%20Business%20Success.pdf',
    preview: '/images/internships/CX_For_Business_Success.jpg',
  },
  {
    title: 'Introduction to Cybersecurity Awareness',
    description: 'Builds awareness of digital safety habits and the basics of protecting information.',
    pdf: '/certificates/Introduction%20to%20Cybersecurity%20Awareness.pdf',
    preview: '/images/internships/Introduction_to_Cybersecurity_Awareness.jpg',
  },
  {
    title: 'Agile Project Management',
    description: 'An introduction to agile planning, iteration, and flexible teamwork in projects.',
    pdf: '/certificates/Agile%20Project%20Maqnagement.pdf',
    preview: '/images/internships/Agile_Project_Maqnagement.jpg',
  },
];

const Certifications = () => {
  const [activeCertificate, setActiveCertificate] = useState(null);

  useEffect(() => {
    if (!activeCertificate) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveCertificate(null);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeCertificate]);

  return (
    <div className="space-y-18">
      <Seo
        title="Certifications"
        description="Professional certifications and learning achievements that reflect Aarush Gupta's interest in business, technology, communication, project management, and continuous learning."
        url="https://aarushgupta.is-a.dev/certifications"
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.1),transparent_34%)]" />
        <Container className="ui-surface rounded-3xl border border-slate-200 bg-white/80 p-8 text-left shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/10">
          <div className="space-y-5">
            <SectionTitle
              eyebrow="Certifications"
              title="Professional certifications and learning achievements"
              description="Professional certifications and learning achievements that reflect my interest in business, technology, communication, project management, and continuous learning."
            />
            <div className="flex flex-wrap gap-3">
              <Button as="a" to="/resume" variant="secondary">
                View Resume
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {certificates.map((certificate, index) => (
              <motion.article
                key={certificate.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.04 }}
                className="ui-surface-strong flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
              >
                <button
                  type="button"
                  onClick={() => setActiveCertificate(certificate)}
                  className="group relative overflow-hidden"
                  aria-label={`Preview ${certificate.title}`}
                >
                  <img
                    src={certificate.preview}
                    alt={`${certificate.title} certificate preview`}
                    className="h-64 w-full bg-white object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </button>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                      Certificate
                    </span>
                    {/* <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400 dark:text-slate-500">
                      Credential
                    </span> */}
                  </div>

                  <h3 className="text-xl font-heading font-semibold text-slate-900 dark:text-white">
                    {certificate.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {certificate.description}
                  </p>

                  <div className="mt-auto pt-2">
                    <Button
                      type="button"
                      onClick={() => setActiveCertificate(certificate)}
                      variant="secondary"
                      icon={ArrowUpRight}
                      iconPosition="right"
                      className="w-full justify-center sm:w-auto"
                    >
                      Open
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
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
            className="fixed inset-0 z-[9998] flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-lg"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeCertificate.title} certificate viewer`}
            onClick={() => setActiveCertificate(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-[9999] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl dark:bg-slate-950"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 transition hover:border-primary/40 hover:text-primary dark:border-white/10 dark:bg-white/10 dark:text-white"
                aria-label="Close certificate viewer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
                <div className="bg-slate-950 p-4 sm:p-6">
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white">
                    <img
                      src={activeCertificate.preview}
                      alt={`${activeCertificate.title} certificate preview`}
                      className="max-h-[78vh] w-full object-contain"
                      decoding="async"
                    />
                  </div>
                </div>

                <div className="space-y-6 p-6 sm:p-8">
                  <div className="space-y-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">
                      Certificate
                    </p>
                    <h3 className="text-3xl font-heading font-semibold text-slate-900 dark:text-white">
                      {activeCertificate.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {activeCertificate.description}
                    </p>
                  </div>

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
                      Download
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

export default Certifications;
