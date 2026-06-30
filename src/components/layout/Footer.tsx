import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.decorativeLine}></div>
      <div className="container">
        
        <motion.div 
          className={styles.topSection}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h4 className={styles.bigTitle}>Odisha's Heritage,<br />Preserved for Tomorrow.</h4>
          <Link to="/membership" className={styles.ctaButton}>Become a Member</Link>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants} className={styles.brandCol}>
            <Link to="/" className={styles.logo}>CHS <span className={styles.logoAccent}>Odisha</span></Link>
            <p className={styles.brandDesc}>
              The Centre for Heritage Studies is dedicated to documenting, conserving, and promoting the rich cultural and historical legacy of Odisha.
            </p>
            <div className={styles.contactInfo}>
              <p><Mail size={16} color="var(--color-sandstone)" /> info@heritage.org</p>
              <p><MapPin size={16} color="var(--color-sandstone)" /> Bhubaneswar, Odisha</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.linkCol}>
            <h4>Discover</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/knowledge-portal">Knowledge Portal</Link></li>
              <li><Link to="/projects">Projects & Fieldwork</Link></li>
              <li><Link to="/research">Research & Publications</Link></li>
              <li><Link to="/gallery">Gallery & Media</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.linkCol}>
            <h4>Engage</h4>
            <ul>
              <li><Link to="/activities">Events & Activities</Link></li>
              <li><Link to="/get-involved">Get Involved</Link></li>
              <li><Link to="/membership">Apply for Membership</Link></li>
              <li><Link to="/internship">Apply for Internship</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.bottomSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p>&copy; {new Date().getFullYear()} Centre for Heritage Studies. Regd. No. 22663/253 of 2007–2008.</p>
          <div className={styles.legalLinks}>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
