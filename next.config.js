/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'dmcicorporation.com',
      },
      {
        protocol: 'https',
        hostname: 'abicrealtyph.com',
      },
      {
        protocol: 'https',
        hostname: 'dmci-agent-bakit.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'abicrealtyphdianne.com',
      },
    ],
  },
};

module.exports = nextConfig;
