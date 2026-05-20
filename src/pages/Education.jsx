import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const education = [
  {
    period: '2023 – 2027 · Current',
    degree: 'B.Tech · Information Technology',
    institution: 'Dronacharya Group of Institutions, Greater Noida, India',
    status: 'Pursuing',
    statusColor: '#c8f542',
    results: [
      { label: 'CGPA', value: '6.7' },
      { label: 'Program', value: '4yr' },
    ],
    tags: ['B.Tech', 'Information Technology', 'AKTU', '4 Years', 'Pursuing'],
    color: '#c8f542',
  },
  {
    period: '2021 – 2023 · Class XII',
    degree: 'Senior Secondary · Science (PCM)',
    institution: 'K.N.I.C.E, Sultanpur, UP',
    status: 'Completed',
    statusColor: '#42d4f4',
    results: [
      { label: 'Percentage', value: '79.8%' },
      { label: 'Board', value: 'CBSE' },
    ],
    tags: ['Class XII', 'PCM', 'CBSE'],
    color: '#42d4f4',
  },
  {
    period: '2019 – 2021 · Class X',
    degree: 'Secondary School',
    institution: 'K.N.I.C.E, Sultanpur, UP',
    status: 'Completed',
    statusColor: '#f542a4',
    results: [
      { label: 'Percentage', value: '87.8%' },
      { label: 'Board', value: 'CBSE' },
    ],
    tags: ['Class X', 'CBSE', 'Science', 'Foundation'],
    color: '#f542a4',
  },
];

function EducationCard({ edu, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: 'flex', gap: 32, position: 'relative' }}
    >
      {/* Timeline dot + line */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{
          width: 14,
          height: 14,
          borderRadius: '50%',
          background: edu.color,
          boxShadow: `0 0 12px ${edu.color}`,
          marginTop: 6,
          flexShrink: 0,
          zIndex: 1,
        }} />
        {index < education.length - 1 && (
          <div style={{
            width: 1,
            flex: 1,
            background: `linear-gradient(${edu.color}60, transparent)`,
            marginTop: 8,
            minHeight: 60,
          }} />
        )}
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        padding: '28px 32px',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        marginBottom: 32,
        transition: 'border-color 0.3s ease',
      }}
        onMouseEnter={e => e.currentTarget.style.borderColor = edu.color + '50'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
      >
        {/* Period */}
        <p style={{
          fontSize: 13,
          color: edu.color,
          fontWeight: 600,
          letterSpacing: '0.06em',
          marginBottom: 10,
        }}>
          {edu.period}
        </p>

        {/* Degree + Status badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 8 }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(18px, 2.5vw, 22px)',
            color: 'var(--text-primary)',
            lineHeight: 1.2,
          }}>
            {edu.degree}
          </h3>
          <span style={{
            padding: '3px 12px',
            background: edu.statusColor + '20',
            border: `1px solid ${edu.statusColor}50`,
            borderRadius: 100,
            fontSize: 11,
            color: edu.statusColor,
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: 5,
          }}>
            <span style={{
              width: 6, height: 6,
              borderRadius: '50%',
              background: edu.statusColor,
              display: 'inline-block',
            }} />
            {edu.status}
          </span>
        </div>

        {/* Institution */}
        <p style={{
          fontSize: 14,
          color: 'var(--text-secondary)',
          marginBottom: 20,
          fontWeight: 500,
        }}>
          {edu.institution}
        </p>

        {/* Results */}
        <div style={{ marginBottom: 20 }}>
          <p style={{
            fontSize: 12,
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: 8,
            fontWeight: 600,
          }}>
            Results:
          </p>
          {edu.results.map(({ label, value }) => (
            <p key={label} style={{
              fontSize: 14,
              color: 'var(--text-secondary)',
              marginBottom: 4,
            }}>
              · {label}:{' '}
              <span style={{ color: edu.color, fontWeight: 700 }}>{value}</span>
            </p>
          ))}
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {edu.tags.map((tag) => (
            <span key={tag} style={{
              padding: '4px 12px',
              background: edu.color + '14',
              border: `1px solid ${edu.color}30`,
              borderRadius: 8,
              fontSize: 12,
              color: edu.color,
              fontWeight: 500,
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="education" style={{ padding: 'clamp(80px, 12vw, 140px) clamp(20px, 6vw, 80px)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Section header */}
        <div ref={titleRef} style={{ marginBottom: 64 }}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
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
            My Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 6vw, 64px)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              maxWidth: 520,
            }}
          >
            Education &{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>Background</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div style={{ maxWidth: 750 }}>
          {education.map((edu, i) => (
            <EducationCard key={edu.degree} edu={edu} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}