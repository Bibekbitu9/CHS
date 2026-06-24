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
      <div style={{ padding: '120px 24px 80px', minHeight: '100vh' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>Projects & Fieldwork</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', lineHeight: 1.6, marginBottom: '64px' }}>
              Every claim CHS makes about Odisha's heritage is backed by fieldwork. The Projects section documents the actual work — the surveys, excavations, documentation exercises, and collaborative initiatives.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}>
            <GlassCard delay={0.1} padding="40px">
              <span style={{ display: 'inline-block', background: 'var(--color-sandstone)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '16px' }}>Flagship Project</span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '24px' }}>Comprehensive Documentation of Odisha's Heritage</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '24px' }}>
                The most ambitious project in CHS's history — and arguably one of the most significant heritage documentation exercises ever undertaken in Odisha. Resolved in September 2025, the project aims to comprehensively document approximately 4,000 tangible heritage monuments and sites across all thirty districts within three years.
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <button className="btn-primary">View Interactive Map</button>
              </div>
            </GlassCard>

            <GlassCard delay={0.2} padding="40px">
              <span style={{ display: 'inline-block', background: 'var(--color-earth-dark)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '16px' }}>Completed Project</span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '24px' }}>National Databank on Indian Art & Culture (IGNCA)</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '24px' }}>
                One of CHS's earliest and most significant contributions. More than a thousand monuments and archaeological sites from different districts of the state were surveyed, photographed, and recorded in structured data formats.
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <button className="btn-secondary">Read Project Report</button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
