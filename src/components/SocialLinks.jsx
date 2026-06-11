import { Github, Instagram, Linkedin, Mail, Phone, Send, Twitter } from 'lucide-react';
import clsx from 'clsx';

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  email: Mail,
  phone: Phone,
  twitter: Twitter,
  telegram: Send,
  instagram: Instagram,
};

const SocialLinks = ({ links, className, iconClassName }) => (
  <div className={clsx('flex flex-wrap items-center gap-3', className)}>
    {links.map((social) => {
      const Icon = iconMap[social.id];
      const isExternal = /^https?:\/\//i.test(social.href);
      return (
        <a
          key={social.id}
          href={social.href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          aria-label={social.label}
          className="ui-surface inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-soft transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
        >
          {Icon ? (
            <Icon className={clsx('h-5 w-5', iconClassName)} />
          ) : (
            <span className="text-xs font-semibold uppercase">{social.label.slice(0, 2)}</span>
          )}
        </a>
      );
    })}
  </div>
);

export default SocialLinks;
