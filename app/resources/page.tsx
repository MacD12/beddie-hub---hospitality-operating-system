import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Resources } from '@/views/Resources';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Playbooks, product updates, customer stories, and webinars to help you run a better operation.',
  alternates: { canonical: '/resources' },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Resources />
    </Suspense>
  );
}
