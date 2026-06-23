import type { Metadata } from 'next';
import { Solutions } from '@/views/Solutions';

export const metadata: Metadata = {
  title: 'Built for',
  description: 'Built for retreats, surf camps, mountain guiding, glamping, wave parks, and more. One platform for every kind of experience.',
  alternates: { canonical: '/solutions' },
};

export default function Page() {
  return <Solutions />;
}
