!function(t){var e={};function n(i){if(e[i])return e[i].exports;var c=e[i]={i:i,l:!1,exports:{}};return t[i].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(i,c,function(e){return t[e]}.bind(null,c));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}({2:function(t,e){document.addEventListener("DOMContentLoaded",function(t){var e,n,i=document.getElementById("timer"),c=document.getElementById("start"),a=document.getElementById("stop"),o=document.getElementById("reset"),r=0;function s(){c.classList.remove("inactive"),a.classList.add("inactive"),o.classList.add("inactive")}s(),c.addEventListener("click",function(t){!0!==c.classList.contains("inactive")&&(c.classList.add("inactive"),a.classList.remove("inactive"),o.classList.add("inactive"),e=Date.now(),function t(){var c=new Date(Date.now()-e+r),a=c.getMinutes(),o=c.getSeconds(),s=c.getMilliseconds();i.textContent="".concat(String(a).padStart(2,"0"),":").concat(String(o).padStart(2,"0"),".").concat(String(s).padStart(3,"0")),n=setTimeout(function(){t()},10)}())}),a.addEventListener("click",function(t){!0!==a.classList.contains("inactive")&&(c.classList.remove("inactive"),a.classList.add("inactive"),o.classList.remove("inactive"),clearTimeout(n),r+=Date.now()-e)}),o.addEventListener("click",function(t){!0!==o.classList.contains("inactive")&&(s(),i.textContent="00:00.000",r=0)})})}});