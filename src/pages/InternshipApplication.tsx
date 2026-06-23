import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Loader2 } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import SEO from '../components/SEO';
import styles from './Internship.module.css';

const InternshipApplication = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState<{email?: string, phone?: string}>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    if (!phone) return true; // Optional, or if required change logic. Assuming optional if left blank.
    return /^\+?[\d\s-]{10,}$/.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setValidationErrors({});
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    let hasErrors = false;
    const errors: {email?: string, phone?: string} = {};
    
    if (!validateEmail(data.email as string)) {
      errors.email = 'Please enter a valid email address.';
      hasErrors = true;
    }
    
    if (data.phone && !validatePhone(data.phone as string)) {
      errors.phone = 'Please enter a valid phone number (min 10 digits).';
      hasErrors = true;
    }

    if (hasErrors) {
      setValidationErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3001/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      setIsSuccess(true);
    } catch (err) {
      setError('An error occurred while submitting. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  if (isSuccess) {
    return (
      <>
        <SEO title="Application Submitted | CHS" description="Your internship application has been submitted successfully." />
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0 24px' }}
        >
          <GlassCard className={styles.formCard} padding="64px">
            <div style={{ textAlign: 'center' }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}
              >
                <CheckCircle size={80} color="var(--color-bronze)" />
              </motion.div>
              <h2 className={styles.title}>Thanks for your response!</h2>
              <p className={styles.desc} style={{ marginBottom: '40px' }}>
                We have received your internship application and will reach back to you shortly.
              </p>
              <Link to="/" className="btn-primary">Return to Home</Link>
            </div>
          </GlassCard>
        </motion.div>
      </div>
      </>
    );
  }

  return (
    <>
      <SEO title="Apply for Internship | Centre for Heritage Studies" description="Apply for a structured internship in archaeology, history, and heritage documentation." />
      <div className={styles.container}>
        <motion.div
          animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0 24px' }}
      >
        <GlassCard className={styles.formCard}>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={itemVariants} className={styles.header}>
              <span className={styles.subtitle}>Join our fellowship</span>
              <h2 className={styles.title}>Internship Application</h2>
              <p className={styles.desc}>
                Contribute to the preservation of global heritage through academic excellence and practical field research.
              </p>
            </motion.div>

            {error && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ background: 'rgba(255,0,0,0.1)', color: 'red', padding: '12px', borderRadius: '8px', marginBottom: '24px', textAlign: 'center' }}>
                {error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <motion.div variants={itemVariants} className={styles.fieldGroup}>
                  <label htmlFor="full_name">Full Name</label>
                  <input type="text" id="full_name" name="full_name" className={styles.inputGlass} placeholder="Dr. Alexander Hamilton" required />
                </motion.div>
                <motion.div variants={itemVariants} className={styles.fieldGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="text" 
                    id="email" 
                    name="email" 
                    className={styles.inputGlass} 
                    style={validationErrors.email ? { borderBottomColor: 'red' } : {}}
                    placeholder="research@heritage.org" 
                    required 
                  />
                  {validationErrors.email && <span style={{ color: 'red', fontSize: '0.8rem', marginTop: '4px' }}>{validationErrors.email}</span>}
                </motion.div>
              </div>

              <div className={styles.formGrid}>
                <motion.div variants={itemVariants} className={styles.fieldGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="text" 
                    id="phone" 
                    name="phone" 
                    className={styles.inputGlass} 
                    style={validationErrors.phone ? { borderBottomColor: 'red' } : {}}
                    placeholder="+91 90000 00000" 
                  />
                  {validationErrors.phone && <span style={{ color: 'red', fontSize: '0.8rem', marginTop: '4px' }}>{validationErrors.phone}</span>}
                </motion.div>
                <motion.div variants={itemVariants} className={styles.fieldGroup}>
                  <label htmlFor="institution">University / Institution</label>
                  <input type="text" id="institution" name="institution" className={styles.inputGlass} placeholder="University of Antiquities" required />
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className={styles.fieldGroup} style={{ marginBottom: '24px' }}>
                <label htmlFor="field">Field of Study</label>
                <select id="field" name="field" className={styles.inputGlass} required style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                  <option value="">Select your discipline</option>
                  <option value="archaeology">Archaeology & Field Research</option>
                  <option value="conservation">Art Conservation</option>
                  <option value="curatorial">Curatorial Studies</option>
                  <option value="digital_heritage">Digital Heritage & Archiving</option>
                  <option value="history">Historical Anthropology</option>
                </select>
              </motion.div>

              <motion.div variants={itemVariants} className={styles.fieldGroup}>
                <label htmlFor="cover_letter">Cover Letter</label>
                <textarea id="cover_letter" name="cover_letter" className={styles.inputGlass} placeholder="Briefly describe your interest in heritage studies..." required rows={4} style={{ resize: 'vertical' }}></textarea>
              </motion.div>

              <motion.div variants={itemVariants} className={styles.submitContainer}>
                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                  {isSubmitting ? <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Loader2 className="animate-spin" size={20} /> Processing...</span> : 'Submit Application'}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </GlassCard>
      </motion.div>
    </div>
    </>
  );
};

export default InternshipApplication;
