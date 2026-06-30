import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import SEO from '../components/SEO';

const Research = () => {
  return (
    <>
      <SEO 
        title="Research & Publications | Centre for Heritage Studies" 
        description="Access scholarly articles, excavation reports, heritage studies, research papers, and conference proceedings from CHS." 
        keywords={['Odisha Archaeology Research', 'Excavation Reports India', 'Cultural Heritage Publications', 'Heritage Monographs', 'Kalinga Architecture Studies']}
      />
      
      {/* Intro Section - Light */}
      <section className="section-light" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>Research & Publications</h1>
            <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.6, marginBottom: '24px' }}>
              The scholarly output of CHS reflects the intellectual calibre of its membership. Research and Publications is where that output lives — accessible to researchers, policymakers, students, journalists, and members of the public who want to go deeper than a heritage site profile and engage with the evidence, analysis, and argument that underpins CHS's understanding of Odisha's heritage.
            </p>
            <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.6, marginBottom: '40px' }}>
              This section brings together everything CHS has produced and supported: peer-reviewed research papers, excavation and field survey reports, conservation studies, books and monographs, conference proceedings, and the documentation databases generated through major projects.
            </p>
            <div style={{ borderLeft: '4px solid var(--color-bronze)', paddingLeft: '24px', marginBottom: '32px' }}>
              <p style={{ fontSize: '1.4rem', color: 'var(--color-navy)', fontStyle: 'italic', margin: 0, lineHeight: 1.4 }}>
                "Access to scholarly articles, excavation reports, heritage studies, research papers, field reports, monographs, conference proceedings, and academic resources."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications Grid - Dark */}
      <section className="section-dark" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '32px' }}>
            
            {/* Research Papers & Articles */}
            <GlassCard delay={0.1} padding="40px">
              <h3 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-sandstone)' }}>Research Papers & Articles</h3>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                The members of CHS have contributed to the scholarly understanding of Odisha's heritage across a wide range of disciplines: the archaeology of Odisha's prehistoric period, the architectural history of Kalinga temple tradition, the maritime archaeology of the Odishan coast, the anthropology of tribal communities, the conservation of Buddhist heritage, and much more.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '24px' }}>
                This repository makes those contributions discoverable and accessible. Papers can be searched by author, subject area, publication year, and site or topic — making it a practical resource for researchers across disciplines.
              </p>
              <button className="btn-primary">Browse Papers</button>
            </GlassCard>

            {/* Excavation & Field Survey Reports */}
            <GlassCard delay={0.2} padding="40px">
              <h3 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-sandstone)' }}>Excavation & Field Survey Reports</h3>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                Every excavation CHS has conducted or supported has generated detailed technical reports — the primary records of what was found, where it was found, and what it means. These reports are the irreplaceable foundation of archaeological knowledge about the sites in question.
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 24px 0' }}>
                {['Archaeological Exploration of the Puri–Konark–Chilika Region — 2008–09', 
                  'Archaeological Exploration and Survey of the Chilika Coastal Zone — 2007–08', 
                  'Excavation Report: Harirajpur, Khurda — 2013', 
                  'Excavation Report: Talapada, Khurda District — 2014–15', 
                  'Excavation Report: Ostapur, Khurda District — 2015–16', 
                  'Ceramic Assemblage Report: Manikapatna Ancient Port Site'].map((item, i) => (
                  <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '12px' }}>
                    <span style={{ color: 'var(--color-bronze)', fontWeight: 600 }}>•</span>
                    <span className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.4 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* Conference Proceedings */}
            <GlassCard delay={0.3} padding="40px">
              <h3 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-sandstone)' }}>Conference Proceedings</h3>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                CHS has organised several landmark national events that brought together the leading minds in Indian heritage studies. The proceedings of these conferences represent an important body of scholarly literature on Odisha's archaeological and heritage challenges and opportunities.
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 24px 0' }}>
                {['National Workshop on Documentation of Intangible Cultural Heritage, Konark — Feb 2008', 
                  'National Conference on Archaeological Research and Conservation Studies, Bhubaneswar — May 2016', 
                  'Brainstorming Session on Archaeological Studies, Bhubaneswar — Mar 2019'].map((item, i) => (
                  <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '12px' }}>
                    <span style={{ color: 'var(--color-bronze)', fontWeight: 600 }}>•</span>
                    <span className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.4 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-primary">View Proceedings</button>
            </GlassCard>

            {/* Books & Monographs */}
            <GlassCard delay={0.4} padding="40px">
              <h3 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-sandstone)' }}>Books & Monographs</h3>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '24px' }}>
                The members of CHS have authored and contributed to a significant body of published literature on Odishan heritage. This section catalogues books, monographs, and edited volumes produced by CHS members, with details of publisher, year, and where to obtain copies.
              </p>
              <button className="btn-primary">Browse Library</button>
            </GlassCard>

            {/* Heritage Inventories & Documentation Databases */}
            <GlassCard delay={0.5} padding="40px">
              <h3 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-sandstone)' }}>Heritage Inventories & Documentation Databases</h3>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                The most extensive documentary output of CHS's work is its heritage inventory data — the structured records of over a thousand sites compiled for the IGNCA National Databank project, and the growing dataset being compiled under the current 4,000-monument documentation initiative.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '24px' }}>
                Access to these datasets is available at different levels. Summary records for all documented sites are publicly accessible through the Heritage Knowledge Portal. Detailed technical records, including site drawings, ceramic analyses, and conservation assessments, are available to registered researchers upon request.
              </p>
              <button className="btn-primary">Request Access</button>
            </GlassCard>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Research;
