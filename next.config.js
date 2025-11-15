const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  outputFileTracingRoot: path.join(__dirname),
  
  // CRITICAL: Next.js doesn't allow changing devtool in dev mode
  // The eval warning is a false positive - Next.js uses eval for HMR but it's safe in dev
  // Production builds never use eval
  // 
  // If you need to remove eval completely, you must disable HMR (not recommended):
  // webpack: (config, { dev, isServer }) => {
  //   if (!isServer && dev) {
  //     config.optimization = {
  //       ...config.optimization,
  //       moduleIds: 'named',
  //       chunkIds: 'named',
  //     };
  //   }
  //   return config;
  // },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/_next/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
