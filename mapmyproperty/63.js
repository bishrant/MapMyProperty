(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/layers/WMSLayer":"./node_modules/arcgis-js-api/layers/WMSLayer.js",
	"arcgis-js-api/layers/mixins/PortalLayer":"./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js",
	"arcgis-js-api/layers/mixins/RefreshableLayer":"./node_modules/arcgis-js-api/layers/mixins/RefreshableLayer.js",
	"arcgis-js-api/layers/support/WMSSublayer":"./node_modules/arcgis-js-api/layers/support/WMSSublayer.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/arcgis-js-api/layers/WMSLayer.js":
/*!*******************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/WMSLayer.js ***!
  \*******************************************************/
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

//  copyright

/**
             * Copyright information for the WMS service.
             * This defaults to the value of the AccessConstraints property from the GetCapabilities request.
             *
             * @name copyright
             * @type {string}
             * @instance
             */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../config */ "./node_modules/arcgis-js-api/config.js"),__webpack_require__(/*! ../Graphic */ "./node_modules/arcgis-js-api/Graphic.js"),__webpack_require__(/*! ../PopupTemplate */ "./node_modules/arcgis-js-api/PopupTemplate.js"),__webpack_require__(/*! ../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../core/Collection */ "./node_modules/arcgis-js-api/core/Collection.js"),__webpack_require__(/*! ../core/CollectionFlattener */ "./node_modules/arcgis-js-api/core/CollectionFlattener.js"),__webpack_require__(/*! ../core/Handles */ "./node_modules/arcgis-js-api/core/Handles.js"),__webpack_require__(/*! ../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../core/MultiOriginJSONSupport */ "./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js"),__webpack_require__(/*! ../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../core/accessorSupport/write */ "./node_modules/arcgis-js-api/core/accessorSupport/write.js"),__webpack_require__(/*! ../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js"),__webpack_require__(/*! ../geometry/SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js"),__webpack_require__(/*! ../geometry/support/scaleUtils */ "./node_modules/arcgis-js-api/geometry/support/scaleUtils.js"),__webpack_require__(/*! ../geometry/support/spatialReferenceUtils */ "./node_modules/arcgis-js-api/geometry/support/spatialReferenceUtils.js"),__webpack_require__(/*! ./Layer */ "./node_modules/arcgis-js-api/layers/Layer.js"),__webpack_require__(/*! ./mixins/OperationalLayer */ "./node_modules/arcgis-js-api/layers/mixins/OperationalLayer.js"),__webpack_require__(/*! ./mixins/PortalLayer */ "./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js"),__webpack_require__(/*! ./mixins/RefreshableLayer */ "./node_modules/arcgis-js-api/layers/mixins/RefreshableLayer.js"),__webpack_require__(/*! ./mixins/ScaleRangeLayer */ "./node_modules/arcgis-js-api/layers/mixins/ScaleRangeLayer.js"),__webpack_require__(/*! ./support/arcgisLayerUrl */ "./node_modules/arcgis-js-api/layers/support/arcgisLayerUrl.js"),__webpack_require__(/*! ./support/commonProperties */ "./node_modules/arcgis-js-api/layers/support/commonProperties.js"),__webpack_require__(/*! ./support/ExportWMSImageParameters */ "./node_modules/arcgis-js-api/layers/support/ExportWMSImageParameters.js"),__webpack_require__(/*! ./support/WMSSublayer */ "./node_modules/arcgis-js-api/layers/support/WMSSublayer.js"),__webpack_require__(/*! ./support/wmsUtils */ "./node_modules/arcgis-js-api/layers/support/wmsUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,a,o,n,i,s,p,l,u,y,c,m,d,f,g,h,v,b,w,x,S,I,R,E,U,L,P,M,O,q,F,j,H){function W(e,r){return e.some(function(e){for(var t in e)if(w.willPropertyWrite(e,t,null,r))return!0;return!1})}function _(e,r,t){var a=[],o=new Map;return e.forEach(function(e){var n=new j;if(n.read(e,r),t&&-1===t.indexOf(n.name)&&(n.visible=!1),o.set(n.id,n),null!=e.parentLayerId&&-1!==e.parentLayerId){var i=o.get(e.parentLayerId);i.sublayers||(i.sublayers=[]),i.sublayers.unshift(n)}else a.unshift(n)}),a}var T=new d.JSONMap({svg:"image/svg+xml",png:"image/png",jpg:"image/jpeg",gif:"image/gif",bmp:"image/bmp"},{ignoreUnknown:!1});return function(e){function r(r,t){var a=e.call(this,r)||this;return a._sublayersHandles=new m,a.allSublayers=new c({root:a,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return e.sublayers}}),a.customParameters=null,a.customLayerParameters=null,a.copyright=null,a.description=null,a.fullExtent=null,a.fullExtents=null,a.featureInfoFormat=null,a.featureInfoUrl=null,a.imageFormat=null,a.imageMaxHeight=2048,a.imageMaxWidth=2048,a.imageTransparency=!0,a.legendEnabled=!0,a.mapUrl=null,a.isReference=null,a.operationalLayerType="WMS",a.spatialReference=null,a.spatialReferences=null,a.sublayers=null,a.type="wms",a.url=null,a.version=null,a.watch("sublayers",function(e,r){r&&(r.forEach(function(e){e.layer=null}),a._sublayersHandles.removeAll(),a._sublayersHandles=null),e&&(e.forEach(function(e){e.parent=a,e.layer=a}),a._sublayersHandles||(a._sublayersHandles=new m),a._sublayersHandles.add([e.on("after-add",function(e){var r=e.item;r.parent=a,r.layer=a}),e.on("after-remove",function(e){var r=e.item;r.parent=null,r.layer=null})]))},!0),a}return a(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},r.prototype.load=function(e){var r=this,t=f.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).then(function(){return r._fetchService(t)})),this.when()},r.prototype.readFullExtentFromItemOrMap=function(e,r){var t=r.extent;return new x({xmin:t[0][0],ymin:t[0][1],xmax:t[1][0],ymax:t[1][1]})},r.prototype.writeFullExtent=function(e,r){r.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]},r.prototype.readImageFormat=function(e,r){var t=r.supportedImageFormatTypes;return t&&t.indexOf("image/png")>-1?"image/png":t&&t[0]},r.prototype.readSpatialReferenceFromItemOrDocument=function(e,r){return new S(r.spatialReferences[0])},r.prototype.writeSpatialReferences=function(e,r){var t=this.spatialReference&&this.spatialReference.wkid;e&&t?(r.spatialReferences=e.filter(function(e){return e!==t}),r.spatialReferences.unshift(t)):r.spatialReferences=e},r.prototype.readSublayersFromItemOrMap=function(e,r,t){return _(r.layers,t,r.visibleLayers)},r.prototype.readSublayers=function(e,r,t){return _(r.layers,t)},r.prototype.writeSublayers=function(e,r,a,o){r.layers=[];var n=new Map,i=e.flatten(function(e){var r=e.sublayers;return r&&r.toArray()}).toArray();i.forEach(function(e){"number"==typeof e.parent.id&&(n.has(e.parent.id)?n.get(e.parent.id).push(e.id):n.set(e.parent.id,[e.id]))}),i.forEach(function(e){var a=t({sublayer:e},o),i=e.write({parentLayerId:"number"==typeof e.parent.id?e.parent.id:-1},a);if(n.has(e.id)&&(i.sublayerIds=n.get(e.id)),!e.sublayers&&e.name){var s=e.write({},a);delete s.id,r.layers.push(s)}}),r.visibleLayers=i.filter(function(e){return e.visible&&!e.sublayers}).map(function(e){return e.name})},r.prototype.createExportImageParameters=function(e,r,t,a){var o=a&&a.pixelRatio||1,n=I.getScale({extent:e,width:r})*o;return this._exportWMSImageParameters=new F({layer:this,extent:e,scale:n}),this._exportWMSImageParameters.toJSON()},r.prototype.fetchImage=function(e,r,a,o){return i(this,void 0,void 0,function(){var i,s,p,l;return n(this,function(n){return i=this.mapUrl,s=this.createExportImageParameters(e,r,a,o),s.layers?(l={responseType:"image",query:this._mixCustomParameters(t({width:r,height:a},s)),signal:o&&o.signal},o&&o.timestamp&&(l.query=t({_ts:o.timestamp},l.query)),[2,u(i,l).then(function(e){return e.data})]):(p=document.createElement("canvas"),p.width=r,p.height=a,[2,p])})})},r.prototype.fetchFeatureInfo=function(e,r,a,o,n){var i=this,s=H.getPopupLayers(this._exportWMSImageParameters.visibleSublayers);if(!this.featureInfoUrl||!s)return null;var y="1.3.0"===this.version?{I:o,J:n}:{x:o,y:n},c=t({query_layers:s,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:r,height:a},y),m=t({},this.createExportImageParameters(e,r,a),c);return m=this._mixCustomParameters(m),u(this.featureInfoUrl,{query:m,responseType:"text"}).then(function(e){var r=i.featureInfoUrl;r+=-1===r.indexOf("?")?"?":"";for(var t in m)r+="?"===r.substring(r.length-1,r.length)?"":"&",r+=t+"="+m[t];var a=document.createElement("iframe");return a.src=r,a.frameBorder="0",a.marginHeight="0",a.marginWidth="0",a.innerHTML=e.data,a.style.width="100%",new p({sourceLayer:i,popupTemplate:new l({title:i.title,content:a})})})},r.prototype.findSublayerById=function(e){return this.allSublayers.find(function(r){return r.id===e})},r.prototype.supportsSpatialReference=function(e){return O.isWmsServer(this.url)||this.spatialReferences.some(function(r){var t=900913===r?S.WebMercator:new S({wkid:r});return R.equals(t,e)})},r.prototype._fetchService=function(e){return i(this,void 0,void 0,function(){var r=this;return n(this,function(a){return[2,h.resolve().then(function(){return r.resourceInfo?{data:r.resourceInfo}:(r.parsedUrl.query&&r.parsedUrl.query.service&&(r.parsedUrl.query.SERVICE=r.parsedUrl.query.service,delete r.parsedUrl.query.service),r.parsedUrl.query&&r.parsedUrl.query.request&&(r.parsedUrl.query.REQUEST=r.parsedUrl.query.request,delete r.parsedUrl.query.request),u(r.parsedUrl.path,{query:t({SERVICE:"WMS",REQUEST:"GetCapabilities"},r.parsedUrl.query,r.customParameters),responseType:"xml",signal:e}))}).then(function(e){if(!r.resourceInfo){e.data=H.parseCapabilities(e.data);var t=new v.Url(r.parsedUrl.path);"https"!==t.scheme||t.port&&"443"!==t.port||-1!==s.request.httpsDomains.indexOf(t.host)||s.request.httpsDomains.push(t.host)}e.data&&r.read(e.data,{origin:"service"})})]})})},r.prototype._mixCustomParameters=function(e){if(!this.customLayerParameters&&!this.customParameters)return e;var r=t({},this.customParameters,this.customLayerParameters);for(var a in r)e[a.toLowerCase()]=r[a];return e},o([b.property({readOnly:!0})],r.prototype,"allSublayers",void 0),o([b.property({json:{type:Object,write:!0}})],r.prototype,"customParameters",void 0),o([b.property({type:["show","hide","hide-children"]})],r.prototype,"listMode",void 0),o([b.property({json:{type:Object,write:!0}})],r.prototype,"customLayerParameters",void 0),o([b.property({type:String,json:{write:!0}})],r.prototype,"copyright",void 0),o([b.property()],r.prototype,"description",void 0),o([b.property({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{service:{read:{source:"extent"}}}}})],r.prototype,"fullExtent",void 0),o([b.reader(["web-document","portal-item"],"fullExtent",["extent"])],r.prototype,"readFullExtentFromItemOrMap",null),o([b.writer(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],r.prototype,"writeFullExtent",null),o([b.property()],r.prototype,"fullExtents",void 0),o([b.property({type:String,json:{write:{ignoreOrigin:!0}}})],r.prototype,"featureInfoFormat",void 0),o([b.property({type:String,json:{write:{ignoreOrigin:!0}}})],r.prototype,"featureInfoUrl",void 0),o([b.property({type:String,json:{origins:{"web-document":{default:"image/png",type:T.jsonValues,read:{reader:T.read,source:"format"},write:{writer:T.write,target:"format"}}}}})],r.prototype,"imageFormat",void 0),o([b.reader("imageFormat",["supportedImageFormatTypes"])],r.prototype,"readImageFormat",null),o([b.property({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],r.prototype,"imageMaxHeight",void 0),o([b.property({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],r.prototype,"imageMaxWidth",void 0),o([b.property()],r.prototype,"imageTransparency",void 0),o([b.property(q.legendEnabled)],r.prototype,"legendEnabled",void 0),o([b.property({type:String,json:{write:{ignoreOrigin:!0}}})],r.prototype,"mapUrl",void 0),o([b.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],r.prototype,"isReference",void 0),o([b.property({type:["WMS"]})],r.prototype,"operationalLayerType",void 0),o([b.property({type:S,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],r.prototype,"spatialReference",void 0),o([b.reader(["web-document","portal-item"],"spatialReference",["spatialReferences"])],r.prototype,"readSpatialReferenceFromItemOrDocument",null),o([b.property({type:[Number],json:{read:{source:"spatialReferences"},write:{ignoreOrigin:!0}}})],r.prototype,"spatialReferences",void 0),o([b.writer(["web-document","portal-item"],"spatialReferences")],r.prototype,"writeSpatialReferences",null),o([b.property({type:y.ofType(j),json:{write:{target:"layers",overridePolicy:function(e,r,t){if(W(this.allSublayers,t))return{ignoreOrigin:!0}}}}})],r.prototype,"sublayers",void 0),o([b.reader(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],r.prototype,"readSublayersFromItemOrMap",null),o([b.reader("service","sublayers",["layers"])],r.prototype,"readSublayers",null),o([b.writer("sublayers",{layers:{type:[j]},visibleLayers:{type:[String]}})],r.prototype,"writeSublayers",null),o([b.property({json:{read:!1},readOnly:!0,value:"wms"})],r.prototype,"type",void 0),o([b.property(q.url)],r.prototype,"url",void 0),o([b.property({type:String,json:{write:{ignoreOrigin:!0}}})],r.prototype,"version",void 0),r=o([b.subclass("esri.layers.WMSLayer")],r)}(b.declared(P.RefreshableLayer(M.ScaleRangeLayer(U.OperationalLayer(L.PortalLayer(g.MultiOriginJSONMixin(E)))))))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../portal/Portal */ "./node_modules/arcgis-js-api/portal/Portal.js"),__webpack_require__(/*! ../../portal/PortalItem */ "./node_modules/arcgis-js-api/portal/PortalItem.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,r,o,a,i,s,l,p,n,u,c,d){Object.defineProperty(e,"__esModule",{value:!0});var h=l.getLogger("esri.layers.mixins.PortalLayer");e.PortalLayer=function(e){return function(e){function l(){return null!==e&&e.apply(this,arguments)||this}return r(l,e),Object.defineProperty(l.prototype,"portalItem",{set:function(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))},enumerable:!0,configurable:!0}),l.prototype.readPortalItem=function(t,e,r){if(e.itemId)return new d({id:e.itemId,portal:r&&r.portal})},l.prototype.writePortalItem=function(t,e){t&&t.id&&(e.itemId=t.id)},l.prototype.loadFromPortal=function(e,r){return i(this,void 0,void 0,function(){var o,i;return a(this,function(a){switch(a.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];a.label=1;case 1:return a.trys.push([1,4,,5]),[4,p.create(function(e){return Promise.all(/*! AMD require */[__webpack_require__.e("common"), __webpack_require__.e(104)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../../portal/support/layersLoader */ "./node_modules/arcgis-js-api/portal/support/layersLoader.js")]; (e).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})];case 2:return o=a.sent(),p.throwIfAborted(r),[4,o.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},r)];case 3:return[2,a.sent()];case 4:throw i=a.sent(),h.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+i),i;case 5:return[2]}})})},l.prototype.read=function(t,e){var r=arguments;e&&(e.layer=this),this.inherited(r)},l.prototype.write=function(t,e){var r=e&&e.portal,o=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||c.getDefault());return r&&o&&!n.hasSamePortal(o.restUrl,r.restUrl)?(e.messages&&e.messages.push(new s("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):this.inherited(arguments)},o([u.property({type:d})],l.prototype,"portalItem",null),o([u.reader("web-document","portalItem",["itemId"])],l.prototype,"readPortalItem",null),o([u.writer("portalItem",{itemId:{type:String}})],l.prototype,"writePortalItem",null),l=o([u.subclass("esri.layers.mixins.PortalLayer")],l)}(u.declared(e))}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/mixins/RefreshableLayer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/mixins/RefreshableLayer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,n){Object.defineProperty(r,"__esModule",{value:!0}),r.RefreshableLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.refreshInterval=0,r}return t(r,e),r.prototype.refresh=function(){this.emit("refresh")},o([n.property({type:Number,cast:function(e){return e>=.1?e:e<=0?0:.1},json:{write:!0,origins:{"web-document":{write:!0}}}})],r.prototype,"refreshInterval",void 0),r=o([n.subclass("esri.layers.mixins.RefreshableLayer")],r)}(n.declared(e))}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/WMSSublayer.js":
/*!******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/WMSSublayer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/paramHelper */ "./node_modules/arcgis-js-api/core/tsSupport/paramHelper.js"),__webpack_require__(/*! ../../core/Collection */ "./node_modules/arcgis-js-api/core/Collection.js"),__webpack_require__(/*! ../../core/Handles */ "./node_modules/arcgis-js-api/core/Handles.js"),__webpack_require__(/*! ../../core/MultiOriginJSONSupport */ "./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../core/accessorSupport/ensureType */ "./node_modules/arcgis-js-api/core/accessorSupport/ensureType.js"),__webpack_require__(/*! ../../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,n,o,l,i,s,p,a,u){var y=0;return function(e){function t(t){var r=e.call(this,t)||this;return r._sublayersHandles=new i,r.fullExtents=null,r.featureInfoFormat=null,r.featureInfoUrl=null,r.legendUrl=null,r.legendEnabled=!0,r.maxScale=0,r.minScale=0,r.popupEnabled=!1,r.queryable=!1,r.spatialReferences=null,r}r(t,e),o=t,Object.defineProperty(t.prototype,"description",{get:function(){return this._get("description")},set:function(e){this._set("description",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullExtent",{get:function(){return this._get("fullExtent")},set:function(e){this._set("fullExtent",e)},enumerable:!0,configurable:!0}),t.prototype.readExtent=function(e,t){return e=t.extent,e?u.fromJSON(e):null},Object.defineProperty(t.prototype,"id",{get:function(){var e=this._get("id");return null==e?y++:e},set:function(e){this._set("id",e)},enumerable:!0,configurable:!0}),t.prototype.readLegendUrl=function(e,t){return t?t.legendUrl||t.legendURL:null},Object.defineProperty(t.prototype,"layer",{set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(function(t){return t.layer=e})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this._get("name")},set:function(e){this._set("name",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sublayers",{set:function(e){var t=this,r=this._get("sublayers");r&&(r.forEach(function(e){e.layer=null}),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach(function(e){e.parent=t,e.layer=t.layer}),this._sublayersHandles.add([e.on("after-add",function(e){var r=e.item;r.parent=t,r.layer=t.layer}),e.on("after-remove",function(e){var t=e.item;t.parent=null,t.layer=null})])),this._set("sublayers",e)},enumerable:!0,configurable:!0}),t.prototype.castSublayers=function(e){return a.default(l.ofType(o),e)},Object.defineProperty(t.prototype,"title",{get:function(){return this._get("title")},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return this._get("visible")},set:function(e){this._setAndNotifyLayer("visible",e)},enumerable:!0,configurable:!0}),t.prototype.clone=function(){var e=new o;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map(function(e){return e.clone()})),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map(function(e){return e.clone()})),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map(function(e){return e})),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e},t.prototype._setAndNotifyLayer=function(e,t){var r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))};var o;return n([p.property()],t.prototype,"description",null),n([p.property({value:null})],t.prototype,"fullExtent",null),n([p.reader("fullExtent",["extent"])],t.prototype,"readExtent",null),n([p.property()],t.prototype,"fullExtents",void 0),n([p.property()],t.prototype,"featureInfoFormat",void 0),n([p.property()],t.prototype,"featureInfoUrl",void 0),n([p.property({type:Number,json:{write:{enabled:!1,overridePolicy:function(){return{ignoreOrigin:!0,enabled:!0}}}}})],t.prototype,"id",null),n([p.property({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],t.prototype,"legendUrl",void 0),n([p.reader(["web-document"],"legendUrl")],t.prototype,"readLegendUrl",null),n([p.property({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],t.prototype,"legendEnabled",void 0),n([p.property({value:null})],t.prototype,"layer",null),n([p.property()],t.prototype,"maxScale",void 0),n([p.property()],t.prototype,"minScale",void 0),n([p.property({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],t.prototype,"name",null),n([p.property()],t.prototype,"parent",void 0),n([p.property({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],t.prototype,"popupEnabled",void 0),n([p.property({type:Boolean,json:{write:{ignoreOrigin:!0}}})],t.prototype,"queryable",void 0),n([p.property()],t.prototype,"sublayers",null),n([p.cast("sublayers")],t.prototype,"castSublayers",null),n([p.property({type:[Number],json:{read:{source:"spatialReferences"}}})],t.prototype,"spatialReferences",void 0),n([p.property({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],t.prototype,"title",null),n([p.property({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],t.prototype,"visible",null),t=o=n([p.subclass("esri.layers.support.WMSSublayer")],t)}(p.declared(s.MultiOriginJSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=63.js.map