import React, { useState } from 'react';
import { Mail, Phone, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { useToast } from '../components/Toast';

const infoCards = [
  { icon: Mail, label: 'Email us', value: 'hello@beddiehub.com' },
  { icon: Phone, label: 'Call us', value: '866.PICK.ITS' },
  { icon: Clock, label: 'Support', value: '24/7 for all customers' },
];

const fieldClass =
  'w-full px-4 py-3.5 rounded-2xl bg-[#f5f5f5] border border-transparent focus:bg-white focus:border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 text-gray-800 placeholder-gray-400 transition-colors';

export const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  const toast = useToast();

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk."
        subtitle="Book a personalized walk-through or ask us anything. We usually reply within one business day."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <Reveal>
        <section className="py-12 md:py-16 px-4 lg:px-6 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3 bg-white border border-gray-100 rounded-[32px] p-8 md:p-12 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.15)]">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-6" />
                  <h2 className="text-3xl font-semibold mb-3">Thanks — we got it!</h2>
                  <p className="text-gray-600 max-w-sm">Our team will be in touch shortly. In the meantime, feel free to explore the platform.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                    toast("Message sent — we'll be in touch within one business day!");
                  }}
                  className="space-y-5"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Send us a message</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full name</label>
                      <input id="name" required placeholder="Jane Doe" className={fieldClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Work email</label>
                      <input id="email" type="email" required placeholder="jane@business.com" className={fieldClass} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Business name</label>
                    <input id="company" placeholder="Azul Surf House" className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                    <textarea id="message" required rows={4} placeholder="Tell us about your operation…" className={`${fieldClass} resize-none`} />
                  </div>
                  <button
                    type="submit"
                    className="shine-btn w-full sm:w-auto bg-[#2d2d2d] text-white px-8 py-4 rounded-full font-medium flex items-center justify-center hover:bg-black hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    Send message <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-4">
              {infoCards.map((card) => (
                <div key={card.label} className="bg-[#f5f5f5] rounded-3xl p-7 flex items-center gap-5 hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300">
                  <span className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <card.icon className="w-6 h-6" />
                  </span>
                  <div>
                    <p className="text-sm text-gray-500">{card.label}</p>
                    <p className="text-lg font-semibold text-gray-900">{card.value}</p>
                  </div>
                </div>
              ))}
              <div className="rounded-3xl p-7 bg-gradient-to-br from-[#d9f1e6] via-[#e7f0ed] to-[#d8eadd]">
                <div className="flex items-center gap-2 text-emerald-700 font-semibold mb-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  All systems operational
                </div>
                <p className="text-sm text-gray-600">Join 500+ properties already running on Beddie Hub.</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
};
