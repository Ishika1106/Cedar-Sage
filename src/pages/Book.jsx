import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Book() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    e.target.reset()
  }

  const inputStyle = { background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', color: 'var(--cream)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 300, padding: '0.9rem 1.1rem', outline: 'none', width: '100%', appearance: 'none', WebkitAppearance: 'none', transition: 'border-color 0.3s' }
  const labelStyle = { fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem', display: 'block' }

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg"><img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1600&q=80" alt="Dining room" /></div>
        <div className="page-hero-overlay" />
        <div className="page-hero-content container">
          <span className="label">Reservations</span>
          <h1>Book a <em>Table</em></h1>
        </div>
      </section>

      <section style={{ padding: '8rem 0', background: 'var(--dark-mid)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '7rem', alignItems: 'start' }}>
            <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="label">Our Dining Room</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.1, marginBottom: '0.5rem' }}>
                Reserve Your<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Experience</em>
              </h2>
              <div className="divider" />
              <p style={{ fontSize: '0.92rem', lineHeight: 1.85, marginBottom: '1.2rem' }}>Our dining atmosphere is casual and comfortable. We maintain a relaxed dress code while honoring the quality of the experience we provide.</p>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.85, marginBottom: '2.5rem' }}>Reservations are recommended, especially on weekends. We look forward to welcoming you.</p>
              <div style={{ background: 'rgba(201,169,110,0.06)', borderLeft: '2px solid var(--gold)', padding: '1.5rem 1.8rem', marginBottom: '2.5rem' }}>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.8rem' }}>Opening Hours</div>
                {['Monday — Closed', 'Tue – Fri — 4pm – 8pm', 'Sat – Sun — 5pm – 11pm'].map(h => <p key={h} style={{ fontSize: '0.87rem', marginBottom: '0.35rem' }}>{h}</p>)}
              </div>
              <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
                {[['123 / A-44 ABC Lane , New Delhi', 'Address'], ['+91-859-XXXXXXX', 'Phone'], ['cedar_sage@gmail.com', 'Email']].map(([val, label]) => (
                  <div key={label}>
                    <div style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.25rem' }}>{label}</div>
                    <div style={{ fontSize: '0.83rem', color: 'var(--text-muted)' }}>{val}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={labelStyle}>Your Name</label>
                  <input type="text" placeholder="Full name" required style={inputStyle} onFocus={e => e.target.style.borderColor = 'var(--gold)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.3rem' }}>
                  {[['Email', 'email', 'your@email.com'], ['Phone', 'tel', '+91-859-XXXXXXX']].map(([label, type, placeholder]) => (
                    <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={labelStyle}>{label}</label>
                      <input type={type} placeholder={placeholder} style={inputStyle} onFocus={e => e.target.style.borderColor = 'var(--gold)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                    </div>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.3rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={labelStyle}>Guests</label>
                    <select style={inputStyle} required onFocus={e => e.target.style.borderColor = 'var(--gold)'} onBlur={e => e.target.style.borderColor = 'var(--border)'}>
                      <option value="">Select</option>
                      {['1','2','3','4','5','6+'].map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={labelStyle}>Occasion</label>
                    <select style={inputStyle} onFocus={e => e.target.style.borderColor = 'var(--gold)'} onBlur={e => e.target.style.borderColor = 'var(--border)'}>
                      <option value="">Optional</option>
                      {['Birthday','Anniversary','Business Dinner','Date Night','Other'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.3rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={labelStyle}>Date</label>
                    <input type="date" required style={inputStyle} onFocus={e => e.target.style.borderColor = 'var(--gold)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={labelStyle}>Time</label>
                    <select required style={inputStyle} onFocus={e => e.target.style.borderColor = 'var(--gold)'} onBlur={e => e.target.style.borderColor = 'var(--border)'}>
                      <option value="">Select time</option>
                      {['4:00 PM','4:30 PM','5:00 PM','5:30 PM','6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM'].map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={labelStyle}>Special Requests</label>
                  <textarea placeholder="Dietary requirements, seating preferences…" style={{ ...inputStyle, height: 100, resize: 'none' }} onFocus={e => e.target.style.borderColor = 'var(--gold)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>
                <motion.button type="submit" whileTap={{ scale: 0.98 }} className={`btn ${submitted ? '' : 'btn-primary'}`}
                  style={{ width: '100%', textAlign: 'center', background: submitted ? '#2d5a3d' : '', borderColor: submitted ? '#2d5a3d' : '', color: submitted ? 'var(--cream)' : '' }}>
                  {submitted ? '✓ Reservation Confirmed!' : 'Book a Table'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:900px){ .container > div { grid-template-columns: 1fr !important; gap: 3.5rem !important; } }`}</style>
      </section>
    </>
  )
}