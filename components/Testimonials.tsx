
import React from 'react';
import { Quote, BarChart3, Users, Zap, Star, ArrowRight } from 'lucide-react';
import { Counter } from './Counter';
import { Link } from './router';

const metrics = [
  { label: 'Reduction in admin time', num: 35, icon: Zap },
  { label: 'Improvement in staff productivity', num: 28, icon: Users },
  { label: 'Faster check-in/out processes', num: 42, icon: BarChart3 },
  { label: 'Increase in satisfaction scores', num: 23, icon: Star },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 lg:px-6 max-w-[1600px] mx-auto">
      <div className="mb-16">
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-4">Creating Extraordinary Value</h2>
        <p className="text-gray-500 max-w-3xl text-xl font-light">Transforming hospitality operations globally with intelligent automation.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-8">
          <div className="bg-[#e9ece3] rounded-[32px] p-12 relative overflow-hidden group">
            <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-emerald-200/30 blur-3xl pointer-events-none" />
            <Quote className="absolute -top-4 right-8 w-24 h-24 text-white opacity-20 rotate-180 transition-transform duration-500 group-hover:scale-110" />
            <div className="flex items-center gap-1 text-amber-500 mb-6 relative z-10">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-2xl leading-relaxed text-gray-800 font-medium mb-8 relative z-10">
              "Beddie Hub empowers businesses to achieve operational excellence while simultaneously elevating guest satisfaction. Our platform eliminates tedious manual processes and provides complete real-time visibility."
            </p>
            <div className="relative z-10">
              <p className="font-bold text-gray-900 text-lg">Average Results Achieved</p>
              <p className="text-sm text-gray-500">Based on reports from the first 90 days of deployment.</p>
            </div>
          </div>
          <Link to={`/resources?type=${encodeURIComponent('Customer Story')}`} className="text-emerald-700 font-bold flex items-center hover:text-emerald-800 group transition-colors">
            Read Our Case Studies <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {metrics.map((m, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-100 rounded-[24px] p-8 text-center hover:bg-white hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-100/40 hover:-translate-y-1.5 transition-all duration-500 group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
                <m.icon className="w-7 h-7 text-emerald-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2"><Counter value={m.num} suffix="%" /></div>
              <p className="text-sm text-gray-500 font-medium leading-tight">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
