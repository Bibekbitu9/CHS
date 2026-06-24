import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className={styles.footer}>
      <motion.div 
        className={`container ${styles.grid}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={itemVariants} className={styles.brand}>
          <h3>Centre for Heritage Studies</h3>
          <p>Documenting Heritage • Connecting Knowledge • Inspiring Conservation</p>
          <p style={{ marginTop: '24px', fontSize: '0.85rem', opacity: 0.6 }}>
            Regd. No. 22663/253 of 2007–2008<br />
            Bhubaneswar, Odisha
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants} className={styles.column}>
          <h4>Quick Links</h4>
          <ul className={styles.links}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/activities">Events & Activities</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className={styles.bottom}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="container">
          &copy; {new Date().getFullYear()} Centre for Heritage Studies, Odisha. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
