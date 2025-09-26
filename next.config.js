/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // 정적 export 모드
  output: "export",

  // GitHub Pages 경로 설정
  basePath: isProd ? "/QuantumArchive" : "",
  assetPrefix: isProd ? "/QuantumArchive/" : "",

  // 이미지 최적화 비활성화 (export 모드 필수)
  images: {
    unoptimized: true,
  },

  // 라우트 끝에 항상 / 붙이기 (정적 배포 호환성 ↑)
  trailingSlash: true,
};

module.exports = nextConfig;
