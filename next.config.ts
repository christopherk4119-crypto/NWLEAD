import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Photos live in /public/images. If you ever hot-link Unsplash/Pexels instead,
    // add: remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }]
  },
};

export default nextConfig;
