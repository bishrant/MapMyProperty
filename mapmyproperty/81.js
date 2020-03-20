(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/views/2d/LabelManager":"./node_modules/arcgis-js-api/views/2d/LabelManager.js",
	"arcgis-js-api/views/2d/magnifier/MagnifierView2D":"./node_modules/arcgis-js-api/views/2d/magnifier/MagnifierView2D.js",
	"arcgis-js-api/views/2d/mapViewDeps":"./node_modules/arcgis-js-api/views/2d/mapViewDeps.js",
	"arcgis-js-api/views/2d/navigation/MapViewNavigation":"./node_modules/arcgis-js-api/views/2d/navigation/MapViewNavigation.js",
	"arcgis-js-api/views/2d/navigation/ZoomBox":"./node_modules/arcgis-js-api/views/2d/navigation/ZoomBox.js",
	"arcgis-js-api/views/2d/navigation/actions/Pan":"./node_modules/arcgis-js-api/views/2d/navigation/actions/Pan.js",
	"arcgis-js-api/views/2d/navigation/actions/Pinch":"./node_modules/arcgis-js-api/views/2d/navigation/actions/Pinch.js",
	"arcgis-js-api/views/2d/navigation/actions/Rotate":"./node_modules/arcgis-js-api/views/2d/navigation/actions/Rotate.js",
	"arcgis-js-api/views/navigation/FilteredFiniteDifference":"./node_modules/arcgis-js-api/views/navigation/FilteredFiniteDifference.js",
	"arcgis-js-api/views/navigation/Momentum":"./node_modules/arcgis-js-api/views/navigation/Momentum.js",
	"arcgis-js-api/views/navigation/MomentumEstimator":"./node_modules/arcgis-js-api/views/navigation/MomentumEstimator.js",
	"arcgis-js-api/views/navigation/PanPlanarMomentumEstimator":"./node_modules/arcgis-js-api/views/navigation/PanPlanarMomentumEstimator.js",
	"arcgis-js-api/views/navigation/RotationMomentumEstimator":"./node_modules/arcgis-js-api/views/navigation/RotationMomentumEstimator.js",
	"arcgis-js-api/views/navigation/ZoomMomentumEstimator":"./node_modules/arcgis-js-api/views/navigation/ZoomMomentumEstimator.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "./node_modules/arcgis-js-api/views/2d/LabelManager.js":
/*!*************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/LabelManager.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/HandleOwner */ "./node_modules/arcgis-js-api/core/HandleOwner.js"),__webpack_require__(/*! ../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../core/throttle */ "./node_modules/arcgis-js-api/core/throttle.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./engine */ "./node_modules/arcgis-js-api/views/2d/engine.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,r,o,n,s,a,l,p,d){Object.defineProperty(t,"__esModule",{value:!0});var u=64,c=a.getLogger("esri.views.2d.layers.labels.LabelManager"),y=function(e){function t(t){var i=e.call(this,t)||this;return i._applyVisibilityPassThrottled=l.throttle(i._applyVisibilityPass,u,i),i.lastUpdateId=-1,i.updateRequested=!1,i.view=null,i}return i(t,e),t.prototype.initialize=function(){var e=this;this.collisionEngine=new d.CollisionEngine(this.view.featuresTilingScheme),this._layerViewSorter=new d.LayerViewSorter(function(t,i){e.collisionEngine.registerLayerView(t,i);var r=t.tileRenderer;r&&r.forEachTile(function(i){i.isDirty=!0,e.addTile(t,i)}),e.requestUpdate()},function(t){e.collisionEngine.unregisterLayerView(t),e.requestUpdate()}),this.handles.add(this.view.allLayerViews.on("change",function(t){e._layerViewSorter.update(t)}))},t.prototype.destroy=function(){this._layerViewSorter.destroy(),this._layerViewSorter=null,this.collisionEngine=null,this._applyVisibilityPassThrottled.remove()},Object.defineProperty(t.prototype,"updating",{get:function(){return this.updateRequested},enumerable:!0,configurable:!0}),t.prototype.update=function(e){this._applyVisibilityPassThrottled(e)},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate(this))},t.prototype.processUpdate=function(e){this._set("updateParameters",e),this.updateRequested&&(this.update(e),this.updateRequested=!1)},t.prototype.addTile=function(e,t){this.collisionEngine.addTile(e,t)},t.prototype.removeTile=function(e,t){this.collisionEngine.removeTile(e,t)},t.prototype._applyVisibilityPass=function(e){try{var t=this.view.featuresTilingScheme.getClosestInfoForScale(e.state.scale).level;this.collisionEngine.run(e,t)}catch(e){c.error(new n("mapview-labeling","Encountered an error during label decluttering",e))}},r([p.property()],t.prototype,"updateRequested",void 0),r([p.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r([p.property({dependsOn:["updateRequested"]})],t.prototype,"updating",null),r([p.property()],t.prototype,"view",void 0),t=r([p.subclass("esri.views.2d.layers.labels.LabelManager")],t)}(p.declared(s.HandleOwnerMixin(o)));t.default=y}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/magnifier/MagnifierView2D.js":
/*!**************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/magnifier/MagnifierView2D.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../webgl */ "./node_modules/arcgis-js-api/views/webgl.js"),__webpack_require__(/*! ../engine */ "./node_modules/arcgis-js-api/views/2d/engine.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,a,s,o,n,u){Object.defineProperty(t,"__esModule",{value:!0});var h=(n.enums.DataType,n.enums.Usage,n.enums.TextureSamplingMode,n.enums.TextureType,n.enums.TextureWrapMode,n.enums.PrimitiveType,n.enums.PixelFormat,n.enums.PixelType,u.enums.WGLDrawPhase),l=function(t){function l(){var e=t.call(this)||this;return e.visible=!1,e}return r(l,t),l.prototype.destroy=function(){this._readbackTexture&&(this._readbackTexture.dispose(),this._readbackTexture=null,this._maskTexture.dispose(),this._maskTexture=null,this._overlayTexture.dispose(),this._overlayTexture=null,this._vertexArrayObject.dispose(),this._vertexArrayObject=null,this._program.dispose(),this._program=null,this._resourcesPromise=null)},Object.defineProperty(l.prototype,"magnifier",{get:function(){return this._magnifier},set:function(e){var t=this;this._magnifier=e,this._handle&&this._handle.remove(),this._handle=e.watch("version",function(){t.visible=e.visible}),this.visible=e.visible},enumerable:!0,configurable:!0}),l.prototype.doRender=function(t){var r=this.stage.context;if(!this._resourcesPromise)return void(this._resourcesPromise=this._loadResources(e.toUrl("../../../images/magnifier/mask.png"),e.toUrl("../../../images/magnifier/overlay.png")));if(t.drawPhase===h.MAP&&this._canRender()){this._updateResources(r);var i=this._magnifier,a=1/i.factor,s=Math.ceil(a*this.overlay.width),o=Math.ceil(a*this.overlay.height),n=t.state.size,u=t.pixelRatio,l=u*n[0],p=u*n[1],d=i.position||{x:.5*n[0],y:.5*n[1]},m=u*d.x,c=p-u*d.y,f=.5*s,g=.5*o;f>m?m=f:m>=l-f&&(m=l-f-1),g>c?c=g:c>=p-g&&(c=p-g-1);var _=m-f,y=c-g,x=this._readbackTexture;r.bindTexture(x,0),r.gl.copyTexImage2D(x.descriptor.target,0,x.descriptor.pixelFormat,_,y,s,o,0);var v=this.stage.background&&this.stage.background.color,b=v?[v.a*v.r/255,v.a*v.g/255,v.a*v.b/255,v.a]:[1,1,1,1],T=(m+i.offsetX)/l*2-1,w=(c-i.offsetY)/p*2-1,k=this.overlay.width/l*2,M=this.overlay.height/p*2,P=this._program;r.bindVAO(this._vertexArrayObject),r.bindTexture(this._overlayTexture,6),r.bindTexture(this._maskTexture,7),r.bindProgram(P),P.setUniform4fv("u_background",b),P.setUniform1i("u_readbackTexture",0),P.setUniform1i("u_overlyTexture",6),P.setUniform1i("u_maskTexture",7),P.setUniform2f("u_drawPos",T,w),P.setUniform1f("u_width",k),P.setUniform1f("u_height",M),r.setStencilTestEnabled(!1),r.drawArrays(5,0,4),r.bindVAO()}},l.prototype._canRender=function(){return this.mask&&this.overlay&&null!=this._magnifier},l.prototype._loadResources=function(e,t){return i(this,void 0,void 0,function(){var r,i,n;return a(this,function(a){switch(a.label){case 0:return[4,o.all([s(e,{responseType:"image"}),s(t,{responseType:"image"})])];case 1:return r=a.sent(),i=r[0].data,n=r[1].data,this.mask=i,this.overlay=n,this.requestRender(),[2]}})})},l.prototype._updateResources=function(e){if(!this._readbackTexture){var t=1/this._magnifier.factor,r=Math.ceil(t*this.overlay.width),i=Math.ceil(t*this.overlay.height);this._program=u.createMagnifierProgram(e);var a={geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1,divisor:0}]},s=new Uint16Array([0,1,0,0,1,1,1,0]),o=u.magnifier.attributes;this._vertexArrayObject=new n.VertexArrayObject(e,o,a,{geometry:n.BufferObject.createVertex(e,35044,s)}),this._overlayTexture=new n.Texture(e,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!0},this.overlay),this._maskTexture=new n.Texture(e,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!0},this.mask),this._readbackTexture=new n.Texture(e,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r,height:i})}},l}(u.DisplayObject);t.default=l}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/mapViewDeps.js":
/*!************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/mapViewDeps.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./LabelManager */ "./node_modules/arcgis-js-api/views/2d/LabelManager.js"),__webpack_require__(/*! ./layers/graphics/GraphicsView2D */ "./node_modules/arcgis-js-api/views/2d/layers/graphics/GraphicsView2D.js"),__webpack_require__(/*! ./navigation/MapViewNavigation */ "./node_modules/arcgis-js-api/views/2d/navigation/MapViewNavigation.js"),__webpack_require__(/*! ./magnifier/MagnifierView2D */ "./node_modules/arcgis-js-api/views/2d/magnifier/MagnifierView2D.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,a,i,r,n,t){Object.defineProperty(a,"__esModule",{value:!0}),a.LabelManager=i.default,a.GraphicsView2D=r.default,a.MapViewNavigation=n.default,a.MagnifierView2D=t.default}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/navigation/MapViewNavigation.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/navigation/MapViewNavigation.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../Viewpoint */ "./node_modules/arcgis-js-api/Viewpoint.js"),__webpack_require__(/*! ../../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../../../core/now */ "./node_modules/arcgis-js-api/core/now.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../geometry/Point */ "./node_modules/arcgis-js-api/geometry/Point.js"),__webpack_require__(/*! ../viewpointUtils */ "./node_modules/arcgis-js-api/views/2d/viewpointUtils.js"),__webpack_require__(/*! ./ZoomBox */ "./node_modules/arcgis-js-api/views/2d/navigation/ZoomBox.js"),__webpack_require__(/*! ./actions/Pan */ "./node_modules/arcgis-js-api/views/2d/navigation/actions/Pan.js"),__webpack_require__(/*! ./actions/Pinch */ "./node_modules/arcgis-js-api/views/2d/navigation/actions/Pinch.js"),__webpack_require__(/*! ./actions/Rotate */ "./node_modules/arcgis-js-api/views/2d/navigation/actions/Rotate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,i,o,n,e,a,r,s,p,c,u,h,v,l,m,d){Object.defineProperty(i,"__esModule",{value:!0});var w=new r({targetGeometry:new u}),y=[0,0],f=function(t){function i(i){var o=t.call(this,i)||this;return o._endTimer=null,o.animationManager=null,o}return o(i,t),i.prototype.initialize=function(){this.pan=new l({navigation:this}),this.rotate=new d({navigation:this}),this.pinch=new m({navigation:this}),this.zoomBox=new v({view:this.view,navigation:this})},i.prototype.destroy=function(){this.zoomBox.destroy(),this.zoomBox=null,this.animationManager=null},i.prototype.begin=function(){this._set("interacting",!0)},i.prototype.end=function(){this._lastEventTimestamp=p(),this._startTimer(250)},i.prototype.zoom=function(t,i){return void 0===i&&(i=this._getDefaultAnchor()),a(this,void 0,void 0,function(){return e(this,function(o){return this.stop(),this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs?t<1?[2,this.zoomIn(i)]:[2,this.zoomOut(i)]:(this.setViewpoint(i,t,0,[0,0]),[2])})})},i.prototype.zoomIn=function(t){return a(this,void 0,void 0,function(){var i,o;return e(this,function(n){return i=this.view,o=i.constraints.snapToNextScale(i.scale),[2,this._zoomToScale(o,t)]})})},i.prototype.zoomOut=function(t){return a(this,void 0,void 0,function(){var i,o;return e(this,function(n){return i=this.view,o=i.constraints.snapToPreviousScale(i.scale),[2,this._zoomToScale(o,t)]})})},i.prototype.setViewpoint=function(t,i,o,n){this.begin(),this.view.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,t,i,o,n),this.end()},i.prototype.setViewpointImmediate=function(t,i,o,n){void 0===i&&(i=0),void 0===o&&(o=[0,0]),void 0===n&&(n=this._getDefaultAnchor()),this.view.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,n,t,i,o)},i.prototype.continousRotateClockwise=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){h.rotateBy(t,t,-1)})},i.prototype.continousRotateCounterclockwise=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){h.rotateBy(t,t,1)})},i.prototype.resetRotation=function(){this.view.rotation=0},i.prototype.continousPanLeft=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){h.translateBy(t,t,[-10,0])})},i.prototype.continousPanRight=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){h.translateBy(t,t,[10,0])})},i.prototype.continousPanUp=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){h.translateBy(t,t,[0,10])})},i.prototype.continousPanDown=function(){var t=this.get("view.viewpoint");this.animationManager.animateContinous(t,function(t){h.translateBy(t,t,[0,-10])})},i.prototype.stop=function(){this.pan.stopMomentumNavigation(),this.animationManager.stop(),this.end(),null!==this._endTimer&&(clearTimeout(this._endTimer),this._endTimer=null,this._set("interacting",!1))},i.prototype._startTimer=function(t){var i=this;return null!==this._endTimer?this._endTimer:(this._endTimer=setTimeout(function(){i._endTimer=null;var t=p()-i._lastEventTimestamp;t<250?i._endTimer=i._startTimer(t):i._set("interacting",!1)},t),this._endTimer)},i.prototype._getDefaultAnchor=function(){var t=this.view,i=t.size,o=t.padding,n=o.left,e=o.right,a=o.top,r=o.bottom;return y[0]=.5*(i[0]-e+n),y[1]=.5*(i[1]-r+a),y},i.prototype._zoomToScale=function(t,i){return void 0===i&&(i=this._getDefaultAnchor()),a(this,void 0,void 0,function(){var o,n,a,r,s,p,c,u;return e(this,function(e){return o=this.view,n=o.constraints,a=o.scale,r=o.viewpoint,s=o.size,p=o.padding,c=n.canZoomInTo(t),u=n.canZoomOutTo(t),t<a&&!c||t>a&&!u?[2]:[2,o.goTo(h.padAndScaleAndRotateBy(w,r,t/a,0,i,s,p),{animate:!0})]})})},i.prototype._scaleRotateTranslateViewpoint=function(t,i,o,n,e){var a=this.view,r=a.size,s=a.padding,p=a.constraints,c=a.scale,u=a.viewpoint,v=c*o,l=p.canZoomInTo(v),m=p.canZoomOutTo(v);return(o<1&&!l||o>1&&!m)&&(o=1),h.translateBy(u,u,e),h.padAndScaleAndRotateBy(t,u,o,n,i,r,s)},n([c.property()],i.prototype,"animationManager",void 0),n([c.property({type:Boolean,readOnly:!0})],i.prototype,"interacting",void 0),n([c.property()],i.prototype,"pan",void 0),n([c.property()],i.prototype,"pinch",void 0),n([c.property()],i.prototype,"rotate",void 0),n([c.property()],i.prototype,"view",void 0),n([c.property()],i.prototype,"zoomBox",void 0),i=n([c.subclass("esri.views.2d.navigation.MapViewNavigation")],i)}(c.declared(s));i.default=f}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/navigation/ZoomBox.js":
/*!*******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/navigation/ZoomBox.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../../../core/screenUtils */ "./node_modules/arcgis-js-api/core/screenUtils.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,r,o,i,n,a){var s={container:"esri-zoom-box__container",overlay:"esri-zoom-box__overlay",background:"esri-zoom-box__overlay-background",box:"esri-zoom-box__outline"},h={zoom:"Shift",counter:"Ctrl"};return function(t){function e(e){var r=t.call(this,e)||this;return r._container=null,r._overlay=null,r._backgroundShape=null,r._boxShape=null,r._box={x:0,y:0,width:0,height:0},r._redraw=r._redraw.bind(r),r}return r(e,t),e.prototype.destroy=function(){this.view=null},Object.defineProperty(e.prototype,"view",{set:function(t){var e=this;this._handles&&this._handles.forEach(function(t){t.remove()}),this._handles=null,this._destroyOverlay(),this._set("view",t),t&&(t.on("drag",[h.zoom],function(t){return e._handleDrag(t,1)}),t.on("drag",[h.zoom,h.counter],function(t){return e._handleDrag(t,-1)}))},enumerable:!0,configurable:!0}),e.prototype._start=function(){this._createContainer(),this._createOverlay(),this.navigation.begin()},e.prototype._update=function(t,e,r,o){this._box.x=t,this._box.y=e,this._box.width=r,this._box.height=o,this._rafId||(this._rafId=requestAnimationFrame(this._redraw))},e.prototype._end=function(t,e,r,o,i){var a=this.view,s=a.toMap(n.createScreenPoint(t+.5*r,e+.5*o)),h=Math.max(r/a.width,o/a.height);-1===i&&(h=1/h),this._destroyOverlay(),this.navigation.end(),a.goTo({center:s,scale:a.scale*h})},e.prototype._updateBox=function(t,e,r,o){var i=this._boxShape;i.setAttributeNS(null,"x",""+t),i.setAttributeNS(null,"y",""+e),i.setAttributeNS(null,"width",""+r),i.setAttributeNS(null,"height",""+o),i.setAttributeNS(null,"class",s.box)},e.prototype._updateBackground=function(t,e,r,o){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(t,e,r,o,this.view.width,this.view.height))},e.prototype._createContainer=function(){var t=document.createElement("div");t.className=s.container,this.view.root.appendChild(t),this._container=t},e.prototype._createOverlay=function(){var t=this.view.width,e=this.view.height,r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttributeNS(null,"d","M 0 0 L "+t+" 0 L "+t+" "+e+" L 0 "+e+" Z"),r.setAttributeNS(null,"class",s.background);var o=document.createElementNS("http://www.w3.org/2000/svg","rect"),i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),i.setAttributeNS(null,"class",s.overlay),i.appendChild(r),i.appendChild(o),this._container.appendChild(i),this._backgroundShape=r,this._boxShape=o,this._overlay=i},e.prototype._destroyOverlay=function(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null},e.prototype._toSVGPath=function(t,e,r,o,i,n){var a=e,s=t,h=t+r,c=e+o;return"M 0 0 L "+i+" 0 L "+i+" "+n+" L 0 "+n+" ZM "+s+" "+a+" L "+s+" "+c+" L "+h+" "+c+" L "+h+" "+a+" Z"},e.prototype._handleDrag=function(t,e){var r,o,i,n,a=t.x,s=t.y,h=t.origin.x,c=t.origin.y;switch(a>h?(r=h,i=a-h):(r=a,i=h-a),s>c?(o=c,n=s-c):(o=s,n=c-s),t.action){case"start":this._start();break;case"update":this._update(r,o,i,n);break;case"end":this._end(r,o,i,n,e)}t.stopPropagation()},e.prototype._redraw=function(){if(this._rafId&&(this._rafId=null,this._overlay)){var t=this._box,e=t.x,r=t.y,o=t.width,i=t.height;this._updateBox(e,r,o,i),this._updateBackground(e,r,o,i),this._rafId=requestAnimationFrame(this._redraw)}},o([a.property()],e.prototype,"navigation",void 0),o([a.property()],e.prototype,"view",null),e=o([a.subclass("esri.views.2d.navigation.ZoomBox")],e)}(a.declared(i))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/navigation/actions/Pan.js":
/*!***********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/navigation/actions/Pan.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../../../../Viewpoint */ "./node_modules/arcgis-js-api/Viewpoint.js"),__webpack_require__(/*! ../../../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../../../../core/screenUtils */ "./node_modules/arcgis-js-api/core/screenUtils.js"),__webpack_require__(/*! ../../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec3f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3f64.js"),__webpack_require__(/*! ../../viewpointUtils */ "./node_modules/arcgis-js-api/views/2d/viewpointUtils.js"),__webpack_require__(/*! ../../../navigation/PanPlanarMomentumEstimator */ "./node_modules/arcgis-js-api/views/navigation/PanPlanarMomentumEstimator.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,i,n,o,m,a,r,s,u,p,c,v){return function(t){function e(e){var i=t.call(this,e)||this;return i.animationTime=0,i.momentumEstimator=new v.PanPlanarMomentumEstimator(500,6,.92),i.momentum=null,i.tmpMomentum=p.vec3f64.create(),i.momentumFinished=!1,i.viewpoint=new m({targetGeometry:new o.Point,scale:0,rotation:0}),i.watch("momentumFinished",function(t){t&&i.navigation.stop()}),i}return i(e,t),e.prototype.begin=function(t,e){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(e),this.previousDrag=e},e.prototype.update=function(t,e){this.addToEstimator(e);var i=e.center.x,n=e.center.y,o=this.previousDrag;i=o?o.center.x-i:-i,n=o?n-o.center.y:n,t.viewpoint=c.translateBy(this.viewpoint,t.viewpoint,[i||0,n||0]),this.previousDrag=e},e.prototype.end=function(t,e){this.addToEstimator(e);var i=t.navigation.momentumEnabled;this.momentum=i?this.momentumEstimator.evaluateMomentum():null,this.animationTime=0,this.momentum&&this.onAnimationUpdate(t),this.previousDrag=null,this.navigation.end()},e.prototype.addToEstimator=function(t){var e=t.center.x,i=t.center.y,n=r.createScreenPointArray(-e,i),o=p.vec3f64.fromValues(-e,i,0);this.momentumEstimator.add(n,o,.001*t.timestamp)},e.prototype.onAnimationUpdate=function(t){var e=this;this.navigation.animationManager.animateContinous(t.viewpoint,function(i,n){e.momentumFinished=!e.momentum||e.momentum.isFinished(e.animationTime);var o=.001*n;if(!e.momentumFinished){var m=e.momentum.valueDelta(e.animationTime,o);u.vec3.scale(e.tmpMomentum,e.momentum.direction,m),t.viewpoint=c.translateBy(i,i,e.tmpMomentum)}e.animationTime+=o})},e.prototype.stopMomentumNavigation=function(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())},n([s.property()],e.prototype,"momentumFinished",void 0),n([s.property()],e.prototype,"viewpoint",void 0),n([s.property()],e.prototype,"navigation",void 0),e=n([s.subclass("esri.views.2d.navigation.actions.Pan")],e)}(s.declared(a))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/navigation/actions/Pinch.js":
/*!*************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/navigation/actions/Pinch.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../../../../Viewpoint */ "./node_modules/arcgis-js-api/Viewpoint.js"),__webpack_require__(/*! ../../../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec2 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec2.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec2f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec2f64.js"),__webpack_require__(/*! ../../viewpointUtils */ "./node_modules/arcgis-js-api/views/2d/viewpointUtils.js"),__webpack_require__(/*! ../../../navigation/RotationMomentumEstimator */ "./node_modules/arcgis-js-api/views/navigation/RotationMomentumEstimator.js"),__webpack_require__(/*! ../../../navigation/ZoomMomentumEstimator */ "./node_modules/arcgis-js-api/views/navigation/ZoomMomentumEstimator.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,o,i,e,n,a,m,s,r,u,p,h,c){return function(t){function o(o){var i=t.call(this,o)||this;return i._animationTime=0,i._momentumFinished=!1,i._rotationMomentumEstimator=new h.RotationMomentumEstimator(.6,.15,.95),i._rotationDirection=1,i._zoomDirection=1,i._zoomMomentumEstimator=new c.ZoomMomentumEstimator,i._zoomOnly=null,i.zoomMomentum=null,i.rotateMomentum=null,i.viewpoint=new a({targetGeometry:new n.Point,scale:0,rotation:0}),i.watch("_momentumFinished",function(t){t&&i.navigation.stop()}),i}return i(o,t),o.prototype.begin=function(t,o){this.navigation.begin(),this._rotationMomentumEstimator.reset(),this._zoomMomentumEstimator.reset(),this._zoomOnly=null,this._previousAngle=this._startAngle=o.angle,this._previousRadius=this._startRadius=o.radius,this._previousCenter=o.center,this._updateTimestamp=null,t.constraints.rotationEnabled&&this.addToRotateEstimator(0,o.timestamp),this.addToZoomEstimator(o,1)},o.prototype.update=function(t,o){null===this._updateTimestamp&&(this._updateTimestamp=o.timestamp);var i=o.angle,e=o.radius,n=o.center,a=Math.abs(180*(i-this._startAngle)/Math.PI),m=Math.abs(e-this._startRadius),s=this._startRadius/e;if(this._previousRadius){var r=e/this._previousRadius,u=180*(i-this._previousAngle)/Math.PI;this._rotationDirection=u>=0?1:-1,this._zoomDirection=r>=1?1:-1,t.constraints.rotationEnabled?(null===this._zoomOnly&&o.timestamp-this._updateTimestamp>200&&(this._zoomOnly=m-a>0),null===this._zoomOnly||this._zoomOnly?u=0:this.addToRotateEstimator(i-this._startAngle,o.timestamp)):u=0,this.addToZoomEstimator(o,s),this.navigation.setViewpoint([n.x,n.y],1/r,u,[this._previousCenter.x-n.x,n.y-this._previousCenter.y])}this._previousAngle=i,this._previousRadius=e,this._previousCenter=n},o.prototype.end=function(t){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum(),this._animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(t),this.navigation.end()},o.prototype.addToRotateEstimator=function(t,o){this._rotationMomentumEstimator.add(t,.001*o)},o.prototype.addToZoomEstimator=function(t,o){this._zoomMomentumEstimator.add(o,.001*t.timestamp)},o.prototype.canZoomIn=function(t){var o=t.scale,i=t.constraints.effectiveMaxScale;return 0===i||o>i},o.prototype.canZoomOut=function(t){var o=t.scale,i=t.constraints.effectiveMinScale;return 0===i||o<i},o.prototype.onAnimationUpdate=function(t){var o=this;this.navigation.animationManager.animateContinous(t.viewpoint,function(i,e){var n=!o.canZoomIn(t)&&o._zoomDirection>1||!o.canZoomOut(t)&&o._zoomDirection<1,a=!o.rotateMomentum||o.rotateMomentum.isFinished(o._animationTime),m=n||!o.zoomMomentum||o.zoomMomentum.isFinished(o._animationTime),s=.001*e;if(o._momentumFinished=a&&m,!o._momentumFinished){var h=o.rotateMomentum?Math.abs(o.rotateMomentum.valueDelta(o._animationTime,s))*o._rotationDirection*180/Math.PI:0,c=o.zoomMomentum?Math.abs(o.zoomMomentum.valueDelta(o._animationTime,s)):1,l=u.vec2f64.create(),d=u.vec2f64.create();if(o._previousCenter){r.vec2.set(l,o._previousCenter.x,o._previousCenter.y),p.getPaddingScreenTranslation(d,t.size,t.padding),r.vec2.add(l,l,d);var _=t.constraints,v=t.scale,M=v*c;c<1&&!_.canZoomInTo(M)?(c=v/_.effectiveMaxScale,o.zoomMomentum=null,o.rotateMomentum=null):c>1&&!_.canZoomOutTo(M)&&(c=v/_.effectiveMinScale,o.zoomMomentum=null,o.rotateMomentum=null),p.scaleAndRotateBy(i,t.viewpoint,c,h,l,t.size)}}o._animationTime+=s})},o.prototype.stopMomentumNavigation=function(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop())},e([s.property()],o.prototype,"_momentumFinished",void 0),e([s.property()],o.prototype,"viewpoint",void 0),e([s.property()],o.prototype,"navigation",void 0),o=e([s.subclass("esri.views.2d.navigation.actions.Pinch")],o)}(s.declared(m))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/navigation/actions/Rotate.js":
/*!**************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/navigation/actions/Rotate.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../../../../Viewpoint */ "./node_modules/arcgis-js-api/Viewpoint.js"),__webpack_require__(/*! ../../../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec2 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec2.js"),__webpack_require__(/*! ../../../../core/libs/gl-matrix-2/vec2f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec2f64.js"),__webpack_require__(/*! ../../viewpointUtils */ "./node_modules/arcgis-js-api/views/2d/viewpointUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,i,n,c,p,s,a,v){var u=a.vec2f64.create(),d=a.vec2f64.create();return function(e){function t(t){var r=e.call(this,t)||this;return r._previousCenter=a.vec2f64.create(),r.viewpoint=new n({targetGeometry:new i.Point,scale:0,rotation:0}),r}return r(t,e),t.prototype.begin=function(e,t){this.navigation.begin(),s.vec2.set(this._previousCenter,t.center.x,t.center.y)},t.prototype.update=function(e,t){var r=e.state,o=r.size,i=r.padding;s.vec2.set(u,t.center.x,t.center.y),v.getAnchor(d,o,i),e.viewpoint=v.rotateBy(this.viewpoint,e.content.viewpoint,v.angleBetween(d,this._previousCenter,u)),s.vec2.copy(this._previousCenter,u)},t.prototype.end=function(){this.navigation.end()},o([p.property()],t.prototype,"viewpoint",void 0),o([p.property()],t.prototype,"navigation",void 0),t=o([p.subclass("esri.views.2d.actions.Rotate")],t)}(p.declared(c))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/navigation/FilteredFiniteDifference.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/navigation/FilteredFiniteDifference.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this.gain=e}return e.prototype.update=function(e){if(this.hasLastValue){var t=this.computeDelta(e);this.updateDelta(t)}this.lastValue=e},e.prototype.reset=function(){this.lastValue=void 0,this.filteredDelta=void 0},Object.defineProperty(e.prototype,"hasLastValue",{get:function(){return void 0!==this.lastValue},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasFilteredDelta",{get:function(){return void 0!==this.filteredDelta},enumerable:!0,configurable:!0}),e.prototype.computeDelta=function(e){return e-this.lastValue},e.prototype.updateDelta=function(e){this.hasFilteredDelta?this.filteredDelta=(1-this.gain)*this.filteredDelta+this.gain*e:this.filteredDelta=e},e}();t.FilteredFiniteDifference=i}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/navigation/Momentum.js":
/*!*****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/navigation/Momentum.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,i,e){Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function t(t,i,e){this._initialVelocity=t,this._stopVelocity=i,this._friction=e,this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction))}return Object.defineProperty(t.prototype,"duration",{get:function(){return this._duration},enumerable:!0,configurable:!0}),t.prototype.isFinished=function(t){return t>this.duration},Object.defineProperty(t.prototype,"friction",{get:function(){return this._friction},enumerable:!0,configurable:!0}),t.prototype.value=function(t){return this.valueFromInitialVelocity(this._initialVelocity,t)},t.prototype.valueDelta=function(t,i){var e=this.value(t);return this.value(t+i)-e},t.prototype.valueFromInitialVelocity=function(t,i){i=Math.min(i,this.duration);var e=1-this.friction;return t*(Math.pow(e,i)-1)/Math.log(e)},t}();i.Momentum=o}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/navigation/MomentumEstimator.js":
/*!**************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/navigation/MomentumEstimator.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ../../core/mathUtils */ "./node_modules/arcgis-js-api/core/mathUtils.js"),__webpack_require__(/*! ./FilteredFiniteDifference */ "./node_modules/arcgis-js-api/views/navigation/FilteredFiniteDifference.js"),__webpack_require__(/*! ./Momentum */ "./node_modules/arcgis-js-api/views/navigation/Momentum.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,n,l,r){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t,i,n){void 0===e&&(e=2.5),void 0===t&&(t=.01),void 0===i&&(i=.95),void 0===n&&(n=12),this.minimumInitialVelocity=e,this.stopVelocity=t,this.friction=i,this.maxVelocity=n,this.enabled=!0,this.value=new l.FilteredFiniteDifference(.8),this.time=new l.FilteredFiniteDifference(.3)}return e.prototype.add=function(e,t){if(this.enabled){if(this.time.hasLastValue){if(this.time.computeDelta(t)<.01)return;if(this.value.hasFilteredDelta){var i=this.value.computeDelta(e);this.value.filteredDelta*i<0&&this.value.reset()}}this.time.update(t),this.value.update(e)}},e.prototype.reset=function(){this.value.reset(),this.time.reset()},e.prototype.evaluateMomentum=function(){if(!this.enabled||!this.value.hasFilteredDelta)return null;var e=this.value.filteredDelta/this.time.filteredDelta;return e=n.clamp(e,-this.maxVelocity,this.maxVelocity),Math.abs(e)<this.minimumInitialVelocity?null:this.createMomentum(e,this.stopVelocity,this.friction)},e.prototype.createMomentum=function(e,t,i){return new r.Momentum(e,t,i)},e}();t.MomentumEstimator=a}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/navigation/PanPlanarMomentumEstimator.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/navigation/PanPlanarMomentumEstimator.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ../../core/libs/gl-matrix-2/vec3 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3.js"),__webpack_require__(/*! ../../core/libs/gl-matrix-2/vec3f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec3f64.js"),__webpack_require__(/*! ./FilteredFiniteDifference */ "./node_modules/arcgis-js-api/views/navigation/FilteredFiniteDifference.js"),__webpack_require__(/*! ./Momentum */ "./node_modules/arcgis-js-api/views/navigation/Momentum.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,n,r,s,c){Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(t,i,n,r,s){var c=e.call(this,t,i,n)||this;return c.sceneVelocity=r,c.direction=s,c}return i(t,e),t.prototype.value=function(t){return e.prototype.valueFromInitialVelocity.call(this,this.sceneVelocity,t)},t}(c.Momentum);t.PanPlanarMomentum=l;var o=function(){function e(e,t,i){void 0===e&&(e=300),void 0===t&&(t=12),void 0===i&&(i=.84),this.minimumInitialVelocity=e,this.stopVelocity=t,this.friction=i,this.enabled=!0,this.time=new s.FilteredFiniteDifference(.6),this.screen=[new s.FilteredFiniteDifference(.4),new s.FilteredFiniteDifference(.4)],this.scene=[new s.FilteredFiniteDifference(.6),new s.FilteredFiniteDifference(.6),new s.FilteredFiniteDifference(.6)],this.tmpDirection=r.vec3f64.create()}return e.prototype.add=function(e,t,i){if(this.enabled){if(this.time.hasLastValue){if(this.time.computeDelta(i)<.015)return}this.screen[0].update(e[0]),this.screen[1].update(e[1]),this.scene[0].update(t[0]),this.scene[1].update(t[1]),this.scene[2].update(t[2]),this.time.update(i)}},e.prototype.reset=function(){this.screen[0].reset(),this.screen[1].reset(),this.scene[0].reset(),this.scene[1].reset(),this.scene[2].reset(),this.time.reset()},e.prototype.evaluateMomentum=function(){if(!this.enabled||!this.screen[0].hasFilteredDelta)return null;var e=this.screen[0].filteredDelta,t=this.screen[1].filteredDelta,i=Math.sqrt(e*e+t*t),n=i/this.time.filteredDelta;return Math.abs(n)<this.minimumInitialVelocity?null:this.createMomentum(n,this.stopVelocity,this.friction)},e.prototype.createMomentum=function(e,t,i){n.vec3.set(this.tmpDirection,this.scene[0].filteredDelta,this.scene[1].filteredDelta,this.scene[2].filteredDelta);var r=n.vec3.length(this.tmpDirection);r>0&&n.vec3.scale(this.tmpDirection,this.tmpDirection,1/r);var s=r/this.time.filteredDelta;return new l(e,t,i,s,this.tmpDirection)},e}();t.PanPlanarMomentumEstimator=o}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/navigation/RotationMomentumEstimator.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/navigation/RotationMomentumEstimator.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ./MomentumEstimator */ "./node_modules/arcgis-js-api/views/navigation/MomentumEstimator.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,o,a){Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(e,o,a,i){return void 0===e&&(e=3),void 0===o&&(o=.01),void 0===a&&(a=.95),void 0===i&&(i=12),t.call(this,e,o,a,i)||this}return o(e,t),e.prototype.add=function(e,o){if(this.value.hasLastValue){for(var a=this.value.lastValue,i=e-a;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;e=a+i}t.prototype.add.call(this,e,o)},e}(a.MomentumEstimator);e.RotationMomentumEstimator=i}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/navigation/ZoomMomentumEstimator.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/navigation/ZoomMomentumEstimator.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ./Momentum */ "./node_modules/arcgis-js-api/views/navigation/Momentum.js"),__webpack_require__(/*! ./MomentumEstimator */ "./node_modules/arcgis-js-api/views/navigation/MomentumEstimator.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,o,r,n){Object.defineProperty(e,"__esModule",{value:!0});var u=function(t){function e(e,o,r){return t.call(this,e,o,r)||this}return o(e,t),e.prototype.value=function(e){var o=t.prototype.value.call(this,e);return Math.exp(o)},e.prototype.valueDelta=function(e,o){var r=t.prototype.value.call(this,e),n=t.prototype.value.call(this,e+o),u=n-r;return Math.exp(u)},e}(r.Momentum);e.ZoomMomentum=u;var i=function(t){function e(e,o,r,n){return void 0===e&&(e=2.5),void 0===o&&(o=.01),void 0===r&&(r=.95),void 0===n&&(n=12),t.call(this,e,o,r,n)||this}return o(e,t),e.prototype.add=function(e,o){t.prototype.add.call(this,Math.log(e),o)},e.prototype.createMomentum=function(t,e,o){return new u(t,e,o)},e}(n.MomentumEstimator);e.ZoomMomentumEstimator=i}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=81.js.map