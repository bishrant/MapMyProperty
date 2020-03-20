(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/core/ItemCache":"./node_modules/arcgis-js-api/core/ItemCache.js",
	"esri/core/requireUtils":"./node_modules/arcgis-js-api/core/requireUtils.js",
	"arcgis-js-api/core/requireUtils":"./node_modules/arcgis-js-api/core/requireUtils.js",
	"arcgis-js-api/views/2d/engine/vectorTiles/FadeRecorder":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/FadeRecorder.js",
	"arcgis-js-api/views/2d/engine/vectorTiles/GlyphMosaic":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GlyphMosaic.js",
	"arcgis-js-api/views/2d/engine/vectorTiles/GlyphSource":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GlyphSource.js",
	"arcgis-js-api/views/2d/engine/vectorTiles/RectangleBinPack":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/RectangleBinPack.js",
	"arcgis-js-api/views/2d/engine/vectorTiles/RenderBucket":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/RenderBucket.js",
	"arcgis-js-api/views/2d/engine/vectorTiles/SpriteMosaic":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/SpriteMosaic.js",
	"arcgis-js-api/views/2d/engine/vectorTiles/TileHandler":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/TileHandler.js",
	"arcgis-js-api/views/2d/engine/vectorTiles/TileIndex":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/TileIndex.js",
	"arcgis-js-api/views/2d/engine/vectorTiles/VectorTile":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/VectorTile.js",
	"arcgis-js-api/views/2d/engine/vectorTiles/VectorTileContainer":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/VectorTileContainer.js",
	"arcgis-js-api/views/2d/layers/VectorTileLayerView2D":"./node_modules/arcgis-js-api/views/2d/layers/VectorTileLayerView2D.js",
	"arcgis-js-api/views/2d/tiling/TileInfoViewPOT":"./node_modules/arcgis-js-api/views/2d/tiling/TileInfoViewPOT.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./node_modules/arcgis-js-api/core/ItemCache.js":
/*!******************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/ItemCache.js ***!
  \******************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./MemCache */ "./node_modules/arcgis-js-api/core/MemCache.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,o){return function(){function t(t,e){this._storage=new o.MemCacheStorage,this._storage.maxSize=t,e&&this._storage.registerRemoveFunc("",e)}return t.prototype.put=function(t,e){this._storage.put(t,e,1,1)},t.prototype.pop=function(t){return this._storage.pop(t)},t.prototype.get=function(t){return this._storage.get(t)},t.prototype.clear=function(){this._storage.clearAll()},t.prototype.destroy=function(){this._storage.clearAll()},t}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/core/requireUtils.js":
/*!*********************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/requireUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./deprecate */ "./node_modules/arcgis-js-api/core/deprecate.js"),__webpack_require__(/*! ./Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ./promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,n,i){function o(e,r){return t.deprecatedFunction(s,"when",{moduleName:"requireUtils",replacement:"Use `promiseUtils.create()` instead.",version:"4.10",warnOnce:!0}),Array.isArray(r)?i.create(function(t){e(r,function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];t(e)})}):o(e,[r]).then(function(e){return e[0]})}function c(e,r,t){return r.toAbsMid?r.toAbsMid(e):t.id.replace(/\/[^\/]*$/gi,"/")+e}Object.defineProperty(r,"__esModule",{value:!0});var s=n.getLogger("esri.core.requireUtils");r.when=o,r.getAbsMid=c}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/FadeRecorder.js":
/*!********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/FadeRecorder.js ***!
  \********************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/now */ "./node_modules/arcgis-js-api/core/now.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var l=(function(){function e(e,n){this.level=e,this.now=n}}(),function(){function e(e,n,t,l){this.fadeSpeed=e,this.minfadeLevel=n,this.maxfadeLevel=t,this.fadeChange=l}return e}());n.FadeProperties=l;var o=function(){function e(e,n){void 0===e&&(e=300),void 0===n&&(n=!1),this._levelSnapshots=[],this._duration=e,this._ignoreSpeed=n}return e.prototype.recordLevel=function(e){var n=t(),l=this._levelSnapshots;0===l.length&&(l.push({level:e,now:0}),l.push({level:e,now:0})),2!==l.length&&l[0].level===e||l.push({level:e,now:n})},e.prototype.needsRedraw=function(){if(0===this._levelSnapshots.length)return!1;for(var e=this._duration,n=this._levelSnapshots,t=n.length,l=n[t-1],o=-1;t>o+1&&n[o+1].now+e<l.now;)o++;for(o<0&&(o=0);o<t;o++)if(n[o].level!==l.level)return!0;return!1},e.prototype.getFadeValues=function(){for(var e=this._duration,n=t(),l=this._levelSnapshots;l.length>3&&l[1].now+e<n;)l.shift();l[1].now+e<n&&(l[0].level=l[1].level);var o=l[0].level,i=l[l.length-1],r=i.level,a=Math.min(o,r),h=Math.max(o,r),s=i.level-l[1].level,v=i.now-l[1].now,d=s/(v/e),f=(n-i.now)/e*d;return this._ignoreSpeed?{fadeSpeed:0,minfadeLevel:a,maxfadeLevel:h,fadeChange:0}:{fadeSpeed:d,minfadeLevel:a,maxfadeLevel:h,fadeChange:f}},e}();n.FadeRecorder=o}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GlyphMosaic.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GlyphMosaic.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../webgl */ "./node_modules/arcgis-js-api/views/webgl.js"),__webpack_require__(/*! ./RectangleBinPack */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/RectangleBinPack.js"),__webpack_require__(/*! ../webgl/Rect */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/Rect.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,r,s,h,a){var n;s.enums.PixelFormat,s.enums.PixelType;return function(){function e(e,t,r){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,!n&&i("stable-symbol-rendering")&&(n=new Set),this.width=e,this.height=t,this._glyphSource=r,this._binPack=new h(e-4,t-4),this._glyphData.push(new Uint8Array(e*t)),this._dirties.push(!0),this._textures.push(void 0)}return e.prototype.getGlyphItems=function(e,t){for(var s=this,o=[],l=this._glyphSource,g=new Set,d=0,p=t;d<p.length;d++){var u=p[d],_=Math.floor(u*(1/256));g.add(_)}var c=[];return g.forEach(function(t){if(t<=256){var i=e+t;if(s._rangePromises.has(i))c.push(s._rangePromises.get(i));else{var r=l.getRange(e,t).then(function(){s._rangePromises.delete(i)},function(){s._rangePromises.delete(i)});s._rangePromises.set(i,r),c.push(r)}}}),r.all(c).then(function(){var r=s._glyphIndex[e];r||(r={},s._glyphIndex[e]=r);var d;if(i("stable-symbol-rendering")){n.clear();for(var p=0,u=t;p<u.length;p++){var _=u[p];n.add(_)}var c=[];g.forEach(function(e){c.push(e)}),c.sort(),d=[];for(var f=0,v=c;f<v.length;f++)for(var y=v[f],m=0;m<256;++m)d.push(256*y+m)}else d=t;for(var w=0,P=d;w<P.length;w++){var _=P[w],x=r[_];if(x)i("stable-symbol-rendering")&&!n.has(_)||(o[_]={sdf:!0,rect:x.rect,metrics:x.metrics,page:x.page});else{var b=l.getGlyph(e,_);if(b&&b.metrics){var D=b.metrics,I=void 0;if(0===D.width)I=new a.default(0,0,0,0);else{var k=D.width+6,S=D.height+6,T=k%4?4-k%4:4,U=S%4?4-S%4:4;1===T&&(T=5),1===U&&(U=5),I=s._binPack.allocate(k+T,S+U),I.isEmpty&&(s._dirties[s._currentPage]||(s._glyphData[s._currentPage]=null),s._currentPage=s._glyphData.length,s._glyphData.push(new Uint8Array(s.width*s.height)),s._dirties.push(!0),s._textures.push(void 0),s._binPack=new h(s.width-4,s.height-4),I=s._binPack.allocate(k+T,S+U));var A=s._glyphData[s._currentPage],E=b.bitmap,G=void 0,M=void 0;if(E)for(var R=0;R<S;R++){G=k*R,M=s.width*(I.y+R+1)+I.x;for(var F=0;F<k;F++)A[M+F+1]=E[G+F]}}r[_]={rect:I,metrics:D,tileIDs:null,page:s._currentPage},i("stable-symbol-rendering")&&!n.has(_)||(o[_]={sdf:!0,rect:I,metrics:D,page:s._currentPage}),s._dirties[s._currentPage]=!0}}}return o})},e.prototype.removeGlyphs=function(e){for(var t in this._glyphIndex){var i=this._glyphIndex[t];if(i){var r=void 0;for(var s in i)if(r=i[s],r.tileIDs.delete(e),0===r.tileIDs.size){for(var h=this._glyphData[r.page],a=r.rect,n=void 0,o=void 0,l=0;l<a.height;l++)for(n=this.width*(a.y+l)+a.x,o=0;o<a.width;o++)h[n+o]=0;delete i[s],this._dirties[r.page]=!0}}}},e.prototype.bind=function(e,t,i,r){void 0===r&&(r=0),this._textures[i]||(this._textures[i]=new s.Texture(e,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));var h=this._textures[i];h.setSamplingMode(t),this._dirties[i]&&h.setData(this._glyphData[i]),e.bindTexture(h,r),this._dirties[i]=!1},e.prototype.dispose=function(){this._binPack=null;for(var e=0,t=this._textures;e<t.length;e++){var i=t[e];i&&i.dispose()}this._textures.length=0},e}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GlyphSource.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GlyphSource.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../../../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../../../../core/pbf */ "./node_modules/arcgis-js-api/core/pbf.js"),__webpack_require__(/*! ../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,n,r,a,i){var s=function(){function e(e){if(this._metrics=[],this._bitmaps=[],e)for(;e.next();)switch(e.tag()){case 1:for(var t=e.getMessage();t.next();)switch(t.tag()){case 3:for(var n=t.getMessage(),r=void 0,a=void 0,i=void 0,s=void 0,o=void 0,c=void 0,g=void 0;n.next();)switch(n.tag()){case 1:r=n.getUInt32();break;case 2:a=n.getBytes();break;case 3:i=n.getUInt32();break;case 4:s=n.getUInt32();break;case 5:o=n.getSInt32();break;case 6:c=n.getSInt32();break;case 7:g=n.getUInt32();break;default:n.skip()}n.release(),r&&(this._metrics[r]={width:i,height:s,left:o,top:c,advance:g},this._bitmaps[r]=a);break;default:t.skip()}t.release();break;default:e.skip()}}return e.prototype.getMetrics=function(e){return this._metrics[e]},e.prototype.getBitmap=function(e){return this._bitmaps[e]},e}(),o=function(){function e(){this._ranges=[]}return e.prototype.getRange=function(e){return this._ranges[e]},e.prototype.addRange=function(e,t){this._ranges[e]=t},e}();return function(){function e(e){this._glyphInfo={},this._baseURL=e}return e.prototype.getRange=function(e,t){var o=this._getFontStack(e);if(r("stable-symbol-rendering")&&t>0)return o.addRange(t,new s),i.resolve();if(o.getRange(t))return i.resolve();var c=256*t,g=c+255,f=this._baseURL.replace("{fontstack}",e).replace("{range}",c+"-"+g);return n(f,{responseType:"array-buffer"}).then(function(e){o.addRange(t,new s(new a(new Uint8Array(e.data),new DataView(e.data))))}).catch(function(){o.addRange(t,new s)})},e.prototype.getGlyph=function(e,t){var n=this._getFontStack(e);if(n){var r=Math.floor(t/256);if(!(r>256)){var a=n.getRange(r);if(a)return{metrics:a.getMetrics(t),bitmap:a.getBitmap(t)}}}},e.prototype._getFontStack=function(e){var t=this._glyphInfo[e];return t||(t=this._glyphInfo[e]=new o),t},e}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/RectangleBinPack.js":
/*!************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/RectangleBinPack.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../webgl/Rect */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/Rect.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,h){return function(){function e(e,t){this._width=0,this._height=0,this._free=[],this._width=e,this._height=t,this._free.push(new h.default(0,0,e,t))}return Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),e.prototype.allocate=function(e,t){if(e>this._width||t>this._height)return new h.default;for(var i=null,r=-1,n=0;n<this._free.length;++n){var f=this._free[n];e<=f.width&&t<=f.height&&(null===i||f.y<=i.y&&f.x<=i.x)&&(i=f,r=n)}return null===i?new h.default:(this._free.splice(r,1),i.width<i.height?(i.width>e&&this._free.push(new h.default(i.x+e,i.y,i.width-e,t)),i.height>t&&this._free.push(new h.default(i.x,i.y+t,i.width,i.height-t))):(i.width>e&&this._free.push(new h.default(i.x+e,i.y,i.width-e,i.height)),i.height>t&&this._free.push(new h.default(i.x,i.y+t,e,i.height-t))),new h.default(i.x,i.y,e,t))},e.prototype.release=function(e){for(var t=0;t<this._free.length;++t){var h=this._free[t];if(h.y===e.y&&h.height===e.height&&h.x+h.width===e.x)h.width+=e.width;else if(h.x===e.x&&h.width===e.width&&h.y+h.height===e.y)h.height+=e.height;else if(e.y===h.y&&e.height===h.height&&e.x+e.width===h.x)h.x=e.x,h.width+=e.width;else{if(e.x!==h.x||e.width!==h.width||e.y+e.height!==h.y)continue;h.y=e.y,h.height+=e.height}this._free.splice(t,1),this.release(e)}this._free.push(e)},e}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/RenderBucket.js":
/*!********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/RenderBucket.js ***!
  \********************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){this.type=t}return t}();e.RenderBucket=r;var i=function(t){function e(){var e=t.call(this,2)||this;return e.triangleElementStart=0,e.triangleElementCount=0,e}return n(e,t),e.prototype.hasData=function(){return this.triangleElementCount>0},e.prototype.triangleCount=function(){return this.triangleElementCount/3},e}(r);e.LineRenderBucket=i;var o=function(t){function e(){var e=t.call(this,1)||this;return e.triangleElementStart=0,e.triangleElementCount=0,e.outlineElementStart=0,e.outlineElementCount=0,e}return n(e,t),e.prototype.hasData=function(){return this.triangleElementCount>0||this.outlineElementCount>0},e.prototype.triangleCount=function(){return(this.triangleElementCount+this.outlineElementCount)/3},e}(r);e.FillRenderBucket=o;var u=function(t){function e(){var e=t.call(this,3)||this;return e.iconPerPageElementsMap=new Map,e.glyphPerPageElementsMap=new Map,e.isSDF=!1,e}return n(e,t),e.prototype.hasData=function(){return this.iconPerPageElementsMap.size>0||this.glyphPerPageElementsMap.size>0},e.prototype.triangleCount=function(){var t=0;return this.iconPerPageElementsMap.forEach(function(e){t+=e[1]}),this.glyphPerPageElementsMap.forEach(function(e){t+=e[1]}),t/3},e}(r);e.SymbolRenderBucket=u;var a=function(t){function e(){var e=t.call(this,4)||this;return e.triangleElementStart=0,e.triangleElementCount=0,e}return n(e,t),e.prototype.hasData=function(){return this.triangleElementCount>0},e.prototype.triangleCount=function(){return this.triangleElementCount/3},e}(r);e.CircleRenderBucket=a;var l=function(t){function e(){return t.call(this,0)||this}return n(e,t),e.prototype.hasData=function(){return!0},e.prototype.triangleCount=function(){return 2},e}(r);e.BackgroundRenderBucket=l}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/SpriteMosaic.js":
/*!********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/SpriteMosaic.js ***!
  \********************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../webgl */ "./node_modules/arcgis-js-api/views/webgl.js"),__webpack_require__(/*! ./RectangleBinPack */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/RectangleBinPack.js"),__webpack_require__(/*! ../webgl/Rect */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/Rect.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,i,e,s,h){e.enums.PixelFormat,e.enums.PixelType;return function(){function t(t,i,e){void 0===e&&(e=0),this._size=[],this._mosaicsData=[],this._textures=[],this._dirties=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects={},this.pixelRatio=1,(t<=0||i<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=t,this._pageHeight=i,e>0&&(this._maxItemSize=e),this._binPack=new s(t-4,i-4)}return t.prototype.getWidth=function(t){return t>=this._size.length?-1:this._size[t][0]},t.prototype.getHeight=function(t){return t>=this._size.length?-1:this._size[t][1]},t.prototype.setSpriteSource=function(t){if(this.dispose(),this.pixelRatio=t.devicePixelRatio,0===this._mosaicsData.length){this._binPack=new s(this._pageWidth-4,this._pageHeight-4);var i=Math.floor(this._pageWidth),e=Math.floor(this._pageHeight),h=i*e,a=new Uint32Array(h);this._mosaicsData[0]=a,this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0)}this._sprites=t},t.prototype.getSpriteItem=function(t,i){void 0===i&&(i=!1);var e=this._mosaicRects[t];if(e)return e;if(!this._sprites||"loaded"!==this._sprites.loadStatus)return null;var s=this._sprites.getSpriteInfo(t);if(!s||!s.width||!s.height||s.width<0||s.height<0)return null;var h=s.width,a=s.height,r=this._allocateImage(h,a),o=r[0],n=r[1],p=r[2];return o.width<=0?null:(this._copy(o,s,n,p,i),e={rect:o,width:h,height:a,sdf:s.sdf,simplePattern:!1,pixelRatio:s.pixelRatio,page:n},this._mosaicRects[t]=e,e)},t.prototype.preloadSpriteItems=function(){for(var t=0,i=this._sprites.spriteNames;t<i.length;t++){var e=i[t];this.getSpriteItem(e,!0)}},t.prototype.getSpriteItems=function(t){for(var i={},e=0,s=t;e<s.length;e++){var h=s[e];i[h]=this.getSpriteItem(h)}return i},t.prototype.getMosaicItemPosition=function(t,i){var e=this.getSpriteItem(t,i),s=e&&e.rect;if(!s)return null;s.width=e.width,s.height=e.height;var h=e.width,a=e.height;return{size:[e.width,e.height],tl:[(s.x+2)/this._size[e.page][0],(s.y+2)/this._size[e.page][1]],br:[(s.x+2+h)/this._size[e.page][0],(s.y+2+a)/this._size[e.page][1]],page:e.page}},t.prototype.bind=function(t,i,s,h){void 0===s&&(s=0),void 0===h&&(h=0),this._textures[s]||(this._textures[s]=new e.Texture(t,{pixelFormat:6408,dataType:5121,wrapMode:33071,width:this._size[s][0],height:this._size[s][1]},new Uint8Array(this._mosaicsData[s].buffer)));var a=this._textures[s];a.setSamplingMode(i),this._dirties[s]&&a.setData(new Uint8Array(this._mosaicsData[s].buffer)),t.bindTexture(a,h),this._dirties[s]=!1},t._copyBits=function(t,i,e,s,h,a,r,o,n,p,_){var g=s*i+e,u=o*a+r;if(_){u-=a;for(var c=-1;c<=p;c++,g=((c+p)%p+s)*i+e,u+=a)for(var d=-1;d<=n;d++)h[u+d]=t[g+(d+n)%n]}else for(var c=0;c<p;c++){for(var d=0;d<n;d++)h[u+d]=t[g+d];g+=i,u+=a}},t.prototype._copy=function(i,e,s,h,a,r){if(this._sprites&&"loaded"===this._sprites.loadStatus&&!(s>=this._mosaicsData.length)){var o=new Uint32Array(r?r.buffer:this._sprites.image.buffer),n=this._mosaicsData[s];n&&o||console.error("Source or target images are uninitialized!");var p=r?e.width:this._sprites.width;t._copyBits(o,p,e.x,e.y,n,h[0],i.x+2,i.y+2,e.width,e.height,a),this._dirties[s]=!0}},t.prototype._allocateImage=function(t,i){t+=2,i+=2;var e=Math.max(t,i);if(this._maxItemSize&&this._maxItemSize<e){var a=new h.default(0,0,t,i);return this._mosaicsData.push(new Uint32Array(t*i)),this._dirties.push(!0),this._size.push([t,i]),this._textures.push(void 0),[a,this._mosaicsData.length-1,[t,i]]}var r=t%4?4-t%4:4,o=i%4?4-i%4:4;1===r&&(r=5),1===o&&(o=5);var n=this._binPack.allocate(t+r,i+o);return n.width<=0?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new s(this._pageWidth-4,this._pageHeight-4),this._allocateImage(t,i)):[n,this._currentPage,[this._pageWidth,this._pageHeight]]},t.prototype.dispose=function(){this._binPack=null,this._mosaicRects={};for(var t=0,i=this._textures;t<i.length;t++){var e=i[t];e&&e.dispose()}this._textures.length=0},t}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/TileHandler.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/TileHandler.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../../../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../../../../core/ItemCache */ "./node_modules/arcgis-js-api/core/ItemCache.js"),__webpack_require__(/*! ../../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../../../core/MemCache */ "./node_modules/arcgis-js-api/core/MemCache.js"),__webpack_require__(/*! ../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../../core/requireUtils */ "./node_modules/arcgis-js-api/core/requireUtils.js"),__webpack_require__(/*! ../../../../core/workers */ "./node_modules/arcgis-js-api/core/workers.js"),__webpack_require__(/*! ../../../../geometry/support/aaBoundingRect */ "./node_modules/arcgis-js-api/geometry/support/aaBoundingRect.js"),__webpack_require__(/*! ../vectorTiles/VectorTile */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/VectorTile.js"),__webpack_require__(/*! ./GeometryUtils */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GeometryUtils.js"),__webpack_require__(/*! ./GlyphMosaic */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GlyphMosaic.js"),__webpack_require__(/*! ./GlyphSource */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GlyphSource.js"),__webpack_require__(/*! ./SpriteMosaic */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/SpriteMosaic.js"),__webpack_require__(/*! ./TileIndex */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/TileIndex.js"),__webpack_require__(/*! ../../tiling/TileKey */ "./node_modules/arcgis-js-api/views/2d/tiling/TileKey.js"),__webpack_require__.dj.m(module)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,o,r,i,n,s,a,l,u,c,h,p,d,f,y,g,_,T,v,b,m){Object.defineProperty(t,"__esModule",{value:!0});var M=new a(10),R=new Map,C=function(){function t(e,t,o,r,i){this._vectorTileLayer=e,this.devicePixelRatio=t,this.allowUpdates=o,this._container=r,this._memCache=i,this._spriteMosaic=null,this._glyphMosaic=null,this._connection=null,this._updateToAbortController=new Map,this._ongoingTileRequests=new Map,this._ongoingRequestToController=new Map}return t.prototype.destroy=function(){this._updateToAbortController&&this._updateToAbortController.forEach(function(e){return e.abort()}),this._ongoingTileRequests&&this.abortAll(),this._connection&&(this._connection.close(),this._connection=null),this._vectorTileLayer=null,this._spriteMosaic&&(this._spriteMosaic.dispose(),this._spriteMosaic=null),this._glyphMosaic&&(this._glyphMosaic.dispose(),this._glyphMosaic=null)},Object.defineProperty(t.prototype,"spriteMosaic",{get:function(){var e=this;return this._spriteSourcePromise.then(function(){return e._spriteMosaic})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"glyphMosaic",{get:function(){return this._glyphMosaic},enumerable:!0,configurable:!0}),t.prototype.start=function(t){return i(this,void 0,void 0,function(){var i,n,a,l,u,d=this;return r(this,function(r){i=this._vectorTileLayer.sourceNameToSource,n=[];for(a in i)n.push(this._fetchTileMap(i[a],t));return this._spriteSourcePromise=this._vectorTileLayer.loadSpriteSource(this.devicePixelRatio,t),this._spriteSourcePromise.then(function(e){d._spriteMosaic=new T(1024,1024,250),d._spriteMosaic.setSpriteSource(e),s("stable-symbol-rendering")&&d._spriteMosaic.preloadSpriteItems()}),l=this._vectorTileLayer.styleRepository,u=new _(l.glyphs),this._glyphMosaic=new g(1024,1024,u),this._broadcastPromise=p.open(h.getAbsMid("../vectorTiles/WorkerTileHandler",e,m),{client:this,scheduler:t.scheduler,signal:t.signal}).then(function(e){return d._connection=e,c.all(d._connection.broadcast("setLayers",l.styleJSON,o({},t)))}),[2,c.all(n)]})})},t.prototype.updateStyle=function(){return i(this,void 0,void 0,function(){var e,t=this;return r(this,function(o){switch(o.label){case 0:return[4,this._broadcastPromise];case 1:return o.sent(),this._updateToAbortController.forEach(function(e){return e.abort()}),this._updateToAbortController.clear(),e=this._vectorTileLayer.styleRepository,this._broadcastPromise=c.create(function(o,r){c.all(t._connection.broadcast("updateStyle",e.styleJSON)).then(o,r)}),[2,this._broadcastPromise]}})})},t.prototype.abortTileUpdate=function(e){if(this._updateToAbortController.has(e)){this._updateToAbortController.get(e).abort(),this._updateToAbortController.delete(e)}},t.prototype.updateTile=function(e,t){return i(this,void 0,void 0,function(){var o,i,n,s,a=this;return r(this,function(r){switch(r.label){case 0:return this.allowUpdates&&e.isReady?[4,this._broadcastPromise]:[2];case 1:return r.sent(),(o=Math.round(y.degToByte(t.state.rotation)),e.rotation===o)?[2,null]:(n=e.key,this._updateToAbortController.has(n.id)&&(i=this._updateToAbortController.get(n.id),i.abort(),this._updateToAbortController.delete(n.id)),i=c.createAbortController(),e.rotation=o,s=e.client.invoke("updateSymbols",{key:e.id,rotation:o},{signal:i.signal}).then(function(t){a._updateToAbortController.delete(n.id),e.isReady&&e.updateSymbolData(t)}).catch(function(e){c.isAbortError(e)||a._updateToAbortController.delete(n.id)}),this._updateToAbortController.set(e.id,i),[2,s])}})})},t.prototype.updateTileData=function(e){for(var t,o=e.tileId,r=this._container.children,i=0;i<r.length;i++)if(t=r[i],t.id===o){t.updateTileData(e.tileData);break}},t.prototype.getVectorTile=function(e,t,o){return i(this,void 0,void 0,function(){var i,n,s,a,c,h,p;return r(this,function(r){switch(r.label){case 0:return i=new b(e,t,o,0),l.isSome(this._memCache)&&(n=this._memCache.get(i.id))?(n.reference(),[2,n]):[4,this._getVectorTileData(i,null)];case 1:return s=r.sent(),l.isSome(this._memCache)&&(a=this._memCache.get(i.id))?(a.reference(),[2,a]):(c=this._vectorTileLayer.tileInfo,h=c.getTileBounds(d.create(),i),p=new f.VectorTile(i,this._vectorTileLayer.styleRepository,h,[512,512]),s&&s.tileData?(p.setData(s.tileData,s.client),l.isSome(this._memCache)&&(p.reference(),this._memCache.put(p.key.id,p,p.getMemoryUsage()*p.referenced,u.MIN_PRIORITY))):p.setData(null,null),[2,p])}})})},t.prototype.releaseVectorTile=function(e){l.isNone(this._memCache)||e.release()||this._memCache.updateSize(e.key.id,e,e.getMemoryUsage()*e.referenced)},t.prototype.fetchTileData=function(e,t){return i(this,void 0,void 0,function(){var o,i,n,s;return r(this,function(r){switch(r.label){case 0:return[4,this._getRefKeys(e,t)];case 1:o=r.sent(),i=this._vectorTileLayer.sourceNameToSource,n=[];for(s in i)n.push(s);return[2,this._getSourcesData(n,o,t)]}})})},t.prototype.parseTileData=function(e,t,n){return i(this,void 0,void 0,function(){var i,a,l,u,c,h,p,d;return r(this,function(r){switch(r.label){case 0:return(i=e&&e.data)?(a=i.sourceName2DataAndRefKey,l=i.transferList,0===Object.keys(a).length?[2,null]:[4,this._broadcastPromise]):[2,null];case 1:return r.sent(),u=Math.round(y.degToByte(t)),c=this._connection.getAvailableClient(),[4,c.invoke("createTileAndParse",{key:e.key.id,rotation:u,cacheTile:this.allowUpdates,sourceName2DataAndRefKey:a},o({},n,{transferList:l})).catch(function(){return c.invoke("destructTileData",e.key.id),null})];case 2:if(h=r.sent(),s("esri-vector-tiles-debug")){p={};for(d in a)p[d]=a[d].refKey;return[2,{tileData:h,client:c,refKeys:p}]}return[2,{tileData:h,client:c}]}})})},Object.defineProperty(t.prototype,"updating",{get:function(){return this._ongoingTileRequests.size>0},enumerable:!0,configurable:!0}),t.prototype.abortAll=function(){this._ongoingRequestToController.forEach(function(e){return e.abort()}),this._ongoingRequestToController.clear(),this._ongoingTileRequests.clear()},t.prototype.getSprites=function(e){return i(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,this._spriteSourcePromise];case 1:return t.sent(),[2,this._spriteMosaic.getSpriteItems(e)]}})})},t.prototype.getGlyphs=function(e){return this._glyphMosaic.getGlyphItems(e.font,e.codePoints)},t.prototype.getStyleRepository=function(){return this._vectorTileLayer.styleRepository},t.prototype._getTilePayload=function(e,t,s){return i(this,void 0,void 0,function(){var i,a,l,u,c;return r(this,function(r){switch(r.label){case 0:return i=b.pool.acquire(e.id),a=this._vectorTileLayer.sourceNameToSource,l=a[t],u=l.getSourceTileUrl(i.level,i.row,i.col),b.pool.release(i),[4,n(u,o({responseType:"array-buffer"},s))];case 1:return c=r.sent(),[2,{protobuff:c.data,sourceName:t}]}})})},t.prototype._fetchTileMap=function(e,t){if(e.capabilities.operations.supportsTileMap&&e.tileIndex)return c.resolve();if(!e.tileMapURL)return c.resolve();var o=M.get(e.tileMapURL);if(o)return e.tileIndex=o,c.resolve();if(R.has(e.tileMapURL))return R.get(e.tileMapURL).then(function(t){e.tileIndex=new v(t.data)});var r=n(e.tileMapURL,t);return r.then(function(t){e.tileIndex=new v(t.data),R.delete(e.tileMapURL),M.put(e.tileMapURL,e.tileIndex)}),R.set(e.tileMapURL,r),r},t.prototype._getRefKeys=function(e,t){return i(this,void 0,void 0,function(){var o,i,n,s,a;return r(this,function(r){o=this._vectorTileLayer.sourceNameToSource,i=new Array;for(n in o)s=o[n],a=s.getRefKey(e,t),i.push(a);return[2,c.eachAlways(i)]})})},t.prototype._getSourcesData=function(e,t,o){return i(this,void 0,void 0,function(){var i,n,s,a,l,u,n,h;return r(this,function(r){switch(r.label){case 0:for(i=[],n=0;n<t.length;n++)null==t[n].value||null==e[n]?i.push(null):(s=this._getTilePayload(t[n].value,e[n],o),i.push(s));return[4,c.eachAlways(i)];case 1:for(a=r.sent(),l={},u=[],n=0;n<a.length;n++)a[n].value&&a[n].value&&a[n].value.protobuff&&a[n].value.protobuff.byteLength>0&&(h=t[n].value.id,l[a[n].value.sourceName]={refKey:h,protobuff:a[n].value.protobuff},u.push(a[n].value.protobuff));return[2,{sourceName2DataAndRefKey:l,transferList:u}]}})})},t.prototype._getVectorTileData=function(e,t){return i(this,void 0,void 0,function(){var o,i,n,s,a,l=this;return r(this,function(r){return o=e.id,this._ongoingTileRequests.has(o)?[2,this._ongoingTileRequests.get(o)]:(i=new AbortController,n={signal:i.signal},s=t&&t.signal,a=this._getParsedVectorTileData(e,n).then(function(e){return l._ongoingTileRequests.delete(o),l._ongoingRequestToController.delete(o),e}).catch(function(){return l._ongoingTileRequests.delete(o),l._ongoingRequestToController.delete(o),null}),this._ongoingTileRequests.set(o,a),this._ongoingRequestToController.set(o,i),s&&c.onAbort(s,function(){i.abort(),l._ongoingTileRequests.delete(o),l._ongoingRequestToController.delete(o)}),[2,a])})})},t.prototype._getParsedVectorTileData=function(e,t){return i(this,void 0,void 0,function(){var o;return r(this,function(r){switch(r.label){case 0:return[4,this.fetchTileData(e,t)];case 1:return o=r.sent(),[2,this.parseTileData({key:e,data:o},0,t)]}})})},t}();t.TileHandler=C}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/TileIndex.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/TileIndex.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../../layers/support/TilemapCache */ "./node_modules/arcgis-js-api/layers/support/TilemapCache.js"),__webpack_require__(/*! ../../tiling/TileKey */ "./node_modules/arcgis-js-api/views/2d/tiling/TileKey.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,o){return function(){function e(e){if(e instanceof i.TilemapCache)this._tilemapCache=e;else{if(!(e&&"index"in e))throw new Error("Invalid tilemap!");this._tilemap=e.index}}return e.prototype.dataKey=function(e,t){if(this._tilemapCache){var i=e.level,l=e.row,a=e.col,n=new o(e);return this._tilemapCache.fetchAvailabilityUpsample(i,l,a,n,t).then(function(){return n}).catch(function(e){if(r.isAbortError(e))throw e;return n.level=i,n.row=l,n.col=a,n})}return this._getIndexedDataKey(e)},e.prototype.forEach=function(e,t,r,i,o){this._callback=o,this._maxLevel=t+e,this._forEach(this._tilemap,t,r,i)},e.prototype._forEach=function(e,t,r,i){0!==e&&(this._callback(t,r,i),t!==this._maxLevel&&"object"==typeof e&&(this._forEach(e[0],t+1,2*r,2*i),this._forEach(e[1],t+1,2*r,2*i+1),this._forEach(e[2],t+1,2*r+1,2*i),this._forEach(e[3],t+1,2*r+1,2*i+1)))},e.prototype._getIndexedDataKey=function(e){var t=[e];if(e.level<0||e.row<0||e.col<0||e.row>>e.level>0||e.col>>e.level>0)return r.resolve(null);for(var i=e;0!==i.level;)i=new o(i.level-1,i.row>>1,i.col>>1,i.world),t.push(i);var l,a,n=this._tilemap,c=t.pop();if(1===n)return r.resolve(c);for(;t.length;)if(l=t.pop(),a=(1&l.col)+((1&l.row)<<1),n){if(0===n[a]){c=null;break}if(1===n[a]){c=l;break}c=l,n=n[a]}return r.resolve(c)},e}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/VectorTile.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/VectorTile.js ***!
  \******************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ../../../../core/now */ "./node_modules/arcgis-js-api/core/now.js"),__webpack_require__(/*! ../../../webgl */ "./node_modules/arcgis-js-api/views/webgl.js"),__webpack_require__(/*! ./RenderBucket */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/RenderBucket.js"),__webpack_require__(/*! ../webgl/TiledDisplayObject */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/TiledDisplayObject.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,a,i,f,n){Object.defineProperty(t,"__esModule",{value:!0});var o=(i.enums.Usage,function(e){function t(t,r,a,i){var f=e.call(this,t,a,i,[4096,4096])||this;return f._referenced=0,f._symbolFadeHold=null,f._vectorTileData=null,f._setData=!1,f._symbolUpdateData=null,f._memoryUsed=c,f.rotation=0,f.layerData={},f.status="loading",f._referenced=1,f.styleLayers=r,f.id=t.id,f}return r(t,e),Object.defineProperty(t.prototype,"hasSymbolBuckets",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isHoldingForFade",{get:function(){return null!==this._symbolFadeHold},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isSymbolFadeDone",{get:function(){return!this._symbolFadeHold||this._symbolFadeHold<a()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"wasRequested",{get:function(){return"errored"===this.status||"loaded"===this.status||"reloading"===this.status},enumerable:!0,configurable:!0}),t.prototype.setData=function(e,t,r){this._vectorTileData=e,this.client=t,this.refKeys=r,this._memoryUsed=c,this.ready(),this._setData=!0},t.prototype.updateSymbolData=function(e){e&&(this._symbolUpdateData=e,this.requestRender())},t.prototype.updateTileData=function(e){this._vectorTileData=e,this.stage.requestRender(),this._memoryUsed=c},t.prototype.clearSymbolFadeHold=function(){this._symbolFadeHold=null},t.prototype.setSymbolHoldDuration=function(e){this._symbolFadeHold=a()+e},t.prototype.hasData=function(){return Object.keys(this.layerData).length>0},t.prototype.dispose=function(){this._deleteBufferMemory(),this.destroy(),this._memoryUsed=c},t.prototype.release=function(){return 0==--this._referenced&&(this.dispose(),this.attached=!1,this.stage=null,!0)},t.prototype.reference=function(){++this._referenced},Object.defineProperty(t.prototype,"referenced",{get:function(){return this._referenced},enumerable:!0,configurable:!0}),t.prototype.getMemoryUsage=function(){var e=this;return this._memoryUsed===c&&(this._memoryUsed=s.reduce(function(t,r){return e[r]?t+e[r].size:t},0),this.texture&&(this._memoryUsed+=this.texture.descriptor.width*this.texture.descriptor.height*4),this._vectorTileData&&this._vectorTileData.bufferData&&(this._memoryUsed+=this._vectorTileData.bufferData.reduce(function(e,t){return e+t.byteLength},this._vectorTileData.bufferDataInfo.byteLength+this._vectorTileData.bucketDataInfo.byteLength))),this._memoryUsed/(this._referenced||1)},t.prototype.commitChanges=function(){if(this._vectorTileData||this._symbolUpdateData)return this._vectorTileData?(this._deleteBufferMemory(),this._createRenderBuckets(),this._createBufferObjects(),void(this._vectorTileData=null)):void(this._symbolUpdateData&&(this._updateSymbolData(this._symbolUpdateData),this._symbolUpdateData=null))},t.prototype._deleteBufferMemory=function(){for(var e=["fillVertexArrayObject","fillDDVertexArrayObject","outlineVertexArrayObject","lineVertexArrayObject","lineDDVertexArrayObject","iconVertexArrayObject","iconDDVertexArrayObject","textVertexArrayObject","textDDVertexArrayObject","circleVertexArrayObject","fillVertexBuffer","fillDDVertexBuffer","fillIndexBuffer","outlineVertexBuffer","outlineDDVertexBuffer","outlineIndexBuffer","lineVertexBuffer","lineDDVertexBuffer","lineIndexBuffer","iconVertexBuffer","iconDDVertexBuffer","iconIndexBuffer","textVertexBuffer","textDDVertexBuffer","textIndexBuffer","circleVertexBuffer","circleIndexBuffer","texture"],t=0,r=e;t<r.length;t++){var a=r[t];this[a]&&(this[a].dispose(),this[a]=null)}this.layerData={},this.triangleCount=0},t.prototype._createRenderBuckets=function(){for(var e=new Uint32Array(this._vectorTileData.bucketDataInfo),t=e.length,r=0;r<t;){var a=e[r];switch(e[r+1]){case 0:(new f.BackgroundRenderBucket).layerID=a,r+=2;break;case 1:var i=new f.FillRenderBucket;i.layerID=a,i.triangleElementStart=e[r+2],i.triangleElementCount=e[r+3],i.outlineElementStart=e[r+4],i.outlineElementCount=e[r+5],0===i.triangleElementCount&&0===i.outlineElementCount||(this.layerData[a]=i),r+=6;break;case 2:var n=new f.LineRenderBucket;n.layerID=a,n.triangleElementStart=e[r+2],n.triangleElementCount=e[r+3],n.triangleElementCount>0&&(this.layerData[a]=n),r+=4;break;case 3:var o=new f.SymbolRenderBucket;o.layerID=a,o.isSDF=0!==e[r+2];var c=r+3,s=e[c];c++;for(var u=0;u<s;u++){var l=e[c],h=e[c+1],x=e[c+2];o.iconPerPageElementsMap.set(l,[h,x]),c+=3}var d=c,D=e[d];d++;for(var u=0;u<D;u++){var l=e[d],h=e[d+1],x=e[d+2];o.glyphPerPageElementsMap.set(l,[h,x]),d+=3}(o.iconPerPageElementsMap.size>0||o.glyphPerPageElementsMap.size>0)&&(this.layerData[a]=o),r+=5+3*s+3*D;break;case 4:var y=new f.CircleRenderBucket;y.layerID=a,y.triangleElementStart=e[r+2],y.triangleElementCount=e[r+3],y.triangleElementCount>0&&(this.layerData[a]=y),r+=4;break;default:console.error("Bad bucket type!"),r+=2}}},t.prototype.attach=function(){return this._setData},t.prototype.attachWithContext=function(e){this.stage={context:e},this.attached=this.attach()},t.prototype.detach=function(){this.isReady&&this.client&&this.client.invoke("destructTileData",this.id),this.dispose(),e.prototype.detach.call(this)},t.prototype._updateSymbolData=function(e){if(!e||!e.bucketDataInfo)return!0;var t=new Uint32Array(e.bucketDataInfo),r=t.length;if(0===r)return!0;if(!this.isReady)return this.requestRender(),!1;for(var a=this.stage.context,n=new Uint32Array(e.bufferDataInfo),o=n.length,c=0,s=0;s<o;s+=2,c++){switch(n[s]){case 10:this.iconVertexBuffer&&(this.iconVertexBuffer.dispose(),this.iconVertexBuffer=null),this.iconVertexBuffer=i.BufferObject.createVertex(a,35044,e.bufferData[c]);break;case 11:this.iconDDVertexBuffer&&(this.iconDDVertexBuffer.dispose(),this.iconDDVertexBuffer=null),this.iconDDVertexBuffer=i.BufferObject.createVertex(a,35044,e.bufferData[c]);break;case 12:this.iconIndexBuffer&&(this.iconIndexBuffer.dispose(),this.iconIndexBuffer=null),this.iconIndexBuffer=i.BufferObject.createIndex(a,35044,e.bufferData[c]);break;case 13:this.textVertexBuffer&&(this.textVertexBuffer.dispose(),this.textVertexBuffer=null),this.textVertexBuffer=i.BufferObject.createVertex(a,35044,e.bufferData[c]);break;case 14:this.textDDVertexBuffer&&(this.textDDVertexBuffer.dispose(),this.textDDVertexBuffer=null),this.textDDVertexBuffer=i.BufferObject.createVertex(a,35044,e.bufferData[c]);break;case 15:this.textIndexBuffer&&(this.textIndexBuffer.dispose(),this.textIndexBuffer=null),this.textIndexBuffer=i.BufferObject.createIndex(a,35044,e.bufferData[c])}}var u={};for(var l in this.layerData)3!==this.layerData[l].type&&(u[l]=this.layerData[l]);this.layerData=u;for(var h,x=this.styleLayers.layers,d=0;d<r;){var l=t[d];h=new f.SymbolRenderBucket,h.layerID=l,h.isSDF=0!==t[d+2],x.length>h.layerID&&x[h.layerID].type===h.type&&(u[h.layerID]=h);var D=d+3,y=t[D];D++;for(var b=0;b<y;b++){var B=t[D],p=t[D+1],V=t[D+2];h.iconPerPageElementsMap.set(B,[p,V]),D+=3}var v=D,m=t[v];v++;for(var b=0;b<m;b++){var B=t[v],p=t[v+1],V=t[v+2];h.glyphPerPageElementsMap.set(B,[p,V]),v+=3}d+=5+3*y+3*m}return this.iconVertexArrayObject&&(this.iconVertexArrayObject.dispose(),this.iconVertexArrayObject=null),this.iconDDVertexArrayObject&&(this.iconDDVertexArrayObject.dispose(),this.iconDDVertexArrayObject=null),this.textVertexArrayObject&&(this.textVertexArrayObject.dispose(),this.textVertexArrayObject=null),this.textDDVertexArrayObject&&(this.textDDVertexArrayObject.dispose(),this.textDDVertexArrayObject=null),!0},t._createBufferToObject=function(){var e=[];return e[1]={create:i.BufferObject.createVertex,var:"fillVertexBuffer"},e[2]={create:i.BufferObject.createVertex,var:"fillDDVertexBuffer"},e[3]={create:i.BufferObject.createIndex,var:"fillIndexBuffer"},e[4]={create:i.BufferObject.createVertex,var:"outlineVertexBuffer"},e[5]={create:i.BufferObject.createVertex,var:"outlineDDVertexBuffer"},e[6]={create:i.BufferObject.createIndex,var:"outlineIndexBuffer"},e[7]={create:i.BufferObject.createVertex,var:"lineVertexBuffer"},e[8]={create:i.BufferObject.createVertex,var:"lineDDVertexBuffer"},e[9]={create:i.BufferObject.createIndex,var:"lineIndexBuffer"},e[10]={create:i.BufferObject.createVertex,var:"iconVertexBuffer"},e[11]={create:i.BufferObject.createVertex,var:"iconDDVertexBuffer"},e[12]={create:i.BufferObject.createIndex,var:"iconIndexBuffer"},e[13]={create:i.BufferObject.createVertex,var:"textVertexBuffer"},e[14]={create:i.BufferObject.createVertex,var:"textDDVertexBuffer"},e[15]={create:i.BufferObject.createIndex,var:"textIndexBuffer"},e[16]={create:i.BufferObject.createVertex,var:"circleVertexBuffer"},e[17]={create:i.BufferObject.createIndex,var:"circleIndexBuffer"},e},t.prototype._createBufferObjects=function(){for(var e=this.stage.context,r=new Uint32Array(this._vectorTileData.bufferDataInfo),a=r.length,i=0;i<a;i+=2){var f=r[i+1],n=i/2;if(!(f<=0||0===this._vectorTileData.bufferData[n].byteLength)){var o=r[i],c=t.bufferToObject[o];c?this[c.var]?this[c.var].setData(this._vectorTileData.bufferData[n]):this[c.var]=c.create(e,35044,this._vectorTileData.bufferData[n]):console.error("Bad buffer type "+o)}}},t.bufferToObject=t._createBufferToObject(),t}(n.TiledDisplayObject));t.VectorTile=o;var c=-1,s=["fillVertexBuffer","fillDDVertexBuffer","fillIndexBuffer","outlineVertexBuffer","outlineDDVertexBuffer","outlineIndexBuffer","lineVertexBuffer","lineDDVertexBuffer","lineIndexBuffer","iconVertexBuffer","iconDDVertexBuffer","iconIndexBuffer","textVertexBuffer","textDDVertexBuffer","textIndexBuffer","circleVertexBuffer","circleIndexBuffer"]}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/VectorTileContainer.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/VectorTileContainer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../core/iteratorUtils */ "./node_modules/arcgis-js-api/core/iteratorUtils.js"),__webpack_require__(/*! ../../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../../geometry/support/aaBoundingRect */ "./node_modules/arcgis-js-api/geometry/support/aaBoundingRect.js"),__webpack_require__(/*! ../../../webgl */ "./node_modules/arcgis-js-api/views/webgl.js"),__webpack_require__(/*! ../../engine */ "./node_modules/arcgis-js-api/views/2d/engine.js"),__webpack_require__(/*! ../vectorTiles/VectorTile */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/VectorTile.js"),__webpack_require__(/*! ./FadeRecorder */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/FadeRecorder.js"),__webpack_require__(/*! ../webgl/definitions */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/definitions.js"),__webpack_require__(/*! ../webgl/enums */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/enums.js"),__webpack_require__(/*! ../webgl/TiledDisplayObject */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/TiledDisplayObject.js"),__webpack_require__(/*! ../../tiling/TileCoverage */ "./node_modules/arcgis-js-api/views/2d/tiling/TileCoverage.js"),__webpack_require__(/*! ../../tiling/TileKey */ "./node_modules/arcgis-js-api/views/2d/tiling/TileKey.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,s,i,o,a,n,l,d,p,c,h,u,y,f,_,v,g){Object.defineProperty(t,"__esModule",{value:!0});var m=(p.enums.BlendFactor,p.enums.CompareFunction,p.enums.StencilOperation,function(e){function t(t,r){var s=e.call(this,t,r)||this;return s._backgroundTiles=[],s._fadeRecorder=new u.FadeRecorder(400),s._pointToCallbacks=new Map,s._parsedDataQueue=new Map,s}return r(t,e),t.prototype.destroy=function(){this.removeAllChildren(),this.children.forEach(function(e){return e.destroy()})},t.prototype.dispose=function(){this._spriteMosaic&&this._spriteMosaic.dispose(),this._glyphMosaic&&this._glyphMosaic.dispose(),e.prototype.dispose.call(this)},t.prototype.setStyleResources=function(e,t,r){this._spriteMosaic=e,this._glyphMosaic=t,this._styleRepository=r},t.prototype.hitTest=function(e,t){return o(this,void 0,void 0,function(){var r,s;return i(this,function(i){return r=[e,t],s=l.createResolver(),this._pointToCallbacks.set(r,s),this.requestRender(),[2,s.promise]})})},t.prototype.setTileData=function(e,t){var r=this.stage;return r.dataUploadCounter<y.MAX_GPU_UPLOADS_PER_FRAME&&t?(e.setData(t.tileData,t.client,t.refKeys),void r.dataUploadCounter++):t?void this._parsedDataQueue.set(e,t):void e.setData(null,null)},t.prototype.createRenderParams=function(t){return s({},e.prototype.createRenderParams.call(this,t),{renderPass:null,styleLayer:null,styleLayerId:-1,glyphMosaic:this._glyphMosaic,spriteMosaic:this._spriteMosaic,fadeRecorder:this._fadeRecorder,hasClipping:!!this._clippingInfos})},t.prototype.doRender=function(t){!this.visible||t.drawPhase!==f.WGLDrawPhase.MAP&&t.drawPhase!==f.WGLDrawPhase.DEBUG||void 0===this._spriteMosaic||e.prototype.doRender.call(this,t)},t.prototype.createTile=function(e){var t=this._tileInfoView.getTileBounds(d.create(),e),r=new h.VectorTile(e,this._styleRepository,t,[512,512]);return r.rotation=this.stage.state.rotation,r},t.prototype.destroyTile=function(e){e.destroy()},t.prototype.removeChild=function(t){return this._parsedDataQueue.has(t)&&this._parsedDataQueue.delete(t),e.prototype.removeChild.call(this,t)},t.prototype.renderChildren=function(t){if(t.drawPhase===f.WGLDrawPhase.DEBUG)return void e.prototype.renderChildren.call(this,t);var r=this.stage;if(this._parsedDataQueue.size>0&&r.dataUploadCounter<y.MAX_GPU_UPLOADS_PER_FRAME)for(var s=a.pairsOfMap(this._parsedDataQueue),i=0;i<s.length&&r.dataUploadCounter<y.MAX_GPU_UPLOADS_PER_FRAME;i++){var o=s[i][0],n=s[i][1];o.setData(n.tileData,n.client,n.refKeys),this._parsedDataQueue.delete(o),r.dataUploadCounter++}if(this._fadeRecorder.recordLevel(t.displayLevel),this._doRender(t),(this._parsedDataQueue.size>0||this._fadeRecorder.needsRedraw())&&this.requestRender(),this._pointToCallbacks.size>0){var l=t.context,d=l.getBoundFramebufferObject();t.drawPhase=f.WGLDrawPhase.HITTEST;var p=t.painter.effects.hittest;p.bind(t),this._doRender(t),p.draw(t,this._pointToCallbacks,6),l.bindFramebuffer(d)}},t.prototype.removeAllChildren=function(){this._parsedDataQueue.clear();for(var t=0;t<this.children.length;t++){this.children[t].dispose()}e.prototype.removeAllChildren.call(this)},t.prototype._doRender=function(t){var r=t.context,s=this._styleRepository,i=s.layers;s.backgroundBucketIds.length>0&&(t.renderPass="background",this._renderBackgroundLayers(t,s.backgroundBucketIds)),e.prototype.renderChildren.call(this,t);for(var o=this.children.filter(function(e){return e.visible}),a=0,n=o;a<n.length;a++){var l=n[a];l.triangleCount=0,l.commitChanges()}r.setStencilWriteMask(0),r.setColorMask(!0,!0,!0,!0),r.setStencilOp(7680,7680,7681),r.setStencilTestEnabled(!0),r.setBlendingEnabled(!1),r.setDepthTestEnabled(!0),r.setDepthWriteEnabled(!0),r.setDepthFunction(515),r.setClearDepth(1),r.clear(r.gl.DEPTH_BUFFER_BIT),t.renderPass="opaque";for(var d=i.length-1;d>=0;d--)this._renderStyleLayer(d,t,o);r.setDepthWriteEnabled(!1),r.setBlendingEnabled(!0),r.setBlendFunctionSeparate(1,771,1,771),t.renderPass="translucent";for(var d=0;d<i.length;d++)this._renderStyleLayer(d,t,o);r.setDepthTestEnabled(!1),t.renderPass="symbol";for(var d=0;d<i.length;d++)this._renderStyleLayer(d,t,o);r.bindVAO(),r.setStencilTestEnabled(!0)},t.prototype._renderStyleLayer=function(e,t,r){var s=t.painter,i=t.renderPass,o=this._styleRepository,a=o.layers[e];if(void 0!==a){var n;switch(a.type){case 0:return;case 1:if("opaque"!==i&&"translucent"!==t.renderPass)return;n="vtlFill";break;case 2:if("translucent"!==i)return;n="vtlLine";break;case 4:if("symbol"!==i)return;n="vtlCircle";break;case 3:if("symbol"!==i)return;n="vtlSymbol"}var l=t.displayLevel;if(!(0===r.length||void 0!==a.minzoom&&a.minzoom>=l+1e-6||void 0!==a.maxzoom&&a.maxzoom<l-1e-6)){t.styleLayerId=e,t.styleLayer=a;for(var d=0,p=r;d<p.length;d++){if(p[d].layerData[e]){s.renderObjects(t,r,n);break}}}}},t.prototype._renderBackgroundLayers=function(e,t){var r=this._tileInfoView.getTileCoverage(e.state,0,"smallest"),s=r.spans,i=r.lodInfo,o=i.level,a=this._styleRepository,l=e.context,p=e.displayLevel,c=e.painter,h=e.state,u=d.create(),y=[];if(this._renderPasses){var f=this._renderPasses[0];n.isSome(this._clippingInfos)&&(f.brushes[0].prepareState(e,this._clippingInfos[0]),f.brushes[0].drawMany(e,this._clippingInfos))}for(var m,b=this._backgroundTiles,T=0,D=0,C=s;D<C.length;D++)for(var R=C[D],P=R.row,w=R.colFrom,M=R.colTo,S=w;S<=M;S++){if(T<b.length)m=b[T],m.key.set(o,P,i.normalizeCol(S),i.getWorldForColumn(S)),this._tileInfoView.getTileBounds(u,m.key,!1),m.bounds=u,m.coords[0]=u[0],m.coords[1]=u[3];else{var k=new g(o,P,i.normalizeCol(S),i.getWorldForColumn(S));m=new _.TiledDisplayObject(k,this._tileInfoView.getTileBounds(d.create(),k),[512,512],[4096,4096]),b.push(m)}m.setTransform(h,this._tileInfoView.getTileResolution(m.key)),y.push(m),T++}l.setStencilWriteMask(0),l.setColorMask(!0,!0,!0,!0),l.setStencilOp(7680,7680,7681),l.setStencilFunction(514,0,255),l.setStencilTestEnabled(!0);for(var L=0,E=t;L<E.length;L++){var B=E[L],F=a.layers[B];!F||void 0!==F.minzoom&&F.minzoom>=p+1e-6||void 0!==F.maxzoom&&F.maxzoom<p-1e-6||(e.styleLayerId=B,e.styleLayer=F,c.renderObjects(e,y,"vtlBackground"))}v.pool.release(r)},t}(c.TileContainer));t.VectorTileContainer=m}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/VectorTileLayerView2D.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/VectorTileLayerView2D.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../Graphic */ "./node_modules/arcgis-js-api/Graphic.js"),__webpack_require__(/*! ../../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../../core/Handles */ "./node_modules/arcgis-js-api/core/Handles.js"),__webpack_require__(/*! ../../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../engine/vectorTiles/TileHandler */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/TileHandler.js"),__webpack_require__(/*! ../engine/vectorTiles/VectorTileContainer */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/VectorTileContainer.js"),__webpack_require__(/*! ./LayerView2D */ "./node_modules/arcgis-js-api/views/2d/layers/LayerView2D.js"),__webpack_require__(/*! ../tiling/TileInfoViewPOT */ "./node_modules/arcgis-js-api/views/2d/tiling/TileInfoViewPOT.js"),__webpack_require__(/*! ../tiling/TileQueue */ "./node_modules/arcgis-js-api/views/2d/tiling/TileQueue.js"),__webpack_require__(/*! ../tiling/TileStrategy */ "./node_modules/arcgis-js-api/views/2d/tiling/TileStrategy.js"),__webpack_require__(/*! ../../layers/LayerView */ "./node_modules/arcgis-js-api/views/layers/LayerView.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,r,n,a,s,l,o,u,c,h,p,d,f,y,_,v,g){var w=u.getLogger("esri.views.2d.layers.VectorTileLayerView2D");return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new o,t._fetchQueue=null,t._parseQueue=null,t._isTileHandlerPromiseFulfilled=!1,t._invalidateStyle=!1,t}return i(t,e),t.prototype.initialize=function(){var e=this,t=this.layer.tileInfo;if(!(t&&t.spatialReference).equals(this.view.spatialReference))return void this.addResolvingPromise(c.reject(new l("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})));this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent),this.container=new d.VectorTileContainer(this._tileInfoView,this.clips),this._tileHandler=new p.TileHandler(this.layer,window.devicePixelRatio||1,!0,this.container,null),this.handles.add([this.watch("layer.currentStyleInfo",function(){return e._start()}),this.clips.on("change",function(){return e.container.setClips(e.clips)})])},t.prototype.destroy=function(){this._stop(),this.container.dispose(),this._tileHandler&&(this._tileHandler.destroy(),this._tileHandler=null)},t.prototype.hitTest=function(e,t){return a(this,void 0,void 0,function(){var i,r,a,l,o;return n(this,function(n){switch(n.label){case 0:return this.suspended||!this._tileHandlerPromise?[2,null]:[4,this._tileHandlerPromise];case 1:return n.sent(),[4,this.container.hitTest(e,t)];case 2:return(i=n.sent())&&0!==i.length?(r=i[0],a=this._tileHandler.getStyleRepository().layers,r>=a.length?[2,null]:(l=a[r],o=new s({attributes:{layerId:r,layerName:l.id}}),o.layer=this.layer,o.sourceLayer=this.layer,[2,o])):[2,null]}})})},t.prototype.update=function(e){var t=this;this.notifyChange("updating");var i=this._tileHandlerPromise;i&&i.then(function(){if(e.pixelRatio!==t._tileHandler.devicePixelRatio)return t._start(),void(t._tileHandler.devicePixelRatio=e.pixelRatio);t._invalidateStyle?(t._issueStyleInvalidation(),t._invalidateStyle=!1):(t._fetchQueue.pause(),t._parseQueue.pause(),t._fetchQueue.state=e.state,t._parseQueue.state=e.state,t._tileStrategy.update(e),t._parseQueue.resume(),t._fetchQueue.resume());for(var i=t.container.children,r=0,n=i;r<n.length;r++){var a=n[r];t._tileHandler.updateTile(a,e)}})},t.prototype.attach=function(){var e=this;this._start(),this._handles.add(this.layer.on("paint-change",function(){return e.container.requestRender()})),this._handles.add(this.layer.on("layout-change",function(){e._invalidateStyle=!0,e.requestUpdate()}))},t.prototype.detach=function(){this._stop(),this._handles.removeAll()},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.canResume=function(){var e=this.inherited(arguments),t=this.layer,i=t;if(e&&i.currentStyleInfo){var r=this.view.scale,n=i.currentStyleInfo;if(n&&n.layerDefinition){var a=n.layerDefinition;a.minScale&&a.minScale<r&&(e=!1),a.maxScale&&a.maxScale>r&&(e=!1)}}return e},t.prototype.isUpdating=function(){return!this._isTileHandlerPromiseFulfilled||this._fetchQueue.updating||this._parseQueue.updating},t.prototype.acquireTile=function(e){var t=this,i=this.container.createTile(e);return this._tileHandlerPromise.then(function(){t.notifyChange("updating"),t._fetchQueue.push(i.key).then(function(e){return t._parseQueue.push(e)}).then(function(e){i.once("attach",function(){return t.requestUpdate()}),t.container.setTileData(i,e),t.container.addChild(i),t.notifyChange("updating")}).catch(function(e){t.notifyChange("updating"),c.isAbortError(e)||w.error(e),i.destroy()})}),i},t.prototype.releaseTile=function(e){var t=e.key.id;this._fetchQueue.abort(t),this._parseQueue.abort(t),this._tileHandler.abortTileUpdate(t),this.container.removeChild(e),this.requestUpdate(),this.notifyChange("updating")},t.prototype._start=function(){var e=this;if(this._stop(),this.layer.currentStyleInfo&&this.attached){var t=new AbortController,i=this._tileHandler.start({signal:t.signal}).then(function(){e._tileStrategy=new v({cachePolicy:"keep",coveragePolicy:"smallest",acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:e._tileInfoView,cacheSize:40,buffer:0}),e._fetchQueue=new _({tileInfoView:e._tileInfoView,process:function(t,i){return e._getTileData(t,i)},concurrency:15}),e._parseQueue=new _({tileInfoView:e._tileInfoView,process:function(t,i){return e._parseTileData(t,i)},concurrency:8}),e.requestUpdate(),e._isTileHandlerPromiseFulfilled=!0});this._tileHandler.spriteMosaic.then(function(t){e.container.setStyleResources(t,e._tileHandler.glyphMosaic,e.layer.styleRepository),e.requestUpdate()}),this._tileHandlerAbortController=t,this._tileHandlerPromise=i}},t.prototype._stop=function(){if(this._tileHandlerAbortController){var e=this._tileHandlerAbortController;e&&e.abort(),this._tileHandlerPromise=null,this._isTileHandlerPromiseFulfilled=!1,this._fetchQueue&&(this._fetchQueue.destroy(),this._fetchQueue=null),this._parseQueue&&(this._parseQueue.destroy(),this._parseQueue=null),this._tileStrategy&&(this._tileStrategy.destroy(),this._tileStrategy=null),this.container.removeAllChildren()}},t.prototype._getTileData=function(e,t){return a(this,void 0,void 0,function(){var i;return n(this,function(r){switch(r.label){case 0:return[4,this._tileHandler.fetchTileData(e,t)];case 1:return i=r.sent(),this.notifyChange("updating"),[2,{key:e,data:i}]}})})},t.prototype._parseTileData=function(e,t){return a(this,void 0,void 0,function(){return n(this,function(i){return[2,this._tileHandler.parseTileData(e,this.updateParameters.state.rotation,t)]})})},t.prototype._issueStyleInvalidation=function(){var e=this;this.notifyChange("updating"),this._tileHandlerPromise=this._tileHandler.updateStyle().then(function(){e._tileHandler.spriteMosaic.then(function(t){return e.container.setStyleResources(t,e._tileHandler.glyphMosaic,e.layer.styleRepository)}),e._fetchQueue.pause(),e._parseQueue.pause(),e._fetchQueue.clear(),e._parseQueue.clear(),e._parseQueue.resume(),e._fetchQueue.resume(),e.notifyChange("updating"),e.requestUpdate()})},r([h.property({dependsOn:["view.scale","layer.currentStyleInfo"]})],t.prototype,"suspended",void 0),t=r([h.subclass("esri.views.2d.layers.VectorTileLayerView2D")],t)}(h.declared(f.LayerView2D(g)))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/tiling/TileInfoViewPOT.js":
/*!***********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/tiling/TileInfoViewPOT.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../layers/support/TileInfo */ "./node_modules/arcgis-js-api/layers/support/TileInfo.js"),__webpack_require__(/*! ./TileInfoView */ "./node_modules/arcgis-js-api/views/2d/tiling/TileInfoView.js"),__webpack_require__(/*! ./TileKey */ "./node_modules/arcgis-js-api/views/2d/tiling/TileKey.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,l,t,r,o,n,i){return function(e){function l(){var l=null!==e&&e.apply(this,arguments)||this;return l._fullCacheLodInfos=null,l._levelByScale={},l}return t(l,e),l.prototype.getTileParentId=function(e){var l=i.pool.acquire(e),t=0===l.level?null:i.getId(l.level-1,l.row>>1,l.col>>1,l.world);return i.pool.release(l),t},l.prototype.getTileCoverage=function(l,t,r){var o=e.prototype.getTileCoverage.call(this,l,t,r);if(!o)return o;var n=1<<o.lodInfo.level;return o.spans=o.spans.filter(function(e){return e.row>=0&&e.row<n}),o},l.prototype.scaleToLevel=function(e){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[e])return this._levelByScale[e];var l=this._fullCacheLodInfos;if(e>l[0].scale)return l[0].level;for(var t=void 0,r=void 0,o=0;o<l.length-1;o++)if(r=l[o+1],e>r.scale)return t=l[o],t.level+(t.scale-e)/(t.scale-r.scale);return l[l.length-1].level},l.prototype._initializeFullCacheLODs=function(e){var l;if(0===e[0].level)l=e.map(function(e){return{level:e.level,resolution:e.resolution,scale:e.scale}});else{var t=this.tileInfo.size[0],r=this.tileInfo.spatialReference;l=o.create({size:t,spatialReference:r}).lods.map(function(e){return{level:e.level,resolution:e.resolution,scale:e.scale}})}for(var n=0;n<l.length;n++)this._levelByScale[l[n].scale]=l[n].level;this._fullCacheLodInfos=l},l}(n)}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=80.js.map