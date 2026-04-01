import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const posts = {
  'new-restaurant': {
    title: 'A New Chapter Begins: Welcome to Cedar & Sage',
    date: 'March 13, 2026',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=85',
    content: [
      "There is something special about discovering a new restaurant — the excitement of fresh flavors, a beautiful space, and the promise of memorable meals. Today, we're thrilled to introduce Cedar & Sage, a modern dining destination created for people who love good food, warm hospitality, and a relaxed atmosphere.",
      "At Cedar & Sage, our philosophy is simple: great ingredients create great food. Our kitchen focuses on seasonal produce, carefully sourced meats, and fresh herbs that bring natural flavor to every dish. Each plate is designed to be both comforting and refined, blending traditional cooking techniques with contemporary presentation.",
      "From the moment you step inside, you'll notice the calm and welcoming environment. Soft lighting, natural materials, and a thoughtfully designed space create the perfect setting for everything from casual lunches to celebratory dinners.",
      "Our menu highlights a range of carefully crafted dishes, including wood-fired steaks, handmade pasta, fresh seafood, and vibrant seasonal salads. Whether you're visiting for a quick meal or a long evening with friends, every dish is prepared with attention to detail and a passion for quality.",
      "But Cedar & Sage is more than just a place to eat — it's a place to gather. We believe that dining should be an experience that brings people together, creating moments that linger long after the last bite.",
      "As we open our doors, we invite you to join us and be part of this new journey. Come explore the flavors, enjoy the atmosphere, and discover your new favorite restaurant. We look forward to welcoming you soon.",
    ]
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts[slug]

  if (!post) return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--cream)' }}>Post not found</h2>
      <Link to="/blog" className="btn btn-outline">← Back to Blog</Link>
    </div>
  )

  return (
    <section style={{ padding: 'calc(var(--nav-h) + 5rem) 0 7rem', background: 'var(--dark-mid)' }}>
      <div className="container">
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: 'var(--gold)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '3rem', opacity: 0.8 }}>
            ← Back to Blog
          </Link>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.2rem', display: 'block' }}>{post.date}</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.08, marginBottom: '3rem' }}>
              {post.title.includes('Cedar & Sage')
                ? <>{post.title.split('Cedar & Sage')[0]}<em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Cedar & Sage</em>{post.title.split('Cedar & Sage')[1]}</>
                : post.title}
            </h1>
            <div style={{ height: 460, overflow: 'hidden', marginBottom: '4rem' }}>
              <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {post.content.map((para, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.04 }}
                style={{ fontSize: '0.97rem', lineHeight: 1.9, marginBottom: '1.6rem', color: 'var(--text)' }}>
                {para}
              </motion.p>
            ))}
            <div style={{ marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border)' }}>
              <Link to="/book" className="btn btn-primary">Reserve Your Table</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}