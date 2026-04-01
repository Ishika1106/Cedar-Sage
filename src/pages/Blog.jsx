import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const posts = [
  { slug: 'new-restaurant', title: 'New Restaurant', date: 'March 13, 2026', excerpt: 'A new chapter begins — welcome to Cedar & Sage, a modern dining destination.', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=80' },
  { slug: 'gatsby-night', title: 'Gatsby Night', date: 'March 13, 2026', excerpt: 'An evening of elegance, live jazz, and exceptional food at Cedar & Sage.', img: 'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=700&q=80' },
  { slug: 'romantic-dinner', title: 'Romantic Dinner', date: 'March 13, 2026', excerpt: 'Set the perfect mood with our candlelit dinner experience for two.', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80' },
  { slug: 'brand-new-kitchen', title: 'Brand New Kitchen', date: 'March 13, 2026', excerpt: 'A peek inside our newly renovated kitchen — state of the art and built for creativity.', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80' },
  { slug: 'delicious-breakfast', title: 'Delicious Breakfast', date: 'June 16, 2026', excerpt: 'We\'ve expanded our breakfast menu with seasonal specials and fresh brews.', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&q=80' },
  { slug: 'vegan-burger', title: 'Vegan Burger', date: 'January 10, 2026', excerpt: 'Our plant-based burger has arrived — winning over even devoted carnivores.', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=700&q=80' },
]

export default function Blog() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg"><img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600&q=80" alt="Blog" /></div>
        <div className="page-hero-overlay" />
        <div className="page-hero-content container">
          <span className="label">From the Kitchen</span>
          <h1>Latest <em>News</em></h1>
        </div>
      </section>

      <section style={{ padding: '7rem 0', background: 'var(--dark)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
            {posts.map((post, i) => (
              <motion.div key={post.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}>
                <Link to={`/blog/${post.slug}`} style={{ display: 'block' }}>
                  <motion.div whileHover={{ y: -7 }} transition={{ duration: 0.35 }}
                    style={{ background: 'var(--dark-card)', border: '1px solid var(--border)', overflow: 'hidden', height: '100%', cursor: 'pointer' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                    <div style={{ height: 220, overflow: 'hidden' }}>
                      <motion.img src={post.img} alt={post.title} whileHover={{ scale: 1.07 }} transition={{ duration: 0.6 }} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '1.8rem' }}>
                      <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>{post.date}</span>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 400, color: 'var(--cream)', margin: '0.5rem 0 0.5rem', lineHeight: 1.2 }}>{post.title}</h3>
                      <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{post.excerpt}</p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){ .container > div { grid-template-columns: repeat(2,1fr) !important; } } @media(max-width:580px){ .container > div { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  )
}