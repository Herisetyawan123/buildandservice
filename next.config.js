/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["buildwithangga.com", "nymvxvireoklhrifvggx.supabase.co"],
  },
};

module.exports = nextConfig;
