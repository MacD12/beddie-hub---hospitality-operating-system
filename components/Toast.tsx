'use client';

import React, { createContext, useCallback, useContext, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

type ToastFn = (message: string) => void;

interface ToastItem {
  id: number;
  message: string;
}

const ToastContext = createContext<ToastFn>(() => {});

export const useToast = () => useContext(ToastContext);

/** Lightweight toast system — top-center, auto-dismissing, no dependencies. */
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const idRef = useRef(0);

  const toast = useCallback<ToastFn>((message) => {
    const id = ++idRef.current;
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 4000);
  }, []);

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[90] flex flex-col items-center gap-2 pointer-events-none w-full px-4 max-w-md">
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            aria-live="polite"
            className="hero-fade-up pointer-events-auto flex items-center gap-3 bg-[#2d2d2d] text-white px-5 py-3.5 rounded-full shadow-[0_18px_40px_-12px_rgba(0,0,0,0.4)] border border-white/10"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <span className="text-sm font-medium">{t.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
