/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
}
// next.config.js
// next.config.js
module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp3)$/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[path][name].[hash][ext]",
      },
    });

    return config;
  },
};
