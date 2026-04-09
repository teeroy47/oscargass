import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: []
  },
  outputFileTracingRoot: path.join(__dirname)
};

export default nextConfig;
