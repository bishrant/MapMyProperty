(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/views/layers/GroupLayerView":"./node_modules/arcgis-js-api/views/layers/GroupLayerView.js",
	"arcgis-js-api/views/layers/LayerView":"./node_modules/arcgis-js-api/views/layers/LayerView.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[120],{

/***/ "./node_modules/arcgis-js-api/views/layers/GroupLayerView.js":
/*!*******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/layers/GroupLayerView.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/Collection */ "./node_modules/arcgis-js-api/core/Collection.js"),__webpack_require__(/*! ../../core/collectionUtils */ "./node_modules/arcgis-js-api/core/collectionUtils.js"),__webpack_require__(/*! ../../core/Handles */ "./node_modules/arcgis-js-api/core/Handles.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./LayerView */ "./node_modules/arcgis-js-api/views/layers/LayerView.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,i,t,r,s,a,n,l,o){return function(e){function i(i){var t=e.call(this,i)||this;return t.layerViews=new s,t}return t(i,e),i.prototype.initialize=function(){var e=this;this._watchHandles=new n,this._watchHandles.add(this.layerViews.on("change",function(i){return e._layerViewsChangeHandler(i)})),this._watchHandles.add(this.layerViews.on("after-changes",this._layerViewsAfterChangesHandler.bind(this))),this._watchHandles.add(this.layer.watch("visibilityMode",function(){return e._visibilityModeHandler()},!0)),this._watchHandles.add(this.watch("visible",this._visibleHandler.bind(this),!0)),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]}),this._layerViewsAfterChangesHandler()},i.prototype.destroy=function(){this._watchHandles&&(this._watchHandles.destroy(),this._watchHandles=null)},Object.defineProperty(i.prototype,"layerViews",{set:function(e){this._set("layerViews",a.referenceSetter(e,this._get("layerViews")))},enumerable:!0,configurable:!0}),i.prototype.isUpdating=function(){return this.layerViews.some(function(e){return e.updating})},i.prototype._hasLayerViewVisibleOverrides=function(){return this.layerViews.some(function(e){return e._isOverridden("visible")})},i.prototype._findLayerViewForLayer=function(e){return e&&this.layerViews.find(function(i){return i.layer===e})},i.prototype._firstVisibleOnLayerOrder=function(){var e=this,i=this.layer.layers.find(function(i){var t=e._findLayerViewForLayer(i);return t&&t.visible});return i&&this._findLayerViewForLayer(i)},i.prototype._enforceExclusiveVisibility=function(e){this._hasLayerViewVisibleOverrides()&&(e||!(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach(function(i){i.visible=i===e}))},i.prototype._layerViewsChangeHandler=function(e){var i=this;this._watchHandles.remove("visible"),this._watchHandles.add(this.layerViews.map(function(e){return e.watch("visible",function(t){return i._layerViewVisibleHandler(t,e)},!0)}).toArray(),"visible");var t=e.added[e.added.length-1],r=null;t&&t.visible&&(r=t),this._enforceVisibility(r)},i.prototype._layerViewsAfterChangesHandler=function(){var e=this;this._watchHandles.remove("updating"),this._watchHandles.add(this.layerViews.map(function(i){return i.watch("updating",function(){return e._updateUpdating()},!0)}).toArray(),"updating"),this._updateUpdating()},i.prototype._enforceVisibility=function(e){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":var i=this.visible;this.layerViews.forEach(function(e){e.visible=i});break;case"exclusive":this._enforceExclusiveVisibility(e)}},i.prototype._visibilityModeHandler=function(){this._enforceVisibility()},i.prototype._layerViewVisibleHandler=function(e,i){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":e!==this.visible&&(i.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(e&&i)}},i.prototype._visibleHandler=function(){this._hasLayerViewVisibleOverrides()&&"inherited"===this.layer.visibilityMode&&this._enforceVisibility()},i.prototype._updateUpdating=function(){this.notifyChange("updating")},r([l.property({cast:a.castForReferenceSetter})],i.prototype,"layerViews",null),i=r([l.subclass("esri.views.layers.GroupLayerView")],i)}(l.declared(o))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/layers/LayerView.js":
/*!**************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/layers/LayerView.js ***!
  \**************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../../core/Evented */ "./node_modules/arcgis-js-api/core/Evented.js"),__webpack_require__(/*! ../../core/HandleOwner */ "./node_modules/arcgis-js-api/core/HandleOwner.js"),__webpack_require__(/*! ../../core/Identifiable */ "./node_modules/arcgis-js-api/core/Identifiable.js"),__webpack_require__(/*! ../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../core/Promise */ "./node_modules/arcgis-js-api/core/Promise.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,n,o,l,a,p,s,d){return function(e){function t(t){var r=e.call(this,t)||this;return r.layer=null,r.parent=null,r}return r(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(t){if("layerview:create-error"!==t.name){var r=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";throw p.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+i+"', id: '"+r+"')",t),t}})},t.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){if(void 0===e)return void this._clearOverride("visible");this._override("visible",e)},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},i([d.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),i([d.property()],t.prototype,"layer",void 0),i([d.property()],t.prototype,"parent",void 0),i([d.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended"]})],t.prototype,"suspended",null),i([d.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],t.prototype,"updating",null),i([d.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),t=i([d.subclass("esri.views.layers.LayerView")],t)}(d.declared(l.HandleOwnerMixin(a.IdentifiableMixin(s.EsriPromiseMixin(o.EventedMixin(n))))))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=120.js.map