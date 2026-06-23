import type { Metadata } from 'next';
import { Platform } from '@/views/Platform';

export const metadata: Metadata = {
  title: 'Platform',
  description: 'One connected platform — PMS, payments, channel manager, booking engine, marketing, and revenue intelligence.',
  alternates: { canonical: '/platform' },
};

export default function Page() {
  return <Platform />;
}
