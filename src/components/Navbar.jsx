import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/menu', label: 'Menu' },
  { to: '/restaurant', label: 'Restaurant' },
  { to: '/classes', label: 'Classes' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <motion.nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 'var(--nav-h)', padding: '0 2.5rem',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          background: scrolled ? 'rgba(14,12,9,0.93)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <Link to="/" style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 300, color: 'var(--cream)', letterSpacing: '0.04em' }}>
          cedar <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>&</span> sage
        </Link>

        {/* Desktop */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }} className="nav-desktop">
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} style={{
                fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                color: pathname === l.to ? 'var(--gold)' : 'var(--text)',
                transition: 'color 0.3s', fontWeight: 400,
              }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = pathname === l.to ? 'var(--gold)' : 'var(--text)'}
              >{l.label}</Link>
            </li>
          ))}
          <li>
            <Link to="/book" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.65rem' }}>
              Book a Table
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="hamburger-btn" style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '4px', zIndex: 110 }}>
          {[0,1,2].map(i => (
            <motion.span key={i} style={{ display: 'block', width: '22px', height: '1px', background: 'var(--cream)' }}
              animate={{ rotate: open && i === 0 ? 45 : open && i === 2 ? -45 : 0, y: open && i === 0 ? 6 : open && i === 2 ? -6 : 0, opacity: open && i === 1 ? 0 : 1 }}
              transition={{ duration: 0.25 }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}
            style={{ position: 'fixed', top: 'var(--nav-h)', left: 0, right: 0, zIndex: 99, background: 'rgba(14,12,9,0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border)', padding: '2rem 2.5rem 2.5rem' }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: 0 }}>
              {links.map(l => (
                <li key={l.to}><Link to={l.to} style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 300, color: 'var(--cream)', letterSpacing: '0.04em' }}>{l.label}</Link></li>
              ))}
              <li><Link to="/book" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>Book a Table</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}