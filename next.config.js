/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['your-image-domains.com'], // optional for external image usage
    },
  };
  
  module.exports = module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // or a specific domain like 'images.unsplash.com'
        },
      ],
    },
  };
  