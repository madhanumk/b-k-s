/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  swcMinify: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  optimizeFonts: false,
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
