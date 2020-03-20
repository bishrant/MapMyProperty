(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/layers/CSVLayer":"./node_modules/arcgis-js-api/layers/CSVLayer.js",
	"arcgis-js-api/layers/graphics/data/QueryEngineCapabilities":"./node_modules/arcgis-js-api/layers/graphics/data/QueryEngineCapabilities.js",
	"arcgis-js-api/layers/graphics/sources/CSVSource":"./node_modules/arcgis-js-api/layers/graphics/sources/CSVSource.js",
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
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/arcgis-js-api/layers/CSVLayer.js":
/*!*******************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/CSVLayer.js ***!
  \*******************************************************/
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

/**
 * The CSVLayer is a point layer based on a CSV file (.csv, .txt). CSV is a plain-text file format used to represent tabular data,
 * including geographic point features (latitude, longitude). Typically the latitude coordinate is the Y value, and the
 * longitude coordinate is the X value. Features from the CSV file are accessible via the API so you can query
 * features and use them as input to geometry or geoprocessing services.
 *
 * If CSV files are not on the same domain as your website, a [CORS enabled server](../guide/cors/index.html) or a [proxy](../guide/proxies/index.html) is
 * required. The following snippet shows how to add a new CSVLayer instance to a map.
 *
 * ```js
 * var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.csv";
 *
 * var csvLayer = new CSVLayer({
 *  url: url,
 *  copyright: "USGS Earthquakes"
 * });
 * map.add(csvLayer);  // adds the layer to the map
 * ```
 *
 * @module esri/layers/CSVLayer
 * @since 4.1
 * @see [Sample - Intro to CSVLayer](../sample-code/layers-csv/index.html)
 * @see [Sample - CSVLayer - Project points on the fly](../sample-code/layers-csv-projection/index.html)
 * @see module:esri/Map
 */

//  copyright

/**
             * Copyright information for the layer.
             *
             * @name copyright
             * @instance
             * @memberof module:esri/layers/CSVLayer
             * @type {string}
             */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/paramHelper */ "./node_modules/arcgis-js-api/core/tsSupport/paramHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./FeatureLayer */ "./node_modules/arcgis-js-api/layers/FeatureLayer.js"),__webpack_require__(/*! ./graphics/data/QueryEngineCapabilities */ "./node_modules/arcgis-js-api/layers/graphics/data/QueryEngineCapabilities.js"),__webpack_require__(/*! ./graphics/sources/CSVSource */ "./node_modules/arcgis-js-api/layers/graphics/sources/CSVSource.js"),__webpack_require__(/*! ../tasks/support/Query */ "./node_modules/arcgis-js-api/tasks/support/Query.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,i,n,p,a,s,l,u,d,y,c,f){return function(e){function t(t,r){var o=e.call(this,t)||this;return o.delimiter=null,o.fields=null,o.latitudeField=null,o.locationType="coordinates",o.longitudeField=null,o.operationalLayerType="CSV",o.outFields=["*"],o.path=null,o.portalItem=null,o.spatialReference=s.SpatialReference.WGS84,o.source=null,o.type="csv",o}return r(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?i({url:e},t):e},Object.defineProperty(t.prototype,"capabilities",{get:function(){return{data:{supportsAttachment:!1,supportsM:!1,supportsZ:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsQuery:!0,supportsResizeAttachments:!1,supportsUpdate:!1},query:y.queryCapabilities,queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasService",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isTable",{get:function(){return this.loaded&&null==this.geometryType},enumerable:!0,configurable:!0}),t.prototype.readWebMapLabelsVisible=function(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)},Object.defineProperty(t.prototype,"url",{set:function(e){this._set("url",e)},enumerable:!0,configurable:!0}),t.prototype.createGraphicsSource=function(e){return p(this,void 0,void 0,function(){var t;return a(this,function(r){switch(r.label){case 0:return t=new c.default({delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url}),this._set("source",t),[4,t.load({signal:e})];case 1:return r.sent(),this.read({locationInfo:t.locationInfo,columnDelimiter:t.columnDelimiter},{origin:"service",url:this.parsedUrl}),[2,t]}})})},t.prototype.queryFeatures=function(e,t){var r=this;return this.load().then(function(){return r.source.queryFeatures(f.from(e)||r.createQuery())}).then(function(e){if(e&&e.features)for(var t=0,o=e.features;t<o.length;t++){var i=o[t];i.layer=i.sourceLayer=r}return e})},t.prototype.queryObjectIds=function(e,t){var r=this;return this.load().then(function(){return r.source.queryObjectIds(f.from(e)||r.createQuery())})},t.prototype.queryFeatureCount=function(e,t){var r=this;return this.load().then(function(){return r.source.queryFeatureCount(f.from(e)||r.createQuery())})},t.prototype.queryExtent=function(e,t){var r=this;return this.load().then(function(){return r.source.queryExtent(f.from(e)||r.createQuery())})},t.prototype._verifyFields=function(){},t.prototype._verifySource=function(){},t.prototype._hasMemorySource=function(){return!0},o([u.property({readOnly:!0,dependsOn:["loaded"],json:{read:!1,write:!1}})],t.prototype,"capabilities",null),o([u.property({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],t.prototype,"delimiter",void 0),o([u.property({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],t.prototype,"fields",void 0),o([u.property({readOnly:!0})],t.prototype,"hasService",null),o([u.property({type:Boolean,readOnly:!0,dependsOn:["loaded"]})],t.prototype,"isTable",null),o([u.reader("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],t.prototype,"readWebMapLabelsVisible",null),o([u.property({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],t.prototype,"latitudeField",void 0),o([u.property({type:["show","hide"]})],t.prototype,"listMode",void 0),o([u.property({type:String,json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],t.prototype,"locationType",void 0),o([u.property({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],t.prototype,"longitudeField",void 0),o([u.property({type:["CSV"]})],t.prototype,"operationalLayerType",void 0),o([u.property()],t.prototype,"outFields",void 0),o([u.property({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],t.prototype,"path",void 0),o([u.property({json:{read:!1,write:!1}})],t.prototype,"portalItem",void 0),o([u.property({json:{read:!1},cast:null,type:c.default,readOnly:!0})],t.prototype,"source",void 0),o([u.property({json:{read:!1},value:"csv",readOnly:!0})],t.prototype,"type",void 0),o([u.property({json:{read:l.read,write:l.write}})],t.prototype,"url",null),t=o([u.subclass("esri.layers.CSVLayer")],t)}(u.declared(d))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/graphics/data/QueryEngineCapabilities.js":
/*!************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/data/QueryEngineCapabilities.js ***!
  \************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,s){Object.defineProperty(s,"__esModule",{value:!0}),s.queryCapabilities={supportsStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/graphics/sources/CSVSource.js":
/*!*************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/sources/CSVSource.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../../../core/Loadable */ "./node_modules/arcgis-js-api/core/Loadable.js"),__webpack_require__(/*! ../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../core/requireUtils */ "./node_modules/arcgis-js-api/core/requireUtils.js"),__webpack_require__(/*! ../../../core/workers */ "./node_modules/arcgis-js-api/core/workers.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../tasks/support/FeatureSet */ "./node_modules/arcgis-js-api/tasks/support/FeatureSet.js"),__webpack_require__.dj.m(module)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,o,r,n,i,s,u,c,p,l,a,d,y,h,f){Object.defineProperty(t,"__esModule",{value:!0}),u.add("esri-workers-for-memory-layers",!1);var v=function(t){function c(e){var o=t.call(this,e)||this;return o.type="csv",o}return o(c,t),c.prototype.load=function(e){var t=p.isSome(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),this.when()},c.prototype.destroy=function(){this._connection&&this._connection.close()},c.prototype.openPorts=function(){var e=this;return this.load().then(function(){return e._connection.openPorts()})},c.prototype.queryFeatures=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then(function(){return o._connection.invoke("queryFeatures",e?e.toJSON():null,t)}).then(function(e){return h.fromJSON(e)})},c.prototype.queryFeaturesJSON=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then(function(){return o._connection.invoke("queryFeatures",e?e.toJSON():null,t)})},c.prototype.queryFeatureCount=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then(function(){return o._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)})},c.prototype.queryObjectIds=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then(function(){return o._connection.invoke("queryObjectIds",e?e.toJSON():null,t)})},c.prototype.queryExtent=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then(function(){return o._connection.invoke("queryExtent",e?e.toJSON():null,t)}).then(function(e){return{count:e.count,extent:s.Extent.fromJSON(e.extent)}})},c.prototype._startWorker=function(t){return i(this,void 0,void 0,function(){var o,r;return n(this,function(n){switch(n.label){case 0:return u("esri-webpack")?[4,l.create(function(t){return Promise.all(/*! AMD require */[__webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(18), __webpack_require__.e(20), __webpack_require__.e(26), __webpack_require__.e(30), __webpack_require__.e(33), __webpack_require__.e(40), __webpack_require__.e(65)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./support/CSVSourceWorker */ "./node_modules/arcgis-js-api/layers/graphics/sources/support/CSVSourceWorker.js")]; (t).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})]:[3,2];case 1:n.sent(),n.label=2;case 2:return o=this,[4,d.open(a.getAbsMid("./support/CSVSourceWorker",e,f),{strategy:u("esri-workers-for-memory-layers")?"dedicated":"local",signal:t})];case 3:return o._connection=n.sent(),[4,this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map(function(e){return e.toJSON()}),latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:t})];case 4:return r=n.sent(),this.locationInfo=r.locationInfo,this.sourceJSON=r.layerDefinition,this.columnDelimiter=r.columnDelimiter,[2]}})})},r([y.property()],c.prototype,"type",void 0),r([y.property()],c.prototype,"url",void 0),r([y.property()],c.prototype,"delimiter",void 0),r([y.property()],c.prototype,"fields",void 0),r([y.property()],c.prototype,"latitudeField",void 0),r([y.property()],c.prototype,"longitudeField",void 0),r([y.property()],c.prototype,"spatialReference",void 0),r([y.property()],c.prototype,"timeInfo",void 0),r([y.property()],c.prototype,"locationInfo",void 0),r([y.property()],c.prototype,"sourceJSON",void 0),r([y.property()],c.prototype,"columnDelimiter",void 0),c=r([y.subclass("esri.layers.graphics.sources.CSVSource")],c)}(y.declared(c));t.default=v}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

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
//# sourceMappingURL=56.js.map