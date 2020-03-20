(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/tasks/ClosestFacilityTask":"./node_modules/arcgis-js-api/tasks/ClosestFacilityTask.js",
	"arcgis-js-api/tasks/support/ClosestFacilitySolveResult":"./node_modules/arcgis-js-api/tasks/support/ClosestFacilitySolveResult.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[117],{

/***/ "./node_modules/arcgis-js-api/tasks/ClosestFacilityTask.js":
/*!*****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/ClosestFacilityTask.js ***!
  \*****************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../core/queryUtils */ "./node_modules/arcgis-js-api/core/queryUtils.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../geometry/support/normalizeUtils */ "./node_modules/arcgis-js-api/geometry/support/normalizeUtils.js"),__webpack_require__(/*! ./Task */ "./node_modules/arcgis-js-api/tasks/Task.js"),__webpack_require__(/*! ./mixins/NAServiceDescription */ "./node_modules/arcgis-js-api/tasks/mixins/NAServiceDescription.js"),__webpack_require__(/*! ./support/ClosestFacilitySolveResult */ "./node_modules/arcgis-js-api/tasks/support/ClosestFacilitySolveResult.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,i,s,o,n,a,u,c,l,p,f){var m=a.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});return function(e){function r(r){var t=e.call(this,r)||this;return t.url=null,t}return i(r,e),r.prototype.solve=function(e,r){var i=this,s=[],a=[],u={},l={};return e.incidents&&e.incidents.features&&this._collectGeometries(e.incidents.features,a,"incidents.features",u),e.facilities&&e.facilities.features&&this._collectGeometries(e.facilities.features,a,"facilities.features",u),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,a,"pointBarriers.features",u),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,a,"polylineBarriers.features",u),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,a,"polygonBarriers.features",u),c.normalizeCentralMeridian(a).then(function(e){for(var r in u){var t=u[r];s.push(r),l[r]=e.slice(t[0],t[1])}return i._isInputGeometryZAware(l,s)?i.getServiceDescription():n.resolve({dontCheck:!0})}).then(function(n){("dontCheck"in n?n.dontCheck:n.hasZ)||i._dropZValuesOffInputGeometry(l,s);for(var a in l)!function(r){l[r].forEach(function(t,i){e.get(r)[i].geometry=t})}(a);var u={query:t({},i.parsedUrl.query,{f:"json"},m.toQueryParams(e))};return(i.requestOptions||r)&&(u=t({},i.requestOptions,r,u)),o(i.parsedUrl.path+"/solveClosestFacility",u)}).then(function(e){return f.fromJSON(e.data)})},r.prototype._collectGeometries=function(e,r,t,i){i[t]=[r.length,r.length+e.length],e.forEach(function(e){r.push(e.geometry)})},s([u.property()],r.prototype,"url",void 0),r=s([u.subclass("esri.tasks.ClosestFacilityTask")],r)}(u.declared(p.NAServiceDescriptionMixin(l)))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/ClosestFacilitySolveResult.js":
/*!********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/ClosestFacilitySolveResult.js ***!
  \********************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../../Graphic */ "./node_modules/arcgis-js-api/Graphic.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators/reader */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators/reader.js"),__webpack_require__(/*! ../../geometry/SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js"),__webpack_require__(/*! ./DirectionsFeatureSet */ "./node_modules/arcgis-js-api/tasks/support/DirectionsFeatureSet.js"),__webpack_require__(/*! ./FeatureSet */ "./node_modules/arcgis-js-api/tasks/support/FeatureSet.js"),__webpack_require__(/*! ./NAMessage */ "./node_modules/arcgis-js-api/tasks/support/NAMessage.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(r,e,t,o,p,i,n,a,s,l,u,y,c,d){function f(r){return r.features.map(function(e){var t=u.fromJSON(r.spatialReference),o=i.fromJSON(e);return a.isSome(o.geometry)&&(o.geometry.spatialReference=t),o})}function S(r){return c.fromJSON(r).features.map(function(r){return r.geometry})}return function(r){function e(e){var t=r.call(this,e)||this;return t.directions=null,t.facilities=null,t.incidents=null,t.messages=null,t.pointBarriers=null,t.polylineBarriers=null,t.polygonBarriers=null,t.routes=null,t}return t(e,r),e.prototype.readFacilities=function(r){return S(r)},e.prototype.readIncidents=function(r){return S(r)},e.prototype.readPointBarriers=function(r,e){return S(e.barriers)},e.prototype.readPolylineBarriers=function(r){return S(r)},e.prototype.readPolygonBarriers=function(r){return S(r)},e.prototype.readRoutes=function(r){return f(r)},o([s.property({type:y})],e.prototype,"directions",void 0),o([s.property({type:[p.Point]})],e.prototype,"facilities",void 0),o([l.reader("facilities")],e.prototype,"readFacilities",null),o([s.property({type:[p.Point]})],e.prototype,"incidents",void 0),o([l.reader("incidents")],e.prototype,"readIncidents",null),o([s.property({type:[d]})],e.prototype,"messages",void 0),o([s.property({type:[p.Point]})],e.prototype,"pointBarriers",void 0),o([l.reader("pointBarriers",["barriers"])],e.prototype,"readPointBarriers",null),o([s.property({type:[p.Polyline]})],e.prototype,"polylineBarriers",void 0),o([l.reader("polylineBarriers")],e.prototype,"readPolylineBarriers",null),o([s.property({type:[p.Polygon]})],e.prototype,"polygonBarriers",void 0),o([l.reader("polygonBarriers")],e.prototype,"readPolygonBarriers",null),o([s.property({type:[i]})],e.prototype,"routes",void 0),o([l.reader("routes")],e.prototype,"readRoutes",null),e=o([s.subclass("esri.tasks.support.ClosestFacilitySolveResult")],e)}(s.declared(n.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=117.js.map