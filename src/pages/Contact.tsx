import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import SEO from '../components/SEO';
import styles from './Internship.module.css';

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Us | Centre for Heritage Studies" 
        description="Get in touch with the Centre for Heritage Studies (CHS) for collaborations, inquiries, or more information." 
      />
      {/* Contact Section - Light */}
      <section className="section-light" style={{ padding: '120px 24px 80px', minHeight: '100vh' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>Contact Us</h1>
            <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.6, marginBottom: '64px' }}>
              Whether you are a professional archaeologist, a student seeking mentorship, or a concerned citizen who cares about Odisha's cultural legacy — there is a place for you in the CHS community.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '64px' }}>
            <GlassCard delay={0.1}>
              <h2 style={{ fontSize: '2rem', marginBottom: '32px' }}>Send us a message</h2>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className={styles.fieldGroup}>
                  <label>Name</label>
                  <input type="text" className={styles.inputGlass} placeholder="Your name" />
                </div>
                <div className={styles.fieldGroup}>
                  <label>Email</label>
                  <input type="email" className={styles.inputGlass} placeholder="Your email address" />
                </div>
                <div className={styles.fieldGroup}>
                  <label>Message</label>
                  <textarea rows={5} className={styles.inputGlass} style={{ resize: 'vertical' }} placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="btn-primary" style={{ marginTop: '16px', alignSelf: 'flex-start' }}>Send Message</button>
              </form>
            </GlassCard>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <GlassCard delay={0.2}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Secretariat</h3>
                <p className="text-muted" style={{ lineHeight: 1.6 }}>
                  Centre for Heritage Studies<br />
                  Regd. No. 22663/253 of 2007–2008<br />
                  Bhubaneswar, Odisha<br />
                  India
                </p>
              </GlassCard>
              
              <GlassCard delay={0.3}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-sandstone)' }}>Heritage Alert</h3>
                <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '24px' }}>
                  Have you noticed a heritage site at risk from encroachment, damage, or neglect? Report it to our Heritage Alert register.
                </p>
                <button className="btn-primary">Report a Threat</button>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
