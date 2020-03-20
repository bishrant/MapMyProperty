(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/views/2d/engine/vectorTiles/BackgroundBucket":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/BackgroundBucket.js",
	"esri/views/2d/engine/vectorTiles/Bucket":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/Bucket.js",
	"esri/views/2d/engine/vectorTiles/CircleBucket":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/CircleBucket.js",
	"esri/views/2d/engine/vectorTiles/Conflict":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/Conflict.js",
	"esri/views/2d/engine/vectorTiles/Feature":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/Feature.js",
	"esri/views/2d/engine/vectorTiles/FillBucket":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/FillBucket.js",
	"esri/views/2d/engine/vectorTiles/IndexMemoryBuffer":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/IndexMemoryBuffer.js",
	"esri/views/2d/engine/vectorTiles/LineBucket":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/LineBucket.js",
	"esri/views/2d/engine/vectorTiles/MemoryBuffer":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/MemoryBuffer.js",
	"esri/views/2d/engine/vectorTiles/Placement":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/Placement.js",
	"esri/views/2d/engine/vectorTiles/SourceLayerData":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/SourceLayerData.js",
	"esri/views/2d/engine/vectorTiles/SymbolBucket":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/SymbolBucket.js",
	"esri/views/2d/engine/vectorTiles/TileParser":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/TileParser.js",
	"esri/views/2d/engine/vectorTiles/VertexMemoryBuffer":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/VertexMemoryBuffer.js",
	"esri/views/2d/engine/vectorTiles/WorkerTile":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/WorkerTile.js",
	"esri/views/2d/engine/vectorTiles/WorkerTileHandler":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/WorkerTileHandler.js",
	"esri/views/2d/tiling/enums":"./node_modules/arcgis-js-api/views/2d/tiling/enums.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/BackgroundBucket.js":
/*!************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/BackgroundBucket.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ./Bucket */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/Bucket.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,n,r){return function(e){function t(t,n){return e.call(this,t,n)||this}return n(t,e),t.prototype.processFeatures=function(){},t.prototype.assignBufferInfo=function(){},t}(r)}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/Bucket.js":
/*!**************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/Bucket.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e){return function(){function t(t,e){this.layerExtent=4096,this._features=[],this.layer=t,this.zoom=e,this._filter=t.getFeatureFilter()}return t.prototype.pushFeature=function(t){this._filter.filter(t)&&this._features.push(t)},t.prototype.hasFeatures=function(){return this._features.length>0},t}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/CircleBucket.js":
/*!********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/CircleBucket.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ./Bucket */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/Bucket.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i){return function(e){function t(t,r,i,a){var n=e.call(this,t,r)||this;return n._circleVertexBuffer=i,n._circleIndexBuffer=a,n}return r(t,e),Object.defineProperty(t.prototype,"circleIndexStart",{get:function(){return this._circleIndexStart},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"circleIndexCount",{get:function(){return this._circleIndexCount},enumerable:!0,configurable:!0}),t.prototype.assignBufferInfo=function(e){var t=e;t._circleIndexStart=this._circleIndexStart,t._circleIndexCount=this._circleIndexCount},t.prototype.processFeatures=function(e){var t=this._circleVertexBuffer,r=this._circleIndexBuffer;this._circleIndexStart=r.index,this._circleIndexCount=0;var i=this.layer,a=this.zoom;e&&e.setExtent(this.layerExtent);for(var n=1,c=[1,1,1,1],o=1,l=0,u=1,s=[1,1,1,1],d=1,f=0,h=this._features;f<h.length;f++){var x=h[f],p=x.getGeometry(e);if(p){i.hasDataDrivenRadius&&(n=i.getPaintValue("circle-radius",a,x)),i.hasDataDrivenColor&&(c=i.getPaintValue("circle-color",a,x)),i.hasDataDrivenOpacity&&(o=i.getPaintValue("circle-opacity",a,x)),i.hasDataDrivenStrokeWidth&&(u=i.getPaintValue("circle-stroke-width",a,x)),i.hasDataDrivenStrokeColor&&(s=i.getPaintValue("circle-stroke-color",a,x)),i.hasDataDrivenStrokeOpacity&&(d=i.getPaintValue("circle-stroke-opacity",a,x)),i.hasDataDrivenBlur&&(l=i.getPaintValue("circle-blur",a,x));for(var v=0,y=p;v<y.length;v++){var g=y[v];if(g)for(var D=0,I=g;D<I.length;D++){var _=I[D],P=t.index;t.add(_.x,_.y,0,0,n,c,o,l,u,s,d),t.add(_.x,_.y,0,1,n,c,o,l,u,s,d),t.add(_.x,_.y,1,0,n,c,o,l,u,s,d),t.add(_.x,_.y,1,1,n,c,o,l,u,s,d),r.add(P+0,P+1,P+2),r.add(P+1,P+2,P+3),this._circleIndexCount+=6}}}}},t}(i)}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/Conflict.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/Conflict.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/mathUtils */ "./node_modules/arcgis-js-api/core/mathUtils.js"),__webpack_require__(/*! ./GeometryUtils */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GeometryUtils.js"),__webpack_require__(/*! ../webgl/Geometry */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/Geometry.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(r,o,n,t,e){Object.defineProperty(o,"__esModule",{value:!0});var c=function(){function r(r,o,n,t){this.left=r,this.top=o,this.right=n,this.bottom=t}return r.prototype.clone=function(){return new r(this.left,this.top,this.right,this.bottom)},r.prototype.move=function(r,o){this.left+=r,this.top+=o,this.right+=r,this.bottom+=o},r.prototype.rotate=function(r,o){var n=this.left,t=this.right,e=this.top,c=this.bottom,s=n*r-e*o,i=n*o+e*r,a=t*r-e*o,h=t*o+e*r,x=n*r-c*o,m=n*o+c*r,y=t*r-c*o,f=t*o+c*r;this.left=Math.min(s,a,x,y),this.top=Math.min(i,h,m,f),this.right=Math.max(s,a,x,y),this.bottom=Math.max(i,h,m,f)},r.overlaps=function(r,o){return r.right>o.left&&r.left<o.right&&r.bottom>o.top&&r.top<o.bottom},r}();o.Box=c;var s=function(){function r(r,o,n,t){this.anchor=r,this.corners=o,this.minzoom=n,this.maxzoom=t}return r.prototype.left=function(){return this.corners[0].x},r.prototype.right=function(){return this.corners[2].x},r.prototype.top=function(){return this.corners[1].y},r.prototype.bottom=function(){return this.corners[3].y},r}();o.Obstacle=s;var i=function(){function r(r,o,n){this.obstacles=[],this.mapAngle=r,this.padding=o,this.isScreenAligned=n,this.minzoom=a}return r.prototype.addBox=function(r,o,n,t,c,i,a){var h=o.left*n-this.padding,x=o.top*n-this.padding,m=o.right*n+this.padding,y=o.bottom*n+this.padding,f=[new e.Point(h,x),new e.Point(m,x),new e.Point(m,y),new e.Point(h,y)];if(0!==this.mapAngle){var l=Math.cos(this.mapAngle),p=Math.sin(this.mapAngle);r=r.clone(),r.rotate(l,p)}if(this.isScreenAligned||(t+=this.mapAngle),0!==t){var l=Math.cos(t),p=Math.sin(t);f[0].rotate(l,p),f[1].rotate(l,p),f[2].rotate(l,p),f[3].rotate(l,p);for(var u=0,g=1;g<4;g++)f[g].x<f[u].x?u=g:f[g].x===f[u].x&&f[g].y<f[u].y&&(u=g);if(u){for(var v=[],g=0;g<4;g++)v.push(f[(g+u)%4]);f=v}}if(c)for(var d=0,_=f;d<_.length;d++){var b=_[d];b.move(c[0],c[1])}this.obstacles.push(new s(r,f,i,a))},r}();o.Footprint=i;var a=.5,h=function(){function r(){this._grid=[]}return r.prototype.reset=function(){this._grid=[]},r.prototype.add=function(o){for(var n=this._grid,t=0,e=o.obstacles;t<e.length;t++)for(var c=e[t],s=c.anchor,i=r._gridClamp(Math.min(c.left()+s.x,s.x)),a=r._gridClamp(Math.max(c.right()+s.x,s.x)),h=r._gridClamp(Math.min(c.top()+s.y,s.y)),x=r._gridClamp(Math.max(c.bottom()+s.y,s.y)),m=h;m<=x;m++)for(var y=i;y<=a;y++){var f=n[16*m+y];f||(f=n[16*m+y]=[]),f.push(c)}},r.prototype.getMinZoom=function(o,n){if(0===o.obstacles.length)return t.C_INFINITY;for(var e=n,c=this._grid,s=0,i=o.obstacles;s<i.length;s++)for(var a=i[s],h=a.anchor,x=r._gridClamp(Math.min(a.left()+h.x,h.x)),m=r._gridClamp(Math.max(a.right()+h.x,h.x)),y=r._gridClamp(Math.min(a.top()+h.y,h.y)),f=r._gridClamp(Math.max(a.bottom()+h.y,h.y)),l=y;l<=f;l++)for(var p=x;p<=m;p++){var u=c[16*l+p];if(u)for(var g=0,v=u;g<v.length;g++){var d=v[g];if(!(a.minzoom>=d.maxzoom||d.minzoom>=a.maxzoom)&&(e=r._calcPlacementZoom(a,d,e))>=2)return t.C_INFINITY}}return e<2?e:t.C_INFINITY},r._gridClamp=function(r){return n.clamp(r>>9,-7,8)},r._calcPlacementZoom=function(o,n,e){var c=n.anchor.x-o.anchor.x;if(0===c&&(o.right()<n.left()||n.right()<o.left()))return e;var s=n.anchor.y-o.anchor.y;if(0===s&&(o.bottom()<n.top()||n.bottom()<o.top()))return e;var i=t.C_INFINITY;if(0!==c){var a=c>0?o.right()-n.left():o.left()-n.right(),h=a/c;h<i&&(i=h);var x=c>0?r._calcExtZoomX(o,n,h):r._calcExtZoomX(n,o,h);x<i&&(i=x)}if(0!==s){var m=s>0?o.bottom()-n.top():o.top()-n.bottom(),y=m/s;y<i&&(i=y);var f=s>0?r._calcExtZoomY(o,n,y):r._calcExtZoomY(n,o,y);f<i&&(i=f)}return i<o.minzoom||i<n.minzoom?e:(i=Math.min(i,o.maxzoom,n.maxzoom),i<e&&(i=e),i)},r._calcExtZoomX=function(r,o,n){var t,e,c,s;if(r.anchor.y+r.corners[2].y/n<o.anchor.y+o.corners[0].y/n){var i=r.corners[2].x-r.corners[3].x,a=r.corners[2].y-r.corners[3].y,h=o.corners[1].x-o.corners[0].x,x=o.corners[1].y-o.corners[0].y,m=i*x-a*h;m>=0?r.anchor.y+r.corners[3].y/n<o.anchor.y+o.corners[0].y/n?(t=r.corners[3],e=o.corners[0],c=o.corners[1],s=1):(t=o.corners[0],e=r.corners[3],c=r.corners[2],s=-1):r.anchor.y+r.corners[2].y/n>o.anchor.y+o.corners[1].y/n?(t=r.corners[2],e=o.corners[0],c=o.corners[1],s=1):(t=o.corners[1],e=r.corners[3],c=r.corners[2],s=-1)}else{var i=r.corners[2].x-r.corners[1].x,a=r.corners[2].y-r.corners[1].y,h=o.corners[3].x-o.corners[0].x,x=o.corners[3].y-o.corners[0].y,m=i*x-a*h;m<0?r.anchor.y+r.corners[1].y/n>o.anchor.y+o.corners[0].y/n?(t=r.corners[1],e=o.corners[0],c=o.corners[3],s=1):(t=o.corners[0],e=r.corners[1],c=r.corners[2],s=-1):r.anchor.y+r.corners[2].y/n<o.anchor.y+o.corners[3].y/n?(t=r.corners[2],e=o.corners[0],c=o.corners[3],s=1):(t=o.corners[3],e=r.corners[1],c=r.corners[2],s=-1)}var y=c.x-e.x,f=c.y-e.y;return s*((t.y-e.y)*y-(t.x-e.x)*f)/((r.anchor.x-o.anchor.x)*f-(r.anchor.y-o.anchor.y)*y)},r._calcExtZoomY=function(r,o,n){var t,e,c,s;if(r.anchor.x+r.corners[3].x/n<o.anchor.x+o.corners[1].x/n){var i=r.corners[3].x-r.corners[2].x,a=r.corners[3].y-r.corners[2].y,h=o.corners[0].x-o.corners[1].x,x=o.corners[0].y-o.corners[1].y,m=i*x-a*h;m<0?r.anchor.x+r.corners[2].x/n<o.anchor.x+o.corners[1].x/n?(t=r.corners[2],e=o.corners[1],c=o.corners[0],s=1):(t=o.corners[1],e=r.corners[2],c=r.corners[3],s=-1):r.anchor.x+r.corners[3].x/n>o.anchor.x+o.corners[0].x/n?(t=r.corners[3],e=o.corners[1],c=o.corners[0],s=1):(t=o.corners[0],e=r.corners[2],c=r.corners[3],s=-1)}else{var i=r.corners[3].x-r.corners[0].x,a=r.corners[3].y-r.corners[0].y,h=o.corners[2].x-o.corners[1].x,x=o.corners[2].y-o.corners[1].y,m=i*x-a*h;m>0?r.anchor.x+r.corners[0].x/n>o.anchor.x+o.corners[1].x/n?(t=r.corners[0],e=o.corners[1],c=o.corners[2],s=1):(t=o.corners[1],e=r.corners[0],c=r.corners[3],s=-1):r.anchor.x+r.corners[3].x/n<o.anchor.x+o.corners[2].x/n?(t=r.corners[3],e=o.corners[1],c=o.corners[2],s=1):(t=o.corners[2],e=r.corners[0],c=r.corners[3],s=-1)}var y=c.x-e.x,f=c.y-e.y;return s*((t.y-e.y)*y-(t.x-e.x)*f)/((r.anchor.x-o.anchor.x)*f-(r.anchor.y-o.anchor.y)*y)},r}();o.ConflictEngine=h}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/Feature.js":
/*!***************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/Feature.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../webgl/Geometry */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/Geometry.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r){return function(){function e(e,t){this.values={};for(var r=t.keys,s=t.values;e.next();)switch(e.tag()){case 1:this.id=e.getUInt64();break;case 2:for(var a=e.getMessage(),n=this.values;!a.empty();){var i=a.getUInt32(),o=a.getUInt32();n[r[i]]=s[o]}a.release();break;case 3:this.type=e.getUInt32();break;case 4:this._pbfGeometry=e.getMessage();break;default:e.skip()}}return e.prototype.getGeometry=function(e){if(void 0!==this._geometry)return this._geometry;if(!this._pbfGeometry)return null;var t=this._pbfGeometry;this._pbfGeometry=null;var s,a;e?e.reset(this.type):s=[];for(var n=1,i=0,o=0,u=0;!t.empty();){if(0===i){var h=t.getUInt32();n=7&h,i=h>>3}switch(i--,n){case 1:o+=t.getSInt32(),u+=t.getSInt32(),e?e.moveTo(o,u):(a&&s.push(a),a=[],a.push(new r.Point(o,u)));break;case 2:o+=t.getSInt32(),u+=t.getSInt32(),e?e.lineTo(o,u):a.push(new r.Point(o,u));break;case 7:e?e.close():a&&!a[0].equals(o,u)&&a.push(a[0].clone());break;default:throw t.release(),new Error("Invalid path operation")}}var g;return e?g=e.result():(a&&s.push(a),g=s),t.release(),this._geometry=g,g},e}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/FillBucket.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/FillBucket.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ../../../../core/ArrayPool */ "./node_modules/arcgis-js-api/core/ArrayPool.js"),__webpack_require__(/*! ../../../../core/libs/earcut/earcut */ "./node_modules/arcgis-js-api/core/libs/earcut/earcut.js"),__webpack_require__(/*! ./Bucket */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/Bucket.js"),__webpack_require__(/*! ../webgl/Geometry */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/Geometry.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,r,n,a,l){return function(e){function t(t,i,r,n,a,l){var o=e.call(this,t,i)||this;if(t.hasDataDrivenFill!==r.isDataDriven())throw new Error("incompatible fill buffer");if(t.hasDataDrivenOutline!==a.isDataDriven())throw new Error("incompatible outline buffer");return o._fillVertexBuffer=r,o._fillIndexBuffer=n,o._outlineVertexBuffer=a,o._outlineIndexBuffer=l,o}return i(t,e),Object.defineProperty(t.prototype,"fillIndexStart",{get:function(){return this._fillIndexStart},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fillIndexCount",{get:function(){return this._fillIndexCount},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"outlineIndexStart",{get:function(){return this._outlineIndexStart},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"outlineIndexCount",{get:function(){return this._outlineIndexCount},enumerable:!0,configurable:!0}),t.prototype.assignBufferInfo=function(e){var t=e;t._fillIndexStart=this._fillIndexStart,t._fillIndexCount=this._fillIndexCount,e.layer.getPaintProperty("fill-outline-color")?(t._outlineIndexStart=this._outlineIndexStart,t._outlineIndexCount=this._outlineIndexCount):(t._outlineIndexStart=0,t._outlineIndexCount=0)},t.prototype.processFeatures=function(e){this._fillIndexStart=this._fillIndexBuffer.index,this._fillIndexCount=0,this._outlineIndexStart=this._outlineIndexBuffer.index,this._outlineIndexCount=0;var t=this.layer,i=this.zoom,r=t.hasDataDrivenFill,n=t.hasDataDrivenOutline;e&&e.setExtent(this.layerExtent);var a=t.getPaintValue("fill-pattern",i),l=t.getPaintValue("fill-antialias",i)&&void 0===a,o=[1,1,1,1],u=[1,1,1,1],f=1;if(t.outlineUsesFillColor){if(l&&!t.hasDataDrivenOpacity){var d=t.getPaintValue("fill-opacity",i),s=t.getPaintValue("fill-opacity",i+1);d<1&&s<1&&(l=!1)}if(l&&!t.hasDataDrivenColor){var x=t.getPaintValue("fill-color",i),h=t.getPaintValue("fill-color",i+1);x[3]<1&&h[3]<1&&(l=!1)}}for(var c=0,y=this._features;c<y.length;c++){var p=y[c];!a&&t.hasDataDrivenColor&&(o=t.getPaintValue("fill-color",i,p)),t.hasDataDrivenOpacity&&(f=t.getPaintValue("fill-opacity",i,p)),!a&&t.hasDataDrivenOutlineColor&&(u=t.getPaintValue("fill-outline-color",i,p));var v=void 0;r&&(v={color:o,opacity:f});var _=void 0;n&&(_={color:t.outlineUsesFillColor?o:u,opacity:f});var g=p.getGeometry(e);this._processFeature(g,l,t.outlineUsesFillColor,v,_)}},t.prototype._processFeature=function(e,i,r,n,a){if(e){var l=e.length;if(i&&(!r||!a||a.color[3]*a.opacity==1))for(var o=0;o<l;o++)this._processOutline(e[o],a);for(var u,o=0;o<l;o++){var f=t._area(e[o]);f>128?(void 0!==u&&this._processFill(e,u,n),u=[o]):f<-128&&void 0!==u&&u.push(o)}void 0!==u&&this._processFill(e,u,n)}},t.prototype._processOutline=function(e,t){var i,r,n,a=this._outlineVertexBuffer,o=this._outlineIndexBuffer,u=o.index,f=new l.Point(0,0),d=new l.Point(0,0),s=new l.Point(0,0),x=-1,h=-1,c=-1,y=-1,p=-1,v=!1,_=e.length;if(!(_<2)){for(var g=e[0],I=e[_-1];_&&I.isEqual(g);)--_,I=e[_-1];if(!(_-0<2)){for(var D=0;D<_;++D){0===D?(i=e[_-1],r=e[0],n=e[1],f.assignSub(r,i),f.normalize(),f.rightPerpendicular()):(i=r,r=n,n=D!==_-1?e[D+1]:e[0],f.assign(d));var b=this._isClipEdge(i,r);-1===y&&(v=b),d.assignSub(n,r),d.normalize(),d.rightPerpendicular();var C=f.x*d.y-f.y*d.x;s.assignAdd(f,d),s.normalize();var P=-s.x*-f.x+-s.y*-f.y,S=Math.abs(0!==P?1/P:1);S>8&&(S=8),C>=0?(c=a.add(r.x,r.y,f.x,f.y,0,1,t),-1===y&&(y=c),x>=0&&h>=0&&c>=0&&!b&&o.add(x,h,c),h=a.add(r.x,r.y,S*-s.x,S*-s.y,0,-1,t),-1===p&&(p=h),x>=0&&h>=0&&c>=0&&!b&&o.add(x,h,c),x=h,h=c,c=a.add(r.x,r.y,s.x,s.y,0,1,t),x>=0&&h>=0&&c>=0&&!b&&o.add(x,h,c),h=a.add(r.x,r.y,d.x,d.y,0,1,t),x>=0&&h>=0&&c>=0&&!b&&o.add(x,h,c)):(c=a.add(r.x,r.y,S*s.x,S*s.y,0,1,t),-1===y&&(y=c),x>=0&&h>=0&&c>=0&&!b&&o.add(x,h,c),h=a.add(r.x,r.y,-f.x,-f.y,0,-1,t),-1===p&&(p=h),x>=0&&h>=0&&c>=0&&!b&&o.add(x,h,c),x=h,h=c,c=a.add(r.x,r.y,-s.x,-s.y,0,-1,t),x>=0&&h>=0&&c>=0&&!b&&o.add(x,h,c),(x=a.add(r.x,r.y,-d.x,-d.y,0,-1,t))>=0&&h>=0&&c>=0&&!b&&o.add(x,h,c))}x>=0&&h>=0&&y>=0&&!v&&o.add(x,h,y),x>=0&&y>=0&&p>=0&&!v&&o.add(x,p,y),this._outlineIndexCount+=3*(o.index-u)}}},t.prototype._processFill=function(e,t,i){var a,l=t.length;l>1&&(a=[]);for(var o=0,u=0,f=t;u<f.length;u++){var d=f[u];0!==o&&a.push(o),o+=e[d].length}for(var s=2*o,x=r.acquire(),h=0,c=t;h<c.length;h++)for(var d=c[h],y=e[d],p=y.length,v=0;v<p;++v)x.push(y[v].x),x.push(y[v].y);var _=n(x,a,2),g=_.length;if(g>0){for(var I=this._fillVertexBuffer.index,D=0;D<s;)this._fillVertexBuffer.add(x[D++],x[D++],i);for(var b=0;b<g;)this._fillIndexBuffer.add(I+_[b++],I+_[b++],I+_[b++]);this._fillIndexCount+=g}r.release(x)},t.prototype._isClipEdge=function(e,t){return e.x===t.x?e.x<=-64||e.x>=4160:e.y===t.y&&(e.y<=-64||e.y>=4160)},t._area=function(e){for(var t=0,i=e.length-1,r=0;r<i;r++)t+=(e[r].x-e[r+1].x)*(e[r].y+e[r+1].y);return.5*(t+=(e[i].x-e[0].x)*(e[i].y+e[0].y))},t}(a)}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/IndexMemoryBuffer.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/IndexMemoryBuffer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ./MemoryBuffer */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/MemoryBuffer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,n){Object.defineProperty(r,"__esModule",{value:!0});var u=function(e){function r(){return e.call(this,12)||this}return t(r,e),r.prototype.add=function(e,r,t){var n=this.array;n.push(e),n.push(r),n.push(t)},r}(n);r.TriangleIndexBuffer=u;var o=function(e){function r(){return e.call(this,4)||this}return t(r,e),r.prototype.add=function(e){this.array.push(e)},r}(n);r.PointElementMemoryBuffer=o}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/LineBucket.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/LineBucket.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ../../../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../../../../symbols/cim/enums */ "./node_modules/arcgis-js-api/symbols/cim/enums.js"),__webpack_require__(/*! ./Bucket */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/Bucket.js"),__webpack_require__(/*! ./style/StyleLayer */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/StyleLayer.js"),__webpack_require__(/*! ../webgl/TurboLine */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/TurboLine.js"),__webpack_require__(/*! ../webgl/mesh/templates/util */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/mesh/templates/util.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,n,i,x,l,s,a){var d=0,u=0,o=0;n("esri-tiles-performance")&&setInterval(function(){console.log("New (VTL)","feat="+o,"secs="+d,"tris="+u,"tris/sec="+Math.round(u/d))},1e4);var f=function(e){return function(r){r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.prevNormal.x,r.prevNormal.y,0,-1,r.distance,e._ddValues),r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.prevNormal.x,-r.prevNormal.y,0,1,r.distance,e._ddValues),r.exit0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.nextNormal.x,r.nextNormal.y,0,-1,r.distance,e._ddValues),r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.nextNormal.x,-r.nextNormal.y,0,1,r.distance,e._ddValues)}},c=function(e){return function(r){e._lineIndexBuffer.add(r.leftExit0,r.rightEntry0,r.leftExit2),e._lineIndexBuffer.add(r.rightEntry0,r.rightEntry2,r.leftExit2)}},V=function(e){return function(r){var t=e._joinType===i.JoinType.MITER?e._miterLimitCosine:e._roundLimitCosine,n=r.isCap&&e._capType!==i.CapType.BUTT,x=!1;r.cosine>.97?(r.exit0=r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.bisector.x/r.cosine,r.bisector.y/r.cosine,0,-1,r.distance,e._ddValues),r.exit2=r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.bisector.x/r.cosine,-r.bisector.y/r.cosine,0,1,r.distance,e._ddValues)):r.cosine<1-.97?(r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.prevNormal.x,r.prevNormal.y,0,-1,r.distance,e._ddValues),r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.prevNormal.x,-r.prevNormal.y,0,1,r.distance,e._ddValues),r.exit0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.nextNormal.x,r.nextNormal.y,0,-1,r.distance,e._ddValues),r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.nextNormal.x,-r.nextNormal.y,0,1,r.distance,e._ddValues)):r.canSplit?(s.splitVertex(),r.sign>0?(r.splitInner?(r.exit0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.leftInner.x,r.leftInner.y,0,-1,r.distance,e._ddValues),r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.rightInner.x,r.rightInner.y,0,-1,r.distance,e._ddValues)):(r.exit0=r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.bisector.x/r.cosine,r.bisector.y/r.cosine,0,-1,r.distance,e._ddValues)),r.cosine<t?(x=!r.isCap,r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.prevNormal.x,-r.prevNormal.y,0,1,r.distance,e._ddValues),r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.nextNormal.x,-r.nextNormal.y,0,1,r.distance,e._ddValues)):r.splitOuter?(x=x||r.gapOuter,r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.leftOuter.x,-r.leftOuter.y,0,1,r.distance,e._ddValues),r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.rightOuter.x,-r.rightOuter.y,0,1,r.distance,e._ddValues)):(r.entry2=r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.bisector.x/r.cosine,-r.bisector.y/r.cosine,0,1,r.distance,e._ddValues))):(r.splitInner?(r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.leftInner.x,-r.leftInner.y,0,1,r.distance,e._ddValues),r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.rightInner.x,-r.rightInner.y,0,1,r.distance,e._ddValues)):(r.exit2=r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.bisector.x/r.cosine,-r.bisector.y/r.cosine,0,1,r.distance,e._ddValues)),r.cosine<t?(x=!r.isCap,r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.prevNormal.x,r.prevNormal.y,0,-1,r.distance,e._ddValues),r.exit0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.nextNormal.x,r.nextNormal.y,0,-1,r.distance,e._ddValues)):r.splitOuter?(x=x||r.gapOuter,r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.leftOuter.x,r.leftOuter.y,0,-1,r.distance,e._ddValues),r.exit0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.rightOuter.x,r.rightOuter.y,0,-1,r.distance,e._ddValues)):(r.exit0=r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.bisector.x/r.cosine,r.bisector.y/r.cosine,0,-1,r.distance,e._ddValues)))):r.sign>0?(r.exit0=r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.bisector.x/r.cosine,r.bisector.y/r.cosine,0,-1,r.distance,e._ddValues),r.cosine<t?(x=!r.isCap,r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.prevNormal.x,-r.prevNormal.y,0,1,r.distance,e._ddValues),r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.nextNormal.x,-r.nextNormal.y,0,1,r.distance,e._ddValues)):(r.entry2=r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.bisector.x/r.cosine,-r.bisector.y/r.cosine,0,1,r.distance,e._ddValues))):(r.exit2=r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.bisector.x/r.cosine,-r.bisector.y/r.cosine,0,1,r.distance,e._ddValues),r.cosine<t?(x=!r.isCap,r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.prevNormal.x,r.prevNormal.y,0,-1,r.distance,e._ddValues),r.exit0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.nextNormal.x,r.nextNormal.y,0,-1,r.distance,e._ddValues)):(r.exit0=r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.bisector.x/r.cosine,r.bisector.y/r.cosine,0,-1,r.distance,e._ddValues)));var l,a=r.canSplit&&(r.splitInner||r.splitOuter);if(a||x||n?(l=r.entry1=r.exit1=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,0,0,0,0,r.distance,e._ddValues)):l=r.entry1=r.exit1=null,x&&e._joinType!==i.JoinType.ROUND)e._lineIndexBuffer.add(l,r.sign>0?r.exit2:r.entry0,r.sign>0?r.entry2:r.exit0);else if(n&&e._capType===i.CapType.ROUND||x&&e._joinType===i.JoinType.ROUND){var d=void 0,u=void 0,o=void 0,f=void 0,c=void 0,V=void 0;if(r.isCap){var _=Math.PI;c=Math.ceil(_/.8),V=_/c,r.isFirstVertex?(d=r.prevNormal.x,u=r.prevNormal.y,o=r.entry0,f=r.entry2):r.isLastVertex&&(d=-r.nextNormal.x,u=-r.nextNormal.y,o=r.exit2,f=r.exit0)}else{var _=2*Math.acos(r.cosine);c=Math.ceil(_/.8),V=_/c,d=r.sign>0?-r.prevNormal.x:r.nextNormal.x,u=r.sign>0?-r.prevNormal.y:r.nextNormal.y,o=r.sign>0?r.entry2:r.exit0,f=r.sign>0?r.exit2:r.entry0}var y=Math.cos(V),p=Math.sin(V),B=y*d-p*u,h=p*d+y*u;d=B,u=h;for(var m=void 0,v=void 0,g=0;g<c;++g){if(m=v,g<c-1)if(r.isCap){var N=r.isFirstVertex?-1:1;v=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,d,u,N,0,r.distance,e._ddValues)}else v=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,d,u,0,r.sign,r.distance,e._ddValues);e._lineIndexBuffer.add(0===g?o:m,l,g===c-1?f:v);var I=y*d-p*u,b=p*d+y*u;d=I,u=b}}else if(n&&e._capType===i.CapType.SQUARE){var E=r.isFirstVertex?1:-1,P=void 0,O=void 0;e._hasPattern?(P=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.prevNormal.x-E*r.inbound.x,r.prevNormal.y-E*r.inbound.y,-E,-1,r.distance,e._ddValues),O=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.prevNormal.x-E*r.inbound.x,-r.prevNormal.y-E*r.inbound.y,-E,1,r.distance,e._ddValues)):(P=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.prevNormal.x-E*r.inbound.x,r.prevNormal.y-E*r.inbound.y,0,-1,r.distance,e._ddValues),O=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.prevNormal.x-E*r.inbound.x,-r.prevNormal.y-E*r.inbound.y,0,1,r.distance,e._ddValues)),E>0?(e._lineIndexBuffer.add(l,r.entry2,O),e._lineIndexBuffer.add(l,O,P),e._lineIndexBuffer.add(l,P,r.entry0)):(e._lineIndexBuffer.add(l,O,r.exit2),e._lineIndexBuffer.add(l,P,O),e._lineIndexBuffer.add(l,r.exit0,P))}}},_=function(e){return function(r){e._lineIndexBuffer.add(r.leftExit0,r.rightEntry0,null!=r.leftExit1?r.leftExit1:r.leftExit2),e._lineIndexBuffer.add(r.rightEntry0,null!=r.rightEntry1?r.rightEntry1:r.rightEntry2,null!=r.leftExit1?r.leftExit1:r.leftExit2),null!=r.leftExit1&&null!=r.rightEntry1?(e._lineIndexBuffer.add(r.leftExit1,r.rightEntry1,r.leftExit2),e._lineIndexBuffer.add(r.rightEntry1,r.rightEntry2,r.leftExit2)):null!=r.leftExit1?e._lineIndexBuffer.add(r.leftExit1,r.rightEntry2,r.leftExit2):null!=r.rightEntry1&&e._lineIndexBuffer.add(r.rightEntry1,r.rightEntry2,r.leftExit2)}};return function(e){function r(r,t,n,i){var x=e.call(this,r,t)||this;if(x._tessellationOptions={},x.tessellationProperties={_lineVertexBuffer:null,_lineIndexBuffer:null,_hasPattern:null,_ddValues:null,_capType:null,_joinType:null,_miterLimitCosine:null,_roundLimitCosine:null},r.hasDataDrivenLine!==n.isDataDriven())throw new Error("incompatible line buffer");return x.tessellationProperties._lineVertexBuffer=n,x.tessellationProperties._lineIndexBuffer=i,x.tessellationProperties._hasPattern=r.getPaintValue("line-pattern",x.zoom)||r.getPaintValue("line-dasharray",x.zoom).length>0,x._isThinLine=r.isThinLine,x._isThinLine?x._tessellationCallbacks={vertex:f(x.tessellationProperties),bridge:c(x.tessellationProperties)}:x._tessellationCallbacks={vertex:V(x.tessellationProperties),bridge:_(x.tessellationProperties)},x}return t(r,e),Object.defineProperty(r.prototype,"lineIndexStart",{get:function(){return this._lineIndexStart},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"lineIndexCount",{get:function(){return this._lineIndexCount},enumerable:!0,configurable:!0}),r.prototype.assignBufferInfo=function(e){var r=e;r._lineIndexStart=this._lineIndexStart,r._lineIndexCount=this._lineIndexCount},r.prototype.processFeatures=function(e){this._lineIndexStart=this.tessellationProperties._lineIndexBuffer.index,this._lineIndexCount=0;var r=this.layer,t=this.zoom,n=r.hasDataDrivenLine;e&&e.setExtent(this.layerExtent);for(var i=[1,1,1,1],x=1,d=1,u=0,o=this._features;u<o.length;u++){var f=o[u],c=new l.LineLayout(r,t,f);!this.tessellationProperties._hasPattern&&r.hasDataDrivenColor&&(i=r.getPaintValue("line-color",t,f)),r.hasDataDrivenOpacity&&(x=r.getPaintValue("line-opacity",t,f)),r.hasDataDrivenWidth&&(d=r.getPaintValue("line-width",t,f));var V=void 0;if(!(n&&(V={color:i,opacity:x,size:Math.max(Math.min(d,256),0)},V.size<=0||V.opacity<=0||V.color[3]<=0))){this.tessellationProperties._capType=c.cap,this.tessellationProperties._joinType=c.join,this.tessellationProperties._miterLimitCosine=a.getLimitCosine(c.miterLimit),this.tessellationProperties._roundLimitCosine=a.getLimitCosine(c.roundLimit);var _=f.getGeometry(e);this._processFeature(_,V)}}s.cleanup()},r.prototype._processFeature=function(e,r){if(e)for(var t=e.length,n=0;n<t;n++)this._processGeometry(e[n],r)},r.prototype._processGeometry=function(e,r){var t;if(n("esri-tiles-performance")&&(t=performance.now()),!(e.length<2)){for(var i,x,l=e[0],a=1;a<e.length;)i=e[a].x-l.x,x=e[a].y-l.y,i*i+x*x<1e-6?e.splice(a,1):(l=e[a],++a);if(!(e.length<2)){var f=this.tessellationProperties._lineIndexBuffer.index;this._tessellationOptions.trackDistance=this.tessellationProperties._hasPattern,this._tessellationOptions.initialDistance=0,this._tessellationOptions.thin=this._isThinLine,this._tessellationOptions.wrapDistance=65535,this._tessellationOptions.outerBisectorAutoSplitThreshold=1/3.8,this._tessellationOptions.enableOuterBisectorSplit=this.tessellationProperties._hasPattern,this._tessellationOptions.innerBisectorAutoSplitThreshold=1/3.8,this._tessellationOptions.enableInnerBisectorSplit=this.tessellationProperties._hasPattern,this.tessellationProperties._ddValues=r,s.tessellate(e,this._tessellationOptions,this._tessellationCallbacks),this._lineIndexCount+=3*(this.tessellationProperties._lineIndexBuffer.index-f),n("esri-tiles-performance")&&(d+=(performance.now()-t)/1e3,u+=this.tessellationProperties._lineIndexBuffer.index-f,o++)}}},r}(x)}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/MemoryBuffer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/MemoryBuffer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t){return function(){function e(e){this._array=[],e<=0&&console.error("strideInBytes must be positive!"),this._stride=e}return Object.defineProperty(e.prototype,"array",{get:function(){return this._array},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"index",{get:function(){return 4*this._array.length/this._stride},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"itemSize",{get:function(){return this._stride},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sizeInBytes",{get:function(){return 4*this._array.length},enumerable:!0,configurable:!0}),e.prototype.reset=function(){this.array.length=0},e.prototype.toBuffer=function(){return new Uint32Array(this._array).buffer},e.i1616to32=function(e,t){return 65535&e|t<<16},e.i8888to32=function(e,t,r,n){return 255&e|(255&t)<<8|(255&r)<<16|n<<24},e.i8816to32=function(e,t,r){return 255&e|(255&t)<<8|r<<16},e}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/Placement.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/Placement.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./Conflict */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/Conflict.js"),__webpack_require__(/*! ./GeometryUtils */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GeometryUtils.js"),__webpack_require__(/*! ../webgl/Geometry */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/Geometry.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,n,o,i){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e,n,o,i){void 0===n&&(n=0),void 0===o&&(o=-1),void 0===i&&(i=s),this.x=t,this.y=e,this.angle=n,this.segment=o,this.minzoom=i}return t}();e.Anchor=r;var a=function(){function t(t,e,n,i,r,a,l){void 0===r&&(r=!1),void 0===a&&(a=s),void 0===l&&(l=o.C_INFINITY),this.anchor=t,this.labelAngle=e,this.glyphAngle=n,this.page=i,this.upsideDown=r,this.minzoom=a,this.maxzoom=l}return t}(),l=function(){function t(t,e,n,o,i,r,a,l,h,s){this.tl=t,this.tr=e,this.bl=n,this.br=o,this.mosaicRect=i,this.labelAngle=r,this.anchor=a,this.minzoom=l,this.maxzoom=h,this.page=s}return t}();e.PlacedSymbol=l;var h=function(){function t(t,e){this.footprint=t,this.shapes=e}return t}();e.Placement=h;var s=.5,c=function(){function t(){this.mapAngle=0,this._conflictEngine=new n.ConflictEngine}return t.prototype.reset=function(){this._conflictEngine.reset()},t.prototype.setAngle=function(t){this.mapAngle=t},t.prototype.getIconPlacement=function(t,e,r,a,c){var p=r.width/r.pixelRatio,g=r.height/r.pixelRatio,m=c.offset[0]-p/2,f=c.offset[1]-g/2,u=m+p,I=f+g,d=r.rect,x=2/r.pixelRatio,w=m-x,y=f-x,_=w+d.width/r.pixelRatio,v=y+d.height/r.pixelRatio,N=new i.Point(w,y),P=new i.Point(_,v),A=new i.Point(w,v),T=new i.Point(_,y),b=c.rotate*o.C_DEG_TO_RAD,E=1===c.rotationAlignment;if(t.segment>=0&&!E&&(b+=t.angle),0!==b){var C=Math.cos(b),M=Math.sin(b);N.rotate(C,M),P.rotate(C,M),A.rotate(C,M),T.rotate(C,M)}var z=8*c.padding,F=new i.Point(t.x,t.y),Y=new n.Footprint(this.mapAngle,z,E);Y.addBox(F,new n.Box(m,f,u,I),a,b,e,s,o.C_INFINITY);var B=new l(N,T,A,P,d,0,F,s,o.C_INFINITY,0),G=new h(Y,[B]),R=s;return c.allowOverlap||(R=this._conflictEngine.getMinZoom(G.footprint,R)),Y.minzoom=R,G},t.prototype.getTextPlacement=function(t,e,r,c,p,g,m){for(var f,u=new i.Point(t.x,t.y),I=m.rotate*o.C_DEG_TO_RAD,d=0===m.rotationAlignment,x=m.keepUpright,w=s,y=!d,_=y?0:t.angle,v=t.segment>=0&&d,N=8*m.padding,P=new n.Footprint(this.mapAngle,N,y),A=[],T=!v,b=Number.POSITIVE_INFINITY,E=Number.NEGATIVE_INFINITY,C=b,M=E,z=v?x:d&&x,F=0,Y=c;F<Y.length;F++){var B=Y[F],G=B.glyphMosaicItem;if(G&&!G.rect.isEmpty){var R=G.rect,O=G.metrics,D=G.page;T&&(f&&f!==B.y&&(P.addBox(u,new n.Box(b,C,E,M),p,I,e,s,o.C_INFINITY),b=Number.POSITIVE_INFINITY,E=Number.NEGATIVE_INFINITY,C=b,M=E),f=B.y);var q=[];if(v){var V=.5*G.metrics.width,S=(r.x+B.x+O.left-4+V)*p;if(w=this._placeGlyph(t,w,S,g,t.segment,1,D,q),x&&(w=this._placeGlyph(t,w,S,g,t.segment,-1,D,q)),w>=2)break}else q.push(new a(u,_,_,D)),d&&x&&q.push(new a(u,_+o.C_PI,_+o.C_PI,D,!0));for(var k=B.x+r.x+O.left,U=B.y+r.y-O.top,Z=k+O.width,j=U+O.height,H=new i.Point(k-4,U-4),J=new i.Point(H.x+R.width,H.y+R.height),K=new i.Point(H.x,J.y),L=new i.Point(J.x,H.y),Q=0,W=q;Q<W.length;Q++){var X=W[Q],$=H.clone(),tt=K.clone(),et=L.clone(),nt=J.clone(),ot=U,it=j,rt=X.glyphAngle+I;if(0!==rt){var at=Math.cos(rt),lt=Math.sin(rt);$.rotate(at,lt),nt.rotate(at,lt),tt.rotate(at,lt),et.rotate(at,lt)}A.push(new l($,et,tt,nt,R,X.labelAngle,X.anchor,X.minzoom,X.maxzoom,X.page)),z&&!this._legible(X.labelAngle)||(T?(k<b&&(b=k),ot<C&&(C=ot),Z>E&&(E=Z),it>M&&(M=it)):X.minzoom<2&&P.addBox(X.anchor,new n.Box(k,ot,Z,it),p,rt,e,X.minzoom,X.maxzoom))}}}if(w>=2)return null;T&&P.addBox(u,new n.Box(b,C,E,M),p,I,e,s,o.C_INFINITY);var ht=new h(P,A);return m.allowOverlap||(w=this._conflictEngine.getMinZoom(ht.footprint,w)),P.minzoom=w,ht},t.prototype.add=function(t){this._conflictEngine.add(t.footprint)},t.prototype._legible=function(t){var e=o.radToByte(t);return e<65||e>=193},t.prototype._placeGlyph=function(t,e,n,r,l,h,s,c){var p=h,g=p<0?o.positiveMod(t.angle+o.C_PI,o.C_2PI):t.angle,m=this._legible(g),f=0;n<0&&(p*=-1,n*=-1,f=o.C_PI),p>0&&++l;var u=new i.Point(t.x,t.y),I=r[l],d=o.C_INFINITY;if(r.length<=l)return d;for(;;){var x=I.x-u.x,w=I.y-u.y,y=Math.sqrt(x*x+w*w),_=Math.max(n/y,e),v=x/y,N=w/y,P=o.positiveMod(Math.atan2(N,v)+f,o.C_2PI);if(c.push(new a(u,g,P,s,m,_,d)),_<=e)return _;u=I.clone();do{if(l+=p,r.length<=l||l<0)return _;I=r[l]}while(u.isEqual(I));var A=I.x-u.x,T=I.y-u.y,b=Math.sqrt(A*A+T*T);A*=y/b,T*=y/b,u.x-=A,u.y-=T,d=_}},t}();e.PlacementEngine=c}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/SourceLayerData.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/SourceLayerData.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t){return function(){function e(t){for(this.extent=4096,this.keys=[],this.values=[],this._pbfLayer=t.clone();t.next();)switch(t.tag()){case 1:this.name=t.getString();break;case 3:this.keys.push(t.getString());break;case 4:this.values.push(t.processMessage(e._parseValue));break;case 5:this.extent=t.getUInt32();break;default:t.skip()}}return e.prototype.getData=function(){return this._pbfLayer},e._parseValue=function(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getInt64();case 5:return e.getUInt64();case 6:return e.getSInt64();case 7:return e.getBool();default:e.skip()}return null},e}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/SymbolBucket.js":
/*!********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/SymbolBucket.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! dojox/string/BidiEngine */ "./node_modules/dojox/string/BidiEngine.js"),__webpack_require__(/*! ./Bucket */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/Bucket.js"),__webpack_require__(/*! ./GeometryUtils */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GeometryUtils.js"),__webpack_require__(/*! ./Placement */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/Placement.js"),__webpack_require__(/*! ./style/StyleLayer */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/StyleLayer.js"),__webpack_require__(/*! ../webgl/Geometry */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/Geometry.js"),__webpack_require__(/*! ../webgl/TextShaping */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/TextShaping.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,a,n,o,i,r,s,l,h){function c(t,e){return t.iconMosaicItem&&e.iconMosaicItem?t.iconMosaicItem.page===e.iconMosaicItem.page?0:t.iconMosaicItem.page<e.iconMosaicItem.page?-1:1:t.iconMosaicItem&&!e.iconMosaicItem?1:!t.iconMosaicItem&&e.iconMosaicItem?-1:0}!function(){function t(){}}();return function(t){function e(e,a,n,o,i,r,s,l){var h=t.call(this,e,a)||this;if(h._markerMap=new Map,h._glyphMap=new Map,h._glyphBufferDataStorage=new Map,h._sdfMarkers=!1,e.hasDataDrivenIcon!==n.isDataDriven())throw new Error("incompatible icon buffer");if(e.hasDataDrivenText!==i.isDataDriven())throw new Error("incompatible text buffer");return h._iconVertexBuffer=n,h._iconIndexBuffer=o,h._textVertexBuffer=i,h._textIndexBuffer=r,h._placementEngine=s,h._workerTileHandler=l,h}return a(e,t),Object.defineProperty(e.prototype,"markerPageMap",{get:function(){return this._markerMap},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glyphsPageMap",{get:function(){return this._glyphMap},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sdfMarker",{get:function(){return this._sdfMarkers},enumerable:!0,configurable:!0}),e.prototype.copy=function(t,a,n,o,i){var r=new e(this.layer,this.zoom,t,a,n,o,i,this._workerTileHandler);return r.layerIndex=this.layerIndex,r.layerExtent=this.layerExtent,r._iconIndexStart=a.index,r._textIndexStart=o.index,r._iconIndexCount=0,r._textIndexCount=0,r._symbolInstances=this._symbolInstances,r._workerTileHandler=this._workerTileHandler,r._fontArray=this._fontArray,r._textLayout=this._textLayout,r._iconLayout=this._iconLayout,r._isLinePlacement=this._isLinePlacement,r._avoidEdges=this._avoidEdges,r},e.prototype.getResources=function(t,a,n){var o=this.layer,i=this.zoom,r=o.hasDataDrivenIcon,s=o.hasDataDrivenText;t&&t.setExtent(this.layerExtent);for(var l=o.getLayoutProperty("icon-image"),h=o.getLayoutProperty("text-field"),c=o.getLayoutValue("text-font",i),d=o.getLayoutValue("text-transform",i),x=[],u=[1,1,1,1],y=1,p=1,f=[1,1,1,1],g=1,m=1,_=0,v=this._features;_<v.length;_++){var I=v[_],b=I.getGeometry(t);if(b&&0!==b.length){var M=void 0;l&&(M=o.getLayoutValue("icon-image",i,I),l.isDataDriven||(M=this._replaceKeys(M,I.values)),M&&a.add(M));var z=void 0,L=!1;if(h&&(z=o.getLayoutValue("text-field",i,I),h.isDataDriven||(z=this._replaceKeys(z,I.values)),z=z.replace(/\\n/g,"\n"))){switch(d){case 2:z=z.toLowerCase();break;case 1:z=z.toUpperCase()}if(e._bidiEngine.hasBidiChar(z)){var P=e._bidiEngine.checkContextual(z),D=void 0;D="rtl"===P?"IDNNN":"ICNNN",z=e._bidiEngine.bidiTransform(z,D,"VLYSN"),L=!0}var V=z.length;if(V>0)for(var A=0,S=c;A<S.length;A++){var w=S[A],T=n[w];T||(T=n[w]=new Set);for(var k=0;k<V;k++){var E=z.charCodeAt(k);T.add(E)}}}if(M||z){var C=o.getLayoutValue("icon-size",i,I),B=o.getLayoutValue("text-size",i,I);o.hasDataDrivenIconColor&&(u=o.getPaintValue("icon-color",i,I)),o.hasDataDrivenIconOpacity&&(y=o.getPaintValue("icon-opacity",i,I)),o.hasDataDrivenIconSize&&(p=C),o.hasDataDrivenTextColor&&(f=o.getPaintValue("text-color",i,I)),o.hasDataDrivenTextOpacity&&(g=o.getPaintValue("text-opacity",i,I)),o.hasDataDrivenTextSize&&(m=B);var N={sprite:M,label:z,rtl:L,type:I.type,geometry:b,iconSize:C,iconRotate:o.getLayoutValue("icon-rotate",i,I),ddIconValues:r?{color:u,opacity:y,size:p}:null,textSize:B,textRotate:o.getLayoutValue("text-rotate",i,I),ddTextValues:s?{color:f,opacity:g,size:m}:null};x.push(N)}}}this._symbolFeatures=x},e.prototype.processFeatures=function(t){t&&t.setExtent(this.layerExtent);var a,n,o=this.layer,l=this.zoom,d=this._isLinePlacement=1===o.getLayoutValue("symbol-placement",l),x=8*o.getLayoutValue("symbol-spacing",l),u=o.getLayoutProperty("icon-image"),y=o.getLayoutProperty("text-field"),p=this._workerTileHandler;u&&(this._iconLayout=new s.IconLayout(o,l,d),a=p.getSpriteItems(),n=this._getTranslate(!0));var f,g,m;if(y){var _=this._textLayout=new s.TextLayout(o,l,d);this._fontArray=_.fontArray;var v=.5;switch(_.anchor){case 5:case 1:case 7:v=0;break;case 6:case 2:case 8:v=1}var I=.5;switch(_.anchor){case 5:case 3:case 6:I=0;break;case 7:case 4:case 8:I=1}var b=.5;switch(_.justify){case 0:b=0;break;case 2:b=1}var M=24*_.letterSpacing,z=d?0:24*_.maxWidth,L=24*_.lineHeight,P=[24*_.offset[0],24*_.offset[1]];f=this._fontArray.map(function(t){return p.getGlyphItems(t)}),g=new h.TextShaping(f,z,L,M,P,v,I,b),m=this._getTranslate(!1)}this._iconIndexStart=this._iconIndexBuffer.index,this._textIndexStart=this._textIndexBuffer.index,this._iconIndexCount=0,this._textIndexCount=0,this._markerMap.clear(),this._glyphMap.clear();var D=[];this._symbolInstances=D;var V=this._textLayout,A=1;V&&V.size&&(A=V.size/24);for(var S=V?V.maxAngle*i.C_DEG_TO_RAD:0,w=V?8*V.size:0,T=0,k=this._symbolFeatures;T<k.length;T++){var E=k[T],C=void 0;E.sprite&&(C=a[E.sprite])&&C.sdf&&(this._sdfMarkers=!0);var B=void 0,N=E.label,R=0;if(N&&(B=g.getShaping(N,E.rtl))&&B.length>0){for(var G=1e30,F=-1e30,H=0,O=B;H<O.length;H++){var j=O[H];G=Math.min(G,j.x),F=Math.max(F,j.x)}R=(F-G+48)*A*8}for(var q=0,K=E.geometry;q<K.length;q++){var Y=K[q],U=void 0;if(d){if(B&&B.length>0&&V&&V.size){var W=8*V.size*(2+Math.min(2,4*Math.abs(V.offset[1])));e._smoothVertices(Y,W)}U=e._findAnchors(Y,x,R)}else U=3===E.type?e._findCentroid(Y):[new r.Anchor(Y[0].x,Y[0].y)];for(var J=0,Q=U;J<Q.length;J++){var X=Q[J];X.x<0||X.x>4096||X.y<0||X.y>4096||(d&&R>0&&0===V.rotationAlignment&&!e._honorsTextMaxAngle(Y,X,R,S,w)||D.push({shaping:B,line:Y,iconMosaicItem:C,anchor:X,iconSize:E.iconSize,iconRotate:E.iconRotate,ddIconValues:E.ddIconValues,textSize:E.textSize,textRotate:E.textRotate,ddTextValues:E.ddTextValues}))}}}D.sort(c);for(var Z=0,$=D;Z<$.length;Z++){var tt=$[Z];this._processFeature(tt,n,m)}this._addPlacedGlyphs()},e.prototype.updateSymbols=function(){this._iconIndexStart=this._iconIndexBuffer.index,this._textIndexStart=this._textIndexBuffer.index,this._iconIndexCount=0,this._textIndexCount=0,this._markerMap.clear(),this._glyphMap.clear();var t,e=this.layer,a=e.getLayoutProperty("icon-image");a&&(t=this._getTranslate(!0));var n,o=e.getLayoutProperty("text-field");o&&(n=this._getTranslate(!1));for(var i=this._symbolInstances,r=0,s=i;r<s.length;r++){var l=s[r];this._processFeature(l,t,n)}this._addPlacedGlyphs()},e.prototype.assignBufferInfo=function(){},e.prototype._getTranslate=function(t){var e=this.layer.getPaintValue(t?"icon-translate":"text-translate",this.zoom);if(0!==e[0]||0!==e[1]){var a=this._placementEngine.mapAngle;if(0!==a&&0===this.layer.getPaintValue(t?"icon-translate-anchor":"text-translate-anchor",this.zoom)){var n=Math.sin(a),o=Math.cos(a);return[8*(e[0]*o-e[1]*n),8*(e[0]*n+e[1]*o)]}return[8*e[0],8*e[1]]}},e.prototype._replaceKeys=function(t,e){return t.replace(/{([^{}]+)}/g,function(t,a){return a in e?e[a]:""})},e.prototype._processFeature=function(t,e,a){var n=t.line,o=t.iconMosaicItem,r=t.shaping,s=t.anchor,h=this._iconLayout,c=h&&!!o,d=!0,x=1;if(c){h.size=t.iconSize,h.rotate=t.iconRotate;x=8*h.size,d=h.optional||!o}var u=this._textLayout,y=u&&r&&r.length>0,p=1,f=p,g=!0;y&&(u.size=t.textSize,u.rotate=t.textRotate,p=u.size/24,f=8*p,g=u.optional||!r||0===r.length);var m,_=new l.Point(0,-17);if(c&&(m=this._placementEngine.getIconPlacement(s,e,o,x,h),s.minzoom>m.footprint.minzoom&&(m.footprint.minzoom=s.minzoom),m.footprint.minzoom===i.C_INFINITY&&(m=null)),m||d){var v;if(y&&(v=this._placementEngine.getTextPlacement(s,a,_,r,f,n,u))&&(s.minzoom>v.footprint.minzoom&&(v.footprint.minzoom=s.minzoom),v.footprint.minzoom===i.C_INFINITY&&(v=null)),v||g){if(m&&v||(g||d?g||v?d||m||(v=null):m=null:(m=null,v=null)),m&&v&&!g&&!d){var I=Math.max(m.footprint.minzoom,v.footprint.minzoom);m.footprint.minzoom=I,v.footprint.minzoom=I}v&&(u.ignorePlacement||this._placementEngine.add(v),this._storePlacedGlyphs(v.shapes,v.footprint.minzoom,this.zoom,t.ddTextValues)),m&&(h.ignorePlacement||this._placementEngine.add(m),this._addPlacedIcons(m.shapes,m.footprint.minzoom,this.zoom,o.page,t.ddIconValues))}}},e.prototype._addPlacedIcons=function(t,e,a,n,o){for(var r=Math.max(a+i.log2(e),0),s=this._iconVertexBuffer,l=this._iconIndexBuffer,h=0,c=t;h<c.length;h++){var d=c[h],x=Math.max(a+i.log2(d.minzoom),r),u=Math.min(a+i.log2(d.maxzoom),25);if(!(u<=x)){var y=d.tl,p=d.tr,f=d.bl,g=d.br,m=d.mosaicRect,_=d.labelAngle,v=d.anchor,I=s.index,b=m.x,M=m.y,z=b+m.width,L=M+m.height;s.add(v.x,v.y,y.x,y.y,b,M,_,x,u,r,o),s.add(v.x,v.y,p.x,p.y,z,M,_,x,u,r,o),s.add(v.x,v.y,f.x,f.y,b,L,_,x,u,r,o),s.add(v.x,v.y,g.x,g.y,z,L,_,x,u,r,o),l.add(I+0,I+1,I+2),l.add(I+1,I+2,I+3),this._markerMap.has(n)?this._markerMap.get(n)[1]+=6:this._markerMap.set(n,[this._iconIndexStart+this._iconIndexCount,6]),this._iconIndexCount+=2}}},e.prototype._addPlacedGlyphs=function(){var t=this,e=this._textVertexBuffer,a=this._textIndexBuffer;this._glyphBufferDataStorage.forEach(function(n,o){for(var i=0,r=n;i<r.length;i++){var s=r[i],l=e.index;e.add(s.glyphAnchor[0],s.glyphAnchor[1],s.tl[0],s.tl[1],s.xmin,s.ymin,s.labelAngle,s.minLod,s.maxLod,s.placementLod,s.ddValues),e.add(s.glyphAnchor[0],s.glyphAnchor[1],s.tr[0],s.tr[1],s.xmax,s.ymin,s.labelAngle,s.minLod,s.maxLod,s.placementLod,s.ddValues),e.add(s.glyphAnchor[0],s.glyphAnchor[1],s.bl[0],s.bl[1],s.xmin,s.ymax,s.labelAngle,s.minLod,s.maxLod,s.placementLod,s.ddValues),e.add(s.glyphAnchor[0],s.glyphAnchor[1],s.br[0],s.br[1],s.xmax,s.ymax,s.labelAngle,s.minLod,s.maxLod,s.placementLod,s.ddValues),a.add(l+0,l+1,l+2),a.add(l+1,l+2,l+3),t._glyphMap.has(o)?t._glyphMap.get(o)[1]+=6:t._glyphMap.set(o,[t._textIndexStart+t._textIndexCount,6]),t._textIndexCount+=2}}),this._glyphBufferDataStorage.clear()},e.prototype._storePlacedGlyphs=function(t,e,a,n){for(var o=Math.max(a+i.log2(e),0),r=0,s=t;r<s.length;r++){var l=s[r],h=Math.max(a+i.log2(l.minzoom),o),c=Math.min(a+i.log2(l.maxzoom),25);if(!(c<=h)){var d=l.tl,x=l.tr,u=l.bl,y=l.br,p=l.labelAngle,f=l.anchor,g=l.mosaicRect;this._glyphBufferDataStorage.has(l.page)||this._glyphBufferDataStorage.set(l.page,[]);this._glyphBufferDataStorage.get(l.page).push({glyphAnchor:[f.x,f.y],tl:[d.x,d.y],tr:[x.x,x.y],bl:[u.x,u.y],br:[y.x,y.y],xmin:g.x,ymin:g.y,xmax:g.x+g.width,ymax:g.y+g.height,labelAngle:p,minLod:h,maxLod:c,placementLod:o,ddValues:n})}}},e._findAnchors=function(t,e,a){e+=a;for(var n=0,o=t.length-1,s=0;s<o;s++)n+=l.Point.distance(t[s],t[s+1]);var h=a||e;if(h*=.5,n<=h)return[];var c=h/n;e=n/Math.max(Math.round(n/e),1);for(var d=0,x=-e/2,u=[],y=t.length-1,s=0;s<y;s++){for(var p=t[s],f=t[s+1],g=f.x-p.x,m=f.y-p.y,_=Math.sqrt(g*g+m*m),v=void 0;x+e<d+_;){x+=e;var I=(x-d)/_,b=i.interpolate(p.x,f.x,I),M=i.interpolate(p.y,f.y,I);void 0===v&&(v=Math.atan2(m,g)),u.push(new r.Anchor(b,M,v,s,c))}d+=_}return u},e._deviation=function(t,e,a){var n=(e.x-t.x)*(a.x-e.x)+(e.y-t.y)*(a.y-e.y),o=(e.x-t.x)*(a.y-e.y)-(e.y-t.y)*(a.x-e.x);return Math.atan2(o,n)},e._honorsTextMaxAngle=function(t,e,a,n,o){for(var i=0,r=a/2,s=new l.Point(e.x,e.y),h=e.segment+1;i>-r;){if(--h<0)return!1;i-=l.Point.distance(t[h],s),s=t[h]}i+=l.Point.distance(t[h],t[h+1]);for(var c=[],d=0,x=t.length;i<r;){var u=t[h],y=h,p=void 0;do{if(++y===x)return!1;p=t[y]}while(p.isEqual(u));var f=y,g=void 0;do{if(++f===x)return!1;g=t[f]}while(g.isEqual(p));var m=this._deviation(u,p,g);for(c.push({deviation:m,distToAnchor:i}),d+=m;i-c[0].distToAnchor>o;)d-=c.shift().deviation;if(Math.abs(d)>n)return!1;i+=l.Point.distance(p,g),h=y}return!0},e._smoothVertices=function(t,e){if(!(e<=0)){var a=t.length;if(!(a<3)){var n=[],o=0;n.push(0);for(var i=1;i<a;i++)o+=l.Point.distance(t[i],t[i-1]),n.push(o);e=Math.min(e,.2*o);var r=[];r.push(t[0].x),r.push(t[0].y);var s=t[a-1].x,h=t[a-1].y,c=l.Point.sub(t[0],t[1]);c.normalize(),t[0].x+=e*c.x,t[0].y+=e*c.y,c.assignSub(t[a-1],t[a-2]),c.normalize(),t[a-1].x+=e*c.x,t[a-1].y+=e*c.y;for(var i=1;i<a;i++)n[i]+=e;n[a-1]+=e;for(var d=.5*e,i=1;i<a-1;i++){for(var x=0,u=0,y=0,p=i-1;p>=0&&!(n[p+1]<n[i]-d);p--){var f=d+n[p+1]-n[i],g=n[p+1]-n[p],m=n[i]-n[p]<d?1:f/g;if(Math.abs(m)<1e-6)break;var _=m*m,v=m*f-.5*_*g,I=m*g/e,b=t[p+1],M=t[p].x-b.x,z=t[p].y-b.y;x+=I/v*(b.x*m*f+.5*_*(f*M-g*b.x)-_*m*g*M/3),u+=I/v*(b.y*m*f+.5*_*(f*z-g*b.y)-_*m*g*z/3),y+=I}for(var p=i+1;p<a&&!(n[p-1]>n[i]+d);p++){var f=d-n[p-1]+n[i],g=n[p]-n[p-1],m=n[p]-n[i]<d?1:f/g;if(Math.abs(m)<1e-6)break;var _=m*m,v=m*f-.5*_*g,I=m*g/e,b=t[p-1],M=t[p].x-b.x,z=t[p].y-b.y;x+=I/v*(b.x*m*f+.5*_*(f*M-g*b.x)-_*m*g*M/3),u+=I/v*(b.y*m*f+.5*_*(f*z-g*b.y)-_*m*g*z/3),y+=I}r.push(x/y),r.push(u/y)}r.push(s),r.push(h);for(var i=0,p=0;i<a;i++)t[i].x=r[p++],t[i].y=r[p++]}}},e._findCentroid=function(t){var e=t.length-1,a=0,n=0,o=0,i=t[0].x,s=t[0].y;i>4096&&(i=4096),i<0&&(i=0),s>4096&&(s=4096),s<0&&(s=0);for(var l=1;l<e;l++){var h=t[l].x,c=t[l].y,d=t[l+1].x,x=t[l+1].y;h>4096&&(h=4096),h<0&&(h=0),c>4096&&(c=4096),c<0&&(c=0),d>4096&&(d=4096),d<0&&(d=0),x>4096&&(x=4096),x<0&&(x=0);var u=(h-i)*(x-s)-(d-i)*(c-s);a+=u*(i+h+d),n+=u*(s+c+x),o+=u}return a/=3*o,n/=3*o,isNaN(a)||isNaN(n)?[]:[new r.Anchor(a,n)]},e._bidiEngine=new n,e}(o)}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/TileParser.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/TileParser.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../core/pbf */ "./node_modules/arcgis-js-api/core/pbf.js"),__webpack_require__(/*! ../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ./BackgroundBucket */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/BackgroundBucket.js"),__webpack_require__(/*! ./CircleBucket */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/CircleBucket.js"),__webpack_require__(/*! ./Feature */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/Feature.js"),__webpack_require__(/*! ./FillBucket */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/FillBucket.js"),__webpack_require__(/*! ./LineBucket */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/LineBucket.js"),__webpack_require__(/*! ./SourceLayerData */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/SourceLayerData.js"),__webpack_require__(/*! ./SymbolBucket */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/SymbolBucket.js"),__webpack_require__(/*! ../webgl/TileClipper */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/TileClipper.js"),__webpack_require__(/*! ../../tiling/enums */ "./node_modules/arcgis-js-api/views/2d/tiling/enums.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,n,l,s,a,u,o,c,f,p,h,_){var y=1;return function(){function e(e,t,r){this._pbfTiles={},this._tileClippers={},this._client=r,this._tile=t,this._layers=t.getLayers();var i=t.tileKey.split("/").map(parseFloat),l=i[0],s=i[1],a=i[2];this._level=l;for(var u=Math.max(8,Math.round(y*this._level)-8),o=0,c=Object.keys(e);o<c.length;o++){var f=c[o],p=e[f];this._pbfTiles[f]=new n(new Uint8Array(p.protobuff),new DataView(p.protobuff));if(p.refKey){var _=p.refKey.split("/").map(parseFloat)[0],v=l-_;if(v>0){var B=(1<<v)-1,x=s&B,g=a&B;this._tileClippers[f]=new h.TileClipper(v,x,g,8,u)}}this._tileClippers[f]||(this._tileClippers[f]=new h.SimpleBuilder)}}return e.prototype.parse=function(e){return i(this,void 0,void 0,function(){var t,i,n,s,a,o,c,f,p,h,y,v,B,x,g,d,k,D,m,w,b,I,C,V,F,L,S,T,z,O,j,H,K,H,M,y,x,k,A,E,U,W,q,G,N,R,J,d,P,Q,X,H,Y,B,A,Z,$,d,ee,te,d,re,ie,ne,le,se,ae,ue;return r(this,function(r){for(t=e&&e.signal,i=this._parseTileData(this._pbfTiles),n=this._layers,s=this._level,o=[],c=this._tileClippers,f={},p={},h=n.length-1;h>=0;h--)a=n[h],a.minzoom&&s<a.minzoom||a.maxzoom&&s>=a.maxzoom||a.layout&&a.layout.visibility&&"none"===a.layout.visibility||0!==a.type&&i[a.source]&&c[a.source]&&(y=i[a.source],v=c[a.source],B=a.sourceLayer,(x=y[B])&&(g=p[a.source],g||(g=p[a.source]=new Set),g.add(a.sourceLayer),(d=this._createBucket(a))&&(d.layerIndex=h,d.layerExtent=x.extent,d.tileClipper=v,k=f[a.source],k||(k=f[a.source]={}),D=k[B],D||(D=k[B]=[]),D.push(d))));for(m=10*this._level,w=10*(this._level+1),b=[],I=[],C=[],V=[],F=new Set,L={},S=[],T=[],z=function(e){p[e].forEach(function(t){S.push(t),T.push(e)})},O=0,j=Object.keys(p);O<j.length;O++)H=j[O],z(H);for(K=0;K<S.length&&(H=T[K],M=S[K],i[H]&&f[H])&&(y=i[H],x=y[M],k=f[H],(A=k[M])&&0!==A.length);K++){if(l.isAborted(t))return[2,void 0];for(E=x.getData();E.next(2);){if(U=E.getMessage(),W=new u(U,x),U.release(),q=W.values){if((G=q._minzoom)&&G>=w)continue;if((N=q._maxzoom)&&N<=m)continue}for(R=0,J=A;R<J.length;R++)d=J[R],d.pushFeature(W)}}for(P=this._tile,Q=0,X=Object.keys(f);Q<X.length;Q++){H=X[Q],Y=f[H];for(B in Y)for(A=Y[B],Z=0,$=A;Z<$.length;Z++)d=$[Z],d.hasFeatures()&&(3===d.layer.type?(b.push(d),P.addBucket(d)):d.layer.refLayerId?C.push(d):(I.push(d),V[d.layer.id]=d))}for(ee=0,te=b;ee<te.length;ee++)d=te[ee],re=d,re.getResources(re.tileClipper,F,L);if(this._tile.status===_.TileStatus.INVALID)return[2,l.resolve([])];ie=[],ne=this._tile.getWorkerTileHandler(),F.size>0&&(le=ne.fetchSprites(F,this._client,e),ie.push(le));for(ae in L)ue=L[ae],ue.size>0&&(se=ne.fetchGlyphs(this._tile.tileKey,ae,ue,this._client,e),ie.push(se));return[2,l.all(ie).then(function(){for(var e=0,t=I;e<t.length;e++){var r=t[e];r.processFeatures(r.tileClipper),o.push(r)}for(var i=0,n=C;i<n.length;i++){var l=n[i],s=V[l.layer.refLayerId];s&&(s.assignBufferInfo(l),o.push(l))}for(var a=0,u=b;a<u.length;a++){var c=u[a];c.processFeatures(c.tileClipper),o.push(c)}return o.sort(function(e,t){return e.layerIndex-t.layerIndex}),o})]})})},e.prototype._parseTileData=function(e){for(var t={},r=0,i=Object.keys(e);r<i.length;r++){for(var n=i[r],l=e[n],s={};l.next();)switch(l.tag()){case 3:var a=l.getMessage(),u=new f(a);a.release(),s[u.name]=u;break;default:l.skip()}t[n]=s}return t},e.prototype._createBucket=function(e){switch(e.type){case 0:return this._createBackgroundBucket(e);case 1:return this._createFillBucket(e);case 2:return this._createLineBucket(e);case 4:return this._createCircleBucket(e);case 3:return this._createSymbolBucket(e)}},e.prototype._createBackgroundBucket=function(e){return new s(e,this._level)},e.prototype._createFillBucket=function(e){var t=this._tile;return new o(e,this._level,e.hasDataDrivenFill?t.fillDDVertexBuffer:t.fillVertexBuffer,t.fillIndexBuffer,e.hasDataDrivenOutline?t.outlineDDVertexBuffer:t.outlineVertexBuffer,t.outlineIndexBuffer)},e.prototype._createLineBucket=function(e){var t=this._tile;return new c(e,this._level,e.hasDataDrivenLine?t.lineDDVertexBuffer:t.lineVertexBuffer,t.lineIndexBuffer)},e.prototype._createCircleBucket=function(e){var t=this._tile;return new a(e,this._level,t.circleVertexBuffer,t.circleIndexBuffer)},e.prototype._createSymbolBucket=function(e){var t=this._tile;return new p(e,this._level,e.hasDataDrivenIcon?t.iconDDVertexBuffer:t.iconVertexBuffer,t.iconIndexBuffer,e.hasDataDrivenText?t.textDDVertexBuffer:t.textVertexBuffer,t.textIndexBuffer,t.placementEngine,t.getWorkerTileHandler())},e}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/VertexMemoryBuffer.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/VertexMemoryBuffer.js ***!
  \**************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ./GeometryUtils */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GeometryUtils.js"),__webpack_require__(/*! ./MemoryBuffer */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/MemoryBuffer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,r,i,a,n){Object.defineProperty(r,"__esModule",{value:!0});var e=new Float32Array(1),o=new Uint32Array(e.buffer),u=function(t){function r(r){var i=t.call(this,r?20:12)||this;return i._isDataDriven=r,i}return i(r,t),r.prototype.isDataDriven=function(){return this._isDataDriven},r.prototype.add=function(t,r,i,a,u,s,h,p){var v=this.array,f=n.i1616to32(t,r);v.push(f);if(f=n.i8888to32(Math.round(31*i),Math.round(31*a),Math.round(31*u),Math.round(31*s)),v.push(f),f=n.i1616to32(h,0),v.push(f),this._isDataDriven){if(!p)throw new Error("Expecting data driven values.");var c=p.color,d=c[3]*p.opacity*255;v.push(n.i8888to32(c[0]*d,c[1]*d,c[2]*d,d)),e[0]=p.size,v.push(o[0])}},r}(n);r.LineVertexBuffer=u;var s=function(t){function r(r){var i=t.call(this,r?8:4)||this;return i._isDataDriven=r,i}return i(r,t),r.prototype.isDataDriven=function(){return this._isDataDriven},r.prototype.add=function(t,r,i){var a=this.array;if(a.push(n.i1616to32(t,r)),this._isDataDriven){if(!i)throw new Error("Expecting data driven values.");var e=i.color,o=e[3]*i.opacity*255;a.push(n.i8888to32(e[0]*o,e[1]*o,e[2]*o,o))}},r}(n);r.FillVertexBuffer=s;var h=function(t){function r(r){var i=t.call(this,r?12:8)||this;return i._isDataDriven=r,i}return i(r,t),r.prototype.isDataDriven=function(){return this._isDataDriven},r.prototype.add=function(t,r,i,a,e,o,u){var s=this.array,h=this.index,p=n.i1616to32(t,r);s.push(p);if(p=n.i8888to32(Math.round(15*i),Math.round(15*a),e,o),s.push(p),this._isDataDriven){if(!u)throw new Error("Expecting data driven values.");var v=u.color,f=v[3]*u.opacity*255;s.push(n.i8888to32(v[0]*f,v[1]*f,v[2]*f,f))}return h},r}(n);r.OutlineVertexBuffer=h;var p=function(t){function r(r){var i=t.call(this,r?24:16)||this;return i._isDataDriven=r,i}return i(r,t),r.prototype.isDataDriven=function(){return this._isDataDriven},r.prototype.add=function(t,r,i,u,s,h,p,v,f,c,d){var D=this.array,l=n.i1616to32(t,r);if(D.push(l),l=n.i1616to32(Math.round(8*i),Math.round(8*u)),D.push(l),l=n.i8888to32(s/4,h/4,0,0),D.push(l),l=n.i8888to32(Math.ceil(10*c),a.radToByte(p),10*v,Math.min(10*f,255)),D.push(l),this._isDataDriven){if(!d)throw new Error("Expecting data driven values.");var y=d.color,M=y[3]*d.opacity*255;D.push(n.i8888to32(y[0]*M,y[1]*M,y[2]*M,M)),e[0]=d.size,D.push(o[0])}},r}(n);r.SymbolVertexBuffer=p;var v=function(t){function r(){return t.call(this,16)||this}return i(r,t),r.prototype.add=function(t,r,i,a,e,o,u,s,h,p,v){var f=this.array,c=n.i1616to32(2*t+i,2*r+a);f.push(c);var d=o[3]*u*255;c=n.i8888to32(o[0]*d,o[1]*d,o[2]*d,d),f.push(c);var D=p[3]*v*255;c=n.i8888to32(p[0]*D,p[1]*D,p[2]*D,D),f.push(c),c=n.i8888to32(Math.min(32*s,255),Math.min(4*h,255),Math.min(e,255),0),f.push(c)},r}(n);r.CircleVertexBuffer=v}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/WorkerTile.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/WorkerTile.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ./BackgroundBucket */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/BackgroundBucket.js"),__webpack_require__(/*! ./CircleBucket */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/CircleBucket.js"),__webpack_require__(/*! ./FillBucket */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/FillBucket.js"),__webpack_require__(/*! ./GeometryUtils */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GeometryUtils.js"),__webpack_require__(/*! ./IndexMemoryBuffer */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/IndexMemoryBuffer.js"),__webpack_require__(/*! ./LineBucket */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/LineBucket.js"),__webpack_require__(/*! ./Placement */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/Placement.js"),__webpack_require__(/*! ./SymbolBucket */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/SymbolBucket.js"),__webpack_require__(/*! ./TileParser */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/TileParser.js"),__webpack_require__(/*! ./VertexMemoryBuffer */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/VertexMemoryBuffer.js"),__webpack_require__(/*! ../../tiling/enums */ "./node_modules/arcgis-js-api/views/2d/tiling/enums.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,f,s,n,i,u,o,a,l,B,h,x,I,c,p){return function(){function e(){this.rotation=0,this.status=p.TileStatus.INITIALIZED,this._symbolBuckets=[],this.placementEngine=new h.PlacementEngine,this.fillVertexBuffer=new c.FillVertexBuffer(!1),this.fillDDVertexBuffer=new c.FillVertexBuffer(!0),this.fillIndexBuffer=new l.TriangleIndexBuffer,this.outlineVertexBuffer=new c.OutlineVertexBuffer(!1),this.outlineDDVertexBuffer=new c.OutlineVertexBuffer(!0),this.outlineIndexBuffer=new l.TriangleIndexBuffer,this.lineVertexBuffer=new c.LineVertexBuffer(!1),this.lineDDVertexBuffer=new c.LineVertexBuffer(!0),this.lineIndexBuffer=new l.TriangleIndexBuffer,this.iconVertexBuffer=new c.SymbolVertexBuffer(!1),this.iconDDVertexBuffer=new c.SymbolVertexBuffer(!0),this.iconIndexBuffer=new l.TriangleIndexBuffer,this.textVertexBuffer=new c.SymbolVertexBuffer(!1),this.textDDVertexBuffer=new c.SymbolVertexBuffer(!0),this.textIndexBuffer=new l.TriangleIndexBuffer,this.circleVertexBuffer=new c.CircleVertexBuffer,this.circleIndexBuffer=new l.TriangleIndexBuffer}return e.prototype.initialize=function(e,t,r,f){void 0===f&&(f=0),this.tileKey=e,this.refKeys=t,this._workerTileHandler=r,this.rotation=f,this.placementEngine.setAngle(a.C_DEG_TO_RAD*f)},e.prototype.release=function(){this.tileKey="",this.refKeys=null,this.status=p.TileStatus.INITIALIZED,this.rotation=0,this.resetData(),this._workerTileHandler=null},e.prototype.resetData=function(){this.fillVertexBuffer.reset(),this.fillDDVertexBuffer.reset(),this.fillIndexBuffer.reset(),this.outlineVertexBuffer.reset(),this.outlineDDVertexBuffer.reset(),this.outlineIndexBuffer.reset(),this.lineVertexBuffer.reset(),this.lineDDVertexBuffer.reset(),this.lineIndexBuffer.reset(),this.iconVertexBuffer.reset(),this.iconDDVertexBuffer.reset(),this.iconIndexBuffer.reset(),this.textVertexBuffer.reset(),this.textDDVertexBuffer.reset(),this.textIndexBuffer.reset(),this.circleVertexBuffer.reset(),this.circleIndexBuffer.reset(),this.placementEngine.reset(),this._symbolBuckets.length=0},e.prototype.reparse=function(e){return this.resetData(),this.setDataAndParse(this._data,e)},e.prototype.setDataAndParse=function(e,t){var r=this,f=t&&t.signal;if(s.isSome(f)){var n=function(){f.removeEventListener("abort",n),r.status=p.TileStatus.INVALID};f.addEventListener("abort",n)}return this._data=e,this._parse(e,t).then(function(e){r.status=p.TileStatus.READY;for(var t=[1,r.fillVertexBuffer.sizeInBytes,2,r.fillDDVertexBuffer.sizeInBytes,3,r.fillIndexBuffer.sizeInBytes,4,r.outlineVertexBuffer.sizeInBytes,5,r.outlineDDVertexBuffer.sizeInBytes,6,r.outlineIndexBuffer.sizeInBytes,7,r.lineVertexBuffer.sizeInBytes,8,r.lineDDVertexBuffer.sizeInBytes,9,r.lineIndexBuffer.sizeInBytes,10,r.iconVertexBuffer.sizeInBytes,11,r.iconDDVertexBuffer.sizeInBytes,12,r.iconIndexBuffer.sizeInBytes,13,r.textVertexBuffer.sizeInBytes,14,r.textDDVertexBuffer.sizeInBytes,15,r.textIndexBuffer.sizeInBytes,16,r.circleVertexBuffer.sizeInBytes,17,r.circleIndexBuffer.sizeInBytes],f=new Uint32Array(t),s=[],n=e.length,a=0;a<n;a++){var l=e[a];if(l instanceof o)s.push(l.layerIndex),s.push(1),s.push(l.fillIndexStart),s.push(l.fillIndexCount),s.push(l.outlineIndexStart),s.push(l.outlineIndexCount);else if(l instanceof B)s.push(l.layerIndex),s.push(2),s.push(l.lineIndexStart),s.push(l.lineIndexCount);else if(l instanceof x){s.push(l.layerIndex),s.push(3),s.push(l.sdfMarker?1:0);var h=l.markerPageMap;s.push(h.size),h.forEach(function(e,t){s.push(t),s.push(e[0]),s.push(e[1])});var I=l.glyphsPageMap;s.push(I.size),I.forEach(function(e,t){s.push(t),s.push(e[0]),s.push(e[1])})}else l instanceof u?(s.push(l.layerIndex),s.push(4),s.push(l.circleIndexStart),s.push(l.circleIndexCount)):l instanceof i&&(s.push(l.layerIndex),s.push(0))}var c=new Uint32Array(s),y=r.fillVertexBuffer.toBuffer(),D=r.fillDDVertexBuffer.toBuffer(),d=r.fillIndexBuffer.toBuffer(),V=r.outlineVertexBuffer.toBuffer(),v=r.outlineDDVertexBuffer.toBuffer(),z=r.outlineIndexBuffer.toBuffer(),g=r.lineVertexBuffer.toBuffer(),b=r.lineDDVertexBuffer.toBuffer(),m=r.lineIndexBuffer.toBuffer(),w=r.iconVertexBuffer.toBuffer(),T=r.iconDDVertexBuffer.toBuffer(),S=r.iconIndexBuffer.toBuffer(),k=r.textVertexBuffer.toBuffer(),E=r.textDDVertexBuffer.toBuffer(),A=r.textIndexBuffer.toBuffer(),L=r.circleVertexBuffer.toBuffer(),_=r.circleIndexBuffer.toBuffer();return{result:{bufferDataInfo:f.buffer,bucketDataInfo:c.buffer,bufferData:[y,D,d,V,v,z,g,b,m,w,T,S,k,E,A,L,_]},transferList:[y,D,d,V,v,z,g,b,m,w,T,S,k,E,A,L,_,f.buffer,c.buffer]}})},e.prototype.addBucket=function(e){this._symbolBuckets.push(e)},e.prototype.updateSymbols=function(e,t){var r=this,f=this._symbolBuckets;if(!f||0===f.length)return n.resolve();var i=t&&t.signal;if(s.isSome(i)){var u=function(){i.removeEventListener("abort",u),r.status=p.TileStatus.INVALID};i.addEventListener("abort",u)}this.rotation=e;var o=this.placementEngine;o.reset(),o.setAngle(e/256*360*a.C_DEG_TO_RAD);var l=this.iconVertexBuffer;l.reset();var B=this.iconDDVertexBuffer;B.reset();var h=this.iconIndexBuffer;h.reset();var x=this.textVertexBuffer;x.reset();var I=this.textDDVertexBuffer;I.reset();var c=this.textIndexBuffer;c.reset();for(var y=[],D=0;D<f.length;D++){var d=f[D];if(d&&d.layer){var V=d.layer,v=d.copy(V.hasDataDrivenIcon?B:l,h,V.hasDataDrivenText?I:x,c,o);v&&(y.push(v),v.updateSymbols())}}if(this.status===p.TileStatus.INVALID||this.status===p.TileStatus.INITIALIZED||0===l.sizeInBytes&&0===B.sizeInBytes&&0===h.sizeInBytes&&0===x.sizeInBytes&&0===I.sizeInBytes&&0===c.sizeInBytes)return n.reject();for(var z=[10,l.sizeInBytes,11,B.sizeInBytes,12,h.sizeInBytes,13,x.sizeInBytes,14,I.sizeInBytes,15,c.sizeInBytes],g=new Uint32Array(z),b=[],D=0;D<y.length;D++){var m=y[D];b.push(m.layerIndex),b.push(3),b.push(m.sdfMarker?1:0);var w=m.markerPageMap;b.push(w.size),w.forEach(function(e,t){b.push(t),b.push(e[0]),b.push(e[1])});var T=m.glyphsPageMap;b.push(T.size),T.forEach(function(e,t){b.push(t),b.push(e[0]),b.push(e[1])})}var S=new Uint32Array(b),k=l.toBuffer(),E=B.toBuffer(),A=h.toBuffer(),L=x.toBuffer(),_=I.toBuffer(),M=c.toBuffer();return n.resolve({result:{bufferDataInfo:g.buffer,bucketDataInfo:S.buffer,bufferData:[k,E,A,L,_,M]},transferList:[k,E,A,L,_,M,g.buffer,S.buffer]})},e.prototype.setObsolete=function(){this.status=p.TileStatus.INVALID},e.prototype.getLayers=function(){return this._workerTileHandler.getLayers()},e.prototype.getWorkerTileHandler=function(){return this._workerTileHandler},e.prototype._parse=function(e,t){return f(this,void 0,void 0,function(){var f;return r(this,function(r){return 0===Object.keys(e).length?[2,[]]:(this.status=p.TileStatus.MODIFIED,f=new I(e,this,t.client),[2,f.parse(t)])})})},e}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/WorkerTileHandler.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/WorkerTileHandler.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ./WorkerTile */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/WorkerTile.js"),__webpack_require__(/*! ./style/StyleRepository */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/StyleRepository.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,r,n,o){return function(){function t(){this._tiles=new Map,this._spriteInfo={},this._glyphInfo={}}return t.prototype.reset=function(){this._spriteInfo={},this._glyphInfo={};var t=this._tiles;return t.forEach(function(t){return t.setObsolete()}),t.clear(),r.resolve()},t.prototype.getLayers=function(){return this._layers},t.prototype.setLayers=function(t){var e=new o(t);return this._layers=e.layers,r.resolve({data:""})},t.prototype.createTileAndParse=function(t,e){for(var r=this,o=t.key,i=new n,s={},a=0,l=Object.keys(t.sourceName2DataAndRefKey);a<l.length;a++){var u=l[a],f=t.sourceName2DataAndRefKey[u];s[u]=f.refKey}return i.initialize(o,s,this,t.rotation),i.setDataAndParse(t.sourceName2DataAndRefKey,e).then(function(t){return r._tiles.set(o,i),t}).catch(function(t){throw i.setObsolete(),i.release(),t})},t.prototype.updateSymbols=function(t,e){var n=this._tiles.get(t.key);return n?n.updateSymbols(t.rotation,e):r.reject()},t.prototype.updateStyle=function(t,e){var n=new o(t);return this._layers=n.layers,this._tiles.forEach(function(t){t.reparse(e).then(function(r){e.client.invoke("updateTileData",{tileId:t.tileKey,tileData:r.result})})}),r.resolve({data:""})},t.prototype.destructTileData=function(t){if(this._tiles.has(t)){this._tiles.get(t).release(),this._tiles.delete(t)}return r.resolve()},t.prototype.fetchSprites=function(t,e,n){var o=[],i=this._spriteInfo;return t.forEach(function(t){void 0===i[t]&&o.push(t)}),0===o.length?r.resolve():e.invoke("getSprites",o,{signal:n&&n.signal}).then(function(t){for(var e in t){var r=t[e];i[e]=r}})},t.prototype.getSpriteItems=function(){return this._spriteInfo},t.prototype.fetchGlyphs=function(t,e,n,o,i){var s=[],a=this._glyphInfo[e];return a?n.forEach(function(t){a[t]||s.push(t)}):(a=this._glyphInfo[e]=[],n.forEach(function(t){return s.push(t)})),0===s.length?r.resolve():o.invoke("getGlyphs",{tileID:t,font:e,codePoints:s},i).then(function(t){for(var e=0;e<t.length;e++)t[e]&&(a[e]=t[e])})},t.prototype.getGlyphItems=function(t){return this._glyphInfo[t]},t}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/tiling/enums.js":
/*!*************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/tiling/enums.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(I,e){Object.defineProperty(e,"__esModule",{value:!0});!function(I){I[I.INITIALIZED=0]="INITIALIZED",I[I.NO_DATA=1]="NO_DATA",I[I.READY=2]="READY",I[I.MODIFIED=3]="MODIFIED",I[I.INVALID=4]="INVALID"}(e.TileStatus||(e.TileStatus={}))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=79.js.map