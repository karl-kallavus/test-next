/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: false,
  },
  webpack(config) {
    if (config.experiments) {
      config.experiments.topLevelAwait = true;
    } else {
      config.experiments = { topLevelAwait: true };
    }
    return config;
  },
};

module.exports = nextConfig
