/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ← 정적 export로 쓸 거면 남겨두세요
  images: {
    unoptimized: true, // Vercel은 최적화 서버 지원하지만, export라면 필요
  },
};

module.exports = nextConfig;
