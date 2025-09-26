/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/QuantumArchive" : "",
  assetPrefix: isProd ? "/QuantumArchive/" : "",
  trailingSlash: true,

  // ⬇️ 클라이언트에서 쓸 base path
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/QuantumArchive" : "",
  },
};

module.exports = nextConfig;
