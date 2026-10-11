import type { NextConfig } from "next";

// Static export so the site can be hosted on GitHub Pages.
// BASE_PATH is set by the Pages workflow when the site lives at /<repo-name>.
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
