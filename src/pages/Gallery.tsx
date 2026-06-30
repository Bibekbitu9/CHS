import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import SEO from '../components/SEO';

const Gallery = () => {
  return (
    <>
      <SEO 
        title="Gallery & Media | Centre for Heritage Studies" 
        description="Explore the visual archive of CHS: heritage sites, excavations, field documentation, events, and media coverage across Odisha." 
        keywords={['Odisha Heritage Photos', 'Archaeological Site Images', 'Odisha Temples', 'Konark Photos', 'CHS Video Archive']}
      />
      
      {/* Intro Section - Light */}
      <section className="section-light" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>Gallery & Media</h1>
            <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.6, marginBottom: '24px' }}>
              Heritage is a visual subject. The stone carvings of Konark, the atmospheric ruins of Ratnagiri, the sweep of the Chilika coastline at dusk, the careful hands of a field archaeologist brushing away centuries of sediment — these images carry a power that no amount of prose can fully replicate.
            </p>
            <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.6, marginBottom: '24px' }}>
              The Gallery & Media section is where CHS's visual archive lives. It is both a public resource and a statement about the organisation's work — evidence of the places visited, the people engaged, and the knowledge generated across seventeen years of active heritage documentation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Media Collections - Dark */}
      <section className="section-dark" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '48px' }}>
            
            {/* Photo Gallery */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'var(--color-sandstone)' }}>Photo Gallery</h2>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                The CHS photo archive spans the full range of the organisation's activities: field documentation of heritage sites across all thirty districts, archaeological excavations from prehistoric mounds to coastal sites, national conferences and seminars, heritage walks and public outreach events, and the living cultural traditions that give Odisha's monuments their meaning.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '24px' }}>
                Photographs are organised into the following collections:
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 32px 0' }}>
                {[
                  'Heritage Sites — Temples, Buddhist Complexes, Forts, Coastal Sites, Prehistoric Sites', 
                  'Excavations — Harirajpur (2013), Talapada (2014–15), Ostapur (2015–16), Puri-Konark-Chilika', 
                  'Field Documentation — Surveys, documentation teams, GIS mapping, photogrammetry',
                  'Events — National conferences, lectures, workshops, heritage walks, exhibitions',
                  'Living Heritage — Intangible Cultural Heritage, tribal traditions, craft practices'
                ].map((item, i) => (
                  <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '12px' }}>
                    <span style={{ color: 'var(--color-bronze)', fontWeight: 600 }}>•</span>
                    <span className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.4 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-primary">Browse Photo Archive</button>
            </motion.div>

            {/* Video Archive & Media Coverage */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <GlassCard delay={0.2} padding="40px">
                <h3 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-sandstone)' }}>Video Archive</h3>
                <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                  Video brings heritage to life in ways that no other medium can. The CHS video archive brings together field documentation footage, event recordings, expert interviews, and short heritage films — all hosted on the CHS YouTube channel and embedded here for easy access.
                </p>
                <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '24px' }}>
                  The archive currently includes recordings from the CHS lecture and webinar series (2020–2024), the 1st Ashutosh Memorial Lecture by Prof. Dilip Kumar Chakrabarti (February 2025), and field documentation footage from CHS's major survey projects.
                </p>
                <button className="btn-primary" style={{ background: '#FF0000', borderColor: '#FF0000', color: 'white' }}>Subscribe on YouTube</button>
              </GlassCard>

              <GlassCard delay={0.3} padding="40px">
                <h3 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-sandstone)' }}>Media Coverage</h3>
                <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                  CHS's work has attracted attention from print, broadcast, and digital media. This section archives news coverage, feature articles, television appearances, and digital media mentions that document the public recognition of CHS's contributions to Odisha's heritage.
                </p>
                <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '24px' }}>
                  The media archive also serves as a resource for journalists and content creators seeking background information on CHS and its work. A media kit — including the CHS logo, standard organisational description, and contact details for media enquiries — is available for download on this page.
                </p>
                <button className="btn-secondary">Download Media Kit</button>
              </GlassCard>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
