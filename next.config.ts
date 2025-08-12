import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /*Github pages code for static hosting*/
  output: 'export',
  basePath: '/Citrinitas', 
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};



export default nextConfig;
