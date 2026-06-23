import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from './router';

export interface Crumb {
  label: string;
  to?: string;
}

export const Breadcrumbs: React.FC<{ items: Crumb[]; className?: string }> = ({ items, className = '' }) => (
  <nav aria-label="Breadcrumb" className={className}>
    <ol className="flex flex-wrap items-center gap-1.5 text-sm">
      {items.map((crumb, i) => {
        const isLast = i === items.length - 1;
        return (
          <li key={`${crumb.label}-${i}`} className="flex items-center gap-1.5">
            {crumb.to && !isLast ? (
              <Link to={crumb.to} className="text-gray-500 hover:text-emerald-700 transition-colors">{crumb.label}</Link>
            ) : (
              <span className={isLast ? 'text-gray-900 font-medium' : 'text-gray-500'} aria-current={isLast ? 'page' : undefined}>
                {crumb.label}
              </span>
            )}
            {!isLast && <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />}
          </li>
        );
      })}
    </ol>
  </nav>
);
