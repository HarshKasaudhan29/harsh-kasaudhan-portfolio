import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const GithubIcon = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61 3.4 3.4 0 0 1 .64-3.68c.39-.48.48-1.45.13-2.20-.5-.97-1.79-.95-2.22-.55-.37.35-.59.94-.59.94a6.00 6.00 0 0 0-7.66.27c-.29-1.05-1.24-1.50-1.24-1.50-.67-.52-1.73.7-1.73.7-.35.45-.19 1.38.11 2.00A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4.01c-.8.56-1.7.99-2.66 1.17A4.5 4.5 0 0 0 12 9.16v1A10.66 10.66 0 0 1 3 5.62s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.28-.02-.56-.06-.84A7.72 7.72 0 0 0 22 4.01z" />
  </svg>
);

const roles = ['Full Stack Developer', 'React Specialist', 'UI/UX Enthusiast', 'Problem Solver'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];

    if (!isDeleting && displayText === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2200);
      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
      return;
    }

    const speed = isDeleting ? 45 : 90;
    timeoutRef.current = setTimeout(() => {
      setDisplayText(isDeleting
        ? current.slice(0, displayText.length - 1)
        : current.slice(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 40px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background mesh */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse 80% 50% at 50% -10%, rgba(200,245,66,0.08) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 80% 80%, rgba(200,245,66,0.04) 0%, transparent 50%)
        `,
        pointerEvents: 'none',
      }} />

      {/* Floating grid lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 900, width: '100%', position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tag */}
          <motion.div variants={itemVariants} style={{ marginBottom: 28 }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 16px',
              background: 'var(--accent-dim)',
              border: '1px solid rgba(200,245,66,0.25)',
              borderRadius: 100,
              fontSize: 13,
              color: 'var(--accent)',
              fontWeight: 500,
              letterSpacing: '0.04em',
            }}>
              <span style={{
                width: 6, height: 6,
                borderRadius: '50%',
                background: 'var(--accent)',
                display: 'inline-block',
                animation: 'pulse 2s ease infinite',
              }} />
              Available for work
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(44px, 8vw, 88px)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            marginBottom: 8,
          }}>
            Hi, I'm{' '}
            <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Harsh</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div variants={itemVariants} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 5vw, 52px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--text-secondary)',
            marginBottom: 32,
            minHeight: '1.2em',
          }}>
            {displayText}
            <span style={{
              display: 'inline-block',
              width: 3,
              height: '0.8em',
              background: 'var(--accent)',
              marginLeft: 4,
              verticalAlign: 'middle',
              animation: 'pulse 1s step-end infinite',
            }} />
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} style={{
            fontSize: 18,
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: 560,
            marginBottom: 48,
          }}>
            I craft fast, beautiful web experiences using modern tech.
            Passionate about clean code, great UX, and turning ideas into products people love.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} style={{
            display: 'flex',
            gap: 16,
            flexWrap: 'wrap',
            alignItems: 'center',
            marginBottom: 64,
          }}>
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 32px',
                background: 'var(--accent)',
                color: '#0a0a0a',
                borderRadius: 100,
                fontSize: 15,
                fontWeight: 600,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.04)';
                e.currentTarget.style.boxShadow = '0 0 32px var(--accent-glow)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '13px 32px',
                background: 'transparent',
                color: 'var(--text-primary)',
                border: '1px solid var(--border)',
                borderRadius: 100,
                fontSize: 15,
                fontWeight: 500,
                transition: 'border-color 0.2s ease, background 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.background = 'var(--surface)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} style={{
            display: 'flex',
            gap: 16,
            alignItems: 'center',
          }}>
            {[
              { icon: <GithubIcon style={{ fontSize: '18px' }} />, href: 'https://github.com/HarshKasaudhan29', label: 'GitHub' },
              { icon: <LinkedinIcon style={{ fontSize: '18px' }} />, href: 'https://www.linkedin.com/in/harsh-kasaudhan-18423', label: 'LinkedIn' },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
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
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {icon}
              </a>
            ))}
            <span style={{ color: 'var(--text-muted)', fontSize: 13, marginLeft: 4 }}>
              Find me online
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: 36,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          color: 'var(--text-muted)',
          fontSize: 12,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
