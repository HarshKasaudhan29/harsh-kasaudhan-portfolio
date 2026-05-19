import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = ['projects', 'about', 'skills', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 40px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          transition: 'background 0.4s ease, backdrop-filter 0.4s ease',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36,
            background: 'var(--accent)',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)',
            fontSize: 18,
            color: '#0a0a0a',
            fontWeight: 700,
          }}>H</div>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            fontWeight: 500,
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
          }}>Harsh Kasaudhan</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                  letterSpacing: '0.02em',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.target.style.color = isActive ? 'var(--accent)' : 'var(--text-secondary)'}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            style={{
              padding: '8px 20px',
              background: 'var(--accent)',
              color: '#0a0a0a',
              borderRadius: 100,
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.01em',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => {
              e.target.style.transform = 'scale(1.04)';
              e.target.style.boxShadow = '0 0 24px var(--accent-glow)';
            }}
            onMouseLeave={e => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: 'var(--text-primary)', display: 'none' }}
          className="hamburger"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 72,
              left: 0,
              right: 0,
              background: 'rgba(10,10,10,0.97)',
              backdropFilter: 'blur(20px)',
              zIndex: 99,
              padding: '24px 40px 32px',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: 22,
                  fontFamily: 'var(--font-display)',
                  color: 'var(--text-primary)',
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}