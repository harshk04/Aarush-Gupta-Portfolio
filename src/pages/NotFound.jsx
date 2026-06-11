import { Link } from 'react-router-dom';

import Container from '../components/Container.jsx';
import Seo from '../components/Seo.jsx';

const NotFound = () => (
  <Container className="flex flex-col items-center justify-center gap-6 py-20 text-center">
    <Seo title="Page not found" description="Sorry, this page could not be located." />
    <span className="rounded-full border border-primary/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
      404
    </span>
    <h1 className="text-3xl font-heading font-semibold text-slate-900 dark:text-white">
      This page does not exist.
    </h1>
    <p className="max-w-md text-sm text-slate-600 dark:text-slate-300">
      You may have followed an old link or typed a path that is not part of the site.
    </p>
    <div className="flex flex-wrap justify-center gap-3">
      <Link
        to="/"
        className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
      >
        Go home
      </Link>
      <Link
        to="/projects"
        className="rounded-full border border-primary/30 px-5 py-2.5 text-sm font-medium text-primary transition hover:border-primary hover:bg-primary/5"
      >
        View projects
      </Link>
      <Link
        to="/resume"
        className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-primary/40 hover:text-primary dark:border-white/10 dark:text-slate-200"
      >
        View resume overview
      </Link>
    </div>
  </Container>
);

export default NotFound;
