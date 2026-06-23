import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { FeatureGrid } from '../components/FeatureGrid';
import { Reveal } from '../components/Reveal';
import { FinalCTA } from '../components/FinalCTA';
import { Link, useRouter, useSearchParams } from '../components/router';
import { resourceItems } from '../components/siteData';
import { articles, readLabel } from '../components/articles';

export const Resources: React.FC = () => {
  const { setParam } = useRouter();
  const params = useSearchParams();

  const tags = useMemo(() => ['All', ...Array.from(new Set(articles.map((a) => a.tag)))], []);
  const activeType = params.get('type') && tags.includes(params.get('type')!) ? params.get('type')! : 'All';
  const queryFromUrl = params.get('q') ?? '';

  const [searchInput, setSearchInput] = useState(queryFromUrl);
  // Keep the input in sync when the URL changes (e.g. back/forward).
  useEffect(() => {
    setSearchInput(queryFromUrl);
  }, [queryFromUrl]);

  const text = searchInput.trim().toLowerCase();
  const filtered = articles.filter((a) => {
    const matchType = activeType === 'All' || a.tag === activeType;
    const matchText =
      !text ||
      a.title.toLowerCase().includes(text) ||
      a.excerpt.toLowerCase().includes(text) ||
      a.tag.toLowerCase().includes(text);
    return matchType && matchText;
  });

  const handleSearch = (value: string) => {
    setSearchInput(value);
    setParam('q', value || null, { replace: true });
  };

  const clearAll = () => {
    setSearchInput('');
    // Drop both params at once.
    setParam('q', null, { replace: true });
    setParam('type', null, { replace: true });
  };

  const hasFilters = activeType !== 'All' || text !== '';

  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Learn, grow, and get inspired."
        subtitle="Playbooks, product updates, customer stories and live sessions to help you run a better operation."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Resources' }]}
      />

      <Reveal>
        <section className="py-12 md:py-16 px-4 lg:px-6 max-w-[1600px] mx-auto">
          {/* Tabs + search */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-10">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter resources by type">
              {tags.map((tag) => {
                const isActive = activeType === tag;
                return (
                  <button
                    key={tag}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setParam('type', tag === 'All' ? null : tag)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive ? 'bg-[#2d2d2d] text-white shadow-sm' : 'bg-[#f5f5f5] text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                  >
                    {tag}
                    {tag !== 'All' && (
                      <span className={`ml-2 text-xs ${isActive ? 'text-emerald-300' : 'text-gray-400'}`}>
                        {articles.filter((a) => a.tag === tag).length}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="relative lg:w-72 flex-shrink-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="search"
                value={searchInput}
                onChange={(e) => handleSearch(e.target.value)}
                aria-label="Search resources"
                placeholder="Search resources…"
                className="w-full pl-11 pr-9 py-2.5 rounded-full bg-[#f5f5f5] border border-transparent focus:bg-white focus:border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 text-sm text-gray-800 placeholder-gray-500 transition-colors"
              />
              {searchInput && (
                <button onClick={() => handleSearch('')} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Results */}
          {filtered.length > 0 ? (
            <div key={activeType} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <Link
                  to={`/resources/${post.slug}`}
                  key={post.slug}
                  style={{ animationDelay: `${i * 0.05}s` }}
                  className="hero-fade-up group bg-[#f5f5f5] rounded-3xl p-8 flex flex-col min-h-[260px] hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.25)] hover:-translate-y-1.5 transition-all duration-500"
                >
                  <span className="inline-flex w-fit items-center text-xs font-bold uppercase tracking-wide bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full mb-6">{post.tag}</span>
                  <h3 className="text-2xl font-semibold leading-snug mb-3 group-hover:text-emerald-800 transition-colors">{post.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-auto line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-8 text-sm text-gray-500">
                    <span>{readLabel(post)}</span>
                    <ArrowRight className="w-5 h-5 text-gray-900 group-hover:translate-x-1 group-hover:text-emerald-700 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[#f9f9f9] rounded-3xl border border-gray-100">
              <p className="text-2xl font-semibold text-gray-900 mb-2">No resources found</p>
              <p className="text-gray-500 mb-6">Try a different search or category.</p>
              <button onClick={clearAll} className="inline-flex items-center bg-[#2d2d2d] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black transition-colors">
                Clear filters
              </button>
            </div>
          )}

          {hasFilters && filtered.length > 0 && (
            <button onClick={clearAll} className="mt-8 text-sm font-medium text-gray-500 hover:text-emerald-700 transition-colors">
              Clear filters
            </button>
          )}
        </section>
      </Reveal>

      <Reveal>
        <section className="py-12 md:py-16 px-4 lg:px-6 max-w-[1600px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">Browse by type</h2>
          <FeatureGrid
            items={resourceItems}
            columns="md:grid-cols-2 lg:grid-cols-4"
            getHref={(label) => {
              const map: Record<string, string> = {
                Blog: 'Article',
                'Product News': 'Product News',
                'Customer Stories': 'Customer Story',
                Webinars: 'Webinar',
              };
              return map[label] ? `/resources?type=${encodeURIComponent(map[label])}` : undefined;
            }}
          />
        </section>
      </Reveal>

      <Reveal><FinalCTA /></Reveal>
    </>
  );
};
