(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/layers/support/rasterFormats/LercCodec":"./node_modules/arcgis-js-api/layers/support/rasterFormats/LercCodec.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[127],{

/***/ "./node_modules/arcgis-js-api/layers/support/rasterFormats/LercCodec.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/rasterFormats/LercCodec.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../../../core/mathUtils */ "./node_modules/arcgis-js-api/core/mathUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e){var t={};t.defaultNoDataValue=e.clampFloat32(-1/0),t.decode=function(s,r){r=r||{};var o=r.encodedMaskData||null===r.encodedMaskData,f=l(s,r.inputOffset||0,o),m=null!=r.noDataValue?e.clampFloat32(r.noDataValue):t.defaultNoDataValue,u=i(f,r.pixelType||Float32Array,r.encodedMaskData,m,r.returnMask),d={width:f.width,height:f.height,pixelData:u.resultPixels,minValue:f.pixels.minValue,maxValue:f.pixels.maxValue,noDataValue:m};return u.resultMask&&(d.maskData=u.resultMask),r.returnEncodedMask&&f.mask&&(d.encodedMaskData=f.mask.bitset?f.mask.bitset:null),r.returnFileInfo&&(d.fileInfo=a(f),r.computeUsedBitDepths&&(d.fileInfo.bitDepths=n(f))),d};var i=function(e,t,i,a,n){var l=0,r=e.pixels.numBlocksX,o=e.pixels.numBlocksY,f=Math.floor(e.width/r),m=Math.floor(e.height/o),u=2*e.maxZError;i=i||(e.mask?e.mask.bitset:null);var d,c;d=new t(e.width*e.height),n&&i&&(c=new Uint8Array(e.width*e.height));for(var g,h,k=new Float32Array(f*m),x=0;x<=o;x++){var w=x!==o?m:e.height%o;if(0!==w)for(var p=0;p<=r;p++){var y=p!==r?f:e.width%r;if(0!==y){var V,v,B,U=x*e.width*m+p*f,D=e.width-y,M=e.pixels.blocks[l];M.encoding<2?(0===M.encoding?V=M.rawData:(s(M.stuffedData,M.bitsPerPixel,M.numValidPixels,M.offset,u,k,e.pixels.maxValue),V=k),v=0):B=2===M.encoding?0:M.offset;var b;if(i)for(h=0;h<w;h++){for(7&U&&(b=i[U>>3],b<<=7&U),g=0;g<y;g++)7&U||(b=i[U>>3]),128&b?(c&&(c[U]=1),d[U++]=M.encoding<2?V[v++]:B):(c&&(c[U]=0),d[U++]=a),b<<=1;U+=D}else if(M.encoding<2)for(h=0;h<w;h++){for(g=0;g<y;g++)d[U++]=V[v++];U+=D}else for(h=0;h<w;h++)if(d.fill)d.fill(B,U,U+y),U+=y+D;else{for(g=0;g<y;g++)d[U++]=B;U+=D}if(1===M.encoding&&v!==M.numValidPixels)throw"Block and Mask do not match";l++}}}return{resultPixels:d,resultMask:c}},a=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,minValue:e.pixels.minValue,noDataValue:this.noDataValue}}},n=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,i={},a=0;a<t;a++){var n=e.pixels.blocks[a];0===n.encoding?i.float32=!0:1===n.encoding?i[n.bitsPerPixel]=!0:i[0]=!0}return Object.keys(i)},l=function(e,t,i){var a={},n=new Uint8Array(e,t,10);if(a.fileIdentifierString=String.fromCharCode.apply(null,n),"CntZImage"!=a.fileIdentifierString.trim())throw"Unexpected file identifier string: "+a.fileIdentifierString;t+=10;var l=new DataView(e,t,24);if(a.fileVersion=l.getInt32(0,!0),a.imageType=l.getInt32(4,!0),a.height=l.getUint32(8,!0),a.width=l.getUint32(12,!0),a.maxZError=l.getFloat64(16,!0),t+=24,!i)if(l=new DataView(e,t,16),a.mask={},a.mask.numBlocksY=l.getUint32(0,!0),a.mask.numBlocksX=l.getUint32(4,!0),a.mask.numBytes=l.getUint32(8,!0),a.mask.maxValue=l.getFloat32(12,!0),t+=16,a.mask.numBytes>0){var s=new Uint8Array(Math.ceil(a.width*a.height/8));l=new DataView(e,t,a.mask.numBytes);var r=l.getInt16(0,!0),o=2,f=0;do{if(r>0)for(;r--;)s[f++]=l.getUint8(o++);else{var m=l.getUint8(o++);for(r=-r;r--;)s[f++]=m}r=l.getInt16(o,!0),o+=2}while(o<a.mask.numBytes);if(-32768!==r||f<s.length)throw"Unexpected end of mask RLE encoding";a.mask.bitset=s,t+=a.mask.numBytes}else if(0==(a.mask.numBytes|a.mask.numBlocksY|a.mask.maxValue)){var s=new Uint8Array(Math.ceil(a.width*a.height/8));a.mask.bitset=s}l=new DataView(e,t,16),a.pixels={},a.pixels.numBlocksY=l.getUint32(0,!0),a.pixels.numBlocksX=l.getUint32(4,!0),a.pixels.numBytes=l.getUint32(8,!0),a.pixels.maxValue=l.getFloat32(12,!0),t+=16;var u=a.pixels.numBlocksX,d=a.pixels.numBlocksY,c=u+(a.width%u>0?1:0),g=d+(a.height%d>0?1:0);a.pixels.blocks=new Array(c*g);for(var h=1e9,k=0,x=0;x<g;x++)for(var w=0;w<c;w++){var p=0,y=e.byteLength-t;l=new DataView(e,t,Math.min(10,y));var V={};a.pixels.blocks[k++]=V;var v=l.getUint8(0);if(p++,V.encoding=63&v,V.encoding>3)throw"Invalid block encoding ("+V.encoding+")";if(2!==V.encoding){if(0!==v&&2!==v){if(v>>=6,V.offsetType=v,2===v)V.offset=l.getInt8(1),p++;else if(1===v)V.offset=l.getInt16(1,!0),p+=2;else{if(0!==v)throw"Invalid block offset type";V.offset=l.getFloat32(1,!0),p+=4}if(h=Math.min(V.offset,h),1===V.encoding)if(v=l.getUint8(p),p++,V.bitsPerPixel=63&v,v>>=6,V.numValidPixelsType=v,2===v)V.numValidPixels=l.getUint8(p),p++;else if(1===v)V.numValidPixels=l.getUint16(p,!0),p+=2;else{if(0!==v)throw"Invalid valid pixel count type";V.numValidPixels=l.getUint32(p,!0),p+=4}}if(t+=p,3!=V.encoding){var B,U;if(0===V.encoding){var D=(a.pixels.numBytes-1)/4;if(D!==Math.floor(D))throw"uncompressed block has invalid length";B=new ArrayBuffer(4*D),U=new Uint8Array(B),U.set(new Uint8Array(e,t,4*D));for(var M=new Float32Array(B),b=0;b<M.length;b++)h=Math.min(h,M[b]);V.rawData=M,t+=4*D}else if(1===V.encoding){var I=Math.ceil(V.numValidPixels*V.bitsPerPixel/8),P=Math.ceil(I/4);B=new ArrayBuffer(4*P),U=new Uint8Array(B),U.set(new Uint8Array(e,t,I)),V.stuffedData=new Uint32Array(B),t+=I}}}else t++,h=Math.min(h,0)}return a.pixels.minValue=h,a.eofOffset=t,a},s=function(e,t,i,a,n,l,s){var r,o,f,m=(1<<t)-1,u=0,d=0,c=Math.ceil((s-a)/n),g=4*e.length-Math.ceil(t*i/8);for(e[e.length-1]<<=8*g,r=0;r<i;r++){if(0===d&&(f=e[u++],d=32),d>=t)o=f>>>d-t&m,d-=t;else{var h=t-d;o=(f&m)<<h&m,f=e[u++],d=32-h,o+=f>>>d}l[r]=o<c?a+o*n:s}return l};return t}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=127.js.map