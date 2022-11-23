/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["www.imagemhost.com.br"],
  },
};

module.exports = nextConfig;
