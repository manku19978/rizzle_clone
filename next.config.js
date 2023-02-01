/** @type {import('next').NextConfig} */

const nextConfig = {
  // helps to identify unsafe lifecycles, legacy API usage, and a number of other features.
  reactStrictMode: true,
  // allows Next.js to transform and minify your JavaScript code for production.
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    formats: ['image/webp'], // allow webp images for image component
    minimumCacheTTL: 30 * 24 * 60 * 60, // allows to cache images for 30 days
  },
};

module.exports = nextConfig;
