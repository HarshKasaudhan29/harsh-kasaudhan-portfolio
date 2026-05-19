import { motion } from 'framer-motion';

export default function CustomButton({
  children,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'outline' | 'ghost'
  size = 'md',
  icon,
  style = {},
}) {
  const sizes = {
    sm: { padding: '8px 18px', fontSize: 13 },
    md: { padding: '12px 28px', fontSize: 15 },
    lg: { padding: '16px 40px', fontSize: 17 },
  };

  const variants = {
    primary: {
      background: 'var(--accent)',
      color: '#0a0a0a',
      border: 'none',
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent)',
      border: 'none',
    },
  };

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    borderRadius: 100,
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    letterSpacing: '0.01em',
    cursor: 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  const hoverEffects = {
    primary: { scale: 1.04, boxShadow: '0 0 32px var(--accent-glow)' },
    outline: { scale: 1.02, borderColor: 'rgba(255,255,255,0.2)', background: 'var(--surface)' },
    ghost: { x: 4 },
  };

  const Tag = href ? 'a' : 'button';

  return (
    <motion.a
      as={Tag}
      href={href}
      onClick={onClick}
      style={baseStyle}
      whileHover={hoverEffects[variant]}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      {icon && icon}
    </motion.a>
  );
}