/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
          },
          {
            protocol: 'https',
            hostname: 'images.squarespace-cdn.com',
          },
          {
            protocol: 'https',
            hostname: 'pbs.twimg.com'
          },
          {
            protocol: 'https',
            hostname: 'uwaterloo.ca'
          }
        ],
      },
}

module.exports = nextConfig
