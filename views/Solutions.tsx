import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { FeatureGrid } from '../components/FeatureGrid';
import { Reveal } from '../components/Reveal';
import { ProcessTabs } from '../components/ProcessTabs';
import { Testimonials } from '../components/Testimonials';
import { FinalCTA } from '../components/FinalCTA';
import { builtForItems } from '../components/siteData';

export const Solutions: React.FC = () => (
  <>
    <PageHeader
      eyebrow="Built for"
      title="One platform for every kind of experience."
      subtitle="From surf camps to mountain expeditions, retreats to wave parks — Beddle Hub adapts to how you host, run, and grow."
      crumbs={[{ label: 'Home', to: '/' }, { label: 'Solutions' }]}
    />

    <Reveal>
      <section className="py-12 md:py-16 px-4 lg:px-6 max-w-[1600px] mx-auto">
        <FeatureGrid items={builtForItems} />
      </section>
    </Reveal>

    <Reveal><ProcessTabs /></Reveal>
    <Reveal><Testimonials /></Reveal>
    <Reveal><FinalCTA /></Reveal>
  </>
);
