(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/core/uuid":"./node_modules/arcgis-js-api/core/uuid.js",
	"arcgis-js-api/layers/BuildingSceneLayer":"./node_modules/arcgis-js-api/layers/BuildingSceneLayer.js",
	"arcgis-js-api/layers/buildingSublayers/BuildingComponentSublayer":"./node_modules/arcgis-js-api/layers/buildingSublayers/BuildingComponentSublayer.js",
	"arcgis-js-api/layers/buildingSublayers/BuildingGroupSublayer":"./node_modules/arcgis-js-api/layers/buildingSublayers/BuildingGroupSublayer.js",
	"arcgis-js-api/layers/buildingSublayers/BuildingSublayer":"./node_modules/arcgis-js-api/layers/buildingSublayers/BuildingSublayer.js",
	"arcgis-js-api/layers/support/BuildingFilter":"./node_modules/arcgis-js-api/layers/support/BuildingFilter.js",
	"arcgis-js-api/layers/support/BuildingFilterAuthoringInfo":"./node_modules/arcgis-js-api/layers/support/BuildingFilterAuthoringInfo.js",
	"arcgis-js-api/layers/support/BuildingFilterAuthoringInfoBlock":"./node_modules/arcgis-js-api/layers/support/BuildingFilterAuthoringInfoBlock.js",
	"arcgis-js-api/layers/support/BuildingFilterAuthoringInfoCheckbox":"./node_modules/arcgis-js-api/layers/support/BuildingFilterAuthoringInfoCheckbox.js",
	"arcgis-js-api/layers/support/BuildingFilterAuthoringInfoType":"./node_modules/arcgis-js-api/layers/support/BuildingFilterAuthoringInfoType.js",
	"arcgis-js-api/layers/support/BuildingFilterBlock":"./node_modules/arcgis-js-api/layers/support/BuildingFilterBlock.js",
	"arcgis-js-api/layers/support/BuildingFilterMode":"./node_modules/arcgis-js-api/layers/support/BuildingFilterMode.js",
	"arcgis-js-api/layers/support/BuildingFilterModeSolid":"./node_modules/arcgis-js-api/layers/support/BuildingFilterModeSolid.js",
	"arcgis-js-api/layers/support/BuildingFilterModeWireFrame":"./node_modules/arcgis-js-api/layers/support/BuildingFilterModeWireFrame.js",
	"esri/layers/support/Field":"./node_modules/arcgis-js-api/layers/support/Field.js",
	"arcgis-js-api/layers/support/Field":"./node_modules/arcgis-js-api/layers/support/Field.js",
	"arcgis-js-api/layers/support/fieldProperties":"./node_modules/arcgis-js-api/layers/support/fieldProperties.js",
	"arcgis-js-api/layers/support/fieldType":"./node_modules/arcgis-js-api/layers/support/fieldType.js",
	"esri/renderers":"./node_modules/arcgis-js-api/renderers.js",
	"arcgis-js-api/renderers":"./node_modules/arcgis-js-api/renderers.js",
	"esri/renderers/visualVariables/support/sizeVariableUtils":"./node_modules/arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils.js",
	"arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils":"./node_modules/arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/arcgis-js-api/core/uuid.js":
/*!*************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/uuid.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r){function n(){var e=t.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;var r=function(r){return e[r].toString(16)};return r(0)+r(1)+"-"+r(2)+"-"+r(3)+"-"+r(4)+"-"+r(5)+r(6)+r(7)}Object.defineProperty(r,"__esModule",{value:!0}),r.generateUUID=n;var t=window.crypto||window.msCrypto}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/BuildingSceneLayer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/BuildingSceneLayer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../core/Collection */ "./node_modules/arcgis-js-api/core/Collection.js"),__webpack_require__(/*! ../core/CollectionFlattener */ "./node_modules/arcgis-js-api/core/CollectionFlattener.js"),__webpack_require__(/*! ../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../core/loadAll */ "./node_modules/arcgis-js-api/core/loadAll.js"),__webpack_require__(/*! ../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../core/MultiOriginJSONSupport */ "./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js"),__webpack_require__(/*! ../geometry/SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js"),__webpack_require__(/*! ./Layer */ "./node_modules/arcgis-js-api/layers/Layer.js"),__webpack_require__(/*! ./buildingSublayers/BuildingComponentSublayer */ "./node_modules/arcgis-js-api/layers/buildingSublayers/BuildingComponentSublayer.js"),__webpack_require__(/*! ./buildingSublayers/BuildingGroupSublayer */ "./node_modules/arcgis-js-api/layers/buildingSublayers/BuildingGroupSublayer.js"),__webpack_require__(/*! ./mixins/ArcGISService */ "./node_modules/arcgis-js-api/layers/mixins/ArcGISService.js"),__webpack_require__(/*! ./mixins/OperationalLayer */ "./node_modules/arcgis-js-api/layers/mixins/OperationalLayer.js"),__webpack_require__(/*! ./mixins/PortalLayer */ "./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js"),__webpack_require__(/*! ./mixins/ScaleRangeLayer */ "./node_modules/arcgis-js-api/layers/mixins/ScaleRangeLayer.js"),__webpack_require__(/*! ./mixins/SceneService */ "./node_modules/arcgis-js-api/layers/mixins/SceneService.js"),__webpack_require__(/*! ./support/BuildingFilter */ "./node_modules/arcgis-js-api/layers/support/BuildingFilter.js"),__webpack_require__(/*! ./support/commonProperties */ "./node_modules/arcgis-js-api/layers/support/commonProperties.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,i,n,l,a,s,p,u,y,c,d,v,b,f,h,S,g,O,w,m,I,L,x,E,B){var j=c.getLogger("esri.layers.BuildingSceneLayer"),A=a.ofType(E),P=u.clone(O.sublayersProperty);return P.json.origins["web-scene"]={type:[g],write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}},function(e){function r(r){var t=e.call(this,r)||this;return t.operationalLayerType="BuildingSceneLayer",t.allSublayers=new s({root:t,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return"building-group"===e.type?e.sublayers:null}}),t.sublayers=null,t.sublayerOverrides=null,t.filters=new A,t.activeFilterId=null,t.type="building-scene",t}return o(r,e),r.prototype.normalizeCtorArgs=function(e){return"string"==typeof e?{url:e}:e},r.prototype.readSublayers=function(e,r,t){var o=this,i=O.readSublayers(e,r,t);return O.forEachSublayer(i,function(e){return e.layer=o}),this.sublayerOverrides&&(this.applySublayerOverrides(i,this.sublayerOverrides),this.sublayerOverrides=null),i},r.prototype.applySublayerOverrides=function(e,r){var t=r.overrides,o=r.context;O.forEachSublayer(e,function(e){return e.read(t.get(e.id),o)})},r.prototype.readSublayerOverrides=function(e,r){for(var t=new Map,o=0,i=e;o<i.length;o++){var n=i[o];null!=n&&"object"==typeof n&&"number"==typeof n.id?t.set(n.id,n):r.messages.push(new p("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:n}))}return{overrides:t,context:r}},r.prototype.writeSublayerOverrides=function(e,r,t){var o=[];O.forEachSublayer(this.sublayers,function(e){var r=e.write({},t);Object.keys(r).length>1&&o.push(r)}),o.length>0&&(r.sublayers=o)},r.prototype.writeUnappliedOverrides=function(e,r){r.sublayers=[],e.overrides.forEach(function(e){r.sublayers.push(u.clone(e))})},r.prototype.write=function(e,r){return e=this.inherited(arguments),r&&"web-scene"===r.origin&&(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e},r.prototype.read=function(e,r){if(this.inherited(arguments),r&&"web-scene"===r.origin&&null!=e&&Array.isArray(e.sublayers)){var t=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,t):this.sublayerOverrides=t}},Object.defineProperty(r.prototype,"elevationInfo",{set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()},enumerable:!0,configurable:!0}),r.prototype.load=function(e){var r=this,t=d.isSome(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).then(function(){return r._fetchService(t)},function(){return r._fetchService(t)});return this.addResolvingPromise(o),this.when()},r.prototype.loadAll=function(){var e=this;return y.loadAll(this,function(r){return O.forEachSublayer(e.sublayers,function(e){"building-group"!==e.type&&r(e)})})},r.prototype.validateLayer=function(e){if(!e.layerType||"Building"!==e.layerType)throw new p("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})},r.prototype._validateElevationInfo=function(){var e=this.elevationInfo;e&&("absolute-height"!==e.mode&&j.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&j.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))},i([b.property({type:["BuildingSceneLayer"]})],r.prototype,"operationalLayerType",void 0),i([b.property({readOnly:!0})],r.prototype,"allSublayers",void 0),i([b.property(P)],r.prototype,"sublayers",void 0),i([b.reader("service","sublayers")],r.prototype,"readSublayers",null),i([b.property({type:A,nonNullable:!0,json:{write:!0}})],r.prototype,"filters",void 0),i([b.property({type:String,json:{write:!0}})],r.prototype,"activeFilterId",void 0),i([b.property(B.readOnlyService(f))],r.prototype,"fullExtent",void 0),i([b.property({type:["show","hide","hide-children"]})],r.prototype,"listMode",void 0),i([b.property(B.readOnlyService(h))],r.prototype,"spatialReference",void 0),i([b.property(B.elevationInfo)],r.prototype,"elevationInfo",null),i([b.property({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),r=i([b.subclass("esri.layers.BuildingSceneLayer")],r)}(b.declared(L.ScaleRangeLayer(x.SceneService(w.ArcGISService(m.OperationalLayer(I.PortalLayer(v.MultiOriginJSONMixin(S))))))))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/buildingSublayers/BuildingComponentSublayer.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/buildingSublayers/BuildingComponentSublayer.js ***!
  \******************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../PopupTemplate */ "./node_modules/arcgis-js-api/PopupTemplate.js"),__webpack_require__(/*! ../../renderers */ "./node_modules/arcgis-js-api/renderers.js"),__webpack_require__(/*! ../../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../../core/Loadable */ "./node_modules/arcgis-js-api/core/Loadable.js"),__webpack_require__(/*! ../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../core/Promise */ "./node_modules/arcgis-js-api/core/Promise.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js"),__webpack_require__(/*! ../../geometry/SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js"),__webpack_require__(/*! ./BuildingSublayer */ "./node_modules/arcgis-js-api/layers/buildingSublayers/BuildingSublayer.js"),__webpack_require__(/*! ../support/commonProperties */ "./node_modules/arcgis-js-api/layers/support/commonProperties.js"),__webpack_require__(/*! ../support/fieldProperties */ "./node_modules/arcgis-js-api/layers/support/fieldProperties.js"),__webpack_require__(/*! ../support/FieldsIndex */ "./node_modules/arcgis-js-api/layers/support/FieldsIndex.js"),__webpack_require__(/*! ../support/I3SLayerDefinitions */ "./node_modules/arcgis-js-api/layers/support/I3SLayerDefinitions.js"),__webpack_require__(/*! ../../renderers/support/jsonUtils */ "./node_modules/arcgis-js-api/renderers/support/jsonUtils.js"),__webpack_require__(/*! ../../support/popupUtils */ "./node_modules/arcgis-js-api/support/popupUtils.js"),__webpack_require__(/*! ../../symbols/support/ElevationInfo */ "./node_modules/arcgis-js-api/symbols/support/ElevationInfo.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,p,i,n,l,a,s,d,y,u,f,c,m,v,g,h,b,O,S,x,I){var P=h.defineFieldProperties();return function(e){function r(r){var t=e.call(this,r)||this;return t.type="building-component",t.nodePages=null,t.materialDefinitions=null,t.textureSetDefinitions=null,t.geometryDefinitions=null,t.serviceUpdateTimeStamp=null,t.fields=null,t.outFields=null,t.listMode="show",t.renderer=null,t.definitionExpression=null,t.popupEnabled=!0,t.popupTemplate=null,t.geometryType="mesh",t.profile="mesh-pyramids",t}return o(r,e),Object.defineProperty(r.prototype,"parsedUrl",{get:function(){return this.layer?{path:this.layer.parsedUrl.path+"/sublayers/"+this.id,query:this.layer.parsedUrl.query}:null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"fieldsIndex",{get:function(){return new b(this.fields)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"objectIdField",{get:function(){if(null!=this.fields)for(var e=0,r=this.fields;e<r.length;e++){var t=r[e];if("oid"===t.type)return t.name}return null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"defaultPopupTemplate",{get:function(){return this.createPopupTemplate()},enumerable:!0,configurable:!0}),r.prototype.load=function(e){var r=y.isSome(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),this.when()},r.prototype.createPopupTemplate=function(e){return x.createPopupTemplate(this,e)},r.prototype._fetchService=function(e){return n(this,void 0,void 0,function(){var r,t;return i(this,function(o){switch(o.label){case 0:return[4,s(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e})];case 1:return r=o.sent(),t=r.data,this.read(t,{origin:"service",url:this.parsedUrl}),[2]}})})},r.prototype.getField=function(e){return this.fieldsIndex.get(e)},r.prototype.getFieldDomain=function(e){var r=this.getField(e);return r&&r.domain?r.domain:null},p([f.property({readOnly:!0,dependsOn:["layer","id"]})],r.prototype,"parsedUrl",null),p([f.property({type:O.I3SNodePageDefinition,readOnly:!0})],r.prototype,"nodePages",void 0),p([f.property({type:[O.I3SMaterialDefinition],readOnly:!0})],r.prototype,"materialDefinitions",void 0),p([f.property({type:[O.I3STextureSetDefinition],readOnly:!0})],r.prototype,"textureSetDefinitions",void 0),p([f.property({type:[O.I3SGeometryDefinition],readOnly:!0})],r.prototype,"geometryDefinitions",void 0),p([f.property({readOnly:!0})],r.prototype,"serviceUpdateTimeStamp",void 0),p([f.property({readOnly:!0})],r.prototype,"store",void 0),p([f.property({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],r.prototype,"rootNode",void 0),p([f.property({readOnly:!0})],r.prototype,"attributeStorageInfo",void 0),p([f.property(P.fields)],r.prototype,"fields",void 0),p([f.property({readOnly:!0,dependsOn:["fields"]})],r.prototype,"fieldsIndex",null),p([f.property(P.outFields)],r.prototype,"outFields",void 0),p([f.property({type:String,dependsOn:["fields"],readOnly:!0})],r.prototype,"objectIdField",null),p([f.property({readOnly:!0,type:c,aliasOf:"layer.fullExtent"})],r.prototype,"fullExtent",void 0),p([f.property({readOnly:!0,type:m,aliasOf:"layer.spatialReference"})],r.prototype,"spatialReference",void 0),p([f.property({readOnly:!0,aliasOf:"layer.version"})],r.prototype,"version",void 0),p([f.property({readOnly:!0,type:I,aliasOf:"layer.elevationInfo"})],r.prototype,"elevationInfo",void 0),p([f.property({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],r.prototype,"minScale",void 0),p([f.property({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],r.prototype,"maxScale",void 0),p([f.property({type:["hide","show"],json:{write:!0}})],r.prototype,"listMode",void 0),p([f.property({types:a.webSceneRendererTypes,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:S.read}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:S.read},write:{target:"layerDefinition.drawingInfo.renderer"}},value:null})],r.prototype,"renderer",void 0),p([f.property({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],r.prototype,"definitionExpression",void 0),p([f.property(g.popupEnabled)],r.prototype,"popupEnabled",void 0),p([f.property({type:l,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],r.prototype,"popupTemplate",void 0),p([f.property({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],r.prototype,"normalReferenceFrame",void 0),p([f.property({readOnly:!0,json:{read:!1},dependsOn:["fields","title"]})],r.prototype,"defaultPopupTemplate",null),r=p([f.subclass("esri.layers.buildingSublayers.BuildingComponentSublayer")],r)}(f.declared(d.LoadableMixin(u.EsriPromiseMixin(v))))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/buildingSublayers/BuildingGroupSublayer.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/buildingSublayers/BuildingGroupSublayer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/Collection */ "./node_modules/arcgis-js-api/core/Collection.js"),__webpack_require__(/*! ../../core/loadAll */ "./node_modules/arcgis-js-api/core/loadAll.js"),__webpack_require__(/*! ../../core/Warning */ "./node_modules/arcgis-js-api/core/Warning.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./BuildingComponentSublayer */ "./node_modules/arcgis-js-api/layers/buildingSublayers/BuildingComponentSublayer.js"),__webpack_require__(/*! ./BuildingSublayer */ "./node_modules/arcgis-js-api/layers/buildingSublayers/BuildingSublayer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,n,o,t,u,i,s,l,a,p){function c(e,r,n){if(e&&Array.isArray(e))return new u(e.map(function(e){var r=d(e);if(r){var o=new r;return o.read(e,n),o}n&&n.messages&&e&&n.messages.push(new s("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:n}))}))}function d(e){return"group"===e.layerType?b:a}var y={type:u,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:c}}},read:!1}},b=function(e){function r(r){var n=e.call(this,r)||this;return n.type="building-group",n.listMode="show",n.sublayers=null,n}o(r,e),n=r,r.prototype.loadAll=function(){var e=this;return i.loadAllChildren(this,function(r){return n.forEachSublayer(e.sublayers,function(e){"building-group"!==e.type&&r(e)})})};var n;return t([l.property({type:["hide","show","hide-children"],json:{write:!0}})],r.prototype,"listMode",void 0),t([l.property(y)],r.prototype,"sublayers",void 0),r=n=t([l.subclass("esri.layers.buildingSublayers.BuildingGroupSublayer")],r)}(l.declared(p));return function(e){function r(e,n){e.forEach(function(e){n(e),"building-group"===e.type&&r(e.sublayers,n)})}e.sublayersProperty=y,e.readSublayers=c,e.forEachSublayer=r}(b||(b={})),b}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/buildingSublayers/BuildingSublayer.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/buildingSublayers/BuildingSublayer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/Identifiable */ "./node_modules/arcgis-js-api/core/Identifiable.js"),__webpack_require__(/*! ../../core/MultiOriginJSONSupport */ "./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../support/commonProperties */ "./node_modules/arcgis-js-api/layers/support/commonProperties.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,i,o,p,n,l,a){return function(e){function r(r){var t=e.call(this,r)||this;return t.title="",t.id=-1,t.modelName=null,t.visible=!0,t.opacity=1,t}return i(r,e),r.prototype.readTitle=function(e,r){return"string"==typeof r.alias?r.alias:"string"==typeof r.name?r.name:""},r.prototype.readIdOnlyOnce=function(e){return-1!==this.id?this.id:"number"==typeof e?e:void 0},o([l.property({type:String,json:{origins:{"web-scene":{write:!0}}}})],r.prototype,"title",void 0),o([l.reader("service","title",["alias","name"])],r.prototype,"readTitle",null),o([l.property()],r.prototype,"layer",void 0),o([l.property({type:Number,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],r.prototype,"id",void 0),o([l.reader("service","id")],r.prototype,"readIdOnlyOnce",null),o([l.property(a.readOnlyService(String))],r.prototype,"modelName",void 0),o([l.property({type:Boolean,json:{read:{source:"visibility"},write:{target:"visibility"}}})],r.prototype,"visible",void 0),o([l.property({type:Number,json:{write:!0}})],r.prototype,"opacity",void 0),r=o([l.subclass("esri.layers.buildingSublayers.BuildingSublayer")],r)}(l.declared(p.IdentifiableMixin(n.MultiOriginJSONSupport)))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/BuildingFilter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/BuildingFilter.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/Collection */ "./node_modules/arcgis-js-api/core/Collection.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/uuid */ "./node_modules/arcgis-js-api/core/uuid.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./BuildingFilterAuthoringInfo */ "./node_modules/arcgis-js-api/layers/support/BuildingFilterAuthoringInfo.js"),__webpack_require__(/*! ./BuildingFilterAuthoringInfoCheckbox */ "./node_modules/arcgis-js-api/layers/support/BuildingFilterAuthoringInfoCheckbox.js"),__webpack_require__(/*! ./BuildingFilterBlock */ "./node_modules/arcgis-js-api/layers/support/BuildingFilterBlock.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,i,n,p,l,c,s,u,d){var a=i.ofType(d);return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.filterBlocks=null,r.id=l.generateUUID(),r.name=null,r}t(r,e),i=r,r.prototype.clone=function(){return new i({description:this.description,filterBlocks:p.clone(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:p.clone(this.filterAuthoringInfo)})};var i;return o([c.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),o([c.property({type:a,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"filterBlocks",void 0),o([c.property({types:{key:"type",base:s,typeMap:{checkbox:u}},json:{read:function(e){switch(e&&e.type){case"checkbox":return u.fromJSON(e);default:return null}},write:!0}})],r.prototype,"filterAuthoringInfo",void 0),o([c.property({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"id",void 0),o([c.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"name",void 0),r=i=o([c.subclass("esri.layers.support.BuildingFilter")],r)}(c.declared(n.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/BuildingFilterAuthoringInfo.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/BuildingFilterAuthoringInfo.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(r,e,t,o,p,n){return function(r){function e(){var e=null!==r&&r.apply(this,arguments)||this;return e.type=null,e}return t(e,r),o([n.property({type:String,readOnly:!0,json:{write:!0}})],e.prototype,"type",void 0),e=o([n.subclass("esri.layers.support.BuildingFilterAuthoringInfo")],e)}(n.declared(p.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/BuildingFilterAuthoringInfoBlock.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/BuildingFilterAuthoringInfoBlock.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/Collection */ "./node_modules/arcgis-js-api/core/Collection.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./BuildingFilterAuthoringInfoType */ "./node_modules/arcgis-js-api/layers/support/BuildingFilterAuthoringInfoType.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,o,t,p,n,i,l,c){var u=p.ofType(c);return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}o(r,e),p=r,r.prototype.clone=function(){return new p({filterTypes:i.clone(this.filterTypes)})};var p;return t([l.property({type:u,json:{write:!0}})],r.prototype,"filterTypes",void 0),r=p=t([l.subclass("esri.layers.support.BuildingFilterAuthoringInfoBlock")],r)}(l.declared(n.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/BuildingFilterAuthoringInfoCheckbox.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/BuildingFilterAuthoringInfoCheckbox.js ***!
  \******************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/Collection */ "./node_modules/arcgis-js-api/core/Collection.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./BuildingFilterAuthoringInfo */ "./node_modules/arcgis-js-api/layers/support/BuildingFilterAuthoringInfo.js"),__webpack_require__(/*! ./BuildingFilterAuthoringInfoBlock */ "./node_modules/arcgis-js-api/layers/support/BuildingFilterAuthoringInfoBlock.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,o,t,n,i,c,p,l){var u=n.ofType(l);return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="checkbox",r}o(r,e),n=r,r.prototype.clone=function(){return new n({filterBlocks:i.clone(this.filterBlocks)})};var n;return t([c.property({type:["checkbox"]})],r.prototype,"type",void 0),t([c.property({type:u,json:{write:!0}})],r.prototype,"filterBlocks",void 0),r=n=t([c.subclass("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],r)}(c.declared(p))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/BuildingFilterAuthoringInfoType.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/BuildingFilterAuthoringInfoType.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,p,l,i){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.filterType=null,r.filterValues=null,r}t(r,e),p=r,r.prototype.clone=function(){return new p({filterType:this.filterType,filterValues:l.clone(this.filterValues)})};var p;return o([i.property({type:String,json:{write:!0}})],r.prototype,"filterType",void 0),o([i.property({type:[String],json:{write:!0}})],r.prototype,"filterValues",void 0),r=p=o([i.subclass("esri.layers.support.BuildingFilterAuthoringInfoType")],r)}(i.declared(p.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/BuildingFilterBlock.js":
/*!**************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/BuildingFilterBlock.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./BuildingFilterMode */ "./node_modules/arcgis-js-api/layers/support/BuildingFilterMode.js"),__webpack_require__(/*! ./BuildingFilterModeSolid */ "./node_modules/arcgis-js-api/layers/support/BuildingFilterModeSolid.js"),__webpack_require__(/*! ./BuildingFilterModeWireFrame */ "./node_modules/arcgis-js-api/layers/support/BuildingFilterModeWireFrame.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,i,o,l,n,p,s,d){var u={types:{key:"type",base:p,typeMap:{solid:s,"wire-frame":d}},json:{read:function(e){switch(e&&e.type){case"solid":return s.fromJSON(e);case"wireFrame":return d.fromJSON(e);default:return null}},write:{enabled:!0,isRequired:!0}}};return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.filterExpression=null,r.filterMode=new s,r.title="",r}t(r,e),o=r,r.prototype.clone=function(){return new o({filterExpression:this.filterExpression,filterMode:l.clone(this.filterMode),title:this.title})};var o;return i([n.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"filterExpression",void 0),i([n.property(u)],r.prototype,"filterMode",void 0),i([n.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"title",void 0),r=o=i([n.subclass("esri.layers.support.BuildingFilterBlock")],r)}(n.declared(o.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/BuildingFilterMode.js":
/*!*************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/BuildingFilterMode.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(r,e,t,o,p,s){return function(r){function e(){return null!==r&&r.apply(this,arguments)||this}return t(e,r),o([s.property({readOnly:!0,json:{read:!1}})],e.prototype,"type",void 0),e=o([s.subclass("esri.layers.support.BuildingFilterMode")],e)}(s.declared(p.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/BuildingFilterModeSolid.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/BuildingFilterModeSolid.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./BuildingFilterMode */ "./node_modules/arcgis-js-api/layers/support/BuildingFilterMode.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,p,n){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="solid",r}t(r,e),n=r,r.prototype.clone=function(){return new n};var n;return o([p.property({type:["solid"],readOnly:!0,json:{write:!0}})],r.prototype,"type",void 0),r=n=o([p.subclass("esri.layers.support.BuildingFilterModeSolid")],r)}(p.declared(n))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/BuildingFilterModeWireFrame.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/BuildingFilterModeWireFrame.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./BuildingFilterMode */ "./node_modules/arcgis-js-api/layers/support/BuildingFilterMode.js"),__webpack_require__(/*! ../../symbols/edges/utils */ "./node_modules/arcgis-js-api/symbols/edges/utils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,s,i,n,p){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="wire-frame",r.edges=null,r}t(r,e),n=r,r.prototype.clone=function(){return new n({edges:s.clone(this.edges)})};var n;return o([i.enumeration.serializable()({wireFrame:"wire-frame"})],r.prototype,"type",void 0),o([i.property(p.symbol3dEdgesProperty)],r.prototype,"edges",void 0),r=n=o([i.subclass("esri.layers.support.BuildingFilterModeWireFrame")],r)}(i.declared(n))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/Field.js":
/*!************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/Field.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../core/accessorSupport/ensureType */ "./node_modules/arcgis-js-api/core/accessorSupport/ensureType.js"),__webpack_require__(/*! ./domains */ "./node_modules/arcgis-js-api/layers/support/domains.js"),__webpack_require__(/*! ./fieldType */ "./node_modules/arcgis-js-api/layers/support/fieldType.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,n,i,p,a,l,d){var u=new n.default({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});return function(e){function t(t){var r=e.call(this,t)||this;return r.alias=null,r.defaultValue=void 0,r.description=null,r.domain=null,r.editable=!0,r.length=-1,r.name=null,r.nullable=!0,r.type=null,r.valueType=null,r}r(t,e),n=t,t.prototype.readDescription=function(e,t){var r,o=t.description;try{r=JSON.parse(o)}catch(e){}return r?r.value:null},t.prototype.readValueType=function(e,t){var r,o=t.description;try{r=JSON.parse(o)}catch(e){}return r?u.fromJSON(r.fieldValueType):null},t.prototype.clone=function(){return new n({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})};var n;return o([p.property({type:String,json:{write:!0}})],t.prototype,"alias",void 0),o([p.property({type:[String,Number],json:{write:{allowNull:!0}}})],t.prototype,"defaultValue",void 0),o([p.property()],t.prototype,"description",void 0),o([p.reader("description")],t.prototype,"readDescription",null),o([p.property({types:l.types,json:{read:{reader:l.fromJSON},write:!0}})],t.prototype,"domain",void 0),o([p.property({type:Boolean,json:{write:!0}})],t.prototype,"editable",void 0),o([p.property({type:a.Integer,json:{write:!0}})],t.prototype,"length",void 0),o([p.property({type:String,json:{write:!0}})],t.prototype,"name",void 0),o([p.property({type:Boolean,json:{write:!0}})],t.prototype,"nullable",void 0),o([p.enumeration.serializable()(d.kebabDict)],t.prototype,"type",void 0),o([p.property()],t.prototype,"valueType",void 0),o([p.reader("valueType",["description"])],t.prototype,"readValueType",null),t=n=o([p.subclass("esri.layers.support.Field")],t)}(p.declared(i.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
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

/***/ "./node_modules/arcgis-js-api/layers/support/fieldType.js":
/*!****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/fieldType.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,i,l){Object.defineProperty(i,"__esModule",{value:!0}),i.kebabDict=new l.default({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
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

/***/ })

}]);
//# sourceMappingURL=52.js.map