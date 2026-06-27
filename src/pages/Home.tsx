import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import GlassCard from '../components/ui/GlassCard';
import SEO from '../components/SEO';
import styles from './Home.module.css';

const newsItems = [
  {
    id: 1,
    date: 'February 2025',
    title: '1st Ashutosh Memorial Lecture',
    description: 'Inaugural lecture delivered by Prof. Dilip Kumar Chakrabarti, former Professor of South Asian Archaeology at the University of Cambridge.',
    link: '/activities'
  },
  {
    id: 2,
    date: 'January 2025',
    title: 'Excavations at Ratnagiri',
    description: 'A new phase of excavation has uncovered structural remains of what appears to be a major monastic complex extension.',
    link: '/projects'
  },
  {
    id: 3,
    date: 'December 2024',
    title: 'Digital Preservation Workshop',
    description: 'A comprehensive workshop on using photogrammetry and LIDAR to document high-risk heritage monuments in coastal Odisha.',
    link: '/activities'
  }
];

const Home = () => {
  return (
    <>
      <SEO 
        title="Centre for Heritage Studies | Preserving Odisha's Legacy" 
        description="The Centre for Heritage Studies (CHS) is dedicated to documenting, conserving, and promoting the rich cultural and historical legacy of Odisha." 
      />
      <HeroSection />

      {/* About Snapshot */}
      <section className={`${styles.section} section-light`}>
        <div className={`container ${styles.aboutGrid}`}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.aboutText}
          >
            <h2 className={styles.sectionTitle} style={{ textAlign: 'left' }}>Our Story</h2>
            <p>
              Established on 19 January 2008, the Centre for Heritage Studies brings together an extraordinary community of archaeologists, historians, anthropologists, and conservation professionals united by a single purpose: the protection and promotion of Odisha's cultural heritage.
            </p>
            <p>
              Over seventeen years, CHS has conducted archaeological explorations, documented over a thousand heritage sites, and collaborated with India's foremost heritage institutions.
            </p>
            <Link to="/about" className="btn-primary" style={{ marginTop: '16px' }}>Read Full History</Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/Images/(16)Ananta Sayi Vishnu, Saranga, Dhenkanal/14. Ananta Sayi Vishnu, Saranga (1).jpg" alt="Ananta Sayi Vishnu Site Fieldwork" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            <div className={styles.imageStrip}>
              <div className={styles.stripImg} style={{ backgroundImage: "url('/Images/(10) Ravana Chhaya, Keonjhar/05. Sitabhinji, Keonjhar (1).jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className={styles.stripImg} style={{ backgroundImage: "url('/Images/(2) Athara Nala Bridge, Puri/1.JPG')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className={styles.stripImg} style={{ backgroundImage: "url('/Images/(3) Varahi Temple, Chaurasi, Puri/3.JPG')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className={styles.stripImg} style={{ backgroundImage: "url('/Images/(1) Shri Jagannath Temple/1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Heritage Numbers */}
      <section className={`${styles.section} section-dark`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Heritage at a Glance</h2>
          <div className={styles.numbersGrid}>
            <AnimatedCounter end={1000} suffix="+" label="Sites Documented" delay={0} />
            <AnimatedCounter end={4000} suffix="+" label="Target Monuments" delay={0.2} />
            <AnimatedCounter end={30} label="Districts Covered" delay={0.4} />
            <AnimatedCounter end={82} suffix="+" label="Life Members" delay={0.6} />
          </div>
        </div>
      </section>

      {/* Featured Site */}
      <section className={`${styles.section} section-light`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured Heritage Site</h2>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.featuredSite}
          >
            <div className={styles.featuredImg}></div>
            <div className={styles.featuredContent}>
              <span style={{ color: 'var(--color-muted-teal)', fontWeight: 600, marginBottom: '8px' }}>Konark, Puri District</span>
              <h3>Sun Temple of Konark</h3>
              <p>
                From the globally celebrated to the quietly forgotten, every site carries a story that deserves to be told. Explore Odisha's heritage one story at a time.
              </p>
              <div>
                <Link to="/projects" className="btn-primary">Explore Full Profile</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest News & Events */}
      <section className={`${styles.section} section-dark`}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className={styles.sectionTitle}
            >
              Latest News & Events
            </motion.h2>
            <div className={styles.newsGrid}>
              {newsItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <GlassCard className={styles.newsCard} delay={0}>
                    <span className={styles.newsDate}>{item.date}</span>
                    <h3 className={styles.newsTitle}>{item.title}</h3>
                    <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '24px' }}>
                      {item.description}
                    </p>
                    <Link to={item.link} style={{ fontWeight: 600, color: 'var(--color-bronze)', textDecoration: 'none' }}>Read More →</Link>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Strip */}
      <section className={`${styles.section} section-light`} style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="container">
          <div className={styles.partnersStrip}>
            <div className={styles.partner}>IGNCA</div>
            <div className={styles.partner}>ASI</div>
            <div className={styles.partner}>Utkal University</div>
            <div className={styles.partner}>Deccan College Pune</div>
            <div className={styles.partner}>UCLA</div>
            <div className={styles.partner}>Dept. of Culture, Govt. of Odisha</div>
            <div className={styles.partner}>IGRMS Bhopal</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
