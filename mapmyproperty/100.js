(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/geometry/support/quantizationUtils":"./node_modules/arcgis-js-api/geometry/support/quantizationUtils.js",
	"arcgis-js-api/geometry/support/quantizationUtils":"./node_modules/arcgis-js-api/geometry/support/quantizationUtils.js",
	"esri/views/3d/layers/PointCloudWorker":"./node_modules/arcgis-js-api/views/3d/layers/PointCloudWorker.js",
	"esri/views/3d/layers/i3s/PointCloudRendererUtil":"./node_modules/arcgis-js-api/views/3d/layers/i3s/PointCloudRendererUtil.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[100],{

/***/ "./node_modules/arcgis-js-api/geometry/support/quantizationUtils.js":
/*!**************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/geometry/support/quantizationUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./jsonUtils */ "./node_modules/arcgis-js-api/geometry/support/jsonUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(n,t,r){function e(n){return n&&"upperLeft"===n.originPosition}function i(n){return n?{originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:[n.tolerance,n.tolerance],translate:[n.extent.xmin,n.extent.ymax]}:null}function u(n,t){if(n===t||null==n&&null==t)return!0;if(null==n||null==t)return!1;var r,i,u,a,o,l;return e(n)?(r=n.translate[0],i=n.translate[1],u=n.scale[0]):(r=n.extent.xmin,i=n.extent.ymax,u=n.tolerance),e(t)?(a=t.translate[0],o=t.translate[1],l=t.scale[0]):(a=t.extent.xmin,o=t.extent.ymax,l=t.tolerance),r===a&&i===o&&u===l}function a(n,t){var r=n.scale,e=n.translate;return Math.round((t-e[0])/r[0])}function o(n,t){var r=n.scale,e=n.translate;return Math.round((e[1]-t)/r[1])}function l(n,t,r){for(var e,i,u,l,s=[],m=0;m<r.length;m++){var f=r[m];m>0?(u=a(n,f[0]),l=o(n,f[1]),u===e&&l===i||(s.push(t(f,u-e,l-i)),e=u,i=l)):(e=a(n,f[0]),i=o(n,f[1]),s.push(t(f,e,i)))}return s.length>0?s:null}function s(n,t,r){return t[0]=a(n,r[0]),t[3]=o(n,r[1]),t[2]=a(n,r[2]),t[1]=o(n,r[3]),t}function m(n,t,r,e){return l(n,r?e?O:G:e?G:C,t)}function f(n,t,r,e){for(var i=[],u=r?e?O:G:e?G:C,a=0;a<t.length;a++){var o=l(n,u,t[a]);o&&o.length>=3&&i.push(o)}return i.length?i:null}function c(n,t,r,e){for(var i=[],u=r?e?O:G:e?G:C,a=0;a<t.length;a++){var o=l(n,u,t[a]);o&&o.length>=2&&i.push(o)}return i.length?i:null}function h(n,t){var r=n.scale,e=n.translate;return t*r[0]+e[0]}function x(n,t){var r=n.scale;return n.translate[1]-t*r[1]}function y(n,t,r){var e=new Array(r.length);if(!r.length)return e;var i=n.scale,u=i[0],a=i[1],o=h(n,r[0][0]),l=x(n,r[0][1]);e[0]=t(r[0],o,l);for(var s=1;s<r.length;s++){var m=r[s];o+=m[0]*u,l-=m[1]*a,e[s]=t(m,o,l)}return e}function g(n,t,r){for(var e=new Array(r.length),i=0;i<r.length;i++)e[i]=y(n,t,r[i]);return e}function d(n,t,r){return r?(t[0]=h(n,r[0]),t[1]=x(n,r[3]),t[2]=h(n,r[2]),t[3]=x(n,r[1]),t):[h(n,t[0]),x(n,t[3]),h(n,t[2]),x(n,t[1])]}function z(n,t,r,e){return y(n,r?e?O:G:e?G:C,t)}function I(n,t,r,e){return g(n,r?e?O:G:e?G:C,t)}function v(n,t,r,e){return g(n,r?e?O:G:e?G:C,t)}function P(n,t,r){for(var e=r[0],i=e[0],u=e[1],a=Math.min(i,t[0]),o=Math.min(u,t[1]),l=Math.max(i,t[2]),s=Math.max(u,t[3]),m=1;m<r.length;m++){var f=r[m],c=f[0],h=f[1];i+=c,u+=h,c<0&&(a=Math.min(a,i)),c>0&&(l=Math.max(l,i)),h<0?o=Math.min(o,u):h>0&&(s=Math.max(s,u))}return n[0]=a,n[1]=o,n[2]=l,n[3]=s,n}function p(n,t){if(!t.length)return null;n[0]=n[1]=Number.POSITIVE_INFINITY,n[2]=n[3]=Number.NEGATIVE_INFINITY;for(var r=0;r<t.length;r++)P(n,n,t[r]);return n}function N(n){var t=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return P(t,t,n)}function q(n){return p([0,0,0,0],n)}function M(n){return p([0,0,0,0],n)}function T(n,t,r,e,i){return t.xmin=a(n,r.xmin),t.ymin=o(n,r.ymin),t.xmax=a(n,r.xmax),t.ymax=o(n,r.ymax),t!==r&&(e&&(t.zmin=r.zmin,t.zmax=r.zmax),i&&(t.mmin=r.mmin,t.mmax=r.mmax)),t}function E(n,t,r,e,i){return t.points=m(n,r.points,e,i),t}function A(n,t,r,e,i){return t.x=a(n,r.x),t.y=o(n,r.y),t!==r&&(e&&(t.z=r.z),i&&(t.m=r.m)),t}function Y(n,t,r,e,i){var u=f(n,r.rings,e,i);return u?(t.rings=u,t):null}function _(n,t,r,e,i){var u=c(n,r.paths,e,i);return u?(t.paths=u,t):null}function b(n,t){return n&&t?r.isPoint(t)?A(n,{},t,!1,!1):r.isPolyline(t)?_(n,{},t,!1,!1):r.isPolygon(t)?Y(n,{},t,!1,!1):r.isMultipoint(t)?E(n,{},t,!1,!1):r.isExtent(t)?T(n,{},t,!1,!1):null:null}function B(n,t,r,e,i){return t.xmin=h(n,r.xmin),t.ymin=x(n,r.ymin),t.xmax=h(n,r.xmax),t.ymax=x(n,r.ymax),t!==r&&(e&&(t.zmin=r.zmin,t.zmax=r.zmax),i&&(t.mmin=r.mmin,t.mmax=r.mmax)),t}function F(n,t,r,e,i){return t.points=z(n,r.points,e,i),t}function Q(n,t,r,e,i){return t.x=h(n,r.x),t.y=x(n,r.y),t!==r&&(e&&(t.z=r.z),i&&(t.m=r.m)),t}function V(n,t,r,e,i){return t.rings=v(n,r.rings,e,i),t}function w(n,t,r,e,i){return t.paths=I(n,r.paths,e,i),t}Object.defineProperty(t,"__esModule",{value:!0});var C=function(n,t,r){return[t,r]},G=function(n,t,r){return[t,r,n[2]]},O=function(n,t,r){return[t,r,n[2],n[3]]};t.toQuantizationTransform=i,t.equals=u,t.quantizeX=a,t.quantizeY=o,t.quantizeBounds=s,t.quantizePoints=m,t.quantizeRings=f,t.quantizePaths=c,t.hydrateX=h,t.hydrateY=x,t.hydrateCoordsArray=y,t.hydrateCoordsArrayArray=g,t.hydrateBounds=d,t.hydratePoints=z,t.hydratePaths=I,t.hydrateRings=v,t.getQuantizedBoundsCoordsArray=P,t.getQuantizedBoundsCoordsArrayArray=p,t.getQuantizedBoundsPoints=N,t.getQuantizedBoundsPaths=q,t.getQuantizedBoundsRings=M,t.quantizeExtent=T,t.quantizeMultipoint=E,t.quantizePoint=A,t.quantizePolygon=Y,t.quantizePolyline=_,t.quantizeGeometry=b,t.hydrateExtent=B,t.hydrateMultipoint=F,t.hydratePoint=Q,t.hydratePolygon=V,t.hydratePolyline=w}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/layers/PointCloudWorker.js":
/*!************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/layers/PointCloudWorker.js ***!
  \************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../core/requireUtils */ "./node_modules/arcgis-js-api/core/requireUtils.js"),__webpack_require__(/*! ../../../core/typedArrayUtil */ "./node_modules/arcgis-js-api/core/typedArrayUtil.js"),__webpack_require__(/*! ../../../core/workers */ "./node_modules/arcgis-js-api/core/workers.js"),__webpack_require__(/*! ../../../core/libs/gl-matrix-2/quat */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/quat.js"),__webpack_require__(/*! ../../../core/libs/gl-matrix-2/quatf32 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/quatf32.js"),__webpack_require__(/*! ../../../core/libs/gl-matrix-2/vec3 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3.js"),__webpack_require__(/*! ../../../core/libs/gl-matrix-2/vec3f32 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3f32.js"),__webpack_require__(/*! ../../../geometry/SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js"),__webpack_require__(/*! ./i3s/PointCloudRendererUtil */ "./node_modules/arcgis-js-api/views/3d/layers/i3s/PointCloudRendererUtil.js"),__webpack_require__(/*! ../support/projectionUtils */ "./node_modules/arcgis-js-api/views/3d/support/projectionUtils.js"),__webpack_require__.dj.m(module)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,r,a,o,i,n,u,f,s,l,b,c,p,h,v){function m(){return new d}Object.defineProperty(e,"__esModule",{value:!0});var d=function(){function t(){}return t.prototype._process=function(t){var e=this._transform(t),r=[e.points.buffer,e.rgb.buffer];a.isSome(e.pointIdFilterMap)&&r.push(e.pointIdFilterMap.buffer);for(var i=0,u=e.attributes;i<u.length;i++){var f=u[i];"buffer"in f.values&&n.isArrayBuffer(f.values.buffer)&&f.values.buffer!==e.rgb.buffer&&r.push(f.values.buffer)}return o.resolve({result:e,transferList:r})},t.prototype._transform=function(t){var e=p.readGeometry(t.schema,t.geometryBuffer),r=e.length/3,o=null,i=[],n=p.getAttributeValues(t.primaryAttributeData,e,r);a.isSome(t.primaryAttributeData)&&n&&i.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:n});var u=p.getAttributeValues(t.modulationAttributeData,e,r);a.isSome(t.modulationAttributeData)&&u&&i.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:u});var f=p.evaluateRenderer(t.rendererInfo,n,u,r);if(t.filterInfo&&t.filterInfo.length>0&&a.isSome(t.filterAttributesData)){var s=t.filterAttributesData.map(function(t){var a=p.getAttributeValues(t,e,r),o={attributeInfo:t.attributeInfo,values:a};return i.push(o),o});o=new Uint32Array(r),r=p.filterInPlace(e,f,o,t.filterInfo,s)}for(var l=0,b=t.userAttributesData;l<b.length;l++){var h=b[l],v=p.getAttributeValues(h,e,r);i.push({attributeInfo:h.attributeInfo,values:v})}3*r<f.length&&(f=new Uint8Array(f.buffer.slice(0,3*r))),this._applyElevationOffsetInPlace(e,r,t.elevationOffset);var m=this._transformCoordinates(e,r,t.obb,c.fromJSON(t.inSR),c.fromJSON(t.outSR));return{obb:t.obb,points:m,rgb:f,attributes:i,pointIdFilterMap:o}},t.prototype._transformCoordinates=function(t,e,r,a,o){if(!h.bufferToBuffer(t,a,0,t,o,0,e))throw Error("Can't reproject");var i=b.vec3f32.fromValues(r.center[0],r.center[1],r.center[2]),n=b.vec3f32.create(),u=b.vec3f32.create();f.quat.conjugate(y,r.quaternion);for(var s=new Float32Array(3*e),c=0;c<e;c++)n[0]=t[3*c]-i[0],n[1]=t[3*c+1]-i[1],n[2]=t[3*c+2]-i[2],l.vec3.transformQuat(u,n,y),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(u[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(u[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(u[2])),s[3*c]=n[0],s[3*c+1]=n[1],s[3*c+2]=n[2];return s},t.prototype._applyElevationOffsetInPlace=function(t,e,r){if(0!==r)for(var a=0;a<e;a++)t[3*a+2]+=r},t}(),y=s.quatf32.create(),g=function(e){function a(){var r=e.call(this)||this;return r._thread=void 0,u.open(i.getAbsMid("./PointCloudWorker",t,v)).then(function(t){void 0===r._thread?r._thread=t:t.close()}),r}return r(a,e),a.prototype.destroy=function(){this._thread&&this._thread.close(),this._thread=null},a.prototype.transform=function(t,e,r){return this._thread?this._thread.invoke("_process",t,{transferList:e,signal:r}):o.resolve(this._transform(t))},a}(d);e.PointCloudWorker=g,e.default=m}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/layers/i3s/PointCloudRendererUtil.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/layers/i3s/PointCloudRendererUtil.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../../../renderers/PointCloudClassBreaksRenderer */ "./node_modules/arcgis-js-api/renderers/PointCloudClassBreaksRenderer.js"),__webpack_require__(/*! ../../../../renderers/PointCloudStretchRenderer */ "./node_modules/arcgis-js-api/renderers/PointCloudStretchRenderer.js"),__webpack_require__(/*! ../../../../renderers/PointCloudUniqueValueRenderer */ "./node_modules/arcgis-js-api/renderers/PointCloudUniqueValueRenderer.js"),__webpack_require__(/*! ./I3SBinaryReader */ "./node_modules/arcgis-js-api/views/3d/layers/i3s/I3SBinaryReader.js"),__webpack_require__(/*! ./LEPCC */ "./node_modules/arcgis-js-api/views/3d/layers/i3s/LEPCC.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,n,o,l,a,i){function u(e){var r=e.renderer,t=r&&r.type,n=r&&e.renderer.toJSON()||null,o=null,l=!1;"point-cloud-unique-value"===t?o=m(e.attributeStorageInfo,r.field):"point-cloud-stretch"===t?o=m(e.attributeStorageInfo,r.field):"point-cloud-class-breaks"===t?o=m(e.attributeStorageInfo,r.field):"point-cloud-rgb"===t?(o=p(e.attributeStorageInfo,r.field),l=null!=o):(o=p(e.attributeStorageInfo,"RGB"),l=null!=o);var a=null;return r&&r.colorModulation&&(a=m(e.attributeStorageInfo,r.colorModulation.field)),{rendererJSON:n,isRGBRenderer:l,primaryAttribute:o,modulationAttribute:a}}function f(e){var r=e.filters;return r?r.map(function(r){return{filterJSON:r.toJSON(),attributeInfo:m(e.attributeStorageInfo,r.field)}}):[]}function s(e,r,t,a){var i=e.rendererJSON,u=e.isRGBRenderer,f=null,s=null;if(r&&u)f=r;else if(r&&"pointCloudUniqueValueRenderer"===i.type){s=l.fromJSON(i);var d=s.colorUniqueValueInfos;f=new Uint8Array(3*a);for(var c=h(s.fieldTransformType),v=0;v<a;v++)for(var g=c?c(r[v]):r[v],b=g+"",p=0;p<d.length;p++)if(d[p].values.indexOf(b)>=0){f[3*v]=d[p].color.r,f[3*v+1]=d[p].color.g,f[3*v+2]=d[p].color.b;break}}else if(r&&"pointCloudStretchRenderer"===i.type){s=o.fromJSON(i);var m=s.stops;f=new Uint8Array(3*a);for(var c=h(s.fieldTransformType),v=0;v<a;v++){var g=c?c(r[v]):r[v],y=m.length-1;if(g<m[0].value)f[3*v]=m[0].color.r,f[3*v+1]=m[0].color.g,f[3*v+2]=m[0].color.b;else if(g>=m[y].value)f[3*v]=m[y].color.r,f[3*v+1]=m[y].color.g,f[3*v+2]=m[y].color.b;else for(var p=1;p<m.length;p++)if(g<m[p].value){var S=(g-m[p-1].value)/(m[p].value-m[p-1].value);f[3*v]=m[p].color.r*S+m[p-1].color.r*(1-S),f[3*v+1]=m[p].color.g*S+m[p-1].color.g*(1-S),f[3*v+2]=m[p].color.b*S+m[p-1].color.b*(1-S);break}}}else if(r&&"pointCloudClassBreaksRenderer"===i.type){s=n.fromJSON(i);var I=s.colorClassBreakInfos;f=new Uint8Array(3*a);for(var c=h(s.fieldTransformType),v=0;v<a;v++)for(var g=c?c(r[v]):r[v],p=0;p<I.length;p++)if(g>=I[p].minValue&&g<=I[p].maxValue){f[3*v]=I[p].color.r,f[3*v+1]=I[p].color.g,f[3*v+2]=I[p].color.b;break}}else{f=new Uint8Array(3*a);for(var v=0;v<f.length;v++)f[v]=255}if(t&&s&&s.colorModulation)for(var A=s.colorModulation.minValue,C=s.colorModulation.maxValue,v=0;v<a;v++){var g=t[v],R=g>=C?1:g<=A?.3:.3+.7*(g-A)/(C-A);f[3*v]=R*f[3*v],f[3*v+1]=R*f[3*v+1],f[3*v+2]=R*f[3*v+2]}return f}function d(e,r,t,n,o){for(var l=e.length/3,a=0,i=0;i<l;i++){for(var u=!0,f=0;f<n.length&&u;f++){var s=n[f].filterJSON,d=o[f].values[i];switch(s.type){case"pointCloudValueFilter":var v="exclude"===s.mode;-1!==s.values.indexOf(d)===v&&(u=!1);break;case"pointCloudBitfieldFilter":var g=c(s.requiredSetBits),b=c(s.requiredClearBits);(d&g)===g&&0==(d&b)||(u=!1);break;case"pointCloudReturnFilter":for(var p=15&d,m=d>>>4&15,y=m>1,S=1===p,h=p===m,I=!1,A=0,C=s.includedReturns;A<C.length;A++){var R=C[A];if("last"===R&&h||"firstOfMany"===R&&S&&y||"lastOfMany"===R&&h&&y||"single"===R&&!y){I=!0;break}}I||(u=!1)}}u&&(t[a]=i,e[3*a]=e[3*i],e[3*a+1]=e[3*i+1],e[3*a+2]=e[3*i+2],r[3*a]=r[3*i],r[3*a+1]=r[3*i+1],r[3*a+2]=r[3*i+2],a++)}return a}function c(e){for(var r=0,t=0,n=e||[];t<n.length;t++){r|=1<<n[t]}return r}function v(e){var r=e&&e.pointSizeAlgorithm;return r&&"splat"===r.type?r:null}function g(e){var r=e&&e.pointSizeAlgorithm;return r&&"fixed-size"===r.type?r:null}function b(e){var r=e&&e.pointSizeAlgorithm;return!(!r||!r.type)&&"fixed-size"===r.type}function p(e,r){for(var t=0,n=e;t<n.length;t++){var o=n[t];if(o.name===r&&null!=o.attributeValues&&"UInt8"===o.attributeValues.valueType&&3===o.attributeValues.valuesPerElement)return{name:r,storageInfo:o,useElevation:!1}}return null}function m(e,r){for(var t=0,n=e;t<n.length;t++){var o=n[t];if(o.name===r){var l="embedded-elevation"===o.encoding;return{name:r,storageInfo:l?null:o,useElevation:l}}}return"elevation"===r.toLowerCase()?{name:r,storageInfo:null,useElevation:!0}:null}function y(e,r){for(var t=new Float64Array(r),n=0;n<r;n++)t[n]=e[3*n+2];return t}function S(e,r,n){return t.isSome(e)&&e.attributeInfo.useElevation?y(r,n):t.isSome(e)?a.readBinaryAttribute(e.attributeInfo.storageInfo,e.buffer,n):null}function h(e){return null==e||"none"===e?null:"low-four-bit"===e?function(e){return 15&e}:"high-four-bit"===e?function(e){return(240&e)>>4}:"absolute-value"===e?function(e){return Math.abs(e)}:"modulo-ten"===e?function(e){return e%10}:null}function I(e,r){if(null==e.encoding||""===e.encoding){for(var t=a.createGeometryIndexFromSchema(r,e),n=a.createTypedView(r,t.vertexAttributes.position),o=t.header.fields,l=[o.offsetX,o.offsetY,o.offsetZ],u=[o.scaleX,o.scaleY,o.scaleZ],f=n.length/3,s=new Float64Array(3*f),d=0;d<f;d++)s[3*d]=n[3*d]*u[0]+l[0],s[3*d+1]=n[3*d+1]*u[1]+l[1],s[3*d+2]=n[3*d+2]*u[2]+l[2];return s}if("lepcc-xyz"===e.encoding)return i.decodeXYZ(r).result}Object.defineProperty(r,"__esModule",{value:!0}),r.getRendererInfo=u,r.getFilterInfo=f,r.evaluateRenderer=s,r.filterInPlace=d,r.getSplatSizeAlgorithm=v,r.getFixedSizeAlgorithm=g,r.rendererUsesFixedSizes=b,r.getAttributeInfo=m,r.elevationFromPositions=y,r.getAttributeValues=S,r.readGeometry=I}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=100.js.map