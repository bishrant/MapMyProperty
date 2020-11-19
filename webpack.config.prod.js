// webpack.config.prod.js
const ArcGISPlugin = require("@arcgis/webpack-plugin");
const a = require("postcss-import");
const b = require("tailwindcss")('./tailwind.config.prod.js');
const c = require("autoprefixer");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            ident: "postcss",
            syntax: "postcss-scss",
            plugins: [a, b, c],
          }
        },
      },
    ],
  },
  plugins: [
    new ArcGISPlugin({
      features: {
        '3d': true
      },
      locales: ['en']
    })
  ],
  node: {
    process: false,
    global: false,
    fs: "empty"
  }
};
