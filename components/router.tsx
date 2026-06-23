'use client';

import React from 'react';
import NextLink from 'next/link';
import { usePathname, useRouter as useNextRouter, useSearchParams as useNextSearchParams } from 'next/navigation';

interface NavOptions {
  replace?: boolean;
}

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { to: string };

/** Drop-in replacement for the old custom Link — maps `to` → next/link `href`. */
export const Link: React.FC<LinkProps> = ({ to, children, ...rest }) => (
  <NextLink href={to} {...rest}>
    {children}
  </NextLink>
);

/** Same surface as the old custom router, backed by Next navigation. */
export function useRouter() {
  const router = useNextRouter();
  const pathname = usePathname();

  const navigate = (to: string, opts?: NavOptions) => {
    if (opts?.replace) router.replace(to);
    else router.push(to);
  };

  const setParam = (key: string, value: string | null, opts?: NavOptions) => {
    const params = new URLSearchParams(window.location.search);
    if (value === null || value === '') params.delete(key);
    else params.set(key, value);
    const qs = params.toString();
    const url = pathname + (qs ? `?${qs}` : '');
    if (opts?.replace) router.replace(url, { scroll: false });
    else router.push(url, { scroll: false });
  };

  return { path: pathname, search: '', navigate, setParam };
}

export const useSearchParams = useNextSearchParams;
