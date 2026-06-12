import { createContext, useContext, useMemo, useState } from 'react';
import { CheckCircle2, CircleAlert, Info, X } from 'lucide-react';

const AdminToastContext = createContext(null);

const variantStyles = {
  success: 'border-emerald-200 bg-emerald-50 text-emerald-900',
  error: 'border-rose-200 bg-rose-50 text-rose-900',
  info: 'border-sky-200 bg-sky-50 text-sky-900',
};

const variantIcons = {
  success: CheckCircle2,
  error: CircleAlert,
  info: Info,
};

export const AdminToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const removeToast = (id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  };

  const pushToast = ({ title, description, variant = 'info' }) => {
    const id = window.crypto.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
    setToasts((current) => [...current, { id, title, description, variant }]);
    window.setTimeout(() => removeToast(id), 3500);
  };

  const value = useMemo(
    () => ({
      toasts,
      pushToast,
      removeToast,
      success: (title, description) => pushToast({ title, description, variant: 'success' }),
      error: (title, description) => pushToast({ title, description, variant: 'error' }),
      info: (title, description) => pushToast({ title, description, variant: 'info' }),
    }),
    [toasts],
  );

  return <AdminToastContext.Provider value={value}>{children}</AdminToastContext.Provider>;
};

export const useAdminToast = () => {
  const context = useContext(AdminToastContext);
  if (!context) {
    throw new Error('useAdminToast must be used within AdminToastProvider');
  }
  return context;
};

export const ToastViewport = () => {
  const { toasts, removeToast } = useAdminToast();

  return (
    <div className="fixed right-4 top-4 z-[10000] flex w-[min(92vw,24rem)] flex-col gap-3">
      {toasts.map((toast) => {
        const Icon = variantIcons[toast.variant] ?? Info;

        return (
          <div
            key={toast.id}
            className={`rounded-2xl border p-4 shadow-2xl backdrop-blur-sm ${variantStyles[toast.variant] ?? variantStyles.info}`}
            role="status"
            aria-live="polite"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/90">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">{toast.title}</p>
                {toast.description ? (
                  <p className="mt-1 text-sm opacity-90">{toast.description}</p>
                ) : null}
              </div>
              <button
                type="button"
                onClick={() => removeToast(toast.id)}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/70 text-current transition hover:bg-white"
                aria-label="Dismiss notification"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
