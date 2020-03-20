(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/geohash/GeohashTree":"./node_modules/arcgis-js-api/geohash/GeohashTree.js",
	"esri/geohash/geohashUtils":"./node_modules/arcgis-js-api/geohash/geohashUtils.js",
	"arcgis-js-api/layers/graphics/data/QueryEngineCapabilities":"./node_modules/arcgis-js-api/layers/graphics/data/QueryEngineCapabilities.js",
	"esri/tasks/operations/query":"./node_modules/arcgis-js-api/tasks/operations/query.js",
	"arcgis-js-api/tasks/operations/query":"./node_modules/arcgis-js-api/tasks/operations/query.js",
	"arcgis-js-api/tasks/operations/urlUtils":"./node_modules/arcgis-js-api/tasks/operations/urlUtils.js",
	"esri/views/2d/layers/features/controllers/BaseController":"./node_modules/arcgis-js-api/views/2d/layers/features/controllers/BaseController.js",
	"esri/views/2d/layers/features/support/ClusterStore":"./node_modules/arcgis-js-api/views/2d/layers/features/support/ClusterStore.js",
	"esri/views/2d/layers/features/support/pixelBuffering":"./node_modules/arcgis-js-api/views/2d/layers/features/support/pixelBuffering.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/arcgis-js-api/geohash/GeohashTree.js":
/*!***********************************************************!*\
  !*** ./node_modules/arcgis-js-api/geohash/GeohashTree.js ***!
  \***********************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/CircularArray */ "./node_modules/arcgis-js-api/core/CircularArray.js"),__webpack_require__(/*! ../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ./geohashUtils */ "./node_modules/arcgis-js-api/geohash/geohashUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,i,a,o){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){this._pool=new i.default(8024),this._nodes=0,this._root=new s(0,0,0),this._fields=t}return t.prototype._acquire=function(t,e,i){var o=this._pool.dequeue();return this._nodes++,a.isSome(o)?o.realloc(t,e,i):new s(t,e,i)},t.prototype._release=function(t){this._nodes--,this._pool.enqueue(t)},Object.defineProperty(t.prototype,"count",{get:function(){return this._root.count},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this._nodes},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"poolSize",{get:function(){return this._pool.size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"depth",{get:function(){var t=0;return this._forEachNode(function(e){return t=Math.max(t,e.depth)}),t},enumerable:!0,configurable:!0}),t.prototype.dropLevels=function(t){var e=this;this._forEachNode(function(i){if(i.depth>=t)for(var a=0;a<i.children.length;a++){var o=i.children[a];i.children[a]=null,o&&e._release(o)}})},t.prototype.insert=function(t,e,i){void 0===i&&(i=0);for(var a=this._root,o=0,n=0,s=0;null!==a;){if(a.depth>=i&&(a.count+=1,a.xTotal+=t.geometry.coords[0],a.yTotal+=t.geometry.coords[1],a.xGeohashTotal+=t.geohashX,a.yGeohashTotal+=t.geohashY,this._updateStatistics(t,a,1)),o>=e)return;var r=Math.ceil((o+1)/2),h=Math.floor((o+1)/2),l=1-o%2,c=30-(3*r+2*h),u=30-(2*r+3*h),d=7*l+3*(1-l)<<c,f=3*l+7*(1-l)<<u,p=8*l+4*(1-l),v=(t.geohashX&d)>>c,y=(t.geohashY&f)>>u,g=v+y*p,x=3*l+2*(1-l),_=2*l+3*(1-l);n=n<<x|v,s=s<<_|y,null==a.children[g]&&(a.children[g]=this._acquire(n,s,o+1)),o+=1,a=a.children[g]}},t.prototype.remove=function(t,e){for(var i=this._root,a=0;null!==i;){if(i.count-=1,i.xTotal-=t.geometry.coords[0],i.yTotal-=t.geometry.coords[1],i.xGeohashTotal-=t.geohashX,i.yGeohashTotal-=t.geohashY,this._updateStatistics(t,i,-1),a>=e)return;var o=Math.ceil((a+1)/2),n=Math.floor((a+1)/2),s=1-a%2,r=30-(3*o+2*n),h=30-(2*o+3*n),l=7*s+3*(1-s)<<r,c=3*s+7*(1-s)<<h,u=8*s+4*(1-s),d=(t.geohashX&l)>>r,f=(t.geohashY&c)>>h,p=d+f*u,v=i.children[p];1===v.count&&(this._release(v),i.children[p]=null),a+=1,i=v}},t.prototype.find=function(t,e,i){return this._root.find(t,e,i,0,0,0)},t.prototype.findSingleOccupancyNode=function(t,e,i,a,o){for(var n=this._root;null!==n;){var s=n.depth,r=n.xNode,h=n.yNode,l=1-s%2,c=n.xGeohashTotal/n.count,u=n.yGeohashTotal/n.count;if(1===n.count&&t<c&&c<=i&&e<u&&u<=a)return n;if(s>=o)n=n.next;else{for(var d=Math.ceil((s+1)/2),f=Math.floor((s+1)/2),p=30-(3*d+2*f),v=30-(2*d+3*f),y=~((1<<p)-1),g=~((1<<v)-1),x=(t&y)>>p,_=(e&g)>>v,m=(i&y)>>p,T=(a&g)>>v,N=3*l+2*(1-l),b=2*l+3*(1-l),S=r<<N,M=h<<b,G=S+8*l+4*(1-l),k=M+4*l+8*(1-l),z=Math.max(S,x),C=Math.max(M,_),F=Math.min(G,m),w=Math.min(k,T),P=null,O=null,X=C;X<=w;X++)for(var Y=z;Y<=F;Y++){var j=8*l+4*(1-l),q=Y-S+(X-M)*j,E=n.children[q];E&&(P||(P=E,P.next=n.next),O&&(O.next=E),O=E,E.next=n.next)}n=P||n.next}}return null},t.prototype.getRegionStatistics=function(t,e,i,a,o){for(var n=this._root,s=0,r=0,h=0,l={};null!==n;){var c=n.depth,u=n.xNode,d=n.yNode;if(c>=o){var f=n.xGeohashTotal/n.count,p=n.yGeohashTotal/n.count;t<f&&f<=i&&e<p&&p<=a&&(s+=n.count,r+=n.xTotal,h+=n.yTotal,this._aggregateStatistics(l,n.statistics)),n=n.next}else{for(var v=Math.ceil((c+1)/2),y=Math.floor((c+1)/2),g=1-c%2,x=30-(3*v+2*y),_=30-(2*v+3*y),m=~((1<<x)-1),T=~((1<<_)-1),N=(t&m)>>x,b=(e&T)>>_,S=(i&m)>>x,M=(a&T)>>_,G=3*g+2*(1-g),k=2*g+3*(1-g),z=u<<G,C=d<<k,F=z+8*g+4*(1-g),w=C+4*g+8*(1-g),P=Math.max(z,N),O=Math.max(C,b),X=Math.min(F,S),Y=Math.min(w,M),j=null,q=null,E=O;E<=Y;E++)for(var L=P;L<=X;L++){var A=8*g+4*(1-g),I=L-z+(E-C)*A,B=n.children[I];if(B){var R=E!==O&&E!==Y&&L!==P&&L!==X;if(R){var f=B.xGeohashTotal/B.count,p=B.yGeohashTotal/B.count;t<f&&f<=i&&e<p&&p<=a&&(s+=B.count,r+=B.xTotal,h+=B.yTotal,this._aggregateStatistics(l,B.statistics));continue}j||(j=B,j.next=n.next),q&&(q.next=B),q=B,B.next=n.next}}n=j||n.next}}return{count:s,attributes:this._normalizeStatistics(l,s),xTotal:r,yTotal:h}},t.prototype._forEachNode=function(t){for(var e=this._root;null!==e;){var i=this._linkChildren(e)||e.next;t(e),e=i}},t.prototype._linkChildren=function(t){for(var e=null,i=null,a=0;a<=t.children.length;a++){var o=t.children[a];o&&(e||(e=o,e.next=t.next),i&&(i.next=o),i=o,o.next=t.next)}return e},t.prototype._updateStatistics=function(t,e,i){for(var a=0,o=this._fields;a<o.length;a++){var n=o[a],s=n.name,r=n.outStatistic.onStatisticField,h=t.attributes[r];switch(n.outStatistic.statisticType){case"norm":e.statistics[s]||(e.statistics[s]={});var l=n.outStatistic.onStatisticNormalizationField,c=t.attributes[l],u=e.statistics[s].onStatisticField||0,d=e.statistics[s].onStatisticNormalizationField||0;null==h||isNaN(h)||null==c||0===c||isNaN(c)||(e.statistics[s].onStatisticField=u+i*h,e.statistics[s].onStatisticNormalizationField=d+i*c);break;case"avg":e.statistics[s]||(e.statistics[s]={value:0,nanCount:0});var f=e.statistics[s].value,p=e.statistics[s].nanCount;null==h||isNaN(h)?e.statistics[s].nanCount=p+i:e.statistics[s].value=f+i*h;break;case"avg_angle":e.statistics[s]||(e.statistics[s]={x:0,y:0,nanCount:0});var v=e.statistics[s].x,y=e.statistics[s].y,p=e.statistics[s].nanCount,g=Math.PI/180;null==h||isNaN(h)?e.statistics[s].nanCount=p+i:(e.statistics[s].x=v+i*Math.cos(h*g),e.statistics[s].y=y+i*Math.sin(h*g));break;case"mode":e.statistics[s]||(e.statistics[s]={});var f=e.statistics[s][h]||0;e.statistics[s][h]=f+i}}},t.prototype._aggregateStatistics=function(t,e){for(var i=0,a=this._fields;i<a.length;i++){var o=a[i],n=o.name;switch(o.outStatistic.statisticType){case"avg":case"avg_angle":case"mode":case"norm":t[n]||(t[n]={});for(var s in e[n]){var r=t[n][s]||0;t[n][s]=r+e[n][s]}}}},t.prototype._normalizeStatistics=function(t,e){for(var i={},a=0,o=this._fields;a<o.length;a++){var n=o[a],s=n.name;switch(n.outStatistic.statisticType){case"norm":var r=t[s];if(e&&null==r.onStatisticNormalizationField)break;if(e&&r.onStatisticNormalizationField){i[s]=r.onStatisticField/r.onStatisticNormalizationField;break}i[s]=0;break;case"avg":if(!e)break;var h=t[s],l=h.value,c=h.nanCount;if(!(e-c))break;i[s]=l/(e-c);break;case"avg_angle":if(!e)break;var u=t[s],d=u.x,f=u.y,c=u.nanCount;if(!(e-c))break;var p=d/(e-c),v=f/(e-c),y=180/Math.PI,g=Math.atan2(v,p)*y;i[s]=g;break;case"mode":var x=t[s],_=0,m=null;for(var T in x){var N=x[T];N>_&&(_=N,m=T)}i[s]="null"===m?null:m}}return i},t}();e.GeohashTree=n;var s=function(){function t(t,e,i){this.count=0,this.xTotal=0,this.yTotal=0,this.statistics={},this.next=null,this.depth=0,this.xNode=0,this.yNode=0,this.xGeohashTotal=0,this.yGeohashTotal=0,this.children=new Array(32);for(var a=0;a<this.children.length;a++)this.children[a]=null;this.xNode=t,this.yNode=e,this.depth=i}return t.prototype.realloc=function(t,e,i){for(var a=0;a<this.children.length;a++)this.children[a]=null;return this.xNode=t,this.yNode=e,this.depth=i,this.next=null,this.xGeohashTotal=0,this.yGeohashTotal=0,this.xTotal=0,this.yTotal=0,this.count=0,this.statistics={},this},t.prototype.getLngLatBounds=function(){var t=this.depth,e=Math.ceil(t/2),i=Math.floor(t/2),a=30-(3*e+2*i),n=30-(2*e+3*i),s=this.xNode<<a,r=this.yNode<<n;return o.decodeGeohashXY({geohashX:s,geohashY:r},this.depth)},t.prototype.find=function(t,e,i,a,o,n){if(a>=i)return this;var s=1-a%2,r=3*s+2*(1-s),h=2*s+3*(1-s),l=30-o-r,c=30-n-h,u=7*s+3*(1-s)<<l,d=3*s+7*(1-s)<<c,f=8*s+4*(1-s),p=(t&u)>>l,v=(e&d)>>c,y=p+v*f,g=this.children[y];return null==g?null:g.find(t,e,i,a+1,o+r,n+h)},t}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/geohash/geohashUtils.js":
/*!************************************************************!*\
  !*** ./node_modules/arcgis-js-api/geohash/geohashUtils.js ***!
  \************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(r,a){function e(r){return r<=57?r-48:r<=104?r-88:r<=107?r-89:r<=110?r-90:r-91}function t(r){return q[r]}function n(r){return(r[0]+r[1])/2}function o(r,a,e){return r[0]=a,r[1]=e,r}function h(r,a){var e=n(r),t=a,o=!a;r[0]=o*r[0]+t*e,r[1]=o*e+t*r[1]}function u(r,a){var e=n(r),t=a>e;return h(r,t),t}function c(r,a){for(var t=o(C,B,k),u=o(x,P,j),c=0;c<a.length;c++){var f=a.charCodeAt(c),i=e(f);c%2==0?(h(u,!!(Y&i)),h(u,!!(A&i)),h(u,!!(y&i)),h(t,!!(w&i)),h(t,!!(m&i))):(h(t,!!(Y&i)),h(t,!!(A&i)),h(t,!!(y&i)),h(u,!!(w&i)),h(u,!!(m&i)))}return r[0]=n(t),r[1]=n(u),r}function f(r,a){for(var t=0,n=0,o=30,h=30,u=0;u<a.length;u++){var c=a.charCodeAt(u),f=e(c),i=u%2==0,s=d(f,i),v=G(f,i);o-=i?3:2,h-=i?2:3,t|=s<<o,n|=v<<h}return{geohashX:t,geohashY:n}}function i(r,a){for(var e=-90,t=90,n=-180,o=180,h=0;h<a;h++){for(var u=Math.ceil((h+1)/2),c=Math.floor((h+1)/2),f=1-h%2,i=30-(3*u+2*c),s=30-(2*u+3*c),v=3*f+2*(1-f),l=2*f+3*(1-f),M=7*f+3*(1-f)<<i,g=3*f+7*(1-f)<<s,d=(M&r.geohashX)>>i,G=(g&r.geohashY)>>s,b=v-1;b>=0;b--){var p=(n+o)/2,X=d&1<<b?1:0;n=(1-X)*n+X*p,o=(1-X)*p+X*o}for(var b=l-1;b>=0;b--){var Y=(e+t)/2,w=G&1<<b?1:0;e=(1-w)*e+w*Y,t=(1-w)*Y+w*t}}return[n,e,o,t]}function s(r,a,e,t){t%2&&(t+=1);for(var n=0,o=0,h=-90,u=90,c=-180,f=180,i=0;i<t/2;i++){for(var s=0;s<5;s++){var v=(c+f)/2,l=e>v?1:0;n|=l<<29-(s+5*i),c=(1-l)*c+l*v,f=(1-l)*v+l*f}for(var s=0;s<5;s++){var M=(h+u)/2,g=a>M?1:0;o|=g<<29-(s+5*i),h=(1-g)*h+g*M,u=(1-g)*M+g*u}}r.geohashX=n,r.geohashY=o}function v(r,a,e){for(var n="",h=o(C,-90,90),c=o(x,-180,180),f=0;f<e;f++){var i=0;!(f%2)?(i|=u(c,a)<<4,i|=u(h,r)<<3,i|=u(c,a)<<2,i|=u(h,r)<<1,i|=u(c,a)<<0):(i|=u(h,r)<<4,i|=u(c,a)<<3,i|=u(h,r)<<2,i|=u(c,a)<<1,i|=u(h,r)<<0),n+=t(i)}return n}function l(r){var a=Math.floor(5*r/2);return(k-B)/Math.pow(2,a)}function M(r){var a=Math.ceil(5*r/2);return(j-P)/Math.pow(2,a)}function g(r,a,e){return e?r&y|(a&y)<<1|(r&m)<<1|(a&m)<<2|(r&A)<<2:a&y|(r&y)<<1|(a&m)<<1|(r&m)<<2|(a&A)<<2}function d(r,a){return a?y&r|(A&r)>>1|(Y&r)>>2:(m&r)>>1|(w&r)>>2}function G(r,a){return a?(m&r)>>1|(w&r)>>2:y&r|(A&r)>>1|(Y&r)>>2}function b(r,a,n){var o=!((r.length-1)%2),h=r.substring(0,r.length-1),u=e(r.charCodeAt(r.length-1)),c=0,f=0,i=0,s=0;o?(c=8,f=4,i=y&u|(A&u)>>1|(Y&u)>>2,s=(m&u)>>1|(w&u)>>2):(c=4,f=8,s=y&u|(A&u)>>1|(Y&u)>>2,i=(m&u)>>1|(w&u)>>2);var v=i+a,l=s+n,M=Math.floor(v/c),d=Math.floor(l/f),G=v-M*c,p=l-d*f,X=g(G,p,o),C=t(X);return r.length>1&&(M||d)?b(h,M,d)+C:h+C}function p(r,a,e,t,n){for(var o=Math.abs(e-r),h=Math.abs(t-a),u=l(n),c=M(n),f=Math.ceil(h/c),i=Math.ceil(o/u),s=v(r,a,n),g=new Array,d=0;d<f;d++)for(var G=0;G<i;G++)g.push(b(s,d,G));return g}function X(r,a,e,t,n,o){for(var h=Math.abs(e-r),u=Math.abs(t-a),f=l(n),i=M(n),s=Math.ceil(u/i),g=Math.ceil(h/f),d=v(r,a,n),G=0;G<s;G++)for(var p=0;p<g;p++){var X=b(d,G,p),Y=c([0,0],X),w=Y[0],A=Y[1],m=w-f/2,y=A-i/2,C=w+f/2,x=A+i/2,B=f*i,k=Math.max(r,m),P=Math.max(a,y),j=Math.min(e,C),q=Math.min(t,x),D=j-k,F=q-P,I=Math.abs(D*F),_=I/B;o(X,_)}}Object.defineProperty(a,"__esModule",{value:!0});var Y=16,w=8,A=4,m=2,y=1,C=new Float64Array(2),x=new Float64Array(2),B=-90,k=90,P=-180,j=180,q="0123456789bcdefghjkmnpqrstuvwxyz";a.decodeBase32Char=e,a.encodeBase32Char=t,a.decodeGeohash=c,a.convertGeohash32ToXY=f,a.decodeGeohashXY=i,a.setGeohashXY=s,a.encodeGeohash=v,a.latDistPerGeohash=l,a.lonDistPerGeohash=M,a.unpackXBits=d,a.unpackYBits=G,a.getRelativeGeohash=b,a.getIntersectingGeohashes=p,a.forEachIntersectingGeohash=X}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/graphics/data/QueryEngineCapabilities.js":
/*!************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/data/QueryEngineCapabilities.js ***!
  \************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,s){Object.defineProperty(s,"__esModule",{value:!0}),s.queryCapabilities={supportsStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/operations/query.js":
/*!**************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/operations/query.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../../geometry/support/jsonUtils */ "./node_modules/arcgis-js-api/geometry/support/jsonUtils.js"),__webpack_require__(/*! ../../geometry/support/normalizeUtils */ "./node_modules/arcgis-js-api/geometry/support/normalizeUtils.js"),__webpack_require__(/*! ./pbfQueryUtils */ "./node_modules/arcgis-js-api/tasks/operations/pbfQueryUtils.js"),__webpack_require__(/*! ./PBFWorker */ "./node_modules/arcgis-js-api/tasks/operations/PBFWorker.js"),__webpack_require__(/*! ./urlUtils */ "./node_modules/arcgis-js-api/tasks/operations/urlUtils.js"),__webpack_require__(/*! @dojo/framework/shim/Promise */ "./node_modules/@dojo/framework/shim/Promise.mjs")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,n,o,u,i,s,a,l,y){function c(e,r){var t=e.geometry,n=e.toJSON(),o=n;if(t&&(o.geometry=JSON.stringify(t),o.geometryType=i.getJsonType(t),o.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference)),n.groupByFieldsForStatistics&&(o.groupByFieldsForStatistics=n.groupByFieldsForStatistics.join(",")),n.objectIds&&(o.objectIds=n.objectIds.join(",")),n.orderByFields&&(o.orderByFields=n.orderByFields.join(",")),!n.outFields||r&&(r.returnCountOnly||r.returnExtentOnly||r.returnIdsOnly)?delete o.outFields:-1!==n.outFields.indexOf("*")?o.outFields="*":o.outFields=n.outFields.join(","),n.outSR?o.outSR=n.outSR.wkid||JSON.stringify(n.outSR):t&&(n.returnGeometry||n.returnCentroid)&&(o.outSR=o.inSR),n.returnGeometry&&delete n.returnGeometry,n.outStatistics&&(o.outStatistics=JSON.stringify(n.outStatistics)),n.pixelSize&&(o.pixelSize=JSON.stringify(n.pixelSize)),n.quantizationParameters&&(o.quantizationParameters=JSON.stringify(n.quantizationParameters)),n.source&&(o.layer=JSON.stringify({source:n.source}),delete n.source),n.timeExtent){var u=n.timeExtent,s=u.start,a=u.end;null==s&&null==a||(o.time=s===a?s:(null==s?"null":s)+","+(null==a?"null":a)),delete n.timeExtent}return o}function d(e,r,t){return F(e,r,"json",t)}function f(e,r,t,n){var o=t.useWorker?g():null;return F(e,r,"pbf",n).then(function(e){var r=function(r){var t=e;return t.data=r,t};return t.useWorker?o.parseFeatureQuery(e.data,t).then(function(e){return r(e)}):r(a.parsePBFFeatureQuery(e.data,t))})}function p(e,r,t){return F(e,r,"json",t,{returnIdsOnly:!0})}function m(e,r,t){return F(e,r,"json",t,{returnIdsOnly:!0,returnCountOnly:!0})}function S(e,r,t){return F(e,r,"json",t,{returnExtentOnly:!0,returnCountOnly:!0}).then(function(e){var r=e.data;if(r.hasOwnProperty("extent"))return e;if(r.features)throw new Error(O);if(r.hasOwnProperty("count"))throw new Error(O);return e})}function F(e,r,i,a,l){void 0===a&&(a={});var d="string"==typeof e?u.urlToObject(e):e,f=r.geometry?[r.geometry]:[];return a.responseType="pbf"===i?"array-buffer":"json",s.normalizeCentralMeridian(f,null,a).then(function(e){var u=e&&e[0];o.isSome(u)&&(r=r.clone(),r.geometry=u);var s=y.mapParameters(t({},d.query,{f:i},l,c(r,l)));return n(d.path+"/query",t({},a,{query:s}))})}function g(){return null==x&&(x=new l.PBFWorker),x}Object.defineProperty(r,"__esModule",{value:!0});var O="Layer does not support extent calculation.";r.queryToQueryStringParameters=c,r.executeQuery=d,r.executeQueryPBF=f,r.executeQueryForIds=p,r.executeQueryForCount=m,r.executeQueryForExtent=S;var x}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/operations/urlUtils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/operations/urlUtils.js ***!
  \*****************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r){function t(e){var r={};for(var f in e)if("declaredClass"!==f){var i=e[f];if(null!=i&&"function"!=typeof i)if(Array.isArray(i)){r[f]=[];for(var n=0;n<i.length;n++)r[f][n]=t(i[n])}else"object"==typeof i?i.toJSON&&(r[f]=JSON.stringify(i)):r[f]=i}return r}Object.defineProperty(r,"__esModule",{value:!0}),r.mapParameters=t}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/controllers/BaseController.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/controllers/BaseController.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../../../../core/HandleOwner */ "./node_modules/arcgis-js-api/core/HandleOwner.js"),__webpack_require__(/*! ../../../../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../../../../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../../../layers/graphics/data/attributeSupport */ "./node_modules/arcgis-js-api/layers/graphics/data/attributeSupport.js"),__webpack_require__(/*! ../../../../../layers/graphics/data/QueryEngine */ "./node_modules/arcgis-js-api/layers/graphics/data/QueryEngine.js"),__webpack_require__(/*! ../../../../../layers/support/FieldsIndex */ "./node_modules/arcgis-js-api/layers/support/FieldsIndex.js"),__webpack_require__(/*! ../../../../../renderers/support/jsonUtils */ "./node_modules/arcgis-js-api/renderers/support/jsonUtils.js"),__webpack_require__(/*! ../../../../../tasks/support/QuantizationParameters */ "./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js"),__webpack_require__(/*! ../../../../../tasks/support/Query */ "./node_modules/arcgis-js-api/tasks/support/Query.js"),__webpack_require__(/*! ../../../engine */ "./node_modules/arcgis-js-api/views/2d/engine.js"),__webpack_require__(/*! ../support/AttributeStore */ "./node_modules/arcgis-js-api/views/2d/layers/features/support/AttributeStore.js"),__webpack_require__(/*! ../support/ClusterStore */ "./node_modules/arcgis-js-api/views/2d/layers/features/support/ClusterStore.js"),__webpack_require__(/*! ../support/pixelBuffering */ "./node_modules/arcgis-js-api/views/2d/layers/features/support/pixelBuffering.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,o,n,s,u,a,l,p,c,d,f,y,h,g,b,m,v,S,O,w,I){function F(e){var t=e&&e.getSymbols();return"backgroundFillSymbol"in e&&null!=e.backgroundFillSymbol&&"outline"in e.backgroundFillSymbol&&null!=e.backgroundFillSymbol.outline||t.some(function(e){return"outline"in e&&null!=e.outline})}function P(e,t,r){function i(e){if(!e)return!1;var t=e.type;return"simple-marker"===t||"picture-marker"===t||"text"===t||"web-style"===t||"cim"===t}if("esriGeometryPolygon"===t&&e.labelingInfo)return!0;if("esriGeometryPolygon"!==t)return!1;switch(r.type){case"simple":return i(r.symbol);case"unique-value":return i(r.defaultSymbol)||r.uniqueValueInfos.some(function(e){return i(e.symbol)});case"class-breaks":return i(r.defaultSymbol)||r.classBreakInfos.some(function(e){return i(e.symbol)});case"dot-density":return!1;default:return!0}}function x(e,t){switch(e){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryMultipoint":return!0;case"esriGeometryPolygon":return F(t)}}Object.defineProperty(t,"__esModule",{value:!0});var R=p.getLogger("esri.views.2d.layers.features.controllers.BaseController"),_=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._availableFields=[],t._pixelBuffer=0,t.config=null,t.filters=new Array(S.definitions.MAX_FILTERS),t.processor=null,t.remoteClient=null,t.service=null,t.tileStore=null,t}return n(t,e),t.prototype.initialize=function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._initAttributeStore()},t.prototype.startup=function(){return o(this,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return this._initAttributeStore(),[4,this.attributeStore.setAttributeBindings(this.renderer,this.arcadeInfo)];case 1:return e.sent(),[4,d.all([this.attributeStore.updateFilters(this),this.updatePixelBuffer()])];case 2:return e.sent(),[2]}})})},t.prototype.destroy=function(){this.attributeStore&&this.attributeStore.destroy()},Object.defineProperty(t.prototype,"arcadeInfo",{get:function(){return{geometryType:this.service.geometryType,fields:this.service.fields,spatialReference:this.spatialReference}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"featureReduction",{get:function(){return this.config.featureReduction},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fieldsIndex",{get:function(){return new g(this.service.fields)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"geometryInfo",{get:function(){return{geometryType:this.service.geometryType,hasZ:!1,hasM:!1}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"returnCentroid",{get:function(){return this._get("returnCentroid")||P(this.config,this.service.geometryType,this.renderer)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"returnOutline",{get:function(){return x(this.service.geometryType,this.renderer)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"queryInfo",{get:function(){return{returnCentroid:this.returnCentroid,returnGeometry:!0,outFields:this.availableFields,definitionExpression:this.config.definitionExpression,gdbVersion:this.config.gdbVersion,historicMoment:this.config.historicMoment}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"renderer",{get:function(){return this.config?b.fromJSON(this.config.renderer):(R.error("mapview-controller","Unable to create renderer for undefined configuration"),null)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"availableFields",{get:function(){var e=this,t=this.config.availableFields.filter(function(t){return-1===e._availableFields.indexOf(t)});return this._availableFields=this._availableFields.concat(t),this._availableFields},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"spatialReference",{get:function(){return this.tileStore.tileScheme.spatialReference},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"viewParams",{get:function(){return{viewingMode:"",scale:this.viewState&&this.viewState.scale||1}},enumerable:!0,configurable:!0}),t.prototype.getObjectId=function(e){return this.attributeStore.getFeatureId(e)},t.prototype.getAggregate=function(e){return null},t.prototype.getAggregateValueRanges=function(){return{}},t.prototype.getLocalId=function(e){return this.attributeStore.getLocalId(e)},t.prototype.mapValidLocalIds=function(e){var t=this;return e.map(function(e){return t.attributeStore.getLocalId(e)}).filter(function(e){return null!=e})},t.prototype.setViewState=function(e){this._set("viewState",e)},t.prototype.updatePixelBuffer=function(){return o(this,void 0,void 0,function(){var e;return i(this,function(t){switch(t.label){case 0:return[4,I.computePxBuffer(this.renderer,this.service.geometryType)];case 1:return e=t.sent(),this._pixelBuffer=Math.max(this._pixelBuffer,e),[2]}})})},t.prototype.setHighlight=function(e){return o(this,void 0,void 0,function(){return i(this,function(t){return[2,this.attributeStore.setHighlight(e)]})})},t.prototype.validateConfig=function(e){for(var t=0,r=e.filters;t<r.length;t++){var i=r[t];if(c.isSome(i)&&i.where)try{y.validateWhere(this.fieldsIndex,i.where)}catch(e){throw new u("mapview-bad-filter",e.message,{filter:i,missingFields:e.details})}}},t.prototype.onFeatureAdd=function(e){e.localId=this.attributeStore.createLocalId(e.objectId),this.attributeStore.setAttributeData(e.localId,e,this.geometryInfo,this.viewParams)},t.prototype.onFeatureRemove=function(e){!e.localId&&l("esri-2d-debug")&&console.debug("Feature must have localId"),this.attributeStore.freeLocalId(e.objectId)},t.prototype.enableEvent=function(e){},t.prototype._initAttributeStore=function(){var e=this;this.attributeStore?this.attributeStore.invalidateResources():this.attributeStore=new O.default({type:"remote",initialize:function(t,r){return e.remoteClient.invoke("tileRenderer.featuresView.attributeView.initialize",t,{signal:r})},update:function(t,r){return e.remoteClient.invoke("tileRenderer.featuresView.attributeView.requestUpdate",t,{signal:r})},render:function(){return e.remoteClient.invoke("tileRenderer.featuresView.requestRender")}})},t.prototype._createQueryEngine=function(e){return new h.default({definitionExpression:this.config.definitionExpression,fields:this.service.fields,geometryType:this.service.geometryType,objectIdField:this.service.objectIdField,hasM:!1,hasZ:!1,spatialReference:this.spatialReference.toJSON(),cacheSpatialQueries:!0,featureStore:e,timeInfo:this.service.timeInfo})},t.prototype._createTempQueryEngine=function(e){return void 0===e&&(e=this._createFeatureStore()),this._createQueryEngine(e)},t.prototype._createFeatureStore=function(){var e={geometryType:this.service.geometryType,hasM:!1,hasZ:!1};return new w.ClusterStore(e,this.spatialReference,this.attributeStore,this.featureReduction)},t.prototype._createDefaultQuery=function(e){var t=new v,r=e.outFields,i=this.config,o=i.gdbVersion,n=i.historicMoment,s=i.definitionExpression;return r=r.length/this.service.fields.length>=.75?["*"]:r,t.gdbVersion=o,t.historicMoment=null!=n?new Date(n):null,t.num=e.num,t.outFields=r,t.outSpatialReference=this.spatialReference,t.returnGeometry=e.returnGeometry,t.returnCentroid=e.returnCentroid,t.start=e.resultOffset,t.where=s||"1=1",t},t.prototype._createQuery=function(e,t,r,i,o,n){var s=this.service.geometryType,u=this._createDefaultQuery(i);return u.maxRecordCountFactor=o,u.returnExceededLimitFeatures=n,u.resultType="tile",u.geometry=e,this.service.capabilities.query.supportsQuantization?(u.quantizationParameters=new m.default({mode:"view",originPosition:"upper-left",tolerance:r,extent:t}),"esriGeometryPolyline"===s&&(u.maxAllowableOffset=r)):"esriGeometryPolyline"!==s&&"esriGeometryPolygon"!==s||(u.maxAllowableOffset=r),u},t.prototype.hasGeometryFilter=function(){return this.filters.some(function(e){return c.isSome(e)&&!!e.geometry})},r([f.property({readOnly:!0,dependsOn:["config","service","spatialReference"]})],t.prototype,"arcadeInfo",null),r([f.property()],t.prototype,"config",void 0),r([f.property({readOnly:!0,dependsOn:["config"]})],t.prototype,"featureReduction",null),r([f.property({readOnly:!0,dependsOn:["service"]})],t.prototype,"fieldsIndex",null),r([f.property()],t.prototype,"filters",void 0),r([f.property({readOnly:!0,dependsOn:["service"]})],t.prototype,"geometryInfo",null),r([f.property({readOnly:!0,dependsOn:["config"]})],t.prototype,"returnCentroid",null),r([f.property({readOnly:!0,dependsOn:["service","config"]})],t.prototype,"returnOutline",null),r([f.property({readOnly:!0,dependsOn:["config","availableFields"]})],t.prototype,"queryInfo",null),r([f.property({dependsOn:["config"],readOnly:!0})],t.prototype,"renderer",null),r([f.property()],t.prototype,"processor",void 0),r([f.property({readOnly:!0,dependsOn:["config"]})],t.prototype,"availableFields",null),r([f.property({constructOnly:!0})],t.prototype,"remoteClient",void 0),r([f.property({constructOnly:!0})],t.prototype,"service",void 0),r([f.property({dependsOn:["tileStore"]})],t.prototype,"spatialReference",null),r([f.property({constructOnly:!0})],t.prototype,"tileInfo",void 0),r([f.property({constructOnly:!0})],t.prototype,"tileStore",void 0),r([f.property({readOnly:!0})],t.prototype,"viewState",void 0),r([f.property({readOnly:!0,dependsOn:["viewState"]})],t.prototype,"viewParams",null),t=r([f.subclass("esri.views.2d.layers.features.controllers.BaseController")],t)}(f.declared(a.HandleOwner));t.default=_}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/support/ClusterStore.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/support/ClusterStore.js ***!
  \*************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../../../../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../../../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../../../../core/screenUtils */ "./node_modules/arcgis-js-api/core/screenUtils.js"),__webpack_require__(/*! ../../../../../geohash/GeohashTree */ "./node_modules/arcgis-js-api/geohash/GeohashTree.js"),__webpack_require__(/*! ../../../../../geohash/geohashUtils */ "./node_modules/arcgis-js-api/geohash/geohashUtils.js"),__webpack_require__(/*! ../../../../../geometry/support/spatialReferenceUtils */ "./node_modules/arcgis-js-api/geometry/support/spatialReferenceUtils.js"),__webpack_require__(/*! ../../../../../geometry/support/webMercatorUtils */ "./node_modules/arcgis-js-api/geometry/support/webMercatorUtils.js"),__webpack_require__(/*! ../../../../../layers/graphics/OptimizedFeature */ "./node_modules/arcgis-js-api/layers/graphics/OptimizedFeature.js"),__webpack_require__(/*! ../../../../../layers/graphics/OptimizedGeometry */ "./node_modules/arcgis-js-api/layers/graphics/OptimizedGeometry.js"),__webpack_require__(/*! ../../../../../layers/graphics/data/FeatureStore */ "./node_modules/arcgis-js-api/layers/graphics/data/FeatureStore.js"),__webpack_require__(/*! ../../../../../layers/graphics/data/projectionSupport */ "./node_modules/arcgis-js-api/layers/graphics/data/projectionSupport.js"),__webpack_require__(/*! ../../../../../layers/graphics/data/QueryEngine */ "./node_modules/arcgis-js-api/layers/graphics/data/QueryEngine.js"),__webpack_require__(/*! ../../../../../layers/graphics/data/utils */ "./node_modules/arcgis-js-api/layers/graphics/data/utils.js"),__webpack_require__(/*! ../../../engine/webgl/definitions */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/definitions.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,a,i,s,n,u,l,h,c,d,g,f,p,_,y,v,I,m){Object.defineProperty(t,"__esModule",{value:!0});var x=function(e){return u.andThen(e,function(e){return"cluster"!==e.type?null:o({},e,{clusterRadius:l.pt2px(e.clusterRadius/2)})})},S=function(e){function t(t,r,o,a,i){var s=this,n=new p.default([],[r,o]);return s=e.call(this,n,a,null,t)||this,s.invalid=!1,s.canDelete=!1,s.geohashBoundsInfo=i,s}return r(t,e),Object.defineProperty(t.prototype,"count",{get:function(){return this.attributes.cluster_count},enumerable:!0,configurable:!0}),t.create=function(e,r,o,a,i,s,n){var u=new t(r,o,a,s,n);return u.localId=e.createLocalId(u.objectId,!0),u.tileLevel=i,u},t.prototype.update=function(e,t,r,o,a){return this.geometry.coords[0]=e,this.geometry.coords[1]=t,this.tileLevel=r,this.attributes=o,this.geohashBoundsInfo=a,this.referenceId=null,this.invalid=!1,this},t.prototype.toJSON=function(){return{objectId:this.objectId,referenceId:this.referenceId,attributes:o({},this.attributes,{clusterId:this.objectId}),geometry:{x:this.geometry.coords[0],y:this.geometry.coords[1]}}},t}(f.default),b=function(e){function t(t,r,o,a){var i=e.call(this,t)||this;return i._deferredDeletionQueue=[],i._invalidated=!1,i._aggregateFieldsHash=null,i._geohashLevel=0,i._aggregateValueRanges={},i._aggregateValueRangesChanged=!1,i._clusters=new Map,i._tiles=new Map,i._spatialReference=r,i._attributeStore=o,i._featureReduction=x(a),i._projectionSupportCheck=y.checkProjectionSupport(r,s.SpatialReference.WGS84),i}return r(t,e),t.prototype.update=function(e,t){return i(this,void 0,void 0,function(){var r,o,i,s,n,l,c=this;return a(this,function(a){switch(a.label){case 0:return r=this._featureReduction,o=u.andThen(t.featureReduction,x),i=t.aggregateFields.reduce(function(e,t){return e+JSON.stringify(t)},""),s=null===r&&t.featureReduction,n=i!==this._aggregateFieldsHash,l=s||n,[4,this._projectionSupportCheck];case 1:return a.sent(),(this._featureReduction=o,this._aggregateFieldsHash=i,this._aggregateValueRanges={},this._invalidated=!0,u.isNone(o))?(this._tree=null,[2]):(u.isSome(r)&&r.clusterRadius!==o.clusterRadius&&this._clusters.forEach(function(e){return e.canDelete=!0}),l&&(this._tree=new h.GeohashTree(t.aggregateFields),this._unindexFeatures()),(l||e)&&this._reindexFeatures(),this._handleClusterUpdates(),this._tiles.forEach(function(e){return c._getClustersForTile(e,0,o.clusterRadius,null,!1)}),[2])}})})},t.prototype._unindexFeatures=function(){this._featuresById.forEach(function(e){e.geohashIndexed=!1})},t.prototype._reindexFeatures=function(){var e=this;this._featuresById.forEach(function(t){t.geohashX||t.geohashY||e._setGeohash(t),e._attributeStore.isVisible(t)?e._insertIntoIndex(t):e._removeFromIndex(t)})},t.prototype.onTileUpdate=function(e){var t=this,r=e.added,o=e.removed;if(r.length){var a=Math.max.apply(Math,r.map(function(e){return e.level}));this._setGeohashLevel(a),r.forEach(function(e){return t._tiles.set(e.key.id,e)})}if(!u.isNone(this._featureReduction)){var i=this._featureReduction.clusterRadius;o.forEach(function(e){t._tiles.delete(e.key.id),t._markTileClustersForDeletion(e,i)})}},t.prototype.sweepClusters=function(){var e=this;this._clusters.forEach(function(t,r){t.canDelete&&(e._attributeStore.freeLocalId(t.objectId),e._clusters.delete(r))});for(var t=0,r=this._deferredDeletionQueue;t<r.length;t++){var o=r[t];this._attributeStore.addLocalId(o)}this._deferredDeletionQueue=[]},t.prototype.executeTileQuery=function(t,r,o){return i(this,void 0,void 0,function(){var i,s,n;return a(this,function(a){switch(a.label){case 0:return u.isNone(this._featureReduction)?[2,e.prototype.executeTileQuery.call(this,t,r,o)]:[4,this._projectionSupportCheck];case 1:return a.sent(),this._handleClusterUpdates(),i=this._featureReduction.clusterRadius,s=this._getTransforms(t,r),n=this._getClustersForTile(t,o.pixelBuffer,i,s),this._aggregateValueRangesChanged&&(this.events.emit("valueRangesChanged",{valueRanges:this._aggregateValueRanges}),this._aggregateValueRangesChanged=!1),[2,n]}})})},t.prototype.getAggregate=function(e){var t=null;return this._clusters.forEach(function(r){r.localId===e&&(t=r.toJSON())}),t},t.prototype.getAggregateValueRanges=function(){return this._aggregateValueRanges},t.prototype._getClustersForTile=function(e,t,r,a,i){var l=this;void 0===i&&(i=!0),t=Math.max(t,50);for(var h=2*r,c=new Set,d=this._getGeohashLevel(e.key.level),f=Math.pow(2,e.key.level)*Math.ceil(m.TILE_SIZE/h),p=Math.ceil(t/h)+2,_=Math.ceil(m.TILE_SIZE/h)+2*p,x=e.key,S=x.row,b=x.col,R=b*m.TILE_SIZE,L=S*m.TILE_SIZE,T=Math.floor(R/h)-p,E=Math.floor(L/h)-p,F=T+_,C=E+_,w=new Array,V=e.tileInfoView.getLODInfoAt(e.key.level),j=T;j<=F;j++)for(var M=this,G=E;G<=C;G++)!function(t){var r,h,p=j;V.wrap&&(p=j<0?j+f:j%f);var _=V.wrap&&j<0,m=V.wrap&&j%f!==j,x=M._lookupCluster(V,e.key.level,p,t,d);if(u.isSome(x)){var S=u.andThen(a,function(e){return _?e.left:m?e.right:e.tile});if(i&&u.isNone(S))return"continue";if(!x.count)return"continue";if(i&&1===x.count){var b=x.geohashBoundsInfo,R=b.xLL,L=b.yLL,T=b.xTR,E=b.yTR,F=b.level,C=u.expect(M._tree).findSingleOccupancyNode(R,L,T,E,F),G=u.unwrap(C).getLngLatBounds(),k={x:G[0],y:G[1]},D={x:G[2],y:G[3]},X=0,Y=0,B=0,N=0;if(M._spatialReference.isWebMercator)r=g.lngLatToXY(k.x,k.y),X=r[0],Y=r[1],h=g.lngLatToXY(D.x,D.y),B=h[0],N=h[1];else{var Z=y.project(k,s.SpatialReference.WGS84,M._spatialReference),O=y.project(D,s.SpatialReference.WGS84,M._spatialReference);if(!Z||!O)return n("esri-2d-debug")&&console.debug("Failed to reproject known tree node"),"continue";X=Z.x,Y=Z.y,B=O.x,N=O.y}var U=[X,Y,B,N],W=null;if(M.forEachInBounds(U,function(e){l._attributeStore.isVisible(e)&&(W&&n("esri-2d-debug")&&console.debug("Expected to find only one feature, but found multiple"),W=e)}),!W)return n("esri-2d-debug")&&console.debug("Expected to find a feature, but found none"),"continue";var A=I.getGeometry(M.geometryInfo,W.geometry,0,u.expect(S)),H=o({},W.attributes,x.attributes);x.referenceId=W.localId,c.add(x.objectId),w.push(new v.Feature(H,x.localId,A))}else if(i){c.add(x.objectId);var A=I.getGeometry(M.geometryInfo,x.geometry,0,u.expect(S));w.push(new v.Feature(x.attributes,x.localId,A))}}}(G);return{features:w,objectIds:c}},t.prototype._getGeohashLevel=function(e){return Math.min(Math.ceil(e/2+2),12)},t.prototype._setGeohashLevel=function(e){var t=this,r=this._geohashLevel,o=this._getGeohashLevel(e),a=Math.floor(o/2),i=2*(a+1)-1,s=this._tree;this._geohashLevel=i,u.isNone(s)||(i>r?this._featuresById.forEach(function(e){e.geohashIndexed&&(s.insert(e,t._geohashLevel,r+1),e.geohashIndexed=!0)}):i<r&&s.dropLevels(this._geohashLevel))},t.prototype._insertIntoIndex=function(e){e.geohashIndexed||(this._invalidated=!0,e.geohashIndexed=!0,u.expect(this._tree).insert(e,this._geohashLevel))},t.prototype._removeFromIndex=function(e){e.geohashIndexed&&(this._invalidated=!0,u.expect(this._tree).remove(e,this._geohashLevel),e.geohashIndexed=!1)},t.prototype._handleClusterUpdates=function(){var e=this;this._invalidated&&this._clusters.size&&this._clusters.forEach(function(t){u.isSome(t)&&(t.invalid=t.invalid||e._invalidated)}),this._invalidated=!1},t.prototype._getTransforms=function(e,t){var r={originPosition:"upperLeft",scale:[e.resolution,e.resolution],translate:[e.bounds[0],e.bounds[3]]},a=d.getInfo(t);if(!a)return{tile:r,left:null,right:null};var i=a.valid,s=i[0],n=i[1];return{tile:r,left:o({},r,{translate:[n,e.bounds[3]]}),right:o({},r,{translate:[s-n+e.bounds[0],e.bounds[3]]})}},t.prototype._getClusterId=function(e,t,r){return(15&e)<<28|(16383&t)<<14|16383&r},t.prototype._markForDeletion=function(e,t,r){var o=this._getClusterId(e,t,r);if(this._clusters.has(o)){var a=this._clusters.get(o);u.isSome(a)?a.canDelete=!0:this._clusters.delete(o)}},t.prototype._getClusterBounds=function(e,t,r){if(u.isNone(this._featureReduction))return null;var o=this._featureReduction.clusterRadius,a=2*o,i=r%2?t*a:t*a+o,s=r*a,n=i/m.TILE_SIZE,l=s/m.TILE_SIZE,h=(i+a)/m.TILE_SIZE,c=(s-a)/m.TILE_SIZE;return[e.getXForColumn(n),e.getYForRow(l),e.getXForColumn(h),e.getYForRow(c)]},t.prototype._lookupCluster=function(e,t,r,a,i){var n,l;if(u.isNone(this._featureReduction)||u.isNone(this._tree))return null;var h=this._getClusterId(t,r,a),d=this._clusters.get(h);if(d&&u.isSome(d)&&!d.invalid&&!d.canDelete)return d;var f=this._getClusterBounds(e,r,a),p=f[0],_=f[1],v=f[2],I=f[3],m={x:p,y:_},x={x:v,y:I},b=0,R=0,L=0,T=0;if(this._spatialReference.isWebMercator)n=g.xyToLngLat(m.x,m.y),b=n[0],R=n[1],l=g.xyToLngLat(x.x,x.y),L=l[0],T=l[1];else{var E=y.project(m,this._spatialReference,s.SpatialReference.WGS84),F=y.project(x,this._spatialReference,s.SpatialReference.WGS84);if(!E||!F)return null;b=E.x,R=E.y,L=F.x,T=F.y}var C={geohashX:0,geohashY:0},w={geohashX:0,geohashY:0};c.setGeohashXY(C,R,b,i),c.setGeohashXY(w,T,L,i);var V=C.geohashX,j=C.geohashY,M=w.geohashX,G=w.geohashY,k={xLL:V,yLL:j,xTR:M,yTR:G,level:i},D=this._tree.getRegionStatistics(V,j,M,G,i),X=D.count,Y=D.xTotal,B=D.yTotal,N=X?Y/X:0,Z=X?B/X:0;if(u.isSome(d)&&d.canDelete){var O=this._attributeStore.removeLocalId(d.objectId);this._deferredDeletionQueue.push(O)}var U=u.isSome(d)&&!d.canDelete&&d.invalid,W=o({cluster_count:X},D.attributes),A=this._attributeStore,H=U?d.update(N,Z,t,W,k):S.create(A,h,N,Z,t,W,k);return 0===X&&(H.geometry.coords[0]=(p+v)/2,H.geometry.coords[1]=(_+I)/2),this._attributeStore.setAttributeData(H.localId,H,this.geometryInfo,null),this._clusters.set(h,H),this._updateAggregateValueRangeForCluster(H,H.tileLevel),H},t.prototype._updateAggregateValueRangeForCluster=function(e,t){var r=this._aggregateValueRanges[t]||{minValue:1/0,maxValue:0},o=r.minValue,a=r.maxValue;r.minValue=Math.min(o,e.count),r.maxValue=Math.max(a,e.count),this._aggregateValueRanges[t]=r,o===r.minValue&&a===r.maxValue||(this._aggregateValueRangesChanged=!0)},t.prototype._markTileClustersForDeletion=function(e,t){for(var r=2*t,o=Math.ceil(m.TILE_SIZE/r),a=e.key,i=a.row,s=a.col,n=s*m.TILE_SIZE,u=i*m.TILE_SIZE,l=Math.floor(n/r),h=Math.floor(u/r),c=l;c<l+o;c++)for(var d=h;d<h+o;d++)this._markForDeletion(e.key.level,c,d)},t.prototype._setGeohash=function(e){var t=e.geometry;if(t&&t.coords.length){var r={x:t.coords[0],y:t.coords[1]},o=y.project(r,this._spatialReference,s.SpatialReference.WGS84);if(!o)return void(n("esri-2d-debug")&&console.debug("Tried to project feature geometry, but got back `null`"));c.setGeohashXY(e,o.y,o.x,12)}},t.prototype._add=function(t){var r=this._featuresById.get(t.objectId);e.prototype._add.call(this,t),u.isSome(this._featureReduction)&&u.isSome(this._tree)&&(r?(t.geohashIndexed=r.geohashIndexed,t.geohashX=r.geohashX,t.geohashY=r.geohashY):this._setGeohash(t),!t.geohashIndexed&&this._attributeStore.isVisible(t)&&this._insertIntoIndex(t))},t.prototype._remove=function(t){return u.isSome(this._featureReduction)&&u.isSome(this._tree)&&this._removeFromIndex(t),e.prototype._remove.call(this,t)},t}(_.default);t.ClusterStore=b}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/support/pixelBuffering.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/support/pixelBuffering.js ***!
  \***************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../../../core/screenUtils */ "./node_modules/arcgis-js-api/core/screenUtils.js"),__webpack_require__(/*! ../../../engine */ "./node_modules/arcgis-js-api/views/2d/engine.js"),__webpack_require__(/*! ../../graphics/graphicsUtils */ "./node_modules/arcgis-js-api/views/2d/layers/graphics/graphicsUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,n,a,o,s){function u(e){if(!("visualVariables"in e))return 0;if(!e.hasVisualVariables("size"))return 0;var t=e.getVisualVariablesForType("size");if(!t[0])return 0;var r=t[0];return"stops"===r.transformationType?r.stops.map(function(e){return e.size}).reduce(v,0):"clamped-linear"===r.transformationType?"number"==typeof r.maxSize?r.maxSize:r.maxSize.stops.map(function(e){return e.size}).reduce(v,0):"real-world-size"===r.transformationType?30:void 0}function l(e){return e.type in M}function p(e,t){return i(this,void 0,void 0,function(){var i,o,s,l,p,c,f;return r(this,function(r){switch(r.label){case 0:if("heatmap"===e.type)return[2,Math.round(3*e.blurRadius)];if("dot-density"===e.type)return[2,0];if("dictionary"===e.type)return"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?[2,100]:[2,50];for(i=e.getSymbols(),o=u(e),s=[],l=0,p=i;l<p.length;l++)c=p[l],s.push(y(c,o));return[4,n.all(s)];case 1:return f=r.sent(),[2,a.pt2px(f.reduce(v,0))]}})})}function c(e,t){return null==e?t:e}function f(e,t){return null==e.outline?t:c(e.outline.width,t)}function h(e,t){return null==e.font?t:c(e.font.size,t)}function m(e,t){return i(this,void 0,void 0,function(){var i,n,a,u,l,p,y,v,M,w,S;return r(this,function(r){switch(r.label){case 0:return"simple-marker"===e.type?(i=Math.max(c(e.size,12),t),[2,d(e)+i*b]):"picture-marker"===e.type?(n=Math.max(c(e.height,12),t),a=c(e.width,12)*(n/c(e.height,12)),u=a/2,l=n/2,[2,d(e)+Math.sqrt(u*u+l*l)]):"text"===e.type?(s.getTextSymbolEstimatedSize(g,e,o.definitions.AVERAGE_GLYPH_MOSAIC_ITEM),p=g[2]*(c(e.horizontalAlignment,"top")in x?1:.5),y=g[3]*(c(e.horizontalAlignment,"center")in z?1:.5),v=h(e,9),M=Math.max(v,t)/v,[2,d(e)+Math.sqrt(p*p+y*y)*M]):"simple-line"===e.type?[2,Math.max(c(e.width,.75),t)/2]:"simple-fill"===e.type||"picture-fill"===e.type?[2,Math.max(f(e,0),t)/2]:"cim"===e.type?(w=o.CIMSymbolHelper.getEnvelope(e.data),w?[2,Math.sqrt(w.width*w.width+w.height*w.height)]:[2,0]):"web-style"!==e.type?[3,2]:(S=m,[4,e.fetchCIMSymbol()]);case 1:return[2,S.apply(void 0,[r.sent(),t])];case 2:return[2,0]}})})}function y(e,t){return i(this,void 0,void 0,function(){var i,n;return r(this,function(r){switch(r.label){case 0:return l(e)?(n=(i=Math).min,[4,m(e,t)]):[2,0];case 1:return[2,n.apply(i,[r.sent(),75])]}})})}function d(e){var t=c(e.xoffset,0),r=c(e.yoffset,0);return Math.sqrt(t*t+r*r)}function v(e,t){return Math.max(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var M={"simple-marker":1,"picture-marker":1,text:1,"simple-line":1,"simple-fill":1,"picture-fill":1,cim:1,"web-style":1},b=.707;t.computePxBuffer=p;var g=[0,0,0,0],x={left:1,right:1},z={top:1,bottom:1,baseline:1}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=59.js.map