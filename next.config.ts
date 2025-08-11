import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "interiorwalaa.smepulse.in",
      },
      {
        protocol: "https",
        hostname: "dev-api-interiorwala.smeexclusive.com",
      },
    ],
  },
};

export default nextConfig;
