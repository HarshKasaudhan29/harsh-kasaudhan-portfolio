import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Development',
    emoji: '🎨',
    color: '#c8f542',
    skills: [
      { name: 'React.js', emoji: '⚛️' },
      { name: 'JavaScript', emoji: '🟨' },
      { name: 'HTML5', emoji: '🧡' },
      { name: 'CSS3', emoji: '💙' },
      { name: 'Tailwind CSS', emoji: '🎨' },
      { name: 'Vite', emoji: '⚡' },
      { name: 'Context API', emoji: '🔗' },
      { name: 'Framer Motion', emoji: '🎭' },
    ],
  },
  {
    title: 'Backend Development',
    emoji: '⚙️',
    color: '#42d4f4',
    skills: [
      { name: 'Node.js', emoji: '🟢' },
      { name: 'Express.js', emoji: '🚂' },
      { name: 'MongoDB', emoji: '🍃' },
      { name: 'REST APIs', emoji: '🔌' },
      { name: 'JWT Auth', emoji: '🔐' },
      { name: 'Axios', emoji: '📡' },
      { name: 'Python', emoji: '🐍' },
    ],
  },
  {
    title: 'Programming Languages',
    emoji: '💻',
    color: '#f542a4',
    skills: [
      { name: 'JavaScript', emoji: '🟨' },
      { name: 'Python', emoji: '🐍' },
      { name: 'Java', emoji: '☕' },
      { name: 'HTML5', emoji: '🧡' },
      { name: 'CSS3', emoji: '💙' },
      { name: 'SQL', emoji: '🗄️' },
    ],
  },
  {
    title: 'Tools & DevOps',
    emoji: '🛠️',
    color: '#f5a142',
    skills: [
      { name: 'Git', emoji: '🔀' },
      { name: 'GitHub', emoji: '🐙' },
      { name: 'Docker', emoji: '🐳' },
      { name: 'VS Code', emoji: '💎' },
      { name: 'Vercel', emoji: '▲' },
      { name: 'Netlify', emoji: '☁️' },
      { name: 'Postman', emoji: '📮' },
    ],
  },
];

function SkillCard({ category, cardIndex }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: cardIndex * 0.15, ease: [0.16, 1, 0.3, 1] }}
      style={{
        padding: '32px',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 20,
        transition: 'border-color 0.3s ease, transform 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = category.color + '50';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Card Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
        <div style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: category.color + '20',
          border: `1px solid ${category.color}40`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
        }}>
          {category.emoji}
        </div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 18,
          color: 'var(--text-primary)',
          letterSpacing: '-0.01em',
        }}>
          {category.title}
        </h3>
      </div>

      {/* Skills Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: 10,
      }}>
        {category.skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: cardIndex * 0.1 + i * 0.05 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              padding: '8px 12px',
              background: category.color + '10',
              border: `1px solid ${category.color}25`,
              borderRadius: 8,
              fontSize: 13,
              color: 'var(--text-secondary)',
              fontWeight: 500,
              transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = category.color + '25';
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.borderColor = category.color + '60';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = category.color + '10';
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = category.color + '25';
            }}
          >
            <span style={{ fontSize: 16 }}>{skill.emoji}</span>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

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
              marginBottom: 12,
            }}
          >
            🔧 Essential Tools{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>I used</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 15,
              color: 'var(--text-muted)',
              maxWidth: 500,
            }}
          >
            Core technologies and tools I work with to build production-grade applications.
          </motion.p>
        </div>

        {/* 2x2 Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
          gap: 24,
        }}>
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} cardIndex={i} />
          ))}
        </div>

      </div>
    </section>
  );
}