import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import './styles/index.css';
import './styles/theme.css';

export default function App() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [darkMode, setDarkMode] = useState(true);

  // Apply theme to root
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.style.setProperty('--bg', '#0a0a0a');
      root.style.setProperty('--bg-secondary', '#111111');
      root.style.setProperty('--surface', '#161616');
      root.style.setProperty('--surface-hover', '#1e1e1e');
      root.style.setProperty('--border', 'rgba(255, 255, 255, 0.08)');
      root.style.setProperty('--text-primary', '#f0ede8');
      root.style.setProperty('--text-secondary', '#888');
      root.style.setProperty('--text-muted', '#555');
    } else {
      root.style.setProperty('--bg', '#f5f5f0');
      root.style.setProperty('--bg-secondary', '#ebebeb');
      root.style.setProperty('--surface', '#e8e8e3');
      root.style.setProperty('--surface-hover', '#dcdcd7');
      root.style.setProperty('--border', 'rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--text-primary', '#0a0a0a');
      root.style.setProperty('--text-secondary', '#555');
      root.style.setProperty('--text-muted', '#999');
    }
  }, [darkMode]);

  // Custom cursor
  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let fx = 0, fy = 0;

    const move = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const followMouse = (e) => {
      fx += (e.clientX - fx) * 0.12;
      fy += (e.clientY - fy) * 0.12;
      follower.style.left = fx + 'px';
      follower.style.top = fy + 'px';
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mousemove', followMouse);

    const grow = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2.5)';
      follower.style.transform = 'translate(-50%,-50%) scale(1.5)';
      follower.style.opacity = '0.2';
    };
    const shrink = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      follower.style.transform = 'translate(-50%,-50%) scale(1)';
      follower.style.opacity = '0.5';
    };

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousemove', followMouse);
    };
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-60px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grain" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Custom cursor */}
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />

      {/* Dark/Light Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 200,
          width: 52,
          height: 52,
          borderRadius: '50%',
          background: 'var(--accent)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 22,
          boxShadow: '0 4px 24px rgba(200,245,66,0.3)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(200,245,66,0.5)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 24px rgba(200,245,66,0.3)';
        }}
        title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      <Navbar />

      <main>
        <Hero />
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(20px, 6vw, 80px)' }}>
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
        <Projects />
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(20px, 6vw, 80px)' }}>
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
        <About />
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(20px, 6vw, 80px)' }}>
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
        <Skills />
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(20px, 6vw, 80px)' }}>
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
        <Contact />
      </main>

      <Footer />
    </div>
  );
}