/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // ✅ Tells Next.js to generate a static site

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // ✅ Matches any external image source
      },
    ],
  },
};

module.exports = nextConfig;

  