import React from 'react';
import { ArrowRight, Globe2, HeartPulse, GraduationCap, Plane, Coins, Users } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { FinalCTA } from '../components/FinalCTA';
import { Link } from '../components/router';

const perks = [
  { icon: Globe2, title: 'Remote-first', desc: 'Work from anywhere, with quarterly team gatherings in beautiful places.' },
  { icon: HeartPulse, title: 'Health & wellness', desc: 'Comprehensive coverage and a monthly wellness stipend.' },
  { icon: GraduationCap, title: 'Learning budget', desc: 'Annual budget for courses, books, and conferences.' },
  { icon: Plane, title: 'Experience days', desc: 'Paid time to go live the experiences our customers create.' },
  { icon: Coins, title: 'Real ownership', desc: 'Meaningful equity — when we win, you win.' },
  { icon: Users, title: 'Small, senior team', desc: 'Low ego, high trust, and real impact from day one.' },
];

const roles = [
  { title: 'Senior Product Engineer', dept: 'Engineering', location: 'Remote', type: 'Full-time' },
  { title: 'Product Designer', dept: 'Design', location: 'Remote', type: 'Full-time' },
  { title: 'Customer Success Manager', dept: 'Success', location: 'Remote (EU)', type: 'Full-time' },
  { title: 'Growth Marketer', dept: 'Marketing', location: 'Remote', type: 'Full-time' },
  { title: 'Solutions Consultant', dept: 'Sales', location: 'Remote (Americas)', type: 'Full-time' },
];

export const Careers: React.FC = () => (
  <>
    <PageHeader
      eyebrow="Careers"
      title="Help shape the future of hospitality."
      subtitle="We're a small, senior, remote-first team building software that operators genuinely love. Come build it with us."
      crumbs={[{ label: 'Home', to: '/' }, { label: 'Careers' }]}
    />

    <Reveal>
      <section className="py-12 md:py-16 px-4 lg:px-6 max-w-[1600px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">Why you'll love it here</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((p) => (
            <div key={p.title} className="group bg-[#f5f5f5] rounded-3xl p-8 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1.5 transition-all duration-500">
              <span className="w-14 h-14 rounded-2xl bg-white text-emerald-600 flex items-center justify-center shadow-sm mb-6 group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                <p.icon className="w-7 h-7" />
              </span>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>

    <Reveal>
      <section className="py-12 md:py-20 px-4 lg:px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">Open roles</h2>
        <div className="space-y-4">
          {roles.map((role) => (
            <Link
              to="/contact"
              key={role.title}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#f5f5f5] rounded-3xl p-6 md:p-8 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-semibold group-hover:text-emerald-800 transition-colors">{role.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{role.dept} · {role.location} · {role.type}</p>
              </div>
              <span className="inline-flex items-center font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors flex-shrink-0">
                Apply <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
        <p className="text-gray-500 mt-8">
          Don't see your role?{' '}
          <Link to="/contact" className="text-emerald-700 font-semibold hover:underline">Tell us why you'd be a great fit →</Link>
        </p>
      </section>
    </Reveal>

    <Reveal><FinalCTA /></Reveal>
  </>
);
