import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { MessageCircle } from 'lucide-react';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { BackToTop } from '@/components/BackToTop';
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

          <BackToTop />
          <Footer />

          {/* WhatsApp Widget */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
          >
            <div className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block border border-gray-100" aria-hidden="true">
              Chat with us
            </div>
            <MessageCircle className="w-8 h-8 fill-current" />
          </a>

          <CookieBar />
        </ToastProvider>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
