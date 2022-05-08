const { withContentlayer } = require('next-contentlayer');
const { version } = require('./package.json');

module.exports = withContentlayer({
  swcMinify: true,
  reactStrictMode: true,
  publicRuntimeConfig: {
    version,
  },
});
