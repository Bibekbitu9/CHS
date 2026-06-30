import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import SEO from '../components/SEO';

const Activities = () => {
  return (
    <>
      <SEO 
        title="Activities & Seminars | Centre for Heritage Studies" 
        description="Stay updated with the latest seminars, webinars, and awareness campaigns conducted by the Centre for Heritage Studies in Odisha." 
        keywords={['Heritage Seminars', 'Archaeology Conferences', 'Webinars', 'Heritage Walks', 'Odisha Cultural Events']}
      />
      {/* Intro & Upcoming Events - Light */}
      <section className="section-light" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>Events & Activities</h1>
            <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.6, marginBottom: '24px' }}>
              Fieldwork generates data; research generates knowledge; but it is through its public events and activities that CHS turns that knowledge into a shared cultural asset.
            </p>
            <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.6, marginBottom: '64px' }}>
              Since 2008, CHS has organised an ongoing calendar of events designed to bring heritage out of the archive and into the public sphere. These activities range from highly specialised academic conferences to accessible public lectures, from practical training workshops to guided heritage walks for school children.
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
            <GlassCard delay={0.2}>
              <span style={{ color: 'var(--color-muted-teal)', fontWeight: 600, fontSize: '0.9rem' }}>July 2026</span>
              <h3 style={{ fontSize: '1.5rem', margin: '12px 0' }}>Digital Preservation Workshop</h3>
              <p className="text-muted" style={{ marginBottom: '24px' }}>A comprehensive workshop on using photogrammetry and LiDAR to document high-risk heritage monuments in coastal Odisha.</p>
              <button className="btn-primary">Register Now</button>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* National Conferences & Seminars - Dark */}
      <section className="section-dark" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '32px' }}>National Conferences & Seminars</h2>
          <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '800px', lineHeight: 1.6, marginBottom: '48px' }}>
            CHS has established itself as a convener of scholarly dialogue at the national level, bringing together leading voices in Indian heritage studies to examine emerging challenges and share new research.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '32px' }}>
            <GlassCard delay={0.1}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--color-bronze)' }}>Brainstorming Session on Archaeological Studies</h3>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-muted-teal)', display: 'block', marginBottom: '16px' }}>March 2019 | Bhubaneswar</span>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>Facilitated a focused conversation among leading scholars and practitioners on emerging research priorities and methodologies in archaeological conservation.</p>
            </GlassCard>
            <GlassCard delay={0.2}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--color-bronze)' }}>National Conference on Archaeological Research</h3>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-muted-teal)', display: 'block', marginBottom: '16px' }}>May 2016 | Bhubaneswar</span>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>Organised jointly with the Department of Culture, Govt of Odisha. A platform for presenting new research and fostering interdisciplinary dialogue.</p>
            </GlassCard>
            <GlassCard delay={0.3}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--color-bronze)' }}>Workshop on Intangible Cultural Heritage</h3>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-muted-teal)', display: 'block', marginBottom: '16px' }}>February 2008 | Konark</span>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>In collaboration with IGRMS, Bhopal, bringing together specialists in ICH documentation to develop methodologies for documenting living traditions.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Lecture Series & Webinars - Light */}
      <section className="section-light" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '48px' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>The Ashutosh Memorial Lecture Series</h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Inaugurated in February 2025 as a premier platform for scholarly discourse on archaeology, heritage studies, and cultural conservation. The series honours the memory of a distinguished scholar of Odishan heritage.
              </p>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px' }}>
                The inaugural lecture was delivered by Prof. Dilip Kumar Chakrabarti, one of the most distinguished archaeologists of his generation and a former Professor of South Asian Archaeology at the University of Cambridge.
              </p>
              <button className="btn-primary">Watch Recordings</button>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Webinars (2020–2024)</h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                During the years between 2020 and 2024, CHS maintained its commitment to public and professional education through a sustained programme of online lectures and webinars on diverse aspects of archaeology and heritage management.
              </p>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px' }}>
                These programmes brought some of the country's most distinguished scholars to audiences across India and beyond, creating opportunities for students, researchers, and the public to engage with current thinking in heritage studies.
              </p>
              <button className="btn-primary">Browse Archive</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heritage Walks & Exhibitions - Dark */}
      <section className="section-dark" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '32px' }}>
            <GlassCard delay={0.1} padding="40px">
              <h3 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-sandstone)' }}>Heritage Walks</h3>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Bhubaneswar — India's temple city — is one of the most extraordinary places in the world to walk through history. CHS organises guided heritage walks that bring students, researchers, tourists, and curious citizens into direct encounter with this built heritage. Led by expert archaeologists and historians.
              </p>
              <button className="btn-primary">View Schedule</button>
            </GlassCard>
            <GlassCard delay={0.2} padding="40px">
              <h3 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-sandstone)' }}>Exhibitions</h3>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Heritage exhibitions organised or supported by CHS bring Odisha's extraordinary cultural legacy into public spaces — schools, museums, and cultural centres — in forms accessible to audiences who may never visit an archaeological site or read a research paper. Through carefully designed displays and artefact replicas.
              </p>
              <button className="btn-primary">Past Exhibitions</button>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default Activities;
