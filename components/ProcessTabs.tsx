
import React from 'react';
import { Workflow, Cpu, Users, ArrowRight } from 'lucide-react';
import { Link } from './router';

const pillars = [
  {
    icon: Workflow,
    title: 'Process',
    content: 'We align with industry best practices to ensure consistently high-quality service and response — built on transparency, speed, and reliability.',
    highlight: 'Proven methodology',
  },
  {
    icon: Cpu,
    title: 'Platform',
    content: 'Cutting-edge infrastructure that scales with you, keeping your operation ahead of the curve with effectively zero downtime.',
    highlight: '99.95% uptime',
  },
  {
    icon: Users,
    title: 'People',
    content: 'Experts dedicated to your success. Our team acts as an extension of yours — 24/7 support and strategic consulting whenever you need it.',
    highlight: '24/7 expert support',
  },
];

export const ProcessTabs: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 lg:px-6 max-w-[1600px] mx-auto">
      <div className="mb-14 md:mb-20 max-w-4xl">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 uppercase tracking-[0.2em] mb-4">
          <span className="w-6 h-px bg-emerald-500" /> Why choose us
        </p>
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-[1.05]">
          Process. Platform. People.
        </h2>
        <p className="text-2xl md:text-3xl text-gray-400 font-light leading-tight">
          From guest services to management, we deliver excellence end to end.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((p, idx) => (
          <div
            key={p.title}
            className="group relative bg-[#f0efea] rounded-[32px] p-10 md:p-12 flex flex-col min-h-[380px] hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            <span className="absolute top-10 right-10 text-5xl font-semibold text-gray-300/50 tabular-nums leading-none">0{idx + 1}</span>

            <div className="w-16 h-16 rounded-2xl bg-white text-emerald-600 flex items-center justify-center shadow-sm mb-8 group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
              <p.icon className="w-8 h-8" />
            </div>

            <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">{p.title}</h3>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-auto">{p.content}</p>

            <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              {p.highlight}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link to="/platform" className="shine-btn bg-[#2d2d2d] text-white px-8 py-4 rounded-full font-medium flex items-center hover:bg-black hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-0.5 transition-all duration-300 group">
          See how it works <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};
