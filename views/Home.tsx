import React from 'react';
import { Hero } from '../components/Hero';
import { Industries } from '../components/Industries';
import { Roadblocks } from '../components/Roadblocks';
import { ProcessTabs } from '../components/ProcessTabs';
import { Standards } from '../components/Standards';
import { ServiceAccordion } from '../components/ServiceAccordion';
import { Testimonials } from '../components/Testimonials';
import { FinalCTA } from '../components/FinalCTA';
import { Reveal } from '../components/Reveal';

export const Home: React.FC = () => (
  <>
    <Hero />
    <Standards />
    <Reveal><Industries /></Reveal>
    <Reveal><ProcessTabs /></Reveal>
    <Reveal><Roadblocks /></Reveal>
    <Reveal><ServiceAccordion /></Reveal>
    <Reveal><Testimonials /></Reveal>
    <Reveal><FinalCTA /></Reveal>
  </>
);
