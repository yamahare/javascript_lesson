!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){document.addEventListener("DOMContentLoaded",function(e){var t,n=document.getElementById("gridContainerCustom"),o=document.querySelector('[name="num"]').value,r=document.querySelector('[name="updateSpan"]').value,c=document.querySelector('[name="blockSize"]').value,a=document.getElementById("generateBtn"),u=document.getElementById("stopBtn"),l=document.getElementsByClassName("selectedColorBlock")[0],d=document.getElementsByClassName("selectedColorText")[0];function i(){n.innerHTML="",n.style.gridTemplateColumns="repeat(auto-fit, minmax(".concat(c,"px, 1fr))"),n.style.gridAutoRows="".concat(c,"px");for(var e=document.createDocumentFragment(),t=0;t<o;t++){var r=document.createElement("div");r.classList.add("block"),r.style.width="".concat(c,"px"),r.style.height="".concat(c,"px"),r.style.backgroundColor="hsl(".concat(Math.floor(360*Math.random()),", ").concat(Math.floor(100*Math.random()),"%, ").concat(Math.floor(100*Math.random()),"%)"),r.addEventListener("click",function(e){l.style.backgroundColor=e.target.style.backgroundColor,d.textContent=e.target.style.backgroundColor}),e.appendChild(r)}n.appendChild(e)}function m(){i(),t=setTimeout(function(){m()},r)}i(),u.addEventListener("click",function(e){clearTimeout(t)}),a.addEventListener("click",function(e){clearTimeout(t),o=document.querySelector('[name="num"]').value,r=document.querySelector('[name="updateSpan"]').value,c=document.querySelector('[name="blockSize"]').value,m()}),m()})}]);