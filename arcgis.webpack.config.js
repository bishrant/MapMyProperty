const ArcGISPlugin = require("@arcgis/webpack-plugin");

module.exports = {
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
}
