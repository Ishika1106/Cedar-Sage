import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const features = [
  { icon: '🌿', title: 'Seasonal Ingredients', desc: 'We source the finest seasonal produce from local farms — every dish bursts with natural flavor.' },
  { icon: '🍷', title: 'Curated Wine List', desc: 'Our sommelier-selected wine list pairs perfectly with every course on the menu.' },
  { icon: '👨‍🍳', title: 'Expert Chefs', desc: 'Our team brings decades of experience from Michelin-starred kitchens across the globe.' },
  { icon: '🕯️', title: 'Intimate Atmosphere', desc: 'Warm lighting, natural textures, and thoughtful design create a truly special dining experience.' },
  { icon: '🌍', title: 'Sustainable Sourcing', desc: 'Committed to sustainability — ethical suppliers and zero-waste kitchen practices at every step.' },
  { icon: '🎉', title: 'Private Events', desc: 'Host your special occasion in our private dining room, tailored entirely to your vision.' },
]

export default function Restaurant() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg"><img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80" alt="Restaurant" /></div>
        <div className="page-hero-overlay" />
        <div className="page-hero-content container">
          <span className="label">Our Story</span>
          <h1>The <em>Restaurant</em></h1>
        </div>
      </section>

      <section style={{ padding: '8rem 0', background: 'var(--dark-mid)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="label">About Cedar & Sage</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.1, marginBottom: '0.5rem' }}>
                Seasonal Flavors.<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Crafted With Passion.</em>
              </h2>
              <div className="divider" />
              {['At Cedar & Sage, every dish is prepared using fresh seasonal ingredients and modern culinary techniques to create a memorable dining experience.',
                'From the moment you step inside, you\'ll notice the calm and welcoming environment. Soft lighting, natural materials, and thoughtful design set the stage.',
                'Our menu highlights wood-fired steaks, handmade pasta, fresh seafood, and vibrant seasonal salads — every plate prepared with attention to detail and a passion for quality.']
                .map((p, i) => <p key={i} style={{ fontSize: '0.92rem', lineHeight: 1.85, marginBottom: '1.1rem' }}>{p}</p>)}
              <br />
              <Link to="/book" className="btn btn-primary">Book a Table</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}
              style={{ height: 540, overflow: 'hidden' }}>
              <motion.img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85" alt="Fine dining"
                whileHover={{ scale: 1.04 }} transition={{ duration: 0.7 }} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '8rem 0', background: 'var(--dark)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="label center">What We Offer</span>
            <h2 className="section-title center" style={{ marginBottom: '4rem' }}>The <em>Experience</em></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: 'var(--border)' }}>
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.07 }}
                whileHover={{ background: 'var(--dark-surface)' }}
                style={{ background: 'var(--dark)', padding: '3rem 2.5rem', cursor: 'default', transition: 'background 0.3s' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '1.2rem' }}>{f.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 400, color: 'var(--cream)', marginBottom: '0.8rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ position: 'relative', minHeight: 420, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1600&q=80" alt="Interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(14,12,9,0.95) 0%, rgba(14,12,9,0.5) 70%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '6rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <span className="label">Opening Hours</span>
            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
              {[['Monday', 'Closed'], ['Tue – Fri', '4pm – 8pm'], ['Sat – Sun', '5pm – 11pm']].map(([day, hours]) => (
                <div key={day}>
                  <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.3rem' }}>{day}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--cream)' }}>{hours}</div>
                </div>
              ))}
            </div>
          </div>
          <Link to="/book" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Reserve a Table</Link>
        </div>
      </section>
    </>
  )
}