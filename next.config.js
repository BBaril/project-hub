/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  

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

  