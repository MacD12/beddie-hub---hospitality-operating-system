
import React from 'react';
import { ArrowRight, Play, Sparkles, TrendingUp, Star, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Counter } from './Counter';
import { Link } from './router';

export const Hero: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 px-4 lg:px-6 max-w-[1600px] mx-auto">
      {/* Eyebrow badge */}
      <div className="hero-fade-up inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-full pl-2 pr-4 py-1.5 mb-7 md:mb-9" style={{ animationDelay: '0.05s' }}>
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-600 text-white">
          <Sparkles className="w-3.5 h-3.5" />
        </span>
        <span className="text-sm font-medium tracking-tight">The complete Hospitality Operating System</span>
      </div>

      <h1 className="hero-fade-up text-5xl md:text-7xl font-semibold tracking-tight mb-10 md:mb-12 leading-[1.1]" style={{ animationDelay: '0.15s' }}>
        Operate Smarter with <br className="hidden md:block" />
        <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Hospitality Excellence.
        </span>
      </h1>

      <div className="hero-fade-up relative rounded-[32px] md:rounded-[40px] overflow-hidden bg-gradient-to-br from-[#d9f1e6] via-[#e7f0ed] to-[#d8eadd] p-8 md:p-24 min-h-[450px] md:min-h-[560px] flex flex-col justify-center" style={{ animationDelay: '0.3s' }}>
        {/* Layered abstract decoration */}
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-emerald-200/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-20 w-[360px] h-[360px] rounded-full bg-teal-200/20 blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 p-8 md:p-12 opacity-30 md:opacity-40 pointer-events-none" aria-hidden="true">
          <svg width="150" height="150" className="md:w-[220px] md:h-[220px]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="100" stroke="#8ABF9F" strokeOpacity="0.3" strokeWidth="1" />
            <circle cx="100" cy="100" r="80" stroke="#8ABF9F" strokeOpacity="0.2" strokeWidth="1" />
            <circle cx="100" cy="100" r="60" stroke="#8ABF9F" strokeOpacity="0.15" strokeWidth="1" />
          </svg>
        </div>
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.4] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#8ABF9F 1px, transparent 1px)', backgroundSize: '28px 28px', maskImage: 'radial-gradient(ellipse 60% 60% at 30% 50%, black, transparent)', WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 30% 50%, black, transparent)' }}
        />

        <div className="max-w-2xl relative z-10">
          <p className="text-2xl md:text-4xl leading-tight text-gray-800 font-normal mb-9 md:mb-11">
            Transform your property management with our comprehensive platform designed to streamline operations, enhance guest experiences, and drive sustainable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-10 md:mb-12">
            <Link to="/contact" className="shine-btn w-full sm:w-auto bg-[#2d2d2d] text-white px-8 py-4 rounded-full font-medium flex items-center justify-center hover:bg-black hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-0.5 transition-all duration-300 group shadow-sm">
              Get Started Today <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/resources" className="text-gray-800 font-medium flex items-center hover:text-emerald-700 group px-2 transition-colors">
              <span className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center mr-3 group-hover:bg-white group-hover:border-emerald-600 group-hover:text-emerald-700 transition-colors">
                <Play className="w-4 h-4 fill-current" />
              </span>
              Watch Demo
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
            <div className="flex -space-x-3">
              {['#10b981', '#0d9488', '#34d399', '#059669'].map((c, i) => (
                <span key={i} className="w-10 h-10 rounded-full border-2 border-white/90 shadow-sm flex items-center justify-center text-white text-xs font-semibold" style={{ backgroundColor: c }}>
                  {['JD', 'AK', 'MR', 'SL'][i]}
                </span>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="ml-1.5 text-sm font-semibold text-gray-800">4.9/5</span>
              </div>
              <p className="text-sm text-gray-600">Trusted by <span className="font-semibold text-gray-900">500+ properties</span> worldwide</p>
            </div>
          </div>
        </div>

        {/* Floating live-operations preview — fills the empty right space */}
        <div className="hidden xl:block absolute top-1/2 right-16 -translate-y-1/2 w-[320px] z-10 hero-float" aria-hidden="true">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-white/60 shadow-[0_24px_60px_-20px_rgba(13,80,60,0.35)] p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-sm font-semibold text-gray-900">Live Operations</span>
              </div>
              <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">Today</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-emerald-50/70 rounded-2xl p-3">
                <p className="text-xs text-gray-500 mb-1">Occupancy</p>
                <p className="text-xl font-semibold text-gray-900">94%</p>
                <p className="flex items-center text-[11px] font-medium text-emerald-600"><TrendingUp className="w-3 h-3 mr-1" /> +8.2%</p>
              </div>
              <div className="bg-teal-50/70 rounded-2xl p-3">
                <p className="text-xs text-gray-500 mb-1">Revenue</p>
                <p className="text-xl font-semibold text-gray-900">$48k</p>
                <p className="flex items-center text-[11px] font-medium text-emerald-600"><TrendingUp className="w-3 h-3 mr-1" /> +12%</p>
              </div>
            </div>

            {/* Mini bar chart */}
            <div className="flex items-end justify-between gap-1.5 h-20 mb-4">
              {[45, 62, 50, 78, 70, 90, 84].map((h, i) => (
                <div
                  key={i}
                  className="hero-bar flex-1 rounded-t-md bg-gradient-to-t from-emerald-500 to-teal-400"
                  style={{ height: `${h}%`, animationDelay: `${0.6 + i * 0.08}s` }}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-600 border-t border-gray-100 pt-3">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>All systems operational</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-gray-400" />
            </div>
          </div>
        </div>

      </div>

      {/* Stats strip */}
      <div className="hero-fade-up grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 rounded-3xl overflow-hidden mt-6 md:mt-8 border border-gray-100" style={{ animationDelay: '0.45s' }}>
        {[
          { num: 500, suffix: '+', label: 'Properties managed' },
          { num: 99.9, decimals: 1, suffix: '%', label: 'Platform uptime' },
          { num: 2.4, decimals: 1, suffix: 'M+', label: 'Guests served' },
          { text: '24/7', label: 'Expert support' },
        ].map((s, i) => (
          <div key={i} className="bg-white px-6 py-7 md:py-8 text-center md:text-left hover:bg-emerald-50/40 transition-colors">
            <p className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              {s.text ? s.text : <Counter value={s.num!} decimals={s.decimals} suffix={s.suffix} />}
            </p>
            <p className="text-sm text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
