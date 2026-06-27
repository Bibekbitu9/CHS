import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import styles from './InternshipModal.module.css';

interface InternshipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InternshipModal = ({ isOpen, onClose }: InternshipModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.overlay}
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={styles.modalWrapper}
          >
            <div className={styles.modalContent}>
              <div className={styles.header}>
                <div className={styles.tag}>Academic Opportunity</div>
                <button onClick={onClose} className={styles.closeBtn}>
                  <X size={24} />
                </button>
              </div>
              
              <h2 className={styles.title}>Internship Application</h2>
              <p className={styles.description}>
                Join the Centre for Heritage Studies. We seek dedicated scholars and enthusiasts to assist in the preservation and curation of our global historical archives.
              </p>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.grid}>
                  <div className={styles.field}>
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" id="full_name" required placeholder="E.g. Julian Sterling" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" required placeholder="julian@heritage.edu" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" required placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="interest">Area of Interest</label>
                    <div className={styles.selectWrapper}>
                      <select id="interest" required defaultValue="">
                        <option value="" disabled>Select a discipline</option>
                        <option value="archival">Archival Research</option>
                        <option value="field">Field Preservation</option>
                        <option value="digital">Digital Curation</option>
                        <option value="public">Public Engagement</option>
                      </select>
                    </div>
                  </div>
                  <div className={`${styles.field} ${styles.fullWidth}`}>
                    <label htmlFor="statement">Brief Statement of Intent</label>
                    <textarea id="statement" rows={4} required placeholder="Describe your background and why you wish to join our fellowship..."></textarea>
                  </div>
                </div>

                <div className={styles.submitSection}>
                  <button 
                    type="submit" 
                    className={`${styles.submitBtn} ${isSuccess ? styles.successBtn : ''}`}
                    disabled={isSubmitting || isSuccess}
                  >
                    {isSubmitting ? (
                      'Processing...'
                    ) : isSuccess ? (
                      'Application Sent'
                    ) : (
                      <>
                        Submit Application
                        <Send size={18} />
                      </>
                    )}
                  </button>
                  <p className={styles.disclaimer}>
                    By submitting, you agree to the Fellowship's academic code of conduct and privacy protocols.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default InternshipModal;
