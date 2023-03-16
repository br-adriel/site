/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
