/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dummyimage.com'],
  },
  async redirects() {
    return [
      { source: '/premium', destination: '/markets', permanent: true },
      { source: '/blog-home', destination: '/blog', permanent: true },
    ]
  },
}

module.exports = nextConfig

