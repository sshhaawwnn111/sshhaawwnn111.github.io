import type { NextConfig } from "next";

const repoName = "My-Portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  /* config options here */
};

export default nextConfig;
