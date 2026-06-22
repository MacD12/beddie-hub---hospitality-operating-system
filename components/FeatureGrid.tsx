import React from 'react';
import { type NavItem } from './siteData';
import { Link } from './router';

interface FeatureGridProps {
  items: NavItem[];
  columns?: string;
  /** Optional: return a route for an item's label to make the card navigate. */
  getHref?: (label: string) => string | undefined;
}

/** Reusable icon-card grid (Platform / Solutions / Resources pages). */
export const FeatureGrid: React.FC<FeatureGridProps> = ({ items, columns = 'md:grid-cols-2 lg:grid-cols-3', getHref }) => {
  const cardClass =
    'group relative bg-[#e9e8e2] rounded-3xl p-7 md:p-8 flex flex-col min-h-[200px] hover:bg-white hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.25)] border border-transparent hover:border-gray-100 transition-all duration-500 overflow-hidden';

  return (
    <div className={`grid grid-cols-1 ${columns} gap-4 md:gap-6`}>
      {items.map((item) => {
        const to = getHref?.(item.label);
        const inner = (
          <>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            <div className="flex items-center justify-between mb-6">
              <span className="w-14 h-14 rounded-2xl bg-white text-emerald-600 flex items-center justify-center shadow-sm group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                <item.icon className="w-7 h-7" />
              </span>
              {item.badge && (
                <span className="text-[10px] font-bold uppercase tracking-wide bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">{item.badge}</span>
              )}
            </div>
            <div className="mt-auto">
              <h3 className="text-xl md:text-2xl font-semibold mb-1 group-hover:text-emerald-800 transition-colors">{item.label}</h3>
              {item.desc && <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>}
            </div>
          </>
        );

        return to ? (
          <Link to={to} key={item.label} className={cardClass}>{inner}</Link>
        ) : (
          <a href="#" key={item.label} className={cardClass}>{inner}</a>
        );
      })}
    </div>
  );
};
