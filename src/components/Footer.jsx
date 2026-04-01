import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">cedar <span>&</span> sage</div>
          <p>Seasonal flavors, crafted with passion and the finest seasonal ingredients.</p>
        </div>
        <div className="footer-links">
          <h4>Navigate</h4>
          <ul>
            {[['/', 'Home'], ['/menu', 'Menu'], ['/restaurant', 'Restaurant'], ['/classes', 'Classes'], ['/book', 'Book a Table'], ['/contact', 'Contact'], ['/blog', 'Blog']].map(([to, label]) => (
              <li key={to}><Link to={to}>{label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="footer-hours">
          <h4>Opening Hours</h4>
          <p>Monday — Closed</p>
          <p>Tue – Fri — 4pm – 8pm</p>
          <p>Sat – Sun — 5pm – 11pm</p>
          <p style={{ marginTop: '1.2rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Address: 123/ A-44 ABC Lane, New Delhi</p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>+91-859-XXXXXXX</p>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} Cedar & Sage. All rights reserved.</p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.68rem', letterSpacing: '0.1em' }}>SEASONAL FLAVORS. CRAFTED WITH PASSION.</p>
      </div>
    </footer>
  )
}