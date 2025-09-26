/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: { unoptimized: true },

  basePath: "/QuantumArchive",
  assetPrefix: "/QuantumArchive/",
  
  trailingSlash: true,

  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://github.com/WooSangyoon/QuantumArchive"
      : "",
};

module.exports = nextConfig;
