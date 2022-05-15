const { withContentlayer } = require('next-contentlayer');
const { version } = require('./package.json');

const nextconfig = {
  disableImportAliasWarning: true,
  swcMinify: true,
  reactStrictMode: true,
  publicRuntimeConfig: {
    version,
  },
}

module.exports = withContentlayer(nextconfig)
