const { withContentlayer } = require('next-contentlayer');
const { version } = require('./package.json');

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer()({
  swcMinify: true,
  reactStrictMode: true,
  publicRuntimeConfig: {
    version,
  },
});
