import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <h3>Centre for Heritage Studies</h3>
          <p>Documenting Heritage • Connecting Knowledge • Inspiring Conservation</p>
          <p style={{ marginTop: '16px', fontSize: '0.85rem' }}>
            Regd. No. 22663/253 of 2007–2008<br />
            Bhubaneswar, Odisha
          </p>
        </div>
        
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul className={styles.links}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/activities">Events & Activities</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      
      <div className={`container ${styles.bottom}`}>
        <div>&copy; {new Date().getFullYear()} Centre for Heritage Studies, Odisha. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
