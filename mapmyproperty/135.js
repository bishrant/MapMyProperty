(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/views/2d/layers/StreamLayerView2D":"./node_modules/arcgis-js-api/views/2d/layers/StreamLayerView2D.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[135],{

/***/ "./node_modules/arcgis-js-api/views/2d/layers/StreamLayerView2D.js":
/*!*************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/StreamLayerView2D.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../tasks/support/FeatureSet */ "./node_modules/arcgis-js-api/tasks/support/FeatureSet.js"),__webpack_require__(/*! ./FeatureLayerView2D */ "./node_modules/arcgis-js-api/views/2d/layers/FeatureLayerView2D.js"),__webpack_require__(/*! ./support/util */ "./node_modules/arcgis-js-api/views/2d/layers/support/util.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,n,i,a,s,u,p,c,l){function y(e){if(!e)return null;var r={};return e.geometry&&(r.geometry=e.geometry.toJSON()),e.where&&(r.where=e.where),r}return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._enabledDataRecieved=!1,r.errorString=null,r.connectionStatus="disconnected",r}return t(r,e),r.prototype.destroy=function(){this.connectionStatus="disconnected"},Object.defineProperty(r.prototype,"connectionError",{get:function(){if(this.errorString)return new s("stream-controller",this.errorString)},enumerable:!0,configurable:!0}),r.prototype.on=function(e,r){"data-received"===e&&(this._enabledDataRecieved=!0,this._proxy.enableEvent("data-received",!0));var t=this.inherited(arguments,[e,r]),o=this;return{remove:function(){t.remove(),o.hasEventListener("data-received")||o._proxy.enableEvent("data-received",!1)}}},r.prototype.queryLatestObservations=function(e,r){var t=this;return this._proxy.queryLatestObservations(this._cleanUpQuery(e),r).then(function(e){var r=p.fromJSON(e);return r.features.forEach(function(e){e.layer=t.layer,e.sourceLayer=t.layer}),r})},r.prototype._createClientOptions=function(){var e=this,r=this.inherited(arguments);return n({},r,{setProperty:function(r){e.set(r.propertyName,r.value)}})},r.prototype._createTileRendererHash=function(){var e=this.inherited(arguments),r=this.layer;return e+"."+(r.filter&&JSON.stringify(r.filter.geometry)+"."+r.filter.where)+"."+(r.purgeOptions&&r.purgeOptions.age+"."+r.purgeOptions.displayCount)+"."+r.maximumTrackPoints},r.prototype._createServiceOptions=function(){return a(this,void 0,void 0,function(){var e,r,t,o,n,a,s,u;return i(this,function(i){return e=this.layer,r=e.capabilities,t=e.objectIdField,o=e.fields.map(function(e){return e.toJSON()}),n=e.fullExtent&&e.fullExtent.toJSON(),a=l.toJSONGeometryType(e.geometryType),s=e.timeInfo&&e.timeInfo.toJSON()||null,u=this.layer.source,[2,{type:"stream",maxRecordCount:r.query.maxRecordCount,tileMaxRecordCount:r.query.tileMaxRecordCount,capabilities:r,fields:o,fullExtent:n,geometryType:a,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl.path,streamUrls:u.sourceJSON.streamUrls,content:this.layer.parsedUrl.query,serviceFilter:y(this.layer.filter),purgeOptions:this.layer.purgeOptions,maximumTrackPoints:this.layer.maximumTrackPoints,enableDataRecieved:this._enabledDataRecieved}]})})},o([u.property()],r.prototype,"errorString",void 0),o([u.property({dependsOn:["errorString"],readOnly:!0})],r.prototype,"connectionError",null),o([u.property()],r.prototype,"connectionStatus",void 0),r=o([u.subclass("esri.views.2d.layers.StreamLayerView2D")],r)}(u.declared(c))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=135.js.map