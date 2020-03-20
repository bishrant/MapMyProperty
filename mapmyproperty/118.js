(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/views/2d/layers/WMSLayerView2D":"./node_modules/arcgis-js-api/views/2d/layers/WMSLayerView2D.js",
	"arcgis-js-api/views/layers/WMSLayerView":"./node_modules/arcgis-js-api/views/layers/WMSLayerView.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[118],{

/***/ "./node_modules/arcgis-js-api/views/2d/layers/WMSLayerView2D.js":
/*!**********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/WMSLayerView2D.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js"),__webpack_require__(/*! ../../../layers/support/ExportWMSImageParameters */ "./node_modules/arcgis-js-api/layers/support/ExportWMSImageParameters.js"),__webpack_require__(/*! ./BitmapLayerView2D */ "./node_modules/arcgis-js-api/views/2d/layers/BitmapLayerView2D.js"),__webpack_require__(/*! ./LayerView2D */ "./node_modules/arcgis-js-api/views/2d/layers/LayerView2D.js"),__webpack_require__(/*! ./support/ExportStrategy */ "./node_modules/arcgis-js-api/views/2d/layers/support/ExportStrategy.js"),__webpack_require__(/*! ../../layers/LayerView */ "./node_modules/arcgis-js-api/views/layers/LayerView.js"),__webpack_require__(/*! ../../layers/RefreshableLayerView */ "./node_modules/arcgis-js-api/views/layers/RefreshableLayerView.js"),__webpack_require__(/*! ../../layers/WMSLayerView */ "./node_modules/arcgis-js-api/views/layers/WMSLayerView.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,a,o,s,n,p,u,h,c,d,y,l,m,g,f){var w=n.getLogger("esri.views.2d.layers.WMSLayerView2D");return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.hitTest=function(){return null},t.prototype.update=function(e){this.strategy.update(e).catch(function(e){p.isAbortError(e)||w.error(e)})},t.prototype.attach=function(){var e=this,t=this,r=t.layer,i=t.view,a=r.imageMaxHeight,o=r.imageMaxWidth;this.strategy=new l({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:a,imageMaxWidth:o,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this._exportWMSImageParameters=new c({layer:r,view:i}),this.handles.add(this._exportWMSImageParameters.watch("version",function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())}),"wms")},t.prototype.detach=function(){this.handles.remove("wms"),this.container.removeAllChildren(),this.strategy.destroy(),this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null,this.container.removeAllChildren()},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.canResume=function(){var e=this.inherited(arguments);return e?this.layer.supportsSpatialReference(this.view.spatialReference):e},t.prototype.createFetchPopupFeaturesQuery=function(e){var t=this,r=t.container,i=t.view,a=e.x,o=e.y,s=i.spatialReference,n=null,p=0,u=0;r.children.some(function(e){var t=e.width,r=e.height,i=e.resolution,c=e.x,d=e.y,y=c+i*t,l=d-i*r;return a>=c&&a<=y&&o<=d&&o>=l&&(n=new h({xmin:c,ymin:l,xmax:y,ymax:d,spatialReference:s}),p=t,u=r,!0)});var c=n.width/p,d=Math.round((a-n.xmin)/c),y=Math.round((n.ymax-o)/c);return{extent:n,width:p,height:u,x:d,y:y}},t.prototype.doRefresh=function(){return s(this,void 0,void 0,function(){return o(this,function(e){return this.requestUpdate(),[2]})})},t.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},t.prototype.fetchImage=function(e,t,i,a){return this.layer.fetchImage(e,t,i,r({timestamp:this.refreshTimestamp},a))},a([u.property()],t.prototype,"strategy",void 0),a([u.property({dependsOn:["view.spatialReference","layer.spatialReferences"]})],t.prototype,"suspended",void 0),a([u.property({dependsOn:["strategy.updating"]})],t.prototype,"updating",void 0),t=a([u.subclass("esri.views.2d.layers.WMSLayerView2D")],t)}(u.declared(f.WMSLayerView(g.RefreshableLayerView(d.BitmapLayerView2D(y.LayerView2D(m))))))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/layers/WMSLayerView.js":
/*!*****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/layers/WMSLayerView.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,u,p,n,i,s){Object.defineProperty(r,"__esModule",{value:!0}),r.WMSLayerView=function(e){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype.fetchPopupFeatures=function(e){return p(this,void 0,void 0,function(){var r,t,o,p,s,a,c,h,l,f;return u(this,function(u){if(r=this.layer,!e)return[2,i.reject(new n("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}))];if(!(t=r.popupEnabled))return[2,i.reject(new n("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:t}))];if(o=this.createFetchPopupFeaturesQuery(e),p=o.extent,s=o.width,a=o.height,c=o.x,h=o.y,!(l=p&&s&&a))throw new n("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:s,height:a});return f=r.fetchFeatureInfo(p,s,a,c,h),[2,f?f.then(function(e){return[e]}):i.resolve([])]})})},o([s.property()],r.prototype,"layer",void 0),r=o([s.subclass("esri.layers.mixins.WMSLayerView")],r)}(s.declared(e))}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=118.js.map