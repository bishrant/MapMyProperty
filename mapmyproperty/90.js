(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/layers/support/ExportImageParameters":"./node_modules/arcgis-js-api/layers/support/ExportImageParameters.js",
	"arcgis-js-api/layers/support/layerSourceUtils":"./node_modules/arcgis-js-api/layers/support/layerSourceUtils.js",
	"arcgis-js-api/layers/support/sublayerUtils":"./node_modules/arcgis-js-api/layers/support/sublayerUtils.js",
	"arcgis-js-api/renderers/support/clickToleranceUtils":"./node_modules/arcgis-js-api/renderers/support/clickToleranceUtils.js",
	"arcgis-js-api/views/2d/layers/MapImageLayerView2D":"./node_modules/arcgis-js-api/views/2d/layers/MapImageLayerView2D.js",
	"arcgis-js-api/views/2d/layers/support/popupUtils2D":"./node_modules/arcgis-js-api/views/2d/layers/support/popupUtils2D.js",
	"arcgis-js-api/views/layers/MapImageLayerView":"./node_modules/arcgis-js-api/views/layers/MapImageLayerView.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ "./node_modules/arcgis-js-api/layers/support/ExportImageParameters.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/ExportImageParameters.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./sublayerUtils */ "./node_modules/arcgis-js-api/layers/support/sublayerUtils.js"),__webpack_require__(/*! ./timeUtils */ "./node_modules/arcgis-js-api/layers/support/timeUtils.js"),__webpack_require__(/*! ../../views/View */ "./node_modules/arcgis-js-api/views/View.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,a,i,n,s,l,y,o){Object.defineProperty(r,"__esModule",{value:!0});var u={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"},p=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._scale=null,r.view=null,r}return a(r,e),Object.defineProperty(r.prototype,"dynamicLayers",{get:function(){if(!this.hasDynamicLayers)return null;var e=this.visibleSublayers.map(function(e){return e.toExportImageJSON()});return e.length?JSON.stringify(e):null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"hasDynamicLayers",{get:function(){return this.layer&&l.isExportDynamic(this.visibleSublayers,this.layer.serviceSublayers,this.layer)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"layer",{set:function(e){var r=this;this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.forEach(function(e){return e.remove()}),this._layerHandles.length=0),e&&(this._layerHandles=[e.allSublayers.on("change",function(){return r.notifyChange("visibleSublayers")}),e.on("sublayer-update",function(e){return r.notifyChange(u[e.propertyName])})]))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"layers",{get:function(){var e=this.visibleSublayers;return e?e.length?"show:"+e.map(function(e){return e.id}).join(","):"show:-1":null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"layerDefs",{get:function(){var e=this.visibleSublayers.filter(function(e){return null!=e.definitionExpression});return e.length?JSON.stringify(e.reduce(function(e,r){return e[r.id]=r.definitionExpression,e},{})):null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scale",{get:function(){return null!=this._scale?this._scale:this.view&&this.view.scale||0},set:function(e){this.view||(this._scale=e,this.notifyChange("scale"))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"version",{get:function(){var e=this;e.layers,e.layerDefs,e.dynamicLayers,e.timeExtent;var r=e.layer;return r&&(r.dpi,r.imageFormat,r.imageTransparency,r.gdbVersion),(this._get("version")||0)+1},set:function(e){this._set("version",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"visibleSublayers",{get:function(){var e=this,r=[];if(!this.layer)return r;var t=this.layer.sublayers,a=function(t){var i=e.scale,n=0===i,s=0===t.minScale||i<=t.minScale,l=0===t.maxScale||i>=t.maxScale;t.visible&&(n||s&&l)&&(t.sublayers?t.sublayers.forEach(a):r.unshift(t))};t&&t.forEach(a);var i=this._get("visibleSublayers");return!i||i.length!==r.length||i.some(function(e,t){return r[t]!==e})?r:i},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){var e=this.layer,r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r=t({},r,{layers:this.layers,layerDefs:this.layerDefs}),r},i([s.property({readOnly:!0,dependsOn:["hasDynamicLayers","visibleSublayers"]})],r.prototype,"dynamicLayers",null),i([s.property({readOnly:!0,dependsOn:["visibleSublayers","layer.serviceSublayers","layer.capabilities"]})],r.prototype,"hasDynamicLayers",null),i([s.property()],r.prototype,"layer",null),i([s.property({readOnly:!0,dependsOn:["visibleSublayers"]})],r.prototype,"layers",null),i([s.property({readOnly:!0,dependsOn:["visibleSublayers"]})],r.prototype,"layerDefs",null),i([s.property({type:Number,dependsOn:["view.scale"]})],r.prototype,"scale",null),i([s.property(y.combinedViewLayerTimeExtentProperty)],r.prototype,"timeExtent",void 0),i([s.property({dependsOn:["layers","layerDefs","dynamicLayers","layer.dpi","layer.imageFormat","layer.imageTransparency","layer.gdbVersion","timeExtent"]})],r.prototype,"version",null),i([s.property({type:o})],r.prototype,"view",void 0),i([s.property({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],r.prototype,"visibleSublayers",null),r=i([s.subclass("esri.layers.mixins.ExportImageParameters")],r)}(s.declared(n));r.ExportImageParameters=p}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/layerSourceUtils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/layerSourceUtils.js ***!
  \***********************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,a,t){function o(e){return null!=e&&e.hasOwnProperty("mapLayerId")}function i(e){return null!=e&&e.hasOwnProperty("dataSource")}function l(e){return e?(o(e)&&(e.type=r.MAPLAYER),i(e)&&(e.type=r.DATALAYER,e.dataSource.type||y(e.dataSource)),e):e}function n(e){var a={};return e.type===r.MAPLAYER?(a.mapLayerId=e.mapLayerId,e.gdbVersion&&(a.gdbVersion=e.gdbVersion)):e.type===r.DATALAYER&&(e.fields&&(a.fields=e.fields),a.dataSource=u(e.dataSource)),a.type=p.toJSON(e.type),t.fixJson(a)}function c(e){var a={};return p.fromJSON(e.type)===r.MAPLAYER?(a.mapLayerId=e.mapLayerId,e.gdbVersion&&(a.gdbVersion=e.gdbVersion)):p.fromJSON(e.type)===r.DATALAYER&&(e.fields&&(a.fields=e.fields),a.dataSource=s(e.dataSource)),a.type=p.fromJSON(e.type),t.fixJson(a)}function y(e){e.workspaceId?e.gdbVersion?e.type="table":e.query||e.oidFields?e.type="query-table":e.type="raster":e.leftTableKey&&e.rightTableKey&&e.leftTableSource&&e.rightTableSource&&(e.type="join-table",e.leftTableSource=l(e.leftTableSource),e.rightTableSource=l(e.rightTableSource))}function u(e){var r;switch(e.type){case"table":r={dataSourceName:e.dataSourceName,workspaceId:e.workspaceId,gdbVersion:e.gdbVersion};break;case"query-table":r={geometryType:d.toJSON(e.geometryType),workspaceId:e.workspaceId,query:e.query,oidFields:e.oidFields,spatialReference:e.spatialReference};break;case"join-table":r={leftTableSource:n(e.leftTableSource),rightTableSource:n(e.rightTableSource),leftTableKey:e.leftTableKey,rightTableKey:e.rightTableKey,joinType:f.toJSON(e.joinType)};break;case"raster":r={workspaceId:e.workspaceId,dataSourceName:e.dataSourceName}}return r.type=b.toJSON(e.type),t.fixJson(r)}function s(e){var r;switch(e.type){case"table":r={dataSourceName:e.dataSourceName,workspaceId:e.workspaceId,gdbVersion:e.gdbVersion};break;case"queryTable":r={geometryType:d.fromJSON(e.geometryType),workspaceId:e.workspaceId,query:e.query,oidFields:e.oidFields,spatialReference:e.spatialReference};break;case"joinTable":r={leftTableSource:c(e.leftTableSource),rightTableSource:c(e.rightTableSource),leftTableKey:e.leftTableKey,rightTableKey:e.rightTableKey,joinType:f.fromJSON(e.joinType)};break;case"raster":r={workspaceId:e.workspaceId,dataSourceName:e.dataSourceName}}return r.type=b.fromJSON(e.type),t.fixJson(r)}Object.defineProperty(r,"__esModule",{value:!0}),r.MAPLAYER="map-layer",r.DATALAYER="data-layer";var d=new a.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"}),p=new a.default({mapLayer:r.MAPLAYER,dataLayer:r.DATALAYER}),b=new a.default({joinTable:"join-table",queryTable:"query-table"}),f=new a.default({esriLeftOuterJoin:"left-outer-join",esriLeftInnerJoin:"left-inner-join"});r.isMapLayerSource=o,r.isDataLayerSource=i,r.castSource=l,r.sourceToJSON=n,r.sourceFromJSON=c}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/sublayerUtils.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/sublayerUtils.js ***!
  \********************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./layerSourceUtils */ "./node_modules/arcgis-js-api/layers/support/layerSourceUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(r,e,n){function u(r,e,u){return!!r.some(function(r){var e=r.source;return!(!e||e.type===n.MAPLAYER&&e.mapLayerId===r.id&&(!e.gdbVersion||e.gdbVersion===u.gdbVersion))||null!=r.renderer||null!=r.labelingInfo||r.hasOwnProperty("opacity")&&null!=r.opacity||r.hasOwnProperty("labelsVisible")&&null!=r.labelsVisible})||!t(r,e)}function l(r,e){return e.slice().reverse().flatten(function(r){var e=r.sublayers;return e&&e.toArray().reverse()}).every(function(e,n){var u=r[n];return u&&e.id===u.id&&(null==e.sublayers&&null==u.sublayers||null!=e.sublayers&&null!=u.sublayers&&e.sublayers.map(function(r){return r.id}).join(",")===u.sublayers.map(function(r){return r.id}).join(","))})}function t(r,e){function n(r){var e=r.id,l=r.sublayers;u.unshift(e),l&&l.toArray().forEach(n)}if(!r||!r.length)return!0;var u=[];if(e.forEach(n),r.length>u.length)return!1;for(var l=0,t=u.length,i=0,s=r;i<s.length;i++){for(var a=s[i].id;l<t&&u[l]!==a;)l++;if(l>=t)return!1}return!0}Object.defineProperty(e,"__esModule",{value:!0}),e.isExportDynamic=u,e.sameStructureAsService=l}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/clickToleranceUtils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/clickToleranceUtils.js ***!
  \*****************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r){function t(e,r){return r&&r.xoffset?Math.max(e,Math.abs(r.xoffset)):r&&r.yoffset?Math.max(e,Math.abs(r.yoffset)):e}function n(e){for(var r=0,t=0,n=0;n<e.length;n++){var a=e[n].size;"number"==typeof a&&(r+=a,t++)}return r/t}function a(e,r){return"number"==typeof e?e:e&&e.stops&&e.stops.length?n(e.stops):r}function u(e,r){if(!r)return e;var t=r.filter(function(e){return"size"===e.type}),n=t.map(function(r){var t=r.maxSize,n=r.minSize;return(a(t,e)+a(n,e))/2}),u=0,f=n.length;if(0===f)return e;for(var o=0;o<f;o++)u+=n[o];var i=Math.floor(u/f);return Math.max(i,e)}function f(e){if(!e)return 6;var r="visualVariables"in e?u(6,e.visualVariables):6;if("simple"===e.type)return t(r,e.symbol);if("unique-value"===e.type){var n=r;return e.uniqueValueInfos.forEach(function(e){n=t(n,e.symbol)}),n}if("class-breaks"===e.type){var a=r;return e.classBreakInfos.forEach(function(e){a=t(a,e.symbol)}),a}return e.type,r}Object.defineProperty(r,"__esModule",{value:!0}),r.calculateTolerance=f}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/MapImageLayerView2D.js":
/*!***************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/MapImageLayerView2D.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../core/watchUtils */ "./node_modules/arcgis-js-api/core/watchUtils.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../layers/support/ExportImageParameters */ "./node_modules/arcgis-js-api/layers/support/ExportImageParameters.js"),__webpack_require__(/*! ./BitmapLayerView2D */ "./node_modules/arcgis-js-api/views/2d/layers/BitmapLayerView2D.js"),__webpack_require__(/*! ./LayerView2D */ "./node_modules/arcgis-js-api/views/2d/layers/LayerView2D.js"),__webpack_require__(/*! ./support/ExportStrategy */ "./node_modules/arcgis-js-api/views/2d/layers/support/ExportStrategy.js"),__webpack_require__(/*! ./support/popupUtils2D */ "./node_modules/arcgis-js-api/views/2d/layers/support/popupUtils2D.js"),__webpack_require__(/*! ../../layers/LayerView */ "./node_modules/arcgis-js-api/views/layers/LayerView.js"),__webpack_require__(/*! ../../layers/MapImageLayerView */ "./node_modules/arcgis-js-api/views/layers/MapImageLayerView.js"),__webpack_require__(/*! ../../layers/RefreshableLayerView */ "./node_modules/arcgis-js-api/views/layers/RefreshableLayerView.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,a,i,o,s,p,n,u,h,m,y,c,g,d,l,f,w){var x=p.getLogger("esri.views.2d.layers.MapImageLayerView2D");return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._exportImageParameters=null,t._exportImageVersion=-1,t}return a(t,e),t.prototype.hitTest=function(){return null},t.prototype.update=function(e){this.strategy.update(e).catch(function(e){n.isAbortError(e)||x.error(e)})},t.prototype.attach=function(){var e=this,t=this.layer,r=t.imageMaxWidth,a=t.imageMaxHeight,i=t.version,o=i>=10.3,s=i>=10;this.strategy=new g({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:r,imageMaxHeight:a,imageRotationSupported:o,imageNormalizationSupported:s,hidpi:!0}),this._exportImageParameters=new m.ExportImageParameters({view:this.view,layer:this.layer}),this.handles.add(u.init(this._exportImageParameters,"version",function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())}),"mapimagelayerview-update")},t.prototype.detach=function(){this.strategy.destroy(),this.handles.remove("mapimagelayerview-update"),this._exportImageParameters.layer=null,this._exportImageParameters.destroy(),this._exportImageParameters=null,this._exportImageVersion=-1,this.container.removeAllChildren()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return d.createQueryGeometry(e,t,this.view)},t.prototype.doRefresh=function(){return s(this,void 0,void 0,function(){return o(this,function(e){return this.requestUpdate(),[2]})})},t.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},t.prototype.fetchImage=function(e,t,a,i){return this.layer.fetchImage(e,t,a,r({timeExtent:this._exportImageParameters.timeExtent,timestamp:this.refreshTimestamp},i))},i([h.property()],t.prototype,"strategy",void 0),i([h.property({dependsOn:["strategy.updating"]})],t.prototype,"updating",void 0),t=i([h.subclass("esri.views.2d.layers.MapImageLayerView2D")],t)}(h.declared(f.MapImageLayerView(w.RefreshableLayerView(y.BitmapLayerView2D(c.LayerView2D(l))))))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/support/popupUtils2D.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/support/popupUtils2D.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,n,o){function a(e,t,r){var n=r.get("state.resolution"),a="number"==typeof n?n:1,x=t*a,i=e.clone().offset(-x,-x),c=e.clone().offset(x,x),f=r.spatialReference;return new o({xmin:Math.min(i.x,c.x),ymin:Math.min(i.y,c.y),xmax:Math.max(i.x,c.x),ymax:Math.max(i.y,c.y),spatialReference:f})}Object.defineProperty(t,"__esModule",{value:!0}),t.createQueryGeometry=a}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/layers/MapImageLayerView.js":
/*!**********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/layers/MapImageLayerView.js ***!
  \**********************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../renderers/support/clickToleranceUtils */ "./node_modules/arcgis-js-api/renderers/support/clickToleranceUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,a,o,u,c,n,s,i){Object.defineProperty(r,"__esModule",{value:!0}),r.MapImageLayerView=function(e){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype.fetchPopupFeatures=function(e){return u(this,void 0,void 0,function(){var r,t,a,s,p,l,f=this;return o(this,function(d){switch(d.label){case 0:return r=this.layer,e?(t=this.get("view.scale"),a=[],s=function(e){var r=0===e.minScale||t<=e.minScale,o=0===e.maxScale||t>=e.maxScale;e.visible&&r&&o&&(e.sublayers?e.sublayers.forEach(s):e.popupTemplate&&e.popupEnabled&&a.push(e))},r.sublayers.forEach(s),p=a.map(function(r){return u(f,void 0,void 0,function(){var t,a,u,c;return o(this,function(o){switch(o.label){case 0:return[4,r.popupTemplate.getRequiredFields()];case 1:return t=o.sent(),a=r.createQuery(),u=i.calculateTolerance(r.renderer),a.geometry=this.createFetchPopupFeaturesQueryGeometry(e,u),a.outFields=t,[4,r.queryFeatures(a)];case 2:return c=o.sent(),[2,c.features]}})})}),[4,n.eachAlways(p)]):[2,n.reject(new c("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}))];case 1:return l=d.sent(),[2,l.reduce(function(e,r){return e.concat(r.value)},[]).filter(function(e){return null!=e})]}})})},a([s.property()],r.prototype,"layer",void 0),r=a([s.subclass("esri.views.layers.MapImageLayerView")],r)}(s.declared(e))}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=90.js.map