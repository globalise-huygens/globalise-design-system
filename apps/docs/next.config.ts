import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath =
  configuredBasePath !== undefined
    ? configuredBasePath.replace(/\/$/, "")
    : isProd
      ? "/globalise-design-system"
      : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["@globalise/design-system"],
};

const withMDX = createMDX({
  options: {
    // Turbopack requires loader options to be serializable.
    // Use plugin names instead of imported function references.
    remarkPlugins: ["remark-gfm"],
  },
});

export default withMDX(nextConfig);
