!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([,function(t,e){var n,o,r,u,c,i=function(){for(var t="",e=0;e<o;e++)t+="_";s.textContent=t+n.substring(o)},a=function t(){var e=c+d-Date.now();y.textContent=(e/1e3).toFixed(2);var n=setTimeout(function(){t()},10);e<0&&(f=!1,clearTimeout(n),setTimeout(function(){var t;t=r+u==0?0:r/(r+u)*100,alert("".concat(r," letters, ").concat(u," misses, ").concat(t.toFixed(2),"% accuracy!"))},100),y.textContent="0.00",s.textContent="click to Replay?")},l=["apple","sky","blue","test","pokemon","teepod","javascript"],d=1e4,f=!1,s=document.getElementById("target"),m=document.getElementById("score"),p=document.getElementById("miss"),y=document.getElementById("timer");window.addEventListener("click",function(t){!0!==f&&(o=0,r=0,u=0,m.textContent=r,p.textContent=u,n=l[Math.floor(Math.random()*l.length)],f=!0,i(),c=Date.now(),a())}),window.addEventListener("keyup",function(t){!0===f&&(t.key===n[o]?(o++,r++,m.textContent=r,o==n.length&&(n=l[Math.floor(Math.random()*l.length)],o=0),i()):(u++,p.textContent=u))})}]);