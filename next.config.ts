import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore
  allowedDevOrigins: ['192.168.1.6', 'localhost'], // Whitelisting your local network IP to allow CSS/JS to load
};

export default nextConfig;
