/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
}
// next.config.js
const withVideos = require('next-videos')
module.exports = withVideos()
// module.exports = nextConfig
