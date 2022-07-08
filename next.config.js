module.exports = function () {
  const isProd = process.env.NODE_ENV === 'production'

  console.log({ isProd })

  return {
    basePath: isProd ? '/AnnoCalculator' : undefined,
    assetPrefix: isProd ? '/AnnoCalculator/' : undefined,
  }
}
