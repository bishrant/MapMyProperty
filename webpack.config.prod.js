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
      userDefinedExcludes: [
        "arcgis-js-api/layers/BingMapsLayer",
        "arcgis-js-api/layers/CSVLayer",
        "arcgis-js-api/layers/GeoRSSLayer",
        "arcgis-js-api/layers/OpenStreetMapLayer",
      "arcgis-js-api/layers/StreamLayer",
      ],
      locales: ['en']
    })
  ],
  node: {
    process: false,
    global: false,
    fs: "empty"
  }
};
