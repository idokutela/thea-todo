!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.App=t():e.App=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=40)}([function(e,t,n){"use strict";function r(e){return function(t,n){var r=e(t,n),i=u(r,2),o=i[0],a=i[1];return o.call(this,a,n)}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){var n=[],r=!0,u=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){u=!0,i=e}finally{try{!r&&a.return&&a.return()}finally{if(u)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){N=e}function a(e,t,n,r){if(e&&n!==r&&String(n)!==String(r))return n?void(e.style[t]=String(n)):void e.style.removeProperty((0,_.default)(t))}function l(e,t,n,r){if(e&&n!==r){var u=I(t),i=L(t),o=u||i;if(o)return r&&e.removeEventListener(o,r,!!i),void(n&&e.addEventListener(o,n,!!i));if(String(n)!==String(r))return void 0!==n?void e.setAttribute(t,String(n)):void e.removeAttribute(t)}}function c(e){function t(){function e(e,r,i,o){var a=this||{firstChild:function(){return this[C]},lastChild:function(){return this[C]},children:function(){return[this[C]]},toString:function(){return this[C]?this[C].outerHTML:N(n,this[x],this[E],this[P]&&this[P].toString())},attrMap:function(){return this[x]},styleMap:function(){return this[E]},childComponent:function(){return this[P]},unmount:function(){this[C]&&([].concat(u(this[x].entries())).forEach(function(t){var n=d(t,2),r=n[0],u=n[1],i=I(r),o=L(r),a=i||o;a&&e.removeEventListener(a,u,!!o)}),this[P]&&this[P].unmount(),(0,y.remove)(this[C]))},render:t};return a[C]=e,a[x]=r,a[E]=i,a[P]=o,_&&_(a[C]),a}var r=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a=o(a);var c=a,f=c.children,h=void 0===f?[]:f,p=c.style,b=void 0===p?{}:p,g=c.ref,_=void 0===g?function(){}:g;delete a.children,delete a.style,delete a.ref;var M=S(b),j=(0,s.default)(a);if(l=a.xmlns?Object.assign({},l,i({},T,a.xmlns)):Object.assign({},l),!this){var A=h.length?(0,m.default)(h,l):void 0,k=void 0;if(w.default&&(k=l[T]?document.createElementNS(l[T],n):document.createElement(n)),k){if(A){var B=document.createDocumentFragment();(0,y.insertAll)(A.children(),void 0,B),k.appendChild(B)}var V=D(k),F=z(k);[].concat(u(j.entries())).forEach(function(e){var t=d(e,2),n=t[0],r=t[1];return F(n,r)}),[].concat(u(M.entries())).forEach(function(e){var t=d(e,2),n=t[0],r=t[1];return V(n,r)})}return e(k,j,M,A)}if(!this.unmount){var W=void 0;return h.length&&(W=m.default.call(this.firstChild,h,l)),(0,O.default)(j.entries(),function(e){var t=d(e,2),n=t[0],u=t[1],i=I(n),o=L(n),a=i||o;a&&r.addEventListener(a,u,!!o)}),e(this,j,M,W)}var H=this.firstChild(),K=D(H),R=z(H);(0,v.default)(this.attrMap(),j,R),(0,v.default)(this.styleMap(),M,K);var q=this.childComponent();return q&&q.render(h,l),e.call(this,H,j,M,q)}var n=e.toLowerCase(),r=B(n),o=r?function(e){return Object.assign({xmlns:r},e)}:V;k.has(n);return A.set(n,t),t}Object.defineProperty(t,"__esModule",{value:!0}),t.getCapturedEventName=t.getBubbledEventName=t.NAMESPACE=void 0;var d=function(){function e(e,t){var n=[],r=!0,u=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){u=!0,i=e}finally{try{!r&&a.return&&a.return()}finally{if(u)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.setToString=o;var f=n(50),s=r(f),h=n(51),v=r(h),p=n(18),b=n(16),m=r(b),y=n(7),g=(n(5),n(17)),_=r(g),M=n(10),O=r(M),j=n(9),w=r(j),S=function(e){return(0,p.toMap)((0,p.entries)(e))},A=new Map,C=Symbol("node"),x=Symbol("attrs"),E=Symbol("styles"),P=Symbol("child component"),T=t.NAMESPACE=Symbol("dom namespace"),N=function(){throw new Error("Please import domKnowledge to use TheaDOM outside of the DOM.")},k=new Set,I=t.getBubbledEventName=function(e){return e.startsWith("on")?e.substr(2):void 0},L=t.getCapturedEventName=function(e){return e.startsWith("capture")?e.substr(7):void 0},D=function(e){return function(t,n,r){return a(e,t,n,r)}},z=function(e){return function(t,n,r){return l(e,t,n,r)}},B=function(e){return"svg"===e&&"http://www.w3.org/2000/svg"},V=function(e){return Object.assign({},e)};t.default=function(e){return A.get(e.toLowerCase())||c(e)}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(15),i=r(u),o=n(49),a=r(o),l=n(5),c=n(9),d=r(c),f=function(e){return e},s=i.default,h=d.default?function(e){return document.createTextNode(e)}:function(){},v=l.TEXT;t.default=(0,a.default)({attrsToValue:f,valueToString:s,createNode:h,nodeType:v,componentName:"Text"})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(r),i=n(1).default;t.default=(0,u.default)(function(e){return[i("svg"),Object.assign({"aria-hidden":"true",fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24"},e)]})},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=e,r=t.length-1;r>=0;r--)n=t[r](n);return n}}Object.defineProperty(t,"__esModule",{value:!0}),t.compose=u;t.get=function(e){return function(t){return t[e]}},t.set=function(e,t){return function(n){return Object.assign(n,r({},e,t))}},t.unset=function(e){return function(t){return delete t[e],t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.TRANSPARENT=Symbol("transparent"),t.ELEMENT=1,t.TEXT=3,t.COMMENT=8},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t){function n(e,t){var n=this||{nodeMap:function(){return this[b]},firstChild:function(){return this[m][0].firstChild()},lastChild:function(){return this[m][this[m].length-1].lastChild()},children:function(){return(0,h.default)(this[m].map(function(e){return e.children()}))},toString:function(){return this[m].reduce(function(e,t){return e+t.toString()},"")},unmount:function(){this[m].forEach(function(e){return e.unmount()})},render:u};return n[b]=e,n[m]=t,n}function r(e,n,r,u,o){var a=r.childComponents,c=r.nodeMap,d=r.front,f=i(u,3),s=f[0],h=f[1],v=f[2],p=void 0===v?o:v,b=e.get(p),m=void 0,y=void 0;return b&&b.render===s?(y=b.firstChild()!==d,m=b.render(h,t)):(m=s(h,t),b&&(d=d===b.firstChild()?b.lastChild()&&b.lastChild().nextSibling:d),b&&b.unmount(),b=void 0,y=!0),y&&n&&(0,l.insertAll)(m.children(),d,n),c.set(p,m),e.delete(p),a.push(m),d=m.lastChild()&&m.lastChild().nextSibling,{nodeMap:c,childComponents:a,front:d}}var o=e;if(Array.isArray(e)?e.length&&"function"==typeof e[0]&&(o=[e]):o=[e],o=o.filter(y).map(g),0===o.length&&(o=[[f.default]]),!this)return function(e){function r(e,n,r){var u=e.nodeMap,o=e.childComponents,a=i(n,3),l=a[0],c=a[1],d=a[2],f=l(c,t),s=void 0===d?r:d;return u.set(s,f),o.push(f),{nodeMap:u,childComponents:o}}var u=e.reduce(r,{nodeMap:new Map,childComponents:[]});return n(u.nodeMap,u.childComponents)}(o);if(!this.unmount)return function(e,r){function u(e,n,r){var u=e.nodeMap,o=e.childComponents,a=e.firstNode,l=i(n,3),c=l[0],d=l[1],f=l[2],s=void 0===f?r:f,h=c.call(a,d,t);return u.set(s,h),o.push(h),{nodeMap:u,childComponents:o,firstNode:h.lastChild().nextSibling}}var o=r.reduce(u,{nodeMap:new Map,childComponents:[],firstNode:e});return n(o.nodeMap,o.childComponents)}(this,o);var a=o.reduce(function(e,t){return r.bind(void 0,e,t)}(this.nodeMap(),this.firstChild()&&this.firstChild().parentNode),{childComponents:[],nodeMap:new Map,front:this.firstChild()}),c=a.childComponents,d=a.nodeMap;return(0,p.default)(this.nodeMap().values(),function(e){return e.unmount()}),n.call(this,d,c)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){var n=[],r=!0,u=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){u=!0,i=e}finally{try{!r&&a.return&&a.return()}finally{if(u)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=n(2),a=r(o),l=n(7),c=n(5),d=n(48),f=r(d),s=n(19),h=r(s),v=n(10),p=r(v),b=Symbol.for("node mape"),m=Symbol.for("child components"),y=function(e){return null!==e&&void 0!==e&&!0!==e&&!1!==e},g=function(e){return Array.isArray(e)?e:[a.default,String(e)]};u[c.TRANSPARENT]=!0,t.default=u},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var u=t.insert=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t&&t.parentNode;return n&&(t?n.insertBefore(e,t):n.appendChild(e))};t.remove=function(e){return e&&e.parentNode&&e.parentNode.removeChild(e)},t.insertAll=function(e,t,n){return[].concat(r(e)).forEach(function(e){return u(e,t,n)})}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),i=r(u),o=n(14),a=r(o),l=n(41),c=r(l),d=(n(2).default,n(1).default),f=n(6).default;t.default=(0,i.default)(function(e){var t=Object.assign({},e),n=t.label,r=t.children,u=t.class;return delete t.label,delete t.children,delete t.class,[d("button"),Object.assign({class:(0,a.default)(c.default.button,u),children:[[f,r],[d("span"),{class:c.default.hidden,children:[[f,n]]}]]},t)]})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="undefined"!=typeof window},function(e,t,n){"use strict";function r(e,t){var n=e[Symbol.iterator](),r=void 0,u=void 0,i=0;do{var o=n.next();if(u=o.value,r=o.done)return;t(u,i),i+=1}while(!0!==r);throw new Error("This should never be reached!")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),i=r(u),o=n(3),a=r(o),l=(n(2).default,n(1).default);t.default=(0,i.default)(function(e){return[a.default,Object.assign({children:[[l("path"),{d:"M0 0h24v24H0z",fill:"none"}],[l("path"),{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}]]},e)]})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var u=n(0),i=r(u),o=n(14),a=r(o),l=n(8),c=r(l),d=n(11),f=r(d),s=n(26),h=r(s),v=n(25),p=r(v),b=n(4),m=n(13),y=r(m),g=n(42),_=r(g),M=n(34),O=n(31),j=r(O),w=n(32),S=r(w),A=n(33),C=r(A),x=(n(2).default,n(16).default),E=n(1).default,P=n(6).default,T=t.render=function(e){var t=e.disabled,n=e.value,r=e.placeholder,u=e.onInput,i=e.state,o=i.valueChanged,l=i.isFocussed,d=(0,j.default)(i),s=d.focus,v=d.blur,b=(0,S.default)(i,u),m=b.accept,y=b.reject,g=b.handleInput,M=b.handleKeyDown,O=(0,C.default)(i);return[E("span"),{class:(0,a.default)(_.default.container,l&&_.default.isFocussed),ref:O("parent"),captureFocus:s,captureBlur:v,children:[[E("span"),{class:_.default.inputcontainer,children:[[p.default,{type:"text",class:_.default.input,value:n,placeholder:r,ref:O("input"),onkeydown:M,oninput:g,disabled:t}]]}],[P,o?[x,[[c.default,{label:"Accept",onclick:m,children:[[f.default,{}]]}],[c.default,{label:"Cancel",onClick:y,children:[[h.default,{}]]}]],0]:null]]}]};t.default=(0,b.compose)((0,y.default)(M.initialState,M.stateToProps),i.default)(T)},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var u=Symbol("is rendering"),i=Symbol("attrs"),o=Symbol("context"),a=Symbol("update queue"),l=Symbol("state"),c=function(e){return function(t){var n=e[a]=e[a]||[];if(t&&n.push(t),!e[u]&&n.length){for(var r=e[l];n.length;)r=n.pop()(r);e[l]=r,e.render(e[i],e[o])}}},d=function(e,t,n){var u,i=Object.create(e);return Object.assign(i,(u={},r(u,l,Object.assign({},t)),r(u,a,n),r(u,"updateState",c(i)),u)),i};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e,t){return Object.assign({},e,{state:t})};return function(n){function r(r,u){var l=[],c=void 0,f=function(e){return c?c(e):l.push(e)},s=Object.assign({},e,{update:f}),h=t(r,s),v=n.call(this,h,u),p=d(v,s,l);return p[i]=r,p[o]=u,p.render=a,c=p.updateState,c(),p}function a(e,a){if(!this||!this.unmount)return r.call(this,e,a);this[i]=e,this[o]=a,this[u]=!0;var c=Object.assign({},this[l],{update:this.updateState}),d=t(e,c);return n.call(this,d,a),this[u]=!1,this.updateState(),this}if("function"!=typeof n)throw new TypeError("Expected a render function");return a}}},function(e,t,n){var r,u;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var u=typeof r;if("string"===u||"number"===u)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===u)for(var o in r)i.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}var i={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=n:(r=[],void 0!==(u=function(){return n}.apply(t,r))&&(e.exports=u))}()},function(e,t,n){"use strict";function r(e){var t=""+e,n=u.exec(t);if(!n)return t;var r,i="",o=0,a=0;for(o=n.index;o<t.length;o++){switch(t.charCodeAt(o)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}a!==o&&(i+=t.substring(a,o)),a=o+1,i+=r}return a!==o?i+t.substring(a,o):i}/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var u=/["'&<>]/;e.exports=r},function(e,t,n){"use strict";function r(){function e(e){var t=this||{firstChild:function(){return this[l][0].firstChild()},lastChild:function(){return this[l][this[l].length-1].lastChild()},children:function(){return(0,a.default)(this[l].map(function(e){return e.children()}))},toString:function(){return this[l].reduce(function(e,t){return e+t.toString()},"")},unmount:function(){this[l].forEach(function(e){return e.unmount()})},childComponents:function(){return this[l]},render:r};return t[l]=e,t}function t(e,t){var n=u(e,2),r=n[0],i=n[1];return r.call(d[t],i,o)}var n=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments[1],c=void 0;if(!this)return c=i.map(function(e){var t=u(e,2);return(0,t[0])(t[1],o)}),e(c);if(!this.unmount)return c=i.reduce(function(e,t){var r=u(t,2),i=r[0],a=r[1],l=e.length?e[e.length-1].lastChild().nextSibling:n;return e.push(i.call(l,a,o)),e},[]),e(c);var d=this.childComponents();return c=i.map(t),e.call(this,c)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){var n=[],r=!0,u=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){u=!0,i=e}finally{try{!r&&a.return&&a.return()}finally{if(u)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=n(5),o=n(19),a=function(e){return e&&e.__esModule?e:{default:e}}(o),l=Symbol.for("child components");r[i.TRANSPARENT]=!0,t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.toMap=t.set=t.entries=t.keys=void 0;var i=function(){function e(e,t){var n=[],r=!0,u=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){u=!0,i=e}finally{try{!r&&a.return&&a.return()}finally{if(u)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=n(21),a=r(o),l=n(20),c=r(l),d=t.keys=function(e){return Object.keys(e)};t.entries=function(e){return(0,c.default)(d(e),function(t){return[t,e[t]]})},t.set=function(e,t,n){return Object.assign(e,u({},t,n))},t.toMap=function(e){return(0,a.default)(e,function(e,t){var n=i(t,2),r=n[0],u=n[1];return e.set(r,u)},new Map)}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){var t;if(!e[Symbol.iterator]){var n;return n={},r(n,Symbol.iterator,function(){return this}),r(n,"next",function(){return this.calledOnce?{done:!0}:(this.calledOnce=!0,{value:e})}),n}var i=e[Symbol.iterator](),o=void 0,a=void 0;return t={},r(t,Symbol.iterator,function(){return this}),r(t,"next",function(){if(a)return{done:!0};if(!o){var e=i.next(),t=e.value;if(e.done)return a=!0,{done:!0};if(!t[Symbol.iterator]||"string"==typeof t)return{value:t};o=u(t)}var n=o.next(),r=n.value;return n.done?(o=void 0,this.next()):{value:r}}),r(t,"current",{next:function(){return{done:!0}}}),t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n,u=e[Symbol.iterator](),i=-1,o=!1;return n={},r(n,Symbol.iterator,function(){return this}),r(n,"next",function(){if(o)return{done:!0};var e=u.next(),n=e.value;return e.done?(o=!0,{done:!0}):(i+=1,{value:t(n,i)})}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u},function(e,t,n){"use strict";function r(e,t,n){var r=e[Symbol.iterator](),u=n,i=void 0,o=void 0,a=0;do{var l=r.next();if(o=l.value,i=l.done)return u;u=t(u,o,a),a+=1}while(!0!==i);throw new Error("This should never be reached!")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)throw new Error("Expected a node to mount the TodoList into.");var t=document.createDocumentFragment(),n=p.call();for([].concat(u(n.children())).forEach(function(e){return t.appendChild(e)});e.firstChild;)e.removeChild(e.firstChild);e.appendChild(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.TodoWidget=void 0,t.default=i;var o=n(0),a=r(o),l=n(37),c=r(l),d=n(13),f=r(d),s=n(4),h=n(38),v=function(e){var t=e.items,n=e.update;return[c.default,Object.assign({items:t},(0,h.makeStateUpdaters)(n))]},p=t.TodoWidget=(0,s.compose)((0,f.default)(h.initialState,h.stateToAttrs),a.default)(v)},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n=o(t,2),r=n[0],u=n[1];return(0,f.getBubbledEventName)(r)||(0,f.getCapturedEventName)(r)?e:""===u?y(e,r):y(e,r+'="'+(0,c.default)(String(u))+'"')}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Map,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",u=m(n),i=u?y(g(t),u):g(t);return d.default.has(e)?i?"<"+e+" "+i+"/>":"<"+e+"/>":i?"<"+e+" "+i+">"+r+"</"+e+">":"<"+e+">"+r+"</"+e+">"}Object.defineProperty(t,"__esModule",{value:!0}),t.booleanAttributes=t.escapableRawTextElements=t.rawTextElements=t.voidElements=void 0;var o=function(){function e(e,t){var n=[],r=!0,u=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){u=!0,i=e}finally{try{!r&&a.return&&a.return()}finally{if(u)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=n(47);Object.defineProperty(t,"voidElements",{enumerable:!0,get:function(){return r(a).default}}),t.toStringNoDOM=i;var l=n(15),c=r(l),d=r(a),f=n(1),s=n(21),h=r(s),v=n(17),p=r(v),b=(t.rawTextElements=new Set(["script","style"]),t.escapableRawTextElements=new Set(["textarea","title"]),t.booleanAttributes=new Set(["allowfullscreen","async","autofocus","autoplay","checked","compact","controls","declare","default","defaultchecked","defaultmuted","defaultselected","defer","disabled","draggable","enabled","formnovalidate","hidden","indeterminate","inert","ismap","itemscope","loop","multiple","muted","nohref","noresize","noshade","novalidate","nowrap","open","pauseonexit","readonly","required","reversed","scoped","seamless","selected","sortable","spellcheck","translate","truespeed","typemustmatch","visible"]),function(e,t){var n=o(t,2),r=n[0],u=n[1];return e?e+";"+(0,p.default)(r)+":"+(0,c.default)(String(u)):(0,p.default)(r)+":"+(0,c.default)(String(u))}),m=function(e){return e.size?'style="'+(0,h.default)(e.entries(),b,"")+'"':""},y=function(e,t){return e.length&&'"'!==e[e.length-1]?e+" "+t:e+t},g=function(e){return(0,h.default)(e.entries(),u,"")};(0,f.setToString)(i)},function(e,t,n){"use strict";function r(e,t){var n=Object.assign({},e);return n.oninput=function(t){if(e.oninput)return void e.oninput(t);t.target.value=e.value,t.preventDefault()},n.ref=function(t){if(t){e.ref&&e.ref(t);var n=e.value||"";t.value!==n&&(t.value=n)}},a.call(this,n,t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(u),o=n(1).default,a=(0,i.default)(function(e){return[o("input"),Object.assign({},e)]});t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),i=r(u),o=n(3),a=r(o),l=(n(2).default,n(1).default);t.default=(0,i.default)(function(e){return[a.default,Object.assign({children:[[l("path"),{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}],[l("path"),{d:"M0 0h24v24H0z",fill:"none"}]]},e)]})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),i=r(u),o=n(3),a=r(o),l=(n(2).default,n(1).default);t.default=(0,i.default)(function(e){return[a.default,Object.assign({children:[[l("path"),{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}],[l("path"),{d:"M0 0h24v24H0z",fill:"none"}]]},e)]})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),i=r(u),o=n(3),a=r(o),l=(n(2).default,n(1).default);t.default=(0,i.default)(function(e){return[a.default,Object.assign({children:[[l("path"),{d:"M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"}],[l("path"),{d:"M0 0h24v24H0z",fill:"none"}]]},e)]})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),i=r(u),o=n(3),a=r(o),l=(n(2).default,n(1).default);t.default=(0,i.default)(function(e){return[a.default,Object.assign({children:[[l("path"),{d:"M0 0h24v24H0z",fill:"none"}],[l("path"),{d:"M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"}]]},e)]})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),i=r(u),o=n(3),a=r(o),l=(n(2).default,n(1).default);t.default=(0,i.default)(function(e){return[a.default,Object.assign({children:[[l("path"),{d:"M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"}],[l("path"),{d:"M0 0h24v24H0z",fill:"none"}]]},e)]})},function(e,t,n){"use strict";function r(e){function t(){a||r((0,u.set)("isFocussed",!0))}function n(){requestAnimationFrame(function(){a&&!o(i)&&r((0,u.set)("isFocussed",!1))})}var r=e.update,i=e.parent,a=e.isFocussed;return{focus:t,blur:n}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var u=n(4),i=function(e){return function t(n){return n===e||!!n&&t(n.parentNode)}},o=function(e){return i(e)(document.activeElement)}},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=e.valueChanged,r=e.update,i=e.input,o=e.currentValue,a=function(){n&&t&&t(o),i&&i.focus(),r((0,u.unset)("currentValue"))},l=function(){i&&i.focus(),r((0,u.unset)("currentValue"))};return{accept:a,reject:l,handleInput:function(e){return r((0,u.set)("currentValue",e.target.value))},handleKeyDown:function(e){switch(e.keyCode){case 13:a(),e.preventDefault();break;case 27:l(),e.preventDefault()}}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var u=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4);t.default=function(e){return function(t){return function(n){return e[t]!==n&&(0,r.set)(t,n)(e)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.stateToProps=function(e,t){var n=t.currentValue,r=void 0!==n&&n!==e.value,u=Object.assign(t,{valueChanged:r});return Object.assign({},e,{state:u,value:void 0!==n&&n||e.value})},t.initialState={isFocussed:!1}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var u=n(0),i=r(u),o=n(43),a=r(o),l=n(27),c=r(l),d=n(11),f=r(d),s=n(30),h=r(s),v=n(8),p=r(v),b=n(12),m=r(b),y=(n(2).default,n(1).default),g=n(6).default,_=t.render=function(e){var t=e.value,n=e.toggleDone,r=void 0===n?function(){}:n,u=e.deleteItem,i=void 0===u?function(){}:u,o=e.updateItem,l=void 0===o?function(){}:o,d=e.swapItems,s=void 0===d?function(){}:d,v=e.showSwitch,b=e.done;return[y("li"),{class:a.default.container,children:[[p.default,{onClick:r,label:"Done",class:b?a.default.checked:a.default.unchecked,children:[[f.default,{}]]}],[m.default,{value:t,disabled:b||void 0,onInput:l}],[p.default,{onClick:i,class:a.default.button,children:[[c.default,{}]]}],[g,v?[y("span"),{class:a.default.updownButton,children:[[p.default,{onclick:s,children:[[h.default,{}]]}]]},0]:null]]}]};t.default=(0,i.default)(_)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var u=n(0),i=r(u),o=n(8),a=r(o),l=n(29),c=r(l),d=n(44),f=r(d),s=n(12),h=r(s),v=n(28),p=r(v),b=(n(2).default,n(1).default),m=t.render=function(e){var t=e.noItems,n=e.addItem,r=void 0===n?function(){}:n,u=e.markAllAsDone,i=void 0===u?function(){}:u,o=e.deleteAll,l=void 0===o?function(){}:o;return[b("div"),{class:f.default.container,children:[[a.default,{onclick:i,disabled:t||void 0,children:[[c.default,{}]]}],[h.default,{placeholder:"Add todo",onInput:r,value:""}],[a.default,{onclick:l,disabled:t||void 0,children:[[p.default,{}]]}]]}]};t.default=(0,i.default)(m)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var i=n(0),o=r(i),a=n(36),l=r(a),c=n(35),d=r(c),f=n(39),s=r(f),h=n(45),v=r(h),p=(n(2).default,n(1).default),b=n(6).default,m=t.render=function(e){var t=e.items,n=void 0===t?[]:t,r=e.swapItems,i=void 0===r?function(){}:r,o=e.updateItem,a=void 0===o?function(){}:o,c=e.toggleDone,f=void 0===c?function(){}:c,h=e.deleteItem,m=void 0===h?function(){}:h,y=e.addItem,g=void 0===y?function(){}:y,_=e.markAllAsDone,M=void 0===_?function(){}:_,O=e.deleteAll,j=void 0===O?function(){}:O,w=function(e,t){return Object.assign({},e,{showSwitch:t!==n.length-1,toggleDone:function(){return f(t)},updateItem:function(e){return a(t,e)},swapItems:function(){return i(t)},deleteItem:function(){return m(t)}})},S={addItem:function(e){return g(e)},markAllAsDone:M,deleteAll:j};return[p("div"),{class:v.default.container,children:[[l.default,Object.assign({noItems:!n.length},S)],[b,n.length?[p("ul"),{class:v.default.todos,children:[[b,[].concat(u(n.map(w))).map(function(e,t){return function(e,t){return[d.default,Object.assign({},e),t]}(e,function(e){return e.id}(e))})]]},0]:[s.default,{},1]]]}]};t.default=(0,o.default)(m)},function(e,t,n){"use strict";function r(e){return{swapItems:function(t){return e(function(e){var n=e.items,r=n.slice();return r[t]=n[t+1],r[t+1]=n[t],Object.assign({},e,{items:r})})},updateItem:function(t,n){return e(function(e){var r=e.items,u=r.slice();return u[t]=Object.assign({},r[t],{value:n}),Object.assign({},e,{items:u})})},toggleDone:function(t){return e(function(e){var n=e.items,r=n.slice();return r[t]=Object.assign({},n[t],{done:!r[t].done}),Object.assign({},e,{items:r})})},deleteItem:function(t){return e(function(e){var n=e.items.slice(0,t).concat(e.items.slice(t+1));return Object.assign({},e,{items:n})})},addItem:function(t){return e(function(e){var n=e.items.concat({value:t,id:i()});return Object.assign({},e,{items:n})})},markAllAsDone:function(){return e(function(e){return Object.assign({},e,{items:e.items.map(function(e){return Object.assign(e,{done:!0})})})})},deleteAll:function(){return e(function(e){return Object.assign({},e,{items:[]})})}}}Object.defineProperty(t,"__esModule",{value:!0}),t.makeStateUpdaters=r;var u=0,i=function(){return++u};t.stateToAttrs=function(e,t){return t},t.initialState={items:[]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),i=r(u),o=n(46),a=r(o),l=n(2).default,c=n(1).default;t.default=(0,i.default)(function(){return[c("div"),{class:a.default.container,children:[[c("span"),{class:a.default.base,children:[[l,"Nothing to do… "]]}],[c("span"),{class:a.default.awesome,children:[[l,"That’s frigging Awesome 👍👍👍"]]}]]}]})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(22);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.TodoWidget}}),n(24);var u=function(e){return e&&e.__esModule?e:{default:e}}(r);n(23),"undefined"!=typeof document&&(console.log("Mounting"),(0,u.default)(document.getElementById("todoContainer")))},function(e,t){e.exports={button:"_1WSQOwPVCuLNMk4ZByRNAd",hidden:"_3Lomy68kz4tbqHm4PuHG4c"}},function(e,t){e.exports={container:"_1EMceqe_M_qXcryYPm-AU2",isFocussed:"_3McwWaK_-1FW6NR5Tft-Lr",inputcontainer:"p-Qkw75b9v1qESrW4X_hV",input:"wN0yC4egYQ-S6wKnfBZZH"}},function(e,t){e.exports={container:"zr2sBVXcQOeA_boYB-BCY FlDEIbeA0pdSYAEGlAxsV _1eOpfzXb9P4jd51VLbBBft _1J6pCmshtdr3k0cnGrW0SN",item:"_1hvlTQETFYcCKp_x8Wly5D",todo:"_3TRkIKoWOo9gUV5bvhE2dp",button:"_1rUZ9KqA_JUOaclsB0KCj5",updownButton:"uGtKCep8-hXl7m-vwFCt9 _1rUZ9KqA_JUOaclsB0KCj5",checked:"CNYLitdoDai2SMBO6kpFM",unchecked:"BR5AtQ0_dIW12WwT0NavN"}},function(e,t){e.exports={container:"_1vow5RADYDk90h-pugxFgk FlDEIbeA0pdSYAEGlAxsV _1J6pCmshtdr3k0cnGrW0SN _1eOpfzXb9P4jd51VLbBBft",input:"_3FBoIDX7gMJ4lbX3fDJxwG",button:"_3ZsCh5QIedlTNkqpxkhxB-"}},function(e,t){e.exports={container:"_2Wn52ndGpe54ET5--I50pG",todos:"_2WJX7LDxAhP6bNun3Ue_1_"}},function(e,t){e.exports={container:"_2dCERPendlCbnIulDwT2xl",base:"_1jzec5N1MPbx-GyKbBBFdk",awesome:"_27VuiYjU31EDCBIvKpZGSE"}},function(e,t,n){"use strict";e.exports=new Set(["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"])},function(e,t,n){"use strict";function r(){if(this&&this.unmount)return this;var e=this||l(),t=e?[e]:[];return{firstChild:function(){return e},lastChild:function(){return e},children:function(){return t},toString:function(){return"\x3c!--"+a+"--\x3e"},unmount:function(){(0,u.remove)(e)},render:r}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var u=n(7),i=(n(5),n(9)),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a="%%",l=o.default?function(){return document.createComment(a)}:function(){}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){function t(e){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c(e),l=a?[a]:[];return Object.assign(this||{},(n={},r(n,o,e),r(n,"children",function(){return l}),r(n,"firstChild",function(){return a}),r(n,"lastChild",function(){return a}),r(n,"value",function(){return this[o]}),r(n,"toString",function(){return u(this[o])}),r(n,"unmount",function(){(0,i.remove)(l[0])}),r(n,"render",t),n))}var n=e.attrsToValue,u=e.valueToString,a=e.nodeType,l=e.componentName,c=e.createNode;return function(e){var r=n(e);if(this){if(this.unmount)return r!==this.value()?(this.firstChild()&&(this.firstChild().textContent=r),this[o]=r,this):this;if(this.nodeType!==a)throw new Error(l+": cannot mount on node of type "+this.nodeType+".");if(this.textContent!==r)throw new Error(l+": The text does not match the content of the existing node.");return t(r,this)}return t(r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var i=n(7),o=Symbol("value")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){var n=[],r=!0,u=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){u=!0,i=e}finally{try{!r&&a.return&&a.return()}finally{if(u)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=n(18),i=n(20),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a=function(e){var t=r(e,2),n=t[0],u=t[1];return[n.toLowerCase(),u]};t.default=function(e){return(0,u.toMap)((0,o.default)((0,u.entries)(e),a))}},function(e,t,n){"use strict";function r(e,t,n){var r=function(t){var r=u(t,2),i=r[0],o=r[1],a=e.get(i);e.delete(i),n(i,o,a)},i=function(e){var t=u(e,2),r=t[0],i=t[1];return n(r,void 0,i)};return(0,o.default)(t.entries(),r),(0,o.default)(e.entries(),i)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){var n=[],r=!0,u=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){u=!0,i=e}finally{try{!r&&a.return&&a.return()}finally{if(u)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=r;var i=n(10),o=function(e){return e&&e.__esModule?e:{default:e}}(i)}])});