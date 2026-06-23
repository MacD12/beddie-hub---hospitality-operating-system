import type { Metadata } from 'next';
import { Home } from '@/views/Home';

export const metadata: Metadata = {
  title: { absolute: 'Beddle Hub | Hospitality Operating System' },
  description:
    'The complete hospitality operating system for retreats, camps, and outdoor experiences — bookings, payments, operations, and growth in one platform.',
  alternates: { canonical: '/' },
};

export default function Page() {
  return <Home />;
}
