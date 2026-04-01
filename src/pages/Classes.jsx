import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const classes = [
  { title: 'Asian Noodle Night', date: 'June 16, 2026 · 8:00 PM', teacher: 'Chef Marco Lin', price: '₹8900', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=700&q=80', desc: 'Discover the art of handmade noodles. Learn Noodle Soup and Sea Curry from scratch — from dough to bowl.' },
  { title: 'Italian Pizza & Pasta', date: 'July 4, 2026 · 7:00 PM', teacher: 'Chef Sofia Bianchi', price: '₹9500', img: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=700&q=80', desc: 'Master wood-fired pizza dough and handmade pasta. Enjoy a meal with wine pairing at the end.' },
  { title: 'Vegan Masterclass', date: 'July 18, 2026 · 6:30 PM', teacher: 'Chef Amara Osei', price: '₹7900', img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=700&q=80', desc: 'From vibrant salads to our famous Vegan Burger — plant-based cooking that\'s anything but boring.' },
  { title: 'Breakfast Workshop', date: 'Aug 3, 2026 · 9:00 AM', teacher: 'Chef Lena Hartmann', price: '₹6500', img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=700&q=80', desc: 'Perfect your pancakes, avocado smash, and cold brew with our breakfast specialists.' },
]

export default function Classes() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg"><img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80" alt="Classes" /></div>
        <div className="page-hero-overlay" />
        <div className="page-hero-content container">
          <span className="label">Experiences</span>
          <h1>Cooking <em>Classes</em></h1>
        </div>
      </section>

      <section style={{ padding: '6rem 0', background: 'var(--dark-mid)' }}>
        <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="label center">Reserve Your Spot</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '1rem', lineHeight: 1.1 }}>
              Learn From<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Our Chefs</em>
            </h2>
            <div className="divider center" />
            <p style={{ fontSize: '0.93rem' }}>Our classes are led by head chefs and designed for all skill levels. Limited seats ensure a hands-on, personal experience for every participant.</p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', background: 'var(--dark)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem' }}>
            {classes.map((cls, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: i % 2 * 0.1 }}
                whileHover={{ y: -6 }} style={{ background: 'var(--dark-card)', border: '1px solid var(--border)', overflow: 'hidden', cursor: 'default', transition: 'border-color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                <div style={{ height: 260, overflow: 'hidden' }}>
                  <motion.img src={cls.img} alt={cls.title} whileHover={{ scale: 1.06 }} transition={{ duration: 0.6 }} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2.2rem' }}>
                  <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
                    {[['Date', cls.date], ['Chef', cls.teacher], ['Language', 'English'], ['Location', 'Cedar & Sage']].map(([label, val]) => (
                      <div key={label}>
                        <div style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.2rem' }}>{label}</div>
                        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{val}</div>
                      </div>
                    ))}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 400, color: 'var(--cream)', marginBottom: '0.7rem', lineHeight: 1.2 }}>{cls.title}</h3>
                  <p style={{ fontSize: '0.87rem', marginBottom: '1.8rem', lineHeight: 1.75 }}>{cls.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.4rem', borderTop: '1px solid var(--border)' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--gold)' }}>{cls.price}</span>
                    <Link to="/book" className="btn btn-primary" style={{ padding: '0.75rem 1.8rem' }}>Book a Spot</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){ .container > div { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  )
}