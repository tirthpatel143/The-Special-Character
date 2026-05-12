/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable gzip/brotli compression for all responses
  compress: true,
  // Additional performance optimizations
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
