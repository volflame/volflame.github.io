/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/volflame.github.io',
  assetPrefix: '/volflame.github.io/',
}

module.exports = nextConfig 