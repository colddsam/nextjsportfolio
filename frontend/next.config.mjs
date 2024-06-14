/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode: true,
  images: {
    domains: ['api.microlink.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
    ],
  },
};

export default nextConfig;
