(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/views/2d/layers/features/Pipeline":"./node_modules/arcgis-js-api/views/2d/layers/features/Pipeline.js",
	"esri/views/2d/layers/features/controllers":"./node_modules/arcgis-js-api/views/2d/layers/features/controllers.js",
	"esri/views/2d/layers/features/processors":"./node_modules/arcgis-js-api/views/2d/layers/features/processors.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[108],{

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/Pipeline.js":
/*!*************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/Pipeline.js ***!
  \*************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../../../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../../../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../../layers/support/TileInfo */ "./node_modules/arcgis-js-api/layers/support/TileInfo.js"),__webpack_require__(/*! ../../ViewState */ "./node_modules/arcgis-js-api/views/2d/ViewState.js"),__webpack_require__(/*! ./controllers */ "./node_modules/arcgis-js-api/views/2d/layers/features/controllers.js"),__webpack_require__(/*! ./processors */ "./node_modules/arcgis-js-api/views/2d/layers/features/processors.js"),__webpack_require__(/*! ./support/TileStore */ "./node_modules/arcgis-js-api/views/2d/layers/features/support/TileStore.js"),__webpack_require__(/*! ../../tiling/TileInfoView */ "./node_modules/arcgis-js-api/views/2d/tiling/TileInfoView.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,i,n,s,l,c,a,u,p,h,d,f,v,g,y,w){function S(){return m}Object.defineProperty(t,"__esModule",{value:!0});var C=u.getLogger("esri.views.2d.layers.features.Pipeline"),m=new Set;t.getInstances=S;var _=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.controller=null,t.processor=null,t.remoteClient=null,t.tileStore=null,t.service=null,t.viewState=null,t}return r(t,e),t.prototype.initialize=function(){var e=this;this.watch("updating",function(t){e.remoteClient.invoke("setUpdating",t)}),a("esri-performance-tests")&&!a("esri-workers")&&m.add(this)},t.prototype.destroy=function(){a("esri-performance-tests")&&!a("esri-workers")&&m.delete(this),this.controller&&this.controller.destroy(),this.processor&&this.processor.destroy()},Object.defineProperty(t.prototype,"updating",{get:function(){var e=this,t=e.controller,r=e.processor;return!t||!r||t.updating||r.updating||!1},enumerable:!0,configurable:!0}),t.prototype.startup=function(e){var t=e.service,r=e.config,o=e.tileInfo,s=e.options;return i(this,void 0,void 0,function(){var e;return n(this,function(i){return this.service=t,this.tileStore||(e=new w(d.fromJSON(o)),this.tileStore=new y.default(e)),[2,this._configure(r,s)]})})},t.prototype.update=function(e){var t=e.config,r=e.options;return i(this,void 0,void 0,function(){return n(this,function(e){switch(e.label){case 0:return this.processor&&this.controller?r.layerFilterChanged||r.invalidateFeatureData||r.invalidateMesh?[4,this.controller.update(t,r.layerFilterChanged)]:[3,2]:(C.error(new c("mapview-pipeline","Tried to update an unconfigured pipeline.")),[2]);case 1:e.sent(),e.label=2;case 2:return r.invalidateMesh?[4,this.processor.update(t)]:[3,4];case 3:e.sent(),this.controller.invalidate(),e.label=4;case 4:return[4,this.remoteClient.invoke("setUpdating",this.updating)];case 5:return e.sent(),[2]}})})},t.prototype.setViewState=function(e){var t=f.fromJSON(e);this._set("viewState",t),this.tileStore&&this.tileStore.setViewState(t),this.controller&&this.controller.setViewState(t)},t.prototype._configure=function(e,t){return i(this,void 0,void 0,function(){return n(this,function(r){switch(r.label){case 0:return[4,p.all([this._handleControllerConfig(e),this._handleProcessorConfig(e)])];case 1:return r.sent(),this.controller.processor=this.processor,this.viewState&&this.controller.setViewState(this.viewState),[4,this.update({config:e,options:t})];case 2:return r.sent(),[2]}})})},t.prototype._handleControllerConfig=function(e){return i(this,void 0,void 0,function(){var t;return n(this,function(r){switch(r.label){case 0:return[4,this._createController(this.service,e)];case 1:return t=r.sent(),[4,t.startup()];case 2:return r.sent(),[2,t]}})})},t.prototype._handleProcessorConfig=function(e){return i(this,void 0,void 0,function(){return n(this,function(t){return[2,this._createProcessor(this.service,e)]})})},t.prototype._createController=function(e,t){return i(this,void 0,void 0,function(){var r,o,i,s,l;return n(this,function(n){switch(n.label){case 0:return this.controller?[2,this.controller]:[4,v.loadControllerModule(e.type)];case 1:return r=n.sent().default,o=this,i=o.tileStore,s=o.remoteClient,l=new r({service:e,config:t,tileStore:i,remoteClient:s}),this.controller=l,[2,l]}})})},t.prototype._createProcessor=function(e,t){return i(this,void 0,void 0,function(){var r,o,i,s,l;return n(this,function(n){switch(n.label){case 0:return[4,g.loadProcessorModule(t.renderer.type)];case 1:return r=n.sent().default,o=this,i=o.remoteClient,s=o.tileStore,l=new r({service:e,config:t,tileStore:s,remoteClient:i}),this.processor&&this.processor.destroy(),this.processor=l,[2,l]}})})},o([h.property()],t.prototype,"controller",void 0),o([h.property()],t.prototype,"processor",void 0),o([h.property({dependsOn:["controller.updating","processor.updating"]})],t.prototype,"updating",null),o([h.property()],t.prototype,"viewState",void 0),t=o([h.subclass("esri.views.2d.layers.features.Pipeline")],t)}(h.declared(l));t.default=_}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/controllers.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/controllers.js ***!
  \****************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,n,l,c){function a(r){switch(r){case"on-demand":return c.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(5), __webpack_require__.e(9), __webpack_require__.e(8), __webpack_require__.e(10), __webpack_require__.e(14), __webpack_require__.e(18), __webpack_require__.e(15), __webpack_require__.e(19), __webpack_require__.e(20), __webpack_require__.e(22), __webpack_require__.e(24), __webpack_require__.e(26), __webpack_require__.e(30), __webpack_require__.e(59), __webpack_require__.e(82)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./controllers/OnDemandController */ "./node_modules/arcgis-js-api/views/2d/layers/features/controllers/OnDemandController.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)});case"stream":return c.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(2), __webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(5), __webpack_require__.e(9), __webpack_require__.e(8), __webpack_require__.e(10), __webpack_require__.e(11), __webpack_require__.e(13), __webpack_require__.e(12), __webpack_require__.e(14), __webpack_require__.e(17), __webpack_require__.e(18), __webpack_require__.e(15), __webpack_require__.e(19), __webpack_require__.e(20), __webpack_require__.e(22), __webpack_require__.e(24), __webpack_require__.e(26), __webpack_require__.e(30), __webpack_require__.e(59), __webpack_require__.e(87)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./controllers/StreamController */ "./node_modules/arcgis-js-api/views/2d/layers/features/controllers/StreamController.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)});default:return c.reject(new l("mapview-controller:bad-type","Unable to create controller for unknown type: "+r))}}Object.defineProperty(r,"__esModule",{value:!0}),r.loadControllerModule=a}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/processors.js":
/*!***************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/processors.js ***!
  \***************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,o,s){function t(r){return"heatmap"===r?s.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e("common"), __webpack_require__.e(137)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./processors/HeatmapProcessor */ "./node_modules/arcgis-js-api/views/2d/layers/features/processors/HeatmapProcessor.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)}):s.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(6), __webpack_require__.e(5), __webpack_require__.e(9), __webpack_require__.e(8), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e("common"), __webpack_require__.e(95)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./processors/SymbolProcessor */ "./node_modules/arcgis-js-api/views/2d/layers/features/processors/SymbolProcessor.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})}Object.defineProperty(r,"__esModule",{value:!0}),r.loadProcessorModule=t}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=108.js.map