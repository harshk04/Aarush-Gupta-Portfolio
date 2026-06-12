import { useMemo, useState } from 'react';
import { ArrowUpRight, Download, Pencil, Plus, Search, Trash2 } from 'lucide-react';

import Button from '../../components/Button.jsx';
import Seo from '../../components/Seo.jsx';
import { useAdminToast } from '../context/AdminToastContext.jsx';
import RecordModal from '../components/RecordModal.jsx';
import ConfirmDialog from '../components/ConfirmDialog.jsx';
import { useInternships } from '../hooks/useInternships.js';
import { internshipService } from '../services/internshipService.ts';

const fieldConfig = [
  { name: 'company', label: 'Company Name', required: true, placeholder: 'Asha Ferrous Industries' },
  { name: 'type', label: 'Experience Type', required: true, placeholder: 'Industry exposure' },
  { name: 'title', label: 'Title / Role', required: true, placeholder: 'Social Media Content Support' },
  { name: 'sector', label: 'Sector', required: true, placeholder: 'Brand communication' },
  { name: 'date', label: 'Date', required: true, placeholder: '29 Nov 2025' },
  {
    name: 'summary',
    label: 'Description',
    type: 'textarea',
    required: true,
    placeholder: 'Describe the internship experience',
    fullWidth: true,
  },
  {
    name: 'skills',
    label: 'Skills / Tags',
    type: 'tags',
    placeholder: 'Content organisation, Visual planning',
    helpText: 'Comma separated values.',
    fullWidth: true,
  },
  {
    name: 'pdf',
    label: 'Certificate File',
    type: 'file',
    required: true,
    accept: '.pdf,image/*',
    helpText: 'Upload the certificate file for the internship.',
    fullWidth: true,
  },
  {
    name: 'thumbnail',
    label: 'Preview Image',
    type: 'file',
    required: true,
    accept: 'image/*',
    helpText: 'Upload the preview image shown on the public site.',
    fullWidth: true,
  },
];

const splitTags = (value) =>
  value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

const getInitialValues = (record) => ({
  company: record?.company ?? '',
  type: record?.type ?? '',
  title: record?.title ?? '',
  sector: record?.sector ?? '',
  date: record?.date ?? '',
  summary: record?.summary ?? '',
  skills: Array.isArray(record?.skills) ? record.skills.join(', ') : '',
  pdf: '',
  thumbnail: '',
});

const buildInternship = (values, files, existing) => {
  const now = new Date().toISOString();
  const pdfAsset = files.pdf;
  const thumbnailAsset = files.thumbnail;
  const pdf = pdfAsset?.dataUrl || existing?.pdf || '';
  const thumbnail = thumbnailAsset?.dataUrl || existing?.thumbnail || '';

  return {
    id: existing?.id ?? window.crypto.randomUUID?.() ?? `${Date.now()}-${Math.random()}`,
    company: values.company.trim(),
    type: values.type.trim(),
    title: values.title.trim(),
    sector: values.sector.trim(),
    date: values.date.trim(),
    summary: values.summary.trim(),
    skills: splitTags(values.skills),
    pdf,
    pdfLabel: pdfAsset?.name || existing?.pdfLabel || 'certificate.pdf',
    thumbnail,
    thumbnailLabel: thumbnailAsset?.name || existing?.thumbnailLabel || '',
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  };
};

const Internships = () => {
  const internships = useInternships();
  const toast = useAdminToast();
  const [query, setQuery] = useState('');
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const filteredInternships = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return internships;

    return internships.filter((internship) => {
      const haystack = [
        internship.company,
        internship.title,
        internship.type,
        internship.sector,
        internship.date,
        internship.summary,
        ...(internship.skills ?? []),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [internships, query]);

  const openCreate = () => {
    setEditingRecord(null);
    setEditorOpen(true);
  };

  const openEdit = (record) => {
    setEditingRecord(record);
    setEditorOpen(true);
  };

  const closeEditor = () => {
    setEditorOpen(false);
    setEditingRecord(null);
  };

  const handleSubmit = async (values, files) => {
    const nextRecord = buildInternship(values, files, editingRecord);
    await internshipService.save(nextRecord);
    toast.success(
      editingRecord ? 'Internship updated' : 'Internship added',
      `${nextRecord.company} is now saved in the collection.`,
    );
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    await internshipService.remove(deleteTarget.id);
    toast.success('Internship deleted', `${deleteTarget.company} has been removed.`);
    setDeleteTarget(null);
  };

  return (
    <div className="space-y-8">
      <Seo title="Admin Internships" description="Manage internship content for the portfolio." noIndex />
      <div className="flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-primary">
              Internships
            </p>
            <h1 className="text-3xl font-heading font-semibold text-slate-900">
              Manage internship records
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
              Add, edit, or delete internship entries that power the public internships and resume pages.
            </p>
          </div>
          <Button type="button" onClick={openCreate} icon={Plus} iconPosition="right">
            Add internship
          </Button>
        </div>

        <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search internships"
            className="w-full bg-transparent text-sm outline-none"
          />
        </label>
      </div>

      {filteredInternships.length ? (
        <div className="grid gap-5 xl:grid-cols-2">
          {filteredInternships.map((internship) => (
            <article
              key={internship.id}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft"
            >
              <div className="grid gap-0 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                <div className="h-full bg-slate-50">
                  <img
                    src={internship.thumbnail}
                    alt={internship.company}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="space-y-4 p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">
                        {internship.type}
                      </p>
                      <h2 className="mt-2 text-xl font-heading font-semibold text-slate-900">
                        {internship.company}
                      </h2>
                    </div>
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                      {internship.date}
                    </span>
                  </div>

                  <p className="text-sm font-medium uppercase tracking-[0.26em] text-slate-500">
                    {internship.sector}
                  </p>

                  <p className="text-sm leading-relaxed text-slate-600">{internship.summary}</p>

                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <a
                      href={internship.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                    >
                      Open
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href={internship.pdf}
                      download
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-primary/40 hover:text-primary"
                    >
                      Download
                      <Download className="h-4 w-4" />
                    </a>
                    <button
                      type="button"
                      onClick={() => openEdit(internship)}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-primary/40 hover:text-primary"
                    >
                      <Pencil className="h-4 w-4" />
                      Edit
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setDeleteTarget(internship)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2.5 text-sm font-medium text-rose-700 transition hover:bg-rose-100"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-12 text-center">
          <p className="text-lg font-heading font-semibold text-slate-900">No internships found</p>
          <p className="mt-2 text-sm text-slate-600">
            Try a different search or add a new internship entry.
          </p>
        </div>
      )}

      <RecordModal
        open={editorOpen}
        title={editingRecord ? 'Edit Internship' : 'Add Internship'}
        description="Manage the internship metadata, downloadable certificate, and preview image."
        fields={fieldConfig}
        initialValues={getInitialValues(editingRecord)}
        existingRecord={editingRecord}
        submitLabel={editingRecord ? 'Update Internship' : 'Save Internship'}
        onClose={closeEditor}
        onSubmit={handleSubmit}
      />

      <ConfirmDialog
        open={Boolean(deleteTarget)}
        title="Delete internship?"
        description={
          deleteTarget
            ? `This will permanently remove “${deleteTarget.company}” from the internship collection.`
            : ''
        }
        confirmLabel="Delete internship"
        onCancel={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default Internships;
