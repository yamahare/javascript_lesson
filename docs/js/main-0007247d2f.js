!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),(new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.num=10,this.winner=Math.floor(Math.random()*this.num)}var t,n,o;return t=e,(n=[{key:"createBoxDom",value:function(){var e=document.createElement("div");return e.classList.add("box"),e}},{key:"generate",value:function(){for(var e=this,t=document.createDocumentFragment(),n=function(n){var r=e.createBoxDom();r.dataset.result=n==e.winner?"win":"lose",r.addEventListener("click",function(e){"win"===r.dataset.result?(r.textContent="win!",e.target.classList.add("win")):(r.textContent="lose",e.target.classList.add("lose"))}),t.appendChild(r)},r=0;r<=this.num;r++)n(r);document.getElementById("main").appendChild(t)}}])&&r(t.prototype,n),o&&r(t,o),e}())).generate()}]);