import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { FeatureGrid } from '../components/FeatureGrid';
import { Reveal } from '../components/Reveal';
import { Standards } from '../components/Standards';
import { Testimonials } from '../components/Testimonials';
import { FinalCTA } from '../components/FinalCTA';
import { platformItems, featureItems } from '../components/siteData';

export const Platform: React.FC = () => (
  <>
    <PageHeader
      eyebrow="Platform"
      title={<>Everything you need to <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">run and grow</span>.</>}
      subtitle="One connected platform — PMS, payments, distribution, marketing and intelligence — so every part of your operation works as one."
      crumbs={[{ label: 'Home', to: '/' }, { label: 'Platform' }]}
    />

    <Reveal>
      <section className="py-12 md:py-16 px-4 lg:px-6 max-w-[1600px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">Core platform</h2>
        <FeatureGrid items={platformItems} />
      </section>
    </Reveal>

    <Reveal>
      <section className="py-12 md:py-16 px-4 lg:px-6 max-w-[1600px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">Built-in features</h2>
        <FeatureGrid items={featureItems} columns="md:grid-cols-3 lg:grid-cols-4" />
      </section>
    </Reveal>

    <Standards />
    <Reveal><Testimonials /></Reveal>
    <Reveal><FinalCTA /></Reveal>
  </>
);
