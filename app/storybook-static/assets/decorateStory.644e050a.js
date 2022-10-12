import{d as y,s as h}from"./iframe.dc3b0685.js";import{h as m,s as v,c as w}from"./vue.esm-bundler.c02555e9.js";var f;function b(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var E=function(t,n){var a=n.id,o=n.component;if(!o)throw new Error("Unable to render story ".concat(a," as the component annotation is missing from the default export"));return m(o,t)},c=v(null),s=null,l=w({unmounted:function(){s=null},setup:function(){return function(){if(!c.value)throw new Error("No Vue 3 Story available. Was it set correctly?");return m(c.value)}}});function C(e,t){var n=e.title,a=e.name,o=e.storyFn,r=e.showMain,i=e.showError,u=e.showException;l.config.errorHandler=u;var p=o();if(!p){i({title:'Expecting a Vue component from the story: "'.concat(a,'" of "').concat(n,'".'),description:y(f||(f=b([`
        Did you forget to return the Vue component from the story?
        Use "() => ({ template: '<my-comp></my-comp>' })" or "() => ({ components: MyComp, template: '<my-comp></my-comp>' })" when defining the story.
      `])))});return}r(),c.value=p,s||(s=l.mount(t))}function g(e){return typeof e=="function"?{render:e,name:e.name}:e}function d(e,t){var n=e;return n==null?null:t?Object.assign({},g(n),{components:Object.assign({},n.components||{},{story:t})}):{render:function(){return m(n)}}}function z(e,t){return t.reduce(function(n,a){return function(o){var r,i=a(function(u){return r=n(Object.assign({},o,h(u))),r},o);return r||(r=n(o)),i===r?r:d(i,r)}},function(n){return d(e(n))})}export{C as a,z as d,E as r,l as s};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdGVTdG9yeS42NDRlMDUwYS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svdnVlMy9kaXN0L2VzbS9jbGllbnQvcHJldmlldy9yZW5kZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay92dWUzL2Rpc3QvZXNtL2NsaWVudC9wcmV2aWV3L2RlY29yYXRlU3RvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF90ZW1wbGF0ZU9iamVjdDtcblxuZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHsgaWYgKCFyYXcpIHsgcmF3ID0gc3RyaW5ncy5zbGljZSgwKTsgfSByZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdHJpbmdzLCB7IHJhdzogeyB2YWx1ZTogT2JqZWN0LmZyZWV6ZShyYXcpIH0gfSkpOyB9XG5cbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc2xpY2UuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZnJlZXplLmpzXCI7XG5pbXBvcnQgZGVkZW50IGZyb20gJ3RzLWRlZGVudCc7XG5pbXBvcnQgeyBjcmVhdGVBcHAsIGgsIHNoYWxsb3dSZWYgfSBmcm9tICd2dWUnO1xuZXhwb3J0IHZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIocHJvcHMsIGNvbnRleHQpIHtcbiAgdmFyIGlkID0gY29udGV4dC5pZCxcbiAgICAgIENvbXBvbmVudCA9IGNvbnRleHQuY29tcG9uZW50O1xuXG4gIGlmICghQ29tcG9uZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHJlbmRlciBzdG9yeSBcIi5jb25jYXQoaWQsIFwiIGFzIHRoZSBjb21wb25lbnQgYW5ub3RhdGlvbiBpcyBtaXNzaW5nIGZyb20gdGhlIGRlZmF1bHQgZXhwb3J0XCIpKTtcbiAgfSAvLyBUT0RPIHJlbW92ZSB0aGlzIGhhY2tcblxuXG4gIHJldHVybiBoKENvbXBvbmVudCwgcHJvcHMpO1xufTtcbmV4cG9ydCB2YXIgYWN0aXZlU3RvcnlDb21wb25lbnQgPSBzaGFsbG93UmVmKG51bGwpO1xudmFyIHJvb3QgPSBudWxsO1xuZXhwb3J0IHZhciBzdG9yeWJvb2tBcHAgPSBjcmVhdGVBcHAoe1xuICAvLyBJZiBhbiBlbmQtdXNlciBjYWxscyBgdW5tb3VudGAgb24gdGhlIGFwcCwgd2UgbmVlZCB0byBjbGVhciBvdXIgcm9vdCB2YXJpYWJsZVxuICB1bm1vdW50ZWQ6IGZ1bmN0aW9uIHVubW91bnRlZCgpIHtcbiAgICByb290ID0gbnVsbDtcbiAgfSxcbiAgc2V0dXA6IGZ1bmN0aW9uIHNldHVwKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWFjdGl2ZVN0b3J5Q29tcG9uZW50LnZhbHVlKSB0aHJvdyBuZXcgRXJyb3IoJ05vIFZ1ZSAzIFN0b3J5IGF2YWlsYWJsZS4gV2FzIGl0IHNldCBjb3JyZWN0bHk/Jyk7XG4gICAgICByZXR1cm4gaChhY3RpdmVTdG9yeUNvbXBvbmVudC52YWx1ZSk7XG4gICAgfTtcbiAgfVxufSk7XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9ET00oX3JlZiwgZG9tRWxlbWVudCkge1xuICB2YXIgdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIHN0b3J5Rm4gPSBfcmVmLnN0b3J5Rm4sXG4gICAgICBzaG93TWFpbiA9IF9yZWYuc2hvd01haW4sXG4gICAgICBzaG93RXJyb3IgPSBfcmVmLnNob3dFcnJvcixcbiAgICAgIHNob3dFeGNlcHRpb24gPSBfcmVmLnNob3dFeGNlcHRpb247XG4gIHN0b3J5Ym9va0FwcC5jb25maWcuZXJyb3JIYW5kbGVyID0gc2hvd0V4Y2VwdGlvbjtcbiAgdmFyIGVsZW1lbnQgPSBzdG9yeUZuKCk7XG5cbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgc2hvd0Vycm9yKHtcbiAgICAgIHRpdGxlOiBcIkV4cGVjdGluZyBhIFZ1ZSBjb21wb25lbnQgZnJvbSB0aGUgc3Rvcnk6IFxcXCJcIi5jb25jYXQobmFtZSwgXCJcXFwiIG9mIFxcXCJcIikuY29uY2F0KHRpdGxlLCBcIlxcXCIuXCIpLFxuICAgICAgZGVzY3JpcHRpb246IGRlZGVudChfdGVtcGxhdGVPYmplY3QgfHwgKF90ZW1wbGF0ZU9iamVjdCA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoW1wiXFxuICAgICAgICBEaWQgeW91IGZvcmdldCB0byByZXR1cm4gdGhlIFZ1ZSBjb21wb25lbnQgZnJvbSB0aGUgc3Rvcnk/XFxuICAgICAgICBVc2UgXFxcIigpID0+ICh7IHRlbXBsYXRlOiAnPG15LWNvbXA+PC9teS1jb21wPicgfSlcXFwiIG9yIFxcXCIoKSA9PiAoeyBjb21wb25lbnRzOiBNeUNvbXAsIHRlbXBsYXRlOiAnPG15LWNvbXA+PC9teS1jb21wPicgfSlcXFwiIHdoZW4gZGVmaW5pbmcgdGhlIHN0b3J5LlxcbiAgICAgIFwiXSkpKVxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHNob3dNYWluKCk7XG4gIGFjdGl2ZVN0b3J5Q29tcG9uZW50LnZhbHVlID0gZWxlbWVudDtcblxuICBpZiAoIXJvb3QpIHtcbiAgICByb290ID0gc3Rvcnlib29rQXBwLm1vdW50KGRvbUVsZW1lbnQpO1xuICB9XG59IiwiaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuYXNzaWduLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZy5qc1wiO1xuaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBzYW5pdGl6ZVN0b3J5Q29udGV4dFVwZGF0ZSB9IGZyb20gJ0BzdG9yeWJvb2svc3RvcmUnO1xuXG4vKlxuICBUaGlzIG5vcm1hbGl6ZXMgYSBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbnRvIGEgcmVuZGVyIG1ldGhvZCBpbiBDb21wb25lbnRPcHRpb25zLlxuXG4gIFRoZSBjb25jZXB0IGlzIHRha2VuIGZyb20gVnVlIDMncyBgZGVmaW5lQ29tcG9uZW50YCBidXQgY2hhbmdlZCBmcm9tIGNyZWF0aW5nIGEgYHNldHVwYFxuICBtZXRob2Qgb24gdGhlIENvbXBvbmVudE9wdGlvbnMgc28gZW5kLXVzZXJzIGRvbid0IG5lZWQgdG8gc3BlY2lmeSBhIFwidGh1bmtcIiBhcyBhIGRlY29yYXRvci5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplRnVuY3Rpb25hbENvbXBvbmVudChvcHRpb25zKSB7XG4gIHJldHVybiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJyA/IHtcbiAgICByZW5kZXI6IG9wdGlvbnMsXG4gICAgbmFtZTogb3B0aW9ucy5uYW1lXG4gIH0gOiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlKHJhd1N0b3J5LCBpbm5lclN0b3J5KSB7XG4gIHZhciBzdG9yeSA9IHJhd1N0b3J5O1xuXG4gIGlmIChzdG9yeSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoaW5uZXJTdG9yeSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBub3JtYWxpemVGdW5jdGlvbmFsQ29tcG9uZW50KHN0b3J5KSwge1xuICAgICAgY29tcG9uZW50czogT2JqZWN0LmFzc2lnbih7fSwgc3RvcnkuY29tcG9uZW50cyB8fCB7fSwge1xuICAgICAgICBzdG9yeTogaW5uZXJTdG9yeVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gaChzdG9yeSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb3JhdGVTdG9yeShzdG9yeUZuLCBkZWNvcmF0b3JzKSB7XG4gIHJldHVybiBkZWNvcmF0b3JzLnJlZHVjZShmdW5jdGlvbiAoZGVjb3JhdGVkLCBkZWNvcmF0b3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIHZhciBzdG9yeTtcbiAgICAgIHZhciBkZWNvcmF0ZWRTdG9yeSA9IGRlY29yYXRvcihmdW5jdGlvbiAodXBkYXRlKSB7XG4gICAgICAgIHN0b3J5ID0gZGVjb3JhdGVkKE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIHNhbml0aXplU3RvcnlDb250ZXh0VXBkYXRlKHVwZGF0ZSkpKTtcbiAgICAgICAgcmV0dXJuIHN0b3J5O1xuICAgICAgfSwgY29udGV4dCk7XG5cbiAgICAgIGlmICghc3RvcnkpIHtcbiAgICAgICAgc3RvcnkgPSBkZWNvcmF0ZWQoY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkZWNvcmF0ZWRTdG9yeSA9PT0gc3RvcnkpIHtcbiAgICAgICAgcmV0dXJuIHN0b3J5O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJlcGFyZShkZWNvcmF0ZWRTdG9yeSwgc3RvcnkpO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgcmV0dXJuIHByZXBhcmUoc3RvcnlGbihjb250ZXh0KSk7XG4gIH0pO1xufSJdLCJuYW1lcyI6WyJfdGVtcGxhdGVPYmplY3QiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwic3RyaW5ncyIsInJhdyIsInJlbmRlciIsInByb3BzIiwiY29udGV4dCIsImlkIiwiQ29tcG9uZW50IiwiaCIsImFjdGl2ZVN0b3J5Q29tcG9uZW50Iiwic2hhbGxvd1JlZiIsInJvb3QiLCJzdG9yeWJvb2tBcHAiLCJjcmVhdGVBcHAiLCJyZW5kZXJUb0RPTSIsIl9yZWYiLCJkb21FbGVtZW50IiwidGl0bGUiLCJuYW1lIiwic3RvcnlGbiIsInNob3dNYWluIiwic2hvd0Vycm9yIiwic2hvd0V4Y2VwdGlvbiIsImVsZW1lbnQiLCJkZWRlbnQiLCJub3JtYWxpemVGdW5jdGlvbmFsQ29tcG9uZW50Iiwib3B0aW9ucyIsInByZXBhcmUiLCJyYXdTdG9yeSIsImlubmVyU3RvcnkiLCJzdG9yeSIsImRlY29yYXRlU3RvcnkiLCJkZWNvcmF0b3JzIiwiZGVjb3JhdGVkIiwiZGVjb3JhdG9yIiwiZGVjb3JhdGVkU3RvcnkiLCJ1cGRhdGUiLCJzYW5pdGl6ZVN0b3J5Q29udGV4dFVwZGF0ZSJdLCJtYXBwaW5ncyI6ImdIQUFBLElBQUlBLEVBRUosU0FBU0MsRUFBdUJDLEVBQVNDLEVBQUssQ0FBRSxPQUFLQSxJQUFPQSxFQUFNRCxFQUFRLE1BQU0sQ0FBQyxHQUFZLE9BQU8sT0FBTyxPQUFPLGlCQUFpQkEsRUFBUyxDQUFFLElBQUssQ0FBRSxNQUFPLE9BQU8sT0FBT0MsQ0FBRyxFQUFLLENBQUEsQ0FBQyxDQUFJLENBUTdLLElBQUNDLEVBQVMsU0FBZ0JDLEVBQU9DLEVBQVMsQ0FDbEQsSUFBSUMsRUFBS0QsRUFBUSxHQUNiRSxFQUFZRixFQUFRLFVBRXhCLEdBQUksQ0FBQ0UsRUFDSCxNQUFNLElBQUksTUFBTSwwQkFBMEIsT0FBT0QsRUFBSSxpRUFBaUUsQ0FBQyxFQUl6SCxPQUFPRSxFQUFFRCxFQUFXSCxDQUFLLENBQzNCLEVBQ1dLLEVBQXVCQyxFQUFXLElBQUksRUFDN0NDLEVBQU8sS0FDQUMsRUFBZUMsRUFBVSxDQUVsQyxVQUFXLFVBQXFCLENBQzlCRixFQUFPLElBQ1IsRUFDRCxNQUFPLFVBQWlCLENBQ3RCLE9BQU8sVUFBWSxDQUNqQixHQUFJLENBQUNGLEVBQXFCLE1BQU8sTUFBTSxJQUFJLE1BQU0saURBQWlELEVBQ2xHLE9BQU9ELEVBQUVDLEVBQXFCLEtBQUssQ0FDekMsQ0FDRyxDQUNILENBQUMsRUFDTSxTQUFTSyxFQUFZQyxFQUFNQyxFQUFZLENBQzVDLElBQUlDLEVBQVFGLEVBQUssTUFDYkcsRUFBT0gsRUFBSyxLQUNaSSxFQUFVSixFQUFLLFFBQ2ZLLEVBQVdMLEVBQUssU0FDaEJNLEVBQVlOLEVBQUssVUFDakJPLEVBQWdCUCxFQUFLLGNBQ3pCSCxFQUFhLE9BQU8sYUFBZVUsRUFDbkMsSUFBSUMsRUFBVUosSUFFZCxHQUFJLENBQUNJLEVBQVMsQ0FDWkYsRUFBVSxDQUNSLE1BQU8sOENBQStDLE9BQU9ILEVBQU0sUUFBVSxFQUFFLE9BQU9ELEVBQU8sSUFBSyxFQUNsRyxZQUFhTyxFQUFPekIsSUFBb0JBLEVBQWtCQyxFQUF1QixDQUFDO0FBQUE7QUFBQTtBQUFBLE9BQTJPLENBQUMsRUFBRSxDQUN0VSxDQUFLLEVBQ0QsTUFDRCxDQUVEb0IsSUFDQVgsRUFBcUIsTUFBUWMsRUFFeEJaLElBQ0hBLEVBQU9DLEVBQWEsTUFBTUksQ0FBVSxFQUV4QyxDQy9DQSxTQUFTUyxFQUE2QkMsRUFBUyxDQUM3QyxPQUFPLE9BQU9BLEdBQVksV0FBYSxDQUNyQyxPQUFRQSxFQUNSLEtBQU1BLEVBQVEsSUFDZixFQUFHQSxDQUNOLENBRUEsU0FBU0MsRUFBUUMsRUFBVUMsRUFBWSxDQUNyQyxJQUFJQyxFQUFRRixFQUVaLE9BQUlFLEdBQVMsS0FDSixLQUdMRCxFQUNLLE9BQU8sT0FBTyxDQUFFLEVBQUVKLEVBQTZCSyxDQUFLLEVBQUcsQ0FDNUQsV0FBWSxPQUFPLE9BQU8sQ0FBRSxFQUFFQSxFQUFNLFlBQWMsR0FBSSxDQUNwRCxNQUFPRCxDQUNmLENBQU8sQ0FDUCxDQUFLLEVBR0ksQ0FDTCxPQUFRLFVBQWtCLENBQ3hCLE9BQU9yQixFQUFFc0IsQ0FBSyxDQUNmLENBQ0wsQ0FDQSxDQUVPLFNBQVNDLEVBQWNaLEVBQVNhLEVBQVksQ0FDakQsT0FBT0EsRUFBVyxPQUFPLFNBQVVDLEVBQVdDLEVBQVcsQ0FDdkQsT0FBTyxTQUFVN0IsRUFBUyxDQUN4QixJQUFJeUIsRUFDQUssRUFBaUJELEVBQVUsU0FBVUUsRUFBUSxDQUMvQyxPQUFBTixFQUFRRyxFQUFVLE9BQU8sT0FBTyxDQUFBLEVBQUk1QixFQUFTZ0MsRUFBMkJELENBQU0sQ0FBQyxDQUFDLEVBQ3pFTixDQUNSLEVBQUV6QixDQUFPLEVBTVYsT0FKS3lCLElBQ0hBLEVBQVFHLEVBQVU1QixDQUFPLEdBR3ZCOEIsSUFBbUJMLEVBQ2RBLEVBR0ZILEVBQVFRLEVBQWdCTCxDQUFLLENBQzFDLENBQ0csRUFBRSxTQUFVekIsRUFBUyxDQUNwQixPQUFPc0IsRUFBUVIsRUFBUWQsQ0FBTyxDQUFDLENBQ25DLENBQUcsQ0FDSCJ9
