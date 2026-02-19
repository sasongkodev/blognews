import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

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

  // Security Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Scripts: self + Google + Adsterra domains
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://*.highperformanceformat.com https://*.effectivegatecpm.com",
              // Styles: self + inline + Google Fonts
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              // Fonts: self + Google Fonts
              "font-src 'self' https://fonts.gstatic.com",
              // Images: self + data URIs + all HTTPS
              "img-src 'self' data: https:",
              // Network requests: self + Google + Adsterra
              "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.highperformanceformat.com https://*.effectivegatecpm.com",
              // Iframes: self + all HTTPS (common for ad networks)
              "frame-src 'self' https:",
              // Child frames/workers: self + all HTTPS + blob
              "child-src 'self' https: blob:",
            ].join('; ')
          }
        ],
      },
    ]
  },

  // Disable X-Powered-By header
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
