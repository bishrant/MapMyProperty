(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/TimeInterval":"./node_modules/arcgis-js-api/TimeInterval.js",
	"arcgis-js-api/layers/mixins/TemporalLayer":"./node_modules/arcgis-js-api/layers/mixins/TemporalLayer.js",
	"arcgis-js-api/layers/support/TimeInfo":"./node_modules/arcgis-js-api/layers/support/TimeInfo.js",
	"arcgis-js-api/layers/support/TimeReference":"./node_modules/arcgis-js-api/layers/support/TimeReference.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/arcgis-js-api/TimeInterval.js":
/*!****************************************************!*\
  !*** ./node_modules/arcgis-js-api/TimeInterval.js ***!
  \****************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ./core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ./core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ./core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./layers/support/timeUtils */ "./node_modules/arcgis-js-api/layers/support/timeUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,o,n,u){return function(e){function t(t){var r=e.call(this,t)||this;return r.value=0,r.unit="milliseconds",r}r(t,e),o=t,t.prototype.toMilliseconds=function(){return this.value*u.millisecondsPerTimeUnit[this.unit]},t.prototype.clone=function(){return new o({value:this.value,unit:this.unit})};var o;return i([n.property({type:Number,json:{write:!0},nonNullable:!0})],t.prototype,"value",void 0),i([n.property({type:u.timeUnitKebabDictionary.apiValues,json:{type:u.timeUnitKebabDictionary.jsonValues,read:u.timeUnitKebabDictionary.read,write:u.timeUnitKebabDictionary.write},nonNullable:!0})],t.prototype,"unit",void 0),t=o=i([n.subclass("esri.TimeInterval")],t)}(n.declared(o.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/mixins/TemporalLayer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/mixins/TemporalLayer.js ***!
  \*******************************************************************/
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
                 * TimeInfo provides information such as date fields that store
                 * {@link module:esri/layers/support/TimeInfo#startField start}
                 * and {@link module:esri/layers/support/TimeInfo#endField end} time
                 * for each feature and the {@link module:esri/layers/support/TimeInfo#fullTimeExtent fullTimeExtent}
                 * for the layer. The `timeInfo` property, along with its `startField` and `endField` properties, must be set at the
                 * time of layer initialization if it is being set for a
                 * {@link module:esri/layers/GeoJSONLayer}, {@link module:esri/layers/CSVLayer} or
                 * {@link module:esri/layers/FeatureLayer} initialized from
                 * [client-side features](esri-layers-FeatureLayer.html#creating-a-featurelayer).
                 * The {@link module:esri/layers/support/TimeInfo#fullTimeExtent fullTimeExtent} for `timeInfo` is
                 * automatically calculated based on its `startField` and `endField` properties.
                 * The timeInfo parameters cannot be changed after the layer is {@link module:esri/layers/FeatureLayer#load loaded}.
                 *
                 * @name timeInfo
                 * @type {module:esri/layers/support/TimeInfo}
                 * @memberof module:esri/layers/mixins/TemporalLayer
                 * @default null
                 * @since 4.11
                 * @autocast
                 *
                 * @example
                 * // create geojson layer from usgs earthquakes geojson feed
                 * const geojsonLayer = new GeoJSONLayer({
                 *   url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",
                 *   copyright: "USGS Earthquakes",
                 *   fields: [
                 *     { "name": "mag", "type": "double" },
                 *     { "name": "place", "type": "string" },
                 *     { "name": "time", "type": "date" }, // date field
                 *     { "name": "depth", "type": "double" }
                 *   ],
                 *   // timeInfo can be used to do temporal queries
                 *   // set the startField and endField.
                 *   // timeExtent is automatically calculated from the
                 *   // the start and end date fields
                 *   timeInfo: {
                 *     startField: "time"
                 *   }
                 * });
                 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../TimeExtent */ "./node_modules/arcgis-js-api/TimeExtent.js"),__webpack_require__(/*! ../../TimeInterval */ "./node_modules/arcgis-js-api/TimeInterval.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../layers/support/TimeInfo */ "./node_modules/arcgis-js-api/layers/support/TimeInfo.js"),__webpack_require__(/*! ../support/fieldUtils */ "./node_modules/arcgis-js-api/layers/support/fieldUtils.js"),__webpack_require__(/*! ../support/timeUtils */ "./node_modules/arcgis-js-api/layers/support/timeUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,i,n,p,s,l,u){Object.defineProperty(t,"__esModule",{value:!0}),t.TemporalLayer=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.timeExtent=null,t.timeOffset=null,t.useViewTime=!0,t}return r(t,e),t.prototype.readOffset=function(e,t){var r=t.timeInfo.exportOptions;if(!r)return null;var o=r.timeOffset,i=u.timeUnitKebabDictionary.fromJSON(r.timeOffsetUnits);return o&&i?new n({value:o,unit:i}):null},Object.defineProperty(t.prototype,"timeInfo",{set:function(e){l.fixTimeInfoFields(e,this.fields),this._set("timeInfo",e)},enumerable:!0,configurable:!0}),o([p.property({type:i,json:{write:!1}})],t.prototype,"timeExtent",void 0),o([p.property({type:n})],t.prototype,"timeOffset",void 0),o([p.reader("service","timeOffset",["timeInfo.exportOptions"])],t.prototype,"readOffset",null),o([p.property({value:null,type:s,json:{write:!0,origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),o([p.property({type:Boolean,json:{write:!1}})],t.prototype,"useViewTime",void 0),t=o([p.subclass("esri.layers.mixins.TemporalLayer")],t)}(p.declared(e))}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/TimeInfo.js":
/*!***************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/TimeInfo.js ***!
  \***************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../TimeExtent */ "./node_modules/arcgis-js-api/TimeExtent.js"),__webpack_require__(/*! ../../TimeInterval */ "./node_modules/arcgis-js-api/TimeInterval.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./TimeReference */ "./node_modules/arcgis-js-api/layers/support/TimeReference.js"),__webpack_require__(/*! ./timeUtils */ "./node_modules/arcgis-js-api/layers/support/timeUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,l,n,o,a,u,p,m){return function(e){function t(t){var r=e.call(this,t)||this;return r.cumulative=!1,r.endField=null,r.fullTimeExtent=null,r.hasLiveData=!1,r.interval=null,r.startField=null,r.timeReference=null,r.trackIdField=null,r.useTime=!0,r}r(t,e),o=t,t.prototype.readFullTimeExtent=function(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;var r=t.timeExtent[0],i=t.timeExtent[1];return new l({start:r,end:i})},t.prototype.writeFullTimeExtent=function(e,t){e&&e.start&&e.end?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null},t.prototype.readInterval=function(e,t){return t.timeInterval&&t.timeIntervalUnits?new n({value:t.timeInterval,unit:m.timeUnitKebabDictionary.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new n({value:t.defaultTimeInterval,unit:m.timeUnitKebabDictionary.fromJSON(t.defaultTimeIntervalUnits)}):null},t.prototype.writeInterval=function(e,t){if(e){var r=e.toJSON();t.timeInterval=r.value,t.timeIntervalUnits=r.unit}else t.timeInterval=null,t.timeIntervalUnits=null},t.prototype.clone=function(){var e=this,t=e.cumulative,r=e.endField,i=e.hasLiveData,l=e.interval,n=e.startField,u=e.timeReference,p=e.fullTimeExtent,m=e.trackIdField,d=e.useTime;return new o({cumulative:t,endField:r,hasLiveData:i,interval:l,startField:n,timeReference:a.clone(u),fullTimeExtent:a.clone(p),trackIdField:m,useTime:d})};var o;return i([u.property({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],t.prototype,"cumulative",void 0),i([u.property({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],t.prototype,"endField",void 0),i([u.property({type:l,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"fullTimeExtent",void 0),i([u.reader("fullTimeExtent",["timeExtent"])],t.prototype,"readFullTimeExtent",null),i([u.writer("fullTimeExtent")],t.prototype,"writeFullTimeExtent",null),i([u.property({type:Boolean,json:{write:!0}})],t.prototype,"hasLiveData",void 0),i([u.property({type:n,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"interval",void 0),i([u.reader("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],t.prototype,"readInterval",null),i([u.writer("interval")],t.prototype,"writeInterval",null),i([u.property({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],t.prototype,"startField",void 0),i([u.property({type:p,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"timeReference",void 0),i([u.property({type:String,json:{write:{enabled:!0,allowNull:!0}}})],t.prototype,"trackIdField",void 0),i([u.property({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],t.prototype,"useTime",void 0),t=o=i([u.subclass("esri.layers.support.TimeInfo")],t)}(u.declared(o.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/TimeReference.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/TimeReference.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,o,n){return function(e){function t(t){var r=e.call(this,t)||this;return r.respectsDaylightSaving=!1,r.timezone=null,r}r(t,e),o=t,t.prototype.readRespectsDaylightSaving=function(e,t){return void 0!==t.respectsDaylightSaving?t.respectsDaylightSaving:void 0!==t.respectDaylightSaving&&t.respectDaylightSaving},t.prototype.clone=function(){var e=this,t=e.respectsDaylightSaving,r=e.timezone;return new o({respectsDaylightSaving:t,timezone:r})};var o;return i([n.property({type:Boolean,json:{write:!0}})],t.prototype,"respectsDaylightSaving",void 0),i([n.reader("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],t.prototype,"readRespectsDaylightSaving",null),i([n.property({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],t.prototype,"timezone",void 0),t=o=i([n.subclass("esri.layers.support.TimeReference")],t)}(n.declared(o.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=13.js.map