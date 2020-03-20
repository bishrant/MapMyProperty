(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/core/queryUtils":"./node_modules/arcgis-js-api/core/queryUtils.js",
	"arcgis-js-api/tasks/ServiceAreaTask":"./node_modules/arcgis-js-api/tasks/ServiceAreaTask.js",
	"arcgis-js-api/tasks/mixins/NAServiceDescription":"./node_modules/arcgis-js-api/tasks/mixins/NAServiceDescription.js",
	"arcgis-js-api/tasks/support/GPMessage":"./node_modules/arcgis-js-api/tasks/support/GPMessage.js",
	"arcgis-js-api/tasks/support/NAMessage":"./node_modules/arcgis-js-api/tasks/support/NAMessage.js",
	"arcgis-js-api/tasks/support/ServiceAreaSolveResult":"./node_modules/arcgis-js-api/tasks/support/ServiceAreaSolveResult.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91],{

/***/ "./node_modules/arcgis-js-api/core/queryUtils.js":
/*!*******************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/queryUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r){function t(e){return new o(e)}Object.defineProperty(r,"__esModule",{value:!0});var n=function(e){if(!Array.isArray(e))return!1;var r=e[0];return"number"==typeof r||"string"==typeof r},o=function(){function e(e){void 0===e&&(e={}),this._options=e}return e.prototype.toQueryParams=function(e){var r=this;if(!e)return null;var t=e.toJSON(),o={};return Object.keys(t).forEach(function(e){var i=r._options[e];if(i){var u="boolean"!=typeof i&&i.name?i.name:e,a="boolean"!=typeof i&&i.getter?i.getter(t):t[e];null!=a&&(o[u]=n(a)?a.join(","):"object"==typeof a?JSON.stringify(a):a)}else o[e]=t[e]},this),o},e}();r.createQueryParamsHelper=t}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/ServiceAreaTask.js":
/*!*************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/ServiceAreaTask.js ***!
  \*************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../core/queryUtils */ "./node_modules/arcgis-js-api/core/queryUtils.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../geometry/support/normalizeUtils */ "./node_modules/arcgis-js-api/geometry/support/normalizeUtils.js"),__webpack_require__(/*! ./Task */ "./node_modules/arcgis-js-api/tasks/Task.js"),__webpack_require__(/*! ./mixins/NAServiceDescription */ "./node_modules/arcgis-js-api/tasks/mixins/NAServiceDescription.js"),__webpack_require__(/*! ./support/ServiceAreaSolveResult */ "./node_modules/arcgis-js-api/tasks/support/ServiceAreaSolveResult.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,i,s,o,a,n,u,l,c,p,f){var m=n.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});return function(e){function r(r){var t=e.call(this,r)||this;return t.url=null,t}return i(r,e),r.prototype.solve=function(e,r){var i=this,s=[],n=[],u={},c={};return e.facilities&&e.facilities.features&&this._collectGeometries(e.facilities.features,n,"facilities.features",u),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,n,"pointBarriers.features",u),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,n,"polylineBarriers.features",u),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,n,"polygonBarriers.features",u),l.normalizeCentralMeridian(n).then(function(e){for(var r in u){var t=u[r];s.push(r),c[r]=e.slice(t[0],t[1])}return i._isInputGeometryZAware(c,s)?i.getServiceDescription():a.resolve({dontCheck:!0})}).then(function(a){("dontCheck"in a?a.dontCheck:a.hasZ)||i._dropZValuesOffInputGeometry(c,s);for(var n in c)!function(r){c[r].forEach(function(t,i){e.get(r)[i].geometry=t})}(n);var u={query:t({},i.parsedUrl.query,{f:"json"},m.toQueryParams(e))};return(i.requestOptions||r)&&(u=t({},i.requestOptions,r,u)),o(i.parsedUrl.path+"/solveServiceArea",u)}).then(function(e){return f.fromJSON(e.data)})},r.prototype._collectGeometries=function(e,r,t,i){i[t]=[r.length,r.length+e.length],e.forEach(function(e){r.push(e.geometry)})},s([u.property()],r.prototype,"url",void 0),r=s([u.subclass("esri.tasks.ServiceAreaTask")],r)}(u.declared(p.NAServiceDescriptionMixin(c)))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/mixins/NAServiceDescription.js":
/*!*************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/mixins/NAServiceDescription.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../core/object */ "./node_modules/arcgis-js-api/core/object.js"),__webpack_require__(/*! ../../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../Task */ "./node_modules/arcgis-js-api/tasks/Task.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,s,o,i,n,a,u,l,c,d,p){function v(e){return i(this,void 0,void 0,function(){var r,t,s,i;return o(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,n(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}})];case 1:return r=o.sent().data,t=r.supportedTravelModes,s=r.defaultTravelMode,[2,{supportedTravelModes:t,defaultTravelMode:s}];case 2:throw i=o.sent(),new a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:i});case 3:return[2]}})})}function f(e){return i(this,void 0,void 0,function(){var r,t,s,i,a,u,d,p,v,f,h,M,T,g,y,m;return o(this,function(o){switch(o.label){case 0:return[4,n(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}})];case 1:return(r=o.sent().data)&&r.owningSystemUrl?(e=r.owningSystemUrl,[4,n(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}})]):[2,{supportedTravelModes:[],defaultTravelMode:null}];case 2:return t=o.sent().data,(s=l.getDeepValue("helperServices.routingUtilities.url",t))?(i=c.urlToObject(e),a=/\/solveClosestFacility$/.test(i.path)?"Route":/\/solveClosestFacility$/.test(i.path)?"ClosestFacility":"ServiceAreas",[4,n(s+("/"===s[s.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:a}})]):[2,{supportedTravelModes:[],defaultTravelMode:null}];case 3:if(u=o.sent(),d=[],p=null,u&&u.data&&u.data.results&&u.data.results.length)for(v=u.data.results,f=0,h=v;f<h.length;f++)if(M=h[f],"supportedTravelModes"===M.paramName){if(M.value&&M.value.features)for(T=0,g=M.value.features;T<g.length;T++)(y=g[T].attributes)&&(m=JSON.parse(y.TravelMode),d.push(m))}else"defaultTravelMode"===M.paramName&&(p=M.value);return[2,{supportedTravelModes:d,defaultTravelMode:p}]}})})}Object.defineProperty(r,"__esModule",{value:!0}),r.NAServiceDescriptionMixin=function(e){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return s(r,e),r.prototype.getServiceDescription=function(){return i(this,void 0,void 0,function(){return o(this,function(e){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription()),[2,this._serviceDescriptionPromise]})})},r.prototype._fetchServiceDescription=function(){return i(this,void 0,void 0,function(){var e,r,t,s,i,u,l;return o(this,function(o){switch(o.label){case 0:if(!this.url||!this.parsedUrl)throw new a("network-service:missing-url","Url to Network service is missing");return e=this.url,[4,n(e,{query:{f:"json"}})];case 1:for(r=o.sent().data,r.supportedTravelModes||(r.supportedTravelModes=[]),t=0;t<r.supportedTravelModes.length;t++)r.supportedTravelModes[t].id||(r.supportedTravelModes[t].id=r.supportedTravelModes[t].itemId);return s=r.currentVersion>=10.4?v(e):f(e),[4,s];case 2:return i=o.sent(),u=i.defaultTravelMode,l=i.supportedTravelModes,r.defaultTravelMode=u,r.supportedTravelModes=l,[2,r]}})})},r.prototype._isInputGeometryZAware=function(e,r){for(var t=0;t<r.length;t++){var s=e[r[t]];if(s&&s.length)for(var o=0,i=s;o<i.length;o++){var n=i[o];if(u.isSome(n)&&n.hasZ)return!0}}return!1},r.prototype._dropZValuesOffInputGeometry=function(e,r){for(var t=0;t<r.length;t++){var s=e[r[t]];if(s&&s.length)for(var o=0,i=s;o<i.length;o++){var n=i[o];n.z=void 0}}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")},r=t([d.subclass("esri.tasks.mixins.NAServiceDescription")],r)}(d.declared(e))};var h=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return s(r,e),r=t([d.subclass("esri.tasks.mixins.NAServiceDescription")],r)}(d.declared(r.NAServiceDescriptionMixin(p)));r.NAServiceDescription=h}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/GPMessage.js":
/*!***************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/GPMessage.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,s,o,t,p,i){var n=new t.default({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});return function(e){function r(r){var s=e.call(this,r)||this;return s.description=null,s.type=null,s}return s(r,e),o([i.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),o([i.property({type:String,json:{read:n.read,write:n.write}})],r.prototype,"type",void 0),r=o([i.subclass("esri.tasks.support.GPMessage")],r)}(i.declared(p.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/NAMessage.js":
/*!***************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/NAMessage.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./GPMessage */ "./node_modules/arcgis-js-api/tasks/support/GPMessage.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,s,p,n){var a=new s.default({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});return function(e){function r(r){var t=e.call(this,r)||this;return t.type=null,t}return t(r,e),o([p.property({type:String,json:{read:a.read,write:a.write}})],r.prototype,"type",void 0),r=o([p.subclass("esri.tasks.support.NAMessage")],r)}(p.declared(n))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/ServiceAreaSolveResult.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/ServiceAreaSolveResult.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../../Graphic */ "./node_modules/arcgis-js-api/Graphic.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../geometry/SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js"),__webpack_require__(/*! ./NAMessage */ "./node_modules/arcgis-js-api/tasks/support/NAMessage.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,o,t,n,i,p,a,l,s,y){function u(e){return e.features.map(function(r){var o=s.fromJSON(e.spatialReference),t=i.fromJSON(r);return a.expect(t.geometry).spatialReference=o,t})}function c(e){return e.features.map(function(r){return r.geometry.spatialReference=e.spatialReference,n.fromJSON(r.geometry)})}return function(e){function r(r){var o=e.call(this,r)||this;return o.facilities=null,o.messages=null,o.pointBarriers=null,o.polylineBarriers=null,o.polygonBarriers=null,o.serviceAreaPolylines=null,o.serviceAreaPolygons=null,o}return o(r,e),r.prototype.readFacilities=function(e){return c(e)},r.prototype.readPointBarriers=function(e,r){return c(r.barriers)},r.prototype.readPolylineBarriers=function(e){return c(e)},r.prototype.readPolygonBarriers=function(e){return c(e)},r.prototype.readIncidents=function(e,r){return u(r.saPolylines)},r.prototype.readServiceAreaPolygons=function(e,r){return u(r.saPolygons)},t([l.property({type:[n.Point]})],r.prototype,"facilities",void 0),t([l.reader("facilities")],r.prototype,"readFacilities",null),t([l.property({type:[y]})],r.prototype,"messages",void 0),t([l.property({type:[n.Point]})],r.prototype,"pointBarriers",void 0),t([l.reader("pointBarriers",["barriers"])],r.prototype,"readPointBarriers",null),t([l.property({type:[n.Polyline]})],r.prototype,"polylineBarriers",void 0),t([l.reader("polylineBarriers")],r.prototype,"readPolylineBarriers",null),t([l.property({type:[n.Polygon]})],r.prototype,"polygonBarriers",void 0),t([l.reader("polygonBarriers")],r.prototype,"readPolygonBarriers",null),t([l.property({type:[i]})],r.prototype,"serviceAreaPolylines",void 0),t([l.reader("serviceAreaPolylines",["saPolylines"])],r.prototype,"readIncidents",null),t([l.property({type:[i]})],r.prototype,"serviceAreaPolygons",void 0),t([l.reader("serviceAreaPolygons",["saPolygons"])],r.prototype,"readServiceAreaPolygons",null),r=t([l.subclass("esri.tasks.support.ServiceAreaSolveResult")],r)}(l.declared(p.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=91.js.map