(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/views/2d/engine/FeatureContainer":"./node_modules/arcgis-js-api/views/2d/engine/FeatureContainer.js",
	"arcgis-js-api/views/2d/layers/features/tileRenderers/SymbolTileRenderer":"./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/SymbolTileRenderer.js",
	"arcgis-js-api/views/2d/layers/features/tileRenderers/support/WGLFeatureView":"./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/support/WGLFeatureView.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[106],{

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

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/SymbolTileRenderer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/SymbolTileRenderer.js ***!
  \*************************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../../../geometry/support/aaBoundingRect */ "./node_modules/arcgis-js-api/geometry/support/aaBoundingRect.js"),__webpack_require__(/*! ../../../engine */ "./node_modules/arcgis-js-api/views/2d/engine.js"),__webpack_require__(/*! ../support/rendererUtils */ "./node_modules/arcgis-js-api/views/2d/layers/features/support/rendererUtils.js"),__webpack_require__(/*! ./BaseTileRenderer */ "./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/BaseTileRenderer.js"),__webpack_require__(/*! ./support/visualVariablesUtils */ "./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/support/visualVariablesUtils.js"),__webpack_require__(/*! ./support/WGLFeatureView */ "./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/support/WGLFeatureView.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,r,a,s,l,o,n,u,p,f,d,c){Object.defineProperty(t,"__esModule",{value:!0});var y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.install=function(e){var t=new c.WGLFeatureView(this.tileInfoView,this.layerView,this.layer);this.featuresView=t,e.addChild(t)},t.prototype.uninstall=function(e){e.removeChild(this.featuresView),this.featuresView.destroy()},t.prototype.hitTest=function(e,t){return this.featuresView.hitTest(e,t)},t.prototype.supportsRenderer=function(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)},t.prototype.onConfigUpdate=function(e,t){var i=null;if("visualVariables"in e){var r=p.simplifyVVRenderer(e),a=(r.visualVariables||[]).map(function(e){var t=e.clone();return"normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t});i=d.convertVisualVariables(a)}this.featuresView.setRendererInfo(e,i,this.layerView.effects),this.featuresView.setClips(this.layerView.clips)},t.prototype.onTileData=function(e){var t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate()},t.prototype.onTileError=function(e){var t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t)},t.prototype.forceAttributeTextureUpload=function(){this.featuresView.attributeView.forceTextureUpload()},t.prototype.lockAttributeTextureUpload=function(){this.featuresView.attributeView.lockTextureUpload()},t.prototype.unlockAttributeTextureUpload=function(){this.featuresView.attributeView.unlockTextureUpload()},t.prototype.getMaterialItems=function(e){return l(this,void 0,void 0,function(){return s(this,function(t){return[2,this.featuresView.getMaterialItems(e)]})})},t.prototype.invalidateLabels=function(){this.layer.labelingInfo&&this.layer.labelsVisible&&(this.tiles.forEach(function(e){return e.isDirty=!0}),this.layerView.view.labelManager.requestUpdate())},t.prototype.createTile=function(e){var t=this.tileInfoView.getTileBounds(n.create(),e),i=new u.WGLTile(e,t);return this.layer.labelingInfo&&this.layerView.view.labelManager.addTile(this.layerView,i),i},t.prototype.disposeTile=function(e){this.featuresView.removeChild(e),this.layer.labelingInfo&&this.layerView.view.labelManager.removeTile(this.layerView,e.key.id),e.destroy(),this.layerView.view.labelManager.requestUpdate()},t=r([o.subclass("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],t)}(o.declared(f.default));t.default=y}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/support/WGLFeatureView.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/support/WGLFeatureView.js ***!
  \*****************************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ../../../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../../engine */ "./node_modules/arcgis-js-api/views/2d/engine.js"),__webpack_require__(/*! ../../../../engine/FeatureContainer */ "./node_modules/arcgis-js-api/views/2d/engine/FeatureContainer.js"),__webpack_require__(/*! ../../../../engine/webgl/enums */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/enums.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,n,a,i,s,l,o,p){Object.defineProperty(r,"__esModule",{value:!0});var u=function(e){function r(r,t,n){var a=e.call(this,r,t.clips)||this;return a._pointToCallbacks=new Map,a._layer=n,a._layerView=t,a}return n(r,e),r.prototype.renderChildren=function(r){if(this.hasAnimation){r.painter.effects.integrate.draw(r,r.attributeView)}e.prototype.renderChildren.call(this,r)},r.prototype.hitTest=function(e,r){var t=[e,r],n=s.createResolver();return this._pointToCallbacks.set(t,n),this.requestRender(),n.promise},r.prototype.doRender=function(r){var t=this._layer,n=t.minScale,a=t.maxScale,i=r.state.scale;i<=(n||1/0)&&i>=a&&e.prototype.doRender.call(this,r)},Object.defineProperty(r.prototype,"hasAnimation",{get:function(){return this.hasLabels},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"hasLabels",{get:function(){return!(!this._layer.labelingInfo||!this._layer.labelingInfo.length)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"labelsVisible",{get:function(){return this._layer.labelsVisible},enumerable:!0,configurable:!0}),r.prototype.prepareRenderPasses=function(r){var t=this,n=r.registerRenderPass({name:"label",brushes:[l.brushes.Label],target:function(){return t._layer.labelsVisible?t.children:null},drawPhase:p.WGLDrawPhase.LABEL|p.WGLDrawPhase.LABEL_ALPHA}),a=r.registerRenderPass({name:"geometry",brushes:[l.brushes.Fill,l.brushes.Line,l.brushes.Marker,l.brushes.Text],target:function(){return t.children},effects:[{apply:r.effects.highlight,enable:function(){return!!t._layerView.hasHighlight()}},{apply:r.effects.hittest,enable:function(){return!!t._pointToCallbacks.size},args:function(){return t._pointToCallbacks}}]});return e.prototype.prepareRenderPasses.call(this,r).concat([a,n])},r}(o.FeatureContainer);r.WGLFeatureView=u}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=106.js.map