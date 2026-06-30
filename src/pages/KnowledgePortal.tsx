import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import SEO from '../components/SEO';

const KnowledgePortal = () => {
  return (
    <>
      <SEO 
        title="Heritage Knowledge Portal | Centre for Heritage Studies" 
        description="A living, growing, publicly accessible archive of Odisha's tangible and intangible cultural heritage." 
      />
      {/* Intro Section - Light */}
      <section className="section-light" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>Heritage Knowledge Portal</h1>
            <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.6, marginBottom: '24px' }}>
              The Heritage Knowledge Portal is the intellectual heart of the CHS website — and the resource that most clearly distinguishes this platform from any other heritage organisation's website. It is designed as a living, growing, publicly accessible archive of Odisha's tangible and intangible cultural heritage: a place where a researcher in Bhubaneswar, a student in Delhi, a policymaker in Brussels, or a member of the Odishan diaspora in the United States can find detailed, reliable, and visually rich information about heritage sites, monuments, living traditions, and cultural landscapes from across the state.
            </p>
            <div style={{ borderLeft: '4px solid var(--color-bronze)', paddingLeft: '24px', margin: '40px 0' }}>
              <p style={{ fontSize: '1.4rem', color: 'var(--color-navy)', fontStyle: 'italic', margin: 0, lineHeight: 1.4 }}>
                "A growing archive of heritage sites, monuments, archaeological remains, inscriptions, manuscripts, cultural landscapes, traditional practices, and community knowledge systems from across Odisha."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Digital Heritage Map - Dark */}
      <section className="section-dark" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '48px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'var(--color-sandstone)' }}>The Digital Heritage Map</h2>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '24px' }}>
                At the centre of the Heritage Knowledge Portal is the Digital Heritage Map of Odisha — an interactive, GIS-enabled map that gives every visitor a visual overview of the state's documented heritage, site by site, district by district.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '24px' }}>
                Every documented heritage site in the CHS database appears on the map as a marker, colour-coded by category (temple, Buddhist site, fort, coastal/water heritage, prehistoric site, ICH location, tribal heritage) and by conservation status (documented and safe, at risk, critically endangered). Visitors can filter the map by district, category, era, and status, and click on any marker to access the full site profile.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '32px' }}>
                In its current phase, the map presents the sites documented by CHS and its partners. As the comprehensive 4,000-monument documentation project across all thirty districts progresses, the map will grow to become one of the most complete digital heritage atlases of any Indian state. Future phases will integrate LiDAR survey data, photogrammetry outputs, drone footage, and — eventually — augmented reality and virtual tour features that allow users to experience heritage sites from anywhere in the world.
              </p>
              <div style={{ borderLeft: '4px solid var(--color-sandstone)', paddingLeft: '24px', marginBottom: '32px' }}>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-ivory)', fontStyle: 'italic', margin: 0, lineHeight: 1.4 }}>
                  Explore the heritage of all thirty districts of Odisha. Every marker tells a story. Click to discover it.
                </p>
              </div>
              <button className="btn-primary">Explore the Map</button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ height: '400px', background: 'var(--card-bg-dark)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span className="text-muted">Interactive Map Interface</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heritage Categories - Light */}
      <section className="section-light" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '48px', textAlign: 'center' }}>Heritage Categories</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '32px' }}>
            {/* Temples & Shrines */}
            <GlassCard delay={0.1} padding="40px">
              <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Temples & Shrines</h3>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                Odisha is renowned worldwide as one of the great centres of temple architecture. From the awe-inspiring Konark Sun Temple — a UNESCO World Heritage Site and one of the supreme achievements of medieval Indian craftsmanship — to the sacred Jagannath Temple at Puri and the exquisitely carved Lingaraja Temple at Bhubaneswar, the state's temple heritage spans nearly fifteen centuries of continuous artistic and architectural tradition.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>
                But the story of Odisha's temples extends far beyond these celebrated landmarks. Across the thirty districts of the state, thousands of temples — many of them unprotected, unrecorded, and unknown beyond their immediate communities — stand as testimony to the depth and continuity of Odishan religious and artistic culture.
              </p>
            </GlassCard>

            {/* Buddhist Heritage Sites */}
            <GlassCard delay={0.2} padding="40px">
              <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Buddhist Heritage Sites</h3>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                Long before Odisha was known for its temples, it was one of the great centres of Buddhism in ancient India. The Buddhist complex at Ratnagiri, Udayagiri, and Lalitgiri — known collectively as the 'Diamond Triangle' of Buddhist heritage — represents one of the most significant concentrations of Buddhist monastic and artistic tradition in the subcontinent. At Ratnagiri, an imposing ninth-century stupa and elaborate monastery ruins speak of a thriving centre of Buddhist learning that attracted scholars and pilgrims from across Asia.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>
                CHS documents and advocates for the protection of Odisha's Buddhist heritage — sites that are globally significant but sometimes locally overlooked in favour of the state's more prominent Hindu temple tradition.
              </p>
            </GlassCard>

            {/* Forts, Palaces & Historic Structures */}
            <GlassCard delay={0.3} padding="40px">
              <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Forts, Palaces & Historic Structures</h3>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                Odisha's political and military history is written in stone across its landscape. Forts built by Gajapati kings, palaces of feudatory chiefs, residences of colonial administrators, and historic civic structures together form a layer of built heritage that reflects the state's complex political evolution across centuries.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>
                CHS documents these structures with the same rigour it brings to temple and Buddhist site documentation — recording their history, current physical condition, threats from encroachment and neglect, and the management context in which they exist.
              </p>
            </GlassCard>

            {/* Water Heritage & Coastal Sites */}
            <GlassCard delay={0.4} padding="40px">
              <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Water Heritage & Coastal Sites</h3>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                Odisha's relationship with water is ancient, deep, and defining. The state's 480-kilometre coastline, its great inland lake at Chilika, and its network of rivers have sustained human settlements, trade networks, and cultural traditions for thousands of years. Odisha was one of ancient India's great maritime civilisations — a fact evidenced by references in Buddhist texts to Odishan sailors crossing the Bay of Bengal to Southeast Asia, and by the archaeological remains of ancient port cities buried along its coast.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>
                CHS has been at the forefront of documenting this maritime and water heritage. In 2007–2008, the Centre conducted extensive archaeological surveys of sites along the Chilika coastal zone — identifying previously unrecorded archaeological remains.
              </p>
            </GlassCard>

            {/* Prehistoric & Archaeological Sites */}
            <GlassCard delay={0.5} padding="40px">
              <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Prehistoric & Archaeological Sites</h3>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                Before the temples were built, before the Buddhist monasteries flourished, before the ports began to trade — Odisha was home to some of the earliest human settlements in the Indian subcontinent. The state's prehistoric and early historic record, much of which remains to be fully explored and understood, holds the key to understanding the deep roots of Odishan civilisation.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>
                CHS has made significant contributions to this understanding through its excavation programme. At Harirajpur near Jatni, a prehistoric excavation conducted in 2013 revealed important evidence of the region's earliest human occupation. At Talapada in Khurda district, excavations carried out in 2014–15 yielded significant data on settlement history and material culture.
              </p>
            </GlassCard>

            {/* Intangible Cultural Heritage */}
            <GlassCard delay={0.6} padding="40px">
              <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Intangible Cultural Heritage</h3>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                A temple is not only stone and mortar. It is also the community of priests and devotees who maintain its rituals. A craft tradition is not only the objects it produces but the knowledge, skill, and identity carried by the craftsperson. An oral tradition is not only words but a living system of memory, meaning, and belonging.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>
                The ICH section of the Heritage Knowledge Portal documents Odisha's extraordinary range of living heritage: the Chhau and Odissi dance traditions, the Pattachitra painting tradition of Raghurajpur, the Dongria Kondh's knowledge of forest ecology, the ritual traditions associated with the Jagannath culture, the boat-building traditions of coastal fishing communities, and much more.
              </p>
            </GlassCard>

            {/* Tribal Heritage */}
            <GlassCard delay={0.7} padding="40px">
              <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Tribal Heritage</h3>
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '16px' }}>
                Odisha is home to 62 Scheduled Tribes — the highest number of any state in India. The heritage of these communities encompasses ancient settlement traditions, distinctive architectural forms, unique relationship with the natural landscape, complex ritual systems, rich oral literatures, and material cultures of great diversity and sophistication.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>
                This heritage is both precious and precarious. Development pressures, displacement, and the disruption of traditional community structures threaten tribal heritage at a speed that documentation has struggled to match. CHS recognises the urgency of this challenge and includes tribal heritage as a dedicated focus area within the Heritage Knowledge Portal.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default KnowledgePortal;
