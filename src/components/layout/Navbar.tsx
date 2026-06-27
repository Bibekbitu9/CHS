import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Activities', path: '/activities' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        style={{
          background: 'rgba(15, 23, 30, 0.95)',
          backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          transition: 'all 0.4s ease'
        }}
      >
        <div className={`container ${styles.navContainer}`}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/" className={styles.logo} style={{ color: 'var(--color-ivory)' }}>
              CHS <span style={{ color: 'var(--color-bronze)' }}>Odisha</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className={styles.navLinks}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
            }}
          >
            {links.map((link) => (
              <motion.div key={link.name} variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
                <Link 
                  to={link.path} 
                  className={styles.navLink}
                  style={{ color: 'var(--color-ivory)' }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
              <Link 
                to="/internship" 
                className="btn-primary" 
                style={{ padding: '10px 24px', fontSize: '0.9rem', boxShadow: '0 4px 14px rgba(205, 127, 50, 0.3)', border: 'none', cursor: 'pointer', display: 'inline-block', textDecoration: 'none' }}
              >
                Apply for Internship
              </Link>
            </motion.div>
          </motion.nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={styles.mobileToggle} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            style={{ color: 'var(--color-ivory)', background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={`${styles.mobileNav} ${styles.open}`}
              style={{ 
                background: 'rgba(15, 23, 30, 0.95)', 
                backdropFilter: 'blur(20px)',
                borderTop: '1px solid rgba(205, 127, 50, 0.2)',
                overflow: 'hidden'
              }}
            >
              {links.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={styles.navLink}
                  style={{ color: 'var(--color-ivory)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/internship"
                onClick={() => setIsMobileMenuOpen(false)} 
                className="btn-primary" 
                style={{ margin: '16px', display: 'block', width: 'calc(100% - 32px)', border: 'none', cursor: 'pointer', textAlign: 'center', textDecoration: 'none' }}
              >
                Apply for Internship
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
  );
};

export default Navbar;
