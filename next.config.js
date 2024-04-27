/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
      "m.media-amazon.com",
      "i.dell.com", // Add this line
      'example.com', // Assuming this is a placeholder
      'cdn.example2.com'
    ],
  },
};

module.exports = nextConfig;
