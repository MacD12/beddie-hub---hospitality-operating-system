'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

/** Re-keys content on route change so the page-enter fade replays each navigation. */
export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
};
