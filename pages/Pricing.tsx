import React, { useState } from 'react';
import { Check, ChevronDown, ArrowRight } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { FinalCTA } from '../components/FinalCTA';
import { Link } from '../components/router';

const tiers = [
  {
    name: 'Starter',
    price: '$49',
    cadence: '/mo',
    desc: 'For single-site operators getting organized.',
    features: ['Booking engine & widget', 'Up to 50 rooms / spots', 'Payments & invoicing', 'Guest CRM', 'Email support'],
    popular: false,
  },
  {
    name: 'Growth',
    price: '$149',
    cadence: '/mo',
    desc: 'For growing operations that want to scale direct bookings.',
    features: ['Everything in Starter', 'Channel manager', 'Revenue intelligence', 'Automated marketing', 'Digital waivers & packages', 'Priority support'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: '',
    desc: 'For multi-property groups and brands.',
    features: ['Everything in Growth', 'Multi-property dashboard', 'API & custom integrations', 'Dedicated success manager', 'SSO & advanced security', '24/7 support'],
    popular: false,
  },
];

const faqs = [
  { q: 'Is there a free trial?', a: 'Yes — every plan starts with a 14-day free trial. No credit card required to get going.' },
  { q: 'Can I switch plans later?', a: 'Absolutely. Upgrade or downgrade at any time; changes are prorated automatically.' },
  { q: 'Do you charge booking commissions?', a: 'No. Direct bookings through Beddie Hub are commission-free — you keep your revenue.' },
  { q: 'What support is included?', a: 'All plans include email support; Growth adds priority support and Enterprise adds 24/7 with a dedicated manager.' },
];

export const Pricing: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple pricing that scales with you."
        subtitle="Commission-free direct bookings on every plan. Start free, upgrade when you're ready."
      />

      <Reveal>
        <section className="py-12 md:py-16 px-4 lg:px-6 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-[32px] p-8 md:p-10 flex flex-col transition-all duration-500 ${
                  tier.popular
                    ? 'bg-[#2d2d2d] text-white shadow-2xl shadow-gray-300/50 lg:-translate-y-4'
                    : 'bg-[#f5f5f5] hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl hover:shadow-gray-200/50'
                }`}
              >
                {tier.popular && (
                  <span className="absolute top-8 right-8 text-xs font-bold uppercase tracking-wide bg-emerald-500 text-white px-3 py-1 rounded-full">Most popular</span>
                )}
                <h3 className={`text-2xl font-semibold mb-2 ${tier.popular ? 'text-white' : 'text-gray-900'}`}>{tier.name}</h3>
                <p className={`text-sm mb-6 ${tier.popular ? 'text-gray-300' : 'text-gray-500'}`}>{tier.desc}</p>
                <div className="flex items-end gap-1 mb-8">
                  <span className="text-5xl font-semibold tracking-tight">{tier.price}</span>
                  {tier.cadence && <span className={`mb-1.5 ${tier.popular ? 'text-gray-400' : 'text-gray-500'}`}>{tier.cadence}</span>}
                </div>

                <ul className="space-y-3 mb-10">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${tier.popular ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`}>
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className={`text-[15px] ${tier.popular ? 'text-gray-200' : 'text-gray-700'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`shine-btn mt-auto w-full px-6 py-4 rounded-full font-medium flex items-center justify-center transition-all duration-300 group ${
                    tier.popular
                      ? 'bg-emerald-500 text-white hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/30'
                      : 'bg-[#2d2d2d] text-white hover:bg-black hover:-translate-y-0.5'
                  }`}
                >
                  {tier.price === 'Custom' ? 'Talk to sales' : 'Start free trial'}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-12 md:py-20 px-4 lg:px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-10">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q} className="bg-[#f5f5f5] rounded-3xl overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex justify-between items-center gap-4 p-6 md:p-7 text-left hover:bg-gray-100/60 transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-900">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 text-emerald-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className="grid transition-all duration-500 ease-in-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                    <div className="overflow-hidden">
                      <p className="px-6 md:px-7 pb-7 text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </Reveal>

      <Reveal><FinalCTA /></Reveal>
    </>
  );
};
