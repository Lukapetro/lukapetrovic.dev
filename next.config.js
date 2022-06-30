const { withContentlayer } = require('next-contentlayer');
const { version } = require('./package.json');
const nextTranslate = require('next-translate')

const nextconfig = {
  disableImportAliasWarning: true,
  swcMinify: true,
  reactStrictMode: true,
  publicRuntimeConfig: {
    version,
  },
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'en',
  },
}

module.exports = nextTranslate(withContentlayer(nextconfig))
