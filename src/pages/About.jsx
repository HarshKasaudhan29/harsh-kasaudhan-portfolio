import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, MapPin, Coffee, Code2, Gamepad2 } from 'lucide-react';
import profileImg from '../assets/Harsh1.jpg';

const stats = [
  { value: 'B.Tech', label: 'IT Student 2027' },
  { value: '4+', label: 'Projects Built' },
  { value: '8+', label: 'Technologies' },
  { value: '100%', label: 'Passion' },
];

const interests = [
  { icon: <Code2 size={16} />, text: 'Open Source Contribution' },
  { icon: <Gamepad2 size={16} />, text: 'Gaming & Esports' },
  { icon: <Coffee size={16} />, text: 'Late-night Coding Sessions' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="about" style={{ padding: 'clamp(80px, 12vw, 140px) clamp(20px, 6vw, 80px)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: 80,
            alignItems: 'center',
          }}
        >
          {/* Left: Image + Stats */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                marginBottom: 40,
                display: 'inline-block',
                width: '100%',
                maxWidth: 380,
              }}
            >
              {/* Decorative border */}
              <div style={{
                position: 'absolute',
                inset: -2,
                borderRadius: 20,
                background: 'linear-gradient(135deg, var(--accent) 0%, transparent 60%)',
                opacity: 0.4,
              }} />

              {/* Image container */}
              <div style={{
                borderRadius: 18,
                overflow: 'hidden',
                background: 'var(--surface)',
                aspectRatio: '4/5',
                position: 'relative',
              }}>
                {imageFailed ? (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#555',
                    fontSize: 80,
                    fontFamily: 'var(--font-display)',
                  }}>
                    H
                  </div>
                ) : (
                  <img
                    src={profileImg}
                    alt="Harsh Kasaudhan"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                    }}
                    onError={() => setImageFailed(true)}
                  />
                )}
              </div>

              {/* Location badge */}
              <div style={{
                position: 'absolute',
                bottom: 20,
                left: 20,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 14px',
                background: 'rgba(10,10,10,0.9)',
                backdropFilter: 'blur(12px)',
                border: '1px solid var(--border)',
                borderRadius: 100,
                fontSize: 13,
                color: 'var(--text-secondary)',
              }}>
                <MapPin size={13} style={{ color: 'var(--accent)' }} />
                Greater Noida, Uttar Pradesh, India
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 16,
              }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    padding: '16px 12px',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 24,
                    color: 'var(--accent)',
                    marginBottom: 4,
                  }}>{stat.value}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.3 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: 13,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: 16,
                fontWeight: 600,
              }}
            >
              About Me
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                marginBottom: 28,
              }}
            >
              Building the web,{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>one commit at a time</span>
            </motion.h2>

            {[
              "Hey! I'm Harsh Kasaudhan, a passionate Frontend & Web Developer currently pursuing my B.Tech in Information Technology (Batch of 2027). My journey into technology is driven by a deep curiosity to transform creative ideas into elegant, efficient, and highly responsive user interfaces. I love building smooth web experiences that look great and feel seamless to use.",
              "I'm a fresher actively looking for opportunities where I can contribute, grow, and keep leveling up my skills. I enjoy working with React.js, Tailwind CSS, and modern JavaScript to build projects that solve real problems.",
              "When I'm not coding, you'll find me exploring new tech, contributing to open source, gaming, or sipping coffee while thinking about what to build next.",
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                style={{
                  fontSize: 16,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  marginBottom: 20,
                }}
              >
                {para}
              </motion.p>
            ))}

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}
            >
              {interests.map(({ icon, text }) => (
                <div key={text} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7,
                  padding: '8px 14px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 100,
                  fontSize: 13,
                  color: 'var(--text-secondary)',
                }}>
                  <span style={{ color: 'var(--accent)' }}>{icon}</span>
                  {text}
                </div>
              ))}
            </motion.div>

            {/* Resume button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <a
                href="/HARSH_KASAUDHAN_IT_18423_Resume.pdf"
                download
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
                <Download size={16} /> Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
