/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  compiler: {
    // Strip console.* (except errors/warnings) from production bundles.
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  // Note: Next.js 15 already tree-shakes lucide-react via its built-in
  // optimizePackageImports defaults, so no experimental flag is needed.
  async headers() {
    return [
      {
        // Long-lived immutable caching for hashed static assets.
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff2)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

export default nextConfig;
