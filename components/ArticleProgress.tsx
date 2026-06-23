import React, { useEffect, useState } from 'react';

/**
 * Reading-progress bar scoped to a specific element (the article body).
 * Sits just under the navbar — distinct from the page-wide ScrollProgress.
 */
export const ArticleProgress: React.FC<{ targetRef: React.RefObject<HTMLElement | null> }> = ({ targetRef }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = targetRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const denom = rect.height - window.innerHeight;
      const value = denom > 0 ? (window.scrollY - top) / denom : window.scrollY >= top ? 1 : 0;
      setProgress(Math.min(1, Math.max(0, value)));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [targetRef]);

  return (
    <div className="fixed top-20 left-0 right-0 h-0.5 z-40 pointer-events-none" aria-hidden="true">
      <div
        className="h-full bg-emerald-500/90 transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
};
