const ArcGISPlugin = require("@arcgis/webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new ArcGISPlugin({
      features: {
        '3d': false
      }
    }),
    new BundleAnalyzerPlugin({analyzerPort: 9999})
  ],
  node: {
    process: false,
    global: false,
    fs: "empty"
  }
}
