import { Routes, Route } from 'react-router-dom';
import GlobalLoader from './components/ui/GlobalLoader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Activities from './pages/Activities';
import Contact from './pages/Contact';
import InternshipApplication from './pages/InternshipApplication';

import KnowledgePortal from './pages/KnowledgePortal';
import Research from './pages/Research';
import Gallery from './pages/Gallery';
import GetInvolved from './pages/GetInvolved';
import MembershipApplication from './pages/MembershipApplication';

import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollToTop />
      <GlobalLoader />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/knowledge-portal" element={<KnowledgePortal />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/internship" element={<InternshipApplication />} />
          <Route path="/membership" element={<MembershipApplication />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
