import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ikuband-site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
