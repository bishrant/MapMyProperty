(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/portal/support/geometryServiceUtils":"./node_modules/arcgis-js-api/portal/support/geometryServiceUtils.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[129],{

/***/ "./node_modules/arcgis-js-api/portal/support/geometryServiceUtils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/portal/support/geometryServiceUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../config */ "./node_modules/arcgis-js-api/config.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../Portal */ "./node_modules/arcgis-js-api/portal/Portal.js"),__webpack_require__(/*! ../../tasks/GeometryService */ "./node_modules/arcgis-js-api/tasks/GeometryService.js"),__webpack_require__(/*! ../../tasks/support/ProjectParameters */ "./node_modules/arcgis-js-api/tasks/support/ProjectParameters.js"),__webpack_require__(/*! @dojo/framework/shim/Promise */ "./node_modules/@dojo/framework/shim/Promise.mjs")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,n,i,c,l,s){function u(e,r){return void 0===e&&(e=null),o(this,void 0,void 0,function(){var o;return t(this,function(t){switch(t.label){case 0:if(n.geometryServiceUrl)return[2,new l({url:n.geometryServiceUrl})];if(!e)throw new i("internal:geometry-service-url-not-configured");return o="portal"in e?e.portal||c.getDefault():e,[4,o.load({signal:r})];case 1:if(t.sent(),o.helperServices&&o.helperServices.geometry&&o.helperServices.geometry.url)return[2,new l({url:o.helperServices.geometry.url})];throw new i("internal:geometry-service-url-not-configured")}})})}function a(e,r,n,c){return void 0===n&&(n=null),o(this,void 0,void 0,function(){var o,l,a;return t(this,function(t){switch(t.label){case 0:return[4,u(n,c)];case 1:return o=t.sent(),l=new s,l.geometries=[e],l.outSpatialReference=r,[4,o.project(l,{signal:c})];case 2:if((a=t.sent())&&Array.isArray(a)&&1===a.length)return[2,a[0]];throw new i("internal:geometry-service-projection-failed")}})})}Object.defineProperty(r,"__esModule",{value:!0}),r.create=u,r.projectGeometry=a}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=129.js.map