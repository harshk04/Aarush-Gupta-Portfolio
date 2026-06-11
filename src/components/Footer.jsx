import { Github, Instagram, Linkedin, Mail, Send, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

import { navLinks } from '../data/navigation.js';
import { personalInfo, socialLinks } from '../data/profile.js';
import Container from './Container.jsx';
import FooterParticles from './FooterParticles.jsx';

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  email: Mail,
  twitter: Twitter,
  telegram: Send,
  instagram: Instagram,
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer relative overflow-hidden rounded-t-3xl border-t border-white/10 bg-slate-900 text-slate-200 dark:bg-background/80">
      <FooterParticles />
      <Container className="footer-content relative grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <Link
            to="/"
            className="font-heading text-2xl font-semibold text-primary transition hover:text-primary/80"
          >
            {personalInfo.name}
          </Link>
          <p className="max-w-xl text-sm text-slate-300">
            Passionate about entrepreneurship, innovation, and continuous growth through real-world
            learning and leadership.
          </p>
          {socialLinks.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.id];
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-primary/50 hover:text-primary"
                  >
                    {Icon ? <Icon className="h-5 w-5" /> : social.label.slice(0, 2)}
                  </a>
                );
              })}
            </div>
          )}
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Quick links</p>
          <ul className="space-y-2 text-sm text-slate-300">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="transition hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Contact</p>
          <div className="space-y-2 text-sm text-slate-300">
            {personalInfo.email ? (
              <p>
                <span className="font-medium text-white">Email:</span>{' '}
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary">
                  {personalInfo.email}
                </a>
              </p>
            ) : (
              <p>
                <span className="font-medium text-white">Email:</span> Available through the contact form
              </p>
            )}
            {personalInfo.phone ? (
              <p>
                <span className="font-medium text-white">Phone:</span>{' '}
                <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="hover:text-primary">
                  {personalInfo.phone}
                </a>
              </p>
            ) : null}
            <p>
              <span className="font-medium text-white">Location:</span> {personalInfo.location}
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:-translate-y-1 hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" />
            <span>Contact</span>
          </Link>
        </div>
      </Container>
      <div className="footer-content border-t border-white/5 py-6 text-center text-xs text-slate-400">
        <p>© {year} {personalInfo.name}. All rights reserved.</p>
        <p className="mt-1">
          Designed and Developed by{' '}
          <a
            href="http://ravviolabs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-200 transition hover:text-primary"
          >
            RavvioLabs Technologies
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
