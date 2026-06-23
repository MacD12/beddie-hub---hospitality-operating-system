import React from 'react';
import { Breadcrumbs, type Crumb } from './Breadcrumbs';

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  crumbs?: Crumb[];
}

/** Consistent inner-page hero, matching the home hero's look & feel. */
export const PageHeader: React.FC<PageHeaderProps> = ({ eyebrow, title, subtitle, crumbs }) => (
  <section className="pt-32 md:pt-44 pb-10 md:pb-14 px-4 lg:px-6 max-w-[1600px] mx-auto">
    <div className="relative rounded-[32px] md:rounded-[40px] overflow-hidden bg-gradient-to-br from-[#d9f1e6] via-[#e7f0ed] to-[#d8eadd] p-10 md:p-20">
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-emerald-200/30 blur-3xl pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        aria-hidden="true"
        style={{ backgroundImage: 'radial-gradient(#8ABF9F 1px, transparent 1px)', backgroundSize: '28px 28px', maskImage: 'radial-gradient(ellipse 60% 70% at 75% 40%, black, transparent)', WebkitMaskImage: 'radial-gradient(ellipse 60% 70% at 75% 40%, black, transparent)' }}
      />
      <div className="relative z-10 max-w-3xl">
        {crumbs && <Breadcrumbs items={crumbs} className="mb-6" />}
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 uppercase tracking-[0.2em] mb-4">
          <span className="w-6 h-px bg-emerald-500" /> {eyebrow}
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">{title}</h1>
        {subtitle && <p className="text-lg md:text-2xl text-gray-600 font-light max-w-2xl leading-relaxed">{subtitle}</p>}
      </div>
    </div>
  </section>
);
