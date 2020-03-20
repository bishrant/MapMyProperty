(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/layers/support/MapImage":"./node_modules/arcgis-js-api/layers/support/MapImage.js",
	"esri/renderers/visualVariables/support/sizeVariableUtils":"./node_modules/arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils.js",
	"arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils":"./node_modules/arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils.js",
	"arcgis-js-api/renderers/visualVariables/support/visualVariableUtils":"./node_modules/arcgis-js-api/renderers/visualVariables/support/visualVariableUtils.js",
	"arcgis-js-api/tasks/Geoprocessor":"./node_modules/arcgis-js-api/tasks/Geoprocessor.js",
	"arcgis-js-api/tasks/PrintTask":"./node_modules/arcgis-js-api/tasks/PrintTask.js",
	"arcgis-js-api/tasks/support/DataFile":"./node_modules/arcgis-js-api/tasks/support/DataFile.js",
	"arcgis-js-api/tasks/support/GPMessage":"./node_modules/arcgis-js-api/tasks/support/GPMessage.js",
	"arcgis-js-api/tasks/support/JobInfo":"./node_modules/arcgis-js-api/tasks/support/JobInfo.js",
	"arcgis-js-api/tasks/support/LinearUnit":"./node_modules/arcgis-js-api/tasks/support/LinearUnit.js",
	"arcgis-js-api/tasks/support/ParameterValue":"./node_modules/arcgis-js-api/tasks/support/ParameterValue.js",
	"arcgis-js-api/tasks/support/PrintTemplate":"./node_modules/arcgis-js-api/tasks/support/PrintTemplate.js",
	"esri/tasks/support/QuantizationParameters":"./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js",
	"arcgis-js-api/tasks/support/QuantizationParameters":"./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js",
	"arcgis-js-api/tasks/support/RasterData":"./node_modules/arcgis-js-api/tasks/support/RasterData.js",
	"arcgis-js-api/tasks/support/fileFormat":"./node_modules/arcgis-js-api/tasks/support/fileFormat.js",
	"arcgis-js-api/tasks/support/layoutTemplate":"./node_modules/arcgis-js-api/tasks/support/layoutTemplate.js",
	"arcgis-js-api/tasks/support/printTaskUtils":"./node_modules/arcgis-js-api/tasks/support/printTaskUtils.js",
	"dojox/gfx/_base":"./node_modules/dojox/gfx/_base.js",
	"dojox/gfx/arc":"./node_modules/dojox/gfx/arc.js",
	"dojox/gfx/bezierutils":"./node_modules/dojox/gfx/bezierutils.js",
	"dojox/gfx/canvas":"./node_modules/dojox/gfx/canvas.js",
	"dojox/gfx/decompose":"./node_modules/dojox/gfx/decompose.js",
	"dojox/gfx/matrix":"./node_modules/dojox/gfx/matrix.js",
	"dojox/gfx/path":"./node_modules/dojox/gfx/path.js",
	"dojox/gfx/shape":"./node_modules/dojox/gfx/shape.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/arcgis-js-api/layers/support/MapImage.js":
/*!***************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/MapImage.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/paramHelper */ "./node_modules/arcgis-js-api/core/tsSupport/paramHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,r,o,p,i,l,n){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.extent=null,e.height=null,e.href=null,e.opacity=1,e.rotation=0,e.scale=null,e.visible=!0,e.width=null,e}return r(e,t),o([l.property({type:n})],e.prototype,"extent",void 0),o([l.property()],e.prototype,"height",void 0),o([l.property()],e.prototype,"href",void 0),o([l.property()],e.prototype,"opacity",void 0),o([l.property()],e.prototype,"rotation",void 0),o([l.property()],e.prototype,"scale",void 0),o([l.property()],e.prototype,"visible",void 0),o([l.property()],e.prototype,"width",void 0),e=o([l.subclass("esri.layer.support.MapImage")],e)}(l.declared(i.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
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

/***/ "./node_modules/arcgis-js-api/renderers/visualVariables/support/visualVariableUtils.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/visualVariables/support/visualVariableUtils.js ***!
  \*********************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../Color */ "./node_modules/arcgis-js-api/Color.js"),__webpack_require__(/*! ../../../Graphic */ "./node_modules/arcgis-js-api/Graphic.js"),__webpack_require__(/*! ../../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../support/utils */ "./node_modules/arcgis-js-api/renderers/support/utils.js"),__webpack_require__(/*! ./sizeVariableUtils */ "./node_modules/arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,a,r,i,n,t,s,l){function o(e,a,i){var n="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(function(e){return"color"===e.type})[0]:e;if(n){if("esri.renderers.visualVariables.ColorVariable"!==n.declaredClass)return void M.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");var s="number"==typeof a,l=s?null:a,o=l&&l.attributes,u=s?a:null,c=n.field,v=n.cache,f=v.ipData,d=v.hasExpression,p=n.cache.compiledFunc;if(!c&&!d){var b=n.stops;return b&&b[0]&&b[0].color}if("number"!=typeof u)if(d){if(!t.isSome(i)||!t.isSome(i.arcade))return void M.error("Use of arcade expressions requires an arcade context");var m={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},h=i.arcade.arcadeUtils,V=h.getViewInfo(m),x=h.createExecContext(l,V);if(!p){var g=h.createSyntaxTree(n.valueExpression);p=h.createFunction(g),n.cache.compiledFunc=p}u=h.executeFunction(p,x)}else o&&(u=o[c]);var y=n.normalizationField,S=o?parseFloat(o[y]):void 0;if(null!=u&&(!y||s||!isNaN(S)&&0!==S)){isNaN(S)||s||(u/=S);var z=N(u,f);if(z){var w=z[0],F=z[1],E=w===F?n.stops[w].color:r.blendColors(n.stops[w].color,n.stops[F].color,z[2],t.isSome(i)?i.color:void 0);return new r(E)}}}}function u(e,a,r){var i="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(function(e){return"opacity"===e.type})[0]:e;if(i){if("esri.renderers.visualVariables.OpacityVariable"!==i.declaredClass)return void M.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");var n="number"==typeof a,s=n?null:a,l=s&&s.attributes,o=n?a:null,u=i.field,c=i.cache,v=c.ipData,f=c.hasExpression,d=i.cache.compiledFunc;if(!u&&!f){var p=i.stops;return p&&p[0]&&p[0].opacity}if("number"!=typeof o)if(f){if(t.isNone(r)||t.isNone(r.arcade))return void M.error("Use of arcade expressions requires an arcade context");var b={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},m=r.arcade.arcadeUtils,h=m.getViewInfo(b),V=m.createExecContext(s,h);if(!d){var x=m.createSyntaxTree(i.valueExpression);d=m.createFunction(x),i.cache.compiledFunc=d}o=m.executeFunction(d,V)}else l&&(o=l[u]);var g=i.normalizationField,y=l?parseFloat(l[g]):void 0;if(null!=o&&(!g||n||!isNaN(y)&&0!==y)){isNaN(y)||n||(o/=y);var S=N(o,v);if(S){var z=S[0],w=S[1];if(z===w)return i.stops[z].opacity;var F=i.stops[z].opacity;return F+(i.stops[w].opacity-F)*S[2]}}}}function c(e,a,r){var i="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(function(e){return"rotation"===e.type})[0]:e;if(i){if("esri.renderers.visualVariables.RotationVariable"!==i.declaredClass)return void M.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");var n=i.axis||"heading",s="heading"===n&&"arithmetic"===i.rotationType?90:0,l="heading"===n&&"arithmetic"===i.rotationType?-1:1,o="number"==typeof a?null:a,u=o&&o.attributes,c=i.field,v=i.cache.hasExpression,f=i.cache.compiledFunc,d=0;if(!c&&!v)return d;if(v){if(t.isNone(r)||t.isNone(r.arcade))return void M.error("Use of arcade expressions requires an arcade context");var p={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},b=r.arcade.arcadeUtils,m=b.getViewInfo(p),h=b.createExecContext(o,m);if(!f){var V=b.createSyntaxTree(i.valueExpression);f=b.createFunction(V),i.cache.compiledFunc=f}d=b.executeFunction(f,h)}else u&&(d=u[c]||0);return d="number"!=typeof d||isNaN(d)?null:s+l*d}}function v(e,a,r){var i="number"==typeof a,n=i?null:a,s=n&&n.attributes,o=i?a:null,u=e.cache.isScaleDriven,c=e.cache.compiledFunc;if(u){var v=t.isSome(r)?r.scale:void 0,d=t.isSome(r)?r.view:void 0;o=null==v||d&&"3d"===d.type?f(e):v}else if(!i)switch(e.inputValueType){case"expression":if(t.isNone(r)||t.isNone(r.arcade))return void M.error("Use of arcade expressions requires an arcade context");var p={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},b=r.arcade.arcadeUtils,m=b.getViewInfo(p),h=b.createExecContext(n,m);if(!c){var V=b.createSyntaxTree(e.valueExpression);c=b.createFunction(V),e.cache.compiledFunc=c}o=b.executeFunction(c,h);break;case"field":s&&(o=s[e.field]);break;case"unknown":o=null}if(!l.isValidNumber(o))return null;if(i||!e.normalizationField)return o;var x=s?parseFloat(s[e.normalizationField]):null;return l.isValidNumber(x)&&0!==x?o/x:null}function f(e){var a=null,r=null,i=e.stops;return i?(a=i[0].value,r=i[i.length-1].value):(a=e.minDataValue||0,r=e.maxDataValue||0),(a+r)/2}function d(e,a,r){var i="visualVariables"in e&&e.visualVariables?e.visualVariables.filter(function(e){return"size"===e.type})[0]:e;if(i){if("esri.renderers.visualVariables.SizeVariable"!==i.declaredClass)return void M.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");var n=v(i,a,r),t=z(n,i,a,r,i.cache.ipData);return null===t||void 0===t||isNaN(t)?0:t}}function p(e,a,r){return null==e?null:l.isSizeVariable(e)?d(e,a,r):l.isValidNumber(e)?e:null}function b(e,a,r){return l.isValidNumber(r)&&e>r?r:l.isValidNumber(a)&&e<a?a:e}function m(e,a,r,i){return e+(p(a.minSize,r,i)||a.minDataValue)}function h(e,a,r){var i=e.stops,n=i&&i.length&&i[0].size;return null==n&&(n=e.minSize),p(n,a,r)}function V(e,a,r,i){var n=(e-a.minDataValue)/(a.maxDataValue-a.minDataValue),s=p(a.minSize,r,i),l=p(a.maxSize,r,i),o=t.isSome(i)?i.shape:void 0;if(e<=a.minDataValue)return s;if(e>=a.maxDataValue)return l;if("area"===a.scaleBy&&o){var u="circle"===o,c=u?D*Math.pow(s/2,2):s*s,v=u?D*Math.pow(l/2,2):l*l,f=c+n*(v-c);return u?2*Math.sqrt(f/D):Math.sqrt(f)}return s+n*(l-s)}function x(e,a,r,i){var n=t.isSome(i)?i.shape:void 0,s=e/a.minDataValue,l=p(a.minSize,r,i),o=p(a.maxSize,r,i),u=null;return u="circle"===n?2*Math.sqrt(s*Math.pow(l/2,2)):"square"===n||"diamond"===n||"image"===n?Math.sqrt(s*Math.pow(l,2)):s*l,b(u,l,o)}function g(e,a,r,i,n){var t=N(e,n),s=t[0],l=t[1],o=t[2];if(s===l)return p(a.stops[s].size,r,i);var u=p(a.stops[s].size,r,i);return u+(p(a.stops[l].size,r,i)-u)*o}function y(e,a,r,i){var n=t.isSome(i)&&i.resolution?i.resolution:1,l=n*s.meterIn[a.valueUnit],o=p(a.minSize,r,i),u=p(a.maxSize,r,i),c=a.valueRepresentation,v=null;return v="area"===c?2*Math.sqrt(e/D)/l:"radius"===c||"distance"===c?2*e/l:e/l,b(v,o,u)}function S(e){return e}function z(e,a,r,i,n){switch(a.transformationType){case"additive":return m(e,a,r,i);case"constant":return h(a,r,i);case"clamped-linear":return V(e,a,r,i);case"proportional":return x(e,a,r,i);case"stops":return g(e,a,r,i,n);case"real-world-size":return y(e,a,r,i);case"identity":return S(e);case"unknown":return null}}function w(e,a,r){var i=e.cache.isScaleDriven,n=r&&"3d"===r.type;if(!(i&&n||a))return null;var t={scale:a,view:r},s=p(e.minSize,E,t),l=p(e.maxSize,E,t);if(null!=s||null!=l){if(s>l){var o=l;l=s,s=o}return{minSize:s,maxSize:l}}}function F(e,a,r){if(e.visualVariables){for(var i=[],n=[],t=[],s=[],l=[],v=0,f=e.visualVariables;v<f.length;v++){var p=f[v];switch(p.type){case"color":n.push(p);break;case"opacity":t.push(p);break;case"rotation":l.push(p);break;case"size":s.push(p)}}return n.forEach(function(e){var n=o(e,a,r);i.push({variable:e,value:n})}),t.forEach(function(e){var n=u(e,a,r);i.push({variable:e,value:n})}),l.forEach(function(e){var n=c(e,a,r);i.push({variable:e,value:n})}),s.forEach(function(e){var n=d(e,a,r);i.push({variable:e,value:n})}),i.filter(function(e){return null!=e.value})}}function N(e,a){if(a){var r=0,i=a.length-1;return a.some(function(a,n){return e<a?(i=n,!0):(r=n,!1)}),[r,i,(e-a[r])/(a[i]-a[r])]}}Object.defineProperty(a,"__esModule",{value:!0});var M=n.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),E=new i,D=Math.PI;a.getColor=o,a.getOpacity=u,a.getRotationAngle=c,a.getSize=d,a.getSizeFromNumberOrVariable=p,a.getSizeForValue=z,a.getSizeRangeAtScale=w,a.getVisualVariableValues=F}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/Geoprocessor.js":
/*!**********************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/Geoprocessor.js ***!
  \**********************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../core/compilerUtils */ "./node_modules/arcgis-js-api/core/compilerUtils.js"),__webpack_require__(/*! ../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js"),__webpack_require__(/*! ../geometry/SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js"),__webpack_require__(/*! ../geometry/support/normalizeUtils */ "./node_modules/arcgis-js-api/geometry/support/normalizeUtils.js"),__webpack_require__(/*! ../layers/support/Field */ "./node_modules/arcgis-js-api/layers/support/Field.js"),__webpack_require__(/*! ../layers/support/MapImage */ "./node_modules/arcgis-js-api/layers/support/MapImage.js"),__webpack_require__(/*! ./Task */ "./node_modules/arcgis-js-api/tasks/Task.js"),__webpack_require__(/*! ./support/DataFile */ "./node_modules/arcgis-js-api/tasks/support/DataFile.js"),__webpack_require__(/*! ./support/FeatureSet */ "./node_modules/arcgis-js-api/tasks/support/FeatureSet.js"),__webpack_require__(/*! ./support/GPMessage */ "./node_modules/arcgis-js-api/tasks/support/GPMessage.js"),__webpack_require__(/*! ./support/JobInfo */ "./node_modules/arcgis-js-api/tasks/support/JobInfo.js"),__webpack_require__(/*! ./support/LinearUnit */ "./node_modules/arcgis-js-api/tasks/support/LinearUnit.js"),__webpack_require__(/*! ./support/ParameterValue */ "./node_modules/arcgis-js-api/tasks/support/ParameterValue.js"),__webpack_require__(/*! ./support/RasterData */ "./node_modules/arcgis-js-api/tasks/support/RasterData.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,a,o,n,u,s,i,c,l,p,f,v,d,m,h,b,y,S,G,g,P,R){return function(t){function h(e){var r=t.call(this,e)||this;return r._timers=new Map,r.outSpatialReference=null,r.processExtent=null,r.processSpatialReference=null,r.returnFeatureCollection=!1,r.returnM=!1,r.returnZ=!1,r}return a(h,t),h.prototype.destroy=function(){this._timers.forEach(function(e){clearInterval(e)})},h.prototype.cancelJob=function(e,t){var a=this.parsedUrl.path,o=r({},this.requestOptions,t,{query:{f:"json"}});return this._clearTimer(e),s(a+"/jobs/"+e+"/cancel",o).then(function(e){return G.fromJSON(e.data)})},h.prototype.checkJobStatus=function(e,t){var a=this.parsedUrl.path,o=r({},this.requestOptions,t,{query:{f:"json"}});return s(a+"/jobs/"+e,o).then(function(e){return G.fromJSON(e.data)})},h.prototype.execute=function(e,t){var r=this;return this._constructRequest("execute",e,t).then(function(e){var t=e.data.results||[],a=e.data.messages||[];return{results:t.map(r._decode),messages:a.map(function(e){return S.fromJSON(e)})}})},h.prototype.getResultData=function(e,t,a){var o=this,n=this,u=n.returnFeatureCollection,i=n.returnM,c=n.returnZ,l=n.outSpatialReference,p=n.parsedUrl,f=p.path,v={returnFeatureCollection:u||void 0,returnM:i||void 0,returnZ:c||void 0,outSR:l,returnType:"data",f:"json"},d=this._gpEncode(v,null),m=r({},this.requestOptions,a,{query:d});return s(f+"/jobs/"+e+"/results/"+t,m).then(function(e){return o._decode(e.data)})},h.prototype.getResultImage=function(e,t,a,o){var n=this,u=this.parsedUrl.path,i=r({},a.toJSON(),{f:"json"}),c=this._gpEncode(i),l=r({},this.requestOptions,o,{query:c});return s(u+"/jobs/"+e+"/results/"+t,l).then(function(e){return n._decode(e.data)})},h.prototype.getResultMapImageLayer=function(t){return u(this,void 0,void 0,function(){var r,a,o,u,s;return n(this,function(n){switch(n.label){case 0:return r=this.parsedUrl.path,a=r.indexOf("/GPServer/"),o=r.substring(0,a),u=o+"/MapServer/jobs/"+t,[4,c.create(function(t){return Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(13), __webpack_require__.e(12), __webpack_require__.e(25), __webpack_require__.e(47)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../layers/MapImageLayer */ "./node_modules/arcgis-js-api/layers/MapImageLayer.js")]; (t).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})];case 1:return s=n.sent(),[2,new s({url:u})]}})})},h.prototype.submitJob=function(e,t){return this._constructRequest("submitJob",e,t).then(function(e){return G.fromJSON(e.data)})},h.prototype.waitForJobCompletion=function(e,t){var r=this;void 0===t&&(t={});var a=t.interval,o=void 0===a?1e3:a,n=t.signal,u=t.statusCallback;return c.create(function(t,a){c.onAbort(n,function(){r._clearTimer(e),a(c.createAbortError())}),r._clearTimer(e);var s=setInterval(function(){r._timers.has(e)||a(c.createAbortError()),r._getJobStatus(e,r.requestOptions).then(function(o){var n=o.jobStatus;switch(n){case"job-succeeded":r._clearTimer(e),t(o);break;case"job-submitted":case"job-executing":case"job-waiting":case"job-new":u&&u(o);break;case"job-cancelled":case"job-cancelling":case"job-deleted":case"job-deleting":case"job-timed-out":case"job-failed":r._clearTimer(e),a(o);break;default:i.neverReached(n)}})},o);r._timers.set(e,s)})},h.prototype._clearTimer=function(e){this._timers.has(e)&&(clearInterval(this._timers.get(e)),this._timers.delete(e))},h.prototype._constructRequest=function(e,t,a){var o=this,n={},u={},i=[];return this._collectGeometries(t,i,n),v.normalizeCentralMeridian(i).then(function(i){var c=o,l=c.outSpatialReference,p=c.parsedUrl,f=c.processExtent,v=c.processSpatialReference,d=c.returnFeatureCollection,m=c.returnM,h=c.returnZ,b=p.path;for(var y in n){var S=n[y];u[y]=i.slice(S[0],S[1])}var G=l?l.wkid||l:null,g=v?v.wkid||v:null,P=f?{context:{extent:f,outSR:G,processSR:g}}:{"env:outSR":G,"env:processSR":g},R="execute"===e?{returnFeatureCollection:d||void 0,returnM:m||void 0,returnZ:h||void 0}:null,_=r({},P,t,R,{f:"json"}),J=o._gpEncode(_,null,u),O=r({},o.requestOptions,a,{query:J});return s(b+"/"+e,O)})},h.prototype._collectGeometries=function(e,t,r){for(var a in e){var o=e[a];if(o&&"object"==typeof o&&o instanceof y){var n=o.features;r[a]=[t.length,t.length+n.length],n.forEach(function(e){t.push(e.geometry)})}}},h.prototype._decode=function(e){var t=e.dataType,r=P.fromJSON(e);switch(t){case"GPBoolean":case"GPDouble":case"GPLong":case"GPString":return r;case"GPDate":r.value=new Date(r.value);break;case"GPDataFile":r.value=b.fromJSON(r.value);break;case"GPLinearUnit":r.value=g.fromJSON(r.value);break;case"GPFeatureRecordSetLayer":case"GPRecordSet":var a=e.value.url;r.value=a?b.fromJSON(r.value):y.fromJSON(r.value);break;case"GPRasterData":case"GPRasterDataLayer":var o=e.value.mapImage;r.value=o?m.fromJSON(o):R.fromJSON(r.value);break;case"GPField":r.value=d.fromJSON(r.value);break;case"GPMultiValue:GPBoolean":case"GPMultiValue:GPDouble":case"GPMultiValue:GPLong":case"GPMultiValue:GPString":return r;case"GPMultiValue:GPDate":var n=r.value;r.value=n.map(function(e){return new Date(e)});break;case"GPMultiValue:GPDataFile":r.value=r.value.map(function(e){return b.fromJSON(e)});break;case"GPMultiValue:GPLinearUnit":r.value=r.value.map(function(e){return g.fromJSON(e)});break;case"GPMultiValue:GPFeatureRecordSetLayer":case"GPMultiValue:GPRecordSet":r.value=r.value.map(function(e){return y.fromJSON(e)});break;case"GPMultiValue:GPRasterData":case"GPMultiValue:GPRasterDataLayer":r.value=r.value.map(function(e){return e?m.fromJSON(e):R.fromJSON(r.value)});break;case"GPMultiValue:GPField":r.value=r.value.map(function(e){return d.fromJSON(e)});break;default:i.neverReached(t)}return r},h.prototype._gpEncode=function(e,t,r){var a=this;for(var o in e){var n=e[o];Array.isArray(n)?e[o]=JSON.stringify(n.map(function(e){return a._gpEncode({item:e},!0).item},this)):n instanceof Date&&(e[o]=n.getTime())}return this._encode(e,t,r)},h.prototype._getJobStatus=function(e,t){var a=this.parsedUrl.path,o=a+"/jobs/"+e,n=r({},this.requestOptions,t,{query:{f:"json"}});return s(o,n).then(function(e){return G.fromJSON(e.data)})},o([l.property({type:f})],h.prototype,"outSpatialReference",void 0),o([l.property({type:p})],h.prototype,"processExtent",void 0),o([l.property({type:f})],h.prototype,"processSpatialReference",void 0),o([l.property({nonNullable:!0})],h.prototype,"returnFeatureCollection",void 0),o([l.property({nonNullable:!0})],h.prototype,"returnM",void 0),o([l.property({nonNullable:!0})],h.prototype,"returnZ",void 0),h=o([l.subclass("esri/tasks/Geoprocessor")],h)}(l.declared(h))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/PrintTask.js":
/*!*******************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/PrintTask.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! dojox/gfx/canvas */ "./node_modules/dojox/gfx/canvas.js"),__webpack_require__(/*! ../kernel */ "./node_modules/arcgis-js-api/kernel.js"),__webpack_require__(/*! ../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../core/iteratorUtils */ "./node_modules/arcgis-js-api/core/iteratorUtils.js"),__webpack_require__(/*! ../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../core/screenUtils */ "./node_modules/arcgis-js-api/core/screenUtils.js"),__webpack_require__(/*! ../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../geometry/Polygon */ "./node_modules/arcgis-js-api/geometry/Polygon.js"),__webpack_require__(/*! ../renderers/visualVariables/support/visualVariableUtils */ "./node_modules/arcgis-js-api/renderers/visualVariables/support/visualVariableUtils.js"),__webpack_require__(/*! ./Geoprocessor */ "./node_modules/arcgis-js-api/tasks/Geoprocessor.js"),__webpack_require__(/*! ./Task */ "./node_modules/arcgis-js-api/tasks/Task.js"),__webpack_require__(/*! ./support/fileFormat */ "./node_modules/arcgis-js-api/tasks/support/fileFormat.js"),__webpack_require__(/*! ./support/layoutTemplate */ "./node_modules/arcgis-js-api/tasks/support/layoutTemplate.js"),__webpack_require__(/*! ./support/printTaskUtils */ "./node_modules/arcgis-js-api/tasks/support/printTaskUtils.js"),__webpack_require__(/*! ./support/PrintTemplate */ "./node_modules/arcgis-js-api/tasks/support/PrintTemplate.js"),__webpack_require__(/*! ./support/Query */ "./node_modules/arcgis-js-api/tasks/support/Query.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,a,i,n,s,o,l,u,c,y,p,d,f,h,m,g,S,b,v,_,L,x,O,w){function N(e){return e&&(e.path||"image/svg+xml"===e.contentType)}var J={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},M=new y.default({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),T=new y.default({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),I=new w({returnGeometry:!0});return function(e){function t(t){var r=e.call(this,t)||this;return r._ssExtent=null,r._legendLayers=[],r._legendLayerNameMap={},r._gpServerUrl=null,r._cimVersion=null,r._is11xService=!1,r._gpMetadata=null,r.updateDelay=1e3,r}return i(t,e),Object.defineProperty(t.prototype,"_geoprocessor",{get:function(){return new b({url:this.url})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"mode",{get:function(){return this._gpMetadata&&this._gpMetadata.executionType?T.fromJSON(this._gpMetadata.executionType):"sync"},enumerable:!0,configurable:!0}),t.prototype.execute=function(e,t){var r=this,a=this.url,i=a.lastIndexOf("/GPServer/");return i>0&&(a=a.slice(0,i+9)),d.resolve().then(function(){return r._gpServerUrl===a?{data:r._gpMetadata}:(r._gpServerUrl=a,u(a,{query:{f:"json"}}))}).then(function(t){return r._gpMetadata=t.data,r._cimVersion=r._gpMetadata.cimVersion,r._is11xService=!!r._cimVersion,r._getGpPrintParams(e)}).then(function(e){var a=function(e){return"sync"===r.mode?e.results&&e.results[0]&&e.results[0].value:r._geoprocessor.getResultData(e.jobId,"Output_File",t).then(function(e){return e.value})};return"async"===r.mode?r._geoprocessor.submitJob(e,t).then(function(e){return r._geoprocessor.waitForJobCompletion(e.jobId,{interval:r.updateDelay}).then(a)}):r._geoprocessor.execute(e,t).then(a)})},t.prototype._createOperationalLayers=function(e,t){return a(this,void 0,void 0,function(){var r,a,i,n,o,l,u,c,y,y;return s(this,function(s){switch(s.label){case 0:r=[],a={layerView:null,printTemplate:t,view:e},i=0,t.preserveScale&&(i=t.outScale||e.scale),n=x.getVisibleLayerViews(e,i),o=0,l=n,s.label=1;case 1:return o<l.length?(u=l[o],c=u.layer,!c.loaded||x.isGroupLayer(c)?[3,26]:(y=void 0,a.layerView=u,x.isBingMapsLayer(c)?(y=this._createBingMapsLayerJSON(c),[3,25]):[3,2])):[3,27];case 2:return x.isCSVLayer(c)?[4,this._createCSVLayerJSON(c,a)]:[3,4];case 3:return y=s.sent(),[3,25];case 4:return x.isFeatureLayer(c)?[4,this._createFeatureLayerJSON(c,a)]:[3,6];case 5:return y=s.sent(),[3,25];case 6:return x.isGraphicsLayer(c)?[4,this._createGraphicsLayerJSON(c,a)]:[3,8];case 7:return y=s.sent(),[3,25];case 8:return x.isImageryLayer(c)?(y=this._createImageryLayerJSON(c),[3,25]):[3,9];case 9:return x.isKMLLayer(c)?[4,this._createKMLLayerJSON(c,a)]:[3,11];case 10:return y=s.sent(),[3,25];case 11:return x.isMapImageLayer(c)?(y=this._createMapImageLayerJSON(c,a),[3,25]):[3,12];case 12:return x.isMapNotesLayer(c)?[4,this._createMapNotesLayerJSON(a)]:[3,14];case 13:return y=s.sent(),[3,25];case 14:return x.isOpenStreetMapLayer(c)?(y=this._createOpenStreetMapLayerJSON(),[3,25]):[3,15];case 15:return x.isStreamLayer(c)?[4,this._createStreamLayerJSON(c,a)]:[3,17];case 16:return y=s.sent(),[3,25];case 17:return x.isTileLayer(c)?(y=this._createTileLayerJSON(c),[3,25]):[3,18];case 18:return x.isVectorTileLayer(c)?[4,this._createVectorTileLayerJSON(c,a)]:[3,20];case 19:return y=s.sent(),[3,25];case 20:return x.isWebTileLayer(c)?(y=this._createWebTileLayerJSON(c),[3,25]):[3,21];case 21:return x.isWMSLayer(c)?(y=this._createWMSLayerJSON(c),[3,25]):[3,22];case 22:return x.isWMTSLayer(c)?(y=this._createWMTSLayerJSON(c),[3,25]):[3,23];case 23:return[4,this._createScreenshotJSON(c,a)];case 24:y=s.sent(),s.label=25;case 25:y&&(Array.isArray(y)?r.push.apply(r,y):(y.id=c.id,y.title=this._legendLayerNameMap[c.id]||c.title,y.opacity=c.opacity,y.minScale=c.minScale||0,y.maxScale=c.maxScale||0,r.push(y))),s.label=26;case 26:return o++,[3,1];case 27:return i&&r.forEach(function(e){e.minScale=0,e.maxScale=0}),e.graphics&&e.graphics.length?[4,this._createFeatureCollectionJSON(null,e.graphics,t)]:[3,29];case 28:y=s.sent(),y&&r.push(y),s.label=29;case 29:return[2,r]}})})},t.prototype._createBingMapsLayerJSON=function(e){return{culture:e.culture,key:e.key,type:"BingMaps"+("aerial"===e.style?"Aerial":"hybrid"===e.style?"Hybrid":"Road")}},t.prototype._createCSVLayerJSON=function(e,t){var r=t.layerView,i=t.printTemplate;return a(this,void 0,void 0,function(){var t,a;return s(this,function(n){switch(n.label){case 0:return this._legendLayers&&this._legendLayers.push({id:e.id}),this._is11xService?(t={type:"CSV"},e.write(t,{origin:"web-map"}),delete t.popupInfo,delete t.layerType,t.showLabels=i.showLabels&&e.labelsVisible,[3,3]):[3,1];case 1:return[4,this._getGraphics(r)];case 2:return a=n.sent(),[2,this._createFeatureCollectionJSON(e,a,i)];case 3:return[2,t]}})})},t.prototype._createFeatureCollectionJSON=function(e,t,r){return a(this,void 0,void 0,function(){var a,i,n,o,l,u,y,p,d,f,h,m,S,b,v,_,L,O,w=this;return s(this,function(J){switch(J.label){case 0:return a=e,(i=x.createPolygonLayer(),n=x.createPolylineLayer(),o=x.createPointLayer(),l=x.createMultipointLayer(),u=x.createPointLayer(),u.layerDefinition.name="textLayer",delete u.layerDefinition.drawingInfo,a&&("esri.layers.FeatureLayer"===a.declaredClass||"esri.layers.StreamLayer"===a.declaredClass?i.layerDefinition.name=n.layerDefinition.name=o.layerDefinition.name=l.layerDefinition.name=this._legendLayerNameMap[a.id]||a.get("arcgisProps.title")||a.title:"esri.layers.GraphicsLayer"===a.declaredClass&&(t=a.graphics.items)),a&&a.renderer?(y=a.renderer.toJSON(),i.layerDefinition.drawingInfo.renderer=y,n.layerDefinition.drawingInfo.renderer=y,o.layerDefinition.drawingInfo.renderer=y,l.layerDefinition.drawingInfo.renderer=y):(delete i.layerDefinition.drawingInfo,delete n.layerDefinition.drawingInfo,delete o.layerDefinition.drawingInfo,delete l.layerDefinition.drawingInfo),d=a&&a.fields,f=a&&a.renderer,d&&f&&"function"==typeof f.collectRequiredFields)?(h=new Set,[4,f.collectRequiredFields(h,d)]):[3,2];case 1:J.sent(),p=c.valuesOfSet(h),J.label=2;case 2:d&&(m=d.map(function(e){return e.toJSON()}),i.layerDefinition.fields=m,n.layerDefinition.fields=m,o.layerDefinition.fields=m,l.layerDefinition.fields=m),S=t&&t.length,v=function(e){var c,y,d,f,h;return s(this,function(s){switch(s.label){case 0:return c=t[e]||t.getItemAt(e),!1!==c.visible&&c.geometry?(b=c.toJSON(),b.hasOwnProperty("popupTemplate")&&delete b.popupTemplate,b.geometry&&b.geometry.z&&delete b.geometry.z,b.symbol&&b.symbol.outline&&"esriCLS"===b.symbol.outline.type&&!_._is11xService?[2,"continue"]:(!_._is11xService&&b.symbol&&b.symbol.outline&&b.symbol.outline.color&&b.symbol.outline.color[3]&&(b.symbol.outline.color[3]=255),y=a&&a.renderer&&("valueExpression"in a.renderer&&a.renderer.valueExpression||"hasVisualVariables"in a.renderer&&a.renderer.hasVisualVariables()),!b.symbol&&a&&a.renderer&&y&&!_._is11xService?(d=a.renderer,[4,d.getSymbolAsync(c)]):[3,2])):[2,"continue"];case 1:if(!(f=s.sent()))return[2,"continue"];b.symbol=f.toJSON(),"hasVisualVariables"in d&&d.hasVisualVariables()&&x.applyVisualVariables(b.symbol,{renderer:d,graphic:c,symbol:f}),s.label=2;case 2:return b.symbol&&(b.symbol.angle||delete b.symbol.angle,N(b.symbol)?b.symbol=_._convertSvgToPictureMarkerSymbolJson(b.symbol):b.symbol.text&&delete b.attributes),r&&r.forceFeatureAttributes||!p||!p.length||(h={},p.forEach(function(e){b.attributes&&b.attributes.hasOwnProperty(e)&&(h[e]=b.attributes[e])}),b.attributes=h),"polygon"===c.geometry.type?i.featureSet.features.push(b):"polyline"===c.geometry.type?n.featureSet.features.push(b):"point"===c.geometry.type?b.symbol&&b.symbol.text?u.featureSet.features.push(b):o.featureSet.features.push(b):"multipoint"===c.geometry.type?l.featureSet.features.push(b):"extent"===c.geometry.type&&(b.geometry=g.fromExtent(c.geometry).toJSON(),i.featureSet.features.push(b)),[2]}})},_=this,L=0,J.label=3;case 3:return L<S?[5,v(L)]:[3,6];case 4:J.sent(),J.label=5;case 5:return L++,[3,3];case 6:return O=[i,n,l,o,u].filter(function(e){return e.featureSet.features.length>0}),O.forEach(function(e){var t=e.featureSet.features.every(function(e){return e.symbol});!t||r&&r.forceFeatureAttributes||e.featureSet.features.forEach(function(e){delete e.attributes}),t&&delete e.layerDefinition.drawingInfo,e.layerDefinition.drawingInfo&&e.layerDefinition.drawingInfo.renderer&&w._convertSvgRenderer(e.layerDefinition.drawingInfo.renderer)}),[2,O.length?{featureCollection:{layers:O}}:null]}})})},t.prototype._createFeatureLayerJSON=function(e,t){return a(this,void 0,void 0,function(){var r,a,i,n,o,l,u,c,y,p;return s(this,function(s){switch(s.label){case 0:return this._legendLayers&&this._legendLayers.push({id:e.id}),(a=e.renderer,e.featureReduction||a&&"dot-density"===a.type)?[2,this._createScreenshotJSON(e,t)]:(i=t.layerView,n=t.printTemplate,o=t.view,l=a&&("valueExpression"in a&&a.valueExpression||"hasVisualVariables"in a&&a.hasVisualVariables()),u=e.source&&"feature-layer"!==e.source.type,!this._is11xService&&l||e.featureReduction||u||!a||"field"in a&&null!=a.field&&("string"!=typeof a.field||!e.getField(a.field))?[3,1]:(r={},this._setURLandToken(r,e),e.write(r,{origin:"web-map"}),delete r.layerType,delete r.popupInfo,delete r.visibility,r.showLabels=n.showLabels&&e.labelsVisible,r.layerDefinition&&r.layerDefinition.drawingInfo&&r.layerDefinition.drawingInfo.renderer&&(this._convertSvgRenderer(r.layerDefinition.drawingInfo.renderer),"visualVariables"in a&&a.visualVariables&&a.visualVariables[0]&&(c=a.visualVariables[0],"size"===c.type&&c.maxSize&&"number"!=typeof c.maxSize&&c.minSize&&"number"!=typeof c.minSize&&(y=S.getSizeRangeAtScale(c,o.scale),r.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=y.minSize,r.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=y.maxSize))),[3,4]));case 1:return[4,this._getGraphics(i)];case 2:return p=s.sent(),[4,this._createFeatureCollectionJSON(e,p,n)];case 3:r=s.sent(),s.label=4;case 4:return[2,r]}})})},t.prototype._createGraphicsLayerJSON=function(e,t){var r=t.printTemplate;return a(this,void 0,void 0,function(){return s(this,function(t){return[2,this._createFeatureCollectionJSON(e,null,r)]})})},t.prototype._createImageryLayerJSON=function(e){this._legendLayers&&this._legendLayers.push({id:e.id});var t={bandIds:e.bandIds,compressionQuality:e.compressionQuality,format:e.format,interpolation:e.interpolation};if((e.mosaicRule||e.definitionExpression)&&(t.mosaicRule=e.exportImageServiceParameters.mosaicRule.toJSON()),e.renderingRule||e.renderer)if(this._is11xService)e.renderingRule&&(t.renderingRule=e.renderingRule.toJSON()),e.renderer&&(t.layerDefinition=t.layerDefinition||{},t.layerDefinition.drawingInfo=t.layerDefinition.drawingInfo||{},t.layerDefinition.drawingInfo.renderer=e.renderer.toJSON());else{var r=e.exportImageServiceParameters.combineRendererWithRenderingRule();r&&(t.renderingRule=r.toJSON())}return this._setURLandToken(t,e),t},t.prototype._createKMLLayerJSON=function(e,t){return a(this,void 0,void 0,function(){var a,i,n,o,l,u,c;return s(this,function(s){switch(s.label){case 0:return a=t.printTemplate,this._is11xService?(i={type:"kml"},e.write(i,{origin:"web-map"}),delete i.layerType,i.url=h.normalize(e.url),[2,i]):(n=[],o=t.layerView,o.allVisibleMapImages.forEach(function(t,r){var a={id:e.id+"_image"+r,type:"image",title:e.id,minScale:e.minScale||0,maxScale:e.maxScale||0,opacity:e.opacity,extent:t.extent};"data:image/png;base64,"===t.href.substr(0,22)?a.imageData=t.href.substr(22):a.url=t.href,n.push(a)}),l=o.allVisiblePoints.items.concat(o.allVisiblePolylines.items,o.allVisiblePolygons.items),c=[{id:e.id}],[4,this._createFeatureCollectionJSON(null,l,a)]);case 1:return u=r.apply(void 0,c.concat([s.sent()])),n.push(u),[2,n]}})})},t.prototype._createMapImageLayerJSON=function(e,t){var r,a=t.view,i={id:e.id,subLayerIds:[]},n=[],s=a.scale,o=function(e){var t=0===s,r=0===e.minScale||s<=e.minScale,a=0===e.maxScale||s>=e.maxScale;if(e.visible&&(t||r&&a))if(e.sublayers)e.sublayers.forEach(o);else{var l=e.toExportImageJSON().drawingInfo,u=e.toJSON();u.layerDefinition.drawingInfo=l,n.unshift(u),i.subLayerIds.push(e.id)}};return e.sublayers&&e.sublayers.forEach(o),n.length&&(n=n.map(function(e){return{id:e.id,name:e.name,layerDefinition:e.layerDefinition}}),r={layers:n,visibleLayers:i.subLayerIds},this._setURLandToken(r,e),this._legendLayers.push(i)),r},t.prototype._createMapNotesLayerJSON=function(e){var t=e.layerView,r=e.printTemplate;return a(this,void 0,void 0,function(){var e,a,i,n,o;return s(this,function(s){switch(s.label){case 0:e=[],a=0,i=t.graphicsViews,s.label=1;case 1:return a<i.length?(n=i[a],[4,this._createFeatureCollectionJSON(n,n.graphics,r)]):[3,4];case 2:o=s.sent(),o&&e.push.apply(e,o.featureCollection.layers),s.label=3;case 3:return a++,[3,1];case 4:return[2,{featureCollection:{layers:e}}]}})})},t.prototype._createOpenStreetMapLayerJSON=function(){return{type:"OpenStreetMap"}},t.prototype._createScreenshotJSON=function(e,t){var r=t.printTemplate,i=t.view;return a(this,void 0,void 0,function(){var t,a,n,o,l,u,c,y,p,d;return s(this,function(s){switch(s.label){case 0:return t={type:"image"},a={format:"png",ignoreBackground:!0,layers:[e],rotation:0},n=this._ssExtent||i.extent.clone(),o=96,l=!0,u=!0,r.exportOptions&&(c=r.exportOptions,c.dpi>0&&(o=c.dpi),c.width>0&&(l=c.width%2==i.width%2),c.height>0&&(u=c.height%2==i.height%2)),"map-only"!==r.layout||!r.preserveScale||r.outScale&&r.outScale!==i.scale||96!==o||l&&u||(a.area={x:0,y:0,width:i.width,height:i.height},l||(a.area.width-=1),u||(a.area.height-=1),this._ssExtent||(y=i.toMap(f.createScreenPoint(a.area.width,a.area.height)),n.ymin=y.y,n.xmax=y.x,this._ssExtent=n)),t.extent=n.clone()._normalize(!0).toJSON(),[4,i.takeScreenshot(a)];case 1:return p=s.sent(),d=h.dataComponents(p.dataUrl),t.imageData=d.data,[2,t]}})})},t.prototype._createStreamLayerJSON=function(e,t){var r=t.layerView,i=t.printTemplate;return a(this,void 0,void 0,function(){var t;return s(this,function(a){switch(a.label){case 0:return this._legendLayers&&this._legendLayers.push({id:e.id}),[4,this._getGraphics(r)];case 1:return t=a.sent(),[2,this._createFeatureCollectionJSON(e,t,i)]}})})},t.prototype._createTileLayerJSON=function(e){var t={};return this._setURLandToken(t,e),t},t.prototype._createVectorTileLayerJSON=function(e,t){return a(this,void 0,void 0,function(){var r,a,i;return s(this,function(n){return this._is11xService&&e.serviceUrl&&e.styleUrl&&(r=l.id&&l.id.findCredential(e.styleUrl),a=l.id&&l.id.findCredential(e.serviceUrl),!r&&!a||"2.1.0"!==this._cimVersion)?(i={type:"VectorTileLayer"},i.styleUrl=h.normalize(e.styleUrl),r&&(i.token=r.token),a&&a.token!==i.token&&(i.additionalTokens=[{url:e.serviceUrl,token:a.token}]),[2,i]):[2,this._createScreenshotJSON(e,t)]})})},t.prototype._createWebTileLayerJSON=function(e){var t=e.urlTemplate.replace(/\${/g,"{"),r={type:"WebTiledLayer",urlTemplate:t,credits:e.copyright};return e.subDomains&&e.subDomains.length>0&&(r.subDomains=e.subDomains),r},t.prototype._createWMSLayerJSON=function(e){var t,r=[],a=function(e){e.visible&&(e.sublayers?e.sublayers.forEach(a):e.name&&r.unshift(e.name))};return e.sublayers&&e.sublayers.forEach(a),r.length&&(t={type:"wms",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,transparentBackground:e.imageTransparency,visibleLayers:r,url:h.normalize(e.url),version:e.version}),t},t.prototype._createWMTSLayerJSON=function(e){var t=e.activeLayer;return{type:"wmts",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,format:t.imageFormat,layer:t.id,style:t.styleId,tileMatrixSet:t.tileMatrixSetId,url:h.normalize(e.url)}},t.prototype._setURLandToken=function(e,t){if(t.url){e.url=h.normalize(t.url);var r=l.id&&l.id.findCredential(t.url);r&&(e.token=r.token)}},t.prototype._convertSvgToPictureMarkerSymbolJson=function(e){this._canvasParent?(this._canvasSurface.clear(),this._canvasSurface.setDimensions(1024,1024)):(this._canvasParent=document.createElement("div"),this._canvasSurface=o.createSurface(this._canvasParent,1024,1024));var t;t="image/svg+xml"===e.contentType?this._canvasSurface.createObject(o.Image,{src:"data:image/svg+xml;base64,"+e.imageData,width:f.pt2px(e.width),height:f.pt2px(e.height),x:0,y:0}):this._canvasSurface.createObject(o.Path,e.path).setFill(e.color).setStroke(e.outline),"pendingRender"in this._canvasSurface&&this._canvasSurface._render(!0);var r=this._canvasSurface.rawNode.getContext("2d"),a=t.getBoundingBox(),i=Math.ceil(a.width+a.x),n=Math.ceil(a.height+a.y),s=r.getImageData(a.x,a.y,i,n);r.canvas.width=i,r.canvas.height=n,r.putImageData(s,0,0);return{type:"esriPMS",imageData:r.canvas.toDataURL("image/png").substr(22),angle:e.angle,contentType:"image/png",height:e.size?e.size:n-a.y,width:e.size?e.size:i-a.x,xoffset:e.xoffset,yoffset:e.yoffset}},t.prototype._convertSvgRenderer=function(e){var t=this,r=e.type;if("simple"===r&&N(e.symbol))e.symbol=this._convertSvgToPictureMarkerSymbolJson(e.symbol);else if("unique-value"===r||"class-breaks"===r){N(e.defaultSymbol)&&(e.defaultSymbol=this._convertSvgToPictureMarkerSymbolJson(e.defaultSymbol));var a="unique-value"===r?"uniqueValueInfos":"classBreakInfos",i=e[a];i&&i.forEach(function(e){N(e.symbol)&&(e.symbol=t._convertSvgToPictureMarkerSymbolJson(e.symbol))})}},t.prototype._getGraphics=function(e){return e.queryFeatures(I).then(function(e){return e.features})},t.prototype._getPrintDefinition=function(e,t){return a(this,void 0,void 0,function(){var r,a,i,n,o;return s(this,function(s){switch(s.label){case 0:return r=e.view,a=r.spatialReference,n={},[4,this._createOperationalLayers(r,t)];case 1:return n.operationalLayers=s.sent(),i=n,o=this._ssExtent||e.extent||r.extent,a&&a.isWrappable&&(o=o.clone()._normalize(!0),a=o.spatialReference),i.mapOptions={extent:o&&o.toJSON(),spatialReference:a&&a.toJSON(),showAttribution:t.attributionVisible},this._ssExtent=null,r.rotation&&(i.mapOptions.rotation=-r.rotation),t.preserveScale&&(i.mapOptions.scale=t.outScale||r.scale),[2,i]}})})},t.prototype._getGpPrintParams=function(e){return a(this,void 0,void 0,function(){var t,r,a,i,n,o,l,u,c,y,d,f,h,m,g,S,b,v,x,w=this;return s(this,function(s){switch(s.label){case 0:return t=e.template||new O,null==t.showLabels&&(t.showLabels=!0),r=t.exportOptions,i=L.toJSON(t.layout),r&&(n=r.dpi,a={dpi:n},"map_only"!==i.toLowerCase()&&""!==i||(o=r.width,l=r.height,a.outputSize=[o,l])),u=t.layoutOptions,u&&(y=void 0,d=void 0,"Miles"===u.scalebarUnit||"Kilometers"===u.scalebarUnit?(y="Kilometers",d="Miles"):"Meters"!==u.scalebarUnit&&"Feet"!==u.scalebarUnit||(y="Meters",d="Feet"),c={titleText:u.titleText,authorText:u.authorText,copyrightText:u.copyrightText,customTextElements:u.customTextElements,scaleBarOptions:{metricUnit:M.toJSON(y),metricLabel:J[y],nonMetricUnit:M.toJSON(d),nonMetricLabel:J[d]}}),f=null,u&&u.legendLayers&&(f=u.legendLayers.map(function(e){w._legendLayerNameMap[e.layerId]=e.title;var t={id:e.layerId};return e.subLayerIds&&(t.subLayerIds=e.subLayerIds),t})),[4,this._getPrintDefinition(e,t)];case 1:return h=s.sent(),h.operationalLayers&&(g=new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"),S=/[\u0600-\u06FF]/,b=function(e){var t=e.text,r=e.font,a=r&&r.family&&r.family.toLowerCase();t&&r&&("arial"===a||"arial unicode ms"===a)&&(r.family=g.test(t)?"Arial Unicode MS":"Arial","normal"!==r.style&&S.test(t)&&(r.family="Arial Unicode MS"))},h.operationalLayers.forEach(function(e){e.featureCollection&&e.featureCollection.layers&&e.featureCollection.layers.forEach(function(e){e.layerDefinition&&e.layerDefinition.drawingInfo&&e.layerDefinition.drawingInfo.renderer&&e.layerDefinition.drawingInfo.renderer.symbol&&(m=e.layerDefinition.drawingInfo.renderer,"esriTS"===m.symbol.type&&b(m.symbol)),e.featureSet&&e.featureSet.features&&e.featureSet.features.forEach(function(e){e.symbol&&"esriTS"===e.symbol.type&&b(e.symbol)})})})),e.outSpatialReference&&(h.mapOptions.spatialReference=e.outSpatialReference.toJSON()),p.mixin(h,{exportOptions:a,layoutOptions:c}),p.mixin(h.layoutOptions,{legendOptions:{operationalLayers:null!=f?f:this._legendLayers.slice()}}),this._legendLayers.length=0,v=JSON.stringify(h),x={Web_Map_as_JSON:v,Format:_.toJSON(t.format),Layout_Template:i},e.extraParameters&&p.mixin(x,e.extraParameters),[2,x]}})})},n([m.property({dependsOn:["url"]})],t.prototype,"_geoprocessor",null),n([m.property()],t.prototype,"_gpMetadata",void 0),n([m.property({dependsOn:["_gpMetadata"],readOnly:!0})],t.prototype,"mode",null),n([m.property()],t.prototype,"updateDelay",void 0),t=n([m.subclass("esri.tasks.PrintTask")],t)}(m.declared(v))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/DataFile.js":
/*!**************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/DataFile.js ***!
  \**************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(r,e,t,o,p,i){return function(r){function e(e){var t=r.call(this,e)||this;return t.itemId=null,t.url=null,t}return t(e,r),o([i.property({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],e.prototype,"itemId",void 0),o([i.property({type:String,json:{write:!0}})],e.prototype,"url",void 0),e=o([i.subclass("esri.tasks.support.DataFile")],e)}(i.declared(p.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
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

/***/ "./node_modules/arcgis-js-api/tasks/support/JobInfo.js":
/*!*************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/JobInfo.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./GPMessage */ "./node_modules/arcgis-js-api/tasks/support/GPMessage.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,o,r,t,s,i,d,n){var b=new s.default({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});return function(e){function o(o){var r=e.call(this,o)||this;return r.jobId=null,r.jobStatus=null,r.messages=null,r}return r(o,e),t([d.property()],o.prototype,"jobId",void 0),t([d.property({json:{read:b.read}})],o.prototype,"jobStatus",void 0),t([d.property({type:[n]})],o.prototype,"messages",void 0),o=t([d.subclass("esri.tasks.support.JobInfo")],o)}(d.declared(i.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/LinearUnit.js":
/*!****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/LinearUnit.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,s,i,o,n){var p=new i.default({esriMeters:"meters",esriFeet:"feet",esriKilometers:"kilometers",esriMiles:"miles",esriNauticalMiles:"nautical-miles",esriYards:"yards"},{ignoreUnknown:!1});return function(e){function r(r){var t=e.call(this,r)||this;return t.distance=0,t.units=null,t}return t(r,e),s([n.property({json:{write:!0}})],r.prototype,"distance",void 0),s([n.property({json:{read:p.read,write:p.write}})],r.prototype,"units",void 0),r=s([n.subclass("esri/tasks/support/LinearUnit")],r)}(n.declared(o.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/ParameterValue.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/ParameterValue.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,a,l,u,r,i){var o=new u.default({GPBoolean:"boolean",GPDataFile:"data-file",GPDate:"date",GPDouble:"double",GPFeatureRecordSetLayer:"feature-record-set-layer",GPField:"field",GPLinearUnit:"linear-unit",GPLong:"long",GPRasterData:"raster-data",GPRasterDataLayer:"raster-data-layer",GPRecordSet:"record-set",GPString:"string","GPMultiValue:GPBoolean":"multi-value","GPMultiValue:GPDataFile":"multi-value","GPMultiValue:GPDate":"multi-value","GPMultiValue:GPDouble":"multi-value","GPMultiValue:GPFeatureRecordSetLayer":"multi-value","GPMultiValue:GPField":"multi-value","GPMultiValue:GPLinearUnit":"multi-value","GPMultiValue:GPLong":"multi-value","GPMultiValue:GPRasterData":"multi-value","GPMultiValue:GPRasterDataLayer":"multi-value","GPMultiValue:GPRecordSet":"multi-value","GPMultiValue:GPString":"multi-value"});return function(e){function t(t){var a=e.call(this,t)||this;return a.dataType=null,a.value=null,a}return a(t,e),l([i.property({json:{read:o.read,write:o.write}})],t.prototype,"dataType",void 0),l([i.property()],t.prototype,"value",void 0),t=l([i.subclass("esri.tasks.support.ParameterValue")],t)}(i.declared(r.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/PrintTemplate.js":
/*!*******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/PrintTemplate.js ***!
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
       * Defines the layout elements. It's an object with the following properties:
       *
       * @property {string} [titleText] - The text used for the map title if the specified layout contains a title text element.
       * @property {string} [authorText] - The text used for the author if the specified layout contains an author text element.
       * @property {string} [copyrightText] - The text used for the copyright if the specified layout contains a copyright text element.
       * @property {"Miles" | "Kilometers" | "Meters" | "Feet"} [scalebarUnit=Miles] - The unit used for the scalebar.
       * @property {module:esri/tasks/support/LegendLayer[]} [legendLayers] - An array of {@link module:esri/tasks/support/LegendLayer}
       * containing the ids of the layers that will be included in the legend. Tiled layers and GraphicsLayer will not appear in the
       * legend. If `legendLayers` is not specified, all operational layers (non-tiled layers) except {@link module:esri/layers/GraphicsLayer}
       * will be present in the legend. To specify that no layers will be included in the legend, set `legendLayer = []`.
       * @property {Object[]} [customTextElements] - An array of name-value pair objects. Use this property to update the text for custom text elements
       * on the page layout. Values must be strings. The custom text elements must exist in the print service. All out-of-the-box print service layout
       * templates contain a text element named `date` that gets populated by default with the system date-time, but can be overwritten.
       *
       * @example
       * layoutOptions: {
       *   titleText: "My Print",
       *   authorText: "Sam",
       *   copyrightText: "My Company",
       *   scalebarUnit: "Miles",
       *   // the following text elements must
       *   // exist in the print service to appear
       *   customTextElements: [
       *     {"description": "My description"},
       *     {"location": "My Location"},
       *     {"date": "11/11/2020, 11:11:20 AM"}
       *   ]
       * }
       * @type {Object}
       */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e){return e.createSubclass({declaredClass:"esri.tasks.support.PrintTemplate",properties:{attributionVisible:{value:!0,type:Boolean},exportOptions:{value:{width:800,height:1100,dpi:96},type:Object},forceFeatureAttributes:{value:!1,type:Boolean},format:{value:"png32",type:String},label:{value:null,type:String},layout:{value:"map-only",type:String},layoutOptions:{value:null,type:Object},outScale:{value:0,type:Number},preserveScale:{value:!0,type:Boolean},showLabels:{value:!0,type:Boolean}}})}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
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

/***/ "./node_modules/arcgis-js-api/tasks/support/RasterData.js":
/*!****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/RasterData.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(r,e,t,o,p,u){return function(r){function e(e){var t=r.call(this,e)||this;return t.format=null,t.itemId=null,t.url=null,t}return t(e,r),o([u.property()],e.prototype,"format",void 0),o([u.property({json:{read:{source:"itemID"},write:{target:"itemID"}}})],e.prototype,"itemId",void 0),o([u.property()],e.prototype,"url",void 0),e=o([u.subclass("esri/tasks/support/RasterData")],e)}(u.declared(p.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/fileFormat.js":
/*!****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/fileFormat.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,n,o){Object.defineProperty(n,"__esModule",{value:!0});var r=new o.default({PDF:"pdf",PNG32:"png32",PNG8:"png8",JPG:"jpg",GIF:"gif",EPS:"eps",SVG:"svg",SVGZ:"svgz"});n.fromJSON=r.fromJSON.bind(r),n.toJSON=r.toJSON.bind(r)}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/layoutTemplate.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/layoutTemplate.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(a,t,e){Object.defineProperty(t,"__esModule",{value:!0});var r=new e.default({MAP_ONLY:"map-only","A3 Landscape":"a3-landscape","A3 Portrait":"a3-portrait","A4 Landscape":"a4-landscape","A4 Portrait":"a4-portrait","Letter ANSI A Landscape":"letter-ansi-a-landscape","Letter ANSI A Portrait":"letter-ansi-a-portrait","Tabloid ANSI B Landscape":"tabloid-ansi-b-landscape","Tabloid ANSI B Portrait":"tabloid-ansi-b-portrait"});t.fromJSON=r.fromJSON.bind(r),t.toJSON=r.toJSON.bind(r)}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/printTaskUtils.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/printTaskUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! @dojo/framework/shim/array */ "./node_modules/@dojo/framework/shim/array.mjs"),__webpack_require__(/*! ../../Color */ "./node_modules/arcgis-js-api/Color.js"),__webpack_require__(/*! ../../core/screenUtils */ "./node_modules/arcgis-js-api/core/screenUtils.js"),__webpack_require__(/*! ../../renderers/visualVariables/support/visualVariableUtils */ "./node_modules/arcgis-js-api/renderers/visualVariables/support/visualVariableUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,i,n,a){function o(e,r){var t=r.graphic,o=r.renderer,l=r.symbol,y=l.type;if(y!==O&&y!==D&&"visualVariables"in o&&o.visualVariables){var s=o.getVisualVariablesForType("size"),u=o.getVisualVariablesForType("color"),p=o.getVisualVariablesForType("opacity"),f=o.getVisualVariablesForType("rotation"),c=s&&s[0],m=u&&u[0],g=p&&p[0],L=f&&f[0];if(c){var d=y===I?l.style:null,V=a.getSize(c,t,{shape:d});null!=V&&(y===I?e.size=n.px2pt(V):y===F?(e.width=n.px2pt(V),e.height=n.px2pt(V)):y===k?e.width=n.px2pt(V):e.outline&&(e.outline.width=n.px2pt(V)))}if(m){var b=a.getColor(m,t);(b&&y===I||y===k||y===C)&&(e.color=i.toJSON(b))}if(g){var v=a.getOpacity(g,t);null!=v&&e.color&&(e.color[3]=Math.round(255*v))}L&&(e.angle=-a.getRotationAngle(o,t))}}function l(){return{layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}}function y(){return{layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}}function s(){return{layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}}function u(){return{layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}}function p(e,r){var i,n=e.allLayerViews.items;if(r===e.scale)i=n.filter(function(e){return!e.suspended});else{i=[];for(var a=0,o=n;a<o.length;a++){var l=o[a];d(l.parent)&&!t.includes(i,l.parent)||(!l.visible||r&&"isVisibleAtScale"in l&&!l.isVisibleAtScale(r)||i.push(l))}}return i}function f(e){return e&&"bing-maps"===e.type}function c(e){return e&&"csv"===e.type}function m(e){return e&&"feature"===e.type}function g(e){return e&&"graphics"===e.type}function L(e){return e&&"group"===e.type}function d(e){return e&&"esri.views.layers.GroupLayerView"===e.declaredClass}function V(e){return e&&"imagery"===e.type}function b(e){return e&&"kml"===e.type}function v(e){return e&&"map-image"===e.type}function T(e){return e&&"map-notes"===e.type}function w(e){return e&&"open-street-map"===e.type}function h(e){return e&&"stream"===e.type}function S(e){return e&&"tile"===e.type}function M(e){return e&&"vector-tile"===e.type}function G(e){return e&&"web-tile"===e.type}function P(e){return e&&"wms"===e.type}function x(e){return e&&"wmts"===e.type}Object.defineProperty(r,"__esModule",{value:!0});var I="simple-marker",F="picture-marker",k="simple-line",C="simple-fill",D="shield-label-symbol",O="text";r.applyVisualVariables=o,r.createMultipointLayer=l,r.createPolygonLayer=y,r.createPointLayer=s,r.createPolylineLayer=u,r.getVisibleLayerViews=p,r.isBingMapsLayer=f,r.isCSVLayer=c,r.isFeatureLayer=m,r.isGraphicsLayer=g,r.isGroupLayer=L,r.isImageryLayer=V,r.isKMLLayer=b,r.isMapImageLayer=v,r.isMapNotesLayer=T,r.isOpenStreetMapLayer=w,r.isStreamLayer=h,r.isTileLayer=S,r.isVectorTileLayer=M,r.isWebTileLayer=G,r.isWMSLayer=P,r.isWMTSLayer=x}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/dojox/gfx/_base.js":
/*!*****************************************!*\
  !*** ./node_modules/dojox/gfx/_base.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! dojo/_base/kernel */ "./node_modules/dojo/_base/kernel.js"), __webpack_require__(/*! dojo/_base/lang */ "./node_modules/dojo/_base/lang.js"), __webpack_require__(/*! dojo/_base/Color */ "./node_modules/dojo/_base/Color.js"), __webpack_require__(/*! dojo/_base/sniff */ "./node_modules/dojo/_base/sniff.js"), __webpack_require__(/*! dojo/_base/window */ "./node_modules/dojo/_base/window.js"),
	    __webpack_require__(/*! dojo/_base/array */ "./node_modules/dojo/_base/array.js"),__webpack_require__(/*! dojo/dom */ "./node_modules/dojo/dom.js"), __webpack_require__(/*! dojo/dom-construct */ "./node_modules/dojo/dom-construct.js"),__webpack_require__(/*! dojo/dom-geometry */ "./node_modules/dojo/dom-geometry.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(kernel, lang, Color, has, win, arr, dom, domConstruct, domGeom){
	// module:
	//		dojox/gfx
	// summary:
	//		This module contains common core Graphics API used by different graphics renderers.

	var g = lang.getObject("dojox.gfx", true),
		b = g._base = {};
	
	// candidates for dojox.style (work on VML and SVG nodes)
	g._hasClass = function(/*DomNode*/node, /*String*/classStr){
		// summary:
		//		Returns whether or not the specified classes are a portion of the
		//		class list currently applied to the node.
		
		// return (new RegExp('(^|\\s+)'+classStr+'(\\s+|$)')).test(node.className)	// Boolean
		var cls = node.getAttribute("className");
		return cls && (" " + cls + " ").indexOf(" " + classStr + " ") >= 0;  // Boolean
	};
	g._addClass = function(/*DomNode*/node, /*String*/classStr){
		// summary:
		//		Adds the specified classes to the end of the class list on the
		//		passed node.
		var cls = node.getAttribute("className") || "";
		if(!cls || (" " + cls + " ").indexOf(" " + classStr + " ") < 0){
			node.setAttribute("className", cls + (cls ? " " : "") + classStr);
		}
	};
	g._removeClass = function(/*DomNode*/node, /*String*/classStr){
		// summary:
		//		Removes classes from node.
		var cls = node.getAttribute("className");
		if(cls){
			node.setAttribute(
				"className",
				cls.replace(new RegExp('(^|\\s+)' + classStr + '(\\s+|$)'), "$1$2")
			);
		}
	};

	// candidate for dojox.html.metrics (dynamic font resize handler is not implemented here)

	//		derived from Morris John's emResized measurer
	b._getFontMeasurements = function(){
		// summary:
		//		Returns an object that has pixel equivilents of standard font
		//		size values.
		var heights = {
			'1em': 0, '1ex': 0, '100%': 0, '12pt': 0, '16px': 0, 'xx-small': 0,
			'x-small': 0, 'small': 0, 'medium': 0, 'large': 0, 'x-large': 0,
			'xx-large': 0
		};
		var p, oldStyle;	
		if(has("ie")){
			//	We do a font-size fix if and only if one isn't applied already.
			// NOTE: If someone set the fontSize on the HTML Element, this will kill it.
			oldStyle = win.doc.documentElement.style.fontSize || "";
			if(!oldStyle){
				win.doc.documentElement.style.fontSize="100%";
			}
		}

		//		set up the measuring node.
		var div = domConstruct.create("div", {style: {
				position: "absolute",
				left: "0",
				top: "-100px",
				width: "30px",
				height: "1000em",
				borderWidth: "0",
				margin: "0",
				padding: "0",
				outline: "none",
				lineHeight: "1",
				overflow: "hidden"
			}}, win.body());

		//		do the measurements.
		for(p in heights){
			div.style.fontSize = p;
			heights[p] = Math.round(div.offsetHeight * 12/16) * 16/12 / 1000;
		}

		if(has("ie")){
			// Restore the font to its old style.
			win.doc.documentElement.style.fontSize = oldStyle;
		}
		win.body().removeChild(div);
		return heights; //object
	};

	var fontMeasurements = null;

	b._getCachedFontMeasurements = function(recalculate){
		if(recalculate || !fontMeasurements){
			fontMeasurements = b._getFontMeasurements();
		}
		return fontMeasurements;
	};

	// candidate for dojox.html.metrics

	var measuringNode = null, empty = {};
	b._getTextBox = function(	/*String*/ text,
								/*Object*/ style,
								/*String?*/ className){
		var m, s, al = arguments.length;
		var i, box;
		if(!measuringNode){
			measuringNode = domConstruct.create("div", {style: {
				position: "absolute",
				top: "-10000px",
				left: "0",
				visibility: "hidden"
			}}, win.body());
		}
		m = measuringNode;
		// reset styles
		m.className = "";
		s = m.style;
		s.borderWidth = "0";
		s.margin = "0";
		s.padding = "0";
		s.outline = "0";
		// set new style
		if(al > 1 && style){
			for(i in style){
				if(i in empty){ continue; }
				s[i] = style[i];
			}
		}
		// set classes
		if(al > 2 && className){
			m.className = className;
		}
		// take a measure
		m.innerHTML = text;

		if(m.getBoundingClientRect){
			var bcr = m.getBoundingClientRect();
			box = {l: bcr.left, t: bcr.top, w: bcr.width || (bcr.right - bcr.left), h: bcr.height || (bcr.bottom - bcr.top)};
		}else{
			box = domGeom.getMarginBox(m);
		}
		m.innerHTML = "";
		return box;
	};

	b._computeTextLocation = function(/*g.defaultTextShape*/textShape, /*Number*/width, /*Number*/height, /*Boolean*/fixHeight) {
		var loc = {}, align = textShape.align;
		switch (align) {
			case 'end':
				loc.x = textShape.x - width;
				break;
			case 'middle':
				loc.x = textShape.x - width / 2;
				break;
			default:
				loc.x = textShape.x;
				break;
		}
		var c = fixHeight ? 0.75 : 1;
		loc.y = textShape.y - height*c; // **rough** approximation of the ascent...
		return loc;
	};
	b._computeTextBoundingBox = function(/*shape.Text*/s){
		// summary:
		//		Compute the bbox of the given shape.Text instance. Note that this method returns an
		//		approximation of the bbox, and should be used when the underlying renderer cannot provide precise metrics.
		if(!g._base._isRendered(s)){
			return {x:0, y:0, width:0, height:0};
		}
		var loc, textShape = s.getShape(),
			font = s.getFont() || g.defaultFont,
			w = s.getTextWidth(),
			h = g.normalizedLength(font.size);
		loc = b._computeTextLocation(textShape, w, h, true);
		return {
			x: loc.x,
			y: loc.y,
			width: w,
			height: h
		};
	};
	b._isRendered = function(/*Shape*/s){
		var p = s.parent;
		while(p && p.getParent){
			p = p.parent;
		}
		return p !== null;
	};

	// candidate for dojo.dom

	var uniqueId = 0;
	b._getUniqueId = function(){
		// summary:
		//		returns a unique string for use with any DOM element
		var id;
		do{
			id = kernel._scopeName + "xUnique" + (++uniqueId);
		}while(dom.byId(id));
		return id;
	};

	// IE10

	var touchActionProp = has("pointer-events") ? "touchAction" :  false ? undefined : null;
	b._fixMsTouchAction = touchActionProp ? function(/*dojox/gfx/shape.Surface*/surface){
		surface.rawNode.style[touchActionProp] = "none";
	} : function() {};

	/*=====
	g.Stroke = {
		// summary:
		//		A stroke defines stylistic properties that are used when drawing a path.

		// color: String
		//		The color of the stroke, default value 'black'.
		color: "black",

		// style: String
		//		The style of the stroke, one of 'solid', ... . Default value 'solid'.
		style: "solid",

		// width: Number
		//		The width of a stroke, default value 1.
		width: 1,

		// cap: String
		//		The endcap style of the path. One of 'butt', 'round', ... . Default value 'butt'.
		cap: "butt",

		// join: Number
		//		The join style to use when combining path segments. Default value 4.
		join: 4
	};
	
	g.Fill = {
		// summary:
		//		Defines how to fill a shape. Four types of fills can be used: solid, linear gradient, radial gradient and pattern.
		//		See dojox/gfx.LinearGradient, dojox/gfx.RadialGradient and dojox/gfx.Pattern respectively for more information about the properties supported by each type.
		
		// type: String?
		//		The type of fill. One of 'linear', 'radial', 'pattern' or undefined. If not specified, a solid fill is assumed.
		type:"",
		
		// color: String|dojo/Color?
		//		The color of a solid fill type.
		color:null,
		
	};
	
	g.LinearGradient = {
		// summary:
		//		An object defining the default stylistic properties used for Linear Gradient fills.
		//		Linear gradients are drawn along a virtual line, which results in appearance of a rotated pattern in a given direction/orientation.

		// type: String
		//		Specifies this object is a Linear Gradient, value 'linear'
		type: "linear",

		// x1: Number
		//		The X coordinate of the start of the virtual line along which the gradient is drawn, default value 0.
		x1: 0,

		// y1: Number
		//		The Y coordinate of the start of the virtual line along which the gradient is drawn, default value 0.
		y1: 0,

		// x2: Number
		//		The X coordinate of the end of the virtual line along which the gradient is drawn, default value 100.
		x2: 100,

		// y2: Number
		//		The Y coordinate of the end of the virtual line along which the gradient is drawn, default value 100.
		y2: 100,

		// colors: Array
		//		An array of colors at given offsets (from the start of the line).  The start of the line is
		//		defined at offest 0 with the end of the line at offset 1.
		//		Default value, [{ offset: 0, color: 'black'},{offset: 1, color: 'white'}], is a gradient from black to white.
		colors: []
	};
	
	g.RadialGradient = {
		// summary:
		//		Specifies the properties for RadialGradients using in fills patterns.

		// type: String
		//		Specifies this is a RadialGradient, value 'radial'
		type: "radial",

		// cx: Number
		//		The X coordinate of the center of the radial gradient, default value 0.
		cx: 0,

		// cy: Number
		//		The Y coordinate of the center of the radial gradient, default value 0.
		cy: 0,

		// r: Number
		//		The radius to the end of the radial gradient, default value 100.
		r: 100,

		// colors: Array
		//		An array of colors at given offsets (from the center of the radial gradient).
		//		The center is defined at offest 0 with the outer edge of the gradient at offset 1.
		//		Default value, [{ offset: 0, color: 'black'},{offset: 1, color: 'white'}], is a gradient from black to white.
		colors: []
	};
	
	g.Pattern = {
		// summary:
		//		An object specifying the default properties for a Pattern using in fill operations.

		// type: String
		//		Specifies this object is a Pattern, value 'pattern'.
		type: "pattern",

		// x: Number
		//		The X coordinate of the position of the pattern, default value is 0.
		x: 0,

		// y: Number
		//		The Y coordinate of the position of the pattern, default value is 0.
		y: 0,

		// width: Number
		//		The width of the pattern image, default value is 0.
		width: 0,

		// height: Number
		//		The height of the pattern image, default value is 0.
		height: 0,

		// src: String
		//		A url specifying the image to use for the pattern.
		src: ""
	};

	g.Text = {
		//	summary:
		//		A keyword argument object defining both the text to be rendered in a VectorText shape,
		//		and specifying position, alignment, and fitting.
		//	text: String
		//		The text to be rendered.
		//	x: Number?
		//		The left coordinate for the text's bounding box.
		//	y: Number?
		//		The top coordinate for the text's bounding box.
		//	width: Number?
		//		The width of the text's bounding box.
		//	height: Number?
		//		The height of the text's bounding box.
		//	align: String?
		//		The alignment of the text, as defined in SVG. Can be "start", "end" or "middle".
		//	fitting: Number?
		//		How the text is to be fitted to the bounding box. Can be 0 (no fitting), 1 (fitting based on
		//		passed width of the bounding box and the size of the font), or 2 (fit text to the bounding box,
		//		and ignore any size parameters).
		//	leading: Number?
		//		The leading to be used between lines in the text.
		//	decoration: String?
		//		Any text decoration to be used.
	};

	g.Font = {
		// summary:
		//		An object specifying the properties for a Font used in text operations.
	
		// type: String
		//		Specifies this object is a Font, value 'font'.
		type: "font",
	
		// style: String
		//		The font style, one of 'normal', 'bold', default value 'normal'.
		style: "normal",
	
		// variant: String
		//		The font variant, one of 'normal', ... , default value 'normal'.
		variant: "normal",
	
		// weight: String
		//		The font weight, one of 'normal', ..., default value 'normal'.
		weight: "normal",
	
		// size: String
		//		The font size (including units), default value '10pt'.
		size: "10pt",
	
		// family: String
		//		The font family, one of 'serif', 'sanserif', ..., default value 'serif'.
		family: "serif"
	};

	=====*/

	lang.mixin(g, {
		// summary:
		//		defines constants, prototypes, and utility functions for the core Graphics API

		// default shapes, which are used to fill in missing parameters
		defaultPath: {
			// summary:
			//		Defines the default Path prototype object.

			// type: String
			//		Specifies this object is a Path, default value 'path'.
			type: "path", 

			// path: String
			//		The path commands. See W32C SVG 1.0 specification.
			//		Defaults to empty string value.
			path: ""
		},
		defaultPolyline: {
			// summary:
			//		Defines the default PolyLine prototype.

			// type: String
			//		Specifies this object is a PolyLine, default value 'polyline'.
			type: "polyline",

			// points: Array
			//		An array of point objects [{x:0,y:0},...] defining the default polyline's line segments. Value is an empty array [].
			points: []
		},
		defaultRect: {
			// summary:
			//		Defines the default Rect prototype.

			// type: String
			//		Specifies this default object is a type of Rect. Value is 'rect'
			type: "rect",

			// x: Number
			//		The X coordinate of the default rectangles position, value 0.
			x: 0,

			// y: Number
			//		The Y coordinate of the default rectangle's position, value 0.
			y: 0,

			// width: Number
			//		The width of the default rectangle, value 100.
			width: 100,

			// height: Number
			//		The height of the default rectangle, value 100.
			height: 100,

			// r: Number
			//		The corner radius for the default rectangle, value 0.
			r: 0
		},
		defaultEllipse: {
			// summary:
			//		Defines the default Ellipse prototype.

			// type: String
			//		Specifies that this object is a type of Ellipse, value is 'ellipse'
			type: "ellipse",

			// cx: Number
			//		The X coordinate of the center of the ellipse, default value 0.
			cx: 0,

			// cy: Number
			//		The Y coordinate of the center of the ellipse, default value 0.
			cy: 0,

			// rx: Number
			//		The radius of the ellipse in the X direction, default value 200.
			rx: 200,

			// ry: Number
			//		The radius of the ellipse in the Y direction, default value 200.
			ry: 100
		},
		defaultCircle: {
			// summary:
			//		An object defining the default Circle prototype.

			// type: String
			//		Specifies this object is a circle, value 'circle'
			type: "circle",

			// cx: Number
			//		The X coordinate of the center of the circle, default value 0.
			cx: 0,
			// cy: Number
			//		The Y coordinate of the center of the circle, default value 0.
			cy: 0,

			// r: Number
			//		The radius, default value 100.
			r: 100
		},
		defaultLine: {
			// summary:
			//		An object defining the default Line prototype.

			// type: String
			//		Specifies this is a Line, value 'line'
			type: "line",

			// x1: Number
			//		The X coordinate of the start of the line, default value 0.
			x1: 0,

			// y1: Number
			//		The Y coordinate of the start of the line, default value 0.
			y1: 0,

			// x2: Number
			//		The X coordinate of the end of the line, default value 100.
			x2: 100,

			// y2: Number
			//		The Y coordinate of the end of the line, default value 100.
			y2: 100
		},
		defaultImage: {
			// summary:
			//		Defines the default Image prototype.

			// type: String
			//		Specifies this object is an image, value 'image'.
			type: "image",

			// x: Number
			//		The X coordinate of the image's position, default value 0.
			x: 0,

			// y: Number
			//		The Y coordinate of the image's position, default value 0.
			y: 0,

			// width: Number
			//		The width of the image, default value 0.
			width: 0,

			// height: Number
			//		The height of the image, default value 0.
			height: 0,

			// src: String
			//		The src url of the image, defaults to empty string.
			src: ""
		},
		defaultText: {
			// summary:
			//		Defines the default Text prototype.

			// type: String
			//		Specifies this is a Text shape, value 'text'.
			type: "text",

			// x: Number
			//		The X coordinate of the text position, default value 0.
			x: 0,

			// y: Number
			//		The Y coordinate of the text position, default value 0.
			y: 0,

			// text: String
			//		The text to be displayed, default value empty string.
			text: "",

			// align:	String
			//		The horizontal text alignment, one of 'start', 'end', 'center'. Default value 'start'.
			align: "start",

			// decoration: String
			//		The text decoration , one of 'none', ... . Default value 'none'.
			decoration: "none",

			// rotated: Boolean
			//		Whether the text is rotated, boolean default value false.
			rotated: false,

			// kerning: Boolean
			//		Whether kerning is used on the text, boolean default value true.
			kerning: true
		},
		defaultTextPath: {
			// summary:
			//		Defines the default TextPath prototype.

			// type: String
			//		Specifies this is a TextPath, value 'textpath'.
			type: "textpath",

			// text: String
			//		The text to be displayed, default value empty string.
			text: "",

			// align: String
			//		The horizontal text alignment, one of 'start', 'end', 'center'. Default value 'start'.
			align: "start",

			// decoration: String
			//		The text decoration , one of 'none', ... . Default value 'none'.
			decoration: "none",

			// rotated: Boolean
			//		Whether the text is rotated, boolean default value false.
			rotated: false,

			// kerning: Boolean
			//		Whether kerning is used on the text, boolean default value true.
			kerning: true
		},

		// default stylistic attributes
		defaultStroke: {
			// summary:
			//		A stroke defines stylistic properties that are used when drawing a path.
			//		This object defines the default Stroke prototype.
			// type: String
			//		Specifies this object is a type of Stroke, value 'stroke'.
			type: "stroke",

			// color: String
			//		The color of the stroke, default value 'black'.
			color: "black",

			// style: String
			//		The style of the stroke, one of 'solid', ... . Default value 'solid'.
			style: "solid",

			// width: Number
			//		The width of a stroke, default value 1.
			width: 1,

			// cap: String
			//		The endcap style of the path. One of 'butt', 'round', ... . Default value 'butt'.
			cap: "butt",

			// join: Number
			//		The join style to use when combining path segments. Default value 4.
			join: 4
		},
		defaultLinearGradient: {
			// summary:
			//		An object defining the default stylistic properties used for Linear Gradient fills.
			//		Linear gradients are drawn along a virtual line, which results in appearance of a rotated pattern in a given direction/orientation.

			// type: String
			//		Specifies this object is a Linear Gradient, value 'linear'
			type: "linear",

			// x1: Number
			//		The X coordinate of the start of the virtual line along which the gradient is drawn, default value 0.
			x1: 0,

			// y1: Number
			//		The Y coordinate of the start of the virtual line along which the gradient is drawn, default value 0.
			y1: 0,

			// x2: Number
			//		The X coordinate of the end of the virtual line along which the gradient is drawn, default value 100.
			x2: 100,

			// y2: Number
			//		The Y coordinate of the end of the virtual line along which the gradient is drawn, default value 100.
			y2: 100,

			// colors: Array
			//		An array of colors at given offsets (from the start of the line).  The start of the line is
			//		defined at offest 0 with the end of the line at offset 1.
			//		Default value, [{ offset: 0, color: 'black'},{offset: 1, color: 'white'}], is a gradient from black to white.
			colors: [
				{ offset: 0, color: "black" }, { offset: 1, color: "white" }
			]
		},
		defaultRadialGradient: {
			// summary:
			//		An object specifying the default properties for RadialGradients using in fills patterns.

			// type: String
			//		Specifies this is a RadialGradient, value 'radial'
			type: "radial",

			// cx: Number
			//		The X coordinate of the center of the radial gradient, default value 0.
			cx: 0,

			// cy: Number
			//		The Y coordinate of the center of the radial gradient, default value 0.
			cy: 0,

			// r: Number
			//		The radius to the end of the radial gradient, default value 100.
			r: 100,

			// colors: Array
			//		An array of colors at given offsets (from the center of the radial gradient).
			//		The center is defined at offest 0 with the outer edge of the gradient at offset 1.
			//		Default value, [{ offset: 0, color: 'black'},{offset: 1, color: 'white'}], is a gradient from black to white.
			colors: [
				{ offset: 0, color: "black" }, { offset: 1, color: "white" }
			]
		},
		defaultPattern: {
			// summary:
			//		An object specifying the default properties for a Pattern using in fill operations.

			// type: String
			//		Specifies this object is a Pattern, value 'pattern'.
			type: "pattern",

			// x: Number
			//		The X coordinate of the position of the pattern, default value is 0.
			x: 0,

			// y: Number
			//		The Y coordinate of the position of the pattern, default value is 0.
			y: 0,

			// width: Number
			//		The width of the pattern image, default value is 0.
			width: 0,

			// height: Number
			//		The height of the pattern image, default value is 0.
			height: 0,

			// src: String
			//		A url specifying the image to use for the pattern.
			src: ""
		},
		defaultFont: {
			// summary:
			//		An object specifying the default properties for a Font used in text operations.

			// type: String
			//		Specifies this object is a Font, value 'font'.
			type: "font",

			// style: String
			//		The font style, one of 'normal', 'bold', default value 'normal'.
			style: "normal",

			// variant: String
			//		The font variant, one of 'normal', ... , default value 'normal'.
			variant: "normal",

			// weight: String
			//		The font weight, one of 'normal', ..., default value 'normal'.
			weight: "normal",

			// size: String
			//		The font size (including units), default value '10pt'.
			size: "10pt",

			// family: String
			//		The font family, one of 'serif', 'sanserif', ..., default value 'serif'.
			family: "serif"
		},

		getDefault: (function(){
			// summary:
			//		Returns a function used to access default memoized prototype objects (see them defined above).
			var typeCtorCache = {};
			// a memoized delegate()
			return function(/*String*/ type){
				var t = typeCtorCache[type];
				if(t){
					return new t();
				}
				t = typeCtorCache[type] = new Function();
				t.prototype = g[ "default" + type ];
				return new t();
			}
		})(),

		normalizeColor: function(/*dojo/Color|Array|string|Object*/ color){
			// summary:
			//		converts any legal color representation to normalized
			//		dojo/Color object
			// color:
			//		A color representation.
			return (color instanceof Color) ? color : new Color(color); // dojo/Color
		},
		normalizeParameters: function(existed, update){
			// summary:
			//		updates an existing object with properties from an 'update'
			//		object
			// existed: Object
			//		the target object to be updated
			// update: Object
			//		the 'update' object, whose properties will be used to update
			//		the existed object
			var x;
			if(update){
				var empty = {};
				for(x in existed){
					if(x in update && !(x in empty)){
						existed[x] = update[x];
					}
				}
			}
			return existed;	// Object
		},
		makeParameters: function(defaults, update){
			// summary:
			//		copies the original object, and all copied properties from the
			//		'update' object
			// defaults: Object
			//		the object to be cloned before updating
			// update: Object
			//		the object, which properties are to be cloned during updating
			// returns: Object
			//      new object with new and default properties
			var i = null;
			if(!update){
				// return dojo.clone(defaults);
				return lang.delegate(defaults);
			}
			var result = {};
			for(i in defaults){
				if(!(i in result)){
					result[i] = lang.clone((i in update) ? update[i] : defaults[i]);
				}
			}
			return result; // Object
		},
		formatNumber: function(x, addSpace){
			// summary:
			//		converts a number to a string using a fixed notation
			// x: Number
			//		number to be converted
			// addSpace: Boolean
			//		whether to add a space before a positive number
			// returns: String
			//      the formatted value
			var val = x.toString();
			if(val.indexOf("e") >= 0){
				val = x.toFixed(4);
			}else{
				var point = val.indexOf(".");
				if(point >= 0 && val.length - point > 5){
					val = x.toFixed(4);
				}
			}
			if(x < 0){
				return val; // String
			}
			return addSpace ? " " + val : val; // String
		},
		// font operations
		makeFontString: function(font){
			// summary:
			//		converts a font object to a CSS font string
			// font: Object
			//		font object (see dojox/gfx.defaultFont)
			return font.style + " " + font.variant + " " + font.weight + " " + font.size + " " + font.family; // Object
		},
		splitFontString: function(str){
			// summary:
			//		converts a CSS font string to a font object
			// description:
			//		Converts a CSS font string to a gfx font object. The CSS font
			//		string components should follow the W3C specified order
			//		(see http://www.w3.org/TR/CSS2/fonts.html#font-shorthand):
			//		style, variant, weight, size, optional line height (will be
			//		ignored), and family. Note that the Font.size attribute is limited to numeric CSS length.
			// str: String
			//		a CSS font string.
			// returns: Object
			//      object in dojox/gfx.defaultFont format
			var font = g.getDefault("Font");
			var t = str.split(/\s+/);
			do{
				if(t.length < 5){ break; }
				font.style   = t[0];
				font.variant = t[1];
				font.weight  = t[2];
				var i = t[3].indexOf("/");
				font.size = i < 0 ? t[3] : t[3].substring(0, i);
				var j = 4;
				if(i < 0){
					if(t[4] == "/"){
						j = 6;
					}else if(t[4].charAt(0) == "/"){
						j = 5;
					}
				}
				if(j < t.length){
					font.family = t.slice(j).join(" ");
				}
			}while(false);
			return font;	// Object
		},
		// length operations

		// cm_in_pt: Number
		//		points per centimeter (constant)
		cm_in_pt: 72 / 2.54,

		// mm_in_pt: Number
		//		points per millimeter (constant)
		mm_in_pt: 7.2 / 2.54,

		px_in_pt: function(){
			// summary:
			//		returns the current number of pixels per point.
			return g._base._getCachedFontMeasurements()["12pt"] / 12;	// Number
		},

		pt2px: function(len){
			// summary:
			//		converts points to pixels
			// len: Number
			//		a value in points
			return len * g.px_in_pt();	// Number
		},

		px2pt: function(len){
			// summary:
			//		converts pixels to points
			// len: Number
			//		a value in pixels
			return len / g.px_in_pt();	// Number
		},

		normalizedLength: function(len) {
			// summary:
			//		converts any length value to pixels
			// len: String
			//		a length, e.g., '12pc'
			// returns: Number
			//      pixels
			if(len.length === 0){ return 0; }
			if(len.length > 2){
				var px_in_pt = g.px_in_pt();
				var val = parseFloat(len);
				switch(len.slice(-2)){
					case "px": return val;
					case "pt": return val * px_in_pt;
					case "in": return val * 72 * px_in_pt;
					case "pc": return val * 12 * px_in_pt;
					case "mm": return val * g.mm_in_pt * px_in_pt;
					case "cm": return val * g.cm_in_pt * px_in_pt;
				}
			}
			return parseFloat(len);	// Number
		},

		// pathVmlRegExp: RegExp
		//		a constant regular expression used to split a SVG/VML path into primitive components
		// tags:
		//		private
		pathVmlRegExp: /([A-Za-z]+)|(\d+(\.\d+)?)|(\.\d+)|(-\d+(\.\d+)?)|(-\.\d+)/g,

		// pathVmlRegExp: RegExp
		//		a constant regular expression used to split a SVG/VML path into primitive components
		// tags:
		//		private
		pathSvgRegExp: /([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g,

		equalSources: function(a, b){
			// summary:
			//		compares event sources, returns true if they are equal
			// a: Object
			//		first event source
			// b: Object
			//		event source to compare against a
			// returns: Boolean
			//      true, if objects are truthy and the same
			return a && b && a === b;
		},

		switchTo: function(/*String|Object*/ renderer){
			// summary:
			//		switch the graphics implementation to the specified renderer.
			// renderer:
			//		Either the string name of a renderer (eg. 'canvas', 'svg, ...) or the renderer
			//		object to switch to.
			var ns = typeof renderer == "string" ? g[renderer] : renderer;
			if(ns){
				// If more options are added, update the docblock at the end of shape.js!
				arr.forEach(["Group", "Rect", "Ellipse", "Circle", "Line",
						"Polyline", "Image", "Text", "Path", "TextPath",
						"Surface", "createSurface", "fixTarget"], function(name){
					g[name] = ns[name];
				});
				if(typeof renderer == "string"){
					g.renderer = renderer;
				}else{
					arr.some(["svg","vml","canvas","canvasWithEvents","silverlight"], function(r){
						return (g.renderer = g[r] && g[r].Surface === g.Surface ? r : null);
					});
				}
			}
		}
	});
	
	/*=====
		g.createSurface = function(parentNode, width, height){
			// summary:
			//		creates a surface
			// parentNode: Node
			//		a parent node
			// width: String|Number
			//		width of surface, e.g., "100px" or 100
			// height: String|Number
			//		height of surface, e.g., "100px" or 100
			// returns: dojox/gfx.Surface
			//     newly created surface
		};
		g.fixTarget = function(){
			// tags:
			//		private
		};
	=====*/
	
	return g; // defaults object api
}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/dojox/gfx/arc.js":
/*!***************************************!*\
  !*** ./node_modules/dojox/gfx/arc.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./_base */ "./node_modules/dojox/gfx/_base.js"), __webpack_require__(/*! dojo/_base/lang */ "./node_modules/dojo/_base/lang.js"), __webpack_require__(/*! ./matrix */ "./node_modules/dojox/gfx/matrix.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(g, lang, m){
	var twoPI = 2 * Math.PI, pi4 = Math.PI / 4, pi8 = Math.PI / 8,
		pi48 = pi4 + pi8, curvePI4 = unitArcAsBezier(pi8);

	function unitArcAsBezier(alpha){
		// summary:
		//		return a start point, 1st and 2nd control points, and an end point of
		//		a an arc, which is reflected on the x axis
		// alpha: Number
		//		angle in radians, the arc will be 2 * angle size
		var cosa  = Math.cos(alpha), sina  = Math.sin(alpha),
			p2 = {x: cosa + (4 / 3) * (1 - cosa), y: sina - (4 / 3) * cosa * (1 - cosa) / sina};
		return {	// Object
			s:  {x: cosa, y: -sina},
			c1: {x: p2.x, y: -p2.y},
			c2: p2,
			e:  {x: cosa, y: sina}
		};
	}

	var arc = g.arc = {
		// summary:
		//		This module contains the core graphics Arc functions.
		
		unitArcAsBezier: unitArcAsBezier,
		/*===== 
		unitArcAsBezier: function(alpha) {
			// summary:
			//		return a start point, 1st and 2nd control points, and an end point of
			//		a an arc, which is reflected on the x axis
			// alpha: Number
			//		angle in radians, the arc will be 2 * angle size
		},
		=====*/

		// curvePI4: Object
		//		an object with properties of an arc around a unit circle from 0 to pi/4
		curvePI4: curvePI4,

		arcAsBezier: function(last, rx, ry, xRotg, large, sweep, x, y){
			// summary:
			//		calculates an arc as a series of Bezier curves
			//		given the last point and a standard set of SVG arc parameters,
			//		it returns an array of arrays of parameters to form a series of
			//		absolute Bezier curves.
			// last: Object
			//		a point-like object as a start of the arc
			// rx: Number
			//		a horizontal radius for the virtual ellipse
			// ry: Number
			//		a vertical radius for the virtual ellipse
			// xRotg: Number
			//		a rotation of an x axis of the virtual ellipse in degrees
			// large: Boolean
			//		which part of the ellipse will be used (the larger arc if true)
			// sweep: Boolean
			//		direction of the arc (CW if true)
			// x: Number
			//		the x coordinate of the end point of the arc
			// y: Number
			//		the y coordinate of the end point of the arc

			// calculate parameters
			large = Boolean(large);
			sweep = Boolean(sweep);
			var xRot = m._degToRad(xRotg),
				rx2 = rx * rx, ry2 = ry * ry,
				pa = m.multiplyPoint(
					m.rotate(-xRot),
					{x: (last.x - x) / 2, y: (last.y - y) / 2}
				),
				pax2 = pa.x * pa.x, pay2 = pa.y * pa.y,
				c1 = Math.sqrt((rx2 * ry2 - rx2 * pay2 - ry2 * pax2) / (rx2 * pay2 + ry2 * pax2));
			if(isNaN(c1)){ c1 = 0; }
			var	ca = {
					x:  c1 * rx * pa.y / ry,
					y: -c1 * ry * pa.x / rx
				};
			if(large == sweep){
				ca = {x: -ca.x, y: -ca.y};
			}
			// the center
			var c = m.multiplyPoint(
				[
					m.translate(
						(last.x + x) / 2,
						(last.y + y) / 2
					),
					m.rotate(xRot)
				],
				ca
			);
			// calculate the elliptic transformation
			var elliptic_transform = m.normalize([
				m.translate(c.x, c.y),
				m.rotate(xRot),
				m.scale(rx, ry)
			]);
			// start, end, and size of our arc
			var inversed = m.invert(elliptic_transform),
				sp = m.multiplyPoint(inversed, last),
				ep = m.multiplyPoint(inversed, x, y),
				startAngle = Math.atan2(sp.y, sp.x),
				endAngle   = Math.atan2(ep.y, ep.x),
				theta = startAngle - endAngle;	// size of our arc in radians
			if(sweep){ theta = -theta; }
			if(theta < 0){
				theta += twoPI;
			}else if(theta > twoPI){
				theta -= twoPI;
			}

			// draw curve chunks
			var alpha = pi8, curve = curvePI4, step  = sweep ? alpha : -alpha,
				result = [];
			for(var angle = theta; angle > 0; angle -= pi4){
				if(angle < pi48){
					alpha = angle / 2;
					curve = unitArcAsBezier(alpha);
					step  = sweep ? alpha : -alpha;
					angle = 0;	// stop the loop
				}
				var c2, e, M = m.normalize([elliptic_transform, m.rotate(startAngle + step)]);
				if(sweep){
					c1 = m.multiplyPoint(M, curve.c1);
					c2 = m.multiplyPoint(M, curve.c2);
					e  = m.multiplyPoint(M, curve.e );
				}else{
					c1 = m.multiplyPoint(M, curve.c2);
					c2 = m.multiplyPoint(M, curve.c1);
					e  = m.multiplyPoint(M, curve.s );
				}
				// draw the curve
				result.push([c1.x, c1.y, c2.x, c2.y, e.x, e.y]);
				startAngle += 2 * step;
			}
			return result;	// Array
		}
	};
	
	return arc;
}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/dojox/gfx/bezierutils.js":
/*!***********************************************!*\
  !*** ./node_modules/dojox/gfx/bezierutils.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./_base */ "./node_modules/dojox/gfx/_base.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(gfx){

	var bu = gfx.bezierutils = {},
		error = 0.1;

	var tAtLength = bu.tAtLength = function(points, length){
		// summary:
		//		Returns the t corresponding to the given length for the specified bezier curve.
		// points: Number[]
		//		The bezier points. Should be [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y] for a cubic
		//		bezier curve or [p1x, p1y, cx, cy, p2x, p2y] for a quadratic bezier curve.
		// length: Number
		//		The length.
		var t = 0,
			quadratic = points.length == 6,
			currentLen = 0,
			splitCount = 0,
			splitFunc = quadratic ? splitQBezierAtT : splitBezierAtT;
		var _compute = function(p, error){
			// control points polygon length
			var pLen = 0;
			for(var i = 0; i < p.length-2; i+=2)
				pLen += distance(p[i],p[i+1],p[i+2],p[i+3]);
			// chord length
			var chord = quadratic ?
				distance(points[0],points[1],points[4],points[5]) :
				distance(points[0],points[1],points[6],points[7]);
			// if needs more approx. or if currentLen is greater than the target length,
			// split the curve one more time
			if(pLen - chord > error || currentLen + pLen > length + error){
				++splitCount;
				var newbezier = splitFunc(p, .5);
				// check 1st subpath
				_compute(newbezier[0], error);
				// the 1st subcurve was the good one, we stop
				if(Math.abs(currentLen - length) <= error){
					return;
				}
				// need to continue with the 2nde subcurve
				_compute(newbezier[1], error);
				return ;
			}
			currentLen += pLen;
			t += 1.0 / (1 << splitCount);
		};
		if(length)
			_compute(points, 0.5);
		return t;
	};

	var computeLength = bu.computeLength = function(/*Array*/points){
		// summary:
		//		Returns the length of the given bezier curve.
		// points: Number[]
		//		The bezier points. Should be [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y] for a cubic
		//		bezier curve or [p1x, p1y, cx, cy, p2x, p2y] for a quadratic bezier curve.

		var quadratic = points.length == 6, pLen=0;
		// control points polygon length
		for(var i = 0; i < points.length-2; i+=2)
			pLen += distance(points[i],points[i+1],points[i+2],points[i+3]);
		// chord length
		var chord = quadratic ?
			distance(points[0],points[1],points[4],points[5]) :
			distance(points[0],points[1],points[6],points[7]);
		// split polygons until the polygon and the chord are "the same"
		if(pLen-chord>error){
			var newBeziers = quadratic ? splitQBezierAtT(points,.5) : splitCBezierAtT(points,.5);
			var length = computeLength(newBeziers[0], quadratic);
			length += computeLength(newBeziers[1], quadratic);
			return length;
		}
		// pLen is close enough, done.
		return pLen;
	};

	var distance = bu.distance = function(x1, y1, x2, y2){
		// summary:
		//		Returns the distance between the specified points.
		return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
	};

	var splitQBezierAtT = function(points, t){
		// summary:
		//		Split a quadratic bezier curve into 2 sub-quadratic beziers at the specified t.

		// de Casteljau
		var r = 1-t,
			r2 = r*r,
			t2 = t*t,
			p1x = points[0],
			p1y = points[1],
			cx = points[2],
			cy = points[3],
			p2x = points[4],
			p2y = points[5],

			ax = r*p1x + t*cx,
			ay = r*p1y + t*cy,
			bx = r*cx + t*p2x,
			by = r*cy + t*p2y,
			px = r2*p1x + 2*r*t*cx + t2*p2x,
			py = r2*p1y + 2*r*t*cy + t2*p2y;

		return [
			[
				p1x, p1y,
				ax, ay,
				px, py
			],
			[
				px, py,
				bx, by,
				p2x, p2y
			]
		];
	};

	var splitCBezierAtT = function(points, t){
		// summary:
		//		Split a cubic bezier curve into 2 sub-cubic beziers at the specified t.

		// de Casteljau
		var r = 1-t,
			r2 = r*r,
			r3 = r2*r,
			t2 = t*t,
			t3 = t2*t,
			p1x = points[0],
			p1y = points[1],
			c1x = points[2],
			c1y = points[3],
			c2x = points[4],
			c2y = points[5],
			p2x = points[6],
			p2y = points[7],

			ax = r*p1x + t*c1x,
			ay = r*p1y + t*c1y,
			cx = r*c2x + t*p2x,
			cy = r*c2y + t*p2y,
			mx = r2*p1x + 2*r*t*c1x + t2*c2x,
			my = r2*p1y + 2*r*t*c1y + t2*c2y,
			nx = r2*c1x + 2*r*t*c2x + t2*p2x,
			ny = r2*c1y + 2*r*t*c2y + t2*p2y,
			px = r3*p1x + 3*r2*t*c1x + 3*r*t2*c2x+t3*p2x,
			py = r3*p1y + 3*r2*t*c1y + 3*r*t2*c2y+t3*p2y;

		return [
			[
				p1x, p1y,
				ax, ay,
				mx, my,
				px, py
			],
			[
				px, py,
				nx, ny,
				cx, cy,
				p2x, p2y
			]
		];
	};

	var splitBezierAtT = bu.splitBezierAtT = function(points, t){
		return points.length == 6 ? splitQBezierAtT(points, t) : splitCBezierAtT(points, t);
	};
	return bu;
}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/dojox/gfx/canvas.js":
/*!******************************************!*\
  !*** ./node_modules/dojox/gfx/canvas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./_base */ "./node_modules/dojox/gfx/_base.js"), __webpack_require__(/*! dojo/_base/lang */ "./node_modules/dojo/_base/lang.js"), __webpack_require__(/*! dojo/_base/array */ "./node_modules/dojo/_base/array.js"), __webpack_require__(/*! dojo/_base/declare */ "./node_modules/dojo/_base/declare.js"), __webpack_require__(/*! dojo/_base/window */ "./node_modules/dojo/_base/window.js"), __webpack_require__(/*! dojo/dom-geometry */ "./node_modules/dojo/dom-geometry.js"),
		__webpack_require__(/*! dojo/dom */ "./node_modules/dojo/dom.js"), __webpack_require__(/*! ./shape */ "./node_modules/dojox/gfx/shape.js"), __webpack_require__(/*! ./path */ "./node_modules/dojox/gfx/path.js"), __webpack_require__(/*! ./arc */ "./node_modules/dojox/gfx/arc.js"), __webpack_require__(/*! ./matrix */ "./node_modules/dojox/gfx/matrix.js"), __webpack_require__(/*! ./decompose */ "./node_modules/dojox/gfx/decompose.js"), __webpack_require__(/*! ./bezierutils */ "./node_modules/dojox/gfx/bezierutils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(g, lang, arr, declare, win, domGeom, dom, gs, pathLib, ga, m, decompose, bezierUtils ){
	var canvas = g.canvas = {
		// summary:
		//		This the graphics rendering bridge for W3C Canvas compliant browsers.
		//		Since Canvas is an immediate mode graphics api, with no object graph or
		//		eventing capabilities, use of this module alone will only add in drawing support.
		//		The additional module, canvasWithEvents extends this module with additional support
		//		for handling events on Canvas.  By default, the support for events is now included
		//		however, if only drawing capabilities are needed, canvas event module can be disabled
		//		using the dojoConfig option, canvasEvents:true|false.
		//		The id of the Canvas renderer is 'canvas'.  This id can be used when switch Dojo's
		//		graphics context between renderer implementations.  See dojox/gfx/_base.switchRenderer
		//		API.
	};
	var pattrnbuffer = null,
		mp = m.multiplyPoint,
		pi = Math.PI,
		twoPI = 2 * pi,
		halfPI = pi /2,
		extend = lang.extend;

	if(win.global.CanvasRenderingContext2D){
		var ctx2d = win.doc.createElement("canvas").getContext("2d");
		var hasNativeDash = typeof ctx2d.setLineDash == "function";
		var hasFillText = typeof ctx2d.fillText == "function";
	}

	var dasharray = {
		solid:				"none",
		shortdash:			[4, 1],
		shortdot:			[1, 1],
		shortdashdot:		[4, 1, 1, 1],
		shortdashdotdot:	[4, 1, 1, 1, 1, 1],
		dot:				[1, 3],
		dash:				[4, 3],
		longdash:			[8, 3],
		dashdot:			[4, 3, 1, 3],
		longdashdot:		[8, 3, 1, 3],
		longdashdotdot:		[8, 3, 1, 3, 1, 3]
	};

	function drawDashedArc(/*CanvasRenderingContext2D*/ctx, /*Number[]*/dash,  /*int*/cx,  /*int*/cy,  /*int*/r, /*Number*/sa, /*Number*/ea, /*Boolean*/ccw, /*Boolean?*/apply, prevResidue){
		var residue, angle, l = dash.length, i= 0;
		// if there's a previous dash residue from the previous arc, start with it.
		if(prevResidue){
			angle = prevResidue.l/r;
			i = prevResidue.i;
		}else{
			angle = dash[0]/r;
		}
		while(sa < ea){
			// if the dash segment length is longer than what remains to stroke, keep it for next arc. (aka residue)
			if(sa+angle > ea){
				residue = {l: (sa+angle-ea)*r, i: i};
				angle = ea-sa;
			}
			if(!(i%2)){
				ctx.beginPath();
				ctx.arc(cx, cy, r, sa, sa+angle, ccw);
				if(apply) ctx.stroke();
			}
			sa += angle;
			++i;
			angle = dash[i%l]/r;
		}
		return residue;
	}

	function splitToDashedBezier(/*Number[]*/points, /*Number[]*/dashArray, /*Number[]*/newPoints, /*Object*/prevResidue){
		var residue = 0, t = 0, dash, i = 0;
		if(prevResidue){
			dash = prevResidue.l;
			i = prevResidue.i;
		}else{
			dash = dashArray[0];
		}
		while(t<1){
			// get the 't' corresponding to the given dash value.
			t = bezierUtils.tAtLength(points, dash);
			if(t==1){
				var rl = bezierUtils.computeLength(points);
				residue = {l: dash-rl, i: i};
			}
			// split bezier at t: left part is the "dash" curve, right part is the remaining bezier points
			var curves = bezierUtils.splitBezierAtT(points, t);
			if(!(i%2)){
				// only keep the "dash" curve
				newPoints.push(curves[0]);
			}
			points = curves[1];
			++i;
			dash = dashArray[i%dashArray.length];
		}
		return residue;
	}

	function toDashedCurveTo(/*Array||CanvasRenderingContext2D*/ctx, /*shape.Path*/shape, /*Number[]*/points, /*Object*/prevResidue){
		// summary:
		//		Builds a set of bezier (cubic || quadratic)curveTo' canvas instructions that represents a dashed stroke of the specified bezier geometry.

		var pts = [shape.last.x, shape.last.y].concat(points),
			quadratic = points.length === 4, ctx2d = !(ctx instanceof Array),
			api = quadratic ? "quadraticCurveTo" : "bezierCurveTo",
			curves = [];
		var residue = splitToDashedBezier(pts, shape.canvasDash, curves, prevResidue);
		for(var c=0; c<curves.length;++c){
			var curve = curves[c];
			if(ctx2d){
				ctx.moveTo(curve[0], curve[1]);
				ctx[api].apply(ctx, curve.slice(2));
			}else{
				ctx.push("moveTo", [curve[0], curve[1]]);
				ctx.push(api, curve.slice(2));
			}
		}
		return residue;
	}

	function toDashedLineTo(/*Array||CanvasRenderingContext2D*/ctx, /*shape.Shape*/shape, /*int*/x1, /*int*/y1, /*int*/x2, /*int*/y2, /*Object*/prevResidue){
		// summary:
		//		Builds a set of moveTo/lineTo' canvas instructions that represents a dashed stroke of the specified line geometry.

		var residue = 0, r = 0, dal = 0, tlength = bezierUtils.distance(x1, y1, x2, y2), i = 0, dash = shape.canvasDash,
			prevx = x1, prevy = y1, x, y, ctx2d = !(ctx instanceof Array);
		if(prevResidue){
			dal=prevResidue.l;
			i = prevResidue.i;
		}else{
			dal += dash[0];
		}
		while(Math.abs(1-r)>0.01){
			if(dal>tlength){
				residue = {l:dal-tlength,i:i};
				dal=tlength;
			}
			r = dal/tlength;
			x = x1 + (x2-x1)*r;
			y = y1 + (y2-y1)*r;
			if(!(i++%2)){
				if(ctx2d){
					ctx.moveTo(prevx, prevy);
					ctx.lineTo(x, y);
				}else{
					ctx.push("moveTo", [prevx, prevy]);
					ctx.push("lineTo", [x, y]);
				}
			}
			prevx = x;
			prevy = y;
			dal += dash[i%dash.length];
		}
		return residue;
	}

	canvas.Shape = declare("dojox.gfx.canvas.Shape", gs.Shape, {
		_render: function(/* Object */ ctx){
			// summary:
			//		render the shape
			ctx.save();
			this._renderTransform(ctx);
			this._renderClip(ctx);
			this._renderShape(ctx);
			this._renderFill(ctx, true);
			this._renderStroke(ctx, true);
			ctx.restore();
		},
		_renderClip: function(ctx){
			if (this.canvasClip){
				this.canvasClip.render(ctx);
				ctx.clip();
			}
		},
		_renderTransform: function(/* Object */ ctx){
			if("canvasTransform" in this){
				var t = this.canvasTransform;
				ctx.translate(t.dx, t.dy);
				ctx.rotate(t.angle2);
				ctx.scale(t.sx, t.sy);
				ctx.rotate(t.angle1);
				// The future implementation when vendors catch up with the spec:
				// var t = this.matrix;
				// ctx.transform(t.xx, t.yx, t.xy, t.yy, t.dx, t.dy);
			}
		},
		_renderShape: function(/* Object */ ctx){
			// nothing
		},
		_renderFill: function(/* Object */ ctx, /* Boolean */ apply){
			if("canvasFill" in this){
				var fs = this.fillStyle;
				if("canvasFillImage" in this){
					var w = fs.width, h = fs.height,
						iw = this.canvasFillImage.width, ih = this.canvasFillImage.height,
						// let's match the svg default behavior wrt. aspect ratio: xMidYMid meet
						sx = w == iw ? 1 : w / iw,
						sy = h == ih ? 1 : h / ih,
						s = Math.min(sx,sy), //meet->math.min , slice->math.max
						dx = (w - s * iw)/2,
						dy = (h - s * ih)/2;
					// the buffer used to scaled the image
					pattrnbuffer.width = w; pattrnbuffer.height = h;
					var copyctx = pattrnbuffer.getContext("2d");
					copyctx.clearRect(0, 0, w, h);
					copyctx.drawImage(this.canvasFillImage, 0, 0, iw, ih, dx, dy, s*iw, s*ih);
					this.canvasFill = ctx.createPattern(pattrnbuffer, "repeat");
					delete this.canvasFillImage;
				}
				ctx.fillStyle = this.canvasFill;
				if(apply){
					// offset the pattern
					if (fs.type==="pattern" && (fs.x !== 0 || fs.y !== 0)) {
						ctx.translate(fs.x,fs.y);
					}
					ctx.fill();
				}
			}else{
				ctx.fillStyle = "rgba(0,0,0,0.0)";
			}
		},
		_renderStroke: function(/* Object */ ctx, /* Boolean */ apply){
			var s = this.strokeStyle;
			if(s){
				ctx.strokeStyle = s.color.toString();
				ctx.lineWidth = s.width;
				ctx.lineCap = s.cap;
				if(typeof s.join == "number"){
					ctx.lineJoin = "miter";
					ctx.miterLimit = s.join;
				}else{
					ctx.lineJoin = s.join;
				}
				if(this.canvasDash){
					if(hasNativeDash){
						ctx.setLineDash(this.canvasDash);
						if(apply){ ctx.stroke(); }
					}else{
						this._renderDashedStroke(ctx, apply);
					}
				}else{
					if(apply){ ctx.stroke(); }
				}
			}else if(!apply){
				ctx.strokeStyle = "rgba(0,0,0,0.0)";
			}
		},
		_renderDashedStroke: function(ctx, apply){},

		// events are not implemented
		getEventSource: function(){ return null; },
		on:				function(){},
		connect:		function(){},
		disconnect:		function(){},

		canvasClip:null,
		setClip: function(/*Object*/clip){
			this.inherited(arguments);
			var clipType = clip ? "width" in clip ? "rect" :
							"cx" in clip ? "ellipse" :
							"points" in clip ? "polyline" : "d" in clip ? "path" : null : null;
			if(clip && !clipType){
				return this;
			}
			this.canvasClip = clip ? makeClip(clipType, clip) : null;
			if(this.parent){this.parent._makeDirty();}
			return this;
		}
	});

	var makeClip = function(clipType, geometry){
		switch(clipType){
			case "ellipse":
				return {
					canvasEllipse: makeEllipse({shape:geometry}),
					render: function(ctx){return canvas.Ellipse.prototype._renderShape.call(this, ctx);}
				};
			case "rect":
				return {
					shape: lang.delegate(geometry,{r:0}),
					render: function(ctx){return canvas.Rect.prototype._renderShape.call(this, ctx);}
				};
			case "path":
				return {
					canvasPath: makeClipPath(geometry),
					render: function(ctx){this.canvasPath._renderShape(ctx);}
				};
			case "polyline":
				return {
					canvasPolyline: geometry.points,
					render: function(ctx){return canvas.Polyline.prototype._renderShape.call(this, ctx);}
				};
		}
		return null;
	};

	var makeClipPath = function(geo){
		var p = new dojox.gfx.canvas.Path();
		p.canvasPath = [];
		p._setPath(geo.d);
		return p;
	};

	var modifyMethod = function(shape, method, extra){
		var old = shape.prototype[method];
		shape.prototype[method] = extra ?
			function(){
				if(this.parent){this.parent._makeDirty();}
				old.apply(this, arguments);
				extra.call(this);
				return this;
			} :
			function(){
				if(this.parent){this.parent._makeDirty();}
				return old.apply(this, arguments);
			};
	};

	modifyMethod(canvas.Shape, "setTransform",
		function(){
			// prepare Canvas-specific structures
			if(this.matrix){
				this.canvasTransform = g.decompose(this.matrix);
			}else{
				delete this.canvasTransform;
			}
		});

	modifyMethod(canvas.Shape, "setFill",
		function(){
			// prepare Canvas-specific structures
			var fs = this.fillStyle, f;
			if(fs){
				if(typeof(fs) == "object" && "type" in fs){
					var ctx = this.surface.rawNode.getContext("2d");
					switch(fs.type){
						case "linear":
						case "radial":
							f = fs.type == "linear" ?
								ctx.createLinearGradient(fs.x1, fs.y1, fs.x2, fs.y2) :
								ctx.createRadialGradient(fs.cx, fs.cy, 0, fs.cx, fs.cy, fs.r);
							arr.forEach(fs.colors, function(step){
								f.addColorStop(step.offset, g.normalizeColor(step.color).toString());
							});
							break;
						case "pattern":
							if (!pattrnbuffer) {
								pattrnbuffer = document.createElement("canvas");
							}
							// no need to scale the image since the canvas.createPattern uses
							// the original image data and not the scaled ones (see spec.)
							// the scaling needs to be done at rendering time in a context buffer
							var img =new Image();
							this.surface.downloadImage(img, fs.src);
							this.canvasFillImage = img;
					}
				}else{
					// Set fill color using CSS RGBA func style
					f = fs.toString();
				}
				this.canvasFill = f;
			}else{
				delete this.canvasFill;
			}
		});

	modifyMethod(canvas.Shape, "setStroke",
		function(){
			var st = this.strokeStyle;
			if(st){
				var da = this.strokeStyle.style.toLowerCase();
				if(da in dasharray){
					da = dasharray[da];
				}
				if(da instanceof Array){
					da = da.slice();
					this.canvasDash = da;
					var i;
					for(i = 0; i < da.length; ++i){
						da[i] *= st.width;
					}
					if(st.cap != "butt"){
						for(i = 0; i < da.length; i += 2){
							da[i] -= st.width;
							if(da[i] < 1){ da[i] = 1; }
						}
						for(i = 1; i < da.length; i += 2){
							da[i] += st.width;
						}
					}
				}else{
					delete this.canvasDash;
				}
			}else{
				delete this.canvasDash;
			}
			this._needsDash = !hasNativeDash && !!this.canvasDash;
		});

	modifyMethod(canvas.Shape, "setShape");

	canvas.Group = declare("dojox.gfx.canvas.Group", canvas.Shape, {
		// summary:
		//		a group shape (Canvas), which can be used
		//		to logically group shapes (e.g, to propagate matricies)
		constructor: function(){
			gs.Container._init.call(this);
		},
		_render: function(/* Object */ ctx){
			// summary:
			//		render the group
			ctx.save();
			this._renderTransform(ctx);
			this._renderClip(ctx);
			for(var i = 0; i < this.children.length; ++i){
				this.children[i]._render(ctx);
			}
			ctx.restore();
		},
		destroy: function(){
			// summary:
			//		Releases all internal resources owned by this shape. Once this method has been called,
			//		the instance is considered disposed and should not be used anymore.

			// don't call canvas impl to avoid makeDirty'
			gs.Container.clear.call(this, true);
			// avoid this.inherited
			canvas.Shape.prototype.destroy.apply(this, arguments);
		}
	});



	canvas.Rect = declare("dojox.gfx.canvas.Rect", [canvas.Shape, gs.Rect], {
		// summary:
		//		a rectangle shape (Canvas)
		_renderShape: function(/* Object */ ctx){
			var s = this.shape, r = Math.min(s.r, s.height / 2, s.width / 2),
				xl = s.x, xr = xl + s.width, yt = s.y, yb = yt + s.height,
				xl2 = xl + r, xr2 = xr - r, yt2 = yt + r, yb2 = yb - r;
			ctx.beginPath();
			ctx.moveTo(xl2, yt);
			if(r){
				ctx.arc(xr2, yt2, r, -halfPI, 0, false);
				ctx.arc(xr2, yb2, r, 0, halfPI, false);
				ctx.arc(xl2, yb2, r, halfPI, pi, false);
				ctx.arc(xl2, yt2, r, pi, pi + halfPI, false);
			}else{
				ctx.lineTo(xr2, yt);
				ctx.lineTo(xr, yb2);
				ctx.lineTo(xl2, yb);
				ctx.lineTo(xl, yt2);
			}
			ctx.closePath();
		},
		_renderDashedStroke: function(ctx, apply){
			var s = this.shape, residue, r = Math.min(s.r, s.height / 2, s.width / 2),
				xl = s.x, xr = xl + s.width, yt = s.y, yb = yt + s.height,
				xl2 = xl + r, xr2 = xr - r, yt2 = yt + r, yb2 = yb - r;
			if(r){
				ctx.beginPath();
				residue = toDashedLineTo(ctx, this, xl2, yt, xr2, yt);
				if(apply) ctx.stroke();
				residue = drawDashedArc(ctx, this.canvasDash, xr2, yt2, r, -halfPI, 0, false, apply, residue);
				ctx.beginPath();
				residue = toDashedLineTo(ctx, this, xr, yt2, xr, yb2, residue);
				if(apply) ctx.stroke();
				residue = drawDashedArc(ctx, this.canvasDash, xr2, yb2, r, 0, halfPI, false, apply, residue);
				ctx.beginPath();
				residue = toDashedLineTo(ctx, this, xr2, yb, xl2, yb, residue);
				if(apply) ctx.stroke();
				residue = drawDashedArc(ctx, this.canvasDash, xl2, yb2, r, halfPI, pi, false, apply, residue);
				ctx.beginPath();
				residue = toDashedLineTo(ctx, this, xl, yb2, xl, yt2,residue);
				if(apply) ctx.stroke();
				drawDashedArc(ctx, this.canvasDash, xl2, yt2, r, pi, pi + halfPI, false, apply, residue);
			}else{
				ctx.beginPath();
				residue = toDashedLineTo(ctx, this, xl2, yt, xr2, yt);
				residue = toDashedLineTo(ctx, this, xr2, yt, xr, yb2, residue);
				residue = toDashedLineTo(ctx, this, xr, yb2, xl2, yb, residue);
				toDashedLineTo(ctx, this, xl2, yb, xl, yt2, residue);
				if(apply) ctx.stroke();
			}
		}
	});

	var bezierCircle = [];
	(function(){
		var u = ga.curvePI4;
		bezierCircle.push(u.s, u.c1, u.c2, u.e);
		for(var a = 45; a < 360; a += 45){
			var r = m.rotateg(a);
			bezierCircle.push(mp(r, u.c1), mp(r, u.c2), mp(r, u.e));
		}
	})();

	var makeEllipse = function(shape){
		// prepare Canvas-specific structures
		var t, c1, c2, r = [], s = shape.shape,
			M = m.normalize([m.translate(s.cx, s.cy), m.scale(s.rx, s.ry)]);
		t = mp(M, bezierCircle[0]);
		r.push([t.x, t.y]);
		for(var i = 1; i < bezierCircle.length; i += 3){
			c1 = mp(M, bezierCircle[i]);
			c2 = mp(M, bezierCircle[i + 1]);
			t  = mp(M, bezierCircle[i + 2]);
			r.push([c1.x, c1.y, c2.x, c2.y, t.x, t.y]);
		}
		if(shape._needsDash){
			var points = [], p1 = r[0];
			for(i = 1; i < r.length; ++i){
				var curves = [];
				splitToDashedBezier(p1.concat(r[i]), shape.canvasDash, curves);
				p1 = [r[i][4],r[i][5]];
				points.push(curves);
			}
			shape._dashedPoints = points;
		}
		return r;
	};

	canvas.Ellipse = declare("dojox.gfx.canvas.Ellipse", [canvas.Shape, gs.Ellipse], {
		// summary:
		//		an ellipse shape (Canvas)
		setShape: function(){
			this.inherited(arguments);
			this.canvasEllipse = makeEllipse(this);
			return this;
		},
		setStroke: function(){
			this.inherited(arguments);
			if(!hasNativeDash){
				this.canvasEllipse = makeEllipse(this);
			}
			return this;
		},
		_renderShape: function(/* Object */ ctx){
			var r = this.canvasEllipse, i;
			ctx.beginPath();
			ctx.moveTo.apply(ctx, r[0]);
			for(i = 1; i < r.length; ++i){
				ctx.bezierCurveTo.apply(ctx, r[i]);
			}
			ctx.closePath();
		},
		_renderDashedStroke: function(ctx, apply){
			var r = this._dashedPoints;
			ctx.beginPath();
			for(var i = 0; i < r.length; ++i){
				var curves = r[i];
				for(var j=0;j<curves.length;++j){
					var curve = curves[j];
					ctx.moveTo(curve[0], curve[1]);
					ctx.bezierCurveTo(curve[2],curve[3],curve[4],curve[5],curve[6],curve[7]);
				}
			}
			if(apply) ctx.stroke();
		}
	});

	canvas.Circle = declare("dojox.gfx.canvas.Circle", [canvas.Shape, gs.Circle], {
		// summary:
		//		a circle shape (Canvas)
		_renderShape: function(/* Object */ ctx){
			var s = this.shape;
			ctx.beginPath();
			ctx.arc(s.cx, s.cy, s.r, 0, twoPI, 1);
		},
		_renderDashedStroke: function(ctx, apply){
			var s = this.shape;
			var startAngle = 0, angle, l = this.canvasDash.length; i=0;
			while(startAngle < twoPI){
				angle = this.canvasDash[i%l]/s.r;
				if(!(i%2)){
					ctx.beginPath();
					ctx.arc(s.cx, s.cy, s.r, startAngle, startAngle+angle, 0);
					if(apply) ctx.stroke();
				}
				startAngle+=angle;
				++i;
			}
		}
	});

	canvas.Line = declare("dojox.gfx.canvas.Line", [canvas.Shape, gs.Line], {
		// summary:
		//		a line shape (Canvas)
		_renderShape: function(/* Object */ ctx){
			var s = this.shape;
			ctx.beginPath();
			ctx.moveTo(s.x1, s.y1);
			ctx.lineTo(s.x2, s.y2);
		},
		_renderDashedStroke: function(ctx, apply){
			var s = this.shape;
			ctx.beginPath();
			toDashedLineTo(ctx, this, s.x1, s.y1, s.x2, s.y2);
			if(apply) ctx.stroke();
		}
	});

	canvas.Polyline = declare("dojox.gfx.canvas.Polyline", [canvas.Shape, gs.Polyline], {
		// summary:
		//		a polyline/polygon shape (Canvas)
		setShape: function(){
			this.inherited(arguments);
			var p = this.shape.points, f = p[0], r, c, i;
			this.bbox = null;
			// normalize this.shape.points as array of points: [{x,y}, {x,y}, ...]
			this._normalizePoints();
			// after _normalizePoints, if shape.points was [x1,y1,x2,y2,..], shape.points references a new array
			// and p references the original points array
			// prepare Canvas-specific structures, if needed
			if(p.length){
				if(typeof f == "number"){ // already in the canvas format [x1,y1,x2,y2,...]
					r = p;
				}else{ // convert into canvas-specific format
					r = [];
					for(i=0; i < p.length; ++i){
						c = p[i];
						r.push(c.x, c.y);
					}
				}
			}else{
				r = [];
			}
			this.canvasPolyline = r;
			return this;
		},
		_renderShape: function(/* Object */ ctx){
			var p = this.canvasPolyline;
			if(p.length){
				ctx.beginPath();
				ctx.moveTo(p[0], p[1]);
				for(var i = 2; i < p.length; i += 2){
					ctx.lineTo(p[i], p[i + 1]);
				}
			}
		},
		_renderDashedStroke: function(ctx, apply){
			var p = this.canvasPolyline, residue = 0;
			ctx.beginPath();
			for(var i = 0; i < p.length; i += 2){
				residue = toDashedLineTo(ctx, this, p[i], p[i + 1], p[i + 2], p[i + 3], residue);
			}
			if(apply) ctx.stroke();
		}
	});

	canvas.Image = declare("dojox.gfx.canvas.Image", [canvas.Shape, gs.Image], {
		// summary:
		//		an image shape (Canvas)
		setShape: function(){
			this.inherited(arguments);
			// prepare Canvas-specific structures
			var img = new Image();
			this.surface.downloadImage(img, this.shape.src);
			this.canvasImage = img;
			return this;
		},
		_renderShape: function(/* Object */ ctx){
			var s = this.shape;
			ctx.drawImage(this.canvasImage, s.x, s.y, s.width, s.height);
		}
	});

	canvas.Text = declare("dojox.gfx.canvas.Text", [canvas.Shape, gs.Text], {
		_setFont:function(){
			if(this.fontStyle){
				this.canvasFont = g.makeFontString(this.fontStyle);
			}else{
				delete this.canvasFont;
			}
		},

		getTextWidth: function(){
			// summary:
			//		get the text width in pixels
			var s = this.shape, w = 0, ctx;
			if(s.text){
				ctx = this.surface.rawNode.getContext("2d");
				ctx.save();
				this._renderTransform(ctx);
				this._renderFill(ctx, false);
				this._renderStroke(ctx, false);
				if (this.canvasFont)
					ctx.font = this.canvasFont;
				w = ctx.measureText(s.text).width;
				ctx.restore();
			}
			return w;
		},

		// override to apply first fill and stroke (
		// the base implementation is for path-based shape that needs to first define the path then to fill/stroke it.
		// Here, we need the fillstyle or strokestyle to be set before calling fillText/strokeText.
		_render: function(/* Object */ctx){
			// summary:
			//		render the shape
			// ctx: Object
			//		the drawing context.
			ctx.save();
			this._renderTransform(ctx);
			this._renderFill(ctx, false);
			this._renderStroke(ctx, false);
			this._renderShape(ctx);
			ctx.restore();
		},

		_renderShape: function(ctx){
			// summary:
			//		a text shape (Canvas)
			// ctx: Object
			//		the drawing context.
			var ta, s = this.shape;
			if(!s.text){
				return;
			}
			// text align
			ta = s.align === 'middle' ? 'center' : s.align;
			ctx.textAlign = ta;
			if(this.canvasFont){
				ctx.font = this.canvasFont;
			}
			if(this.canvasFill){
				ctx.fillText(s.text, s.x, s.y);
			}
			if(this.strokeStyle){
				ctx.beginPath(); // fix bug in FF3.6. Fixed in FF4b8
				ctx.strokeText(s.text, s.x, s.y);
				ctx.closePath();
			}
		}
	});
	modifyMethod(canvas.Text, "setFont");

	if(!hasFillText){
		canvas.Text.extend({
			getTextWidth: function(){
				return 0;
			},
			getBoundingBox: function(){
				return null;
			},
			_renderShape: function(){
			}
		});
	}

	var pathRenderers = {
			M: "_moveToA", m: "_moveToR",
			L: "_lineToA", l: "_lineToR",
			H: "_hLineToA", h: "_hLineToR",
			V: "_vLineToA", v: "_vLineToR",
			C: "_curveToA", c: "_curveToR",
			S: "_smoothCurveToA", s: "_smoothCurveToR",
			Q: "_qCurveToA", q: "_qCurveToR",
			T: "_qSmoothCurveToA", t: "_qSmoothCurveToR",
			A: "_arcTo", a: "_arcTo",
			Z: "_closePath", z: "_closePath"
		};


	canvas.Path = declare("dojox.gfx.canvas.Path", [canvas.Shape, pathLib.Path], {
		// summary:
		//		a path shape (Canvas)
		constructor: function(){
			this.lastControl = {};
		},
		setShape: function(){
			this.canvasPath = [];
			this._dashedPath= [];
			return this.inherited(arguments);
		},
		setStroke:function(){
			this.inherited(arguments);
			if(!hasNativeDash){
				this.segmented = false;
				this._confirmSegmented();
			}
			return this;
		},
		_setPath: function(){
			this._dashResidue = null;
			this.inherited(arguments);
		},
		_updateWithSegment: function(segment){
			var last = lang.clone(this.last);
			this[pathRenderers[segment.action]](this.canvasPath, segment.action, segment.args, this._needsDash ? this._dashedPath : null);
			this.last = last;
			this.inherited(arguments);
		},
		_renderShape: function(/* Object */ ctx){
			var r = this.canvasPath;
			ctx.beginPath();
			for(var i = 0; i < r.length; i += 2){
				ctx[r[i]].apply(ctx, r[i + 1]);
			}
		},
		_renderDashedStroke: hasNativeDash ? function(){} : function(ctx, apply){
			var r = this._dashedPath;
			ctx.beginPath();
			for(var i = 0; i < r.length; i += 2){
				ctx[r[i]].apply(ctx, r[i + 1]);
			}
			if(apply) ctx.stroke();
		},
		_moveToA: function(result, action, args, doDash){
			result.push("moveTo", [args[0], args[1]]);
			if(doDash) doDash.push("moveTo", [args[0], args[1]]);
			for(var i = 2; i < args.length; i += 2){
				result.push("lineTo", [args[i], args[i + 1]]);
				if(doDash)
					this._dashResidue = toDashedLineTo(doDash, this, args[i - 2], args[i - 1], args[i], args[i + 1], this._dashResidue);
			}
			this.last.x = args[args.length - 2];
			this.last.y = args[args.length - 1];
			this.lastControl = {};
		},
		_moveToR: function(result, action, args, doDash){
			var pts;
			if("x" in this.last){
				pts = [this.last.x += args[0], this.last.y += args[1]];
				result.push("moveTo", pts);
				if(doDash) doDash.push("moveTo", pts);
			}else{
				pts = [this.last.x = args[0], this.last.y = args[1]];
				result.push("moveTo", pts);
				if(doDash) doDash.push("moveTo", pts);
			}
			for(var i = 2; i < args.length; i += 2){
				result.push("lineTo", [this.last.x += args[i], this.last.y += args[i + 1]]);
				if(doDash)
					this._dashResidue = toDashedLineTo(doDash, this, doDash[doDash.length - 1][0], doDash[doDash.length - 1][1], this.last.x, this.last.y, this._dashResidue);
			}
			this.lastControl = {};
		},
		_lineToA: function(result, action, args, doDash){
			for(var i = 0; i < args.length; i += 2){
				if(doDash)
					this._dashResidue = toDashedLineTo(doDash, this, this.last.x, this.last.y, args[i], args[i + 1], this._dashResidue);
				result.push("lineTo", [args[i], args[i + 1]]);
			}
			this.last.x = args[args.length - 2];
			this.last.y = args[args.length - 1];
			this.lastControl = {};
		},
		_lineToR: function(result, action, args, doDash){
			for(var i = 0; i < args.length; i += 2){
				result.push("lineTo", [this.last.x += args[i], this.last.y += args[i + 1]]);
				if(doDash)
					this._dashResidue = toDashedLineTo(doDash, this, doDash[doDash.length - 1][0], doDash[doDash.length - 1][1], this.last.x, this.last.y, this._dashResidue);
			}
			this.lastControl = {};
		},
		_hLineToA: function(result, action, args, doDash){
			for(var i = 0; i < args.length; ++i){
				result.push("lineTo", [args[i], this.last.y]);
				if(doDash)
					this._dashResidue = toDashedLineTo(doDash, this, doDash[doDash.length - 1][0], doDash[doDash.length - 1][1], args[i], this.last.y, this._dashResidue);
			}
			this.last.x = args[args.length - 1];
			this.lastControl = {};
		},
		_hLineToR: function(result, action, args, doDash){
			for(var i = 0; i < args.length; ++i){
				result.push("lineTo", [this.last.x += args[i], this.last.y]);
				if(doDash)
					this._dashResidue = toDashedLineTo(doDash, this, doDash[doDash.length - 1][0], doDash[doDash.length - 1][1], this.last.x, this.last.y, this._dashResidue);
			}
			this.lastControl = {};
		},
		_vLineToA: function(result, action, args, doDash){
			for(var i = 0; i < args.length; ++i){
				result.push("lineTo", [this.last.x, args[i]]);
				if(doDash)
					this._dashResidue = toDashedLineTo(doDash, this, doDash[doDash.length - 1][0], doDash[doDash.length - 1][1], this.last.x, args[i], this._dashResidue);
			}
			this.last.y = args[args.length - 1];
			this.lastControl = {};
		},
		_vLineToR: function(result, action, args, doDash){
			for(var i = 0; i < args.length; ++i){
				result.push("lineTo", [this.last.x, this.last.y += args[i]]);
				if(doDash)
					this._dashResidue = toDashedLineTo(doDash, this, doDash[doDash.length - 1][0], doDash[doDash.length - 1][1], this.last.x, this.last.y, this._dashResidue);
			}
			this.lastControl = {};
		},
		_curveToA: function(result, action, args, doDash){
			for(var i = 0; i < args.length; i += 6){
				result.push("bezierCurveTo", args.slice(i, i + 6));
				if(doDash)
					this._dashResidue = toDashedCurveTo(doDash, this, result[result.length-1], this._dashResidue);
			}
			this.last.x = args[args.length - 2];
			this.last.y = args[args.length - 1];
			this.lastControl.x = args[args.length - 4];
			this.lastControl.y = args[args.length - 3];
			this.lastControl.type = "C";
		},
		_curveToR: function(result, action, args, doDash){
			for(var i = 0; i < args.length; i += 6){
				result.push("bezierCurveTo", [
					this.last.x + args[i],
					this.last.y + args[i + 1],
					this.lastControl.x = this.last.x + args[i + 2],
					this.lastControl.y = this.last.y + args[i + 3],
					this.last.x + args[i + 4],
					this.last.y + args[i + 5]
				]);
				if(doDash)
					this._dashResidue = toDashedCurveTo(doDash, this, result[result.length-1], this._dashResidue);
				this.last.x += args[i + 4];
				this.last.y += args[i + 5];
			}
			this.lastControl.type = "C";
		},
		_smoothCurveToA: function(result, action, args, doDash){
			for(var i = 0; i < args.length; i += 4){
				var valid = this.lastControl.type == "C";
				result.push("bezierCurveTo", [
					valid ? 2 * this.last.x - this.lastControl.x : this.last.x,
					valid ? 2 * this.last.y - this.lastControl.y : this.last.y,
					args[i],
					args[i + 1],
					args[i + 2],
					args[i + 3]
				]);
				if(doDash)
					this._dashResidue = toDashedCurveTo(doDash, this, result[result.length-1], this._dashResidue);
				this.lastControl.x = args[i];
				this.lastControl.y = args[i + 1];
				this.lastControl.type = "C";
			}
			this.last.x = args[args.length - 2];
			this.last.y = args[args.length - 1];
		},
		_smoothCurveToR: function(result, action, args, doDash){
			for(var i = 0; i < args.length; i += 4){
				var valid = this.lastControl.type == "C";
				result.push("bezierCurveTo", [
					valid ? 2 * this.last.x - this.lastControl.x : this.last.x,
					valid ? 2 * this.last.y - this.lastControl.y : this.last.y,
					this.last.x + args[i],
					this.last.y + args[i + 1],
					this.last.x + args[i + 2],
					this.last.y + args[i + 3]
				]);
				if(doDash)
					this._dashResidue = toDashedCurveTo(doDash, this, result[result.length-1], this._dashResidue);
				this.lastControl.x = this.last.x + args[i];
				this.lastControl.y = this.last.y + args[i + 1];
				this.lastControl.type = "C";
				this.last.x += args[i + 2];
				this.last.y += args[i + 3];
			}
		},
		_qCurveToA: function(result, action, args, doDash){
			for(var i = 0; i < args.length; i += 4){
				result.push("quadraticCurveTo", args.slice(i, i + 4));
			}
			if(doDash)
				this._dashResidue = toDashedCurveTo(doDash, this, result[result.length - 1], this._dashResidue);
			this.last.x = args[args.length - 2];
			this.last.y = args[args.length - 1];
			this.lastControl.x = args[args.length - 4];
			this.lastControl.y = args[args.length - 3];
			this.lastControl.type = "Q";
		},
		_qCurveToR: function(result, action, args, doDash){
			for(var i = 0; i < args.length; i += 4){
				result.push("quadraticCurveTo", [
					this.lastControl.x = this.last.x + args[i],
					this.lastControl.y = this.last.y + args[i + 1],
					this.last.x + args[i + 2],
					this.last.y + args[i + 3]
				]);
				if(doDash)
					this._dashResidue = toDashedCurveTo(doDash, this, result[result.length - 1], this._dashResidue);
				this.last.x += args[i + 2];
				this.last.y += args[i + 3];
			}
			this.lastControl.type = "Q";
		},
		_qSmoothCurveToA: function(result, action, args, doDash){
			for(var i = 0; i < args.length; i += 2){
				var valid = this.lastControl.type == "Q";
				result.push("quadraticCurveTo", [
					this.lastControl.x = valid ? 2 * this.last.x - this.lastControl.x : this.last.x,
					this.lastControl.y = valid ? 2 * this.last.y - this.lastControl.y : this.last.y,
					args[i],
					args[i + 1]
				]);
				if(doDash)
					this._dashResidue = toDashedCurveTo(doDash, this, result[result.length - 1], this._dashResidue);
				this.lastControl.type = "Q";
			}
			this.last.x = args[args.length - 2];
			this.last.y = args[args.length - 1];
		},
		_qSmoothCurveToR: function(result, action, args, doDash){
			for(var i = 0; i < args.length; i += 2){
				var valid = this.lastControl.type == "Q";
				result.push("quadraticCurveTo", [
					this.lastControl.x = valid ? 2 * this.last.x - this.lastControl.x : this.last.x,
					this.lastControl.y = valid ? 2 * this.last.y - this.lastControl.y : this.last.y,
					this.last.x + args[i],
					this.last.y + args[i + 1]
				]);
				if(doDash)
					this._dashResidue = toDashedCurveTo(doDash, this, result[result.length - 1], this._dashResidue);
				this.lastControl.type = "Q";
				this.last.x += args[i];
				this.last.y += args[i + 1];
			}
		},
		_arcTo: function(result, action, args, doDash){
			var relative = action == "a";
			for(var i = 0; i < args.length; i += 7){
				var x1 = args[i + 5], y1 = args[i + 6];
				if(relative){
					x1 += this.last.x;
					y1 += this.last.y;
				}
				var arcs = ga.arcAsBezier(
					this.last, args[i], args[i + 1], args[i + 2],
					args[i + 3] ? 1 : 0, args[i + 4] ? 1 : 0,
					x1, y1
				);
				arr.forEach(arcs, function(p){
					result.push("bezierCurveTo", p);
				});
				if(doDash)
					this._dashResidue = toDashedCurveTo(doDash, this, p, this._dashResidue);
				this.last.x = x1;
				this.last.y = y1;
			}
			this.lastControl = {};
		},
		_closePath: function(result, action, args, doDash){
			result.push("closePath", []);
			if(doDash)
				this._dashResidue = toDashedLineTo(doDash, this, this.last.x, this.last.y, doDash[1][0], doDash[1][1], this._dashResidue);
			this.lastControl = {};
		}
	});
	arr.forEach(["moveTo", "lineTo", "hLineTo", "vLineTo", "curveTo",
		"smoothCurveTo", "qCurveTo", "qSmoothCurveTo", "arcTo", "closePath"],
		function(method){ modifyMethod(canvas.Path, method); }
	);

	canvas.TextPath = declare("dojox.gfx.canvas.TextPath", [canvas.Shape, pathLib.TextPath], {
		// summary:
		//		a text shape (Canvas)
		_renderShape: function(/* Object */ ctx){
			var s = this.shape;
			// nothing for the moment
		},
		_setText: function(){
			// not implemented
		},
		_setFont: function(){
			// not implemented
		}
	});

	canvas.Surface = declare("dojox.gfx.canvas.Surface", gs.Surface, {
		// summary:
		//		a surface object to be used for drawings (Canvas)
		constructor: function(){
			gs.Container._init.call(this);
			this.pendingImageCount = 0;
			this.makeDirty();
		},
		destroy: function(){
			gs.Container.clear.call(this, true); // avoid makeDirty() from canvas.Container.clear impl.
			this.inherited(arguments);
		},
		setDimensions: function(width, height){
			// summary:
			//		sets the width and height of the rawNode
			// width: String
			//		width of surface, e.g., "100px"
			// height: String
			//		height of surface, e.g., "100px"
			this.width  = g.normalizedLength(width);	// in pixels
			this.height = g.normalizedLength(height);	// in pixels
			if(!this.rawNode) return this;
			var dirty = false;
			if (this.rawNode.width != this.width){
				this.rawNode.width = this.width;
				dirty = true;
			}
			if (this.rawNode.height != this.height){
				this.rawNode.height = this.height;
				dirty = true;
			}
			if (dirty)
				this.makeDirty();
			return this;	// self
		},
		getDimensions: function(){
			// summary:
			//		returns an object with properties "width" and "height"
			return this.rawNode ? {width:  this.rawNode.width, height: this.rawNode.height} : null;	// Object
		},
		_render: function(force){
			// summary:
			//		render the all shapes
			if(!this.rawNode || (!force && this.pendingImageCount)){ return; }
			var ctx = this.rawNode.getContext("2d");
			ctx.clearRect(0, 0, this.rawNode.width, this.rawNode.height);
			this.render(ctx);
			if("pendingRender" in this){
				clearTimeout(this.pendingRender);
				delete this.pendingRender;
			}
		},
		render: function(ctx){
			// summary:
			//		Renders the gfx scene.
			// description:
			//		this method is called to render the gfx scene to the specified context.
			//		This method should not be invoked directly but should be used instead
			//		as an extension point on which user can connect to with aspect.before/aspect.after
			//		to implement pre- or post- image processing jobs on the drawing surface.
			// ctx: CanvasRenderingContext2D
			//		The surface Canvas rendering context.
			ctx.save();
			for(var i = 0; i < this.children.length; ++i){
				this.children[i]._render(ctx);
			}
			ctx.restore();
		},
		makeDirty: function(){
			// summary:
			//		internal method, which is called when we may need to redraw
			if(!this.pendingImagesCount && !("pendingRender" in this) && !this._batch){
				this.pendingRender = setTimeout(lang.hitch(this, this._render), 0);
			}
		},
		downloadImage: function(img, url){
			// summary:
			//		internal method, which starts an image download and renders, when it is ready
			// img: Image
			//		the image object
			// url: String
			//		the url of the image
			var handler = lang.hitch(this, this.onImageLoad);
			if(!this.pendingImageCount++ && "pendingRender" in this){
				clearTimeout(this.pendingRender);
				delete this.pendingRender;
			}
			img.onload  = handler;
			img.onerror = handler;
			img.onabort = handler;
			img.src = url;
		},
		onImageLoad: function(){
			if(!--this.pendingImageCount){
				this.onImagesLoaded();
				this._render();
			}
		},
		onImagesLoaded: function(){
			// summary:
			//		An extension point called when all pending images downloads have been completed.
			// description:
			//		This method is invoked when all pending images downloads have been completed, just before
			//		the gfx scene is redrawn. User can connect to this method to get notified when a
			//		gfx scene containing images is fully resolved.
		},

		// events are not implemented
		getEventSource: function(){ return null; },
		connect:		function(){},
		disconnect:		function(){},
		on:				function(){}
	});

	canvas.createSurface = function(parentNode, width, height){
		// summary:
		//		creates a surface (Canvas)
		// parentNode: Node
		//		a parent node
		// width: String
		//		width of surface, e.g., "100px"
		// height: String
		//		height of surface, e.g., "100px"

		if(!width && !height){
			var pos = domGeom.position(parentNode);
			width  = width  || pos.w;
			height = height || pos.h;
		}
		if(typeof width == "number"){
			width = width + "px";
		}
		if(typeof height == "number"){
			height = height + "px";
		}

		var s = new canvas.Surface(),
			p = dom.byId(parentNode),
			c = p.ownerDocument.createElement("canvas");

		c.width  = g.normalizedLength(width);	// in pixels
		c.height = g.normalizedLength(height);	// in pixels

		p.appendChild(c);
		s.rawNode = c;
		s._parent = p;
		s.surface = s;
		return s;	// dojox/gfx.Surface
	};

	// Extenders

	var C = gs.Container, Container = {
		openBatch: function() {
			// summary:
			//		starts a new batch, subsequent new child shapes will be held in
			//		the batch instead of appending to the container directly.
			// description:
			//		Because the canvas renderer has no DOM hierarchy, the canvas implementation differs
			//		such that it suspends the repaint requests for this container until the current batch is closed by a call to closeBatch().
			++this._batch;
			return this;
		},
		closeBatch: function() {
			// summary:
			//		submits the current batch.
			// description:
			//		On canvas, this method flushes the pending redraws queue.
			this._batch = this._batch > 0 ? --this._batch : 0;
			this._makeDirty();
			return this;
		},
		_makeDirty: function(){
			if(!this._batch){
				this.surface.makeDirty();
			}
		},
		add: function(shape){
			this._makeDirty();
			return C.add.apply(this, arguments);
		},
		remove: function(shape, silently){
			this._makeDirty();
			return C.remove.apply(this, arguments);
		},
		clear: function(){
			this._makeDirty();
			return C.clear.apply(this, arguments);
		},
		getBoundingBox: C.getBoundingBox,
		_moveChildToFront: function(shape){
			this._makeDirty();
			return C._moveChildToFront.apply(this, arguments);
		},
		_moveChildToBack: function(shape){
			this._makeDirty();
			return C._moveChildToBack.apply(this, arguments);
		}
	};

	var Creator = {
		// summary:
		//		Canvas shape creators
		createObject: function(shapeType, rawShape) {
			// summary:
			//		creates an instance of the passed shapeType class
			// shapeType: Function
			//		a class constructor to create an instance of
			// rawShape: Object
			//		properties to be passed in to the classes "setShape" method
			// overrideSize: Boolean
			//		set the size explicitly, if true
			var shape = new shapeType();
			shape.surface = this.surface;
			shape.setShape(rawShape);
			this.add(shape);
			return shape;	// dojox/gfx/shape.Shape
		}
	};

	extend(canvas.Group, Container);
	extend(canvas.Group, gs.Creator);
	extend(canvas.Group, Creator);

	extend(canvas.Surface, Container);
	extend(canvas.Surface, gs.Creator);
	extend(canvas.Surface, Creator);

	// no event support -> nothing to fix.
	canvas.fixTarget = function(event, gfxElement){
		// tags:
		//		private
		return true;
	};

	return canvas;
}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/dojox/gfx/decompose.js":
/*!*********************************************!*\
  !*** ./node_modules/dojox/gfx/decompose.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./_base */ "./node_modules/dojox/gfx/_base.js"), __webpack_require__(/*! dojo/_base/lang */ "./node_modules/dojo/_base/lang.js"), __webpack_require__(/*! ./matrix */ "./node_modules/dojox/gfx/matrix.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (g, lang, m){
	function eq(/* Number */ a, /* Number */ b){
		// summary:
		//		compare two FP numbers for equality
		return Math.abs(a - b) <= 1e-6 * (Math.abs(a) + Math.abs(b));	// Boolean
	}

	function calcFromValues(/* Number */ r1, /* Number */ m1, /* Number */ r2, /* Number */ m2){
		// summary:
		//		uses two close FP ration and their original magnitudes to approximate the result
		if(!isFinite(r1)){
			return r2;	// Number
		}else if(!isFinite(r2)){
			return r1;	// Number
		}
		m1 = Math.abs(m1); m2 = Math.abs(m2);
		return (m1 * r1 + m2 * r2) / (m1 + m2);	// Number
	}

	function transpose(matrix){
		// matrix: dojox/gfx/matrix.Matrix2D
		//		a 2D matrix-like object
		var M = new m.Matrix2D(matrix);
		return lang.mixin(M, {dx: 0, dy: 0, xy: M.yx, yx: M.xy});	// dojox/gfx/matrix.Matrix2D
	}

	function scaleSign(/* dojox/gfx/matrix.Matrix2D */ matrix){
		return (matrix.xx * matrix.yy < 0 || matrix.xy * matrix.yx > 0) ? -1 : 1;	// Number
	}

	function eigenvalueDecomposition(matrix){
		// matrix: dojox/gfx/matrix.Matrix2D
		//		a 2D matrix-like object
		var M = m.normalize(matrix),
			b = -M.xx - M.yy,
			c = M.xx * M.yy - M.xy * M.yx,
			d = Math.sqrt(b * b - 4 * c),
			l1 = -(b + (b < 0 ? -d : d)) / 2,
			l2 = c / l1,
			vx1 = M.xy / (l1 - M.xx), vy1 = 1,
			vx2 = M.xy / (l2 - M.xx), vy2 = 1;
		if(eq(l1, l2)){
			vx1 = 1, vy1 = 0, vx2 = 0, vy2 = 1;
		}
		if(!isFinite(vx1)){
			vx1 = 1, vy1 = (l1 - M.xx) / M.xy;
			if(!isFinite(vy1)){
				vx1 = (l1 - M.yy) / M.yx, vy1 = 1;
				if(!isFinite(vx1)){
					vx1 = 1, vy1 = M.yx / (l1 - M.yy);
				}
			}
		}
		if(!isFinite(vx2)){
			vx2 = 1, vy2 = (l2 - M.xx) / M.xy;
			if(!isFinite(vy2)){
				vx2 = (l2 - M.yy) / M.yx, vy2 = 1;
				if(!isFinite(vx2)){
					vx2 = 1, vy2 = M.yx / (l2 - M.yy);
				}
			}
		}
		var d1 = Math.sqrt(vx1 * vx1 + vy1 * vy1),
			d2 = Math.sqrt(vx2 * vx2 + vy2 * vy2);
		if(!isFinite(vx1 /= d1)){ vx1 = 0; }
		if(!isFinite(vy1 /= d1)){ vy1 = 0; }
		if(!isFinite(vx2 /= d2)){ vx2 = 0; }
		if(!isFinite(vy2 /= d2)){ vy2 = 0; }
		return {	// Object
			value1: l1,
			value2: l2,
			vector1: {x: vx1, y: vy1},
			vector2: {x: vx2, y: vy2}
		};
	}

	function decomposeSR(/* dojox/gfx/matrix.Matrix2D */ M, /* Object */ result){
		// summary:
		//		decomposes a matrix into [scale, rotate]; no checks are done.
		var sign = scaleSign(M),
			a = result.angle1 = (Math.atan2(M.yx, M.yy) + Math.atan2(-sign * M.xy, sign * M.xx)) / 2,
			cos = Math.cos(a), sin = Math.sin(a);
		result.sx = calcFromValues(M.xx / cos, cos, -M.xy / sin, sin);
		result.sy = calcFromValues(M.yy / cos, cos,  M.yx / sin, sin);
		return result;	// Object
	}

	function decomposeRS(/* dojox/gfx/matrix.Matrix2D */ M, /* Object */ result){
		// summary:
		//		decomposes a matrix into [rotate, scale]; no checks are done
		var sign = scaleSign(M),
			a = result.angle2 = (Math.atan2(sign * M.yx, sign * M.xx) + Math.atan2(-M.xy, M.yy)) / 2,
			cos = Math.cos(a), sin = Math.sin(a);
		result.sx = calcFromValues(M.xx / cos, cos,  M.yx / sin, sin);
		result.sy = calcFromValues(M.yy / cos, cos, -M.xy / sin, sin);
		return result;	// Object
	}

	return g.decompose = function(matrix){
		// summary:
		//		Decompose a 2D matrix into translation, scaling, and rotation components.
		// description:
		//		This function decompose a matrix into four logical components:
		//		translation, rotation, scaling, and one more rotation using SVD.
		//		The components should be applied in following order:
		//	| [translate, rotate(angle2), scale, rotate(angle1)]
		// matrix: dojox/gfx/matrix.Matrix2D
		//		a 2D matrix-like object
		var M = m.normalize(matrix),
			result = {dx: M.dx, dy: M.dy, sx: 1, sy: 1, angle1: 0, angle2: 0};
		// detect case: [scale]
		if(eq(M.xy, 0) && eq(M.yx, 0)){
			return lang.mixin(result, {sx: M.xx, sy: M.yy});	// Object
		}
		// detect case: [scale, rotate]
		if(eq(M.xx * M.yx, -M.xy * M.yy)){
			return decomposeSR(M, result);	// Object
		}
		// detect case: [rotate, scale]
		if(eq(M.xx * M.xy, -M.yx * M.yy)){
			return decomposeRS(M, result);	// Object
		}
		// do SVD
		var	MT = transpose(M),
			u  = eigenvalueDecomposition([M, MT]),
			v  = eigenvalueDecomposition([MT, M]),
			U  = new m.Matrix2D({xx: u.vector1.x, xy: u.vector2.x, yx: u.vector1.y, yy: u.vector2.y}),
			VT = new m.Matrix2D({xx: v.vector1.x, xy: v.vector1.y, yx: v.vector2.x, yy: v.vector2.y}),
			S = new m.Matrix2D([m.invert(U), M, m.invert(VT)]);
		decomposeSR(VT, result);
		S.xx *= result.sx;
		S.yy *= result.sy;
		decomposeRS(U, result);
		S.xx *= result.sx;
		S.yy *= result.sy;
		return lang.mixin(result, {sx: S.xx, sy: S.yy});	// Object
	};
}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/dojox/gfx/matrix.js":
/*!******************************************!*\
  !*** ./node_modules/dojox/gfx/matrix.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./_base */ "./node_modules/dojox/gfx/_base.js"),__webpack_require__(/*! dojo/_base/lang */ "./node_modules/dojo/_base/lang.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(g, lang){
	var m = g.matrix = {};

	// candidates for dojox.math:
	var _degToRadCache = {};
	m._degToRad = function(degree){
		return _degToRadCache[degree] || (_degToRadCache[degree] = (Math.PI * degree / 180));
	};
	m._radToDeg = function(radian){ return radian / Math.PI * 180; };

	m.Matrix2D = function(arg){
		// summary:
		//		a 2D matrix object
		// description:
		//		Normalizes a 2D matrix-like object. If arrays is passed,
		//		all objects of the array are normalized and multiplied sequentially.
		// arg: Object
		//		a 2D matrix-like object, a number, or an array of such objects
		if(arg){
			if(typeof arg == "number"){
				this.xx = this.yy = arg;
			}else if(arg instanceof Array){
				if(arg.length > 0){
					var matrix = m.normalize(arg[0]);
					// combine matrices
					for(var i = 1; i < arg.length; ++i){
						var l = matrix, r = m.normalize(arg[i]);
						matrix = new m.Matrix2D();
						matrix.xx = l.xx * r.xx + l.xy * r.yx;
						matrix.xy = l.xx * r.xy + l.xy * r.yy;
						matrix.yx = l.yx * r.xx + l.yy * r.yx;
						matrix.yy = l.yx * r.xy + l.yy * r.yy;
						matrix.dx = l.xx * r.dx + l.xy * r.dy + l.dx;
						matrix.dy = l.yx * r.dx + l.yy * r.dy + l.dy;
					}
					lang.mixin(this, matrix);
				}
			}else{
				lang.mixin(this, arg);
			}
		}
	};

	// the default (identity) matrix, which is used to fill in missing values
	lang.extend(m.Matrix2D, {xx: 1, xy: 0, yx: 0, yy: 1, dx: 0, dy: 0});

	lang.mixin(m, {
		// summary:
		//		class constants, and methods of dojox/gfx/matrix

		// matrix constants

		// identity: dojox/gfx/matrix.Matrix2D
		//		an identity matrix constant: identity * (x, y) == (x, y)
		identity: new m.Matrix2D(),

		// flipX: dojox/gfx/matrix.Matrix2D
		//		a matrix, which reflects points at x = 0 line: flipX * (x, y) == (-x, y)
		flipX:    new m.Matrix2D({xx: -1}),

		// flipY: dojox/gfx/matrix.Matrix2D
		//		a matrix, which reflects points at y = 0 line: flipY * (x, y) == (x, -y)
		flipY:    new m.Matrix2D({yy: -1}),

		// flipXY: dojox/gfx/matrix.Matrix2D
		//		a matrix, which reflects points at the origin of coordinates: flipXY * (x, y) == (-x, -y)
		flipXY:   new m.Matrix2D({xx: -1, yy: -1}),

		// matrix creators

		translate: function(a, b){
			// summary:
			//		forms a translation matrix
			// description:
			//		The resulting matrix is used to translate (move) points by specified offsets.
			// a: Number|dojox/gfx.Point
			//		an x coordinate value, or a point-like object, which specifies offsets for both dimensions
			// b: Number?
			//		a y coordinate value
			// returns: dojox/gfx/matrix.Matrix2D
			if(arguments.length > 1){
				return new m.Matrix2D({dx: a, dy: b}); // dojox/gfx/matrix.Matrix2D
			}
			// branch
			return new m.Matrix2D({dx: a.x, dy: a.y}); // dojox/gfx/matrix.Matrix2D
		},
		scale: function(a, b){
			// summary:
			//		forms a scaling matrix
			// description:
			//		The resulting matrix is used to scale (magnify) points by specified offsets.
			// a: Number|dojox/gfx.Point
			//		a scaling factor used for the x coordinate, or
			//		a uniform scaling factor used for the both coordinates, or
			//		a point-like object, which specifies scale factors for both dimensions
			// b: Number?
			//		a scaling factor used for the y coordinate
			// returns: dojox/gfx/matrix.Matrix2D
			if(arguments.length > 1){
				return new m.Matrix2D({xx: a, yy: b}); // dojox/gfx/matrix.Matrix2D
			}
			if(typeof a == "number"){
				return new m.Matrix2D({xx: a, yy: a}); // dojox/gfx/matrix.Matrix2D
			}
			return new m.Matrix2D({xx: a.x, yy: a.y}); // dojox/gfx/matrix.Matrix2D
		},
		rotate: function(angle){
			// summary:
			//		forms a rotating matrix
			// description:
			//		The resulting matrix is used to rotate points
			//		around the origin of coordinates (0, 0) by specified angle.
			// angle: Number
			//		an angle of rotation in radians (>0 for CW)
			// returns: dojox/gfx/matrix.Matrix2D
			var c = Math.cos(angle);
			var s = Math.sin(angle);
			return new m.Matrix2D({xx: c, xy: -s, yx: s, yy: c}); // dojox/gfx/matrix.Matrix2D
		},
		rotateg: function(degree){
			// summary:
			//		forms a rotating matrix
			// description:
			//		The resulting matrix is used to rotate points
			//		around the origin of coordinates (0, 0) by specified degree.
			//		See dojox/gfx/matrix.rotate() for comparison.
			// degree: Number
			//		an angle of rotation in degrees (>0 for CW)
			// returns: dojox/gfx/matrix.Matrix2D
			return m.rotate(m._degToRad(degree)); // dojox/gfx/matrix.Matrix2D
		},
		skewX: function(angle) {
			// summary:
			//		forms an x skewing matrix
			// description:
			//		The resulting matrix is used to skew points in the x dimension
			//		around the origin of coordinates (0, 0) by specified angle.
			// angle: Number
			//		a skewing angle in radians
			// returns: dojox/gfx/matrix.Matrix2D
			return new m.Matrix2D({xy: Math.tan(angle)}); // dojox/gfx/matrix.Matrix2D
		},
		skewXg: function(degree){
			// summary:
			//		forms an x skewing matrix
			// description:
			//		The resulting matrix is used to skew points in the x dimension
			//		around the origin of coordinates (0, 0) by specified degree.
			//		See dojox/gfx/matrix.skewX() for comparison.
			// degree: Number
			//		a skewing angle in degrees
			// returns: dojox/gfx/matrix.Matrix2D
			return m.skewX(m._degToRad(degree)); // dojox/gfx/matrix.Matrix2D
		},
		skewY: function(angle){
			// summary:
			//		forms a y skewing matrix
			// description:
			//		The resulting matrix is used to skew points in the y dimension
			//		around the origin of coordinates (0, 0) by specified angle.
			// angle: Number
			//		a skewing angle in radians
			// returns: dojox/gfx/matrix.Matrix2D
			return new m.Matrix2D({yx: Math.tan(angle)}); // dojox/gfx/matrix.Matrix2D
		},
		skewYg: function(degree){
			// summary:
			//		forms a y skewing matrix
			// description:
			//		The resulting matrix is used to skew points in the y dimension
			//		around the origin of coordinates (0, 0) by specified degree.
			//		See dojox/gfx/matrix.skewY() for comparison.
			// degree: Number
			//		a skewing angle in degrees
			// returns: dojox/gfx/matrix.Matrix2D
			return m.skewY(m._degToRad(degree)); // dojox/gfx/matrix.Matrix2D
		},
		reflect: function(a, b){
			// summary:
			//		forms a reflection matrix
			// description:
			//		The resulting matrix is used to reflect points around a vector,
			//		which goes through the origin.
			// a: dojox/gfx.Point|Number
			//		a point-like object, which specifies a vector of reflection, or an X value
			// b: Number?
			//		a Y value
			// returns: dojox/gfx/matrix.Matrix2D
			if(arguments.length == 1){
				b = a.y;
				a = a.x;
			}
			// make a unit vector
			var a2 = a * a, b2 = b * b, n2 = a2 + b2, xy = 2 * a * b / n2;
			return new m.Matrix2D({xx: 2 * a2 / n2 - 1, xy: xy, yx: xy, yy: 2 * b2 / n2 - 1}); // dojox/gfx/matrix.Matrix2D
		},
		project: function(a, b){
			// summary:
			//		forms an orthogonal projection matrix
			// description:
			//		The resulting matrix is used to project points orthogonally on a vector,
			//		which goes through the origin.
			// a: dojox/gfx.Point|Number
			//		a point-like object, which specifies a vector of projection, or
			//		an x coordinate value
			// b: Number?
			//		a y coordinate value
			// returns: dojox/gfx/matrix.Matrix2D
			if(arguments.length == 1){
				b = a.y;
				a = a.x;
			}
			// make a unit vector
			var a2 = a * a, b2 = b * b, n2 = a2 + b2, xy = a * b / n2;
			return new m.Matrix2D({xx: a2 / n2, xy: xy, yx: xy, yy: b2 / n2}); // dojox/gfx/matrix.Matrix2D
		},

		// ensure matrix 2D conformance
		normalize: function(matrix){
			// summary:
			//		converts an object to a matrix, if necessary
			// description:
			//		Converts any 2D matrix-like object or an array of
			//		such objects to a valid dojox/gfx/matrix.Matrix2D object.
			// matrix: Object
			//		an object, which is converted to a matrix, if necessary
			// returns: dojox/gfx/matrix.Matrix2D
			return (matrix instanceof m.Matrix2D) ? matrix : new m.Matrix2D(matrix); // dojox/gfx/matrix.Matrix2D
		},

		// common operations

		isIdentity: function(matrix){
			// summary:
			//		returns whether the specified matrix is the identity.
			// matrix: dojox/gfx/matrix.Matrix2D
			//		a 2D matrix object to be tested
			// returns: Boolean
			return matrix.xx == 1 && matrix.xy == 0 && matrix.yx == 0 && matrix.yy == 1 && matrix.dx == 0 && matrix.dy == 0; // Boolean
		},
		clone: function(matrix){
			// summary:
			//		creates a copy of a 2D matrix
			// matrix: dojox/gfx/matrix.Matrix2D
			//		a 2D matrix-like object to be cloned
			// returns: dojox/gfx/matrix.Matrix2D
			var obj = new m.Matrix2D();
			for(var i in matrix){
				if(typeof(matrix[i]) == "number" && typeof(obj[i]) == "number" && obj[i] != matrix[i]) obj[i] = matrix[i];
			}
			return obj; // dojox/gfx/matrix.Matrix2D
		},
		invert: function(matrix){
			// summary:
			//		inverts a 2D matrix
			// matrix: dojox/gfx/matrix.Matrix2D
			//		a 2D matrix-like object to be inverted
			// returns: dojox/gfx/matrix.Matrix2D
			var M = m.normalize(matrix),
				D = M.xx * M.yy - M.xy * M.yx;
				M = new m.Matrix2D({
					xx: M.yy/D, xy: -M.xy/D,
					yx: -M.yx/D, yy: M.xx/D,
					dx: (M.xy * M.dy - M.yy * M.dx) / D,
					dy: (M.yx * M.dx - M.xx * M.dy) / D
				});
			return M; // dojox/gfx/matrix.Matrix2D
		},
		_multiplyPoint: function(matrix, x, y){
			// summary:
			//		applies a matrix to a point
			// matrix: dojox/gfx/matrix.Matrix2D
			//		a 2D matrix object to be applied
			// x: Number
			//		an x coordinate of a point
			// y: Number
			//		a y coordinate of a point
			// returns: dojox/gfx.Point
			return {x: matrix.xx * x + matrix.xy * y + matrix.dx, y: matrix.yx * x + matrix.yy * y + matrix.dy}; // dojox/gfx.Point
		},
		multiplyPoint: function(matrix, /* Number||Point */ a, /* Number? */ b){
			// summary:
			//		applies a matrix to a point
			// matrix: dojox/gfx/matrix.Matrix2D
			//		a 2D matrix object to be applied
			// a: Number|dojox/gfx.Point
			//		an x coordinate of a point, or a point
			// b: Number?
			//		a y coordinate of a point
			// returns: dojox/gfx.Point
			var M = m.normalize(matrix);
			if(typeof a == "number" && typeof b == "number"){
				return m._multiplyPoint(M, a, b); // dojox/gfx.Point
			}
			return m._multiplyPoint(M, a.x, a.y); // dojox/gfx.Point
		},
		multiplyRectangle: function(matrix, /*Rectangle*/ rect){
			// summary:
			//		Applies a matrix to a rectangle.
			// description:
			//		The method applies the transformation on all corners of the
			//		rectangle and returns the smallest rectangle enclosing the 4 transformed
			//		points.
			// matrix: dojox/gfx/matrix.Matrix2D
			//		a 2D matrix object to be applied.
			// rect: Rectangle
			//		the rectangle to transform.
			// returns: dojox/gfx.Rectangle
			var M = m.normalize(matrix);
			rect = rect || {x:0, y:0, width:0, height:0}; 
			if(m.isIdentity(M))
				return {x: rect.x, y: rect.y, width: rect.width, height: rect.height}; // dojo/gfx.Rectangle
			var p0 = m.multiplyPoint(M, rect.x, rect.y),
				p1 = m.multiplyPoint(M, rect.x, rect.y + rect.height),
				p2 = m.multiplyPoint(M, rect.x + rect.width, rect.y),
				p3 = m.multiplyPoint(M, rect.x + rect.width, rect.y + rect.height),
				minx = Math.min(p0.x, p1.x, p2.x, p3.x),
				miny = Math.min(p0.y, p1.y, p2.y, p3.y),
				maxx = Math.max(p0.x, p1.x, p2.x, p3.x),
				maxy = Math.max(p0.y, p1.y, p2.y, p3.y);
			return{ // dojo/gfx.Rectangle
				x: minx,
				y: miny,
				width: maxx - minx,
				height: maxy - miny
			};
		},
		multiply: function(matrix){
			// summary:
			//		combines matrices by multiplying them sequentially in the given order
			// matrix: dojox/gfx/matrix.Matrix2D
			//		a 2D matrix-like object,
			//		all subsequent arguments are matrix-like objects too
			var M = m.normalize(matrix);
			// combine matrices
			for(var i = 1; i < arguments.length; ++i){
				var l = M, r = m.normalize(arguments[i]);
				M = new m.Matrix2D();
				M.xx = l.xx * r.xx + l.xy * r.yx;
				M.xy = l.xx * r.xy + l.xy * r.yy;
				M.yx = l.yx * r.xx + l.yy * r.yx;
				M.yy = l.yx * r.xy + l.yy * r.yy;
				M.dx = l.xx * r.dx + l.xy * r.dy + l.dx;
				M.dy = l.yx * r.dx + l.yy * r.dy + l.dy;
			}
			return M; // dojox/gfx/matrix.Matrix2D
		},

		// high level operations

		_sandwich: function(matrix, x, y){
			// summary:
			//		applies a matrix at a central point
			// matrix: dojox/gfx/matrix.Matrix2D
			//		a 2D matrix-like object, which is applied at a central point
			// x: Number
			//		an x component of the central point
			// y: Number
			//		a y component of the central point
			return m.multiply(m.translate(x, y), matrix, m.translate(-x, -y)); // dojox/gfx/matrix.Matrix2D
		},
		scaleAt: function(a, b, c, d){
			// summary:
			//		scales a picture using a specified point as a center of scaling
			// description:
			//		Compare with dojox/gfx/matrix.scale().
			// a: Number
			//		a scaling factor used for the x coordinate, or a uniform scaling factor used for both coordinates
			// b: Number?
			//		a scaling factor used for the y coordinate
			// c: Number|Point
			//		an x component of a central point, or a central point
			// d: Number
			//		a y component of a central point
			// returns: dojox/gfx/matrix.Matrix2D
			switch(arguments.length){
				case 4:
					// a and b are scale factor components, c and d are components of a point
					return m._sandwich(m.scale(a, b), c, d); // dojox/gfx/matrix.Matrix2D
				case 3:
					if(typeof c == "number"){
						return m._sandwich(m.scale(a), b, c); // dojox/gfx/matrix.Matrix2D
					}
					return m._sandwich(m.scale(a, b), c.x, c.y); // dojox/gfx/matrix.Matrix2D
			}
			return m._sandwich(m.scale(a), b.x, b.y); // dojox/gfx/matrix.Matrix2D
		},
		rotateAt: function(angle, a, b){
			// summary:
			//		rotates a picture using a specified point as a center of rotation
			// description:
			//		Compare with dojox/gfx/matrix.rotate().
			// angle: Number
			//		an angle of rotation in radians (>0 for CW)
			// a: Number|dojox/gfx.Point
			//		an x component of a central point, or a central point
			// b: Number?
			//		a y component of a central point
			// returns: dojox/gfx/matrix.Matrix2D
			if(arguments.length > 2){
				return m._sandwich(m.rotate(angle), a, b); // dojox/gfx/matrix.Matrix2D
			}
			return m._sandwich(m.rotate(angle), a.x, a.y); // dojox/gfx/matrix.Matrix2D
		},
		rotategAt: function(degree, a, b){
			// summary:
			//		rotates a picture using a specified point as a center of rotation
			// description:
			//		Compare with dojox/gfx/matrix.rotateg().
			// degree: Number
			//		an angle of rotation in degrees (>0 for CW)
			// a: Number|dojox/gfx.Point
			//		an x component of a central point, or a central point
			// b: Number?
			//		a y component of a central point
			// returns: dojox/gfx/matrix.Matrix2D
			if(arguments.length > 2){
				return m._sandwich(m.rotateg(degree), a, b); // dojox/gfx/matrix.Matrix2D
			}
			return m._sandwich(m.rotateg(degree), a.x, a.y); // dojox/gfx/matrix.Matrix2D
		},
		skewXAt: function(angle, a, b){
			// summary:
			//		skews a picture along the x axis using a specified point as a center of skewing
			// description:
			//		Compare with dojox/gfx/matrix.skewX().
			// angle: Number
			//		a skewing angle in radians
			// a: Number|dojox/gfx.Point
			//		an x component of a central point, or a central point
			// b: Number?
			//		a y component of a central point
			// returns: dojox/gfx/matrix.Matrix2D
			if(arguments.length > 2){
				return m._sandwich(m.skewX(angle), a, b); // dojox/gfx/matrix.Matrix2D
			}
			return m._sandwich(m.skewX(angle), a.x, a.y); // dojox/gfx/matrix.Matrix2D
		},
		skewXgAt: function(degree, a, b){
			// summary:
			//		skews a picture along the x axis using a specified point as a center of skewing
			// description:
			//		Compare with dojox/gfx/matrix.skewXg().
			// degree: Number
			//		a skewing angle in degrees
			// a: Number|dojox/gfx.Point
			//		an x component of a central point, or a central point
			// b: Number?
			//		a y component of a central point
			// returns: dojox/gfx/matrix.Matrix2D
			if(arguments.length > 2){
				return m._sandwich(m.skewXg(degree), a, b); // dojox/gfx/matrix.Matrix2D
			}
			return m._sandwich(m.skewXg(degree), a.x, a.y); // dojox/gfx/matrix.Matrix2D
		},
		skewYAt: function(angle, a, b){
			// summary:
			//		skews a picture along the y axis using a specified point as a center of skewing
			// description:
			//		Compare with dojox/gfx/matrix.skewY().
			// angle: Number
			//		a skewing angle in radians
			// a: Number|dojox/gfx.Point
			//		an x component of a central point, or a central point
			// b: Number?
			//		a y component of a central point
			// returns: dojox/gfx/matrix.Matrix2D
			if(arguments.length > 2){
				return m._sandwich(m.skewY(angle), a, b); // dojox/gfx/matrix.Matrix2D
			}
			return m._sandwich(m.skewY(angle), a.x, a.y); // dojox/gfx/matrix.Matrix2D
		},
		skewYgAt: function(/* Number */ degree, /* Number||Point */ a, /* Number? */ b){
			// summary:
			//		skews a picture along the y axis using a specified point as a center of skewing
			// description:
			//		Compare with dojox/gfx/matrix.skewYg().
			// degree: Number
			//		a skewing angle in degrees
			// a: Number|dojox/gfx.Point
			//		an x component of a central point, or a central point
			// b: Number?
			//		a y component of a central point
			// returns: dojox/gfx/matrix.Matrix2D
			if(arguments.length > 2){
				return m._sandwich(m.skewYg(degree), a, b); // dojox/gfx/matrix.Matrix2D
			}
			return m._sandwich(m.skewYg(degree), a.x, a.y); // dojox/gfx/matrix.Matrix2D
		}

		//TODO: rect-to-rect mapping, scale-to-fit (isotropic and anisotropic versions)

	});
	// propagate Matrix2D up
	g.Matrix2D = m.Matrix2D;

	return m;
}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));




/***/ }),

/***/ "./node_modules/dojox/gfx/path.js":
/*!****************************************!*\
  !*** ./node_modules/dojox/gfx/path.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./_base */ "./node_modules/dojox/gfx/_base.js"), __webpack_require__(/*! dojo/_base/lang */ "./node_modules/dojo/_base/lang.js"),__webpack_require__(/*! dojo/_base/declare */ "./node_modules/dojo/_base/declare.js"), __webpack_require__(/*! ./matrix */ "./node_modules/dojox/gfx/matrix.js"), __webpack_require__(/*! ./shape */ "./node_modules/dojox/gfx/shape.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(g, lang, declare, matrix, shapeLib){

	// module:
	//		dojox/gfx/path

	var Path = declare("dojox.gfx.path.Path", shapeLib.Shape, {
		// summary:
		//		a generalized path shape

		constructor: function(rawNode){
			// summary:
			//		a path constructor
			// rawNode: Node
			//		a DOM node to be used by this path object
			this.shape = lang.clone(g.defaultPath);
			this.segments = [];
			this.tbbox = null;
			this.absolute = true;
			this.last = {};
			this.rawNode = rawNode;
			this.segmented = false;
		},

		// mode manipulations
		setAbsoluteMode: function(mode){
			// summary:
			//		sets an absolute or relative mode for path points
			// mode: Boolean
			//		true/false or "absolute"/"relative" to specify the mode
			this._confirmSegmented();
			this.absolute = typeof mode == "string" ? (mode == "absolute") : mode;
			return this; // self
		},
		getAbsoluteMode: function(){
			// summary:
			//		returns a current value of the absolute mode
			this._confirmSegmented();
			return this.absolute; // Boolean
		},

		getBoundingBox: function(){
			// summary:
			//		returns the bounding box {x, y, width, height} or null
			this._confirmSegmented();
			return (this.bbox && ("l" in this.bbox)) ? {x: this.bbox.l, y: this.bbox.t, width: this.bbox.r - this.bbox.l, height: this.bbox.b - this.bbox.t} : null; // dojox/gfx.Rectangle
		},

		_getRealBBox: function(){
			// summary:
			//		returns an array of four points or null
			//		four points represent four corners of the untransformed bounding box
			this._confirmSegmented();
			if(this.tbbox){
				return this.tbbox;	// Array
			}
			var bbox = this.bbox, matrix = this._getRealMatrix();
			this.bbox = null;
			for(var i = 0, len = this.segments.length; i < len; ++i){
				this._updateWithSegment(this.segments[i], matrix);
			}
			var t = this.bbox;
			this.bbox = bbox;
			this.tbbox = t ? [
				{x: t.l, y: t.t},
				{x: t.r, y: t.t},
				{x: t.r, y: t.b},
				{x: t.l, y: t.b}
			] : null;
			return this.tbbox;	// Array
		},

		getLastPosition: function(){
			// summary:
			//		returns the last point in the path, or null
			this._confirmSegmented();
			return "x" in this.last ? this.last : null; // Object
		},

		_applyTransform: function(){
			this.tbbox = null;
			return this.inherited(arguments);
		},

		// segment interpretation
		_updateBBox: function(x, y, m){
			// summary:
			//		updates the bounding box of path with new point
			// x: Number
			//		an x coordinate
			// y: Number
			//		a y coordinate

			if(m){
				var t = matrix.multiplyPoint(m, x, y);
				x = t.x;
				y = t.y;
			}

			// we use {l, b, r, t} representation of a bbox
			if(this.bbox && ("l" in this.bbox)){
				if(this.bbox.l > x) this.bbox.l = x;
				if(this.bbox.r < x) this.bbox.r = x;
				if(this.bbox.t > y) this.bbox.t = y;
				if(this.bbox.b < y) this.bbox.b = y;
			}else{
				this.bbox = {l: x, b: y, r: x, t: y};
			}
		},
		_updateWithSegment: function(segment, matrix){
			// summary:
			//		updates the bounding box of path with new segment
			// segment: Object
			//		a segment
			var n = segment.args, l = n.length, i;
			// update internal variables: bbox, absolute, last
			switch(segment.action){
				case "M":
				case "L":
				case "C":
				case "S":
				case "Q":
				case "T":
					for(i = 0; i < l; i += 2){
						this._updateBBox(n[i], n[i + 1], matrix);
					}
					this.last.x = n[l - 2];
					this.last.y = n[l - 1];
					this.absolute = true;
					break;
				case "H":
					for(i = 0; i < l; ++i){
						this._updateBBox(n[i], this.last.y, matrix);
					}
					this.last.x = n[l - 1];
					this.absolute = true;
					break;
				case "V":
					for(i = 0; i < l; ++i){
						this._updateBBox(this.last.x, n[i], matrix);
					}
					this.last.y = n[l - 1];
					this.absolute = true;
					break;
				case "m":
					var start = 0;
					if(!("x" in this.last)){
						this._updateBBox(this.last.x = n[0], this.last.y = n[1], matrix);
						start = 2;
					}
					for(i = start; i < l; i += 2){
						this._updateBBox(this.last.x += n[i], this.last.y += n[i + 1], matrix);
					}
					this.absolute = false;
					break;
				case "l":
				case "t":
					for(i = 0; i < l; i += 2){
						this._updateBBox(this.last.x += n[i], this.last.y += n[i + 1], matrix);
					}
					this.absolute = false;
					break;
				case "h":
					for(i = 0; i < l; ++i){
						this._updateBBox(this.last.x += n[i], this.last.y, matrix);
					}
					this.absolute = false;
					break;
				case "v":
					for(i = 0; i < l; ++i){
						this._updateBBox(this.last.x, this.last.y += n[i], matrix);
					}
					this.absolute = false;
					break;
				case "c":
					for(i = 0; i < l; i += 6){
						this._updateBBox(this.last.x + n[i], this.last.y + n[i + 1], matrix);
						this._updateBBox(this.last.x + n[i + 2], this.last.y + n[i + 3], matrix);
						this._updateBBox(this.last.x += n[i + 4], this.last.y += n[i + 5], matrix);
					}
					this.absolute = false;
					break;
				case "s":
				case "q":
					for(i = 0; i < l; i += 4){
						this._updateBBox(this.last.x + n[i], this.last.y + n[i + 1], matrix);
						this._updateBBox(this.last.x += n[i + 2], this.last.y += n[i + 3], matrix);
					}
					this.absolute = false;
					break;
				case "A":
					for(i = 0; i < l; i += 7){
						this._updateBBox(n[i + 5], n[i + 6], matrix);
					}
					this.last.x = n[l - 2];
					this.last.y = n[l - 1];
					this.absolute = true;
					break;
				case "a":
					for(i = 0; i < l; i += 7){
						this._updateBBox(this.last.x += n[i + 5], this.last.y += n[i + 6], matrix);
					}
					this.absolute = false;
					break;
			}
			// add an SVG path segment
			var path = [segment.action];
			for(i = 0; i < l; ++i){
				path.push(g.formatNumber(n[i], true));
			}
			if(typeof this.shape.path == "string"){
				this.shape.path += path.join("");
			}else{
				for(i = 0, l = path.length; i < l; ++i){
					this.shape.path.push(path[i]);
				}
			}
		},

		// a dictionary, which maps segment type codes to a number of their arguments
		_validSegments: {m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7, z: 0},

		_pushSegment: function(action, args){
			// summary:
			//		adds a segment
			// action: String
			//		valid SVG code for a segment's type
			// args: Array
			//		a list of parameters for this segment
			this.tbbox = null;
			var group = this._validSegments[action.toLowerCase()], segment;
			if(typeof group == "number"){
				if(group){
					if(args.length >= group){
						segment = {action: action, args: args.slice(0, args.length - args.length % group)};
						this.segments.push(segment);
						this._updateWithSegment(segment);
					}
				}else{
					segment = {action: action, args: []};
					this.segments.push(segment);
					this._updateWithSegment(segment);
				}
			}
		},

		_collectArgs: function(array, args){
			// summary:
			//		converts an array of arguments to plain numeric values
			// array: Array
			//		an output argument (array of numbers)
			// args: Array
			//		an input argument (can be values of Boolean, Number, dojox/gfx.Point, or an embedded array of them)
			for(var i = 0; i < args.length; ++i){
				var t = args[i];
				if(typeof t == "boolean"){
					array.push(t ? 1 : 0);
				}else if(typeof t == "number"){
					array.push(t);
				}else if(t instanceof Array){
					this._collectArgs(array, t);
				}else if("x" in t && "y" in t){
					array.push(t.x, t.y);
				}
			}
		},

		// segments
		moveTo: function(){
			// summary:
			//		forms a move segment
			this._confirmSegmented();
			var args = [];
			this._collectArgs(args, arguments);
			this._pushSegment(this.absolute ? "M" : "m", args);
			return this; // self
		},
		lineTo: function(){
			// summary:
			//		forms a line segment
			this._confirmSegmented();
			var args = [];
			this._collectArgs(args, arguments);
			this._pushSegment(this.absolute ? "L" : "l", args);
			return this; // self
		},
		hLineTo: function(){
			// summary:
			//		forms a horizontal line segment
			this._confirmSegmented();
			var args = [];
			this._collectArgs(args, arguments);
			this._pushSegment(this.absolute ? "H" : "h", args);
			return this; // self
		},
		vLineTo: function(){
			// summary:
			//		forms a vertical line segment
			this._confirmSegmented();
			var args = [];
			this._collectArgs(args, arguments);
			this._pushSegment(this.absolute ? "V" : "v", args);
			return this; // self
		},
		curveTo: function(){
			// summary:
			//		forms a curve segment
			this._confirmSegmented();
			var args = [];
			this._collectArgs(args, arguments);
			this._pushSegment(this.absolute ? "C" : "c", args);
			return this; // self
		},
		smoothCurveTo: function(){
			// summary:
			//		forms a smooth curve segment
			this._confirmSegmented();
			var args = [];
			this._collectArgs(args, arguments);
			this._pushSegment(this.absolute ? "S" : "s", args);
			return this; // self
		},
		qCurveTo: function(){
			// summary:
			//		forms a quadratic curve segment
			this._confirmSegmented();
			var args = [];
			this._collectArgs(args, arguments);
			this._pushSegment(this.absolute ? "Q" : "q", args);
			return this; // self
		},
		qSmoothCurveTo: function(){
			// summary:
			//		forms a quadratic smooth curve segment
			this._confirmSegmented();
			var args = [];
			this._collectArgs(args, arguments);
			this._pushSegment(this.absolute ? "T" : "t", args);
			return this; // self
		},
		arcTo: function(){
			// summary:
			//		forms an elliptic arc segment
			this._confirmSegmented();
			var args = [];
			this._collectArgs(args, arguments);
			this._pushSegment(this.absolute ? "A" : "a", args);
			return this; // self
		},
		closePath: function(){
			// summary:
			//		closes a path
			this._confirmSegmented();
			this._pushSegment("Z", []);
			return this; // self
		},

		_confirmSegmented: function() {
			if (!this.segmented) {
				var path = this.shape.path;
				// switch to non-updating version of path building
				this.shape.path = [];
				this._setPath(path);
				// switch back to the string path
				this.shape.path = this.shape.path.join("");
				// become segmented
				this.segmented = true;
			}
		},

		// setShape
		_setPath: function(path){
			// summary:
			//		forms a path using an SVG path string
			// path: String
			//		an SVG path string
			var p = lang.isArray(path) ? path : path.match(g.pathSvgRegExp);
			this.segments = [];
			this.absolute = true;
			this.bbox = {};
			this.last = {};
			if(!p) return;
			// create segments
			var action = "",	// current action
				args = [],		// current arguments
				l = p.length;
			for(var i = 0; i < l; ++i){
				var t = p[i], x = parseFloat(t);
				if(isNaN(x)){
					if(action){
						this._pushSegment(action, args);
					}
					args = [];
					action = t;
				}else{
					args.push(x);
				}
			}
			this._pushSegment(action, args);
		},
		setShape: function(newShape){
			// summary:
			//		forms a path using a shape
			// newShape: Object
			//		an SVG path string or a path object (see dojox/gfx.defaultPath)
			this.inherited(arguments, [typeof newShape == "string" ? {path: newShape} : newShape]);

			this.segmented = false;
			this.segments = [];
			if(!g.lazyPathSegmentation){
				this._confirmSegmented();
			}
			return this; // self
		},

		// useful constant for descendants
		_2PI: Math.PI * 2
	});

	var TextPath = declare("dojox.gfx.path.TextPath", Path, {
		// summary:
		//		a generalized TextPath shape

		constructor: function(rawNode){
			// summary:
			//		a TextPath shape constructor
			// rawNode: Node
			//		a DOM node to be used by this TextPath object
			if(!("text" in this)){
				this.text = lang.clone(g.defaultTextPath);
			}
			if(!("fontStyle" in this)){
				this.fontStyle = lang.clone(g.defaultFont);
			}
		},
		getText: function(){
			// summary:
			//		returns the current text object or null
			return this.text;	// Object
		},
		setText: function(newText){
			// summary:
			//		sets a text to be drawn along the path
			this.text = g.makeParameters(this.text,
				typeof newText == "string" ? {text: newText} : newText);
			this._setText();
			return this;	// self
		},
		getFont: function(){
			// summary:
			//		returns the current font object or null
			return this.fontStyle;	// Object
		},
		setFont: function(newFont){
			// summary:
			//		sets a font for text
			this.fontStyle = typeof newFont == "string" ?
				g.splitFontString(newFont) :
				g.makeParameters(g.defaultFont, newFont);
			this._setFont();
			return this;	// self
		}
	});

	/*=====
	g.Path = Path;
	g.TextPath = TextPath;
	=====*/

	return g.path = {
		// summary:
		//		This module contains the core graphics Path API.
		//		Path command format follows the W3C SVG 1.0 Path api.

		Path: Path,
		TextPath: TextPath
	};
}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/dojox/gfx/shape.js":
/*!*****************************************!*\
  !*** ./node_modules/dojox/gfx/shape.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./_base */ "./node_modules/dojox/gfx/_base.js"), __webpack_require__(/*! dojo/_base/lang */ "./node_modules/dojo/_base/lang.js"), __webpack_require__(/*! dojo/_base/declare */ "./node_modules/dojo/_base/declare.js"), __webpack_require__(/*! dojo/_base/kernel */ "./node_modules/dojo/_base/kernel.js"), __webpack_require__(/*! dojo/_base/sniff */ "./node_modules/dojo/_base/sniff.js"),
	__webpack_require__(/*! dojo/on */ "./node_modules/dojo/on.js"), __webpack_require__(/*! dojo/_base/array */ "./node_modules/dojo/_base/array.js"), __webpack_require__(/*! dojo/dom-construct */ "./node_modules/dojo/dom-construct.js"), __webpack_require__(/*! dojo/_base/Color */ "./node_modules/dojo/_base/Color.js"), __webpack_require__(/*! ./matrix */ "./node_modules/dojox/gfx/matrix.js") ], __WEBPACK_AMD_DEFINE_RESULT__ = (function(g, lang, declare, kernel, has, on, arr, domConstruct, Color, matrixLib){

	function removeItemAt(a, index) {
		var len = (a.length - 1);
		while (index < len) {
			a[index] = a[++index];
		}
		a.length = len;
	}

	var shape = g.shape = {
		// summary:
		//		This module contains the core graphics Shape API.
		//		Different graphics renderer implementation modules (svg, canvas, vml, silverlight, etc.) extend this
		//		basic api to provide renderer-specific implementations for each shape.
	};

	shape.Shape = declare("dojox.gfx.shape.Shape", null, {
		// summary:
		//		a Shape object, which knows how to apply
		//		graphical attributes and transformations
	
		constructor: function(){
			// rawNode: Node
			//		underlying graphics-renderer-specific implementation object (if applicable)
			this.rawNode = null;

			// shape: Object
			//		an abstract shape object
			//		(see dojox/gfx.defaultPath,
			//		dojox/gfx.defaultPolyline,
			//		dojox/gfx.defaultRect,
			//		dojox/gfx.defaultEllipse,
			//		dojox/gfx.defaultCircle,
			//		dojox/gfx.defaultLine,
			//		or dojox/gfx.defaultImage)
			this.shape = null;
	
			// matrix: dojox/gfx/matrix.Matrix2D
			//		a transformation matrix
			this.matrix = null;
	
			// fillStyle: dojox/gfx.Fill
			//		a fill object
			//		(see dojox/gfx.defaultLinearGradient,
			//		dojox/gfx.defaultRadialGradient,
			//		dojox/gfx.defaultPattern,
			//		or dojo/Color)
			this.fillStyle = null;
	
			// strokeStyle: dojox/gfx.Stroke
			//		a stroke object
			//		(see dojox/gfx.defaultStroke)
			this.strokeStyle = null;
	
			// bbox: dojox/gfx.Rectangle
			//		a bounding box of this shape
			//		(see dojox/gfx.defaultRect)
			this.bbox = null;
	
			// virtual group structure
	
			// parent: Object
			//		a parent or null
			//		(see dojox/gfx/shape.Surface,
			//		or dojox/gfx.Group)
			this.parent = null;
	
			// parentMatrix: dojox/gfx/matrix.Matrix2D
			//		a transformation matrix inherited from the parent
			this.parentMatrix = null;

			if(has("gfxRegistry")){
				var uid = shape.register(this);
				this.getUID = function(){
					return uid;
				}
			}
		},
		
		destroy: function(){
			// summary:
			//		Releases all internal resources owned by this shape. Once this method has been called,
			//		the instance is considered destroyed and should not be used anymore.
			if(has("gfxRegistry")){
				shape.dispose(this);
			}
			if(this.rawNode && "__gfxObject__" in this.rawNode){
				this.rawNode.__gfxObject__ = null;
			}
			this.rawNode = null;
		},
	
		// trivial getters
	
		getNode: function(){
			// summary:
			//		Different graphics rendering subsystems implement shapes in different ways.  This
			//		method provides access to the underlying graphics subsystem object.  Clients calling this
			//		method and using the return value must be careful not to try sharing or using the underlying node
			//		in a general way across renderer implementation.
			//		Returns the underlying graphics Node, or null if no underlying graphics node is used by this shape.
			return this.rawNode; // Node
		},
		getShape: function(){
			// summary:
			//		returns the current Shape object or null
			//		(see dojox/gfx.defaultPath,
			//		dojox/gfx.defaultPolyline,
			//		dojox/gfx.defaultRect,
			//		dojox/gfx.defaultEllipse,
			//		dojox/gfx.defaultCircle,
			//		dojox/gfx.defaultLine,
			//		or dojox/gfx.defaultImage)
			return this.shape; // Object
		},
		getTransform: function(){
			// summary:
			//		Returns the current transformation matrix applied to this Shape or null
			return this.matrix;	// dojox/gfx/matrix.Matrix2D
		},
		getFill: function(){
			// summary:
			//		Returns the current fill object or null
			//		(see dojox/gfx.defaultLinearGradient,
			//		dojox/gfx.defaultRadialGradient,
			//		dojox/gfx.defaultPattern,
			//		or dojo/Color)
			return this.fillStyle;	// Object
		},
		getStroke: function(){
			// summary:
			//		Returns the current stroke object or null
			//		(see dojox/gfx.defaultStroke)
			return this.strokeStyle;	// Object
		},
		getParent: function(){
			// summary:
			//		Returns the parent Shape, Group or null if this Shape is unparented.
			//		(see dojox/gfx/shape.Surface,
			//		or dojox/gfx.Group)
			return this.parent;	// Object
		},
		getBoundingBox: function(){
			// summary:
			//		Returns the bounding box Rectangle for this shape or null if a BoundingBox cannot be
			//		calculated for the shape on the current renderer or for shapes with no geometric area (points).
			//		A bounding box is a rectangular geometric region
			//		defining the X and Y extent of the shape.
			//		(see dojox/gfx.defaultRect)
			//		Note that this method returns a direct reference to the attribute of this instance. Therefore you should
			//		not modify its value directly but clone it instead.
			return this.bbox;	// dojox/gfx.Rectangle
		},
		getTransformedBoundingBox: function(){
			// summary:
			//		returns an array of four points or null
			//		four points represent four corners of the untransformed bounding box
			var b = this.getBoundingBox();
			if(!b){
				return null;	// null
			}
			var m = this._getRealMatrix(),
				gm = matrixLib;
			return [	// Array
					gm.multiplyPoint(m, b.x, b.y),
					gm.multiplyPoint(m, b.x + b.width, b.y),
					gm.multiplyPoint(m, b.x + b.width, b.y + b.height),
					gm.multiplyPoint(m, b.x, b.y + b.height)
				];
		},
		getEventSource: function(){
			// summary:
			//		returns a Node, which is used as
			//		a source of events for this shape
			
			// COULD BE RE-IMPLEMENTED BY THE RENDERER!
			return this.rawNode;	// Node
		},
	
		// empty settings
		
		setClip: function(clip){
			// summary:
			//		sets the clipping area of this shape.
			// description:
			//		The clipping area defines the shape area that will be effectively visible. Everything that
			//		would be drawn outside of the clipping area will not be rendered.
			//		The possible clipping area types are rectangle, ellipse, polyline and path, but all are not
			//		supported by all the renderers. vml only supports rectangle clipping, while the gfx silverlight renderer does not
			//		support path clipping.
			//		The clip parameter defines the clipping area geometry, and should be an object with the following properties:
			//
			//		- {x:Number, y:Number, width:Number, height:Number} for rectangular clip
			//		- {cx:Number, cy:Number, rx:Number, ry:Number} for ellipse clip
			//		- {points:Array} for polyline clip
			//		- {d:String} for a path clip.
			//
			//		The clip geometry coordinates are expressed in the coordinate system used to draw the shape. In other
			//		words, the clipping area is defined in the shape parent coordinate system and the shape transform is automatically applied.
			// example:
			//		The following example shows how to clip a gfx image with all the possible clip geometry: a rectangle,
			//		an ellipse, a circle (using the ellipse geometry), a polyline and a path:
			//
			//	|	surface.createImage({src:img, width:200,height:200}).setClip({x:10,y:10,width:50,height:50});
			//	|	surface.createImage({src:img, x:100,y:50,width:200,height:200}).setClip({cx:200,cy:100,rx:20,ry:30});
			//	|	surface.createImage({src:img, x:0,y:350,width:200,height:200}).setClip({cx:100,cy:425,rx:60,ry:60});
			//	|	surface.createImage({src:img, x:300,y:0,width:200,height:200}).setClip({points:[350,0,450,50,380,130,300,110]});
			//	|	surface.createImage({src:img, x:300,y:350,width:200,height:200}).setClip({d:"M 350,350 C314,414 317,557 373,450.0000 z"});

			// clip: Object
			//		an object that defines the clipping geometry, or null to remove clip.
			
			// COULD BE RE-IMPLEMENTED BY THE RENDERER!
			this.clip = clip;
		},
		
		getClip: function(){
			return this.clip;
		},
	
		setShape: function(shape){
			// summary:
			//		sets a shape object
			//		(the default implementation simply ignores it)
			// shape: Object
			//		a shape object
			//		(see dojox/gfx.defaultPath,
			//		dojox/gfx.defaultPolyline,
			//		dojox/gfx.defaultRect,
			//		dojox/gfx.defaultEllipse,
			//		dojox/gfx.defaultCircle,
			//		dojox/gfx.defaultLine,
			//		or dojox/gfx.defaultImage)
			
			// COULD BE RE-IMPLEMENTED BY THE RENDERER!
			this.shape = g.makeParameters(this.shape, shape);
			this.bbox = null;
			return this;	// self
		},
		setFill: function(fill){
			// summary:
			//		sets a fill object
			//		(the default implementation simply ignores it)
			// fill: Object
			//		a fill object
			//		(see dojox/gfx.defaultLinearGradient,
			//		dojox/gfx.defaultRadialGradient,
			//		dojox/gfx.defaultPattern,
			//		or dojo/_base/Color)
			
			// COULD BE RE-IMPLEMENTED BY THE RENDERER!
			if(!fill){
				// don't fill
				this.fillStyle = null;
				return this;	// self
			}
			var f = null;
			if(typeof(fill) == "object" && "type" in fill){
				// gradient or pattern
				switch(fill.type){
					case "linear":
						f = g.makeParameters(g.defaultLinearGradient, fill);
						break;
					case "radial":
						f = g.makeParameters(g.defaultRadialGradient, fill);
						break;
					case "pattern":
						f = g.makeParameters(g.defaultPattern, fill);
						break;
				}
			}else{
				// color object
				f = g.normalizeColor(fill);
			}
			this.fillStyle = f;
			return this;	// self
		},
		setStroke: function(stroke){
			// summary:
			//		sets a stroke object
			//		(the default implementation simply ignores it)
			// stroke: Object
			//		a stroke object
			//		(see dojox/gfx.defaultStroke)
			
			// COULD BE RE-IMPLEMENTED BY THE RENDERER!
			if(!stroke){
				// don't stroke
				this.strokeStyle = null;
				return this;	// self
			}
			// normalize the stroke
			if(typeof stroke == "string" || lang.isArray(stroke) || stroke instanceof Color){
				stroke = {color: stroke};
			}
			var s = this.strokeStyle = g.makeParameters(g.defaultStroke, stroke);
			s.color = g.normalizeColor(s.color);
			return this;	// self
		},
		setTransform: function(matrix){
			// summary:
			//		sets a transformation matrix
			// matrix: dojox/gfx/matrix.Matrix2D
			//		a matrix or a matrix-like object
			//		(see an argument of dojox/gfx/matrix.Matrix2D
			//		constructor for a list of acceptable arguments)
			
			// COULD BE RE-IMPLEMENTED BY THE RENDERER!
			this.matrix = matrixLib.clone(matrix ? matrixLib.normalize(matrix) : matrixLib.identity);
			return this._applyTransform();	// self
		},
	
		_applyTransform: function(){
			// summary:
			//		physically sets a matrix
			
			// COULD BE RE-IMPLEMENTED BY THE RENDERER!
			return this;	// self
		},
	
		// z-index
	
		moveToFront: function(){
			// summary:
			//		moves a shape to front of its parent's list of shapes
			var p = this.getParent();
			if(p){
				p._moveChildToFront(this);
				this._moveToFront();	// execute renderer-specific action
			}
			return this;	// self
		},
		moveToBack: function(){
			// summary:
			//		moves a shape to back of its parent's list of shapes
			var p = this.getParent();
			if(p){
				p._moveChildToBack(this);
				this._moveToBack();	// execute renderer-specific action
			}
			return this;
		},
		_moveToFront: function(){
			// summary:
			//		renderer-specific hook, see dojox/gfx/shape.Shape.moveToFront()
			
			// COULD BE RE-IMPLEMENTED BY THE RENDERER!
		},
		_moveToBack: function(){
			// summary:
			//		renderer-specific hook, see dojox/gfx/shape.Shape.moveToFront()
			
			// COULD BE RE-IMPLEMENTED BY THE RENDERER!
		},
	
		// apply left & right transformation
	
		applyRightTransform: function(matrix){
			// summary:
			//		multiplies the existing matrix with an argument on right side
			//		(this.matrix * matrix)
			// matrix: dojox/gfx/matrix.Matrix2D
			//		a matrix or a matrix-like object
			//		(see an argument of dojox/gfx/matrix.Matrix2D
			//		constructor for a list of acceptable arguments)
			return matrix ? this.setTransform([this.matrix, matrix]) : this;	// self
		},
		applyLeftTransform: function(matrix){
			// summary:
			//		multiplies the existing matrix with an argument on left side
			//		(matrix * this.matrix)
			// matrix: dojox/gfx/matrix.Matrix2D
			//		a matrix or a matrix-like object
			//		(see an argument of dojox/gfx/matrix.Matrix2D
			//		constructor for a list of acceptable arguments)
			return matrix ? this.setTransform([matrix, this.matrix]) : this;	// self
		},
		applyTransform: function(matrix){
			// summary:
			//		a shortcut for dojox/gfx/shape.Shape.applyRightTransform
			// matrix: dojox/gfx/matrix.Matrix2D
			//		a matrix or a matrix-like object
			//		(see an argument of dojox/gfx/matrix.Matrix2D
			//		constructor for a list of acceptable arguments)
			return matrix ? this.setTransform([this.matrix, matrix]) : this;	// self
		},
	
		// virtual group methods
	
		removeShape: function(silently){
			// summary:
			//		removes the shape from its parent's list of shapes
			// silently: Boolean
			//		if true, do not redraw a picture yet
			if(this.parent){
				this.parent.remove(this, silently);
			}
			return this;	// self
		},
		_setParent: function(parent, matrix){
			// summary:
			//		sets a parent
			// parent: Object
			//		a parent or null
			//		(see dojox/gfx/shape.Surface,
			//		or dojox/gfx.Group)
			// matrix: dojox/gfx/matrix.Matrix2D
			//		a 2D matrix or a matrix-like object
			this.parent = parent;
			return this._updateParentMatrix(matrix);	// self
		},
		_updateParentMatrix: function(matrix){
			// summary:
			//		updates the parent matrix with new matrix
			// matrix: dojox/gfx/Matrix2D
			//		a 2D matrix or a matrix-like object
			this.parentMatrix = matrix ? matrixLib.clone(matrix) : null;
			return this._applyTransform();	// self
		},
		_getRealMatrix: function(){
			// summary:
			//		returns the cumulative ('real') transformation matrix
			//		by combining the shape's matrix with its parent's matrix
			var m = this.matrix;
			var p = this.parent;
			while(p){
				if(p.matrix){
					m = matrixLib.multiply(p.matrix, m);
				}
				p = p.parent;
			}
			return m;	// dojox/gfx/matrix.Matrix2D
		}
	});
	
	shape._eventsProcessing = {
		on: function(type, listener){
			//	summary:
			//		Connects an event to this shape.

			return on(this.getEventSource(), type, shape.fixCallback(this, g.fixTarget, listener));
		},

		connect: function(name, object, method){
			// summary:
			//		connects a handler to an event on this shape
			
			// COULD BE RE-IMPLEMENTED BY THE RENDERER!
			// redirect to fixCallback to normalize events and add the gfxTarget to the event. The latter
			// is done by dojox/gfx.fixTarget which is defined by each renderer
			if(name.substring(0, 2) == "on"){
				name = name.substring(2);
			}
			return this.on(name, method ? lang.hitch(object, method) : object);
		},

		disconnect: function(token){
			// summary:
			//		connects a handler by token from an event on this shape
			
			// COULD BE RE-IMPLEMENTED BY THE RENDERER!
	
			return token.remove();
		}
	};
	
	shape.fixCallback = function(gfxElement, fixFunction, scope, method){
		// summary:
		//		Wraps the callback to allow for tests and event normalization
		//		before it gets invoked. This is where 'fixTarget' is invoked.
		// tags:
		//      private
		// gfxElement: Object
		//		The GFX object that triggers the action (ex.:
		//		dojox/gfx.Surface and dojox/gfx/shape.Shape). A new event property
		//		'gfxTarget' is added to the event to reference this object.
		//		for easy manipulation of GFX objects by the event handlers.
		// fixFunction: Function
		//		The function that implements the logic to set the 'gfxTarget'
		//		property to the event. It should be 'dojox/gfx.fixTarget' for
		//		most of the cases
		// scope: Object
		//		Optional. The scope to be used when invoking 'method'. If
		//		omitted, a global scope is used.
		// method: Function|String
		//		The original callback to be invoked.
		if(!method){
			method = scope;
			scope = null;
		}
		if(lang.isString(method)){
			scope = scope || kernel.global;
			if(!scope[method]){ throw(['dojox.gfx.shape.fixCallback: scope["', method, '"] is null (scope="', scope, '")'].join('')); }
			return function(e){  
				return fixFunction(e,gfxElement) ? scope[method].apply(scope, arguments || []) : undefined; }; // Function
		}
		return !scope 
			? function(e){ 
				return fixFunction(e,gfxElement) ? method.apply(scope, arguments) : undefined; } 
			: function(e){ 
				return fixFunction(e,gfxElement) ? method.apply(scope, arguments || []) : undefined; }; // Function
	};
	lang.extend(shape.Shape, shape._eventsProcessing);
	
	shape.Container = {
		// summary:
		//		a container of shapes, which can be used
		//		as a foundation for renderer-specific groups, or as a way
		//		to logically group shapes (e.g, to propagate matricies)
	
		_init: function() {
			// children: Array
			//		a list of children
			this.children = [];
			this._batch = 0;
		},
	
		// group management
	
		openBatch: function() {
			// summary:
			//		starts a new batch, subsequent new child shapes will be held in
			//		the batch instead of appending to the container directly.
			// description:
			//		Because the canvas renderer has no DOM hierarchy, the canvas implementation differs
			//		such that it suspends the repaint requests for this container until the current batch is closed by a call to closeBatch().
			return this;
		},
		closeBatch: function() {
			// summary:
			//		submits the current batch, append all pending child shapes to DOM
			// description:
			//		On canvas, this method flushes the pending redraws queue.
			return this;
		},
		add: function(shape){
			// summary:
			//		adds a shape to the list
			// shape: dojox/gfx/shape.Shape
			//		the shape to add to the list
			var oldParent = shape.getParent();
			if(oldParent){
				oldParent.remove(shape, true);
			}
			this.children.push(shape);
			return shape._setParent(this, this._getRealMatrix());	// self
		},
		remove: function(shape, silently){
			// summary:
			//		removes a shape from the list
			// shape: dojox/gfx/shape.Shape
			//		the shape to remove
			// silently: Boolean
			//		if true, do not redraw a picture yet
			for(var i = 0; i < this.children.length; ++i){
				if(this.children[i] == shape){
					if(silently){
						// skip for now
					}else{
						shape.parent = null;
						shape.parentMatrix = null;
					}
					removeItemAt(this.children, i);
					break;
				}
			}
			return this;	// self
		},
		clear: function(/*Boolean?*/ destroy){
			// summary:
			//		removes all shapes from a group/surface.
			// destroy: Boolean
			//		Indicates whether the children should be destroyed. Optional.
			var shape;
			for(var i = 0; i < this.children.length;++i){
				shape = this.children[i];
				shape.parent = null;
				shape.parentMatrix = null;
				if(destroy){
					shape.destroy();
				}
			}
			this.children = [];
			return this;	// self
		},
		getBoundingBox: function(){
			// summary:
			//		Returns the bounding box Rectangle for this shape.
			if(this.children){
				// if this is a composite shape, then sum up all the children
				var result = null;
				arr.forEach(this.children, function(shape){
					var bb = shape.getBoundingBox();
					if(bb){
						var ct = shape.getTransform();
						if(ct){
							bb = matrixLib.multiplyRectangle(ct, bb);
						}
						if(result){
							// merge two bbox 
							result.x = Math.min(result.x, bb.x);
							result.y = Math.min(result.y, bb.y);
							result.endX = Math.max(result.endX, bb.x + bb.width);
							result.endY = Math.max(result.endY, bb.y + bb.height);
						}else{
							// first bbox 
							result = {
								x: bb.x,
								y: bb.y,
								endX: bb.x + bb.width,
								endY: bb.y + bb.height
							};
						}
					}
				});
				if(result){
					result.width = result.endX - result.x;
					result.height = result.endY - result.y;
				}
				return result; // dojox/gfx.Rectangle
			}
			// unknown/empty bounding box, subclass shall override this impl 
			return null;
		},
		// moving child nodes
		_moveChildToFront: function(shape){
			// summary:
			//		moves a shape to front of the list of shapes
			// shape: dojox/gfx/shape.Shape
			//		one of the child shapes to move to the front
			for(var i = 0; i < this.children.length; ++i){
				if(this.children[i] == shape){
					removeItemAt(this.children, i);
					this.children.push(shape);
					break;
				}
			}
			return this;	// self
		},
		_moveChildToBack: function(shape){
			// summary:
			//		moves a shape to back of the list of shapes
			// shape: dojox/gfx/shape.Shape
			//		one of the child shapes to move to the front
			for(var i = 0; i < this.children.length; ++i){
				if(this.children[i] == shape){
					removeItemAt(this.children, i);
					this.children.unshift(shape);
					break;
				}
			}
			return this;	// self
		}
	};

	shape.Surface = declare("dojox.gfx.shape.Surface", null, {
		// summary:
		//		a surface object to be used for drawings
		constructor: function(){
			// underlying node
			this.rawNode = null;
			// the parent node
			this._parent = null;
			// the list of DOM nodes to be deleted in the case of destruction
			this._nodes = [];
			// the list of events to be detached in the case of destruction
			this._events = [];
		},
		destroy: function(){
			// summary:
			//		destroy all relevant external resources and release all
			//		external references to make this object garbage-collectible
			arr.forEach(this._nodes, domConstruct.destroy);
			this._nodes = [];
			arr.forEach(this._events, function(h){ if(h){ h.remove(); } });
			this._events = [];
			this.rawNode = null;	// recycle it in _nodes, if it needs to be recycled
			if(has("ie")){
				while(this._parent.lastChild){
					domConstruct.destroy(this._parent.lastChild);
				}
			}else{
				this._parent.innerHTML = "";
			}
			this._parent = null;
		},
		getEventSource: function(){
			// summary:
			//		returns a node, which can be used to attach event listeners
			return this.rawNode; // Node
		},
		_getRealMatrix: function(){
			// summary:
			//		always returns the identity matrix
			return null;	// dojox/gfx/Matrix2D
		},
		/*=====
		 setDimensions: function(width, height){
			 // summary:
			 //		sets the width and height of the rawNode
			 // width: String
			 //		width of surface, e.g., "100px"
			 // height: String
			 //		height of surface, e.g., "100px"
			 return this;	// self
		 },
		 getDimensions: function(){
			 // summary:
			 //     gets current width and height in pixels
			 // returns: Object
			 //     object with properties "width" and "height"
		 },
		 =====*/
		isLoaded: true,
		onLoad: function(/*dojox/gfx/shape.Surface*/ surface){
			// summary:
			//		local event, fired once when the surface is created
			//		asynchronously, used only when isLoaded is false, required
			//		only for Silverlight.
		},
		whenLoaded: function(/*Object|Null*/ context, /*Function|String*/ method){
			var f = lang.hitch(context, method);
			if(this.isLoaded){
				f(this);
			}else{
				on.once(this, "load", function(surface){
					f(surface);
				});
			}
		}
	});
	lang.extend(shape.Surface, shape._eventsProcessing);

	/*=====
	g.Point = declare("dojox/gfx.Point", null, {
		// summary:
		//		2D point for drawings - {x, y}
		// description:
		//		Do not use this object directly!
		//		Use the naked object instead: {x: 1, y: 2}.
	});

	g.Rectangle = declare("dojox.gfx.Rectangle", null, {
		// summary:
		//		rectangle - {x, y, width, height}
		// description:
		//		Do not use this object directly!
		//		Use the naked object instead: {x: 1, y: 2, width: 100, height: 200}.
	});
	 =====*/


	shape.Rect = declare("dojox.gfx.shape.Rect", shape.Shape, {
		// summary:
		//		a generic rectangle
		constructor: function(rawNode){
			// rawNode: Node
			//		The underlying graphics system object (typically a DOM Node)
			this.shape = g.getDefault("Rect");
			this.rawNode = rawNode;
		},
		getBoundingBox: function(){
			// summary:
			//		returns the bounding box (its shape in this case)
			return this.shape;	// dojox/gfx.Rectangle
		}
	});
	
	shape.Ellipse = declare("dojox.gfx.shape.Ellipse", shape.Shape, {
		// summary:
		//		a generic ellipse
		constructor: function(rawNode){
			// rawNode: Node
			//		a DOM Node
			this.shape = g.getDefault("Ellipse");
			this.rawNode = rawNode;
		},
		getBoundingBox: function(){
			// summary:
			//		returns the bounding box
			if(!this.bbox){
				var shape = this.shape;
				this.bbox = {x: shape.cx - shape.rx, y: shape.cy - shape.ry,
					width: 2 * shape.rx, height: 2 * shape.ry};
			}
			return this.bbox;	// dojox/gfx.Rectangle
		}
	});
	
	shape.Circle = declare("dojox.gfx.shape.Circle", shape.Shape, {
		// summary:
		//		a generic circle
		constructor: function(rawNode){
			// rawNode: Node
			//		a DOM Node
			this.shape = g.getDefault("Circle");
			this.rawNode = rawNode;
		},
		getBoundingBox: function(){
			// summary:
			//		returns the bounding box
			if(!this.bbox){
				var shape = this.shape;
				this.bbox = {x: shape.cx - shape.r, y: shape.cy - shape.r,
					width: 2 * shape.r, height: 2 * shape.r};
			}
			return this.bbox;	// dojox/gfx.Rectangle
		}
	});
	
	shape.Line = declare("dojox.gfx.shape.Line", shape.Shape, {
		// summary:
		//		a generic line (do not instantiate it directly)
		constructor: function(rawNode){
			// rawNode: Node
			//		a DOM Node
			this.shape = g.getDefault("Line");
			this.rawNode = rawNode;
		},
		getBoundingBox: function(){
			// summary:
			//		returns the bounding box
			if(!this.bbox){
				var shape = this.shape;
				this.bbox = {
					x:		Math.min(shape.x1, shape.x2),
					y:		Math.min(shape.y1, shape.y2),
					width:	Math.abs(shape.x2 - shape.x1),
					height:	Math.abs(shape.y2 - shape.y1)
				};
			}
			return this.bbox;	// dojox/gfx.Rectangle
		}
	});
	
	shape.Polyline = declare("dojox.gfx.shape.Polyline", shape.Shape, {
		// summary:
		//		a generic polyline/polygon (do not instantiate it directly)
		constructor: function(rawNode){
			// rawNode: Node
			//		a DOM Node
			this.shape = g.getDefault("Polyline");
			this.rawNode = rawNode;
		},
		setShape: function(points, closed){
			// summary:
			//		sets a polyline/polygon shape object
			// points: Object|Array
			//		a polyline/polygon shape object, or an array of points
			// closed: Boolean
			//		close the polyline to make a polygon
			if(points && points instanceof Array){
				this.inherited(arguments, [{points: points}]);
				if(closed && this.shape.points.length){
					this.shape.points.push(this.shape.points[0]);
				}
			}else{
				this.inherited(arguments, [points]);
			}
			return this;	// self
		},
		_normalizePoints: function(){
			// summary:
			//		normalize points to array of {x:number, y:number}
			var p = this.shape.points, l = p && p.length;
			if(l && typeof p[0] == "number"){
				var points = [];
				for(var i = 0; i < l; i += 2){
					points.push({x: p[i], y: p[i + 1]});
				}
				this.shape.points = points;
			}
		},
		getBoundingBox: function(){
			// summary:
			//		returns the bounding box
			if(!this.bbox && this.shape.points.length){
				var p = this.shape.points;
				var l = p.length;
				var t = p[0];
				var bbox = {l: t.x, t: t.y, r: t.x, b: t.y};
				for(var i = 1; i < l; ++i){
					t = p[i];
					if(bbox.l > t.x) bbox.l = t.x;
					if(bbox.r < t.x) bbox.r = t.x;
					if(bbox.t > t.y) bbox.t = t.y;
					if(bbox.b < t.y) bbox.b = t.y;
				}
				this.bbox = {
					x:		bbox.l,
					y:		bbox.t,
					width:	bbox.r - bbox.l,
					height:	bbox.b - bbox.t
				};
			}
			return this.bbox;	// dojox/gfx.Rectangle
		}
	});
	
	shape.Image = declare("dojox.gfx.shape.Image", shape.Shape, {
		// summary:
		//		a generic image (do not instantiate it directly)
		constructor: function(rawNode){
			// rawNode: Node
			//		a DOM Node
			this.shape = g.getDefault("Image");
			this.rawNode = rawNode;
		},
		getBoundingBox: function(){
			// summary:
			//		returns the bounding box (its shape in this case)
			return this.shape;	// dojox/gfx.Rectangle
		},
		setStroke: function(){
			// summary:
			//		ignore setting a stroke style
			return this;	// self
		},
		setFill: function(){
			// summary:
			//		ignore setting a fill style
			return this;	// self
		}
	});
	
	shape.Text = declare(shape.Shape, {
		// summary:
		//		a generic text (do not instantiate it directly)
		constructor: function(rawNode){
			// rawNode: Node
			//		a DOM Node
			this.fontStyle = null;
			this.shape = g.getDefault("Text");
			this.rawNode = rawNode;
		},
		getFont: function(){
			// summary:
			//		returns the current font object or null
			return this.fontStyle;	// Object
		},
		setFont: function(newFont){
			// summary:
			//		sets a font for text
			// newFont: Object
			//		a font object (see dojox/gfx.defaultFont) or a font string
			this.fontStyle = typeof newFont == "string" ? g.splitFontString(newFont) :
				g.makeParameters(g.defaultFont, newFont);
			this._setFont();
			return this;	// self
		},
		getBoundingBox: function(){
			var bbox = null, s = this.getShape();
			if(s.text){
				bbox = g._base._computeTextBoundingBox(this);
			}
			return bbox;
		}
	});
	
	shape.Creator = {
		// summary:
		//		shape creators
		createShape: function(shape){
			// summary:
			//		creates a shape object based on its type; it is meant to be used
			//		by group-like objects
			// shape: Object
			//		a shape descriptor object
			// returns: dojox/gfx/shape.Shape | Null
			//      a fully instantiated surface-specific Shape object
			switch(shape.type){
				case g.defaultPath.type:		return this.createPath(shape);
				case g.defaultRect.type:		return this.createRect(shape);
				case g.defaultCircle.type:	    return this.createCircle(shape);
				case g.defaultEllipse.type:	    return this.createEllipse(shape);
				case g.defaultLine.type:		return this.createLine(shape);
				case g.defaultPolyline.type:	return this.createPolyline(shape);
				case g.defaultImage.type:		return this.createImage(shape);
				case g.defaultText.type:		return this.createText(shape);
				case g.defaultTextPath.type:	return this.createTextPath(shape);
			}
			return null;
		},
		createGroup: function(){
			// summary:
			//		creates a group shape
			return this.createObject(g.Group);	// dojox/gfx/Group
		},
		createRect: function(rect){
			// summary:
			//		creates a rectangle shape
			// rect: Object
			//		a path object (see dojox/gfx.defaultRect)
			return this.createObject(g.Rect, rect);	// dojox/gfx/shape.Rect
		},
		createEllipse: function(ellipse){
			// summary:
			//		creates an ellipse shape
			// ellipse: Object
			//		an ellipse object (see dojox/gfx.defaultEllipse)
			return this.createObject(g.Ellipse, ellipse);	// dojox/gfx/shape.Ellipse
		},
		createCircle: function(circle){
			// summary:
			//		creates a circle shape
			// circle: Object
			//		a circle object (see dojox/gfx.defaultCircle)
			return this.createObject(g.Circle, circle);	// dojox/gfx/shape.Circle
		},
		createLine: function(line){
			// summary:
			//		creates a line shape
			// line: Object
			//		a line object (see dojox/gfx.defaultLine)
			return this.createObject(g.Line, line);	// dojox/gfx/shape.Line
		},
		createPolyline: function(points){
			// summary:
			//		creates a polyline/polygon shape
			// points: Object
			//		a points object (see dojox/gfx.defaultPolyline)
			//		or an Array of points
			return this.createObject(g.Polyline, points);	// dojox/gfx/shape.Polyline
		},
		createImage: function(image){
			// summary:
			//		creates a image shape
			// image: Object
			//		an image object (see dojox/gfx.defaultImage)
			return this.createObject(g.Image, image);	// dojox/gfx/shape.Image
		},
		createText: function(text){
			// summary:
			//		creates a text shape
			// text: Object
			//		a text object (see dojox/gfx.defaultText)
			return this.createObject(g.Text, text);	// dojox/gfx/shape.Text
		},
		createPath: function(path){
			// summary:
			//		creates a path shape
			// path: Object
			//		a path object (see dojox/gfx.defaultPath)
			return this.createObject(g.Path, path);	// dojox/gfx/shape.Path
		},
		createTextPath: function(text){
			// summary:
			//		creates a text shape
			// text: Object
			//		a textpath object (see dojox/gfx.defaultTextPath)
			return this.createObject(g.TextPath, {}).setText(text);	// dojox/gfx/shape.TextPath
		},
		createObject: function(shapeType, rawShape){
			// summary:
			//		creates an instance of the passed shapeType class
			// shapeType: Function
			//		a class constructor to create an instance of
			// rawShape: Object 
			//		properties to be passed in to the classes 'setShape' method
	
			// SHOULD BE RE-IMPLEMENTED BY THE RENDERER!
			return null;	// dojox/gfx/shape.Shape
		}
	};
	
	/*=====
	 lang.extend(shape.Surface, shape.Container);
	 lang.extend(shape.Surface, shape.Creator);

	 g.Group = declare(shape.Shape, {
		// summary:
		//		a group shape, which can be used
		//		to logically group shapes (e.g, to propagate matricies)
	});
	lang.extend(g.Group, shape.Container);
	lang.extend(g.Group, shape.Creator);

	g.Rect     = shape.Rect;
	g.Circle   = shape.Circle;
	g.Ellipse  = shape.Ellipse;
	g.Line     = shape.Line;
	g.Polyline = shape.Polyline;
	g.Text     = shape.Text;
	g.Surface  = shape.Surface;
	=====*/

	return shape;
}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=77.js.map