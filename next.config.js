/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'adrielfsantos.vercel.app',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
