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
            <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.6, marginBottom: '24px' }}>
              Every claim CHS makes about Odisha's heritage is backed by fieldwork. The Projects section documents the actual work — the surveys, excavations, documentation exercises, and collaborative initiatives that constitute CHS's contribution to the understanding and preservation of Odisha's cultural legacy.
            </p>
            <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.6 }}>
              Since its establishment in 2008, CHS has undertaken projects funded by and in partnership with the Government of India's premier cultural bodies, the Archaeological Survey of India, leading Indian universities, and international academic institutions. Each project page provides full details of the project's objectives, methodology, team, findings, and significance.
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
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '16px' }}>
              This is the most ambitious project in CHS's history — and arguably one of the most significant heritage documentation exercises ever undertaken in Odisha.
            </p>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '16px' }}>
              Resolved at a meeting of the Centre on 2 September 2025 and to be financially supported by the Government of Odisha, the project aims to comprehensively document approximately 4,000 tangible heritage monuments and sites across all thirty districts of Odisha within a period of three years. No documentation effort of this scale has previously been attempted in the state.
            </p>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '16px' }}>
              What makes this project genuinely distinctive is its dual mandate. The first objective is comprehensive documentation of Odisha's tangible heritage — the physical monuments, archaeological sites, historic structures, and cultural landscapes that constitute the visible record of the state's civilisational history. The second objective, equally important, is the documentation of the intangible heritage associated with these physical sites: the rituals, community traditions, oral histories, living practices, and cultural meanings that give the monuments their living significance.
            </p>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Complementing the documentation fieldwork, advanced Photogrammetry and LiDAR (Light Detection and Ranging) surveys will be undertaken through specialised agencies under the auspices of the Government of Odisha, in consultation with CHS. These technologies will produce highly accurate three-dimensional digital records of monuments and sites — records that will serve conservation planning, disaster risk management, academic research, and virtual heritage applications for decades to come.
            </p>
            <div style={{ borderLeft: '4px solid var(--color-bronze)', paddingLeft: '24px', marginBottom: '32px' }}>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-ivory)', fontStyle: 'italic', margin: 0, lineHeight: 1.4 }}>
                For the first time, Odisha's heritage will be seen whole — documented not merely as a collection of individual sites, but as a living cultural landscape of extraordinary depth and diversity.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button className="btn-primary">View Interactive Map</button>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Other Projects Section - Light */}
      <section className="section-light" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '48px' }}>Completed Projects & Explorations</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {/* IGNCA */}
            <GlassCard delay={0.1} padding="40px">
              <span style={{ display: 'inline-block', background: 'var(--card-bg-dark)', color: '#F8FAFC', border: '1px solid rgba(0,0,0,0.1)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '16px' }}>Documentation</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>National Databank on Indian Art & Culture (IGNCA)</h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                One of CHS's earliest and most significant contributions. More than a thousand monuments and archaeological sites from different districts of the state were surveyed, photographed, and recorded in structured data formats. The completed database was submitted to IGNCA and made publicly accessible.
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <button className="btn-primary">Read Project Report</button>
              </div>
            </GlassCard>

            {/* Exploration */}
            <GlassCard delay={0.2} padding="40px">
              <span style={{ display: 'inline-block', background: 'var(--card-bg-dark)', color: '#F8FAFC', border: '1px solid rgba(0,0,0,0.1)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '16px' }}>Exploration</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Archaeological Exploration: Puri–Konark–Chilika Region</h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                In collaboration with Utkal University and the Archaeological Survey of India. The exploration covered the coastal belt between Puri and Konark — identifying and documenting previously unrecorded archaeological remains and cultural sites. A trial excavation was conducted near Konark to investigate the cultural sequence of the area.
              </p>
            </GlassCard>

            {/* Excavations */}
            <GlassCard delay={0.3} padding="40px">
              <span style={{ display: 'inline-block', background: 'var(--card-bg-dark)', color: '#F8FAFC', border: '1px solid rgba(0,0,0,0.1)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '16px' }}>Excavations</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Excavations at Harirajpur, Talapada & Ostapur</h2>
              <div className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                <p style={{ marginBottom: '16px' }}><strong>Harirajpur (2013):</strong> Conducted in collaboration with Utkal University and Deccan College, Pune, revealing significant evidence of prehistoric human occupation in the region.</p>
                <p style={{ marginBottom: '16px' }}><strong>Talapada (2014–15):</strong> A major excavation led by Prof. R.K. Mohanty in collaboration with Deccan College and UCLA, yielding significant data on settlement history and material culture.</p>
                <p><strong>Ostapur (2015–16):</strong> Excavations added further evidence to the emerging picture of settlement patterns and cultural development in this archaeologically rich area.</p>
              </div>
            </GlassCard>

            {/* Manikapatna */}
            <GlassCard delay={0.4} padding="40px">
              <span style={{ display: 'inline-block', background: 'var(--card-bg-dark)', color: '#F8FAFC', border: '1px solid rgba(0,0,0,0.1)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '16px' }}>Documentation</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Manikapatna Ancient Port Documentation</h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Situated on the shores of Chilika Lake, Manikapatna is one of the most evocative archaeological sites in coastal Odisha. CHS provided financial and technical assistance to Deccan College, Pune, for a detailed archaeological report including site drawings, photographic documentation, and ceramic assemblage analysis, contributing significantly to understanding ancient maritime trade connections.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
