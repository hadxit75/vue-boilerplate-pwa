const path = require("path");
const webpack = require("webpack");
const ansiRegex = require("ansi-regex");
function resolveSrc(_path) {
  return path.join(__dirname, _path);
}
module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    resolve: {
      alias: {
        src: resolveSrc("src"),
        "chart.js": "chart.js/dist/Chart.js"
      }
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  transpileDependencies: [ansiRegex],
  pwa: {
    name: "STORE BOM",
    themeColor: "#66615B",
    msTileColor: "#66615B",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#66615B",
    workboxOptions: {
      skipWaiting: true
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== "production"
  },
  devServer: {
    proxy: "http://localhost:8080/"
  }
};
