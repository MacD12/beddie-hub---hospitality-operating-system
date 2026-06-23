'use client';

import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  /** Seconds to delay the reveal, for staggering. */
  delay?: number;
  /** Distance in px the element travels up into place. */
  y?: number;
  className?: string;
}

/**
 * Lightweight scroll-triggered reveal. Fades + lifts its children into place
 * the first time they enter the viewport. Self-contained (no global CSS, no deps)
 * and respects prefers-reduced-motion.
 */
export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, y = 32, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : `translateY(${y}px)`,
        transition: `opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.85s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};
