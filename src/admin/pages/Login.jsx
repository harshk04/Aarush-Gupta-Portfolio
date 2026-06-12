import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, LockKeyhole, UserRound } from 'lucide-react';

import Seo from '../../components/Seo.jsx';
import { useAdminAuth } from '../context/AdminAuthContext.jsx';
import { useAdminToast } from '../context/AdminToastContext.jsx';

const Login = () => {
  const { isAuthenticated, login } = useAdminAuth();
  const toast = useAdminToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState('aarush');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const from = location.state?.from?.pathname || '/admin';

  useEffect(() => {
    setError('');
  }, [username, password]);

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(username, password);
      toast.success('Welcome back', 'You are now signed in to the admin panel.');
      navigate(from, { replace: true });
    } catch (loginError) {
      const message = loginError instanceof Error ? loginError.message : 'Unable to sign in.';
      setError(message);
      toast.error('Login failed', message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <Seo title="Admin Login" description="Secure admin login for Aarush Gupta's portfolio." noIndex />
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="space-y-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-primary">
            Admin Access
          </p>
          <h1 className="max-w-xl font-heading text-4xl font-semibold leading-[1.05] text-slate-900 sm:text-5xl">
            Secure content management for certificates and internships.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Sign in to manage the portfolio content through a lightweight dashboard built to stay
            ready for a future Supabase or Firebase connection.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['Protected Routes', 'Login required'],
              ['Local Storage', 'Temporary data layer'],
              ['Future Ready', 'Backend-friendly'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                  {label}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ui-surface rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl sm:p-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-primary">
              Login
            </p>
            <h2 className="text-2xl font-heading font-semibold text-slate-900">Admin Panel</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Enter the credentials to manage the site content.
            </p>
          </div>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Username</span>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <UserRound className="h-4 w-4 text-slate-400" />
                <input
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="w-full bg-transparent text-sm outline-none"
                  autoComplete="username"
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <LockKeyhole className="h-4 w-4 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full bg-transparent text-sm outline-none"
                  autoComplete="current-password"
                />
              </div>
            </label>

            {error ? (
              <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Signing in...' : 'Access Admin'}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-6 text-xs leading-relaxed text-slate-500">
            This panel uses a local session token and local storage until a real backend is connected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
