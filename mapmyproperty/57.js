(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/layers/SceneLayer":"./node_modules/arcgis-js-api/layers/SceneLayer.js",
	"arcgis-js-api/layers/mixins/RefreshableLayer":"./node_modules/arcgis-js-api/layers/mixins/RefreshableLayer.js",
	"arcgis-js-api/layers/support/RangeInfo":"./node_modules/arcgis-js-api/layers/support/RangeInfo.js",
	"arcgis-js-api/layers/support/layerSourceUtils":"./node_modules/arcgis-js-api/layers/support/layerSourceUtils.js",
	"esri/renderers":"./node_modules/arcgis-js-api/renderers.js",
	"arcgis-js-api/renderers":"./node_modules/arcgis-js-api/renderers.js",
	"esri/renderers/visualVariables/support/sizeVariableUtils":"./node_modules/arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils.js",
	"arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils":"./node_modules/arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils.js",
	"esri/symbols/support/defaults":"./node_modules/arcgis-js-api/symbols/support/defaults.js",
	"arcgis-js-api/symbols/support/defaults":"./node_modules/arcgis-js-api/symbols/support/defaults.js",
	"arcgis-js-api/symbols/support/defaultsJSON":"./node_modules/arcgis-js-api/symbols/support/defaultsJSON.js",
	"esri/tasks/support/QuantizationParameters":"./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js",
	"arcgis-js-api/tasks/support/QuantizationParameters":"./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/arcgis-js-api/layers/SceneLayer.js":
/*!*********************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/SceneLayer.js ***!
  \*********************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../PopupTemplate */ "./node_modules/arcgis-js-api/PopupTemplate.js"),__webpack_require__(/*! ../renderers */ "./node_modules/arcgis-js-api/renderers.js"),__webpack_require__(/*! ../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../core/MultiOriginJSONSupport */ "./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js"),__webpack_require__(/*! ../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../core/watchUtils */ "./node_modules/arcgis-js-api/core/watchUtils.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../core/accessorSupport/PropertyOrigin */ "./node_modules/arcgis-js-api/core/accessorSupport/PropertyOrigin.js"),__webpack_require__(/*! ../core/accessorSupport/utils */ "./node_modules/arcgis-js-api/core/accessorSupport/utils.js"),__webpack_require__(/*! ./FeatureLayer */ "./node_modules/arcgis-js-api/layers/FeatureLayer.js"),__webpack_require__(/*! ./Layer */ "./node_modules/arcgis-js-api/layers/Layer.js"),__webpack_require__(/*! ./mixins/ArcGISService */ "./node_modules/arcgis-js-api/layers/mixins/ArcGISService.js"),__webpack_require__(/*! ./mixins/OperationalLayer */ "./node_modules/arcgis-js-api/layers/mixins/OperationalLayer.js"),__webpack_require__(/*! ./mixins/PortalLayer */ "./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js"),__webpack_require__(/*! ./mixins/ScaleRangeLayer */ "./node_modules/arcgis-js-api/layers/mixins/ScaleRangeLayer.js"),__webpack_require__(/*! ./mixins/SceneService */ "./node_modules/arcgis-js-api/layers/mixins/SceneService.js"),__webpack_require__(/*! ./support/commonProperties */ "./node_modules/arcgis-js-api/layers/support/commonProperties.js"),__webpack_require__(/*! ./support/commonProperties */ "./node_modules/arcgis-js-api/layers/support/commonProperties.js"),__webpack_require__(/*! ./support/FeatureReduction */ "./node_modules/arcgis-js-api/layers/support/FeatureReduction.js"),__webpack_require__(/*! ./support/FeatureReductionSelection */ "./node_modules/arcgis-js-api/layers/support/FeatureReductionSelection.js"),__webpack_require__(/*! ./support/fieldProperties */ "./node_modules/arcgis-js-api/layers/support/fieldProperties.js"),__webpack_require__(/*! ./support/FieldsIndex */ "./node_modules/arcgis-js-api/layers/support/FieldsIndex.js"),__webpack_require__(/*! ./support/fieldUtils */ "./node_modules/arcgis-js-api/layers/support/fieldUtils.js"),__webpack_require__(/*! ./support/I3SLayerDefinitions */ "./node_modules/arcgis-js-api/layers/support/I3SLayerDefinitions.js"),__webpack_require__(/*! ./support/LabelClass */ "./node_modules/arcgis-js-api/layers/support/LabelClass.js"),__webpack_require__(/*! ./support/labelingInfo */ "./node_modules/arcgis-js-api/layers/support/labelingInfo.js"),__webpack_require__(/*! ./support/RangeInfo */ "./node_modules/arcgis-js-api/layers/support/RangeInfo.js"),__webpack_require__(/*! ../portal/PortalItem */ "./node_modules/arcgis-js-api/portal/PortalItem.js"),__webpack_require__(/*! ../renderers/support/jsonUtils */ "./node_modules/arcgis-js-api/renderers/support/jsonUtils.js"),__webpack_require__(/*! ../renderers/support/styleUtils */ "./node_modules/arcgis-js-api/renderers/support/styleUtils.js"),__webpack_require__(/*! ../support/popupUtils */ "./node_modules/arcgis-js-api/support/popupUtils.js"),__webpack_require__(/*! ../tasks/support/Query */ "./node_modules/arcgis-js-api/tasks/support/Query.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,n,i,a,s,p,l,u,d,c,y,f,h,v,g,m,b,I,S,w,F,L,O,j,_,P,x,A,D,E,T,U,R,q,M,Q,C,N,V,k){function G(e,r,t){return e&&((e=C.read(e,r,t)||void 0)||z.error("Failed to create renderer",{rendererDefinition:e,layer:this,context:t})),e}var H=["3DObject","Point"],z=d.getLogger("esri.layers.SceneLayer"),$=D.defineFieldProperties(),J=function(e){function r(r,t){var o=e.call(this,r)||this;return o.featureReduction=null,o.rangeInfos=null,o.operationalLayerType="ArcGISSceneServiceLayer",o.type="scene",o.fields=null,o.outFields=null,o.nodePages=null,o.materialDefinitions=null,o.textureSetDefinitions=null,o.geometryDefinitions=null,o.serviceUpdateTimeStamp=null,o.definitionExpression=null,o.path=null,o.labelsVisible=!0,o.labelingInfo=null,o.legendEnabled=!0,o.cachedDrawingInfo={color:!1},o.popupEnabled=!0,o.popupTemplate=null,o.objectIdField=null,o.objectIdFilter=null,o._fieldUsageInfo={},o.screenSizePerspectiveEnabled=!0,o}return o(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},r.prototype.getField=function(e){return this.fieldsIndex.get(e)},r.prototype.getFieldDomain=function(e){var r=this.getField(e);return r&&r.domain?r.domain:null},Object.defineProperty(r.prototype,"fieldsIndex",{get:function(){return new E(this.fields)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"elevationInfo",{set:function(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"geometryType",{get:function(){return Z[this.profile]||"mesh"},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"renderer",{set:function(e){T.fixRendererFields(e,this.fields),this._set("renderer",e)},enumerable:!0,configurable:!0}),r.prototype.readCachedDrawingInfo=function(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e},Object.defineProperty(r.prototype,"defaultPopupTemplate",{get:function(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null},enumerable:!0,configurable:!0}),r.prototype.readObjectIdField=function(e,r){return!e&&r.fields&&r.fields.some(function(r){return"esriFieldTypeOID"===r.type&&(e=r.name),!!e}),e||void 0},r.prototype.readProfile=function(e,r){var t=r.store.profile;return null!=t&&W[t]?W[t]:(z.error("Unknown or missing profile",{profile:t,layer:this}),"mesh-pyramids")},r.prototype.load=function(e){var r=this,t=c.isSome(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).then(function(){return r._fetchService(t)},function(){return r._fetchService(t)}).then(function(){return f.all([r._verifyRootNodeAndUpdateExtent(r.nodePages,t),r._setAssociatedFeatureLayer(t)])}).then(function(){return r._validateElevationInfo()}).then(function(){return r._applyAssociatedLayerOverrides()}).then(function(){return r._populateFieldUsageInfo()}).then(function(){return N.loadStyleRenderer(r,{origin:"service"},t)}).then(function(){return T.fixRendererFields(r.renderer,r.fields)});return this.addResolvingPromise(o),this.when()},r.prototype.createQuery=function(){var e=new k;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e},r.prototype.queryExtent=function(e,r){var t=this;return this._getAssociatedLayerForQuery().then(function(o){return o.queryExtent(e||t.createQuery(),r)})},r.prototype.queryFeatureCount=function(e,r){var t=this;return this._getAssociatedLayerForQuery().then(function(o){return o.queryFeatureCount(e||t.createQuery(),r)})},r.prototype.queryFeatures=function(e,r){var t=this;return this._getAssociatedLayerForQuery().then(function(o){return o.queryFeatures(e||t.createQuery(),r)}).then(function(e){if(e&&e.features)for(var r=0,o=e.features;r<o.length;r++){var n=o[r];n.layer=t,n.sourceLayer=t}return e})},r.prototype.queryObjectIds=function(e,r){var t=this;return this._getAssociatedLayerForQuery().then(function(o){return o.queryObjectIds(e||t.createQuery(),r)})},r.prototype.getFieldUsageInfo=function(e){var r={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||r:(z.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),r)},r.prototype.createPopupTemplate=function(e){return V.createPopupTemplate(this,e)},r.prototype._getAssociatedLayerForQuery=function(){var e=this;if(!this.loaded)return this.load().then(function(){return e._getAssociatedLayerForQuery()});var r=this.associatedLayer;return null!=r?f.resolve(r):f.reject(new u("scenelayer:query-not-available","SceneLayer queries are not available without associated feature layer"))},r.prototype.hasCachedStatistics=function(e){return null!=this.statisticsInfo&&this.statisticsInfo.some(function(r){return r.name===e})},r.prototype.queryCachedStatistics=function(e,r){return a(this,void 0,void 0,function(){var t,o,n,a,s;return i(this,function(i){switch(i.label){case 0:return[4,this.load(r)];case 1:if(i.sent(),!this.statisticsInfo)throw new u("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");if(!(t=this.fieldsIndex.get(e)))throw new u("scenelayer:field-unexisting","Field '"+e+"' does not exist on the layer");for(o=0,n=this.statisticsInfo;o<n.length;o++)if(a=n[o],a.name===t.name)return s=h.join(this.parsedUrl.path,a.href),[2,l(s,{query:{f:"json"},responseType:"json",signal:r?r.signal:null}).then(function(e){return e.data})];throw new u("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}})})},r.prototype.validateLayer=function(e){if(e.layerType&&-1===H.indexOf(e.layerType))throw new u("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new u("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new u("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});!function(e,r){var t=!1,o=!1;if(null==e)t=!0,o=!0;else{var n=r&&r.isGeographic;switch(e){case"east-north-up":case"earth-centered":t=!0,o=n;break;case"vertex-reference-frame":t=!0,o=!n;break;default:t=!1}}if(!t)throw new u("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!o)throw new u("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)},r.prototype._populateFieldUsageInfo=function(){if(this._fieldUsageInfo={},this.fields)for(var e=this,r=0,t=this.fields;r<t.length;r++){var o=t[r];!function(r){var t=!(!e.attributeStorageInfo||!e.attributeStorageInfo.some(function(e){return e.name===r.name})),o=!!(e.associatedLayer&&e.associatedLayer.fields&&e.associatedLayer.fields.some(function(e){return e&&r.name===e.name})),n={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||o,supportsLayerQuery:o};e._fieldUsageInfo[r.name]=n}(o)}},r.prototype._applyAssociatedLayerOverrides=function(){if(this.associatedLayer){if(this.associatedLayer.fields){for(var e=null,r=0,t=this.associatedLayer.fields;r<t.length;r++){var o=t[r];this.getField(o.name)||(e||(e=this.fields?this.fields.slice():[]),e.push(o.clone()))}e&&this._set("fields",e)}for(var n=["popupTemplate","popupEnabled"],i=b.getProperties(this),a=0;a<n.length;a++){var s=n[a];this._buddyIsMoreImportant(s)&&(i.setDefaultOrigin(this.associatedLayer.originOf(s)),i.set(s,this.associatedLayer[s]),i.setDefaultOrigin("user"))}}},r.prototype._setAssociatedFeatureLayer=function(e){return a(this,void 0,void 0,function(){var r;return i(this,function(t){switch(t.label){case 0:return[4,this._fetchAssociatedFeatureLayer(e)];case 1:return r=t.sent(),this.associatedLayer=r,[2]}})})},r.prototype._fetchAssociatedFeatureLayer=function(e){return a(this,void 0,void 0,function(){var r,t;return i(this,function(o){switch(o.label){case 0:if(-1===["mesh-pyramids","points"].indexOf(this.profile))return[2,null];o.label=1;case 1:return o.trys.push([1,4,,5]),[4,this.portalItem&&this.portalItem.isResolved()?this._fetchAssociatedFeatureLayerFromRelatedItems(this.portalItem,e):this._fetchAssociatedFeatureLayerFromUrl(e)];case 2:return r=o.sent(),[4,r.load({signal:e})];case 3:return[2,o.sent()];case 4:return t=o.sent(),this._logWarningOnPopupEnabled(),[2,null];case 5:return[2]}})})},r.prototype._logWarningOnPopupEnabled=function(){var e=this;v.whenValidOnce(this,["popupTemplate","popupEnabled"],function(){return e.popupEnabled&&null!=e.popupTemplate}).then(function(){return function(){var r="this SceneLayer: "+e.title;null==e.attributeStorageInfo?z.warn("Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on "+r):z.info("Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on "+r)}})},r.prototype._fetchAssociatedFeatureLayerFromRelatedItems=function(e,r){return a(this,void 0,void 0,function(){var t,o,n;return i(this,function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),[4,e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:r})];case 1:return t=i.sent(),o=t.filter(function(e){return"Feature Service"===e.type})[0],o?[4,this._fetchAssociatedFeatureLayerFromPortalItem(new Q({id:o.id,portal:o.portal}),r)]:[3,3];case 2:return[2,i.sent()];case 3:throw new Error;case 4:return n=i.sent(),[2,this._fetchAssociatedFeatureLayerFromUrl(r)];case 5:return[2]}})})},r.prototype._fetchAssociatedFeatureLayerFromPortalItem=function(e,r){return a(this,void 0,void 0,function(){var t;return i(this,function(o){switch(o.label){case 0:return[4,e.load({signal:r})];case 1:return o.sent(),[4,this._findMatchingAssociatedSublayerUrl(e.url,r)];case 2:return t=o.sent(),[2,new I({url:t,portalItem:e})]}})})},r.prototype._fetchAssociatedFeatureLayerFromUrl=function(e){return a(this,void 0,void 0,function(){var r;return i(this,function(t){switch(t.label){case 0:return[4,this._findMatchingAssociatedSublayerUrl(null,e)];case 1:return r=t.sent(),[2,new I({url:r})]}})})},r.prototype._findMatchingAssociatedSublayerUrl=function(e,r){return void 0===e&&(e=null),a(this,void 0,void 0,function(){var t,o,n,a,s,p,u,d,c,y,h,v,g,m;return i(this,function(i){switch(i.label){case 0:return(t=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i))?(null==e&&(e=t[1]+"/FeatureServer"),o=e.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),n={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:r},a=t[1]+"/SceneServer",s=parseInt(t[2],10),p=l(a,n).catch(function(){return{data:{layers:null}}}),u=l(o,n),[4,f.all([u,p])]):[2,f.reject()];case 1:if(d=i.sent(),c=d[0],y=d[1],h=y.data&&y.data.layers,v=c.data&&c.data.layers,!Array.isArray(v))throw new Error("expected layers array");if(Array.isArray(h)){for(g=0;g<Math.min(h.length,v.length);g++)if(m=h[g],m.id===s)return[2,o+"/"+v[g].id]}else if(s<v.length)return[2,o+"/"+v[s].id];throw new Error("could not find matching associated sublayer")}})})},r.prototype._buddyIsMoreImportant=function(e){if(!this.associatedLayer)return!1;var r=m.nameToId(this.originOf(e)),t=m.nameToId(this.associatedLayer.originOf(e));return null!=t&&t<=2?null==r||r<2:null!=t&&t<=3&&(null==r||r<3)},r.prototype._validateElevationInfo=function(){var e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"absolute-height"!==e.mode&&z.warn(".elevationInfo=","Mesh scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&z.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))},n([g.property({types:{key:"type",base:x.default,typeMap:{selection:A.default}},json:{origins:{"web-scene":{read:{source:"layerDefinition.featureReduction"},write:{target:"layerDefinition.featureReduction"}}}}})],r.prototype,"featureReduction",void 0),n([g.property({type:[M.default],json:{read:!1,origins:{"web-scene":{read:{source:"layerDefinition.rangeInfos"},write:{target:"layerDefinition.rangeInfos"}}}}})],r.prototype,"rangeInfos",void 0),n([g.property({json:{read:!1}})],r.prototype,"associatedLayer",void 0),n([g.property({type:["show","hide"]})],r.prototype,"listMode",void 0),n([g.property({type:["ArcGISSceneServiceLayer"]})],r.prototype,"operationalLayerType",void 0),n([g.property({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),n([g.property(t({},$.fields,{readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}}))],r.prototype,"fields",void 0),n([g.property({readOnly:!0,dependsOn:["fields"]})],r.prototype,"fieldsIndex",null),n([g.property($.outFields)],r.prototype,"outFields",void 0),n([g.property({type:U.I3SNodePageDefinition,readOnly:!0})],r.prototype,"nodePages",void 0),n([g.property({type:[U.I3SMaterialDefinition],readOnly:!0})],r.prototype,"materialDefinitions",void 0),n([g.property({type:[U.I3STextureSetDefinition],readOnly:!0})],r.prototype,"textureSetDefinitions",void 0),n([g.property({type:[U.I3SGeometryDefinition],readOnly:!0})],r.prototype,"geometryDefinitions",void 0),n([g.property({readOnly:!0})],r.prototype,"serviceUpdateTimeStamp",void 0),n([g.property({readOnly:!0})],r.prototype,"attributeStorageInfo",void 0),n([g.property({readOnly:!0})],r.prototype,"statisticsInfo",void 0),n([g.property({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],r.prototype,"definitionExpression",void 0),n([g.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],r.prototype,"path",void 0),n([g.property(_.elevationInfo)],r.prototype,"elevationInfo",null),n([g.property({type:String,dependsOn:["profile"]})],r.prototype,"geometryType",null),n([g.property(_.labelsVisible)],r.prototype,"labelsVisible",void 0),n([g.property({type:[R],json:{origins:{service:{read:{source:"drawingInfo.labelingInfo",reader:q.reader},write:{target:"drawingInfo.labelingInfo",enabled:!1}}},read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:q.reader},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],r.prototype,"labelingInfo",void 0),n([g.property(_.legendEnabled)],r.prototype,"legendEnabled",void 0),n([g.property(_.opacityDrawingInfo)],r.prototype,"opacity",void 0),n([g.property({types:p.webSceneRendererTypes,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:G}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:G},write:{target:"layerDefinition.drawingInfo.renderer"}},value:null})],r.prototype,"renderer",null),n([g.property({json:{read:!1}})],r.prototype,"cachedDrawingInfo",void 0),n([g.reader("service","cachedDrawingInfo")],r.prototype,"readCachedDrawingInfo",null),n([g.property(_.popupEnabled)],r.prototype,"popupEnabled",void 0),n([g.property({type:s,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],r.prototype,"popupTemplate",void 0),n([g.property({readOnly:!0,json:{read:!1},dependsOn:["fields","title","attributeStorageInfo","associatedLayer"]})],r.prototype,"defaultPopupTemplate",null),n([g.property({type:String,json:{read:!1}})],r.prototype,"objectIdField",void 0),n([g.reader("service","objectIdField",["objectIdField","fields"])],r.prototype,"readObjectIdField",null),n([g.property({json:{read:!1}})],r.prototype,"objectIdFilter",void 0),n([g.property({type:String,json:{read:!1}})],r.prototype,"profile",void 0),n([g.reader("service","profile",["store.profile"])],r.prototype,"readProfile",null),n([g.property({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],r.prototype,"normalReferenceFrame",void 0),n([g.property(P.screenSizePerspectiveEnabled)],r.prototype,"screenSizePerspectiveEnabled",void 0),r=n([g.subclass("esri.layers.SceneLayer")],r)}(g.declared(O.ScaleRangeLayer(j.SceneService(w.ArcGISService(F.OperationalLayer(L.PortalLayer(y.MultiOriginJSONMixin(S)))))))),W={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},Z={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"};return J}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
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

/***/ "./node_modules/arcgis-js-api/layers/support/RangeInfo.js":
/*!****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/RangeInfo.js ***!
  \****************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,p,n){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.name=null,r.field=null,r.currentRangeExtent=null,r.fullRangeExtent=null,r.type="rangeInfo",r}return t(r,e),o([n.property({type:String,json:{read:!0,write:!0}})],r.prototype,"name",void 0),o([n.property({type:String,json:{read:!0,write:!0}})],r.prototype,"field",void 0),o([n.property({type:[Number],json:{read:!0,write:!0}})],r.prototype,"currentRangeExtent",void 0),o([n.property({type:[Number],json:{read:!0,write:!0}})],r.prototype,"fullRangeExtent",void 0),o([n.property({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],r.prototype,"type",void 0),r=o([n.subclass("esri.layers.support.RangeInfo")],r)}(n.declared(p.JSONSupport));r.RangeInfo=a,r.default=a}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/layerSourceUtils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/layerSourceUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,a,t){function o(e){return null!=e&&e.hasOwnProperty("mapLayerId")}function i(e){return null!=e&&e.hasOwnProperty("dataSource")}function l(e){return e?(o(e)&&(e.type=r.MAPLAYER),i(e)&&(e.type=r.DATALAYER,e.dataSource.type||y(e.dataSource)),e):e}function n(e){var a={};return e.type===r.MAPLAYER?(a.mapLayerId=e.mapLayerId,e.gdbVersion&&(a.gdbVersion=e.gdbVersion)):e.type===r.DATALAYER&&(e.fields&&(a.fields=e.fields),a.dataSource=u(e.dataSource)),a.type=p.toJSON(e.type),t.fixJson(a)}function c(e){var a={};return p.fromJSON(e.type)===r.MAPLAYER?(a.mapLayerId=e.mapLayerId,e.gdbVersion&&(a.gdbVersion=e.gdbVersion)):p.fromJSON(e.type)===r.DATALAYER&&(e.fields&&(a.fields=e.fields),a.dataSource=s(e.dataSource)),a.type=p.fromJSON(e.type),t.fixJson(a)}function y(e){e.workspaceId?e.gdbVersion?e.type="table":e.query||e.oidFields?e.type="query-table":e.type="raster":e.leftTableKey&&e.rightTableKey&&e.leftTableSource&&e.rightTableSource&&(e.type="join-table",e.leftTableSource=l(e.leftTableSource),e.rightTableSource=l(e.rightTableSource))}function u(e){var r;switch(e.type){case"table":r={dataSourceName:e.dataSourceName,workspaceId:e.workspaceId,gdbVersion:e.gdbVersion};break;case"query-table":r={geometryType:d.toJSON(e.geometryType),workspaceId:e.workspaceId,query:e.query,oidFields:e.oidFields,spatialReference:e.spatialReference};break;case"join-table":r={leftTableSource:n(e.leftTableSource),rightTableSource:n(e.rightTableSource),leftTableKey:e.leftTableKey,rightTableKey:e.rightTableKey,joinType:f.toJSON(e.joinType)};break;case"raster":r={workspaceId:e.workspaceId,dataSourceName:e.dataSourceName}}return r.type=b.toJSON(e.type),t.fixJson(r)}function s(e){var r;switch(e.type){case"table":r={dataSourceName:e.dataSourceName,workspaceId:e.workspaceId,gdbVersion:e.gdbVersion};break;case"queryTable":r={geometryType:d.fromJSON(e.geometryType),workspaceId:e.workspaceId,query:e.query,oidFields:e.oidFields,spatialReference:e.spatialReference};break;case"joinTable":r={leftTableSource:c(e.leftTableSource),rightTableSource:c(e.rightTableSource),leftTableKey:e.leftTableKey,rightTableKey:e.rightTableKey,joinType:f.fromJSON(e.joinType)};break;case"raster":r={workspaceId:e.workspaceId,dataSourceName:e.dataSourceName}}return r.type=b.fromJSON(e.type),t.fixJson(r)}Object.defineProperty(r,"__esModule",{value:!0}),r.MAPLAYER="map-layer",r.DATALAYER="data-layer";var d=new a.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"}),p=new a.default({mapLayer:r.MAPLAYER,dataLayer:r.DATALAYER}),b=new a.default({joinTable:"join-table",queryTable:"query-table"}),f=new a.default({esriLeftOuterJoin:"left-outer-join",esriLeftInnerJoin:"left-inner-join"});r.isMapLayerSource=o,r.isDataLayerSource=i,r.castSource=l,r.sourceToJSON=n,r.sourceFromJSON=c}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers.js":
/*!*************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers.js ***!
  \*************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./renderers/ClassBreaksRenderer */ "./node_modules/arcgis-js-api/renderers/ClassBreaksRenderer.js"),__webpack_require__(/*! ./renderers/DictionaryRenderer */ "./node_modules/arcgis-js-api/renderers/DictionaryRenderer.js"),__webpack_require__(/*! ./renderers/DotDensityRenderer */ "./node_modules/arcgis-js-api/renderers/DotDensityRenderer.js"),__webpack_require__(/*! ./renderers/HeatmapRenderer */ "./node_modules/arcgis-js-api/renderers/HeatmapRenderer.js"),__webpack_require__(/*! ./renderers/Renderer */ "./node_modules/arcgis-js-api/renderers/Renderer.js"),__webpack_require__(/*! ./renderers/SimpleRenderer */ "./node_modules/arcgis-js-api/renderers/SimpleRenderer.js"),__webpack_require__(/*! ./renderers/UniqueValueRenderer */ "./node_modules/arcgis-js-api/renderers/UniqueValueRenderer.js"),__webpack_require__(/*! ./renderers/support/jsonUtils */ "./node_modules/arcgis-js-api/renderers/support/jsonUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,n,s,d,a,i,t,R,p){function l(e){return e instanceof r.BaseRenderer}Object.defineProperty(r,"__esModule",{value:!0}),r.ClassBreaksRenderer=n,r.DictionaryRenderer=s,r.DotDensityRenderer=d,r.HeatmapRenderer=a,r.BaseRenderer=i,r.SimpleRenderer=t,r.UniqueValueRenderer=R,r.isRenderer=l,r.read=p.read,r.write=p.write,r.fromJSON=p.fromJSON,r.rendererTypes={key:"type",base:r.BaseRenderer,typeMap:{heatmap:r.HeatmapRenderer,simple:r.SimpleRenderer,"unique-value":r.UniqueValueRenderer,"class-breaks":r.ClassBreaksRenderer,"dot-density":r.DotDensityRenderer,dictionary:r.DictionaryRenderer}},r.webSceneRendererTypes={key:"type",base:r.BaseRenderer,typeMap:{simple:r.SimpleRenderer,"unique-value":r.UniqueValueRenderer,"class-breaks":r.ClassBreaksRenderer}}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils.js ***!
  \*******************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,n){function i(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function a(e){return null!=e&&!isNaN(e)&&isFinite(e)}function l(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}function r(e,n){var i=n||l(e),a=e.valueUnit||"unknown";return"unknown"===i?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===a?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}Object.defineProperty(n,"__esModule",{value:!0}),n.isSizeVariable=i,n.isValidNumber=a,n.getInputValueType=l,n.getTransformationType=r}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/symbols/support/defaults.js":
/*!****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/symbols/support/defaults.js ***!
  \****************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/compilerUtils */ "./node_modules/arcgis-js-api/core/compilerUtils.js"),__webpack_require__(/*! ../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../SimpleFillSymbol */ "./node_modules/arcgis-js-api/symbols/SimpleFillSymbol.js"),__webpack_require__(/*! ../SimpleLineSymbol */ "./node_modules/arcgis-js-api/symbols/SimpleLineSymbol.js"),__webpack_require__(/*! ../SimpleMarkerSymbol */ "./node_modules/arcgis-js-api/symbols/SimpleMarkerSymbol.js"),__webpack_require__(/*! ../TextSymbol */ "./node_modules/arcgis-js-api/symbols/TextSymbol.js"),__webpack_require__(/*! ./defaultsJSON */ "./node_modules/arcgis-js-api/symbols/support/defaultsJSON.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,l,o,r,t,S,n,y,m){function i(e){if(r.isNone(e))return null;switch(e.type){case"mesh":return null;case"point":case"multipoint":return l.defaultPointSymbol2D;case"polyline":return l.defaultPolylineSymbol2D;case"polygon":case"extent":return l.defaultPolygonSymbol2D;default:o.neverReached(e)}return null}Object.defineProperty(l,"__esModule",{value:!0}),l.defaultPointSymbol2D=n.fromJSON(m.defaultPointSymbolJSON),l.defaultPolylineSymbol2D=S.fromJSON(m.defaultPolylineSymbolJSON),l.defaultPolygonSymbol2D=t.fromJSON(m.defaultPolygonSymbolJSON),l.defaultTextSymbol2D=y.fromJSON(m.defaultTextSymbolJSON),l.getDefaultSymbol2D=i,l.errorPointSymbol2D=n.fromJSON(m.errorPointSymbolJSON),l.errorPolylineSymbol2D=S.fromJSON(m.errorPolylineSymbolJSON),l.errorPolygonSymbol2D=t.fromJSON(m.errorPolygonSymbolJSON)}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/symbols/support/defaultsJSON.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/symbols/support/defaultsJSON.js ***!
  \********************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.defaultColor=[252,146,31,255],o.defaultOutlineColor=[153,153,153,255],o.defaultPointSymbolJSON={type:"esriSMS",style:"esriSMSCircle",size:6,color:o.defaultColor,outline:{width:.75,color:[153,153,153,255]}},o.defaultPolylineSymbolJSON={type:"esriSLS",style:"esriSLSSolid",width:.75,color:o.defaultColor},o.defaultPolygonSymbolJSON={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{width:.75,color:[255,255,255,191]}},o.defaultTextSymbolJSON={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},o.errorPointSymbolJSON={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},o.errorPolylineSymbolJSON={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},o.errorPolygonSymbolJSON={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,i,n,p,s,a){Object.defineProperty(t,"__esModule",{value:!0});var c=new n.default({upperLeft:"upper-left",lowerLeft:"lower-left"}),l=function(e){function t(t){var r=e.call(this,t)||this;return r.extent=null,r.mode="view",r.originPosition="upper-left",r.tolerance=1,r}r(t,e),n=t,t.prototype.clone=function(){return new n(s.clone({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))};var n;return o([a.property({type:i.Extent,json:{write:!0}})],t.prototype,"extent",void 0),o([a.property({type:["view","edit"],json:{write:!0}})],t.prototype,"mode",void 0),o([a.property({type:String,json:{read:c.read,write:c.write}})],t.prototype,"originPosition",void 0),o([a.property({type:Number,json:{write:!0}})],t.prototype,"tolerance",void 0),t=n=o([a.subclass("esri.tasks.support.QuantizationParameters")],t)}(a.declared(p.JSONSupport));t.default=l}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=57.js.map