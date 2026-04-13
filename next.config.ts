import type { NextConfig } from "next";
import path from "node:path";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const repoName = "oscargass";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : ""
  },
  images: {
    remotePatterns: [],
    unoptimized: true
  },
  outputFileTracingRoot: path.join(__dirname)
};

export default nextConfig;
