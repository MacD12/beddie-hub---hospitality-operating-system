'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { useCookieBarVisible } from './cookieBus';

/** Bottom-right floating stack: back-to-top (on scroll) above the WhatsApp widget. */
export const FloatingActions: React.FC = () => {
  const [showTop, setShowTop] = useState(false);
  const cookieVisible = useCookieBarVisible();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed right-5 sm:right-8 z-[60] flex flex-col items-end gap-3 transition-[bottom] duration-300 ${
        cookieVisible ? 'bottom-44 sm:bottom-8' : 'bottom-8'
      }`}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`w-12 h-12 rounded-full bg-white text-gray-700 border border-gray-200 shadow-lg flex items-center justify-center hover:bg-[#2d2d2d] hover:text-white hover:border-transparent hover:-translate-y-0.5 transition-all duration-300 ${
          showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group relative"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block border border-gray-100" aria-hidden="true">
          Chat with us
        </span>
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
