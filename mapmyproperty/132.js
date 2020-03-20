(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/views/2d/layers/GraphicsLayerView2D":"./node_modules/arcgis-js-api/views/2d/layers/GraphicsLayerView2D.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[132],{

/***/ "./node_modules/arcgis-js-api/views/2d/layers/GraphicsLayerView2D.js":
/*!***************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/GraphicsLayerView2D.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../Graphic */ "./node_modules/arcgis-js-api/Graphic.js"),__webpack_require__(/*! ../../../core/Collection */ "./node_modules/arcgis-js-api/core/Collection.js"),__webpack_require__(/*! ../../../core/Handles */ "./node_modules/arcgis-js-api/core/Handles.js"),__webpack_require__(/*! ../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../engine/Container */ "./node_modules/arcgis-js-api/views/2d/engine/Container.js"),__webpack_require__(/*! ./LayerView2D */ "./node_modules/arcgis-js-api/views/2d/layers/LayerView2D.js"),__webpack_require__(/*! ./graphics/GraphicsView2D */ "./node_modules/arcgis-js-api/views/2d/layers/graphics/GraphicsView2D.js"),__webpack_require__(/*! ../../layers/LayerView */ "./node_modules/arcgis-js-api/views/layers/LayerView.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,r,n,o,s,p,a,c,h,u,l,d,g){var f={remove:function(){},pause:function(){},resume:function(){}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new a,t.container=new u.Container,t}return i(t,e),t.prototype.initialize=function(){this.graphicsView=new d.default({view:this.view,graphics:this.layer.graphics})},t.prototype.attach=function(){var e=this;this.graphicsView.install(this.container),this._handles.add([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.clips.on("change",function(){return e.graphicsView.container.setClips(e.clips)})]),this.graphicsView.container.setClips(this.clips)},t.prototype.detach=function(){this.graphicsView.destroy(),this._handles.removeAll()},t.prototype.hitTest=function(e,t){return this.suspended||!this.graphicsView?c.resolve(null):this.graphicsView.hitTest(e,t)},t.prototype.fetchPopupFeatures=function(e){return o(this,void 0,void 0,function(){return n(this,function(t){return this.graphicsView?[2,this.graphicsView.searchFeatures(e).then(function(e){return e.filter(function(e){return!!e.popupTemplate})})]:[2,void 0]})})},t.prototype.update=function(e){this.graphicsView.update(e)},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return!this.graphicsView||this.graphicsView.updating},t.prototype.highlight=function(e){var t,i=this;return"number"==typeof e?t=[e]:e instanceof s?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map(function(e){return e&&e.uid}):p.isCollection(e)&&(t=e.map(function(e){return e&&e.uid}).toArray()),t=t.filter(function(e){return null!=e}),t.length?(this.graphicsView.addHighlight(t),{remove:function(){return i.graphicsView.removeHighlight(t)},pause:function(){},resume:function(){}}):f},t.prototype.queryGraphics=function(){return c.resolve(this.graphicsView.graphics)},r([h.property()],t.prototype,"graphicsView",void 0),r([h.property({dependsOn:["graphicsView.updating"]})],t.prototype,"updating",void 0),t=r([h.subclass("esri.views.2d.layers.GraphicsLayerView2D")],t)}(h.declared(l.LayerView2D(g)))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=132.js.map