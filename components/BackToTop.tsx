'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

/** Floating "scroll to top" button — appears after scrolling, stacks above the WhatsApp widget. */
export const BackToTop: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-28 right-8 z-[55] w-12 h-12 rounded-full bg-white text-gray-700 border border-gray-200 shadow-lg flex items-center justify-center hover:bg-[#2d2d2d] hover:text-white hover:border-transparent hover:-translate-y-0.5 transition-all duration-300 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
