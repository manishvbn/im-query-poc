/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/im-query-poc',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
