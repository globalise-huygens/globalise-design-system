import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/globalise-design-system" : "",
  images: {
    unoptimized: true,
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["@globalise/design-system"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
