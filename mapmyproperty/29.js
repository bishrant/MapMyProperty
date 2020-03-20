(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/core/MapPool":"./node_modules/arcgis-js-api/core/MapPool.js",
	"esri/core/MapPool":"./node_modules/arcgis-js-api/core/MapPool.js",
	"esri/layers/support/FieldsIndex":"./node_modules/arcgis-js-api/layers/support/FieldsIndex.js",
	"arcgis-js-api/layers/support/FieldsIndex":"./node_modules/arcgis-js-api/layers/support/FieldsIndex.js",
	"arcgis-js-api/views/2d/engine/FeatureContainer":"./node_modules/arcgis-js-api/views/2d/engine/FeatureContainer.js",
	"arcgis-js-api/views/2d/layers/graphics/GraphicContainer":"./node_modules/arcgis-js-api/views/2d/layers/graphics/GraphicContainer.js",
	"arcgis-js-api/views/2d/layers/graphics/GraphicProcessingQueue":"./node_modules/arcgis-js-api/views/2d/layers/graphics/GraphicProcessingQueue.js",
	"arcgis-js-api/views/2d/layers/graphics/GraphicStore":"./node_modules/arcgis-js-api/views/2d/layers/graphics/GraphicStore.js",
	"arcgis-js-api/views/2d/layers/graphics/GraphicStoreItem":"./node_modules/arcgis-js-api/views/2d/layers/graphics/GraphicStoreItem.js",
	"arcgis-js-api/views/2d/layers/graphics/GraphicsView2D":"./node_modules/arcgis-js-api/views/2d/layers/graphics/GraphicsView2D.js",
	"arcgis-js-api/views/layers/GraphicsView":"./node_modules/arcgis-js-api/views/layers/GraphicsView.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/arcgis-js-api/core/MapPool.js":
/*!****************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/MapPool.js ***!
  \****************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./ObjectPool */ "./node_modules/arcgis-js-api/core/ObjectPool.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,n){var o=function(){function e(e,r){void 0===e&&(e=50),void 0===r&&(r=50),this._pool=new n(Map,!1,function(e){return e.clear()},r,e)}return e.prototype.acquire=function(){return this._pool.acquire()},e.prototype.release=function(e){this._pool.release(e)},e.acquire=function(){return t.acquire()},e.release=function(e){return t.release(e)},e}(),t=new o(100);return o}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/FieldsIndex.js":
/*!******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/FieldsIndex.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,i){function s(t){return"date"===t.type||"esriFieldTypeDate"===t.type}function n(t){return t.toLowerCase().trim()}return function(){function t(t){if(this.fields=t,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],t){for(var e=[],i=0,r=t;i<r.length;i++){var o=r[i],a=o&&o.name;if(a){var d=n(a);this._fieldsMap.set(a,o),this._fieldsMap.set(d,o),e.push(d),s(o)&&(this.dateFields.push(o),this._dateFieldsSet.add(o))}}e.sort(),this.uid=e.join(",")}}return t.prototype.destroy=function(){this._fieldsMap.clear()},t.prototype.has=function(t){return null!=this.get(t)},t.prototype.get=function(t){return null!=t?this._fieldsMap.get(t)||this._fieldsMap.get(n(t)):void 0},t.prototype.isDateField=function(t){return this._dateFieldsSet.has(this.get(t))},t.prototype.normalizeFieldName=function(t){var e=this.get(t);if(e)return e.name},t}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/FeatureContainer.js":
/*!************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/FeatureContainer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../geometry/support/aaBoundingRect */ "./node_modules/arcgis-js-api/geometry/support/aaBoundingRect.js"),__webpack_require__(/*! ../engine */ "./node_modules/arcgis-js-api/views/2d/engine.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,n,o,a,s,d,u){Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(t,r){var i=e.call(this,t,r)||this;return i._rendererInfo=new u.WGLRendererInfo,i.attributeView=new u.AttributeStoreView,i}return n(t,e),t.prototype.destroy=function(){this.removeAllChildren(),this.children.forEach(function(e){return e.destroy()}),this.attributeView.destroy()},t.prototype.whenAttached=function(){var e=this;return this.attached?a.resolve():a.create(function(t){return e.once("attached",function(){return t()})})},t.prototype.setRendererInfo=function(e,t,r){this._rendererInfo.setInfo(e,t,r),this.requestRender()},t.prototype.getMaterialItems=function(e,t){return i(this,void 0,void 0,function(){var i,n,o,a;return r(this,function(r){switch(r.label){case 0:return e&&0!==e.length?[4,this.whenAttached()]:[2,null];case 1:return r.sent(),i=this.stage.painter.textureManager,n=e.map(function(e){return i.rasterizeItem(e.symbol,e.glyphIds,t)}),[4,s.all(n)];case 2:return o=r.sent(),a=o.map(function(t,r){return{id:e[r].id,mosaicItem:t}}),[2,a]}})})},t.prototype.onTileData=function(e,t){if(t.addOrUpdate&&"tileDisplayData"in t.addOrUpdate)e.setData(t,this.hasLabels,this.labelsVisible);else{var r=t.addOrUpdate&&u.TileData.decode(t.addOrUpdate),i=o({},t,{addOrUpdate:r});e.setData(i,this.hasLabels,this.labelsVisible)}this.contains(e)||this.addChild(e),this.requestRender()},t.prototype.onTileError=function(e){e.clear(),this.contains(e)||this.addChild(e)},t.prototype.renderChildren=function(t){this._rendererInfo.update(t.state),this.attributeView.bindTextures(this.stage.context),e.prototype.renderChildren.call(this,t)},t.prototype.createTile=function(e){var t=this._tileInfoView.getTileBounds(d.create(),e);return new u.WGLTile(e,t)},t.prototype.destroyTile=function(e){this.removeChild(e),e.destroy()},t.prototype.attach=function(){return this._initializeExtensions(),e.prototype.attach.call(this)},t.prototype.createRenderParams=function(t){return o({},e.prototype.createRenderParams.call(this,t),{rendererInfo:this._rendererInfo,attributeView:this.attributeView})},t.prototype._initializeExtensions=function(){var e=this.stage.context.capabilities;e.textureFloat,e.vao},t}(u.TileContainer);t.FeatureContainer=l}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/graphics/GraphicContainer.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/graphics/GraphicContainer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../engine/FeatureContainer */ "./node_modules/arcgis-js-api/views/2d/engine/FeatureContainer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,n,i,o,a){Object.defineProperty(r,"__esModule",{value:!0});var p=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),Object.defineProperty(r.prototype,"hasLabels",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"labelsVisible",{get:function(){return!1},enumerable:!0,configurable:!0}),r.prototype._renderGraphics=function(e,r){for(var t=0,n=this.children;t<n.length;t++){var i=n[t];i.isReady&&i.hasData&&(i.commitChanges(),e.context.setStencilFunction(514,i.stencilRef,255),i._displayList.replay(e,i,r))}},r.prototype.renderChildren=function(r){var t=r.painter;if(this.children.some(function(e){return e.hasData})){e.prototype.renderChildren.call(this,r),this._renderGraphics(r);var n=t.effects.highlight;n.bind(r),this._renderGraphics(r,n.defines),n.draw(r),n.unbind()}},r}(a.FeatureContainer);r.default=p}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/graphics/GraphicProcessingQueue.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/graphics/GraphicProcessingQueue.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../../core/scheduling */ "./node_modules/arcgis-js-api/core/scheduling.js"),__webpack_require__(/*! ../../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,n,o,r,s,u){Object.defineProperty(t,"__esModule",{value:!0});var h=function(e){function t(t){var i=e.call(this,t)||this;return i._queue=new Map,i._queueArray=[],i._onGoingGraphic=null,i._onGoingPromise=null,i._scheduledNextHandle=null,i._next=i._next.bind(i),i._finalize=i._finalize.bind(i),i}return i(t,e),Object.defineProperty(t.prototype,"length",{get:function(){return this._queueArray.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this._queueArray.length>0||null!==this._onGoingPromise},enumerable:!0,configurable:!0}),t.prototype.cancel=function(e){if(this._onGoingGraphic&&this._onGoingGraphic.graphic===e&&(this._ongoingAbortController.abort(),this._onGoingGraphic=this._onGoingPromise=null),this._queue.has(e)){var t=this._queue.get(e);this._queue.delete(e);var i=this._queueArray.indexOf(t);this._queueArray.slice(i,1)}this._scheduleNext(),this.notifyChange("updating")},t.prototype.clear=function(){this._queue.clear(),this._queueArray.length=0,this._onGoingPromise&&(this._ongoingAbortController.abort(),this._onGoingGraphic=this._onGoingPromise=null),this._cancelNext(),this.notifyChange("updating")},t.prototype.has=function(e){return this._queue.has(e)},t.prototype.isOngoing=function(e){return this._onGoingGraphic&&this._onGoingGraphic.graphic===e},t.prototype.push=function(e,t){if(!this._queue.has(e)){var i={graphic:e,addOrUpdate:t};this._queueArray.push(i),this._queue.set(e,i),this._scheduleNext(),this.notifyChange("updating")}},t.prototype.refresh=function(){this.reset()},t.prototype.reset=function(){var e=this._onGoingGraphic;if(e){var t=e.graphic,i=e.addOrUpdate;this.push(t,i)}},t.prototype._finalize=function(){this._onGoingGraphic=null,this._ongoingAbortController=null,this._onGoingPromise=null,this.notifyChange("updating"),this._scheduleNext()},t.prototype._cancelNext=function(){this._scheduledNextHandle&&(this._scheduledNextHandle.remove(),this._scheduledNextHandle=null)},t.prototype._scheduleNext=function(){this._scheduledNextHandle||0===this._queue.size||null!=this._onGoingGraphic||(this._scheduledNextHandle=s.schedule(this._next))},t.prototype._next=function(){if(null==this._scheduledNextHandle||0===this._queue.size||this._onGoingGraphic)return void(this._scheduledNextHandle=null);this._scheduledNextHandle=null;var e=this._peek(),t=e.graphic,i=e.addOrUpdate,n=r.createAbortController();this._queue.delete(t),this._onGoingGraphic=e,this._onGoingPromise=this.process(t,i,{signal:n.signal}),this._ongoingAbortController=n,this._onGoingPromise.then(this._finalize,this._finalize),this.notifyChange("updating")},t.prototype._peek=function(){return 0===this._queueArray.length?null:this._queueArray.pop()},n([u.property({readOnly:!0})],t.prototype,"length",null),n([u.property({readOnly:!0})],t.prototype,"updating",null),n([u.property({constructOnly:!0})],t.prototype,"process",void 0),t=n([u.subclass("esri.views.2d.layers.graphics.GraphicProcessingQueue")],t)}(u.declared(o));t.default=h}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/graphics/GraphicStore.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/graphics/GraphicStore.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../../../../core/screenUtils */ "./node_modules/arcgis-js-api/core/screenUtils.js"),__webpack_require__(/*! ../../../../core/libs/rbush/rbush */ "./node_modules/arcgis-js-api/core/libs/rbush/rbush.js"),__webpack_require__(/*! ../../../../geometry/support/aaBoundingRect */ "./node_modules/arcgis-js-api/geometry/support/aaBoundingRect.js"),__webpack_require__(/*! ../../../../geometry/support/contains */ "./node_modules/arcgis-js-api/geometry/support/contains.js"),__webpack_require__(/*! ../../../../geometry/support/extentUtils */ "./node_modules/arcgis-js-api/geometry/support/extentUtils.js"),__webpack_require__(/*! ../../../../geometry/support/jsonUtils */ "./node_modules/arcgis-js-api/geometry/support/jsonUtils.js"),__webpack_require__(/*! ../../../../geometry/support/normalizeUtils */ "./node_modules/arcgis-js-api/geometry/support/normalizeUtils.js"),__webpack_require__(/*! ./GraphicStoreItem */ "./node_modules/arcgis-js-api/views/2d/layers/graphics/GraphicStoreItem.js"),__webpack_require__(/*! ./graphicsUtils */ "./node_modules/arcgis-js-api/views/2d/layers/graphics/graphicsUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,r,o,n,s,a,u,h,l,p,c){function d(e,t,i,r,o){return m.minX=t,m.minY=i,m.maxX=r,m.maxY=o,e.search(m)}Object.defineProperty(t,"__esModule",{value:!0});var m={minX:0,minY:0,maxX:0,maxY:0},y=s.create(),f=[],g=function(){function e(e,t,i,o,s,a){this._graphics=o,this._onAdd=s,this._onRemove=a,this._index=n(9,r("csp-restrictions")?function(e){return{minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}}:[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]),this._itemByGraphic=new Map,this._currentLevel=-1/0,this._tileInfoView=e,this._uidFieldName=i;var u=e.getClosestInfoForScale(t);u&&(this._currentLevel=u.level,this._resolution=this._tileInfoView.getTileResolution(u.level))}return e.prototype.hitTest=function(e,t,i,r,n){e=l.normalizeMapX(e,this._tileInfoView.spatialReference);var p=.5*r*i;y[0]=e-p,y[1]=t-p,y[2]=e+p,y[3]=t+p;var m=.5*r*(i+50),f=d(this._index,e-m,t-m,e+m,t+m);if(!f||0===f.length)return[];for(var g,b={x:e,y:t},_=[],v=0,x=f;v<x.length;v++){var G=x[v];if(G.graphic.visible)switch(h.getJsonType(G.geometry)){case"esriGeometryPoint":var B=G.symbol;if(!B)continue;var z=G.geometry,w=void 0;switch(B.type){case"text":w=c.getTextSymbolBounds(z.x,z.y,B,G.size,this._resolution,n);break;case"cim":w=c.getCIMMarkerBounds(z.x,z.y,B,this._resolution,n);break;default:w=c.getMarkerSymbolBounds(z.x,z.y,B,this._resolution,n)}a.polygonContainsPoint(w,b)&&_.push(G);break;case"esriGeometryPolyline":var P=G.symbol;if(!P)continue;g=1.5*r*window.devicePixelRatio*o.pt2px(P.width),c.isPointOnPolyline(G.geometry,e,t,g)&&_.push(G);break;case"esriGeometryEnvelope":var k=G.geometry,T=s.fromValues(k.xmin,k.ymin,k.xmax,k.ymax);s.intersects(T,y)&&_.push(G);break;case"esriGeometryPolygon":if(a.polygonContainsPoint(G.geometry,b)){_.push(G);break}var I=u.getPolygonExtent(G.geometry);if(Math.abs(I.ymax-I.ymin)<5*r||Math.abs(I.xmax-I.xmin)<5*r){var M=s.fromValues(I.xmin,I.ymin,I.xmax,I.ymax);s.intersects(M,y)&&_.push(G)}break;case"esriGeometryMultipoint":var R=G.symbol;if(!R)continue;for(var V=G.geometry.points,A=void 0,C=0;C<V.length;C++){if("text"===R.type){var L=R;A=c.getTextSymbolBounds(V[C][0],V[C][1],L,G.size,this._resolution,n)}else A=c.getMarkerSymbolBounds(V[C][0],V[C][1],R,this._resolution,n);if(a.polygonContainsPoint(A,b)){_.push(G);break}}}}return _.sort(function(e,t){var i=c.graphicGeometryToNumber(e.graphic),r=c.graphicGeometryToNumber(t.graphic);return i===r?t.zorder-e.zorder:i-r}),_.map(function(e){return e.graphic})},e.prototype.getGraphicsData=function(e,t){var r=d(this._index,e.bounds[0],e.bounds[1],e.bounds[2],e.bounds[3]);if(0===r.length||0===t.length)return[];r.sort(function(e,t){return e.zorder-t.zorder}),r[0].insertAfter=-1;for(var o=1;o<r.length;o++)r[o].insertAfter=r[o-1].graphic.uid;r.sort(function(e,t){return e.graphic.uid-t.graphic.uid}),t.sort(function(e,t){return e.uid-t.uid});for(var n,s=0,a=0,u=[],h={originPosition:"upperLeft",scale:[e.resolution,e.resolution],translate:[e.bounds[0],e.bounds[3]]},l=0,c=t;l<c.length;l++){var m=c[l];for(a=-2;s<r.length;)if(n=r[s],s++,m.uid===n.graphic.uid){a=n.insertAfter;break}if(n.geometry&&-2!==a){var y=n.getGeometryQuantized(h),f=i({},n.graphic.attributes);f[this._uidFieldName]=m.uid,u.push({centroid:p.default.getCentroidQuantized(n,h),geometry:y,attributes:f,symbol:n.symbol,insertAfter:a})}}return u},e.prototype.getGraphicData=function(e,t){var r=this._itemByGraphic.get(t);if(!r)return null;var o=d(this._index,e.bounds[0],e.bounds[1],e.bounds[2],e.bounds[3]);o.sort(function(e,t){return e.zorder-t.zorder});var n=o.indexOf(r),s=0===n||-1===n?-1:o[n-1].graphic.uid,a={originPosition:"upperLeft",scale:[e.resolution,e.resolution],translate:[e.bounds[0],e.bounds[3]]},u=r.getGeometryQuantized(a),h=i({},r.graphic.attributes);return h[this._uidFieldName]=t.uid,{centroid:p.default.getCentroidQuantized(r,a),geometry:u,attributes:h,symbol:r.symbol,insertAfter:s}},e.prototype.queryTileData=function(e){var t=50*e.resolution,i=s.pad(e.bounds,t,s.create()),r=d(this._index,i[0],i[1],i[2],i[3]),o=[];return this._createTileGraphics(o,r,{originPosition:"upperLeft",scale:[e.resolution,e.resolution],translate:[e.bounds[0],e.bounds[3]]}),o},e.prototype.has=function(e){return this._itemByGraphic.has(e)},e.prototype.getBounds=function(e){return this._itemByGraphic.has(e)?this._itemByGraphic.get(e).bounds:null},e.prototype.add=function(e,t,i){if(e){this._onAdd(e);var r=p.default.acquire(e,t,i,this._resolution,this._tileInfoView.spatialReference);return this._itemByGraphic.set(e,r),i&&this._index.insert(r),r.bounds}},e.prototype.remove=function(e){if(this._itemByGraphic.has(e)){this._onRemove(e);var t=this._itemByGraphic.get(e);this._index.remove(t),this._itemByGraphic.delete(e)}},e.prototype.updateZ=function(){for(var e,t,i=this._graphics.items,r=0;r<i.length;r++)t=i[r],(e=this._itemByGraphic.get(t))&&(e.zorder=r)},e.prototype.update=function(e,t,i){var r=this._itemByGraphic.get(e),o=s.clone(r.bounds);return r.size[0]=r.size[1]=0,this._index.remove(r),r.set(e,t,i,this._resolution,this._tileInfoView.spatialReference),i&&this._index.insert(r),{oldBounds:o,newBounds:r.bounds}},e.prototype.updateLevel=function(e){var t=this;if(this._currentLevel!==e){this._currentLevel=e;var i=this._tileInfoView.getTileResolution(e);this._resolution=i,this._index.clear(),f.length=0,this._itemByGraphic.forEach(function(e){e.updateBounds(e.symbol,t._resolution,t._tileInfoView.spatialReference),e.geometry&&f.push(e)}),this._index.load(f)}},e.prototype.clear=function(){this._itemByGraphic.clear(),this._index.clear()},e.prototype._createTileGraphics=function(e,t,r){var o=this._uidFieldName;t.sort(function(e,t){return e.zorder-t.zorder});for(var n,s,a,u,h=0;h<t.length;h++){a=t[h],n=a.graphic,s=a.getGeometryQuantized(r),u=0===h?-1:t[h-1].graphic.uid;var l=i({},a.graphic.attributes);l[o]=n.uid,e.push({centroid:p.default.getCentroidQuantized(a,r),geometry:s,attributes:l,symbol:a.symbol,insertAfter:u})}},e}();t.default=g}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/graphics/GraphicStoreItem.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/graphics/GraphicStoreItem.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../../../geometry/support/aaBoundingRect */ "./node_modules/arcgis-js-api/geometry/support/aaBoundingRect.js"),__webpack_require__(/*! ../../../../geometry/support/centroid */ "./node_modules/arcgis-js-api/geometry/support/centroid.js"),__webpack_require__(/*! ../../../../geometry/support/jsonUtils */ "./node_modules/arcgis-js-api/geometry/support/jsonUtils.js"),__webpack_require__(/*! ../../../../geometry/support/quantizationUtils */ "./node_modules/arcgis-js-api/geometry/support/quantizationUtils.js"),__webpack_require__(/*! ../../../../layers/graphics/featureConversionUtils */ "./node_modules/arcgis-js-api/layers/graphics/featureConversionUtils.js"),__webpack_require__(/*! ../../../../layers/graphics/OptimizedGeometry */ "./node_modules/arcgis-js-api/layers/graphics/OptimizedGeometry.js"),__webpack_require__(/*! ./graphicsUtils */ "./node_modules/arcgis-js-api/views/2d/layers/graphics/graphicsUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,o,i,r,s,n,l,u,y){function h(e){e.coords.length=0,e.lengths.length=0}Object.defineProperty(t,"__esModule",{value:!0});var a=new u.default,g=new u.default,m=function(){function e(){this.bounds=i.create(),this.graphic=null,this.size=[0,0,0,0]}return e.acquire=function(t,o,i,r,s){void 0===t&&(t=null);var n;return 0===e._pool.length?n=new e:(n=e._pool.pop(),this._set.delete(n)),n.acquire(t,o,i,r,s),n},e.release=function(e){e&&!this._set.has(e)&&(e.release(),this._pool.push(e),this._set.add(e))},e.getCentroidQuantized=function(e,t){if(s.isPolygon(e.geometry)){var i=e.symbol;if(o.isNone(i))return null;if(y.isMarkerSymbol(i.type)){var l=r.polygonCentroid(e.geometry);return n.quantizePoint(t,{},{x:l[0],y:l[1]},!1,!1)}}return null},e.prototype.acquire=function(e,t,o,i,r){void 0===e&&(e=null),e&&this.set(e,t,o,i,r)},e.prototype.release=function(){this.graphic=null,this.symbol=null,this.geometry=null},e.prototype.set=function(e,t,o,i,r){this.graphic=e,this.geometry=o,this.symbol=t.symbol,y.getBounds(this.bounds,this.size,t.symbol,o,t.mosaicItem,i,r)},e.prototype.updateBounds=function(e,t,o){y.getBounds(this.bounds,this.size,e,this.geometry,null,t,o)},e.prototype.getGeometryQuantized=function(e){if(s.isPolygon(this.geometry)){var t=this.geometry.rings;if(1===t.length&&2===t[0].length)return n.quantizeGeometry(e,{paths:[[t[0][0],t[0][1]]]})}else if(s.isPolyline(this.geometry))return h(a),h(g),l.convertFromPolyline(a,this.geometry),l.generalizeOptimizedGeometry(g,a,this.geometry.hasZ,this.geometry.hasM,"esriGeometryPolyline",e.scale[0]),l.quantizeOptimizedGeometry(a,g,this.geometry.hasZ,this.geometry.hasM,"esriGeometryPolyline",e),l.convertToPolyline(a,this.geometry.hasZ,this.geometry.hasM);return n.quantizeGeometry(e,this.geometry)},e._pool=[],e._set=new Set,e}();t.default=m}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/graphics/GraphicsView2D.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/graphics/GraphicsView2D.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../../../../core/HandleOwner */ "./node_modules/arcgis-js-api/core/HandleOwner.js"),__webpack_require__(/*! ../../../../core/Identifiable */ "./node_modules/arcgis-js-api/core/Identifiable.js"),__webpack_require__(/*! ../../../../core/iteratorUtils */ "./node_modules/arcgis-js-api/core/iteratorUtils.js"),__webpack_require__(/*! ../../../../core/MapPool */ "./node_modules/arcgis-js-api/core/MapPool.js"),__webpack_require__(/*! ../../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../../core/screenUtils */ "./node_modules/arcgis-js-api/core/screenUtils.js"),__webpack_require__(/*! ../../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../../geometry/Polygon */ "./node_modules/arcgis-js-api/geometry/Polygon.js"),__webpack_require__(/*! ../../../../geometry/support/aaBoundingRect */ "./node_modules/arcgis-js-api/geometry/support/aaBoundingRect.js"),__webpack_require__(/*! ../../../../geometry/support/coordsUtils */ "./node_modules/arcgis-js-api/geometry/support/coordsUtils.js"),__webpack_require__(/*! ../../../../geometry/support/jsonUtils */ "./node_modules/arcgis-js-api/geometry/support/jsonUtils.js"),__webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils */ "./node_modules/arcgis-js-api/geometry/support/spatialReferenceUtils.js"),__webpack_require__(/*! ../../../../layers/graphics/data/projectionSupport */ "./node_modules/arcgis-js-api/layers/graphics/data/projectionSupport.js"),__webpack_require__(/*! ../../../../symbols/support/cimSymbolUtils */ "./node_modules/arcgis-js-api/symbols/support/cimSymbolUtils.js"),__webpack_require__(/*! ../../../../symbols/support/defaults */ "./node_modules/arcgis-js-api/symbols/support/defaults.js"),__webpack_require__(/*! ../../engine */ "./node_modules/arcgis-js-api/views/2d/engine.js"),__webpack_require__(/*! ../../engine/webgl/definitions */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/definitions.js"),__webpack_require__(/*! ../features/support/AttributeStore */ "./node_modules/arcgis-js-api/views/2d/layers/features/support/AttributeStore.js"),__webpack_require__(/*! ../features/support/TileStore */ "./node_modules/arcgis-js-api/views/2d/layers/features/support/TileStore.js"),__webpack_require__(/*! ./GraphicContainer */ "./node_modules/arcgis-js-api/views/2d/layers/graphics/GraphicContainer.js"),__webpack_require__(/*! ./GraphicProcessingQueue */ "./node_modules/arcgis-js-api/views/2d/layers/graphics/GraphicProcessingQueue.js"),__webpack_require__(/*! ./GraphicStore */ "./node_modules/arcgis-js-api/views/2d/layers/graphics/GraphicStore.js"),__webpack_require__(/*! ./graphicsUtils */ "./node_modules/arcgis-js-api/views/2d/layers/graphics/graphicsUtils.js"),__webpack_require__(/*! ../../../layers/GraphicsView */ "./node_modules/arcgis-js-api/views/layers/GraphicsView.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,r,a,o,n,s,h,p,c,l,d,u,g,f,_,v,y,m,S,b,w,T,G,U,I,P,C,A,O,M,H,R){function x(e,t,i){if(i.has(e))return i.get(e);var r={tile:t,addedOrModified:[],removed:[]};return i.set(e,r),r}Object.defineProperty(t,"__esModule",{value:!0});var D=function(e){function t(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var r=e.apply(this,t)||this;return r._tiles=new Map,r._graphicStoreUpdate=!1,r._graphicsSet=new Set,r._matcher=u.resolve(null),r._tileUpdateSet=new Set,r._tilesToUpdate=new Map,r._graphicIdToAbortController=new Map,r._attached=!1,r._highlightIds=new Map,r._updatingGraphicsTimer=null,r.lastUpdateId=-1,r.updateRequested=!1,r.graphicUpdateHandler=r.graphicUpdateHandler.bind(r),r.addOrUpdateGraphic=r.addOrUpdateGraphic.bind(r),r._processAnalyzedGraphics=r._processAnalyzedGraphics.bind(r),r._graphicsChangeHandler=r._graphicsChangeHandler.bind(r),r}return i(t,e),t.prototype.initialize=function(){var e=this;this._tileStore=new C.default(this.view.featuresTilingScheme),this.container=new A.default(this.view.featuresTilingScheme,null),this._attributeStore=new P.default({type:"local",initialize:function(t){return u.resolve(e.container.attributeView.initialize(t))},update:function(t){return e.container.attributeView.requestUpdate(t)},render:function(){return e.container.requestRender()}});var t=function(t){e._attributeStore.createLocalId(t.uid),e._setFilterState(t.uid,t.visible)},i=function(t){e._attributeStore.freeLocalId(t.uid)};this._graphicStore=new M.default(this.view.featuresTilingScheme,this.view.state.scale,this.uid,this.graphics,t,i),this._graphicProcessingQueue=new O.default({process:this.addOrUpdateGraphic});var r=new U.WGLTemplateStore(this.container.getMaterialItems.bind(this.container),!0),a=this._tileStore.tileScheme.tileInfo;this.renderer&&(this._matcher=U.createMatcher(this.renderer,r,null)),this._meshFactory=new U.WGLMeshFactory(null,this.uid,null,r,null,a),this.watch("renderer",function(t){t&&(e._matcher=U.createMatcher(e.renderer,r,null))}),this._tileStore.on("update",this._onTileUpdate.bind(this)),this.container.on("attach",function(){e.graphics.items.length>0&&e._graphicsChangeHandler({target:e.graphics,added:e.graphics.items,removed:[],moved:[]}),e.handles.add(e.graphics.on("change",e._graphicsChangeHandler),"graphics"),e._attached=!0,e.notifyChange("updating")}),this.container.on("detach",function(){e._graphicProcessingQueue&&e._graphicProcessingQueue.clear()})},t.prototype.destroy=function(){this._updatingGraphicsTimer&&(clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=null,this.notifyChange("updating")),this.container.dispose(),this._set("graphics",null),this._graphicProcessingQueue&&(this._graphicProcessingQueue.destroy(),this._graphicProcessingQueue=null),this._graphicStore.clear(),this._tileStore.destroy(),this._attributeStore=null},Object.defineProperty(t.prototype,"updating",{get:function(){return!this._attached||null!==this._updatingGraphicsTimer||this._graphicProcessingQueue.updating||this._tileUpdateSet.size>0||this._tilesToUpdate.size>0},enumerable:!0,configurable:!0}),t.prototype.install=function(e){e.addChild(this.container)},t.prototype.uninstall=function(e){e.removeChild(this.container)},t.prototype.hitTest=function(e,t){if(!this.view||!this.view.position)return u.resolve();var i=this.view.toMap(f.createScreenPoint(e,t));return this.searchFeatures(i).then(function(e){return e&&e.length?e[0]:null})},t.prototype.searchFeatures=function(e,t){var i=this;return void 0===t&&(t=2),u.create(function(r){r(i._graphicStore.hitTest(e.x,e.y,t,i.view.state.resolution,i.view.state.rotation))})},t.prototype.update=function(e){var t=e.state,i=this.view.featuresTilingScheme.getClosestInfoForScale(t.scale).level;this._graphicStore.updateLevel(i),this._tileStore.setViewState(t),this._graphicStoreUpdate=!0,this.updateRequested=!1},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate(this))},t.prototype.processUpdate=function(e){this.updateRequested&&(this.updateRequested=!1,this.update(e))},t.prototype.graphicUpdateHandler=function(e){var t=e.graphic,i=e.property,r=e.newValue,a=t;switch(i){case"attributes":break;case"geometry":case"symbol":this._graphicProcessingQueue.push(a,"update");break;case"visible":this._setFilterState(a.uid,r),this._attributeStore.sendUpdates()}},t.prototype.addHighlight=function(e){for(var t=0,i=e;t<i.length;t++){var r=i[t];if(this._highlightIds.has(r)){var a=this._highlightIds.get(r);this._highlightIds.set(r,a+1)}else this._highlightIds.set(r,1)}this._updateHighlight()},t.prototype.removeHighlight=function(e){for(var t=0,i=e;t<i.length;t++){var r=i[t];if(this._highlightIds.has(r)){var a=this._highlightIds.get(r)-1;0===a?this._highlightIds.delete(r):this._highlightIds.set(r,a)}}this._updateHighlight()},t.prototype._updateHighlight=function(){this._attributeStore.setHighlight(c.keysOfMap(this._highlightIds))},t.prototype._getIntersectingTiles=function(e){var t=this._graphicStore.getBounds(e);return t&&0!==y.width(t)&&0!==y.height(t)?this._tileStore.boundsIntersections(t):[]},t.prototype._updateTile=function(e){var t=this,i=e.tile,r=this._getGraphicsData(i,e.addedOrModified);return this._processGraphics(i.key,r).then(function(r){return t._patchTile(i.key,{addOrUpdate:r,remove:e.removed}),r})},t.prototype._patchTile=function(e,t){if(this._tiles.has(e)){var i=this._tiles.get(e);this.container.onTileData(i,t),this.container.requestRender()}},t.prototype._graphicsChangeHandler=function(e){var t=this;if(!this._graphicStoreUpdate){var i=this.view.state,r=this.view.featuresTilingScheme.getClosestInfoForScale(i.scale).level;this._graphicStore.updateLevel(r),this._tileStore.setViewState(i)}for(var a,o=e.added,n=e.removed,s=e.moved,h=this._tilesToUpdate,p=[],c=new Array(o.length),l=0;l<o.length;l++){var d=o[l];c[l]=d,this._graphicsSet.add(d),p.push(this.addGraphic(d))}for(var g=0,f=n;g<f.length;g++){var _=f[g];this._abortProcessingGraphic(_.uid);for(var v=this._getIntersectingTiles(_),y=0,m=v;y<m.length;y++){var S=m[y];a=S.key.id;var b=x(a,S,h);b.removed.push(this._attributeStore.getLocalId(_.uid))}this._graphicsSet.delete(_),this._graphicStore.remove(_)}for(var w=0,T=s;w<T.length;w++)for(var G=T[w],v=this._getIntersectingTiles(G),U=0,I=v;U<I.length;U++){var S=I[U];a=S.key.id;var b=x(a,S,h);b.addedOrModified.push(G)}this._flipUpdatingGraphics(),u.all(p).then(function(){for(var e,i=0;i<c.length;i++){e=c[i];for(var r=t._getIntersectingTiles(e),o=0,n=r;o<n.length;o++){var s=n[o];a=s.key.id;x(a,s,h).addedOrModified.push(e)}}t._graphicStore.updateZ();var p=[];return h.forEach(function(e){return p.push(t._updateTile(e))}),u.all(p).then(function(){h.clear(),t.notifyChange("updating")})}).catch(function(){h.clear(),t.notifyChange("updating")})},t.prototype._getSymbolResources=function(e,t){return n(this,void 0,void 0,function(){var i,r,a,n,s,h,p,c;return o(this,function(o){switch(o.label){case 0:return this.container.attached?(i=d.isSome(e.symbol)?e.symbol:null,i?[3,3]:this.renderer?[4,this.renderer.getSymbolAsync(e,{scale:this.view.scale})]:[3,2]):[2,u.resolve(null)];case 1:return i=o.sent(),[3,3];case 2:i=this._getNullSymbol(e),o.label=3;case 3:return[4,T.expandSymbol(i,t)];case 4:if(i=o.sent(),r=[],"text"===i.type){for(a=new Set,n=i,s=U.bidiText(n.text)[0],h=0;h<s.length;h++)a.add(s.charCodeAt(h));p=[],a.forEach(function(e){return p.push(e)}),r.push({symbol:n.toJSON(),id:0,glyphIds:p})}else r.push({symbol:i.toJSON(),id:e.uid,glyphIds:null});return[4,this.container.getMaterialItems(r,t).then(function(e){return e&&e.length>0?e[0].mosaicItem:null})];case 5:return c=o.sent(),[2,{symbol:i,mosaicItem:c}]}})})},t.prototype._projectAndNormalizeGeometry=function(e){return n(this,void 0,void 0,function(){var t,i,r,a=this;return o(this,function(o){return d.isNone(e.geometry)?[2,u.resolve(null)]:(t=e.geometry,S.isPolygon(t)?(i=t.rings,t.rings=i):S.isPolyline(t)?(r=t.paths,t.paths=r):S.isExtent(t)&&(t=v.fromExtent(t)),[2,w.checkProjectionSupport(t.spatialReference,this.view.spatialReference).then(function(){var e=H.normalizeCentralMeridian(t),i=w.project(e,t.spatialReference,a.view.spatialReference);return m.closeRingsAndFixWinding(i),i})])})})},t.prototype._onTileUpdate=function(e){var t=b.getInfo(this.view.spatialReference);if(e.added&&e.added.length>0)for(var i=0,r=e.added;i<r.length;i++){var a=r[i];this._addNewTile(a,t)}if(e.removed&&e.removed.length>0)for(var o=0,n=e.removed;o<n.length;o++){var s=n[o];this._removeTile(s.key)}},t.prototype.addOrUpdateGraphic=function(e,t,i){return this._addOrUpdateGraphic(e,t,i)},t.prototype.addGraphic=function(e){var t=this;this._abortProcessingGraphic(e.uid);var i=g.createAbortController();this._graphicIdToAbortController.set(e.uid,i);var r={signal:i.signal};return this._addOrUpdateGraphic(e,"add",r).then(function(){t._graphicIdToAbortController.delete(e.uid)}).catch(function(i){if(t._graphicIdToAbortController.delete(e.uid),!u.isAbortError(i))throw i})},t.prototype._addOrUpdateGraphic=function(e,t,i){var r=this,a=this._projectAndNormalizeGeometry(e),o=this._getSymbolResources(e,i);return u.all([a,o]).then(function(a){var o=a[0],n=a[1];return"add"===t?r._addProjectedGraphic(e,n,o):r._updateGraphic(e,n,o,i)})},t.prototype._addProjectedGraphic=function(e,t,i){this._graphicsSet.has(e)&&this._graphicStore.add(e,t,i)},t.prototype._updateGraphic=function(e,t,i,r){var a=this;if(!this._graphicStore.has(e)||u.isAborted(r))return u.resolve();for(var o=this._graphicStore.update(e,t,i),n=o.oldBounds,s=o.newBounds,h=0===y.width(n)&&0===y.height(n),p=0===y.width(s)&&0===y.height(s),c=h?[]:this._tileStore.boundsIntersections(n),d=p?[]:this._tileStore.boundsIntersections(s),g=l.acquire(),f=0,_=c;f<_.length;f++){var v=_[f];g.set(v.key,{addOrUpdate:null,remove:[this._attributeStore.getLocalId(e.uid)]})}for(var m=0,S=d;m<S.length;m++){var v=S[m],b=this._getGraphicData(v,e);if(g.has(v.key)){var w=g.get(v.key);w.remove.length=0,w.addOrUpdate=b}else g.set(v.key,{addOrUpdate:b,remove:null})}var T=[];return g.forEach(function(e,t){var i=a._processGraphics(t,e.addOrUpdate,r).then(function(i){a._patchTile(t,{addOrUpdate:i,remove:e.remove})});T.push(i)}),l.release(g),u.all(T).then(function(){})},t.prototype._addTile=function(e,t){var i=y.create();this.view.featuresTilingScheme.getTileBounds(i,e);var r=new U.WGLTile(e,i,!0),a={clear:!0,addOrUpdate:t,remove:[]};this._tiles.set(e,r),this.container.addChild(r),r.setData(a,!1,!1)},t.prototype._addNewTile=function(e,t){var i=this,r=this._graphicStore.queryTileData(e);if(t)for(var a=Math.round((t.valid[1]-t.valid[0])/e.resolution),o=0,n=r;o<n.length;o++){var s=n[o];s.geometry&&S.isPoint(s.geometry)&&this._wrapPoints(s,a)}var h=e.key;this._tileUpdateSet.add(e.key),this.notifyChange("updating"),this._processGraphics(h,r).then(function(e){i._addTile(h,e),i._tileUpdateSet.delete(h),i.notifyChange("updating")}).catch(function(e){if(i._tileUpdateSet.delete(h),i.notifyChange("updating"),!u.isAbortError(e))throw e})},t.prototype._removeTile=function(e){if(this._tiles.has(e)){var t=this._tiles.get(e);this.container.removeChild(t),t.destroy(),this._tiles.delete(e)}},t.prototype._setFilterState=function(e,t){var i=this._attributeStore.getLocalId(e),r=this._attributeStore.getHighlightFlag(e);this._attributeStore.setData(i,0,0,r|(t?I.FILTER_FLAG_0:0))},t.prototype._getGraphicsData=function(e,t){var i=b.getInfo(this.view.spatialReference),r=this._graphicStore.getGraphicsData(e,t);if(i)for(var a=Math.round((i.valid[1]-i.valid[0])/e.resolution),o=0,n=r;o<n.length;o++){var s=n[o];s.geometry&&S.isPoint(s.geometry)&&this._wrapPoints(s,a)}return r.sort(function(e,t){return e.insertAfter-t.insertAfter}),r},t.prototype._getGraphicData=function(e,t){var i=this._graphicStore.getGraphicData(e,t),r=[i],a=b.getInfo(this.view.spatialReference);if(a){var o=Math.round((a.valid[1]-a.valid[0])/e.resolution);i.geometry&&S.isPoint(i.geometry)&&this._wrapPoints(i,o)}return r},t.prototype._wrapPoints=function(e,t){var i=e.geometry;512===t?i.x<20?e.geometry={points:[[i.x,i.y],[t,0]]}:i.x>492&&(e.geometry={points:[[i.x,i.y],[-t,0]]}):i.x<-20?e.geometry={points:[[i.x,i.y],[t,0]]}:i.x>532&&(e.geometry={points:[[i.x,i.y],[-t,0]]})},t.prototype._processGraphics=function(e,t,i){return n(this,void 0,void 0,function(){var r,a,n;return o(this,function(o){switch(o.label){case 0:return(r=t&&t.length)&&this._meshFactory?(a=this._meshFactory,[4,this._matcher.then(function(e){return a.analyze(t,!0,e,null,null,i)})]):[2,null];case 1:return n=o.sent(),this._attributeStore.sendUpdates(),[2,this._processAnalyzedGraphics(e,n)]}})})},t.prototype._processAnalyzedGraphics=function(e,t){for(var i=this._meshFactory,r=i.createMeshData(t.length),a=this._attributeStore,o=0,n=t;o<n.length;o++){var s=n[o];s.insertAfter=-1===s.insertAfter?-1:a.getLocalId(s.insertAfter),s.localId=a.getLocalId(s.attributes[this.uid]),i.write(r,s,null,null,e.level)}return U.TileData.fromMeshData(r)},t.prototype._abortProcessingGraphic=function(e){if(this._graphicIdToAbortController.has(e)){this._graphicIdToAbortController.get(e).abort()}},t.prototype._getNullSymbol=function(e){var t=e.geometry;return S.isPolyline(t)?G.errorPolylineSymbol2D:S.isPolygon(t)||S.isExtent(t)?G.errorPolygonSymbol2D:G.errorPointSymbol2D},t.prototype._flipUpdatingGraphics=function(){var e=this;this._updatingGraphicsTimer&&clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=setTimeout(function(){e._updatingGraphicsTimer=null,e.notifyChange("updating")},160),this.notifyChange("updating")},r([_.property()],t.prototype,"_graphicProcessingQueue",void 0),r([_.property({constructOnly:!0})],t.prototype,"graphics",void 0),r([_.property({dependsOn:["_graphicProcessingQueue.updating"]})],t.prototype,"updating",null),r([_.property()],t.prototype,"view",void 0),r([_.property()],t.prototype,"updateRequested",void 0),t=r([_.subclass("esri.views.2d.layers.support.GraphicsView2D")],t)}(_.declared(R.GraphicsView(h.HandleOwnerMixin(p.IdentifiableMixin(s)))));t.default=D}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/layers/GraphicsView.js":
/*!*****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/layers/GraphicsView.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,o,p,t){Object.defineProperty(r,"__esModule",{value:!0}),r.GraphicsView=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.graphics=null,r.renderer=null,r.view=null,r}return o(r,e),p([t.property()],r.prototype,"graphics",void 0),p([t.property()],r.prototype,"renderer",void 0),p([t.property()],r.prototype,"updating",void 0),p([t.property()],r.prototype,"view",void 0),r=p([t.subclass("esri.views.layers.GraphicsView")],r)}(t.declared(e))}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=29.js.map