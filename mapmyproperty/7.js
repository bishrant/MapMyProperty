(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/geometry/support/normalizeUtils":"./node_modules/arcgis-js-api/geometry/support/normalizeUtils.js",
	"arcgis-js-api/geometry/support/normalizeUtils":"./node_modules/arcgis-js-api/geometry/support/normalizeUtils.js",
	"arcgis-js-api/tasks/geometry/cut":"./node_modules/arcgis-js-api/tasks/geometry/cut.js",
	"arcgis-js-api/tasks/geometry/simplify":"./node_modules/arcgis-js-api/tasks/geometry/simplify.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/arcgis-js-api/geometry/support/normalizeUtils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/geometry/support/normalizeUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../config */ "./node_modules/arcgis-js-api/config.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../Polygon */ "./node_modules/arcgis-js-api/geometry/Polygon.js"),__webpack_require__(/*! ../Polyline */ "./node_modules/arcgis-js-api/geometry/Polyline.js"),__webpack_require__(/*! ../SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js"),__webpack_require__(/*! ./spatialReferenceUtils */ "./node_modules/arcgis-js-api/geometry/support/spatialReferenceUtils.js"),__webpack_require__(/*! ./webMercatorUtils */ "./node_modules/arcgis-js-api/geometry/support/webMercatorUtils.js"),__webpack_require__(/*! ../../tasks/geometry/cut */ "./node_modules/arcgis-js-api/tasks/geometry/cut.js"),__webpack_require__(/*! ../../tasks/geometry/simplify */ "./node_modules/arcgis-js-api/tasks/geometry/simplify.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,n,t,i,a,o,s,u,f,l,p,h,c,g,m){function v(e){return"polygon"===e.type}function x(e){return"polygon"===e[0].type}function y(e){return"polyline"===e[0].type}function d(e){return v(e)?e.rings:e.paths}function M(e,r){return Math.ceil((e-r)/(2*r))}function w(e,r){for(var n=d(e),t=0,i=n;t<i.length;t++)for(var a=i[t],o=0,s=a;o<s.length;o++){var u=s[o];u[0]+=r}return e}function b(e){for(var r=[],n=0,t=0,i=0;i<e.length;i++){for(var a=e[i],o=null,s=0;s<a.length;s++)o=a[s],r.push(o),0===s?(n=o[0],t=n):(n=Math.min(n,o[0]),t=Math.max(t,o[0]));o&&r.push([(n+t)/2,0])}return r}function R(e,r){if(!(e instanceof l||e instanceof f)){var n="straightLineDensify: the input geometry is neither polyline nor polygon";throw I.error(n),new a(n)}for(var t=d(e),i=[],o=0,s=t;o<s.length;o++){var u=s[o],p=[];i.push(p),p.push([u[0][0],u[0][1]]);for(var h=0;h<u.length-1;h++){var c=u[h][0],g=u[h][1],m=u[h+1][0],x=u[h+1][1],y=Math.sqrt((m-c)*(m-c)+(x-g)*(x-g)),M=(x-g)/y,w=(m-c)/y,b=y/r;if(b>1){for(var R=1;R<=b-1;R++){var L=R*r,W=w*L+c,P=M*L+g;p.push([W,P])}var S=(y+Math.floor(b-1)*r)/2,X=w*S+c,z=M*S+g;p.push([X,z])}p.push([m,x])}}return v(e)?new f({rings:i,spatialReference:e.spatialReference}):new l({paths:i,spatialReference:e.spatialReference})}function L(e,r,n){if(r){var t=R(e,1e6);e=c.webMercatorToGeographic(t,!0)}return n&&(e=w(e,n)),e}function W(e,r,n){if(Array.isArray(e)){var t=e[0];if(t>r){var i=M(t,r);e[0]=t+i*(-2*r)}else if(t<n){var i=M(t,n);e[0]=t+i*(-2*n)}}else{var t=e.x;if(t>r){var i=M(t,r);e=e.clone().offset(i*(-2*r),0)}else if(t<n){var i=M(t,n);e=e.clone().offset(i*(-2*n),0)}}return e}function P(e,r){for(var n=-1,t=0;t<r.cutIndexes.length;t++)!function(t){for(var i=r.cutIndexes[t],a=r.geometries[t],o=d(a),s=0;s<o.length;s++)!function(e){var r=o[e];r.some(function(n){if(n[0]<180)return!0;for(var t=0,i=0;i<r.length;i++){var o=r[i][0];t=o>t?o:t}t=Number(t.toFixed(9));for(var s=M(t,180),u=-360*s,f=0;f<r.length;f++){var l=a.getPoint(e,f);a.setPoint(e,f,l.clone().offset(u,0))}return!0})}(s);if(i===n){if(x(e))for(var u=0,f=d(a);u<f.length;u++){var l=f[u];e[i]=e[i].addRing(l)}else if(y(e))for(var p=0,h=d(a);p<h.length;p++){var c=h[p];e[i]=e[i].addPath(c)}}else n=i,e[i]=a}(t);return e}function S(e,r,a){return t(this,void 0,void 0,function(){var t,o,p,v,x,y,d,b,R,X,z,I,k,A,T,D,G,_,G,q,E,H,N,j,C,F,O,B,J,K,Q,V,Y,Z,$,ee,re,V,Y,ne,V,Y,Z;return n(this,function(n){switch(n.label){case 0:if(!Array.isArray(e))return[2,S([e],r)];for(t=r?r.url:i.geometryServiceUrl,X=0,z=[],I=[],k=0,A=e;k<A.length;k++)T=A[k],s.isNone(T)?I.push(T):(o||(o=T.spatialReference,p=h.getInfo(o),v=o.isWebMercator,d=v?102100:4326,x=U[d].maxX,y=U[d].minX,b=U[d].plus180Line,R=U[d].minus180Line),p?"mesh"===T.type?I.push(T):"point"===T.type?I.push(W(T.clone(),x,y)):"multipoint"===T.type?(D=T.clone(),D.points=D.points.map(function(e){return W(e,x,y)}),I.push(D)):"extent"===T.type?(G=T.clone(),_=G._normalize(!1,!1,p),I.push(_.rings?new f(_):_)):T.extent?(G=T.extent,q=M(G.xmin,y),E=q*(2*x),H=0===E?T.clone():w(T.clone(),E),G.offset(E,0),G.intersects(b)&&G.xmax!==x?(X=G.xmax>X?G.xmax:X,H=L(H,v),z.push(H),I.push("cut")):G.intersects(R)&&G.xmin!==y?(X=G.xmax*(2*x)>X?G.xmax*(2*x):X,H=L(H,v,360),z.push(H),I.push("cut")):I.push(H)):I.push(T.clone()):I.push(T));for(N=M(X,x),j=-90,C=N,F=new l;N>0;)O=360*N-180,F.addPath([[O,j],[O,-1*j]]),j*=-1,N--;return z.length>0&&C>0?[4,g.cut(t,z,F,a)]:[3,3];case 1:for(B=n.sent(),J=P(z,B),K=[],Q=[],V=0;V<I.length;V++)Y=I[V],"cut"!==Y?Q.push(Y):(Z=J.shift(),$=e[V],s.isSome($)&&"polygon"===$.type&&$.rings&&$.rings.length>1&&Z.rings.length>=$.rings.length?(K.push(Z),Q.push("simplify")):Q.push(v?c.geographicToWebMercator(Z):Z));return K.length?[4,m.simplify(t,K,a)]:[2,Q];case 2:for(ee=n.sent(),re=[],V=0;V<Q.length;V++)Y=Q[V],"simplify"!==Y?re.push(Y):re.push(v?c.geographicToWebMercator(ee.shift()):ee.shift());return[2,re];case 3:for(ne=[],V=0;V<I.length;V++)Y=I[V],"cut"!==Y?ne.push(Y):(Z=z.shift(),ne.push(!0===v?c.geographicToWebMercator(Z):Z));return[2,u.resolve(ne)]}})})}function X(e){var r;if(!e)return null;var n=e.extent;if(!n)return null;var t=e.spatialReference&&h.getInfo(e.spatialReference);if(!t)return n;var i=t.valid,a=i[0],o=i[1],s=2*o,u=n.width,f=n.xmin,l=n.xmax;if(r=[l,f],f=r[0],l=r[1],"extent"===e.type||0===u||u<=o||u>s||f<a||l>o)return n;var p;switch(e.type){case"polygon":if(!(e.rings.length>1))return n;p=b(e.rings);break;case"polyline":if(!(e.paths.length>1))return n;p=b(e.paths);break;case"multipoint":p=e.points}for(var c=n.clone(),g=0;g<p.length;g++){var m=p[g][0];m<0?(m+=o,l=Math.max(m,l)):(m-=o,f=Math.min(m,f))}return c.xmin=f,c.xmax=l,c.width<u?(c.xmin-=o,c.xmax-=o,c):n}function z(e,r){var n=h.getInfo(r);if(n){var t=n.valid,i=t[0],a=t[1],o=a-i;if(e<i)for(;e<i;)e+=o;if(e>a)for(;e>a;)e-=o}return e}Object.defineProperty(r,"__esModule",{value:!0});var I=o.getLogger("esri.geometry.support.normalizeUtils"),U={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new l({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:p.WebMercator}),minus180Line:new l({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:p.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new l({paths:[[[180,-180],[180,180]]],spatialReference:p.WGS84}),minus180Line:new l({paths:[[[-180,-180],[-180,180]]],spatialReference:p.WGS84})}};r.straightLineDensify=R,r.normalizeCentralMeridian=S,r.getDenormalizedExtent=X,r.normalizeMapX=z}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/geometry/cut.js":
/*!**********************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/geometry/cut.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../../geometry/support/jsonUtils */ "./node_modules/arcgis-js-api/geometry/support/jsonUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,s,n,i,u,c){function p(e,t,p,a){return o(this,void 0,void 0,function(){var o,f,g,l,y,d,m,S;return s(this,function(s){switch(s.label){case 0:return o="string"==typeof e?u.urlToObject(e):e,f=t[0].spatialReference,g=r({},a,{query:r({},o.query,{f:"json",sr:JSON.stringify(f),target:JSON.stringify({geometryType:c.getJsonType(t[0]),geometries:t}),cutter:JSON.stringify(p)})}),[4,i(o.path+"/cut",g)];case 1:return l=s.sent(),y=l.data,d=y.cutIndexes,m=y.geometries,S=void 0===m?[]:m,[2,{cutIndexes:d,geometries:S.map(function(e){return n.fromJSON(e).set(f)})}]}})})}Object.defineProperty(t,"__esModule",{value:!0}),t.cut=p}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/geometry/simplify.js":
/*!***************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/geometry/simplify.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../../geometry/support/jsonUtils */ "./node_modules/arcgis-js-api/geometry/support/jsonUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,n,i,o,s,u){function p(e,r,p){return n(this,void 0,void 0,function(){var n,f,l,y,g;return i(this,function(i){switch(i.label){case 0:return n="string"==typeof e?s.urlToObject(e):e,f=r[0].spatialReference,l=u.getJsonType(r[0]),y=t({},p,{query:t({},n.query,{f:"json",sr:f.wkid?f.wkid:JSON.stringify(f),geometries:JSON.stringify(a(r))})}),[4,o(n.path+"/simplify",y)];case 1:return g=i.sent(),[2,c(g.data,l,f)]}})})}function a(e){return{geometryType:u.getJsonType(e[0]),geometries:e.map(function(e){return e.toJSON()})}}function c(e,r,t){var n=u.getGeometryType(r);return e.map(function(e){var r=n.fromJSON(e);return r.spatialReference=t,r})}Object.defineProperty(r,"__esModule",{value:!0}),r.simplify=p}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=7.js.map