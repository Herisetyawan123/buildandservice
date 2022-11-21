/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["buildwithangga.com"],
  },
};

module.exports = nextConfig;
