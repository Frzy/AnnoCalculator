module.exports = function () {
  const isProd = process.env.NODE_ENV === 'production'

  return {
    basePath: isProd ? '/AnnoCalculator' : undefined,
    assetPrefix: isProd ? '/AnnoCalculator/' : undefined,
  }
}
