import type { Metadata } from 'next';
import { Careers } from '@/views/Careers';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Help shape the future of hospitality. Remote-first roles at Beddle Hub.',
  alternates: { canonical: '/careers' },
};

export default function Page() {
  return <Careers />;
}
