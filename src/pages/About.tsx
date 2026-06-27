import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GlassCard from '../components/ui/GlassCard';
import SEO from '../components/SEO';

const About = () => {
  return (
    <>
      <SEO 
        title="About Us | Centre for Heritage Studies" 
        description="Learn about the mission, vision, and the executive body driving the Centre for Heritage Studies to preserve and document historical assets." 
      />
      {/* Intro Section - Light */}
      <section className="section-light" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>About CHS</h1>
            <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.6, marginBottom: '24px' }}>
              The Centre for Heritage Studies was born out of a conviction shared by a group of Odisha's most distinguished archaeologists and heritage scholars: that the state's extraordinary cultural legacy deserved a dedicated institution — independent, professionally driven, and committed to rigorous documentation, conservation, and public engagement.
            </p>
            <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.6 }}>
              On 19 January 2008, CHS was formally registered as a society under Regd. No. 22663/253 of 2007–2008, bringing together historians, archaeologists, anthropologists, conservation professionals, architects, and heritage enthusiasts under one roof. Today, CHS stands at a significant threshold, undertaking a comprehensive survey of approximately 4,000 heritage monuments and sites across all thirty districts of Odisha.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission/Vision Section - Dark */}
      <section className="section-dark" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '32px' }}>
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
        </div>
      </section>

      {/* Core Areas & Objectives - Light */}
      <section className="section-light" style={{ padding: '80px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '32px' }}>Core Areas of Work</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))', gap: '24px', marginBottom: '64px' }}>
              {[
                '01. Archaeological Survey & Excavation',
                '02. Heritage Documentation & Inventory',
                '03. Conservation & Heritage Management',
                '04. Historical & Cultural Research',
                '05. Architectural Documentation',
                '06. Digital Heritage & 3D Documentation',
                '07. Intangible Cultural Heritage Studies',
                '08. Museum & Interpretation Planning',
                '09. Heritage Education & Public Outreach',
                '10. Cultural Tourism & Heritage Trails',
                '11. Community-Based Heritage Conservation',
                '12. Research Publications'
              ].map((area, i) => (
                <GlassCard key={i} delay={i * 0.05} padding="20px">
                  <p style={{ margin: 0, fontWeight: 500, color: 'var(--color-navy)' }}>{area}</p>
                </GlassCard>
              ))}
            </div>

            <h2 style={{ fontSize: '2.5rem', marginBottom: '32px' }}>Our Objectives</h2>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              {[
                'To undertake archaeological surveys, explorations, and excavations to discover, study, and interpret cultural remains.',
                'To promote the conservation, protection, interpretation, and presentation of both tangible and intangible heritage.',
                'To identify, survey, document, map, and create comprehensive inventories of cultural properties.',
                'To establish and maintain a comprehensive digital repository of heritage resources.',
                'To encourage scholarly research and to disseminate knowledge through publications and digital platforms.',
                'To foster awareness and appreciation of heritage among students, local communities, and the wider public.',
                'To develop a vibrant professional networking hub for heritage practitioners.',
                'To collaborate with government departments, universities, research institutions, and international agencies.',
                'To promote the use of emerging technologies such as GIS mapping, photogrammetry, and 3D scanning.',
                'To support responsible heritage management and sustainable cultural tourism initiatives.',
                'To encourage active participation of communities in documenting and safeguarding cultural heritage.'
              ].map((obj, i) => (
                <li key={i} style={{ padding: '16px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', gap: '16px' }}>
                  <span style={{ color: 'var(--color-bronze)', fontWeight: 600 }}>•</span>
                  <p className="text-muted" style={{ margin: 0, lineHeight: 1.6 }}>{obj}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Office Bearers & Executive Members Section - Dark */}
      <section className="section-dark" style={{ padding: '80px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Office Bearers</h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '32px', maxWidth: '800px' }}>
              CHS is guided by an exceptional group of scholars and professionals whose combined experience spans the full breadth of archaeological and heritage science in India.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))', gap: '24px', marginBottom: '64px' }}>
              {[
                { role: 'Advisor', name: 'Prof. K.K. Basa', desc: 'Chairman, National Monuments Authority, Govt of India' },
                { role: 'President', name: 'Prof. Sadasiba Pradhan', desc: 'Former Professor, Utkal University' },
                { role: 'Vice-President', name: 'Prof. Sanjaya Acharya', desc: 'Former Professor, Utkal University' },
                { role: 'Secretary', name: 'Dr. J.K. Patnaik', desc: 'Former Superintending Archaeologist, ASI' },
                { role: 'Joint Secretary', name: 'Dr. S.K. Patnaik', desc: 'Former OTS-I (S) & Secretary, OIMSEAS' },
                { role: 'Treasurer', name: 'Sri Bijay Kumar Das', desc: 'Retired Senior Administrative Officer, ASI' }
              ].map((person, i) => (
                <GlassCard key={i} delay={i * 0.1} padding="24px">
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-bronze)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>{person.role}</span>
                  <h4 style={{ fontSize: '1.2rem', margin: '8px 0', color: 'var(--color-ivory)' }}>{person.name}</h4>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>{person.desc}</p>
                </GlassCard>
              ))}
            </div>

            <h2 style={{ fontSize: '2.5rem', marginBottom: '32px' }}>Executive Members</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '16px' }}>
              {[
                { name: 'Prof. K.S. Behera', desc: 'Former Vice-Chancellor' },
                { name: 'Dr. Asutosh Patnaik', desc: 'Director, Public Health' },
                { name: 'Prof. S.P. Rath', desc: 'Former Vice-Chancellor' },
                { name: 'Prof. P.K. Das', desc: 'Former Professor of Anthropology' },
                { name: 'Prof. L.S. Nigam', desc: 'Eminent Scholar, Raipur' },
                { name: 'Prof. B.K. Tripathy', desc: 'Vice-Chancellor, G.M. University' },
                { name: 'Prof. Rabi Mohanty', desc: 'Eminent Archaeologist and Academician, Pune' },
                { name: 'Dr. S.B. Ota', desc: 'Former Joint Director General, ASI' },
                { name: 'Dr. D.N. Dimiri', desc: 'Former Joint Director General, ASI' },
                { name: 'Shri A.K. Patel', desc: 'Former Director, ASI' }
              ].map((person, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', borderLeft: '2px solid var(--color-bronze)', paddingLeft: '16px' }}>
                  <h4 style={{ fontSize: '1.1rem', margin: '0 0 4px 0', color: 'var(--color-ivory)' }}>{person.name}</h4>
                  <p className="text-muted" style={{ margin: 0, fontSize: '0.9rem' }}>{person.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Membership & Govt Institutions - Light */}
      <section className="section-light" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '48px' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Membership</h2>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                Beyond its office bearers and executive council, CHS is home to a large and growing community of 82 life members drawn from across India. Historians, archaeologists, anthropologists, conservation experts, architects, researchers, academicians, administrators, and heritage enthusiasts — the membership of CHS reflects the full spectrum of expertise required to understand and protect Odisha's heritage.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '32px' }}>
                This multidisciplinary composition is one of CHS's greatest strengths, allowing the Centre to draw on architectural analysis, anthropological fieldwork, historical research, and community knowledge for its projects.
              </p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>CHS & Government Institutions</h2>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                As an independent, professionally driven organisation, CHS is free to conduct research and documentation without institutional constraints. Yet it works in close and productive partnership with government agencies — providing technical expertise, research support, and informed guidance that directly strengthens official conservation and management efforts.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>
                The Centre has collaborated extensively with the Department of Culture, Government of Odisha, the Indira Gandhi National Centre for the Arts (IGNCA), and the Archaeological Survey of India (ASI). This relationship — independent yet collaborative, scholarly yet practically engaged — is what makes CHS an effective and trusted partner.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Internship Section - Dark */}
      <section className="section-dark" style={{ padding: '80px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <GlassCard padding="48px" className="text-center" delay={0.2}>
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--color-sandstone)' }}>Internship Programme</h2>
                <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 32px', lineHeight: 1.6 }}>
                  CHS offers structured internships for students of archaeology, history, architecture, conservation, anthropology, geography, digital heritage, and related fields. Direct engagement with heritage documentation methods and mentorship from senior professionals.
                </p>
                <Link to="/internship" className="btn-primary">Apply for Internship</Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
