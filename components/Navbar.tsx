'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { megaMenus, type NavItem } from './siteData';
import { Link, useRouter } from './router';

const MenuLink: React.FC<{ item: NavItem; to: string; onClick?: () => void }> = ({ item, to, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="group/item flex items-start gap-3 rounded-2xl p-3 hover:bg-emerald-50/70 transition-colors"
  >
    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-100 text-gray-500 flex items-center justify-center group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
      <item.icon className="w-5 h-5" />
    </span>
    <span className="min-w-0">
      <span className="flex items-center gap-2">
        <span className="text-sm font-semibold text-gray-900 group-hover/item:text-emerald-800 transition-colors">{item.label}</span>
        {item.badge && (
          <span className="text-[9px] font-bold uppercase tracking-wide bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full">{item.badge}</span>
        )}
      </span>
      {item.desc && <span className="block text-xs text-gray-500 leading-snug mt-0.5">{item.desc}</span>}
    </span>
  </Link>
);

export const Navbar: React.FC = () => {
  const { path, navigate } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus whenever the route changes.
  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [path]);

  const active = megaMenus.find((m) => m.title === activeMenu);

  return (
    <nav
      aria-label="Primary"
      onMouseLeave={() => setActiveMenu(null)}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || activeMenu
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-[0_4px_30px_-12px_rgba(0,0,0,0.12)]'
          : 'bg-white/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <span className="text-2xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-emerald-700">Beddie Hub</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {megaMenus.map((menu) => (
              <button
                key={menu.title}
                onMouseEnter={() => setActiveMenu(menu.title)}
                onFocus={() => setActiveMenu(menu.title)}
                onClick={() => navigate(menu.to)}
                aria-expanded={activeMenu === menu.title}
                className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-full transition-colors ${
                  activeMenu === menu.title || path === menu.to ? 'text-black bg-gray-100/80' : 'text-gray-600 hover:text-black'
                }`}
              >
                {menu.title}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === menu.title ? 'rotate-180 text-emerald-600' : 'text-gray-400'}`} />
              </button>
            ))}
            <Link
              to="/pricing"
              className={`text-sm font-medium px-3 py-2 transition-colors ${path === '/pricing' ? 'text-black' : 'text-gray-600 hover:text-black'}`}
            >
              Pricing
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-black px-4 py-2.5 transition-colors">Sign in</Link>
            <Link to="/contact" className="shine-btn bg-[#2d2d2d] text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center hover:bg-black hover:shadow-lg hover:shadow-emerald-900/10 hover:-translate-y-0.5 transition-all duration-300 group">
              Book Your Demo <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-gray-600 hover:text-black transition-colors" aria-label="Toggle menu" aria-expanded={mobileOpen} aria-controls="mobile-menu">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop mega-menu panel */}
      <div
        className={`hidden lg:block absolute left-0 right-0 top-full transition-all duration-300 origin-top ${
          active ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        {active && (
          <div className="max-w-[1600px] mx-auto px-4 lg:px-6 pt-2 pb-4">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.25)] p-6 flex gap-6">
              <div
                className="flex-1 grid gap-1"
                style={{ gridTemplateColumns: `repeat(${active.columns}, minmax(0, 1fr))` }}
              >
                {active.items.map((item) => (
                  <MenuLink key={item.label} item={item} to={active.to} onClick={() => setActiveMenu(null)} />
                ))}
              </div>
              <div className="hidden xl:flex flex-col justify-between w-64 flex-shrink-0 rounded-2xl bg-gradient-to-br from-[#d9f1e6] via-[#e7f0ed] to-[#d8eadd] p-6">
                <div>
                  <p className="text-base font-semibold text-gray-900 mb-1">{active.cta?.title ?? 'See Beddie Hub in action'}</p>
                  <p className="text-sm text-gray-600 leading-snug">Book a personalized walk-through with our team.</p>
                </div>
                <Link to="/contact" className="mt-6 inline-flex items-center text-sm font-semibold text-emerald-800 group">
                  {active.cta?.text ?? 'Book a demo →'}
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-b border-gray-100 max-h-[calc(100vh-5rem)] overflow-y-auto custom-scroll">
          <div className="px-4 py-6 space-y-2">
            {megaMenus.map((menu) => {
              const open = mobileSection === menu.title;
              return (
                <div key={menu.title} className="border-b border-gray-50 pb-2">
                  <button
                    onClick={() => setMobileSection(open ? null : menu.title)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between py-3 text-lg font-semibold text-gray-900"
                  >
                    {menu.title}
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
                  </button>
                  <div className="grid transition-all duration-300 ease-in-out" style={{ gridTemplateRows: open ? '1fr' : '0fr' }}>
                    <div className="overflow-hidden">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pb-3">
                        {menu.items.map((item) => (
                          <MenuLink key={item.label} item={item} to={menu.to} onClick={() => setMobileOpen(false)} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <Link to="/pricing" className="block py-3 text-lg font-semibold text-gray-900">Pricing</Link>
            <div className="pt-4 space-y-3">
              <Link to="/contact" className="block text-center w-full bg-[#2d2d2d] text-white py-4 rounded-full font-medium hover:bg-black transition-colors">Book Your Demo</Link>
              <Link to="/contact" className="block text-center text-sm font-medium text-gray-600 py-2">Sign in</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
