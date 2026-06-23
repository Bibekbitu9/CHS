import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Activities from './pages/Activities';
import Contact from './pages/Contact';
import InternshipApplication from './pages/InternshipApplication';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/internship" element={<InternshipApplication />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
