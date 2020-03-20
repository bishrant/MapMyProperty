(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/views/3d/support/buffer/BufferView":"./node_modules/arcgis-js-api/views/3d/support/buffer/BufferView.js",
	"esri/views/3d/support/buffer/BufferView":"./node_modules/arcgis-js-api/views/3d/support/buffer/BufferView.js",
	"arcgis-js-api/views/3d/support/buffer/InterleavedLayout":"./node_modules/arcgis-js-api/views/3d/support/buffer/InterleavedLayout.js",
	"esri/views/3d/support/buffer/InterleavedLayout":"./node_modules/arcgis-js-api/views/3d/support/buffer/InterleavedLayout.js",
	"arcgis-js-api/views/3d/support/buffer/glUtil":"./node_modules/arcgis-js-api/views/3d/support/buffer/glUtil.js",
	"esri/views/3d/support/buffer/glUtil":"./node_modules/arcgis-js-api/views/3d/support/buffer/glUtil.js",
	"esri/views/3d/support/buffer/internals/Mat3":"./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Mat3.js",
	"esri/views/3d/support/buffer/internals/Mat4":"./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Mat4.js",
	"esri/views/3d/support/buffer/internals/Scalar":"./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Scalar.js",
	"esri/views/3d/support/buffer/internals/Vec2":"./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Vec2.js",
	"esri/views/3d/support/buffer/internals/Vec3":"./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Vec3.js",
	"esri/views/3d/support/buffer/internals/Vec4":"./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Vec4.js",
	"esri/views/3d/support/buffer/types":"./node_modules/arcgis-js-api/views/3d/support/buffer/types.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/arcgis-js-api/views/3d/support/buffer/BufferView.js":
/*!**************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/buffer/BufferView.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ./internals/Mat3 */ "./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Mat3.js"),__webpack_require__(/*! ./internals/Mat4 */ "./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Mat4.js"),__webpack_require__(/*! ./internals/Scalar */ "./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Scalar.js"),__webpack_require__(/*! ./internals/Vec2 */ "./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Vec2.js"),__webpack_require__(/*! ./internals/Vec3 */ "./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Vec3.js"),__webpack_require__(/*! ./internals/Vec4 */ "./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Vec4.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,f,n,u,i,y,a){Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Float32Array,t,r,f,n)||this;return u.elementType="f32",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f32",t}(u.BufferViewScalarImpl);t.BufferViewFloat=l;var c=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Float32Array,t,r,f,n)||this;return u.elementType="f32",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f32",t}(i.BufferViewVec2Impl);t.BufferViewVec2f=c;var o=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Float32Array,t,r,f,n)||this;return u.elementType="f32",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f32",t}(y.BufferViewVec3Impl);t.BufferViewVec3f=o;var s=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Float32Array,t,r,f,n)||this;return u.elementType="f32",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f32",t}(a.BufferViewVec4Impl);t.BufferViewVec4f=s;var p=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Float32Array,t,r,f,n)||this;return u.elementType="f32",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f32",t}(f.BufferViewMat3Impl);t.BufferViewMat3f=p;var b=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Float64Array,t,r,f,n)||this;return u.elementType="f64",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f64",t}(f.BufferViewMat3Impl);t.BufferViewMat3f64=b;var m=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Float32Array,t,r,f,n)||this;return u.elementType="f32",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f32",t}(n.BufferViewMat4Impl);t.BufferViewMat4f=m;var V=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Float64Array,t,r,f,n)||this;return u.elementType="f64",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f64",t}(n.BufferViewMat4Impl);t.BufferViewMat4f64=V;var v=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Float64Array,t,r,f,n)||this;return u.elementType="f64",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f64",t}(u.BufferViewScalarImpl);t.BufferViewFloat64=v;var h=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Float64Array,t,r,f,n)||this;return u.elementType="f64",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f64",t}(i.BufferViewVec2Impl);t.BufferViewVec2f64=h;var w=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Float64Array,t,r,f,n)||this;return u.elementType="f64",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f64",t}(y.BufferViewVec3Impl);t.BufferViewVec3f64=w;var T=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Float64Array,t,r,f,n)||this;return u.elementType="f64",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="f64",t}(a.BufferViewVec4Impl);t.BufferViewVec4f64=T;var d=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Uint8Array,t,r,f,n)||this;return u.elementType="u8",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u8",t}(u.BufferViewScalarImpl);t.BufferViewUint8=d;var O=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Uint8Array,t,r,f,n)||this;return u.elementType="u8",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u8",t}(i.BufferViewVec2Impl);t.BufferViewVec2u8=O;var A=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Uint8Array,t,r,f,n)||this;return u.elementType="u8",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u8",t}(y.BufferViewVec3Impl);t.BufferViewVec3u8=A;var B=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Uint8Array,t,r,f,n)||this;return u.elementType="u8",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u8",t}(a.BufferViewVec4Impl);t.BufferViewVec4u8=B;var I=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Uint16Array,t,r,f,n)||this;return u.elementType="u16",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u16",t}(u.BufferViewScalarImpl);t.BufferViewUint16=I;var g=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Uint16Array,t,r,f,n)||this;return u.elementType="u16",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u16",t}(i.BufferViewVec2Impl);t.BufferViewVec2u16=g;var E=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Uint16Array,t,r,f,n)||this;return u.elementType="u16",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u16",t}(y.BufferViewVec3Impl);t.BufferViewVec3u16=E;var L=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Uint16Array,t,r,f,n)||this;return u.elementType="u16",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u16",t}(a.BufferViewVec4Impl);t.BufferViewVec4u16=L;var U=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Uint32Array,t,r,f,n)||this;return u.elementType="u32",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u32",t}(u.BufferViewScalarImpl);t.BufferViewUint32=U;var F=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Uint32Array,t,r,f,n)||this;return u.elementType="u32",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u32",t}(i.BufferViewVec2Impl);t.BufferViewVec2u32=F;var M=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Uint32Array,t,r,f,n)||this;return u.elementType="u32",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u32",t}(y.BufferViewVec3Impl);t.BufferViewVec3u32=M;var S=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Uint32Array,t,r,f,n)||this;return u.elementType="u32",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="u32",t}(a.BufferViewVec4Impl);t.BufferViewVec4u32=S;var x=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Int8Array,t,r,f,n)||this;return u.elementType="i8",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i8",t}(u.BufferViewScalarImpl);t.BufferViewInt8=x;var _=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Int8Array,t,r,f,n)||this;return u.elementType="i8",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i8",t}(i.BufferViewVec2Impl);t.BufferViewVec2i8=_;var j=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Int8Array,t,r,f,n)||this;return u.elementType="i8",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i8",t}(y.BufferViewVec3Impl);t.BufferViewVec3i8=j;var q=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Int8Array,t,r,f,n)||this;return u.elementType="i8",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i8",t}(a.BufferViewVec4Impl);t.BufferViewVec4i8=q;var H=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Int16Array,t,r,f,n)||this;return u.elementType="i16",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i16",t}(u.BufferViewScalarImpl);t.BufferViewInt16=H;var P=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Int16Array,t,r,f,n)||this;return u.elementType="i16",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i16",t}(i.BufferViewVec2Impl);t.BufferViewVec2i16=P;var k=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Int16Array,t,r,f,n)||this;return u.elementType="i16",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i16",t}(y.BufferViewVec3Impl);t.BufferViewVec3i16=k;var z=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Int16Array,t,r,f,n)||this;return u.elementType="i16",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i16",t}(a.BufferViewVec4Impl);t.BufferViewVec4i16=z;var C=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Int32Array,t,r,f,n)||this;return u.elementType="i32",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i32",t}(u.BufferViewScalarImpl);t.BufferViewInt32=C;var D=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Int32Array,t,r,f,n)||this;return u.elementType="i32",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i32",t}(i.BufferViewVec2Impl);t.BufferViewVec2i32=D;var G=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Int32Array,t,r,f,n)||this;return u.elementType="i32",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i32",t}(y.BufferViewVec3Impl);t.BufferViewVec3i32=G;var J=function(e){function t(t,r,f,n){void 0===r&&(r=0);var u=e.call(this,Int32Array,t,r,f,n)||this;return u.elementType="i32",u}return r(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t.ElementType="i32",t}(a.BufferViewVec4Impl);t.BufferViewVec4i32=J}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/buffer/InterleavedLayout.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/buffer/InterleavedLayout.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./BufferView */ "./node_modules/arcgis-js-api/views/3d/support/buffer/BufferView.js"),__webpack_require__(/*! ./types */ "./node_modules/arcgis-js-api/views/3d/support/buffer/types.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,r){function n(){return new o}Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(var i=0,r=e.fieldNames;i<r.length;i++){var n=r[i],f=e.fields.get(n);this[n]=new f.constructor(this.buffer,f.offset,this.stride)}}return Object.defineProperty(e.prototype,"stride",{get:function(){return this.layout.stride},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"count",{get:function(){return this.buffer.byteLength/this.stride},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"byteLength",{get:function(){return this.buffer.byteLength},enumerable:!0,configurable:!0}),e.prototype.getField=function(e,t){var i=this[e];return i&&i.elementCount===t.ElementCount&&i.elementType===t.ElementType?i:null},e.prototype.slice=function(t,i){return new e(this.layout,this.buffer.slice(t*this.stride,i*this.stride))},e.prototype.copyFrom=function(e,t,i,r){var n=this.stride;if(n%4==0){var f=new Uint32Array(e.buffer,t*n,r*n/4),o=new Uint32Array(this.buffer,i*n,r*n/4);o.set(f)}else{var f=new Uint8Array(e.buffer,t*n,r*n),o=new Uint8Array(this.buffer,i*n,r*n);o.set(f)}},e}();t.InterleavedBuffer=f;var o=function(){function e(){this.stride=0,this.fields=new Map,this.fieldNames=[]}return e.prototype.vec2f=function(e,t){return this.appendField(e,i.BufferViewVec2f,t),this},e.prototype.vec2f64=function(e,t){return this.appendField(e,i.BufferViewVec2f64,t),this},e.prototype.vec3f=function(e,t){return this.appendField(e,i.BufferViewVec3f,t),this},e.prototype.vec3f64=function(e,t){return this.appendField(e,i.BufferViewVec3f64,t),this},e.prototype.vec4f=function(e,t){return this.appendField(e,i.BufferViewVec4f,t),this},e.prototype.vec4f64=function(e,t){return this.appendField(e,i.BufferViewVec4f64,t),this},e.prototype.mat3f=function(e,t){return this.appendField(e,i.BufferViewMat3f,t),this},e.prototype.mat3f64=function(e,t){return this.appendField(e,i.BufferViewMat3f64,t),this},e.prototype.mat4f=function(e,t){return this.appendField(e,i.BufferViewMat4f,t),this},e.prototype.mat4f64=function(e,t){return this.appendField(e,i.BufferViewMat4f64,t),this},e.prototype.vec4u8=function(e,t){return this.appendField(e,i.BufferViewVec4u8,t),this},e.prototype.f32=function(e,t){return this.appendField(e,i.BufferViewFloat,t),this},e.prototype.f64=function(e,t){return this.appendField(e,i.BufferViewFloat64,t),this},e.prototype.u8=function(e,t){return this.appendField(e,i.BufferViewUint8,t),this},e.prototype.u16=function(e,t){return this.appendField(e,i.BufferViewUint16,t),this},e.prototype.i8=function(e,t){return this.appendField(e,i.BufferViewInt8,t),this},e.prototype.vec2i8=function(e,t){return this.appendField(e,i.BufferViewVec2i8,t),this},e.prototype.vec2i16=function(e,t){return this.appendField(e,i.BufferViewVec2i16,t),this},e.prototype.vec2u8=function(e,t){return this.appendField(e,i.BufferViewVec2u8,t),this},e.prototype.vec4u16=function(e,t){return this.appendField(e,i.BufferViewVec4u16,t),this},e.prototype.u32=function(e,t){return this.appendField(e,i.BufferViewUint32,t),this},e.prototype.appendField=function(e,t,i){var n=t.ElementCount*r.elementTypeSize(t.ElementType),f=this.stride;this.fields.set(e,{size:n,constructor:t,offset:f,optional:i}),this.stride+=n,this.fieldNames.push(e)},e.prototype.alignTo=function(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this},e.prototype.hasField=function(e){return this.fieldNames.indexOf(e)>=0},e.prototype.createBuffer=function(e){return new f(this,e)},e.prototype.createView=function(e){return new f(this,e)},e.prototype.clone=function(){var t=new e;return t.stride=this.stride,t.fields=new Map,this.fields.forEach(function(e,i){return t.fields.set(i,e)}),t.fieldNames=this.fieldNames.slice(),t.BufferType=this.BufferType,t},e}();t.InterleavedLayout=o,t.newLayout=n}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/buffer/glUtil.js":
/*!**********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/buffer/glUtil.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t){function o(e,r){void 0===r&&(r={}),r=t({},n,r);var o=e.stride;return e.fieldNames.filter(function(r){var t=e.fields.get(r).optional;return!(t&&t.glPadding)}).map(function(t){var n=e.fields.get(t),u=n.constructor.ElementCount,f=i(n.constructor.ElementType),a=n.offset,s=!(!n.optional||!n.optional.glNormalized);return{name:t,stride:o,count:u,type:f,offset:a,normalized:s,divisor:r.divisor}})}function i(e){var r=u[e];if(r)return r;throw new Error("BufferType not supported in WebGL")}Object.defineProperty(r,"__esModule",{value:!0});var n={divisor:0};r.glLayout=o;var u={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Mat3.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Mat3.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e,r,f,i){void 0===r&&(r=0),this.TypedArrayConstructor=t,this.elementCount=9;var u=this.TypedArrayConstructor;void 0===f&&(f=9*u.BYTES_PER_ELEMENT);var o=0===e.byteLength?0:r;this.typedBuffer=null==i?new u(e,o):new u(e,o,(i-r)/u.BYTES_PER_ELEMENT),this.typedBufferStride=f/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return t.prototype.getMat=function(t,e){for(var r=t*this.typedBufferStride,f=0;f<9;f++)e[f]=this.typedBuffer[r+f];return e},t.prototype.setMat=function(t,e){for(var r=t*this.typedBufferStride,f=0;f<9;f++)this.typedBuffer[r+f]=e[f]},t.prototype.get=function(t,e){return this.typedBuffer[t*this.typedBufferStride+e]},t.prototype.set=function(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r},t.prototype.copyFrom=function(t,e,r){for(var f=this.typedBuffer,i=e.typedBuffer,u=t*this.typedBufferStride,o=r*e.typedBufferStride,n=0;n<9;++n)f[u+n]=i[o+n]},Object.defineProperty(t.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!0,configurable:!0}),t.ElementCount=9,t}();e.BufferViewMat3Impl=r}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Mat4.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Mat4.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e,r,f,i){void 0===r&&(r=0),this.TypedArrayConstructor=t,this.elementCount=16;var u=this.TypedArrayConstructor;void 0===f&&(f=16*u.BYTES_PER_ELEMENT);var o=0===e.byteLength?0:r;this.typedBuffer=null==i?new u(e,o):new u(e,o,(i-r)/u.BYTES_PER_ELEMENT),this.typedBufferStride=f/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return t.prototype.getMat=function(t,e){for(var r=t*this.typedBufferStride,f=0;f<16;f++)e[f]=this.typedBuffer[r+f];return e},t.prototype.setMat=function(t,e){for(var r=t*this.typedBufferStride,f=0;f<16;f++)this.typedBuffer[r+f]=e[f]},t.prototype.get=function(t,e){return this.typedBuffer[t*this.typedBufferStride+e]},t.prototype.set=function(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r},t.prototype.copyFrom=function(t,e,r){for(var f=this.typedBuffer,i=e.typedBuffer,u=t*this.typedBufferStride,o=r*e.typedBufferStride,n=0;n<16;++n)f[u+n]=i[o+n]},Object.defineProperty(t.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!0,configurable:!0}),t.ElementCount=16,t}();e.BufferViewMat4Impl=r}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Scalar.js":
/*!********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Scalar.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t,r,i,f){void 0===r&&(r=0),this.TypedArrayConstructor=e,this.elementCount=1;var u=this.TypedArrayConstructor;void 0===i&&(i=u.BYTES_PER_ELEMENT);var n=0===t.byteLength?0:r;this.typedBuffer=null==f?new u(t,n):new u(t,n,(f-r)/u.BYTES_PER_ELEMENT),this.typedBufferStride=i/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return e.prototype.get=function(e){return this.typedBuffer[e*this.typedBufferStride]},e.prototype.set=function(e,t){this.typedBuffer[e*this.typedBufferStride]=t},Object.defineProperty(e.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!0,configurable:!0}),e.ElementCount=1,e}();t.BufferViewScalarImpl=r}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Vec2.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Vec2.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/vec2 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec2.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t,r,f,i){void 0===r&&(r=0),this.TypedArrayConstructor=e,this.elementCount=2;var u=this.TypedArrayConstructor;void 0===f&&(f=2*u.BYTES_PER_ELEMENT);var d=0===t.byteLength?0:r;this.typedBuffer=null==i?new u(t,d):new u(t,d,(i-r)/u.BYTES_PER_ELEMENT),this.typedBufferStride=f/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return e.prototype.getVec=function(e,t){return r.vec2.set(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1])},e.prototype.setVec=function(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1]},e.prototype.get=function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]},e.prototype.set=function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r},e.prototype.copyFrom=function(e,t,r){var f=this.typedBuffer,i=t.typedBuffer,u=e*this.typedBufferStride,d=r*t.typedBufferStride;f[u]=i[d],f[u+1]=i[d+1]},Object.defineProperty(e.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!0,configurable:!0}),e.ElementCount=2,e}();t.BufferViewVec2Impl=f}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Vec3.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Vec3.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/vec3 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t,r,f,i){void 0===r&&(r=0),this.TypedArrayConstructor=e,this.elementCount=3;var u=this.TypedArrayConstructor;void 0===f&&(f=3*u.BYTES_PER_ELEMENT);var d=0===t.byteLength?0:r;this.typedBuffer=null==i?new u(t,d):new u(t,d,(i-r)/u.BYTES_PER_ELEMENT),this.typedBufferStride=f/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return e.prototype.getVec=function(e,t){return r.vec3.set(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1],this.typedBuffer[e*this.typedBufferStride+2])},e.prototype.setVec=function(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1],this.typedBuffer[e*this.typedBufferStride+2]=t[2]},e.prototype.get=function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]},e.prototype.set=function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r},e.prototype.copyFrom=function(e,t,r){var f=this.typedBuffer,i=t.typedBuffer,u=e*this.typedBufferStride,d=r*t.typedBufferStride;f[u]=i[d],f[u+1]=i[d+1],f[u+2]=i[d+2]},Object.defineProperty(e.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!0,configurable:!0}),e.ElementCount=3,e}();t.BufferViewVec3Impl=f}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Vec4.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/buffer/internals/Vec4.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/vec4 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec4.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t,r,f,i){void 0===r&&(r=0),this.TypedArrayConstructor=e,this.elementCount=4;var u=this.TypedArrayConstructor;void 0===f&&(f=4*u.BYTES_PER_ELEMENT);var d=0===t.byteLength?0:r;this.typedBuffer=null==i?new u(t,d):new u(t,d,(i-r)/u.BYTES_PER_ELEMENT),this.typedBufferStride=f/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}return e.prototype.getVec=function(e,t){return r.vec4.set(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1],this.typedBuffer[e*this.typedBufferStride+2],this.typedBuffer[e*this.typedBufferStride+3])},e.prototype.setVec=function(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1],this.typedBuffer[e*this.typedBufferStride+2]=t[2],this.typedBuffer[e*this.typedBufferStride+3]=t[3]},e.prototype.get=function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]},e.prototype.set=function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r},e.prototype.copyFrom=function(e,t,r){var f=this.typedBuffer,i=t.typedBuffer,u=e*this.typedBufferStride,d=r*t.typedBufferStride;f[u]=i[d],f[u+1]=i[d+1],f[u+2]=i[d+2],f[u+3]=i[d+3]},Object.defineProperty(e.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!0,configurable:!0}),e.ElementCount=4,e}();t.BufferViewVec4Impl=f}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/buffer/types.js":
/*!*********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/buffer/types.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/compilerUtils */ "./node_modules/arcgis-js-api/core/compilerUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,u){function c(e){switch(e){case"u8":return 1;case"u16":return 2;case"u32":return 4;case"i8":return 1;case"i16":return 2;case"i32":case"f32":return 4;case"f64":return 8;default:return void u.neverReached(e)}}function a(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return void u.neverReached(e)}}function n(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return void u.neverReached(e)}}function t(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3.402823e38;case"f64":return 1.79769e308;default:return void u.neverReached(e)}}Object.defineProperty(r,"__esModule",{value:!0}),r.elementTypeSize=c,r.isSigned=a,r.isInteger=n,r.maximumValue=t}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=35.js.map