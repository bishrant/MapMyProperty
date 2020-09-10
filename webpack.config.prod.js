// webpack.config.dev.js
const ArcGISPlugin = require("@arcgis/webpack-plugin");

module.exports = {
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            syntax: "postcss-scss",
            plugins: () => [
              require("postcss-import"),
              require("tailwindcss"),
              require("autoprefixer"),
            ],
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