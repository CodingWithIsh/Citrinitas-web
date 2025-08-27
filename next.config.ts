/** @type {import('next').NextConfig} */

// This line checks if we are building for GitHub Pages
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  // These lines conditionally add settings ONLY for the GitHub Pages build
  ...(isGithubPages && {
    output: 'export',
    basePath: '/Citrinitas-web',
    assetPrefix: '/Citrinitas-web',
  }),

  // Conditionally disable image optimization ONLY for the static GitHub Pages build
  images: {
    unoptimized: isGithubPages,
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