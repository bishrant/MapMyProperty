(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/core/libs/gl-matrix-2/factories/vec3f32":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/factories/vec3f32.js",
	"arcgis-js-api/core/libs/gl-matrix-2/vec3f32":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3f32.js",
	"esri/core/libs/gl-matrix-2/vec3f32":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3f32.js",
	"arcgis-js-api/views/3d/support/earthUtils":"./node_modules/arcgis-js-api/views/3d/support/earthUtils.js",
	"esri/views/3d/support/earthUtils":"./node_modules/arcgis-js-api/views/3d/support/earthUtils.js",
	"arcgis-js-api/views/3d/support/projectionUtils":"./node_modules/arcgis-js-api/views/3d/support/projectionUtils.js",
	"esri/views/3d/support/projectionUtils":"./node_modules/arcgis-js-api/views/3d/support/projectionUtils.js",
	"arcgis-js-api/views/3d/webgl-engine/lib/BufferVectorMath":"./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/BufferVectorMath.js",
	"esri/views/3d/webgl-engine/lib/BufferVectorMath":"./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/BufferVectorMath.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/factories/vec3f32.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/libs/gl-matrix-2/factories/vec3f32.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(n,r){function e(){return new Float32Array(3)}function t(n){var r=new Float32Array(3);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r}function u(n,r,e){var t=new Float32Array(3);return t[0]=n,t[1]=r,t[2]=e,t}function o(n,r){return new Float32Array(n,r,3)}function i(){return e()}function a(){return u(1,1,1)}function c(){return u(1,0,0)}function f(){return u(0,1,0)}function l(){return u(0,0,1)}Object.defineProperty(r,"__esModule",{value:!0}),r.create=e,r.clone=t,r.fromValues=u,r.createView=o,r.zeros=i,r.ones=a,r.unitX=c,r.unitY=f,r.unitZ=l,r.ZEROS=i(),r.ONES=a(),r.UNIT_X=c(),r.UNIT_Y=f(),r.UNIT_Z=l()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3f32.js":
/*!*********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3f32.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./factories/vec3f32 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/factories/vec3f32.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,f,r){Object.defineProperty(f,"__esModule",{value:!0}),f.vec3f32=r}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/earthUtils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/earthUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/mathUtils */ "./node_modules/arcgis-js-api/core/mathUtils.js"),__webpack_require__(/*! ../../../core/wgs84Constants */ "./node_modules/arcgis-js-api/core/wgs84Constants.js"),__webpack_require__(/*! ../../../core/libs/gl-matrix-2/vec3 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3.js"),__webpack_require__(/*! ../../../core/libs/gl-matrix-2/vec3f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3f64.js"),__webpack_require__(/*! ../../../geometry/Point */ "./node_modules/arcgis-js-api/geometry/Point.js"),__webpack_require__(/*! ./projectionUtils */ "./node_modules/arcgis-js-api/views/3d/support/projectionUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,a,r,n,i,s,o){function u(e,r,n,i){var o,u;e instanceof s&&r instanceof s&&(n=r.longitude,i=r.latitude,u=e.latitude,o=e.longitude);var d=a.deg2rad(u),h=a.deg2rad(i),c=a.deg2rad(o),l=a.deg2rad(n),g=d-h,f=c-l,M=Math.sin(g/2),m=Math.sin(f/2),R=2*a.asinClamped(Math.sqrt(M*M+Math.cos(d)*Math.cos(h)*m*m)),v=R*t.earthRadius;return Math.round(1e4*v)/1e4}function d(e,t,a){var r=t.spatialReference,n=new s(t.x,e.y,r),i=new s(a.x,e.y,r),o=new s(e.x,t.y,r),d=new s(e.x,a.y,r);return{lon:u(n,i),lat:u(o,d)}}function h(e,r){var n=r/t.earthRadius,i=a.deg2rad(e),s=Math.sin(n/2),o=Math.cos(i),u=2*a.asinClamped(Math.sqrt(s*s/(o*o)));return a.rad2deg(u)}function c(e){return a.rad2deg(e/t.earthRadius)}function l(e){var r=e/2,n=a.deg2rad(r);return(1-Math.sin(n))*t.earthRadius/Math.sin(n)}function g(e,r){var n=a.deg2rad(r/2),i=(e+t.earthRadius)*Math.cos(n)-Math.sqrt(Math.pow(Math.cos(n)*(e+t.earthRadius),2)-e*e-2*e*t.earthRadius);return 2*a.acosClamped((Math.pow(e+t.earthRadius,2)+Math.pow(t.earthRadius,2)-Math.pow(i,2))/(2*(e+t.earthRadius)*t.earthRadius))*t.earthRadius}function f(e,t){var a=o.wgs84ComparableLonLatToECEF(v,e.longitude,e.latitude,e.z||0),r=o.wgs84ComparableLonLatToECEF(p,t.longitude,t.latitude,t.z||0),n=[r[0]-a[0],r[1]-a[1],r[2]-a[2]];return Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2])}function M(e,t){var a=e/15;return t||(a=Math.round(a)),a}function m(e,t){t||(t={hours:0,minutes:0,seconds:0}),t.hours=M(e[0],!0);var a=t.hours%1;t.hours-=a,t.minutes=60*a;var r=t.minutes%1;return t.minutes-=r,t.seconds=Math.round(60*r),t}function R(e,a){a=a||t.earthRadius;var r=n.vec3.dot(e,e),i=a*a;return Math.sqrt(Math.abs(r-i))}Object.defineProperty(t,"__esModule",{value:!0}),t.earthRadius=r.wgs84Radius,t.halfEarthRadius=t.earthRadius/2,t.halfEarthCircumference=Math.PI*t.earthRadius,t.earthCircumference=2*t.halfEarthCircumference,t.metersPerDegree=t.halfEarthCircumference/180,t.getGreatCircleDistance=u,t.getGreatCircleSpanAt=d,t.getLonDeltaForDistance=h,t.getLatDeltaForDistance=c,t.getMaxCameraAltitude=l,t.getViewExtentDistance=g,t.computeCartesianDistance=f,t.longitudeToTimezone=M,t.positionToTimezone=m,t.distanceToIdealHorizon=R;var v=i.vec3f64.create(),p=i.vec3f64.create()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/support/projectionUtils.js":
/*!************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/support/projectionUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/mathUtils */ "./node_modules/arcgis-js-api/core/mathUtils.js"),__webpack_require__(/*! ../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../../core/unitUtils */ "./node_modules/arcgis-js-api/core/unitUtils.js"),__webpack_require__(/*! ../../../core/libs/gl-matrix-2/mat4 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4.js"),__webpack_require__(/*! ../../../core/libs/gl-matrix-2/vec3 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3.js"),__webpack_require__(/*! ../../../core/libs/gl-matrix-2/vec3f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3f64.js"),__webpack_require__(/*! ../../../geometry/Point */ "./node_modules/arcgis-js-api/geometry/Point.js"),__webpack_require__(/*! ../../../geometry/SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js"),__webpack_require__(/*! ../../../geometry/support/aaBoundingRect */ "./node_modules/arcgis-js-api/geometry/support/aaBoundingRect.js"),__webpack_require__(/*! ../../../layers/graphics/dehydratedFeatures */ "./node_modules/arcgis-js-api/layers/graphics/dehydratedFeatures.js"),__webpack_require__(/*! ./earthUtils */ "./node_modules/arcgis-js-api/views/3d/support/earthUtils.js"),__webpack_require__(/*! ../webgl-engine/lib/BufferVectorMath */ "./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/BufferVectorMath.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,n,t,a,r,i,l,c,o,u,s,f,p,R){function h(e,n){return!!V(e,n,ie)}function m(e,n,t,a){return 2===e.length?(se[0]=e[0],se[1]=e[1],se[2]=0,e=se):e===t&&(l.vec3.copy(se,e),e=se),T(e,n,0,t,a,0,1)}function d(e,n,t,a){void 0===t&&(t=n.spatialReference),void 0===a&&(a=0),se[0]=e.x,se[1]=e.y;var r=e.z;return se[2]=void 0!==r?r:a,!!T(se,e.spatialReference,0,se,t,0,1)&&(n.x=se[0],n.y=se[1],n.spatialReference=t,void 0!==r?(n.z=se[2],n.hasZ=!0):(n.z=void 0,n.hasZ=!1),!0)}function v(e,n,t,a){void 0===a&&(a=0),se[0]=e.x,se[1]=e.y;var r=e.z;return se[2]=void 0!==r?r:a,T(se,e.spatialReference,0,n,t,0,1)}function M(e,n,t,a){var r;return t instanceof o?(r=t,a=a||r.spatialReference):f.isPoint(t)?(r=t,r.hasZ=!0,a=a||r.spatialReference):(a=t,r=new o({spatialReference:a})),T(e,n,0,se,a,0,1)?(r.x=se[0],r.y=se[1],r.z=se[2],r.spatialReference=a,r):null}function x(e,n,t,a,r,i){return se[0]=e,se[1]=n,se[2]=t,T(se,a,0,r,i,0,1)}function T(e,n,t,r,i,l,c){void 0===c&&(c=1);var o=V(n,i,ie);if(a.isNone(o))return!1;if(o===b){if(e===r&&t===l)return!0;for(var u=t+3*c,s=t,f=l;s<u;s++,f++)r[f]=e[s];return!0}for(var p=t+3*c,s=t,f=l;s<p;s+=3,f+=3)o(e,s,r,f);return!0}function I(e,n,t,r){var l=g(e,ae),c=g(r,re);if(l===c&&1!==c&&(0!==l||e.equals(r)))return i.mat4.identity(t),i.mat4.translate(t,t,n),!0;if(1===c){var o=te[l][6],u=te[6][c];if(a.isNone(o)||a.isNone(u))return!1;o(n,0,fe,0),u(fe,0,pe,0);var s=ce*fe[0],f=ce*fe[1],p=Math.sin(s),R=Math.cos(s),h=Math.sin(f),m=Math.cos(f),d=t;return d[0]=-p,d[4]=-h*R,d[8]=m*R,d[12]=pe[0],d[1]=R,d[5]=-h*p,d[9]=m*p,d[13]=pe[1],d[2]=0,d[6]=m,d[10]=h,d[14]=pe[2],d[3]=0,d[7]=0,d[11]=0,d[15]=1,!0}if(3===c&&(2===l||1===l)){var o=te[l][6];if(a.isNone(o))return!1;o(n,0,fe,0);var v=ce*fe[1];C(fe,0,pe,0),i.mat4.identity(t),i.mat4.translate(t,t,pe);var M=1/Math.cos(v);return i.mat4.scale(t,t,[M,M,1]),!0}return!1}function S(e,n,t,a,r){l.vec3.copy(Re,e),l.vec3.add(he,e,n),m(Re,t,Re,r),m(he,t,he,r),l.vec3.subtract(a,he,Re),l.vec3.normalize(a,a)}function y(e,n,t,r){var i=Z(n,r,le);if(i.projector===b)return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],!0;if(a.isNone(i.projector))return!1;var l=i.source,c=i.dest;if(3===c.spatialReferenceId){var o=te[l.spatialReferenceId][2];if(a.isNone(o))return!1;o(e,0,fe,0);var u=Math.abs(ce*fe[1])+Math.asin(e[3]/(p.earthRadius+e[2]));if(C(fe,0,t,0),u>.9999*Math.PI)t[3]=Number.MAX_VALUE;else{var s=1/Math.cos(u);t[3]=s*e[3]}return!0}return i.projector(e,0,t,0),t[3]=e[3]*l.metersPerUnit/c.metersPerUnit,!0}function P(e,n,t){if(null==e)return!1;var a=!0;return se[0]=null!=e.xmin?e.xmin:0,se[1]=null!=e.ymin?e.ymin:0,se[2]=null!=e.zmin?e.zmin:0,a=a&&T(se,e.spatialReference,0,n,t,0,1),se[0]=null!=e.xmax?e.xmax:0,se[1]=null!=e.ymax?e.ymax:0,se[2]=null!=e.zmax?e.zmax:0,a=a&&T(se,e.spatialReference,0,n,t,3,1),null==e.xmin&&(n[0]=-1/0),null==e.ymin&&(n[1]=-1/0),null==e.zmin&&(n[2]=-1/0),null==e.xmax&&(n[3]=1/0),null==e.ymax&&(n[4]=1/0),null==e.zmax&&(n[5]=1/0),a}function E(e,n,t){if(null==e)return!1;var a=!0;return se[0]=null!=e.xmin?e.xmin:0,se[1]=null!=e.ymin?e.ymin:0,se[2]=null!=e.zmin?e.zmin:0,a=a&&T(se,e.spatialReference,0,se,t,0,1),n[0]=se[0],n[1]=se[1],se[0]=null!=e.xmax?e.xmax:0,se[1]=null!=e.ymax?e.ymax:0,se[2]=null!=e.zmax?e.zmax:0,a=a&&T(se,e.spatialReference,0,se,t,0,1),n[2]=se[0],n[3]=se[1],null==e.xmin&&(n[0]=-1/0),null==e.ymin&&(n[1]=-1/0),null==e.xmax&&(n[2]=1/0),null==e.ymax&&(n[3]=1/0),a}function G(e,n,t,a){if(null==e)return!1;if(n.equals(a))return s.set(t,e),!0;var r=!0;return se[0]=e[0],se[1]=e[1],se[2]=0,r=r&&T(se,n,0,se,a,0,1),t[0]=se[0],t[1]=se[1],se[0]=e[2],se[1]=e[3],se[2]=0,r=r&&T(se,n,0,se,a,0,1),t[2]=se[0],t[3]=se[1],r}function g(e,t){return t.spatialReference===e?t.spatialReferenceId:(t.spatialReference=e,"metersPerUnit"in t&&(t.metersPerUnit=r.getMetersPerUnitForSR(e,1)),e.wkt===n.SphericalECEFSpatialReference.wkt?t.spatialReferenceId=1:e.isWGS84?t.spatialReferenceId=2:e.isWebMercator?t.spatialReferenceId=3:e.wkt===n.WGS84ECEFSpatialReference.wkt?t.spatialReferenceId=4:4490===e.wkid?t.spatialReferenceId=5:t.spatialReferenceId=0)}function b(e,n,t,a){t[a++]=e[n++],t[a++]=e[n++],t[a]=e[n]}function U(e,n,t,a){t[a++]=oe*(e[n++]/p.earthRadius),t[a++]=oe*(Math.PI/2-2*Math.atan(Math.exp(-1*e[n++]/p.earthRadius))),t[a]=e[n]}function z(e,n,t,a){U(e,n,t,a),L(t,a,t,a)}function A(e,n,t,a){U(e,n,t,a),Y(t,a,t,a)}function C(e,n,a,r){var i=.4999999*Math.PI,l=t.clamp(ce*e[n+1],-i,i),c=Math.sin(l);a[r++]=ce*e[n]*p.earthRadius,a[r++]=p.halfEarthRadius*Math.log((1+c)/(1-c)),a[r]=e[n+2]}function w(e){var n=g(e,ae);return!!te[n][6]}function O(e,n,t){var r=g(n,ae),i=te[r][6];return!a.isNone(i)&&(i(e,0,se,0),t!==se&&(t[0]=se[0],t[1]=se[1],t.length>2&&(t[2]=se[2])),!0)}function N(e,n){return se[0]=e.x,se[1]=e.y,se[2]=e.hasZ?e.z:0,O(se,e.spatialReference,n)}function H(e,n){var t=g(n.spatialReference,re);return!a.isNone(te[6][t])&&(!!N(e,se)&&(n.x=se[0],n.y=se[1],n.z=se[2],!0))}function j(e,n,t,a){void 0===a&&(a=0);var r=p.earthRadius+a,i=Math.cos(t);e[0]=Math.cos(n)*i*r,e[1]=Math.sin(n)*i*r,e[2]=Math.sin(t)*r}function L(e,n,t,a){var r=p.earthRadius+e[n+2],i=ce*e[n+1],l=ce*e[n],c=Math.cos(i);t[a++]=Math.cos(l)*c*r,t[a++]=Math.sin(l)*c*r,t[a]=Math.sin(i)*r}function W(e,n,a,r){var i=R.Vec3Compact.length(e,n),l=t.asinClamped(e[n+2]/(0===i?1:i)),c=Math.cos(l),o=c*i,u=(e[n+1]>0?1:-1)*t.acosClamped(e[n]/(0===o?1:o));a[r++]=oe*u,a[r++]=oe*l,a[r]=i-p.earthRadius}function q(e,n,t,a){W(e,n,t,a),C(t,a,t,a)}function X(e,n,t,a){W(e,n,t,a),Y(t,a,t,a)}function Y(e,n,t,a){var r=ue,i=ce*e[n],l=ce*e[n+1],c=e[n+2],o=Math.sin(l),u=Math.cos(l),s=r.a/Math.sqrt(1-r.e2*o*o);t[a++]=(s+c)*u*Math.cos(i),t[a++]=(s+c)*u*Math.sin(i),t[a++]=(s*(1-r.e2)+c)*o}function k(e,n,t,a){var r,i,l,c,o,u,s,f,p,R,h,m,d,v,M,x,T,I,S,y,P,E=ue,G=e[n],g=e[n+1],b=e[n+2];r=Math.abs(b),i=G*G+g*g,l=Math.sqrt(i),c=i+b*b,o=Math.sqrt(c),y=Math.atan2(g,G),u=b*b/c,s=i/c,v=E.a2/o,M=E.a3-E.a4/o,s>.3?(f=r/o*(1+s*(E.a1+v+u*M)/o),S=Math.asin(f),R=f*f,p=Math.sqrt(1-R)):(p=l/o*(1-u*(E.a5-v-s*M)/o),S=Math.acos(p),R=1-p*p,f=Math.sqrt(R)),h=1-E.e2*R,m=E.a/Math.sqrt(h),d=E.a6*m,v=l-m*p,M=r-d*f,T=p*v+f*M,x=p*M-f*v,I=x/(d/h+T),S+=I,P=T+x*I/2,b<0&&(S=-S),t[a++]=oe*y,t[a++]=oe*S,t[a]=P}function B(e,n,t,a){k(e,n,t,a),L(t,a,t,a)}function F(e,n,t,a){k(e,n,t,a),C(t,a,t,a)}function V(e,n,t){return Z(e,n,t).projector}function Z(e,n,t){if(t.source.spatialReference===e&&t.dest.spatialReference===n)return t;var a=g(e,t.source),r=g(n,t.dest);return 0===a&&0===r?e.equals(n)?t.projector=b:t.projector=null:t.projector=te[a][r],t}Object.defineProperty(n,"__esModule",{value:!0});var D,_,J,K,Q,$,ee,ne;n.SphericalECEFSpatialReference=new u({wkt:'GEOCCS["Spherical geocentric",\n  DATUM["Not specified",\n    SPHEROID["Sphere",\' + earthUtils.earthRadius + \',0]],\n  PRIMEM["Greenwich",0.0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",EAST],\n  AXIS["Geocentric Z",NORTH]\n]'}),n.WGS84ECEFSpatialReference=new u({wkt:'GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",6378137,298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]'}),n.canProject=h,n.vectorToVector=m,n.pointToPoint=d,n.pointToVector=v,n.vectorToPoint=M,n.xyzToVector=x,n.bufferToBuffer=T,n.computeLinearTransformation=I,n.transformDirection=S,n.mbsToMbs=y,n.extentToBoundingBox=P,n.extentToBoundingRect=E,n.boundingRectToBoundingRect=G;!function(e){function n(e){return e/p.earthRadius}function t(e){return Math.PI/2-2*Math.atan(Math.exp(-1*e/p.earthRadius))}function a(e){return e*p.earthRadius}function r(e){var n=Math.sin(e);return p.earthRadius/2*Math.log((1+n)/(1-n))}e.x2lon=n,e.y2lat=t,e.lon2x=a,e.lat2y=r}(n.webMercator||(n.webMercator={})),n.canProjectToWGS84ComparableLonLat=w,n.vectorToWGS84ComparableLonLat=O,n.pointToWGS84ComparableLonLat=N,n.pointToWGS84ComparableLonLatPoint=H,n.wgs84ComparableLonLatToECEF=j;var te=(D={},D[2]=(_={},_[5]=null,_[6]=b,_[1]=L,_[0]=null,_[3]=C,_[2]=b,_[4]=Y,_),D[5]=(J={},J[5]=b,J[6]=b,J[1]=L,J[0]=null,J[3]=null,J[2]=null,J[4]=Y,J),D[3]=(K={},K[5]=null,K[6]=U,K[1]=z,K[0]=null,K[3]=b,K[2]=U,K[4]=A,K),D[4]=(Q={},Q[5]=k,Q[6]=k,Q[1]=B,Q[0]=null,Q[3]=F,Q[2]=k,Q[4]=b,Q),D[1]=($={},$[5]=W,$[6]=W,$[1]=b,$[0]=null,$[3]=q,$[2]=W,$[4]=X,$),D[0]=(ee={},ee[5]=null,ee[6]=null,ee[1]=null,ee[0]=b,ee[3]=null,ee[2]=null,ee[4]=null,ee),D[6]=(ne={},ne[5]=null,ne[6]=b,ne[1]=L,ne[0]=null,ne[3]=null,ne[2]=b,ne[4]=Y,ne),D),ae={spatialReference:null,spatialReferenceId:0},re={spatialReference:null,spatialReferenceId:0},ie={source:{spatialReference:null,spatialReferenceId:0},dest:{spatialReference:null,spatialReferenceId:0},projector:b},le={source:{spatialReference:null,spatialReferenceId:0,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:0,metersPerUnit:1},projector:b},ce=t.deg2rad(1),oe=t.rad2deg(1),ue={a:6378137,e2:.006694379990137799,a1:42697.67270715754,a2:1823091254.6075456,a3:142.91722289812412,a4:4557728136.518864,a5:42840.589930055656,a6:.9933056200098622},se=c.vec3f64.create(),fe=c.vec3f64.create(),pe=c.vec3f64.create(),Re=c.vec3f64.create(),he=c.vec3f64.create()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/BufferVectorMath.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/webgl-engine/lib/BufferVectorMath.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,n){Object.defineProperty(n,"__esModule",{value:!0});!function(t){function n(t,n){var e=t[n],o=t[n+1],c=t[n+2];return Math.sqrt(e*e+o*o+c*c)}function e(t,n){var e=t[n],o=t[n+1],c=t[n+2],i=1/Math.sqrt(e*e+o*o+c*c);t[n]*=i,t[n+1]*=i,t[n+2]*=i}function o(t,n,e){t[n]*=e,t[n+1]*=e,t[n+2]*=e}function c(t,n,e,o,c,i){void 0===i&&(i=n),c=c||t,c[i]=t[n]+e[o],c[i+1]=t[n+1]+e[o+1],c[i+2]=t[n+2]+e[o+2]}function i(t,n,e,o,c,i){void 0===i&&(i=n),c=c||t,c[i]=t[n]-e[o],c[i+1]=t[n+1]-e[o+1],c[i+2]=t[n+2]-e[o+2]}t.length=n,t.normalize=e,t.scale=o,t.add=c,t.subtract=i}(n.Vec3Compact||(n.Vec3Compact={}))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=31.js.map