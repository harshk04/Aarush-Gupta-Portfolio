const AUTH_KEY = 'aarush-admin-session';
export const ADMIN_USERNAME = 'aarush';
const PASSWORD_HASH = 'b31b32fae930b6d8e8cd2f53dfd18db38a5980289d025492940389e0faa5d926';
const SESSION_TTL_MS = 1000 * 60 * 60 * 12;

const hasWindow = typeof window !== 'undefined';

export interface AdminSession {
  username: string;
  token: string;
  expiresAt: number;
}

type Listener = (session: AdminSession | null) => void;

const listeners = new Set<Listener>();

const randomToken = () => {
  const bytes = new Uint8Array(16);
  window.crypto.getRandomValues(bytes);
  return Array.from(bytes, (value) => value.toString(16).padStart(2, '0')).join('');
};

const sha256 = async (value: string) => {
  const data = new TextEncoder().encode(value);
  const hash = await window.crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash), (byte) => byte.toString(16).padStart(2, '0')).join('');
};

const readSession = (): AdminSession | null => {
  if (!hasWindow) return null;

  const raw = window.localStorage.getItem(AUTH_KEY);
  if (!raw) return null;

  try {
    const session = JSON.parse(raw) as AdminSession;
    if (!session?.expiresAt || session.expiresAt <= Date.now()) {
      window.localStorage.removeItem(AUTH_KEY);
      return null;
    }
    return session;
  } catch {
    window.localStorage.removeItem(AUTH_KEY);
    return null;
  }
};

const writeSession = (session: AdminSession | null) => {
  if (!hasWindow) return;

  if (!session) {
    window.localStorage.removeItem(AUTH_KEY);
  } else {
    window.localStorage.setItem(AUTH_KEY, JSON.stringify(session));
  }

  listeners.forEach((listener) => listener(session));
};

if (hasWindow) {
  window.addEventListener('storage', (event) => {
    if (event.key !== AUTH_KEY) return;
    listeners.forEach((listener) => listener(readSession()));
  });
}

export const getAdminSession = () => readSession();

export const isAdminAuthenticated = () => Boolean(readSession());

export const signInAdmin = async (username: string, password: string) => {
  const normalizedUsername = username.trim();
  if (normalizedUsername !== ADMIN_USERNAME) {
    throw new Error('Invalid username or password.');
  }

  const passwordHash = await sha256(password);
  if (passwordHash !== PASSWORD_HASH) {
    throw new Error('Invalid username or password.');
  }

  const session: AdminSession = {
    username: ADMIN_USERNAME,
    token: randomToken(),
    expiresAt: Date.now() + SESSION_TTL_MS,
  };

  writeSession(session);
  return session;
};

export const signOutAdmin = async () => {
  writeSession(null);
};

export const subscribeAdminSession = (listener: Listener) => {
  listeners.add(listener);
  listener(readSession());
  return () => listeners.delete(listener);
};

