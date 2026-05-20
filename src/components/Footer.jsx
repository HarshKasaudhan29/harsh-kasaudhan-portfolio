import { motion } from 'framer-motion';
import { Mail, ArrowUp, Heart } from 'lucide-react';

const GithubIcon = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61 3.4 3.4 0 0 1 .64-3.68c.39-.48.48-1.45.13-2.20-.5-.97-1.79-.95-2.22-.55-.37.35-.59.94-.59.94a6.00 6.00 0 0 0-7.66.27c-.29-1.05-1.24-1.50-1.24-1.50-.67-.52-1.73.7-1.73.70-.35.45-.19 1.38.11 2.00A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socials = [
  { icon: <GithubIcon style={{ fontSize: '17px' }} />, href: 'https://github.com/HarshKasaudhan29', label: 'GitHub' },
  { icon: <LinkedinIcon style={{ fontSize: '17px' }} />, href: 'https://www.linkedin.com/in/harsh-kasaudhan', label: 'LinkedIn' },
  { icon: <Mail size={17} />, href: 'mailto:harsh.kasaudhan105@gmail.com', label: 'Email' },
];

const quickLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--bg-secondary)',
    }}>
      {/* Main footer */}
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '60px clamp(20px, 6vw, 80px) 40px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 48,
          marginBottom: 60,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36,
                background: 'var(--accent)',
                borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                color: '#0a0a0a',
                fontWeight: 700,
                flexShrink: 0,
              }}>H</div>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 17,
                color: 'var(--text-primary)',
              }}>Harsh Kasaudhan</span>
            </div>
            <p style={{
              fontSize: 14,
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              maxWidth: 240,
            }}>
              Full Stack Developer passionate about building beautiful, performant web experiences.
            </p>

            {/* Open to work */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              marginTop: 20,
              padding: '6px 14px',
              background: 'var(--accent-dim)',
              border: '1px solid rgba(200,245,66,0.2)',
              borderRadius: 100,
              fontSize: 12,
              color: 'var(--accent)',
              fontWeight: 500,
            }}>
              <span style={{
                width: 6, height: 6,
                borderRadius: '50%',
                background: 'var(--accent)',
                display: 'inline-block',
                animation: 'pulse 2s ease infinite',
              }} />
              Open to opportunities
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: 12,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: 20,
              fontWeight: 600,
            }}>
              Navigate
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {quickLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    fontSize: 14,
                    color: 'var(--text-secondary)',
                    transition: 'color 0.2s ease',
                    width: 'fit-content',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{
              fontSize: 12,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: 20,
              fontWeight: 600,
            }}>
              Connect
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    fontSize: 14,
                    color: 'var(--text-secondary)',
                    transition: 'color 0.2s ease',
                    width: 'fit-content',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  {icon} {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 28 }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}>
            <p style={{
              fontSize: 13,
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              flexWrap: 'wrap',
            }}>
              © {year} Harsh Kasaudhan. Crafted with{' '}
              <Heart size={13} style={{ color: '#ff4d4d', fill: '#ff4d4d' }} />
              {' '}using React & Framer Motion.
            </p>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 7,
                padding: '8px 18px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 100,
                color: 'var(--text-secondary)',
                fontSize: 13,
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                transition: 'color 0.2s ease, border-color 0.2s ease, background 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.background = 'var(--accent-dim)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'var(--surface)';
              }}
            >
              <ArrowUp size={14} /> Back to top
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </footer>
  );
}
