(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/views/2d/layers/features/processors/HeatmapProcessor":"./node_modules/arcgis-js-api/views/2d/layers/features/processors/HeatmapProcessor.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[137],{

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/processors/HeatmapProcessor.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/processors/HeatmapProcessor.js ***!
  \********************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../../../renderers/support/heatmapUtils */ "./node_modules/arcgis-js-api/renderers/support/heatmapUtils.js"),__webpack_require__(/*! ./BaseProcessor */ "./node_modules/arcgis-js-api/views/2d/layers/features/processors/BaseProcessor.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,n,i,a,p,s){Object.defineProperty(t,"__esModule",{value:!0});var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="heatmap",t.updating=!1,t}return r(t,e),t.prototype.update=function(e){return i(this,void 0,void 0,function(){return n(this,function(t){return this._set("config",e),[2]})})},t.prototype.onTileData=function(e,t,r){if(t&&t.addOrUpdate&&t.addOrUpdate.length>0){var o=p.calculateHeatmapIntensityInfo(t.addOrUpdate,this.config.renderer,512,512);return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.key.id,intensityInfo:o},{transferList:[o.matrix]})}return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.key.id,intensityInfo:null},r)},t.prototype.onTileError=function(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)},o([a.property()],t.prototype,"config",void 0),o([a.property()],t.prototype,"updating",void 0),t=o([a.subclass("esri.views.2d.layers.features.processors.HeatmapProcessor")],t)}(a.declared(s.default));t.default=d}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=137.js.map