/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://github.com/WooSangyoon/QuantumArchive"
      : "",
};

export default nextConfig
