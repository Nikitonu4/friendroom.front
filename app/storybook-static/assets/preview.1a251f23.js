import{w as A,l as C,d as E,h,u as _,b as T}from"./iframe.dc3b0685.js";var y="backgrounds",M;function L(o,a){return a||(a=o.slice(0)),Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(a)}}))}var s=A.document,I=A.window,P=function(){var a=I.matchMedia("(prefers-reduced-motion: reduce)");return a.matches},R=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;if(a==="transparent")return"transparent";if(e.find(function(t){return t.value===a}))return a;var n=e.find(function(t){return t.name===r});if(n)return n.value;if(r){var d=e.map(function(t){return t.name}).join(", ");C.warn(E(M||(M=L([`
        Backgrounds Addon: could not find the default color "`,`".
        These are the available colors for your story based on your configuration:
        `,`.
      `])),r,d))}return"transparent"},O=function(a){var e=Array.isArray(a)?a:[a];e.forEach($)},$=function(a){var e=s.getElementById(a);e&&e.parentElement.removeChild(e)},H=function(a,e){var r=s.getElementById(a);if(r)r.innerHTML!==e&&(r.innerHTML=e);else{var n=s.createElement("style");n.setAttribute("id",a),n.innerHTML=e,s.head.appendChild(n)}},N=function(a,e,r){var n=s.getElementById(a);if(n)n.innerHTML!==e&&(n.innerHTML=e);else{var d=s.createElement("style");d.setAttribute("id",a),d.innerHTML=e;var t="addon-backgrounds-grid".concat(r?"-docs-".concat(r):""),l=s.getElementById(t);l?l.parentElement.insertBefore(d,l):s.head.appendChild(d)}},G=function(a,e){var r,n=e.globals,d=e.parameters,t=(r=n[y])===null||r===void 0?void 0:r.value,l=d[y],i=h(function(){return l.disable?"transparent":R(t,l.values,l.default)},[l,t]),u=h(function(){return i&&i!=="transparent"},[i]),v=e.viewMode==="docs"?"#anchor--".concat(e.id," .docs-story"):".sb-show-main",g=h(function(){var f="transition: background-color 0.3s;";return`
      `.concat(v,` {
        background: `).concat(i,` !important;
        `).concat(P()?"":f,`
      }
    `)},[i,v]);return _(function(){var f=e.viewMode==="docs"?"addon-backgrounds-docs-".concat(e.id):"addon-backgrounds-color";if(!u){O(f);return}N(f,g,e.viewMode==="docs"?e.id:null)},[u,g,e]),a()},z;function D(o,a){return a||(a=o.slice(0)),Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(a)}}))}var F=T(function(){},E(z||(z=D([`
    Backgrounds Addon: The cell size parameter has been changed.

    - parameters.grid.cellSize should now be parameters.backgrounds.grid.cellSize
    See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-grid-parameter
  `])))),K=function(a,e){var r,n,d,t,l=e.globals,i=e.parameters,u=i[y].grid,v=((r=l[y])===null||r===void 0?void 0:r.grid)===!0&&u.disable!==!0,g=u.cellAmount,f=u.cellSize,p=u.opacity,S=e.viewMode==="docs",c;(n=i.grid)!==null&&n!==void 0&&n.cellSize?(c=i.grid.cellSize,F()):c=f;var j=i.layout===void 0||i.layout==="padded",w=j?16:0,m=(d=u.offsetX)!==null&&d!==void 0?d:S?20:w,b=(t=u.offsetY)!==null&&t!==void 0?t:S?20:w,B=h(function(){var k=e.viewMode==="docs"?"#anchor--".concat(e.id," .docs-story"):".sb-show-main",x=["".concat(c*g,"px ").concat(c*g,"px"),"".concat(c*g,"px ").concat(c*g,"px"),"".concat(c,"px ").concat(c,"px"),"".concat(c,"px ").concat(c,"px")].join(", ");return`
      `.concat(k,` {
        background-size: `).concat(x,` !important;
        background-position: `).concat(m,"px ").concat(b,"px, ").concat(m,"px ").concat(b,"px, ").concat(m,"px ").concat(b,"px, ").concat(m,"px ").concat(b,`px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, `).concat(p,`) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, `).concat(p,`) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, `).concat(p/2,`) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, `).concat(p/2,`) 1px, transparent 1px) !important;
      }
    `)},[c]);return _(function(){var k=e.viewMode==="docs"?"addon-backgrounds-grid-docs-".concat(e.id):"addon-backgrounds-grid";if(!v){O(k);return}H(k,B)},[v,B,e]),a()},U=[K,G],X={backgrounds:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}};export{U as decorators,X as parameters};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy4xYTI1MWYyMy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24tYmFja2dyb3VuZHMvZGlzdC9lc20vY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24tYmFja2dyb3VuZHMvZGlzdC9lc20vaGVscGVycy9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLWJhY2tncm91bmRzL2Rpc3QvZXNtL2RlY29yYXRvcnMvd2l0aEJhY2tncm91bmQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9hZGRvbi1iYWNrZ3JvdW5kcy9kaXN0L2VzbS9kZWNvcmF0b3JzL3dpdGhHcmlkLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24tYmFja2dyb3VuZHMvZGlzdC9lc20vcHJldmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIEFERE9OX0lEID0gJ3N0b3J5Ym9vay9iYWNrZ3JvdW5kJztcbmV4cG9ydCB2YXIgUEFSQU1fS0VZID0gJ2JhY2tncm91bmRzJztcbmV4cG9ydCB2YXIgR1JJRF9QQVJBTV9LRVkgPSAnZ3JpZCc7XG5leHBvcnQgdmFyIEVWRU5UUyA9IHtcbiAgVVBEQVRFOiBcIlwiLmNvbmNhdChBRERPTl9JRCwgXCIvdXBkYXRlXCIpXG59OyIsImltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zbGljZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5mcmVlemUuanNcIjtcblxudmFyIF90ZW1wbGF0ZU9iamVjdDtcblxuZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHsgaWYgKCFyYXcpIHsgcmF3ID0gc3RyaW5ncy5zbGljZSgwKTsgfSByZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdHJpbmdzLCB7IHJhdzogeyB2YWx1ZTogT2JqZWN0LmZyZWV6ZShyYXcpIH0gfSkpOyB9XG5cbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qc1wiO1xuaW1wb3J0IGdsb2JhbCBmcm9tICdnbG9iYWwnO1xuaW1wb3J0IGRlZGVudCBmcm9tICd0cy1kZWRlbnQnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnQHN0b3J5Ym9vay9jbGllbnQtbG9nZ2VyJztcbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudCxcbiAgICB3aW5kb3cgPSBnbG9iYWwud2luZG93O1xuZXhwb3J0IHZhciBpc1JlZHVjZU1vdGlvbkVuYWJsZWQgPSBmdW5jdGlvbiBpc1JlZHVjZU1vdGlvbkVuYWJsZWQoKSB7XG4gIHZhciBwcmVmZXJzUmVkdWNlTW90aW9uID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJyk7XG4gIHJldHVybiBwcmVmZXJzUmVkdWNlTW90aW9uLm1hdGNoZXM7XG59O1xuZXhwb3J0IHZhciBnZXRCYWNrZ3JvdW5kQ29sb3JCeU5hbWUgPSBmdW5jdGlvbiBnZXRCYWNrZ3JvdW5kQ29sb3JCeU5hbWUoY3VycmVudFNlbGVjdGVkVmFsdWUpIHtcbiAgdmFyIGJhY2tncm91bmRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBbXTtcbiAgdmFyIGRlZmF1bHROYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgaWYgKGN1cnJlbnRTZWxlY3RlZFZhbHVlID09PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgcmV0dXJuICd0cmFuc3BhcmVudCc7XG4gIH1cblxuICBpZiAoYmFja2dyb3VuZHMuZmluZChmdW5jdGlvbiAoYmFja2dyb3VuZCkge1xuICAgIHJldHVybiBiYWNrZ3JvdW5kLnZhbHVlID09PSBjdXJyZW50U2VsZWN0ZWRWYWx1ZTtcbiAgfSkpIHtcbiAgICByZXR1cm4gY3VycmVudFNlbGVjdGVkVmFsdWU7XG4gIH1cblxuICB2YXIgZGVmYXVsdEJhY2tncm91bmQgPSBiYWNrZ3JvdW5kcy5maW5kKGZ1bmN0aW9uIChiYWNrZ3JvdW5kKSB7XG4gICAgcmV0dXJuIGJhY2tncm91bmQubmFtZSA9PT0gZGVmYXVsdE5hbWU7XG4gIH0pO1xuXG4gIGlmIChkZWZhdWx0QmFja2dyb3VuZCkge1xuICAgIHJldHVybiBkZWZhdWx0QmFja2dyb3VuZC52YWx1ZTtcbiAgfVxuXG4gIGlmIChkZWZhdWx0TmFtZSkge1xuICAgIHZhciBhdmFpbGFibGVDb2xvcnMgPSBiYWNrZ3JvdW5kcy5tYXAoZnVuY3Rpb24gKGJhY2tncm91bmQpIHtcbiAgICAgIHJldHVybiBiYWNrZ3JvdW5kLm5hbWU7XG4gICAgfSkuam9pbignLCAnKTtcbiAgICBsb2dnZXIud2FybihkZWRlbnQoX3RlbXBsYXRlT2JqZWN0IHx8IChfdGVtcGxhdGVPYmplY3QgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKFtcIlxcbiAgICAgICAgQmFja2dyb3VuZHMgQWRkb246IGNvdWxkIG5vdCBmaW5kIHRoZSBkZWZhdWx0IGNvbG9yIFxcXCJcIiwgXCJcXFwiLlxcbiAgICAgICAgVGhlc2UgYXJlIHRoZSBhdmFpbGFibGUgY29sb3JzIGZvciB5b3VyIHN0b3J5IGJhc2VkIG9uIHlvdXIgY29uZmlndXJhdGlvbjpcXG4gICAgICAgIFwiLCBcIi5cXG4gICAgICBcIl0pKSwgZGVmYXVsdE5hbWUsIGF2YWlsYWJsZUNvbG9ycykpO1xuICB9XG5cbiAgcmV0dXJuICd0cmFuc3BhcmVudCc7XG59O1xuZXhwb3J0IHZhciBjbGVhclN0eWxlcyA9IGZ1bmN0aW9uIGNsZWFyU3R5bGVzKHNlbGVjdG9yKSB7XG4gIHZhciBzZWxlY3RvcnMgPSBBcnJheS5pc0FycmF5KHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogW3NlbGVjdG9yXTtcbiAgc2VsZWN0b3JzLmZvckVhY2goY2xlYXJTdHlsZSk7XG59O1xuXG52YXIgY2xlYXJTdHlsZSA9IGZ1bmN0aW9uIGNsZWFyU3R5bGUoc2VsZWN0b3IpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvcik7XG5cbiAgaWYgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gIH1cbn07XG5cbmV4cG9ydCB2YXIgYWRkR3JpZFN0eWxlID0gZnVuY3Rpb24gYWRkR3JpZFN0eWxlKHNlbGVjdG9yLCBjc3MpIHtcbiAgdmFyIGV4aXN0aW5nU3R5bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvcik7XG5cbiAgaWYgKGV4aXN0aW5nU3R5bGUpIHtcbiAgICBpZiAoZXhpc3RpbmdTdHlsZS5pbm5lckhUTUwgIT09IGNzcykge1xuICAgICAgZXhpc3RpbmdTdHlsZS5pbm5lckhUTUwgPSBjc3M7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsIHNlbGVjdG9yKTtcbiAgICBzdHlsZS5pbm5lckhUTUwgPSBjc3M7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cbn07XG5leHBvcnQgdmFyIGFkZEJhY2tncm91bmRTdHlsZSA9IGZ1bmN0aW9uIGFkZEJhY2tncm91bmRTdHlsZShzZWxlY3RvciwgY3NzLCBzdG9yeUlkKSB7XG4gIHZhciBleGlzdGluZ1N0eWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xuXG4gIGlmIChleGlzdGluZ1N0eWxlKSB7XG4gICAgaWYgKGV4aXN0aW5nU3R5bGUuaW5uZXJIVE1MICE9PSBjc3MpIHtcbiAgICAgIGV4aXN0aW5nU3R5bGUuaW5uZXJIVE1MID0gY3NzO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnaWQnLCBzZWxlY3Rvcik7XG4gICAgc3R5bGUuaW5uZXJIVE1MID0gY3NzO1xuICAgIHZhciBncmlkU3R5bGVTZWxlY3RvciA9IFwiYWRkb24tYmFja2dyb3VuZHMtZ3JpZFwiLmNvbmNhdChzdG9yeUlkID8gXCItZG9jcy1cIi5jb25jYXQoc3RvcnlJZCkgOiAnJyk7IC8vIElmIGdyaWRzIGFscmVhZHkgZXhpc3QsIHdlIHdhbnQgdG8gYWRkIHRoZSBzdHlsZSB0YWcgQkVGT1JFIGl0IHNvIHRoZSBiYWNrZ3JvdW5kIGRvZXNuJ3Qgb3ZlcnJpZGUgZ3JpZFxuXG4gICAgdmFyIGV4aXN0aW5nR3JpZFN0eWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ3JpZFN0eWxlU2VsZWN0b3IpO1xuXG4gICAgaWYgKGV4aXN0aW5nR3JpZFN0eWxlKSB7XG4gICAgICBleGlzdGluZ0dyaWRTdHlsZS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShzdHlsZSwgZXhpc3RpbmdHcmlkU3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gIH1cbn07IiwiaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanNcIjtcbmltcG9ydCB7IHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gJ0BzdG9yeWJvb2svYWRkb25zJztcbmltcG9ydCB7IFBBUkFNX0tFWSBhcyBCQUNLR1JPVU5EU19QQVJBTV9LRVkgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY2xlYXJTdHlsZXMsIGFkZEJhY2tncm91bmRTdHlsZSwgZ2V0QmFja2dyb3VuZENvbG9yQnlOYW1lLCBpc1JlZHVjZU1vdGlvbkVuYWJsZWQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmV4cG9ydCB2YXIgd2l0aEJhY2tncm91bmQgPSBmdW5jdGlvbiB3aXRoQmFja2dyb3VuZChTdG9yeUZuLCBjb250ZXh0KSB7XG4gIHZhciBfZ2xvYmFscyRCQUNLR1JPVU5EU187XG5cbiAgdmFyIGdsb2JhbHMgPSBjb250ZXh0Lmdsb2JhbHMsXG4gICAgICBwYXJhbWV0ZXJzID0gY29udGV4dC5wYXJhbWV0ZXJzO1xuICB2YXIgZ2xvYmFsc0JhY2tncm91bmRDb2xvciA9IChfZ2xvYmFscyRCQUNLR1JPVU5EU18gPSBnbG9iYWxzW0JBQ0tHUk9VTkRTX1BBUkFNX0tFWV0pID09PSBudWxsIHx8IF9nbG9iYWxzJEJBQ0tHUk9VTkRTXyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2dsb2JhbHMkQkFDS0dST1VORFNfLnZhbHVlO1xuICB2YXIgYmFja2dyb3VuZHNDb25maWcgPSBwYXJhbWV0ZXJzW0JBQ0tHUk9VTkRTX1BBUkFNX0tFWV07XG4gIHZhciBzZWxlY3RlZEJhY2tncm91bmRDb2xvciA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIGlmIChiYWNrZ3JvdW5kc0NvbmZpZy5kaXNhYmxlKSB7XG4gICAgICByZXR1cm4gJ3RyYW5zcGFyZW50JztcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0QmFja2dyb3VuZENvbG9yQnlOYW1lKGdsb2JhbHNCYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRzQ29uZmlnLnZhbHVlcywgYmFja2dyb3VuZHNDb25maWcuZGVmYXVsdCk7XG4gIH0sIFtiYWNrZ3JvdW5kc0NvbmZpZywgZ2xvYmFsc0JhY2tncm91bmRDb2xvcl0pO1xuICB2YXIgaXNBY3RpdmUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2VsZWN0ZWRCYWNrZ3JvdW5kQ29sb3IgJiYgc2VsZWN0ZWRCYWNrZ3JvdW5kQ29sb3IgIT09ICd0cmFuc3BhcmVudCc7XG4gIH0sIFtzZWxlY3RlZEJhY2tncm91bmRDb2xvcl0pO1xuICB2YXIgc2VsZWN0b3IgPSBjb250ZXh0LnZpZXdNb2RlID09PSAnZG9jcycgPyBcIiNhbmNob3ItLVwiLmNvbmNhdChjb250ZXh0LmlkLCBcIiAuZG9jcy1zdG9yeVwiKSA6ICcuc2Itc2hvdy1tYWluJztcbiAgdmFyIGJhY2tncm91bmRTdHlsZXMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdHJhbnNpdGlvblN0eWxlID0gJ3RyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zczsnO1xuICAgIHJldHVybiBcIlxcbiAgICAgIFwiLmNvbmNhdChzZWxlY3RvciwgXCIge1xcbiAgICAgICAgYmFja2dyb3VuZDogXCIpLmNvbmNhdChzZWxlY3RlZEJhY2tncm91bmRDb2xvciwgXCIgIWltcG9ydGFudDtcXG4gICAgICAgIFwiKS5jb25jYXQoaXNSZWR1Y2VNb3Rpb25FbmFibGVkKCkgPyAnJyA6IHRyYW5zaXRpb25TdHlsZSwgXCJcXG4gICAgICB9XFxuICAgIFwiKTtcbiAgfSwgW3NlbGVjdGVkQmFja2dyb3VuZENvbG9yLCBzZWxlY3Rvcl0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxlY3RvcklkID0gY29udGV4dC52aWV3TW9kZSA9PT0gJ2RvY3MnID8gXCJhZGRvbi1iYWNrZ3JvdW5kcy1kb2NzLVwiLmNvbmNhdChjb250ZXh0LmlkKSA6IFwiYWRkb24tYmFja2dyb3VuZHMtY29sb3JcIjtcblxuICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgIGNsZWFyU3R5bGVzKHNlbGVjdG9ySWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFkZEJhY2tncm91bmRTdHlsZShzZWxlY3RvcklkLCBiYWNrZ3JvdW5kU3R5bGVzLCBjb250ZXh0LnZpZXdNb2RlID09PSAnZG9jcycgPyBjb250ZXh0LmlkIDogbnVsbCk7XG4gIH0sIFtpc0FjdGl2ZSwgYmFja2dyb3VuZFN0eWxlcywgY29udGV4dF0pO1xuICByZXR1cm4gU3RvcnlGbigpO1xufTsiLCJpbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc2xpY2UuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZnJlZXplLmpzXCI7XG5cbnZhciBfdGVtcGxhdGVPYmplY3Q7XG5cbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzXCI7XG5cbmZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoc3RyaW5ncywgcmF3KSB7IGlmICghcmF3KSB7IHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7IH0gcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywgeyByYXc6IHsgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KSB9IH0pKTsgfVxuXG5pbXBvcnQgZGVkZW50IGZyb20gJ3RzLWRlZGVudCc7XG5pbXBvcnQgZGVwcmVjYXRlIGZyb20gJ3V0aWwtZGVwcmVjYXRlJztcbmltcG9ydCB7IHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gJ0BzdG9yeWJvb2svYWRkb25zJztcbmltcG9ydCB7IGNsZWFyU3R5bGVzLCBhZGRHcmlkU3R5bGUgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IFBBUkFNX0tFWSBhcyBCQUNLR1JPVU5EU19QQVJBTV9LRVkgfSBmcm9tICcuLi9jb25zdGFudHMnO1xudmFyIGRlcHJlY2F0ZWRDZWxsU2l6ZVdhcm5pbmcgPSBkZXByZWNhdGUoZnVuY3Rpb24gKCkge30sIGRlZGVudChfdGVtcGxhdGVPYmplY3QgfHwgKF90ZW1wbGF0ZU9iamVjdCA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoW1wiXFxuICAgIEJhY2tncm91bmRzIEFkZG9uOiBUaGUgY2VsbCBzaXplIHBhcmFtZXRlciBoYXMgYmVlbiBjaGFuZ2VkLlxcblxcbiAgICAtIHBhcmFtZXRlcnMuZ3JpZC5jZWxsU2l6ZSBzaG91bGQgbm93IGJlIHBhcmFtZXRlcnMuYmFja2dyb3VuZHMuZ3JpZC5jZWxsU2l6ZVxcbiAgICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3N0b3J5Ym9va2pzL3N0b3J5Ym9vay9ibG9iL25leHQvTUlHUkFUSU9OLm1kI2RlcHJlY2F0ZWQtZ3JpZC1wYXJhbWV0ZXJcXG4gIFwiXSkpKSk7XG5leHBvcnQgdmFyIHdpdGhHcmlkID0gZnVuY3Rpb24gd2l0aEdyaWQoU3RvcnlGbiwgY29udGV4dCkge1xuICB2YXIgX2dsb2JhbHMkQkFDS0dST1VORFNfLCBfcGFyYW1ldGVycyRncmlkLCBfZ3JpZFBhcmFtZXRlcnMkb2Zmc2UsIF9ncmlkUGFyYW1ldGVycyRvZmZzZTI7XG5cbiAgdmFyIGdsb2JhbHMgPSBjb250ZXh0Lmdsb2JhbHMsXG4gICAgICBwYXJhbWV0ZXJzID0gY29udGV4dC5wYXJhbWV0ZXJzO1xuICB2YXIgZ3JpZFBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzW0JBQ0tHUk9VTkRTX1BBUkFNX0tFWV0uZ3JpZDtcbiAgdmFyIGlzQWN0aXZlID0gKChfZ2xvYmFscyRCQUNLR1JPVU5EU18gPSBnbG9iYWxzW0JBQ0tHUk9VTkRTX1BBUkFNX0tFWV0pID09PSBudWxsIHx8IF9nbG9iYWxzJEJBQ0tHUk9VTkRTXyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2dsb2JhbHMkQkFDS0dST1VORFNfLmdyaWQpID09PSB0cnVlICYmIGdyaWRQYXJhbWV0ZXJzLmRpc2FibGUgIT09IHRydWU7XG4gIHZhciBjZWxsQW1vdW50ID0gZ3JpZFBhcmFtZXRlcnMuY2VsbEFtb3VudCxcbiAgICAgIGNlbGxTaXplID0gZ3JpZFBhcmFtZXRlcnMuY2VsbFNpemUsXG4gICAgICBvcGFjaXR5ID0gZ3JpZFBhcmFtZXRlcnMub3BhY2l0eTtcbiAgdmFyIGlzSW5Eb2NzID0gY29udGV4dC52aWV3TW9kZSA9PT0gJ2RvY3MnO1xuICB2YXIgZ3JpZFNpemU7XG5cbiAgaWYgKChfcGFyYW1ldGVycyRncmlkID0gcGFyYW1ldGVycy5ncmlkKSAhPT0gbnVsbCAmJiBfcGFyYW1ldGVycyRncmlkICE9PSB2b2lkIDAgJiYgX3BhcmFtZXRlcnMkZ3JpZC5jZWxsU2l6ZSkge1xuICAgIGdyaWRTaXplID0gcGFyYW1ldGVycy5ncmlkLmNlbGxTaXplO1xuICAgIGRlcHJlY2F0ZWRDZWxsU2l6ZVdhcm5pbmcoKTtcbiAgfSBlbHNlIHtcbiAgICBncmlkU2l6ZSA9IGNlbGxTaXplO1xuICB9XG5cbiAgdmFyIGlzTGF5b3V0UGFkZGVkID0gcGFyYW1ldGVycy5sYXlvdXQgPT09IHVuZGVmaW5lZCB8fCBwYXJhbWV0ZXJzLmxheW91dCA9PT0gJ3BhZGRlZCc7IC8vIDE2cHggb2Zmc2V0IGluIHRoZSBncmlkIHRvIGFjY291bnQgZm9yIHBhZGRlZCBsYXlvdXRcblxuICB2YXIgZGVmYXVsdE9mZnNldCA9IGlzTGF5b3V0UGFkZGVkID8gMTYgOiAwO1xuICB2YXIgb2Zmc2V0WCA9IChfZ3JpZFBhcmFtZXRlcnMkb2Zmc2UgPSBncmlkUGFyYW1ldGVycy5vZmZzZXRYKSAhPT0gbnVsbCAmJiBfZ3JpZFBhcmFtZXRlcnMkb2Zmc2UgIT09IHZvaWQgMCA/IF9ncmlkUGFyYW1ldGVycyRvZmZzZSA6IGlzSW5Eb2NzID8gMjAgOiBkZWZhdWx0T2Zmc2V0O1xuICB2YXIgb2Zmc2V0WSA9IChfZ3JpZFBhcmFtZXRlcnMkb2Zmc2UyID0gZ3JpZFBhcmFtZXRlcnMub2Zmc2V0WSkgIT09IG51bGwgJiYgX2dyaWRQYXJhbWV0ZXJzJG9mZnNlMiAhPT0gdm9pZCAwID8gX2dyaWRQYXJhbWV0ZXJzJG9mZnNlMiA6IGlzSW5Eb2NzID8gMjAgOiBkZWZhdWx0T2Zmc2V0O1xuICB2YXIgZ3JpZFN0eWxlcyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxlY3RvciA9IGNvbnRleHQudmlld01vZGUgPT09ICdkb2NzJyA/IFwiI2FuY2hvci0tXCIuY29uY2F0KGNvbnRleHQuaWQsIFwiIC5kb2NzLXN0b3J5XCIpIDogJy5zYi1zaG93LW1haW4nO1xuICAgIHZhciBiYWNrZ3JvdW5kU2l6ZSA9IFtcIlwiLmNvbmNhdChncmlkU2l6ZSAqIGNlbGxBbW91bnQsIFwicHggXCIpLmNvbmNhdChncmlkU2l6ZSAqIGNlbGxBbW91bnQsIFwicHhcIiksIFwiXCIuY29uY2F0KGdyaWRTaXplICogY2VsbEFtb3VudCwgXCJweCBcIikuY29uY2F0KGdyaWRTaXplICogY2VsbEFtb3VudCwgXCJweFwiKSwgXCJcIi5jb25jYXQoZ3JpZFNpemUsIFwicHggXCIpLmNvbmNhdChncmlkU2l6ZSwgXCJweFwiKSwgXCJcIi5jb25jYXQoZ3JpZFNpemUsIFwicHggXCIpLmNvbmNhdChncmlkU2l6ZSwgXCJweFwiKV0uam9pbignLCAnKTtcbiAgICByZXR1cm4gXCJcXG4gICAgICBcIi5jb25jYXQoc2VsZWN0b3IsIFwiIHtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogXCIpLmNvbmNhdChiYWNrZ3JvdW5kU2l6ZSwgXCIgIWltcG9ydGFudDtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IFwiKS5jb25jYXQob2Zmc2V0WCwgXCJweCBcIikuY29uY2F0KG9mZnNldFksIFwicHgsIFwiKS5jb25jYXQob2Zmc2V0WCwgXCJweCBcIikuY29uY2F0KG9mZnNldFksIFwicHgsIFwiKS5jb25jYXQob2Zmc2V0WCwgXCJweCBcIikuY29uY2F0KG9mZnNldFksIFwicHgsIFwiKS5jb25jYXQob2Zmc2V0WCwgXCJweCBcIikuY29uY2F0KG9mZnNldFksIFwicHggIWltcG9ydGFudDtcXG4gICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGlmZmVyZW5jZSAhaW1wb3J0YW50O1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMTMwLCAxMzAsIDEzMCwgXCIpLmNvbmNhdChvcGFjaXR5LCBcIikgMXB4LCB0cmFuc3BhcmVudCAxcHgpLFxcbiAgICAgICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMzAsIDEzMCwgMTMwLCBcIikuY29uY2F0KG9wYWNpdHksIFwiKSAxcHgsIHRyYW5zcGFyZW50IDFweCksXFxuICAgICAgICAgbGluZWFyLWdyYWRpZW50KHJnYmEoMTMwLCAxMzAsIDEzMCwgXCIpLmNvbmNhdChvcGFjaXR5IC8gMiwgXCIpIDFweCwgdHJhbnNwYXJlbnQgMXB4KSxcXG4gICAgICAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTMwLCAxMzAsIDEzMCwgXCIpLmNvbmNhdChvcGFjaXR5IC8gMiwgXCIpIDFweCwgdHJhbnNwYXJlbnQgMXB4KSAhaW1wb3J0YW50O1xcbiAgICAgIH1cXG4gICAgXCIpO1xuICB9LCBbZ3JpZFNpemVdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZWN0b3JJZCA9IGNvbnRleHQudmlld01vZGUgPT09ICdkb2NzJyA/IFwiYWRkb24tYmFja2dyb3VuZHMtZ3JpZC1kb2NzLVwiLmNvbmNhdChjb250ZXh0LmlkKSA6IFwiYWRkb24tYmFja2dyb3VuZHMtZ3JpZFwiO1xuXG4gICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgY2xlYXJTdHlsZXMoc2VsZWN0b3JJZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYWRkR3JpZFN0eWxlKHNlbGVjdG9ySWQsIGdyaWRTdHlsZXMpO1xuICB9LCBbaXNBY3RpdmUsIGdyaWRTdHlsZXMsIGNvbnRleHRdKTtcbiAgcmV0dXJuIFN0b3J5Rm4oKTtcbn07IiwiaW1wb3J0IHsgd2l0aEJhY2tncm91bmQgfSBmcm9tICcuL2RlY29yYXRvcnMvd2l0aEJhY2tncm91bmQnO1xuaW1wb3J0IHsgd2l0aEdyaWQgfSBmcm9tICcuL2RlY29yYXRvcnMvd2l0aEdyaWQnO1xuZXhwb3J0IHZhciBkZWNvcmF0b3JzID0gW3dpdGhHcmlkLCB3aXRoQmFja2dyb3VuZF07XG5leHBvcnQgdmFyIHBhcmFtZXRlcnMgPSB7XG4gIGJhY2tncm91bmRzOiB7XG4gICAgZ3JpZDoge1xuICAgICAgY2VsbFNpemU6IDIwLFxuICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgY2VsbEFtb3VudDogNVxuICAgIH0sXG4gICAgdmFsdWVzOiBbe1xuICAgICAgbmFtZTogJ2xpZ2h0JyxcbiAgICAgIHZhbHVlOiAnI0Y4RjhGOCdcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnZGFyaycsXG4gICAgICB2YWx1ZTogJyMzMzMzMzMnXG4gICAgfV1cbiAgfVxufTsiXSwibmFtZXMiOlsiUEFSQU1fS0VZIiwiX3RlbXBsYXRlT2JqZWN0IiwiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCIsInN0cmluZ3MiLCJyYXciLCJkb2N1bWVudCIsImdsb2JhbCIsIndpbmRvdyIsImlzUmVkdWNlTW90aW9uRW5hYmxlZCIsInByZWZlcnNSZWR1Y2VNb3Rpb24iLCJnZXRCYWNrZ3JvdW5kQ29sb3JCeU5hbWUiLCJjdXJyZW50U2VsZWN0ZWRWYWx1ZSIsImJhY2tncm91bmRzIiwiZGVmYXVsdE5hbWUiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdEJhY2tncm91bmQiLCJhdmFpbGFibGVDb2xvcnMiLCJsb2dnZXIiLCJkZWRlbnQiLCJjbGVhclN0eWxlcyIsInNlbGVjdG9yIiwic2VsZWN0b3JzIiwiY2xlYXJTdHlsZSIsImVsZW1lbnQiLCJhZGRHcmlkU3R5bGUiLCJjc3MiLCJleGlzdGluZ1N0eWxlIiwic3R5bGUiLCJhZGRCYWNrZ3JvdW5kU3R5bGUiLCJzdG9yeUlkIiwiZ3JpZFN0eWxlU2VsZWN0b3IiLCJleGlzdGluZ0dyaWRTdHlsZSIsIndpdGhCYWNrZ3JvdW5kIiwiU3RvcnlGbiIsImNvbnRleHQiLCJfZ2xvYmFscyRCQUNLR1JPVU5EU18iLCJnbG9iYWxzIiwicGFyYW1ldGVycyIsImdsb2JhbHNCYWNrZ3JvdW5kQ29sb3IiLCJCQUNLR1JPVU5EU19QQVJBTV9LRVkiLCJiYWNrZ3JvdW5kc0NvbmZpZyIsInNlbGVjdGVkQmFja2dyb3VuZENvbG9yIiwidXNlTWVtbyIsImlzQWN0aXZlIiwiYmFja2dyb3VuZFN0eWxlcyIsInRyYW5zaXRpb25TdHlsZSIsInVzZUVmZmVjdCIsInNlbGVjdG9ySWQiLCJkZXByZWNhdGVkQ2VsbFNpemVXYXJuaW5nIiwiZGVwcmVjYXRlIiwid2l0aEdyaWQiLCJfcGFyYW1ldGVycyRncmlkIiwiX2dyaWRQYXJhbWV0ZXJzJG9mZnNlIiwiX2dyaWRQYXJhbWV0ZXJzJG9mZnNlMiIsImdyaWRQYXJhbWV0ZXJzIiwiY2VsbEFtb3VudCIsImNlbGxTaXplIiwib3BhY2l0eSIsImlzSW5Eb2NzIiwiZ3JpZFNpemUiLCJpc0xheW91dFBhZGRlZCIsImRlZmF1bHRPZmZzZXQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImdyaWRTdHlsZXMiLCJiYWNrZ3JvdW5kU2l6ZSIsImRlY29yYXRvcnMiXSwibWFwcGluZ3MiOiJ1RUFDTyxJQUFJQSxFQUFZLGNDRW5CQyxFQUVKLFNBQVNDLEVBQXVCQyxFQUFTQyxFQUFLLENBQUUsT0FBS0EsSUFBT0EsRUFBTUQsRUFBUSxNQUFNLENBQUMsR0FBWSxPQUFPLE9BQU8sT0FBTyxpQkFBaUJBLEVBQVMsQ0FBRSxJQUFLLENBQUUsTUFBTyxPQUFPLE9BQU9DLENBQUcsRUFBSyxDQUFBLENBQUMsQ0FBSSxDQVd2TCxJQUFJQyxFQUFXQyxFQUFPLFNBQ2xC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
