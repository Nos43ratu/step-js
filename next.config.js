/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/step",
  output: "standalone",
  experimental: {
    esmExternals: "loose",
  },
};

module.exports = nextConfig;
