import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    color: '#c8f542',
    skills: [
      { name: 'HTML & CSS', level: 85 },
      { name: 'JavaScript (ES6+)', level: 70 },
      { name: 'React.js', level: 72 },
      { name: 'Tailwind CSS', level: 75 },
      { name: 'Framer Motion', level: 55 },
    ],
  },
  {
    title: 'Backend',
    color: '#42d4f4',
    skills: [
      { name: 'Node.js', level: 60 },
      { name: 'Express.js', level: 58 },
      { name: 'REST APIs', level: 65 },
      { name: 'MongoDB', level: 62 },
      { name: 'Python', level: 60 },
    ],
  },
  {
    title: 'Tools & DevOps',
    color: '#f542a4',
    skills: [
      { name: 'Git & GitHub', level: 78 },
      { name: 'VS Code', level: 90 },
      { name: 'Vite', level: 65 },
      { name: 'Docker', level: 50 },
      { name: 'Vercel / Netlify', level: 70 },
    ],
  },
];

const techIcons = [
  { name: 'React', emoji: '⚛️' },
  { name: 'Node.js', emoji: '🟢' },
  { name: 'MongoDB', emoji: '🍃' },
  { name: 'JavaScript', emoji: '🟨' },
  { name: 'TypeScript', emoji: '🔷' },
  { name: 'HTML5', emoji: '🧡' },
  { name: 'CSS3', emoji: '💙' },
  { name: 'Git', emoji: '🔀' },
  { name: 'Express', emoji: '🚂' },
  { name: 'Tailwind', emoji: '🎨' },
  { name: 'Vite', emoji: '⚡' },
  { name: 'Python', emoji: '🐍' },
  { name: 'Docker', emoji: '🐳' },
];

function SkillBar({ name, level, color, index, inView }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 8,
        fontSize: 14,
        color: 'var(--text-secondary)',
      }}>
        <span>{name}</span>
        <span style={{ color, fontWeight: 600 }}>{level}%</span>
      </div>
      <div style={{
        height: 5,
        background: 'var(--surface-hover)',
        borderRadius: 100,
        overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.2 + index * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${color}80, ${color})`,
            borderRadius: 100,
            position: 'relative',
          }}
        >
          <div style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: color,
            boxShadow: `0 0 8px ${color}`,
          }} />
        </motion.div>
      </div>
    </div>
  );
}

function CategoryCard({ category, cardIndex }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: cardIndex * 0.15, ease: [0.16, 1, 0.3, 1] }}
      style={{
        padding: '36px',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 20,
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = category.color + '40'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      {/* Top accent line */}
      <div style={{
        height: 3,
        width: 48,
        background: category.color,
        borderRadius: 100,
        marginBottom: 24,
        boxShadow: `0 0 12px ${category.color}60`,
      }} />

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 22,
        color: 'var(--text-primary)',
        marginBottom: 28,
        letterSpacing: '-0.01em',
      }}>
        {category.title}
      </h3>

      {category.skills.map((skill, i) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          level={skill.level}
          color={category.color}
          index={i}
          inView={inView}
        />
      ))}
    </motion.div>
  );
}

export default function Skills() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });
  const techRef = useRef(null);
  const techInView = useInView(techRef, { once: true, margin: '-60px' });

  return (
    <section id="skills" style={{ padding: 'clamp(80px, 12vw, 140px) clamp(20px, 6vw, 80px)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Section header */}
        <div ref={titleRef} style={{ marginBottom: 72 }}>
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
            What I Know
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
            Skills &{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>Technologies</span>
          </motion.h2>
        </div>

        {/* Skill bar cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: 24,
          marginBottom: 72,
        }}>
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.title} category={cat} cardIndex={i} />
          ))}
        </div>

        {/* Tech icon cloud */}
        <div ref={techRef}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={techInView ? { opacity: 1 } : {}}
            style={{
              fontSize: 13,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: 28,
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Tech I work with
          </motion.p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'center',
          }}>
            {techIcons.map(({ name, emoji }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={techInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '10px 18px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 100,
                  fontSize: 14,
                  color: 'var(--text-secondary)',
                  cursor: 'default',
                  transition: 'border-color 0.2s ease, color 0.2s ease, background 0.2s ease',
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(200,245,66,0.3)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.background = 'var(--accent-dim)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.background = 'var(--surface)';
                }}
              >
                <span style={{ fontSize: 18 }}>{emoji}</span>
                <span style={{ fontWeight: 500 }}>{name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}