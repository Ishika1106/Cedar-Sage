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
  },
  'gatsby-night': {
  title: 'Gatsby Night: An Evening of Jazz & Elegance',
  date: 'March 13, 2026',
  img: 'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=1400&q=85',
  content: [
    "Step into the glamour of the roaring twenties with our special Gatsby Night at Cedar & Sage. This themed evening blends vintage charm, live jazz music, and a refined dining experience that transports you to another era.",
    "The atmosphere is designed to capture the spirit of classic elegance. Soft golden lighting, art deco accents, and carefully curated music create an unforgettable ambiance from the moment you arrive.",
    "Our chefs crafted a limited-time menu inspired by classic favorites, reimagined with modern techniques. Guests enjoyed premium steaks, handcrafted cocktails, and decadent desserts designed to complement the evening.",
    "Live jazz performances added energy to the night, making it perfect for celebrations, date nights, and gatherings with friends.",
    "Events like Gatsby Night reflect our commitment to creating more than just meals — we create experiences that bring people together.",
    "Stay tuned for upcoming themed evenings as we continue to celebrate food, music, and memorable moments."
  ]
},

'romantic-dinner': {
  title: 'Romantic Dinner: A Candlelit Experience',
  date: 'March 13, 2026',
  img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=85',
  content: [
    "There’s nothing quite like a beautifully prepared meal shared in a romantic setting. At Cedar & Sage, we’ve curated a special dining experience designed for couples seeking a memorable evening.",
    "Soft candlelight, gentle background music, and intimate seating arrangements create a warm and inviting environment perfect for meaningful conversations.",
    "Our romantic dinner menu features thoughtfully paired dishes, including fresh starters, elegant mains, and indulgent desserts made to share.",
    "Each dish is prepared with premium ingredients and presented with attention to detail, ensuring the evening feels truly special.",
    "Whether you're celebrating an anniversary, a proposal, or simply spending quality time together, our team is dedicated to making your evening unforgettable.",
    "Reserve your table and let us create the perfect romantic atmosphere for your next special night."
  ]
},

'brand-new-kitchen': {
  title: 'Inside Our Brand New Kitchen',
  date: 'March 13, 2026',
  img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=85',
  content: [
    "Behind every great dish is a great kitchen. At Cedar & Sage, we’ve invested in a newly designed kitchen built to support creativity, efficiency, and consistency.",
    "The upgraded space features state-of-the-art equipment, expanded preparation areas, and improved workflow for our culinary team.",
    "With modern cooking stations and premium tools, our chefs can experiment with new flavors while maintaining precision in every dish.",
    "The redesign also emphasizes hygiene and sustainability, incorporating energy-efficient appliances and better waste management systems.",
    "This new kitchen allows us to continue evolving our menu and delivering high-quality dining experiences.",
    "We’re excited to showcase what our chefs create in this inspiring new space."
  ]
},

'delicious-breakfast': {
  title: 'Delicious Breakfast Now Available',
  date: 'June 16, 2026',
  img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=85',
  content: [
    "Mornings just got better at Cedar & Sage. We’ve expanded our breakfast offerings with a fresh selection of seasonal dishes and handcrafted beverages.",
    "From classic favorites to modern healthy options, the menu is designed to suit every taste.",
    "Guests can enjoy freshly baked pastries, hearty breakfast plates, and aromatic coffee brewed to perfection.",
    "Our breakfast experience focuses on quality ingredients and a relaxed morning atmosphere.",
    "Whether you're starting your day with a quick bite or enjoying a leisurely brunch, we’ve created the perfect setting.",
    "Join us for breakfast and discover your new morning favorite."
  ]
},

'vegan-burger': {
  title: 'Introducing Our Vegan Burger',
  date: 'January 10, 2026',
  img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1400&q=85',
  content: [
    "Plant-based dining continues to grow, and we’re excited to introduce our new vegan burger at Cedar & Sage.",
    "Made with wholesome ingredients, this burger delivers bold flavors and satisfying texture without compromising on taste.",
    "Served with fresh toppings and house-made sauces, it’s crafted to appeal to both vegans and meat lovers alike.",
    "Our chefs focused on creating a balanced dish that feels indulgent while remaining nutritious.",
    "This addition reflects our commitment to offering inclusive menu options for all guests.",
    "Come try the vegan burger and experience a delicious plant-based alternative."
  ]
},
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