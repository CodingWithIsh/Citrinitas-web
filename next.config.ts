import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // This is the only deployment-related setting you need.
  output: 'export',

  // Your other project settings can remain.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
