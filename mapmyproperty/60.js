(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/core/libs/gl-matrix-2/factories/quatf32":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/factories/quatf32.js",
	"esri/core/libs/gl-matrix-2/quatf32":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/quatf32.js",
	"esri/core/requireUtils":"./node_modules/arcgis-js-api/core/requireUtils.js",
	"arcgis-js-api/core/requireUtils":"./node_modules/arcgis-js-api/core/requireUtils.js",
	"esri/views/3d/layers/i3s/I3SBinaryReader":"./node_modules/arcgis-js-api/views/3d/layers/i3s/I3SBinaryReader.js",
	"esri/views/3d/layers/i3s/LEPCC":"./node_modules/arcgis-js-api/views/3d/layers/i3s/LEPCC.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/factories/quatf32.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/libs/gl-matrix-2/factories/quatf32.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r){function n(){var e=new Float32Array(4);return e[3]=1,e}function t(e){var r=new Float32Array(4);return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r}function a(e,r,n,t){var a=new Float32Array(4);return a[0]=e,a[1]=r,a[2]=n,a[3]=t,a}function o(e,r){return new Float32Array(e,r,4)}Object.defineProperty(r,"__esModule",{value:!0}),r.create=n,r.clone=t,r.fromValues=a,r.createView=o}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/quatf32.js":
/*!*********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/libs/gl-matrix-2/quatf32.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./factories/quatf32 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/factories/quatf32.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,f){Object.defineProperty(t,"__esModule",{value:!0}),t.quatf32=f}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

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

/***/ "./node_modules/arcgis-js-api/views/3d/layers/i3s/I3SBinaryReader.js":
/*!***************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/layers/i3s/I3SBinaryReader.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ./LEPCC */ "./node_modules/arcgis-js-api/views/3d/layers/i3s/LEPCC.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,n,a,o,u,i){function f(e,t,r){for(var a="",o=0;o<r;){var u=e[t+o];if(u<128)a+=String.fromCharCode(u),o++;else if(u>=192&&u<224){if(o+1>=r)throw new n("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");var i=e[t+o+1],f=(31&u)<<6|63&i;a+=String.fromCharCode(f),o+=2}else if(u>=224&&u<240){if(o+2>=r)throw new n("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var i=e[t+o+1],s=e[t+o+2],f=(15&u)<<12|(63&i)<<6|63&s;a+=String.fromCharCode(f),o+=3}else{if(!(u>=240&&u<248))throw new n("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");if(o+3>=r)throw new n("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var i=e[t+o+1],s=e[t+o+2],l=e[t+o+3],f=(7&u)<<18|(63&i)<<12|(63&s)<<6|63&l;if(f>=65536){var y=55296+(f-65536>>10),c=56320+(1023&f);a+=String.fromCharCode(y,c)}else a+=String.fromCharCode(f);o+=4}}return a}function s(e,r){for(var n={byteOffset:0,byteCount:0,fields:Object.create(null)},a=0,o=0;o<r.length;o++){var u=r[o],i=u.valueType||u.type,f=t.valueType2ArrayBufferReader[i];n.fields[u.property]=f(e,a),a+=t.valueType2TypedArrayClassMap[i].BYTES_PER_ELEMENT}return n.byteCount=a,n}function l(e,t,r){var a,o,u=[],i=0;for(o=0;o<e;o+=1){if((a=t[o])>0){if(u.push(f(r,i,a-1)),0!==r[i+a-1])throw new n("string-array-error","Invalid string array: missing null termination.")}else u.push(null);i+=a}return u}function y(e,r){return new(0,t.valueType2TypedArrayClassMap[r.valueType])(e,r.byteOffset,r.count*r.valuesPerElement)}function c(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}function d(e,t,r){for(var o=null!=t.header?s(e,t.header):{byteOffset:0,byteCount:0,fields:{count:r}},u={header:o,byteOffset:o.byteCount,byteCount:0,entries:Object.create(null)},i=o.byteCount,f=0;f<t.ordering.length;f++){var l=t.ordering[f],y=a.clone(t[l]);if(y.count=o.fields.count,"String"===y.valueType){if(y.byteOffset=i,y.byteCount=o.fields[l+"ByteCount"],"UTF-8"!==y.encoding)throw new n("unsupported-encoding","Unsupported String encoding.",{encoding:y.encoding})}else{if(!C(y.valueType))throw new n("unsupported-value-type","Unsupported binary valueType",{valueType:y.valueType});var c=T(y.valueType);i+=i%c!=0?c-i%c:0,y.byteOffset=i,y.byteCount=c*y.valuesPerElement*y.count}i+=y.byteCount,u.entries[l]=y}return u.byteCount=i-u.byteOffset,u}function b(e,t,r){if(t!==e&&h.error("Invalid "+r+" buffer size\n expected: "+e+", actual: "+t+")"),t<e)throw new n("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function v(e,t,r){var n={header:{byteOffset:0,byteCount:e.offset,fields:{}},byteOffset:e.offset,byteCount:0,vertexAttributes:{},featureAttributes:{}},a=e.offset,o=function(e,t,r,n){var o="UInt64"===t.type?8:T(t.type),u={byteOffset:a,byteCount:o*t.component*r,count:r,valueType:t.type,valuesPerElement:t.component};a+=u.byteCount,n[e]=u};for(var i in A)e[i]&&o(A[i],e[i],t,n.vertexAttributes);if(u.isSome(r))for(var f in I)e[f]&&o(I[f],e[f],r,n.featureAttributes);return n}function p(e,t){for(var n=s(e,t&&t.header),a=n.byteCount,o={header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},u=n.fields,i=null!=u.vertexCount?u.vertexCount:u.count,f=0,l=t.ordering;f<l.length;f++){var y=l[f];if(t.vertexAttributes[y]){var c=r({},t.vertexAttributes[y],{byteOffset:a,count:i}),d=O[y]?O[y]:"_"+y;o.vertexAttributes[d]=c,a+=T(c.valueType)*c.valuesPerElement*i}}var v=u.faceCount;if(t.faces&&v){o.faces={};for(var p=0,g=t.ordering;p<g.length;p++){var w=g[p];if(t.faces[w]){var c=r({},t.faces[w],{byteOffset:a,count:v});o.faces[w]=c,a+=T(c.valueType)*c.valuesPerElement*v}}}var C=u.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&C){o.featureAttributes={};for(var h=0,A=t.featureAttributeOrder;h<A.length;h++){var I=A[h];if(t.featureAttributes[I]){var c=r({},t.featureAttributes[I],{byteOffset:a,count:C});o.featureAttributes[I]=c;a+=("UInt64"===c.valueType?8:T(c.valueType))*c.valuesPerElement*C}}}return b(a,e.byteLength,"geometry"),o.byteCount=a-o.byteOffset,o}function g(e){for(var t={},r=0,n=e;r<n.length;r++){var a=n[r];m[a]&&(t[m[a]]={valueType:null})}return{header:null,byteOffset:0,byteCount:0,vertexAttributes:t}}function w(e,t,r){if("lepcc-rgb"===e.encoding)return i.decodeRGB(t);if("lepcc-intensity"===e.encoding)return i.decodeIntensity(t);if(null!=e.encoding&&""!==e.encoding)throw new n("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(h.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(h.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");var a=d(t,e,r);b(a.byteOffset+a.byteCount,t.byteLength,"attribute");var o=a.entries.attributeValues||a.entries.objectIds;if(o){if("String"===o.valueType){var u=a.entries.attributeByteCounts,f=y(t,u),s=c(t,o);return l(u.count,f,s)}return y(t,o)}throw new n("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}function C(e){return t.valueType2TypedArrayClassMap.hasOwnProperty(e)}function T(e){return C(e)?t.valueType2TypedArrayClassMap[e].BYTES_PER_ELEMENT:0}Object.defineProperty(t,"__esModule",{value:!0});var h=o.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");t.readHeader=s,t.readStringArray=l,t.createTypedView=y,t.createRawView=c,t.createAttributeDataIndex=d,t.createGeometryIndexFromDefinition=v;var A={position:"position",normal:"normal",uv0:"uv0",color:"color",uvRegion:"uvRegion"},I={featureId:"id",faceRange:"faceRange"};t.createGeometryIndexFromSchema=p;var m={position:"position",normal:"normal",uv0:"uv0",color:"color","uv-region":"uvRegion"};t.createGeometryIndexFromAttributes=g;var O={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};t.readBinaryAttribute=w,t.valueType2TypedArrayClassMap={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},t.valueType2ArrayBufferReader={Float32:function(e,t){return new DataView(e,0).getFloat32(t,!0)},Float64:function(e,t){return new DataView(e,0).getFloat64(t,!0)},UInt8:function(e,t){return new DataView(e,0).getUint8(t)},Int8:function(e,t){return new DataView(e,0).getInt8(t)},UInt16:function(e,t){return new DataView(e,0).getUint16(t,!0)},Int16:function(e,t){return new DataView(e,0).getInt16(t,!0)},UInt32:function(e,t){return new DataView(e,0).getUint32(t,!0)},Int32:function(e,t){return new DataView(e,0).getInt32(t,!0)}},t.isValueType=C,t.getBytesPerValue=T}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/layers/i3s/LEPCC.js":
/*!*****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/layers/i3s/LEPCC.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t){function o(e,r,t){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,t+h.identifierOffset,h.identifierLength)),version:r.getUint16(t+h.versionOffset,l),checksum:r.getUint32(t+h.checksumOffset,l)}}function n(e,r){return{sizeLo:e.getUint32(r+w.sizeLo,l),sizeHi:e.getUint32(r+w.sizeHi,l),minX:e.getFloat64(r+w.minX,l),minY:e.getFloat64(r+w.minY,l),minZ:e.getFloat64(r+w.minZ,l),maxX:e.getFloat64(r+w.maxX,l),maxY:e.getFloat64(r+w.maxY,l),maxZ:e.getFloat64(r+w.maxZ,l),errorX:e.getFloat64(r+w.errorX,l),errorY:e.getFloat64(r+w.errorY,l),errorZ:e.getFloat64(r+w.errorZ,l),count:e.getUint32(r+w.count,l),reserved:e.getUint32(r+w.reserved,l)}}function i(e){var r=new DataView(e,0),i=0,a=o(e,r,i),d=a.identifier,s=a.version;if(i+=h.byteCount,"LEPCC     "!==d)throw new t("lepcc-decode-error","Bad identifier");if(s>1)throw new t("lepcc-decode-error","Unknown version");var u=n(r,i);if(i+=w.byteCount,u.sizeHi*Math.pow(2,32)+u.sizeLo!==e.byteLength)throw new t("lepcc-decode-error","Bad size");var f=new Float64Array(3*u.count),l=[],p=[],g=[],v=[];if(i=c(e,i,l),i=c(e,i,p),i=c(e,i,g),(i=c(e,i,v))!==e.byteLength)throw new t("lepcc-decode-error","Bad length");for(var m=0,U=0,y=0;y<l.length;y++){U+=l[y];for(var M=0,z=0;z<p[y];z++){M+=g[m];var b=v[m];f[3*m]=Math.min(u.maxX,u.minX+2*u.errorX*M),f[3*m+1]=Math.min(u.maxY,u.minY+2*u.errorY*U),f[3*m+2]=Math.min(u.maxZ,u.minZ+2*u.errorZ*b),m++}}return{errorX:u.errorX,errorY:u.errorY,errorZ:u.errorZ,result:f}}function c(e,r,t){var o=[];r=a(e,r,o);for(var n=[],i=0;i<o.length;i++){n.length=0,r=a(e,r,n);for(var c=0;c<n.length;c++)t.push(n[c]+o[i])}return r}function a(e,r,o){var n=new DataView(e,r),i=n.getUint8(0),c=31&i,a=!!(32&i),d=(192&i)>>6,s=0;if(0===d)s=n.getUint32(1,l),r+=5;else if(1===d)s=n.getUint16(1,l),r+=3;else{if(2!==d)throw new t("lepcc-decode-error","Bad count type");s=n.getUint8(1),r+=2}if(a)throw new t("lepcc-decode-error","LUT not implemented");for(var u=Math.ceil(s*c/8),f=new Uint8Array(e,r,u),h=0,w=0,p=0,g=-1>>>32-c,v=0;v<s;v++){for(;w<c;)h|=f[p]<<w,w+=8,p+=1;o[v]=h&g,h>>>=c,w-=c,w+c>32&&(h|=f[p-1]>>8-w)}return r+p}function d(e,r){return{sizeLo:e.getUint32(r+p.sizeLo,l),sizeHi:e.getUint32(r+p.sizeHi,l),count:e.getUint32(r+p.count,l),colorMapCount:e.getUint16(r+p.colorMapCount,l),lookupMethod:e.getUint8(r+p.lookupMethod),compressionMethod:e.getUint8(r+p.compressionMethod)}}function s(e){var r=new DataView(e,0),n=0,i=o(e,r,n),c=i.identifier,a=i.version;if(n+=h.byteCount,"ClusterRGB"!==c)throw new t("lepcc-decode-error","Bad identifier");if(a>1)throw new t("lepcc-decode-error","Unknown version");var s=d(r,n);if(n+=p.byteCount,s.sizeHi*Math.pow(2,32)+s.sizeLo!==e.byteLength)throw new t("lepcc-decode-error","Bad size");if((2===s.lookupMethod||1===s.lookupMethod)&&0===s.compressionMethod){if(3*s.colorMapCount+s.count+n!==e.byteLength||s.colorMapCount>256)throw new t("lepcc-decode-error","Bad count");for(var u=new Uint8Array(e,n,3*s.colorMapCount),f=new Uint8Array(e,n+3*s.colorMapCount,s.count),l=new Uint8Array(3*s.count),w=0;w<s.count;w++){var g=f[w];l[3*w]=u[3*g],l[3*w+1]=u[3*g+1],l[3*w+2]=u[3*g+2]}return l}if(0===s.lookupMethod&&0===s.compressionMethod){if(3*s.count+n!==e.byteLength||0!==s.colorMapCount)throw new t("lepcc-decode-error","Bad count");return new Uint8Array(e,n).slice()}if(s.lookupMethod<=2&&1===s.compressionMethod){if(n+3!==e.byteLength||1!==s.colorMapCount)throw new t("lepcc-decode-error","Bad count");for(var v=r.getUint8(n),m=r.getUint8(n+1),U=r.getUint8(n+2),l=new Uint8Array(3*s.count),w=0;w<s.count;w++)l[3*w]=v,l[3*w+1]=m,l[3*w+2]=U;return l}throw new t("lepcc-decode-error","Bad method "+s.lookupMethod+","+s.compressionMethod)}function u(e,r){return{sizeLo:e.getUint32(r+g.sizeLo,l),sizeHi:e.getUint32(r+g.sizeHi,l),count:e.getUint32(r+g.count,l),scaleFactor:e.getUint16(r+g.scaleFactor,l),bitsPerPoint:e.getUint8(r+g.bitsPerPoint),reserved:e.getUint8(r+g.reserved)}}function f(e){var r=new DataView(e,0),n=0,i=o(e,r,n),c=i.identifier,d=i.version;if(n+=h.byteCount,"Intensity "!==c)throw new t("lepcc-decode-error","Bad identifier");if(d>1)throw new t("lepcc-decode-error","Unknown version");var s=u(r,n);if(n+=g.byteCount,s.sizeHi*Math.pow(2,32)+s.sizeLo!==e.byteLength)throw new t("lepcc-decode-error","Bad size");var f=new Uint16Array(s.count);if(8===s.bitsPerPoint){if(s.count+n!==e.byteLength)throw new t("lepcc-decode-error","Bad size");for(var l=new Uint8Array(e,n,s.count),w=0;w<s.count;w++)f[w]=l[w]*s.scaleFactor}else if(16===s.bitsPerPoint){if(2*s.count+n!==e.byteLength)throw new t("lepcc-decode-error","Bad size");for(var l=new Uint16Array(e,n,s.count),w=0;w<s.count;w++)f[w]=l[w]*s.scaleFactor}else{var l=[],p=a(e,n,l);if(p!==e.byteLength)throw new t("lepcc-decode-error","Bad size");for(var w=0;w<s.count;w++)f[w]=l[w]*s.scaleFactor}return f}Object.defineProperty(r,"__esModule",{value:!0});var l=!0,h={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16},w={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};r.decodeXYZ=i;var p={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};r.decodeRGB=s;var g={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};r.decodeIntensity=f}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=60.js.map