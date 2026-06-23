
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from './router';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-4 lg:px-6 max-w-[1600px] mx-auto">
      <div className="bg-[#2d2d2d] rounded-[40px] p-16 md:p-24 relative overflow-hidden text-white">
        {/* Layered ambient detail */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-500/10 to-transparent" />
        <div className="absolute -top-24 -right-16 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.18] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '28px 28px', maskImage: 'radial-gradient(ellipse 70% 70% at 72% 42%, black, transparent 78%)', WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 72% 42%, black, transparent 78%)' }}
        />

        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 text-sm font-medium text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Get started in minutes
          </div>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-8">
            Ready to Transform Your Hospitality Infrastructure?
          </h2>
          <p className="text-xl text-gray-400 mb-12">Discover how Beddie Hub can revolutionize your operations with a personalized walk-through.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="shine-btn bg-emerald-500 text-white px-8 py-4 rounded-full font-medium flex items-center hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300 group">
              Book Your Demo <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="bg-transparent border border-gray-500 text-white px-8 py-4 rounded-full font-medium flex items-center hover:bg-white/10 hover:border-white/70 transition-all duration-300">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
