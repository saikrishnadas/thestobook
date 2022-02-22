/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "img.etimg.com",
      "assets.vogue.com",
      "m.media-amazon.com",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;
