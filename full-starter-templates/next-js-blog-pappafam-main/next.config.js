/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["lodash-es"],
  experimental: {
    appDir: true,
    externalDir: true,
    esmExternals: "loose",
  },
  images: {
    domains: [
      "cdn.cookielaw.org",
      "encrypted-tbn0.gstatic.com",
      "cdn.sanity.io",
      "cdn4.vectorstock.com",
      "i.pinimg.com",
      "lorempixel.com",
      "static.onecms.io",
    ],
  },
};

module.exports = nextConfig;
