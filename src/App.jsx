import { useEffect, useRef } from 'react';
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

  // Custom cursor
  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let fx = 0, fy = 0;
    let animFrame;

    const move = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const followMouse = (e) => {
      fx += (e.clientX - fx) * 0.12;
      fy += (e.clientY - fy) * 0.12;
      follower.style.left = fx + 'px';
      follower.style.top = fy + 'px';
      animFrame = requestAnimationFrame(() => {});
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mousemove', followMouse);

    // Scale on hoverable elements
    const interactEls = document.querySelectorAll('a, button, [data-cursor]');
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
      cancelAnimationFrame(animFrame);
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

      <Navbar />

      <main>
        <Hero />

        {/* Divider */}
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 clamp(20px, 6vw, 80px)',
        }}>
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>

        <Projects />

        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 clamp(20px, 6vw, 80px)',
        }}>
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>

        <About />

        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 clamp(20px, 6vw, 80px)',
        }}>
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>

        <Skills />

        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 clamp(20px, 6vw, 80px)',
        }}>
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}