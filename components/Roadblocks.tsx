import React from 'react';
import { ArrowRight, Cloud, Building2, BarChart3, Workflow, type LucideIcon } from 'lucide-react';
import { Counter } from './Counter';
import { Link } from './router';

interface Challenge {
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
}

const challenges: Challenge[] = [
  {
    icon: Cloud,
    title: 'Cloud-centric IT infrastructure',
    desc: 'Always-on, auto-updating infrastructure that scales with demand — no servers to babysit, no downtime to fear.',
    tags: ['99.95% Uptime', 'Auto Updates', 'Enterprise Grade'],
  },
  {
    icon: Building2,
    title: 'Centralized multi-property management',
    desc: 'Run every location from one dashboard with shared standards, synced branding, and consistent operations.',
    tags: ['Unified Dashboard', 'Brand Sync', 'Standardized Ops'],
  },
  {
    icon: BarChart3,
    title: 'Intelligent analytics & reporting',
    desc: 'Turn raw activity into decisions with real-time financials, demand forecasting, and growth metrics.',
    tags: ['Financial Insights', 'Demand Forecast', 'Growth Metrics'],
  },
  {
    icon: Workflow,
    title: 'Complete system integration',
    desc: 'Connect every tool you already use into one seamless flow that scales infinitely across properties and countries.',
    tags: ['Real-time Sync', 'Infinite Scale', '120+ Properties', '40+ Countries'],
  },
];

const stats = [
  { num: 120, suffix: '+', label: 'Properties' },
  { num: 40, suffix: '+', label: 'Countries' },
];

export const Roadblocks: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 lg:px-6 max-w-[1600px] mx-auto">
      <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-16 md:mb-20">
        Secure, Streamline, and Succeed <br className="hidden md:block" /> with Confidence.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start border-t border-gray-100 pt-16 md:pt-20">
        {/* Left Column: Call to Action */}
        <div className="lg:sticky lg:top-32 space-y-8">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 uppercase tracking-[0.2em]">
            <span className="w-6 h-px bg-emerald-500" /> Why Beddle Hub
          </p>
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15] text-gray-900">
            Eliminate tedium with <span className="bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">scalable, secure</span> solutions.
          </h3>
          <p className="text-lg text-gray-500 leading-relaxed max-w-md">
            Everything you need to run a modern operation — secure by default, built to scale, and refreshingly simple to use.
          </p>
          <Link to="/platform" className="shine-btn bg-[#2d2d2d] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-black hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-0.5 transition-all duration-300 group flex items-center justify-center w-full sm:w-auto">
            Explore Platform <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100 max-w-sm">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-semibold tracking-tight text-gray-900">
                  <Counter value={s.num} suffix={s.suffix} />
                </p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Cards */}
        <div className="space-y-5">
          {challenges.map((challenge, idx) => {
            const featured = idx === challenges.length - 1;
            return (
              <div
                key={idx}
                className={`group p-8 md:p-9 rounded-[28px] transition-all duration-500 border ${
                  featured
                    ? 'bg-white shadow-2xl shadow-gray-200/60 border-gray-100 ring-1 ring-emerald-500/15 hover:shadow-emerald-200/50'
                    : 'bg-gray-50 border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl hover:shadow-gray-200/40 hover:-translate-y-1'
                }`}
              >
                <div className="flex items-start gap-5">
                  <span
                    className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      featured
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white text-emerald-600 shadow-sm group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-105'
                    }`}
                  >
                    <challenge.icon className="w-7 h-7" />
                  </span>

                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug group-hover:text-emerald-800 transition-colors">
                        {challenge.title}
                      </h4>
                      <span className="text-sm font-semibold text-gray-300 tabular-nums flex-shrink-0">0{idx + 1}</span>
                    </div>
                    <p className="text-[15px] text-gray-600 leading-relaxed mt-2 mb-5">{challenge.desc}</p>

                    <div className="flex flex-wrap gap-2">
                      {challenge.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full text-xs font-medium text-gray-600 border border-gray-100 group-hover:border-emerald-100 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
