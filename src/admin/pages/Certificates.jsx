import { useMemo, useState } from 'react';
import { ArrowUpRight, Download, Pencil, Plus, Search, Trash2 } from 'lucide-react';

import Button from '../../components/Button.jsx';
import Seo from '../../components/Seo.jsx';
import { useAdminToast } from '../context/AdminToastContext.jsx';
import RecordModal from '../components/RecordModal.jsx';
import ConfirmDialog from '../components/ConfirmDialog.jsx';
import { useCertificates } from '../hooks/useCertificates.js';
import { certificateService } from '../services/certificateService.ts';

const fieldConfig = [
  { name: 'title', label: 'Title', required: true, placeholder: 'Certificate title' },
  {
    name: 'description',
    label: 'Description',
    type: 'textarea',
    required: true,
    placeholder: 'Short explanation of the certificate',
    fullWidth: true,
  },
  { name: 'issueDate', label: 'Issue Date', placeholder: '29 Nov 2025' },
  { name: 'category', label: 'Category', required: true, placeholder: 'Course completion' },
  {
    name: 'tags',
    label: 'Category / Tags',
    type: 'tags',
    placeholder: 'Leadership, Business',
    helpText: 'Comma separated values.',
    fullWidth: true,
  },
  {
    name: 'pdf',
    label: 'Certificate File',
    type: 'file',
    required: true,
    accept: '.pdf,image/*',
    helpText: 'Upload the certificate file as a PDF or image.',
    fullWidth: true,
  },
  {
    name: 'preview',
    label: 'Preview Image',
    type: 'file',
    accept: 'image/*',
    helpText: 'Optional preview image for card thumbnails.',
    fullWidth: true,
  },
];

const splitTags = (value) =>
  value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

const getInitialValues = (record) => ({
  title: record?.title ?? '',
  description: record?.description ?? '',
  issueDate: record?.issueDate ?? '',
  category: record?.category ?? '',
  tags: Array.isArray(record?.tags) ? record.tags.join(', ') : '',
  pdf: '',
  preview: '',
});

const buildCertificate = (values, files, existing) => {
  const now = new Date().toISOString();
  const pdfAsset = files.pdf;
  const previewAsset = files.preview;
  const pdf = pdfAsset?.dataUrl || existing?.pdf || '';
  const preview = previewAsset?.dataUrl || existing?.preview || '';

  return {
    id: existing?.id ?? window.crypto.randomUUID?.() ?? `${Date.now()}-${Math.random()}`,
    title: values.title.trim(),
    description: values.description.trim(),
    issueDate: values.issueDate.trim(),
    category: values.category.trim(),
    tags: splitTags(values.tags),
    pdf,
    link: pdf,
    pdfLabel: pdfAsset?.name || existing?.pdfLabel || 'certificate.pdf',
    preview,
    previewLabel: previewAsset?.name || existing?.previewLabel || '',
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  };
};

const Certificates = () => {
  const certificates = useCertificates();
  const toast = useAdminToast();
  const [query, setQuery] = useState('');
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const filteredCertificates = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return certificates;

    return certificates.filter((certificate) => {
      const haystack = [
        certificate.title,
        certificate.description,
        certificate.category,
        certificate.issueDate,
        ...(certificate.tags ?? []),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [certificates, query]);

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
    const nextRecord = buildCertificate(values, files, editingRecord);
    await certificateService.save(nextRecord);
    toast.success(
      editingRecord ? 'Certificate updated' : 'Certificate added',
      `${nextRecord.title} is now saved in the collection.`,
    );
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    await certificateService.remove(deleteTarget.id);
    toast.success('Certificate deleted', `${deleteTarget.title} has been removed.`);
    setDeleteTarget(null);
  };

  return (
    <div className="space-y-8">
      <Seo title="Admin Certificates" description="Manage certificate content for the portfolio." noIndex />
      <div className="flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-primary">
              Certificates
            </p>
            <h1 className="text-3xl font-heading font-semibold text-slate-900">
              Manage certificate records
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
              Add, edit, or delete certificate entries that power the public certifications page.
            </p>
          </div>
          <Button type="button" onClick={openCreate} icon={Plus} iconPosition="right">
            Add certificate
          </Button>
        </div>

        <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search certificates"
            className="w-full bg-transparent text-sm outline-none"
          />
        </label>
      </div>

      {filteredCertificates.length ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredCertificates.map((certificate) => (
            <article
              key={certificate.id}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft"
            >
              <div className="h-56 overflow-hidden bg-slate-50">
                <img
                  src={certificate.preview}
                  alt={certificate.title}
                  className="h-full w-full object-contain bg-white"
                />
              </div>
              <div className="space-y-4 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">
                      {certificate.category}
                    </p>
                    <h2 className="mt-2 text-xl font-heading font-semibold text-slate-900">
                      {certificate.title}
                    </h2>
                  </div>
                  {certificate.issueDate ? (
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                      {certificate.issueDate}
                    </span>
                  ) : null}
                </div>

                <p className="text-sm leading-relaxed text-slate-600">{certificate.description}</p>

                <div className="flex flex-wrap gap-2">
                  {certificate.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <a
                    href={certificate.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                  >
                    Open
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={certificate.pdf}
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-primary/40 hover:text-primary"
                  >
                    Download
                    <Download className="h-4 w-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => openEdit(certificate)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-primary/40 hover:text-primary"
                  >
                    <Pencil className="h-4 w-4" />
                    Edit
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setDeleteTarget(certificate)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2.5 text-sm font-medium text-rose-700 transition hover:bg-rose-100"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-12 text-center">
          <p className="text-lg font-heading font-semibold text-slate-900">No certificates found</p>
          <p className="mt-2 text-sm text-slate-600">
            Try a different search or add a new certificate entry.
          </p>
        </div>
      )}

      <RecordModal
        open={editorOpen}
        title={editingRecord ? 'Edit Certificate' : 'Add Certificate'}
        description="Manage the certificate metadata, downloadable file, and preview image."
        fields={fieldConfig}
        initialValues={getInitialValues(editingRecord)}
        existingRecord={editingRecord}
        submitLabel={editingRecord ? 'Update Certificate' : 'Save Certificate'}
        onClose={closeEditor}
        onSubmit={handleSubmit}
      />

      <ConfirmDialog
        open={Boolean(deleteTarget)}
        title="Delete certificate?"
        description={
          deleteTarget
            ? `This will permanently remove “${deleteTarget.title}” from the certificate collection.`
            : ''
        }
        confirmLabel="Delete certificate"
        onCancel={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default Certificates;
