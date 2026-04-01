import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4,0,0.2,1] } } }
const stagger = { visible: { transition: { staggerChildren: 0.12 } } }

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'}
      variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay, ease: [0.4,0,0.2,1] } } }}
      className={className}>
      {children}
    </motion.div>
  )
}

const menuData = {
  starters: [
    { name: 'Tomato Toast', desc: 'Sourdough, heirloom tomatoes, basil oil', price: '₹5234', badge: null },
    { name: 'Noodle Soup', desc: 'Slow-braised broth, seasonal vegetables', price: '₹6234', badge: null },
    { name: 'Pumpkin Soup', desc: 'Roasted pumpkin, crème fraîche, sage', price: '₹7234', badge: null },
    { name: "Chef's Selection", desc: 'Ask your server for today\'s starter', price: 'MKT', badge: 'Starter of the Day' },
  ],
  breakfast: [
    { name: 'Delicious Pancakes', desc: 'Buttermilk stack, maple syrup, seasonal berries', price: '₹8234', badge: null },
    { name: 'Sweet Heaven', desc: 'French toast, caramelised banana, cream', price: '₹9234', badge: null },
    { name: 'Oatmeal Spirit', desc: 'Steel-cut oats, honey, toasted almonds', price: '₹10234', badge: null },
    { name: 'Avocado Smash', desc: 'Sourdough, whipped feta, poached egg', price: '₹11234', badge: 'Lunch of the Day' },
  ],
  dinner: [
    { name: 'Italian Pizza', desc: 'Wood-fired, fresh mozzarella, San Marzano', price: '₹12234', badge: null },
    { name: 'Sea Curry', desc: 'Tiger prawns, coconut milk, jasmine rice', price: '₹13234', badge: null },
    { name: 'Vegan Burger', desc: 'Beyond patty, smoked aioli, brioche bun', price: '₹14234', badge: null },
    { name: 'Noodle Bowl', desc: 'Slow-braised pork, soft-boiled egg, nori', price: '₹15234', badge: 'Dinner Special' },
  ],
  drinks: [
    { name: 'Panthouse Tonic', desc: 'Gin, elderflower, cucumber, tonic', price: '₹25234', badge: null },
    { name: 'Apple Breeze', desc: 'Fresh apple, ginger, sparkling water', price: '₹15234', badge: null },
    { name: 'Frenchman Blitz', desc: 'Champagne, raspberry, fresh mint', price: '₹35234', badge: null },
    { name: 'Cedar Cold Brew', desc: 'House cold brew, vanilla, oat milk', price: '₹45234', badge: null },
  ],
}

const blogPosts = [
  { slug: 'new-restaurant', title: 'New Restaurant', date: 'March 13, 2026', excerpt: 'A new chapter begins — welcome to Cedar & Sage.', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=80' },
  { slug: 'gatsby-night', title: 'Gatsby Night', date: 'March 13, 2026', excerpt: 'An evening of elegance, jazz, and exceptional food.', img: 'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=700&q=80' },
  { slug: 'romantic-dinner', title: 'Romantic Dinner', date: 'March 13, 2026', excerpt: 'Set the perfect mood with our candlelit experience.', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80' },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('starters')
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = e => setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 640, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <motion.img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=85"
            alt="Fine dining"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            animate={{ scale: 1 + mousePos.x * 0.015, x: mousePos.x * -18, y: mousePos.y * -10 }}
            transition={{ type: 'spring', stiffness: 40, damping: 25 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(14,12,9,0.93) 0%, rgba(14,12,9,0.65) 45%, rgba(14,12,9,0.2) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,12,9,0.8) 0%, transparent 50%)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 700, padding: 'calc(var(--nav-h) + 2rem) 2.5rem 5rem' }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
            style={{ fontSize: '0.65rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ display: 'block', width: '30px', height: '1px', background: 'var(--gold)' }} />
            Seasonal Flavors. Crafted With Passion.
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.9 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.2rem, 8vw, 6rem)', fontWeight: 300, lineHeight: 1.02, color: 'var(--cream)', marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>
            The pure taste<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>of Cedar & Sage</em>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.8 }}
            style={{ fontSize: '0.95rem', color: 'var(--text)', maxWidth: 420, marginBottom: '2.8rem', lineHeight: 1.8 }}>
            Fresh ingredients, modern techniques, and warm hospitality — all under one roof.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/menu" className="btn btn-primary">Explore Menu</Link>
            <Link to="/book" className="btn btn-outline">Reserve a Table</Link>
          </motion.div>
        </div>

        {/* Hours badge */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, duration: 0.7 }}
          style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', zIndex: 2, display: 'flex', gap: '0', background: 'rgba(14,12,9,0.7)', backdropFilter: 'blur(12px)', border: '1px solid var(--border)' }}>
          {[['Mon', 'Closed'], ['Tue–Fri', '4pm–8pm'], ['Sat–Sun', '5pm–11pm']].map(([day, hours], i) => (
            <div key={i} style={{ padding: '1rem 1.5rem', borderRight: i < 2 ? '1px solid var(--border)' : 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>{day}</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--cream)' }}>{hours}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Scroll</span>
          <motion.div style={{ width: '1px', height: '50px', background: 'linear-gradient(to bottom, var(--gold), transparent)' }}
            animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: '9rem 0', background: 'var(--dark-mid)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7rem', alignItems: 'center' }}>
            <FadeIn>
              <span className="label">About Us</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Discover<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Cedar & Sage</em>
              </h2>
              <div className="divider" />
              <p style={{ marginBottom: '1.2rem', fontSize: '0.93rem', lineHeight: 1.85 }}>
                At Cedar & Sage, every dish is prepared using fresh seasonal ingredients and modern culinary techniques to create a dining experience you won't forget.
              </p>
              <p style={{ marginBottom: '2.5rem', fontSize: '0.93rem', lineHeight: 1.85 }}>
                From wood-fired steaks to handmade pasta and vibrant seasonal salads — every plate is crafted with passion, precision, and a deep respect for the ingredients.
              </p>
              <Link to="/restaurant" className="btn btn-outline">Our Story</Link>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div style={{ position: 'relative', height: 520 }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '76%', height: '82%', overflow: 'hidden' }}>
                  <motion.img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=85" alt="Food"
                    whileHover={{ scale: 1.04 }} transition={{ duration: 0.6 }} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: '52%', height: '56%', overflow: 'hidden', border: '5px solid var(--dark-mid)' }}>
                  <motion.img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&q=85" alt="Dish"
                    whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ position: 'absolute', bottom: '30%', left: '-1.5rem', background: 'var(--dark)', border: '1px solid var(--border)', padding: '1.2rem 1.8rem', backdropFilter: 'blur(8px)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>12+</div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '0.3rem' }}>Years of craft</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
        <style>{`@media(max-width:900px){ .about-grid-override { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
      </section>

      {/* MENU TABS */}
      <section style={{ padding: '9rem 0', background: 'var(--dark)' }}>
        <div className="container">
          <FadeIn>
            <span className="label center">What We Serve</span>
            <h2 className="section-title center" style={{ marginBottom: '3rem' }}>Check Out<br /><em>Our Menus</em></h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3.5rem', borderBottom: '1px solid var(--border)' }}>
              {Object.keys(menuData).map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{
                  background: 'none', border: 'none', color: activeTab === tab ? 'var(--gold)' : 'var(--text-muted)',
                  fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '1rem 2rem',
                  cursor: 'pointer', borderBottom: activeTab === tab ? '1px solid var(--gold)' : '1px solid transparent',
                  marginBottom: '-1px', transition: 'all 0.3s', fontFamily: 'var(--font-body)',
                }}>
                  {tab}
                </button>
              ))}
            </div>
          </FadeIn>
          <motion.div key={activeTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            style={{ maxWidth: 760, margin: '0 auto' }}>
            {menuData[activeTab].map((item, i) => (
              <div key={i} className={`menu-item${item.badge ? ' featured' : ''}`}>
                <div className="mi-left">
                  {item.badge && <span className="mi-badge">{item.badge}</span>}
                  <span className="mi-name">{item.name}</span>
                  <span className="mi-desc">{item.desc}</span>
                </div>
                <span className="mi-price">{item.price}</span>
              </div>
            ))}
          </motion.div>
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/menu" className="btn btn-primary">Full Menu</Link>
          </div>
        </div>
      </section>

      {/* CLASSES TEASER */}
      <section style={{ position: 'relative', minHeight: 560, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=85" alt="Cooking class" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(14,12,9,0.95) 0%, rgba(14,12,9,0.55) 60%, rgba(14,12,9,0.2) 100%)' }} />
        </div>
        <FadeIn className="container" style={{ position: 'relative', zIndex: 2, padding: '7rem 2rem', maxWidth: 560 }}>
          <span className="label">Experiences</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.6rem, 6vw, 4.2rem)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.06, marginBottom: '1.2rem' }}>
            Join a<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Cooking Class</em>
          </h2>
          <div className="divider" />
          <p style={{ marginBottom: '2.5rem', fontSize: '0.93rem' }}>Reserve your spot and learn from our chefs. Limited seats — book early to secure yours.</p>
          <Link to="/classes" className="btn btn-primary">See All Classes</Link>
        </FadeIn>
      </section>

      {/* BLOG */}
      <section style={{ padding: '9rem 0', background: 'var(--dark-mid)' }}>
        <div className="container">
          <FadeIn>
            <span className="label center">From the Kitchen</span>
            <h2 className="section-title center" style={{ marginBottom: '4rem' }}>Latest <em>News</em></h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {blogPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.1}>
                <Link to={`/blog/${post.slug}`} style={{ display: 'block' }}>
                  <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.35 }}
                    style={{ background: 'var(--dark-card)', border: '1px solid var(--border)', overflow: 'hidden', cursor: 'pointer' }}>
                    <div style={{ height: 230, overflow: 'hidden' }}>
                      <motion.img src={post.img} alt={post.title} whileHover={{ scale: 1.07 }} transition={{ duration: 0.6 }} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '1.8rem' }}>
                      <span style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)' }}>{post.date}</span>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 400, color: 'var(--cream)', margin: '0.6rem 0 0.5rem', lineHeight: 1.2 }}>{post.title}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{post.excerpt}</p>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/blog" className="btn btn-ghost">View All Posts</Link>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section style={{ padding: '6rem 0', background: 'var(--dark)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <FadeIn>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Ready to Dine?</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--cream)' }}>Reserve Your <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Table Tonight</em></h2>
            </div>
            <Link to="/book" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '0.72rem' }}>Book a Table</Link>
          </div>
        </FadeIn>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section > .container > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          section > div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          section > div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}