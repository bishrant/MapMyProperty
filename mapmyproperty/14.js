(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/geometry/support/aaBoundingBox":"./node_modules/arcgis-js-api/geometry/support/aaBoundingBox.js",
	"arcgis-js-api/geometry/support/aaBoundingBox":"./node_modules/arcgis-js-api/geometry/support/aaBoundingBox.js",
	"esri/layers/graphics/dehydratedFeatureComparison":"./node_modules/arcgis-js-api/layers/graphics/dehydratedFeatureComparison.js",
	"arcgis-js-api/layers/graphics/dehydratedFeatures":"./node_modules/arcgis-js-api/layers/graphics/dehydratedFeatures.js",
	"esri/layers/graphics/dehydratedFeatures":"./node_modules/arcgis-js-api/layers/graphics/dehydratedFeatures.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/arcgis-js-api/geometry/support/aaBoundingBox.js":
/*!**********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/geometry/support/aaBoundingBox.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js"),__webpack_require__(/*! ./aaBoundingRect */ "./node_modules/arcgis-js-api/geometry/support/aaBoundingRect.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(n,t,i,a){function r(n){return n}function e(n){return void 0===n&&(n=t.ZERO),r([n[0],n[1],n[2],n[3],n[4],n[5]])}function u(n,t,i,a,r,u,m){return void 0===m&&(m=e()),m[0]=n,m[1]=t,m[2]=i,m[3]=a,m[4]=r,m[5]=u,m}function m(n,t){return void 0===t&&(t=e()),t[0]=n.xmin,t[1]=n.ymin,t[2]=n.zmin,t[3]=n.xmax,t[4]=n.ymax,t[5]=n.zmax,t}function o(n,t){var a=isFinite(n[2])||isFinite(n[5]);return new i(a?{xmin:n[0],xmax:n[3],ymin:n[1],ymax:n[4],zmin:n[2],zmax:n[5],spatialReference:t}:{xmin:n[0],xmax:n[3],ymin:n[1],ymax:n[4],spatialReference:t})}function h(n,t,i){return void 0===i&&(i=e()),i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=t[0],i[4]=t[1],i[5]=t[2],i}function f(n,t){t[0]<n[0]&&(n[0]=t[0]),t[0]>n[3]&&(n[3]=t[0]),t[1]<n[1]&&(n[1]=t[1]),t[1]>n[4]&&(n[4]=t[1]),t[2]<n[2]&&(n[2]=t[2]),t[2]>n[5]&&(n[5]=t[2])}function M(n,t,i){return void 0===i&&(i=n),G(t)?(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[2]=Math.min(n[2],t[2]),i[3]=Math.max(n[3],t[3]),i[4]=Math.max(n[4],t[4]),i[5]=Math.max(n[5],t[5])):a.is(t)?(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[3]=Math.max(n[3],t[2]),i[4]=Math.max(n[4],t[3])):2===t.length?(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[3]=Math.max(n[3],t[0]),i[4]=Math.max(n[4],t[1])):3===t.length&&(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[2]=Math.min(n[2],t[2]),i[3]=Math.max(n[3],t[0]),i[4]=Math.max(n[4],t[1]),i[5]=Math.max(n[5],t[2])),i}function x(n,t,i,a,r){void 0===r&&(r=n);for(var e=n[0],u=n[1],m=n[2],o=n[3],h=n[4],f=n[5],M=0;M<a;M++)e=Math.min(e,t[i+3*M]),u=Math.min(u,t[i+3*M+1]),m=Math.min(m,t[i+3*M+2]),o=Math.max(o,t[i+3*M]),h=Math.max(h,t[i+3*M+1]),f=Math.max(f,t[i+3*M+2]);return r[0]=e,r[1]=u,r[2]=m,r[3]=o,r[4]=h,r[5]=f,r}function c(n,t,i,a,r){return void 0===r&&(r=n),r[0]=Math.min(n[0],n[0]+t),r[3]=Math.max(n[3],n[3]+t),r[1]=Math.min(n[1],n[1]+i),r[4]=Math.max(n[4],n[4]+i),r[2]=Math.min(n[2],n[2]+a),r[5]=Math.max(n[5],n[5]+a),r}function s(n,t,i,a){void 0===a&&(a=n);var r=t.length,e=n[0],u=n[1],m=n[2],o=n[3],h=n[4],f=n[5];if(i)for(var M=0;M<r;M++){var x=t[M];e=Math.min(e,x[0]),u=Math.min(u,x[1]),m=Math.min(m,x[2]),o=Math.max(o,x[0]),h=Math.max(h,x[1]),f=Math.max(f,x[2])}else for(var M=0;M<r;M++){var x=t[M];e=Math.min(e,x[0]),u=Math.min(u,x[1]),o=Math.max(o,x[0]),h=Math.max(h,x[1])}return a[0]=e,a[1]=u,a[2]=m,a[3]=o,a[4]=h,a[5]=f,a}function I(n){for(var t=0;t<6;t++)if(!isFinite(n[t]))return!1;return!0}function d(n){return n[0]>=n[3]?0:n[3]-n[0]}function v(n){return n[1]>=n[4]?0:n[4]-n[1]}function l(n){return n[2]>=n[5]?0:n[5]-n[2]}function N(n){var t=d(n),i=l(n),a=v(n);return Math.sqrt(t*t+i*i+a*a)}function E(n,t){return void 0===t&&(t=[0,0,0]),t[0]=n[0]+d(n)/2,t[1]=n[1]+v(n)/2,t[2]=n[2]+l(n)/2,t}function p(n,t){return void 0===t&&(t=[0,0,0]),t[0]=d(n),t[1]=v(n),t[2]=l(n),t}function T(n){return Math.max(d(n),l(n),v(n))}function F(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[2]>=n[2]&&t[0]<=n[3]&&t[1]<=n[4]&&t[2]<=n[5]}function g(n,t,i){return t[0]>=n[0]-i&&t[1]>=n[1]-i&&t[2]>=n[2]-i&&t[0]<=n[3]+i&&t[1]<=n[4]+i&&t[2]<=n[5]+i}function y(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[2]>=n[2]&&t[3]<=n[3]&&t[4]<=n[4]&&t[5]<=n[5]}function P(n,t){return Math.max(t[0],n[0])<=Math.min(t[3],n[3])&&Math.max(t[1],n[1])<=Math.min(t[4],n[4])&&Math.max(t[2],n[2])<=Math.min(t[5],n[5])}function _(n,t,i,a,r){return void 0===r&&(r=n),r[0]=n[0]+t,r[1]=n[1]+i,r[2]=n[2]+a,r[3]=n[3]+t,r[4]=n[4]+i,r[5]=n[5]+a,r}function R(n,t,i){return void 0===i&&(i=n),i[0]=t[0],i[1]=t[1],i[2]=t[2],i!==n&&(i[3]=n[3],i[4]=n[4],i[5]=n[5]),i}function V(n,t,i){return void 0===i&&(i=n),i[3]=t[0],i[4]=t[1],i[5]=t[2],i!==n&&(i[0]=n[0],i[1]=n[1],i[2]=n[2]),n}function O(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function Y(n){return n?O(n,t.NEGATIVE_INFINITY):e(t.NEGATIVE_INFINITY)}function z(n,t){return t||(t=a.create()),t[0]=n[0],t[1]=n[1],t[2]=n[3],t[3]=n[4],t}function A(n,t){return n[0]=t[0],n[1]=t[1],n[2]=Number.NEGATIVE_INFINITY,n[3]=t[2],n[4]=t[3],n[5]=Number.POSITIVE_INFINITY,n}function G(n){return 6===n.length}function W(n){return 0===d(n)&&0===v(n)&&0===l(n)}function b(n,t,i){if(null==n||null==t)return n===t;if(!G(n)||!G(t))return!1;if(i){for(var a=0;a<n.length;a++)if(!i(n[a],t[a]))return!1}else for(var a=0;a<n.length;a++)if(n[a]!==t[a])return!1;return!0}function q(n,t,i,a,r,e){return u(n,t,i,a,r,e,w)}Object.defineProperty(t,"__esModule",{value:!0}),t.create=e,t.fromValues=u,t.fromExtent=m,t.toExtent=o,t.fromMinMax=h,t.expandPointInPlace=f,t.expand=M,t.expandWithBuffer=x,t.expandWithOffset=c,t.expandWithNestedArray=s,t.allFinite=I,t.width=d,t.depth=v,t.height=l,t.diameter=N,t.center=E,t.size=p,t.maximumDimension=T,t.containsPoint=F,t.containsPointWithMargin=g,t.contains=y,t.intersects=P,t.offset=_,t.setMin=R,t.setMax=V,t.set=O,t.empty=Y,t.toRect=z,t.fromRect=A,t.is=G,t.isPoint=W,t.equals=b,t.wrap=q,t.POSITIVE_INFINITY=r([-1/0,-1/0,-1/0,1/0,1/0,1/0]),t.NEGATIVE_INFINITY=r([1/0,1/0,1/0,-1/0,-1/0,-1/0]),t.ZERO=r([0,0,0,0,0,0]);var w=e()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/graphics/dehydratedFeatureComparison.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/dehydratedFeatureComparison.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/compilerUtils */ "./node_modules/arcgis-js-api/core/compilerUtils.js"),__webpack_require__(/*! ../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,n,r,t){function a(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(e.length!==n.length)return!1;for(var r=0;r<e.length;r++){var t=e[r],a=n[r];if(t.length!==a.length)return!1;for(var i=0;i<t.length;i++)if(t[i]!==a[i])return!1}return!0}function i(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(e.length!==n.length)return!1;for(var r=0;r<e.length;r++)if(!a(e[r],n[r]))return!1;return!0}function u(e,n){return!!o(e.spatialReference,n.spatialReference)&&(e.x===n.x&&e.y===n.y&&e.z===n.z&&e.m===n.m)}function s(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&(!!o(e.spatialReference,n.spatialReference)&&i(e.paths,n.paths))}function f(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&(!!o(e.spatialReference,n.spatialReference)&&i(e.rings,n.rings))}function l(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&(!!o(e.spatialReference,n.spatialReference)&&a(e.points,n.points))}function c(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&(!!o(e.spatialReference,n.spatialReference)&&(e.xmin===n.xmin&&e.ymin===n.ymin&&e.zmin===n.zmin&&e.xmax===n.xmax&&e.ymax===n.ymax&&e.zmax===n.zmax))}function o(e,n){return e===n||e&&n&&e.equals(n)}function h(e,n){if(e===n)return!0;if(t.isNone(e)||t.isNone(n))return!1;if(e.type!==n.type)return!1;switch(e.type){case"point":return u(e,n);case"extent":return c(e,n);case"polyline":return s(e,n);case"polygon":return f(e,n);case"multipoint":return l(e,n);case"mesh":return!1;default:return void r.neverReached(e)}}function p(e,n){if(e===n)return!0;if(!e||!n)return!1;var r=Object.keys(e),t=Object.keys(n);if(r.length!==t.length)return!1;for(var a=0,i=r;a<i.length;a++){var u=i[a];if(e[u]!==n[u])return!1}return!0}function m(e,n){return e===n||null!=e&&null!=n&&e.objectId===n.objectId&&(!!h(e.geometry,n.geometry)&&!!p(e.attributes,n.attributes))}Object.defineProperty(n,"__esModule",{value:!0}),n.equals=m}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/graphics/dehydratedFeatures.js":
/*!**************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/dehydratedFeatures.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../../Graphic */ "./node_modules/arcgis-js-api/Graphic.js"),__webpack_require__(/*! ../../core/compilerUtils */ "./node_modules/arcgis-js-api/core/compilerUtils.js"),__webpack_require__(/*! ../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../core/typedArrayUtil */ "./node_modules/arcgis-js-api/core/typedArrayUtil.js"),__webpack_require__(/*! ../../geometry/SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js"),__webpack_require__(/*! ../../geometry/support/aaBoundingBox */ "./node_modules/arcgis-js-api/geometry/support/aaBoundingBox.js"),__webpack_require__(/*! ../../geometry/support/aaBoundingRect */ "./node_modules/arcgis-js-api/geometry/support/aaBoundingRect.js"),__webpack_require__(/*! ../../geometry/support/jsonUtils */ "./node_modules/arcgis-js-api/geometry/support/jsonUtils.js"),__webpack_require__(/*! ../../geometry/support/quantizationUtils */ "./node_modules/arcgis-js-api/geometry/support/quantizationUtils.js"),__webpack_require__(/*! ../support/Field */ "./node_modules/arcgis-js-api/layers/support/Field.js"),__webpack_require__(/*! ./dehydratedFeatureComparison */ "./node_modules/arcgis-js-api/layers/graphics/dehydratedFeatureComparison.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,a,n,i,s,o,l,u,h,c,p,m,y,f){function d(e){return o.isSome(e.geometry)}function g(e){return r.isFeatureGeometryType(e.type)}function b(e){return"point"===e.type}function x(e){var t=r.featureGeometryTypeKebabDictionary.fromJSON(e.geometryType),a=u.fromJSON(e.spatialReference),i=e.transform,s=e.features.map(function(r){var s=v(r,t,a,e.objectIdFieldName),o=s.geometry;if(o&&i)switch(o.type){case"point":s.geometry=m.hydratePoint(i,o,o,o.hasZ,o.hasM);break;case"multipoint":s.geometry=m.hydrateMultipoint(i,o,o,o.hasZ,o.hasM);break;case"polygon":s.geometry=m.hydratePolygon(i,o,o,o.hasZ,o.hasM);break;case"polyline":s.geometry=m.hydratePolyline(i,o,o,o.hasZ,o.hasM);break;default:n.neverReached(o)}return s});return{geometryType:t,features:s,spatialReference:a,fields:e.fields?e.fields.map(function(e){return y.fromJSON(e)}):null,objectIdFieldName:e.objectIdFieldName,globalIdFieldName:e.globalIdFieldName,geohashFieldName:e.geohashFieldName,geometryProperties:e.geometryProperties,hasZ:e.hasZ,hasM:e.hasM,exceededTransferLimit:e.exceededTransferLimit,transform:null}}function v(e,t,r,n){return{uid:a.generateUID(),objectId:n&&e.attributes?e.attributes[n]:null,attributes:e.attributes,geometry:Z(e.geometry,t,r),visible:!0}}function Z(e,t,r){if(!e)return null;switch(t){case"point":var a=e,n={x:a.x,y:a.y,z:a.z,m:a.m,hasZ:null!=a.z,hasM:null!=a.m,type:"point",spatialReference:r};return n;case"polyline":var i=e,n={paths:i.paths,hasZ:!!i.hasZ,hasM:!!i.hasM,type:"polyline",spatialReference:r};return n;case"polygon":var s=e,n={rings:s.rings,hasZ:!!s.hasZ,hasM:!!s.hasM,type:"polygon",spatialReference:r};return n;case"multipoint":var o=e,n={points:o.points,hasZ:!!o.hasZ,hasM:!!o.hasM,type:"multipoint",spatialReference:r};return n}}function M(e,t,r,a){return{x:e,y:t,z:r,hasZ:null!=r,hasM:!1,spatialReference:a,type:"point"}}function A(e){return"declaredClass"in e}function R(e){return"declaredClass"in e}function z(e){return"declaredClass"in e}function N(e,t){if(!e||z(e))return e;var r=new a({layer:t,sourceLayer:t});return r.visible=e.visible,r.symbol=s.clone(e.symbol),r.attributes=s.clone(e.attributes),r.geometry=k(e.geometry),r}function k(e){return o.isNone(e)?null:A(e)?e:p.fromJSON(w(e))}function F(e,t){if(!e)return null;var r;if(R(e)){if(null==t)return e.clone();if(R(t))return t.copy(e)}return null!=t?(r=t,r.x=e.x,r.y=e.y,r.spatialReference=e.spatialReference,e.hasZ?(r.z=e.z,r.hasZ=e.hasZ):(r.z=null,r.hasZ=!1),e.hasM?(r.m=e.m,r.hasM=!0):(r.m=null,r.hasM=!1)):(r=M(e.x,e.y,e.z,e.spatialReference),e.hasM&&(r.m=e.m,r.hasM=!0)),r}function S(e){if(!e)return 0;var t=32;for(var r in e)if(e.hasOwnProperty(r)){var a=e[r];switch(typeof a){case"string":t+=V(a);break;default:case"number":t+=16}}return t}function j(e){if(o.isNone(e))return 0;var t=32;switch(e.type){case"point":t+=42;break;case"polyline":case"polygon":for(var r=0,a=2+(e.hasZ?1:0)+(e.hasM?1:0),i="polyline"===e.type?e.paths:e.rings,s=0,u=i;s<u.length;s++){r+=u[s].length}t+=8*r*a+64,t+=128*r,t+=34,t+=32*(i.length+1);break;case"multipoint":var h=2+(e.hasZ?1:0)+(e.hasM?1:0),c=e.points.length;t+=8*c*h+64,t+=128*c,t+=34,t+=32;break;case"extent":t+=98,e.hasM&&(t+=32),e.hasZ&&(t+=32);break;case"mesh":t+=l.estimateSize(e.vertexAttributes.position),t+=l.estimateSize(e.vertexAttributes.normal),t+=l.estimateSize(e.vertexAttributes.uv),t+=l.estimateSize(e.vertexAttributes.tangent);break;default:n.neverReached(e)}return t}function I(e){var t=32;return t+=S(e.attributes),t+=3,t+=8+j(e.geometry)}function O(e){if(o.isNone(e))return 0;switch(e.type){case"point":return 1;case"polyline":for(var t=0,r=0,a=e.paths;r<a.length;r++){t+=a[r].length}return t;case"polygon":for(var t=0,i=0,s=e.rings;i<s.length;i++){t+=s[i].length}return t;case"multipoint":return e.points.length;case"extent":return 2;case"mesh":var l=e.vertexAttributes&&e.vertexAttributes.position;return l?l.length/3:0;default:return void n.neverReached(e)}}function P(e){if(!e)return!1;switch(e.type){case"extent":case"point":return!0;case"polyline":for(var t=0,r=e.paths;t<r.length;t++){if(r[t].length>0)return!0}return!1;case"polygon":for(var a=0,i=e.rings;a<i.length;a++){if(i[a].length>0)return!0}return!1;case"multipoint":return e.points.length>0;case"mesh":return e.vertexAttributes&&e.vertexAttributes.position&&e.vertexAttributes.position.length>0;default:return void n.neverReached(e)}}function w(e){var t=e.spatialReference.toJSON();switch(e.type){case"point":return{x:e.x,y:e.y,z:e.z,m:e.m,spatialReference:t};case"polygon":var r=e.rings,a=e.hasZ,i=e.hasM;return{rings:G(r),hasZ:a,hasM:i,spatialReference:t};case"polyline":var s=e.paths,a=e.hasZ,i=e.hasM;return{paths:G(s),hasZ:a,hasM:i,spatialReference:t};case"extent":var o=e.xmin,l=e.xmax,u=e.ymin,h=e.ymax,c=e.zmin,p=e.zmax,m=e.mmin,y=e.mmax,a=e.hasZ,i=e.hasM;return{xmin:o,xmax:l,ymin:u,ymax:h,zmin:c,zmax:p,mmin:m,mmax:y,hasZ:a,hasM:i,spatialReference:t};case"multipoint":var f=e.points,a=e.hasZ,i=e.hasM;return{points:J(f)?B(f):f,hasZ:a,hasM:i,spatialReference:t};default:return void n.neverReached(e)}}function G(e){return T(e)?e.map(function(e){return B(e)}):e}function B(e){return e.map(function(e){return l.toArray(e)})}function T(e){for(var t=0,r=e;t<r.length;t++){var a=r[t];if(0!==a.length)return J(a)}return!1}function J(e){return e.length&&(l.isFloat32Array(e[0])||l.isFloat64Array(e[0]))}function C(e,t){switch(h.empty(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[3]=e.x,t[1]=t[4]=e.y,e.hasZ&&(t[2]=t[5]=e.z);break;case"polyline":for(var r=0;r<e.paths.length;r++)h.expandWithNestedArray(t,e.paths[r],e.hasZ);break;case"polygon":for(var r=0;r<e.rings.length;r++)h.expandWithNestedArray(t,e.rings[r],e.hasZ);break;case"multipoint":h.expandWithNestedArray(t,e.points,e.hasZ);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[3]=e.xmax,t[4]=e.ymax,null!=e.zmin&&(t[2]=e.zmin),null!=e.zmax&&(t[5]=e.zmax);break;default:n.neverReached(e)}}function W(e,t){C(e,_),h.expand(t,_)}function D(e,t){switch(c.empty(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[2]=e.x,t[1]=t[3]=e.y;break;case"polyline":for(var r=0;r<e.paths.length;r++)c.expandWithNestedArray(t,e.paths[r]);break;case"polygon":for(var r=0;r<e.rings.length;r++)c.expandWithNestedArray(t,e.rings[r]);break;case"multipoint":c.expandWithNestedArray(t,e.points);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax;break;default:n.neverReached(e)}}function U(e,t){D(e,K),c.expand(t,K)}function q(e,t){return null!=e.objectId?e.objectId:e.attributes&&t?e.attributes[t]:null}Object.defineProperty(t,"__esModule",{value:!0}),t.equals=f.equals;var L=function(){function e(e,t,r){this.uid=e,this.geometry=t,this.attributes=r,this.visible=!0,this.objectId=null,this.centroid=null}return e}();t.DehydratedFeatureClass=L,t.hasGeometry=d,t.isFeatureGeometry=g;var H=function(){function e(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}return e}();t.DehydratedFeatureSetClass=H,t.isPoint=b,t.fromFeatureSetJSON=x,t.fromJSONGeometry=Z,t.makeDehydratedPoint=M,t.isHydratedGeometry=A,t.isHydratedPoint=R,t.isHydratedGraphic=z,t.hydrateGraphic=N,t.hydrateGeometry=k,t.clonePoint=F;var V=i("esri-text-decoder")?function(e){return 32+e.length}:function(e){return 32*e.length};t.estimateAttributesObjectSize=S,t.estimateGeometryObjectSize=j,t.estimateSize=I,t.numVertices=O,t.hasVertices=P,t.computeAABB=C,t.expandAABB=W,t.computeAABR=D,t.expandAABR=U,t.getObjectId=q;var _=h.create(),K=c.create()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=14.js.map