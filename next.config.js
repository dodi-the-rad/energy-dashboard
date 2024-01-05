/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { webpack } = options;
    if (!options.isServer) {
      //config.cache=false
      config.plugins.push(
        new NextFederationPlugin({
          name: 'dashboard',
          remotes: {
            checkout: `checkout@https://energy-service-react.vercel.app/_next/static/chunks/remoteEntry.js`,
          },
          filename: 'static/chunks/remoteEntry.js',
          exposes: {},
          shared: {},
          extraOptions: {}
        }),
      );
    }

    return config;
  },
}

module.exports = nextConfig;