(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/layers/PointCloudLayer":"./node_modules/arcgis-js-api/layers/PointCloudLayer.js",
	"arcgis-js-api/layers/mixins/SceneService":"./node_modules/arcgis-js-api/layers/mixins/SceneService.js",
	"arcgis-js-api/layers/pointCloudFilters/PointCloudBitfieldFilter":"./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudBitfieldFilter.js",
	"arcgis-js-api/layers/pointCloudFilters/PointCloudFilter":"./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudFilter.js",
	"arcgis-js-api/layers/pointCloudFilters/PointCloudReturnFilter":"./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudReturnFilter.js",
	"arcgis-js-api/layers/pointCloudFilters/PointCloudValueFilter":"./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudValueFilter.js",
	"arcgis-js-api/layers/pointCloudFilters/jsonUtils":"./node_modules/arcgis-js-api/layers/pointCloudFilters/jsonUtils.js",
	"arcgis-js-api/layers/pointCloudFilters/typeUtils":"./node_modules/arcgis-js-api/layers/pointCloudFilters/typeUtils.js",
	"arcgis-js-api/layers/support/fieldProperties":"./node_modules/arcgis-js-api/layers/support/fieldProperties.js",
	"arcgis-js-api/renderers/PointCloudRGBRenderer":"./node_modules/arcgis-js-api/renderers/PointCloudRGBRenderer.js",
	"arcgis-js-api/renderers/support/pointCloud/jsonUtils":"./node_modules/arcgis-js-api/renderers/support/pointCloud/jsonUtils.js",
	"arcgis-js-api/renderers/support/pointCloud/typeUtils":"./node_modules/arcgis-js-api/renderers/support/pointCloud/typeUtils.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/arcgis-js-api/layers/PointCloudLayer.js":
/*!**************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/PointCloudLayer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../PopupTemplate */ "./node_modules/arcgis-js-api/PopupTemplate.js"),__webpack_require__(/*! ../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../core/arrayUtils */ "./node_modules/arcgis-js-api/core/arrayUtils.js"),__webpack_require__(/*! ../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../core/MultiOriginJSONSupport */ "./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js"),__webpack_require__(/*! ../core/object */ "./node_modules/arcgis-js-api/core/object.js"),__webpack_require__(/*! ../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./Layer */ "./node_modules/arcgis-js-api/layers/Layer.js"),__webpack_require__(/*! ./mixins/ArcGISService */ "./node_modules/arcgis-js-api/layers/mixins/ArcGISService.js"),__webpack_require__(/*! ./mixins/OperationalLayer */ "./node_modules/arcgis-js-api/layers/mixins/OperationalLayer.js"),__webpack_require__(/*! ./mixins/PortalLayer */ "./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js"),__webpack_require__(/*! ./mixins/ScaleRangeLayer */ "./node_modules/arcgis-js-api/layers/mixins/ScaleRangeLayer.js"),__webpack_require__(/*! ./mixins/SceneService */ "./node_modules/arcgis-js-api/layers/mixins/SceneService.js"),__webpack_require__(/*! ./pointCloudFilters/jsonUtils */ "./node_modules/arcgis-js-api/layers/pointCloudFilters/jsonUtils.js"),__webpack_require__(/*! ./pointCloudFilters/typeUtils */ "./node_modules/arcgis-js-api/layers/pointCloudFilters/typeUtils.js"),__webpack_require__(/*! ./support/commonProperties */ "./node_modules/arcgis-js-api/layers/support/commonProperties.js"),__webpack_require__(/*! ./support/Field */ "./node_modules/arcgis-js-api/layers/support/Field.js"),__webpack_require__(/*! ./support/fieldProperties */ "./node_modules/arcgis-js-api/layers/support/fieldProperties.js"),__webpack_require__(/*! ./support/FieldsIndex */ "./node_modules/arcgis-js-api/layers/support/FieldsIndex.js"),__webpack_require__(/*! ../popup/ExpressionInfo */ "./node_modules/arcgis-js-api/popup/ExpressionInfo.js"),__webpack_require__(/*! ../renderers/support/pointCloud/jsonUtils */ "./node_modules/arcgis-js-api/renderers/support/pointCloud/jsonUtils.js"),__webpack_require__(/*! ../renderers/support/pointCloud/typeUtils */ "./node_modules/arcgis-js-api/renderers/support/pointCloud/typeUtils.js"),__webpack_require__(/*! ../support/popupUtils */ "./node_modules/arcgis-js-api/support/popupUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,n,i,a,p,s,l,d,u,y,c,f,v,g,h,m,I,b,w,S,x,P,T,F,j,L,E,O,C,N,R){function D(e,r,t){return e&&((e=C.read(e,r,t)||void 0)||U.error("Failed to create renderer",{rendererDefinition:e,layer:this,context:t})),e}var U=y.getLogger("esri.layers.PointCloudLayer"),V=L.defineFieldProperties();return function(e){function r(r,t){var o=e.call(this,r)||this;return o.operationalLayerType="PointCloudLayer",o.popupEnabled=!0,o.popupTemplate=null,o.opacity=1,o.filters=[],o.fields=null,o.outFields=null,o.path=null,o.legendEnabled=!0,o.renderer=null,o.type="point-cloud",o}return o(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},Object.defineProperty(r.prototype,"defaultPopupTemplate",{get:function(){return this.attributeStorageInfo?this.createPopupTemplate():null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"fieldsIndex",{get:function(){return new E(this.fields)},enumerable:!0,configurable:!0}),r.prototype.getFieldDomain=function(e){var r=this.fieldsIndex.get(e);return r&&r.domain?r.domain:null},r.prototype.readServiceFields=function(e,r,t){return Array.isArray(e)?e.map(function(e){var r=new j;return"FieldTypeInteger"===e.type&&(e=u.clone(e),e.type="esriFieldTypeInteger"),r.read(e,t),r}):Array.isArray(r.attributeStorageInfo)?r.attributeStorageInfo.map(function(e){return new j({name:e.name,type:"ELEVATION"===e.name?"double":"integer"})}):null},Object.defineProperty(r.prototype,"elevationInfo",{set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()},enumerable:!0,configurable:!0}),r.prototype.writeRenderer=function(e,r,t,o){v.setDeepValue("layerDefinition.drawingInfo.renderer",e.write(null,o),r)},r.prototype.load=function(e){var r=this,t=c.isSome(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).then(function(){return r._fetchService(t)},function(){return r._fetchService(t)});return this.addResolvingPromise(o),this.when()},r.prototype.createPopupTemplate=function(e){var r=R.createPopupTemplate(this,e);return this.formatPopupTemplateReturnsField(r),this.formatPopupTemplateRGBField(r),r},r.prototype.formatPopupTemplateReturnsField=function(e){var r=this.fieldsIndex.get("RETURNS");if(r){var t=l.find(e.fieldInfos,function(e){return e.fieldName===r.name});if(t){var o=new O({name:"pcl-returns-decoded",title:r.alias||r.name,expression:"\n        var returnValue = $feature."+r.name+';\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      '});e.expressionInfos=(e.expressionInfos||[]).concat([o]),t.fieldName="expression/pcl-returns-decoded"}}},r.prototype.formatPopupTemplateRGBField=function(e){var r=this.fieldsIndex.get("RGB");if(r){var t=l.find(e.fieldInfos,function(e){return e.fieldName===r.name});if(t){var o=new O({name:"pcl-rgb-decoded",title:r.alias||r.name,expression:"\n        var rgb = $feature."+r.name+';\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      '});e.expressionInfos=(e.expressionInfos||[]).concat([o]),t.fieldName="expression/pcl-rgb-decoded"}}},r.prototype.queryCachedStatistics=function(e,r){return a(this,void 0,void 0,function(){var t,o,n,a,p;return i(this,function(i){switch(i.label){case 0:return[4,this.load(r)];case 1:if(i.sent(),!this.attributeStorageInfo)throw new d("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");if(!(t=this.fieldsIndex.get(e)))throw new d("pointcloudlayer:field-unexisting","Field '"+e+"' does not exist on the layer");for(o=0,n=this.attributeStorageInfo;o<n.length;o++)if(a=n[o],a.name===t.name)return p=g.join(this.parsedUrl.path,"./statistics/"+a.key),[2,s(p,{query:{f:"json"},responseType:"json",signal:r?r.signal:null}).then(function(e){return e.data})];throw new d("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}})})},r.prototype.validateLayer=function(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new d("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})},r.prototype.hasCachedStatistics=function(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some(function(r){return r.name===e})},r.prototype._validateElevationInfo=function(){var e=this.elevationInfo;e&&("absolute-height"!==e.mode&&U.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&U.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))},n([h.property({type:["PointCloudLayer"]})],r.prototype,"operationalLayerType",void 0),n([h.property(F.popupEnabled)],r.prototype,"popupEnabled",void 0),n([h.property({type:p,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],r.prototype,"popupTemplate",void 0),n([h.property({readOnly:!0,json:{read:!1},dependsOn:["fields","title","attributeStorageInfo"]})],r.prototype,"defaultPopupTemplate",null),n([h.property({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],r.prototype,"opacity",void 0),n([h.property({type:["show","hide"]})],r.prototype,"listMode",void 0),n([h.property({types:[T.types],json:{origins:{service:{read:{source:"filters",reader:P.read}}},read:{source:"layerDefinition.filters",reader:P.read},write:{target:"layerDefinition.filters",writer:P.write}}})],r.prototype,"filters",void 0),n([h.property({type:[j]})],r.prototype,"fields",void 0),n([h.property({readOnly:!0,dependsOn:["fields"]})],r.prototype,"fieldsIndex",null),n([h.reader("service","fields",["fields","attributeStorageInfo"])],r.prototype,"readServiceFields",null),n([h.property(V.outFields)],r.prototype,"outFields",void 0),n([h.property({readOnly:!0})],r.prototype,"attributeStorageInfo",void 0),n([h.property(F.elevationInfo)],r.prototype,"elevationInfo",null),n([h.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],r.prototype,"path",void 0),n([h.property(F.legendEnabled)],r.prototype,"legendEnabled",void 0),n([h.property({types:N.types,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:D}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:D},write:{target:{"layerDefinition.drawingInfo.renderer":{types:N.types},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],r.prototype,"renderer",void 0),n([h.writer("renderer")],r.prototype,"writeRenderer",null),n([h.property({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),r=n([h.subclass("esri.layers.PointCloudLayer")],r)}(h.declared(S.ScaleRangeLayer(x.SceneService(I.ArcGISService(b.OperationalLayer(w.PortalLayer(f.MultiOriginJSONMixin(m))))))))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/mixins/SceneService.js":
/*!******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/mixins/SceneService.js ***!
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

//  copyright

/**
                 * The copyright text as defined by the scene service.
                 *
                 * @memberof module:esri/layers/mixins/SceneService
                 * @name copyright
                 * @type {string}
                 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js"),__webpack_require__(/*! ../../geometry/HeightModelInfo */ "./node_modules/arcgis-js-api/geometry/HeightModelInfo.js"),__webpack_require__(/*! ../../geometry/SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js"),__webpack_require__(/*! ../support/arcgisLayerUrl */ "./node_modules/arcgis-js-api/layers/support/arcgisLayerUrl.js"),__webpack_require__(/*! ../support/commonProperties */ "./node_modules/arcgis-js-api/layers/support/commonProperties.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,n,i,a,l,s,p,u,c,d,y,h,f,v){Object.defineProperty(t,"__esModule",{value:!0});var m=s.getLogger("esri.layers.mixins.SceneService");t.SceneService=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.blendMode=null,t.spatialReference=null,t.fullExtent=null,t.heightModelInfo=null,t.minScale=0,t.maxScale=0,t.version={major:Number.NaN,minor:Number.NaN,versionString:""},t.copyright=null,t.sublayerTitleMode="item-title",t.title=null,t.layerId=null,t}return r(t,e),t.prototype.readSpatialReference=function(e,t){return this._readSpatialReference(t)},t.prototype._readSpatialReference=function(e){if(null!=e.spatialReference)return h.fromJSON(e.spatialReference);var t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new h(o):null},t.prototype.readFullExtent=function(e,t){var r=t.store,o=this._readSpatialReference(t);return null==o||null==r||null==r.extent||!Array.isArray(r.extent)||r.extent.some(function(e){return e<g})?null:new d({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:o})},t.prototype.readVersion=function(e,t){var r=t.store,o=null!=r.version?r.version.toString():"",n={major:Number.NaN,minor:Number.NaN,versionString:o},i=o.split(".");return i.length>=2&&(n.major=parseInt(i[0],10),n.minor=parseInt(i[1],10)),n},t.prototype.readTitlePortalItem=function(e){return"item-title"!==this.sublayerTitleMode?void 0:e},t.prototype.readTitleService=function(e,t){var r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return f.titleFromUrlAndName(this.url,t.name);var o=t.name||f.parse(this.url).title;return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),f.cleanTitle(o)},t.prototype.readLayerId=function(e,t){return t.id},Object.defineProperty(t.prototype,"url",{set:function(e){var t=f.sanitizeUrlWithLayerId(this,e,m);this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)},enumerable:!0,configurable:!0}),t.prototype.writeUrl=function(e,t,r,o){f.writeUrlWithLayerId(this,e,"layers",t,o)},Object.defineProperty(t.prototype,"parsedUrl",{get:function(){var e=this._get("url");if(!e)return null;var t=u.urlToObject(e);return null!=this.layerId&&f.isArcGISUrl(t.path)&&(t.path=t.path+"/layers/"+this.layerId),t},enumerable:!0,configurable:!0}),t.prototype._verifyRootNodeAndUpdateExtent=function(e,t){return i(this,void 0,void 0,function(){var r,o,i,a;return n(this,function(n){switch(n.label){case 0:if(!e)return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),r=this._updateExtentFromRootPage,o=[e],[4,this._fetchRootPage(e,t)];case 2:return[2,r.apply(this,o.concat([n.sent()]))];case 3:return i=n.sent(),[3,4];case 4:return a=this._updateExtentFromRootNode,[4,this._fetchRootNode(t)];case 5:return[2,a.apply(this,[n.sent()])]}})})},t.prototype._fetchRootPage=function(e,t){return i(this,void 0,void 0,function(){var r,o,i;return n(this,function(n){switch(n.label){case 0:return e?(r=Math.floor(e.rootIndex/e.nodesPerPage),o=this.parsedUrl.path+"/nodepages/"+r,[4,a(o,{responseType:"json",signal:t})]):[2,p.reject()];case 1:return i=n.sent(),[2,i.data]}})})},t.prototype._updateExtentFromRootPage=function(e,t){if(null==t||null==t.nodes)throw new l("sceneservice:invalid-node-page","Inavlid node page.");var r=t.nodes[e.rootIndex%e.nodesPerPage];if(null==r||null==r.obb||null==r.obb.center||null==r.obb.halfSize)throw new l("sceneservice:invalid-node-page","Inavlid node page.");var o=r.obb.halfSize,n=r.obb.center[2],i=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);this.fullExtent.zmin=n-i,this.fullExtent.zmax=n+i},t.prototype._updateExtentFromRootNode=function(e){if(null!=this.fullExtent&&!this.fullExtent.hasZ&&null!=e&&Array.isArray(e.mbs)&&4===e.mbs.length){var t=e.mbs[2],r=e.mbs[3];this.fullExtent.zmin=t-r,this.fullExtent.zmax=t+r}},t.prototype._fetchRootNode=function(e){return i(this,void 0,void 0,function(){var t,r,o;return n(this,function(n){switch(n.label){case 0:if(!this.rootNode)return[2];t=u.join(this.parsedUrl.path,this.rootNode),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,a(t,{query:{f:"json"},responseType:"json",signal:e})];case 2:return r=n.sent(),[2,r.data];case 3:throw o=n.sent(),new l("sceneservice:root-node-missing","Root node missing.",{error:o,url:t});case 4:return[2]}})})},t.prototype._fetchService=function(e){return i(this,void 0,void 0,function(){var t;return n(this,function(r){switch(r.label){case 0:return null==this.layerId&&/SceneServer\/*$/i.test(this.url)?[4,this._fetchFirstLayerId(e)]:[3,2];case 1:t=r.sent(),null!=t&&(this.layerId=t),r.label=2;case 2:return[2,this._fetchServiceLayer(e)]}})})},t.prototype._fetchFirstLayerId=function(e){return i(this,void 0,void 0,function(){var t;return n(this,function(r){switch(r.label){case 0:return[4,a(this.url,{query:{f:"json"},responseType:"json",signal:e})];case 1:return t=r.sent(),t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0?[2,t.data.layers[0].id]:[2,void 0]}})})},t.prototype._fetchServiceLayer=function(e){return i(this,void 0,void 0,function(){var t,r;return n(this,function(o){switch(o.label){case 0:return[4,a(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e})];case 1:return t=o.sent(),t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),r=t.data,this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r),[2]}})})},t.prototype.validateLayer=function(e){},o([c.shared({id:{json:{origins:{service:{read:!1},"portal-item":{read:!1}}}}})],t.prototype,"properties",void 0),o([c.property({type:h})],t.prototype,"spatialReference",void 0),o([c.reader("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),o([c.property({type:d})],t.prototype,"fullExtent",void 0),o([c.reader("fullExtent",["store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),o([c.property({readOnly:!0,type:y})],t.prototype,"heightModelInfo",void 0),o([c.property({type:Number,json:{read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"},origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),o([c.property({type:Number,json:{read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"},origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),o([c.property({readOnly:!0})],t.prototype,"version",void 0),o([c.reader("version",["store.version"])],t.prototype,"readVersion",null),o([c.property({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),o([c.property({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),o([c.property({type:String})],t.prototype,"title",void 0),o([c.reader("portal-item","title")],t.prototype,"readTitlePortalItem",null),o([c.reader("service","title",["name"])],t.prototype,"readTitleService",null),o([c.property({type:Number})],t.prototype,"layerId",void 0),o([c.reader("service","layerId",["id"])],t.prototype,"readLayerId",null),o([c.property(v.url)],t.prototype,"url",null),o([c.writer("url")],t.prototype,"writeUrl",null),o([c.property({dependsOn:["layerId"]})],t.prototype,"parsedUrl",null),o([c.property({readOnly:!0})],t.prototype,"store",void 0),o([c.property({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=o([c.subclass("esri.layers.mixins.SceneService")],t)}(c.declared(e))};var g=-1e38}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudBitfieldFilter.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudBitfieldFilter.js ***!
  \*****************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./PointCloudFilter */ "./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudFilter.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,i,o,l,d){return function(e){function r(r){var t=e.call(this,r)||this;return t.requiredClearBits=null,t.requiredSetBits=null,t.type="bitfield",t}t(r,e),d=r,r.prototype.clone=function(){return new d({field:this.field,requiredClearBits:o.clone(this.requiredClearBits),requiredSetBits:o.clone(this.requiredSetBits)})};var d;return i([l.property({type:[Number],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],r.prototype,"requiredClearBits",void 0),i([l.property({type:[Number],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],r.prototype,"requiredSetBits",void 0),i([l.property({type:["bitfield"],json:{type:["pointCloudBitfieldFilter"]}})],r.prototype,"type",void 0),r=d=i([l.subclass("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],r)}(l.declared(d))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudFilter.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudFilter.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,l,i,n){var p=l.strict()({pointCloudValueFilter:"value",pointCloudBitfieldFilter:"bitfield",pointCloudReturnFilter:"return"});return function(e){function r(r){var t=e.call(this,r)||this;return t.field=null,t.type=null,t}return t(r,e),r.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},o([n.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"field",void 0),o([n.property({readOnly:!0,type:p.apiValues,nonNullable:!0,json:{read:!1,write:p.write}})],r.prototype,"type",void 0),r=o([n.subclass("esri.layers.pointCloudFilters.PointCloudFilter")],r)}(n.declared(i.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudReturnFilter.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudReturnFilter.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./PointCloudFilter */ "./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudFilter.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,n,o,i,u){return function(e){function r(r){var t=e.call(this,r)||this;return t.includedReturns=[],t.type="return",t}t(r,e),u=r,r.prototype.clone=function(){return new u({field:this.field,includedReturns:o.clone(this.includedReturns)})};var u;return n([i.property({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"includedReturns",void 0),n([i.property({type:["return"],json:{type:["pointCloudReturnFilter"]}})],r.prototype,"type",void 0),r=u=n([i.subclass("esri.layers.pointCloudFilters.PointCloudReturnFilter")],r)}(i.declared(u))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudValueFilter.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudValueFilter.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./PointCloudFilter */ "./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudFilter.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,l,i,p){return function(e){function r(r){var t=e.call(this,r)||this;return t.mode="exclude",t.type="value",t.values=[],t}t(r,e),p=r,r.prototype.clone=function(){return new p({field:this.field,mode:this.mode,values:l.clone(this.values)})};var p;return o([i.property({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"mode",void 0),o([i.property({type:["value"],json:{type:["pointCloudValueFilter"]}})],r.prototype,"type",void 0),o([i.property({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"values",void 0),r=p=o([i.subclass("esri.layers.pointCloudFilters.PointCloudValueFilter")],r)}(i.declared(p))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/pointCloudFilters/jsonUtils.js":
/*!**************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/pointCloudFilters/jsonUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/object */ "./node_modules/arcgis-js-api/core/object.js"),__webpack_require__(/*! ../../core/Warning */ "./node_modules/arcgis-js-api/core/Warning.js"),__webpack_require__(/*! ./PointCloudBitfieldFilter */ "./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudBitfieldFilter.js"),__webpack_require__(/*! ./PointCloudReturnFilter */ "./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudReturnFilter.js"),__webpack_require__(/*! ./PointCloudValueFilter */ "./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudValueFilter.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,n,r,i,o,u){function l(e){return e?p[e.type]||null:null}function a(e,t,n){if(e&&Array.isArray(e))return e.map(function(e){var t=l(e);if(t){var i=new t;return i.read(e,n),i}n&&n.messages&&e&&n.messages.push(new r("point-cloud-filter:unsupported","Point cloud filters of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:n}))})}function f(e,t,r,i){var o=e.map(function(e){return e.write({},i)});n.setDeepValue(r,o,t)}function d(e){var t=l(e);return t?t.fromJSON(e):null}Object.defineProperty(t,"__esModule",{value:!0});var p={pointCloudValueFilter:u,pointCloudBitfieldFilter:i,pointCloudReturnFilter:o};t.read=a,t.write=f,t.fromJSON=d}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/pointCloudFilters/typeUtils.js":
/*!**************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/pointCloudFilters/typeUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./PointCloudBitfieldFilter */ "./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudBitfieldFilter.js"),__webpack_require__(/*! ./PointCloudFilter */ "./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudFilter.js"),__webpack_require__(/*! ./PointCloudReturnFilter */ "./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudReturnFilter.js"),__webpack_require__(/*! ./PointCloudValueFilter */ "./node_modules/arcgis-js-api/layers/pointCloudFilters/PointCloudValueFilter.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,l,o,r){Object.defineProperty(t,"__esModule",{value:!0}),t.types={key:"type",base:l,typeMap:{value:r,bitfield:i,return:o}}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/fieldProperties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/fieldProperties.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! @dojo/framework/shim/array */ "./node_modules/@dojo/framework/shim/array.mjs"),__webpack_require__(/*! ../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ./Field */ "./node_modules/arcgis-js-api/layers/support/Field.js"),__webpack_require__(/*! ./fieldUtils */ "./node_modules/arcgis-js-api/layers/support/fieldUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,i,r,t,l,s){function d(){return{fields:{type:[l],value:null},outFields:{type:[String],dependsOn:["fields"],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){var e=this._userOutFields;if(!e||!e.length)return null;if(r.includes(e,"*"))return["*"];if(!this.fields)return e;for(var i=0,t=e;i<t.length;i++){var l=t[i];s.hasField(this.fields,l)||n.error("field-attributes-layer:invalid-field","Invalid field "+l+" found in outFields",{layer:this,outFields:e})}return s.fixFields(this.fields,e)}}}}Object.defineProperty(i,"__esModule",{value:!0});var n=t.getLogger("esri.layers.support.fieldProperties");i.defineFieldProperties=d}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/PointCloudRGBRenderer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/PointCloudRGBRenderer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./PointCloudRenderer */ "./node_modules/arcgis-js-api/renderers/PointCloudRenderer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,o,t,n,i,p,l){return function(e){function r(r){var o=e.call(this,r)||this;return o.type="point-cloud-rgb",o.field=null,o}t(r,e),l=r,r.prototype.clone=function(){return new l(o({},this.cloneProperties(),{field:i.clone(this.field)}))};var l;return n([p.enumeration.serializable()({pointCloudRGBRenderer:"point-cloud-rgb"})],r.prototype,"type",void 0),n([p.property({type:String,json:{write:!0}})],r.prototype,"field",void 0),r=l=n([p.subclass("esri.renderers.PointCloudRGBRenderer")],r)}(p.declared(l))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/pointCloud/jsonUtils.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/pointCloud/jsonUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/Warning */ "./node_modules/arcgis-js-api/core/Warning.js"),__webpack_require__(/*! ../../PointCloudClassBreaksRenderer */ "./node_modules/arcgis-js-api/renderers/PointCloudClassBreaksRenderer.js"),__webpack_require__(/*! ../../PointCloudRGBRenderer */ "./node_modules/arcgis-js-api/renderers/PointCloudRGBRenderer.js"),__webpack_require__(/*! ../../PointCloudStretchRenderer */ "./node_modules/arcgis-js-api/renderers/PointCloudStretchRenderer.js"),__webpack_require__(/*! ../../PointCloudUniqueValueRenderer */ "./node_modules/arcgis-js-api/renderers/PointCloudUniqueValueRenderer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,n,o,t,u,d){function i(e){return e?a[e.type]||null:null}function l(e,r,o){var t=i(e);if(t){var u=new t;return u.read(e,o),u}return o&&o.messages&&e&&o.messages.push(new n("renderer:unsupported","Renderers of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:o})),null}function s(e){var r=i(e);return r?r.fromJSON(e):null}Object.defineProperty(r,"__esModule",{value:!0});var a={pointCloudClassBreaksRenderer:o,pointCloudRGBRenderer:t,pointCloudStretchRenderer:u,pointCloudUniqueValueRenderer:d};r.read=l,r.fromJSON=s}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/pointCloud/typeUtils.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/pointCloud/typeUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../PointCloudClassBreaksRenderer */ "./node_modules/arcgis-js-api/renderers/PointCloudClassBreaksRenderer.js"),__webpack_require__(/*! ../../PointCloudRenderer */ "./node_modules/arcgis-js-api/renderers/PointCloudRenderer.js"),__webpack_require__(/*! ../../PointCloudRGBRenderer */ "./node_modules/arcgis-js-api/renderers/PointCloudRGBRenderer.js"),__webpack_require__(/*! ../../PointCloudStretchRenderer */ "./node_modules/arcgis-js-api/renderers/PointCloudStretchRenderer.js"),__webpack_require__(/*! ../../PointCloudUniqueValueRenderer */ "./node_modules/arcgis-js-api/renderers/PointCloudUniqueValueRenderer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,o,n,r,t,u,d){Object.defineProperty(o,"__esModule",{value:!0}),o.types={key:"type",base:r,typeMap:{"point-cloud-class-breaks":n,"point-cloud-rgb":t,"point-cloud-stretch":u,"point-cloud-unique-value":d}}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=54.js.map