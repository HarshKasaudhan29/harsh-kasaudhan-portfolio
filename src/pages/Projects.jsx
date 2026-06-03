import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import cinestreamImg from '../assets/cinestream.png';
import deepshieldImg from '../assets/deepshield.png';
import amazonImg from '../assets/amazon.png';
import jiraCloneImg from '../assets/jiraCloneImg.png';
import shoppingBhandarImg from '../assets/shoppingbhandar.png';

const projects = [
  {
    number: '01',
    title: 'CineStream',
    description: 'A dynamic movie discovery web platform that integrates the TMDB API for real-time data fetching. It solves the hassle of finding trending films by providing interactive search, user ratings, and smooth responsive component rendering.',
    tech: ['React.js', 'Tailwind CSS', 'TMDB API', 'JavaScript'],
    live: null,
    repo: 'https://github.com/HarshKasaudhan29/React-movie-app',
    color: '#c8f542',
    featured: true,
    image: cinestreamImg,
  },
  {
    number: '02',
    title: 'DeepShield',
    description: 'An advanced synthetic media detector designed to identify and flag AI-generated deepfake content. It provides an isolated, reliable deployment setup to process media analysis requests seamlessly.',
    tech: ['Python', 'Docker', 'React.js', 'Tailwind CSS'],
    live: null,
    repo: 'https://github.com/HarshKasaudhan29/synthetic-media-detector-project',
    color: '#42d4f4',
    featured: true,
    image: deepshieldImg,
  },
  {
    number: '03',
    title: 'Amazon Clone',
    description: 'A pixel-perfect front-end clone of Amazon built with pure HTML and CSS. Recreates the homepage layout, navbar, product sections, and footer with fully responsive design.',
    tech: ['HTML', 'CSS'],
    live: null,
    repo: 'https://github.com/HarshKasaudhan29/amazon-clone-html-css',
    color: '#f5a142',
    featured: false,
    image: amazonImg,
  },
  {
    number: '04',
    title: 'Jira Clone',
    description: 'A robust project management and issue tracking application that features an interactive Kanban board, drag-and-drop functionality, and real-time sprint management to streamline team workflows.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
    live: 'https://jira-clone-frontend-5bg1.onrender.com',
    repo: 'https://github.com/HarshKasaudhan29/Jira-Clone-MERN',
    color: '#0052CC',
    featured: true,
    image: jiraCloneImg,
  },
  {
  number: '05',
  title: 'Shopping Bhandar',
  description: 'A full-featured MERN stack e-commerce application equipped with user authentication, secure payment gateway integration, dynamic product filtering, and an intuitive shopping cart experience.',
  tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux Toolkit'],
  live: 'https://shopping-bhandar.vercel.app/',
  repo: 'https://github.com/HarshKasaudhan29/ShoppingBhandar', 
  color: '#ff4e50', 
  featured: true,
  image: shoppingBhandarImg, 
}
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'relative',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 20,
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, transform 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = project.color + '40';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Project Image */}
      <div style={{
        width: '100%',
        height: 200,
        overflow: 'hidden',
        position: 'relative',
      }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            transition: 'transform 0.4s ease',
          }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        />
        {/* Overlay gradient */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '50%',
          background: 'linear-gradient(transparent, var(--surface))',
        }} />

        {/* Featured badge */}
        {project.featured && (
          <div style={{
            position: 'absolute',
            top: 16,
            right: 16,
            padding: '4px 12px',
            background: 'rgba(10,10,10,0.8)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(200,245,66,0.25)',
            borderRadius: 100,
            fontSize: 11,
            color: 'var(--accent)',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}>
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '24px 32px 32px' }}>
        {/* Glow line */}
        <div style={{
          height: 1,
          background: `linear-gradient(90deg, ${project.color}60, transparent)`,
          marginBottom: 20,
        }} />

        {/* Number */}
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 48,
          color: project.color + '18',
          lineHeight: 1,
          marginBottom: 12,
          userSelect: 'none',
        }}>
          {project.number}
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(20px, 3vw, 24px)',
          marginBottom: 12,
          color: 'var(--text-primary)',
          lineHeight: 1.2,
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: 14,
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          marginBottom: 24,
        }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          marginBottom: 28,
        }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              padding: '4px 12px',
              background: project.color + '14',
              border: `1px solid ${project.color}30`,
              borderRadius: 100,
              fontSize: 12,
              color: project.color,
              fontWeight: 500,
              letterSpacing: '0.02em',
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: 12 }}>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '10px 20px',
                background: project.color,
                color: '#0a0a0a',
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 600,
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '10px 20px',
              background: 'transparent',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border)',
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 500,
              transition: 'color 0.2s ease, border-color 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            <Github size={14} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="projects" style={{ padding: 'clamp(80px, 12vw, 140px) clamp(20px, 6vw, 80px)' }}>
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
            Selected Work
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
              maxWidth: 600,
            }}
          >
            Things I've{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>built</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
          gap: 24,
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: 56, textAlign: 'center' }}
        >
          <a
            href="https://github.com/HarshKasaudhan29"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: 'var(--text-secondary)',
              fontSize: 15,
              fontWeight: 500,
              borderBottom: '1px solid var(--border)',
              paddingBottom: 2,
              transition: 'color 0.2s ease, border-color 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.borderColor = 'var(--accent)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            See all projects on GitHub <ArrowUpRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}