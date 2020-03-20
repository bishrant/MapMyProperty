(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/layers/support/Field":"./node_modules/arcgis-js-api/layers/support/Field.js",
	"arcgis-js-api/layers/support/Field":"./node_modules/arcgis-js-api/layers/support/Field.js",
	"arcgis-js-api/layers/support/fieldType":"./node_modules/arcgis-js-api/layers/support/fieldType.js",
	"arcgis-js-api/renderers/PointCloudClassBreaksRenderer":"./node_modules/arcgis-js-api/renderers/PointCloudClassBreaksRenderer.js",
	"esri/renderers/PointCloudClassBreaksRenderer":"./node_modules/arcgis-js-api/renderers/PointCloudClassBreaksRenderer.js",
	"arcgis-js-api/renderers/PointCloudRenderer":"./node_modules/arcgis-js-api/renderers/PointCloudRenderer.js",
	"esri/renderers/PointCloudRenderer":"./node_modules/arcgis-js-api/renderers/PointCloudRenderer.js",
	"arcgis-js-api/renderers/PointCloudStretchRenderer":"./node_modules/arcgis-js-api/renderers/PointCloudStretchRenderer.js",
	"esri/renderers/PointCloudStretchRenderer":"./node_modules/arcgis-js-api/renderers/PointCloudStretchRenderer.js",
	"arcgis-js-api/renderers/PointCloudUniqueValueRenderer":"./node_modules/arcgis-js-api/renderers/PointCloudUniqueValueRenderer.js",
	"esri/renderers/PointCloudUniqueValueRenderer":"./node_modules/arcgis-js-api/renderers/PointCloudUniqueValueRenderer.js",
	"esri/renderers/support/LegendOptions":"./node_modules/arcgis-js-api/renderers/support/LegendOptions.js",
	"arcgis-js-api/renderers/support/LegendOptions":"./node_modules/arcgis-js-api/renderers/support/LegendOptions.js",
	"esri/renderers/support/pointCloud/ColorClassBreakInfo":"./node_modules/arcgis-js-api/renderers/support/pointCloud/ColorClassBreakInfo.js",
	"esri/renderers/support/pointCloud/ColorModulation":"./node_modules/arcgis-js-api/renderers/support/pointCloud/ColorModulation.js",
	"esri/renderers/support/pointCloud/ColorUniqueValueInfo":"./node_modules/arcgis-js-api/renderers/support/pointCloud/ColorUniqueValueInfo.js",
	"esri/renderers/support/pointCloud/PointSizeAlgorithm":"./node_modules/arcgis-js-api/renderers/support/pointCloud/PointSizeAlgorithm.js",
	"esri/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm":"./node_modules/arcgis-js-api/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm.js",
	"esri/renderers/support/pointCloud/PointSizeSplatAlgorithm":"./node_modules/arcgis-js-api/renderers/support/pointCloud/PointSizeSplatAlgorithm.js",
	"esri/renderers/support/pointCloud/StopInfo":"./node_modules/arcgis-js-api/renderers/support/pointCloud/StopInfo.js",
	"esri/renderers/support/pointCloud/pointSizeAlgorithmJSONUtils":"./node_modules/arcgis-js-api/renderers/support/pointCloud/pointSizeAlgorithmJSONUtils.js",
	"esri/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils":"./node_modules/arcgis-js-api/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

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

/***/ "./node_modules/arcgis-js-api/renderers/PointCloudClassBreaksRenderer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/PointCloudClassBreaksRenderer.js ***!
  \*******************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./PointCloudRenderer */ "./node_modules/arcgis-js-api/renderers/PointCloudRenderer.js"),__webpack_require__(/*! ./support/LegendOptions */ "./node_modules/arcgis-js-api/renderers/support/LegendOptions.js"),__webpack_require__(/*! ./support/pointCloud/ColorClassBreakInfo */ "./node_modules/arcgis-js-api/renderers/support/pointCloud/ColorClassBreakInfo.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,o,t,s,n,l,p,i,a){return function(e){function r(r){var o=e.call(this,r)||this;return o.type="point-cloud-class-breaks",o.field=null,o.legendOptions=null,o.fieldTransformType=null,o.colorClassBreakInfos=null,o}t(r,e),d=r,r.prototype.clone=function(){return new d(o({},this.cloneProperties(),{field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:n.clone(this.colorClassBreakInfos),legendOptions:n.clone(this.legendOptions)}))};var d;return s([l.enumeration.serializable()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],r.prototype,"type",void 0),s([l.property({json:{write:!0},type:String})],r.prototype,"field",void 0),s([l.property({type:i.default,json:{write:!0}})],r.prototype,"legendOptions",void 0),s([l.property({type:p.fieldTransformTypeKebabDict.apiValues,json:{type:p.fieldTransformTypeKebabDict.jsonValues,read:p.fieldTransformTypeKebabDict.read,write:p.fieldTransformTypeKebabDict.write}})],r.prototype,"fieldTransformType",void 0),s([l.property({type:[a.default],json:{write:!0}})],r.prototype,"colorClassBreakInfos",void 0),r=d=s([l.subclass("esri.renderers.PointCloudClassBreaksRenderer")],r)}(l.declared(p))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/PointCloudRenderer.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/PointCloudRenderer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./support/pointCloud/ColorModulation */ "./node_modules/arcgis-js-api/renderers/support/pointCloud/ColorModulation.js"),__webpack_require__(/*! ./support/pointCloud/pointSizeAlgorithmJSONUtils */ "./node_modules/arcgis-js-api/renderers/support/pointCloud/pointSizeAlgorithmJSONUtils.js"),__webpack_require__(/*! ./support/pointCloud/pointSizeAlgorithmTypeUtils */ "./node_modules/arcgis-js-api/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(o,e,t,r,n,i,l,p,u,s,d){var c=n.strict()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"}),a=function(o){function e(e){var t=o.call(this,e)||this;return t.type=void 0,t.pointSizeAlgorithm=null,t.colorModulation=null,t.pointsPerInch=10,t}return t(e,o),e.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},e.prototype.cloneProperties=function(){return{pointSizeAlgorithm:l.clone(this.pointSizeAlgorithm),colorModulation:l.clone(this.colorModulation),pointsPerInch:l.clone(this.pointsPerInch)}},r([p.property({type:c.apiValues,readOnly:!0,nonNullable:!0,json:{type:c.jsonValues,read:!1,write:c.write}})],e.prototype,"type",void 0),r([p.property({types:d.pointSizeAlgorithmTypes,json:{read:s.read,write:!0}})],e.prototype,"pointSizeAlgorithm",void 0),r([p.property({type:u.default,json:{write:!0}})],e.prototype,"colorModulation",void 0),r([p.property({json:{write:!0},nonNullable:!0,type:Number})],e.prototype,"pointsPerInch",void 0),e=r([p.subclass("esri.renderers.PointCloudRenderer")],e)}(p.declared(i.JSONSupport));return function(o){o.fieldTransformTypeKebabDict=new n.JSONMap({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(a||(a={})),a}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/PointCloudStretchRenderer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/PointCloudStretchRenderer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./PointCloudRenderer */ "./node_modules/arcgis-js-api/renderers/PointCloudRenderer.js"),__webpack_require__(/*! ./support/LegendOptions */ "./node_modules/arcgis-js-api/renderers/support/LegendOptions.js"),__webpack_require__(/*! ./support/pointCloud/StopInfo */ "./node_modules/arcgis-js-api/renderers/support/pointCloud/StopInfo.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,p,n,i,s,l,d){return function(e){function r(r){var t=e.call(this,r)||this;return t.type="point-cloud-stretch",t.field=null,t.legendOptions=null,t.fieldTransformType=null,t.stops=null,t}o(r,e),a=r,r.prototype.clone=function(){return new a(t({},this.cloneProperties(),{field:n.clone(this.field),fieldTransformType:n.clone(this.fieldTransformType),stops:n.clone(this.stops),legendOptions:n.clone(this.legendOptions)}))};var a;return p([i.enumeration.serializable()({pointCloudStretchRenderer:"point-cloud-stretch"})],r.prototype,"type",void 0),p([i.property({json:{write:!0},type:String})],r.prototype,"field",void 0),p([i.property({type:l.default,json:{write:!0}})],r.prototype,"legendOptions",void 0),p([i.property({type:s.fieldTransformTypeKebabDict.apiValues,json:{type:s.fieldTransformTypeKebabDict.jsonValues,read:s.fieldTransformTypeKebabDict.read,write:s.fieldTransformTypeKebabDict.write}})],r.prototype,"fieldTransformType",void 0),p([i.property({type:[d.default],json:{write:!0}})],r.prototype,"stops",void 0),r=a=p([i.subclass("esri.renderers.PointCloudStretchRenderer")],r)}(i.declared(s))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/PointCloudUniqueValueRenderer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/PointCloudUniqueValueRenderer.js ***!
  \*******************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./PointCloudRenderer */ "./node_modules/arcgis-js-api/renderers/PointCloudRenderer.js"),__webpack_require__(/*! ./support/LegendOptions */ "./node_modules/arcgis-js-api/renderers/support/LegendOptions.js"),__webpack_require__(/*! ./support/pointCloud/ColorUniqueValueInfo */ "./node_modules/arcgis-js-api/renderers/support/pointCloud/ColorUniqueValueInfo.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,o,r,n,t,i,l,p,u,s){return function(e){function o(o){var r=e.call(this,o)||this;return r.type="point-cloud-unique-value",r.field=null,r.fieldTransformType=null,r.colorUniqueValueInfos=null,r.legendOptions=null,r}n(o,e),d=o,o.prototype.clone=function(){return new d(r({},this.cloneProperties(),{field:i.clone(this.field),fieldTransformType:i.clone(this.fieldTransformType),colorUniqueValueInfos:i.clone(this.colorUniqueValueInfos),legendOptions:i.clone(this.legendOptions)}))};var d;return t([l.enumeration.serializable()({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],o.prototype,"type",void 0),t([l.property({json:{write:!0},type:String})],o.prototype,"field",void 0),t([l.property({type:p.fieldTransformTypeKebabDict.apiValues,json:{type:p.fieldTransformTypeKebabDict.jsonValues,read:p.fieldTransformTypeKebabDict.read,write:p.fieldTransformTypeKebabDict.write}})],o.prototype,"fieldTransformType",void 0),t([l.property({type:[s.default],json:{write:!0}})],o.prototype,"colorUniqueValueInfos",void 0),t([l.property({type:u.default,json:{write:!0}})],o.prototype,"legendOptions",void 0),o=d=t([l.subclass("esri.renderers.PointCloudUniqueValueRenderer")],o)}(l.declared(p))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/LegendOptions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/LegendOptions.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,p,n){Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.title=null,t}r(t,e),p=t,t.prototype.clone=function(){return new p({title:this.title})};var p;return o([n.property({type:String,json:{write:!0}})],t.prototype,"title",void 0),t=p=o([n.subclass("esri.renderers.support.LegendOptions")],t)}(n.declared(p.JSONSupport));t.LegendOptions=i,t.default=i}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/pointCloud/ColorClassBreakInfo.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/pointCloud/ColorClassBreakInfo.js ***!
  \****************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../Color */ "./node_modules/arcgis-js-api/Color.js"),__webpack_require__(/*! ../../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../core/accessorSupport/ensureType */ "./node_modules/arcgis-js-api/core/accessorSupport/ensureType.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,o,t,l,p,a,s,n){Object.defineProperty(r,"__esModule",{value:!0});var i=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.label=null,r.minValue=0,r.maxValue=0,r.color=null,r}o(r,e),p=r,r.prototype.clone=function(){return new p({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:a.clone(this.color)})};var p;return t([s.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),t([s.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),t([s.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],r.prototype,"minValue",void 0),t([s.property({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],r.prototype,"maxValue",void 0),t([s.property({type:l,json:{type:[n.Integer],write:!0}})],r.prototype,"color",void 0),r=p=t([s.subclass("esri.renderers.support.pointCloud.ColorClassBreakInfo")],r)}(s.declared(p.JSONSupport));r.ColorClassBreakInfo=i,r.default=i}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/pointCloud/ColorModulation.js":
/*!************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/pointCloud/ColorModulation.js ***!
  \************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,o,t,l,p){Object.defineProperty(r,"__esModule",{value:!0});var u=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.field=null,r.minValue=0,r.maxValue=255,r}o(r,e),l=r,r.prototype.clone=function(){return new l({field:this.field,minValue:this.minValue,maxValue:this.maxValue})};var l;return t([p.property({type:String,json:{write:!0}})],r.prototype,"field",void 0),t([p.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"minValue",void 0),t([p.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"maxValue",void 0),r=l=t([p.subclass("esri.renderers.support.pointCloud.ColorModulation")],r)}(p.declared(l.JSONSupport));r.ColorModulation=u,r.default=u}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/pointCloud/ColorUniqueValueInfo.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/pointCloud/ColorUniqueValueInfo.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../Color */ "./node_modules/arcgis-js-api/Color.js"),__webpack_require__(/*! ../../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../core/accessorSupport/ensureType */ "./node_modules/arcgis-js-api/core/accessorSupport/ensureType.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,o,t,p,l,n,i,s){Object.defineProperty(r,"__esModule",{value:!0});var u=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.label=null,r.values=null,r.color=null,r}o(r,e),l=r,r.prototype.clone=function(){return new l({description:this.description,label:this.label,values:n.clone(this.values),color:n.clone(this.color)})};var l;return t([i.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),t([i.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),t([i.property({type:[String],json:{write:!0}})],r.prototype,"values",void 0),t([i.property({type:p,json:{type:[s.Integer],write:!0}})],r.prototype,"color",void 0),r=l=t([i.subclass("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],r)}(i.declared(l.JSONSupport));r.ColorUniqueValueInfo=u,r.default=u}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/pointCloud/PointSizeAlgorithm.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/pointCloud/PointSizeAlgorithm.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,i,p,n){Object.defineProperty(t,"__esModule",{value:!0}),t.typeKebabDictionary=new i.default({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});var a=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return r(i,e),o([n.property({type:t.typeKebabDictionary.apiValues,readOnly:!0,nonNullable:!0,json:{type:t.typeKebabDictionary.jsonValues,read:!1,write:t.typeKebabDictionary.write}})],i.prototype,"type",void 0),i=o([n.subclass("esri.renderers.support.pointCloud.PointSizeAlgorithm")],i)}(n.declared(p.JSONSupport));t.PointSizeAlgorithm=a,t.default=a}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm.js ***!
  \************************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./PointSizeAlgorithm */ "./node_modules/arcgis-js-api/renderers/support/pointCloud/PointSizeAlgorithm.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,o,r,t,i,l){Object.defineProperty(o,"__esModule",{value:!0});var s=function(e){function o(){var o=null!==e&&e.apply(this,arguments)||this;return o.type="fixed-size",o.size=0,o.useRealWorldSymbolSizes=null,o}r(o,e),l=o,o.prototype.clone=function(){return new l({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})};var l;return t([i.enumeration.serializable()({pointCloudFixedSizeAlgorithm:"fixed-size"})],o.prototype,"type",void 0),t([i.property({type:Number,nonNullable:!0,json:{write:!0}})],o.prototype,"size",void 0),t([i.property({type:Boolean,json:{write:!0}})],o.prototype,"useRealWorldSymbolSizes",void 0),o=l=t([i.subclass("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],o)}(i.declared(l.default));o.PointSizeFixedSizeAlgorithm=s,o.default=s}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/pointCloud/PointSizeSplatAlgorithm.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/pointCloud/PointSizeSplatAlgorithm.js ***!
  \********************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./PointSizeAlgorithm */ "./node_modules/arcgis-js-api/renderers/support/pointCloud/PointSizeAlgorithm.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,l,p){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="splat",t.scaleFactor=1,t}r(t,e),p=t,t.prototype.clone=function(){return new p({scaleFactor:this.scaleFactor})};var p;return o([l.enumeration.serializable()({pointCloudSplatAlgorithm:"splat"})],t.prototype,"type",void 0),o([l.property({type:Number,value:1,nonNullable:!0,json:{write:!0}})],t.prototype,"scaleFactor",void 0),t=p=o([l.subclass("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],t)}(l.declared(p.default));t.PointSizeSplatAlgorithm=a,t.default=a}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/pointCloud/StopInfo.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/pointCloud/StopInfo.js ***!
  \*****************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../Color */ "./node_modules/arcgis-js-api/Color.js"),__webpack_require__(/*! ../../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../core/accessorSupport/ensureType */ "./node_modules/arcgis-js-api/core/accessorSupport/ensureType.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,o,t,p,l,n,u,c){Object.defineProperty(r,"__esModule",{value:!0});var s=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.label=null,r.value=0,r.color=null,r}o(r,e),l=r,r.prototype.clone=function(){return new l({label:this.label,value:this.value,color:n.clone(this.color)})};var l;return t([u.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),t([u.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"value",void 0),t([u.property({type:p,json:{type:[c.Integer],write:!0}})],r.prototype,"color",void 0),r=l=t([u.subclass("esri.renderers.support.pointCloud.StopInfo")],r)}(u.declared(l.JSONSupport));r.StopInfo=s,r.default=s}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/pointCloud/pointSizeAlgorithmJSONUtils.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/pointCloud/pointSizeAlgorithmJSONUtils.js ***!
  \************************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/Warning */ "./node_modules/arcgis-js-api/core/Warning.js"),__webpack_require__(/*! ./PointSizeFixedSizeAlgorithm */ "./node_modules/arcgis-js-api/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm.js"),__webpack_require__(/*! ./PointSizeSplatAlgorithm */ "./node_modules/arcgis-js-api/renderers/support/pointCloud/PointSizeSplatAlgorithm.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,n,t,i,r){function o(e){return e?a[e.type]||null:null}function u(e,n,i){var r=o(e);if(r){var u=new r;return u.read(e,i),u}return i&&i.messages&&e&&i.messages.push(new t("pointsizealgorithm:unsupported","Point size algorithms of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:i})),null}function l(e){var n=o(e);return n?n.fromJSON(e):null}Object.defineProperty(n,"__esModule",{value:!0});var a={pointCloudFixedSizeAlgorithm:i.default,pointCloudSplatAlgorithm:r.default};n.read=u,n.fromJSON=l}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils.js ***!
  \************************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./PointSizeAlgorithm */ "./node_modules/arcgis-js-api/renderers/support/pointCloud/PointSizeAlgorithm.js"),__webpack_require__(/*! ./PointSizeFixedSizeAlgorithm */ "./node_modules/arcgis-js-api/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm.js"),__webpack_require__(/*! ./PointSizeSplatAlgorithm */ "./node_modules/arcgis-js-api/renderers/support/pointCloud/PointSizeSplatAlgorithm.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,i,t,o,l){Object.defineProperty(i,"__esModule",{value:!0}),i.pointSizeAlgorithmTypes={key:"type",base:t.default,typeMap:{"fixed-size":o.default,splat:l.default}}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=38.js.map