(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/core/workers/request":"./node_modules/arcgis-js-api/core/workers/request.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[122],{

/***/ "./node_modules/arcgis-js-api/core/workers/request.js":
/*!************************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/workers/request.js ***!
  \************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../global */ "./node_modules/arcgis-js-api/core/global.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,s,t,a){function n(e,r){void 0===r&&(r={});var n=r.responseType;n?"json"!==n&&"text"!==n&&"blob"!==n&&"array-buffer"!==n&&(n="text"):n="json";var l=r&&r.signal;return delete r.signal,a.invokeStaticMessage("request",{url:e,options:r},{signal:l}).then(function(a){var l,u,i,b=a.data;if(b&&!("json"!==n&&"text"!==n&&"blob"!==n||(l=new Blob([b]),"json"!==n&&"text"!==n||(o||(o=new FileReaderSync),u=o.readAsText(l),"json"!==n)))){try{i=JSON.parse(u||null)}catch(a){var c=s({},a,{url:e,requestOptions:r});throw new t("request:server",a.message,c)}if(i.error){var c=s({},i.error,{url:e,requestOptions:r});throw new t("request:server",i.error.message,c)}}var p;switch(n){case"json":p=i;break;case"text":p=u;break;case"blob":p=l;break;default:p=b}return{data:p,requestOptions:r,ssl:a.ssl,url:e}})}Object.defineProperty(r,"__esModule",{value:!0});var o;r.execute=n}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=122.js.map