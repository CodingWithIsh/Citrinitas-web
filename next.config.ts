import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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

export default nextConfig;
