import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import SEO from '../components/SEO';

const About = () => {
  return (
    <>
      <SEO 
        title="About Us | Centre for Heritage Studies" 
        description="Learn about the mission, vision, and the executive body driving the Centre for Heritage Studies to preserve and document historical assets." 
      />
      <div style={{ paddingTop: '100px', paddingBottom: '80px' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>About CHS</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', lineHeight: 1.6, marginBottom: '64px' }}>
              The Centre for Heritage Studies was born out of a conviction shared by a group of Odisha's most distinguished archaeologists and heritage scholars: that the state's extraordinary cultural legacy deserved a dedicated institution.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '80px' }}>
            <GlassCard delay={0.1}>
              <h3 style={{ color: 'var(--color-bronze)', marginBottom: '16px' }}>Our Mission</h3>
              <p style={{ lineHeight: 1.6 }}>To document, preserve, interpret, and popularize the diverse cultural heritage of Odisha while fostering research, collaboration, education, and public participation in heritage conservation.</p>
            </GlassCard>
            <GlassCard delay={0.2}>
              <h3 style={{ color: 'var(--color-bronze)', marginBottom: '16px' }}>Our Vision</h3>
              <p style={{ lineHeight: 1.6 }}>To establish Odisha as a global centre for heritage knowledge, research, conservation, and cultural innovation through the integration of traditional scholarship and emerging digital technologies.</p>
            </GlassCard>
            <GlassCard delay={0.3}>
              <h3 style={{ color: 'var(--color-bronze)', marginBottom: '16px' }}>Our Commitment</h3>
              <p style={{ lineHeight: 1.6 }}>To preserve, document, interpret and promote the diverse cultural heritage of Odisha through research, education, innovation, and community participation for the benefit of present and future generations.</p>
            </GlassCard>
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '32px' }}>Office Bearers</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '24px' }}>
              {[
                { role: 'Advisor', name: 'Prof. K.K. Basa', desc: 'Chairman, NMA' },
                { role: 'President', name: 'Prof. Sadasiba Pradhan', desc: 'Former Professor, Utkal University' },
                { role: 'Vice-President', name: 'Prof. Sanjaya Acharya', desc: 'Former Professor, Utkal University' },
                { role: 'Secretary', name: 'Dr. J.K. Patnaik', desc: 'Former Superintending Archaeologist, ASI' }
              ].map((person, i) => (
                <GlassCard key={i} delay={i * 0.1} padding="24px">
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-muted-teal)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>{person.role}</span>
                  <h4 style={{ fontSize: '1.2rem', margin: '8px 0' }}>{person.name}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{person.desc}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: '80px' }}>
            <GlassCard dark={true} padding="48px" className="text-center" delay={0.2}>
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--color-sandstone)' }}>Internship Programme</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-ivory)', maxWidth: '700px', margin: '0 auto 32px', lineHeight: 1.6 }}>
                  CHS offers structured internships for students of archaeology, history, architecture, conservation, anthropology, geography, digital heritage, and related fields. Direct engagement with heritage documentation methods and mentorship from senior professionals.
                </p>
                <a href="/internship" className="btn-primary" style={{ background: 'white', color: 'var(--color-earth-dark)' }}>Apply for Internship</a>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
