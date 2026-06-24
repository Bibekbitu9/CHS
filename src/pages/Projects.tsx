import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import SEO from '../components/SEO';

const Projects = () => {
  return (
    <>
      <SEO 
        title="Projects & Fieldwork | Centre for Heritage Studies" 
        description="Explore the ongoing and completed heritage documentation and conservation projects by the Centre for Heritage Studies." 
      />
      {/* Intro Section - Light */}
      <section className="section-light" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>Projects & Fieldwork</h1>
            <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.6 }}>
              Every claim CHS makes about Odisha's heritage is backed by fieldwork. The Projects section documents the actual work — the surveys, excavations, documentation exercises, and collaborative initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flagship Project Section - Dark */}
      <section className="section-dark" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <GlassCard delay={0.1} padding="40px">
            <span style={{ display: 'inline-block', background: 'rgba(205, 127, 50, 0.2)', color: 'var(--color-ivory)', border: '1px solid var(--color-bronze)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '16px' }}>Flagship Project</span>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '24px' }}>Comprehensive Documentation of Odisha's Heritage</h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
              The most ambitious project in CHS's history — and arguably one of the most significant heritage documentation exercises ever undertaken in Odisha. Resolved in September 2025, the project aims to comprehensively document approximately 4,000 tangible heritage monuments and sites across all thirty districts within three years.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button className="btn-primary">View Interactive Map</button>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Completed Project Section - Light */}
      <section className="section-light" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <GlassCard delay={0.2} padding="40px">
            <span style={{ display: 'inline-block', background: 'var(--card-bg-dark)', color: '#F8FAFC', border: '1px solid rgba(0,0,0,0.1)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '16px' }}>Completed Project</span>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '24px' }}>National Databank on Indian Art & Culture (IGNCA)</h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
              One of CHS's earliest and most significant contributions. More than a thousand monuments and archaeological sites from different districts of the state were surveyed, photographed, and recorded in structured data formats.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button className="btn-primary">Read Project Report</button>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
};

export default Projects;
