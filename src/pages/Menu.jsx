import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const sections = [
  { title: 'Starters', items: [
    { name: 'Tomato Toast', desc: 'Sourdough, heirloom tomatoes, basil oil', price: '$5.00' },
    { name: 'Noodle Soup', desc: 'Slow-braised broth, seasonal vegetables', price: '$5.00' },
    { name: 'Pumpkin Soup', desc: 'Roasted pumpkin, crème fraîche, sage', price: '$5.00' },
    { name: "Chef's Selection", desc: 'Ask your server', price: 'MKT', badge: 'Starter of the Day' },
  ]},
  { title: 'Breakfast', items: [
    { name: 'Delicious Pancakes', desc: 'Buttermilk stack, maple syrup, berries', price: '$8.00' },
    { name: 'Sweet Heaven', desc: 'French toast, caramelised banana, cream', price: '$5.00' },
    { name: 'Oatmeal Spirit', desc: 'Steel-cut oats, honey, toasted almonds', price: '$5.00' },
    { name: 'Avocado Smash', desc: 'Sourdough, whipped feta, poached egg', price: '$5.00', badge: 'Lunch of the Day' },
  ]},
  { title: 'Dinner', items: [
    { name: 'Italian Pizza', desc: 'Wood-fired, fresh mozzarella, San Marzano', price: '$8.00' },
    { name: 'Sea Curry', desc: 'Tiger prawns, coconut milk, jasmine rice', price: '$5.00' },
    { name: 'Vegan Burger', desc: 'Beyond patty, smoked aioli, brioche bun', price: '$5.00' },
    { name: 'Noodle Bowl', desc: 'Slow-braised pork, soft-boiled egg, nori', price: '$5.00', badge: 'Dinner Special' },
  ]},
  { title: 'Drinks', items: [
    { name: 'Panthouse Tonic', desc: 'Gin, elderflower, cucumber, tonic', price: '$8.00' },
    { name: 'Apple Breeze', desc: 'Fresh apple, ginger, sparkling water', price: '$5.00' },
    { name: 'Frenchman Blitz', desc: 'Champagne, raspberry, fresh mint', price: '$5.00' },
    { name: 'Cedar Cold Brew', desc: 'House cold brew, vanilla, oat milk', price: '$5.00' },
  ]},
]

export default function Menu() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg"><img src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1600&q=80" alt="Menu" /></div>
        <div className="page-hero-overlay" />
        <div className="page-hero-content container">
          <span className="label">What We Serve</span>
          <h1>Our <em>Menu</em></h1>
        </div>
      </section>

      <section style={{ padding: '7rem 0', background: 'var(--dark)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
            {sections.map((section, si) => (
              <motion.div key={si} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: si * 0.08 }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 300, color: 'var(--cream)', paddingBottom: '1rem', borderBottom: '1px solid var(--border)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span style={{ width: '28px', height: '1px', background: 'var(--gold)', display: 'block' }} />
                  {section.title}
                </h2>
                {section.items.map((item, i) => (
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
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <Link to="/book" className="btn btn-primary">Reserve a Table</Link>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:900px){ .container > div { grid-template-columns: 1fr !important; } }`}</style>
    </>
  )
}