import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable static generation cache for development hot reload
  experimental: {
    // Allow dynamic server usage
  },
  // This helps with content updates during development
  onDemandEntries: {
    // Period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 15 * 1000,
    // Number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
};

export default nextConfig;
