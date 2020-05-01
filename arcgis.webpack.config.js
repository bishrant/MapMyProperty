const ArcGISPlugin = require("@arcgis/webpack-plugin");

module.exports = {
  plugins: [
    new ArcGISPlugin({}),

  ],
  node: {
    process: false,
    global: false,
    fs: "empty"
  }
}
