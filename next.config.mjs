/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: [],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.vercel.com",
        port: "",
        pathname: "/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
