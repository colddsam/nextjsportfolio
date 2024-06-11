// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/meet',
        destination: 'https://meet.google.com/iea-qkux-isn',
        permanent: true,  // Use this if you want a 308 permanent redirect
      },
    ];
  },
};

module.exports = nextConfig;
