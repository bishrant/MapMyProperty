(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/core/libs/gl-matrix-2/factories/mat4f64":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/factories/mat4f64.js",
	"arcgis-js-api/core/libs/gl-matrix-2/mat3f64":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat3f64.js",
	"esri/core/libs/gl-matrix-2/mat3f64":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat3f64.js",
	"arcgis-js-api/core/libs/gl-matrix-2/mat4f64":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4f64.js",
	"esri/core/libs/gl-matrix-2/mat4f64":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4f64.js",
	"arcgis-js-api/views/2d/layers/features/tileRenderers/support/visualVariablesUtils":"./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/support/visualVariablesUtils.js",
	"esri/views/2d/layers/features/tileRenderers/support/visualVariablesUtils":"./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/support/visualVariablesUtils.js",
	"esri/views/3d/layers/support/FastSymbolUpdates":"./node_modules/arcgis-js-api/views/3d/layers/support/FastSymbolUpdates.js",
	"esri/views/3d/support/debugFlags":"./node_modules/arcgis-js-api/views/3d/support/debugFlags.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/factories/mat4f64.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/libs/gl-matrix-2/factories/mat4f64.js ***!
  \*******************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,n){function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function t(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function u(e,n,r,t,u,o,c,i,f,a,l,d,s,p,w,y){return[e,n,r,t,u,o,c,i,f,a,l,d,s,p,w,y]}function o(e,n){return new Float64Array(e,n,16)}Object.defineProperty(n,"__esModule",{value:!0}),n.create=r,n.clone=t,n.fromValues=u,n.createView=o,n.IDENTITY=r()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat3f64.js":
/*!*********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat3f64.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./factories/mat3f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/factories/mat3f64.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,f){Object.defineProperty(t,"__esModule",{value:!0}),t.mat3f64=f}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4f64.js":
/*!*********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4f64.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./factories/mat4f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/factories/mat4f64.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,f){Object.defineProperty(t,"__esModule",{value:!0}),t.mat4f64=f}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/support/visualVariablesUtils.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/support/visualVariablesUtils.js ***!
  \***********************************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../../../../core/screenUtils */ "./node_modules/arcgis-js-api/core/screenUtils.js"),__webpack_require__(/*! ../../../../engine */ "./node_modules/arcgis-js-api/views/2d/engine.js"),__webpack_require__(/*! ../../../../engine/webgl/definitions */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/definitions.js"),__webpack_require__(/*! ../../../../../3d/layers/support/FastSymbolUpdates */ "./node_modules/arcgis-js-api/views/3d/layers/support/FastSymbolUpdates.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,a,s,r,n){function l(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function o(e){return{value:e.value,size:a.toPt(e.size)}}function u(e){return e.map(function(e){return o(e)})}function p(e){if("string"==typeof e||"number"==typeof e)return a.toPt(e);var t=e;return{type:"size",expression:t.expression,stops:u(t.stops)}}function v(e){var t=e&&e.length>0?{}:null;return t&&e.forEach(function(e){var i=e.type;e.field&&(t[i]=e.field)}),t}function c(e){var t=e&&e.length>0?{}:null,a=t?{}:null;if(!t)return{vvFields:t,vvRanges:a};for(var r=0,l=e;r<l.length;r++){var o=l[r],v=o.type;if(o.field&&(t[v]=o.field),"size"===v){a.size||(a.size={});var c=o;switch(s.getTypeOfSizeVisualVariable(c)){case S.SIZE_MINMAX_VALUE:a.size.minMaxValue={minDataValue:c.minDataValue,maxDataValue:c.maxDataValue,minSize:p(c.minSize),maxSize:p(c.maxSize)};break;case S.SIZE_SCALE_STOPS:a.size.scaleStops={stops:u(c.stops)};break;case S.SIZE_FIELD_STOPS:if(c.levels){var d={};for(var m in c.levels)d[m]=z(c.levels[m]);a.size.fieldStops={type:"level-dependent",levels:d}}else a.size.fieldStops=i({type:"static"},z(c.stops));break;case S.SIZE_UNIT_VALUE:a.size.unitValue={unit:c.valueUnit,valueRepresentation:c.valueRepresentation}}}else if("color"===v){var y=n.convertVisualVariables([o],{modelSize:null,symbolSize:null,unitInMeters:1,transformation:null});a.color=y.color;for(var V=0;V<32;V+=4)s.color.premultiplyAlpha(a.color.colors,V,!0)}else if("opacity"===v)a.opacity=f(o);else if("rotation"===v){var g=o;a.rotation={type:g.rotationType}}}return{vvFields:t,vvRanges:a}}function f(e){var t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(s.Utils.isString(e.field)){if(!e.stops)return null;if(e.stops.length>8)return null;for(var i=e.stops,a=0;a<8;++a){var r=Math.min(a,i.length-1),n=i[r];t.values[a]=n.value,t.opacities[a]=n.opacity}}else{if(!(e.stops&&e.stops.length>=0))return null;for(var l=e.stops&&e.stops.length>=0&&e.stops[0].opacity,a=0;a<8;a++)t.values[a]=1/0,t.opacities[a]=l}return t}Object.defineProperty(t,"__esModule",{value:!0});var S=s.enums.WGLVVFlag;t.getVisualVariableSizeValueRepresentationRatio=l,t.stopToSizeStop=o,t.normalizeSizeStops=u,t.normalizeSizeElement=p,t.getVisualVariablesFields=v;var z=function(e){for(var t=[],i=[],s=u(e),n=s.length,l=0;l<6;l++){var o=s[Math.min(l,n-1)];t.push(o.value),i.push(null==o.size?r.NAN_MAGIC_NUMBER:a.pt2px(o.size))}return{values:new Float32Array(t),sizes:new Float32Array(i)}};t.convertVisualVariables=c}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/layers/support/FastSymbolUpdates.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/layers/support/FastSymbolUpdates.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/compilerUtils */ "./node_modules/arcgis-js-api/core/compilerUtils.js"),__webpack_require__(/*! ../../../../core/mathUtils */ "./node_modules/arcgis-js-api/core/mathUtils.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/mat3 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat3.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/mat3f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat3f64.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/mat4 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/mat4f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4f64.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3f64.js"),__webpack_require__(/*! ../../../../renderers/support/utils */ "./node_modules/arcgis-js-api/renderers/support/utils.js"),__webpack_require__(/*! ../../support/debugFlags */ "./node_modules/arcgis-js-api/views/3d/support/debugFlags.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,o,i,a,n,r,l,s,u,f,c){function p(e){return null!==e&&void 0!==e}function v(e){return"number"==typeof e}function d(e){return"string"==typeof e}function z(e){return null==e||d(e)}function m(e,t){e&&e.push(t),y(t)}function S(e){D&&console.warn("[FastSymbolUpdates] "+e)}function y(e){D&&console.info("[FastSymbolUpdates] "+e)}function b(e,t,o,i){void 0===i&&(i=l.mat4f64.create());var a=e||0,n=t||0,s=o||0;return 0!==a&&r.mat4.rotateZ(i,i,-a/180*Math.PI),0!==n&&r.mat4.rotateX(i,i,n/180*Math.PI),0!==s&&r.mat4.rotateY(i,i,s/180*Math.PI),i}function x(e,t,o,i,a){var n=e.minSize,r=e.maxSize;if(e.expression)return m(a,"Could not convert size info: expression not supported"),!1;if(e.useSymbolValue){var l=i.symbolSize[o];return t.minSize[o]=l,t.maxSize[o]=l,t.offset[o]=t.minSize[o],t.factor[o]=0,t.type[o]=1,!0}if(p(e.field))return p(e.stops)?2===e.stops.length&&v(e.stops[0].size)&&v(e.stops[1].size)?(h(e.stops[0].size,e.stops[1].size,e.stops[0].value,e.stops[1].value,t,o),t.type[o]=1,!0):(m(a,"Could not convert size info: stops only supported with 2 elements"),!1):v(n)&&v(r)&&p(e.minDataValue)&&p(e.maxDataValue)?(h(n,r,e.minDataValue,e.maxDataValue,t,o),t.type[o]=1,!0):null!=f.meterIn[e.valueUnit]?(t.minSize[o]=-1/0,t.maxSize[o]=1/0,t.offset[o]=0,t.factor[o]=1/f.meterIn[e.valueUnit],t.type[o]=1,!0):"unknown"===e.valueUnit?(m(a,"Could not convert size info: proportional size not supported"),!1):(m(a,"Could not convert size info: scale-dependent size not supported"),!1);if(!p(e.field)){if(e.stops&&e.stops[0]&&v(e.stops[0].size))return t.minSize[o]=e.stops[0].size,t.maxSize[o]=e.stops[0].size,t.offset[o]=t.minSize[o],t.factor[o]=0,t.type[o]=1,!0;if(v(n))return t.minSize[o]=n,t.maxSize[o]=n,t.offset[o]=n,t.factor[o]=0,t.type[o]=1,!0}return m(a,"Could not convert size info: unsupported variant of sizeInfo"),!1}function h(e,t,o,i,a,n){var r=Math.abs(i-o)>0?(t-e)/(i-o):0;a.minSize[n]=r>0?e:t,a.maxSize[n]=r>0?t:e,a.offset[n]=e-o*r,a.factor[n]=r}function g(e,t,o,i){if(e.normalizationField||e.valueRepresentation)return m(i,"Could not convert size info: unsupported property"),null;if(!z(e.field))return m(i,"Could not convert size info: field is not a string"),null;if(t.size){if(e.field)if(t.size.field){if(e.field!==t.size.field)return m(i,"Could not convert size info: multiple fields in use"),null}else t.size.field=e.field}else t.size={field:e.field,minSize:[0,0,0],maxSize:[0,0,0],offset:[0,0,0],factor:[0,0,0],type:[0,0,0]};var a;switch(e.axis){case"width":return a=x(e,t.size,0,o,i),a?t:null;case"height":return a=x(e,t.size,2,o,i),a?t:null;case"depth":return a=x(e,t.size,1,o,i),a?t:null;case"width-and-depth":return a=x(e,t.size,0,o,i),a&&x(e,t.size,1,o,i),a?t:null;case null:case void 0:case"all":return a=x(e,t.size,0,o,i),a=a&&x(e,t.size,1,o,i),a=a&&x(e,t.size,2,o,i),a?t:null;default:return m(i,'Could not convert size info: unknown axis "'+e.axis+'""'),null}}function C(e,t,o){for(var i=0;i<3;++i){var a=t.unitInMeters;1===e.type[i]&&(a*=t.modelSize[i],e.type[i]=2),e.minSize[i]=e.minSize[i]/a,e.maxSize[i]=e.maxSize[i]/a,e.offset[i]=e.offset[i]/a,e.factor[i]=e.factor[i]/a}var n;if(0!==e.type[0])n=0;else if(0!==e.type[1])n=1;else{if(0===e.type[2])return m(o,"No size axis contains a valid size or scale"),!1;n=2}for(var i=0;i<3;++i)0===e.type[i]&&(e.minSize[i]=e.minSize[n],e.maxSize[i]=e.maxSize[n],e.offset[i]=e.offset[n],e.factor[i]=e.factor[n],e.type[i]=e.type[n]);return!0}function M(e,t,o){e[4*t+0]=o.r/255,e[4*t+1]=o.g/255,e[4*t+2]=o.b/255,e[4*t+3]=o.a}function V(e,t,o){if(e.normalizationField)return m(o,"Could not convert color info: unsupported property"),null;if(d(e.field)){if(!e.stops)return m(o,"Could not convert color info: missing stops or colors"),null;if(e.stops.length>8)return m(o,"Could not convert color info: too many color stops"),null;t.color={field:e.field,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(var i=e.stops,a=0;a<8;++a){var n=Math.min(a,i.length-1),r=i[n];t.color.values[a]=r.value,M(t.color.colors,a,r.color)}}else{if(!(e.stops&&e.stops.length>=0))return m(o,"Could not convert color info: no field and no colors/stops"),null;var l=e.stops&&e.stops.length>=0&&e.stops[0].color;t.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(var a=0;a<8;a++)t.color.values[a]=1/0,M(t.color.colors,a,l)}return t}function T(e,t,o){if(e.normalizationField)return m(o,"Could not convert opacity info: unsupported property"),null;if(d(e.field)){if(!e.stops)return m(o,"Could not convert opacity info: missing stops or opacities"),null;if(e.stops.length>8)return m(o,"Could not convert opacity info: too many opacity stops"),null;t.opacity={field:e.field,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(var i=e.stops,a=0;a<8;++a){var n=Math.min(a,i.length-1),r=i[n];t.opacity.values[a]=r.value,t.opacity.opacityValues[a]=r.opacity}}else{if(!(e.stops&&e.stops.length>=0))return m(o,"Could not convert opacity info: no field and no opacities/stops"),null;var l=e.stops&&e.stops.length>=0&&e.stops[0].opacity;t.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(var a=0;a<8;a++)t.opacity.values[a]=1/0,t.opacity.opacityValues[a]=l}return t}function F(e,t,o){var i=2===o&&"arithmetic"===e.rotationType;t.offset[o]=i?90:0,t.factor[o]=i?-1:1,t.type[o]=1}function O(e,t,o){if(!d(e.field))return m(o,"Could not convert rotation info: field is not a string"),null;if(t.rotation){if(e.field)if(t.rotation.field){if(e.field!==t.rotation.field)return m(o,"Could not convert rotation info: multiple fields in use"),null}else t.rotation.field=e.field}else t.rotation={field:e.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(e.axis){case"tilt":return F(e,t.rotation,0),t;case"roll":return F(e,t.rotation,1),t;case null:case void 0:case"heading":return F(e,t.rotation,2),t;default:return m(o,'Could not convert rotation info: unknown axis "'+e.axis+'""'),null}}function E(e,t,i){if(!e)return null;var a=!t.supportedTypes||!!t.supportedTypes.size,n=!t.supportedTypes||!!t.supportedTypes.color,r=!t.supportedTypes||!!t.supportedTypes.rotation,l=!!t.supportedTypes&&!!t.supportedTypes.opacity;D&&(i=i||[]);var s=e.reduce(function(e,s){if(!e)return e;if(s.valueExpression)return m(i,"Could not convert visual variables: arcade expressions not supported"),null;switch(s.type){case"size":return a?g(s,e,t,i):e;case"color":return n?V(s,e,i):e;case"opacity":return l?T(s,e,i):null;case"rotation":return r?O(s,e,i):e;default:return o.neverReached(s),null}},{size:null,color:null,opacity:null,rotation:null});return!(e.length>0&&s)||s.size||s.color||s.opacity||s.rotation?s&&s.size&&!C(s.size,t,i)?null:s:null}function U(e){return e&&null!=e.size}function w(e,t){if(_)return S("State not initialized, fast updates disabled (globally disabled)"),{enabled:!1};if(!e)return S("State not initialized, fast updates disabled (no renderer)"),{enabled:!1};if(c.DISABLE_FAST_UPDATES)return S("State not initialized, fast updates disabled (DISABLE_FAST_SYMBOL_UPDATES set)"),{enabled:!1};var o=E(e.visualVariables,t);return o?(y("State initialized, fast updates enabled"),{enabled:!0,visualVariables:o,materialParameters:P(o,t),requiresShaderTransformation:U(o)}):(S("State not initialized, fast updates disabled (conversion failed)"),{enabled:!1})}function A(e,t,o){if(!t||!e.enabled)return!1;var i=e.visualVariables,a=E(t.visualVariables,o);return a?!!(I(i.size,a.size,"size")&&I(i.color,a.color,"color")&&I(i.rotation,a.rotation,"rotation")&&I(i.opacity,a.opacity,"opacity"))&&(e.visualVariables=a,e.materialParameters=P(a,o),e.requiresShaderTransformation=U(a),y("State updated"),!0):(S("State update failed (conversion failed)"),!1)}function I(e,t,o){if(!!e!=!!t)return S("State update failed ({$name} enabled/disabled)"),!1;if(e&&e.field!==t.field)return S("State update failed ({$name} field changed)"),!1;if(e&&"rotation"===o)for(var i=e,a=t,n=0;n<3;n++)if(i.type[n]!==a.type[n]||i.offset[n]!==a.offset[n]||i.factor[n]!==a.factor[n])return!1;return!0}function P(e,t){var o={vvSizeEnabled:!1,vvSizeMinSize:null,vvSizeMaxSize:null,vvSizeOffset:null,vvSizeFactor:null,vvSizeValue:null,vvColorEnabled:!1,vvColorValues:null,vvColorColors:null,vvOpacityEnabled:!1,vvOpacityValues:null,vvOpacityOpacities:null,vvSymbolAnchor:null,vvSymbolRotationMatrix:null},i=U(e);return e&&e.size?(o.vvSizeEnabled=!0,o.vvSizeMinSize=e.size.minSize,o.vvSizeMaxSize=e.size.maxSize,o.vvSizeOffset=e.size.offset,o.vvSizeFactor=e.size.factor):e&&i&&(o.vvSizeValue=t.transformation.scale),e&&i&&(o.vvSymbolAnchor=t.transformation.anchor,o.vvSymbolRotationMatrix=n.mat3f64.create(),r.mat4.identity(k),b(t.transformation.rotation[2],t.transformation.rotation[0],t.transformation.rotation[1],k),a.mat3.fromMat4(o.vvSymbolRotationMatrix,k)),e&&e.color&&(o.vvColorEnabled=!0,o.vvColorValues=e.color.values,o.vvColorColors=e.color.colors),e&&e.opacity&&(o.vvOpacityEnabled=!0,o.vvOpacityValues=e.opacity.values,o.vvOpacityOpacities=e.opacity.opacityValues),o}Object.defineProperty(t,"__esModule",{value:!0});var D=!1,_=!1;t.convertVisualVariables=E,t.initFastSymbolUpdatesState=w,t.updateFastSymbolUpdatesState=A,t.getMaterialParams=P;var R;!function(e){function t(e,t,o){if(!e.vvSizeEnabled)return o;r.mat4.copy(a,o);var l=e.vvSymbolRotationMatrix;r.mat4.set(k,l[0],l[1],l[2],0,l[3],l[4],l[5],0,l[6],l[7],l[8],0,0,0,0,1),r.mat4.multiply(a,a,k);for(var s=0;s<3;++s){var u=e.vvSizeOffset[s]+t[0]*e.vvSizeFactor[s];n[s]=i.clamp(u,e.vvSizeMinSize[s],e.vvSizeMaxSize[s])}return r.mat4.scale(a,a,n),r.mat4.translate(a,a,e.vvSymbolAnchor),a}function o(e,t,o){if(!t.vvSizeEnabled)return s.vec3.set(e,1,1,1);for(var a=0;a<3;++a){var n=t.vvSizeOffset[a]+o[0]*t.vvSizeFactor[a];e[a]=i.clamp(n,t.vvSizeMinSize[a],t.vvSizeMaxSize[a])}return e}var a=l.mat4f64.create(),n=u.vec3f64.create();e.evaluateModelTransform=t,e.evaluateModelTransformScale=o}(R||(R={}));var k=l.mat4f64.create();t.evaluateModelTransform=R.evaluateModelTransform,t.evaluateModelTransformScale=R.evaluateModelTransformScale}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/debugFlags.js":
/*!*******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/debugFlags.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(E,_,o,I,T,S){return new(function(E){function _(){var _=null!==E&&E.apply(this,arguments)||this;return _.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,_.SCENEVIEW_LOCKING_LOG=!1,_.HIGHLIGHTS_GRID_OPTIMIZATION_DISABLED=!1,_.HIGHLIGHTS_VISUALIZE_BLOCKS=!1,_.HIGHLIGHTS_PROFILE_TO_CONSOLE=!1,_.DECONFLICTOR_SHOW_OUTLINES=!1,_.DECONFLICTOR_SHOW_OUTLINES_INVISIBLE=!1,_.DECONFLICTOR_SHOW_GRID=!1,_.LABELS_SHOW_BORDER=!1,_.OVERLAY_DRAW_TEST_TEXTURE=!1,_.OVERLAY_SHOW_CENTER=!1,_.TESTS_DISABLE_UPDATE_THRESHOLDS=!1,_.DISABLE_DECONFLICTOR_VISIBILITY_OFFSET=!1,_.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES=!1,_.DRAW_MESH_GEOMETRY_NORMALS=!1,_.FEATURE_TILE_FETCH_SHOW_TILES=!1,_.FEATURE_TILE_TREE_SHOW_TILES=!1,_.TERRAIN_TILE_TREE_SHOW_TILES=!1,_.I3S_TREE_SHOW_TILES=!1,_.ENABLE_PROFILE_DEPTH_RANGE=!1,_.DISABLE_FAST_UPDATES=!1,_.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,_.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,_.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,_}return o(_,E),I([S.property()],_.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),I([S.property()],_.prototype,"SCENEVIEW_LOCKING_LOG",void 0),I([S.property()],_.prototype,"HIGHLIGHTS_GRID_OPTIMIZATION_DISABLED",void 0),I([S.property()],_.prototype,"HIGHLIGHTS_VISUALIZE_BLOCKS",void 0),I([S.property()],_.prototype,"HIGHLIGHTS_PROFILE_TO_CONSOLE",void 0),I([S.property()],_.prototype,"DECONFLICTOR_SHOW_OUTLINES",void 0),I([S.property()],_.prototype,"DECONFLICTOR_SHOW_OUTLINES_INVISIBLE",void 0),I([S.property()],_.prototype,"DECONFLICTOR_SHOW_GRID",void 0),I([S.property()],_.prototype,"LABELS_SHOW_BORDER",void 0),I([S.property()],_.prototype,"OVERLAY_DRAW_TEST_TEXTURE",void 0),I([S.property()],_.prototype,"OVERLAY_SHOW_CENTER",void 0),I([S.property()],_.prototype,"TESTS_DISABLE_UPDATE_THRESHOLDS",void 0),I([S.property()],_.prototype,"DISABLE_DECONFLICTOR_VISIBILITY_OFFSET",void 0),I([S.property()],_.prototype,"DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES",void 0),I([S.property()],_.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),I([S.property()],_.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),I([S.property()],_.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),I([S.property()],_.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),I([S.property()],_.prototype,"I3S_TREE_SHOW_TILES",void 0),I([S.property()],_.prototype,"ENABLE_PROFILE_DEPTH_RANGE",void 0),I([S.property()],_.prototype,"DISABLE_FAST_UPDATES",void 0),I([S.property()],_.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),I([S.property()],_.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),I([S.property()],_.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),_=I([S.subclass("esri.views.3d.support.DebugFlags")],_)}(S.declared(T)))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=22.js.map