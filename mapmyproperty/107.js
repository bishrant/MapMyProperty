(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/views/2d/layers/ImageryLayerView2D":"./node_modules/arcgis-js-api/views/2d/layers/ImageryLayerView2D.js",
	"arcgis-js-api/views/layers/ImageryLayerView":"./node_modules/arcgis-js-api/views/layers/ImageryLayerView.js",
	"arcgis-js-api/views/layers/support/popupUtils":"./node_modules/arcgis-js-api/views/layers/support/popupUtils.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[107],{

/***/ "./node_modules/arcgis-js-api/views/2d/layers/ImageryLayerView2D.js":
/*!**************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/ImageryLayerView2D.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../Graphic */ "./node_modules/arcgis-js-api/Graphic.js"),__webpack_require__(/*! ../../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../core/screenUtils */ "./node_modules/arcgis-js-api/core/screenUtils.js"),__webpack_require__(/*! ../../../core/watchUtils */ "./node_modules/arcgis-js-api/core/watchUtils.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../layers/support/rasterFunctions/pixelUtils */ "./node_modules/arcgis-js-api/layers/support/rasterFunctions/pixelUtils.js"),__webpack_require__(/*! ../engine/ImageryBitmapSource */ "./node_modules/arcgis-js-api/views/2d/engine/ImageryBitmapSource.js"),__webpack_require__(/*! ./BitmapLayerView2D */ "./node_modules/arcgis-js-api/views/2d/layers/BitmapLayerView2D.js"),__webpack_require__(/*! ./LayerView2D */ "./node_modules/arcgis-js-api/views/2d/layers/LayerView2D.js"),__webpack_require__(/*! ./support/ExportStrategy */ "./node_modules/arcgis-js-api/views/2d/layers/support/ExportStrategy.js"),__webpack_require__(/*! ../../layers/ImageryLayerView */ "./node_modules/arcgis-js-api/views/layers/ImageryLayerView.js"),__webpack_require__(/*! ../../layers/LayerView */ "./node_modules/arcgis-js-api/views/layers/LayerView.js"),__webpack_require__(/*! ../../layers/RefreshableLayerView */ "./node_modules/arcgis-js-api/views/layers/RefreshableLayerView.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,n,a,o,s,p,l,u,c,y,h,d,g,f,m,x,v){var w=s.getLogger("esri.views.2d.layers.ImageryLayerView2D");return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._exportImageVersion=-1,t}return r(t,e),Object.defineProperty(t.prototype,"pixelData",{get:function(){if(this.updating)return null;var e=this.strategy.container.children;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){var t=this.view.extent,r=e.map(function(e){return e.source}).filter(function(e){return e.extent&&e.extent.intersects(t)}).map(function(e){return{extent:e.extent,pixelBlock:e.originalPixelBlock}}),i=y.mosaicPixelData(r,t);return i?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null},enumerable:!0,configurable:!0}),t.prototype.hitTest=function(e,t){if(this.suspended)return p.resolve(null);var r=this.view.toMap(l.createScreenPoint(e,t));return p.resolve(new o({attributes:{},geometry:r}))},t.prototype.update=function(e){this.strategy.update(e).catch(function(e){p.isAbortError(e)||w.error(e)})},t.prototype.attach=function(){var e=this;this.layer.increaseRasterJobHandlerUsage();var t=this.layer.version>=10,r=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new f({container:this.container,imageNormalizationSupported:t,imageMaxHeight:r,imageMaxWidth:i,fetchSource:this.fetchImage.bind(this),requestUpdate:function(){return e.requestUpdate()}}),this.handles.add([u.init(this,"layer.exportImageServiceParameters.version",function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())}),this.watch("timeExtent",function(){return e.requestUpdate()}),this.layer.on("redraw",function(){e.strategy.updateExports(function(t){t.source instanceof HTMLImageElement?t.requestRender():e.layer.applyRenderer({pixelBlock:t.source.pixelBlock}).then(function(r){var i=t.source;i.pixelBlock=r.pixelBlock,i.filter=function(t){return e.layer.applyFilter(t)},e.container.requestRender()})})})],"imagerylayerview-update")},t.prototype.detach=function(){this.layer.decreaseRasterJobHandlerUsage(),this.strategy.destroy(),this.container.removeAllChildren(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.doRefresh=function(){return a(this,void 0,void 0,function(){return n(this,function(e){return this.requestUpdate(),[2]})})},t.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},t.prototype.fetchImage=function(e,t,r,i){var n=this;return this._exportImageVersion=this.get("layer.exportImageServiceParameters.version"),i=i||{},i.timeExtent=this.timeExtent,i.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i).then(function(e){return e.imageElement?e.imageElement:n.layer.applyRenderer(e.pixelData,{signal:i.signal}).then(function(t){var r=new h.default(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=function(e){return n.layer.applyFilter(e)},r})})},i([c.property({dependsOn:["updating"]})],t.prototype,"pixelData",null),i([c.property()],t.prototype,"strategy",void 0),i([c.property({dependsOn:["strategy.updating"]})],t.prototype,"updating",void 0),t=i([c.subclass("esri.views.2d.layers.ImageryLayerView2D")],t)}(c.declared(m.ImageryLayerView(v.RefreshableLayerView(d.BitmapLayerView2D(g.LayerView2D(x))))))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/layers/ImageryLayerView.js":
/*!*********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/layers/ImageryLayerView.js ***!
  \*********************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../geometry/Point */ "./node_modules/arcgis-js-api/geometry/Point.js"),__webpack_require__(/*! ../../layers/support/timeUtils */ "./node_modules/arcgis-js-api/layers/support/timeUtils.js"),__webpack_require__(/*! ../../tasks/support/Query */ "./node_modules/arcgis-js-api/tasks/support/Query.js"),__webpack_require__(/*! ./support/popupUtils */ "./node_modules/arcgis-js-api/views/layers/support/popupUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,p,i,s,a,n,u,l,c,y,d){Object.defineProperty(r,"__esModule",{value:!0}),r.ImageryLayerView=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.view=null,r}return t(r,e),r.prototype.fetchPopupFeatures=function(e,r){return i(this,void 0,void 0,function(){var t,o,i,u,c,w,h,f,m,v,R;return p(this,function(p){switch(p.label){case 0:if(t=this.layer,!e)return[2,n.reject(new s("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}))];if(o=t.popupEnabled,i=d.getFetchPopupTemplate(t,r),!o||!a.isSome(i))throw new s("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:o,popupTemplate:i});return[4,i.getRequiredFields()];case 1:return u=p.sent(),c=new y,c.geometry=e,c.outFields=u,c.outSpatialReference=e.spatialReference,w=this.view.resolution,h="2d"===this.view.type?new l(w,w,this.view.spatialReference):new l(.5*w,.5*w,this.view.spatialReference),f=i.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},m=f.returnTopmostRaster,v=f.showNoDataRecords,R={returnDomainValues:!0,returnTopmostRaster:m,pixelSize:h,showNoDataRecords:v},[2,t.queryVisibleRasters(c,R).then(function(e){return e})]}})})},o([u.property()],r.prototype,"layer",void 0),o([u.property()],r.prototype,"view",void 0),o([u.property(c.combinedViewLayerTimeExtentProperty)],r.prototype,"timeExtent",void 0),r=o([u.subclass("esri.views.layers.ImageryLayerView")],r)}(u.declared(e))}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/layers/support/popupUtils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/layers/support/popupUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! @dojo/framework/shim/array */ "./node_modules/@dojo/framework/shim/array.mjs"),__webpack_require__(/*! ../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../../layers/support/fieldUtils */ "./node_modules/arcgis-js-api/layers/support/fieldUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,l,i,p,a,d){function o(e,t){return void 0===t&&(t=e.popupTemplate),i(this,void 0,void 0,function(){var i,o,r,u,s,n,c,f,m,F,h;return l(this,function(l){switch(l.label){case 0:return a.isSome(t)?[4,t.getRequiredFields(e.fields)]:[2,[]];case 1:return i=l.sent(),(o=t.lastEditInfoEnabled,r=e.objectIdField,u=e.typeIdField,s=e.globalIdField,p.includes(i,"*"))?[2,["*"]]:(c=d.fixFields,f=[e.fields],F=(m=i).concat,h=o,h?[4,d.getFeatureEditFields(e)]:[3,3]);case 2:h=l.sent(),l.label=3;case 3:return n=c.apply(void 0,f.concat([F.apply(m,[h||null])])),u&&n.push(u),n&&r&&d.hasField(e.fields,r)&&-1===n.indexOf(r)&&n.push(r),n&&s&&d.hasField(e.fields,s)&&-1===n.indexOf(s)&&n.push(s),[2,n]}})})}function r(e,t){return e.popupTemplate?e.popupTemplate:a.isSome(t)&&t.defaultPopupTemplateEnabled&&a.isSome(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}Object.defineProperty(t,"__esModule",{value:!0}),t.getRequiredFields=o,t.getFetchPopupTemplate=r}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=107.js.map