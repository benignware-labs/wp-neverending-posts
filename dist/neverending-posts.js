!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.selectorTypes,r=void 0===n?["ID","Class","Tag","NthChild"]:n,o=t.attributesToIgnore,i=void 0===o?["id","class","length"]:o,a=t.excludeRegex,u=void 0===a?null:a,l=[],f=(0,s.getParents)(e),d=!0,p=!1,v=void 0;try{for(var h,b=f[Symbol.iterator]();!(d=(h=b.next()).done);d=!0){var g=h.value,m=y(g,r,i,u);Boolean(m)&&l.push(m)}}catch(e){p=!0,v=e}finally{try{!d&&b.return&&b.return()}finally{if(p)throw v}}var w=[],S=!0,O=!1,_=void 0;try{for(var j,A=l[Symbol.iterator]();!(S=(j=A.next()).done);S=!0){var C=j.value;w.unshift(C);var P=w.join(" > ");if((0,c.isUnique)(e,P))return P}}catch(e){O=!0,_=e}finally{try{!S&&A.return&&A.return()}finally{if(O)throw _}}return null};var r=n(4),o=n(5),i=n(6),a=n(7),u=n(8),l=n(9),c=n(10),s=n(11);function f(e,t){var n=e.parentNode.querySelectorAll(t);return 1===n.length&&n[0]===e}function d(e,t){return t.find(f.bind(null,e))}function p(e,t,n){var r=(0,i.getCombinations)(t,3),o=d(e,r);return Boolean(o)?o:Boolean(n)&&(o=d(e,r=r.map(function(e){return n+e})),Boolean(o))?o:null}function y(e,t,n,i){var c=void 0,s=function(e,t,n){var i={Tag:l.getTag,NthChild:u.getNthChild,Attributes:function(e){return(0,a.getAttributes)(e,n)},Class:o.getClassSelectors,ID:r.getID};return t.reduce(function(t,n){return t[n]=i[n](e),t},{})}(e,t,n);i&&i instanceof RegExp&&(s.ID=i.test(s.ID)?null:s.ID,s.Class=s.Class.filter(function(e){return!i.test(e)}));var d=!0,y=!1,v=void 0;try{for(var h,b=t[Symbol.iterator]();!(d=(h=b.next()).done);d=!0){var g=h.value,m=s.ID,w=s.Tag,S=s.Class,O=s.Attributes,_=s.NthChild;switch(g){case"ID":if(Boolean(m)&&f(e,m))return m;break;case"Tag":if(Boolean(w)&&f(e,w))return w;break;case"Class":if(Boolean(S)&&S.length&&(c=p(e,S,w)))return c;break;case"Attributes":if(Boolean(O)&&O.length&&(c=p(e,O,w)))return c;break;case"NthChild":if(Boolean(_))return _}}}catch(e){y=!0,v=e}finally{try{!d&&b.return&&b.return()}finally{if(y)throw v}}return"*"}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)};t.isElement=function(e){var t=void 0;t="object"===("undefined"==typeof HTMLElement?"undefined":o(HTMLElement))?e instanceof HTMLElement:!!e&&"object"===(void 0===e?"undefined":o(e))&&1===e.nodeType&&"string"==typeof e.nodeName;return t}},function(e,t,n){e.exports=n(12)},function(e,t){
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
"document"in window.self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||function(e){"use strict";if("Element"in e){var t=e.Element.prototype,n=Object,r=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1},i=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},a=function(e,t){if(""===t)throw new i("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new i("INVALID_CHARACTER_ERR","String contains an invalid character");return o.call(e,t)},u=function(e){for(var t=r.call(e.getAttribute("class")||""),n=t?t.split(/\s+/):[],o=0,i=n.length;o<i;o++)this.push(n[o]);this._updateClassName=function(){e.setAttribute("class",this.toString())}},l=u.prototype=[],c=function(){return new u(this)};if(i.prototype=Error.prototype,l.item=function(e){return this[e]||null},l.contains=function(e){return-1!==a(this,e+="")},l.add=function(){var e,t=arguments,n=0,r=t.length,o=!1;do{e=t[n]+"",-1===a(this,e)&&(this.push(e),o=!0)}while(++n<r);o&&this._updateClassName()},l.remove=function(){var e,t,n=arguments,r=0,o=n.length,i=!1;do{for(e=n[r]+"",t=a(this,e);-1!==t;)this.splice(t,1),i=!0,t=a(this,e)}while(++r<o);i&&this._updateClassName()},l.toggle=function(e,t){e+="";var n=this.contains(e),r=n?!0!==t&&"remove":!1!==t&&"add";return r&&this[r](e),!0===t||!1===t?t:!n},l.toString=function(){return this.join(" ")},n.defineProperty){var s={get:c,enumerable:!0,configurable:!0};try{n.defineProperty(t,"classList",s)}catch(e){void 0!==e.number&&-2146823252!==e.number||(s.enumerable=!1,n.defineProperty(t,"classList",s))}}else n.prototype.__defineGetter__&&t.__defineGetter__("classList",c)}}(window.self),function(){"use strict";var e=document.createElement("_");if(e.classList.add("c1","c2"),!e.classList.contains("c2")){var t=function(e){var t=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){var n,r=arguments.length;for(n=0;n<r;n++)e=arguments[n],t.call(this,e)}};t("add"),t("remove")}if(e.classList.toggle("c3",!1),e.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:n.call(this,e)}}e=null}())},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getID=function(e){var t=e.getAttribute("id");if(null!==t&&""!==t)return t.match(/^\d/)?'[id="'+t+'"]':"#"+t;return null}},function(e,t,n){"use strict";function r(e){if(!e.hasAttribute("class"))return[];try{return Array.prototype.slice.call(e.classList).filter(function(e){return/^[a-z_-][a-z\d_-]*$/i.test(e)?e:null})}catch(n){var t=e.getAttribute("class");return(t=t.trim().replace(/\s+/g," ")).split(" ")}}Object.defineProperty(t,"__esModule",{value:!0}),t.getClasses=r,t.getClassSelectors=function(e){return r(e).filter(Boolean).map(function(e){return"."+e})}},function(e,t,n){"use strict";function r(e,t,n,o,i,a,u){if(a!==u)for(var l=o;l<=i&&i-l+1>=u-a;++l)n[a]=t[l],r(e,t,n,l+1,i,a+1,u);else e.push(n.slice(0,a).join(""))}Object.defineProperty(t,"__esModule",{value:!0}),t.getCombinations=function(e,t){for(var n=[],o=e.length,i=[],a=1;a<=t;++a)r(n,e,i,0,o-1,0,a);return n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["id","class","length"],n=e.attributes;return[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(n)).reduce(function(e,n){return t.indexOf(n.nodeName)>-1||e.push("["+n.nodeName+'="'+n.value+'"]'),e},[])}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getNthChild=function(e){var t=0,n=void 0,o=void 0,i=e.parentNode;if(Boolean(i)){var a=i.childNodes,u=a.length;for(n=0;n<u;n++)if(o=a[n],(0,r.isElement)(o)&&(t++,o===e))return":nth-child("+t+")"}return null};var r=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTag=function(e){return e.tagName.toLowerCase().replace(/:/g,"\\:")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isUnique=function(e,t){if(!Boolean(t))return!1;var n=e.ownerDocument.querySelectorAll(t);return 1===n.length&&n[0]===e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getParents=function(e){var t=[],n=e;for(;(0,r.isElement)(n);)t.push(n),n=n.parentNode;return t};var r=n(1)},function(e,t,n){"use strict";n.r(t);n(3);var r=n(0),o=n.n(r);function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};window.addEventListener("click",function(n){var r=n.target.closest(e);if(r){var u=(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}({srcAttr:"href",mode:"append",history:!1,containerSelector:null,pendingClass:"is-pending"},"function"==typeof t?t(r):t)).containerSelector?document.querySelector(t.containerSelector):r.parentNode,l=r.getAttribute(t.srcAttr)||r.getAttribute("data-".concat(t.srcAttr));if(u&&l){var c=new URL(l,window.location.href),s=t.containerSelector||o()(u),f=o()(r);t.pendingClass.split(/\s+/).forEach(function(e){r.classList.add(e)}),fetch(c.href,{}).then(function(e){e.text().then(function(e){t.pendingClass.split(/\s+/).forEach(function(e){r.classList.add(e)});var n=document.createElement("div");n.innerHTML=e;var o=n.querySelector(f);if(o){var a=!0,l=!1,d=void 0;try{for(var p,y=n.attributes[Symbol.iterator]();!(a=(p=y.next()).done);a=!0){var v=p.value.name;r.removeAttribute(v)}}catch(e){l=!0,d=e}finally{try{a||null==y.return||y.return()}finally{if(l)throw d}}var h=!0,b=!1,g=void 0;try{for(var m,w=o.attributes[Symbol.iterator]();!(h=(m=w.next()).done);h=!0){var S=m.value,O=(v=S.name,S.value);r.setAttribute(v,O)}}catch(e){b=!0,g=e}finally{try{h||null==w.return||w.return()}finally{if(b)throw g}}r.innerHTML=o.innerHTML}else r.parentNode.removeChild(r);var _=n.querySelector(s);if(_){var j=document.createDocumentFragment();console.log("remoteTarget",o);var A=i(_.childNodes).find(function(e){return e.contains(o)})||o,C=i(u.childNodes).find(function(e){return e.contains(r)})||r;console.log("remoteTargetWrapper",A);var P=!0,N=!1,L=void 0;try{for(var T,E=_.children[Symbol.iterator]();!(P=(T=E.next()).done);P=!0){var M=T.value;j.appendChild(A&&M===A?C:document.importNode(M,!0))}}catch(e){N=!0,L=e}finally{try{P||null==E.return||E.return()}finally{if(N)throw L}}switch(t.mode){case"update":u.appendChild(j);break;case"prepend":u.insertBefore(u.firstChild,j);break;case"append":u.appendChild(j)}}if(t.history){var D=(n.querySelector(f)||{title:document.title}).title;history.pushState({title:D},D,c.href)}})})}n.preventDefault()}})}"undefined"!=typeof window&&(window.remoteclick=u);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}window.remoteclick("*[data-neverending-posts]",function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}({},JSON.parse(decodeURIComponent(e.getAttribute("data-neverending-posts"))))})}]);