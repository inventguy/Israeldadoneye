import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack doesn't get confused by lockfiles
  // higher up in the home directory.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
