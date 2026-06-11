import { useState } from 'react';
import { motion } from 'framer-motion';

import Button from '../components/Button.jsx';
import Container from '../components/Container.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import SocialLinks from '../components/SocialLinks.jsx';
import { contactChannels, personalInfo, socialLinks } from '../data/profile.js';

const Contact = () => {
  const contactEndpoint = import.meta.env.VITE_CONTACT_API_URL || '/api/contact';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ state: 'error', message: 'Please fill in the required fields.' });
      return;
    }

    setStatus({ state: 'loading', message: 'Sending your message…' });
    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok || !payload.ok) {
        throw new Error(payload.message || 'Unable to send your message right now.');
      }

      setStatus({
        state: 'success',
        message: 'Your message has been sent successfully.',
      });
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setStatus({
        state: 'error',
        message: error.message || 'Unable to send your message right now.',
      });
    }
  };

  return (
    <div className="space-y-16">
      <Seo
        title="Contact"
        description="A contact page for reaching Aarush Gupta through the form on this site."
        url="https://harshk.is-a.dev/harsh-contact"
      />

      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.18),transparent_55%)]" />
        <Container className="ui-surface grid gap-10 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-soft hover:border-primary/40 backdrop-blur dark:border-white/10 dark:bg-white/5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
          <div className="space-y-8">
            <SectionTitle
              eyebrow="Contact"
              title="Let’s start a conversation."
              description="If you want to talk about entrepreneurship, collaboration, or an opportunity, the form below is the easiest way to reach out."
            />
            <div className="ui-surface overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5">
              <div className="h-56 overflow-hidden">
                <img
                  src="/images/aarush.png"
                  alt={personalInfo.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-sm font-heading font-semibold text-slate-900 dark:text-white">
                  Reach out directly
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  You can use the form or reach out through the direct contact details below.
                </p>
                <div className="mt-6 space-y-4">
                  {contactChannels.map((channel) => (
                    <div key={channel.label}>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                        {channel.label}
                      </p>
                      <a
                        href={channel.href}
                        className="mt-1 block text-sm font-medium text-slate-800 transition hover:text-primary dark:text-slate-200"
                      >
                        {channel.value}
                      </a>
                    </div>
                  ))}
                  {socialLinks.length > 0 && (
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                        Socials
                      </p>
                      <SocialLinks links={socialLinks} className="mt-3" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="ui-surface space-y-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-soft hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Name*
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-xl border border-slate-200 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-white/10 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Email*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-xl border border-slate-200 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-white/10 dark:text-white"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Organisation / context
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="rounded-xl border border-slate-200 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-white/10 dark:text-white"
                placeholder="School, startup, or team"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="rounded-xl border border-slate-200 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-white/10 dark:text-white"
                placeholder="Share your idea, question, or context."
              />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" disabled={status.state === 'loading'}>
                {status.state === 'loading' ? 'Sending…' : 'Send message'}
              </Button>
              {status.message && (
                <p
                  className={`text-sm ${
                    status.state === 'success'
                      ? 'text-green-500'
                      : status.state === 'error'
                      ? 'text-red-500'
                      : 'text-slate-500'
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </motion.form>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
