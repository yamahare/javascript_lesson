!function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}({4:function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}document.addEventListener("DOMContentLoaded",function(t){var e=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var i=document.createElement("section");i.classList.add("panel"),this.img=document.createElement("img"),this.img.src=this.getRandomImage(),this.timeoutId=void 0,this.stop=document.createElement("div"),this.stop.textContent="STOP",this.stop.classList.add("stop","inactive"),this.stop.addEventListener("click",function(t){e.stop.classList.contains("inactive")||(e.stop.classList.add("inactive"),clearTimeout(e.timeoutId),0==--a&&(o.classList.remove("inactive"),a=n.length,function(){n[0].isUnmatched(n[1],n[2])&&n[0].unmach();n[1].isUnmatched(n[0],n[2])&&n[1].unmach();n[2].isUnmatched(n[0],n[1])&&n[2].unmach()}()))}),i.appendChild(this.img),i.appendChild(this.stop),document.querySelector(".slotArea").appendChild(i)}var e,r,s;return e=t,(r=[{key:"getRandomImage",value:function(){var t=["image/seven-d9c9f6d77c.png","image/bell-dcd064d7ed.png","image/cherry-f945af9eee.png"];return t[Math.floor(Math.random()*t.length)]}},{key:"spin",value:function(){var t=this;this.img.src=this.getRandomImage(),this.timeoutId=setTimeout(function(){t.spin()},50)}},{key:"isUnmatched",value:function(t,e){return this.img.src!==t.img.src&&this.img.src!==e.img.src}},{key:"unmach",value:function(){this.img.classList.add("unmatched")}},{key:"activate",value:function(){this.img.classList.remove("unmatched"),this.stop.classList.remove("inactive")}}])&&i(e.prototype,r),s&&i(e,s),t}();var n=[new e,new e,new e],a=n.length,o=document.getElementById("spin");o.addEventListener("click",function(t){o.classList.contains("inactive")||(o.classList.add("inactive"),n.forEach(function(t){t.activate(),t.spin()}))})})}});