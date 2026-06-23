import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { FloatingActions } from '@/components/FloatingActions';
import { ToastProvider } from '@/components/Toast';
import { CookieBar } from '@/components/CookieBar';
import { PageTransition } from '@/components/PageTransition';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

const DESCRIPTION =
  'The complete hospitality operating system for retreats, camps, and outdoor experiences — bookings, payments, operations, and growth in one platform.';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.beddlehub.com'),
  title: {
    default: 'Beddle Hub | Hospitality Operating System',
    template: '%s | Beddle Hub',
  },
  description: DESCRIPTION,
  applicationName: 'Beddle Hub',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Beddle Hub',
    title: 'Beddle Hub | Hospitality Operating System',
    description: DESCRIPTION,
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beddle Hub | Hospitality Operating System',
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: '#10b981',
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Beddle Hub',
      description: 'The hospitality operating system for retreats, camps, and outdoor experiences worldwide.',
      url: 'https://www.beddlehub.com/',
      sameAs: ['https://twitter.com/beddlehub', 'https://www.linkedin.com/company/beddlehub'],
    },
    { '@type': 'WebSite', name: 'Beddle Hub', url: 'https://www.beddlehub.com/' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <ToastProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:bg-[#2d2d2d] focus:text-white focus:px-5 focus:py-3 focus:rounded-full focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Skip to content
          </a>

          <ScrollProgress />
          <Navbar />

          <main id="main">
            <PageTransition>{children}</PageTransition>
          </main>

          <Footer />

          <FloatingActions />
          <CookieBar />
        </ToastProvider>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
