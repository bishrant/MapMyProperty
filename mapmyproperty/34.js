(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/core/ObjectStack":"./node_modules/arcgis-js-api/core/ObjectStack.js",
	"esri/core/VectorStack":"./node_modules/arcgis-js-api/core/VectorStack.js",
	"esri/core/libs/gl-matrix-2/factories/mat4f64":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/factories/mat4f64.js",
	"esri/core/libs/gl-matrix-2/factories/vec4f64":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/factories/vec4f64.js",
	"arcgis-js-api/core/libs/gl-matrix-2/mat3f64":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat3f64.js",
	"esri/core/libs/gl-matrix-2/mat3f64":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat3f64.js",
	"arcgis-js-api/core/libs/gl-matrix-2/mat4f64":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4f64.js",
	"esri/core/libs/gl-matrix-2/mat4f64":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4f64.js",
	"arcgis-js-api/core/libs/gl-matrix-2/vec4":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec4.js",
	"esri/core/libs/gl-matrix-2/vec4":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec4.js",
	"arcgis-js-api/core/libs/gl-matrix-2/vec4f64":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec4f64.js",
	"esri/core/libs/gl-matrix-2/vec4f64":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec4f64.js",
	"arcgis-js-api/views/3d/support/geometryUtils":"./node_modules/arcgis-js-api/views/3d/support/geometryUtils.js",
	"esri/views/3d/support/geometryUtils":"./node_modules/arcgis-js-api/views/3d/support/geometryUtils.js",
	"esri/views/3d/support/geometryUtils/axisAngle":"./node_modules/arcgis-js-api/views/3d/support/geometryUtils/axisAngle.js",
	"arcgis-js-api/views/3d/support/geometryUtils/boundedPlane":"./node_modules/arcgis-js-api/views/3d/support/geometryUtils/boundedPlane.js",
	"esri/views/3d/support/geometryUtils/boundedPlane":"./node_modules/arcgis-js-api/views/3d/support/geometryUtils/boundedPlane.js",
	"esri/views/3d/support/geometryUtils/clipRay":"./node_modules/arcgis-js-api/views/3d/support/geometryUtils/clipRay.js",
	"esri/views/3d/support/geometryUtils/frustum":"./node_modules/arcgis-js-api/views/3d/support/geometryUtils/frustum.js",
	"esri/views/3d/support/geometryUtils/lineSegment":"./node_modules/arcgis-js-api/views/3d/support/geometryUtils/lineSegment.js",
	"arcgis-js-api/views/3d/support/geometryUtils/plane":"./node_modules/arcgis-js-api/views/3d/support/geometryUtils/plane.js",
	"esri/views/3d/support/geometryUtils/plane":"./node_modules/arcgis-js-api/views/3d/support/geometryUtils/plane.js",
	"arcgis-js-api/views/3d/support/geometryUtils/ray":"./node_modules/arcgis-js-api/views/3d/support/geometryUtils/ray.js",
	"esri/views/3d/support/geometryUtils/ray":"./node_modules/arcgis-js-api/views/3d/support/geometryUtils/ray.js",
	"arcgis-js-api/views/3d/support/geometryUtils/sphere":"./node_modules/arcgis-js-api/views/3d/support/geometryUtils/sphere.js",
	"esri/views/3d/support/geometryUtils/sphere":"./node_modules/arcgis-js-api/views/3d/support/geometryUtils/sphere.js",
	"esri/views/3d/support/geometryUtils/triangle":"./node_modules/arcgis-js-api/views/3d/support/geometryUtils/triangle.js",
	"arcgis-js-api/views/3d/support/geometryUtils/vector":"./node_modules/arcgis-js-api/views/3d/support/geometryUtils/vector.js",
	"esri/views/3d/support/geometryUtils/vector":"./node_modules/arcgis-js-api/views/3d/support/geometryUtils/vector.js",
	"arcgis-js-api/views/3d/support/stack":"./node_modules/arcgis-js-api/views/3d/support/stack.js",
	"esri/views/3d/support/stack":"./node_modules/arcgis-js-api/views/3d/support/stack.js",
	"arcgis-js-api/views/3d/webgl-engine/lib/ComponentUtils":"./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/ComponentUtils.js",
	"esri/views/3d/webgl-engine/lib/ComponentUtils":"./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/ComponentUtils.js",
	"arcgis-js-api/views/3d/webgl-engine/lib/Util":"./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/Util.js",
	"esri/views/3d/webgl-engine/lib/Util":"./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/Util.js",
	"arcgis-js-api/views/3d/webgl-engine/lib/geometryDataUtils":"./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/geometryDataUtils.js",
	"esri/views/3d/webgl-engine/lib/geometryDataUtils":"./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/geometryDataUtils.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/arcgis-js-api/core/ObjectStack.js":
/*!********************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/ObjectStack.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./nextTick */ "./node_modules/arcgis-js-api/core/nextTick.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,i,e){Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function t(t){var i=this;this.allocator=t,this.items=[],this.itemsPtr=0,this.tickHandle=e.before(function(){return i.reset()}),this.grow()}return t.prototype.destroy=function(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=null),this.items=null},t.prototype.get=function(){return 0===this.itemsPtr&&e(function(){}),this.itemsPtr===this.items.length&&this.grow(),this.items[this.itemsPtr++]},t.prototype.reset=function(){var t=Math.min(3*Math.max(8,this.itemsPtr),this.itemsPtr+3*r);this.items.length=Math.min(t,this.items.length),this.itemsPtr=0},t.prototype.grow=function(){for(var t=0;t<Math.max(8,Math.min(this.items.length,r));t++)this.items.push(this.allocator())},t}();i.ObjectStack=s;var r=1024;i.default=s}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/core/VectorStack.js":
/*!********************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/VectorStack.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./nextTick */ "./node_modules/arcgis-js-api/core/nextTick.js"),__webpack_require__(/*! ./libs/gl-matrix-2/mat3f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat3f64.js"),__webpack_require__(/*! ./libs/gl-matrix-2/mat4f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4f64.js"),__webpack_require__(/*! ./libs/gl-matrix-2/quatf64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/quatf64.js"),__webpack_require__(/*! ./libs/gl-matrix-2/vec2f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec2f64.js"),__webpack_require__(/*! ./libs/gl-matrix-2/vec3f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3f64.js"),__webpack_require__(/*! ./libs/gl-matrix-2/vec4f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec4f64.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,r,s,f,n,u,h){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t,r){var s=this;this.itemByteSize=e,this.itemCreate=t,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(r/this.itemByteSize),this.tickHandle=i.before(function(){return s.reset()})}return e.prototype.destroy=function(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=null),this.itemsPtr=0,this.items=null,this.buffers=null},e.prototype.get=function(){0===this.itemsPtr&&i(function(){});for(var e=Math.floor(this.itemsPtr/this.itemsPerBuffer);this.buffers.length<=e;){for(var t=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize),r=0;r<this.itemsPerBuffer;++r)this.items.push(this.itemCreate(t,r*this.itemByteSize));this.buffers.push(t)}return this.items[this.itemsPtr++]},e.prototype.reset=function(){for(var e=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);this.buffers.length>e;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0},e.createVec2f64=function(t){return void 0===t&&(t=c),new e(16,n.vec2f64.createView,t)},e.createVec3f64=function(t){return void 0===t&&(t=c),new e(24,u.vec3f64.createView,t)},e.createVec4f64=function(t){return void 0===t&&(t=c),new e(32,h.vec4f64.createView,t)},e.createMat3f64=function(t){return void 0===t&&(t=c),new e(72,r.mat3f64.createView,t)},e.createMat4f64=function(t){return void 0===t&&(t=c),new e(128,s.mat4f64.createView,t)},e.createQuatf64=function(t){return void 0===t&&(t=c),new e(32,f.quatf64.createView,t)},Object.defineProperty(e.prototype,"test",{get:function(){return{size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}},enumerable:!0,configurable:!0}),e}();t.VectorStack=a;var c=4096}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

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

/***/ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/factories/vec4f64.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/libs/gl-matrix-2/factories/vec4f64.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(n,r){function t(){return[0,0,0,0]}function e(n){return[n[0],n[1],n[2],n[3]]}function u(n,r,t,e){return[n,r,t,e]}function o(n){for(var r=t(),e=Math.min(4,n.length),u=0;u<e;++u)r[u]=n[u];return r}function i(n,r){return new Float64Array(n,r,4)}function f(){return t()}function c(){return u(1,1,1,1)}function a(){return u(1,0,0,0)}function l(){return u(0,1,0,0)}function _(){return u(0,0,1,0)}function s(){return u(0,0,0,1)}Object.defineProperty(r,"__esModule",{value:!0}),r.create=t,r.clone=e,r.fromValues=u,r.fromArray=o,r.createView=i,r.zeros=f,r.ones=c,r.unitX=a,r.unitY=l,r.unitZ=_,r.unitW=s,r.ZEROS=f(),r.ONES=c(),r.UNIT_X=a(),r.UNIT_Y=l(),r.UNIT_Z=_(),r.UNIT_W=s()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
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

/***/ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec4.js":
/*!******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec4.js ***!
  \******************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./math/vec4 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/math/vec4.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.vec4=t}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec4f64.js":
/*!*********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec4f64.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./factories/vec4f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/factories/vec4f64.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,f,r){Object.defineProperty(f,"__esModule",{value:!0}),f.vec4f64=r}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/geometryUtils.js ***!
  \**********************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./geometryUtils/axisAngle */ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/axisAngle.js"),__webpack_require__(/*! ./geometryUtils/boundedPlane */ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/boundedPlane.js"),__webpack_require__(/*! ./geometryUtils/frustum */ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/frustum.js"),__webpack_require__(/*! ./geometryUtils/lineSegment */ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/lineSegment.js"),__webpack_require__(/*! ./geometryUtils/plane */ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/plane.js"),__webpack_require__(/*! ./geometryUtils/ray */ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/ray.js"),__webpack_require__(/*! ./geometryUtils/sphere */ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/sphere.js"),__webpack_require__(/*! ./geometryUtils/triangle */ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/triangle.js"),__webpack_require__(/*! ./geometryUtils/vector */ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/vector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,l,i,n,o,s,g,m,y){Object.defineProperty(t,"__esModule",{value:!0}),t.plane=o,t.boundedPlane=l,t.triangle=m,t.lineSegment=n,t.ray=s,t.sphere=g,t.frustum=i,t.vector=y,t.axisAngle=r}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/axisAngle.js":
/*!********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/geometryUtils/axisAngle.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3.js"),__webpack_require__(/*! ../stack */ "./node_modules/arcgis-js-api/views/3d/support/stack.js"),__webpack_require__(/*! ./vector */ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/vector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,n,r,o,t){function i(e){return void 0===e&&(e=n.UP),[e[0],e[1],e[2],e[3]]}function c(e,n,r,t){return v(e,n,r,t,o.sv4d.get())}function u(e,n){return v(e[0],e[1],e[2],n,o.sv4d.get())}function f(e,n){return void 0===n&&(n=i()),v(e[0],e[1],e[2],e[3],n)}function v(e,n,r,o,t){return void 0===t&&(t=i()),t[0]=e,t[1]=n,t[2]=r,t[3]=o,t}function s(e,n,o){return void 0===o&&(o=i()),r.vec3.copy(o,e),o[3]=n,o}function d(e,n,o){return void 0===o&&(o=i()),r.vec3.cross(o,e,n),r.vec3.normalize(o,o),o[3]=t.angle(e,n),o}Object.defineProperty(n,"__esModule",{value:!0}),n.create=i,n.wrap=c,n.wrapAxisAngle=u,n.copy=f,n.fromValues=v,n.fromAxisAndAngle=s,n.fromPoints=d,n.UP=[0,0,1,0]}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/boundedPlane.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/geometryUtils/boundedPlane.js ***!
  \***********************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/compilerUtils */ "./node_modules/arcgis-js-api/core/compilerUtils.js"),__webpack_require__(/*! ../../../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../../../core/mathUtils */ "./node_modules/arcgis-js-api/core/mathUtils.js"),__webpack_require__(/*! ../../../../core/ObjectStack */ "./node_modules/arcgis-js-api/core/ObjectStack.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/mat4 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/mat4f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4f64.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3f64.js"),__webpack_require__(/*! ../mathUtils */ "./node_modules/arcgis-js-api/views/3d/support/mathUtils.js"),__webpack_require__(/*! ../stack */ "./node_modules/arcgis-js-api/views/3d/support/stack.js"),__webpack_require__(/*! ./lineSegment */ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/lineSegment.js"),__webpack_require__(/*! ./plane */ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/plane.js"),__webpack_require__(/*! ./ray */ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/ray.js"),__webpack_require__(/*! ./vector */ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/vector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,n,i,r,a,c,o,s,v,l,g,u,d,f,b){function p(e){return void 0===e&&(e=t.UP),{plane:d.create(e.plane),origin:v.vec3f64.clone(e.origin),basis1:v.vec3f64.clone(e.basis1),basis2:v.vec3f64.clone(e.basis2)}}function m(e,t,n){var i=K.get();return i.origin=e,i.basis1=t,i.basis2=n,i.plane=d.fromVectorsAndPoint(n,t,e,d.wrap(0,0,0,0)),i}function h(e,t){return void 0===t&&(t=p()),P(e.origin,e.basis1,e.basis2,t)}function P(e,t,n,i){return void 0===i&&(i=p()),s.vec3.copy(i.origin,e),s.vec3.copy(i.basis1,t),s.vec3.copy(i.basis2,n),d.fromVectorsAndPoint(n,t,e,i.plane),Y(i,"fromValues()"),i}function I(e,t,n){e!==n&&h(e,n);var i=s.vec3.scale(g.sv3d.get(),e.plane,t);return s.vec3.add(n.origin,n.origin,i),n.plane[3]-=t,n}function y(e,t,n){return S(t,n),I(n,C(e,e.origin),n),n}function S(e,t){void 0===t&&(t=p());var n=(e[2]-e[0])/2,i=(e[3]-e[1])/2;return s.vec3.set(t.origin,e[0]+n,e[1]+i,0),s.vec3.set(t.basis1,n,0,0),s.vec3.set(t.basis2,0,i,0),d.fromValues(0,0,1,0,t.plane),t}function M(e,t,n){return!!d.intersectRay(e.plane,t,n)&&_(e,n)}function j(e,t,n){if(M(e,t,n))return n;var i=V(e,t,g.sv3d.get());return s.vec3.add(n,t.origin,s.vec3.scale(g.sv3d.get(),t.direction,s.vec3.distance(t.origin,i)/s.vec3.length(t.direction))),n}function V(e,t,n){var i=D.get();B(e,t,i,D.get());for(var a=Number.POSITIVE_INFINITY,c=0,o=Q;c<o.length;c++){var v=o[c],u=R(e,v,H.get()),f=g.sv3d.get();if(d.intersectLineSegment(i,u,f)){var b=l.directionFromTo(g.sv3d.get(),t.origin,f),p=Math.abs(r.acosClamped(s.vec3.dot(t.direction,b)));p<a&&(a=p,s.vec3.copy(n,f))}}return a===Number.POSITIVE_INFINITY?N(e,t,n):n}function N(e,t,n){if(M(e,t,n))return n;var i=D.get(),r=D.get();B(e,t,i,r);for(var a=Number.POSITIVE_INFINITY,c=0,o=Q;c<o.length;c++){var v=o[c],l=R(e,v,H.get()),u=g.sv3d.get();if(d.intersectLineSegmentClamp(i,l,u)){var b=f.distance2(t,u);if(!d.isPointInside(r,u))continue;b<a&&(a=b,s.vec3.copy(n,u))}}return L(e,t.origin)<a&&s.vec3.copy(n,t.origin),n}function w(e,t,n){var i=d.projectPoint(e.plane,t,g.sv3d.get()),r=u.projectPointClamp(q(e,e.basis1),i,-1,1,g.sv3d.get()),a=u.projectPointClamp(q(e,e.basis2),i,-1,1,g.sv3d.get());return s.vec3.subtract(n,s.vec3.add(g.sv3d.get(),r,a),e.origin),n}function A(e,t,n){var i=e.origin,r=e.basis1,a=e.basis2,c=s.vec3.subtract(g.sv3d.get(),t,i),o=b.projectPointSignedLength(r,c)/s.vec3.length(r),v=b.projectPointSignedLength(a,c)/s.vec3.length(a),l=b.projectPointSignedLength(e.plane,c);return s.vec3.set(n,o,v,l)}function L(e,t){var n=A(e,t,g.sv3d.get()),i=e.basis1,r=e.basis2,a=s.vec3.length(i),c=s.vec3.length(r),o=Math.max(Math.abs(n[0])-a,0),v=Math.max(Math.abs(n[1])-c,0),l=n[2];return o*o+v*v+l*l}function x(e,t){return Math.sqrt(L(e,t))}function O(e,t){for(var n=Number.NEGATIVE_INFINITY,i=0,r=Q;i<r.length;i++){var a=r[i],c=R(e,a,H.get()),o=u.distance2(c,t);o>n&&(n=o)}return Math.sqrt(n)}function T(e,t){return d.isPointInside(e.plane,t)&&_(e,t)}function k(e,t,n,i){return U(e,n,i)}function C(e,t){var n=-e.plane[3];return b.projectPointSignedLength(e.plane,t)-n}function E(e,t,n,i){var r=C(e,t),a=s.vec3.scale(J,e.plane,n-r);return s.vec3.add(i,t,a),i}function F(e,t,n){return e!==n&&h(e,n),c.mat4.invert(W,t),c.mat4.transpose(W,W),s.vec3.transformMat4(n.basis1,e.basis1,W),s.vec3.transformMat4(n.basis2,e.basis2,W),s.vec3.transformMat4(n.plane,e.plane,W),s.vec3.transformMat4(n.origin,e.origin,t),d.setOffsetFromPoint(n.plane,n.origin,n.plane),n}function U(e,t,i){switch(t){case 0:s.vec3.copy(i,e.basis1),s.vec3.normalize(i,i);break;case 1:s.vec3.copy(i,e.basis2),s.vec3.normalize(i,i);break;case 2:s.vec3.copy(i,e.plane);break;default:n.neverReached(t)}return i}function _(e,t){var n=s.vec3.subtract(g.sv3d.get(),t,e.origin),i=s.vec3.squaredLength(e.basis1),r=s.vec3.squaredLength(e.basis2),a=s.vec3.dot(e.basis1,n),c=s.vec3.dot(e.basis2,n);return-a-i<0&&a-i<0&&-c-r<0&&c-r<0}function q(e,t){var n=H.get();return s.vec3.copy(n.origin,e.origin),s.vec3.copy(n.vector,t),n}function R(e,t,n){var i=e.basis1,r=e.basis2,a=e.origin,c=s.vec3.scale(g.sv3d.get(),i,t.origin[0]),o=s.vec3.scale(g.sv3d.get(),r,t.origin[1]);s.vec3.add(n.origin,c,o),s.vec3.add(n.origin,n.origin,a);var v=s.vec3.scale(g.sv3d.get(),i,t.direction[0]),l=s.vec3.scale(g.sv3d.get(),r,t.direction[1]);return s.vec3.scale(n.vector,s.vec3.add(v,v,l),2),n}function Y(e,t){Math.abs(s.vec3.dot(e.basis1,e.basis2)/(s.vec3.length(e.basis1)*s.vec3.length(e.basis2)))>1e-6&&z.warn(t,"Provided basis vectors are not perpendicular"),Math.abs(s.vec3.dot(e.basis1,e.plane))>1e-6&&z.warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-s.vec3.dot(e.plane,e.origin)-e.plane[3])>1e-6&&z.warn(t,"Plane offset is not consistent with plane origin")}function B(e,t,n,i){var r=e.plane;d.fromVectorsAndPoint(r,t.direction,t.origin,n),d.fromVectorsAndPoint(n,r,t.origin,i)}Object.defineProperty(t,"__esModule",{value:!0});var z=i.getLogger("esri.views.3d.support.geometryUtils.boundedPlane"),G=function(){function e(){this.plane=d.create(),this.origin=v.vec3f64.create(),this.basis1=v.vec3f64.create(),this.basis2=v.vec3f64.create()}return e}();t.BoundedPlaneClass=G,t.create=p,t.wrap=m,t.copy=h,t.fromValues=P,t.elevate=I,t.setExtent=y,t.fromAABoundingRect=S,t.intersectRay=M,t.intersectRayClosestSilhouette=j,t.closestPointOnSilhouette=V,t.closestPoint=N,t.projectPoint=w,t.projectPointLocal=A,t.distance2=L,t.distance=x,t.distanceToSilhouette=O,t.extrusionContainsPoint=T,t.axisAt=k,t.altitudeAt=C,t.setAltitudeAt=E,t.transform=F,t.UP={plane:d.create(),origin:v.vec3f64.fromValues(0,0,0),basis1:v.vec3f64.fromValues(1,0,0),basis2:v.vec3f64.fromValues(0,1,0)};var D=new a.ObjectStack(d.create),H=new a.ObjectStack(u.create),J=v.vec3f64.create(),K=new a.ObjectStack(function(){return{origin:null,basis1:null,basis2:null,plane:null}}),Q=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],W=o.mat4f64.create()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/clipRay.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/geometryUtils/clipRay.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/ObjectStack */ "./node_modules/arcgis-js-api/core/ObjectStack.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3.js"),__webpack_require__(/*! ../stack */ "./node_modules/arcgis-js-api/views/3d/support/stack.js"),__webpack_require__(/*! ./ray */ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/ray.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(r,e,c,n,t,o){function a(r){return r?{ray:o.create(r.ray),c0:r.c0,c1:r.c1}:{ray:o.create(),c0:0,c1:Number.MAX_VALUE}}function i(r,e,c){var n=d.get();return n.ray=r,n.c0=e,n.c1=c,n}function u(r,e){return void 0===e&&(e=a()),f(r.ray,r.c0,r.c1,e)}function f(r,e,c,n){return void 0===n&&(n=a()),o.copy(r,n.ray),n.c0=e,n.c1=c,n}function v(r,e){return void 0===e&&(e=a()),o.copy(r,e.ray),e.c0=0,e.c1=Number.MAX_VALUE,e}function y(r,e){return void 0===e&&(e=a()),m(r,n.vec3.normalize(t.sv3d.get(),r.vector),e)}function m(r,e,c){void 0===c&&(c=a());var t=n.vec3.length(r.vector);return o.fromValues(r.origin,e,c.ray),c.c0=0,c.c1=t,c}Object.defineProperty(e,"__esModule",{value:!0}),e.create=a,e.wrap=i,e.copy=u,e.fromValues=f,e.fromRay=v,e.fromLineSegment=y,e.fromLineSegmentAndDirection=m;var d=new c.ObjectStack(function(){return{c0:0,c1:0,ray:null}})}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/frustum.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/geometryUtils/frustum.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/ObjectStack */ "./node_modules/arcgis-js-api/core/ObjectStack.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/mat4 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3f64.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec4 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec4.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec4f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec4f64.js"),__webpack_require__(/*! ../stack */ "./node_modules/arcgis-js-api/views/3d/support/stack.js"),__webpack_require__(/*! ./clipRay */ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/clipRay.js"),__webpack_require__(/*! ./plane */ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/plane.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,c,n,o,a,f,i,s,v){function l(e){if(e){var r=e.planes,t=e.points;return{planes:[v.create(r[0]),v.create(r[1]),v.create(r[2]),v.create(r[3]),v.create(r[4]),v.create(r[5])],points:[o.vec3f64.clone(t[0]),o.vec3f64.clone(t[1]),o.vec3f64.clone(t[2]),o.vec3f64.clone(t[3]),o.vec3f64.clone(t[4]),o.vec3f64.clone(t[5]),o.vec3f64.clone(t[6]),o.vec3f64.clone(t[7])]}}return{planes:[v.create(),v.create(),v.create(),v.create(),v.create(),v.create()],points:[o.vec3f64.create(),o.vec3f64.create(),o.vec3f64.create(),o.vec3f64.create(),o.vec3f64.create(),o.vec3f64.create(),o.vec3f64.create(),o.vec3f64.create()]}}function u(e,r){return void 0===r&&(r=l()),m(e.planes,e.points,r)}function m(e,r,t){void 0===t&&(t=l());for(var c=0;c<6;c++)v.copy(e[c],t.planes[c]);for(var c=0;c<8;c++)n.vec3.copy(t.points[c],r[c]);return t}function p(e,r,t){void 0===t&&(t=l());var o=t.points,f=c.mat4.multiply(i.sm4d.get(),r,e);c.mat4.invert(f,f);for(var s=0;s<8;++s){var v=a.vec4.transformMat4(i.sv4d.get(),S[s],f);n.vec3.set(o[s],v[0]/v[3],v[1]/v[3],v[2]/v[3])}return d(t),t}function d(e){var r=e.planes,t=e.points;v.fromPoints(t[4],t[0],t[3],r[0]),v.fromPoints(t[1],t[5],t[6],r[1]),v.fromPoints(t[4],t[5],t[1],r[2]),v.fromPoints(t[3],t[2],t[6],r[3]),v.fromPoints(t[0],t[1],t[2],r[4]),v.fromPoints(t[5],t[4],t[7],r[5])}function g(e,r){for(var t=0;t<6;t++)if(v.isSphereFullyInside(e[t],r))return!1;return!0}function y(e,r){return x(e,s.fromRay(r,A.get()))}function P(e,r,t){return x(e,s.fromLineSegmentAndDirection(r,t,A.get()))}function b(e,r){for(var t=0;t<6;t++){if(v.signedDistance(e[t],r)>0)return!1}return!0}function V(e,r){for(var t=0;t<6;t++)if(v.isAABBFullyInside(e[t],r))return!1;return!0}function x(e,r){for(var t=0;t<6;t++)if(!v.clip(e[t],r))return!1;return!0}Object.defineProperty(r,"__esModule",{value:!0}),r.create=l,r.copy=u,r.fromValues=m,r.fromMatrix=p,r.recomputePlanes=d,r.intersectsSphere=g,r.intersectsRay=y,r.intersectsLineSegment=P,r.intersectsPoint=b,r.intersectsAABB=V,r.planePointIndices={bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],left:[4,0,3,7],top:[7,3,2,6]};var S=[f.vec4f64.fromValues(-1,-1,-1,1),f.vec4f64.fromValues(1,-1,-1,1),f.vec4f64.fromValues(1,1,-1,1),f.vec4f64.fromValues(-1,1,-1,1),f.vec4f64.fromValues(-1,-1,1,1),f.vec4f64.fromValues(1,-1,1,1),f.vec4f64.fromValues(1,1,1,1),f.vec4f64.fromValues(-1,1,1,1)],A=new t.ObjectStack(s.create)}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/lineSegment.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/geometryUtils/lineSegment.js ***!
  \**********************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/mathUtils */ "./node_modules/arcgis-js-api/core/mathUtils.js"),__webpack_require__(/*! ../../../../core/ObjectStack */ "./node_modules/arcgis-js-api/core/ObjectStack.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3f64.js"),__webpack_require__(/*! ../stack */ "./node_modules/arcgis-js-api/views/3d/support/stack.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,c,n,i,o){function v(e){return e?{origin:i.vec3f64.clone(e.origin),vector:i.vec3f64.clone(e.vector)}:{origin:i.vec3f64.create(),vector:i.vec3f64.create()}}function a(e,t){var r=A.get();return r.origin=e,r.vector=t,r}function s(e,t){return void 0===t&&(t=v()),u(e.origin,e.vector,t)}function u(e,t,r){return void 0===r&&(r=v()),n.vec3.copy(r.origin,e),n.vec3.copy(r.vector,t),r}function d(e,t,r){return void 0===r&&(r=v()),n.vec3.copy(r.origin,e),n.vec3.subtract(r.vector,t,e),r}function g(e,t){var c=n.vec3.subtract(o.sv3d.get(),t,e.origin),i=n.vec3.dot(e.vector,c),v=n.vec3.dot(e.vector,e.vector),a=r.clamp(i/v,0,1),s=n.vec3.subtract(o.sv3d.get(),n.vec3.scale(o.sv3d.get(),e.vector,a),c);return n.vec3.dot(s,s)}function f(e,t){return Math.sqrt(g(e,t))}function l(e,t,r){return p(e,t,0,1,r)}function p(e,t,c,i,v){var a=e.vector,s=e.origin,u=n.vec3.subtract(o.sv3d.get(),t,s),d=n.vec3.length(a),g=n.vec3.dot(a,u)/d;return n.vec3.scale(v,a,r.clamp(g,c,i)),n.vec3.add(v,v,e.origin)}function b(e,t){if(M(e,a(t.origin,t.direction),!1,y)){var r=y.tA,c=y.pB,i=y.distance2;if(r>=0&&r<=1)return i;if(r<0)return n.vec3.squaredDistance(e.origin,c);if(r>1)return n.vec3.squaredDistance(n.vec3.add(o.sv3d.get(),e.origin,e.vector),c)}return null}function m(e,t,r){return!!M(e,t,!0,y)&&(n.vec3.copy(r,y.pA),!0)}function h(e,t){return M(e,t,!0,y)?y.distance2:null}function M(e,t,c,i){var v=e.origin,a=n.vec3.add(o.sv3d.get(),v,e.vector),s=t.origin,u=n.vec3.add(o.sv3d.get(),s,t.vector),d=o.sv3d.get(),g=o.sv3d.get();if(d[0]=v[0]-s[0],d[1]=v[1]-s[1],d[2]=v[2]-s[2],g[0]=u[0]-s[0],g[1]=u[1]-s[1],g[2]=u[2]-s[2],Math.abs(g[0])<1e-6&&Math.abs(g[1])<1e-6&&Math.abs(g[2])<1e-6)return!1;var f=o.sv3d.get();if(f[0]=a[0]-v[0],f[1]=a[1]-v[1],f[2]=a[2]-v[2],Math.abs(f[0])<1e-6&&Math.abs(f[1])<1e-6&&Math.abs(f[2])<1e-6)return!1;var l=d[0]*g[0]+d[1]*g[1]+d[2]*g[2],p=g[0]*f[0]+g[1]*f[1]+g[2]*f[2],b=d[0]*f[0]+d[1]*f[1]+d[2]*f[2],m=g[0]*g[0]+g[1]*g[1]+g[2]*g[2],h=f[0]*f[0]+f[1]*f[1]+f[2]*f[2],M=h*m-p*p;if(Math.abs(M)<1e-6)return!1;var y=l*p-b*m,A=y/M,j=(l+p*A)/m;c&&(A=r.clamp(A,0,1),j=r.clamp(j,0,1));var q=o.sv3d.get(),B=o.sv3d.get();return q[0]=v[0]+A*f[0],q[1]=v[1]+A*f[1],q[2]=v[2]+A*f[2],B[0]=s[0]+j*g[0],B[1]=s[1]+j*g[1],B[2]=s[2]+j*g[2],i.tA=A,i.tB=j,i.pA=q,i.pB=B,i.distance2=n.vec3.squaredDistance(q,B),!0}Object.defineProperty(t,"__esModule",{value:!0}),t.create=v,t.wrap=a,t.copy=s,t.fromValues=u,t.fromPoints=d,t.distance2=g,t.distance=f,t.projectPoint=l,t.projectPointClamp=p,t.closestRayDistance2=b,t.closestLineSegmentPoint=m,t.closestLineSegmentDistance2=h;var y={tA:0,tB:0,pA:i.vec3f64.create(),pB:i.vec3f64.create(),distance2:0},A=new c.ObjectStack(function(){return{origin:null,vector:null}})}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/plane.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/geometryUtils/plane.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/mathUtils */ "./node_modules/arcgis-js-api/core/mathUtils.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3.js"),__webpack_require__(/*! ../stack */ "./node_modules/arcgis-js-api/views/3d/support/stack.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,n,c){function i(e){return void 0===e&&(e=t.UP),[e[0],e[1],e[2],e[3]]}function o(e,t,r,n){return s(e,t,r,n,c.sv4d.get())}function u(e,t){return void 0===t&&(t=i()),s(e[0],e[1],e[2],e[3],t)}function s(e,t,r,n,c){return void 0===c&&(c=i()),c[0]=e,c[1]=t,c[2]=r,c[3]=n,c}function v(e,t,r){return void 0===r&&(r=i()),n.vec3.copy(r,e),r[3]=t,r}function a(e,t,r){void 0===r&&(r=i()),n.vec3.copy(r,t);var c=n.vec3.dot(t,t);return Math.abs(c-1)>1e-5&&c>1e-12&&n.vec3.scale(r,r,1/Math.sqrt(c)),f(r,e,r),r}function d(e,t,r,o){return void 0===o&&(o=i()),g(n.vec3.subtract(c.sv3d.get(),e,t),n.vec3.subtract(c.sv3d.get(),r,t),e,o)}function f(e,t,r){return e!==r&&u(e,r),r[3]=-n.vec3.dot(r,t),r}function l(e,t){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t}function g(e,t,r,o){return void 0===o&&(o=i()),a(r,n.vec3.cross(c.sv3d.get(),t,e),o)}function m(e,t,r){return I(e,t.origin,t.direction,!0,!1,r)}function p(e,t,r){return I(e,t.origin,t.vector,!1,!1,r)}function y(e,t,r){return I(e,t.origin,t.vector,!1,!0,r)}function P(e,t){var r=t.center,n=t.radius;return x(e,r)-n>=0}function b(e,t){var r=t.center,n=t.radius;return x(e,r)+n<0}function h(e,t){return x(e,t)>=0}function A(e,t){return x(e,t)<0}function M(e,t){var r=t[0],n=t[1],c=t[2],i=t[3],o=t[4],u=t[5];return e[0]*(e[0]>0?r:i)+e[1]*(e[1]>0?n:o)+e[2]*(e[2]>0?c:u)+e[3]>=0}function O(e,t){var r=n.vec3.dot(e,t.ray.direction),c=-x(e,t.ray.origin);if(c<0&&r>=0)return!1;if(r>-1e-6&&r<1e-6)return c>0;if((c<0||r<0)&&!(c<0&&r<0))return!0;var i=c/r;return r>0?i<t.c1&&(t.c1=i):i>t.c0&&(t.c0=i),t.c0<=t.c1}function F(e,t,r){var i=n.vec3.scale(c.sv3d.get(),e,-e[3]),o=n.vec3.subtract(c.sv3d.get(),t,i),u=S(e,o,c.sv3d.get());return n.vec3.add(r,u,i),r}function S(e,t,r){var i=n.vec3.scale(c.sv3d.get(),e,n.vec3.dot(e,t));return n.vec3.subtract(r,t,i),r}function j(e,t){return Math.abs(x(e,t))}function x(e,t){return n.vec3.dot(e,t)+e[3]}function I(e,t,c,i,o,u){var s=n.vec3.dot(e,c);if(0===s)return!1;var v=-(n.vec3.dot(e,t)+e[3])/s;return o&&(v=i?Math.max(0,v):r.clamp(v,0,1)),!(v<0||!i&&v>1)&&(n.vec3.add(u,t,n.vec3.scale(u,c,v)),!0)}Object.defineProperty(t,"__esModule",{value:!0}),t.create=i,t.wrap=o,t.copy=u,t.fromValues=s,t.fromNormalAndOffset=v,t.fromPositionAndNormal=a,t.fromPoints=d,t.setOffsetFromPoint=f,t.negate=l,t.fromVectorsAndPoint=g,t.intersectRay=m,t.intersectLineSegment=p,t.intersectLineSegmentClamp=y,t.isSphereFullyInside=P,t.isSphereFullyOutside=b,t.isPointInside=h,t.isPointOutside=A,t.isAABBFullyInside=M,t.clip=O,t.projectPoint=F,t.projectVector=S,t.distance=j,t.signedDistance=x,t.UP=[0,0,1,0]}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/ray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/geometryUtils/ray.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/ObjectStack */ "./node_modules/arcgis-js-api/core/ObjectStack.js"),__webpack_require__(/*! ../../../../core/screenUtils */ "./node_modules/arcgis-js-api/core/screenUtils.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec2 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec2.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3f64.js"),__webpack_require__(/*! ../stack */ "./node_modules/arcgis-js-api/views/3d/support/stack.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,n,t,c,i,o,v){function d(e){return e?{origin:o.vec3f64.clone(e.origin),direction:o.vec3f64.clone(e.direction)}:{origin:o.vec3f64.create(),direction:o.vec3f64.create()}}function a(e,r){var n=S.get();return n.origin=e,n.direction=r,n}function u(e,r){return void 0===r&&(r=d()),g(e.origin,e.direction,r)}function s(e,r,n){return void 0===n&&(n=d()),i.vec3.copy(n.origin,e),i.vec3.subtract(n.direction,r,e),n}function g(e,r,n){return void 0===n&&(n=d()),i.vec3.copy(n.origin,e),i.vec3.copy(n.direction,r),n}function f(e,r,n){return void 0===n&&(n=d()),l(e,e.screenToRender(r,t.castRenderScreenPointArray3(v.sv3d.get())),n)}function l(e,r,n){void 0===n&&(n=d());var o=t.castRenderScreenPointArray3(c.vec2.copy(v.sv3d.get(),r));o[2]=0,e.unprojectPoint(o,n.origin);var a=t.castRenderScreenPointArray3(c.vec2.copy(v.sv3d.get(),r));a[2]=1;var u=e.unprojectPoint(a,v.sv3d.get());return i.vec3.subtract(n.direction,u,n.origin),n}function p(e,r,n){return void 0===n&&(n=d()),y(e,e.screenToRender(r,t.castRenderScreenPointArray3(v.sv3d.get())),n)}function y(e,r,n){void 0===n&&(n=d()),i.vec3.copy(n.origin,e.eye);var t=i.vec3.set(v.sv3d.get(),r[0],r[1],1),c=e.unprojectPoint(t,v.sv3d.get());return i.vec3.subtract(n.direction,c,n.origin),n}function b(e,r){var n=i.vec3.cross(v.sv3d.get(),i.vec3.normalize(v.sv3d.get(),e.direction),i.vec3.subtract(v.sv3d.get(),r,e.origin));return i.vec3.dot(n,n)}function m(e,r){return Math.sqrt(b(e,r))}function P(e,r,n){var t=i.vec3.dot(e.direction,i.vec3.subtract(n,r,e.origin));return i.vec3.add(n,e.origin,i.vec3.scale(n,e.direction,t)),n}function R(){return{origin:null,direction:null}}Object.defineProperty(r,"__esModule",{value:!0}),r.create=d,r.wrap=a,r.copy=u,r.fromPoints=s,r.fromValues=g,r.fromScreen=f,r.fromRender=l,r.fromScreenAtEye=p,r.fromRenderAtEye=y,r.distance2=b,r.distance=m,r.closestPoint=P,r.createWrapper=R;var S=new n.ObjectStack(R)}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/sphere.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/geometryUtils/sphere.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/compilerUtils */ "./node_modules/arcgis-js-api/core/compilerUtils.js"),__webpack_require__(/*! ../../../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../../../core/mathUtils */ "./node_modules/arcgis-js-api/core/mathUtils.js"),__webpack_require__(/*! ../../../../core/ObjectStack */ "./node_modules/arcgis-js-api/core/ObjectStack.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/mat4 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3f64.js"),__webpack_require__(/*! ../geometryUtils */ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils.js"),__webpack_require__(/*! ../mathUtils */ "./node_modules/arcgis-js-api/views/3d/support/mathUtils.js"),__webpack_require__(/*! ../stack */ "./node_modules/arcgis-js-api/views/3d/support/stack.js"),__webpack_require__(/*! ./ray */ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/ray.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,c,n,i,a,s,o,u,v,d,l){function g(e){return e?{radius:e.radius,center:o.vec3f64.clone(e.center)}:{radius:1,center:o.vec3f64.create()}}function f(e,t){var r=E.get();return r.radius=e,r.center=t||z,r}function h(e,t){return void 0===t&&(t=g()),m(e.radius,e.center,t)}function m(e,t,r){return void 0===r&&(r=g()),s.vec3.copy(r.center,t),r.radius=e,r}function p(e,t,r){return e!==r&&s.vec3.copy(r.center,e.center),r.radius=e.radius+t,r}function b(e,t,r){return T.error("sphere.setExtent is not yet supported"),e===r?r:h(e,r)}function y(e,t,r){var c=s.vec3.subtract(d.sv3d.get(),t.origin,e.center),n=s.vec3.dot(t.direction,t.direction),i=2*s.vec3.dot(t.direction,c),a=s.vec3.dot(c,c)-e.radius*e.radius,o=i*i-4*n*a;if(o<0)return!1;var u=Math.sqrt(o),v=(-i-u)/(2*n),l=(-i+u)/(2*n);return(v<0||l<v&&l>0)&&(v=l),!(v<0)&&(r&&s.vec3.add(r,t.origin,s.vec3.scale(d.sv3d.get(),t.direction,v)),!0)}function M(e,t,r,c){return y(e,l.fromScreenAtEye(t,r,L),c)}function S(e,t){return y(e,t,null)}function x(e,t,r){if(y(e,t,r))return r;var c=j(e,t,d.sv3d.get());return s.vec3.add(r,t.origin,s.vec3.scale(d.sv3d.get(),t.direction,s.vec3.distance(t.origin,c)/s.vec3.length(t.direction))),r}function j(e,t,r){var c=d.sv3d.get(),n=d.sm4d.get();s.vec3.cross(c,t.origin,t.direction),s.vec3.cross(r,c,t.origin),s.vec3.scale(r,r,1/s.vec3.length(r)*e.radius);var i=U(e,t.origin),o=u.vector.angle(t.origin,r);return a.mat4.identity(n),a.mat4.rotate(n,n,o+i,c),s.vec3.transformMat4(r,r,n),r}function A(e,t,r){return y(e,t,r)?r:(l.closestPoint(t,e.center,r),O(e,r,r))}function O(e,t,r){var c=s.vec3.subtract(d.sv3d.get(),t,e.center),n=s.vec3.scale(d.sv3d.get(),c,e.radius/s.vec3.length(c));return s.vec3.add(r,n,e.center)}function P(e,t){var r=s.vec3.subtract(d.sv3d.get(),t,e.center),c=s.vec3.squaredLength(r),n=e.radius*e.radius;return Math.sqrt(Math.abs(c-n))}function U(e,t){var r=s.vec3.subtract(d.sv3d.get(),t,e.center),c=s.vec3.length(r),i=e.radius+Math.abs(e.radius-c);return n.acosClamped(e.radius/i)}function q(e,t,c,n){var i=s.vec3.subtract(k,t,e.center);switch(c){case 0:var a=v.cartesianToSpherical(i,k),o=a[2];return s.vec3.set(n,-Math.sin(o),Math.cos(o),0);case 1:var a=v.cartesianToSpherical(i,k),u=a[1],o=a[2],d=Math.sin(u);return s.vec3.set(n,-d*Math.cos(o),-d*Math.sin(o),Math.cos(u));case 2:return s.vec3.normalize(n,i);default:return void r.neverReached(c)}}function w(e,t){var r=s.vec3.subtract(C,t,e.center);return s.vec3.length(r)-e.radius}function R(e,t,r,c){var n=w(e,t),i=q(e,t,2,C),a=s.vec3.scale(C,i,r-n);return s.vec3.add(c,t,a),c}Object.defineProperty(t,"__esModule",{value:!0});var T=c.getLogger("esri.views.3d.support.geometryUtils.sphere");t.create=g,t.wrap=f,t.copy=h,t.fromValues=m,t.elevate=p,t.setExtent=b,t.intersectRay=y,t.intersectScreen=M,t.intersectsRay=S,t.intersectRayClosestSilhouette=x,t.closestPointOnSilhouette=j,t.closestPoint=A,t.projectPoint=O,t.distanceToSilhouette=P,t.angleToSilhouette=U;var k=o.vec3f64.create();t.axisAt=q,t.altitudeAt=w,t.setAltitudeAt=R;var E=new i.ObjectStack(function(){return{center:null,radius:0}}),L=l.create(),z=o.vec3f64.create(),C=o.vec3f64.create();Object.freeze(z)}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/triangle.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/geometryUtils/triangle.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/ObjectStack */ "./node_modules/arcgis-js-api/core/ObjectStack.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec2 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec2.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3f64.js"),__webpack_require__(/*! ../stack */ "./node_modules/arcgis-js-api/views/3d/support/stack.js"),__webpack_require__(/*! ./lineSegment */ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/lineSegment.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,c,t,r,n,v,a,s){function o(e){return e?{p0:v.vec3f64.clone(e.p0),p1:v.vec3f64.clone(e.p1),p2:v.vec3f64.clone(e.p2)}:{p0:v.vec3f64.create(),p1:v.vec3f64.create(),p2:v.vec3f64.create()}}function i(e,c,t){var r=y.get();return r.p0=e,r.p1=c,r.p2=t,r}function u(e,c){return void 0===c&&(c=o()),p(e.p0,e.p1,e.p2,c)}function p(e,c,t,r){return void 0===r&&(r=o()),n.vec3.copy(r.p0,e),n.vec3.copy(r.p1,c),n.vec3.copy(r.p2,t),r}function d(e,c){var t=e.p0,r=e.p1,v=e.p2,o=n.vec3.subtract(a.sv3d.get(),r,t),i=n.vec3.subtract(a.sv3d.get(),v,r),u=n.vec3.subtract(a.sv3d.get(),t,v),p=n.vec3.subtract(a.sv3d.get(),c,t),d=n.vec3.subtract(a.sv3d.get(),c,r),f=n.vec3.subtract(a.sv3d.get(),c,v),l=n.vec3.cross(o,o,u),g=n.vec3.dot(n.vec3.cross(a.sv3d.get(),o,l),p),b=n.vec3.dot(n.vec3.cross(a.sv3d.get(),i,l),d),y=n.vec3.dot(n.vec3.cross(a.sv3d.get(),u,l),f);if(g>0&&b>0&&y>0){var j=n.vec3.dot(l,p);return j*j/n.vec3.dot(l,l)}var k=s.distance2(s.fromValues(t,o,m.get()),c),x=s.distance2(s.fromValues(r,i,m.get()),c),O=s.distance2(s.fromValues(v,u,m.get()),c);return Math.min(k,x,O)}function f(e,c,t){var r=c.direction,v=c.origin,a=e.p0,s=e.p1,o=e.p2,i=s[0]-a[0],u=s[1]-a[1],p=s[2]-a[2],d=o[0]-a[0],f=o[1]-a[1],l=o[2]-a[2],g=r[1]*l-f*r[2],b=r[2]*d-l*r[0],m=r[0]*f-d*r[1],y=i*g+u*b+p*m;if(y>-1e-5&&y<1e-5)return!1;var j=1/y,k=v[0]-a[0],x=v[1]-a[1],O=v[2]-a[2],S=j*(k*g+x*b+O*m);if(S<0||S>1)return!1;var V=x*p-u*O,h=O*i-p*k,w=k*u-i*x,M=j*(r[0]*V+r[1]*h+r[2]*w);if(M<0||S+M>1)return!1;if(t){var P=j*(d*V+f*h+l*w);n.vec3.scale(t,r,P),n.vec3.add(t,v,t)}return!0}function l(e,c,t){var n=r.vec2.distance(e,c),v=r.vec2.distance(c,t),a=r.vec2.distance(t,e),s=(n+v+a)/2,o=s*(s-n)*(s-v)*(s-a);return o<=0?0:Math.sqrt(o)}function g(e){return l(e.p0,e.p1,e.p2)}function b(e,c,t){return n.vec3.subtract(j,c,e),n.vec3.subtract(k,t,e),n.vec3.length(n.vec3.cross(j,j,k))/2}Object.defineProperty(c,"__esModule",{value:!0}),c.create=o,c.wrap=i,c.copy=u,c.fromValues=p,c.distance2=d,c.intersectRay=f,c.areaPoints2d=l,c.area2d=g,c.areaPoints3d=b;var m=new t.ObjectStack(s.create),y=new t.ObjectStack(function(){return{p0:null,p1:null,p2:null}}),j=v.vec3f64.create(),k=v.vec3f64.create()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/vector.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/geometryUtils/vector.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/mathUtils */ "./node_modules/arcgis-js-api/core/mathUtils.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,n,c){function r(e,t,n){var r=o(e,t);return c.vec3.scale(n,e,r)}function o(e,t){return c.vec3.dot(e,t)/c.vec3.length(e)}function i(e,t){var r=c.vec3.dot(e,t)/(c.vec3.length(e)*c.vec3.length(t));return-n.acosClamped(r)}Object.defineProperty(t,"__esModule",{value:!0}),t.projectPoint=r,t.projectPointSignedLength=o,t.angle=i}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/stack.js":
/*!**************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/stack.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/VectorStack */ "./node_modules/arcgis-js-api/core/VectorStack.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,c){Object.defineProperty(t,"__esModule",{value:!0}),t.sv2d=c.VectorStack.createVec2f64(),t.sv3d=c.VectorStack.createVec3f64(),t.sv4d=c.VectorStack.createVec4f64(),t.sm3d=c.VectorStack.createMat3f64(),t.sm4d=c.VectorStack.createMat4f64(),t.sq4d=c.VectorStack.createQuatf64()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/ComponentUtils.js":
/*!********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/ComponentUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/arrayUtils */ "./node_modules/arcgis-js-api/core/arrayUtils.js"),__webpack_require__(/*! ../../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(n,t,e,i){function r(n,t,e,i){if(x(t,e)){null==n&&(n=m());var r=n.isVisibleBit,l=n.data,a=w(l),u=e/a|0,o=e-a*u,f=O(t),s=f-1,h=s/a|0,c=l,g=c.length*a,v=e<g,d=i===r;if(!v&&d){var p=u+1,b=Math.ceil(1.5*c.length),V=h+1,y=Math.max(p,b);y=Math.min(y,V),l=new Uint32Array(y),l.set(c)}u<l.length&&(l[u]=E(l[u],o,d)),n.data=l}return n}function l(n,t,e,i){if(e<t){null==n&&(n=m());var r=n.isVisibleBit,l=n.data,a=w(l),u=e/a|0,o=e-a*u,f=t-1,s=f/a|0,h=l,c=h.length*a,g=e<c,v=i===r;if(!g&&v){var d=u+1,p=Math.ceil(1.5*h.length),b=s+1,V=Math.max(d,p);V=Math.min(V,b),l=new Uint32Array(V),l.set(h)}u<l.length&&(l[u]=E(l[u],o,v)),n.data=l}return n}function a(n,t){if(null!=n){var e=n.isVisibleBit,i=n.data,r=w(i);return t<i.length*r?U(e,i,t,r):H(n)}return!0}function u(n){var t;if(null==n)t=m(!1);else{t=n,t.isVisibleBit=!0;for(var e=0;e<t.data.length;e++)t.data[e]=0}return t}function o(n){var t;if(null==n);else{t=n,t.isVisibleBit=!1;for(var e=0;e<t.data.length;e++)t.data[e]=0}return t}function f(n,t){var e;if(n)if(C(t))if(0===n.data.length){var i=[],r=[[t[0],I(t[t.length-1])]];e=H(n)?r:i}else{e=[];for(var l=n.isVisibleBit,a=n.data,u=w(a),o=a.length*u,f=O(t),s=!1,h=0;h<o&&h<f;h++){var c=U(l,a,h,u);if(c!==s){var g=t[h];if(c)e.push([g,0]);else{var v=e[e.length-1];v[1]=I(g)}s=c}}var d=H(n);if(f>o&&d&&!s)e.push([t[o],I(t[f])]);else if(s){var v=e[e.length-1],p=d?f:Math.min(f,o);v[1]=I(t[p])}}else{var i=[],r=null;e=H(n)?r:i}else e=null;return e}function s(n){return i.isSome(n.component)?n.component:-1}function h(n,t,e,i){var r;n=n||[];var l={component:t,options:e,id:i};n.push(l);for(var a=s(l),u=n.length-1;u>0&&a<s(n[u-1]);)r=[n[u],n[u-1]],n[u-1]=r[0],n[u]=r[1],--u;return n}function c(n,t){if(!n)return n;var e=n.filter(function(n){return n.id!==t});return 0===e.length?null:e}function g(n,t,e,i,r){a(t,i)&&v(n,e[i],I(e[i+1]),r)}function v(n,t,e,i){var r=n.length>0?n[n.length-1]:null,l=r?r.range[1]:-1,a=r?r.options:null;if(!(l>=t))if(l+1===t&&a===i)r.range[1]=e;else{var u={range:[t,e],options:i};n.push(u)}}function d(n,t,e){if(!t)return null;if(!C(e)){return!n||H(n)?t.map(function(n){return{range:null,options:n.options}}):null}for(var r=e[0],l=I(e[e.length-1]),a=[],u=b(n,e),o=0;o<t.length;++o){var f=t[o].options,s=t[o].component;if(i.isSome(s))g(a,n,e,s,f);else if(u)v(a,r,l,f);else for(var h=0;h<O(e);++h)g(a,n,e,h,f)}return a.length>0?a:null}function p(n,t,e){if(!t)return!1;if(!C(e)){return!!(!n||H(n))&&t.length>0}for(var r=b(n,e),l=0,a=t;l<a.length;l++){var u=a[l].component;if(i.isSome(u))return!0;if(r)return!0;if(O(e)>0)return!0}return!1}function m(n){return void 0===n&&(n=!0),{isVisibleBit:!n,data:new Uint32Array(0)}}function b(n,t){return!M(n,t)}function V(n,t){return!y(n,t)}function y(n,t){return B(n,t,!0)}function M(n,t){return B(n,t,!1)}function B(n,t,e){var i=!1;n=n||P;var r=n.isVisibleBit,l=n.data,a=O(t),u=w(l),o=l.length*u,f=e===r;if(0===l.length||0===a)i=!f;else if(o<a&&!f)i=!0;else{for(var s=_(u),h=_(0),c=0;c<l.length-1;c++)if(i=!f&&l[c]!==s||f&&l[c]!==h)return i;var g=l.length-1,v=(a-1)%u+1,d=_(v);i=!f&&(l[g]&d)!==d||f&&(l[g]&d)!==h}return i}function A(n){return n instanceof Uint32Array?n:new Uint32Array(n)}function x(n,t){return t<O(n)}function C(n){return n.length>0}function H(n){return!n.isVisibleBit}function U(n,t,e,i){var r=e/i|0,l=e-r*i;return S(t[r],l)===n}function w(n){return 8*n.BYTES_PER_ELEMENT}function E(n,t,e){return n&~(1<<t)|(e?1:0)<<t}function S(n,t){return 0!=(n&1<<t)}function _(n){return T[n]}function I(n){return n-1}function O(n){return Math.max(0,n.length-1)}function R(n,t){var i=e.binaryIndexOf(n,t,!0);return i>=0?i:null}Object.defineProperty(t,"__esModule",{value:!0}),t.updateVisibility=r,t.updateVisibilityWithCount=l,t.getVisibility=a,t.hideAllComponents=u,t.unhideAllComponents=o,t.generateVisibleIndexRanges=f,t.addHighlight=h,t.removeHighlight=c,t.generateHighlightedIndexRanges=d,t.hasHighlights=p,t.defaultVisibilities=m,t.isAllVisible=b,t.isAllHidden=V,t.hasVisible=y,t.hasHidden=M;var P=m();t.createOffsets=A,t.hasComponent=x,t.hasComponents=C;for(var T=[],j=0;j<65;j++)T.push(Math.pow(2,j)-1);t.componentCount=O,t.componentFind=R}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/Util.js":
/*!**********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/Util.js ***!
  \**********************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/mathUtils */ "./node_modules/arcgis-js-api/core/mathUtils.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/mat4 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec2 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec2.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec2f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec2f64.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3f64.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec4 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec4.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec4f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec4f64.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,r,n,a,e,o,i,c,f){function u(t,r){if(!t){r=r||"assert";var n=new Error(r);throw n.stack&&console.log(n.stack),new G(r)}}function s(t,r){t||(r=r||"",console.warn("Verify failed: "+r+"\n"+new Error("verify").stack))}function v(t){return n.clamp(Math.round(32767*t),-32767,32767)}function l(t,r){var n=Math.abs(t[0]),a=Math.abs(t[1]),e=Math.abs(t[2]),o=1/(n+a+e),i=n*o,c=a*o,f=Math.min(t[2]*o,0);r[0]=(t[0]<0?-1:1)*(i-f),r[1]=(t[1]<0?-1:1)*(c-f)}function M(t,r){return void 0===t?r:t}function h(t){return t=Math.floor(t),[(t>>16&255)/255,(t>>8&255)/255,(255&t)/255]}function d(t){return"0x"+((n.clamp(Math.round(255*t[0]),0,255)<<16)+(n.clamp(Math.round(255*t[1]),0,255)<<8)+n.clamp(Math.round(255*t[2]),0,255)).toString(16)}function m(t){var r=t.toString(16);return"00000000".substr(0,8-r.length)+r}function x(t,r,n,a,e,o,c,f,u){void 0===u&&(u=i.vec3f64.create());var s=a[c]-n[o],v=a[c+1]-n[o+1],l=a[c+2]-n[o+2],M=e[f]-n[o],h=e[f+1]-n[o+1],d=e[f+2]-n[o+2],m=r[1]*d-h*r[2],x=r[2]*M-d*r[0],g=r[0]*h-M*r[1],p=s*m+v*x+l*g;if(p>-1e-5&&p<1e-5)return!1;var b=1/p,y=t[0]-n[o],O=t[1]-n[o+1],E=t[2]-n[o+2];if(u[1]=b*(y*m+O*x+E*g),u[1]<0||u[1]>1)return!1;var A=O*l-v*E,T=E*s-l*y,N=y*v-s*O;return u[2]=b*(r[0]*A+r[1]*T+r[2]*N),!(u[2]<0||u[1]+u[2]>1)&&(u[0]=b*(M*A+h*T+d*N),!0)}function g(t,r,n,a){var e,o=(n[0]-t[0])/r[0],i=(a[0]-t[0])/r[0];o>i&&(e=o,o=i,i=e);var c=(n[1]-t[1])/r[1],f=(a[1]-t[1])/r[1];if(c>f&&(e=c,c=f,f=e),o>f||c>i)return!1;c>o&&(o=c),f<i&&(i=f);var u=(n[2]-t[2])/r[2],s=(a[2]-t[2])/r[2];return u>s&&(e=u,u=s,s=e),!(o>s||u>i)&&(s<i&&(i=s),!(i<0))}function p(t,r,n,a,e,i){void 0===i&&(i=o.vec2f64.create());var c=(a[e]-n[e])*(r[0]-t[0])-(a[0]-n[0])*(r[e]-t[e]),f=(a[0]-n[0])*(t[e]-n[e])-(a[e]-n[e])*(t[0]-n[0]);if(0===c)return!1;var u=f/c;return i[0]=t[0]+u*(r[0]-t[0]),i[1]=t[e]+u*(r[e]-t[e]),!0}function b(t,r,n,a,e){e||(e=t),F[0]=t[0],F[1]=t[1],F[2]=t[2],F[3]=1,c.vec4.transformMat4(F,F,r),e.length>2&&(e[2]=-F[2]),c.vec4.transformMat4(F,F,n),u(0!==F[3]),e[0]=F[0]/F[3],e[1]=F[1]/F[3],e[2]=F[2]/F[3],e[0]=(.5*e[0]+.5)*a[2]+a[0],e[1]=(.5*e[1]+.5)*a[3]+a[1]}function y(t){for(var r in t)return r}function O(t){return t[y(t)]}function E(t){for(var r in t)return!1;return!0}function A(t,r){return Math.log(t)/Math.log(r)}function T(t,r){t[12]=r[0],t[13]=r[1],t[14]=r[2]}function N(t,r,n,a){t[12]=r,t[13]=n,t[14]=a}function S(t,r){return void 0===r&&(r=i.vec3f64.create()),r[0]=t[12],r[1]=t[13],r[2]=t[14],r}function I(t,r){return t=a.mat4.identity(t),T(t,r),t}function R(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}function C(t,r,n){return 2*Math.atan(n*Math.tan(.5*t)/r)}function P(t,r,n){return 2*Math.atan(r*Math.tan(.5*t)/n)}function j(t,r,n){return 2*Math.atan(Math.sqrt(r*r+n*n)*Math.tan(.5*t)/r)}function k(t,r,n){return 2*Math.atan(Math.sqrt(r*r+n*n)*Math.tan(.5*t)/n)}function w(t,r,n){return 2*Math.atan(r*Math.tan(.5*t)/Math.sqrt(r*r+n*n))}function U(t,r,n){return 2*Math.atan(n*Math.tan(.5*t)/Math.sqrt(r*r+n*n))}function q(t,r,a){void 0===a&&(a=0);for(var e=n.clamp(t,0,_),o=0;o<4;o++)r[a+o]=Math.floor(256*L(e*V[o]))}function B(t,r){void 0===r&&(r=0);for(var n=0,a=0;a<4;a++)n+=t[r+a]*X[a];return n}function L(t){return t-Math.floor(t)}function D(t,r,n,a,o){var i=t;0===t[11]?(a[0]=2/(r*i[0]),a[1]=2/(n*i[5]),a[2]=(1+i[12])/i[0],a[3]=(1+i[13])/i[5],e.vec2.set(o,0,1)):(a[0]=-2/(r*i[0]),a[1]=-2/(n*i[5]),a[2]=(1-i[8])/i[0],a[3]=(1-i[9])/i[5],e.vec2.set(o,1,0))}Object.defineProperty(r,"__esModule",{value:!0});var F=f.vec4f64.create(),G=function(){function t(t){this.message=t}return t.prototype.toString=function(){return"AssertException: "+this.message},t}();r.AssertException=G,r.VertexAttrConstants={POSITION:"position",NORMAL:"normal",NORMALCOMPRESSED:"normalCompressed",UV0:"uv0",AUXPOS1:"auxpos1",AUXPOS2:"auxpos2",COLOR:"color",SYMBOLCOLOR:"symbolColor",SIZE:"size",REGION:"region",COMPONENTINDEX:"componentIndex",TANGENT:"tangent"},r.assert=u,r.verify=s,r.encodeInt16=v,r.encodeNormal=l,r.fallbackIfUndefined=M,r.hex2rgb=h,r.rgb2hex=d,r.dec2hex=m,r.rayTriangle3D=x,r.rayBoxTest=g,r.rayRay2D=p,r.project=b,r.getFirstObjectKey=y,r.getFirstObjectValue=O,r.objectEmpty=E,r.logWithBase=A,r.setMatrixTranslation=T,r.setMatrixTranslation3=N,r.getMatrixTranslation=S,r.createTranslationMatrix=I,r.isTranslationMatrix=R,r.fovx2fovy=C,r.fovy2fovx=P,r.fovx2fovd=j,r.fovy2fovd=k,r.fovd2fovx=w,r.fovd2fovy=U,r.packFloatRGBA=q,r.unpackFloatRGBA=B;var V=[1,256,65536,16777216],X=[1/256,1/65536,1/16777216,1/4294967296],_=B(new Uint8ClampedArray([255,255,255,255]));r.inverseProjectionInfo=D}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/geometryDataUtils.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/geometryDataUtils.js ***!
  \***********************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3f64.js"),__webpack_require__(/*! ../../support/geometryUtils/triangle */ "./node_modules/arcgis-js-api/views/3d/support/geometryUtils/triangle.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,c,a){function n(e){if(1===e)return o;if(e>f||null==l){for(;e>f;)f*=2;l=new Uint32Array(f);for(var r=0;r<f;r++)l[r]=r}return new Uint32Array(l.buffer,0,e)}function v(e,r,c){if(!e)return!1;var n=e.strideIdx,v=e.offsetIdx,d=e.data;t.vec3.set(c,0,0,0),t.vec3.set(I,0,0,0);for(var i=0,s=0,f=0;f<r.length-2;f+=3){var l=r[f+0]*n+v,o=r[f+1]*n+v,u=r[f+2]*n+v;t.vec3.set(g,d[l+0],d[l+1],d[l+2]),t.vec3.set(x,d[o+0],d[o+1],d[o+2]),t.vec3.set(m,d[u+0],d[u+1],d[u+2]);var h=a.areaPoints3d(g,x,m);h?(t.vec3.add(g,g,x),t.vec3.add(g,g,m),t.vec3.scale(g,g,1/3*h),t.vec3.add(c,c,g),i+=h):(t.vec3.add(I,I,g),t.vec3.add(I,I,x),t.vec3.add(I,I,m),s+=3)}return(0!==s||0!==i)&&(0!==i?(t.vec3.scale(c,c,1/i),!0):0!==s&&(t.vec3.scale(c,I,1/s),!0))}function d(e,r,c){if(!e||!r)return!1;var a=e.strideIdx,n=e.offsetIdx,v=e.data;t.vec3.set(c,0,0,0);for(var d=-1,i=0,s=0;s<r.length;s++){var f=r[s]*a+n;d!==f&&(c[0]+=v[f+0],c[1]+=v[f+1],c[2]+=v[f+2],i++),d=f}return i>1&&t.vec3.scale(c,c,1/i),i>0}function i(e,r,c){if(!e)return!1;var a=e.strideIdx,n=e.offsetIdx,v=e.data;t.vec3.set(c,0,0,0),t.vec3.set(I,0,0,0);for(var d=0,i=0,s=r?r.length-1:v.length/a-1,f=0;f<s;f+=2){var l=(r?r[f+0]:f+0)*a+n,o=(r?r[f+1]:f+1)*a+n;g[0]=v[l+0],g[1]=v[l+1],g[2]=v[l+2],x[0]=v[o+0],x[1]=v[o+1],x[2]=v[o+2],t.vec3.scale(g,t.vec3.add(g,g,x),.5);var u=t.vec3.dist(g,x);u>0?(t.vec3.add(c,c,t.vec3.scale(g,g,u)),d+=u):(t.vec3.add(I,I,g),i++)}return 0!==d?(t.vec3.scale(c,c,1/d),!0):0!==i&&(t.vec3.scale(c,I,1/i),!0)}function s(){return u++}Object.defineProperty(r,"__esModule",{value:!0});var f=1,l=null,o=new Uint32Array([0]);r.generateDefaultIndexArray=n,r.computeAttachmentOriginTriangles=v,r.computeAttachmentOriginPoints=d,r.computeAttachmentOriginLines=i;var u=0;r.getNewId=s;var g=c.vec3f64.create(),x=c.vec3f64.create(),m=c.vec3f64.create(),I=c.vec3f64.create()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=34.js.map