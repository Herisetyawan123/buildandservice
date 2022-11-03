/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GOOGLE_CLIENT_ID:
      '556158424519-cvp4u56lr2od4j7on0qbg4jgkgjpg1g2.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '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',
    GITHUB_CLIENT_ID: '1ee02893965ab600f787',
    GITHUB_CLIENT_SECRET: 'fd7572c18dd7e4c811abb1413e6cd1ecf174f13e',
    TWITTER_CLIENT_ID: 'k5PVNzWhNscQVqRYfqwdh4laW',
    TWITTER_CLIENT_SECRET: '8l79R8YsbkL7CYpwQnYXR06yVWURPOGtRpZzeaoeMvTGEYWbgX',
  },
};

module.exports = nextConfig;
