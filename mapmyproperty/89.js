(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/layers/mixins/RefreshableLayer":"./node_modules/arcgis-js-api/layers/mixins/RefreshableLayer.js",
	"arcgis-js-api/layers/support/layerSourceUtils":"./node_modules/arcgis-js-api/layers/support/layerSourceUtils.js",
	"esri/renderers":"./node_modules/arcgis-js-api/renderers.js",
	"arcgis-js-api/renderers":"./node_modules/arcgis-js-api/renderers.js",
	"esri/renderers/visualVariables/support/sizeVariableUtils":"./node_modules/arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils.js",
	"arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils":"./node_modules/arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils.js",
	"esri/symbols/support/defaults":"./node_modules/arcgis-js-api/symbols/support/defaults.js",
	"arcgis-js-api/symbols/support/defaults":"./node_modules/arcgis-js-api/symbols/support/defaults.js",
	"arcgis-js-api/symbols/support/defaultsJSON":"./node_modules/arcgis-js-api/symbols/support/defaultsJSON.js",
	"esri/tasks/support/QuantizationParameters":"./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js",
	"arcgis-js-api/tasks/support/QuantizationParameters":"./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./node_modules/arcgis-js-api/layers/mixins/RefreshableLayer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/mixins/RefreshableLayer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,n){Object.defineProperty(r,"__esModule",{value:!0}),r.RefreshableLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.refreshInterval=0,r}return t(r,e),r.prototype.refresh=function(){this.emit("refresh")},o([n.property({type:Number,cast:function(e){return e>=.1?e:e<=0?0:.1},json:{write:!0,origins:{"web-document":{write:!0}}}})],r.prototype,"refreshInterval",void 0),r=o([n.subclass("esri.layers.mixins.RefreshableLayer")],r)}(n.declared(e))}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
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

/***/ "./node_modules/arcgis-js-api/renderers.js":
/*!*************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers.js ***!
  \*************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./renderers/ClassBreaksRenderer */ "./node_modules/arcgis-js-api/renderers/ClassBreaksRenderer.js"),__webpack_require__(/*! ./renderers/DictionaryRenderer */ "./node_modules/arcgis-js-api/renderers/DictionaryRenderer.js"),__webpack_require__(/*! ./renderers/DotDensityRenderer */ "./node_modules/arcgis-js-api/renderers/DotDensityRenderer.js"),__webpack_require__(/*! ./renderers/HeatmapRenderer */ "./node_modules/arcgis-js-api/renderers/HeatmapRenderer.js"),__webpack_require__(/*! ./renderers/Renderer */ "./node_modules/arcgis-js-api/renderers/Renderer.js"),__webpack_require__(/*! ./renderers/SimpleRenderer */ "./node_modules/arcgis-js-api/renderers/SimpleRenderer.js"),__webpack_require__(/*! ./renderers/UniqueValueRenderer */ "./node_modules/arcgis-js-api/renderers/UniqueValueRenderer.js"),__webpack_require__(/*! ./renderers/support/jsonUtils */ "./node_modules/arcgis-js-api/renderers/support/jsonUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,n,s,d,a,i,t,R,p){function l(e){return e instanceof r.BaseRenderer}Object.defineProperty(r,"__esModule",{value:!0}),r.ClassBreaksRenderer=n,r.DictionaryRenderer=s,r.DotDensityRenderer=d,r.HeatmapRenderer=a,r.BaseRenderer=i,r.SimpleRenderer=t,r.UniqueValueRenderer=R,r.isRenderer=l,r.read=p.read,r.write=p.write,r.fromJSON=p.fromJSON,r.rendererTypes={key:"type",base:r.BaseRenderer,typeMap:{heatmap:r.HeatmapRenderer,simple:r.SimpleRenderer,"unique-value":r.UniqueValueRenderer,"class-breaks":r.ClassBreaksRenderer,"dot-density":r.DotDensityRenderer,dictionary:r.DictionaryRenderer}},r.webSceneRendererTypes={key:"type",base:r.BaseRenderer,typeMap:{simple:r.SimpleRenderer,"unique-value":r.UniqueValueRenderer,"class-breaks":r.ClassBreaksRenderer}}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils.js ***!
  \*******************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,n){function i(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function a(e){return null!=e&&!isNaN(e)&&isFinite(e)}function l(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}function r(e,n){var i=n||l(e),a=e.valueUnit||"unknown";return"unknown"===i?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===a?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}Object.defineProperty(n,"__esModule",{value:!0}),n.isSizeVariable=i,n.isValidNumber=a,n.getInputValueType=l,n.getTransformationType=r}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/symbols/support/defaults.js":
/*!****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/symbols/support/defaults.js ***!
  \****************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/compilerUtils */ "./node_modules/arcgis-js-api/core/compilerUtils.js"),__webpack_require__(/*! ../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../SimpleFillSymbol */ "./node_modules/arcgis-js-api/symbols/SimpleFillSymbol.js"),__webpack_require__(/*! ../SimpleLineSymbol */ "./node_modules/arcgis-js-api/symbols/SimpleLineSymbol.js"),__webpack_require__(/*! ../SimpleMarkerSymbol */ "./node_modules/arcgis-js-api/symbols/SimpleMarkerSymbol.js"),__webpack_require__(/*! ../TextSymbol */ "./node_modules/arcgis-js-api/symbols/TextSymbol.js"),__webpack_require__(/*! ./defaultsJSON */ "./node_modules/arcgis-js-api/symbols/support/defaultsJSON.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,l,o,r,t,S,n,y,m){function i(e){if(r.isNone(e))return null;switch(e.type){case"mesh":return null;case"point":case"multipoint":return l.defaultPointSymbol2D;case"polyline":return l.defaultPolylineSymbol2D;case"polygon":case"extent":return l.defaultPolygonSymbol2D;default:o.neverReached(e)}return null}Object.defineProperty(l,"__esModule",{value:!0}),l.defaultPointSymbol2D=n.fromJSON(m.defaultPointSymbolJSON),l.defaultPolylineSymbol2D=S.fromJSON(m.defaultPolylineSymbolJSON),l.defaultPolygonSymbol2D=t.fromJSON(m.defaultPolygonSymbolJSON),l.defaultTextSymbol2D=y.fromJSON(m.defaultTextSymbolJSON),l.getDefaultSymbol2D=i,l.errorPointSymbol2D=n.fromJSON(m.errorPointSymbolJSON),l.errorPolylineSymbol2D=S.fromJSON(m.errorPolylineSymbolJSON),l.errorPolygonSymbol2D=t.fromJSON(m.errorPolygonSymbolJSON)}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/symbols/support/defaultsJSON.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/symbols/support/defaultsJSON.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.defaultColor=[252,146,31,255],o.defaultOutlineColor=[153,153,153,255],o.defaultPointSymbolJSON={type:"esriSMS",style:"esriSMSCircle",size:6,color:o.defaultColor,outline:{width:.75,color:[153,153,153,255]}},o.defaultPolylineSymbolJSON={type:"esriSLS",style:"esriSLSSolid",width:.75,color:o.defaultColor},o.defaultPolygonSymbolJSON={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{width:.75,color:[255,255,255,191]}},o.defaultTextSymbolJSON={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},o.errorPointSymbolJSON={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},o.errorPolylineSymbolJSON={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},o.errorPolygonSymbolJSON={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,i,n,p,s,a){Object.defineProperty(t,"__esModule",{value:!0});var c=new n.default({upperLeft:"upper-left",lowerLeft:"lower-left"}),l=function(e){function t(t){var r=e.call(this,t)||this;return r.extent=null,r.mode="view",r.originPosition="upper-left",r.tolerance=1,r}r(t,e),n=t,t.prototype.clone=function(){return new n(s.clone({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))};var n;return o([a.property({type:i.Extent,json:{write:!0}})],t.prototype,"extent",void 0),o([a.property({type:["view","edit"],json:{write:!0}})],t.prototype,"mode",void 0),o([a.property({type:String,json:{read:c.read,write:c.write}})],t.prototype,"originPosition",void 0),o([a.property({type:Number,json:{write:!0}})],t.prototype,"tolerance",void 0),t=n=o([a.subclass("esri.tasks.support.QuantizationParameters")],t)}(a.declared(p.JSONSupport));t.default=l}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=89.js.map