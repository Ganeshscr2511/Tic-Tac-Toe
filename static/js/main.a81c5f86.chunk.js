(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{12:function(n,e,t){},13:function(n,e,t){},15:function(n,e,t){"use strict";t.r(e);var l=t(1),c=t.n(l),u=t(6),r=t.n(u),i=(t(12),t(7)),a=t(4),s=(t(13),t(0));function o(){return Object(s.jsx)(j,{})}function j(){var n=Object(l.useState)([null,null,null,null,null,null,null,null,null]),e=Object(a.a)(n,2),t=e[0],c=e[1],u=function(n){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<e.length;t++){var l=Object(a.a)(e[t],3),c=l[0],u=l[1],r=l[2];if(n[c]&&n[c]===n[u]&&n[u]===n[r])return n[c]}return null}(t),r=Object(l.useState)(!0),o=Object(a.a)(r,2),j=o[0],f=o[1];return Object(s.jsxs)("div",{className:"fullGame",children:[Object(s.jsx)("div",{className:"Game-Container",children:t.map((function(n,e){return Object(s.jsx)(b,{val:n,onplayerClick:function(){return function(n){if(!t[n]&&!u){var e=Object(i.a)(t);e[n]=j?"X":"0",c(e),f(!j)}}(e)}})}))}),Object(s.jsx)("h1",{children:u?"The winner is "+u:(j?"X":"O")+" Turn"}),Object(s.jsx)("button",{onClick:function(){c([null,null,null,null,null,null,null,null,null])},className:"resetBtn",children:"Reset"})]})}function b(n){var e=n.val,t=n.onplayerClick,l={color:"X"===e?"green":"red"};return Object(s.jsx)("div",{style:l,onClick:t,className:"Game-box",children:e})}var f=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(o,{})})},O=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(e){var t=e.getCLS,l=e.getFID,c=e.getFCP,u=e.getLCP,r=e.getTTFB;t(n),l(n),c(n),u(n),r(n)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.a81c5f86.chunk.js.map