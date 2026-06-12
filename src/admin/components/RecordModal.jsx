import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X } from 'lucide-react';

const readFileAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error(`Unable to read ${file.name}`));
    reader.readAsDataURL(file);
  });

const toInputValue = (value) => (Array.isArray(value) ? value.join(', ') : value ?? '');

const RecordModal = ({
  open,
  title,
  description,
  fields,
  initialValues,
  existingRecord,
  submitLabel = 'Save',
  onSubmit,
  onClose,
}) => {
  const [values, setValues] = useState(initialValues);
  const [files, setFiles] = useState({});
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setValues(initialValues);
    setFiles({});
    setErrors({});
    setSubmitting(false);
  }, [initialValues, open]);

  const fileFields = useMemo(() => fields.filter((field) => field.type === 'file'), [fields]);

  if (!open) return null;

  const handleChange = (name, value) => {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleFileChange = (name, file) => {
    setFiles((current) => ({ ...current, [name]: file || null }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const validate = () => {
    const nextErrors = {};

    fields.forEach((field) => {
      if (field.required && !String(values[field.name] ?? '').trim()) {
        nextErrors[field.name] = `${field.label} is required.`;
      }

      if (field.type === 'file' && field.required) {
        const hasExisting = Boolean(existingRecord?.[field.name]);
        const hasNewFile = Boolean(files[field.name]);
        if (!hasExisting && !hasNewFile) {
          nextErrors[field.name] = `${field.label} is required.`;
        }
      }
    });

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const fileAssets = {};
      for (const field of fileFields) {
        const file = files[field.name];
        if (file) {
          const dataUrl = await readFileAsDataUrl(file);
          fileAssets[field.name] = {
            dataUrl,
            name: file.name,
            type: file.type,
          };
        }
      }

      await onSubmit(values, fileAssets);
      onClose();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/55 p-2 backdrop-blur-md sm:p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        className="relative flex h-[92vh] w-[95vw] max-w-4xl flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-[10000] inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-primary/40 hover:text-primary sm:right-4 sm:top-4"
          aria-label="Close form"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="border-b border-slate-200 px-6 py-6 pr-16 sm:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">
            {title}
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">{description}</p>
        </div>

        <form className="min-h-0 flex-1 overflow-y-auto px-6 py-6 sm:px-8" onSubmit={handleSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            {fields.map((field) => (
              <label key={field.name} className={field.fullWidth ? 'md:col-span-2' : ''}>
                <span className="mb-2 block text-sm font-medium text-slate-700">
                  {field.label}
                  {field.required ? ' *' : ''}
                </span>
                {field.type === 'textarea' ? (
                  <textarea
                    rows={field.rows ?? 4}
                    value={toInputValue(values[field.name])}
                    placeholder={field.placeholder}
                    onChange={(event) => handleChange(field.name, event.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
                  />
                ) : field.type === 'tags' ? (
                  <input
                    type="text"
                    value={toInputValue(values[field.name])}
                    placeholder={field.placeholder || 'Comma separated values'}
                    onChange={(event) => handleChange(field.name, event.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
                  />
                ) : field.type === 'file' ? (
                  <div className="space-y-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
                    <input
                      type="file"
                      accept={field.accept}
                      onChange={(event) => handleFileChange(field.name, event.target.files?.[0] ?? null)}
                      className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary-foreground"
                    />
                    {files[field.name] ? (
                      <p className="text-xs font-medium text-slate-600">{files[field.name].name}</p>
                    ) : existingRecord?.[`${field.name}Label`] ? (
                      <p className="text-xs font-medium text-slate-600">
                        Current file: {existingRecord[`${field.name}Label`]}
                      </p>
                    ) : null}
                    {(field.accept || '').includes('image') && existingRecord?.[field.name] ? (
                      <img
                        src={existingRecord[field.name]}
                        alt={`${field.label} preview`}
                        className="max-h-40 w-full rounded-xl object-cover"
                      />
                    ) : null}
                  </div>
                ) : (
                  <input
                    type={field.type || 'text'}
                    value={toInputValue(values[field.name])}
                    placeholder={field.placeholder}
                    onChange={(event) => handleChange(field.name, event.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
                  />
                )}
                {field.helpText ? (
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">{field.helpText}</p>
                ) : null}
                {errors[field.name] ? (
                  <p className="mt-2 text-xs font-medium text-rose-600">{errors[field.name]}</p>
                ) : null}
              </label>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-end gap-3 border-t border-slate-200 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Upload className="h-4 w-4" />
              {submitting ? 'Saving...' : submitLabel}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default RecordModal;
