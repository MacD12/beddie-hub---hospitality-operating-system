import type { Metadata } from 'next';
import { About } from '@/views/About';

export const metadata: Metadata = {
  title: 'About',
  description: 'We are building the operating system for unforgettable experiences. Meet the team behind Beddie Hub.',
  alternates: { canonical: '/about' },
};

export default function Page() {
  return <About />;
}
