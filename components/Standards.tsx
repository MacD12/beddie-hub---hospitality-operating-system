
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const certifications = ['ISO 27001', 'PCI DSS', 'SOC 2 Type II', 'GDPR Ready', 'HIPAA', 'TRUSTe', 'CCPA', 'Cyber Essentials'];

export const Standards: React.FC = () => {
  return (
    <section className="py-12 md:py-16 border-y border-gray-100 bg-[#f9f9f9] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
        <p className="flex items-center justify-center gap-2 text-center text-sm font-medium text-gray-500 mb-8">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          Enterprise-grade security &amp; compliance, trusted worldwide
        </p>

        {/* Screen-reader list (the visual marquee below is decorative/duplicated) */}
        <ul className="sr-only">
          {certifications.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        <div className="marquee-group marquee-mask relative flex overflow-hidden" aria-hidden="true">
          <div className="animate-marquee flex flex-shrink-0 items-center">
            {[...certifications, ...certifications].map((name, i) => (
              <span
                key={i}
                className="mx-8 md:mx-12 text-xl md:text-2xl font-bold text-gray-300 hover:text-emerald-600 transition-colors duration-300 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
