import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GlassCard from '../components/ui/GlassCard';
import SEO from '../components/SEO';

const GetInvolved = () => {
  return (
    <>
      <SEO 
        title="Get Involved | Centre for Heritage Studies" 
        description="Join CHS as a member, volunteer, or intern. Support our work to document and preserve Odisha's cultural heritage." 
        keywords={['Heritage Volunteer', 'Archaeology Internship', 'Adopt a Monument Odisha', 'Heritage Society Membership']}
      />
      
      {/* Intro Section - Light */}
      <section className="section-light" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>Get Involved</h1>
            <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.6, marginBottom: '24px' }}>
              Heritage conservation is not the exclusive responsibility of specialists, government agencies, or well-funded institutions. It is a shared responsibility — one that requires the participation of communities, professionals, students, institutions, and concerned individuals across society. CHS has always believed this, and the Get Involved section reflects that belief in concrete and practical terms.
            </p>
            <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.6, marginBottom: '40px' }}>
              Whether you are a professional archaeologist wishing to contribute your expertise to a documentation project, a student of history seeking mentorship and fieldwork experience, an institution looking for a technical partner for a heritage conservation initiative, or a concerned citizen who simply cares about the future of Odisha's cultural legacy — there is a place for you in the CHS community.
            </p>
            <div style={{ borderLeft: '4px solid var(--color-bronze)', paddingLeft: '24px', marginBottom: '32px' }}>
              <p style={{ fontSize: '1.4rem', color: 'var(--color-navy)', fontStyle: 'italic', margin: 0, lineHeight: 1.4 }}>
                "We invite you to explore, learn, contribute, collaborate, and help build a stronger future for Odisha's cultural heritage."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Opportunities Grid - Dark */}
      <section className="section-dark" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '32px' }}>
            
            {/* Membership */}
            <GlassCard delay={0.1} padding="40px">
              <h3 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-sandstone)' }}>Membership</h3>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                Membership of CHS is an investment in Odisha's heritage — and a connection to one of the state's most distinguished communities of heritage scholars and professionals. As a life member, you become part of an institution with seventeen years of active fieldwork, national-level advocacy, and scholarly publishing behind it — and decades of ambition ahead.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '24px' }}>
                As a member of CHS, you will:
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 24px 0' }}>
                {[
                  'Be part of a distinguished community of heritage scholars',
                  'Receive invitations to CHS\'s exclusive events and field visits',
                  'Have access to CHS\'s research archive and databases',
                  'Be eligible to participate in CHS projects',
                  'Contribute to the governance of the Centre',
                  'Have your expertise listed in the Member Directory'
                ].map((item, i) => (
                  <li key={i} style={{ padding: '8px 0', display: 'flex', gap: '12px' }}>
                    <span style={{ color: 'var(--color-bronze)', fontWeight: 600 }}>•</span>
                    <span className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.4 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/membership" className="btn-primary" style={{ display: 'inline-block' }}>Apply for Membership</Link>
            </GlassCard>

            {/* Volunteer Programme */}
            <GlassCard delay={0.2} padding="40px">
              <h3 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-sandstone)' }}>Volunteer Programme</h3>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                CHS's ambitious documentation programme — covering 4,000 heritage monuments across all thirty districts of Odisha — requires committed, energetic, and capable volunteers who can support the field teams in their documentation work.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '24px' }}>
                Volunteers with CHS gain invaluable hands-on experience in heritage documentation methodology, archaeological survey techniques, GIS data collection, photographic documentation, and oral history recording. They work alongside leading heritage professionals in field conditions that cannot be replicated in a classroom.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '24px', fontStyle: 'italic' }}>
                A minimum commitment of ten field days per year is requested. CHS provides training, supervision, and certification of volunteering hours.
              </p>
              <button className="btn-secondary">Register Interest</button>
            </GlassCard>

            {/* Internship Programme */}
            <GlassCard delay={0.3} padding="40px">
              <h3 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-sandstone)' }}>Internship Programme</h3>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                CHS offers structured internships for students of archaeology, history, architecture, conservation, anthropology, geography, digital heritage, and related fields. An internship with CHS offers an experience that goes beyond the theoretical: direct engagement with heritage documentation methods, mentorship from senior archaeologists and heritage professionals, and the satisfaction of contributing to a body of knowledge that will shape how Odisha's heritage is understood and protected.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '24px' }}>
                Internships are structured around CHS's active projects and can be tailored to the student's discipline and interests. Applications are accepted on a rolling basis.
              </p>
              <Link to="/internship" className="btn-primary" style={{ display: 'inline-block' }}>Apply for Internship</Link>
            </GlassCard>

          </div>
        </div>
      </section>

      {/* Support & Collaboration - Light */}
      <section className="section-light" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '48px' }}>
            
            {/* Collaborate */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Collaborate with CHS</h2>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                CHS is a natural partner for institutions that wish to engage with Odisha's heritage in a rigorous, professional, and ethically grounded manner. The Centre has a proven track record of successful collaboration with some of India's most distinguished academic and cultural institutions, and with international partners including UCLA.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '24px' }}>
                CHS welcomes collaborative proposals from universities, government departments, museums, international research institutions, and funding agencies. Collaborative arrangements can take a variety of forms: joint research, co-organised events, technical advisory relationships, or formal MOUs.
              </p>
              <Link to="/contact" className="btn-primary">Contact the Secretariat</Link>
            </motion.div>

            {/* Donate */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Donate & Support CHS</h2>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                CHS is a registered, non-profit organisation whose work depends on the generosity of individuals, institutions, and organisations who believe that Odisha's cultural heritage deserves to be protected.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '24px' }}>
                Financial support from donors enables CHS to fund field documentation in remote districts, support young researchers through fellowships, distribute educational materials, and maintain the digital platforms that make CHS's knowledge accessible to the world.
              </p>
              <div style={{ background: 'var(--card-bg-light)', padding: '24px', borderRadius: '12px', marginBottom: '24px', border: '1px solid rgba(0,0,0,0.05)' }}>
                <strong style={{ display: 'block', marginBottom: '12px', color: 'var(--color-navy)' }}>Specific campaigns include:</strong>
                <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-muted)' }}>
                  <li style={{ marginBottom: '8px' }}><strong>Adopt a Monument:</strong> Fund the complete documentation of one site</li>
                  <li style={{ marginBottom: '8px' }}><strong>Support a Survey:</strong> Fund a field survey team for a season</li>
                  <li><strong>Fund a Lecture:</strong> Support a public lecture by a distinguished scholar</li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Education Corner - Dark */}
      <section className="section-dark" style={{ padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'var(--color-sandstone)' }}>Heritage Education Corner</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 32px', lineHeight: 1.6, color: 'var(--color-ivory)' }}>
              Odisha's heritage belongs, above all, to its young people. The temples, Buddhist sites, coastal sites, and living traditions that CHS works to document and protect are not museum pieces — they are the living inheritance of the next generation. Helping young Odians understand, appreciate, and take pride in that inheritance is one of CHS's deepest commitments.
            </p>
            <button className="btn-primary">Access Student Resources</button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GetInvolved;
