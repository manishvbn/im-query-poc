/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://imquery.blob.core.windows.net/next/' : '',
}

module.exports = nextConfig
