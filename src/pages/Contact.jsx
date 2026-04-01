import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    e.target.reset()
  }

  const inputStyle = { background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', color: 'var(--cream)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 300, padding: '0.9rem 1.1rem', outline: 'none', width: '100%', transition: 'border-color 0.3s' }
  const labelStyle = { fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem', display: 'block' }

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg"><img src="https://cdn.prod.website-files.com/670f019f6327d6ab7a07810a/6747fa14d471bf472d9b7c9c_Terrigal_Bar_Restaurant_Bar_Contact.webp" alt="Contact" /></div>
        <div className="page-hero-overlay" />
        <div className="page-hero-content container">
          <span className="label">Reach Out</span>
          <h1>Get In <em>Touch</em></h1>
        </div>
      </section>

      <section style={{ padding: '8rem 0', background: 'var(--dark-mid)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '7rem', alignItems: 'start' }}>
            <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="label">Contact Us</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '0.5rem', lineHeight: 1.1 }}>
                We'd Love<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>To Hear From You</em>
              </h2>
              <div className="divider" />
              {[['Address', '123/ A-44\nABC Lane , New Delhi'], ['Phone', '+91-859-XXXXXXX'], ['Email', 'cedar_sage@gmail.com'], ['Hours', 'Mon — Closed\nTue – Fri — 4pm – 12pm\nSat – Sun — 5pm – 1am']].map(([label, val]) => (
                <div key={label} style={{ marginBottom: '2rem' }}>
                  <span style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem', display: 'block' }}>{label}</span>
                  {val.split('\n').map((line, i) => <p key={i} style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>{line}</p>)}
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
                {[['Name', 'text', 'Enter your name'], ['Email', 'email', 'Your email address']].map(([label, type, placeholder]) => (
                  <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={labelStyle}>{label}</label>
                    <input type={type} placeholder={placeholder} required style={inputStyle} onFocus={e => e.target.style.borderColor = 'var(--gold)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                  </div>
                ))}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={labelStyle}>Message</label>
                  <textarea placeholder="Your message" required style={{ ...inputStyle, height: 180, resize: 'none' }} onFocus={e => e.target.style.borderColor = 'var(--gold)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>
                <motion.button type="submit" whileTap={{ scale: 0.98 }} className={`btn ${submitted ? '' : 'btn-primary'}`}
                  style={{ width: '100%', textAlign: 'center', background: submitted ? '#2d5a3d' : '', borderColor: submitted ? '#2d5a3d' : '', color: submitted ? 'var(--cream)' : '' }}>
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
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