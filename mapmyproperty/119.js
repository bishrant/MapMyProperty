(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/views/2d/layers/features/tileRenderers/HeatmapTileRenderer":"./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/HeatmapTileRenderer.js",
	"arcgis-js-api/views/2d/layers/features/tileRenderers/support/HeatmapSource":"./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/support/HeatmapSource.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/HeatmapTileRenderer.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/HeatmapTileRenderer.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2019 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../../../renderers/support/heatmapUtils */ "./node_modules/arcgis-js-api/renderers/support/heatmapUtils.js"),__webpack_require__(/*! ../../../engine/BitmapTileContainer */ "./node_modules/arcgis-js-api/views/2d/engine/BitmapTileContainer.js"),__webpack_require__(/*! ./BaseTileRenderer */ "./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/BaseTileRenderer.js"),__webpack_require__(/*! ./support/HeatmapSource */ "./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/support/HeatmapSource.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,n,r,o,a,s,l,p){Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(t){var i=e.call(this,t)||this;i._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},i.featuresView={attributeView:{initialize:function(){},requestUpdate:function(){}},requestRender:function(){}};var n=t.layerView.clips;return i._container=new s.BitmapTileContainer(t.tileInfoView,t.layerView.clips),i.handles.add([n.on("change",function(){return i._container.setClips(n)})]),i}return n(t,e),t.prototype.createTile=function(e){var t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t},t.prototype.onConfigUpdate=function(){var e=this,t=this.layer.renderer;if("heatmap"===t.type){var i=t.minPixelIntensity,n=t.maxPixelIntensity;this._intensityInfo.minPixelIntensity=i,this._intensityInfo.maxPixelIntensity=n,this._gradient=a.generateGradient(t.toJSON()),this.tiles.forEach(function(t){var r=t.bitmap.source;r&&(r.minPixelIntensity=i,r.maxPixelIntensity=n,r.gradient=e._gradient,t.bitmap.invalidateTexture())})}},t.prototype.hitTest=function(){return r.resolve([])},t.prototype.install=function(e){e.addChild(this._container)},t.prototype.uninstall=function(e){this._container.removeAllChildren(),e.removeChild(this._container)},t.prototype.disposeTile=function(e){this._container.removeChild(e),e.destroy()},t.prototype.supportsRenderer=function(e){return e&&"heatmap"===e.type},t.prototype.onTileData=function(e){var t=this.tiles.get(e.tileKey);if(t){var i=e.intensityInfo,n=this._intensityInfo,r=n.minPixelIntensity,o=n.maxPixelIntensity,a=t.bitmap.source||new p.HeatmapSource;a.intensities=i&&i.matrix||null,a.minPixelIntensity=r,a.maxPixelIntensity=o,a.gradient=this._gradient,t.bitmap.source=a,this._container.addChild(t),this.requestUpdate()}},t.prototype.onTileError=function(e){console.error(e)},t=i([o.subclass("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],t)}(o.declared(l.default));t.default=u}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/support/HeatmapSource.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/support/HeatmapSource.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2019 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../../renderers/support/heatmapUtils */ "./node_modules/arcgis-js-api/renderers/support/heatmapUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this.gradient=null,this.height=512,this.width=512}return e.prototype.render=function(e){i.drawHeatmap(e,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)},e}();t.HeatmapSource=n}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=119.js.map