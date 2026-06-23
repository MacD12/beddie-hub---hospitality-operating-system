import React from 'react';
import { Compass, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { Counter } from '../components/Counter';
import { FinalCTA } from '../components/FinalCTA';

const values = [
  { icon: Compass, title: 'Operator-first', desc: 'Every decision starts with the people running the experience, not a spreadsheet.' },
  { icon: Heart, title: 'Hospitality at heart', desc: 'We sweat the small details so your guests feel genuinely cared for.' },
  { icon: ShieldCheck, title: 'Trust by default', desc: 'Enterprise-grade security and reliability, no matter your size.' },
  { icon: Sparkles, title: 'Relentlessly simple', desc: 'Powerful underneath, effortless on the surface. Complexity is our job, not yours.' },
];

const stats = [
  { num: 500, suffix: '+', label: 'Properties' },
  { num: 40, suffix: '+', label: 'Countries' },
  { num: 2.4, decimals: 1, suffix: 'M+', label: 'Guests served' },
  { num: 99.9, decimals: 1, suffix: '%', label: 'Uptime' },
];

export const About: React.FC = () => (
  <>
    <PageHeader
      eyebrow="About"
      title={<>We're building the operating system for <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">unforgettable experiences</span>.</>}
      subtitle="Beddle Hub started with a simple belief: the people who create the world's best stays and adventures deserve software that works as hard as they do."
      crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
    />

    <Reveal>
      <section className="py-12 md:py-20 px-4 lg:px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Our story</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-5">
          We met running camps and retreats — juggling spreadsheets, half a dozen disconnected tools, and late nights reconciling bookings. The technology meant to help was getting in the way.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          So we built the platform we wished we'd had: one connected system for bookings, payments, operations, and growth — designed for the unique, hands-on world of hospitality and outdoor experiences. Today it powers hundreds of operators across the globe.
        </p>
      </section>
    </Reveal>

    <Reveal>
      <section className="py-12 px-4 lg:px-6 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 rounded-3xl overflow-hidden border border-gray-100">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-8 text-center md:text-left">
              <p className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                <Counter value={s.num} decimals={s.decimals} suffix={s.suffix} />
              </p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>

    <Reveal>
      <section className="py-12 md:py-20 px-4 lg:px-6 max-w-[1600px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">What we value</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="group bg-[#f5f5f5] rounded-3xl p-8 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1.5 transition-all duration-500">
              <span className="w-14 h-14 rounded-2xl bg-white text-emerald-600 flex items-center justify-center shadow-sm mb-6 group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                <v.icon className="w-7 h-7" />
              </span>
              <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>

    <Reveal><FinalCTA /></Reveal>
  </>
);
