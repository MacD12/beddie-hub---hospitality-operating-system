
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { builtForItems } from './siteData';
import { Link } from './router';

export const Industries: React.FC = () => {
  return (
    <section className="py-20 md:py-24 px-4 lg:px-6 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 uppercase tracking-[0.2em] mb-4">
            <span className="w-6 h-px bg-emerald-500" /> Built for
          </p>
          <h2 className="text-5xl md:text-7xl font-semibold mb-6 leading-[1.05] tracking-tight">One platform for every <br className="hidden md:block" /> kind of experience.</h2>
          <p className="text-gray-500 text-lg max-w-lg leading-relaxed">From surf camps to mountain expeditions — Beddie Hub adapts to how you run, host, and grow.</p>
        </div>
        <Link to="/solutions" className="shine-btn w-full sm:w-auto bg-[#2d2d2d] text-white px-8 py-4 rounded-full font-medium flex items-center justify-center hover:bg-black hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-0.5 transition-all duration-300 group">
          View All Solutions <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
        {builtForItems.map((item, idx) => (
          <Link
            to="/solutions"
            key={item.label}
            className="relative bg-[#e9e8e2] rounded-3xl p-7 md:p-8 min-h-[200px] flex flex-col justify-between hover:bg-white hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.25)] border border-transparent hover:border-gray-100 transition-all duration-500 cursor-pointer group overflow-hidden"
          >
            <span className="absolute top-7 right-7 text-xs font-semibold text-gray-400/70 tabular-nums">0{idx + 1}</span>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            <span className="w-14 h-14 rounded-2xl bg-white text-emerald-600 flex items-center justify-center shadow-sm group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
              <item.icon className="w-7 h-7" />
            </span>
            <div className="mt-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-1 group-hover:text-emerald-800 transition-colors">{item.label}</h3>
              <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
