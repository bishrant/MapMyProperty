(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/core/MemCache":"./node_modules/arcgis-js-api/core/MemCache.js",
	"esri/core/libs/quickselect/quickselect":"./node_modules/arcgis-js-api/core/libs/quickselect/quickselect.js",
	"arcgis-js-api/core/libs/rbush/rbush":"./node_modules/arcgis-js-api/core/libs/rbush/rbush.js",
	"esri/core/libs/rbush/rbush":"./node_modules/arcgis-js-api/core/libs/rbush/rbush.js",
	"esri/geometry/support/aaBoundingBox":"./node_modules/arcgis-js-api/geometry/support/aaBoundingBox.js",
	"arcgis-js-api/geometry/support/aaBoundingBox":"./node_modules/arcgis-js-api/geometry/support/aaBoundingBox.js",
	"esri/geometry/support/quantizationUtils":"./node_modules/arcgis-js-api/geometry/support/quantizationUtils.js",
	"arcgis-js-api/geometry/support/quantizationUtils":"./node_modules/arcgis-js-api/geometry/support/quantizationUtils.js",
	"esri/layers/graphics/OptimizedFeature":"./node_modules/arcgis-js-api/layers/graphics/OptimizedFeature.js",
	"arcgis-js-api/layers/graphics/OptimizedFeature":"./node_modules/arcgis-js-api/layers/graphics/OptimizedFeature.js",
	"arcgis-js-api/layers/graphics/OptimizedFeatureSet":"./node_modules/arcgis-js-api/layers/graphics/OptimizedFeatureSet.js",
	"esri/layers/graphics/OptimizedGeometry":"./node_modules/arcgis-js-api/layers/graphics/OptimizedGeometry.js",
	"arcgis-js-api/layers/graphics/OptimizedGeometry":"./node_modules/arcgis-js-api/layers/graphics/OptimizedGeometry.js",
	"arcgis-js-api/layers/graphics/sources/support/clientSideDefaults":"./node_modules/arcgis-js-api/layers/graphics/sources/support/clientSideDefaults.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/arcgis-js-api/core/MemCache.js":
/*!*****************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/MemCache.js ***!
  \*****************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./iteratorUtils */ "./node_modules/arcgis-js-api/core/iteratorUtils.js"),__webpack_require__(/*! ./PooledArray */ "./node_modules/arcgis-js-api/core/PooledArray.js"),__webpack_require__(/*! ./string */ "./node_modules/arcgis-js-api/core/string.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,i,s,r){Object.defineProperty(e,"__esModule",{value:!0}),e.MIN_PRIORITY=-3;var o=function(){function t(t,e,i){this._namespace=t,this._storage=e,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",i&&(this._storage.registerRemoveFunc(this._namespace,i),this._removeFunc=!0)}return Object.defineProperty(t.prototype,"namespace",{get:function(){return this._namespace.slice(0,-1)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hitRate",{get:function(){return this._hit/(this._hit+this._miss)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this._storage.size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxSize",{get:function(){return this._storage.maxSize},enumerable:!0,configurable:!0}),t.prototype.resetHitRate=function(){this._hit=this._miss=0},t.prototype.destroy=function(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this)},t.prototype.put=function(t,e,i,s){void 0===s&&(s=0),this._storage.put(this._namespace+t,e,i,s)},t.prototype.get=function(t){var e=this._storage.get(this._namespace+t);return void 0===e?++this._miss:++this._hit,e},t.prototype.pop=function(t){var e=this._storage.pop(this._namespace+t);return void 0===e?++this._miss:++this._hit,e},t.prototype.updateSize=function(t,e,i){this._storage.updateSize(this._namespace+t,e,i)},t.prototype.clear=function(){this._storage.clear(this._namespace)},t.prototype.clearAll=function(){this._storage.clearAll()},t.prototype.getStats=function(){return this._storage.getStats()},t.prototype.resetStats=function(){this._storage.resetStats()},t}();e.MemCache=o;var n=function(){function t(t){void 0===t&&(t=10485760),this._maxSize=t,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=[],this._users=new s}return t.prototype.register=function(t){this._users.push(t)},t.prototype.deregister=function(t){this._users.removeUnordered(t)},t.prototype.registerRemoveFunc=function(t,e){this._removeFuncs.push([t,e])},t.prototype.deregisterRemoveFunc=function(t){this._removeFuncs=this._removeFuncs.filter(function(e){return e[0]!==t})},Object.defineProperty(t.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxSize",{get:function(){return this._maxSize},set:function(t){this._maxSize=Math.max(t,0),this._checkSizeLimit()},enumerable:!0,configurable:!0}),t.prototype.put=function(t,i,s,r){var o=this._db.get(t);if(o&&(this._size-=o.size,this._db.delete(t),o.entry!==i&&this._notifyRemoved(t,o.entry)),s>this._maxSize)return void this._notifyRemoved(t,i);if(void 0===i)return void console.warn("Refusing to cache undefined entry ");if(!s||s<0)return void console.warn("Refusing to cache entry with invalid size "+s);var n=1+Math.max(r,e.MIN_PRIORITY)-e.MIN_PRIORITY;this._db.set(t,{entry:i,size:s,lifetime:n,lives:n}),this._size+=s,this._checkSizeLimit()},t.prototype.updateSize=function(t,e,i){var s=this._db.get(t);if(s&&s.entry===e){if(this._size-=s.size,i>this._maxSize)return void this._notifyRemoved(t,e);s.size=i,this._size+=i,this._checkSizeLimit()}},t.prototype.pop=function(t){var e=this._db.get(t);if(e)return this._size-=e.size,this._db.delete(t),++this._hit,e.entry;++this._miss},t.prototype.get=function(t){var e=this._db.get(t);return void 0===e?void++this._miss:(this._db.delete(t),e.lives=e.lifetime,this._db.set(t,e),++this._hit,e.entry)},t.prototype.getStats=function(){var t=this,i={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},s={},o=new Array;this._db.forEach(function(e,i){var n=e.lifetime;o[n]=(o[n]||0)+e.size,t._users.forEach(function(t){var o=t.namespace;if(r.startsWith(i,o)){var n=s[o]||0;s[o]=n+e.size}})});var n={};this._users.forEach(function(t){var e=t.namespace;if(!isNaN(t.hitRate)&&t.hitRate>0){var i=s[e]||0;s[e]=i,n[e]=Math.round(100*t.hitRate)+"%"}else n[e]="0%"});var h=Object.keys(s);h.forEach(function(e){return s[e]=s[e]/t._size*100}),h.sort(function(t,e){return s[e]-s[t]}),h.forEach(function(t){return i[t]=Math.round(s[t])+"% / "+n[t]});for(var a=o.length-1;a>=0;--a){var u=o[a];u&&(i["Priority "+(a+e.MIN_PRIORITY-1)]=Math.round(u/this.size*100)+"%")}return i},t.prototype.resetStats=function(){this._hit=this._miss=0,this._users.forEach(function(t){return t.resetHitRate()})},t.prototype.clear=function(t){var e=this;this._db.forEach(function(i,s){r.startsWith(s,t)&&(e._size-=i.size,e._db.delete(s),e._notifyRemoved(s,i.entry))})},t.prototype.clearAll=function(){var t=this;this._db.forEach(function(e,i){t._notifyRemoved(i,e.entry)}),this._size=0,this._db.clear()},t.prototype._getHitRate=function(){return this._hit/(this._hit+this._miss)},t.prototype._notifyRemoved=function(t,e){this._removeFuncs.forEach(function(i){r.startsWith(t,i[0])&&i[1](e)})},t.prototype._checkSizeLimit=function(){var t=this;this._size<=this._maxSize||i.someMap(this._db,function(e,i){return t._db.delete(i),e.lives<=1?(t._size-=e.size,t._notifyRemoved(i,e.entry)):(--e.lives,t._db.set(i,e)),t._size<=.9*t.maxSize})},t}();e.MemCacheStorage=n}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/core/libs/quickselect/quickselect.js":
/*!*************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/libs/quickselect/quickselect.js ***!
  \*************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){"use strict";function t(t,r,f,a,i){n(t,r,f||0,a||t.length-1,i||o)}function n(t,o,f,a,i){for(;a>f;){if(a-f>600){var h=a-f+1,u=o-f+1,e=Math.log(h),M=.5*Math.exp(2*e/3),c=.5*Math.sqrt(e*M*(h-M)/h)*(u-h/2<0?-1:1);n(t,o,Math.max(f,Math.floor(o-u*M/h+c)),Math.min(a,Math.floor(o+(h-u)*M/h+c)),i)}var l=t[o],s=f,v=a;for(r(t,f,o),i(t[a],l)>0&&r(t,f,a);s<v;){for(r(t,s,v),s++,v--;i(t[s],l)<0;)s++;for(;i(t[v],l)>0;)v--}0===i(t[f],l)?r(t,f,v):(v++,r(t,v,a)),v<=o&&(f=v+1),o<=v&&(a=v-1)}}function r(t,n,r){var o=t[n];t[n]=t[r],t[r]=o}function o(t,n){return t<n?-1:t>n?1:0}return t}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/core/libs/rbush/rbush.js":
/*!*************************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/libs/rbush/rbush.js ***!
  \*************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../quickselect/quickselect */ "./node_modules/arcgis-js-api/core/libs/quickselect/quickselect.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t){"use strict";function i(t,n){if(!(this instanceof i))return new i(t,n);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this.toBBox=n:this._initFormat(n)),this.clear()}function n(t,i,n){if(!n)return i.indexOf(t);for(var h=0;h<i.length;h++)if(n(t,i[h]))return h;return-1}function h(t,i){a(t,0,t.children.length,i,t)}function a(t,i,n,h,a){a||(a=x(null)),a.minX=1/0,a.minY=1/0,a.maxX=-1/0,a.maxY=-1/0;for(var r,o=i;o<n;o++)r=t.children[o],e(a,t.leaf?h(r):r);return a}function e(t,i){return t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY),t}function r(t,i){return t.minX-i.minX}function o(t,i){return t.minY-i.minY}function s(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function l(t){return t.maxX-t.minX+(t.maxY-t.minY)}function c(t,i){return(Math.max(i.maxX,t.maxX)-Math.min(i.minX,t.minX))*(Math.max(i.maxY,t.maxY)-Math.min(i.minY,t.minY))}function u(t,i){var n=Math.max(t.minX,i.minX),h=Math.max(t.minY,i.minY),a=Math.min(t.maxX,i.maxX),e=Math.min(t.maxY,i.maxY);return Math.max(0,a-n)*Math.max(0,e-h)}function m(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function f(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function x(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function d(i,n,h,a,e){for(var r,o=[n,h];o.length;)h=o.pop(),n=o.pop(),h-n<=a||(r=n+Math.ceil((h-n)/a/2)*a,t(i,r,n,h,e),o.push(n,r,r,h))}return i.prototype={all:function(){return this._all(this.data,[])},search:function(t){var i=this.data,n=[],h=this.toBBox;if(!f(t,i))return n;for(var a,e,r,o,s=[];i;){for(a=0,e=i.children.length;a<e;a++)r=i.children[a],o=i.leaf?h(r):r,f(t,o)&&(i.leaf?n.push(r):m(t,o)?this._all(r,n):s.push(r));i=s.pop()}return n},collides:function(t){var i=this.data,n=this.toBBox;if(!f(t,i))return!1;for(var h,a,e,r,o=[];i;){for(h=0,a=i.children.length;h<a;h++)if(e=i.children[h],r=i.leaf?n(e):e,f(t,r)){if(i.leaf||m(t,r))return!0;o.push(e)}i=o.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}var h=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===h.height)this._splitRoot(this.data,h);else{if(this.data.height<h.height){var a=this.data;this.data=h,h=a}this._insert(h,this.data.height-h.height-1,!0)}else this.data=h;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=x([]),this},remove:function(t,i){if(!t)return this;for(var h,a,e,r,o=this.data,s=this.toBBox(t),l=[],c=[];o||l.length;){if(o||(o=l.pop(),a=l[l.length-1],h=c.pop(),r=!0),o.leaf&&-1!==(e=n(t,o.children,i)))return o.children.splice(e,1),l.push(o),this._condense(l),this;r||o.leaf||!m(o,s)?a?(h++,o=a.children[h],r=!1):o=null:(l.push(o),c.push(h),h=0,a=o,o=o.children[0])}return this},toBBox:function(t){return t},compareMinX:r,compareMinY:o,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,i){for(var n=[];t;)t.leaf?i.push.apply(i,t.children):n.push.apply(n,t.children),t=n.pop();return i},_build:function(t,i,n,a){var e,r=n-i+1,o=this._maxEntries;if(r<=o)return e=x(t.slice(i,n+1)),h(e,this.toBBox),e;a||(a=Math.ceil(Math.log(r)/Math.log(o)),o=Math.ceil(r/Math.pow(o,a-1))),e=x([]),e.leaf=!1,e.height=a;var s,l,c,u,m=Math.ceil(r/o),f=m*Math.ceil(Math.sqrt(o));for(d(t,i,n,f,this.compareMinX),s=i;s<=n;s+=f)for(c=Math.min(s+f-1,n),d(t,s,c,m,this.compareMinY),l=s;l<=c;l+=m)u=Math.min(l+m-1,c),e.children.push(this._build(t,l,u,a-1));return h(e,this.toBBox),e},_chooseSubtree:function(t,i,n,h){for(var a,e,r,o,l,u,m,f;;){if(h.push(i),i.leaf||h.length-1===n)break;for(m=f=1/0,a=0,e=i.children.length;a<e;a++)r=i.children[a],l=s(r),u=c(t,r)-l,u<f?(f=u,m=l<m?l:m,o=r):u===f&&l<m&&(m=l,o=r);i=o||i.children[0]}return i},_insert:function(t,i,n){var h=this.toBBox,a=n?t:h(t),r=[],o=this._chooseSubtree(a,this.data,i,r);for(o.children.push(t),e(o,a);i>=0&&r[i].children.length>this._maxEntries;)this._split(r,i),i--;this._adjustParentBBoxes(a,r,i)},_split:function(t,i){var n=t[i],a=n.children.length,e=this._minEntries;this._chooseSplitAxis(n,e,a);var r=this._chooseSplitIndex(n,e,a),o=x(n.children.splice(r,n.children.length-r));o.height=n.height,o.leaf=n.leaf,h(n,this.toBBox),h(o,this.toBBox),i?t[i-1].children.push(o):this._splitRoot(n,o)},_splitRoot:function(t,i){this.data=x([t,i]),this.data.height=t.height+1,this.data.leaf=!1,h(this.data,this.toBBox)},_chooseSplitIndex:function(t,i,n){var h,e,r,o,l,c,m,f;for(c=m=1/0,h=i;h<=n-i;h++)e=a(t,0,h,this.toBBox),r=a(t,h,n,this.toBBox),o=u(e,r),l=s(e)+s(r),o<c?(c=o,f=h,m=l<m?l:m):o===c&&l<m&&(m=l,f=h);return f},_chooseSplitAxis:function(t,i,n){var h=t.leaf?this.compareMinX:r,a=t.leaf?this.compareMinY:o;this._allDistMargin(t,i,n,h)<this._allDistMargin(t,i,n,a)&&t.children.sort(h)},_allDistMargin:function(t,i,n,h){t.children.sort(h);var r,o,s=this.toBBox,c=a(t,0,i,s),u=a(t,n-i,n,s),m=l(c)+l(u);for(r=i;r<n-i;r++)o=t.children[r],e(c,t.leaf?s(o):o),m+=l(c);for(r=n-i-1;r>=i;r--)o=t.children[r],e(u,t.leaf?s(o):o),m+=l(u);return m},_adjustParentBBoxes:function(t,i,n){for(var h=n;h>=0;h--)e(i[h],t)},_condense:function(t){for(var i,n=t.length-1;n>=0;n--)0===t[n].children.length?n>0?(i=t[n-1].children,i.splice(i.indexOf(t[n]),1)):this.clear():h(t[n],this.toBBox)},_initFormat:function(t){var i=["return a"," - b",";"];this.compareMinX=new Function("a","b",i.join(t[0])),this.compareMinY=new Function("a","b",i.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}},i}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

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

/***/ "./node_modules/arcgis-js-api/layers/graphics/OptimizedFeature.js":
/*!************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/OptimizedFeature.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t,i,o){void 0===e&&(e=null),void 0===t&&(t={}),this.localId=0,this.geohashIndexed=!1,this.geohashX=0,this.geohashY=0,this.geometry=e,t&&(this.attributes=t),i&&(this.centroid=i),null!=o&&(this.objectId=o)}return e}();t.default=o}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/graphics/OptimizedFeatureSet.js":
/*!***************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/OptimizedFeatureSet.js ***!
  \***************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1}return e}();t.default=i}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/graphics/OptimizedGeometry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/OptimizedGeometry.js ***!
  \*************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){void 0===e&&(e=[]),void 0===t&&(t=[]),this.lengths=e,this.coords=t}return e}();t.default=i}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/graphics/sources/support/clientSideDefaults.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/sources/support/clientSideDefaults.js ***!
  \******************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../../../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../../../symbols/support/defaultsJSON */ "./node_modules/arcgis-js-api/symbols/support/defaultsJSON.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,n,o,i){function u(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?i.defaultPointSymbolJSON:"esriGeometryPolyline"===e?i.defaultPolylineSymbolJSON:i.defaultPolygonSymbolJSON}}}function l(e,t){if(n("csp-restrictions"))return function(){var n;return r((n={},n[t]=null,n),e)};try{var o="this."+t+" = null;";for(var i in e)o+="this."+i+" = "+JSON.stringify(e[i])+";";var u=new Function(o);return function(){return new u}}catch(n){return function(){var n;return r((n={},n[t]=null,n),e)}}}function a(e){return void 0===e&&(e={}),[{name:"New Feature",description:"",prototype:{attributes:o.clone(e)}}]}Object.defineProperty(t,"__esModule",{value:!0}),t.createDrawingInfo=u,t.createDefaultAttributesFunction=l,t.createDefaultTemplate=a}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=40.js.map