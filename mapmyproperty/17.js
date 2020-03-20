(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/core/requireUtils":"./node_modules/arcgis-js-api/core/requireUtils.js",
	"arcgis-js-api/core/requireUtils":"./node_modules/arcgis-js-api/core/requireUtils.js",
	"esri/layers/FeatureLayer":"./node_modules/arcgis-js-api/layers/FeatureLayer.js",
	"arcgis-js-api/layers/FeatureLayer":"./node_modules/arcgis-js-api/layers/FeatureLayer.js",
	"arcgis-js-api/layers/graphics/sources/MemorySource":"./node_modules/arcgis-js-api/layers/graphics/sources/MemorySource.js",
	"arcgis-js-api/layers/support/FeatureIndex":"./node_modules/arcgis-js-api/layers/support/FeatureIndex.js",
	"arcgis-js-api/layers/support/FeatureReduction":"./node_modules/arcgis-js-api/layers/support/FeatureReduction.js",
	"arcgis-js-api/layers/support/FeatureReductionCluster":"./node_modules/arcgis-js-api/layers/support/FeatureReductionCluster.js",
	"arcgis-js-api/layers/support/FeatureReductionSelection":"./node_modules/arcgis-js-api/layers/support/FeatureReductionSelection.js",
	"arcgis-js-api/layers/support/FeatureTemplate":"./node_modules/arcgis-js-api/layers/support/FeatureTemplate.js",
	"arcgis-js-api/layers/support/FeatureType":"./node_modules/arcgis-js-api/layers/support/FeatureType.js",
	"arcgis-js-api/layers/support/Relationship":"./node_modules/arcgis-js-api/layers/support/Relationship.js",
	"arcgis-js-api/layers/support/featureReductionUtils":"./node_modules/arcgis-js-api/layers/support/featureReductionUtils.js",
	"arcgis-js-api/layers/support/fieldProperties":"./node_modules/arcgis-js-api/layers/support/fieldProperties.js",
	"arcgis-js-api/layers/support/labelingInfo":"./node_modules/arcgis-js-api/layers/support/labelingInfo.js",
	"arcgis-js-api/renderers/support/styleUtils":"./node_modules/arcgis-js-api/renderers/support/styleUtils.js",
	"arcgis-js-api/tasks/support/AttachmentQuery":"./node_modules/arcgis-js-api/tasks/support/AttachmentQuery.js",
	"arcgis-js-api/tasks/support/RelationshipQuery":"./node_modules/arcgis-js-api/tasks/support/RelationshipQuery.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/arcgis-js-api/core/requireUtils.js":
/*!*********************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/requireUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./deprecate */ "./node_modules/arcgis-js-api/core/deprecate.js"),__webpack_require__(/*! ./Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ./promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,n,i){function o(e,r){return t.deprecatedFunction(s,"when",{moduleName:"requireUtils",replacement:"Use `promiseUtils.create()` instead.",version:"4.10",warnOnce:!0}),Array.isArray(r)?i.create(function(t){e(r,function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];t(e)})}):o(e,[r]).then(function(e){return e[0]})}function c(e,r,t){return r.toAbsMid?r.toAbsMid(e):t.id.replace(/\/[^\/]*$/gi,"/")+e}Object.defineProperty(r,"__esModule",{value:!0});var s=n.getLogger("esri.core.requireUtils");r.when=o,r.getAbsMid=c}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/FeatureLayer.js":
/*!***********************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/FeatureLayer.js ***!
  \***********************************************************/
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
             * Copyright information for the layer.
             *
             * @name copyright
             * @instance
             * @type {string}
             */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/paramHelper */ "./node_modules/arcgis-js-api/core/tsSupport/paramHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../PopupTemplate */ "./node_modules/arcgis-js-api/PopupTemplate.js"),__webpack_require__(/*! ../renderers */ "./node_modules/arcgis-js-api/renderers.js"),__webpack_require__(/*! ../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../symbols */ "./node_modules/arcgis-js-api/symbols.js"),__webpack_require__(/*! ../core/Collection */ "./node_modules/arcgis-js-api/core/Collection.js"),__webpack_require__(/*! ../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../core/Handles */ "./node_modules/arcgis-js-api/core/Handles.js"),__webpack_require__(/*! ../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../core/MultiOriginJSONSupport */ "./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js"),__webpack_require__(/*! ../core/object */ "./node_modules/arcgis-js-api/core/object.js"),__webpack_require__(/*! ../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js"),__webpack_require__(/*! ../geometry/HeightModelInfo */ "./node_modules/arcgis-js-api/geometry/HeightModelInfo.js"),__webpack_require__(/*! ../geometry/SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js"),__webpack_require__(/*! ./Layer */ "./node_modules/arcgis-js-api/layers/Layer.js"),__webpack_require__(/*! ./graphics/sources/MemorySource */ "./node_modules/arcgis-js-api/layers/graphics/sources/MemorySource.js"),__webpack_require__(/*! ./mixins/ArcGISService */ "./node_modules/arcgis-js-api/layers/mixins/ArcGISService.js"),__webpack_require__(/*! ./mixins/OperationalLayer */ "./node_modules/arcgis-js-api/layers/mixins/OperationalLayer.js"),__webpack_require__(/*! ./mixins/PortalLayer */ "./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js"),__webpack_require__(/*! ./mixins/RefreshableLayer */ "./node_modules/arcgis-js-api/layers/mixins/RefreshableLayer.js"),__webpack_require__(/*! ./mixins/ScaleRangeLayer */ "./node_modules/arcgis-js-api/layers/mixins/ScaleRangeLayer.js"),__webpack_require__(/*! ./mixins/TemporalLayer */ "./node_modules/arcgis-js-api/layers/mixins/TemporalLayer.js"),__webpack_require__(/*! ./support/arcgisLayerUrl */ "./node_modules/arcgis-js-api/layers/support/arcgisLayerUrl.js"),__webpack_require__(/*! ./support/commonProperties */ "./node_modules/arcgis-js-api/layers/support/commonProperties.js"),__webpack_require__(/*! ./support/FeatureIndex */ "./node_modules/arcgis-js-api/layers/support/FeatureIndex.js"),__webpack_require__(/*! ./support/FeatureReduction */ "./node_modules/arcgis-js-api/layers/support/FeatureReduction.js"),__webpack_require__(/*! ./support/FeatureReductionCluster */ "./node_modules/arcgis-js-api/layers/support/FeatureReductionCluster.js"),__webpack_require__(/*! ./support/FeatureReductionSelection */ "./node_modules/arcgis-js-api/layers/support/FeatureReductionSelection.js"),__webpack_require__(/*! ./support/featureReductionUtils */ "./node_modules/arcgis-js-api/layers/support/featureReductionUtils.js"),__webpack_require__(/*! ./support/FeatureTemplate */ "./node_modules/arcgis-js-api/layers/support/FeatureTemplate.js"),__webpack_require__(/*! ./support/FeatureType */ "./node_modules/arcgis-js-api/layers/support/FeatureType.js"),__webpack_require__(/*! ./support/fieldProperties */ "./node_modules/arcgis-js-api/layers/support/fieldProperties.js"),__webpack_require__(/*! ./support/FieldsIndex */ "./node_modules/arcgis-js-api/layers/support/FieldsIndex.js"),__webpack_require__(/*! ./support/fieldUtils */ "./node_modules/arcgis-js-api/layers/support/fieldUtils.js"),__webpack_require__(/*! ./support/LabelClass */ "./node_modules/arcgis-js-api/layers/support/LabelClass.js"),__webpack_require__(/*! ./support/labelingInfo */ "./node_modules/arcgis-js-api/layers/support/labelingInfo.js"),__webpack_require__(/*! ./support/layerSourceUtils */ "./node_modules/arcgis-js-api/layers/support/layerSourceUtils.js"),__webpack_require__(/*! ./support/Relationship */ "./node_modules/arcgis-js-api/layers/support/Relationship.js"),__webpack_require__(/*! ./support/TimeInfo */ "./node_modules/arcgis-js-api/layers/support/TimeInfo.js"),__webpack_require__(/*! ../renderers/support/jsonUtils */ "./node_modules/arcgis-js-api/renderers/support/jsonUtils.js"),__webpack_require__(/*! ../renderers/support/styleUtils */ "./node_modules/arcgis-js-api/renderers/support/styleUtils.js"),__webpack_require__(/*! ../support/popupUtils */ "./node_modules/arcgis-js-api/support/popupUtils.js"),__webpack_require__(/*! ../symbols/support/jsonUtils */ "./node_modules/arcgis-js-api/symbols/support/jsonUtils.js"),__webpack_require__(/*! ../tasks/support/AttachmentQuery */ "./node_modules/arcgis-js-api/tasks/support/AttachmentQuery.js"),__webpack_require__(/*! ../tasks/support/FeatureSet */ "./node_modules/arcgis-js-api/tasks/support/FeatureSet.js"),__webpack_require__(/*! ../tasks/support/Query */ "./node_modules/arcgis-js-api/tasks/support/Query.js"),__webpack_require__(/*! ../tasks/support/RelationshipQuery */ "./node_modules/arcgis-js-api/tasks/support/RelationshipQuery.js"),__webpack_require__(/*! @dojo/framework/shim/Promise */ "./node_modules/@dojo/framework/shim/Promise.mjs")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,o,n,a,s,p,l,u,d,y,c,f,h,m,b,v,g,w,S,I,F,D,x,T,O,R,M,A,j,E,C,P,L,_,Q,q,U,G,V,z,k,B,N,W,H,J,Z,K,$,X,Y,ee,te,re,ie,oe){function ne(e){return e&&e instanceof y}function ae(e,t,r){return!!(e&&e.hasOwnProperty(t)?e[t]:r)}function se(e,t,r){return e&&e.hasOwnProperty(t)?e[t]:r}var pe=new h.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"}),le={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"},ue="FeatureLayer",de=m.getLogger("esri.layers.FeatureLayer"),ye=k.defineFieldProperties();return function(t){function n(e){var r=t.call(this,e)||this;return r._handles=new f,r.capabilities=null,r.copyright=null,r.displayField=null,r.definitionExpression=null,r.dynamicDataSource=null,r.editFieldsInfo=null,r.editingEnabled=!0,r.editingInfo=null,r.elevationInfo=null,r.featureReduction=null,r.fields=null,r.fullExtent=null,r.gdbVersion=null,r.geometryProperties=null,r.geometryType=null,r.hasM=void 0,r.hasZ=void 0,r.heightModelInfo=null,r.historicMoment=null,r.isTable=!1,r.labelsVisible=!0,r.labelingInfo=null,r.layerId=void 0,r.legendEnabled=!0,r.minScale=0,r.maxScale=0,r.globalIdField=null,r.objectIdField=null,r.outFields=null,r.path=null,r.popupEnabled=!0,r.popupTemplate=null,r.relationships=null,r.sourceJSON=null,r.returnM=void 0,r.returnZ=void 0,r.screenSizePerspectiveEnabled=!0,r.serviceDefinitionExpression=null,r.spatialReference=x.WGS84,r.templates=null,r.timeInfo=null,r.title=null,r.sublayerTitleMode="item-title",r.trackIdField=null,r.type="feature",r.typeIdField=null,r.types=null,r.indexes=new(y.ofType(_.FeatureIndex)),r.userIsAdmin=!1,r.version=void 0,r.visible=!0,r}return i(n,t),n.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null)},n.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?r({url:e},t):e},n.prototype.load=function(e){var t=this,r=b.isSome(e)?e.signal:null;if(this.portalItem&&this.portalItem.loaded&&this.source)return void this.addResolvingPromise(this.createGraphicsSource(r).then(function(e){return t._initLayerProperties(e)}));var i=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection"]},e).catch(function(e){return e}).then(function(){return s(t,void 0,void 0,function(){var e,t;return a(this,function(i){switch(i.label){case 0:return this.url&&null==this.layerId&&/FeatureServer|MapServer\/*$/i.test(this.url)?[4,this._fetchFirstLayerId(r)]:[3,2];case 1:e=i.sent(),null!=e&&(this.layerId=e),i.label=2;case 2:if(!this.url&&!this._hasMemorySource())throw new c("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return t=this._initLayerProperties,[4,this.createGraphicsSource(r)];case 3:return[2,t.apply(this,[i.sent()])]}})})});return this.addResolvingPromise(i),this.when()},n.prototype.readCapabilities=function(e,t){return t=t.layerDefinition||t,{attachment:this._readAttachmentCapabilities(t.attachmentProperties),data:this._readDataCapabilities(t),metadata:this._readMetadataCapabilities(t),operations:this._readOperationsCapabilities(t.capabilities||e,t),query:this._readQueryCapabilities(t),queryRelated:this._readQueryRelatedCapabilities(t),editing:this._readEditingCapabilities(t)}},n.prototype.readEditingEnabled=function(e,t){return!t.layerDefinition||"Query"!==t.layerDefinition.capabilities},n.prototype.writeEditingEnabled=function(e,t){e||g.setDeepValue("layerDefinition.capabilities","Query",t)},n.prototype.readEditingInfo=function(e,t){var r=t.editingInfo;return r?{lastEditDate:null!=r.lastEditDate?new Date(r.lastEditDate):null}:null},n.prototype.readFeatureReduction=function(e,t,r){return G.read(e,t,r)},n.prototype.writeWebSceneFeatureReduction=function(e,t,r,i){G.writeTarget(e,t,"layerDefinition.featureReduction",i)},Object.defineProperty(n.prototype,"fieldsIndex",{get:function(){return new B(this.fields||[])},enumerable:!0,configurable:!0}),n.prototype.readIsTable=function(e,t){return t=t&&t.layerDefinition||t,"Table"===t.type},Object.defineProperty(n.prototype,"hasService",{get:function(){return!this._hasMemorySource()},enumerable:!0,configurable:!0}),n.prototype.readMinScale=function(e,t){return t.effectiveMinScale||e||0},n.prototype.readMaxScale=function(e,t){return t.effectiveMaxScale||e||0},n.prototype.readGlobalIdFieldFromService=function(e,t){if(t=t.layerDefinition||t,t.globalIdField)return t.globalIdField;if(t.fields)for(var r=0,i=t.fields;r<i.length;r++){var o=i[r];if("esriFieldTypeGlobalID"===o.type)return o.name}},n.prototype.readObjectIdFieldFromService=function(e,t){if(t=t.layerDefinition||t,t.objectIdField)return t.objectIdField;if(t.fields)for(var r=0,i=t.fields;r<i.length;r++){var o=i[r];if("esriFieldTypeOID"===o.type)return o.name}},Object.defineProperty(n.prototype,"parsedUrl",{get:function(){var e=this.url?S.urlToObject(this.url):null;if(null!=e)if(null!=this.layerId)e.path=S.join(e.path,this.layerId.toString());else if(null!=this.dynamicDataSource){var t={source:J.sourceToJSON(this.dynamicDataSource)};e.query={layer:JSON.stringify(t)}}return e},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"defaultPopupTemplate",{get:function(){return this.createPopupTemplate()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"renderer",{set:function(e){N.fixRendererFields(e,this.fields),this._set("renderer",e)},enumerable:!0,configurable:!0}),n.prototype.readRenderer=function(e,t,r){t=t.layerDefinition||t;var i,o,n=t.drawingInfo&&t.drawingInfo.renderer||void 0;if(n)(i=$.read(n,t,r)||void 0)||de.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r});else if(t.defaultSymbol)ee.read(t.defaultSymbol,t,r),t.types&&t.types.length?(i=new l.UniqueValueRenderer({defaultSymbol:o,field:t.typeIdField}),t.types.forEach(function(e){n.addUniqueValueInfo(e.id,ee.read(e.symbol,e,r))})):i=new l.SimpleRenderer({symbol:o});else if("Table"!==t.type){switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":o=new d.SimpleMarkerSymbol;break;case"esriGeometryPolyline":o=new d.SimpleLineSymbol;break;case"esriGeometryPolygon":o=new d.SimpleFillSymbol}i=o&&new l.SimpleRenderer({symbol:o})}return i},n.prototype.writeRenderer=function(e,t,r,i){$.writeTarget(e,t,r,i)},n.prototype.writeWebSceneRenderer=function(e,t,r,i){$.writeTarget(e,t,"layerDefinition.drawingInfo.renderer",i)},Object.defineProperty(n.prototype,"source",{set:function(e){var t=this._get("source");t!==e&&(ne(t)&&this._resetMemorySource(t),ne(e)&&this._initMemorySource(e),this._set("source",e))},enumerable:!0,configurable:!0}),n.prototype.castSource=function(e){return e?Array.isArray(e)||e instanceof y?new O.default({layer:this,items:e}):e:null},n.prototype.readSource=function(e,t){var r=re.fromJSON(t.featureSet);return new O.default({layer:this,items:r&&r.features||[]})},n.prototype.readTemplates=function(e,t){var r=t.editFieldsInfo,i=r&&r.creatorField,o=r&&r.editorField;return e=e&&e.map(function(e){return V.fromJSON(e)}),this._fixTemplates(e,i),this._fixTemplates(e,o),e},n.prototype.readTitle=function(e,t){var r=t.layerDefinition&&t.layerDefinition.name||t.name,i=t.title||t.layerDefinition&&t.layerDefinition.title;if(r){var o=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return this.url?P.titleFromUrlAndName(this.url,r):r;var n=r||this.url&&P.parse(this.url).title;if(!n)return;return"item-title-and-service-name"===this.sublayerTitleMode&&o&&(n=o+" - "+n),P.cleanTitle(n)}if("item-title"===this.sublayerTitleMode&&i)return i},n.prototype.readTitleFromWebMap=function(e,t){return t.title||t.layerDefinition&&t.layerDefinition.name},n.prototype.readTypeIdField=function(e,t){t=t.layerDefinition||t;var r=t.typeIdField;if(r){var i=N.getField(t.fields,r);i&&(r=i.name)}return r},n.prototype.readTypes=function(e,t){var r=this;t=t.layerDefinition||t,e=t.types;var i=t.editFieldsInfo,o=i&&i.creatorField,n=i&&i.editorField;return e&&e.map(function(e){return e=z.fromJSON(e),r._fixTemplates(e.templates,o),r._fixTemplates(e.templates,n),e})},Object.defineProperty(n.prototype,"url",{set:function(e){var t=P.sanitizeUrlWithLayerId(this,e,de);this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)},enumerable:!0,configurable:!0}),n.prototype.writeUrl=function(e,t,r,i){P.writeUrlWithLayerId(this,e,null,t,i)},n.prototype.readVersion=function(e,t){return t.currentVersion?t.currentVersion:t.hasOwnProperty("capabilities")||t.hasOwnProperty("drawingInfo")||t.hasOwnProperty("hasAttachments")||t.hasOwnProperty("htmlPopupType")||t.hasOwnProperty("relationships")||t.hasOwnProperty("timeInfo")||t.hasOwnProperty("typeIdField")||t.hasOwnProperty("types")?10:9.3},n.prototype.readVisible=function(e,t){return t.layerDefinition&&null!=t.layerDefinition.defaultVisibility?!!t.layerDefinition.defaultVisibility:null!=t.visibility?!!t.visibility:void 0},n.prototype.addAttachment=function(e,t){var r=this;return this.load().then(function(){return r._checkAttachmentSupport(e)}).then(function(){if(!("addAttachment"in r.source))throw new c(ue,"Layer source does not support addAttachment capability");return r.source.addAttachment(e,t)})},n.prototype.updateAttachment=function(e,t,r){var i=this;return this.load().then(function(){return i._checkAttachmentSupport(e)}).then(function(){if(!("updateAttachment"in i.source))throw new c(ue,"Layer source does not support updateAttachment capability");return i.source.updateAttachment(e,t,r)})},n.prototype.applyEdits=function(t,r){return s(this,void 0,void 0,function(){var i;return a(this,function(o){switch(o.label){case 0:return[4,new Promise(function(t,r){Promise.all(/*! AMD require */[__webpack_require__.e(7), __webpack_require__.e(124)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./graphics/editingSupport */ "./node_modules/arcgis-js-api/layers/graphics/editingSupport.js")]; (t).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(r.bind(this))})];case 1:return i=o.sent(),[2,i.applyEdits(this,t,r)]}})})},n.prototype.on=function(e,t){return this.inherited(arguments,[e,t])},n.prototype.createPopupTemplate=function(e){return Y.createPopupTemplate(this,e)},n.prototype.createGraphicsSource=function(t){return s(this,void 0,void 0,function(){var r,i;return a(this,function(o){switch(o.label){case 0:return this._hasMemorySource()?(this.emit("graphics-source-create",{graphicsSource:this.source}),[2,this.source.load({signal:t})]):[4,w.create(function(t){return Promise.all(/*! AMD require */[__webpack_require__.e(7), __webpack_require__.e(14), __webpack_require__.e(19), __webpack_require__.e(23), __webpack_require__.e(93)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./graphics/sources/FeatureLayerSource */ "./node_modules/arcgis-js-api/layers/graphics/sources/FeatureLayerSource.js")]; (t).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})];case 1:return r=o.sent(),w.throwIfAborted(t),[4,new r.default({layer:this}).load({signal:t})];case 2:return i=o.sent(),this.emit("graphics-source-create",{graphicsSource:i}),[2,i]}})})},n.prototype.createQuery=function(){var e=new ie,t=this.get("capabilities.data");return e.gdbVersion=this.gdbVersion,e.historicMoment=this.historicMoment,e.returnGeometry=!0,t&&(t.supportsZ&&null!=this.returnZ&&(e.returnZ=this.returnZ),t.supportsM&&null!=this.returnM&&(e.returnM=this.returnM)),e.outFields=["*"],e.where=this.definitionExpression||"1=1",e.multipatchOption="multipatch"===this.geometryType?"xyFootprint":null,e},n.prototype.deleteAttachments=function(e,t){var r=this;return this.load().then(function(){return r._checkAttachmentSupport(e)}).then(function(){if(!("deleteAttachments"in r.source))throw new c(ue,"Layer source does not support deleteAttachments capability");return r.source.deleteAttachments(e,t)})},n.prototype.getFeatureType=function(e){var t=this,r=t.typeIdField,i=t.types;if(!r||!e)return null;var o=e.attributes?e.attributes[r]:void 0;if(null==o)return null;var n=null;return i.some(function(e){var t=e.id;return null!=t&&(t.toString()===o.toString()&&(n=e),!!n)}),n},n.prototype.getFieldDomain=function(e,t){var r,i=this,o=!1,n=t&&t.feature,a=n&&n.attributes,s=this.typeIdField&&a&&a[this.typeIdField];return null!=s&&this.types&&this.types.some(function(t){return t.id==s&&(r=t.domains&&t.domains[e],r&&"inherited"===r.type&&(r=i._getLayerDomain(e),o=!0),!0)}),o||r||(r=this._getLayerDomain(e)),r},n.prototype.getField=function(e){return this.fieldsIndex.get(e)},n.prototype.queryAttachments=function(e,t){var r=this;return e=te.from(e),this.load().then(function(){if(!r.get("capabilities.data.supportsAttachment"))throw new c(ue,"this layer doesn't support attachments");var t=e.attachmentTypes,i=e.objectIds,o=e.globalIds,n=e.num,a=e.size,s=e.start,p=e.where;if(!r.get("capabilities.operations.supportsQueryAttachments")){var l=i&&i.length>1,u=t&&t.length,d=o&&o.length,y=a&&a.length;if(l||u||d||y||n||s||p)throw new c(ue,"when 'supportsQueryAttachments' is false, only objectIds of length 1 are supported",e)}if(!(i&&i.length||p))throw new c(ue,"'objectIds' or 'where' are required to perform attachment query",e);if(!("queryAttachments"in r.source))throw new c(ue,"Layer source does not support queryAttachments capability",e);return r.source.queryAttachments(e)})},n.prototype.queryFeatures=function(e,t){var r=this;return this.load().then(function(){return r.source.queryFeatures(ie.from(e)||r.createQuery(),t)}).then(function(e){if(e&&e.features)for(var t=0,i=e.features;t<i.length;t++){var o=i[t];o.layer=o.sourceLayer=r}return e})},n.prototype.queryObjectIds=function(e,t){var r=this;return this.load().then(function(){if(r.source.queryObjectIds)return r.source.queryObjectIds(ie.from(e)||r.createQuery(),t);throw new c(ue,"Layer source does not support queryObjectIds capability")})},n.prototype.queryFeatureCount=function(e,t){var r=this;return this.load().then(function(){if(r.source.queryFeatureCount)return r.source.queryFeatureCount(ie.from(e)||r.createQuery(),t);throw new c(ue,"Layer source does not support queryFeatureCount capability")})},n.prototype.queryExtent=function(e,t){var r=this;return this.load().then(function(){if(r.source.queryExtent)return r.source.queryExtent(ie.from(e)||r.createQuery(),t);throw new c(ue,"Layer source does not support queryExtent capability")})},n.prototype.queryRelatedFeatures=function(e,t){var r=this;return this.load().then(function(){if("queryRelatedFeatures"in r.source)return r.source.queryRelatedFeatures(oe.from(e),t);throw new c(ue,"Layer source does not support queryRelatedFeatures capability")})},n.prototype.read=function(e,t){var r=e.featureCollection;if(r){var i=r.layers;i&&1===i.length&&(this.inherited(arguments,[i[0],t]),null!=r.showLegend&&this.inherited(arguments,[{showLegend:r.showLegend},t]))}this.inherited(arguments,[e,t]),t&&"service"===t.origin&&this.revert(["objectIdField","fields","timeInfo"],"service")},n.prototype.write=function(e,t){return t&&("web-scene"===t.origin||"web-map"===t.origin)&&t.messages&&this.isTable?(t.messages.push(new c("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' using a Table source cannot written to web scenes and web maps",{layer:this})),null):this.inherited(arguments)},n.prototype._checkAttachmentSupport=function(e){var t=e.attributes,r=this.objectIdField;return this.get("capabilities.data.supportsAttachment")?e?t?t[r]?void 0:w.reject(new c(ue,"feature is missing the identifying attribute "+r)):w.reject(new c(ue,"'attributes' are required on a feature to query attachments")):w.reject(new c(ue,"A feature is required to add/delete/update attachments")):w.reject(new c(ue,"this layer doesn't support attachments"))},n.prototype._getLayerDomain=function(e){if(!this.fields)return null;var t=null;return this.fields.some(function(r){return r.name===e&&(t=r.domain),!!t}),t},n.prototype._fetchFirstLayerId=function(e){return u(this.url,{query:{f:"json"},responseType:"json",signal:e}).then(function(e){var t=e.data;if(t)return Array.isArray(t.layers)&&t.layers.length>0?t.layers[0].id:Array.isArray(t.tables)&&t.tables.length>0?t.tables[0].id:void 0})},n.prototype._initLayerProperties=function(e){return s(this,void 0,void 0,function(){return a(this,function(t){return this._set("source",e),e.sourceJSON&&(this.sourceJSON=e.sourceJSON,this.read(e.sourceJSON,{origin:"service",url:this.parsedUrl})),this._verifySource(),this._verifyFields(),N.fixRendererFields(this.renderer,this.fields),N.fixTimeInfoFields(this.timeInfo,this.fields),[2,X.loadStyleRenderer(this,{origin:"service"})]})})},n.prototype._verifyFields=function(){var e=this.parsedUrl&&this.parsedUrl.path||"undefined";this.objectIdField||console.log("FeatureLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||this._hasMemorySource()||-1!==e.search(/\/FeatureServer\//i)||this.fields&&this.fields.some(function(e){return"geometry"===e.type})||console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")},n.prototype._fixTemplates=function(e,t){e&&e.forEach(function(e){var r=e.prototype&&e.prototype.attributes;r&&t&&delete r[t]})},n.prototype._verifySource=function(){if(this._hasMemorySource()){if(this.url)throw new c("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url")}else if(!this.url)throw new c("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source")},n.prototype._initMemorySource=function(e){var t=this;e.forEach(function(e){e.layer=t,e.sourceLayer=t}),this._handles.add([e.on("after-add",function(e){e.item.layer=t,e.item.sourceLayer=t}),e.on("after-remove",function(e){e.item.layer=null,e.item.sourceLayer=null})],"fl-source")},n.prototype._resetMemorySource=function(e){e.forEach(function(e){e.layer=null,e.sourceLayer=null}),this._handles.remove("fl-source")},n.prototype._hasMemorySource=function(){return!(this.url||!this.source)},n.prototype._readAttachmentCapabilities=function(e){var t={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1};return e&&Array.isArray(e)&&e.forEach(function(e){var r=le[e.name];r&&(t[r]=!!e.isEnabled)}),t},n.prototype._readDataCapabilities=function(e){return{isVersioned:ae(e,"isDataVersioned",!1),supportsAttachment:ae(e,"hasAttachments",!1),supportsM:ae(e,"hasM",!1),supportsZ:ae(e,"hasZ",!1)}},n.prototype._readMetadataCapabilities=function(e){return{supportsAdvancedFieldProperties:ae(e,"supportsFieldDescriptionProperty",!1)}},n.prototype._readOperationsCapabilities=function(e,t){var r=e?e.toLowerCase().split(",").map(function(e){return e.trim()}):[],i=-1!==r.indexOf("editing"),o=i&&-1!==r.indexOf("create"),n=i&&-1!==r.indexOf("delete"),a=i&&-1!==r.indexOf("update");return i&&!(o||n||a)&&(o=n=a=!0),{supportsCalculate:ae(t,"supportsCalculate",!1),supportsTruncate:ae(t,"supportsTruncate",!1),supportsValidateSql:ae(t,"supportsValidateSql",!1),supportsAdd:o,supportsDelete:n,supportsEditing:i,supportsQuery:-1!==r.indexOf("query"),supportsQueryAttachments:ae(t.advancedQueryCapabilities,"supportsQueryAttachments",!1),supportsResizeAttachments:ae(t,"supportsAttachmentsResizing",!1),supportsSync:-1!==r.indexOf("sync"),supportsUpdate:a,supportsExceedsLimitStatistics:ae(t,"supportsExceedsLimitStatistics",!1)}},n.prototype._readQueryCapabilities=function(e){var t=e.advancedQueryCapabilities,r=e.ownershipBasedAccessControlForFeatures,i=e.archivingInfo,o=(e.supportedQueryFormats||"").split(",").reduce(function(e,t){var r=t.toLowerCase().trim();return r&&e.add(r),e},new Set);return{supportsStatistics:ae(t,"supportsStatistics",e.supportsStatistics),supportsCentroid:ae(t,"supportsReturningGeometryCentroid",!1),supportsDistance:ae(t,"supportsQueryWithDistance",!1),supportsDistinct:ae(t,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:ae(t,"supportsReturningQueryExtent",!1),supportsGeometryProperties:ae(t,"supportsReturningGeometryProperties",!1),supportsHavingClause:ae(t,"supportsHavingClause",!1),supportsOrderBy:ae(t,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:ae(t,"supportsPagination",!1),supportsQuantization:ae(e,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:ae(e,"supportsQuantizationEditMode",!1),supportsQueryGeometry:ae(e,"supportsReturningQueryGeometry",!1),supportsResultType:ae(t,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:ae(t,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:ae(t,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:ae(e,"useStandardizedQueries",!1),supportsQueryByOthers:ae(r,"allowOthersToQuery",!0),supportsHistoricMoment:ae(i,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:o.has("pbf"),supportsDisjointSpatialRelationship:ae(t,"supportsDisjointSpatialRel",!1),supportsCacheHint:ae(t,"supportsQueryWithCacheHint",!1),maxRecordCountFactor:se(e,"maxRecordCountFactor",void 0),maxRecordCount:se(e,"maxRecordCount",void 0),standardMaxRecordCount:se(e,"standardMaxRecordCount",void 0),tileMaxRecordCount:se(e,"tileMaxRecordCount",void 0)}},n.prototype._readQueryRelatedCapabilities=function(e){var t=e.advancedQueryCapabilities,r=ae(t,"supportsAdvancedQueryRelated",!1);return{supportsPagination:ae(t,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r}},n.prototype._readEditingCapabilities=function(e){var t=e.ownershipBasedAccessControlForFeatures;return{supportsGeometryUpdate:ae(e,"allowGeometryUpdates",!0),supportsGlobalId:ae(e,"supportsApplyEditsWithGlobalIds",!1),supportsRollbackOnFailure:ae(e,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:ae(e,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:ae(e,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:ae(t,"allowAnonymousToDelete",!0),supportsDeleteByOthers:ae(t,"allowOthersToDelete",!0),supportsUpdateByAnonymous:ae(t,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:ae(t,"allowOthersToUpdate",!0)}},o([I.property({readOnly:!0,json:{read:!1}})],n.prototype,"capabilities",void 0),o([I.reader("service","capabilities",["advancedQueryCapabilities","allowGeometryUpdates","allowUpdateWithoutMValues","archivingInfo","capabilities","hasAttachments","hasM","hasZ","maxRecordCount","maxRecordCountFactor","ownershipBasedAccessControlForFeatures","standardMaxRecordCount","supportedQueryFormats","supportsAdvancedQueries","supportsApplyEditsWithGlobalIds","supportsAttachmentsByUploadId","supportsAttachmentsResizing","supportsCalculate","supportsCoordinatesQuantization","supportsExceedsLimitStatistics","supportsFieldDescriptionProperty","supportsQuantizationEditMode","supportsRollbackOnFailureParameter","supportsStatistics","supportsTruncate","supportsValidateSql","tileMaxRecordCount","useStandardizedQueries"])],n.prototype,"readCapabilities",null),o([I.property({type:String,json:{read:{source:"layerDefinition.copyrightText"},origins:{service:{read:{source:"copyrightText"}}}}})],n.prototype,"copyright",void 0),o([I.property({type:String,json:{read:{source:"layerDefinition.displayField"},origins:{service:{read:{source:"displayField"}}}}})],n.prototype,"displayField",void 0),o([I.property({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],n.prototype,"definitionExpression",void 0),o([I.property({readOnly:!0,json:{read:ee.read}})],n.prototype,"defaultSymbol",void 0),o([I.property()],n.prototype,"dynamicDataSource",void 0),o([I.property({readOnly:!0})],n.prototype,"editFieldsInfo",void 0),o([I.property({type:Boolean})],n.prototype,"editingEnabled",void 0),o([I.reader(["portal-item","web-map","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],n.prototype,"readEditingEnabled",null),o([I.writer(["portal-item","web-map","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],n.prototype,"writeEditingEnabled",null),o([I.property({readOnly:!0})],n.prototype,"editingInfo",void 0),o([I.reader("editingInfo")],n.prototype,"readEditingInfo",null),o([I.property(L.elevationInfo)],n.prototype,"elevationInfo",void 0),o([I.property({types:{key:"type",base:Q.default,typeMap:{selection:U.default,cluster:q.default}},json:{write:{target:"layerDefinition.featureReduction"}}})],n.prototype,"featureReduction",void 0),o([I.reader("featureReduction",["layerDefinition.featureReduction"])],n.prototype,"readFeatureReduction",null),o([I.writer("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:G.webSceneFeatureReductionTypes}})],n.prototype,"writeWebSceneFeatureReduction",null),o([I.property(r({},ye.fields,{json:{origins:{service:{read:!0}},read:{source:"layerDefinition.fields"}}}))],n.prototype,"fields",void 0),o([I.property({readOnly:!0,dependsOn:["fields"]})],n.prototype,"fieldsIndex",null),o([I.property({type:F,json:{origins:{service:{read:{source:"extent"}}},read:{source:"layerDefinition.extent"}}})],n.prototype,"fullExtent",void 0),o([I.property()],n.prototype,"gdbVersion",void 0),o([I.property({readOnly:!0})],n.prototype,"geometryProperties",void 0),o([I.property({type:["point","polygon","polyline","multipoint","multipatch","mesh"],json:{origins:{service:{read:pe.read}},read:{source:"layerDefinition.geometryType",reader:pe.read}}})],n.prototype,"geometryType",void 0),o([I.property({type:Boolean,json:{origins:{service:{read:!0}},read:{source:"layerDefinition.hasM"}}})],n.prototype,"hasM",void 0),o([I.property({type:Boolean,json:{origins:{service:{read:!0}},read:{source:"layerDefinition.hasZ"}}})],n.prototype,"hasZ",void 0),o([I.property({readOnly:!0,type:D})],n.prototype,"heightModelInfo",void 0),o([I.property({type:Date})],n.prototype,"historicMoment",void 0),o([I.property({json:{origins:{service:{read:!1},"portal-item":{read:!1}}}})],n.prototype,"id",void 0),o([I.property({readOnly:!0})],n.prototype,"isTable",void 0),o([I.reader("service","isTable",["type"]),I.reader("isTable",["layerDefinition.type"])],n.prototype,"readIsTable",null),o([I.property({dependsOn:["loaded","url","source"],readOnly:!0})],n.prototype,"hasService",null),o([I.property(L.labelsVisible)],n.prototype,"labelsVisible",void 0),o([I.property({type:[W],json:{origins:{service:{read:{source:"drawingInfo.labelingInfo",reader:H.reader},write:{target:"drawingInfo.labelingInfo",enabled:!1}}},read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:H.reader},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],n.prototype,"labelingInfo",void 0),o([I.property(L.opacityDrawingInfo)],n.prototype,"opacity",void 0),o([I.property({type:Number,json:{origins:{service:{read:{source:"id"}}},read:!1}})],n.prototype,"layerId",void 0),o([I.property(L.legendEnabled)],n.prototype,"legendEnabled",void 0),o([I.property({type:["show","hide"]})],n.prototype,"listMode",void 0),o([I.property({type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}})],n.prototype,"minScale",void 0),o([I.reader("service","minScale",["minScale","effectiveMinScale"])],n.prototype,"readMinScale",null),o([I.property({type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}})],n.prototype,"maxScale",void 0),o([I.reader("service","maxScale",["maxScale","effectiveMaxScale"])],n.prototype,"readMaxScale",null),o([I.property({type:String})],n.prototype,"globalIdField",void 0),o([I.reader("globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"]),I.reader("service","globalIdField",["globalIdField","fields"])],n.prototype,"readGlobalIdFieldFromService",null),o([I.property({type:String})],n.prototype,"objectIdField",void 0),o([I.reader("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"]),I.reader("service","objectIdField",["objectIdField","fields"])],n.prototype,"readObjectIdFieldFromService",null),o([I.property({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],n.prototype,"operationalLayerType",void 0),o([I.property(ye.outFields)],n.prototype,"outFields",void 0),o([I.property({readOnly:!0,dependsOn:["layerId"]})],n.prototype,"parsedUrl",null),o([I.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],n.prototype,"path",void 0),o([I.property(L.popupEnabled)],n.prototype,"popupEnabled",void 0),o([I.property({type:p,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],n.prototype,"popupTemplate",void 0),o([I.property({readOnly:!0,dependsOn:["fields","title"]})],n.prototype,"defaultPopupTemplate",null),o([I.property({type:[Z],readOnly:!0})],n.prototype,"relationships",void 0),o([I.property({types:l.rendererTypes,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],n.prototype,"renderer",null),o([I.reader("service","renderer",["drawingInfo.renderer","defaultSymbol","type"]),I.reader("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol","layerDefinition.type"])],n.prototype,"readRenderer",null),o([I.writer("renderer")],n.prototype,"writeRenderer",null),o([I.writer("web-scene","renderer",{"layerDefinition.drawingInfo.renderer":{types:l.webSceneRendererTypes}})],n.prototype,"writeWebSceneRenderer",null),o([I.property()],n.prototype,"sourceJSON",void 0),o([I.property({type:Boolean})],n.prototype,"returnM",void 0),o([I.property({type:Boolean})],n.prototype,"returnZ",void 0),o([I.property(L.screenSizePerspectiveEnabled)],n.prototype,"screenSizePerspectiveEnabled",void 0),o([I.property()],n.prototype,"source",null),o([I.cast("source")],n.prototype,"castSource",null),o([I.reader("portal-item","source",["featureSet"]),I.reader("web-map","source",["featureSet"])],n.prototype,"readSource",null),o([I.property({readOnly:!0,json:{origins:{service:{read:{source:"definitionExpression"}}}}})],n.prototype,"serviceDefinitionExpression",void 0),o([I.property({type:x,json:{origins:{service:{read:{source:"extent.spatialReference"}}},read:{source:"layerDefinition.extent.spatialReference"}}})],n.prototype,"spatialReference",void 0),o([I.property({type:[V]})],n.prototype,"templates",void 0),o([I.reader("templates",["editFieldsInfo","creatorField","editorField","templates"])],n.prototype,"readTemplates",null),o([I.property({type:K})],n.prototype,"timeInfo",void 0),o([I.property()],n.prototype,"title",void 0),o([I.reader("service","title",["name"]),I.reader("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],n.prototype,"readTitle",null),o([I.reader("web-map","title",["layerDefinition.name","title"])],n.prototype,"readTitleFromWebMap",null),o([I.property({type:String})],n.prototype,"sublayerTitleMode",void 0),o([I.property({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],n.prototype,"trackIdField",void 0),o([I.property({json:{
read:!1}})],n.prototype,"type",void 0),o([I.property({type:String})],n.prototype,"typeIdField",void 0),o([I.reader("service","typeIdField"),I.reader("typeIdField",["layerDefinition.typeIdField"])],n.prototype,"readTypeIdField",null),o([I.property({type:[z]})],n.prototype,"types",void 0),o([I.reader("service","types",["types"]),I.reader("types",["layerDefinition.types"])],n.prototype,"readTypes",null),o([I.property({type:y.ofType(_.FeatureIndex),readOnly:!0})],n.prototype,"indexes",void 0),o([I.property(L.url)],n.prototype,"url",null),o([I.writer("url")],n.prototype,"writeUrl",null),o([I.property({readOnly:!0})],n.prototype,"userIsAdmin",void 0),o([I.property({json:{origins:{service:{read:!0}},read:!1}})],n.prototype,"version",void 0),o([I.reader("service","version",["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"])],n.prototype,"readVersion",null),o([I.property({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],n.prototype,"visible",void 0),o([I.reader("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],n.prototype,"readVisible",null),n=o([I.subclass("esri.layers.FeatureLayer")],n)}(I.declared(C.TemporalLayer(E.ScaleRangeLayer(j.RefreshableLayer(R.ArcGISService(M.OperationalLayer(A.PortalLayer(v.MultiOriginJSONMixin(T)))))))))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/graphics/sources/MemorySource.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/sources/MemorySource.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../../../Graphic */ "./node_modules/arcgis-js-api/Graphic.js"),__webpack_require__(/*! ../../../core/Collection */ "./node_modules/arcgis-js-api/core/Collection.js"),__webpack_require__(/*! ../../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../../../core/Loadable */ "./node_modules/arcgis-js-api/core/Loadable.js"),__webpack_require__(/*! ../../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../../core/Promise */ "./node_modules/arcgis-js-api/core/Promise.js"),__webpack_require__(/*! ../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../core/requireUtils */ "./node_modules/arcgis-js-api/core/requireUtils.js"),__webpack_require__(/*! ../../../core/workers */ "./node_modules/arcgis-js-api/core/workers.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../core/accessorSupport/ensureType */ "./node_modules/arcgis-js-api/core/accessorSupport/ensureType.js"),__webpack_require__(/*! ../../../tasks/support/FeatureSet */ "./node_modules/arcgis-js-api/tasks/support/FeatureSet.js"),__webpack_require__.dj.m(module)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,i,n,s,a,u,p,l,c,d,y,h,f,g,m,v,_,b,S,F){Object.defineProperty(t,"__esModule",{value:!0});var T=0,R=y.getLogger("esri.layers.graphics.sources.MemorySource"),O=function(t){function i(e){var r=t.call(this,e)||this;return r._idToClientGraphic=null,r.type="memory",r}return r(i,t),i.prototype.load=function(e){var t=h.isSome(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),this.when()},Object.defineProperty(i.prototype,"workerGeometryType",{get:function(){var e=this.layer&&this.layer.geometryType;return e?this._geometryTypeRequiresClientGraphicMapping(e)?"polygon":e:null},enumerable:!0,configurable:!0}),i.prototype.applyEdits=function(e){var t=this;return this.load().then(function(){return t._applyEdits(e)})},i.prototype.openPorts=function(){var e=this;return this.load().then(function(){return e._connection.openPorts()})},i.prototype.queryFeatures=function(e,t){var r=this;return void 0===t&&(t={}),this.load(t).then(function(){return r._connection.invoke("queryFeatures",e?e.toJSON():null,t)}).then(function(e){var t=S.fromJSON(e);if(!r._requiresClientGraphicMapping())return t;for(var o=r.layer.objectIdField,i=0,n=t.features;i<n.length;i++){var s=n[i],a=s.attributes[o],u=r._idToClientGraphic.get(a);u&&(s.geometry=u.geometry)}return t.geometryType=r.layer.geometryType,t})},i.prototype.queryFeaturesJSON=function(e,t){var r=this;return void 0===t&&(t={}),this._requiresClientGraphicMapping()?g.reject(new l("query-features-json:unsupported","Cannot query in JSON format for client only geometry types (mesh and extent)")):this.load(t).then(function(){return r._connection.invoke("queryFeatures",e?e.toJSON():null,t)})},i.prototype.queryFeatureCount=function(e,t){var r=this;return void 0===t&&(t={}),this.load(t).then(function(){return r._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)})},i.prototype.queryObjectIds=function(e,t){var r=this;return void 0===t&&(t={}),this.load(t).then(function(){return r._connection.invoke("queryObjectIds",e?e.toJSON():null,t)})},i.prototype.queryExtent=function(e,t){var r=this;return void 0===t&&(t={}),this.load(t).then(function(){return r._connection.invoke("queryExtent",e?e.toJSON():null,t)}).then(function(e){return{count:e.count,extent:a.Extent.fromJSON(e.extent)}})},i.prototype._applyEdits=function(e){var t=this;if(!this._connection)throw new l("feature-layer-source:edit-failure","Memory source not loaded");var r=this.layer.objectIdField,o=null,i=[],n=[];if(e.addFeatures&&(o=this._prepareAddFeatures(e.addFeatures)),e.deleteFeatures)for(var s=0,a=e.deleteFeatures;s<a.length;s++){var u=a[s];"objectId"in u&&null!=u.objectId?i.push(u.objectId):"attributes"in u&&null!=u.attributes[r]&&i.push(u.attributes[r])}if(e.updateFeatures)for(var p=0,c=e.updateFeatures;p<c.length;p++){var u=c[p];n.push(this._serializeFeature(u))}return this._connection.invoke("applyEdits",{adds:o?o.features:[],updates:n,deletes:i}).then(function(e){var r=e.fullExtent,i=e.featureEditResults;if(t.fullExtent=r,o&&o.finish(i.uidToObjectId),t._idToClientGraphic)for(var n=0,s=i.deleteResults;n<s.length;n++){var a=s[n];a.success&&t._idToClientGraphic.delete(a.objectId)}return t._createEditsResult(i)})},i.prototype._createEditsResult=function(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}},i.prototype._createFeatureEditResult=function(e){var t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new l("feature-layer-source:edit-failure",t.description,{code:t.code}):null}},i.prototype._prepareAddFeatures=function(e){for(var t=new Map,r=new Array(e.length),o=null,i=0;i<e.length;i++){var n=e[i],s=this._serializeFeature(n);!o&&h.isSome(n.geometry)&&(o=n.geometry.type),r[i]=s,t.set(""+s.uid,n)}var a=this;return{features:r,inferredGeometryType:o,finish:function(e){var r=a.sourceJSON.objectIdField;for(var o in e){var i=e[o],n=t.get(o);n&&(n.attributes||(n.attributes={}),-1===i?delete n.attributes[r]:n.attributes[r]=i,a._addIdToClientGraphic(n))}}}},i.prototype._addIdToClientGraphic=function(e){if(this._idToClientGraphic){var t=this.sourceJSON.objectIdField,r=e.attributes&&e.attributes[t];null!=r&&this._idToClientGraphic.set(r,e)}},i.prototype._requiresClientGraphicMapping=function(){var e=this.layer.geometryType||this.sourceJSON.geometryType;return this._geometryTypeRequiresClientGraphicMapping(e)},i.prototype._geometryRequiresClientGraphicMapping=function(e){return this._geometryTypeRequiresClientGraphicMapping(e.type)},i.prototype._geometryTypeRequiresClientGraphicMapping=function(e){return"mesh"===e||"multipatch"===e||"extent"===e},i.prototype._serializeFeature=function(e){var t=e.attributes,r=this._geometryForSerialization(e),o=(T++).toString();return r?{uid:o,geometry:r.toJSON(),attributes:t}:{uid:o,attributes:t}},i.prototype._geometryForSerialization=function(e){var t=e.geometry;return h.isNone(t)?null:this._geometryRequiresClientGraphicMapping(t)?a.Polygon.fromExtent(t.extent):t},i.prototype._startWorker=function(t){return s(this,void 0,void 0,function(){var r,o,i,s,u,p,l,d,y,h,f,_,b,S,T,O;return n(this,function(n){switch(n.label){case 0:return c("esri-webpack")?[4,g.create(function(t){return Promise.all(/*! AMD require */[__webpack_require__.e(6), __webpack_require__.e(7), __webpack_require__.e(18), __webpack_require__.e(20), __webpack_require__.e(26), __webpack_require__.e(30), __webpack_require__.e(40), __webpack_require__.e(102)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./support/MemorySourceWorker */ "./node_modules/arcgis-js-api/layers/graphics/sources/support/MemorySourceWorker.js")]; (t).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})]:[3,2];case 1:n.sent(),n.label=2;case 2:return r=this,[4,v.open(m.getAbsMid("./support/MemorySourceWorker",e,F),{strategy:c("esri-workers-for-memory-layers")?"dedicated":"local",signal:t})];case 3:return r._connection=n.sent(),o=this.layer,i=o.fields,s=o.spatialReference,u=o.objectIdField,p=o.hasM,l=o.hasZ,d=o.timeInfo,y="defaults"===this.layer.originOf("spatialReference"),h=this._prepareAddFeatures(this.items),this.on("before-changes",function(e){R.error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead"),e.preventDefault()}),f={features:h.features,fields:i&&i.map(function(e){return e.toJSON()}),geometryType:a.typeKebabDictionary.toJSON(this.workerGeometryType),hasM:p,hasZ:l,objectIdField:u,spatialReference:y?null:s&&s.toJSON(),timeInfo:d?d.toJSON():null},[4,this._connection.invoke("load",f,{signal:t})];case 4:for(_=n.sent(),b=0,S=_.warnings;b<S.length;b++)T=S[b],R.warn(T.message,{layer:this.layer,warning:T});return _.featureErrors.length&&R.warn("Encountered "+_.featureErrors.length+" validation errors while loading features",_.featureErrors),O=_.layerDefinition,this._geometryTypeRequiresClientGraphicMapping(h.inferredGeometryType)&&(O.geometryType=a.typeKebabDictionary.toJSON(h.inferredGeometryType)),this.sourceJSON=O,this._requiresClientGraphicMapping()&&(this._idToClientGraphic=new Map),h.finish(_.assignedObjectIds),[2]}})})},o([_.shared({Type:u,ensureType:b.ensureType(u)})],i.prototype,"itemType",void 0),o([_.property()],i.prototype,"type",void 0),o([_.property({constructOnly:!0})],i.prototype,"layer",void 0),o([_.property({readOnly:!0,dependsOn:["layer.geometryType"]})],i.prototype,"workerGeometryType",null),o([_.property()],i.prototype,"sourceJSON",void 0),i=o([_.subclass("esri.layers.graphics.sources.MemorySource")],i)}(_.declared(d.LoadableMixin(f.EsriPromiseMixin(p))));t.MemorySource=O,t.default=O}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/FeatureIndex.js":
/*!*******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/FeatureIndex.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,n,p){Object.defineProperty(r,"__esModule",{value:!0});var i=function(e){function r(r){return e.call(this,r)||this}t(r,e),n=r,r.prototype.clone=function(){var e=this,r=e.name,t=e.fields,o=e.isAscending,p=e.isUnique,i=e.description;return new n({name:r,fields:t,isAscending:o,isUnique:p,description:i})};var n;return o([p.property({constructOnly:!0})],r.prototype,"name",void 0),o([p.property({constructOnly:!0})],r.prototype,"fields",void 0),o([p.property({constructOnly:!0})],r.prototype,"isAscending",void 0),o([p.property({constructOnly:!0})],r.prototype,"isUnique",void 0),o([p.property({constructOnly:!0})],r.prototype,"description",void 0),r=n=o([p.subclass("esri.layers.support.FeatureIndex")],r)}(p.declared(n.JSONSupport));r.FeatureIndex=i,r.default=i}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/FeatureReduction.js":
/*!***********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/FeatureReduction.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,p,u){Object.defineProperty(r,"__esModule",{value:!0});var c=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type=null,r}return t(r,e),o([u.property({type:["selection","cluster"],readOnly:!0,json:{read:!1,write:!0}})],r.prototype,"type",void 0),r=o([u.subclass("esri.layers.support.FeatureReduction")],r)}(u.declared(p.JSONSupport));r.FeatureReduction=c,r.default=c}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/FeatureReductionCluster.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/FeatureReductionCluster.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../PopupTemplate */ "./node_modules/arcgis-js-api/PopupTemplate.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/screenUtils */ "./node_modules/arcgis-js-api/core/screenUtils.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,p,o,u,s,c){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t){var r=e.call(this,t)||this;return r.type="cluster",r.clusterRadius=s.toPt("80px"),r.popupTemplate=null,r}return r(t,e),p([c.property({type:["cluster"],readOnly:!0,json:{write:!0}})],t.prototype,"type",void 0),p([c.property({type:Number,cast:function(e){return"auto"===e?e:s.toPt(e)},json:{write:!0}})],t.prototype,"clusterRadius",void 0),p([c.property({type:o,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],t.prototype,"popupTemplate",void 0),t=p([c.subclass("esri.layers.support.FeatureReductionCluster")],t)}(c.declared(u.JSONSupport));t.FeatureReductionCluster=a,t.default=a}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/FeatureReductionSelection.js":
/*!********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/FeatureReductionSelection.js ***!
  \********************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./FeatureReduction */ "./node_modules/arcgis-js-api/layers/support/FeatureReduction.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,c,u){Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(t){var r=e.call(this,t)||this;return r.type="selection",r}return r(t,e),o([c.property({type:["selection"]})],t.prototype,"type",void 0),t=o([c.subclass("esri.layers.support.FeatureReductionSelection")],t)}(c.declared(u.default));t.FeatureReductionSelection=p,t.default=p}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/FeatureTemplate.js":
/*!**********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/FeatureTemplate.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,o,r,t,i,l,n,p){var a=new i.default({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});return function(e){function o(o){var r=e.call(this,o)||this;return r.name=null,r.description=null,r.drawingTool=null,r.prototype=null,r.thumbnail=null,r}return r(o,e),o.prototype.writeDrawingTool=function(e,o){o.drawingTool=a.toJSON(e)},o.prototype.writePrototype=function(e,o){o.prototype=n.fixJson(n.clone(e),!0)},o.prototype.writeThumbnail=function(e,o){o.thumbnail=n.fixJson(n.clone(e))},t([p.property({json:{write:!0}})],o.prototype,"name",void 0),t([p.property({json:{write:!0}})],o.prototype,"description",void 0),t([p.property({json:{read:a.read,write:a.write}})],o.prototype,"drawingTool",void 0),t([p.writer("drawingTool")],o.prototype,"writeDrawingTool",null),t([p.property({json:{write:!0}})],o.prototype,"prototype",void 0),t([p.writer("prototype")],o.prototype,"writePrototype",null),t([p.property({json:{write:!0}})],o.prototype,"thumbnail",void 0),t([p.writer("thumbnail")],o.prototype,"writeThumbnail",null),o=t([p.subclass("esri.layers.support.FeatureTemplate")],o)}(p.declared(l.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/FeatureType.js":
/*!******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/FeatureType.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./domains */ "./node_modules/arcgis-js-api/layers/support/domains.js"),__webpack_require__(/*! ./FeatureTemplate */ "./node_modules/arcgis-js-api/layers/support/FeatureTemplate.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,n,p,a,i,s){return function(e){function r(r){var t=e.call(this,r)||this;return t.id=null,t.name=null,t.domains=null,t.templates=null,t}return t(r,e),r.prototype.readDomains=function(e){var r={};for(var t in e)if(e.hasOwnProperty(t)){var o=e[t];switch(o.type){case"range":r[t]=i.RangeDomain.fromJSON(o);break;case"codedValue":r[t]=i.CodedValueDomain.fromJSON(o);break;case"inherited":r[t]=i.InheritedDomain.fromJSON(o)}}return r},r.prototype.writeDomains=function(e,r){var t={};for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]&&e[o].toJSON());p.fixJson(t),r.domains=t},r.prototype.readTemplates=function(e){return e&&e.map(function(e){return new s(e)})},r.prototype.writeTemplates=function(e,r){r.templates=e&&e.map(function(e){return e.toJSON()})},o([a.property({json:{write:!0}})],r.prototype,"id",void 0),o([a.property({json:{write:!0}})],r.prototype,"name",void 0),o([a.property({json:{write:!0}})],r.prototype,"domains",void 0),o([a.reader("domains")],r.prototype,"readDomains",null),o([a.writer("domains")],r.prototype,"writeDomains",null),o([a.property({json:{write:!0}})],r.prototype,"templates",void 0),o([a.reader("templates")],r.prototype,"readTemplates",null),o([a.writer("templates")],r.prototype,"writeTemplates",null),r=o([a.subclass("esri.layers.support.FeatureType")],r)}(a.declared(n.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/Relationship.js":
/*!*******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/Relationship.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,o,t,n,a,i){var p=new n.default({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"});return function(e){function r(r){var o=e.call(this,r)||this;return o.cardinality=null,o.id=null,o.keyField=null,o.name=null,o.relatedTableId=null,o}return o(r,e),t([i.property({json:{read:p.read,write:p.write}})],r.prototype,"cardinality",void 0),t([i.property({json:{read:!0,write:!0}})],r.prototype,"id",void 0),t([i.property({json:{read:!0,write:!0}})],r.prototype,"keyField",void 0),t([i.property({json:{read:!0,write:!0}})],r.prototype,"name",void 0),t([i.property({json:{read:!0,write:!0}})],r.prototype,"relatedTableId",void 0),r=t([i.subclass("esri.layers.support.Relationship")],r)}(i.declared(a.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/featureReductionUtils.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/featureReductionUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/object */ "./node_modules/arcgis-js-api/core/object.js"),__webpack_require__(/*! ./FeatureReduction */ "./node_modules/arcgis-js-api/layers/support/FeatureReduction.js"),__webpack_require__(/*! ./FeatureReductionCluster */ "./node_modules/arcgis-js-api/layers/support/FeatureReductionCluster.js"),__webpack_require__(/*! ./FeatureReductionSelection */ "./node_modules/arcgis-js-api/layers/support/FeatureReductionSelection.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,u,n,o,a){function c(e,t,r){t=t.layerDefinition||t;var u=t.featureReduction;if(u)switch(u.type){case"selection":return a.default.fromJSON(u);case"cluster":return o.default.fromJSON(u)}return null}function i(e,t,r,n){var o=s(e,{},n);o&&u.setDeepValue(r,o,t)}function s(e,t,u){return e?"selection"!==e.type?(u.messages&&u.messages.push(new r("featureReduction:unsupported","FeatureReduction of type '"+e.declaredClass+"' are not supported in scenes.",{featureReduction:e,context:u})),null):e.write(t,u):null}Object.defineProperty(t,"__esModule",{value:!0}),t.webSceneFeatureReductionTypes={key:"type",base:n.default,typeMap:{selection:a.default}},t.read=c,t.writeTarget=i,t.write=s}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
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

/***/ "./node_modules/arcgis-js-api/layers/support/labelingInfo.js":
/*!*******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/labelingInfo.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./LabelClass */ "./node_modules/arcgis-js-api/layers/support/LabelClass.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,n){function i(e,r,i){var l=this;return e?e.map(function(e){var o=new n;if(o.read(e,i),o.labelExpression){var f=r.fields||r.layerDefinition&&r.layerDefinition.fields||l.fields;o.labelExpression=o.labelExpression.replace(t,function(e,r){return"["+a(r,f)+"]"})}return o}):null}function a(e,r){if(!r)return e;for(var n=e.toLowerCase(),i=0;i<r.length;i++){var a=r[i].name;if(a.toLowerCase()===n)return a}return e}Object.defineProperty(r,"__esModule",{value:!0});var t=/\[([^\[\]]+)\]/gi;r.reader=i}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/styleUtils.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/styleUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../core/asyncUtils */ "./node_modules/arcgis-js-api/core/asyncUtils.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../core/Warning */ "./node_modules/arcgis-js-api/core/Warning.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,n,o,i,s){function a(e,r,a){return n(this,void 0,void 0,function(){var n,l,u;return t(this,function(t){switch(t.label){case 0:return n=e&&e.getAtOrigin&&e.getAtOrigin("renderer",r.origin),n&&"unique-value"===n.type&&n.styleOrigin?[4,o.result(n.populateFromStyle())]:[3,2];case 1:l=t.sent(),i.throwIfAborted(a),!1===l.ok&&(u=l.error,r&&r.messages&&r.messages.push(new s("renderer:style-reference","Failed to create unique value renderer from style reference: "+u.message,{error:u,context:r})),e.clear("renderer",r.origin)),t.label=2;case 2:return[2]}})})}Object.defineProperty(r,"__esModule",{value:!0}),r.loadStyleRenderer=a}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/AttachmentQuery.js":
/*!*********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/AttachmentQuery.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../core/accessorSupport/ensureType */ "./node_modules/arcgis-js-api/core/accessorSupport/ensureType.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,r,o,s,n,p,a){var i=function(t){function e(e){var r=t.call(this,e)||this;return r.attachmentTypes=null,r.attachmentsWhere=null,r.keywords=null,r.globalIds=null,r.name=null,r.num=null,r.objectIds=null,r.returnMetadata=!1,r.size=null,r.start=null,r.where=null,r}r(e,t),s=e,e.prototype.writeStart=function(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10},e.prototype.clone=function(){return new s(n.clone({attachmentTypes:this.attachmentTypes,attachmentsWhere:this.attachmentsWhere,keywords:this.keywords,where:this.where,globalIds:this.globalIds,name:this.name,num:this.num,objectIds:this.objectIds,returnMetadata:this.returnMetadata,size:this.size,start:this.start}))};var s;return o([p.property({type:[String],json:{write:!0}})],e.prototype,"attachmentTypes",void 0),o([p.property({type:String,json:{read:{source:"attachmentsDefinitionExpression"},write:{target:"attachmentsDefinitionExpression"}}})],e.prototype,"attachmentsWhere",void 0),o([p.property({type:[String],json:{write:!0}})],e.prototype,"keywords",void 0),o([p.property({type:[Number],json:{write:!0}})],e.prototype,"globalIds",void 0),o([p.property({json:{write:!0}})],e.prototype,"name",void 0),o([p.property({type:Number,json:{read:{source:"resultRecordCount"}}})],e.prototype,"num",void 0),o([p.property({type:[Number],json:{write:!0}})],e.prototype,"objectIds",void 0),o([p.property({type:Boolean,json:{default:!1,write:!0}})],e.prototype,"returnMetadata",void 0),o([p.property({type:[Number],json:{write:!0}})],e.prototype,"size",void 0),o([p.property({type:Number,json:{read:{source:"resultOffset"}}})],e.prototype,"start",void 0),o([p.writer("start"),p.writer("num")],e.prototype,"writeStart",null),o([p.property({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],e.prototype,"where",void 0),e=s=o([p.subclass("esri.tasks.support.AttachmentQuery")],e)}(p.declared(s.JSONSupport));return i.from=a.default(i),i}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/RelationshipQuery.js":
/*!***********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/RelationshipQuery.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../core/accessorSupport/ensureType */ "./node_modules/arcgis-js-api/core/accessorSupport/ensureType.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,o,r,i,p,s,n,l){var u=function(e){function t(t){var o=e.call(this,t)||this;return o.gdbVersion=null,o.geometryPrecision=void 0,o.historicMoment=null,o.maxAllowableOffset=void 0,o.objectIds=null,o.outFields=null,o.outSpatialReference=null,o.relationshipId=void 0,o.returnGeometry=!1,o.source=null,o.where=null,o}o(t,e),p=t,t.prototype._writeHistoricMoment=function(e,t){t.historicMoment=e&&e.getTime()},t.prototype.clone=function(){return new p(s.clone({gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&this.historicMoment.getTime(),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,returnGeometry:this.returnGeometry,source:this.source,where:this.where}))};var p;return r([n.property({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),r([n.property({type:Number,json:{write:!0}})],t.prototype,"geometryPrecision",void 0),r([n.property({type:Date})],t.prototype,"historicMoment",void 0),r([n.writer("historicMoment")],t.prototype,"_writeHistoricMoment",null),r([n.property({type:Number,json:{write:!0}})],t.prototype,"maxAllowableOffset",void 0),r([n.property({type:[Number],json:{write:!0}})],t.prototype,"objectIds",void 0),r([n.property({type:[String],json:{write:!0}})],t.prototype,"outFields",void 0),r([n.property({type:i.SpatialReference,json:{read:{source:"outSR"},write:{target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),r([n.property({json:{write:!0}})],t.prototype,"relationshipId",void 0),r([n.property({json:{write:!0}})],t.prototype,"returnGeometry",void 0),r([n.property({json:{write:!0}})],t.prototype,"source",void 0),r([n.property({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],t.prototype,"where",void 0),t=p=r([n.subclass("esri.tasks.support.RelationshipQuery")],t)}(n.declared(p.JSONSupport));return u.from=l.default(u),u}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=17.js.map