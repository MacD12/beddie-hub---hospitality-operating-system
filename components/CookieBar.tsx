'use client';

import React, { useEffect, useState } from 'react';
import { setCookieBarVisible } from './cookieBus';

const COOKIE_KEY = 'beddle-cookie-consent';

export const CookieBar: React.FC = () => {
  const [show, setShow] = useState(false);

  // Decide on the client after mount to avoid SSR/localStorage hydration mismatch.
  useEffect(() => {
    let needed = true;
    try {
      needed = !localStorage.getItem(COOKIE_KEY);
    } catch {
      needed = true;
    }
    setShow(needed);
    setCookieBarVisible(needed);
    return () => setCookieBarVisible(false);
  }, []);

  const dismiss = (choice: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(COOKIE_KEY, choice);
    } catch {
      /* storage unavailable */
    }
    setShow(false);
    setCookieBarVisible(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="false"
      className="fixed bottom-4 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-[70] w-auto sm:w-[calc(100%-2rem)] sm:max-w-2xl"
    >
      <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)] rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <p className="text-sm text-gray-600 flex-1 leading-snug">
          We use cookies to improve your experience. <a href="#" className="text-gray-900 underline font-medium hover:text-emerald-700">Privacy policy</a>.
        </p>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => dismiss('declined')}
            className="px-4 py-2 text-sm font-medium text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={() => dismiss('accepted')}
            className="px-5 py-2 text-sm font-semibold text-white bg-[#2d2d2d] rounded-full hover:bg-black transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};
