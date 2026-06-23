import type { Metadata } from 'next';
import { Pricing } from '@/views/Pricing';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, commission-free pricing that scales with you. Start free, upgrade when you are ready.',
  alternates: { canonical: '/pricing' },
};

export default function Page() {
  return <Pricing />;
}
