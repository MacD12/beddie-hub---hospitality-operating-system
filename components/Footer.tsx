
import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { builtForItems, platformItems, featureItems, resourceItems, companyLinks } from './siteData';
import { Link } from './router';
import { useToast } from './Toast';

interface FooterLink { label: string; to: string }

const FooterCol: React.FC<{ title: string; links: FooterLink[]; allLabel?: string; allTo?: string }> = ({ title, links, allLabel, allTo }) => (
  <div>
    <h4 className="font-bold text-xs mb-6 uppercase tracking-[0.18em] text-gray-400">{title}</h4>
    <ul className="space-y-3.5 text-[15px] font-medium text-gray-600">
      {links.map((link) => (
        <li key={link.label}>
          <Link to={link.to} className="inline-block hover:text-emerald-700 hover:translate-x-1 transition-all duration-200">{link.label}</Link>
        </li>
      ))}
      {allLabel && allTo && (
        <li>
          <Link to={allTo} className="inline-flex items-center font-semibold text-gray-900 hover:text-emerald-700 group transition-colors">
            {allLabel} <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </li>
      )}
    </ul>
  </div>
);

const companyRoutes: Record<string, string> = {
  About: '/about', Careers: '/careers', Partners: '/about', Contact: '/contact', Pricing: '/pricing', Status: '/contact',
};

const socials = [
  { label: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  { label: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
];

export const Footer: React.FC = () => {
  const toast = useToast();
  return (
    <footer className="pt-12 pb-12 px-4 lg:px-6 max-w-[1600px] mx-auto">
      {/* Newsletter band */}
      <div className="rounded-[32px] bg-gradient-to-br from-[#d9f1e6] via-[#e7f0ed] to-[#d8eadd] p-8 md:p-12 mb-20 flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative overflow-hidden">
        <div className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-emerald-200/40 blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">Stay ahead of the season.</h3>
          <p className="text-gray-600 max-w-md">Product updates, operator playbooks, and growth tips — straight to your inbox. No spam.</p>
        </div>
        <form
          className="relative z-10 flex w-full lg:w-auto max-w-md"
          onSubmit={(e) => {
            e.preventDefault();
            e.currentTarget.reset();
            toast("You're subscribed — welcome aboard!");
          }}
        >
          <div className="relative flex-1">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              required
              aria-label="Email address"
              placeholder="Enter your email"
              className="w-full lg:w-72 pl-11 pr-4 py-4 rounded-l-full bg-white/90 border border-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-gray-800 placeholder-gray-500"
            />
          </div>
          <button className="bg-[#2d2d2d] text-white px-6 rounded-r-full font-medium flex items-center hover:bg-black transition-colors group">
            Subscribe <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>

      {/* Brand + link columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8 pb-16 border-b border-gray-100">
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <Link to="/" className="inline-block text-2xl font-bold mb-5 tracking-tight hover:text-emerald-700 transition-colors">Beddie Hub</Link>
          <p className="text-[15px] text-gray-500 leading-relaxed max-w-xs mb-6">
            The hospitality operating system for retreats, camps, and outdoor experiences worldwide.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-emerald-600 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Built for" links={builtForItems.map((i) => ({ label: i.label, to: '/solutions' }))} />
        <FooterCol title="Platform" links={platformItems.slice(0, 8).map((i) => ({ label: i.label, to: '/platform' }))} allLabel="All platform" allTo="/platform" />
        <FooterCol title="Features" links={featureItems.slice(0, 8).map((i) => ({ label: i.label, to: '/platform' }))} allLabel="All features" allTo="/platform" />
        <FooterCol title="Resources" links={resourceItems.map((i) => ({ label: i.label, to: '/resources' }))} />
        <FooterCol title="Company" links={companyLinks.map((l) => ({ label: l, to: companyRoutes[l] ?? '/contact' }))} />
      </div>

      {/* Closing row */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 py-14">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            Experience <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">Excellence.</span>
          </h2>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-black transition-colors">Legal</a>
            <a href="#" className="hover:text-black transition-colors">Privacy Statement</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Accessibility</a>
            <a href="#" className="hover:text-black transition-colors">Cookie Settings</a>
          </div>
        </div>
        <div className="text-sm text-gray-500 w-full lg:w-auto">
          <div className="flex items-center justify-start lg:justify-end text-emerald-600 font-bold mb-2">
            <span className="relative flex h-2.5 w-2.5 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            All Systems Operational
          </div>
          <div className="text-left lg:text-right">© 2026 Beddie Hub. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};
