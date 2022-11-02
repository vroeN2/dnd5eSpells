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
        source: "/spellbook/:id",
        destination: "/arcanes/:id",
      },
    ];
  },
};

module.exports = nextConfig;
