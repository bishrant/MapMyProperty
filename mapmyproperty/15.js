(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/core/libs/gl-matrix-2/mat4":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4.js",
	"esri/core/libs/gl-matrix-2/mat4":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4.js",
	"esri/core/libs/gl-matrix-2/math/mat4":"./node_modules/arcgis-js-api/core/libs/gl-matrix-2/math/mat4.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4.js":
/*!******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/libs/gl-matrix-2/mat4.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./math/mat4 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/math/mat4.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.mat4=r}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/math/mat4.js":
/*!***********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/libs/gl-matrix-2/math/mat4.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../factories/vec3f64 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/factories/vec3f64.js"),__webpack_require__(/*! ./common */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/math/common.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,a,n,r){function o(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t}function i(t,a,n,r,o,i,h,M,s,u,e,v,c,d,f,b,m){return t[0]=a,t[1]=n,t[2]=r,t[3]=o,t[4]=i,t[5]=h,t[6]=M,t[7]=s,t[8]=u,t[9]=e,t[10]=v,t[11]=c,t[12]=d,t[13]=f,t[14]=b,t[15]=m,t}function h(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function M(t,a){if(t===a){var n=a[1],r=a[2],o=a[3],i=a[6],h=a[7],M=a[11];t[1]=a[4],t[2]=a[8],t[3]=a[12],t[4]=n,t[6]=a[9],t[7]=a[13],t[8]=r,t[9]=i,t[11]=a[14],t[12]=o,t[13]=h,t[14]=M}else t[0]=a[0],t[1]=a[4],t[2]=a[8],t[3]=a[12],t[4]=a[1],t[5]=a[5],t[6]=a[9],t[7]=a[13],t[8]=a[2],t[9]=a[6],t[10]=a[10],t[11]=a[14],t[12]=a[3],t[13]=a[7],t[14]=a[11],t[15]=a[15];return t}function s(t,a){var n=a[0],r=a[1],o=a[2],i=a[3],h=a[4],M=a[5],s=a[6],u=a[7],e=a[8],v=a[9],c=a[10],d=a[11],f=a[12],b=a[13],m=a[14],l=a[15],p=n*M-r*h,S=n*s-o*h,P=n*u-i*h,I=r*s-o*M,O=r*u-i*M,E=o*u-i*s,L=e*b-v*f,N=e*m-c*f,q=e*l-d*f,w=v*m-c*b,x=v*l-d*b,g=c*l-d*m,R=p*g-S*x+P*w+I*q-O*N+E*L;return R?(R=1/R,t[0]=(M*g-s*x+u*w)*R,t[1]=(o*x-r*g-i*w)*R,t[2]=(b*E-m*O+l*I)*R,t[3]=(c*O-v*E-d*I)*R,t[4]=(s*q-h*g-u*N)*R,t[5]=(n*g-o*q+i*N)*R,t[6]=(m*P-f*E-l*S)*R,t[7]=(e*E-c*P+d*S)*R,t[8]=(h*x-M*q+u*L)*R,t[9]=(r*q-n*x-i*L)*R,t[10]=(f*O-b*P+l*p)*R,t[11]=(v*P-e*O-d*p)*R,t[12]=(M*N-h*w-s*L)*R,t[13]=(n*w-r*N+o*L)*R,t[14]=(b*S-f*I-m*p)*R,t[15]=(e*I-v*S+c*p)*R,t):null}function u(t,a){var n=a[0],r=a[1],o=a[2],i=a[3],h=a[4],M=a[5],s=a[6],u=a[7],e=a[8],v=a[9],c=a[10],d=a[11],f=a[12],b=a[13],m=a[14],l=a[15];return t[0]=M*(c*l-d*m)-v*(s*l-u*m)+b*(s*d-u*c),t[1]=-(r*(c*l-d*m)-v*(o*l-i*m)+b*(o*d-i*c)),t[2]=r*(s*l-u*m)-M*(o*l-i*m)+b*(o*u-i*s),t[3]=-(r*(s*d-u*c)-M*(o*d-i*c)+v*(o*u-i*s)),t[4]=-(h*(c*l-d*m)-e*(s*l-u*m)+f*(s*d-u*c)),t[5]=n*(c*l-d*m)-e*(o*l-i*m)+f*(o*d-i*c),t[6]=-(n*(s*l-u*m)-h*(o*l-i*m)+f*(o*u-i*s)),t[7]=n*(s*d-u*c)-h*(o*d-i*c)+e*(o*u-i*s),t[8]=h*(v*l-d*b)-e*(M*l-u*b)+f*(M*d-u*v),t[9]=-(n*(v*l-d*b)-e*(r*l-i*b)+f*(r*d-i*v)),t[10]=n*(M*l-u*b)-h*(r*l-i*b)+f*(r*u-i*M),t[11]=-(n*(M*d-u*v)-h*(r*d-i*v)+e*(r*u-i*M)),t[12]=-(h*(v*m-c*b)-e*(M*m-s*b)+f*(M*c-s*v)),t[13]=n*(v*m-c*b)-e*(r*m-o*b)+f*(r*c-o*v),t[14]=-(n*(M*m-s*b)-h*(r*m-o*b)+f*(r*s-o*M)),t[15]=n*(M*c-s*v)-h*(r*c-o*v)+e*(r*s-o*M),t}function e(t){var a=t[0],n=t[1],r=t[2],o=t[3],i=t[4],h=t[5],M=t[6],s=t[7],u=t[8],e=t[9],v=t[10],c=t[11],d=t[12],f=t[13],b=t[14],m=t[15];return(a*h-n*i)*(v*m-c*b)-(a*M-r*i)*(e*m-c*f)+(a*s-o*i)*(e*b-v*f)+(n*M-r*h)*(u*m-c*d)-(n*s-o*h)*(u*b-v*d)+(r*s-o*M)*(u*f-e*d)}function v(t,a,n){var r=a[0],o=a[1],i=a[2],h=a[3],M=a[4],s=a[5],u=a[6],e=a[7],v=a[8],c=a[9],d=a[10],f=a[11],b=a[12],m=a[13],l=a[14],p=a[15],S=n[0],P=n[1],I=n[2],O=n[3];return t[0]=S*r+P*M+I*v+O*b,t[1]=S*o+P*s+I*c+O*m,t[2]=S*i+P*u+I*d+O*l,t[3]=S*h+P*e+I*f+O*p,S=n[4],P=n[5],I=n[6],O=n[7],t[4]=S*r+P*M+I*v+O*b,t[5]=S*o+P*s+I*c+O*m,t[6]=S*i+P*u+I*d+O*l,t[7]=S*h+P*e+I*f+O*p,S=n[8],P=n[9],I=n[10],O=n[11],t[8]=S*r+P*M+I*v+O*b,t[9]=S*o+P*s+I*c+O*m,t[10]=S*i+P*u+I*d+O*l,t[11]=S*h+P*e+I*f+O*p,S=n[12],P=n[13],I=n[14],O=n[15],t[12]=S*r+P*M+I*v+O*b,t[13]=S*o+P*s+I*c+O*m,t[14]=S*i+P*u+I*d+O*l,t[15]=S*h+P*e+I*f+O*p,t}function c(t,a,n){var r=n[0],o=n[1],i=n[2],h=void 0,M=void 0,s=void 0,u=void 0,e=void 0,v=void 0,c=void 0,d=void 0,f=void 0,b=void 0,m=void 0,l=void 0;return a===t?(t[12]=a[0]*r+a[4]*o+a[8]*i+a[12],t[13]=a[1]*r+a[5]*o+a[9]*i+a[13],t[14]=a[2]*r+a[6]*o+a[10]*i+a[14],t[15]=a[3]*r+a[7]*o+a[11]*i+a[15]):(h=a[0],M=a[1],s=a[2],u=a[3],e=a[4],v=a[5],c=a[6],d=a[7],f=a[8],b=a[9],m=a[10],l=a[11],t[0]=h,t[1]=M,t[2]=s,t[3]=u,t[4]=e,t[5]=v,t[6]=c,t[7]=d,t[8]=f,t[9]=b,t[10]=m,t[11]=l,t[12]=h*r+e*o+f*i+a[12],t[13]=M*r+v*o+b*i+a[13],t[14]=s*r+c*o+m*i+a[14],t[15]=u*r+d*o+l*i+a[15]),t}function d(t,a,n){var r=n[0],o=n[1],i=n[2];return t[0]=a[0]*r,t[1]=a[1]*r,t[2]=a[2]*r,t[3]=a[3]*r,t[4]=a[4]*o,t[5]=a[5]*o,t[6]=a[6]*o,t[7]=a[7]*o,t[8]=a[8]*i,t[9]=a[9]*i,t[10]=a[10]*i,t[11]=a[11]*i,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t}function f(t,a,n,o){var i=o[0],h=o[1],M=o[2],s=Math.sqrt(i*i+h*h+M*M),u=void 0,e=void 0,v=void 0,c=void 0,d=void 0,f=void 0,b=void 0,m=void 0,l=void 0,p=void 0,S=void 0,P=void 0,I=void 0,O=void 0,E=void 0,L=void 0,N=void 0,q=void 0,w=void 0,x=void 0,g=void 0,R=void 0,y=void 0,T=void 0;return s<r.EPSILON?null:(s=1/s,i*=s,h*=s,M*=s,u=Math.sin(n),e=Math.cos(n),v=1-e,c=a[0],d=a[1],f=a[2],b=a[3],m=a[4],l=a[5],p=a[6],S=a[7],P=a[8],I=a[9],O=a[10],E=a[11],L=i*i*v+e,N=h*i*v+M*u,q=M*i*v-h*u,w=i*h*v-M*u,x=h*h*v+e,g=M*h*v+i*u,R=i*M*v+h*u,y=h*M*v-i*u,T=M*M*v+e,t[0]=c*L+m*N+P*q,t[1]=d*L+l*N+I*q,t[2]=f*L+p*N+O*q,t[3]=b*L+S*N+E*q,t[4]=c*w+m*x+P*g,t[5]=d*w+l*x+I*g,t[6]=f*w+p*x+O*g,t[7]=b*w+S*x+E*g,t[8]=c*R+m*y+P*T,t[9]=d*R+l*y+I*T,t[10]=f*R+p*y+O*T,t[11]=b*R+S*y+E*T,a!==t&&(t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t)}function b(t,a,n){var r=Math.sin(n),o=Math.cos(n),i=a[4],h=a[5],M=a[6],s=a[7],u=a[8],e=a[9],v=a[10],c=a[11];return a!==t&&(t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[4]=i*o+u*r,t[5]=h*o+e*r,t[6]=M*o+v*r,t[7]=s*o+c*r,t[8]=u*o-i*r,t[9]=e*o-h*r,t[10]=v*o-M*r,t[11]=c*o-s*r,t}function m(t,a,n){var r=Math.sin(n),o=Math.cos(n),i=a[0],h=a[1],M=a[2],s=a[3],u=a[8],e=a[9],v=a[10],c=a[11];return a!==t&&(t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[0]=i*o-u*r,t[1]=h*o-e*r,t[2]=M*o-v*r,t[3]=s*o-c*r,t[8]=i*r+u*o,t[9]=h*r+e*o,t[10]=M*r+v*o,t[11]=s*r+c*o,t}function l(t,a,n){var r=Math.sin(n),o=Math.cos(n),i=a[0],h=a[1],M=a[2],s=a[3],u=a[4],e=a[5],v=a[6],c=a[7];return a!==t&&(t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[0]=i*o+u*r,t[1]=h*o+e*r,t[2]=M*o+v*r,t[3]=s*o+c*r,t[4]=u*o-i*r,t[5]=e*o-h*r,t[6]=v*o-M*r,t[7]=c*o-s*r,t}function p(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t}function S(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=a[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function P(t,a,n){var o=n[0],i=n[1],h=n[2],M=Math.sqrt(o*o+i*i+h*h),s=void 0,u=void 0,e=void 0;return M<r.EPSILON?null:(M=1/M,o*=M,i*=M,h*=M,s=Math.sin(a),u=Math.cos(a),e=1-u,t[0]=o*o*e+u,t[1]=i*o*e+h*s,t[2]=h*o*e-i*s,t[3]=0,t[4]=o*i*e-h*s,t[5]=i*i*e+u,t[6]=h*i*e+o*s,t[7]=0,t[8]=o*h*e+i*s,t[9]=i*h*e-o*s,t[10]=h*h*e+u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function I(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function O(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function E(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function L(t,a,n){var r=a[0],o=a[1],i=a[2],h=a[3],M=r+r,s=o+o,u=i+i,e=r*M,v=r*s,c=r*u,d=o*s,f=o*u,b=i*u,m=h*M,l=h*s,p=h*u;return t[0]=1-(d+b),t[1]=v+p,t[2]=c-l,t[3]=0,t[4]=v-p,t[5]=1-(e+b),t[6]=f+m,t[7]=0,t[8]=c+l,t[9]=f-m,t[10]=1-(e+d),t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function N(t,a){var n=C,r=-a[0],o=-a[1],i=-a[2],h=a[3],M=a[4],s=a[5],u=a[6],e=a[7],v=r*r+o*o+i*i+h*h;return v>0?(n[0]=2*(M*h+e*r+s*i-u*o)/v,n[1]=2*(s*h+e*o+u*r-M*i)/v,n[2]=2*(u*h+e*i+M*o-s*r)/v):(n[0]=2*(M*h+e*r+s*i-u*o),n[1]=2*(s*h+e*o+u*r-M*i),n[2]=2*(u*h+e*i+M*o-s*r)),L(t,a,n),t}function q(t,a){return t[0]=a[12],t[1]=a[13],t[2]=a[14],t}function w(t,a){var n=a[0],r=a[1],o=a[2],i=a[4],h=a[5],M=a[6],s=a[8],u=a[9],e=a[10];return t[0]=Math.sqrt(n*n+r*r+o*o),t[1]=Math.sqrt(i*i+h*h+M*M),t[2]=Math.sqrt(s*s+u*u+e*e),t}function x(t,a){var n=a[0]+a[5]+a[10],r=0;return n>0?(r=2*Math.sqrt(n+1),t[3]=.25*r,t[0]=(a[6]-a[9])/r,t[1]=(a[8]-a[2])/r,t[2]=(a[1]-a[4])/r):a[0]>a[5]&&a[0]>a[10]?(r=2*Math.sqrt(1+a[0]-a[5]-a[10]),t[3]=(a[6]-a[9])/r,t[0]=.25*r,t[1]=(a[1]+a[4])/r,t[2]=(a[8]+a[2])/r):a[5]>a[10]?(r=2*Math.sqrt(1+a[5]-a[0]-a[10]),t[3]=(a[8]-a[2])/r,t[0]=(a[1]+a[4])/r,t[1]=.25*r,t[2]=(a[6]+a[9])/r):(r=2*Math.sqrt(1+a[10]-a[0]-a[5]),t[3]=(a[1]-a[4])/r,t[0]=(a[8]+a[2])/r,t[1]=(a[6]+a[9])/r,t[2]=.25*r),t}function g(t,a,n,r){var o=a[0],i=a[1],h=a[2],M=a[3],s=o+o,u=i+i,e=h+h,v=o*s,c=o*u,d=o*e,f=i*u,b=i*e,m=h*e,l=M*s,p=M*u,S=M*e,P=r[0],I=r[1],O=r[2];return t[0]=(1-(f+m))*P,t[1]=(c+S)*P,t[2]=(d-p)*P,t[3]=0,t[4]=(c-S)*I,t[5]=(1-(v+m))*I,t[6]=(b+l)*I,t[7]=0,t[8]=(d+p)*O,t[9]=(b-l)*O,t[10]=(1-(v+f))*O,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function R(t,a,n,r,o){var i=a[0],h=a[1],M=a[2],s=a[3],u=i+i,e=h+h,v=M+M,c=i*u,d=i*e,f=i*v,b=h*e,m=h*v,l=M*v,p=s*u,S=s*e,P=s*v,I=r[0],O=r[1],E=r[2],L=o[0],N=o[1],q=o[2],w=(1-(b+l))*I,x=(d+P)*I,g=(f-S)*I,R=(d-P)*O,y=(1-(c+l))*O,T=(m+p)*O,D=(f+S)*E,A=(m-p)*E,j=(1-(c+b))*E;return t[0]=w,t[1]=x,t[2]=g,t[3]=0,t[4]=R,t[5]=y,t[6]=T,t[7]=0,t[8]=D,t[9]=A,t[10]=j,t[11]=0,t[12]=n[0]+L-(w*L+R*N+D*q),t[13]=n[1]+N-(x*L+y*N+A*q),t[14]=n[2]+q-(g*L+T*N+j*q),t[15]=1,t}function y(t,a){var n=a[0],r=a[1],o=a[2],i=a[3],h=n+n,M=r+r,s=o+o,u=n*h,e=r*h,v=r*M,c=o*h,d=o*M,f=o*s,b=i*h,m=i*M,l=i*s;return t[0]=1-v-f,t[1]=e+l,t[2]=c-m,t[3]=0,t[4]=e-l,t[5]=1-u-f,t[6]=d+b,t[7]=0,t[8]=c+m,t[9]=d-b,t[10]=1-u-v,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function T(t,a,n,r,o,i,h){var M=1/(n-a),s=1/(o-r),u=1/(i-h);return t[0]=2*i*M,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*i*s,t[6]=0,t[7]=0,t[8]=(n+a)*M,t[9]=(o+r)*s,t[10]=(h+i)*u,t[11]=-1,t[12]=0,t[13]=0,t[14]=h*i*2*u,t[15]=0,t}function D(t,a,n,r,o){var i=1/Math.tan(a/2),h=void 0;return t[0]=i/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=o&&o!==1/0?(h=1/(r-o),t[10]=(o+r)*h,t[14]=2*o*r*h):(t[10]=-1,t[14]=-2*r),t}function A(t,a,n,r){var o=Math.tan(a.upDegrees*Math.PI/180),i=Math.tan(a.downDegrees*Math.PI/180),h=Math.tan(a.leftDegrees*Math.PI/180),M=Math.tan(a.rightDegrees*Math.PI/180),s=2/(h+M),u=2/(o+i);return t[0]=s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=u,t[6]=0,t[7]=0,t[8]=-(h-M)*s*.5,t[9]=(o-i)*u*.5,t[10]=r/(n-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*n/(n-r),t[15]=0,t}function j(t,a,n,r,o,i,h){var M=1/(a-n),s=1/(r-o),u=1/(i-h);return t[0]=-2*M,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*u,t[11]=0,t[12]=(a+n)*M,t[13]=(o+r)*s,t[14]=(h+i)*u,t[15]=1,t}function F(t,a,n,o){var i=void 0,M=void 0,s=void 0,u=void 0,e=void 0,v=void 0,c=void 0,d=void 0,f=void 0,b=void 0,m=a[0],l=a[1],p=a[2],S=o[0],P=o[1],I=o[2],O=n[0],E=n[1],L=n[2];return Math.abs(m-O)<r.EPSILON&&Math.abs(l-E)<r.EPSILON&&Math.abs(p-L)<r.EPSILON?h(t):(c=m-O,d=l-E,f=p-L,b=1/Math.sqrt(c*c+d*d+f*f),c*=b,d*=b,f*=b,i=P*f-I*d,M=I*c-S*f,s=S*d-P*c,b=Math.sqrt(i*i+M*M+s*s),b?(b=1/b,i*=b,M*=b,s*=b):(i=0,M=0,s=0),u=d*s-f*M,e=f*i-c*s,v=c*M-d*i,b=Math.sqrt(u*u+e*e+v*v),b?(b=1/b,u*=b,e*=b,v*=b):(u=0,e=0,v=0),t[0]=i,t[1]=u,t[2]=c,t[3]=0,t[4]=M,t[5]=e,t[6]=d,t[7]=0,t[8]=s,t[9]=v,t[10]=f,t[11]=0,t[12]=-(i*m+M*l+s*p),t[13]=-(u*m+e*l+v*p),t[14]=-(c*m+d*l+f*p),t[15]=1,t)}function Q(t,a,n,r){var o=a[0],i=a[1],h=a[2],M=r[0],s=r[1],u=r[2],e=o-n[0],v=i-n[1],c=h-n[2],d=e*e+v*v+c*c;d>0&&(d=1/Math.sqrt(d),e*=d,v*=d,c*=d);var f=s*c-u*v,b=u*e-M*c,m=M*v-s*e;return d=f*f+b*b+m*m,d>0&&(d=1/Math.sqrt(d),f*=d,b*=d,m*=d),t[0]=f,t[1]=b,t[2]=m,t[3]=0,t[4]=v*m-c*b,t[5]=c*f-e*m,t[6]=e*b-v*f,t[7]=0,t[8]=e,t[9]=v,t[10]=c,t[11]=0,t[12]=o,t[13]=i,t[14]=h,t[15]=1,t}function X(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function Y(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2)+Math.pow(t[9],2)+Math.pow(t[10],2)+Math.pow(t[11],2)+Math.pow(t[12],2)+Math.pow(t[13],2)+Math.pow(t[14],2)+Math.pow(t[15],2))}function Z(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t[6]=a[6]+n[6],t[7]=a[7]+n[7],t[8]=a[8]+n[8],t[9]=a[9]+n[9],t[10]=a[10]+n[10],t[11]=a[11]+n[11],t[12]=a[12]+n[12],t[13]=a[13]+n[13],t[14]=a[14]+n[14],t[15]=a[15]+n[15],t}function _(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t[4]=a[4]-n[4],t[5]=a[5]-n[5],t[6]=a[6]-n[6],t[7]=a[7]-n[7],t[8]=a[8]-n[8],t[9]=a[9]-n[9],t[10]=a[10]-n[10],t[11]=a[11]-n[11],t[12]=a[12]-n[12],t[13]=a[13]-n[13],t[14]=a[14]-n[14],t[15]=a[15]-n[15],t}function k(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t[6]=a[6]*n,t[7]=a[7]*n,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12]*n,t[13]=a[13]*n,t[14]=a[14]*n,t[15]=a[15]*n,t}function V(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t[4]=a[4]+n[4]*r,t[5]=a[5]+n[5]*r,t[6]=a[6]+n[6]*r,t[7]=a[7]+n[7]*r,t[8]=a[8]+n[8]*r,t[9]=a[9]+n[9]*r,t[10]=a[10]+n[10]*r,t[11]=a[11]+n[11]*r,t[12]=a[12]+n[12]*r,t[13]=a[13]+n[13]*r,t[14]=a[14]+n[14]*r,t[15]=a[15]+n[15]*r,t}function z(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[7]===a[7]&&t[8]===a[8]&&t[9]===a[9]&&t[10]===a[10]&&t[11]===a[11]&&t[12]===a[12]&&t[13]===a[13]&&t[14]===a[14]&&t[15]===a[15]}function B(t,a){var n=t[0],o=t[1],i=t[2],h=t[3],M=t[4],s=t[5],u=t[6],e=t[7],v=t[8],c=t[9],d=t[10],f=t[11],b=t[12],m=t[13],l=t[14],p=t[15],S=a[0],P=a[1],I=a[2],O=a[3],E=a[4],L=a[5],N=a[6],q=a[7],w=a[8],x=a[9],g=a[10],R=a[11],y=a[12],T=a[13],D=a[14],A=a[15];return Math.abs(n-S)<=r.EPSILON*Math.max(1,Math.abs(n),Math.abs(S))&&Math.abs(o-P)<=r.EPSILON*Math.max(1,Math.abs(o),Math.abs(P))&&Math.abs(i-I)<=r.EPSILON*Math.max(1,Math.abs(i),Math.abs(I))&&Math.abs(h-O)<=r.EPSILON*Math.max(1,Math.abs(h),Math.abs(O))&&Math.abs(M-E)<=r.EPSILON*Math.max(1,Math.abs(M),Math.abs(E))&&Math.abs(s-L)<=r.EPSILON*Math.max(1,Math.abs(s),Math.abs(L))&&Math.abs(u-N)<=r.EPSILON*Math.max(1,Math.abs(u),Math.abs(N))&&Math.abs(e-q)<=r.EPSILON*Math.max(1,Math.abs(e),Math.abs(q))&&Math.abs(v-w)<=r.EPSILON*Math.max(1,Math.abs(v),Math.abs(w))&&Math.abs(c-x)<=r.EPSILON*Math.max(1,Math.abs(c),Math.abs(x))&&Math.abs(d-g)<=r.EPSILON*Math.max(1,Math.abs(d),Math.abs(g))&&Math.abs(f-R)<=r.EPSILON*Math.max(1,Math.abs(f),Math.abs(R))&&Math.abs(b-y)<=r.EPSILON*Math.max(1,Math.abs(b),Math.abs(y))&&Math.abs(m-T)<=r.EPSILON*Math.max(1,Math.abs(m),Math.abs(T))&&Math.abs(l-D)<=r.EPSILON*Math.max(1,Math.abs(l),Math.abs(D))&&Math.abs(p-A)<=r.EPSILON*Math.max(1,Math.abs(p),Math.abs(A))}Object.defineProperty(a,"__esModule",{value:!0}),a.copy=o,a.set=i,a.identity=h,a.transpose=M,a.invert=s,a.adjoint=u,a.determinant=e,a.multiply=v,a.translate=c,a.scale=d,a.rotate=f,a.rotateX=b,a.rotateY=m,a.rotateZ=l,a.fromTranslation=p,a.fromScaling=S,a.fromRotation=P,a.fromXRotation=I,a.fromYRotation=O,a.fromZRotation=E,a.fromRotationTranslation=L,a.fromQuat2=N;var C=n.create();a.getTranslation=q,a.getScaling=w,a.getRotation=x,a.fromRotationTranslationScale=g,a.fromRotationTranslationScaleOrigin=R,a.fromQuat=y,a.frustum=T,a.perspective=D,a.perspectiveFromFieldOfView=A,a.ortho=j,a.lookAt=F,a.targetTo=Q,a.str=X,a.frob=Y,a.add=Z,a.subtract=_,a.multiplyScalar=k,a.multiplyScalarAndAdd=V,a.exactEquals=z,a.equals=B,a.mul=v,a.sub=_}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=15.js.map