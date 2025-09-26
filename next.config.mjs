// next.config.mjs
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },

  // GitHub Pages 서브경로(/QuantumArchive) 적용
  basePath: isProd ? "/QuantumArchive" : "",
  assetPrefix: isProd ? "/QuantumArchive/" : "",

  trailingSlash: true,

  // 순수 <img>, <link> 등에서 쓸 수 있도록 클라이언트에 노출
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/QuantumArchive" : "",
  },
};

export default nextConfig;
