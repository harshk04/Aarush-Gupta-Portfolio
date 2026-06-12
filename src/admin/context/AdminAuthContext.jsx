import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import {
  getAdminSession,
  signInAdmin,
  signOutAdmin,
  subscribeAdminSession,
} from '../services/authService.ts';

const AdminAuthContext = createContext(null);

export const AdminAuthProvider = ({ children }) => {
  const [session, setSession] = useState(() => getAdminSession());

  useEffect(() => subscribeAdminSession(setSession), []);

  const value = useMemo(
    () => ({
      session,
      isAuthenticated: Boolean(session),
      login: signInAdmin,
      logout: signOutAdmin,
    }),
    [session],
  );

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider');
  }
  return context;
};

