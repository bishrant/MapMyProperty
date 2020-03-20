(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/AggregateGraphic":"./node_modules/arcgis-js-api/AggregateGraphic.js",
	"arcgis-js-api/core/MD5":"./node_modules/arcgis-js-api/core/MD5.js",
	"esri/core/requireUtils":"./node_modules/arcgis-js-api/core/requireUtils.js",
	"arcgis-js-api/core/requireUtils":"./node_modules/arcgis-js-api/core/requireUtils.js",
	"arcgis-js-api/renderers/support/clickToleranceUtils":"./node_modules/arcgis-js-api/renderers/support/clickToleranceUtils.js",
	"esri/tasks/support/QuantizationParameters":"./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js",
	"arcgis-js-api/tasks/support/QuantizationParameters":"./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js",
	"arcgis-js-api/views/2d/layers/FeatureLayerView2D":"./node_modules/arcgis-js-api/views/2d/layers/FeatureLayerView2D.js",
	"arcgis-js-api/views/2d/layers/features/support/rendererUtils":"./node_modules/arcgis-js-api/views/2d/layers/features/support/rendererUtils.js",
	"arcgis-js-api/views/2d/layers/features/tileRenderers":"./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers.js",
	"arcgis-js-api/views/2d/layers/support/FeatureLayerProxy":"./node_modules/arcgis-js-api/views/2d/layers/support/FeatureLayerProxy.js",
	"arcgis-js-api/views/2d/layers/support/clusterUtils":"./node_modules/arcgis-js-api/views/2d/layers/support/clusterUtils.js",
	"arcgis-js-api/views/2d/layers/support/popupUtils2D":"./node_modules/arcgis-js-api/views/2d/layers/support/popupUtils2D.js",
	"arcgis-js-api/views/2d/layers/support/util":"./node_modules/arcgis-js-api/views/2d/layers/support/util.js",
	"arcgis-js-api/views/layers/FeatureLayerView":"./node_modules/arcgis-js-api/views/layers/FeatureLayerView.js",
	"arcgis-js-api/views/layers/support/FeatureEffect":"./node_modules/arcgis-js-api/views/layers/support/FeatureEffect.js",
	"arcgis-js-api/views/layers/support/FeatureFilter":"./node_modules/arcgis-js-api/views/layers/support/FeatureFilter.js",
	"arcgis-js-api/views/layers/support/ParsedFeatureEffect":"./node_modules/arcgis-js-api/views/layers/support/ParsedFeatureEffect.js",
	"arcgis-js-api/views/layers/support/Transition":"./node_modules/arcgis-js-api/views/layers/support/Transition.js",
	"arcgis-js-api/views/layers/support/cssFilterParser":"./node_modules/arcgis-js-api/views/layers/support/cssFilterParser.js",
	"arcgis-js-api/views/layers/support/popupUtils":"./node_modules/arcgis-js-api/views/layers/support/popupUtils.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/arcgis-js-api/AggregateGraphic.js":
/*!********************************************************!*\
  !*** ./node_modules/arcgis-js-api/AggregateGraphic.js ***!
  \********************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ./core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ./core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ./Graphic */ "./node_modules/arcgis-js-api/Graphic.js"),__webpack_require__(/*! ./core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,p,o,u,c){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}p(t,e),u=t,t.prototype.getEffectivePopupTemplate=function(e){if(void 0===e&&(e=!1),this.popupTemplate)return this.popupTemplate;var t=this.sourceLayer&&this.sourceLayer.featureReduction;return t&&"popupTemplate"in t?t.popupTemplate:null},t.prototype.getObjectId=function(){return this.objectId},t.prototype.clone=function(){return new u(o({objectId:this.objectId},this.cloneProperties()))};var u;return r([c.property({type:Number,json:{read:!0}})],t.prototype,"objectId",void 0),t=u=r([c.subclass("esri.AggregateGraphic")],t)}(c.declared(u))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/core/MD5.js":
/*!************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/MD5.js ***!
  \************************************************/
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

/*	A port of Paul Johnstone's MD5 implementation
     *	http://pajhome.org.uk/crypt/md5/index.html
     *
     *	Copyright (C) Paul Johnston 1999 - 2002.
     *	Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * 	Distributed under the BSD License
     *
     *	Dojo port by Tom Trenka
     *  Later ported to typescript
     */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(r,t){function n(r,t){var n=(65535&r)+(65535&t);return(r>>16)+(t>>16)+(n>>16)<<16|65535&n}function e(r){for(var t=[],n=0,e=r.length*l;n<e;n+=l)t[n>>5]|=(r.charCodeAt(n/l)&y)<<n%32;return t}function u(r){for(var t=[],n=0,e=32*r.length;n<e;n+=l)t.push(String.fromCharCode(r[n>>5]>>>n%32&y));return t.join("")}function o(r){for(var t="0123456789abcdef",n=[],e=0,u=4*r.length;e<u;e++)n.push(t.charAt(r[e>>2]>>e%4*8+4&15)+t.charAt(r[e>>2]>>e%4*8&15));return n.join("")}function a(r){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=[],e=0,u=4*r.length;e<u;e+=3)for(var o=(r[e>>2]>>e%4*8&255)<<16|(r[e+1>>2]>>(e+1)%4*8&255)<<8|r[e+2>>2]>>(e+2)%4*8&255,a=0;a<4;a++)8*e+6*a>32*r.length?n.push("="):n.push(t.charAt(o>>6*(3-a)&63));return n.join("")}function c(r,t){return r<<t|r>>>32-t}function i(r,t,e,u,o,a){return n(c(n(n(t,r),n(u,a)),o),e)}function f(r,t,n,e,u,o,a){return i(t&n|~t&e,r,t,u,o,a)}function s(r,t,n,e,u,o,a){return i(t&e|n&~e,r,t,u,o,a)}function p(r,t,n,e,u,o,a){return i(t^n^e,r,t,u,o,a)}function h(r,t,n,e,u,o,a){return i(n^(t|~e),r,t,u,o,a)}function v(r,t){r[t>>5]|=128<<t%32,r[14+(t+64>>>9<<4)]=t;for(var e=1732584193,u=-271733879,o=-1732584194,a=271733878,c=0;c<r.length;c+=16){var i=e,v=u,g=o,l=a;e=f(e,u,o,a,r[c+0],7,-680876936),a=f(a,e,u,o,r[c+1],12,-389564586),o=f(o,a,e,u,r[c+2],17,606105819),u=f(u,o,a,e,r[c+3],22,-1044525330),e=f(e,u,o,a,r[c+4],7,-176418897),a=f(a,e,u,o,r[c+5],12,1200080426),o=f(o,a,e,u,r[c+6],17,-1473231341),u=f(u,o,a,e,r[c+7],22,-45705983),e=f(e,u,o,a,r[c+8],7,1770035416),a=f(a,e,u,o,r[c+9],12,-1958414417),o=f(o,a,e,u,r[c+10],17,-42063),u=f(u,o,a,e,r[c+11],22,-1990404162),e=f(e,u,o,a,r[c+12],7,1804603682),a=f(a,e,u,o,r[c+13],12,-40341101),o=f(o,a,e,u,r[c+14],17,-1502002290),u=f(u,o,a,e,r[c+15],22,1236535329),e=s(e,u,o,a,r[c+1],5,-165796510),a=s(a,e,u,o,r[c+6],9,-1069501632),o=s(o,a,e,u,r[c+11],14,643717713),u=s(u,o,a,e,r[c+0],20,-373897302),e=s(e,u,o,a,r[c+5],5,-701558691),a=s(a,e,u,o,r[c+10],9,38016083),o=s(o,a,e,u,r[c+15],14,-660478335),u=s(u,o,a,e,r[c+4],20,-405537848),e=s(e,u,o,a,r[c+9],5,568446438),a=s(a,e,u,o,r[c+14],9,-1019803690),o=s(o,a,e,u,r[c+3],14,-187363961),u=s(u,o,a,e,r[c+8],20,1163531501),e=s(e,u,o,a,r[c+13],5,-1444681467),a=s(a,e,u,o,r[c+2],9,-51403784),o=s(o,a,e,u,r[c+7],14,1735328473),u=s(u,o,a,e,r[c+12],20,-1926607734),e=p(e,u,o,a,r[c+5],4,-378558),a=p(a,e,u,o,r[c+8],11,-2022574463),o=p(o,a,e,u,r[c+11],16,1839030562),u=p(u,o,a,e,r[c+14],23,-35309556),e=p(e,u,o,a,r[c+1],4,-1530992060),a=p(a,e,u,o,r[c+4],11,1272893353),o=p(o,a,e,u,r[c+7],16,-155497632),u=p(u,o,a,e,r[c+10],23,-1094730640),e=p(e,u,o,a,r[c+13],4,681279174),a=p(a,e,u,o,r[c+0],11,-358537222),o=p(o,a,e,u,r[c+3],16,-722521979),u=p(u,o,a,e,r[c+6],23,76029189),e=p(e,u,o,a,r[c+9],4,-640364487),a=p(a,e,u,o,r[c+12],11,-421815835),o=p(o,a,e,u,r[c+15],16,530742520),u=p(u,o,a,e,r[c+2],23,-995338651),e=h(e,u,o,a,r[c+0],6,-198630844),a=h(a,e,u,o,r[c+7],10,1126891415),o=h(o,a,e,u,r[c+14],15,-1416354905),u=h(u,o,a,e,r[c+5],21,-57434055),e=h(e,u,o,a,r[c+12],6,1700485571),a=h(a,e,u,o,r[c+3],10,-1894986606),o=h(o,a,e,u,r[c+10],15,-1051523),u=h(u,o,a,e,r[c+1],21,-2054922799),e=h(e,u,o,a,r[c+8],6,1873313359),a=h(a,e,u,o,r[c+15],10,-30611744),o=h(o,a,e,u,r[c+6],15,-1560198380),u=h(u,o,a,e,r[c+13],21,1309151649),e=h(e,u,o,a,r[c+4],6,-145523070),a=h(a,e,u,o,r[c+11],10,-1120210379),o=h(o,a,e,u,r[c+2],15,718787259),u=h(u,o,a,e,r[c+9],21,-343485551),e=n(e,i),u=n(u,v),o=n(o,g),a=n(a,l)}return[e,u,o,a]}function g(r,n){void 0===n&&(n=t.outputTypes.Hex);var c=n||t.outputTypes.Base64,i=v(e(r),r.length*l);switch(c){case t.outputTypes.Raw:return i;case t.outputTypes.Hex:return o(i);case t.outputTypes.String:return u(i);case t.outputTypes.Base64:return a(i)}}Object.defineProperty(t,"__esModule",{value:!0}),t.outputTypes={Base64:0,Hex:1,String:2,Raw:3};var l=8,y=(1<<l)-1;t.createMD5Hash=g}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/core/requireUtils.js":
/*!*********************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/requireUtils.js ***!
  \*********************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./deprecate */ "./node_modules/arcgis-js-api/core/deprecate.js"),__webpack_require__(/*! ./Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ./promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,n,i){function o(e,r){return t.deprecatedFunction(s,"when",{moduleName:"requireUtils",replacement:"Use `promiseUtils.create()` instead.",version:"4.10",warnOnce:!0}),Array.isArray(r)?i.create(function(t){e(r,function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];t(e)})}):o(e,[r]).then(function(e){return e[0]})}function c(e,r,t){return r.toAbsMid?r.toAbsMid(e):t.id.replace(/\/[^\/]*$/gi,"/")+e}Object.defineProperty(r,"__esModule",{value:!0});var s=n.getLogger("esri.core.requireUtils");r.when=o,r.getAbsMid=c}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/clickToleranceUtils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/clickToleranceUtils.js ***!
  \*****************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r){function t(e,r){return r&&r.xoffset?Math.max(e,Math.abs(r.xoffset)):r&&r.yoffset?Math.max(e,Math.abs(r.yoffset)):e}function n(e){for(var r=0,t=0,n=0;n<e.length;n++){var a=e[n].size;"number"==typeof a&&(r+=a,t++)}return r/t}function a(e,r){return"number"==typeof e?e:e&&e.stops&&e.stops.length?n(e.stops):r}function u(e,r){if(!r)return e;var t=r.filter(function(e){return"size"===e.type}),n=t.map(function(r){var t=r.maxSize,n=r.minSize;return(a(t,e)+a(n,e))/2}),u=0,f=n.length;if(0===f)return e;for(var o=0;o<f;o++)u+=n[o];var i=Math.floor(u/f);return Math.max(i,e)}function f(e){if(!e)return 6;var r="visualVariables"in e?u(6,e.visualVariables):6;if("simple"===e.type)return t(r,e.symbol);if("unique-value"===e.type){var n=r;return e.uniqueValueInfos.forEach(function(e){n=t(n,e.symbol)}),n}if("class-breaks"===e.type){var a=r;return e.classBreakInfos.forEach(function(e){a=t(a,e.symbol)}),a}return e.type,r}Object.defineProperty(r,"__esModule",{value:!0}),r.calculateTolerance=f}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
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

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/FeatureLayerView2D.js":
/*!**************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/FeatureLayerView2D.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/paramHelper */ "./node_modules/arcgis-js-api/core/tsSupport/paramHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../AggregateGraphic */ "./node_modules/arcgis-js-api/AggregateGraphic.js"),__webpack_require__(/*! ../../../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../../../Graphic */ "./node_modules/arcgis-js-api/Graphic.js"),__webpack_require__(/*! ../../../core/arrayUtils */ "./node_modules/arcgis-js-api/core/arrayUtils.js"),__webpack_require__(/*! ../../../core/Collection */ "./node_modules/arcgis-js-api/core/Collection.js"),__webpack_require__(/*! ../../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../../../core/iteratorUtils */ "./node_modules/arcgis-js-api/core/iteratorUtils.js"),__webpack_require__(/*! ../../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../core/watchUtils */ "./node_modules/arcgis-js-api/core/watchUtils.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../layers/graphics/data/projectionSupport */ "./node_modules/arcgis-js-api/layers/graphics/data/projectionSupport.js"),__webpack_require__(/*! ../../../renderers/support/clickToleranceUtils */ "./node_modules/arcgis-js-api/renderers/support/clickToleranceUtils.js"),__webpack_require__(/*! ../../../tasks/support/FeatureSet */ "./node_modules/arcgis-js-api/tasks/support/FeatureSet.js"),__webpack_require__(/*! ../../../tasks/support/Query */ "./node_modules/arcgis-js-api/tasks/support/Query.js"),__webpack_require__(/*! ../engine */ "./node_modules/arcgis-js-api/views/2d/engine.js"),__webpack_require__(/*! ./LayerView2D */ "./node_modules/arcgis-js-api/views/2d/layers/LayerView2D.js"),__webpack_require__(/*! ./features/tileRenderers */ "./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers.js"),__webpack_require__(/*! ./features/support/rendererUtils */ "./node_modules/arcgis-js-api/views/2d/layers/features/support/rendererUtils.js"),__webpack_require__(/*! ./support/clusterUtils */ "./node_modules/arcgis-js-api/views/2d/layers/support/clusterUtils.js"),__webpack_require__(/*! ./support/FeatureLayerProxy */ "./node_modules/arcgis-js-api/views/2d/layers/support/FeatureLayerProxy.js"),__webpack_require__(/*! ./support/popupUtils2D */ "./node_modules/arcgis-js-api/views/2d/layers/support/popupUtils2D.js"),__webpack_require__(/*! ./support/util */ "./node_modules/arcgis-js-api/views/2d/layers/support/util.js"),__webpack_require__(/*! ../tiling/TileStrategy */ "./node_modules/arcgis-js-api/views/2d/tiling/TileStrategy.js"),__webpack_require__(/*! ../../layers/FeatureLayerView */ "./node_modules/arcgis-js-api/views/layers/FeatureLayerView.js"),__webpack_require__(/*! ../../layers/LayerView */ "./node_modules/arcgis-js-api/views/layers/LayerView.js"),__webpack_require__(/*! ../../layers/RefreshableLayerView */ "./node_modules/arcgis-js-api/views/layers/RefreshableLayerView.js"),__webpack_require__(/*! ../../../views/layers/support/FeatureFilter */ "./node_modules/arcgis-js-api/views/layers/support/FeatureFilter.js"),__webpack_require__(/*! ../../layers/support/FeatureEffect */ "./node_modules/arcgis-js-api/views/layers/support/FeatureEffect.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,n,s,o,a,u,l,h,c,p,d,f,y,g,_,v,b,m,R,S,x,w,F,C,O,T,H,I,U,E,V,P,q,N,J,A){function j(e){return e&&"openPorts"in e}var G=function(e){return(2147483648&e)>>>31==1},L=g.getLogger("esri.views.2d.layers.FeatureLayerView2D");return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._pipelineIsUpdating=!0,t._updatingPipelineConfig=!1,t._viewStateId=-1,t._visibilityOverrides=new Set,t._effect=null,t._highlightIds=new Map,t._onGoingEdits=0,t.container=new F.Container,t.filter=null,t.doRefresh=v.debounce(function(){return t._onGoingEdits=0,t._proxy.refresh().catch(function(e){v.isAbortError(e)||L.error(e)})}),t._onRenderingConfigChange=v.debounce(function(){return a(t,void 0,void 0,function(){var e,t,r,i,n,s,a,u,l,h,c,p,d,f,g,v,b;return o(this,function(o){switch(o.label){case 0:return this._hasRequiredSupport(this.layer)?(this._set("_updatingPipelineConfig",!0),[4,this._effectiveRendererPromise]):[2];case 1:return e=o.sent(),t=e.renderer,r=e.aggregateFields,i=e.featureReduction,[4,this._updateRequiredFields()];case 2:return o.sent(),n=this.availableFields.join("."),s=this._createLayerFilterHash(),a=this._createTileRendererHash(t),u=this._createFeatureDataHash(t),l=this._createMeshHash(t),h=n!==this._clientDataHash,c=s!==this._layerFilterHash,p=u!==this._featureDataHash||h,d=p&&!!this.layer.featureReduction,f=l!==this._meshHash||d,g={invalidateFeatureData:p,invalidateMesh:f,layerFilterChanged:c},v=this._createConfiguration(t,r,i),a===this._tileRendererHash?[3,9]:[4,this._initTileRenderer(t)];case 3:return o.sent(),[4,this._createServiceOptions()];case 4:return b=o.sent(),this.effects.forEach(function(e){return _.isSome(e)&&_.isSome(e.filter)&&e.filter.enable()}),this.tileRenderer.onConfigUpdate(t),[4,this._proxy.startup(this.view.featuresTilingScheme,v,b,g)];case 5:return o.sent(),this.hasHighlight()?[4,this._proxy.setHighlight(y.keysOfMap(this._highlightIds))]:[3,7];case 6:o.sent(),o.label=7;case 7:return[4,this._onceTilesUpdated()];case 8:return o.sent(),this.tileRenderer.onConfigUpdate(t),[3,14];case 9:return this._lockAttributeTextureUpload(),h||c||p||f?[4,this._proxy.update(v,g)]:[3,11];case 10:o.sent(),o.label=11;case 11:return c?[4,this._onceTilesUpdated()]:[3,13];case 12:o.sent(),o.label=13;case 13:this._unlockAttributeTextureUpload(),this.effects.forEach(function(e){return _.isSome(e)&&_.isSome(e.filter)&&e.filter.enable()}),this.tileRenderer.onConfigUpdate(t),this._forceAttributeTextureUpload(),o.label=14;case 14:return this._clientDataHash=n,this._layerFilterHash=s,this._tileRendererHash=a,this._meshHash=l,this._featureDataHash=u,this.tileRenderer.invalidateLabels(),this.requestUpdate(),[2]}})})}),t._updateHighlight=v.debounce(function(){return a(t,void 0,void 0,function(){return o(this,function(e){return[2,this._proxy.setHighlight(y.keysOfMap(this._highlightIds))]})})}),t}return r(t,e),t.prototype.destroy=function(){this._proxy.destroy(),_.andThen(this._updateClusterSizeTask,function(e){return e.remove()})},t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this._initProxy()),this.handles.add([this.clips.on("change",function(){return e.tileRenderer&&e.tileRenderer.onConfigUpdate(e._effectiveRenderer)}),this.on("valueRangesChanged",function(t){e._set("_aggregateValueRanges",t.valueRanges)})])},t.prototype._initProxy=function(){return a(this,void 0,void 0,function(){var e,t,r;return o(this,function(i){if(this.layer.isTable)throw new d("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:this.layer});if(e=this.layer.spatialReference,t=l.SpatialReference.WGS84,this.layer.featureReduction&&!R.doesBrowserSupportProjection(e,t))throw new d("featurelayerview:featureReduction-not-supported","cannot project feature layer to WGS84",{inSpatialReference:e,outSpatialReference:t});return this._proxy&&this._proxy.destroy(),r=this._createClientOptions(),this._set("_proxy",new I.default({client:r})),[2,this._proxy.when()]})})},Object.defineProperty(t.prototype,"_effectiveRendererPromise",{get:function(){var e=this,t=this._getEffectiveRenderer();return t.then(function(t){var r=t.renderer;return e._set("_effectiveRenderer",r)}),t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labelsVisible",{get:function(){return!this.suspended&&this.layer.labelingInfo&&this.layer.labelsVisible},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"effect",{get:function(){return _.unwrapOr(this._effect,null)},set:function(e){var t=this._effect;_.isSome(t)&&_.isSome(t.filter)&&t.filter.enabled&&_.isSome(e)&&_.isSome(e.filter)&&e.filter.enable(),this._effect=e,this.notifyChange("effect")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"effects",{get:function(){return this.effect&&[this.effect]||[]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"numFeatures",{get:function(){var e=0;return this.attached&&this._tileStrategy.tiles.forEach(function(t){e+=t.iconDisplayRecords?t.iconDisplayRecords.length:0}),e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"renderingConfigHash",{get:function(){if(!this.layer)return null;var e=this.availableFields,t=this.layer,r=t.definitionExpression,i=t.renderer,n=t.labelingInfo,s="feature"===this.layer.type?this.layer.gdbVersion:void 0,o="feature"===this.layer.type&&this.layer.historicMoment?this.layer.historicMoment.getTime():void 0,a=this.timeExtent,u="filter"in this.layer&&this.layer.filter&&""+JSON.stringify(this.layer.filter.geometry)+this.layer.filter.where,l=JSON.stringify(this.clips),h=this.layer.featureReduction&&this.layer.featureReduction.toJSON();return JSON.stringify({filterHash:_.isSome(this.filter)&&this.filter.toJSON(),effectHash:_.isSome(this.effect)&&this.effect.toJSON(),streamFilter:u,gdbVersion:s,definitionExpression:r,historicMoment:o,availableFields:e,renderer:i,labelingInfo:n,timeExtent:a,clipsHash:l,featureReduction:h})},enumerable:!0,configurable:!0}),t.prototype.highlight=function(e){var t,r=this;return e instanceof h?t=[e.getObjectId()]:"number"==typeof e?t=[e]:p.isCollection(e)?t=e.map(function(e){return e&&e.getAttribute(r.layer.objectIdField)}).toArray():Array.isArray(e)&&e.length>0&&(t="number"==typeof e[0]?e:e.map(function(e){return e&&e.getAttribute(r.layer.objectIdField)})),t&&t.length?(t=t.filter(function(e){return null!=e}),this._addHighlight(t),{remove:function(){return r._removeHighlight(t)},pause:function(){return r._removeHighlight(t)},resume:function(){return r._addHighlight(t)}}):{remove:function(){},pause:function(){},resume:function(){}}},t.prototype.hasHighlight=function(){return!!this._highlightIds.size},t.prototype.hitTest=function(e,t){return this._hitTest(e,t)},t.prototype.queryStatistics=function(){return this._proxy.queryStatistics()},t.prototype.queryFeatures=function(e,t){var r=this;return this.queryFeaturesJSON(e,t).then(function(e){var t=x.fromJSON(e);return t.features.forEach(function(e){e.layer=r.layer,e.sourceLayer=r.layer}),t})},t.prototype.queryFeaturesJSON=function(e,t){return this._proxy.queryFeatures(this._cleanUpQuery(e),t)},t.prototype.queryObjectIds=function(e,t){return this._proxy.queryObjectIds(this._cleanUpQuery(e),t)},t.prototype.queryFeatureCount=function(e,t){return this._proxy.queryFeatureCount(this._cleanUpQuery(e),t)},t.prototype.queryExtent=function(e,t){return this._proxy.queryExtent(this._cleanUpQuery(e),t).then(function(e){return{count:e.count,extent:l.Extent.fromJSON(e.extent)}})},t.prototype.setVisibility=function(e,t){t?this._visibilityOverrides.delete(e):this._visibilityOverrides.add(e),this._renderingConfigHashChanged()},t.prototype.update=function(e){if(this.attached&&this._tileStrategy&&this.tileRenderer){this._tileStrategy.update(e)||this.requestUpdate();var t=e.state;this._viewStateId!==t.id&&(this._proxy.setViewState(t),this._viewStateId=t.id),this.notifyChange("numFeatures"),this.notifyChange("updating")}},t.prototype.attach=function(){var e=this;this.view.timeline.record(this.layer.title+" (FeatureLayer) Attach"),this._tileStrategy=new V({cachePolicy:"purge",acquireTile:function(t){return e._acquireTile(t)},releaseTile:function(t){return e._releaseTile(t)},tileInfoView:this.view.featuresTilingScheme,buffer:0}),this.handles.add([this.layer.on("edits",function(t){return a(e,void 0,void 0,function(){return o(this,function(e){switch(e.label){case 0:return this._onGoingEdits++,[4,this._proxy.onEdits(t)];case 1:return e.sent(),this._onGoingEdits=Math.max(0,this._onGoingEdits-1),[2]}})})}),b.init(this,"renderingConfigHash",function(){return e._renderingConfigHashChanged()},!0)],"attach")},t.prototype.detach=function(){this.container.removeAllChildren(),this.handles.remove("attach"),this._updatingPipelineConfig=!1,this.tileRenderer&&(this.tileRenderer.uninstall(this.container),this.tileRenderer=null),this._tileStrategy&&(this._tileStrategy.destroy(),this._tileStrategy=null)},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.fetchPopupFeatures=function(e,t){return a(this,void 0,void 0,function(){var r,i,n,s;return o(this,function(o){return _.isSome(t)&&t.clientGraphics.length&&(r=t.clientGraphics[0])instanceof u?[2,[r]]:(i=this.validateFetchPopupFeatures(t))?[2,v.reject(i)]:_.isSome(t)&&0===t.clientGraphics.length?[2,v.resolve([])]:(n=this.fetchClientPopupFeatures(t),e?(s=this._fetchServicePopupFeatures(e,t),[2,v.eachAlwaysValues([n,s]).then(c.flatten)]):[2,n])})})},t.prototype._fetchServicePopupFeatures=function(e,t){return a(this,void 0,void 0,function(){var r,i,n,s,a,u,l,h,c,p;return o(this,function(o){switch(o.label){case 0:return[4,this.createPopupQuery(t)];case 1:if(r=o.sent(),i=this.layer,n=i.renderer,s=S.calculateTolerance(n),r.geometry=this.createFetchPopupFeaturesQueryGeometry(e,s),a=new Set,u=i.objectIdField,l=_.isSome(t)?t.clientGraphics:null)for(h=0,c=l;h<c.length;h++)p=c[h],a.add(p.attributes[u]);return[2,i.queryFeatures(r).then(function(e){return e.features.filter(function(e){return!a.has(e.attributes[u])})})]}})})},t.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return U.createQueryGeometry(e,t,this.view)},t.prototype.isUpdating=function(){return null!=this.layer.renderer&&(null!=this._updatingRequiredFieldsPromise||null==this.tileRenderer||!this._proxy||!this._proxy.isReady||this._pipelineIsUpdating||this._updatingPipelineConfig||this.tileRenderer.updating||this._onGoingEdits>0)},t.prototype._createClientOptions=function(){var e=this;return{setUpdating:function(t){e._set("_pipelineIsUpdating",t)},emitEvent:function(t){e.emit(t.name,t.event)}}},t.prototype._createServiceOptions=function(){return a(this,void 0,void 0,function(){var e,t,r,i,n,s,a,u,l;return o(this,function(o){switch(o.label){case 0:return e=this.layer,t=e.capabilities,r=e.objectIdField,i=e.fields.map(function(e){return e.toJSON()}),n=e.fullExtent&&e.fullExtent.toJSON(),s=E.toJSONGeometryType(e.geometryType),a=e.timeInfo&&e.timeInfo.toJSON()||null,j(e.source)?[4,e.source.openPorts()]:[3,2];case 1:return l=o.sent(),[3,3];case 2:l="dynamicDataSource"in e?e.dynamicDataSource?e.parsedUrl:e.url+"/"+e.layerId:e.parsedUrl,o.label=3;case 3:return u=l,[2,{type:"on-demand",maxRecordCount:t.query.maxRecordCount,tileMaxRecordCount:t.query.tileMaxRecordCount,capabilities:t,fields:i,fullExtent:n,geometryType:s,objectIdField:r,source:u,timeInfo:a}]}})})},t.prototype._createMemoryServiceOptions=function(e){return a(this,void 0,void 0,function(){var t;return o(this,function(r){switch(r.label){case 0:return[4,e.openPorts()];case 1:return t=r.sent(),[2,s({},this._createServiceOptions(),{type:"memory",source:t})]}})})},t.prototype._cleanUpQuery=function(e){var t=w.from(e)||this.createQuery();return t.outSpatialReference||(t.outSpatialReference=this.view.spatialReference),t},t.prototype._createUpdateClusterSizeTask=function(e,t){var r=this;return this.watch("_aggregateValueRanges",function(i){return a(r,void 0,void 0,function(){return o(this,function(r){return this._updateClusterEffectiveRendererSizeVariable(e,t,i),this._updatingPipelineConfig||this.tileRenderer.onConfigUpdate(this._effectiveRenderer),[2]})})})},t.prototype._updateClusterEffectiveRendererSizeVariable=function(e,t,r){return a(this,void 0,void 0,function(){var i,n;return o(this,function(s){return"visualVariables"in e&&e.visualVariables&&(i=H.findSizeVV(e.visualVariables),_.isSome(i)&&"cluster_count"===i.field&&(n=e.visualVariables.indexOf(i),e.visualVariables[n]=H.createClusterCountSizeVariable(t,r),this._set("_effectiveRenderer",e.clone()))),[2]})})},t.prototype._getEffectiveRenderer=function(){return a(this,void 0,void 0,function(){var e,t,r,i,n;return o(this,function(s){switch(s.label){case 0:return e=this.layer.renderer,(t=this.layer.featureReduction,_.isSome(this._updateClusterSizeTask)&&(this._updateClusterSizeTask.remove(),this._updateClusterSizeTask=null),t&&"cluster"===t.type&&H.isClusterCompatibleRenderer(e))?(r=t,i=[],[4,H.createClusterRenderer(i,this.layer.fields,e,r,this._aggregateValueRanges)]):[3,2];case 1:return n=s.sent(),_.andThen(this._updateClusterSizeTask,function(e){return e.remove()}),this._updateClusterSizeTask=this._createUpdateClusterSizeTask(n,r),[2,{renderer:n,aggregateFields:i,featureReduction:t}];case 2:return[2,{renderer:e,aggregateFields:[],featureReduction:null}]}})})},t.prototype._acquireTile=function(e){var t=this,r=this.tileRenderer.acquireTile(e);return r.once("attach",function(){t.requestUpdate()}),r},t.prototype._releaseTile=function(e){this.tileRenderer.releaseTile(e)},t.prototype._initTileRenderer=function(e){return a(this,void 0,void 0,function(){var t;return o(this,function(r){switch(r.label){case 0:return[4,O.createOrReuseTileRenderer(e,{layerView:this,tileInfoView:this.view.featuresTilingScheme,layer:this.layer})];case 1:return t=r.sent(),this.tileRenderer&&(this._tileStrategy.clear(),this.tileRenderer.uninstall(this.container),this.tileRenderer.destroy(),this.tileRenderer=null),this._proxy.tileRenderer=t,this._set("tileRenderer",t),this.tileRenderer.install(this.container),this.tileRenderer.onConfigUpdate(e),this.requestUpdate(),[2,this.tileRenderer]}})})},t.prototype._createLayerFilterHash=function(){return this.layer.definitionExpression+"."+("feature"===this.layer.type&&this.layer.historicMoment?this.layer.historicMoment.getTime():void 0)+"."+("feature"===this.layer.type?this.layer.gdbVersion:void 0)},t.prototype._createTileRendererHash=function(e){return("heatmap"===e.type?"heatmap":"symbol")+"."+("dot-density"===e.type)},t.prototype._createFeatureDataHash=function(e){var t=e.getAttributeHash(),r=JSON.stringify(this.filter),i=_.isSome(this.effect)&&JSON.stringify(this.effect.filter),n=JSON.stringify(this.timeExtent),s="";return this._visibilityOverrides.forEach(function(e){return s+=e}),t+"."+r+"."+i+"."+n+"."+s},t.prototype._createMeshHash=function(e){var t=F.getVVFlags("visualVariables"in e&&e.visualVariables||[]),r=this.layer.labelingInfo&&this.layer.labelingInfo.map(function(e){return JSON.stringify(e)}).join("/"),i=JSON.stringify(this.layer.featureReduction);return e.getMeshHash()+"."+t+"."+r+"."+i},t.prototype._injectOverrides=function(e){var t=this.filter&&this.filter.timeExtent,r=this.timeExtent&&t?this.timeExtent.intersection(t):this.timeExtent||t;if(!this._visibilityOverrides.size&&!r)return e;var i=_.isSome(this.filter)&&this.filter.clone()||new J;return i.hiddenIds=this._visibilityOverrides,i.timeExtent=r,i},t.prototype._createConfiguration=function(e,t,r){var i=T.simplifyVVRenderer(e),n=this.layer.labelingInfo,s="feature"===this.layer.type&&this.layer.historicMoment?this.layer.historicMoment.getTime():void 0,o="feature"===this.layer.type?this.layer.gdbVersion:void 0,a=new Array(F.definitions.MAX_FILTERS),u=this._injectOverrides(this.filter);return a[0]=_.isSome(u)&&u.toJSON()||null,a[1]=_.isSome(this.effect)&&this.effect.filter&&this.effect.filter.toJSON()||null,{featureReduction:_.andThen(r,function(e){return e.toJSON()}),definitionExpression:this.layer.definitionExpression,availableFields:this.availableFields,labelingInfo:n&&n.map(function(e){return e.toJSON()}),renderer:i.toJSON(),gdbVersion:o,historicMoment:s,devicePixelRatio:window.devicePixelRatio||1,filters:a,aggregateFields:t}},t.prototype._hasRequiredSupport=function(e){return!("dot-density"===e.renderer.type&&!f("esri-webgl-texture-float"))||(L.error(new d("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1)},t.prototype._onceTilesUpdated=function(){return this.requestUpdate(),b.whenFalseOnce(this,"_pipelineIsUpdating",!0)},t.prototype._lockAttributeTextureUpload=function(){this.tileRenderer&&this.tileRenderer.lockAttributeTextureUpload()},t.prototype._unlockAttributeTextureUpload=function(){this.tileRenderer&&this.tileRenderer.unlockAttributeTextureUpload()},t.prototype._forceAttributeTextureUpload=function(){this.tileRenderer&&this.tileRenderer.forceAttributeTextureUpload()},t.prototype._renderingConfigHashChanged=function(){var e=this;this.view.timeline.begin(this.layer.title+" (FeatureLayer) Initial Pipeline Config");var t=this._onRenderingConfigChange();this._updatingPromise=t;var r=function(){t===e._updatingPromise&&e._set("_updatingPipelineConfig",!1),e.view.timeline.end(e.layer.title+" (FeatureLayer) Initial Pipeline Config")};t.then(r).catch(function(e){v.isAbortError(e)||L.error(e),r()})},t.prototype._addHighlight=function(e){for(var t=0,r=e;t<r.length;t++){var i=r[t];if(this._highlightIds.has(i)){var n=this._highlightIds.get(i);this._highlightIds.set(i,n+1)}else this._highlightIds.set(i,1)}this._updateHighlight().catch(function(e){v.isAbortError(e)||L.error(e)})},t.prototype._removeHighlight=function(e){for(var t=0,r=e;t<r.length;t++){var i=r[t];if(this._highlightIds.has(i)){var n=this._highlightIds.get(i)-1;0===n?this._highlightIds.delete(i):this._highlightIds.set(i,n)}}this._updateHighlight().catch(function(e){v.isAbortError(e)||L.error(e)})},t.prototype._createHittestResult=function(e){return e.layer=this.layer,e.sourceLayer=this.layer,_.isSome(e.geometry)&&(e.geometry.spatialReference=this.view.spatialReference),e},t.prototype._queryFeature=function(e){return a(this,void 0,void 0,function(){var t,r,i;return o(this,function(n){switch(n.label){case 0:return[4,this._proxy.getObjectId(e)];case 1:return t=n.sent(),[4,this._proxy.queryFeatures(new w({objectIds:[t],outSpatialReference:this.view.spatialReference,returnGeometry:!0}))];case 2:return r=n.sent(),i=r.features[0],i?[2,i]:[2,null]}})})},t.prototype._hitTest=function(e,t){return a(this,void 0,void 0,function(){var r,i,n,s,n,a=this;return o(this,function(o){switch(o.label){case 0:return this.suspended||!this.tileRenderer?[2,null]:[4,this.tileRenderer.hitTest(e,t)];case 1:return r=o.sent(),0!==r.length?[3,3]:[4,v.after(1)];case 2:return o.sent(),[2,null];case 3:return i=r[0],G(i)?[3,5]:[4,this._queryFeature(i)];case 4:return n=o.sent(),[2,_.andThen(n,function(e){return a._createHittestResult(h.fromJSON(e))})];case 5:return[4,this._proxy.getAggregate(i)];case 6:return s=o.sent(),_.isNone(s)?[2,null]:_.isSome(s.referenceId)?[4,this._queryFeature(s.referenceId)]:[3,8];case 7:return n=o.sent(),[2,_.andThen(n,function(e){return a._createHittestResult(h.fromJSON(e))})];case 8:return[2,this._createHittestResult(u.fromJSON(s))]}})})},i([m.property()],t.prototype,"_proxy",void 0),i([m.property()],t.prototype,"_pipelineIsUpdating",void 0),i([m.property()],t.prototype,"_updatingPipelineConfig",void 0),i([m.property()],t.prototype,"_effectiveRenderer",void 0),i([m.property()],t.prototype,"_aggregateValueRanges",void 0),i([m.property()],t.prototype,"_onGoingEdits",void 0),i([m.property({dependsOn:["layer.renderer","layer.featureReduction"]})],t.prototype,"_effectiveRendererPromise",null),i([m.property({dependsOn:["suspended","layer.labelingInfo","layer.labelsVisible"]})],t.prototype,"labelsVisible",null),i([m.property({type:J})],t.prototype,"filter",void 0),i([m.property({type:A})],t.prototype,"effect",null),i([m.property({readOnly:!0,dependsOn:["effect"]})],t.prototype,"effects",null),i([m.property()],t.prototype,"numFeatures",null),i([m.property({dependsOn:["layer.renderer","availableFields","layer.definitionExpression","layer.gdbVersion?","layer.filter?","layer.historicMoment?","layer.labelingInfo","layer.featureReduction","filter","effect","timeExtent","clips"]})],t.prototype,"renderingConfigHash",null),i([m.property()],t.prototype,"tileRenderer",void 0),i([m.property({dependsOn:["layer.renderer","tileRenderer.updating","_updatingPipelineConfig","_pipelineIsUpdating","_updatingRequiredFieldsPromise","_proxy","_proxy.isReady?","_onGoingEdits"]})],t.prototype,"updating",void 0),t=i([m.subclass("esri.views.2d.layers.FeatureLayerView2D")],t)}(m.declared(P.FeatureLayerView(N.RefreshableLayerView(C.LayerView2D(q)))))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/support/rendererUtils.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/support/rendererUtils.js ***!
  \**************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../../../../core/screenUtils */ "./node_modules/arcgis-js-api/core/screenUtils.js"),__webpack_require__(/*! ../../../engine */ "./node_modules/arcgis-js-api/views/2d/engine.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,l,r,a,i){function o(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function t(e){return e.stops=c(e.type,e.stops),e}function n(e,l,r){return(1-r)*e+r*l}function s(e,l){for(var r=l[0],i=l.slice(1),o=i.pop(),t=i[0].value,s=i[i.length-1].value,u=(s-t)/p,c=[],v=t;v<s;v+=u){for(var f=0;v>=i[f].value;)f++;var b=i[f],g=l[f-1],y=v-g.value,h=b.value===g.value?1:y/(b.value-g.value);if("color"===e){var V=i[f],d=l[f-1],_=V.color.clone();_.r=n(d.color.r,_.r,h),_.g=n(d.color.g,_.g,h),_.b=n(d.color.b,_.b,h),_.a=n(d.color.a,_.a,h),c.push({value:v,color:_,label:V.label})}else if("size"===e){var z=i[f],M=l[f-1],P=a.toPt(z.size),L=a.toPt(M.size),S=n(L,P,h);c.push({value:v,size:S,label:z.label})}else{var m=i[f],w=l[f-1],E=n(w.opacity,m.opacity,h);c.push({value:v,opacity:E,label:m.label})}}return[r].concat(c,[o])}function u(e){for(var l=e[0],r=e.slice(1),a=r.pop();r.length>p;){for(var i=0,o=0,t=1;t<r.length;t++){var n=r[t-1],s=r[t],u=Math.abs(s.value-n.value);u>o&&(o=u,i=t)}r.splice(i,1)}return[l].concat(r,[a])}function c(e,l){return l.length<=v?l:(f.warn("Found "+l.length+" Visual Variable stops, but MapView only supports "+v+". Displayed stops will be simplified."),l.length>2*v?s(e,l):u(l))}Object.defineProperty(l,"__esModule",{value:!0});var p=i.definitions.WEBGL_MAX_INNER_STOPS,v=i.definitions.WEBGL_MAX_STOPS,f=r.getLogger("esri.renderers.visualVariables.support.utils");l.simplifyVVRenderer=function(e){if(!("visualVariables"in e&&e.visualVariables&&e.visualVariables.length))return e;var l=e.clone(),r=l.visualVariables.map(function(e){return o(e)?t(e):e});return l.visualVariables=r,l}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers.js ***!
  \******************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/nextTick */ "./node_modules/arcgis-js-api/core/nextTick.js"),__webpack_require__(/*! ../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,n,r,t){function u(n,u){if(!n)return t.resolve(null);switch(n.type){case"class-breaks":case"simple":case"unique-value":case"dot-density":case"dictionary":return t.create(function(n){r(function(){return Promise.all(/*! AMD require */[__webpack_require__.e(22), __webpack_require__.e("common"), __webpack_require__.e(106)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./tileRenderers/SymbolTileRenderer */ "./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/SymbolTileRenderer.js")]; (n).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})}).then(function(e){return e.default}).then(function(e){return new e(u)});case"heatmap":return t.create(function(n){r(function(){return Promise.all(/*! AMD require */[__webpack_require__.e("common"), __webpack_require__.e(119)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./tileRenderers/HeatmapTileRenderer */ "./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/HeatmapTileRenderer.js")]; (n).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})}).then(function(e){return e.default}).then(function(e){return new e(u)})}return t.resolve(null)}Object.defineProperty(n,"__esModule",{value:!0}),n.createOrReuseTileRenderer=u}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/support/FeatureLayerProxy.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/support/FeatureLayerProxy.js ***!
  \*********************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../core/Promise */ "./node_modules/arcgis-js-api/core/Promise.js"),__webpack_require__(/*! ../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../../core/requireUtils */ "./node_modules/arcgis-js-api/core/requireUtils.js"),__webpack_require__(/*! ../../../../core/workers */ "./node_modules/arcgis-js-api/core/workers.js"),__webpack_require__(/*! ../../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__.dj.m(module)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,r,n,o,i,s,c,u,a,l,p,h){function d(t){return Array.isArray(t)}Object.defineProperty(e,"__esModule",{value:!0});var v=function(e){function o(t){var r=e.call(this,t)||this;return r._startupResolver=u.createResolver(),r.isReady=!1,r}return r(o,e),o.prototype.initialize=function(){this._controller=u.createAbortController(),this.addResolvingPromise(this._startWorker(this._controller.signal))},o.prototype.destroy=function(){this._connection.close(),this._controller.abort()},Object.defineProperty(o.prototype,"tileRenderer",{set:function(t){this.client.tileRenderer=t},enumerable:!0,configurable:!0}),o.prototype.startup=function(t,e,r,n){return s(this,void 0,void 0,function(){var o,s,c,u;return i(this,function(i){switch(i.label){case 0:return o=this._controller.signal,s=d(r.source)?{transferList:r.source,signal:o}:void 0,c=t.tileInfo.toJSON(),u={service:r,config:e,tileInfo:c,options:n},[4,this._connection.invoke("startup",u,s)];case 1:return i.sent(),this._startupResolver.resolve(),this._set("isReady",!0),[2]}})})},o.prototype.update=function(t,e){return s(this,void 0,void 0,function(){var r;return i(this,function(n){switch(n.label){case 0:return r={config:t,options:e},[4,this._startupResolver.promise];case 1:return n.sent(),[2,this._connection.invoke("update",r)]}})})},o.prototype.setHighlight=function(t){return s(this,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return[4,this._startupResolver.promise];case 1:return e.sent(),[2,this._connection.invoke("controller.setHighlight",t)]}})})},o.prototype.refresh=function(){return s(this,void 0,void 0,function(){return i(this,function(t){switch(t.label){case 0:return[4,this._startupResolver.promise];case 1:return t.sent(),[2,this._connection.invoke("controller.refresh")]}})})},o.prototype.setViewState=function(t){return s(this,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return[4,this._startupResolver.promise];case 1:return e.sent(),[2,this._connection.invoke("setViewState",t.toJSON())]}})})},o.prototype.queryFeatures=function(t,e){return s(this,void 0,void 0,function(){return i(this,function(r){switch(r.label){case 0:return[4,this._startupResolver.promise];case 1:return r.sent(),[2,this._connection.invoke("controller.queryFeatures",t.toJSON(),e)]}})})},o.prototype.queryObjectIds=function(t,e){return s(this,void 0,void 0,function(){return i(this,function(r){switch(r.label){case 0:return[4,this._startupResolver.promise];case 1:return r.sent(),[2,this._connection.invoke("controller.queryObjectIds",t.toJSON(),e)]}})})},o.prototype.queryFeatureCount=function(t,e){return s(this,void 0,void 0,function(){return i(this,function(r){switch(r.label){case 0:return[4,this._startupResolver.promise];case 1:return r.sent(),[2,this._connection.invoke("controller.queryFeatureCount",t.toJSON(),e)]}})})},o.prototype.queryExtent=function(t,e){return s(this,void 0,void 0,function(){return i(this,function(r){return[2,this._connection.invoke("controller.queryExtent",t.toJSON(),e)]})})},o.prototype.queryLatestObservations=function(t,e){return s(this,void 0,void 0,function(){return i(this,function(r){switch(r.label){case 0:return[4,this._startupResolver.promise];case 1:return r.sent(),[2,this._connection.invoke("controller.queryLatestObservations",t.toJSON(),e)]}})})},o.prototype.queryStatistics=function(t){return s(this,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return[4,this._startupResolver.promise];case 1:return e.sent(),[2,this._connection.invoke("controller.queryStatistics",t)]}})})},o.prototype.getObjectId=function(t){return s(this,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return[4,this._startupResolver.promise];case 1:return e.sent(),[2,this._connection.invoke("controller.getObjectId",t)]}})})},o.prototype.getLocalId=function(t){return s(this,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return[4,this._startupResolver.promise];case 1:return e.sent(),[2,this._connection.invoke("controller.getLocalId",t)]}})})},o.prototype.getAggregate=function(t){return s(this,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return[4,this._startupResolver.promise];case 1:return e.sent(),[2,this._connection.invoke("controller.getAggregate",t)]}})})},o.prototype.getAggregateValueRanges=function(){return s(this,void 0,void 0,function(){return i(this,function(t){switch(t.label){case 0:return[4,this._startupResolver.promise];case 1:return t.sent(),[2,this._connection.invoke("controller.getAggregateValueRanges")]}})})},o.prototype.mapValidLocalIds=function(t){return s(this,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return[4,this._startupResolver.promise];case 1:return e.sent(),[2,this._connection.invoke("controller.mapValidLocalIds",t)]}})})},o.prototype.onEdits=function(t){return s(this,void 0,void 0,function(){var e,r,n;return i(this,function(o){switch(o.label){case 0:return[4,this._startupResolver.promise];case 1:return o.sent(),e=t.addedFeatures,r=t.deletedFeatures,n=t.updatedFeatures,[2,this._connection.invoke("controller.onEdits",{addedFeatures:e,deletedFeatures:r,updatedFeatures:n})]}})})},o.prototype.enableEvent=function(t,e){return s(this,void 0,void 0,function(){return i(this,function(r){switch(r.label){case 0:return[4,this._startupResolver.promise];case 1:return r.sent(),[2,this._connection.invoke("controller.enableEvent",{name:t,value:e})]}})})},o.prototype._startWorker=function(e){return s(this,void 0,void 0,function(){var r,n;return i(this,function(o){switch(o.label){case 0:return r=a.getAbsMid("../features/Pipeline",t,h),[4,l.open(r,{client:this.client,strategy:"dedicated",signal:e})];case 1:return n=o.sent(),this._connection=n,[2]}})})},n([p.property()],o.prototype,"isReady",void 0),n([p.property()],o.prototype,"client",void 0),n([p.property()],o.prototype,"tileRenderer",null),o=n([p.subclass("esri.views.2d.layers.support.FeatureLayerProxy")],o)}(p.declared(c.EsriPromise));e.default=v}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/support/clusterUtils.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/support/clusterUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../../../core/MD5 */ "./node_modules/arcgis-js-api/core/MD5.js"),__webpack_require__(/*! ../../../../renderers/visualVariables/SizeVariable */ "./node_modules/arcgis-js-api/renderers/visualVariables/SizeVariable.js"),__webpack_require__(/*! ../../../../renderers/visualVariables/support/SizeStop */ "./node_modules/arcgis-js-api/renderers/visualVariables/support/SizeStop.js"),__webpack_require__(/*! ../../engine */ "./node_modules/arcgis-js-api/views/2d/engine.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,i,t,n,a,l,s,u,o,c,d){function p(e,r,i){switch(e){case"avg":case"avg_angle":return"cluster_avg_"+r;case"mode":return"cluster_type_"+r;case"norm":var t=i,n=r.toLowerCase()+",norm:field,"+t.toLowerCase();return"cluster_avg_"+u.createMD5Hash(n)}}function f(e,r,i,t){var n=p(i,r,t);return e.some(function(e){return e.name===n})||("norm"===i?e.push({name:n,outStatistic:{onStatisticField:r,onStatisticNormalizationField:t,statisticType:i}}):e.push({name:n,outStatistic:{onStatisticField:r,statisticType:i}})),n}var v=this;Object.defineProperty(r,"__esModule",{value:!0});var m=l.getLogger("esri.views.2d.layers.support.clusterUtils");r.createClusterRenderer=function(e,n,a,l,u){return t(v,void 0,void 0,function(){var t,n,o;return i(this,function(i){if(t=a.clone(),!r.isClusterCompatibleRenderer(t))return[2,t];switch(n="visualVariables"in t&&t.visualVariables||[],o=r.findSizeVV(n),n.forEach(function(r){"rotation"===r.type?r.field=f(e,r.field,"avg_angle"):r.normalizationField?(r.field=f(e,r.field,"norm",r.normalizationField),r.normalizationField=null):r.field&&(r.field=f(e,r.field,"avg"))}),s.isNone(o)&&n.push(r.createClusterCountSizeVariable(l,u)),t.type){case"simple":break;case"unique-value":t.field&&(t.field=f(e,t.field,"mode"));break;case"class-breaks":t.normalizationField?(t.field=f(e,t.field,"norm",t.normalizationField),t.normalizationField=null):t.field=f(e,t.field,"avg")}return t.visualVariables=n,[2,t]})})},r.findSizeVV=function(e){for(var r=0,i=e;r<i.length;r++){var t=i[r];if("size"===t.type)return t}return null},r.getActiveSizeStops=function(e,r){var i=e.featuresTilingScheme.getClosestInfoForScale(e.scale),t=i.level;return r.levels?r.levels[t]:null},r.createClusterCountSizeVariable=function(e,r){var i=[new c({value:0,size:0}),new c({value:1})];if(s.isNone(r))return new o({field:"cluster_count",stops:i.concat([new c({value:2,size:0})])});var t=Object.keys(r).reduce(function(e,t){var a;return n({},e,(a={},a[t]=i.concat([new c({value:Math.max(2,r[t].minValue),size:"12px"}),new c({value:Math.max(3,r[t].maxValue),size:"50px"})]),a))},{});return new d.LevelDependentSizeVariable({field:"cluster_count",levels:t})},r.isClusterCompatibleRenderer=function(e){var r=function(r){return m.error(new a("Unsupported-renderer",r,{renderer:e}))};if("valueExpression"in e&&e.valueExpression)return r("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if("unique-value"===e.type){if(e.field2||e.field3)return r("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===e.type){if(e.normalizationField){var i=e.normalizationType;if("field"!==i)return r("FeatureReductionCluster does not support a normalizationType of "+i),!1}}else if("simple"!==e.type)return r("FeatureReductionCluster does not support renderers of type "+e.type),!1;return!("visualVariables"in e&&e.visualVariables||[]).some(function(e){return!!("valueExpression"in e&&e.valueExpression)})||(r("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1)}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/support/popupUtils2D.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/support/popupUtils2D.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,n,o){function a(e,t,r){var n=r.get("state.resolution"),a="number"==typeof n?n:1,x=t*a,i=e.clone().offset(-x,-x),c=e.clone().offset(x,x),f=r.spatialReference;return new o({xmin:Math.min(i.x,c.x),ymin:Math.min(i.y,c.y),xmax:Math.max(i.x,c.x),ymax:Math.max(i.y,c.y),spatialReference:f})}Object.defineProperty(t,"__esModule",{value:!0}),t.createQueryGeometry=a}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/support/util.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/support/util.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,o){function r(e){return i.toJSON(e)}function n(e,t,o){for(var r=[],n=[],i=0,l=0,u=0,y=e;u<y.length;u++){var a=y[u],p=l,s=a[0][0],f=a[0][1];r[l++]=s,r[l++]=f;for(var m=0,c=1;c<a.length;++c){var g=s,h=f;s=a[c][0],f=a[c][1],m+=f*g-s*h,r[l++]=s,r[l++]=f}t(m/2),m>0?(p-i>0&&(o(i,p,r,n),i=p),n.length=0):m<0&&p-i>0?n.push(.5*(p-i)):l=p}l-i>0&&o(i,l,r,n)}Object.defineProperty(t,"__esModule",{value:!0});var i=new o.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});t.toJSONGeometryType=r,t.analyzeRings=n}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/layers/FeatureLayerView.js":
/*!*********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/layers/FeatureLayerView.js ***!
  \*********************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/iteratorUtils */ "./node_modules/arcgis-js-api/core/iteratorUtils.js"),__webpack_require__(/*! ../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../core/watchUtils */ "./node_modules/arcgis-js-api/core/watchUtils.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../layers/support/fieldUtils */ "./node_modules/arcgis-js-api/layers/support/fieldUtils.js"),__webpack_require__(/*! ../../layers/support/timeUtils */ "./node_modules/arcgis-js-api/layers/support/timeUtils.js"),__webpack_require__(/*! ../../support/arcadeOnDemand */ "./node_modules/arcgis-js-api/support/arcadeOnDemand.js"),__webpack_require__(/*! ../../tasks/support/Query */ "./node_modules/arcgis-js-api/tasks/support/Query.js"),__webpack_require__(/*! ./support/FeatureEffect */ "./node_modules/arcgis-js-api/views/layers/support/FeatureEffect.js"),__webpack_require__(/*! ./support/FeatureFilter */ "./node_modules/arcgis-js-api/views/layers/support/FeatureFilter.js"),__webpack_require__(/*! ./support/popupUtils */ "./node_modules/arcgis-js-api/views/layers/support/popupUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,o,n,u,l,s,a,p,d,c,f,y,h,m,F,v,g,b){Object.defineProperty(t,"__esModule",{value:!0});var x=a.getLogger("esri.views.layers.FeatureLayerView");t.FeatureLayerView=function(e){return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=e.apply(this,t)||this;return i._updatingRequiredFieldsPromise=null,i.effect=null,i.filter=null,i.layer=null,i.requiredFields=null,i.view=null,i}return r(t,e),t.prototype.initialize=function(){var e=this;c.init(this,["layer.renderer","layer.labelingInfo","layer.elevationInfo.featureExpressionInfo","filter","effect","layer.timeInfo","timeExtent"],function(){return e._handleRequiredFieldsChange()},!0)},Object.defineProperty(t.prototype,"availableFields",{get:function(){var e=this,t=e.layer,r=e.layer.fields,i=e.requiredFields;return"outFields"in t&&t.outFields?y.fixFields(r,y.unpackFieldNames(r,t.outFields).concat(i)):y.fixFields(r,i)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maximumNumberOfFeatures",{get:function(){return 0},set:function(e){x.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maximumNumberOfFeaturesExceeded",{get:function(){return!1},enumerable:!0,configurable:!0}),t.prototype.highlight=function(e,t){return void 0===t&&(t={}),this.inherited(arguments,[e,t])},t.prototype.createQuery=function(){var e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},t=p.isSome(this.filter)?this.filter.createQuery(e):new F(e);return this.timeExtent&&(t.timeExtent=t.timeExtent?t.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),t},t.prototype.queryFeatures=function(e,t){return this.inherited(arguments,[e,t])},t.prototype.queryObjectIds=function(e,t){return this.inherited(arguments,[e,t])},t.prototype.queryFeatureCount=function(e,t){return this.inherited(arguments,[e,t])},t.prototype.queryExtent=function(e,t){return this.inherited(arguments,[e,t])},t.prototype._loadArcadeModules=function(e){if(e.get("expressionInfos.length"))return m.loadArcade()},t.prototype._handleRequiredFieldsChange=function(){var e=this,t=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",t),t.then(function(){e._updatingRequiredFieldsPromise===t&&e._set("_updatingRequiredFieldsPromise",null)})},t.prototype._updateRequiredFields=function(){return u(this,void 0,void 0,function(){var e,t,r,i,o,u,l,a,c,f,h,m,F;return n(this,function(n){switch(n.label){case 0:return this.layer&&this.view?(e="3d"===this.view.type,t=this,r=t.layer,i=t.layer,o=i.fields,u=i.objectIdField,l=i.renderer,a=new Set,[4,d.eachAlways([l?l.collectRequiredFields(a,o):null,y.collectLabelingFields(a,r),e?y.collectElevationFields(a,r):null,p.isSome(this.filter)?y.collectFilterFields(a,r,this.filter):null,this.effect?y.collectFilterFields(a,r,this.effect.filter):null])]):[2];case 1:for(c=n.sent(),r.timeInfo&&this.timeExtent&&y.collectFields(a,r.fields,[r.timeInfo.startField,r.timeInfo.endField]),f=0,h=c;f<h.length;f++)m=h[f],m.error&&x.error(m.error);return y.collectField(a,o,u),F=s.valuesOfSet(a).sort(),this._set("requiredFields",F),[2]}})})},t.prototype.validateFetchPopupFeatures=function(e){var t=this,r=t.layer;return t.layer.popupEnabled?b.getFetchPopupTemplate(this.layer,e)?void 0:new l("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:r}):new l("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:r})},t.prototype.fetchClientPopupFeatures=function(e){return u(this,void 0,void 0,function(){var t,r,i,o,u,l,s,a,c,f,h,m;return n(this,function(n){switch(n.label){case 0:return(t=p.isSome(e)?e.clientGraphics:null)&&0!==t.length?(r=[],i=[],o=this.layer,u=b.getFetchPopupTemplate(o,e),p.isSome(u)?[4,this._loadArcadeModules(u)]:[2,d.resolve([])]):[2,d.resolve([])];case 1:return l=n.sent(),s=l&&l.arcadeUtils.hasGeometryOperations(u),[4,this.createPopupQuery(e)];case 2:for(a=n.sent(),c=y.unpackFieldNames(o.fields,a.outFields),f=0,h=t;f<h.length;f++)m=h[f],s||!y.featureHasFields(c,m)?i.push(m):r.push(m);return 0===i.length?[2,d.resolve(r)]:(a.objectIds=i.map(function(e){return e.attributes[o.objectIdField]}),[2,o.queryFeatures(a).then(function(e){return r.concat(e.features)}).catch(function(){return i})])}})})},t.prototype.createPopupQuery=function(e){return u(this,void 0,void 0,function(){var t,r,i;return n(this,function(o){switch(o.label){case 0:return t=this.layer,r=t.createQuery(),r.returnGeometry=!0,r.returnZ=!0,r.returnM=!0,i=r,[4,b.getRequiredFields(this.layer,b.getFetchPopupTemplate(this.layer,e))];case 1:return i.outFields=o.sent(),r.outSpatialReference=this.view.spatialReference,[2,r]}})})},i([f.property()],t.prototype,"_updatingRequiredFieldsPromise",void 0),i([f.property({readOnly:!0,dependsOn:["layer.outFields?","requiredFields"]})],t.prototype,"availableFields",null),i([f.property({type:v})],t.prototype,"effect",void 0),i([f.property({type:g})],t.prototype,"filter",void 0),i([f.property(h.combinedViewLayerTimeExtentProperty)],t.prototype,"timeExtent",void 0),i([f.property()],t.prototype,"layer",void 0),i([f.property({type:Number})],t.prototype,"maximumNumberOfFeatures",null),i([f.property({readOnly:!0,type:Boolean})],t.prototype,"maximumNumberOfFeaturesExceeded",null),i([f.property({readOnly:!0})],t.prototype,"requiredFields",void 0),i([f.property()],t.prototype,"view",void 0),t=i([f.subclass("esri.views.layers.FeatureLayerView")],t)}(f.declared(e))}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/layers/support/FeatureEffect.js":
/*!**************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/layers/support/FeatureEffect.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./FeatureFilter */ "./node_modules/arcgis-js-api/views/layers/support/FeatureFilter.js"),__webpack_require__(/*! ./ParsedFeatureEffect */ "./node_modules/arcgis-js-api/views/layers/support/ParsedFeatureEffect.js"),__webpack_require__(/*! ./Transition */ "./node_modules/arcgis-js-api/views/layers/support/Transition.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,d,f,i,c,n,o,l,u){var s=i.getLogger("esri.views.layers.support.FeatureEffect");return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.filter=null,t.includedEffect=null,t.excludedEffect=null,t.excludedLabelsVisible=!1,t}d(t,e),f=t,Object.defineProperty(t.prototype,"insideEffect",{get:function(){return s.warn("insideEffect is a temporary interface that will be removed. Use includedEffect instead"),this.includedEffect},set:function(e){s.warn("insideEffect is a temporary interface that will be removed. Use includedEffect instead"),this.includedEffect=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"outsideEffect",{get:function(){return s.warn("outsideEffect is a temporary interface that will be removed. Use excludedEffect instead"),this.excludedEffect},set:function(e){s.warn("outsideEffect is a temporary interface that will be removed. Use excludedEffect instead"),this.excludedEffect=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"parsedIncludedEffect",{get:function(){return c.isSome(this.includedEffect)?"string"==typeof this.includedEffect?l.fromString(this.includedEffect):new u({from:l.fromString(this.includedEffect.from),to:l.fromString(this.includedEffect.to),duration:this.includedEffect.duration}):null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"parsedExcludedEffect",{get:function(){return c.isSome(this.excludedEffect)?"string"==typeof this.excludedEffect?l.fromString(this.excludedEffect):new u({from:l.fromString(this.excludedEffect.from),to:l.fromString(this.excludedEffect.to),duration:this.excludedEffect.duration}):null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"renderingHash",{get:function(){return this.excludedLabelsVisible+"-"+this.includedEffect+"-"+this.excludedEffect},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"done",{get:function(){return(!c.isSome(this.parsedIncludedEffect)||this.parsedIncludedEffect.done)&&(!c.isSome(this.parsedExcludedEffect)||this.parsedExcludedEffect.done)},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new f({filter:this.filter&&this.filter.clone(),includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})};var f;return r([n.property({type:o,json:{write:!0}})],t.prototype,"filter",void 0),r([n.property({type:String,json:{write:!0}})],t.prototype,"includedEffect",void 0),r([n.property({type:String,json:{write:!0}})],t.prototype,"excludedEffect",void 0),r([n.property({type:Boolean,json:{write:!0}})],t.prototype,"excludedLabelsVisible",void 0),r([n.property({dependsOn:["includedEffect"]})],t.prototype,"parsedIncludedEffect",null),r([n.property({dependsOn:["excludedEffect"]})],t.prototype,"parsedExcludedEffect",null),r([n.property({dependsOn:["includedEffect","excludedEffect"]})],t.prototype,"renderingHash",null),t=f=r([n.subclass("esri.views.layers.support.FeatureEffect")],t)}(n.declared(f.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/layers/support/FeatureFilter.js":
/*!**************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/layers/support/FeatureFilter.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../../../TimeExtent */ "./node_modules/arcgis-js-api/TimeExtent.js"),__webpack_require__(/*! ../../../core/iteratorUtils */ "./node_modules/arcgis-js-api/core/iteratorUtils.js"),__webpack_require__(/*! ../../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../geometry/support/jsonUtils */ "./node_modules/arcgis-js-api/geometry/support/jsonUtils.js"),__webpack_require__(/*! ../../../tasks/support/Query */ "./node_modules/arcgis-js-api/tasks/support/Query.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,o,n,s,a,p,l,c,d,u,y){var S=new p.default({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),h=new p.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});return function(e){function t(t){var r=e.call(this,t)||this;return r.where=null,r.geometry=null,r.spatialRelationship="intersects",r.hiddenIds=new Set,r.distance=void 0,r.objectIds=null,r.units=null,r.timeExtent=null,r.enabled=!1,r}i(t,e),p=t,t.prototype.writeWhere=function(e,t){t.where=e||"1=1"},t.prototype.enable=function(){this._set("enabled",!0)},t.prototype.createQuery=function(e){void 0===e&&(e={});var t=this,r=t.where,i=t.geometry,n=t.spatialRelationship,s=t.timeExtent,a=t.objectIds,p=t.units,l=t.distance;return new y(o({geometry:c.clone(i),objectIds:c.clone(a),spatialRelationship:n,timeExtent:c.clone(s),where:r,units:p,distance:l},e))},t.prototype.clone=function(){var e=this,t=e.where,r=e.geometry,i=e.spatialRelationship,o=e.hiddenIds,n=e.timeExtent,s=e.objectIds,a=e.units,l=e.distance,d=new Set;return o.forEach(function(e){return d.add(e)}),new p({geometry:c.clone(r),hiddenIds:d,objectIds:c.clone(s),spatialRelationship:i,timeExtent:c.clone(n),where:t,units:a,distance:l})};var p;return r([d.property({type:String})],t.prototype,"where",void 0),r([d.writer("where")],t.prototype,"writeWhere",null),r([d.property({types:n.geometryTypes,json:{read:u.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r([d.property({type:String,json:{read:{source:"spatialRel",reader:S.read},write:{target:"spatialRel",writer:S.write}}})],t.prototype,"spatialRelationship",void 0),r([d.property({json:{write:function(e,t,r){return t[r]=a.valuesOfSet(e)},read:function(e){return a.createSetFromValues(e)}}})],t.prototype,"hiddenIds",void 0),r([d.property({type:Number,json:{write:{overridePolicy:function(e){return{enabled:e>0}}}}})],t.prototype,"distance",void 0),r([d.property({type:[Number],json:{write:!0}})],t.prototype,"objectIds",void 0),r([d.property({type:String,json:{read:h.read,write:{writer:h.write,overridePolicy:function(e){return{enabled:e&&this.distance>0}}}}})],t.prototype,"units",void 0),r([d.property({type:s,json:{write:!0}})],t.prototype,"timeExtent",void 0),r([d.property({readOnly:!0})],t.prototype,"enabled",void 0),t=p=r([d.subclass("esri.views.layers.support.FeatureFilter")],t)}(d.declared(l.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/layers/support/ParsedFeatureEffect.js":
/*!********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/layers/support/ParsedFeatureEffect.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../core/libs/gl-matrix-2/mat4 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4.js"),__webpack_require__(/*! ../../../core/libs/gl-matrix-2/mat4f32 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4f32.js"),__webpack_require__(/*! ./cssFilterParser */ "./node_modules/arcgis-js-api/views/layers/support/cssFilterParser.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(r,t,e,o,a,n,s,u,i,p,c,f,m){var l=u.getLogger("esri.views.layers.support.ParsedFeatureEffect"),y=function(r){var t=1-r.amount,e=f.mat4f32.fromValues(.2126+.7874*t,.7152-.7152*t,.0722-.0722*t,0,.2126-.2126*t,.7152+.2848*t,.0722-.0722*t,0,.2126-.2126*t,.7152-.7152*t,.0722+.9278*t,0,0,0,0,1);return c.mat4.transpose(e,e)},v=function(r){var t=1-r.amount,e=f.mat4f32.fromValues(.393+.607*t,.769-.769*t,.189-.189*t,0,.349-.349*t,.686+.314*t,.168-.168*t,0,.272-.272*t,.534-.534*t,.131+.869*t,0,0,0,0,1);return c.mat4.transpose(e,e)},h=function(r){var t=r.amount,e=f.mat4f32.fromValues(.213+.787*t,.715-.715*t,.072-.072*t,0,.213-.213*t,.715+.285*t,.072-.072*t,0,.213-.213*t,.715-.715*t,.072+.928*t,0,0,0,0,1);return c.mat4.transpose(e,e)},g=function(r){var t=Math.sin(r.angle*Math.PI/180),e=Math.cos(r.angle*Math.PI/180),o=f.mat4f32.fromValues(.213+.787*e-.213*t,.715-.715*e-.715*t,.072-.072*e+.928*t,0,.213-.213*e+.143*t,.715+.285*e+.14*t,.072-.072*e-.283*t,0,.213-.213*e-.787*t,.715-.715*e+.715*t,.072+.928*e+.072*t,0,0,0,0,1);return c.mat4.transpose(o,o)},d=function(r){var t=1-2*r.amount,e=r.amount,o=f.mat4f32.fromValues(t,0,0,e,0,t,0,e,0,0,t,e,0,0,0,1);return c.mat4.transpose(o,o)},S=function(r){var t=r.amount,e=f.mat4f32.fromValues(t,0,0,0,0,t,0,0,0,0,t,0,0,0,0,1);return c.mat4.transpose(e,e)},V=function(r){var t=r.amount,e=f.mat4f32.fromValues(t,0,0,.5-.5*t,0,t,0,.5-.5*t,0,0,t,.5-.5*t,0,0,0,1);return c.mat4.transpose(e,e)},x={grayscale:y,sepia:v,saturate:h,"hue-rotate":g,invert:d,brightness:S,contrast:V};return function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t.customTransforms=null,t.done=!0,t}o(t,r),s=t,t.fromString=function(r){var t=[],e=null;try{for(var o=0,a=m.parse(r);o<a.length;o++){var u=a[o];"opacity"===u.type?e=u:t.push(u)}}catch(r){l.error(new n("invalid-type","Encountered an error when parsing css",r))}return new s({transforms:t,opacity:e})},t.prototype.getOpacity=function(){return i.isSome(this.opacity)?this.opacity.amount:1},t.prototype.getColorMatrix=function(){var r=this;return(this.transforms||[]).map(function(r){return a({},r)}).reverse().reduce(function(t,e){return c.mat4.multiply(t,t,r._getFactory(e)(e))},f.mat4f32.create())},t.prototype.clone=function(){return new s({transforms:this.transforms&&this.transforms.map(function(r){return a({},r)}),customTransforms:this.customTransforms&&this.customTransforms.map(function(r){return a({},r)})})},t.prototype._getFactory=function(r){var t=x[r.type];if(t)return t;if(this.customTransforms)for(var e=0,o=this.customTransforms;e<o.length;e++){var a=o[e],n=function(t){if(t.type===r.type){var e=f.mat4f32.fromValues.apply(f.mat4f32,t.matrix),o=c.mat4.transpose(e,e);return{value:function(){return o}}}}(a);if("object"==typeof n)return n.value}return l.error("invalid-type","No effect "+r.type+" exists"),function(){return f.mat4f32.create()}};var s;return e([p.property()],t.prototype,"opacity",void 0),e([p.property()],t.prototype,"transforms",void 0),e([p.property()],t.prototype,"customTransforms",void 0),t=s=e([p.subclass("esri.views.layers.support.ParsedFeatureEffect")],t)}(p.declared(s.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/layers/support/Transition.js":
/*!***********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/layers/support/Transition.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../core/libs/gl-matrix-2/mat4 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,r,e,o,i,n,p){return function(t){function r(){var r=null!==t&&t.apply(this,arguments)||this;return r.from=null,r.to=null,r.duration=4e3,r.repeat=!0,r.done=!1,r}o(r,t),i=r,r.prototype.getColorMatrix=function(){if(this.done=!1,null==this._lastTime)this._currentStep=0,this._lastTime=Date.now();else{var t=this._lastTime,r=Date.now(),e=r-t;this._currentStep=this._currentStep+e,this._currentStep>=2147483647&&(this._currentStep=0),this._lastTime=r}var o=this._currentStep%this.duration/(this.duration/2),i=o<=1?o:2-o,n=this.from.getColorMatrix(),s=this.to.getColorMatrix();return p.mat4.multiplyScalar(n,n,1-i),p.mat4.multiplyScalar(s,s,i),!this.repeat&&this._currentStep>=this.duration&&(this.done=!0),p.mat4.add(n,n,s)},r.prototype.getOpacity=function(){throw new Error("No getOpacity definition for Transition")},r.prototype.clone=function(){var t=new i({from:this.from.clone(),to:this.to.clone(),duration:this.duration});return t._lastTime=this._lastTime,t._currentStep=this._currentStep,t};var i;return e([n.property()],r.prototype,"from",void 0),e([n.property()],r.prototype,"to",void 0),e([n.property({type:Number})],r.prototype,"duration",void 0),e([n.property({type:Boolean})],r.prototype,"repeat",void 0),r=i=e([n.subclass("esri.views.layers.support.Transition")],r)}(n.declared(i))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/layers/support/cssFilterParser.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/layers/support/cssFilterParser.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){"use strict";function r(t,e,n,a){this.message=t,this.expected=e,this.found=n,this.location=a,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,r)}function t(t,e){function n(){return t.substring(oe,ue)}function a(r,t){throw t=void 0!==t?t:s(oe,ue),h(r,t)}function u(r,t){return{type:"literal",text:r,ignoreCase:t}}function o(r,t,e){return{type:"class",parts:r,inverted:t,ignoreCase:e}}function i(r){return{type:"other",description:r}}function c(r){var e,n=ie[r];if(n)return n;for(e=r-1;!ie[e];)e--;for(n=ie[e],n={line:n.line,column:n.column};e<r;)10===t.charCodeAt(e)?(n.line++,n.column=1):n.column++,e++;return ie[r]=n,n}function s(r,t){var e=c(r),n=c(t);return{start:{offset:r,line:e.line,column:e.column},end:{offset:t,line:n.line,column:n.column}}}function l(r){ue<ce||(ue>ce&&(ce=ue,se=[]),se.push(r))}function h(t,e){return new r(t,null,null,e)}function d(t,e,n){return new r(r.buildMessage(t,e),t,e,n)}function f(){var r;return r=g(),r===Y&&(r=p()),r}function g(){var r,e,n,a;return le++,r=ue,e=P(),e!==Y?(t.substr(ue,4)===H?(n=H,ue+=4):(n=Y,0===le&&l(J)),n!==Y?(a=P(),a!==Y?(oe=r,e=K(),r=e):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y),le--,r===Y&&(e=Y,0===le&&l(G)),r}function p(){var r,t;if(r=[],(t=b())!==Y)for(;t!==Y;)r.push(t),t=b();else r=Y;return r}function b(){var r;return r=m(),r===Y&&(r=y())===Y&&(r=A())===Y&&(r=v())===Y&&(r=C())===Y&&(r=w())===Y&&(r=k())===Y&&(r=x())===Y&&(r=F())===Y&&(r=j()),r}function m(){var r,e,n,a,u,o,i,c;return le++,r=ue,e=P(),e!==Y?(t.substr(ue,5)===V?(n=V,ue+=5):(n=Y,0===le&&l(W)),n!==Y?(a=P(),a!==Y?(u=Q(),u!==Y?(o=P(),o!==Y?(41===t.charCodeAt(ue)?(i=Z,ue++):(i=Y,0===le&&l($)),i!==Y?(c=P(),c!==Y?(oe=r,e=_(u),r=e):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y),le--,r===Y&&(e=Y,0===le&&l(L)),r}function y(){var r,e,n,a,u,o,i,c;return le++,r=ue,e=P(),e!==Y?(t.substr(ue,11)===tr?(n=tr,ue+=11):(n=Y,0===le&&l(er)),n!==Y?(a=P(),a!==Y?(u=q(),u!==Y?(o=P(),o!==Y?(41===t.charCodeAt(ue)?(i=Z,ue++):(i=Y,0===le&&l($)),i!==Y?(c=P(),c!==Y?(oe=r,e=nr(u),r=e):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y),le--,r===Y&&(e=Y,0===le&&l(rr)),r}function A(){var r,e,n,a,u,o,i,c;return le++,r=ue,e=P(),e!==Y?(t.substr(ue,9)===ur?(n=ur,ue+=9):(n=Y,0===le&&l(or)),n!==Y?(a=P(),a!==Y?(u=q(),u!==Y?(o=P(),o!==Y?(41===t.charCodeAt(ue)?(i=Z,ue++):(i=Y,0===le&&l($)),i!==Y?(c=P(),c!==Y?(oe=r,e=ir(u),r=e):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y),le--,r===Y&&(e=Y,0===le&&l(ar)),r}function v(){var r,e,n,a,u,o,i,c,s,h,d,f,g,p;return le++,r=ue,e=P(),e!==Y?(t.substr(ue,12)===sr?(n=sr,ue+=12):(n=Y,0===le&&l(lr)),n!==Y?(a=P(),a!==Y?(u=Q(),u!==Y?(o=P(),o!==Y?(i=Q(),i!==Y?(c=P(),c!==Y?(s=Q(),s===Y&&(s=null),s!==Y?(h=P(),h!==Y?(d=N(),d===Y&&(d=null),d!==Y?(f=P(),f!==Y?(41===t.charCodeAt(ue)?(g=Z,ue++):(g=Y,0===le&&l($)),g!==Y?(p=P(),p!==Y?(oe=r,e=hr(u,i,s,d),r=e):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y),le--,r===Y&&(e=Y,0===le&&l(cr)),r}function C(){var r,e,n,a,u,o,i,c;return le++,r=ue,e=P(),e!==Y?(t.substr(ue,10)===fr?(n=fr,ue+=10):(n=Y,0===le&&l(gr)),n!==Y?(a=P(),a!==Y?(u=q(),u!==Y?(o=P(),o!==Y?(41===t.charCodeAt(ue)?(i=Z,ue++):(i=Y,0===le&&l($)),i!==Y?(c=P(),c!==Y?(oe=r,e=pr(u),r=e):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y),le--,r===Y&&(e=Y,0===le&&l(dr)),r}function w(){var r,e,n,a,u,o,i,c;return le++,r=ue,e=P(),e!==Y?(t.substr(ue,11)===mr?(n=mr,ue+=11):(n=Y,0===le&&l(yr)),n!==Y?(a=P(),a!==Y?(u=z(),u!==Y?(o=P(),o!==Y?(41===t.charCodeAt(ue)?(i=Z,ue++):(i=Y,0===le&&l($)),i!==Y?(c=P(),c!==Y?(oe=r,e=Ar(u),r=e):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y),le--,r===Y&&(e=Y,0===le&&l(br)),r}function k(){var r,e,n,a,u,o,i,c;return le++,r=ue,e=P(),e!==Y?(t.substr(ue,7)===Cr?(n=Cr,ue+=7):(n=Y,0===le&&l(wr)),n!==Y?(a=P(),a!==Y?(u=q(),u!==Y?(o=P(),o!==Y?(41===t.charCodeAt(ue)?(i=Z,ue++):(i=Y,0===le&&l($)),i!==Y?(c=P(),c!==Y?(oe=r,e=kr(u),r=e):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y),le--,r===Y&&(e=Y,0===le&&l(vr)),r}function x(){var r,e,n,a,u,o,i,c;return le++,r=ue,e=P(),e!==Y?(t.substr(ue,8)===Fr?(n=Fr,ue+=8):(n=Y,0===le&&l(jr)),n!==Y?(a=P(),a!==Y?(u=q(),u!==Y?(o=P(),o!==Y?(41===t.charCodeAt(ue)?(i=Z,ue++):(i=Y,0===le&&l($)),i!==Y?(c=P(),c!==Y?(oe=r,e=qr(u),r=e):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y),le--,r===Y&&(e=Y,0===le&&l(xr)),r}function F(){var r,e,n,a,u,o,i,c;return le++,r=ue,e=P(),e!==Y?(t.substr(ue,9)===Er?(n=Er,ue+=9):(n=Y,0===le&&l(Sr)),n!==Y?(a=P(),a!==Y?(u=q(),u!==Y?(o=P(),o!==Y?(41===t.charCodeAt(ue)?(i=Z,ue++):(i=Y,0===le&&l($)),i!==Y?(c=P(),c!==Y?(oe=r,e=Rr(u),r=e):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y),le--,r===Y&&(e=Y,0===le&&l(Ir)),r}function j(){var r,e,n,a,u,o,i,c;return le++,r=ue,e=P(),e!==Y?(t.substr(ue,6)===Mr?(n=Mr,ue+=6):(n=Y,0===le&&l(Qr)),n!==Y?(a=P(),a!==Y?(u=q(),u!==Y?(o=P(),o!==Y?(41===t.charCodeAt(ue)?(i=Z,ue++):(i=Y,0===le&&l($)),i!==Y?(c=P(),c!==Y?(oe=r,e=Tr(u),r=e):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y),le--,r===Y&&(e=Y,0===le&&l(zr)),r}function q(){var r;return le++,r=R(),r===Y&&(r=E()),le--,r===Y&&(Y,0===le&&l(Nr)),r}function I(){var r,e,n;if(le++,r=ue,e=[],Pr.test(t.charAt(ue))?(n=t.charAt(ue),ue++):(n=Y,0===le&&l(Ur)),n!==Y)for(;n!==Y;)e.push(n),Pr.test(t.charAt(ue))?(n=t.charAt(ue),ue++):(n=Y,0===le&&l(Ur));else e=Y;return e!==Y&&(oe=r,e=Xr()),r=e,le--,r===Y&&(e=Y,0===le&&l(Or)),r}function E(){var r,e,n,a,u;if(le++,r=ue,e=[],Pr.test(t.charAt(ue))?(n=t.charAt(ue),ue++):(n=Y,0===le&&l(Ur)),n!==Y)for(;n!==Y;)e.push(n),Pr.test(t.charAt(ue))?(n=t.charAt(ue),ue++):(n=Y,0===le&&l(Ur));else e=Y;if(e!==Y)if(46===t.charCodeAt(ue)?(n=Br,ue++):(n=Y,0===le&&l(Dr)),n!==Y){if(a=[],Pr.test(t.charAt(ue))?(u=t.charAt(ue),ue++):(u=Y,0===le&&l(Ur)),u!==Y)for(;u!==Y;)a.push(u),Pr.test(t.charAt(ue))?(u=t.charAt(ue),ue++):(u=Y,0===le&&l(Ur));else a=Y;a!==Y?(oe=r,e=Gr(),r=e):(ue=r,r=Y)}else ue=r,r=Y;else ue=r,r=Y;return r===Y&&(r=I()),le--,r===Y&&(e=Y,0===le&&l(Yr)),r}function S(){var r,e,n;return le++,r=ue,Jr.test(t.charAt(ue))?(e=t.charAt(ue),ue++):(e=Y,0===le&&l(Kr)),e===Y&&(e=null),e!==Y?(n=E(),n!==Y?(oe=r,e=Gr(),r=e):(ue=r,r=Y)):(ue=r,r=Y),le--,r===Y&&(e=Y,0===le&&l(Hr)),r}function R(){var r,e,n;return r=ue,e=E(),e!==Y?(37===t.charCodeAt(ue)?(n=Lr,ue++):(n=Y,0===le&&l(Vr)),n!==Y?(oe=r,e=Wr(e),r=e):(ue=r,r=Y)):(ue=r,r=Y),r}function z(){var r,e,n;return le++,r=ue,e=S(),e!==Y?(n=M(),n!==Y?(oe=r,e=$r(e,n),r=e):(ue=r,r=Y)):(ue=r,r=Y),r===Y&&(r=ue,48===t.charCodeAt(ue)?(e=_r,ue++):(e=Y,0===le&&l(rt)),e!==Y?(n=M(),n===Y&&(n=null),n!==Y?(oe=r,e=tt(),r=e):(ue=r,r=Y)):(ue=r,r=Y)),le--,r===Y&&(e=Y,0===le&&l(Zr)),r}function M(){var r,e;return le++,r=ue,t.substr(ue,3)===nt?(e=nt,ue+=3):(e=Y,0===le&&l(at)),e!==Y&&(oe=r,e=ut()),r=e,r===Y&&(r=ue,t.substr(ue,4)===ot?(e=ot,ue+=4):(e=Y,0===le&&l(it)),e!==Y&&(oe=r,e=ct()),(r=e)===Y&&(r=ue,t.substr(ue,3)===st?(e=st,ue+=3):(e=Y,0===le&&l(lt)),e!==Y&&(oe=r,e=ht()),(r=e)===Y&&(r=ue,t.substr(ue,4)===dt?(e=dt,ue+=4):(e=Y,0===le&&l(ft)),e!==Y&&(oe=r,e=gt()),r=e))),le--,r===Y&&(e=Y,0===le&&l(et)),r}function Q(){var r,e,n;return le++,r=ue,e=E(),e!==Y?(n=T(),n!==Y?(oe=r,e=$r(e,n),r=e):(ue=r,r=Y)):(ue=r,r=Y),r===Y&&(r=ue,48===t.charCodeAt(ue)?(e=_r,ue++):(e=Y,0===le&&l(rt)),e!==Y?(n=T(),n===Y&&(n=null),n!==Y?(oe=r,e=tt(),r=e):(ue=r,r=Y)):(ue=r,r=Y)),le--,r===Y&&(e=Y,0===le&&l(pt)),r}function T(){var r,e;return r=ue,t.substr(ue,2)===bt?(e=bt,ue+=2):(e=Y,0===le&&l(mt)),e!==Y&&(oe=r,e=ut()),r=e,r===Y&&(r=ue,t.substr(ue,2)===yt?(e=yt,ue+=2):(e=Y,0===le&&l(At)),e!==Y&&(oe=r,e=vt()),(r=e)===Y&&(r=ue,t.substr(ue,2)===Ct?(e=Ct,ue+=2):(e=Y,0===le&&l(wt)),e!==Y&&(oe=r,e=kt()),(r=e)===Y&&(r=ue,81===t.charCodeAt(ue)?(e=xt,ue++):(e=Y,0===le&&l(Ft)),e!==Y&&(oe=r,e=jt()),(r=e)===Y&&(r=ue,t.substr(ue,2)===qt?(e=qt,ue+=2):(e=Y,0===le&&l(It)),e!==Y&&(oe=r,e=Et()),(r=e)===Y&&(r=ue,t.substr(ue,2)===St?(e=St,ue+=2):(e=Y,0===le&&l(Rt)),e!==Y&&(oe=r,e=zt()),(r=e)===Y&&(r=ue,t.substr(ue,2)===Mt?(e=Mt,ue+=2):(e=Y,0===le&&l(Qt)),e!==Y&&(oe=r,e=Tt()),r=e)))))),r}function N(){var r,e,n,a,u,o,i,c,s,h,d,f,g,p,b,m,y,A;return r=ue,35===t.charCodeAt(ue)?(e=Nt,ue++):(e=Y,0===le&&l(Ot)),e!==Y?(n=ue,a=O(),a!==Y?(u=O(),u!==Y?(a=[a,u],n=a):(ue=n,n=Y)):(ue=n,n=Y),n!==Y?(a=ue,u=O(),u!==Y?(o=O(),o!==Y?(u=[u,o],a=u):(ue=a,a=Y)):(ue=a,a=Y),a!==Y?(u=ue,o=O(),o!==Y?(i=O(),i!==Y?(o=[o,i],u=o):(ue=u,u=Y)):(ue=u,u=Y),u!==Y?(oe=r,e=Pt(n,a,u),r=e):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y),r===Y&&(r=ue,35===t.charCodeAt(ue)?(e=Nt,ue++):(e=Y,0===le&&l(Ot)),e!==Y?(n=O(),n!==Y?(a=O(),a!==Y?(u=O(),u!==Y?(oe=r,e=Ut(n,a,u),r=e):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y),r===Y&&(r=ue,t.substr(ue,5)===Xt?(e=Xt,ue+=5):(e=Y,0===le&&l(Yt)),e!==Y?(n=P(),n!==Y?(a=R(),a!==Y?(u=P(),u!==Y?(44===t.charCodeAt(ue)?(o=Bt,ue++):(o=Y,0===le&&l(Dt)),o!==Y?(i=P(),i!==Y?(c=R(),c!==Y?(s=P(),s!==Y?(44===t.charCodeAt(ue)?(h=Bt,ue++):(h=Y,0===le&&l(Dt)),h!==Y?(d=P(),d!==Y?(f=R(),f!==Y?(g=P(),g!==Y?(44===t.charCodeAt(ue)?(p=Bt,ue++):(p=Y,0===le&&l(Dt)),p!==Y?(b=P(),b!==Y?(m=q(),m!==Y?(y=P(),y!==Y?(41===t.charCodeAt(ue)?(A=Z,ue++):(A=Y,0===le&&l($)),A!==Y?(oe=r,e=Gt(a,c,f,m),r=e):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y),r===Y&&(r=ue,t.substr(ue,5)===Xt?(e=Xt,ue+=5):(e=Y,0===le&&l(Yt)),e!==Y?(n=P(),n!==Y?(a=E(),a!==Y?(u=P(),u!==Y?(44===t.charCodeAt(ue)?(o=Bt,ue++):(o=Y,0===le&&l(Dt)),o!==Y?(i=P(),i!==Y?(c=E(),c!==Y?(s=P(),s!==Y?(44===t.charCodeAt(ue)?(h=Bt,ue++):(h=Y,0===le&&l(Dt)),h!==Y?(d=P(),d!==Y?(f=E(),f!==Y?(44===t.charCodeAt(ue)?(g=Bt,ue++):(g=Y,0===le&&l(Dt)),g!==Y?(p=P(),p!==Y?(b=q(),b!==Y?(41===t.charCodeAt(ue)?(m=Z,ue++):(m=Y,0===le&&l($)),m!==Y?(oe=r,e=Ht(a,c,f,b),r=e):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y),r===Y&&(r=ue,t.substr(ue,5)===Xt?(e=Xt,ue+=5):(e=Y,0===le&&l(Yt)),e!==Y?(n=P(),n!==Y?(a=R(),a!==Y?(u=P(),u!==Y?(44===t.charCodeAt(ue)?(o=Bt,ue++):(o=Y,0===le&&l(Dt)),o!==Y?(i=P(),i!==Y?(c=R(),c!==Y?(s=P(),s!==Y?(44===t.charCodeAt(ue)?(h=Bt,ue++):(h=Y,0===le&&l(Dt)),h!==Y?(d=P(),d!==Y?(f=R(),f!==Y?(g=P(),g!==Y?(41===t.charCodeAt(ue)?(p=Z,ue++):(p=Y,0===le&&l($)),p!==Y?(oe=r,e=Jt(a,c,f),r=e):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y),r===Y&&(r=ue,t.substr(ue,5)===Xt?(e=Xt,ue+=5):(e=Y,0===le&&l(Yt)),e!==Y?(n=P(),n!==Y?(a=E(),a!==Y?(u=P(),u!==Y?(44===t.charCodeAt(ue)?(o=Bt,ue++):(o=Y,0===le&&l(Dt)),o!==Y?(i=P(),i!==Y?(c=E(),c!==Y?(s=P(),s!==Y?(44===t.charCodeAt(ue)?(h=Bt,ue++):(h=Y,0===le&&l(Dt)),h!==Y?(d=P(),d!==Y?(f=E(),f!==Y?(41===t.charCodeAt(ue)?(g=Z,ue++):(g=Y,0===le&&l($)),g!==Y?(oe=r,e=Kt(a,c,f),r=e):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y),r===Y&&(r=ue,t.substr(ue,4)===Lt?(e=Lt,ue+=4):(e=Y,0===le&&l(Vt)),e!==Y?(n=P(),n!==Y?(a=R(),a!==Y?(u=P(),u!==Y?(44===t.charCodeAt(ue)?(o=Bt,ue++):(o=Y,0===le&&l(Dt)),o!==Y?(i=P(),i!==Y?(c=R(),c!==Y?(s=P(),s!==Y?(44===t.charCodeAt(ue)?(h=Bt,ue++):(h=Y,0===le&&l(Dt)),h!==Y?(d=P(),d!==Y?(f=R(),f!==Y?(g=P(),g!==Y?(41===t.charCodeAt(ue)?(p=Z,ue++):(p=Y,0===le&&l($)),p!==Y?(oe=r,e=Jt(a,c,f),r=e):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y),r===Y&&(r=ue,t.substr(ue,4)===Lt?(e=Lt,ue+=4):(e=Y,0===le&&l(Vt)),e!==Y?(n=P(),n!==Y?(a=E(),a!==Y?(u=P(),u!==Y?(44===t.charCodeAt(ue)?(o=Bt,ue++):(o=Y,0===le&&l(Dt)),o!==Y?(i=P(),i!==Y?(c=E(),c!==Y?(s=P(),s!==Y?(44===t.charCodeAt(ue)?(h=Bt,ue++):(h=Y,0===le&&l(Dt)),h!==Y?(d=P(),d!==Y?(f=E(),f!==Y?(g=P(),g!==Y?(41===t.charCodeAt(ue)?(p=Z,ue++):(p=Y,0===le&&l($)),p!==Y?(oe=r,e=Kt(a,c,f),r=e):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y)):(ue=r,r=Y),r===Y&&(r=U())))))))),r}function O(){var r;return Wt.test(t.charAt(ue))?(r=t.charAt(ue),ue++):(r=Y,0===le&&l(Zt)),r}function P(){var r,e;for(le++,r=[],_t.test(t.charAt(ue))?(e=t.charAt(ue),ue++):(e=Y,0===le&&l(re));e!==Y;)r.push(e),_t.test(t.charAt(ue))?(e=t.charAt(ue),ue++):(e=Y,0===le&&l(re));return le--,r===Y&&(e=Y,0===le&&l($t)),r}function U(){var r,e,n;if(le++,r=ue,e=[],ee.test(t.charAt(ue))?(n=t.charAt(ue),ue++):(n=Y,0===le&&l(ne)),n!==Y)for(;n!==Y;)e.push(n),ee.test(t.charAt(ue))?(n=t.charAt(ue),ue++):(n=Y,0===le&&l(ne));else e=Y;return e!==Y&&(oe=r,e=ae()),r=e,le--,r===Y&&(e=Y,0===le&&l(te)),r}e=void 0!==e?e:{};var X,Y={},B={start:f},D=f,G=i("none"),H="none",J=u("none",!1),K=function(){return null},L=i("blur()"),V="blur(",W=u("blur(",!1),Z=")",$=u(")",!1),_=function(r){return{type:"blur",radius:r}},rr=i("brightness()"),tr="brightness(",er=u("brightness(",!1),nr=function(r){return{type:"brightness",amount:r}},ar=i("contrast()"),ur="contrast(",or=u("contrast(",!1),ir=function(r){return{type:"contrast",amount:r}},cr=i("drop-shadow()"),sr="drop-shadow(",lr=u("drop-shadow(",!1),hr=function(r,t,e,n){return{type:"drop-shadow",offsetX:r,offsetY:t,blurRadius:e,color:n}},dr=i("grayscale()"),fr="grayscale(",gr=u("grayscale(",!1),pr=function(r){return{type:"grayscale",amount:r}},br=i("hue-rotate()"),mr="hue-rotate(",yr=u("hue-rotate(",!1),Ar=function(r){return{type:"hue-rotate",angle:r}},vr=i("invert()"),Cr="invert(",wr=u("invert(",!1),kr=function(r){return{type:"invert",amount:r}},xr=i("opacity()"),Fr="opacity(",jr=u("opacity(",!1),qr=function(r){return{type:"opacity",amount:r}},Ir=i("saturate()"),Er="saturate(",Sr=u("saturate(",!1),Rr=function(r){return{type:"saturate",amount:r}},zr=i("sepia()"),Mr="sepia(",Qr=u("sepia(",!1),Tr=function(r){return{type:"sepia",amount:r}},Nr=i("<number-percentage>"),Or=i("<integer>"),Pr=/^[0-9]/,Ur=o([["0","9"]],!1,!1),Xr=function(){return parseInt(n(),10)},Yr=i("<number>"),Br=".",Dr=u(".",!1),Gr=function(){return parseFloat(n())},Hr=i("<signedNumber>"),Jr=/^[+\-]/,Kr=o(["+","-"],!1,!1),Lr="%",Vr=u("%",!1),Wr=function(r){return r/100},Zr=i("<angle>"),$r=function(r,t){return r*t},_r="0",rt=u("0",!1),tt=function(){return 0},et=i("<unit>"),nt="deg",at=u("deg",!1),ut=function(){return 1},ot="grad",it=u("grad",!1),ct=function(){return.9},st="rad",lt=u("rad",!1),ht=function(){return 180/Math.PI},dt="turn",ft=u("turn",!1),gt=function(){return 1/360},pt=i("<length>"),bt="px",mt=u("px",!1),yt="cm",At=u("cm",!1),vt=function(){return 96/2.54},Ct="mm",wt=u("mm",!1),kt=function(){return 96/2.54/10},xt="Q",Ft=u("Q",!1),jt=function(){return 96/2.54/40},qt="in",It=u("in",!1),Et=function(){return 96},St="pc",Rt=u("pc",!1),zt=function(){return 16},Mt="pt",Qt=u("pt",!1),Tt=function(){return 96/73},Nt="#",Ot=u("#",!1),Pt=function(r,t,e){return[parseInt(r.join(""),16),parseInt(t.join(""),16),parseInt(e.join(""),16)]},Ut=function(r,t,e){return[parseInt([r,r].join(""),16),parseInt([t,t].join(""),16),parseInt([e,e].join(""),16)]},Xt="rgba(",Yt=u("rgba(",!1),Bt=",",Dt=u(",",!1),Gt=function(r,t,e,n){return[255*r,255*t,255*e,n]},Ht=function(r,t,e,n){return[r,t,e,n]},Jt=function(r,t,e){return[255*r,255*t,255*e,1]},Kt=function(r,t,e){return[r,t,e,1]},Lt="rgb(",Vt=u("rgb(",!1),Wt=/^[0-9a-fA-F]/,Zt=o([["0","9"],["a","f"],["A","F"]],!1,!1),$t=i("whitespace"),_t=/^[ \t\n\r]/,re=o([" ","\t","\n","\r"],!1,!1),te=i("<named-color>"),ee=/^[a-z]/,ne=o([["a","z"]],!1,!1),ae=function(){var r=n();return de.has(r)||a('unknown color "'+r+'"'),he[r].concat(1)},ue=0,oe=0,ie=[{line:1,column:1}],ce=0,se=[],le=0;if("startRule"in e){if(!(e.startRule in B))throw new Error("Can't start parsing from rule \""+e.startRule+'".');D=B[e.startRule]}var he={transparent:[0,0,0,0],black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],aliceblue:[240,248,255],antiquewhite:[250,235,215],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],blanchedalmond:[255,235,205],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],oldlace:[253,245,230],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],rebeccapurple:[102,51,153],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],whitesmoke:[245,245,245],yellowgreen:[154,205,50]},de=new Set(Object.keys(he));if((X=D())!==Y&&ue===t.length)return X;throw X!==Y&&ue<t.length&&l(function(){return{type:"end"}}()),d(se,ce<t.length?t.charAt(ce):null,ce<t.length?s(ce,ce+1):s(ce,ce))}return function(r,t){function e(){this.constructor=r}e.prototype=t.prototype,r.prototype=new e}(r,Error),r.buildMessage=function(r,t){function e(r){return r.charCodeAt(0).toString(16).toUpperCase()}function n(r){return r.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(r){return"\\x0"+e(r)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(r){return"\\x"+e(r)})}function a(r){return r.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(r){return"\\x0"+e(r)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(r){return"\\x"+e(r)})}function u(r){return o[r.type](r)}var o={literal:function(r){return'"'+n(r.text)+'"'},class:function(r){var t,e="";for(t=0;t<r.parts.length;t++)e+=r.parts[t]instanceof Array?a(r.parts[t][0])+"-"+a(r.parts[t][1]):a(r.parts[t]);return"["+(r.inverted?"^":"")+e+"]"},any:function(r){return"any character"},end:function(r){return"end of input"},other:function(r){return r.description}};return"Expected "+function(r){var t,e,n=new Array(r.length);for(t=0;t<r.length;t++)n[t]=u(r[t]);if(n.sort(),n.length>0){for(t=1,e=1;t<n.length;t++)n[t-1]!==n[t]&&(n[e]=n[t],e++);n.length=e}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(r)+" but "+function(r){return r?'"'+n(r)+'"':"end of input"}(t)+" found."},{SyntaxError:r,parse:t}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/layers/support/popupUtils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/layers/support/popupUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! @dojo/framework/shim/array */ "./node_modules/@dojo/framework/shim/array.mjs"),__webpack_require__(/*! ../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../../layers/support/fieldUtils */ "./node_modules/arcgis-js-api/layers/support/fieldUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,l,i,p,a,d){function o(e,t){return void 0===t&&(t=e.popupTemplate),i(this,void 0,void 0,function(){var i,o,r,u,s,n,c,f,m,F,h;return l(this,function(l){switch(l.label){case 0:return a.isSome(t)?[4,t.getRequiredFields(e.fields)]:[2,[]];case 1:return i=l.sent(),(o=t.lastEditInfoEnabled,r=e.objectIdField,u=e.typeIdField,s=e.globalIdField,p.includes(i,"*"))?[2,["*"]]:(c=d.fixFields,f=[e.fields],F=(m=i).concat,h=o,h?[4,d.getFeatureEditFields(e)]:[3,3]);case 2:h=l.sent(),l.label=3;case 3:return n=c.apply(void 0,f.concat([F.apply(m,[h||null])])),u&&n.push(u),n&&r&&d.hasField(e.fields,r)&&-1===n.indexOf(r)&&n.push(r),n&&s&&d.hasField(e.fields,s)&&-1===n.indexOf(s)&&n.push(s),[2,n]}})})}function r(e,t){return e.popupTemplate?e.popupTemplate:a.isSome(t)&&t.defaultPopupTemplateEnabled&&a.isSome(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}Object.defineProperty(t,"__esModule",{value:!0}),t.getRequiredFields=o,t.getFetchPopupTemplate=r}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=51.js.map