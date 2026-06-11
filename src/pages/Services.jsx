import { BrainCircuit, Cloud, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

import Button from '../components/Button.jsx';
import Container from '../components/Container.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import { services, personalInfo } from '../data/profile.js';

const iconComponents = {
  'brain-circuit': BrainCircuit,
  layers: Layers,
  cloud: Cloud,
};

const Services = () => (
  <div className="space-y-20">
    <Seo
      title="Services"
      description="A summary of the kinds of thinking and support Aarush brings to entrepreneurship, planning, and presentation work."
      url="https://harshk.is-a.dev/harsh-services"
    />

    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_55%),radial-gradient(circle_at_bottom,rgba(129,140,248,0.18),transparent_55%)]" />
      <Container className="ui-surface grid gap-10 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-soft backdrop-blur hover:border-primary/40 dark:border-white/10 dark:bg-white/10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="space-y-5 text-left">
          <SectionTitle
            eyebrow="Services"
            title="Ways I like to contribute"
            description="These are the kinds of skills and thinking styles that show up in my school work, projects, and internships."
          />
          <div className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
            <p>
              I enjoy taking an early idea and making it easier to understand, test, and present.
            </p>
            <p>
              That usually means paying attention to strategy, communication, and the steps needed to move something forward.
            </p>
          </div>
        </div>
        <div className="ui-surface space-y-4 rounded-2xl border border-slate-200 bg-white/90 p-6 text-sm text-slate-700 shadow-sm hover:border-primary/40 dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-200">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            What this page covers
          </p>
          <ul className="mt-3 space-y-2">
            <li>• Entrepreneurship and early-stage idea thinking.</li>
            <li>• Presentation and communication support.</li>
            <li>• Organised planning and practical execution.</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button as="a" to="/harsh-contact">
              Contact me
            </Button>
            {personalInfo.email ? (
              <Button as="a" href={`mailto:${personalInfo.email}`} variant="secondary">
                Email
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>

    <section>
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Ways we can work together"
          title="Three focus areas"
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconComponents[service.icon] ?? BrainCircuit;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
                className="ui-surface-strong flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-heading font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
                <ul className="mt-auto space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>

    <section>
      <Container className="ui-surface grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-lg font-heading font-semibold text-slate-900 dark:text-white">
            Simple process
          </h3>
          <ol className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
            <li>
              <span className="font-semibold text-primary">1. Understand</span> - clarify the goal and
              the audience.
            </li>
            <li>
              <span className="font-semibold text-primary">2. Organize</span> - break the idea into
              manageable parts.
            </li>
            <li>
              <span className="font-semibold text-primary">3. Present</span> - package it clearly so it
              is easy to share.
            </li>
          </ol>
        </div>
        <div className="ui-surface space-y-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-sm text-slate-700 shadow-soft hover:border-primary/40 dark:text-slate-200">
          <h4 className="font-heading text-sm font-semibold text-primary">
            Best for student projects and early ideas
          </h4>
          <p>
            This page reflects the kind of support that matters most when an idea is still taking shape and needs a clearer structure.
          </p>
        </div>
      </Container>
    </section>

    <section>
      <Container className="ui-surface rounded-3xl border border-primary/25 bg-primary/5 p-8 text-center shadow-soft hover:border-primary/40">
        <h3 className="text-2xl font-heading font-semibold text-primary">
          Have an idea that needs structure?
        </h3>
        <p className="mt-4 text-base text-slate-700 dark:text-slate-200">
          A short conversation can be enough to turn a vague thought into a clear next step.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button as="a" to="/harsh-contact">
            Contact page
          </Button>
        </div>
      </Container>
    </section>
  </div>
);

export default Services;
