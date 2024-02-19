/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/all',
      },
    ];
  },
};

export default nextConfig;
