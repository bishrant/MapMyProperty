(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/tasks/RouteTask":"./node_modules/arcgis-js-api/tasks/RouteTask.js",
	"arcgis-js-api/tasks/support/RouteResult":"./node_modules/arcgis-js-api/tasks/support/RouteResult.js",
	"arcgis-js-api/tasks/support/RouteResultsContainer":"./node_modules/arcgis-js-api/tasks/support/RouteResultsContainer.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[105],{

/***/ "./node_modules/arcgis-js-api/tasks/RouteTask.js":
/*!*******************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/RouteTask.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../core/queryUtils */ "./node_modules/arcgis-js-api/core/queryUtils.js"),__webpack_require__(/*! ../core/string */ "./node_modules/arcgis-js-api/core/string.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../geometry/support/normalizeUtils */ "./node_modules/arcgis-js-api/geometry/support/normalizeUtils.js"),__webpack_require__(/*! ./Task */ "./node_modules/arcgis-js-api/tasks/Task.js"),__webpack_require__(/*! ./mixins/NAServiceDescription */ "./node_modules/arcgis-js-api/tasks/mixins/NAServiceDescription.js"),__webpack_require__(/*! ./support/RouteResultsContainer */ "./node_modules/arcgis-js-api/tasks/support/RouteResultsContainer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,s,o,i,n,a,u,l,p,c,f,m){var d=a.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});return function(e){function r(r){return e.call(this,r)||this}return s(r,e),r.prototype.solve=function(e,r){var t=this,s=[],a=[],l={},c={};return e.stops&&e.stops.features&&this._collectGeometries(e.stops.features,a,"stops.features",l),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,a,"pointBarriers.features",l),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,a,"polylineBarriers.features",l),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,a,"polygonBarriers.features",l),p.normalizeCentralMeridian(a).then(function(e){for(var r in l){var o=l[r];s.push(r),c[r]=e.slice(o[0],o[1])}return t._isInputGeometryZAware(c,s)?t.getServiceDescription():n.resolve({dontCheck:!0})}).then(function(n){("dontCheck"in n?n.dontCheck:n.hasZ)||t._dropZValuesOffInputGeometry(c,s);for(var a in c)!function(r){c[r].forEach(function(t,s){e.get(r)[s].geometry=t})}(a);var l={query:o({},t.parsedUrl.query,{f:"json"},d.toQueryParams(e))};(t.requestOptions||r)&&(l=o({},t.requestOptions,r,l));var p=t.parsedUrl.path,f=u.endsWith(p,"/solve")?p:p+"/solve";return i(f,l)}).then(function(e){return t._handleSolveResponse(e)})},r.prototype._collectGeometries=function(e,r,t,s){s[t]=[r.length,r.length+e.length],e.forEach(function(e){r.push(e.geometry)})},r.prototype._handleSolveResponse=function(e){var r,t,s=[],o=[],i=e.data,n=i.directions,a=void 0===n?[]:n,u=i.routes,l=void 0===u?{}:u,p=l.features,c=void 0===p?[]:p,f=l.spatialReference,d=void 0===f?null:f,h=i.stops,y=void 0===h?{}:h,v=y.features,g=void 0===v?[]:v,B=y.spatialReference,R=void 0===B?null:B,b=i.barriers,N=i.polygonBarriers,S=i.polylineBarriers,A=i.messages,_="esri.tasks.RouteTask.NULL_ROUTE_NAME",k=!0,E=c&&d||g&&R||b&&b.spatialReference||N&&N.spatialReference||S&&S.spatialReference;a.forEach(function(e){s.push(r=e.routeName),o[r]={directions:e}}),c.forEach(function(e){-1===s.indexOf(r=e.attributes.Name)&&(s.push(r),o[r]={}),e.geometry&&(e.geometry.spatialReference=E),o[r].route=e}),g.forEach(function(e){t=e.attributes,-1===s.indexOf(r=t.RouteName||_)&&(s.push(r),o[r]={}),r!==_&&(k=!1),e.geometry&&(e.geometry.spatialReference=E),null==o[r].stops&&(o[r].stops=[]),o[r].stops.push(e)}),g.length>0&&!0===k&&(o[s[0]].stops=o[_].stops,delete o[_],s.splice(s.indexOf(_),1));var O=s.map(function(e){return o[e].routeName=e===_?null:e,o[e]});return m.fromJSON({routeResults:O,pointBarriers:b,polygonBarriers:N,polylineBarriers:S,messages:A})},r=t([l.subclass("esri.tasks.RouteTask")],r)}(l.declared(f.NAServiceDescriptionMixin(c)))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/RouteResult.js":
/*!*****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/RouteResult.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../Graphic */ "./node_modules/arcgis-js-api/Graphic.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./DirectionsFeatureSet */ "./node_modules/arcgis-js-api/tasks/support/DirectionsFeatureSet.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,p,s,u,i){return function(e){function r(r){var t=e.call(this,r)||this;return t.directions=null,t.route=null,t.routeName=null,t.stops=null,t}return o(r,e),t([u.property({type:i,json:{write:!0}})],r.prototype,"directions",void 0),t([u.property({type:p,json:{write:!0}})],r.prototype,"route",void 0),t([u.property({type:String,json:{write:!0}})],r.prototype,"routeName",void 0),t([u.property({type:[p],json:{write:!0}})],r.prototype,"stops",void 0),r=t([u.subclass("esri.tasks.support.RouteResult")],r)}(u.declared(s.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/RouteResultsContainer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/RouteResultsContainer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../Graphic */ "./node_modules/arcgis-js-api/Graphic.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators/reader */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators/reader.js"),__webpack_require__(/*! ./FeatureSet */ "./node_modules/arcgis-js-api/tasks/support/FeatureSet.js"),__webpack_require__(/*! ./NAMessage */ "./node_modules/arcgis-js-api/tasks/support/NAMessage.js"),__webpack_require__(/*! ./RouteResult */ "./node_modules/arcgis-js-api/tasks/support/RouteResult.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(r,e,o,t,p,s,i,n,a,l,u){function y(r){return r&&a.fromJSON(r).features.map(function(r){return r})}return function(r){function e(e){var o=r.call(this,e)||this;return o.barriers=null,o.messages=null,o.pointBarriers=null,o.polylineBarriers=null,o.polygonBarriers=null,o.routeResults=null,o}return o(e,r),e.prototype.readPointBarriers=function(r,e){return y(e.barriers||e.pointBarriers)},e.prototype.readPolylineBarriers=function(r){return y(r)},e.prototype.readPolygonBarriers=function(r){return y(r)},t([i.property({aliasOf:"pointBarriers"})],e.prototype,"barriers",void 0),t([i.property({type:[l]})],e.prototype,"messages",void 0),t([i.property({type:[p]})],e.prototype,"pointBarriers",void 0),t([n.reader("pointBarriers",["barriers","pointBarriers"])],e.prototype,"readPointBarriers",null),t([i.property({type:[p]})],e.prototype,"polylineBarriers",void 0),t([n.reader("polylineBarriers")],e.prototype,"readPolylineBarriers",null),t([i.property({type:[p]})],e.prototype,"polygonBarriers",void 0),t([n.reader("polygonBarriers")],e.prototype,"readPolygonBarriers",null),t([i.property({type:[u]})],e.prototype,"routeResults",void 0),e=t([i.subclass("esri.tasks.support.RouteResultsContainer")],e)}(i.declared(s.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=105.js.map