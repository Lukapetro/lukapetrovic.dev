const { withContentlayer } = require('next-contentlayer');
const { version } = require('./package.json');
const { i18n } = require('./next-i18next.config');

const nextconfig = {
  disableImportAliasWarning: true,
  i18n,
  swcMinify: true,
  reactStrictMode: true,
  publicRuntimeConfig: {
    version,
  },
}

module.exports = withContentlayer(nextconfig)
