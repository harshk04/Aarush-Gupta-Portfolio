import { Outlet } from 'react-router-dom';

import { AdminAuthProvider } from '../context/AdminAuthContext.jsx';
import { AdminToastProvider, ToastViewport } from '../context/AdminToastContext.jsx';

const AdminProviders = () => (
  <AdminAuthProvider>
    <AdminToastProvider>
      <Outlet />
      <ToastViewport />
    </AdminToastProvider>
  </AdminAuthProvider>
);

export default AdminProviders;

