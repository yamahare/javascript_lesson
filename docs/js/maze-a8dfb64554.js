!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=136)}({136:function(t,e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}document.addEventListener("DOMContentLoaded",function(t){var e=function(){function t(e,r){n(this,t),this.map=[],this.points=[[0,-1],[0,1],[1,0],[-1,0]],this.col=e,this.row=r,this.START_X=0,this.START_Y=0,this.GOAL_X=e-1,this.GOAL_Y=r-1}return i(t,[{key:"rand",value:function(t){return Math.floor(Math.random()*(t+1))}},{key:"init",value:function(){for(var t=0;t<this.col;t++){this.map[t]=[];for(var e=0;e<this.row;e++)this.map[t][e]=0}for(var n=1;n<this.col;n+=2)for(var r=1;r<this.row;r+=2)this.map[n][r]=1;for(var i=1;i<this.col;i+=2)for(var o=1;o<this.row;o+=2){var a=void 0;do{a=1===i?this.points[this.rand(3)]:this.points[this.rand(2)]}while(1===this.map[i+a[0]][o+a[1]]);this.map[i+a[0]][o+a[1]]=1}}},{key:"draw",value:function(){(new r).draw(this)}}]),t}(),r=function(){function t(){if(n(this,t),this.ROUTE_COLOR="#FF0088",this.SQUARES_SIZE=10,this.SQUARES_COLOR="#3261AB",this.canvas=document.getElementById("mycanvas"),!this.canvas||!this.canvas.getContext)return!1;this.ctx=this.canvas.getContext("2d")}return i(t,[{key:"draw",value:function(t){this.canvas.width=(t.col+2)*this.SQUARES_SIZE,this.canvas.height=(t.row+2)*this.SQUARES_SIZE;for(var e=0;e<=t.col+2;e++)this.drawWall(e,0),this.drawWall(e,t.row+1);for(var n=0;n<=t.col+2;n++)this.drawWall(0,n),this.drawWall(t.col+1,n);for(var r=0;r<t.col;r++)for(var i=0;i<t.row;i++)1===t.map[i][r]&&this.drawWall(r+1,i+1),(r===t.START_X&&i===t.START_Y||r===t.GOAL_X&&i===t.GOAL_Y)&&this.drawRoute(r+1,i+1)}},{key:"drawWall",value:function(t,e){this.ctx.fillStyle=this.SQUARES_COLOR,this.drawRect(t,e)}},{key:"drawRoute",value:function(t,e){this.ctx.fillStyle=this.ROUTE_COLOR,this.drawRect(t,e)}},{key:"drawRect",value:function(t,e){this.ctx.fillRect(t*this.SQUARES_SIZE,e*this.SQUARES_SIZE,this.SQUARES_SIZE,this.SQUARES_SIZE)}}]),t}();function o(){var t=new e(13,13);t.init(),t.draw()}document.getElementById("reset").addEventListener("click",function(t){o()}),o()})}});