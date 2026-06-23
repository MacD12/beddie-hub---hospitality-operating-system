import type { Metadata } from 'next';
import { Contact } from '@/views/Contact';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a personalized walk-through or ask us anything. We usually reply within one business day.',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return <Contact />;
}
