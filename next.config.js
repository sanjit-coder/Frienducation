/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  images: {
    // Added 'example.com' Because getting this url from BE
    domains: ["example.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
