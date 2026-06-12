import { Link } from 'react-router-dom';
import { BriefcaseBusiness, FileText, Plus } from 'lucide-react';

import Button from '../../components/Button.jsx';
import Seo from '../../components/Seo.jsx';
import { useCertificates } from '../hooks/useCertificates.js';
import { useInternships } from '../hooks/useInternships.js';

const Dashboard = () => {
  const certificates = useCertificates();
  const internships = useInternships();

  const stats = [
    { label: 'Certificates', value: certificates.length, icon: FileText },
    { label: 'Internships', value: internships.length, icon: BriefcaseBusiness },
  ];

  const recentCertificates = certificates.slice(0, 3);
  const recentInternships = internships.slice(0, 3);

  return (
    <div className="space-y-8">
      <Seo title="Admin Dashboard" description="Admin dashboard for managing site content." noIndex />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-primary">
            Dashboard
          </p>
          <h1 className="text-3xl font-heading font-semibold text-slate-900">Content overview</h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
            Monitor the content currently driving the portfolio and jump straight into the collection
            you want to update.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button as="a" to="/admin/certificates" variant="secondary" icon={Plus} iconPosition="right">
            Add certificate
          </Button>
          <Button as="a" to="/admin/internships" icon={Plus} iconPosition="right">
            Add internship
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-2xl font-heading font-semibold text-slate-900">
                    {stat.value}
                  </p>
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
                Recent Certificates
              </p>
              <h2 className="mt-2 text-xl font-heading font-semibold text-slate-900">
                Latest learning credentials
              </h2>
            </div>
            <Link to="/admin/certificates" className="text-sm font-medium text-primary hover:underline">
              View all
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {recentCertificates.map((certificate) => (
              <div key={certificate.id} className="rounded-2xl border border-slate-200 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                  {certificate.category}
                </p>
                <p className="mt-2 font-semibold text-slate-900">{certificate.title}</p>
                <p className="mt-1 text-sm text-slate-600">{certificate.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
                Recent Internships
              </p>
              <h2 className="mt-2 text-xl font-heading font-semibold text-slate-900">
                Latest practical exposure
              </h2>
            </div>
            <Link to="/admin/internships" className="text-sm font-medium text-primary hover:underline">
              View all
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {recentInternships.map((internship) => (
              <div key={internship.id} className="rounded-2xl border border-slate-200 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                  {internship.type}
                </p>
                <p className="mt-2 font-semibold text-slate-900">{internship.company}</p>
                <p className="mt-1 text-sm text-slate-600">{internship.summary}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
