interface SeoInput {
  title: string;
  description: string;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/** Sync document title + description, Open Graph, Twitter, and canonical tags. */
export function applySeo({ title, description }: SeoInput) {
  const fullTitle = `${title} | Beddie Hub`;
  const url = window.location.origin + window.location.pathname + window.location.search;

  document.title = fullTitle;
  upsertMeta('name', 'description', description);

  upsertMeta('property', 'og:title', fullTitle);
  upsertMeta('property', 'og:description', description);
  upsertMeta('property', 'og:url', url);
  upsertMeta('property', 'og:type', 'website');

  upsertMeta('name', 'twitter:card', 'summary_large_image');
  upsertMeta('name', 'twitter:title', fullTitle);
  upsertMeta('name', 'twitter:description', description);

  upsertCanonical(window.location.origin + window.location.pathname);
}

/** Inject/replace page-specific JSON-LD structured data (or clear it with null). */
export function setStructuredData(data: object | object[] | null) {
  const id = 'dynamic-jsonld';
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!data) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}
