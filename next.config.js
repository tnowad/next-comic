/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 60,
  },
  async headers() {
    return [
      {
        source: "/images/:slug*",
        headers: [{ key: "cache-control", value: "max-age=2592000" }],
      },
      {
        source: "/fonts/:slug*",
        headers: [{ key: "cache-control", value: "max-age=2592000" }],
      },
    ];
  },
};

module.exports = nextConfig;
