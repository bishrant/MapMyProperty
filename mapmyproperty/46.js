(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/geometry/support/aaBoundingBox":"./node_modules/arcgis-js-api/geometry/support/aaBoundingBox.js",
	"arcgis-js-api/geometry/support/aaBoundingBox":"./node_modules/arcgis-js-api/geometry/support/aaBoundingBox.js",
	"arcgis-js-api/layers/support/kmlUtils":"./node_modules/arcgis-js-api/layers/support/kmlUtils.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

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

/***/ "./node_modules/arcgis-js-api/layers/support/kmlUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/kmlUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../config */ "./node_modules/arcgis-js-api/config.js"),__webpack_require__(/*! ../../PopupTemplate */ "./node_modules/arcgis-js-api/PopupTemplate.js"),__webpack_require__(/*! ../../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../geometry/SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js"),__webpack_require__(/*! ../../geometry/support/aaBoundingBox */ "./node_modules/arcgis-js-api/geometry/support/aaBoundingBox.js"),__webpack_require__(/*! ../../geometry/support/boundsUtils */ "./node_modules/arcgis-js-api/geometry/support/boundsUtils.js"),__webpack_require__(/*! ../../renderers/support/jsonUtils */ "./node_modules/arcgis-js-api/renderers/support/jsonUtils.js"),__webpack_require__(/*! ../../tasks/support/FeatureSet */ "./node_modules/arcgis-js-api/tasks/support/FeatureSet.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,n,a,s,i,u,l,f,p,y,c){function d(e){var r=e.folders||[],t=r.slice(),o=new Map,n=new Map,a=new Map,s=new Map,i=new Map,l={esriGeometryPoint:n,esriGeometryPolyline:a,esriGeometryPolygon:s};(e.featureCollection&&e.featureCollection.layers||[]).forEach(function(e){var r=u.clone(e);r.featureSet.features=[];var t=e.featureSet.geometryType;o.set(t,r);var i=e.layerDefinition.objectIdField;"esriGeometryPoint"===t?v(n,i,e.featureSet.features):"esriGeometryPolyline"===t?v(a,i,e.featureSet.features):"esriGeometryPolygon"===t&&v(s,i,e.featureSet.features)}),e.groundOverlays&&e.groundOverlays.forEach(function(e){i.set(e.id,e)}),r.forEach(function(r){r.networkLinkIds.forEach(function(o){var n=h(o,r.id,e.networkLinks);n&&t.push(n)})}),t.forEach(function(e){e.featureInfos&&(e.points=u.clone(o.get("esriGeometryPoint")),e.polylines=u.clone(o.get("esriGeometryPolyline")),e.polygons=u.clone(o.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map(function(r){switch(r.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var t=l[r.type].get(r.id);t&&e[G[r.type]].featureSet.features.push(t);break;case"GroundOverlay":var o=i.get(r.id);o&&e.mapImages.push(o)}}),e.fullExtent=b([e]))});var f=b(t);return{folders:r,sublayers:t,extent:f}}function m(e,r,t,o){var n=a.kmlServiceUrl;return i(n,{query:{url:e,model:"simple",folders:"",refresh:0!==t||void 0,outSR:JSON.stringify(r)},responseType:"json",signal:o})}function g(e,r,t,o){void 0===t&&(t=null),void 0===o&&(o=[]);var n=[],a={},s=r.sublayers,i=r.folders.map(function(e){return e.id});return s.forEach(function(r){var s=new e;if(t?s.read(r,t):s.read(r),o.length&&i.indexOf(s.id)>-1&&(s.visible=-1!==o.indexOf(s.id)),a[r.id]=s,null!=r.parentFolderId&&-1!==r.parentFolderId){var u=a[r.parentFolderId];u.sublayers||(u.sublayers=[]),u.sublayers.unshift(s)}else n.unshift(s)}),n}function v(e,r,t){t.forEach(function(t){e.set(t.attributes[r],t)})}function S(e,r){var t;return r.some(function(r){return r.id===e&&(t=r,!0)}),t}function h(e,r,t){var o=S(e,t);return o&&(o.parentFolderId=r,o.networkLink=o),o}function I(e){return o(this,void 0,void 0,function(){var r,o,n,a,i,u,l,f,p,d;return t(this,function(t){switch(t.label){case 0:r=c.fromJSON(e.featureSet),o=r.features,n=e.layerDefinition,a=y.fromJSON(n.drawingInfo.renderer),i=s.fromJSON(e.popupInfo),u=[],l=0,f=o,t.label=1;case 1:return l<f.length?(p=f[l],[4,a.getSymbolAsync(p)]):[3,4];case 2:d=t.sent(),p.symbol=d,p.popupTemplate=i,p.visible=!!p.attributes.visibility,u.push(p),t.label=3;case 3:return l++,[3,1];case 4:return[2,u]}})})}function b(e){for(var r=f.create(),t=f.create(f.NEGATIVE_INFINITY),o=0,n=e;o<n.length;o++){var a=n[o];if(a.polygons&&a.polygons.featureSet&&a.polygons.featureSet.features)for(var s=0,i=a.polygons.featureSet.features;s<i.length;s++){var u=i[s];p.getBoundsXYZ(r,u.geometry),f.expand(t,r,t)}if(a.polylines&&a.polylines.featureSet&&a.polylines.featureSet.features)for(var y=0,c=a.polylines.featureSet.features;y<c.length;y++){var u=c[y];p.getBoundsXYZ(r,u.geometry),f.expand(t,r,t)}if(a.points&&a.points.featureSet&&a.points.featureSet.features)for(var d=0,m=a.points.featureSet.features;d<m.length;d++){var u=m[d];p.getBoundsXYZ(r,u.geometry),f.expand(t,r,t)}if(a.mapImages)for(var g=0,v=a.mapImages;g<v.length;g++){var u=v[g];p.getBoundsXYZ(r,u.extent),f.expand(t,r,t)}}return f.equals(t,f.NEGATIVE_INFINITY)?null:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:l.WGS84}}Object.defineProperty(r,"__esModule",{value:!0});var G={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};r.parseKML=d,r.fetchService=m,r.sublayersFromJSON=g,r.getGraphics=I,r.computeExtent=b}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=46.js.map