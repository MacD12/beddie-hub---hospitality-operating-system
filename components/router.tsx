import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

interface NavOptions {
  replace?: boolean;
}

interface RouterContextValue {
  path: string;
  search: string;
  navigate: (to: string, opts?: NavOptions) => void;
  setParam: (key: string, value: string | null, opts?: NavOptions) => void;
}

const RouterContext = createContext<RouterContextValue>({
  path: '/',
  search: '',
  navigate: () => {},
  setParam: () => {},
});

export const useRouter = () => useContext(RouterContext);

/** Reactive URLSearchParams for the current location. */
export const useSearchParams = () => {
  const { search } = useRouter();
  return useMemo(() => new URLSearchParams(search), [search]);
};

/** Minimal History-API router — no dependencies, keeps the importmap setup intact. */
export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loc, setLoc] = useState(() => ({
    path: window.location.pathname || '/',
    search: window.location.search,
  }));

  useEffect(() => {
    const onPop = () => setLoc({ path: window.location.pathname || '/', search: window.location.search });
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to: string, opts?: NavOptions) => {
    const url = new URL(to, window.location.origin);
    const same = url.pathname === window.location.pathname && url.search === window.location.search;
    if (same) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history[opts?.replace ? 'replaceState' : 'pushState']({}, '', to);
    setLoc({ path: url.pathname, search: url.search });
    if (!opts?.replace) window.scrollTo({ top: 0 });
  }, []);

  const setParam = useCallback((key: string, value: string | null, opts?: NavOptions) => {
    const params = new URLSearchParams(window.location.search);
    if (value === null || value === '') params.delete(key);
    else params.set(key, value);
    const qs = params.toString();
    const search = qs ? `?${qs}` : '';
    window.history[opts?.replace ? 'replaceState' : 'pushState']({}, '', window.location.pathname + search);
    setLoc({ path: window.location.pathname, search });
  }, []);

  return (
    <RouterContext.Provider value={{ path: loc.path, search: loc.search, navigate, setParam }}>
      {children}
    </RouterContext.Provider>
  );
};

/** Matches a pattern like "/resources/:slug" against a path, returning params or null. */
export function matchPath(pattern: string, path: string): Record<string, string> | null {
  const pp = pattern.split('/').filter(Boolean);
  const ap = path.split('/').filter(Boolean);
  if (pp.length !== ap.length) return null;
  const params: Record<string, string> = {};
  for (let i = 0; i < pp.length; i++) {
    if (pp[i].startsWith(':')) params[pp[i].slice(1)] = decodeURIComponent(ap[i]);
    else if (pp[i] !== ap[i]) return null;
  }
  return params;
}

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

/** Drop-in <a> replacement that navigates client-side (respects modifier clicks). */
export const Link: React.FC<LinkProps> = ({ to, children, onClick, ...rest }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};
