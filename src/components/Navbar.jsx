import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, Menu, X } from 'lucide-react';

import { navLinks } from '../data/navigation.js';
import ThemeToggle from './ThemeToggle.jsx';

const linkClasses = ({ isActive }) =>
  `ui-outline-hover relative text-sm font-medium tracking-wide ${
    isActive
      ? 'text-primary'
      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
  }`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);
  const handleLogoClick = (event) => {
    if (location.pathname === '/') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className="sticky top-0 z-50 w-full overflow-x-clip border-b border-white/10 bg-white/70 backdrop-blur shadow-sm transition-colors dark:border-white/5 dark:bg-background/80">
      <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:gap-6">
        <NavLink
          to="/"
          className="flex min-w-0 flex-1 items-center lg:flex-none"
          onClick={handleLogoClick}
        >
          <span className="truncate font-heading text-base font-extrabold tracking-tight text-slate-950 transition hover:text-primary dark:text-white sm:text-lg lg:text-xl">
            Aarush Gupta
          </span>
        </NavLink>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClasses}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <NavLink
            to="/contact"
            className="ui-surface inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" />
            Contact
          </NavLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 lg:hidden dark:border-white/10 dark:bg-white/10 dark:text-white"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden"
          >
            <div id="mobile-navigation" className="space-y-4 px-4 pb-6 pt-2 sm:px-6">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={`${linkClasses} rounded-2xl border border-transparent px-3 py-2 transition hover:border-primary/20 hover:bg-slate-100 dark:hover:bg-white/5`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
              <div className="flex items-center justify-between gap-3">
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className="ui-surface inline-flex min-w-0 items-center gap-2 rounded-full border border-primary/40 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </NavLink>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
