!function(e){var t={};function n(i){if(t[i])return t[i].exports;var c=t[i]={i:i,l:!1,exports:{}};return e[i].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(i,c,function(t){return e[t]}.bind(null,c));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=138)}({138:function(e,t){document.addEventListener("DOMContentLoaded",function(e){var t,n,i,c,o,r=document.getElementById("timer"),s=document.getElementById("leftTime"),a=document.getElementById("start"),d=document.getElementById("stop"),u=document.getElementById("reset"),l=document.getElementsByClassName("timerBtn"),m=3e4,f=0;function v(){a.classList.remove("inactive"),d.classList.add("inactive"),u.classList.add("inactive"),r.style.color="black",s.textContent=""}v(),a.addEventListener("click",function(e){!0!==a.classList.contains("inactive")&&(a.classList.add("inactive"),d.classList.remove("inactive"),u.classList.add("inactive"),t=document.querySelector('[name="min"]').value,n=document.querySelector('[name="sec"]').value,i=1e3*t*60+1e3*n,c=Date.now(),function e(){var t=new Date(Date.now()-c+f),n=t.getMinutes(),a=t.getSeconds(),d=t.getMilliseconds();r.textContent="".concat(String(n).padStart(2,"0"),":").concat(String(a).padStart(2,"0"),".").concat(String(d).padStart(3,"0")),o=setTimeout(function(){e()},10),i>0&&(i-t.getTime()<=0?(r.style.color="red",s.textContent=""):i-t.getTime()<=m&&(s.textContent="残り時間:".concat(Math.ceil((i-t.getTime())/1e3),"s")))}())}),d.addEventListener("click",function(e){!0!==d.classList.contains("inactive")&&(a.classList.remove("inactive"),d.classList.add("inactive"),u.classList.remove("inactive"),clearTimeout(o),f+=Date.now()-c)}),u.addEventListener("click",function(e){!0!==u.classList.contains("inactive")&&(v(),r.textContent="00:00.000",f=0)});for(var p=function(e){l[e].addEventListener("mousedown",function(){return l[e].classList.add("pressed")}),l[e].addEventListener("mouseup",function(){return l[e].classList.remove("pressed")}),l[e].addEventListener("touchstart",function(){return l[e].classList.add("pressed")}),l[e].addEventListener("touchend",function(){return l[e].classList.remove("pressed")})},L=0;L<l.length;L++)p(L)})}});