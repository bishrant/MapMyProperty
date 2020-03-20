(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/core/libs/earcut/earcut":"./node_modules/arcgis-js-api/core/libs/earcut/earcut.js",
	"esri/core/pbf":"./node_modules/arcgis-js-api/core/pbf.js",
	"arcgis-js-api/core/pbf":"./node_modules/arcgis-js-api/core/pbf.js",
	"esri/symbols/cim/enums":"./node_modules/arcgis-js-api/symbols/cim/enums.js",
	"esri/views/2d/engine/vectorTiles/GeometryUtils":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GeometryUtils.js",
	"arcgis-js-api/views/2d/engine/vectorTiles/GeometryUtils":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GeometryUtils.js",
	"esri/views/2d/engine/webgl/Geometry":"./node_modules/arcgis-js-api/views/2d/engine/webgl/Geometry.js",
	"esri/views/2d/engine/webgl/GeometryUtils":"./node_modules/arcgis-js-api/views/2d/engine/webgl/GeometryUtils.js",
	"arcgis-js-api/views/2d/engine/webgl/Rect":"./node_modules/arcgis-js-api/views/2d/engine/webgl/Rect.js",
	"esri/views/2d/engine/webgl/Rect":"./node_modules/arcgis-js-api/views/2d/engine/webgl/Rect.js",
	"esri/views/2d/engine/webgl/TextShaping":"./node_modules/arcgis-js-api/views/2d/engine/webgl/TextShaping.js",
	"esri/views/2d/engine/webgl/TileClipper":"./node_modules/arcgis-js-api/views/2d/engine/webgl/TileClipper.js",
	"esri/views/2d/engine/webgl/TurboLine":"./node_modules/arcgis-js-api/views/2d/engine/webgl/TurboLine.js",
	"esri/views/2d/engine/webgl/definitions":"./node_modules/arcgis-js-api/views/2d/engine/webgl/definitions.js",
	"arcgis-js-api/views/2d/engine/webgl/definitions":"./node_modules/arcgis-js-api/views/2d/engine/webgl/definitions.js",
	"esri/views/2d/engine/webgl/mesh/templates/util":"./node_modules/arcgis-js-api/views/2d/engine/webgl/mesh/templates/util.js",
	"dojo/Stateful":"./node_modules/dojo/Stateful.js",
	"dojox/string/BidiEngine":"./node_modules/dojox/string/BidiEngine.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/arcgis-js-api/core/libs/earcut/earcut.js":
/*!***************************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/libs/earcut/earcut.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){"use strict";function e(e,t,x){x=x||2;var i=t&&t.length,u=i?t[0]*x:e.length,v=n(e,0,u,x,!0),y=[];if(!v||v.next===v.prev)return y;var o,p,l,a,h,s,c;if(i&&(v=f(e,t,v,x)),e.length>80*x){o=l=e[0],p=a=e[1];for(var Z=x;Z<u;Z+=x)h=e[Z],s=e[Z+1],h<o&&(o=h),s<p&&(p=s),h>l&&(l=h),s>a&&(a=s);c=Math.max(l-o,a-p),c=0!==c?1/c:0}return r(v,y,x,o,p,c),y}function n(e,n,t,r,x){var i,u;if(x===A(e,n,t,r)>0)for(i=n;i<t;i+=r)u=m(i,e[i],e[i+1],u);else for(i=t-r;i>=n;i-=r)u=m(i,e[i],e[i+1],u);return u&&d(u,u.next)&&(j(u),u=u.next),u}function t(e,n){if(!e)return e;n||(n=e);var t,r=e;do{if(t=!1,r.steiner||!d(r,r.next)&&0!==g(r.prev,r,r.next))r=r.next;else{if(j(r),(r=n=r.prev)===r.next)break;t=!0}}while(t||r!==n);return n}function r(e,n,f,y,o,p,a){if(e){!a&&p&&l(e,y,o,p);for(var h,s,c=e;e.prev!==e.next;)if(h=e.prev,s=e.next,p?i(e,y,o,p):x(e))n.push(h.i/f),n.push(e.i/f),n.push(s.i/f),j(e),e=s.next,c=s.next;else if((e=s)===c){a?1===a?(e=u(e,n,f),r(e,n,f,y,o,p,2)):2===a&&v(e,n,f,y,o,p):r(t(e),n,f,y,o,p,1);break}}}function x(e){var n=e.prev,t=e,r=e.next;if(g(n,t,r)>=0)return!1;for(var x=e.next.next,i=x,u=0;x!==e.prev&&(0===u||x!==i);){if(u++,c(n.x,n.y,t.x,t.y,r.x,r.y,x.x,x.y)&&g(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function i(e,n,t,r){var x=e.prev,i=e,u=e.next;if(g(x,i,u)>=0)return!1;for(var v=x.x<i.x?x.x<u.x?x.x:u.x:i.x<u.x?i.x:u.x,f=x.y<i.y?x.y<u.y?x.y:u.y:i.y<u.y?i.y:u.y,y=x.x>i.x?x.x>u.x?x.x:u.x:i.x>u.x?i.x:u.x,o=x.y>i.y?x.y>u.y?x.y:u.y:i.y>u.y?i.y:u.y,p=h(v,f,n,t,r),l=h(y,o,n,t,r),a=e.prevZ,s=e.nextZ;a&&a.z>=p&&s&&s.z<=l;){if(a!==e.prev&&a!==e.next&&c(x.x,x.y,i.x,i.y,u.x,u.y,a.x,a.y)&&g(a.prev,a,a.next)>=0)return!1;if(a=a.prevZ,s!==e.prev&&s!==e.next&&c(x.x,x.y,i.x,i.y,u.x,u.y,s.x,s.y)&&g(s.prev,s,s.next)>=0)return!1;s=s.nextZ}for(;a&&a.z>=p;){if(a!==e.prev&&a!==e.next&&c(x.x,x.y,i.x,i.y,u.x,u.y,a.x,a.y)&&g(a.prev,a,a.next)>=0)return!1;a=a.prevZ}for(;s&&s.z<=l;){if(s!==e.prev&&s!==e.next&&c(x.x,x.y,i.x,i.y,u.x,u.y,s.x,s.y)&&g(s.prev,s,s.next)>=0)return!1;s=s.nextZ}return!0}function u(e,n,t){var r=e;do{var x=r.prev,i=r.next.next;!d(x,i)&&w(x,r,r.next,i)&&b(x,i)&&b(i,x)&&(n.push(x.i/t),n.push(r.i/t),n.push(i.i/t),j(r),j(r.next),r=e=i),r=r.next}while(r!==e);return r}function v(e,n,x,i,u,v){var f=e;do{for(var y=f.next.next;y!==f.prev;){if(f.i!==y.i&&Z(f,y)){var o=k(f,y);return f=t(f,f.next),o=t(o,o.next),r(f,n,x,i,u,v),void r(o,n,x,i,u,v)}y=y.next}f=f.next}while(f!==e)}function f(e,r,x,i){var u,v,f,p,l,a=[];for(u=0,v=r.length;u<v;u++)f=r[u]*i,p=u<v-1?r[u+1]*i:e.length,l=n(e,f,p,i,!1),l===l.next&&(l.steiner=!0),a.push(s(l));for(a.sort(y),u=0;u<a.length;u++)o(a[u],x),x=t(x,x.next);return x}function y(e,n){return e.x-n.x}function o(e,n){if(n=p(e,n)){var r=k(n,e);t(r,r.next)}}function p(e,n){var t,r=n,x=e.x,i=e.y,u=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var v=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(v<=x&&v>u){if(u=v,v===x){if(i===r.y)return r;if(i===r.next.y)return r.next}t=r.x<r.next.x?r:r.next}}r=r.next}while(r!==n);if(!t)return null;if(x===u)return t.prev;var f,y=t,o=t.x,p=t.y,l=1/0;for(r=t.next;r!==y;)x>=r.x&&r.x>=o&&x!==r.x&&c(i<p?x:u,i,o,p,i<p?u:x,i,r.x,r.y)&&((f=Math.abs(i-r.y)/(x-r.x))<l||f===l&&r.x>t.x)&&b(r,e)&&(t=r,l=f),r=r.next;return t}function l(e,n,t,r){var x=e;do{null===x.z&&(x.z=h(x.x,x.y,n,t,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==e);x.prevZ.nextZ=null,x.prevZ=null,a(x)}function a(e){var n,t,r,x,i,u,v,f,y=1;do{for(t=e,e=null,i=null,u=0;t;){for(u++,r=t,v=0,n=0;n<y&&(v++,r=r.nextZ);n++);for(f=y;v>0||f>0&&r;)0!==v&&(0===f||!r||t.z<=r.z)?(x=t,t=t.nextZ,v--):(x=r,r=r.nextZ,f--),i?i.nextZ=x:e=x,x.prevZ=i,i=x;t=r}i.nextZ=null,y*=2}while(u>1);return e}function h(e,n,t,r,x){return e=32767*(e-t)*x,n=32767*(n-r)*x,e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),n=16711935&(n|n<<8),n=252645135&(n|n<<4),n=858993459&(n|n<<2),n=1431655765&(n|n<<1),e|n<<1}function s(e){var n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function c(e,n,t,r,x,i,u,v){return(x-u)*(n-v)-(e-u)*(i-v)>=0&&(e-u)*(r-v)-(t-u)*(n-v)>=0&&(t-u)*(i-v)-(x-u)*(r-v)>=0}function Z(e,n){return e.next.i!==n.i&&e.prev.i!==n.i&&!z(e,n)&&b(e,n)&&b(n,e)&&M(e,n)}function g(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function d(e,n){return e.x===n.x&&e.y===n.y}function w(e,n,t,r){return!!(d(e,n)&&d(t,r)||d(e,r)&&d(t,n))||g(e,n,t)>0!=g(e,n,r)>0&&g(t,r,e)>0!=g(t,r,n)>0}function z(e,n){var t=e;do{if(t.i!==e.i&&t.next.i!==e.i&&t.i!==n.i&&t.next.i!==n.i&&w(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}function b(e,n){return g(e.prev,e,e.next)<0?g(e,n,e.next)>=0&&g(e,e.prev,n)>=0:g(e,n,e.prev)<0||g(e,e.next,n)<0}function M(e,n){var t=e,r=!1,x=(e.x+n.x)/2,i=(e.y+n.y)/2;do{t.y>i!=t.next.y>i&&t.next.y!==t.y&&x<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next}while(t!==e);return r}function k(e,n){var t=new q(e.i,e.x,e.y),r=new q(n.i,n.x,n.y),x=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=x,x.prev=t,r.next=t,t.prev=r,i.next=r,r.prev=i,r}function m(e,n,t,r){var x=new q(e,n,t);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function j(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function q(e,n,t){this.i=e,this.x=n,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function A(e,n,t,r){for(var x=0,i=n,u=t-r;i<t;i+=r)x+=(e[u]-e[i])*(e[i+1]+e[u+1]),u=i;return x}return e.deviation=function(e,n,t,r){var x=n&&n.length,i=x?n[0]*t:e.length,u=Math.abs(A(e,0,i,t));if(x)for(var v=0,f=n.length;v<f;v++){var y=n[v]*t,o=v<f-1?n[v+1]*t:e.length;u-=Math.abs(A(e,y,o,t))}var p=0;for(v=0;v<r.length;v+=3){var l=r[v]*t,a=r[v+1]*t,h=r[v+2]*t;p+=Math.abs((e[l]-e[h])*(e[a+1]-e[l+1])-(e[l]-e[a])*(e[h+1]-e[l+1]))}return 0===u&&0===p?0:Math.abs((p-u)/u)},e.flatten=function(e){for(var n=e[0][0].length,t={vertices:[],holes:[],dimensions:n},r=0,x=0;x<e.length;x++){for(var i=0;i<e[x].length;i++)for(var u=0;u<n;u++)t.vertices.push(e[x][i][u]);x>0&&(r+=e[x-1].length,t.holes.push(r))}return t},e}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/core/pbf.js":
/*!************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/pbf.js ***!
  \************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ./ObjectPool */ "./node_modules/arcgis-js-api/core/ObjectPool.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,i,o){var r=i("esri-text-decoder")?new TextDecoder("utf-8"):null,s=i("safari")||i("ios")?6:i("ff")?12:32;return function(){function t(t,e,i,o){void 0===i&&(i=0),void 0===o&&(o=t?t.byteLength:0),this._tag=0,this._dataType=99,this.init(t,e,i,o)}return t.prototype.init=function(t,e,i,o){this._data=t,this._dataView=e,this._pos=i,this._end=o},t.prototype.clone=function(){return new t(this._data,this._dataView,this._pos,this._end)},t.prototype.pos=function(){return this._pos},t.prototype.next=function(t){for(;;){if(this._pos===this._end)return!1;var e=this._decodeVarint();if(this._tag=e>>3,this._dataType=7&e,!t||t===this._tag)break;this.skip()}return!0},t.prototype.empty=function(){return this._pos>=this._end},t.prototype.tag=function(){return this._tag},t.prototype.getInt32=function(){return this._decodeVarint()},t.prototype.getInt64=function(){return this._decodeVarint()},t.prototype.getUInt32=function(){var t=4294967295;return t=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?t:(t=(t|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?t:void 0))))},t.prototype.getUInt64=function(){return this._decodeVarint()},t.prototype.getSInt32=function(){var t=this.getUInt32();return t>>>1^-(1&t)|0},t.prototype.getSInt64=function(){return this._decodeSVarint()},t.prototype.getBool=function(){var t=0!==this._data[this._pos];return this._skip(1),t},t.prototype.getEnum=function(){return this._decodeVarint()},t.prototype.getFixed64=function(){var t=this._dataView,e=this._pos,i=t.getUint32(e,!0)+4294967296*t.getUint32(e+4,!0);return this._skip(8),i},t.prototype.getSFixed64=function(){var t=this._dataView,e=this._pos,i=t.getUint32(e,!0)+4294967296*t.getInt32(e+4,!0);return this._skip(8),i},t.prototype.getDouble=function(){var t=this._dataView.getFloat64(this._pos,!0);return this._skip(8),t},t.prototype.getFixed32=function(){var t=this._dataView.getUint32(this._pos,!0);return this._skip(4),t},t.prototype.getSFixed32=function(){var t=this._dataView.getInt32(this._pos,!0);return this._skip(4),t},t.prototype.getFloat=function(){var t=this._dataView.getFloat32(this._pos,!0);return this._skip(4),t},t.prototype.getString=function(){var t=this._getLength(),e=this._pos,i=this._toString(this._data,e,e+t);return this._skip(t),i},t.prototype.getBytes=function(){var t=this._getLength(),e=this._pos,i=this._toBytes(this._data,e,e+t);return this._skip(t),i},t.prototype.processMessageWithArgs=function(t,e,i,o){var r=this.getMessage(),s=t(r,e,i,o);return r.release(),s},t.prototype.processMessage=function(t){var e=this.getMessage(),i=t(e);return e.release(),i},t.prototype.getMessage=function(){var e=this._getLength(),i=t.pool.acquire();return i.init(this._data,this._dataView,this._pos,this._pos+e),this._skip(e),i},t.prototype.release=function(){t.pool.release(this)},t.prototype.skip=function(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw new Error("Invalid data type!")}},t.prototype._skip=function(t){if(this._pos+t>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=t},t.prototype._decodeVarint=function(){var t,e=this._data,i=this._pos,o=0;if(this._end-i>=10)do{if(t=e[i++],o|=127&t,0==(128&t))break;if(t=e[i++],o|=(127&t)<<7,0==(128&t))break;if(t=e[i++],o|=(127&t)<<14,0==(128&t))break;if(t=e[i++],o|=(127&t)<<21,0==(128&t))break;if(t=e[i++],o+=268435456*(127&t),0==(128&t))break;if(t=e[i++],o+=34359738368*(127&t),0==(128&t))break;if(t=e[i++],o+=4398046511104*(127&t),0==(128&t))break;if(t=e[i++],o+=562949953421312*(127&t),0==(128&t))break;if(t=e[i++],o+=72057594037927940*(127&t),0==(128&t))break;if(t=e[i++],o+=0x8000000000000000*(127&t),0==(128&t))break;throw new Error("Varint too long!")}while(!1);else{for(var r=1;i!==this._end&&0!=(128&(t=e[i]));)++i,o+=(127&t)*r,r*=128;if(i===this._end)throw new Error("Varint overrun!");++i,o+=t*r}return this._pos=i,o},t.prototype._decodeSVarint=function(){var t=this._decodeVarint();return t%2?-(t+1)/2:t/2},t.prototype._getLength=function(){if(2!==this._dataType)throw new Error("Not a delimited data type!");return this._decodeVarint()},t.prototype._toString=function(t,e,i){if((i=Math.min(this._end,i))-e>s&&r){var o=t.subarray(e,i);return r.decode(o)}for(var n="",a="",p=e;p<i;++p){var h=t[p];128&h?a+="%"+h.toString(16):(n+=decodeURIComponent(a)+String.fromCharCode(h),a="")}return a.length&&(n+=decodeURIComponent(a)),n},t.prototype._toBytes=function(t,e,i){return i=Math.min(this._end,i),new Uint8Array(t.buffer,e,i-e)},t.pool=new o(t,!1,function(t){t._data=null,t._dataView=null}),t}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/symbols/cim/enums.js":
/*!*********************************************************!*\
  !*** ./node_modules/arcgis-js-api/symbols/cim/enums.js ***!
  \*********************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,N){Object.defineProperty(N,"__esModule",{value:!0});!function(e){e[e.BUTT=0]="BUTT",e[e.ROUND=1]="ROUND",e[e.SQUARE=2]="SQUARE",e[e.UNKNOWN=4]="UNKNOWN"}(N.CapType||(N.CapType={}));!function(e){e[e.BEVEL=0]="BEVEL",e[e.ROUND=1]="ROUND",e[e.MITER=2]="MITER",e[e.UNKNOWN=4]="UNKNOWN"}(N.JoinType||(N.JoinType={}));!function(e){e[e.SCREEN=0]="SCREEN",e[e.MAP=1]="MAP"}(N.Alignment||(N.Alignment={}))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GeometryUtils.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GeometryUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_,e){function n(_,e){return _%=e,_>=0?_:_+e}function t(_){return n(_*e.C_RAD_TO_256,256)}function r(_){return n(_*e.C_DEG_TO_256,256)}function u(_){return Math.log(_)*i}function o(_){return _*_}function C(_,e,n){return _*(1-n)+e*n}function I(_,e,n){return _>=e&&_<=n||_>=n&&_<=e}Object.defineProperty(e,"__esModule",{value:!0}),e.C_INFINITY=Number.POSITIVE_INFINITY,e.C_PI=Math.PI,e.C_2PI=2*e.C_PI,e.C_PI_BY_2=e.C_PI/2,e.C_RAD_TO_256=128/e.C_PI,e.C_256_TO_RAD=e.C_PI/128,e.C_DEG_TO_256=256/360,e.C_DEG_TO_RAD=e.C_PI/180,e.C_SQRT2=1.414213562,e.C_SQRT2_INV=1/e.C_SQRT2;var i=1/Math.LN2;e.positiveMod=n,e.radToByte=t,e.degToByte=r,e.log2=u,e.sqr=o,e.interpolate=C,e.between=I}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/webgl/Geometry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/webgl/Geometry.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function n(t,i){this.x=t,this.y=i}return n.prototype.clone=function(){return new n(this.x,this.y)},n.prototype.equals=function(t,i){return t===this.x&&i===this.y},n.prototype.isEqual=function(t){return t.x===this.x&&t.y===this.y},n.prototype.setCoords=function(t,i){this.x=t,this.y=i},n.prototype.normalize=function(){var t=this.x,i=this.y,n=Math.sqrt(t*t+i*i);this.x/=n,this.y/=n},n.prototype.rightPerpendicular=function(){var t=this.x;this.x=this.y,this.y=-t},n.prototype.move=function(t,i){this.x+=t,this.y+=i},n.prototype.assign=function(t){this.x=t.x,this.y=t.y},n.prototype.assignAdd=function(t,i){this.x=t.x+i.x,this.y=t.y+i.y},n.prototype.assignSub=function(t,i){this.x=t.x-i.x,this.y=t.y-i.y},n.prototype.rotate=function(t,i){var n=this.x,o=this.y;this.x=n*t-o*i,this.y=n*i+o*t},n.prototype.scale=function(t){this.x*=t,this.y*=t},n.prototype.length=function(){var t=this.x,i=this.y;return Math.sqrt(t*t+i*i)},n.distance=function(t,i){var n=i.x-t.x,o=i.y-t.y;return Math.sqrt(n*n+o*o)},n.add=function(t,i){return new n(t.x+i.x,t.y+i.y)},n.sub=function(t,i){return new n(t.x-i.x,t.y-i.y)},n}();i.Point=n}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/webgl/GeometryUtils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/webgl/GeometryUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_,e){Object.defineProperty(e,"__esModule",{value:!0}),e.C_INFINITY=Number.POSITIVE_INFINITY,e.C_PI=Math.PI,e.C_2PI=2*e.C_PI,e.C_PI_BY_2=e.C_PI/2,e.C_RAD_TO_256=128/e.C_PI,e.C_256_TO_RAD=e.C_PI/128,e.C_DEG_TO_256=256/360,e.C_DEG_TO_RAD=e.C_PI/180,e.C_SQRT2=1.414213562,e.C_SQRT2_INV=1/e.C_SQRT2;var n=1/Math.LN2;function t(_,e){return 0<=(_%=e)?_:_+e}e.positiveMod=t,e.radToByte=function(_){return t(_*e.C_RAD_TO_256,256)},e.degToByte=function(_){return t(_*e.C_DEG_TO_256,256)},e.log2=function(_){return Math.log(_)*n},e.sqr=function(_){return _*_},e.interpolate=function(_,e,n){return _*(1-n)+e*n},e.between=function(_,e,n){return e<=_&&_<=n||n<=_&&_<=e}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/webgl/Rect.js":
/*!******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/webgl/Rect.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var h=function(){function t(t,i,h,e){void 0===t&&(t=0),void 0===i&&(i=0),void 0===h&&(h=0),void 0===e&&(e=0),this.x=t,this.y=i,this.width=h,this.height=e}return Object.defineProperty(t.prototype,"isEmpty",{get:function(){return this.width<=0||this.height<=0},enumerable:!0,configurable:!0}),t.prototype.union=function(t){this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.width=Math.max(this.width,t.width),this.height=Math.max(this.height,t.height)},t}();i.default=h}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/webgl/TextShaping.js":
/*!*************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/webgl/TextShaping.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./Rect */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/Rect.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,i,c){Object.defineProperty(i,"__esModule",{value:!0});var e=function(){function t(t,i,e,h,a,s,r,n){this._glyphItems=t,this._maxWidth=i,this._lineHeight=e,this._letterSpacing=h,this._offset=a,this._hAnchor=s,this._vAnchor=r,this._justify=n}return t.prototype.getShaping=function(t,i){for(var e=this._letterSpacing,h=this._lineHeight,a=this._justify,s=this._maxWidth,r=[],n=0,o=0,c=0,f=0,l=-1,p=0,g=-1,m=t.length,y=0;y<m;y++){var v=t.charCodeAt(y);if(10!==v){for(var d=void 0,u=0,x=this._glyphItems;u<x.length;u++){if(d=x[u][v])break}if(d){if(r.push({codePoint:v,x:n,y:o,glyphMosaicItem:d}),n+=d.metrics.advance+e,0<s&&s<n&&0<=g){var _=g+1;I=r[_].x;p=Math.max(I,p);for(var M=_;M<r.length;M++)i?r[M].y-=h:r[M].y+=h,r[M].x-=I;a&&this._applyJustification(r,f,g),i?o-=h:o+=h,n-=I,++c,f=_,g=-1}++l,32===v&&(g=r.length-1)}}else{if(y===m-1)continue;if(f<=l){var I=(w=r[l]).x+w.glyphMosaicItem.metrics.advance;p=Math.max(I,p),a&&this._applyJustification(r,f,l),f=r.length}i?o-=h:o+=h,n=0,++c}}if(f<=l){var w,A=(w=r[l]).x+w.glyphMosaicItem.metrics.advance;p=Math.max(p,A),a&&this._applyJustification(r,f,l)}if(0<r.length){var j=(a-this._hAnchor)*p,J=(-this._vAnchor*(c+1)+.5)*h;i&&c&&(J+=c*h),j+=this._offset[0],J+=this._offset[1];for(var P=0,S=r;P<S.length;P++){var b=S[P];b.x+=j,b.y+=J}}return r},t.getBox=function(t){if(!t.length)return null;for(var i=1/0,e=1/0,h=0,a=0,s=0,r=t;s<r.length;s++){var n=r[s],o=n.glyphMosaicItem.metrics,c=o.height,f=o.left,l=o.top,p=o.width,g=n.x,m=n.y-(c-Math.abs(l)),y=g+p+f,v=m+c;i=Math.min(i,g),h=Math.max(h,y),e=Math.min(e,m),a=Math.max(a,v)}return{x:i,y:e,width:h-i,height:a-e}},t.addDecoration=function(t,i){var e=t.length;if(0!==e){for(var h=t[0].x+t[0].glyphMosaicItem.metrics.left,a=t[0].y,s=1;s<e;s++){var r=t[s];if(r.y!==a){var n=t[s-1].x+t[s-1].glyphMosaicItem.metrics.left+t[s-1].glyphMosaicItem.metrics.width;t.push({codePoint:0,x:h,y:a+i-3,glyphMosaicItem:{sdf:!0,rect:new c.default(4,0,4,8),metrics:{width:n-h,height:8,left:0,top:0,advance:0},page:0}}),a=r.y,h=r.x+r.glyphMosaicItem.metrics.left}}var o=t[e-1].x+t[e-1].glyphMosaicItem.metrics.left+t[e-1].glyphMosaicItem.metrics.width;t.push({codePoint:0,x:h,y:a+i-3,glyphMosaicItem:{sdf:!0,rect:new c.default(4,0,4,8),metrics:{width:o-h,height:8,left:0,top:0,advance:0},page:0}})}},t.prototype._applyJustification=function(t,i,e){for(var h=t[e],a=h.glyphMosaicItem.metrics.advance,s=(h.x+a)*this._justify,r=i;r<=e;r++)t[r].x-=s},t}();i.TextShaping=e}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/webgl/TileClipper.js":
/*!*************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/webgl/TileClipper.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./definitions */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/definitions.js"),__webpack_require__(/*! ./Geometry */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/Geometry.js"),__webpack_require__(/*! ./GeometryUtils */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/GeometryUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(i,t,e,v,g){Object.defineProperty(t,"__esModule",{value:!0});var c=function(i,t,s){this.ratio=i,this.x=t,this.y=s},s=function(){function i(i,t,s,h,n){void 0===h&&(h=8),void 0===n&&(n=8),this.lines=[],this.starts=[],this.pixelRatio=h,this.pixelMargin=n,this.tileSize=e.TILE_SIZE*h,this.dz=i,this.yPos=t,this.xPos=s}return i.prototype.setExtent=function(i){this.finalRatio=this.tileSize/i*(1<<this.dz);var t=this.pixelRatio*this.pixelMargin;t/=this.finalRatio;var s=i>>this.dz;s<t&&(t=s),this.margin=t,this.xmin=s*this.xPos-t,this.ymin=s*this.yPos-t,this.xmax=this.xmin+s+2*t,this.ymax=this.ymin+s+2*t},i.prototype.reset=function(i){this.type=i,this.lines=[],this.starts=[],this.line=null,this.start=0},i.prototype.moveTo=function(i,t){this._pushLine(),this._prevIsIn=this._isIn(i,t),this._moveTo(i,t,this._prevIsIn),this._prevPt=new v.Point(i,t),this._firstPt=new v.Point(i,t),this._dist=0},i.prototype.lineTo=function(i,t){var s,h,n,e,l,x,a,r,y=this._isIn(i,t),o=new v.Point(i,t),p=v.Point.distance(this._prevPt,o);if(y)this._prevIsIn?this._lineTo(i,t,!0):(s=this._prevPt,h=o,n=this._intersect(h,s),this.start=this._dist+p*(1-this._r),this._lineTo(n.x,n.y,!0),this._lineTo(h.x,h.y,!0));else if(this._prevIsIn)h=this._prevPt,s=o,n=this._intersect(h,s),this._lineTo(n.x,n.y,!0),this._lineTo(s.x,s.y,!1);else{var u=this._prevPt,m=o;if(u.x<=this.xmin&&m.x<=this.xmin||u.x>=this.xmax&&m.x>=this.xmax||u.y<=this.ymin&&m.y<=this.ymin||u.y>=this.ymax&&m.y>=this.ymax)this._lineTo(m.x,m.y,!1);else{var _=[];if((u.x<this.xmin&&m.x>this.xmin||u.x>this.xmin&&m.x<this.xmin)&&(e=(this.xmin-u.x)/(m.x-u.x),(r=u.y+e*(m.y-u.y))<=this.ymin?x=!1:r>=this.ymax?x=!0:_.push(new c(e,this.xmin,r))),(u.x<this.xmax&&m.x>this.xmax||u.x>this.xmax&&m.x<this.xmax)&&(e=(this.xmax-u.x)/(m.x-u.x),(r=u.y+e*(m.y-u.y))<=this.ymin?x=!1:r>=this.ymax?x=!0:_.push(new c(e,this.xmax,r))),(u.y<this.ymin&&m.y>this.ymin||u.y>this.ymin&&m.y<this.ymin)&&(e=(this.ymin-u.y)/(m.y-u.y),(a=u.x+e*(m.x-u.x))<=this.xmin?l=!1:a>=this.xmax?l=!0:_.push(new c(e,a,this.ymin))),(u.y<this.ymax&&m.y>this.ymax||u.y>this.ymax&&m.y<this.ymax)&&(e=(this.ymax-u.y)/(m.y-u.y),(a=u.x+e*(m.x-u.x))<=this.xmin?l=!1:a>=this.xmax?l=!0:_.push(new c(e,a,this.ymax))),0===_.length)l?x?this._lineTo(this.xmax,this.ymax,!0):this._lineTo(this.xmax,this.ymin,!0):x?this._lineTo(this.xmin,this.ymax,!0):this._lineTo(this.xmin,this.ymin,!0);else if(1<_.length&&_[0].ratio>_[1].ratio)this.start=this._dist+p*_[1].ratio,this._lineTo(_[1].x,_[1].y,!0),this._lineTo(_[0].x,_[0].y,!0);else{this.start=this._dist+p*_[0].ratio;for(var f=0;f<_.length;f++)this._lineTo(_[f].x,_[f].y,!0)}this._lineTo(m.x,m.y,!1)}}this._dist+=p,this._prevIsIn=y,this._prevPt=o},i.prototype.close=function(){if(2<this.line.length){var i=this._firstPt,t=this._prevPt;i.x===t.x&&i.y===t.y||this.lineTo(i.x,i.y);for(var s=this.line,h=s.length;4<=h&&(s[0].x===s[1].x&&s[0].x===s[h-2].x||s[0].y===s[1].y&&s[0].y===s[h-2].y);)s.pop(),s[0].x=s[h-2].x,s[0].y=s[h-2].y,--h}},i.prototype.result=function(i){return void 0===i&&(i=!0),this._pushLine(),0===this.lines.length?null:(3===this.type&&i&&n.simplify(this.tileSize,this.margin*this.finalRatio,this.lines),this.lines)},i.prototype.resultWithStarts=function(){if(2!==this.type)throw new Error("Only valid for lines");this._pushLine();var i=this.lines,t=i.length;if(0===t)return null;for(var s=[],h=0;h<t;h++)s.push({line:i[h],start:this.starts[h]||0});return s},i.prototype._isIn=function(i,t){return i>=this.xmin&&i<=this.xmax&&t>=this.ymin&&t<=this.ymax},i.prototype._intersect=function(i,t){var s,h,n;if(t.x>=this.xmin&&t.x<=this.xmax)n=((h=t.y<=this.ymin?this.ymin:this.ymax)-i.y)/(t.y-i.y),s=i.x+n*(t.x-i.x);else if(t.y>=this.ymin&&t.y<=this.ymax)n=((s=t.x<=this.xmin?this.xmin:this.xmax)-i.x)/(t.x-i.x),h=i.y+n*(t.y-i.y);else{h=t.y<=this.ymin?this.ymin:this.ymax;var e=((s=t.x<=this.xmin?this.xmin:this.xmax)-i.x)/(t.x-i.x),l=(h-i.y)/(t.y-i.y);e<l?(n=e,h=i.y+e*(t.y-i.y)):(n=l,s=i.x+l*(t.x-i.x))}return this._r=n,new v.Point(s,h)},i.prototype._pushLine=function(){this.line&&(1===this.type?0<this.line.length&&(this.lines.push(this.line),this.starts.push(this.start)):2===this.type?1<this.line.length&&(this.lines.push(this.line),this.starts.push(this.start)):3===this.type&&3<this.line.length&&(this.lines.push(this.line),this.starts.push(this.start))),this.line=[],this.start=0},i.prototype._moveTo=function(i,t,s){3!==this.type?s&&(i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line.push(new v.Point(i,t))):(s||(i<this.xmin&&(i=this.xmin),i>this.xmax&&(i=this.xmax),t<this.ymin&&(t=this.ymin),t>this.ymax&&(t=this.ymax)),i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line.push(new v.Point(i,t)),this._is_h=!1,this._is_v=!1)},i.prototype._lineTo=function(i,t,s){var h,n;if(3!==this.type)if(s){if(i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),0<this.line.length&&(h=this.line[this.line.length-1]).equals(i,t))return;this.line.push(new v.Point(i,t))}else this.line&&0<this.line.length&&this._pushLine();else if(s||(i<this.xmin&&(i=this.xmin),i>this.xmax&&(i=this.xmax),t<this.ymin&&(t=this.ymin),t>this.ymax&&(t=this.ymax)),i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line&&0<this.line.length){var e=(h=this.line[this.line.length-1]).x===i,l=h.y===t;if(e&&l)return;this._is_h&&e?(h.x=i,h.y=t,(n=this.line[this.line.length-2]).x===i&&n.y===t?(this.line.pop(),this.line.length<=1?(this._is_h=!1,this._is_v=!1):(n=this.line[this.line.length-2],this._is_h=n.x===i,this._is_v=n.y===t)):(this._is_h=n.x===i,this._is_v=n.y===t)):this._is_v&&l?(h.x=i,h.y=t,(n=this.line[this.line.length-2]).x===i&&n.y===t?(this.line.pop(),this.line.length<=1?(this._is_h=!1,this._is_v=!1):(n=this.line[this.line.length-2],this._is_h=n.x===i,this._is_v=n.y===t)):(this._is_h=n.x===i,this._is_v=n.y===t)):(this.line.push(new v.Point(i,t)),this._is_h=e,this._is_v=l)}else this.line.push(new v.Point(i,t))},i}();t.TileClipper=s;var h=function(){function i(){}return i.prototype.setExtent=function(i){this._ratio=4096===i?1:4096/i},i.prototype.reset=function(i){this.type=i,this.lines=[],this.line=null},i.prototype.moveTo=function(i,t){this.line&&this.lines.push(this.line),this.line=[];var s=this._ratio;this.line.push(new v.Point(Math.round(i*s),Math.round(t*s)))},i.prototype.lineTo=function(i,t){var s=this._ratio;this.line.push(new v.Point(Math.round(i*s),Math.round(t*s)))},i.prototype.close=function(){var i=this.line;i&&!i[0].isEqual(i[i.length-1])&&i.push(i[0])},i.prototype.result=function(){return this.line&&this.lines.push(this.line),0===this.lines.length?null:(3===this.type&&1!==this._ratio&&n.simplify(4096,64,this.lines),this.lines)},i}();t.SimpleBuilder=h;var n=function(){function v(){}return v.simplify=function(i,t,s){if(s){for(var h=-t,n=i+t,e=-t,l=i+t,x=[],a=[],r=s.length,y=0;y<r;++y){var o=s[y];if(o&&!(o.length<2))for(var p=o[0],u=void 0,m=o.length,_=1;_<m;++_)u=o[_],p.x===u.x&&(p.x<=h&&(p.y>u.y?(x.push(y),x.push(_),x.push(0),x.push(-1)):(a.push(y),a.push(_),a.push(0),a.push(-1))),p.x>=n&&(p.y<u.y?(x.push(y),x.push(_),x.push(1),x.push(-1)):(a.push(y),a.push(_),a.push(1),a.push(-1)))),p.y===u.y&&(p.y<=e&&(p.x<u.x?(x.push(y),x.push(_),x.push(2),x.push(-1)):(a.push(y),a.push(_),a.push(2),a.push(-1))),p.y>=l&&(p.x>u.x?(x.push(y),x.push(_),x.push(3),x.push(-1)):(a.push(y),a.push(_),a.push(3),a.push(-1)))),p=u}if(0!==x.length&&0!==a.length){v.fillParent(s,a,x),v.fillParent(s,x,a);var f=[];v.calcDeltas(f,a,x),v.calcDeltas(f,x,a),v.addDeltas(f,s)}}},v.fillParent=function(i,t,s){for(var h=s.length,n=t.length,e=0;e<n;e+=4){for(var l=t[e],x=t[e+1],a=t[e+2],r=i[l][x-1],y=i[l][x],o=8092,p=-1,u=0;u<h;u+=4)if(s[u+2]===a){var m=s[u],_=s[u+1],f=i[m][_-1],v=i[m][_];switch(a){case 0:case 1:if(g.between(r.y,f.y,v.y)&&g.between(y.y,f.y,v.y))(c=Math.abs(v.y-f.y))<o&&(o=c,p=u);break;case 2:case 3:var c;if(g.between(r.x,f.x,v.x)&&g.between(y.x,f.x,v.x))(c=Math.abs(v.x-f.x))<o&&(o=c,p=u)}}t[e+3]=p}},v.calcDeltas=function(i,t,s){for(var h=t.length,n=0;n<h;n+=4){var e=v.calcDelta(n,t,s,[]);i.push(t[n]),i.push(t[n+1]),i.push(t[n+2]),i.push(e)}},v.calcDelta=function(i,t,s,h){var n=t[i+3];if(-1===n)return 0;var e=h.length;return 1<e&&h[e-2]===n?0:(h.push(n),v.calcDelta(n,s,t,h)+1)},v.addDeltas=function(i,t){for(var s=i.length,h=0,n=0;n<s;n+=4){h<(x=i[n+3])&&(h=x)}for(n=0;n<s;n+=4){var e=t[i[n]],l=i[n+1],x=h-i[n+3];switch(i[n+2]){case 0:e[l-1].x-=x,e[l].x-=x,1===l&&(e[e.length-1].x-=x),l===e.length-1&&(e[0].x-=x);break;case 1:e[l-1].x+=x,e[l].x+=x,1===l&&(e[e.length-1].x+=x),l===e.length-1&&(e[0].x+=x);break;case 2:e[l-1].y-=x,e[l].y-=x,1===l&&(e[e.length-1].y-=x),l===e.length-1&&(e[0].y-=x);break;case 3:e[l-1].y+=x,e[l].y+=x,1===l&&(e[e.length-1].y+=x),l===e.length-1&&(e[0].y+=x)}}},v}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/webgl/TurboLine.js":
/*!***********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/webgl/TurboLine.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../symbols/cim/enums */ "./node_modules/arcgis-js-api/symbols/cim/enums.js"),__webpack_require__(/*! ./mesh/templates/util */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/mesh/templates/util.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,w,r){Object.defineProperty(e,"__esModule",{value:!0});var x,i=function(){this.closed=void 0,this.isFirstVertex=void 0,this.isLastVertex=void 0,this.isCap=void 0,this.currentVertex={x:void 0,y:void 0},this.inbound={x:void 0,y:void 0},this.outbound={x:void 0,y:void 0},this.prevNormal={x:void 0,y:void 0},this.nextNormal={x:void 0,y:void 0},this.bisector={x:void 0,y:void 0},this.leftInner={x:void 0,y:void 0},this.rightInner={x:void 0,y:void 0},this.leftOuter={x:void 0,y:void 0},this.rightOuter={x:void 0,y:void 0}};function T(){if(h.cosine<a.innerBisectorAutoSplitThreshold){h.splitInner=!0,h.gapInner=!0;var t=Math.max(a.innerBisectorAutoSplitThreshold,h.cosine),e=Math.sqrt(1-t*t)/t;h.leftInner.x=h.nextNormal.x+h.sign*e*h.outbound.x,h.leftInner.y=h.nextNormal.y+h.sign*e*h.outbound.y,h.rightInner.x=h.prevNormal.x-h.sign*e*h.inbound.x,h.rightInner.y=h.prevNormal.y-h.sign*e*h.inbound.y}else a.enableInnerBisectorSplit&&(h.splitInner=!0,h.gapInner=!1,h.leftInner.x=h.rightInner.x=h.bisector.x/h.cosine,h.leftInner.y=h.rightInner.y=h.bisector.y/h.cosine);if(h.cosine<a.outerBisectorAutoSplitThreshold){h.splitOuter=!0,h.gapOuter=!0;t=Math.max(a.outerBisectorAutoSplitThreshold,h.cosine),e=Math.sqrt(1-t*t)/t;h.leftOuter.x=h.prevNormal.x-h.sign*e*h.inbound.x,h.leftOuter.y=h.prevNormal.y-h.sign*e*h.inbound.y,h.rightOuter.x=h.nextNormal.x+h.sign*e*h.outbound.x,h.rightOuter.y=h.nextNormal.y+h.sign*e*h.outbound.y}else a.enableOuterBisectorSplit&&(h.splitOuter=!0,h.gapOuter=!1,h.leftOuter.x=h.rightOuter.x=h.bisector.x/h.cosine,h.leftOuter.y=h.rightOuter.y=h.bisector.y/h.cosine)}e.TessellationState=i,e.tessellate=function(t,e,r){a.trackDistance=null!=e.trackDistance&&e.trackDistance,a.wrapDistance=null!=e.wrapDistance?e.wrapDistance:65535,a.thin=null!=e.thin&&e.thin,a.initialDistance=null!=e.initialDistance?e.initialDistance:0,a.enableOuterBisectorSplit=null!=e.enableOuterBisectorSplit&&e.enableOuterBisectorSplit,a.outerBisectorAutoSplitThreshold=null!=e.outerBisectorAutoSplitThreshold?e.outerBisectorAutoSplitThreshold:0,a.enableInnerBisectorSplit=null!=e.enableOuterBisectorSplit&&e.enableOuterBisectorSplit,a.innerBisectorAutoSplitThreshold=null!=e.innerBisectorAutoSplitThreshold?e.innerBisectorAutoSplitThreshold:0,x=t,o=r,u=s=d=0,l=!1,y=c=null,h.currentVertex.x=null,h.currentVertex.y=null,h.distance=a.initialDistance;var i=x[0],n=x[x.length-1];h.canSplit=!1,h.closed=i.x===n.x&&i.y===n.y,x.length<2||2===x.length&&h.closed||(a.thin?a.trackDistance?function(){for(b(),p(),f(1);s-u>a.wrapDistance||d<x.length;)b(),p(),f(2),o.bridge(h),h.leftExit0=h.rightExit0,h.leftExit2=h.rightExit2}():function(){for(;d<x.length;){if(0<d&&(h.inbound.x=h.outbound.x,h.inbound.y=h.outbound.y),d<x.length-1){h.outbound.x=x[d+1].x-x[d].x,h.outbound.y=x[d+1].y-x[d].y;var t=Math.sqrt(h.outbound.x*h.outbound.x+h.outbound.y*h.outbound.y);h.distance+=t,h.outbound.x/=t,h.outbound.y/=t}else h.outbound.x=h.inbound.x,h.outbound.y=h.inbound.y;0===d&&(h.inbound.x=h.outbound.x,h.inbound.y=h.outbound.y),h.currentVertex.x=x[d].x,h.currentVertex.y=x[d].y,h.prevNormal.x=-h.inbound.y,h.prevNormal.y=h.inbound.x,h.nextNormal.x=-h.outbound.y,h.nextNormal.y=h.outbound.x,h.leftExit2=0===d?(o.vertex(h),h.leftEntry0=h.entry0,h.leftEntry2=h.entry2,h.leftExit0=h.exit0,h.exit2):(o.vertex(h),h.rightEntry0=h.entry0,h.rightEntry2=h.entry2,h.rightExit0=h.exit0,h.rightExit2=h.exit2,o.bridge(h),h.leftExit0=h.rightExit0,h.rightExit2),++d}}():a.enableOuterBisectorSplit||0<a.outerBisectorAutoSplitThreshold||a.enableInnerBisectorSplit||0<a.innerBisectorAutoSplitThreshold?(h.canSplit=!0,function(){for(b(),V(),h.splitInner=h.gapInner=h.splitOuter=h.gapOuter=!1,g(1),h.closure0=h.leftEntry0,h.closure1=h.leftEntry1,h.closure2=h.leftEntry2;s-u>a.wrapDistance||d<x.length-1||d<x.length&&(!h.closed||a.trackDistance);)b(),V(),h.splitInner=h.gapInner=h.splitOuter=h.gapOuter=!1,g(2),o.bridge(h),h.leftExit0=h.rightExit0,h.leftExit1=h.rightExit1,h.leftExit2=h.rightExit2;h.closed&&!a.trackDistance&&(h.rightEntry0=h.closure0,h.rightEntry1=h.closure1,h.rightEntry2=h.closure2,o.bridge(h),h.leftExit0=h.rightExit0,h.leftExit1=h.rightExit1,h.leftExit2=h.rightExit2)}()):function(){for(b(),V(),g(1),h.closure0=h.leftEntry0,h.closure1=h.leftEntry1,h.closure2=h.leftEntry2;s-u>a.wrapDistance||d<x.length-1||d<x.length&&(!h.closed||a.trackDistance);)b(),V(),g(2),o.bridge(h),h.leftExit0=h.rightExit0,h.leftExit1=h.rightExit1,h.leftExit2=h.rightExit2;h.closed&&!a.trackDistance&&(h.rightEntry0=h.closure0,h.rightEntry1=h.closure1,h.rightEntry2=h.closure2,o.bridge(h),h.leftExit0=h.rightExit0,h.leftExit1=h.rightExit1,h.leftExit2=h.rightExit2)}())},e.cleanup=function(){o=x=null},e.splitVertex=T;var o,s,u,l,c,y,a={},d=void 0,h=new i;function b(){if(l)return h.distance=0,h.isCap=h.isFirstVertex=h.isLastVertex=!1,void(l=!1);if(0===s)if(h.isFirstVertex=0===d,y=x[d],0===d){if(s=0,h.closed){h.inbound.x=y.x-x[x.length-2].x,h.inbound.y=y.y-x[x.length-2].y;var t=Math.sqrt(h.inbound.x*h.inbound.x+h.inbound.y*h.inbound.y);h.inbound.x/=t,h.inbound.y/=t}}else h.inbound.x=y.x-c.x,h.inbound.y=y.y-c.y,s=Math.sqrt(h.inbound.x*h.inbound.x+h.inbound.y*h.inbound.y),h.inbound.x/=s,h.inbound.y/=s;if(h.distance+s-u<=a.wrapDistance){if(d<x.length-1){h.outbound.x=x[d+1].x-y.x,h.outbound.y=x[d+1].y-y.y;var e=Math.sqrt(h.outbound.x*h.outbound.x+h.outbound.y*h.outbound.y);h.outbound.x/=e,h.outbound.y/=e}else if(h.closed){h.outbound.x=x[1].x-y.x,h.outbound.y=x[1].y-y.y;e=Math.sqrt(h.outbound.x*h.outbound.x+h.outbound.y*h.outbound.y);h.outbound.x/=e,h.outbound.y/=e}else h.outbound.x=h.inbound.x,h.outbound.y=h.inbound.y;return 0!==d||h.closed||(h.inbound.x=h.outbound.x,h.inbound.y=h.outbound.y),++d,h.isLastVertex=d===x.length,h.isCap=!h.closed&&(h.isFirstVertex||h.isLastVertex),h.distance+=s-u,u=s=0,l=h.distance+s-u===a.wrapDistance,h.currentVertex.x=y.x,h.currentVertex.y=y.y,c=y,void(y=null)}h.outbound.x=h.inbound.x,h.outbound.y=h.inbound.y,u+=a.wrapDistance-h.distance,h.distance=a.wrapDistance,l=!0;var r=u/s;h.currentVertex.x=(1-r)*c.x+r*y.x,h.currentVertex.y=(1-r)*c.y+r*y.y}function p(){h.prevNormal.x=-h.inbound.y,h.prevNormal.y=h.inbound.x,h.nextNormal.x=-h.outbound.y,h.nextNormal.y=h.outbound.x}function V(){p(),h.bisector.x=h.prevNormal.x+h.nextNormal.x,h.bisector.y=h.prevNormal.y+h.nextNormal.y;var t=Math.sqrt(h.bisector.x*h.bisector.x+h.bisector.y*h.bisector.y);if(t<.001)return h.bisector.x=void 0,h.bisector.y=void 0,h.cosine=0,void(h.sign=void 0);h.bisector.x/=t,h.bisector.y/=t,h.cosine=h.bisector.x*h.nextNormal.x+h.bisector.y*h.nextNormal.y,h.sign=0<=h.prevNormal.x*h.nextNormal.y-h.prevNormal.y*h.nextNormal.x?1:-1}function g(t){o.vertex(h),1===t?(h.leftEntry0=h.entry0,h.leftEntry1=h.entry1,h.leftEntry2=h.entry2,h.leftExit0=h.exit0,h.leftExit1=h.exit1,h.leftExit2=h.exit2):2===t&&(h.rightEntry0=h.entry0,h.rightEntry1=h.entry1,h.rightEntry2=h.entry2,h.rightExit0=h.exit0,h.rightExit1=h.exit1,h.rightExit2=h.exit2)}function f(t){o.vertex(h),1===t?(h.leftEntry0=h.entry0,h.leftEntry2=h.entry2,h.leftExit0=h.exit0,h.leftExit2=h.exit2):2===t&&(h.rightEntry0=h.entry0,h.rightEntry2=h.entry2,h.rightExit0=h.exit0,h.rightExit2=h.exit2)}var n=function(){function t(t,e){this.writeVertex=t,this.writeTriangle=e,this.capType=w.CapType.BUTT,this.joinType=w.JoinType.MITER,this.miterLimitCosine=r.getLimitCosine(2),this.roundLimitCosine=Math.cos(23*Math.PI/180),this.almostParallelCosine=.97,this.radsPerSlice=.8,this.textured=!1,this.joinOnUTurn=!1}return t.prototype.vertex=function(t){var e=this.joinType===w.JoinType.MITER?this.miterLimitCosine:this.roundLimitCosine,r=t.isCap&&this.capType!==w.CapType.BUTT,i=!1;t.cosine>this.almostParallelCosine?(t.exit0=t.entry0=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,t.bisector.x/t.cosine,t.bisector.y/t.cosine,0,-1,t.distance),t.exit2=t.entry2=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,-t.bisector.x/t.cosine,-t.bisector.y/t.cosine,0,1,t.distance)):t.cosine<1-this.almostParallelCosine?(i=!t.isCap&&this.joinOnUTurn,t.entry0=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,t.prevNormal.x,t.prevNormal.y,0,-1,t.distance),t.entry2=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,-t.prevNormal.x,-t.prevNormal.y,0,1,t.distance),t.exit0=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,t.nextNormal.x,t.nextNormal.y,0,-1,t.distance),t.exit2=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,-t.nextNormal.x,-t.nextNormal.y,0,1,t.distance)):t.canSplit?(T(),0<t.sign?(t.splitInner?(t.exit0=this.writeVertex(t.currentVertex.x,t.currentVertex.y,t.outbound.x,t.outbound.y,t.leftInner.x,t.leftInner.y,0,-1,t.distance),t.entry0=this.writeVertex(t.currentVertex.x,t.currentVertex.y,t.inbound.x,t.inbound.y,t.rightInner.x,t.rightInner.y,0,-1,t.distance)):t.exit0=t.entry0=this.writeVertex(t.currentVertex.x,t.currentVertex.y,t.inbound.x,t.inbound.y,t.bisector.x/t.cosine,t.bisector.y/t.cosine,0,-1,t.distance),t.cosine<e?(i=!t.isCap,t.entry2=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,-t.prevNormal.x,-t.prevNormal.y,0,1,t.distance),t.exit2=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,-t.nextNormal.x,-t.nextNormal.y,0,1,t.distance)):t.splitOuter?(i=i||t.gapOuter,t.entry2=this.writeVertex(t.currentVertex.x,t.currentVertex.y,t.inbound.x,t.inbound.y,-t.leftOuter.x,-t.leftOuter.y,0,1,t.distance),t.exit2=this.writeVertex(t.currentVertex.x,t.currentVertex.y,t.outbound.x,t.outbound.y,-t.rightOuter.x,-t.rightOuter.y,0,1,t.distance)):t.entry2=t.exit2=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,-t.bisector.x/t.cosine,-t.bisector.y/t.cosine,0,1,t.distance)):(t.splitInner?(t.exit2=this.writeVertex(t.currentVertex.x,t.currentVertex.y,t.outbound.x,t.outbound.y,-t.leftInner.x,-t.leftInner.y,0,1,t.distance),t.entry2=this.writeVertex(t.currentVertex.x,t.currentVertex.y,t.inbound.x,t.inbound.y,-t.rightInner.x,-t.rightInner.y,0,1,t.distance)):t.exit2=t.entry2=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,-t.bisector.x/t.cosine,-t.bisector.y/t.cosine,0,1,t.distance),t.cosine<e?(i=!t.isCap,t.entry0=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,t.prevNormal.x,t.prevNormal.y,0,-1,t.distance),t.exit0=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,t.nextNormal.x,t.nextNormal.y,0,-1,t.distance)):t.splitOuter?(i=i||t.gapOuter,t.entry0=this.writeVertex(t.currentVertex.x,t.currentVertex.y,t.inbound.x,t.inbound.y,t.leftOuter.x,t.leftOuter.y,0,-1,t.distance),t.exit0=this.writeVertex(t.currentVertex.x,t.currentVertex.y,t.outbound.x,t.outbound.y,t.rightOuter.x,t.rightOuter.y,0,-1,t.distance)):t.exit0=t.entry0=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,t.bisector.x/t.cosine,t.bisector.y/t.cosine,0,-1,t.distance))):0<t.sign?(t.exit0=t.entry0=this.writeVertex(t.currentVertex.x,t.currentVertex.y,t.inbound.x,t.inbound.y,t.bisector.x/t.cosine,t.bisector.y/t.cosine,0,-1,t.distance),t.cosine<e?(i=!t.isCap,t.entry2=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,-t.prevNormal.x,-t.prevNormal.y,0,1,t.distance),t.exit2=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,-t.nextNormal.x,-t.nextNormal.y,0,1,t.distance)):t.entry2=t.exit2=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,-t.bisector.x/t.cosine,-t.bisector.y/t.cosine,0,1,t.distance)):(t.exit2=t.entry2=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,-t.bisector.x/t.cosine,-t.bisector.y/t.cosine,0,1,t.distance),t.cosine<e?(i=!t.isCap,t.entry0=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,t.prevNormal.x,t.prevNormal.y,0,-1,t.distance),t.exit0=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,t.nextNormal.x,t.nextNormal.y,0,-1,t.distance)):t.exit0=t.entry0=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,t.bisector.x/t.cosine,t.bisector.y/t.cosine,0,-1,t.distance));var n,x=t.canSplit&&(t.splitInner||t.splitOuter);if(n=t.entry1=t.exit1=x||i||r?this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,0,0,0,0,t.distance):null,i&&this.joinType!==w.JoinType.ROUND)this.writeTriangle(n,0<t.sign?t.exit2:t.entry0,0<t.sign?t.entry2:t.exit0);else if(r&&this.capType===w.CapType.ROUND||i&&this.joinType===w.JoinType.ROUND){var o,s=void 0,u=void 0,l=void 0,c=void 0,y=void 0,a=void 0;if(t.isCap)a=(o=Math.PI)/(y=Math.ceil(o/this.radsPerSlice)),t.isFirstVertex?(s=t.prevNormal.x,u=t.prevNormal.y,l=t.entry0,c=t.entry2):t.isLastVertex&&(s=-t.nextNormal.x,u=-t.nextNormal.y,l=t.exit2,c=t.exit0);else a=(o=2*Math.acos(t.cosine))/(y=Math.ceil(o/this.radsPerSlice)),s=0<t.sign?-t.prevNormal.x:t.nextNormal.x,u=0<t.sign?-t.prevNormal.y:t.nextNormal.y,l=0<t.sign?t.entry2:t.exit0,c=0<t.sign?t.exit2:t.entry0;var d,h=Math.cos(a),b=Math.sin(a),p=b*s+h*u;s=h*s-b*u,u=p;for(var V=void 0,g=0;g<y;++g){if(d=V,g<y-1)if(t.isCap){var f=t.isFirstVertex?-1:1;V=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,s,u,f,0,t.distance)}else V=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,s,u,0,t.sign,t.distance);this.writeTriangle(0===g?l:d,n,g===y-1?c:V);var E=b*s+h*u;s=h*s-b*u,u=E}}else if(r&&this.capType===w.CapType.SQUARE){var v=t.isFirstVertex?1:-1,m=void 0,N=void 0;N=this.textured?(m=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,t.prevNormal.x-v*t.inbound.x,t.prevNormal.y-v*t.inbound.y,-v,-1,t.distance),this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,-t.prevNormal.x-v*t.inbound.x,-t.prevNormal.y-v*t.inbound.y,-v,1,t.distance)):(m=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,t.prevNormal.x-v*t.inbound.x,t.prevNormal.y-v*t.inbound.y,0,-1,t.distance),this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,-t.prevNormal.x-v*t.inbound.x,-t.prevNormal.y-v*t.inbound.y,0,1,t.distance)),0<v?(this.writeTriangle(n,t.entry2,N),this.writeTriangle(n,N,m),this.writeTriangle(n,m,t.entry0)):(this.writeTriangle(n,N,t.exit2),this.writeTriangle(n,m,N),this.writeTriangle(n,t.exit0,m))}},t.prototype.bridge=function(t){this.writeTriangle(t.leftExit0,t.rightEntry0,null!=t.leftExit1?t.leftExit1:t.leftExit2),this.writeTriangle(t.rightEntry0,null!=t.rightEntry1?t.rightEntry1:t.rightEntry2,null!=t.leftExit1?t.leftExit1:t.leftExit2),null!=t.leftExit1&&null!=t.rightEntry1?(this.writeTriangle(t.leftExit1,t.rightEntry1,t.leftExit2),this.writeTriangle(t.rightEntry1,t.rightEntry2,t.leftExit2)):null!=t.leftExit1?this.writeTriangle(t.leftExit1,t.rightEntry2,t.leftExit2):null!=t.rightEntry1&&this.writeTriangle(t.rightEntry1,t.rightEntry2,t.leftExit2)},t}();e.StandardTessellationCallbacks=n;var E=function(){function t(t,e){this.writeVertex=t,this.writeTriangle=e}return t.prototype.vertex=function(t){t.entry0=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,t.prevNormal.x,t.prevNormal.y,0,-1,t.distance),t.entry2=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,-t.prevNormal.x,-t.prevNormal.y,0,1,t.distance),t.exit0=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,t.nextNormal.x,t.nextNormal.y,0,-1,t.distance),t.exit2=this.writeVertex(t.currentVertex.x,t.currentVertex.y,0,0,-t.nextNormal.x,-t.nextNormal.y,0,1,t.distance)},t.prototype.bridge=function(t){this.writeTriangle(t.leftExit0,t.rightEntry0,t.leftExit2),this.writeTriangle(t.rightEntry0,t.rightEntry2,t.leftExit2)},t}();e.ThinTessellationCallbacks=E}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/webgl/definitions.js":
/*!*************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/webgl/definitions.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_,T){Object.defineProperty(T,"__esModule",{value:!0}),T.WEBGL_MAX_STOPS=8,T.WEBGL_MAX_INNER_STOPS=T.WEBGL_MAX_STOPS-2,T.NAN_MAGIC_NUMBER=1e-30,T.EXTRUDE_SCALE=64,T.PICTURE_FILL_COLOR=4294967295,T.TILE_SIZE=512,T.RASTER_TILE_SIZE=256,T.ANGLE_FACTOR_256=256/360,T.DEBUG_LABELS=!1,T.COLLISION_BUCKET_SIZE=128,T.DOT_DENSITY_MAX_FIELDS=8,T.COLLISION_MAX_ZOOM_DELTA=3,T.COLLISION_EARLY_REJECT_BUCKET_SIZE=16,T.COLLISION_BOX_PADDING=16,T.COLLISION_TILE_BOX_SIZE=T.TILE_SIZE/T.COLLISION_BUCKET_SIZE,T.COLLISION_PLACEMENT_PADDING=8,T.HEURISTIC_GLYPHS_PER_LINE=50,T.HEURISTIC_GLYPHS_PER_FEATURE=10,T.GLYPH_SIZE=24,T.TEXT_LINE_HEIGHT=1.2*T.GLYPH_SIZE,T.TEXT_MAX_WIDTH=10*T.GLYPH_SIZE,T.TEXT_SPACING=0,T.AVERAGE_GLYPH_MOSAIC_ITEM={metrics:{width:15,height:17,left:0,top:-7,advance:14}},T.ATTRIBUTE_STORE_TEXTURE_SIZE=1024,T.TEXTURE_BINDING_SPRITE_ATLAS=0,T.TEXTURE_BINDING_GLYPH_ATLAS=0,T.TEXTURE_BINDING_BITMAP=0,T.TEXTURE_BINDING_ATTRIBUTE_DATA_0=1,T.TEXTURE_BINDING_ATTRIBUTE_DATA_1=2,T.TEXTURE_BINDING_ATTRIBUTE_DATA_2=3,T.TEXTURE_BINDING_ATTRIBUTE_DATA_3=4,T.TEXTURE_BINDING_HIGHLIGHT_0=5,T.TEXTURE_BINDING_HIGHLIGHT_1=6,T.TEXTURE_BINDING_RENDERER_0=5,T.TEXTURE_BINDING_RENDERER_1=6,T.ATTRIBUTE_DATA_FILTER_FLAGS=0,T.ATTRIBUTE_DATA_ANIMATION=1,T.ATTRIBUTE_DATA_VV=2,T.ATTRIBUTE_DATA_DD0=3,T.ATTRIBUTE_DATA_DD1=3,T.MAX_FILTERS=2,T.HIGHLIGHT_FLAG=1,T.FILTER_FLAG_0=2,T.EFFECT_FLAG_0=4,T.THIN_LINE_THRESHOLD=2.5,T.HITTEST_SEARCH_SIZE=24,T.MAX_ANIMATION_TIME_MS=2e3,T.VTL_TEXTURE_BINDING_UNIT_SPRITES=5,T.VTL_TEXTURE_BINDING_UNIT_GLYPHS=6,T.VTL_HIGH_RES_CUTOFF=1.15,T.MAX_GPU_UPLOADS_PER_FRAME=2}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/webgl/mesh/templates/util.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/webgl/mesh/templates/util.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(n,t){function e(n,t){return Math.sqrt(n*n+t*t)}Object.defineProperty(t,"__esModule",{value:!0}),t.sub=function(n,t,e){return n[0]=t[0]-e[0],n[1]=t[1]-e[1],n},t.len=e,t.normalize=function(n){var t=e(n[0],n[1]);n[0]/=t,n[1]/=t},t.dist=function(n,t){return e(n[0]-t[0],n[1]-t[1])},t.isFunction=function(n){return"function"==typeof n},t.getLimitCosine=function(n){return 1/Math.max(n,1)}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/dojo/Stateful.js":
/*!***************************************!*\
  !*** ./node_modules/dojo/Stateful.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./_base/declare */ "./node_modules/dojo/_base/declare.js"), __webpack_require__(/*! ./_base/lang */ "./node_modules/dojo/_base/lang.js"), __webpack_require__(/*! ./_base/array */ "./node_modules/dojo/_base/array.js"), __webpack_require__(/*! ./when */ "./node_modules/dojo/when.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(declare, lang, array, when){
	// module:
	//		dojo/Stateful

return declare("dojo.Stateful", null, {
	// summary:
	//		Base class for objects that provide named properties with optional getter/setter
	//		control and the ability to watch for property changes
	//
	//		The class also provides the functionality to auto-magically manage getters
	//		and setters for object attributes/properties.
	//		
	//		Getters and Setters should follow the format of _xxxGetter or _xxxSetter where 
	//		the xxx is a name of the attribute to handle.  So an attribute of "foo" 
	//		would have a custom getter of _fooGetter and a custom setter of _fooSetter.
	//
	// example:
	//	|	require(["dojo/Stateful", function(Stateful) {
	//	|		var obj = new Stateful();
	//	|		obj.watch("foo", function(){
	//	|			console.log("foo changed to " + this.get("foo"));
	//	|		});
	//	|		obj.set("foo","bar");
	//	|	});

	// _attrPairNames: Hash
	//		Used across all instances a hash to cache attribute names and their getter 
	//		and setter names.
	_attrPairNames: {},

	_getAttrNames: function(name){
		// summary:
		//		Helper function for get() and set().
		//		Caches attribute name values so we don't do the string ops every time.
		// tags:
		//		private

		var apn = this._attrPairNames;
		if(apn[name]){ return apn[name]; }
		return (apn[name] = {
			s: "_" + name + "Setter",
			g: "_" + name + "Getter"
		});
	},

	postscript: function(/*Object?*/ params){
		// Automatic setting of params during construction
		if (params){ this.set(params); }
	},

	_get: function(name, names){
		// summary:
		//		Private function that does a get based off a hash of names
		// names:
		//		Hash of names of custom attributes
		return typeof this[names.g] === "function" ? this[names.g]() : this[name];
	},
	get: function(/*String*/name){
		// summary:
		//		Get a property on a Stateful instance.
		// name:
		//		The property to get.
		// returns:
		//		The property value on this Stateful instance.
		// description:
		//		Get a named property on a Stateful object. The property may
		//		potentially be retrieved via a getter method in subclasses. In the base class
		//		this just retrieves the object's property.
		// example:
		//	|	require(["dojo/Stateful", function(Stateful) {
		//	|		var stateful = new Stateful({foo: 3});
		//	|		stateful.get("foo") // returns 3
		//	|		stateful.foo // returns 3
		//	|	});

		return this._get(name, this._getAttrNames(name)); //Any
	},
	set: function(/*String*/name, /*Object*/value){
		// summary:
		//		Set a property on a Stateful instance
		// name:
		//		The property to set.
		// value:
		//		The value to set in the property.
		// returns:
		//		The function returns this dojo.Stateful instance.
		// description:
		//		Sets named properties on a stateful object and notifies any watchers of
		//		the property. A programmatic setter may be defined in subclasses.
		// example:
		//	|	require(["dojo/Stateful", function(Stateful) {
		//	|		var stateful = new Stateful();
		//	|		stateful.watch(function(name, oldValue, value){
		//	|			// this will be called on the set below
		//	|		}
		//	|		stateful.set(foo, 5);
		//	set() may also be called with a hash of name/value pairs, ex:
		//	|		stateful.set({
		//	|			foo: "Howdy",
		//	|			bar: 3
		//	|		});
		//	|	});
		//	This is equivalent to calling set(foo, "Howdy") and set(bar, 3)

		// If an object is used, iterate through object
		if(typeof name === "object"){
			for(var x in name){
				if(name.hasOwnProperty(x) && x !="_watchCallbacks"){
					this.set(x, name[x]);
				}
			}
			return this;
		}

		var names = this._getAttrNames(name),
			oldValue = this._get(name, names),
			setter = this[names.s],
			result;
		if(typeof setter === "function"){
			// use the explicit setter
			result = setter.apply(this, Array.prototype.slice.call(arguments, 1));
		}else{
			// no setter so set attribute directly
			this[name] = value;
		}
		if(this._watchCallbacks){
			var self = this;
			// If setter returned a promise, wait for it to complete, otherwise call watches immediately
			when(result, function(){
				self._watchCallbacks(name, oldValue, value);
			});
		}
		return this; // dojo/Stateful
	},
	_changeAttrValue: function(name, value){
		// summary:
		//		Internal helper for directly changing an attribute value.
		//
		// name: String
		//		The property to set.
		// value: Mixed
		//		The value to set in the property.
		//
		// description:
		//		Directly change the value of an attribute on an object, bypassing any 
		//		accessor setter.  Also handles the calling of watch and emitting events. 
		//		It is designed to be used by descendant class when there are two values 
		//		of attributes that are linked, but calling .set() is not appropriate.

		var oldValue = this.get(name);
		this[name] = value;
		if(this._watchCallbacks){
			this._watchCallbacks(name, oldValue, value);
		}
		return this; // dojo/Stateful
	},
	watch: function(/*String?*/name, /*Function*/callback){
		// summary:
		//		Watches a property for changes
		// name:
		//		Indicates the property to watch. This is optional (the callback may be the
		//		only parameter), and if omitted, all the properties will be watched
		// returns:
		//		An object handle for the watch. The unwatch method of this object
		//		can be used to discontinue watching this property:
		//		|	var watchHandle = obj.watch("foo", callback);
		//		|	watchHandle.unwatch(); // callback won't be called now
		// callback:
		//		The function to execute when the property changes. This will be called after
		//		the property has been changed. The callback will be called with the |this|
		//		set to the instance, the first argument as the name of the property, the
		//		second argument as the old value and the third argument as the new value.

		var callbacks = this._watchCallbacks;
		if(!callbacks){
			var self = this;
			callbacks = this._watchCallbacks = function(name, oldValue, value, ignoreCatchall){
				var notify = function(propertyCallbacks){
					if(propertyCallbacks){
						propertyCallbacks = propertyCallbacks.slice();
						for(var i = 0, l = propertyCallbacks.length; i < l; i++){
							propertyCallbacks[i].call(self, name, oldValue, value);
						}
					}
				};
				notify(callbacks['_' + name]);
				if(!ignoreCatchall){
					notify(callbacks["*"]); // the catch-all
				}
			}; // we use a function instead of an object so it will be ignored by JSON conversion
		}
		if(!callback && typeof name === "function"){
			callback = name;
			name = "*";
		}else{
			// prepend with dash to prevent name conflicts with function (like "name" property)
			name = '_' + name;
		}
		var propertyCallbacks = callbacks[name];
		if(typeof propertyCallbacks !== "object"){
			propertyCallbacks = callbacks[name] = [];
		}
		propertyCallbacks.push(callback);

		// TODO: Remove unwatch in 2.0
		var handle = {};
		handle.unwatch = handle.remove = function(){
			var index = array.indexOf(propertyCallbacks, callback);
			if(index > -1){
				propertyCallbacks.splice(index, 1);
			}
		};
		return handle; //Object
	}

});

}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/dojox/string/BidiEngine.js":
/*!*************************************************!*\
  !*** ./node_modules/dojox/string/BidiEngine.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! dojo/_base/lang */ "./node_modules/dojo/_base/lang.js"), __webpack_require__(/*! dojo/_base/declare */ "./node_modules/dojo/_base/declare.js"), __webpack_require__(/*! dojo/Stateful */ "./node_modules/dojo/Stateful.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(lang,declare,Stateful) {
	lang.getObject("string", true, dojox);

	var BidiEngine = declare("dojox.string.BidiEngine", Stateful, {
		// summary:
		//		This class provides a bidi transformation engine, i.e.
		//		functions for reordering and shaping bidi text.
		// description:
		//		Bidi stands for support for languages with a bidirectional script.
		//
		//		Usually Unicode Bidi Algorithm used by OS platform (and web browsers) is capable of properly
		//		transforming Bidi text and as a result it is adequately displayed on the screen.
		//		However, in some situations, Unicode Bidi Algorithm is not invoked or is not properly applied.
		//		This may occur in situation in which software responsible for rendering the text is not leveraging
		//		Unicode Bidi Algorithm implemented by OS (e.g. GFX renderers).
		//
		//		Bidi engine provided in this class implements Unicode Bidi Algorithm as specified at
		//		http://www.unicode.org/reports/tr9/.
		//
		//		For more information on basic Bidi concepts please read
		//		"Bidirectional script support - A primer" available from
		//		http://www.ibm.com/developerworks/websphere/library/techarticles/bidi/bidigen.html.
		//
		//		As of February 2011, Bidi engine has following limitations:
		//
		//		1. No support for following numeric shaping options:
		//			- H - Hindi,
		//			- C - Contextual,
		//			- N - Nominal.
		//		2. No support for following shaping options:
		//			- I - Initial shaping,
		//			- M - Middle shaping,
		//			- F - Final shaping,
		//			- B - Isolated shaping.
		//		3. No support for LRE/RLE/LRO/RLO/PDF (they are handled like neutrals).
		//		4. No support for Windows compatibility.
		//		5. No support for  insert/remove marks.
		//		6. No support for code pages.
		//

		// Input Bidi layout in which inputText is passed to the function.
		inputFormat: "ILYNN",

		// Output Bidi layout to which inputText should be transformed.
		outputFormat: "VLNNN",

		// Array, containing positions of each character from the source text in the resulting text.
		sourceToTarget: [],

		// Array, containing positions of each character from the resulting text in the source text.
		targetToSource: [],

		// Array, containing bidi level of each character from the source text
		levels: [],

		bidiTransform: function (/*String*/text, /*String*/formatIn, /*String*/formatOut) {
			// summary:
			//		Central public API for Bidi engine. Transforms the text according to formatIn, formatOut
			//		parameters. If formatIn or formatOut parametrs are not valid throws an exception.
			// inputText:
			//		Input text subject to application of Bidi transformation.
			// formatIn:
			//		Input Bidi layout in which inputText is passed to the function.
			// formatOut:
			//		Output Bidi layout to which inputText should be transformed.
			// description:
			//		Both formatIn and formatOut parameters are 5 letters long strings.
			//		For example - "ILYNN". Each letter is associated with specific attribute of Bidi layout.
			//		Possible and default values for each one of the letters are provided below:
			//
			//		First letter:
			//
			//		- Letter position/index:
			//			1
			//		- Letter meaning:
			//			Ordering Schema.
			//		- Possible values:
			//			- I - Implicit (Logical).
			//			- V - Visual.
			//		- Default value:
			//			I
			//
			//		Second letter:
			//
			//		- Letter position/index:
			//			2
			//		- Letter meaning:
			//			Orientation.
			//		- Possible values:
			//			- L - Left To Right.
			//			- R - Right To Left.
			//			- C - Contextual Left to Right.
			//			- D - Contextual Right to Left.
			//		- Default value:
			//			L
			//
			//		Third letter:
			//
			//		- Letter position/index:
			//			3
			//		- Letter meaning:
			//			Symmetric Swapping.
			//		- Possible values:
			//			- Y - Symmetric swapping is on.
			//			- N - Symmetric swapping is off.
			//		- Default value:
			//			Y
			//
			//		Fourth letter:
			//
			//		- Letter position/index:
			//			4
			//		- Letter meaning:
			//			Shaping.
			//		- Possible values:
			//			- S - Text is shaped.
			//			- N - Text is not shaped.
			//		- Default value:
			//			N
			//
			//		Fifth letter:
			//
			//		- Letter position/index:
			//			5
			//		- Letter meaning:
			//			Numeric Shaping.
			//		- Possible values:
			//			- N - Nominal.
			//		- Default value:
			//			N
			//
			//		The output of this function is original text (passed via first argument) transformed from
			//		input Bidi layout (second argument) to output Bidi layout (last argument).
			//
			//		Sample call:
			//	|	mytext = bidiTransform("HELLO WORLD", "ILYNN", "VLYNN");
			//		In this case, "HELLO WORLD" text is transformed from Logical - LTR to Visual - LTR Bidi layout
			//		with default values for symmetric swapping (Yes), shaping (Not shaped) and numeric shaping
			//		(Nominal).
			// returns: String
			//		Original text transformed from input Bidi layout (second argument)
			//		to output Bidi layout (last argument).
			//		Throws an exception if the bidi layout strings are not valid.
			// tags:
			//		public

			this.sourceToTarget = [];
			this.targetToSource = [];
			if (!text) {
				return "";
			}
			initMaps(this.sourceToTarget, this.targetToSource, text.length);
			if (!this.checkParameters(formatIn, formatOut)) {
				return text;
			}

			formatIn = this.inputFormat;
			formatOut = this.outputFormat;
			var result = text;
			var bdx = BDX;
			var orientIn = getOrientation(formatIn.charAt(1)),
				orientOut = getOrientation(formatOut.charAt(1)),
				osIn = (formatIn.charAt(0) === "I") ? "L" : formatIn.charAt(0),
				osOut = (formatOut.charAt(0) === "I") ? "L" : formatOut.charAt(0),
				inFormat = osIn + orientIn,
				outFormat = osOut + orientOut,
				swap = formatIn.charAt(2) + formatOut.charAt(2);

			bdx.defInFormat = inFormat;
			bdx.defOutFormat = outFormat;
			bdx.defSwap = swap;

			var stage1Text = doBidiReorder(text, inFormat, outFormat, swap, bdx),
				isRtl = false;

			if (formatOut.charAt(1) === "R") {
				isRtl = true;
			} else if (formatOut.charAt(1) === "C" || formatOut.charAt(1) === "D") {
				isRtl = this.checkContextual(stage1Text);
			}

			this.sourceToTarget = stMap;
			this.targetToSource = reverseMap(this.sourceToTarget);
			tsMap = this.targetToSource;

			if (formatIn.charAt(3) === formatOut.charAt(3)) {
				result = stage1Text;
			} else if (formatOut.charAt(3) === "S") {
				result = shape(isRtl, stage1Text, true);
			} else {  //formatOut.charAt(3) === "N"
				result = deshape(stage1Text, isRtl, true);
			}
			this.sourceToTarget = stMap;
			this.targetToSource = tsMap;
			this.levels = lvMap;
			return result;
		},

		_inputFormatSetter: function (format) {
			if (!validFormat.test(format)) {
				throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");
			}
			this.inputFormat = format;
		},

		_outputFormatSetter: function (format) {
			if (!validFormat.test(format)) {
				throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");
			}
			this.outputFormat = format;
		},

		checkParameters: function (/*String*/formatIn, /*String*/formatOut) {
			// summary:
			//		Checks layout parameters.
			// formatIn:
			//		Input Bidi layout in which inputText is passed to the function.
			// formatOut:
			//		Output Bidi layout to which inputText should be transformed.
			// description:
			//		Checks, that layout parameters are different and contain allowed values.
			//		Allowed values for format string are:
			//			- 1st letter: I, V
			//			- 2nd letter: L, R, C, D
			//			- 3rd letter: Y, N
			//			- 4th letter: S, N
			//			- 5th letter: N
			// returns: /*Boolean*/
			//		true - if layout parameters are valid.
			//		false - otherwise.
			// tags:
			//		private

			if (!formatIn) {
				formatIn = this.inputFormat;
			} else {
				this.set("inputFormat", formatIn);
			}
			if (!formatOut) {
				formatOut = this.outputFormat;
			} else {
				this.set("outputFormat", formatOut);
			}
			if (formatIn === formatOut) {
				return false;
			}
			return true;
		},

		checkContextual: function (/*String*/text) {
			// summary:
			//		Determine the base direction of a bidi text according
			//		to its first strong directional character.
			// text:
			//		The text to check.
			// returns: /*String*/
			//		"ltr" or "rtl" according to the first strong character.
			//		If there is no strong character, returns the value of the
			//		document dir property.
			// tags:
			//		public
			var dir = firstStrongDir(text);
			if (dir !== "ltr" && dir !== "rtl") {
				try {
					dir = document.dir.toLowerCase();
				} catch (e) {
				}
				if (dir !== "ltr" && dir !== "rtl") {
					dir = "ltr";
				}
			}
			return dir;
		},

		hasBidiChar: function (/*String*/text) {
			// summary:
			//		Return true if text contains RTL directed character.
			// text:
			//		The source string.
			// description:
			//		Searches for RTL directed character.
			//		Returns true if found, else returns false.
			// returns: /*Boolean*/
			//		true - if text has a RTL directed character.
			//		false - otherwise.
			// tags:
			//		public

		    return bidiChars.test(text);
		}
	});

	function doBidiReorder(/*String*/text, /*String*/inFormat,
				/*String*/outFormat, /*String*/swap, /*Object*/bdx) {
		// summary:
		//		Reorder the source text according to the bidi attributes
		//		of source and result.
		// text:
		//		The text to reorder.
		// inFormat:
		//		Ordering scheme and base direction of the source text.
		//		Can be "LLTR", "LRTL", "LCLR", "LCRL", "VLTR", "VRTL",
		//		"VCLR", "VCRL".
		//		The first letter is "L" for logical ordering scheme,
		//		"V" for visual ordering scheme.
		//		The other letters specify the base direction.
		//		"CLR" means contextual direction defaulting to LTR if
		//		there is no strong letter.
		//		"CRL" means contextual direction defaulting to RTL if
		//		there is no strong letter.
		//		The initial value is "LLTR", if none, the initial value is used.
		// outFormat:
		//		Required ordering scheme and base direction of the
		//		result. Has the same format as inFormat.
		//		If none, the initial value "VLTR" is used.
		// swap:
		//		Symmetric swapping attributes of source and result.
		//		The allowed values can be "YN", "NY", "YY" and "NN".
		//		The first letter reflects the symmetric swapping attribute
		//		of the source, the second letter that of the result.
		// bdx: Object
		//		Used for intermediate data storage
		// returns:
		//		Text reordered according to source and result attributes.

		var params = prepareReorderingParameters(text, {inFormat: inFormat, outFormat: outFormat, swap: swap}, bdx);
		if (params.inFormat === params.outFormat) {
			return text;
		}
		inFormat = params.inFormat;
		outFormat = params.outFormat;
		swap = params.swap;
		var inOrdering = inFormat.substring(0, 1),
		inOrientation = inFormat.substring(1, 4),
		outOrdering = outFormat.substring(0, 1),
		outOrientation = outFormat.substring(1, 4);
		bdx.inFormat = inFormat;
		bdx.outFormat = outFormat;
		bdx.swap = swap;
		if ((inOrdering === "L") && (outFormat === "VLTR")) { //core cases
			//cases: LLTR->VLTR, LRTL->VLTR
			if (inOrientation === "LTR") {
				bdx.dir = LTR;
				return doReorder(text, bdx);
			}
			if (inOrientation === "RTL") {
				bdx.dir = RTL;
				return doReorder(text, bdx);
			}
		}
		if ((inOrdering === "V") && (outOrdering === "V")) {
			//inOrientation != outOrientation
			//cases: VRTL->VLTR, VLTR->VRTL
			bdx.dir = inOrientation === "RTL"? RTL : LTR;
			return invertStr(text, bdx);
		}
		if ((inOrdering === "L") && (outFormat === "VRTL")) {
			//cases: LLTR->VRTL, LRTL->VRTL
			if (inOrientation === "LTR") {
				bdx.dir = LTR;
				text = doReorder(text, bdx);
			} else {
				//inOrientation == RTL
				bdx.dir = RTL;
				text = doReorder(text, bdx);
			}
			return invertStr(text);
		}
		if ((inFormat === "VLTR") && (outFormat === "LLTR")) {
			//case: VLTR->LLTR
			bdx.dir = LTR;
			return doReorder(text, bdx);
		}
		if ((inOrdering === "V") && (outOrdering === "L") && (inOrientation !== outOrientation)) {
			//cases: VLTR->LRTL, VRTL->LLTR
			text = invertStr(text);
			return (inOrientation === "RTL") ? doBidiReorder(text, "LLTR", "VLTR", swap, bdx) :
												doBidiReorder(text, "LRTL", "VRTL", swap, bdx);
		}
		if ((inFormat === "VRTL") && (outFormat === "LRTL")) {
			//case VRTL->LRTL
			return doBidiReorder(text, "LRTL", "VRTL", swap, bdx);
		}
		if ((inOrdering === "L") && (outOrdering === "L")) {
			//inOrientation != outOrientation
			//cases: LRTL->LLTR, LLTR->LRTL
			var saveSwap = bdx.swap;
			bdx.swap = saveSwap.substr(0, 1) + "N";
			if (inOrientation === "RTL") {
				//LRTL->LLTR
				bdx.dir = RTL;
				text = doReorder(text, bdx);
				bdx.swap = "N" + saveSwap.substr(1, 2);
				bdx.dir = LTR;
				text = doReorder(text, bdx);
			} else { //LLTR->LRTL
				bdx.dir = LTR;
				text = doReorder(text, bdx);
				bdx.swap = "N" + saveSwap.substr(1, 2);
				text = doBidiReorder(text, "VLTR", "LRTL", bdx.swap, bdx);
			}
			return text;
		}
	}

	function prepareReorderingParameters(/*String*/text, /*Object*/params, /*Object*/bdx) {
		// summary:
		//		Prepare reordering parameters
		// text:
		//		The text to reorder.
		// params:
		//      Object, containing reordering parameters:
		//         - inFormat: Ordering scheme and base direction of the source text.
		//         - outFormat: Required ordering scheme and base direction of the result.
		//         - swap: Symmetric swapping attributes of source and result.
		// bdx: Object
		//		Used for intermediate data storage
		// tags:
		//		private

		if (params.inFormat === undefined) {
			params.inFormat = bdx.defInFormat;
		}
		if (params.outFormat === undefined) {
			params.outFormat = bdx.defOutFormat;
		}
		if (params.swap === undefined) {
			params.swap = bdx.defSwap;
		}
		if (params.inFormat === params.outFormat) {
			return params;
		}
		var dir, inOrdering = params.inFormat.substring(0, 1),
		inOrientation = params.inFormat.substring(1, 4),
		outOrdering = params.outFormat.substring(0, 1),
		outOrientation = params.outFormat.substring(1, 4);
		if (inOrientation.charAt(0) === "C") {
			dir = firstStrongDir(text);
			if (dir === "ltr" || dir === "rtl") {
				inOrientation = dir.toUpperCase();
			} else {
				inOrientation = params.inFormat.charAt(2) === "L" ? "LTR" : "RTL";
			}
			params.inFormat = inOrdering + inOrientation;
		}
		if (outOrientation.charAt(0) === "C") {
			dir = firstStrongDir(text);
			if (dir === "rtl") {
				outOrientation = "RTL";
			} else if (dir === "ltr") {
				dir = lastStrongDir(text);
				outOrientation = dir.toUpperCase();
			} else {
				outOrientation = params.outFormat.charAt(2) === "L" ? "LTR" : "RTL";
			}
			params.outFormat = outOrdering + outOrientation;
		}
		return params;
	}

	function shape(/*boolean*/rtl, /*String*/text, /*boolean*/compress) {
		// summary:
		//		Shape the source text.
		// rtl:
		//		Flag indicating if the text is in RTL direction (logical
		//		direction for Arabic words).
		// text:
		//		The text to shape.
		// compress:
		//		A flag indicates to insert extra space after the lam alef compression
		//		to preserve the buffer size or not insert an extra space which will lead
		//		to decrease the buffer size. This option can be:
		//
		//		- true (default) to not insert extra space after compressing Lam+Alef into one character Lamalef
		//		- false to insert an extra space after compressed Lamalef to preserve the buffer size
		// returns:
		//		text shaped.
		// tags:
		//		private.

		if (text.length === 0) {
			return;
		}
		if (rtl === undefined) {
			rtl = true;
		}
		if (compress === undefined) {
			compress = true;
		}
		text = String(text);

		var str06 = text.split(""),
			Ix = 0,
			step = +1,
			nIEnd = str06.length;
		if (!rtl) {
			Ix = str06.length - 1;
			step = -1;
			nIEnd = 1;
		}
		var compressArray = doShape(str06, Ix, step, nIEnd, compress);
		var outBuf = "";
		for (var idx = 0; idx < str06.length; idx++) {
			if (!(compress && indexOf(compressArray, compressArray.length, idx) > -1)) {
				outBuf += str06[idx];
			} else {
				updateMap(tsMap, idx, !rtl, -1);
				stMap.splice(idx, 1);
			}
		}
		return outBuf;
	}

	function doShape(str06, Ix, step, nIEnd, compress) {
		// summary:
		//		Shape the source text.
		// str06:
		//		Array containing source text
		// Ix:
		//		Index of the first handled element
		// step:
		//		direction of the process
		// nIEnd:
		//		Index of the last handled element
		// compress:
		//		A flag indicates to insert extra space after the lam alef compression
		//		to preserve the buffer size or not insert an extra space which will lead
		//		to decrease the buffer size.
		// returns:
		//		Array, contained shaped text.
		// tags:
		//		private.

		var previousCursive = 0, compressArray = [], compressArrayIndx = 0;
		for (var index = Ix; index * step < nIEnd; index = index + step) {
			if (isArabicAlefbet(str06[index]) || isArabicDiacritics(str06[index])) {
				// Arabic letter Lam
				if (str06[index] === "\u0644" && isNextAlef(str06, (index + step), step, nIEnd)) {
					str06[index] = (previousCursive === 0) ?
							getLamAlefFE(str06[index + step], LamAlefInialTableFE) :
							getLamAlefFE(str06[index + step], LamAlefMedialTableFE);
					index += step;
					setAlefToSpace(str06, index, step, nIEnd);
					if (compress) {
						compressArray[compressArrayIndx] = index;
						compressArrayIndx++;
					}
					previousCursive = 0;
					continue;
				}
				var currentChr = str06[index];
				if (previousCursive === 1) {
					// if next is Arabic
					// Character is in medial form
					// else character is in final form
					str06[index] = (isNextArabic(str06, (index + step), step, nIEnd)) ?
						getMedialFormCharacterFE(str06[index]) : getFormCharacterFE(str06[index], FinalForm);
				} else {
					if (isNextArabic(str06, (index + step), step, nIEnd) === true) {
						//character is in Initial form
						str06[index] = getFormCharacterFE(str06[index], InitialForm);
					} else {
						str06[index] = getFormCharacterFE(str06[index], IsolatedForm);
					}
				}
				//exam if the current character is cursive
				if (!isArabicDiacritics(currentChr)) {
					previousCursive = 1;
				}
				if (isStandAlonCharacter(currentChr) === true) {
					previousCursive = 0;
				}
			} else {
				previousCursive = 0;
			}
		}
		return compressArray;
	}

	function firstStrongDir(/*String*/text) {
		// summary:
		//		Return the first strong character direction
		// text:
		//		The source string.
		// description:
		//		Searches for first "strong" character.
		//		Returns if strong character was found with the direction defined by this
		//		character, if no strong character was found returns an empty string.
		// returns: String
		//		"ltr" - if the first strong character is Latin.
		//		"rtl" - if the first strong character is RTL directed character.
		//		"" - if the strong character wasn't found.
		// tags:
		//		private

		var fdc = /[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(text);
		// if found return the direction that defined by the character
		return fdc ? (fdc[0] <= "z" ? "ltr" : "rtl") : "";
	}

	function lastStrongDir(text) {
		// summary:
		//		Return the last strong character direction
		// text:
		//		The source string.
		// description:
		//		Searches for first (from the end) "strong" character.
		//		Returns if strong character was found with the direction defined by this
		//		character, if no strong character was found returns an empty string.
		// tags:
		//		private
		var chars = text.split("");
		chars.reverse();
		return firstStrongDir(chars.join(""));
	}

	function deshape(/*String*/text, /*boolean*/rtl, /*boolean*/consumeNextSpace) {
		// summary:
		//		deshape the source text.
		// text:
		//		the text to be deshape.
		// rtl:
		//		flag indicating if the text is in RTL direction (logical
		//		direction for Arabic words).
		// consumeNextSpace:
		//		flag indicating whether to consume the space next to the
		//		the lam alef if there is a space followed the Lamalef character to preserve the buffer size.
		//		In case there is no space next to the lam alef the buffer size will be increased due to the
		//		expansion of the lam alef one character into lam+alef two characters
		// returns:
		//		text deshaped.
		if (text.length === 0) {
			return;
		}
		if (consumeNextSpace === undefined) {
			consumeNextSpace = true;
		}
		if (rtl === undefined) {
			rtl = true;
		}
		text = String(text);

		var outBuf = "", strFE = [];
		strFE = text.split("");
		for (var i = 0; i < text.length; i++) {
			var increase = false;
			if (strFE[i] >= "\uFE70" && strFE[i] < "\uFEFF") {
				var chNum = text.charCodeAt(i);
				if (strFE[i] >= "\uFEF5" && strFE[i] <= "\uFEFC") {
					//expand the LamAlef
					if (rtl) {
						//Lam + Alef
						if (i > 0 && consumeNextSpace && strFE[i - 1] === " ") {
							outBuf = outBuf.substring(0, outBuf.length - 1) + "\u0644";
						} else {
							outBuf += "\u0644";
							increase = true;
						}
						outBuf += AlefTable[(chNum - 65269) / 2];
					} else {
						outBuf += AlefTable[(chNum - 65269) / 2];
						outBuf += "\u0644";
						if (i + 1 < text.length && consumeNextSpace && strFE[i + 1] === " ") {
							i++;
						} else {
							increase = true;
						}
					}
					if (increase) {
						updateMap(tsMap, i, true, 1);
						stMap.splice(i, 0, stMap[i]);
					}
				} else {
					outBuf += FETo06Table[chNum - 65136];
				}
			} else {
				outBuf += strFE[i];
			}
		}
		return outBuf;
	}

	function doReorder(str, bdx) {
		// summary:
		//		Helper to the doBidiReorder. Manages the UBA.
		// str:
		//		the string to reorder.
		// bdx: Object
		//		Used for intermediate data storage
		// returns:
		//		text reordered according to source and result attributes.
		// tags:
		//		private
		var chars = str.split(""), levels = [];

		computeLevels(chars, levels, bdx);
		swapChars(chars, levels, bdx);
		invertLevel(2, chars, levels, bdx);
		invertLevel(1, chars, levels, bdx);
		lvMap = levels;
		return chars.join("");
	}

	function computeLevels(chars, levels, bdx) {
		var len = chars.length,
			impTab = bdx.dir ? impTabRtl : impTabLtr,
			prevState = null, newClass = null, newLevel = null, newState = 0,
			action = null, cond = null, condPos = -1, i = null, ix = null,
			types = [],
			classes = [];
		bdx.hiLevel = bdx.dir;
		bdx.lastArabic = false;
		bdx.hasUbatAl = false;
		bdx.hasUbatB = false;
		bdx.hasUbatS = false;
		for (i = 0; i < len; i++) {
			types[i] = getCharacterType(chars[i]);
		}
		for (ix = 0; ix < len; ix++) {
			prevState = newState;
			classes[ix] = newClass = getCharClass(chars, types, classes, ix, bdx);
			newState = impTab[prevState][newClass];
			action = newState & 0xF0;
			newState &= 0x0F;
			levels[ix] = newLevel = impTab[newState][ITIL];
			if (action > 0) {
				if (action === 0x10) {	// set conditional run to level 1
					for (i = condPos; i < ix; i++) {
						levels[i] = 1;
					}
					condPos = -1;
				} else {	// 0x20 confirm the conditional run
					condPos = -1;
				}
			}
			cond = impTab[newState][ITCOND];
			if (cond) {
				if (condPos === -1) {
					condPos = ix;
				}
			} else {	// unconditional level
				if (condPos > -1) {
					for (i = condPos; i < ix; i++) {
						levels[i] = newLevel;
					}
					condPos = -1;
				}
			}
			if (types[ix] === UBAT_B) {
				levels[ix] = 0;
			}
			bdx.hiLevel |= newLevel;
		}
		if (bdx.hasUbatS) {
			handleUbatS(types, levels, len, bdx);
		}
	}

	function handleUbatS(types, levels, len, bdx) {
		for (var i = 0; i < len; i++) {
			if (types[i] === UBAT_S) {
				levels[i] = bdx.dir;
				for (var j = i - 1; j >= 0; j--) {
					if (types[j] === UBAT_WS) {
						levels[j] = bdx.dir;
					} else {
						break;
					}
				}
			}
		}
	}

	function swapChars(chars, levels, bdx) {
		// summary:
		//		Swap characters with symmetrical mirroring as all kinds of parenthesis.
		//		(When needed).
		// chars:
		//		The source string as Array of characters.
		// levels:
		//		An array (like hash) of flags for each character in the source string,
		//		that defines if swapping should be applied on the following character.
		// bdx: Object
		//		Used for intermediate data storage
		// tags:
		//		private

		if (bdx.hiLevel === 0 || bdx.swap.substr(0, 1) === bdx.swap.substr(1, 2)) {
			return;
		}
		for (var i = 0; i < chars.length; i++) {
			if (levels[i] === 1) {
				chars[i] = getMirror(chars[i]);
			}
		}
	}

	function getCharacterType(ch) {
		// summary:
		//		Return the type of the character.
		// ch:
		//		The character to be checked.

		// description:
		//		Check the type of the character according to MasterTable,
		//		type = LTR, RTL, neutral,Arabic-Indic digit etc.
		// tags:
		//		private
		var uc = ch.charCodeAt(0),
			hi = MasterTable[uc >> 8];
		return (hi < TBBASE) ? hi : UnicodeTable[hi - TBBASE][uc & 0xFF];
	}

	function invertStr(str, bdx) {
		// summary:
		//		Return the reversed string.
		// str:
		//		The string to be reversed.
		// description:
		//		Reverse the string str.
		// tags:
		//		private
		var chars = str.split("");
		if (bdx) {
			var levels = [];
			computeLevels(chars, levels, bdx);
			lvMap = levels;
		}
		chars.reverse();
		stMap.reverse();
		return chars.join("");
	}

	function indexOf(cArray, cLength, idx) {
		for (var i = 0; i < cLength; i++) {
			if (cArray[i] === idx) {
				return i;
			}
		}
		return -1;
	}

	function isArabicAlefbet(c) {
		for (var i = 0; i < ArabicAlefBetIntervalsBegine.length; i++) {
			if (c >= ArabicAlefBetIntervalsBegine[i] && c <= ArabicAlefBetIntervalsEnd[i]) {
				return true;
			}
		}
		return false;
	}

	function isNextArabic(str06, index, step, nIEnd) {
		while (((index) * step) < nIEnd && isArabicDiacritics(str06[index])) {
			index += step;
		}
		if (((index) * step) < nIEnd && isArabicAlefbet(str06[index])) {
			return true;
		}
		return false;
	}

	function isNextAlef(str06, index, step, nIEnd) {
		while (((index) * step) < nIEnd && isArabicDiacritics(str06[index])) {
			index += step;
		}
		var c = " ";
		if (((index) * step) < nIEnd) {
			c = str06[index];
		} else {
			return false;
		}
		for (var i = 0; i < AlefTable.length; i++) {
			if (AlefTable[i] === c) {
				return true;
			}
		}
		return false;
	}

	function invertLevel(lev, chars, levels, bdx) {
		if (bdx.hiLevel < lev) {
			return;
		}
		if (lev === 1 && bdx.dir === RTL && !bdx.hasUbatB) {
			chars.reverse();
			stMap.reverse();
			return;
		}
		var len = chars.length, start = 0, end, lo, hi, tmp;
		while (start < len) {
			if (levels[start] >= lev) {
				end = start + 1;
				while (end < len && levels[end] >= lev) {
					end++;
				}
				for (lo = start, hi = end - 1 ; lo < hi; lo++, hi--) {
					tmp = chars[lo];
					chars[lo] = chars[hi];
					chars[hi] = tmp;
					tmp = stMap[lo];
					stMap[lo] = stMap[hi];
					stMap[hi] = tmp;
				}
				start = end;
			}
			start++;
		}
	}

	function getCharClass(chars, types, classes, ix, bdx) {
		// summary:
		//		Return the class if ix character in chars.
		// chars:
		//		The source string as Array of characters.
		// types:
		//		Array of types, for each character in chars.
		// classes:
		//		Array of classes that already been solved.
		// ix:
		//		the index of checked character.
		// bdx: Object
		//		Used for intermediate data storage
		// tags:
		//		private
		var cType = types[ix],
			results = {
				UBAT_L : function () { bdx.lastArabic = false; return UBAT_L; },
				UBAT_R : function () { bdx.lastArabic = false; return UBAT_R; },
				UBAT_ON : function () { return UBAT_ON; },
				UBAT_AN : function () { return UBAT_AN; },
				UBAT_EN : function () { return bdx.lastArabic ? UBAT_AN : UBAT_EN; },
				UBAT_AL : function () { bdx.lastArabic = true; bdx.hasUbatAl = true; return UBAT_R; },
				UBAT_WS : function () { return UBAT_ON; },
				UBAT_CS : function () {
										var wType, nType;
										if (ix < 1 || (ix + 1) >= types.length ||
											((wType = classes[ix - 1]) !== UBAT_EN && wType !== UBAT_AN) ||
											((nType = types[ix + 1]) !== UBAT_EN && nType !== UBAT_AN)) {
											return UBAT_ON;
										}
										if (bdx.lastArabic) {
											nType = UBAT_AN;
										}
										return nType === wType ? nType : UBAT_ON;
									},
				UBAT_ES : function () {
										var wType = ix > 0 ? classes[ix - 1] : UBAT_B;
										if (wType === UBAT_EN && (ix + 1) < types.length && types[ix + 1] === UBAT_EN) {
											return UBAT_EN;
										}
										return UBAT_ON;
									},
				UBAT_ET : function () {
										if (ix > 0 && classes[ix - 1] === UBAT_EN) {
											return UBAT_EN;
										}
										if (bdx.lastArabic) {
											return UBAT_ON;
										}
										var i = ix + 1,
											len = types.length;
										while (i < len && types[i] === UBAT_ET) {
											i++;
										}
										if (i < len && types[i] === UBAT_EN) {
											return UBAT_EN;
										}
										return UBAT_ON;
									},
				UBAT_NSM : function () {
										if (bdx.inFormat === "VLTR") {	// visual to implicit transformation
											var len = types.length,
												i = ix + 1;
											while (i < len && types[i] === UBAT_NSM) {
												i++;
											}
											if (i < len) {
												var c = chars[ix],
													rtlCandidate = (c >= 0x0591 && c <= 0x08FF) || c === 0xFB1E,
													wType = types[i];
												if (rtlCandidate && (wType === UBAT_R || wType === UBAT_AL)) {
													return UBAT_R;
												}
											}
										}
										if (ix < 1 || types[ix - 1] === UBAT_B) {
											return UBAT_ON;
										}
										return classes[ix - 1];
									},
				UBAT_B : function () { bdx.lastArabic = true; bdx.hasUbatB = true; return bdx.dir; },
				UBAT_S : function () { bdx.hasUbatS = true; return UBAT_ON; },
				UBAT_LRE : function () { bdx.lastArabic = false; return UBAT_ON; },
				UBAT_RLE : function () { bdx.lastArabic = false; return UBAT_ON; },
				UBAT_LRO : function () { bdx.lastArabic = false; return UBAT_ON; },
				UBAT_RLO : function () { bdx.lastArabic = false; return UBAT_ON; },
				UBAT_PDF : function () { bdx.lastArabic = false; return UBAT_ON; },
				UBAT_BN : function () { return UBAT_ON; }
			};
		return results[TYPES_NAMES[cType]]();
	}

	function getMirror(c) {
		// summary:
		//		Calculates the mirrored character of c
		// c:
		//		The character to be mirrored.
		// tags:
		//		private
		var mid, low = 0, high = SwapTable.length - 1;

		while (low <= high) {
			mid = Math.floor((low + high) / 2);
			if (c < SwapTable[mid][0]) {
				high = mid - 1;
			} else if (c > SwapTable[mid][0]) {
				low = mid + 1;
			} else {
				return SwapTable[mid][1];
			}
		}
		return c;
	}

	function isStandAlonCharacter(c) {
		for (var i = 0; i < StandAlonForm.length; i++) {
			if (StandAlonForm[i] === c) {
				return true;
			}
		}
		return false;
	}

	function getMedialFormCharacterFE(c) {
		for (var i = 0; i < BaseForm.length; i++) {
			if (c === BaseForm[i]) {
				return MedialForm[i];
			}
		}
		return c;
	}

	function getFormCharacterFE(/*char*/ c, /*char[]*/formArr) {
		for (var i = 0; i < BaseForm.length; i++) {
			if (c === BaseForm[i]) {
				return formArr[i];
			}
		}
		return c;
	}

	function isArabicDiacritics(c) {
		return	(c >= "\u064b" && c <= "\u0655") ? true : false;
	}

	function getOrientation(/*Char*/ oc) {
		if (oc === "L") {
			return "LTR";
		}
		if (oc === "R") {
			return "RTL";
		}
		if (oc === "C") {
			return "CLR";
		}
		if (oc === "D") {
			return "CRL";
		}
	}

	function setAlefToSpace(str06, index, step, nIEnd) {
		while (((index) * step) < nIEnd && isArabicDiacritics(str06[index])) {
			index += step;
		}
		if (((index) * step) < nIEnd) {
			str06[index] = " ";
			return true;
		}
		return false;
	}

	function getLamAlefFE(alef06, LamAlefForm) {
		for (var i = 0; i < AlefTable.length; i++) {
			if (alef06 === AlefTable[i]) {
				return LamAlefForm[i];
			}
		}
		return alef06;
	}

	function initMaps(map1, map2, length) {
		stMap = [];
		lvMap = [];
		for (var i = 0; i < length; i++) {
			map1[i] = i;
			map2[i] = i;
			stMap[i] = i;
		}
	}

	function reverseMap(sourceMap) {
		var map = new Array(sourceMap.length);
		for (var i = 0; i < sourceMap.length; i++) {
			map[sourceMap[i]] = i;
		}
		return map;
	}

	function updateMap(map, value, isGreater, update) {
		for (var i = 0; i < map.length; i++) {
			if (map[i] > value || (!isGreater && map[i] === value)) {
				map[i] += update;
			}
		}
	}

	var stMap = [];
	var tsMap = [];
	var lvMap = [];

	var	BDX = {
			dir: 0,
			defInFormat: "LLTR",
			defoutFormat: "VLTR",
			defSwap: "YN",
			inFormat: "LLTR",
			outFormat: "VLTR",
			swap: "YN",
			hiLevel: 0,
			lastArabic: false,
			hasUbatAl: false,
			hasBlockSep: false,
			hasSegSep: false
		};

	var ITIL = 5;

	var ITCOND = 6;

	var LTR = 0;

	var RTL = 1;

	var validFormat = /^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/;

	var bidiChars = /[\u0591-\u06ff\ufb1d-\ufefc]/;

	/****************************************************************************/
	/* Array in which directional characters are replaced by their symmetric.	*/
	/****************************************************************************/
	var SwapTable = [
		[ "\u0028", "\u0029" ],	/* Round brackets					*/
		[ "\u0029", "\u0028" ],
		[ "\u003C", "\u003E" ],	/* Less than/greater than			*/
		[ "\u003E", "\u003C" ],
		[ "\u005B", "\u005D" ],	/* Square brackets					*/
		[ "\u005D", "\u005B" ],
		[ "\u007B", "\u007D" ],	/* Curly brackets					*/
		[ "\u007D", "\u007B" ],
		[ "\u00AB", "\u00BB" ],	/* Double angle quotation marks		*/
		[ "\u00BB", "\u00AB" ],
		[ "\u2039", "\u203A" ],	/* single angle quotation mark		*/
		[ "\u203A", "\u2039" ],
		[ "\u207D", "\u207E" ],	/* Superscript parentheses			*/
		[ "\u207E", "\u207D" ],
		[ "\u208D", "\u208E" ],	/* Subscript parentheses			*/
		[ "\u208E", "\u208D" ],
		[ "\u2264", "\u2265" ],	/* Less/greater than or equal		*/
		[ "\u2265", "\u2264" ],
		[ "\u2329", "\u232A" ],	/* Angle brackets					*/
		[ "\u232A", "\u2329" ],
		[ "\uFE59", "\uFE5A" ],	/* Small round brackets				*/
		[ "\uFE5A", "\uFE59" ],
		[ "\uFE5B", "\uFE5C" ],	/* Small curly brackets				*/
		[ "\uFE5C", "\uFE5B" ],
		[ "\uFE5D", "\uFE5E" ],	/* Small tortoise shell brackets	*/
		[ "\uFE5E", "\uFE5D" ],
		[ "\uFE64", "\uFE65" ],	/* Small less than/greater than		*/
		[ "\uFE65", "\uFE64" ]
	];
	var AlefTable = ["\u0622", "\u0623", "\u0625", "\u0627"];

	var LamAlefInialTableFE = ["\ufef5", "\ufef7", "\ufef9", "\ufefb"];

	var LamAlefMedialTableFE = ["\ufef6", "\ufef8", "\ufefa", "\ufefc"];
	/**
	 * Arabic Characters in the base form
	 */
	var BaseForm = ["\u0627", "\u0628", "\u062A", "\u062B", "\u062C", "\u062D", "\u062E", "\u062F", "\u0630", "\u0631",
                    "\u0632", "\u0633", "\u0634", "\u0635", "\u0636", "\u0637", "\u0638", "\u0639", "\u063A", "\u0641",
                    "\u0642", "\u0643", "\u0644", "\u0645", "\u0646", "\u0647", "\u0648", "\u064A", "\u0625", "\u0623",
                    "\u0622", "\u0629", "\u0649", "\u0644", "\u0645", "\u0646", "\u0647", "\u0648", "\u064A", "\u0625",
                    "\u0623", "\u0622", "\u0629", "\u0649", "\u06CC", "\u0626", "\u0624"];

	/**
	 * Arabic shaped characters in Isolated form
	 */
	var IsolatedForm = ["\uFE8D", "\uFE8F", "\uFE95", "\uFE99", "\uFE9D", "\uFEA1", "\uFEA5", "\uFEA9", "\uFEAB",
                        "\uFEAD", "\uFEAF", "\uFEB1", "\uFEB5", "\uFEB9", "\uFEBD", "\uFEC1", "\uFEC5", "\uFEC9",
                        "\uFECD", "\uFED1", "\uFED5", "\uFED9", "\uFEDD", "\uFEE1", "\uFEE5", "\uFEE9", "\uFEED",
                        "\uFEF1", "\uFE87", "\uFE83", "\uFE81", "\uFE93", "\uFEEF", "\uFBFC", "\uFE89", "\uFE85",
                        "\uFE70", "\uFE72", "\uFE74", "\uFE76", "\uFE78", "\uFE7A", "\uFE7C", "\uFE7E", "\uFE80",
                        "\uFE89", "\uFE85"];

	/**
	 * Arabic shaped characters in Final form
	 */
	var FinalForm = ["\uFE8E", "\uFE90", "\uFE96", "\uFE9A", "\uFE9E", "\uFEA2", "\uFEA6", "\uFEAA", "\uFEAC", "\uFEAE",
                     "\uFEB0", "\uFEB2", "\uFEB6", "\uFEBA", "\uFEBE", "\uFEC2", "\uFEC6", "\uFECA", "\uFECE", "\uFED2",
                     "\uFED6", "\uFEDA", "\uFEDE", "\uFEE2", "\uFEE6", "\uFEEA", "\uFEEE", "\uFEF2", "\uFE88", "\uFE84",
                     "\uFE82", "\uFE94", "\uFEF0", "\uFBFD", "\uFE8A", "\uFE86", "\uFE70", "\uFE72", "\uFE74", "\uFE76",
                     "\uFE78", "\uFE7A", "\uFE7C", "\uFE7E", "\uFE80", "\uFE8A", "\uFE86"];

	/**
	 * Arabic shaped characters in Media form
	 */
	var MedialForm = ["\uFE8E", "\uFE92", "\uFE98", "\uFE9C", "\uFEA0", "\uFEA4", "\uFEA8", "\uFEAA", "\uFEAC",
                      "\uFEAE", "\uFEB0", "\uFEB4", "\uFEB8", "\uFEBC", "\uFEC0", "\uFEC4", "\uFEC8", "\uFECC",
                      "\uFED0", "\uFED4", "\uFED8", "\uFEDC", "\uFEE0", "\uFEE4", "\uFEE8", "\uFEEC", "\uFEEE",
                      "\uFEF4", "\uFE88", "\uFE84", "\uFE82", "\uFE94", "\uFEF0", "\uFBFF", "\uFE8C", "\uFE86",
                      "\uFE71", "\uFE72", "\uFE74", "\uFE77", "\uFE79", "\uFE7B", "\uFE7D", "\uFE7F", "\uFE80",
                      "\uFE8C", "\uFE86"];

	/**
	 * Arabic shaped characters in Initial form
	 */
	var InitialForm = ["\uFE8D", "\uFE91", "\uFE97", "\uFE9B", "\uFE9F", "\uFEA3", "\uFEA7", "\uFEA9", "\uFEAB",
                       "\uFEAD", "\uFEAF", "\uFEB3", "\uFEB7", "\uFEBB", "\uFEBF", "\uFEC3", "\uFEC7", "\uFECB",
                       "\uFECF", "\uFED3", "\uFED7", "\uFEDB", "\uFEDF", "\uFEE3", "\uFEE7", "\uFEEB", "\uFEED",
                       "\uFEF3", "\uFE87", "\uFE83", "\uFE81", "\uFE93", "\uFEEF", "\uFBFE", "\uFE8B", "\uFE85",
                       "\uFE70", "\uFE72", "\uFE74", "\uFE76", "\uFE78", "\uFE7A", "\uFE7C", "\uFE7E", "\uFE80",
                       "\uFE8B", "\uFE85"];

	/**
	 * Arabic characters that couldn't join to the next character
	 */
	var StandAlonForm = ["\u0621", "\u0622", "\u0623", "\u0624", "\u0625", "\u0627", "\u0629", "\u062F", "\u0630",
                         "\u0631", "\u0632", "\u0648", "\u0649"];

	var FETo06Table = ["\u064B", "\u064B", "\u064C", "\u061F", "\u064D", "\u061F", "\u064E", "\u064E", "\u064F",
                       "\u064F", "\u0650", "\u0650", "\u0651", "\u0651", "\u0652", "\u0652", "\u0621", "\u0622",
                       "\u0622", "\u0623", "\u0623", "\u0624", "\u0624", "\u0625", "\u0625", "\u0626", "\u0626",
                       "\u0626", "\u0626", "\u0627", "\u0627", "\u0628", "\u0628", "\u0628", "\u0628", "\u0629",
                       "\u0629", "\u062A", "\u062A", "\u062A", "\u062A", "\u062B", "\u062B", "\u062B", "\u062B",
                       "\u062C", "\u062C", "\u062C", "\u062c", "\u062D", "\u062D", "\u062D", "\u062D", "\u062E",
                       "\u062E", "\u062E", "\u062E", "\u062F", "\u062F", "\u0630", "\u0630", "\u0631", "\u0631",
                       "\u0632", "\u0632", "\u0633", "\u0633", "\u0633", "\u0633", "\u0634", "\u0634", "\u0634",
                       "\u0634", "\u0635", "\u0635", "\u0635", "\u0635", "\u0636", "\u0636", "\u0636", "\u0636",
                       "\u0637", "\u0637", "\u0637", "\u0637", "\u0638", "\u0638", "\u0638", "\u0638", "\u0639",
                       "\u0639", "\u0639", "\u0639", "\u063A", "\u063A", "\u063A", "\u063A", "\u0641", "\u0641",
                       "\u0641", "\u0641", "\u0642", "\u0642", "\u0642", "\u0642", "\u0643", "\u0643", "\u0643",
                       "\u0643", "\u0644", "\u0644", "\u0644", "\u0644", "\u0645", "\u0645", "\u0645", "\u0645",
                       "\u0646", "\u0646", "\u0646", "\u0646", "\u0647", "\u0647", "\u0647", "\u0647", "\u0648",
                       "\u0648", "\u0649", "\u0649", "\u064A", "\u064A", "\u064A", "\u064A", "\uFEF5", "\uFEF6",
                       "\uFEF7", "\uFEF8", "\uFEF9", "\uFEFA", "\uFEFB", "\uFEFC", "\u061F", "\u061F", "\u061F"];

	var ArabicAlefBetIntervalsBegine = ["\u0621", "\u0641"];

	var ArabicAlefBetIntervalsEnd = ["\u063A", "\u064a"];

	var	impTabLtr = [
	/*		L,		R,		EN,		AN,		N,		IL,		Cond */
		[	0,		3,		0,		1,		0,		0,		0	], /* 0 LTR text	*/
		[	0,		3,		0,		1,		2,		2,		0	], /* 1 LTR+AN		*/
		[	0,		3,		0,		0x11,	2,		0,		1	], /* 2 LTR+AN+N	*/
		[	0,		3,		5,		5,		4,		1,		0	], /* 3 RTL text	*/
		[	0,		3,		0x15,	0x15,	4,		0,		1	], /* 4 RTL cont	*/
		[	0,		3,		5,		5,		4,		2,		0	]  /* 5 RTL+EN/AN	*/
	];
	var impTabRtl = [
	/*		L,		R,		EN,		AN,		N,		IL,		Cond */
		[	2,		0,		1,		1,		0,		1,		0	], /* 0 RTL text	*/
		[	2,		0,		1,		1,		0,		2,		0	], /* 1 RTL+EN/AN	*/
		[	2,		0,		2,		1,		3,		2,		0	], /* 2 LTR text	*/
		[	2,		0,		2,		0x21,	3,		1,		1	]  /* 3 LTR+cont	*/
	];

	var UBAT_L	= 0; /* left to right				*/
	var UBAT_R	= 1; /* right to left				*/
	var UBAT_EN = 2; /* European digit				*/
	var UBAT_AN = 3; /* Arabic-Indic digit			*/
	var UBAT_ON = 4; /* neutral						*/
	var UBAT_B	= 5; /* block separator				*/
	var UBAT_S	= 6; /* segment separator			*/
	var UBAT_AL = 7; /* Arabic Letter				*/
	var UBAT_WS = 8; /* white space					*/
	var UBAT_CS = 9; /* common digit separator		*/
	var UBAT_ES = 10; /* European digit separator	*/
	var UBAT_ET = 11; /* European digit terminator	*/
	var UBAT_NSM = 12; /* Non Spacing Mark			*/
	var UBAT_LRE = 13; /* LRE						*/
	var UBAT_RLE = 14; /* RLE						*/
	var UBAT_PDF = 15; /* PDF						*/
	var UBAT_LRO = 16; /* LRO						*/
	var UBAT_RLO = 17; /* RLO						*/
	var UBAT_BN	= 18; /* Boundary Neutral			*/

	var TYPES_NAMES = [ "UBAT_L", "UBAT_R", "UBAT_EN", "UBAT_AN", "UBAT_ON", "UBAT_B", "UBAT_S", "UBAT_AL", "UBAT_WS",
						"UBAT_CS", "UBAT_ES", "UBAT_ET", "UBAT_NSM", "UBAT_LRE", "UBAT_RLE", "UBAT_PDF", "UBAT_LRO",
						"UBAT_RLO", "UBAT_BN" ];
	var TBBASE = 100;

	var TB00 = TBBASE + 0;
	var TB05 = TBBASE + 1;
	var TB06 = TBBASE + 2;
	var TB07 = TBBASE + 3;
	var TB20 = TBBASE + 4;
	var TBFB = TBBASE + 5;
	var TBFE = TBBASE + 6;
	var TBFF = TBBASE + 7;

	var L	= UBAT_L;
	var R	= UBAT_R;
	var EN	= UBAT_EN;
	var AN	= UBAT_AN;
	var ON	= UBAT_ON;
	var B	= UBAT_B;
	var S	= UBAT_S;
	var AL	= UBAT_AL;
	var WS	= UBAT_WS;
	var CS	= UBAT_CS;
	var ES	= UBAT_ES;
	var ET	= UBAT_ET;
	var NSM	= UBAT_NSM;
	var LRE	= UBAT_LRE;
	var RLE	= UBAT_RLE;
	var PDF	= UBAT_PDF;
	var LRO	= UBAT_LRO;
	var RLO	= UBAT_RLO;
	var BN	= UBAT_BN;

	var MasterTable = [
 /*******************************************************************************************************/
 /*     0     1     2     3     4     5     6     7     8     9     A     B     C     D     E     F     */
 /*******************************************************************************************************/
 /*0-*/ TB00, L,    L,    L,    L,    TB05, TB06, TB07, R,    L,    L,    L,    L,    L,    L,    L,
 /*1-*/ L,    L,    L,    L,    L,    L,    L,    L,    L,    L,    L,    L,    L,    L,    L,    L,
 /*2-*/ TB20, ON,   ON,   ON,   L,    ON,   L,    ON,   L,    ON,   ON,   ON,   L,    L,    ON,   ON,
 /*3-*/ L,    L,    L,    L,    L,    ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,
 /*4-*/ ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   L,    L,    ON,
 /*5-*/ ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,
 /*6-*/ ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,
 /*7-*/ ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,
 /*8-*/ ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,
 /*9-*/ ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   L,
 /*A-*/ L,    L,    L,    L,    L,    L,    L,    L,    L,    L,    L,    L,    L,    ON,   ON,   ON,
 /*B-*/ ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,
 /*C-*/ ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,
 /*D-*/ ON,   ON,   ON,   ON,   ON,   ON,   ON,   L,    L,    ON,   ON,   L,    L,    ON,   ON,   L,
 /*E-*/ L,    ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,
 /*F-*/ ON,   ON,   ON,   ON,   ON,   ON,   ON,   ON,   L,    L,    L,    TBFB, AL,   AL,   TBFE, TBFF
	];

	var UnicodeTable = [
        [ /*	Table 00: Unicode 00xx */
    /****************************************************************************************/
    /*      0    1    2    3    4    5    6    7    8    9    A    B    C    D    E    F	*/
    /****************************************************************************************/
    /*0-*/  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  S,   B,   S,   WS,  B,   BN,  BN,
    /*1-*/  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  B,   B,   B,   S,
    /*2-*/  WS,  ON,  ON,  ET,  ET,  ET,  ON,  ON,  ON,  ON,  ON,  ES,  CS,  ES,  CS,  CS,
    /*3-*/  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  CS,  ON,  ON,  ON,  ON,  ON,
    /*4-*/  ON,  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*5-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   ON,  ON,  ON,  ON,  ON,
    /*6-*/  ON,  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*7-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   ON,  ON,  ON,  ON,  BN,
    /*8-*/  BN,  BN,  BN,  BN,  BN,  B,   BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,
    /*9-*/  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,  BN,
    /*A-*/  CS,  ON,  ET,  ET,  ET,  ET,  ON,  ON,  ON,  ON,  L,   ON,  ON,  BN,  ON,  ON,
    /*B-*/  ET,  ET,  EN,  EN,  ON,  L,   ON,  ON,  ON,  EN,  L,   ON,  ON,  ON,  ON,  ON,
    /*C-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*D-*/  L,   L,   L,   L,   L,   L,   L,   ON,  L,   L,   L,   L,   L,   L,   L,   L,
    /*E-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*F-*/  L,   L,   L,   L,   L,   L,   L,   ON,  L,   L,   L,   L,   L,   L,   L,   L
		],
		[ /*	Table 01: Unicode 05xx */
    /****************************************************************************************/
    /*      0    1    2    3    4    5    6    7    8    9    A    B    C    D    E    F	*/
    /****************************************************************************************/
    /*0-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*1-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*2-*/  L,   L,   L,   L,   L,   L,   L,   L,   ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*3-*/  ON,  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*4-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*5-*/  L,   L,   L,   L,   L,   L,   L,   ON,  ON,  L,   L,   L,   L,   L,   L,   L,
    /*6-*/  ON,  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*7-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*8-*/  L,   L,   L,   L,   L,   L,   L,   L,   ON,  L,   ON,  ON,  ON,  ON,  ON,  ON,
    /*9-*/  ON,  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM,
    /*A-*/  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM,
    /*B-*/  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, R,   NSM,
    /*C-*/  R,   NSM, NSM, R,   NSM, NSM, R,   NSM, ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*D-*/  R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,
    /*E-*/  R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   ON,  ON,  ON,  ON,  ON,
    /*F-*/  R,   R,   R,   R,   R,   ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON
		],
		[ /*	Table 02: Unicode 06xx */
    /****************************************************************************************/
	/*      0    1    2    3    4    5    6    7    8    9    A    B    C    D    E    F	*/
	/****************************************************************************************/
    /*0-*/  AN,  AN,  AN,  AN,  ON,  ON,  ON,  ON,  AL,  ET,  ET,  AL,  CS,  AL,  ON,  ON,
    /*1-*/  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, AL,  ON,  ON,  AL,  AL,
    /*2-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*3-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*4-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  NSM, NSM, NSM, NSM, NSM,
    /*5-*/  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM,
    /*6-*/  AN,  AN,  AN,  AN,  AN,  AN,  AN,  AN,  AN,  AN,  ET,  AN,  AN,  AL,  AL,  AL,
    /*7-*/  NSM, AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*8-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*9-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*A-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*B-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*C-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*D-*/  AL,  AL,  AL,  AL,  AL,  AL,  NSM, NSM, NSM, NSM, NSM, NSM, NSM, AN,  ON,  NSM,
    /*E-*/  NSM, NSM, NSM, NSM, NSM, AL,  AL,  NSM, NSM, ON,  NSM, NSM, NSM, NSM, AL,  AL,
    /*F-*/  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  AL,  AL,  AL,  AL,  AL,  AL
		],
		[	/*	Table	03:	Unicode	07xx	*/
    /****************************************************************************************/
    /*      0    1    2    3    4    5    6    7    8    9    A    B    C    D    E    F	*/
    /****************************************************************************************/
    /*0-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  ON,  AL,
    /*1-*/  AL,  NSM, AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*2-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*3-*/  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM,
    /*4-*/  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, ON,  ON,  AL,  AL,  AL,
    /*5-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*6-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*7-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*8-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*9-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*A-*/  AL,  AL,  AL,  AL,  AL,  AL,  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM,
    /*B-*/  NSM, AL,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*C-*/  R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,
    /*D-*/  R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,
    /*E-*/  R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   R,   NSM, NSM, NSM, NSM, NSM,
    /*F-*/  NSM, NSM, NSM, NSM, R,   R,   ON,  ON,  ON,  ON,  R,   ON,  ON,  ON,  ON,  ON
		],
		[	/*	Table	04:	Unicode	20xx	*/
    /****************************************************************************************/
    /*      0    1    2    3    4    5    6    7    8    9    A    B    C    D    E    F	*/
    /****************************************************************************************/
    /*0-*/  WS,  WS,  WS,  WS,  WS,  WS,  WS,  WS,  WS,  WS,  WS,  BN,  BN,  BN,  L,   R,
    /*1-*/  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*2-*/  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  WS,  B,   LRE, RLE, PDF, LRO, RLO, CS,
    /*3-*/  ET,  ET,  ET,  ET,  ET,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*4-*/  ON,  ON,  ON,  ON,  CS,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*5-*/  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  WS,
    /*6-*/  BN,  BN,  BN,  BN,  BN,  ON,  ON,  ON,  ON,  ON,  BN,  BN,  BN,  BN,  BN,  BN,
    /*7-*/  EN,  L,   ON,  ON,  EN,  EN,  EN,  EN,  EN,  EN,  ES,  ES,  ON,  ON,  ON,  L,
    /*8-*/  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  ES,  ES,  ON,  ON,  ON,  ON,
    /*9-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   ON,  ON,  ON,
    /*A-*/  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,
    /*B-*/  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ET,  ON,  ON,  ON,  ON,  ON,  ON,
    /*C-*/  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*D-*/  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM,
    /*E-*/  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM,
    /*F-*/  NSM, ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON
		],
		[	/*	Table	05:	Unicode	FBxx	*/
    /****************************************************************************************/
    /*      0    1    2    3    4    5    6    7    8    9    A    B    C    D    E    F	*/
    /****************************************************************************************/
    /*0-*/  L,   L,   L,   L,   L,   L,   L,   ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*1-*/  ON,  ON,  ON,  L,   L,   L,   L,   L,   ON,  ON,  ON,  ON,  ON,  R,   NSM, R,
    /*2-*/  R,   R,   R,   R,   R,   R,   R,   R,   R,   ES,  R,   R,   R,   R,   R,   R,
    /*3-*/  R,   R,   R,   R,   R,   R,   R,   ON,  R,   R,   R,   R,   R,   ON,  R,   ON,
    /*4-*/  R,   R,   ON,  R,   R,   ON,  R,   R,   R,   R,   R,   R,   R,   R,   R,   R,
    /*5-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*6-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*7-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*8-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*9-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*A-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*B-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*C-*/  AL,  AL,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*D-*/  ON,  ON,  ON,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*E-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*F-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL
		],
		[	/*	Table	06:	Unicode	FExx	*/
    /****************************************************************************************/
    /*      0    1    2    3    4    5    6    7    8    9    A    B    C    D    E    F	*/
    /****************************************************************************************/
    /*0-*/  NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM, NSM,
    /*1-*/  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*2-*/  NSM, NSM, NSM, NSM, NSM, NSM, NSM, ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*3-*/  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*4-*/  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*5-*/  CS,  ON,  CS,  ON,  ON,  CS,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ET,
    /*6-*/  ON,  ON,  ES,  ES,  ON,  ON,  ON,  ON,  ON,  ET,  ET,  ON,  ON,  ON,  ON,  ON,
    /*7-*/  AL,  AL,  AL,  AL,  AL,  ON,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*8-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*9-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*A-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*B-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*C-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*D-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*E-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,
    /*F-*/  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  AL,  ON,  ON,  BN
		],
		[	/*	Table	07:	Unicode	FFxx	*/
    /****************************************************************************************/
    /*      0    1    2    3    4    5    6    7    8    9    A    B    C    D    E    F	*/
    /****************************************************************************************/
    /*0-*/  ON,  ON,  ON,  ET,  ET,  ET,  ON,  ON,  ON,  ON,  ON,  ES,  CS,  ES,  CS,  CS,
    /*1-*/  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  EN,  CS,  ON,  ON,  ON,  ON,  ON,
    /*2-*/  ON,  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*3-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   ON,  ON,  ON,  ON,  ON,
    /*4-*/  ON,  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*5-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   ON,  ON,  ON,  ON,  ON,
    /*6-*/  ON,  ON,  ON,  ON,  ON,  ON,  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*7-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*8-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*9-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*A-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,
    /*B-*/  L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   L,   ON,
    /*C-*/  ON,  ON,  L,   L,   L,   L,   L,   L,   ON,  ON,  L,   L,   L,   L,   L,   L,
    /*D-*/  ON,  ON,  L,   L,   L,   L,   L,   L,   ON,  ON,  L,   L,   L,   ON,  ON,  ON,
    /*E-*/  ET,  ET,  ON,  ON,  ON,  ET,  ET,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,
    /*F-*/  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON,  ON
		]
	];

	return BidiEngine;
}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=9.js.map