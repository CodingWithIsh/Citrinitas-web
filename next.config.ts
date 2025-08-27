/** @type {import('next').NextConfig} */

// This line checks if we are building for GitHub Pages
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },

  // These lines conditionally add the prefixes ONLY for the GitHub Pages build
  ...(isGithubPages && {
    basePath: '/Citrinitas-web',
    assetPrefix: '/Citrinitas-web',
  }),

  // Your other project settings
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
