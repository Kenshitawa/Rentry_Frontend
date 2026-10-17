import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  devIndicators: false,
  images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }] },
  async rewrites() {
    const backend = process.env.BACKEND_API_URL?.replace(/\/$/, "");
    return backend ? [{ source: "/api/:path*", destination: `${backend}/api/:path*` }] : [];
  },
};
export default nextConfig;
