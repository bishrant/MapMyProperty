(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/core/libs/quickselect/quickselect":"./node_modules/arcgis-js-api/core/libs/quickselect/quickselect.js",
	"arcgis-js-api/core/libs/rbush/rbush":"./node_modules/arcgis-js-api/core/libs/rbush/rbush.js",
	"esri/core/libs/rbush/rbush":"./node_modules/arcgis-js-api/core/libs/rbush/rbush.js",
	"esri/tasks/support/QuantizationParameters":"./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js",
	"arcgis-js-api/tasks/support/QuantizationParameters":"./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js",
	"esri/views/2d/layers/features/support/Tile":"./node_modules/arcgis-js-api/views/2d/layers/features/support/Tile.js",
	"arcgis-js-api/views/2d/layers/features/support/TileStore":"./node_modules/arcgis-js-api/views/2d/layers/features/support/TileStore.js",
	"esri/views/2d/layers/features/support/TileStore":"./node_modules/arcgis-js-api/views/2d/layers/features/support/TileStore.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

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

/***/ "./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,i,n,p,s,a){Object.defineProperty(t,"__esModule",{value:!0});var c=new n.default({upperLeft:"upper-left",lowerLeft:"lower-left"}),l=function(e){function t(t){var r=e.call(this,t)||this;return r.extent=null,r.mode="view",r.originPosition="upper-left",r.tolerance=1,r}r(t,e),n=t,t.prototype.clone=function(){return new n(s.clone({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))};var n;return o([a.property({type:i.Extent,json:{write:!0}})],t.prototype,"extent",void 0),o([a.property({type:["view","edit"],json:{write:!0}})],t.prototype,"mode",void 0),o([a.property({type:String,json:{read:c.read,write:c.write}})],t.prototype,"originPosition",void 0),o([a.property({type:Number,json:{write:!0}})],t.prototype,"tolerance",void 0),t=n=o([a.subclass("esri.tasks.support.QuantizationParameters")],t)}(a.declared(p.JSONSupport));t.default=l}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/support/Tile.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/support/Tile.js ***!
  \*****************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/ArrayPool */ "./node_modules/arcgis-js-api/core/ArrayPool.js"),__webpack_require__(/*! ../../../../../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js"),__webpack_require__(/*! ../../../../../geometry/support/aaBoundingRect */ "./node_modules/arcgis-js-api/geometry/support/aaBoundingRect.js"),__webpack_require__(/*! ../../../../../tasks/support/QuantizationParameters */ "./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js"),__webpack_require__(/*! ../../../tiling/TileKey */ "./node_modules/arcgis-js-api/views/2d/tiling/TileKey.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,n,o,r,s){function u(e,t){var i=e.bounds,n=t.bounds;return e.key.id!==t.key.id&&e.key.world===t.key.world&&i[0]<=n[0]&&i[1]<=n[1]&&i[2]>=n[2]&&i[3]>=n[3]}function l(e,t){return u(t,e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isParentOf=u,t.isChildOf=l;var a=function(){function e(e,t){this.bounds=o.create(),this.key=new s(0,0,0,0),this.objectIds=new Set,this.key.set(t);var i=e.getLODInfoAt(this.key);this.tileInfoView=e,this.tileInfoView.getTileBounds(this.bounds,this.key,!0),this.resolution=i.resolution,this.scale=i.scale,this.level=i.level,this.needsClear=!0}return Object.defineProperty(e.prototype,"id",{get:function(){return this.key.id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"extent",{get:function(){return n.fromBounds(this.bounds,this.tileInfoView.tileInfo.spatialReference)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"transform",{get:function(){return{originPosition:"upperLeft",scale:[this.resolution,this.resolution],translate:[this.bounds[0],this.bounds[3]]}},enumerable:!0,configurable:!0}),e.prototype.clone=function(){return new e(this.tileInfoView,this.id)},e.prototype.createChildTiles=function(){for(var t=this.key.getChildKeys(),n=i.acquire(),o=0;o<t.length;o++)n[o]=new e(this.tileInfoView,t[o]);return n},e.prototype.getQuantizationParameters=function(){return r.default.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:this.resolution,extent:{xmin:this.bounds[0],ymin:this.bounds[1],xmax:this.bounds[2],ymax:this.bounds[3],spatialReference:this.tileInfoView.tileInfo.spatialReference}})},e}();t.Tile=a,t.default=a}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/support/TileStore.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/support/TileStore.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../../../core/Evented */ "./node_modules/arcgis-js-api/core/Evented.js"),__webpack_require__(/*! ../../../../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../../../../../core/libs/rbush/rbush */ "./node_modules/arcgis-js-api/core/libs/rbush/rbush.js"),__webpack_require__(/*! ./Tile */ "./node_modules/arcgis-js-api/views/2d/layers/features/support/Tile.js"),__webpack_require__(/*! ../../../tiling/TileCoverage */ "./node_modules/arcgis-js-api/views/2d/tiling/TileCoverage.js"),__webpack_require__(/*! ../../../tiling/TileKey */ "./node_modules/arcgis-js-api/views/2d/tiling/TileKey.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,n,s,r,o,d,l,a){Object.defineProperty(t,"__esModule",{value:!0});var u={added:[],removed:[]},h=new Set,c=new a(0,0,0,0),p=function(e){function t(t){var i=e.call(this)||this;return i._tiles=new Map,i._index=o(9,r("csp-restrictions")?function(e){return{minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]}}:[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]),i.tiles=[],i.tileScheme=t,i}return i(t,e),t.prototype.destroy=function(){this._tiles.clear()},t.prototype.has=function(e){return this._tiles.has(e)},t.prototype.get=function(e){return this._tiles.get(e)},t.prototype.findByKey=function(e){return this._tiles.get(e.id)},t.prototype.intersections=function(e,t){var i="string"==typeof e?this.get(e):e;if(!i)return[];for(var n=t*i.resolution,s=i.bounds[0]-n,r=i.bounds[1]-n,o=i.bounds[2]+n,d=i.bounds[3]+n,l=[],a=0,u=this._index.search({minX:s,minY:r,maxX:o,maxY:d});a<u.length;a++){var h=u[a],c=h.bounds.slice();c[0]=Math.max(c[0],s),c[1]=Math.max(c[1],r),c[2]=Math.min(c[2],o),c[3]=Math.min(c[3],d),c[2]-c[0]>0&&c[3]-c[1]>0&&l.push({bounds:c,tile:h})}return l},t.prototype.boundsIntersections=function(e){return this._index.search({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]})},t.prototype.setViewState=function(e){var t=this.tileScheme.getTileCoverage(e,0);if(t){var i=t.spans,n=t.lodInfo,s=n.level;if(i.length>0)for(var r=0,o=i;r<o.length;r++)for(var a=o[r],p=a.row,m=a.colFrom,f=a.colTo,v=m;v<=f;v++){var b=c.set(s,p,n.normalizeCol(v),n.getWorldForColumn(v)).id;if(h.add(b),!this.has(b)){var g=new d.default(this.tileScheme,b);this._tiles.set(b,g),this._index.insert(g),this.tiles.push(g),u.added.push(g)}}for(var x=this.tiles.length-1;x>=0;x--){var g=this.tiles[x];h.has(g.id)||(this._tiles.delete(g.id),this.tiles.splice(x,1),this._index.remove(g),u.removed.push(g))}(u.added.length||u.removed.length)&&this.emit("update",u),l.pool.release(t),h.clear(),u.added.length=0,u.removed.length=0}},t}(s);t.default=p}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=27.js.map