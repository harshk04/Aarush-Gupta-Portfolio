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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
