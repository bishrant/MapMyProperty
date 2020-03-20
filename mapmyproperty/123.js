(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/layers/graphics/data/FeatureFilter":"./node_modules/arcgis-js-api/layers/graphics/data/FeatureFilter.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[123],{

/***/ "./node_modules/arcgis-js-api/layers/graphics/data/FeatureFilter.js":
/*!**************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/data/FeatureFilter.js ***!
  \**************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../../core/iteratorUtils */ "./node_modules/arcgis-js-api/core/iteratorUtils.js"),__webpack_require__(/*! ../../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../geometry/support/aaBoundingRect */ "./node_modules/arcgis-js-api/geometry/support/aaBoundingRect.js"),__webpack_require__(/*! ../../../geometry/support/boundsUtils */ "./node_modules/arcgis-js-api/geometry/support/boundsUtils.js"),__webpack_require__(/*! ./attributeSupport */ "./node_modules/arcgis-js-api/layers/graphics/data/attributeSupport.js"),__webpack_require__(/*! ./optimizedFeatureQueryEngineAdapter */ "./node_modules/arcgis-js-api/layers/graphics/data/optimizedFeatureQueryEngineAdapter.js"),__webpack_require__(/*! ./spatialQuerySupport */ "./node_modules/arcgis-js-api/layers/graphics/data/spatialQuerySupport.js"),__webpack_require__(/*! ./timeSupport */ "./node_modules/arcgis-js-api/layers/graphics/data/timeSupport.js"),__webpack_require__(/*! ./utils */ "./node_modules/arcgis-js-api/layers/graphics/data/utils.js"),__webpack_require__(/*! ../../../tasks/support/Query */ "./node_modules/arcgis-js-api/tasks/support/Query.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,r,o,s,n,a,l,u,p,h,d,c,y,f,_,m){Object.defineProperty(t,"__esModule",{value:!0});var g=a.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),b=1,v=2,I=function(){function e(e){var t=this;this._geometryBounds=p.create(),this._idToVisibility=new Map,this.check=function(e){var i=e.objectId,r=t._idToVisibility,o=t._applyFilter(e);return r.set(i,o?b|v:v),!!(r.get(i)&b)},this._serviceInfo=e}return Object.defineProperty(e.prototype,"hash",{get:function(){return this._hash},enumerable:!0,configurable:!0}),e.prototype.clear=function(){var e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}},e.prototype.invalidate=function(){var e=this;this._idToVisibility.forEach(function(t,i){e._idToVisibility.set(i,0)})},e.prototype.setKnownIds=function(e){for(var t=0,i=e;t<i.length;t++){var r=i[t];this._idToVisibility.set(r,b)}},e.prototype.setTrue=function(e){var t=this,i=[],r=[],o=n.createSetFromValues(e);return this._idToVisibility.forEach(function(e,s){var n=!!(t._idToVisibility.get(s)&b),a=o.has(s);!n&&a?i.push(s):n&&!a&&r.push(s),t._idToVisibility.set(s,a?b|v:0)}),{show:i,hide:r}},e.prototype.createQuery=function(){var e=this,t=e.geometry,i=e.spatialRel,r=e.where,o=e.timeExtent,s=e.objectIds;return m.fromJSON({geometry:t,spatialRel:i,where:r,timeExtent:o,objectIds:s})},e.prototype.update=function(e,t){return i(this,void 0,void 0,function(){var i;return o(this,function(r){switch(r.label){case 0:return this._hash=JSON.stringify(e),[4,_.normalizeQueryLike(e,null,t)];case 1:return i=r.sent(),[4,u.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])];case 2:return r.sent(),[2]}})})},e.prototype._setAttributeFilter=function(e){if(!e||!e.where)return this._clause=null,void(this.where=null);var t=d.getWhereClause(e.where,this._serviceInfo.fieldsIndex);if(t.isStandardized)this._clause=t;else{var i=new s("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",t);g.error(i)}this.where=e.where},e.prototype._setIdFilter=function(e){this._idsToShow=e&&e.objectIds&&n.createSetFromValues(e.objectIds),this._idsToHide=e&&e.hiddenIds&&n.createSetFromValues(e.hiddenIds),this.objectIds=e&&e.objectIds},e.prototype._setGeometryFilter=function(e){return i(this,void 0,void 0,function(){var t,i,r;return o(this,function(o){switch(o.label){case 0:return e&&e.geometry?(t=e.geometry,i=e.spatialRel||"esriSpatialRelIntersects",[4,y.getSpatialQueryOperator(i,t,this._serviceInfo)]):(this._spatialQueryOperator=null,this.geometry=null,this.spatialRel=null,[2]);case 1:return r=o.sent(),h.getBoundsXY(this._geometryBounds,t),this._spatialQueryOperator=r,this.geometry=t,this.spatialRel=i,[2]}})})},e.prototype._setTimeFilter=function(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent){if(!this._serviceInfo.timeInfo){var t=new s("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);return void g.error(t)}this.timeExtent=e.timeExtent,this._timeOperator=f.getTimeOperator(this._serviceInfo.timeInfo,e.timeExtent,c.optimizedFeatureQueryEngineAdapter)}},e.prototype._applyFilter=function(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)},e.prototype._filterByExpression=function(e){return!this.where||this._clause.testFeature(e)},e.prototype._filterById=function(e){return(!this._idsToHide||!this._idsToHide.has(e.objectId))&&(!this._idsToShow||this._idsToShow.has(e.objectId))},e.prototype._filterByGeometry=function(e){return!this.geometry||!!this._earlyGeometryReject(e)&&this._spatialQueryOperator(e.geometry)},e.prototype._filterByTime=function(e){return!l.isSome(this._timeOperator)||this._timeOperator(e)},e.prototype._earlyGeometryReject=function(e){return!(!e.geometry||!e.geometry.coords.length)&&(!e.centroid||"esriSpatialRelContains"!==this.spatialRel||p.containsPoint(this._geometryBounds,e.centroid.coords))},e.prototype._resetAllHiddenIds=function(){var e=this,t=[];return this._idToVisibility.forEach(function(i,r){i&b||(e._idToVisibility.set(r,b),t.push(r))}),t},e}();t.default=I}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=123.js.map