
import React from 'react';
import { ChevronRight, Smile, CreditCard, Users, BedDouble, Wrench, UtensilsCrossed, type LucideIcon } from 'lucide-react';
import { Link } from './router';

interface Service {
  title: string;
  content: string;
  tags: string[];
  icon: LucideIcon;
}

const services: Service[] = [
  {
    icon: Smile,
    title: 'Guest Services & Experience',
    content: 'Deliver personalized experiences across the entire guest journey — preferences, special requests, loyalty, and memorable moments that drive repeat business.',
    tags: ['Personalized Journeys', 'Guest CRM', 'Loyalty'],
  },
  {
    icon: CreditCard,
    title: 'Unified Payment & Billing',
    content: 'Process payments securely across channels and currencies. Automate invoicing, manage deposits and refunds, and keep full financial transparency.',
    tags: ['Multi-currency', 'Automated Invoicing', 'Secure'],
  },
  {
    icon: Users,
    title: 'Workforce & HR Admin',
    content: 'Streamline scheduling, time tracking, payroll and performance reviews. Optimize labor costs while keeping staffing levels right.',
    tags: ['Scheduling', 'Payroll', 'Time Tracking'],
  },
  {
    icon: BedDouble,
    title: 'Housekeeping Coordination',
    content: 'Coordinate cleaning schedules, track room status in real time, assign tasks efficiently, and uphold quality standards everywhere.',
    tags: ['Real-time Status', 'Task Assignment', 'Quality'],
  },
  {
    icon: Wrench,
    title: 'Facilities & Maintenance',
    content: 'Track work orders, schedule preventive maintenance, manage vendor relationships, and coordinate repairs before they become problems.',
    tags: ['Preventive', 'Work Orders', 'Vendor Portal'],
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant & F&B Operations',
    content: 'Manage reservations, process orders, coordinate the kitchen, track inventory, and optimize menu performance in one place.',
    tags: ['POS', 'Kitchen Display', 'Inventory'],
  },
];

export const ServiceAccordion: React.FC = () => {
  return (
    <section className="py-20 md:py-24 px-4 lg:px-6 max-w-[1600px] mx-auto">
      <div className="text-center mb-14 md:mb-16 max-w-3xl mx-auto">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 uppercase tracking-[0.2em] mb-4">
          <span className="w-6 h-px bg-emerald-500" /> Services
        </p>
        <h2 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">Tailor-made services for every part of your operation</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            to="/platform"
            key={service.title}
            className="group relative bg-[#f5f5f5] rounded-3xl p-8 flex flex-col hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-[0_28px_55px_-28px_rgba(0,0,0,0.25)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

            <div className="w-14 h-14 rounded-2xl bg-white text-emerald-600 flex items-center justify-center shadow-sm mb-6 group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
              <service.icon className="w-7 h-7" />
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-800 transition-colors">{service.title}</h3>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-6">{service.content}</p>

            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              {service.tags.map((tag) => (
                <span key={tag} className="bg-white border border-gray-100 px-3 py-1.5 rounded-full text-xs font-medium text-gray-500 group-hover:border-emerald-100 group-hover:text-emerald-700 transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            <span className="inline-flex items-center text-sm font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
              Learn more <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};
