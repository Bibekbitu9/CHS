import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      {/* Background Image Setup */}
      <div className={styles.heroBackground}>
        <div className={styles.overlay}></div>
      </div>

      <div className={`container ${styles.heroContent}`}>
        <motion.div 
          className={styles.textContent}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.1 }
            }
          }}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
            }}
            className={styles.subtitle}
          >
            Odisha · Established 2008
          </motion.span>
          
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
            }}
            className={styles.title}
          >
            Preserving the Past, <br/>
            <span className={styles.highlight}>Inspiring the Future.</span>
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
            }}
            className={styles.description}
          >
            Odisha carries within its soil, stone, and living traditions one of the most extraordinary cultural legacies in the world. The Centre for Heritage Studies exists to ensure that this legacy is not lost — that it is documented, understood, conserved, and shared with the world.
          </motion.p>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
            }}
            className={styles.actions}
          >
            <Link to="/projects" className="btn-primary">Explore Heritage Sites</Link>
            <Link to="/activities" className="btn-secondary" style={{ color: 'white', borderColor: 'white' }}>Read Our Research</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
