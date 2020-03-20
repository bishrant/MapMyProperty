(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/core/libs/gl-matrix-2/vec4":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec4.js",
	"esri/core/libs/gl-matrix-2/vec4":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec4.js",
	"esri/views/3d/support/buffer/workerHelper":"./node_modules/arcgis-js-api/views/3d/support/buffer/workerHelper.js",
	"esri/views/3d/support/meshProcessing":"./node_modules/arcgis-js-api/views/3d/support/meshProcessing.js",
	"esri/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker":"./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker.js",
	"esri/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts":"./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js",
	"esri/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters":"./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters.js",
	"esri/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing":"./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

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

/***/ "./node_modules/arcgis-js-api/views/3d/support/buffer/workerHelper.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/buffer/workerHelper.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ./BufferView */ "./node_modules/arcgis-js-api/views/3d/support/buffer/BufferView.js"),__webpack_require__(/*! ./InterleavedLayout */ "./node_modules/arcgis-js-api/views/3d/support/buffer/InterleavedLayout.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,f,r,u,i){function t(e,f){return f.push(e.buffer),{buffer:e.buffer,layout:c(e.layout)}}function V(e){return n(e.layout).createView(e.buffer)}function c(e){var f=new Array;return e.fields.forEach(function(e,u){var i=r({},e,{constructor:w(e.constructor)});f.push([u,i])}),{stride:e.stride,fields:f,fieldNames:e.fieldNames}}function n(e){var f=i.newLayout();return f.stride=e.stride,f.fieldNames=e.fieldNames,e.fields.forEach(function(e){return f.fields.set(e[0],r({},e[1],{constructor:B(e[1].constructor)}))}),f}function w(e){return e.ElementType+"_"+e.ElementCount}function B(e){return o.get(e)}Object.defineProperty(f,"__esModule",{value:!0}),f.packInterleavedBuffer=t,f.unpackInterleavedBuffer=V,f.packLayout=c,f.unpackLayout=n;var a=[u.BufferViewFloat,u.BufferViewVec2f,u.BufferViewVec3f,u.BufferViewVec4f,u.BufferViewMat3f,u.BufferViewMat4f,u.BufferViewFloat64,u.BufferViewVec2f64,u.BufferViewVec3f64,u.BufferViewVec4f64,u.BufferViewMat3f64,u.BufferViewMat4f64,u.BufferViewUint8,u.BufferViewVec2u8,u.BufferViewVec3u8,u.BufferViewVec4u8,u.BufferViewUint16,u.BufferViewVec2u16,u.BufferViewVec3u16,u.BufferViewVec4u16,u.BufferViewUint32,u.BufferViewVec2u32,u.BufferViewVec3u32,u.BufferViewVec4u32,u.BufferViewInt8,u.BufferViewVec2i8,u.BufferViewVec3i8,u.BufferViewVec4i8,u.BufferViewInt16,u.BufferViewVec2i16,u.BufferViewVec3i16,u.BufferViewVec4i16,u.BufferViewInt32,u.BufferViewVec2i32,u.BufferViewVec3i32,u.BufferViewVec4i32],o=new Map;a.forEach(function(e){return o.set(w(e),e)})}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/meshProcessing.js":
/*!***********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/meshProcessing.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(r,n){function a(r,n){for(var a=r.length/3,e=new Uint32Array(n+1),o=new Uint32Array(n+1),f=function(r,n){r<n?e[r+1]++:o[n+1]++},t=0;t<a;t++){var v=r[3*t],i=r[3*t+1],u=r[3*t+2];f(v,i),f(i,u),f(u,v)}for(var c=0,y=0,t=0;t<n;t++){var l=e[t+1],s=o[t+1];e[t+1]=c,o[t+1]=y,c+=l,y+=s}for(var w=new Uint32Array(6*a),A=e[n],d=function(r,n,a){if(r<n){var f=e[r+1]++;w[2*f]=n,w[2*f+1]=a}else{var f=o[n+1]++;w[2*A+2*f]=r,w[2*A+2*f+1]=a}},t=0;t<a;t++){var v=r[3*t],i=r[3*t+1],u=r[3*t+2];d(v,i,t),d(i,u,t),d(u,v,t)}for(var p=function(r,n){for(var a=2*r,e=n-r,o=1;o<e;o++){var f=w[a+2*o],t=w[a+2*o+1],v=o-1;for(v;v>=0&&w[a+2*v]>f;v--)w[a+2*v+2]=w[a+2*v],w[a+2*v+3]=w[a+2*v+1];w[a+2*v+2]=f,w[a+2*v+3]=t}},t=0;t<n;t++)p(e[t],e[t+1]),p(A+o[t],A+o[t+1]);for(var U=new Int32Array(3*a),b=function(n,a){return n===r[3*a]?0:n===r[3*a+1]?1:n===r[3*a+2]?2:-1},g=function(r,n){var a=b(r,n);U[3*n+a]=-1},t=0;t<n;t++){for(var h=e[t],_=e[t+1],j=o[t],m=o[t+1];h<_&&j<m;){var q=w[2*h],x=w[2*A+2*j];q===x?(!function(r,n,a,e){var o=b(r,n);U[3*n+o]=e;var f=b(a,e);U[3*e+f]=n}(t,w[2*h+1],x,w[2*A+2*j+1]),h++,j++):q<x?(g(t,w[2*h+1]),h++):(g(x,w[2*A+2*j+1]),j++)}for(;h<_;)g(t,w[2*h+1]),h++;for(;j<m;){var x=w[2*A+2*j];g(x,w[2*A+2*j+1]),j++}}return U}Object.defineProperty(n,"__esModule",{value:!0}),n.computeNeighbors=a}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker.js ***!
  \****************************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../../core/typedArrayUtil */ "./node_modules/arcgis-js-api/core/typedArrayUtil.js"),__webpack_require__(/*! ../../../../../geometry/support/meshUtils/deduplicate */ "./node_modules/arcgis-js-api/geometry/support/meshUtils/deduplicate.js"),__webpack_require__(/*! ../../../support/meshProcessing */ "./node_modules/arcgis-js-api/views/3d/support/meshProcessing.js"),__webpack_require__(/*! ../../../support/buffer/workerHelper */ "./node_modules/arcgis-js-api/views/3d/support/buffer/workerHelper.js"),__webpack_require__(/*! ./bufferLayouts */ "./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js"),__webpack_require__(/*! ./edgeBufferWriters */ "./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters.js"),__webpack_require__(/*! ./edgePreprocessing */ "./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,n,i,a,u,s,o,p,f){return function(){function e(){this.regularWriter=new p.RegularEdgeBufferWriter,this.silhouetteWriter=new p.SilhouetteEdgeBufferWriter}return e.prototype.process=function(e,t){return r(this,void 0,void 0,function(){var r,i,a;return n(this,function(n){switch(n.label){case 0:return t?(r=new Array,i=this.packInput(e,r),this.wrappedWork,[4,t.invoke("wrappedWork",i,{transferList:r})]):[3,2];case 1:return a=n.sent(),[2,this.unpackOutput(a)];case 2:return[2,this.work(e)]}})})},e.prototype.wrappedWork=function(e){return r(this,void 0,void 0,function(){var t,r,i,a;return n(this,function(n){return t=this.unpackInput(e),r=this.work(t),i=new Array,this.packInputTransferables(t,i),a=this.packOutput(r,i),[2,{result:a,transferList:i}]})})},e.prototype.work=function(e){var t=this.extractEdgeInformation(e.data,e.skipDeduplicate,e.originalIndices);return this.regularWriter.updateSettings(e.writerSettings),this.silhouetteWriter.updateSettings(e.writerSettings),f.extractEdges(t,this.regularWriter,this.silhouetteWriter)},e.prototype.packInputTransferables=function(e,t){t.push(e.data.buffer)},e.prototype.packInput=function(e,t){this.packInputTransferables(e,t);var r={dataBuffer:e.data.buffer,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate};return e.originalIndices&&(r.originalIndicesBuffer=e.originalIndices.buffer,r.originalIndicesType=i.isUint32Array(e.originalIndices)?"Uint32Array":"Uint16Array"),r},e.prototype.unpackInput=function(e){return{data:o.EdgeInputBufferLayout.createView(e.dataBuffer),originalIndices:"Uint32Array"===e.originalIndicesType?new Uint32Array(e.originalIndicesBuffer):"Uint16Array"===e.originalIndicesType?new Uint16Array(e.originalIndicesBuffer):void 0,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}},e.prototype.packOutput=function(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:s.packInterleavedBuffer(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:s.packInterleavedBuffer(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}},e.prototype.unpackOutput=function(e){return{regular:{instancesData:s.unpackInterleavedBuffer(e.regular.instancesData),lodInfo:{lengths:new Float32Array(e.regular.lodInfo.lengths)}},silhouette:{instancesData:s.unpackInterleavedBuffer(e.silhouette.instancesData),lodInfo:{lengths:new Float32Array(e.silhouette.lodInfo.lengths)}},averageEdgeLength:e.averageEdgeLength}},e.prototype.extractEdgeInformation=function(e,t,r){if(t&&r){var n=u.computeNeighbors(r,e.count);return{faces:r,neighbors:n,vertices:e}}var i=a.default(e.buffer,e.stride/4,{originalIndices:r}),n=u.computeNeighbors(i.indices,i.uniqueCount);return{faces:i.indices,neighbors:n,vertices:o.EdgeInputBufferLayout.createView(i.buffer)}},e}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../support/buffer/glUtil */ "./node_modules/arcgis-js-api/views/3d/support/buffer/glUtil.js"),__webpack_require__(/*! ../../../support/buffer/InterleavedLayout */ "./node_modules/arcgis-js-api/views/3d/support/buffer/InterleavedLayout.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,n,o,t){Object.defineProperty(n,"__esModule",{value:!0}),n.EdgeInputBufferLayout=t.newLayout().vec3f("position").u16("componentIndex").u16("_padding"),n.VertexLayout=t.newLayout().vec2u8("sideness"),n.glVertexLayout=o.glLayout(n.VertexLayout),n.CommonInstancesLayout=t.newLayout().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("_padding",{glPadding:!0}).u16("_padding2",{glPadding:!0}),n.RegularEdgeInstancesLayout=n.CommonInstancesLayout.clone().vec3f("normal"),n.SilhouetteEdgeInstancesLayout=n.CommonInstancesLayout.clone().vec3f("normalA").vec3f("normalB"),n.EdgeShaderAttributeLocations={position0:0,position1:1,componentIndex:2,variantOffset:4,variantStroke:5,variantExtension:6,normal:7,normalA:7,normalB:8,sideness:9}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters.js ***!
  \*************************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ../../../../../core/RandomLCG */ "./node_modules/arcgis-js-api/core/RandomLCG.js"),__webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/vec3 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3.js"),__webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/vec3f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3f64.js"),__webpack_require__(/*! ../../../support/buffer/glUtil */ "./node_modules/arcgis-js-api/views/3d/support/buffer/glUtil.js"),__webpack_require__(/*! ./bufferLayouts */ "./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,o,r,n,i,a,u,s){function c(t){var e=l;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],g[0]=5381;for(var o=0;o<m.length;o++)g[0]=31*g[0]+m[o];return g[0]}function p(t,e){var o=t<0?-1:1;return Math.pow(Math.abs(t),e)*o}Object.defineProperty(e,"__esModule",{value:!0});var f=function(){function t(){}return t.prototype.updateSettings=function(t){this.settings=t},t.prototype.write=function(t,e,o){var r=c(o);y.seed=r;var n=y.getIntRange(0,255),i=y.getIntRange(0,this.settings.variants-1),a=y.getFloat(),u=-(1-Math.min(a/.7,1)),s=Math.max(0,a-.7)/(1-.7),f=.5*p(u+s,1.2)+.5,l=255*f;t.position0.setVec(e,o.position0),t.position1.setVec(e,o.position1),t.componentIndex.set(e,o.componentIndex),t.variantOffset.set(e,n),t.variantStroke.set(e,i),t.variantExtension.set(e,l)},t.prototype.trim=function(t,e){return t.slice(0,e)},t}();e.CommonBufferWriter=f;var l=new Float32Array(6),m=new Uint32Array(l.buffer),g=new Uint32Array(1),y=new n,d=function(){function t(){this.commonWriter=new f}return t.prototype.updateSettings=function(t){this.commonWriter.updateSettings(t)},t.prototype.allocate=function(t){return s.RegularEdgeInstancesLayout.createBuffer(t)},t.prototype.write=function(t,e,o){this.commonWriter.write(t,e,o),i.vec3.add(h,o.faceNormal0,o.faceNormal1),i.vec3.normalize(h,h),t.normal.setVec(e,h)},t.prototype.trim=function(t,e){return this.commonWriter.trim(t,e)},t.Layout=s.RegularEdgeInstancesLayout,t.glLayout=u.glLayout(s.RegularEdgeInstancesLayout,{divisor:1}),t}();e.RegularEdgeBufferWriter=d;var v=function(){function t(){this.commonWriter=new f}return t.prototype.updateSettings=function(t){this.commonWriter.updateSettings(t)},t.prototype.allocate=function(t){return s.SilhouetteEdgeInstancesLayout.createBuffer(t)},t.prototype.write=function(t,e,o){this.commonWriter.write(t,e,o),t.normalA.setVec(e,o.faceNormal0),t.normalB.setVec(e,o.faceNormal1)},t.prototype.trim=function(t,e){return this.commonWriter.trim(t,e)},t.Layout=s.SilhouetteEdgeInstancesLayout,t.glLayout=u.glLayout(s.SilhouetteEdgeInstancesLayout,{divisor:1}),t}();e.SilhouetteEdgeBufferWriter=v;var h=a.vec3f64.create()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing.js ***!
  \*************************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/arrayUtils */ "./node_modules/arcgis-js-api/core/arrayUtils.js"),__webpack_require__(/*! ../../../../../core/mathUtils */ "./node_modules/arcgis-js-api/core/mathUtils.js"),__webpack_require__(/*! ../../../../../core/typedArrayUtil */ "./node_modules/arcgis-js-api/core/typedArrayUtil.js"),__webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/vec3 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3.js"),__webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/vec3f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3f64.js"),__webpack_require__(/*! ../../../support/mathUtils */ "./node_modules/arcgis-js-api/views/3d/support/mathUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,c,a,o,n,i){function s(e,r,n,i){void 0===i&&(i=A);var s=e.vertices.position,p=e.vertices.componentIndex,h=c.deg2rad(i.anglePlanar),y=c.deg2rad(i.angleSignificantEdge),w=Math.cos(y),x=Math.cos(h),I=m.edge,V=I.position0,b=I.position1,N=I.faceNormal0,E=I.faceNormal1,F=d(e),U=g(e),M=U.length/4,P=r.allocate(M),D=0,S=M,_=n.allocate(S),j=0,q=0,z=0,C=t.range(0,M),L=new Float32Array(M);a.forEach(L,function(e,r,t){s.getVec(U[4*r+0],V),s.getVec(U[4*r+1],b),t[r]=o.vec3.distance(V,b)}),C.sort(function(e,r){return L[r]-L[e]});for(var O=new Array,T=new Array,k=0;k<M;k++){var B=C[k],G=L[B],H=U[4*B+0],J=U[4*B+1],K=U[4*B+2],Q=U[4*B+3],R=Q===u;if(s.getVec(H,V),s.getVec(J,b),R)o.vec3.set(N,F[3*K+0],F[3*K+1],F[3*K+2]),o.vec3.copy(E,N),I.componentIndex=p.get(H),I.cosAngle=o.vec3.dot(N,E);else{if(o.vec3.set(N,F[3*K+0],F[3*K+1],F[3*K+2]),o.vec3.set(E,F[3*Q+0],F[3*Q+1],F[3*Q+2]),I.componentIndex=p.get(H),I.cosAngle=o.vec3.dot(N,E),l(I,x))continue;I.cosAngle<-.9999&&o.vec3.copy(E,N)}q+=G,z++,R||v(I,w)?(r.write(P,D++,I),O.push(G)):f(I,h)&&(n.write(_,j++,I),T.push(G))}var W=new Float32Array(O.reverse()),X=new Float32Array(T.reverse());return{regular:{instancesData:r.trim(P,D),lodInfo:{lengths:W}},silhouette:{instancesData:n.trim(_,j),lodInfo:{lengths:X}},averageEdgeLength:q/z}}function v(e,r){return e.cosAngle<r}function l(e,r){return e.cosAngle>r}function f(e,r){var t=c.acosClamped(e.cosAngle),a=m.fwd,n=m.ortho;return i.directionFromTo(a,e.position1,e.position0),t*(o.vec3.dot(o.vec3.cross(n,e.faceNormal0,e.faceNormal1),a)>0?-1:1)>r}function g(e){for(var r=e.faces.length/3,t=e.faces,c=e.neighbors,a=0,o=0;o<r;o++){var n=c[3*o+0],i=c[3*o+1],s=c[3*o+2],v=t[3*o+0],l=t[3*o+1],f=t[3*o+2];a+=n===u||v<l?1:0,a+=i===u||l<f?1:0,a+=s===u||f<v?1:0}for(var g=new Int32Array(4*a),d=0,o=0;o<r;o++){var n=c[3*o+0],i=c[3*o+1],s=c[3*o+2],v=t[3*o+0],l=t[3*o+1],f=t[3*o+2];(n===u||v<l)&&(g[d++]=v,g[d++]=l,g[d++]=o,g[d++]=n),(i===u||l<f)&&(g[d++]=l,g[d++]=f,g[d++]=o,g[d++]=i),(s===u||f<v)&&(g[d++]=f,g[d++]=v,g[d++]=o,g[d++]=s)}return g}function d(e){for(var r=e.faces.length/3,t=e.vertices.position,c=e.faces,a=h.v0,n=h.v1,i=h.v2,s=new Float32Array(3*r),v=0;v<r;v++){var l=c[3*v+0],f=c[3*v+1],g=c[3*v+2];t.getVec(l,a),t.getVec(f,n),t.getVec(g,i),o.vec3.subtract(n,n,a),o.vec3.subtract(i,i,a),o.vec3.cross(a,n,i),o.vec3.normalize(a,a),s[3*v+0]=a[0],s[3*v+1]=a[1],s[3*v+2]=a[2]}return s}Object.defineProperty(r,"__esModule",{value:!0});var u=-1;r.extractEdges=s;var p={position0:n.vec3f64.create(),position1:n.vec3f64.create(),faceNormal0:n.vec3f64.create(),faceNormal1:n.vec3f64.create(),componentIndex:0,cosAngle:0},m={edge:p,ortho:n.vec3f64.create(),fwd:n.vec3f64.create()},h={v0:n.vec3f64.create(),v1:n.vec3f64.create(),v2:n.vec3f64.create()},A={anglePlanar:4,angleSignificantEdge:35}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=86.js.map