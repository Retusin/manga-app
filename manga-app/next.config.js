/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.myanimelist.net', 'media.kitsu.io', 'img.youtube.com'],
  },
}

module.exports = nextConfig
