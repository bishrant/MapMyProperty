(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/layers/support/Field":"./node_modules/arcgis-js-api/layers/support/Field.js",
	"arcgis-js-api/layers/support/Field":"./node_modules/arcgis-js-api/layers/support/Field.js",
	"arcgis-js-api/layers/support/fieldType":"./node_modules/arcgis-js-api/layers/support/fieldType.js",
	"arcgis-js-api/tasks/support/FeatureSet":"./node_modules/arcgis-js-api/tasks/support/FeatureSet.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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

/***/ "./node_modules/arcgis-js-api/tasks/support/FeatureSet.js":
/*!****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/FeatureSet.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../../Graphic */ "./node_modules/arcgis-js-api/Graphic.js"),__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../geometry/SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js"),__webpack_require__(/*! ../../geometry/support/jsonUtils */ "./node_modules/arcgis-js-api/geometry/support/jsonUtils.js"),__webpack_require__(/*! ../../layers/support/Field */ "./node_modules/arcgis-js-api/layers/support/Field.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,n,i,p,a,s,y,u,l,f){var c=new p.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent"}),m=function(e){function t(t){var r=e.call(this,t)||this;return r.displayFieldName=null,r.exceededTransferLimit=!1,r.features=[],r.fields=null,r.geometryType=null,r.hasM=!1,r.hasZ=!1,r.queryGeometry=null,r.spatialReference=null,r}return o(t,e),t.prototype.readFeatures=function(e,t){for(var r=u.fromJSON(t.spatialReference),o=[],n=0;n<e.length;n++){var p=e[n],a=i.fromJSON(p),y=p.geometry&&p.geometry.spatialReference;s.isSome(a.geometry)&&!y&&(a.geometry.spatialReference=r),o.push(a)}return o},t.prototype.writeGeometryType=function(e,t,r,o){if(e)return void c.write(e,t,r,o);var n=this.features;if(n)for(var i=0,p=n;i<p.length;i++){var a=p[i];if(a&&s.isSome(a.geometry))return void c.write(a.geometry.type,t,r,o)}},t.prototype.writeSpatialReference=function(e,t){if(e)return void(t.spatialReference=e.toJSON());var r=this.features;if(r)for(var o=0,n=r;o<n.length;o++){var i=n[o];i&&s.isSome(i.geometry)&&i.geometry.spatialReference&&(t.spatialReference=i.geometry.spatialReference.toJSON())}},t.prototype.toJSON=function(e){var t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(var r=0;r<t.features.length;r++){var o=t.features[r];if(o.geometry){var n=e&&e[r];o.geometry=n&&n.toJSON()||o.geometry}}return t},t.prototype.quantize=function(e){for(var t=e.scale,r=t[0],o=t[1],n=e.translate,i=n[0],p=n[1],a=function(e){return Math.round((e-i)/r)},y=function(e){return Math.round((p-e)/o)},u=this.features,l=this._getQuantizationFunction(this.geometryType,a,y),f=0,c=u.length;f<c;f++)l(s.expect(u[f].geometry))||(u.splice(f,1),f--,c--);return this.transform=e,this},t.prototype.unquantize=function(){var e=this,t=e.geometryType,r=e.features,o=e.transform;if(!o)return this;for(var n=o.translate,i=n[0],p=n[1],a=o.scale,y=a[0],u=a[1],l=function(e){return e*y+i},f=function(e){return p-e*u},c=this._getHydrationFunction(t,l,f),m=0,g=r;m<g.length;m++){var d=g[m].geometry;s.isSome(d)&&c(d)}return this},t.prototype._quantizePoints=function(e,t,r){for(var o,n,i=[],p=0,a=e.length;p<a;p++){var s=e[p];if(p>0){var y=t(s[0]),u=r(s[1]);y===o&&u===n||(i.push([y-o,u-n]),o=y,n=u)}else o=t(s[0]),n=r(s[1]),i.push([o,n])}return i.length>0?i:null},t.prototype._getQuantizationFunction=function(e,t,r){var o=this;return"point"===e?function(e){return e.x=t(e.x),e.y=r(e.y),e}:"polyline"===e||"polygon"===e?function(e){for(var n=l.isPolygon(e)?e.rings:e.paths,i=[],p=0,a=n.length;p<a;p++){var s=n[p],y=o._quantizePoints(s,t,r);y&&i.push(y)}return i.length>0?(l.isPolygon(e)?e.rings=i:e.paths=i,e):null}:"multipoint"===e?function(e){var n;return n=o._quantizePoints(e.points,t,r),n.length>0?(e.points=n,e):null}:"extent"===e?function(e){return e}:null},t.prototype._getHydrationFunction=function(e,t,r){return"point"===e?function(e){e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?function(e){for(var o,n,i=l.isPolygon(e)?e.rings:e.paths,p=0,a=i.length;p<a;p++)for(var s=i[p],y=0,u=s.length;y<u;y++){var f=s[y];y>0?(o+=f[0],n+=f[1]):(o=f[0],n=f[1]),f[0]=t(o),f[1]=r(n)}}:"extent"===e?function(e){e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?function(e){for(var o,n,i=e.points,p=0,a=i.length;p<a;p++){var s=i[p];p>0?(o+=s[0],n+=s[1]):(o=s[0],n=s[1]),s[0]=t(o),s[1]=r(n)}}:void 0},r([y.property({type:String,json:{write:!0}})],t.prototype,"displayFieldName",void 0),r([y.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"exceededTransferLimit",void 0),r([y.property({type:[i],json:{write:!0}})],t.prototype,"features",void 0),r([y.reader("features")],t.prototype,"readFeatures",null),r([y.property({type:[f],json:{write:!0}})],t.prototype,"fields",void 0),r([y.property({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:c.read}}})],t.prototype,"geometryType",void 0),r([y.writer("geometryType")],t.prototype,"writeGeometryType",null),r([y.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasM",void 0),r([y.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasZ",void 0),r([y.property({types:n.geometryTypes,json:{read:l.fromJSON,write:!0}})],t.prototype,"queryGeometry",void 0),r([y.property({type:u,json:{write:!0}})],t.prototype,"spatialReference",void 0),r([y.writer("spatialReference")],t.prototype,"writeSpatialReference",null),r([y.property({json:{write:!0}})],t.prototype,"transform",void 0),t=r([y.subclass("esri.tasks.support.FeatureSet")],t)}(y.declared(a.JSONSupport));return m.prototype.toJSON.isDefaultToJSON=!0,m||(m={}),m}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=3.js.map