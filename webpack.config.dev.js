// webpack.config.dev.js
const ArcGISPlugin = require("@arcgis/webpack-plugin");
const a = require("postcss-import");
const b = require("tailwindcss");
const c = require("autoprefixer");

module.exports = {
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            syntax: "postcss-scss",
            plugins: [a, b, c],
          },
        },
      ],
    },
    plugins: [
        new ArcGISPlugin({
          features: {
            '3d': false
          }
        })
      ],
      node: {
        process: false,
        global: false,
        fs: "empty"
      }
  };