import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Internships from './pages/Internships.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import About from './pages/About.jsx';
import Certifications from './pages/Certifications.jsx';
import AdminProviders from './admin/components/AdminProviders.jsx';
import RequireAdminAuth from './admin/components/RequireAdminAuth.jsx';
import AdminLayout from './admin/components/AdminLayout.jsx';
import AdminLogin from './admin/pages/Login.jsx';
import AdminDashboard from './admin/pages/Dashboard.jsx';
import AdminCertificates from './admin/pages/Certificates.jsx';
import AdminInternships from './admin/pages/Internships.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="internships" element={<Internships />} />
        <Route path="services" element={<Navigate to="/internships" replace />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="admin" element={<AdminProviders />}>
        <Route path="login" element={<AdminLogin />} />
        <Route element={<RequireAdminAuth />}>
          <Route element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="certificates" element={<AdminCertificates />} />
            <Route path="internships" element={<AdminInternships />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
