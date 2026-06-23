'use client';

import { useEffect, useState } from 'react';

const EVENT = 'beddle:cookiebar';
let current = false;

/** Broadcast cookie-bar visibility so floating UI can move out of its way. */
export function setCookieBarVisible(visible: boolean) {
  current = visible;
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent<boolean>(EVENT, { detail: visible }));
  }
}

/** Subscribe to cookie-bar visibility (false until the bar decides to show). */
export function useCookieBarVisible(): boolean {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(current);
    const handler = (e: Event) => setVisible((e as CustomEvent<boolean>).detail);
    window.addEventListener(EVENT, handler);
    return () => window.removeEventListener(EVENT, handler);
  }, []);
  return visible;
}
