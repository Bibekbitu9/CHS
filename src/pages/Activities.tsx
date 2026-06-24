import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import SEO from '../components/SEO';

const Activities = () => {
  return (
    <>
      <SEO 
        title="Activities & Seminars | Centre for Heritage Studies" 
        description="Stay updated with the latest seminars, webinars, and awareness campaigns conducted by the Centre for Heritage Studies." 
      />
      {/* Intro & Upcoming Events - Light */}
      <section className="section-light" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>Events & Activities</h1>
            <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.6, marginBottom: '64px' }}>
              CHS is not only a research body — it is a community of scholars and heritage advocates who believe that knowledge must be shared, discussed, and put to work.
            </p>
          </motion.div>

          <h2 style={{ fontSize: '2.5rem', marginBottom: '32px' }}>Upcoming Events</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '32px' }}>
            <GlassCard delay={0.1}>
              <span style={{ color: 'var(--color-muted-teal)', fontWeight: 600, fontSize: '0.9rem' }}>June 2026</span>
              <h3 style={{ fontSize: '1.5rem', margin: '12px 0' }}>Bhubaneswar Temple Heritage Walk</h3>
              <p className="text-muted" style={{ marginBottom: '24px' }}>Join leading scholars on a guided walk through the Old Town, exploring the architectural evolution of Kalinga temples.</p>
              <button className="btn-primary">Register Now</button>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Lecture Series - Dark */}
      <section className="section-dark" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '32px' }}>Lecture Series</h2>
          <GlassCard delay={0.2} padding="40px">
            <h3 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-sandstone)' }}>The Ashutosh Memorial Lecture Series</h3>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Inaugurated in February 2025 as a premier platform for scholarly discourse on archaeology, heritage studies, and cultural conservation. The inaugural lecture was delivered by Prof. Dilip Kumar Chakrabarti.
            </p>
            <button className="btn-primary">Watch Recordings</button>
          </GlassCard>
        </div>
      </section>
    </>
  );
};

export default Activities;
