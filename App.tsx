import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { RouterProvider, useRouter, Link, matchPath } from './components/router';
import { Home } from './pages/Home';
import { Platform } from './pages/Platform';
import { Solutions } from './pages/Solutions';
import { Pricing } from './pages/Pricing';
import { Resources } from './pages/Resources';
import { Article } from './pages/Article';
import { About } from './pages/About';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { MessageCircle } from 'lucide-react';

type PageComponent = React.FC<{ params?: Record<string, string> }>;

const routes: { path: string; component: PageComponent; title: string }[] = [
  { path: '/', component: Home, title: 'Hospitality Operating System' },
  { path: '/platform', component: Platform, title: 'Platform' },
  { path: '/solutions', component: Solutions, title: 'Built for' },
  { path: '/pricing', component: Pricing, title: 'Pricing' },
  { path: '/resources', component: Resources, title: 'Resources' },
  { path: '/resources/:slug', component: Article, title: 'Resources' },
  { path: '/about', component: About, title: 'About' },
  { path: '/careers', component: Careers, title: 'Careers' },
  { path: '/contact', component: Contact, title: 'Contact' },
];

const NotFound: PageComponent = () => (
  <section className="pt-44 pb-32 px-4 lg:px-6 max-w-[1600px] mx-auto text-center">
    <p className="text-sm font-semibold text-emerald-700 uppercase tracking-[0.2em] mb-4">404</p>
    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">Page not found.</h1>
    <p className="text-xl text-gray-500 mb-10">The page you're looking for doesn't exist or has moved.</p>
    <Link to="/" className="inline-flex bg-[#2d2d2d] text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-colors">
      Back to home
    </Link>
  </section>
);

const Routes: React.FC = () => {
  const { path } = useRouter();

  let match: { component: PageComponent; params: Record<string, string>; title: string } | null = null;
  for (const r of routes) {
    const params = matchPath(r.path, path);
    if (params) {
      match = { component: r.component, params, title: r.title };
      break;
    }
  }

  useEffect(() => {
    document.title = match ? `${match.title} | Beddie Hub` : 'Page not found | Beddie Hub';
  }, [path, match]);

  const Page = match?.component ?? NotFound;
  return <Page params={match?.params} />;
};

const App: React.FC = () => {
  const [showCookies, setShowCookies] = useState(true);
  const whatsappUrl = 'https://wa.me/1234567890';

  return (
    <RouterProvider>
      <div className="min-h-screen bg-white relative selection:bg-emerald-100 selection:text-emerald-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:bg-[#2d2d2d] focus:text-white focus:px-5 focus:py-3 focus:rounded-full focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />

        <main id="main">
          <Routes />
        </main>

        <Footer />

        {/* WhatsApp Widget */}
        <a
          href={whatsappUrl}
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

        {/* Slim cookie bar */}
        {showCookies && (
          <div
            role="dialog"
            aria-label="Cookie consent"
            aria-modal="false"
            className="fixed bottom-4 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-[70] w-auto sm:w-[calc(100%-2rem)] sm:max-w-2xl"
          >
            <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)] rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <p className="text-sm text-gray-600 flex-1 leading-snug">
                We use cookies to improve your experience. <a href="#" className="text-gray-900 underline font-medium hover:text-emerald-700">Privacy policy</a>.
              </p>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => setShowCookies(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={() => setShowCookies(false)}
                  className="px-5 py-2 text-sm font-semibold text-white bg-[#2d2d2d] rounded-full hover:bg-black transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </RouterProvider>
  );
};

export default App;
