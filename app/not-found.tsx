import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="pt-44 pb-32 px-4 lg:px-6 max-w-[1600px] mx-auto text-center">
      <p className="text-sm font-semibold text-emerald-700 uppercase tracking-[0.2em] mb-4">404</p>
      <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">Page not found.</h1>
      <p className="text-xl text-gray-500 mb-10">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="inline-flex bg-[#2d2d2d] text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-colors">
        Back to home
      </Link>
    </section>
  );
}
