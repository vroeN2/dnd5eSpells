/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/saved/:id",
        destination: "/spells/:id",
      },
    ];
  },
};

module.exports = nextConfig;
