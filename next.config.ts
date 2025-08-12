/** @type {import('next').NextConfig} */
const nextConfig = {
  // Settings for static export on GitHub Pages
  output: 'export',
  basePath: '/Citrinitas-web',
  assetPrefix: '/Citrinitas-web',
  images: {
    unoptimized: true,
  },

  // Your other project settings
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
