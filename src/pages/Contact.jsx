import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

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

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'harsh.kasaudhan105@gmail.com',
    href: 'mailto:harsh.kasaudhan105@gmail.com',
  },
  {
    icon: <Phone size={18} />,
    label: 'Phone',
    value: '+91 8299176885',
    href: 'tel:+918299176885',
  },
  {
    icon: <MapPin size={18} />,
    label: 'Location',
    value: 'Greater Noida, Uttar Pradesh, India',
    href: null,
  },
];

const socials = [
  { icon: <GithubIcon style={{ fontSize: '18px' }} />, label: 'GitHub', href: 'https://github.com/HarshKasaudhan29' },
  { icon: <LinkedinIcon style={{ fontSize: '18px' }} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/harsh-kasaudhan-18423' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('sending');
    // Simulate async send (replace with EmailJS / Formspree / your API)
    await new Promise((r) => setTimeout(r, 1800));
    setStatus('sent');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const inputStyle = (field) => ({
    width: '100%',
    padding: '14px 18px',
    background: 'var(--surface)',
    border: `1px solid ${errors[field] ? '#ff4d4d' : 'var(--border)'}`,
    borderRadius: 12,
    color: 'var(--text-primary)',
    fontSize: 15,
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box',
  });

  return (
    <section id="contact" style={{ padding: 'clamp(80px, 12vw, 140px) clamp(20px, 6vw, 80px)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div ref={ref} style={{ marginBottom: 72 }}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
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
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 6vw, 64px)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              maxWidth: 560,
            }}
          >
            Let's work{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>together</span>
          </motion.h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: 60,
        }}>

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p style={{
              fontSize: 16,
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: 48,
            }}>
              I'm always open to new opportunities, collaborations, or just a friendly chat about tech.
              Drop me a message and I'll get back to you within 24 hours!
            </p>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 48 }}>
              {contactInfo.map(({ icon, label, value, href }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: 'var(--accent-dim)',
                    border: '1px solid rgba(200,245,66,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    flexShrink: 0,
                  }}>
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 2 }}>{label}</div>
                    {href ? (
                      <a href={href} style={{
                        fontSize: 15,
                        color: 'var(--text-primary)',
                        fontWeight: 500,
                        transition: 'color 0.2s ease',
                      }}
                        onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                        onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}
                      >
                        {value}
                      </a>
                    ) : (
                      <span style={{ fontSize: 15, color: 'var(--text-primary)', fontWeight: 500 }}>
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Find me on
              </p>
              <div style={{ display: 'flex', gap: 12 }}>
                {socials.map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    style={{
                      width: 44,
                      height: 44,
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
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {status === 'sent' ? (
              <div style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 20,
                padding: '60px 20px',
                textAlign: 'center',
              }}>
                <CheckCircle size={56} color="var(--accent)" />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--text-primary)' }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 320, lineHeight: 1.6 }}>
                  Thanks for reaching out! I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  style={{
                    padding: '12px 28px',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 100,
                    color: 'var(--text-primary)',
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-hover)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--surface)'}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {/* Name + Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange('name')}
                      style={inputStyle('name')}
                      onFocus={e => e.target.style.borderColor = 'rgba(200,245,66,0.5)'}
                      onBlur={e => e.target.style.borderColor = errors.name ? '#ff4d4d' : 'var(--border)'}
                    />
                    {errors.name && <p style={{ fontSize: 12, color: '#ff6b6b', marginTop: 4 }}>{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange('email')}
                      style={inputStyle('email')}
                      onFocus={e => e.target.style.borderColor = 'rgba(200,245,66,0.5)'}
                      onBlur={e => e.target.style.borderColor = errors.email ? '#ff4d4d' : 'var(--border)'}
                    />
                    {errors.email && <p style={{ fontSize: 12, color: '#ff6b6b', marginTop: 4 }}>{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <input
                  type="text"
                  placeholder="Subject (optional)"
                  value={form.subject}
                  onChange={handleChange('subject')}
                  style={inputStyle('subject')}
                  onFocus={e => e.target.style.borderColor = 'rgba(200,245,66,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />

                {/* Message */}
                <div>
                  <textarea
                    placeholder="Your message..."
                    rows={6}
                    value={form.message}
                    onChange={handleChange('message')}
                    style={{ ...inputStyle('message'), resize: 'vertical', minHeight: 140 }}
                    onFocus={e => e.target.style.borderColor = 'rgba(200,245,66,0.5)'}
                    onBlur={e => e.target.style.borderColor = errors.message ? '#ff4d4d' : 'var(--border)'}
                  />
                  {errors.message && <p style={{ fontSize: 12, color: '#ff6b6b', marginTop: 4 }}>{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    padding: '16px',
                    background: status === 'sending' ? 'rgba(200,245,66,0.6)' : 'var(--accent)',
                    color: '#0a0a0a',
                    border: 'none',
                    borderRadius: 12,
                    fontSize: 16,
                    fontWeight: 600,
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    fontFamily: 'var(--font-body)',
                  }}
                  onMouseEnter={e => {
                    if (status !== 'sending') {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 32px var(--accent-glow)';
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {status === 'sending' ? (
                    <>
                      <div style={{
                        width: 18, height: 18,
                        border: '2px solid #0a0a0a',
                        borderTopColor: 'transparent',
                        borderRadius: '50%',
                        animation: 'spin 0.7s linear infinite',
                      }} />
                      Sending...
                    </>
                  ) : (
                    <><Send size={18} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        input::placeholder, textarea::placeholder {
          color: var(--text-muted);
        }
        @media (max-width: 500px) {
          form > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
