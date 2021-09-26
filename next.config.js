const withTypescript = require("@zeit/next-typescript")
const withPlugins = require("next-compose-plugins")
const sass = require("@zeit/next-sass")
const css = require("@zeit/next-css")

module.exports = withTypescript({
  target: "serverless",
  webpack: (config, options) => {
    config.plugins = config.plugins || []
    return config
  }
})

module.exports = css(
  sass({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
        use: [{ loader: "url-loader?mimetype=application/font-woff" }]
      })
      return config
    }
  })
)
