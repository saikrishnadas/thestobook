/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "thestobookimages.s3.ap-south-1.amazonaws.com",
      "images-na.ssl-images-amazon.com",
      "i.gr-assets.com",
      "m.media-amazon.com",
    ],
  },
};

module.exports = nextConfig;
