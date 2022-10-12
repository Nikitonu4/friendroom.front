import{l as E,w as S,b as F,e as $,f as P,C as L,P as N,E as W}from"./iframe.8520de00.js";import{s as Y,a as B,d as K,r as U}from"./decorateStory.32d36793.js";function g(r,e){return G(r)||z(r,e)||H(r,e)||V()}function V(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H(r,e){if(!!r){if(typeof r=="string")return O(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(r,e)}}function O(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=r[t];return o}function z(r,e){var t=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var o=[],a=!0,n=!1,i,l;try{for(t=t.call(r);!(a=(i=t.next()).done)&&(o.push(i.value),!(e&&o.length===e));a=!0);}catch(c){n=!0,l=c}finally{try{!a&&t.return!=null&&t.return()}finally{if(n)throw l}}return o}}function G(r){if(Array.isArray(r))return r}function J(r){var e=null;Array.isArray(r)?e=r:r.keys&&(e=[r]);var t=new Map;if(e)e.forEach(function(a){a.keys().forEach(function(n){try{var i=a(n);t.set(typeof a.resolve=="function"?a.resolve(n):n,i)}catch(c){var l=c.message&&c.stack?"".concat(c.message,`
 `).concat(c.stack):c.toString();E.error("Unexpected error while loading ".concat(n,": ").concat(l))}})});else{var o=r();Array.isArray(o)&&o.every(function(a){return a.default!=null})?t=new Map(o.map(function(a,n){return["exports-map-".concat(n),a]})):o&&E.warn("Loader function passed to 'configure' should return void or an array of module exports that all contain a 'default' export. Received: ".concat(JSON.stringify(o)))}return t}function Q(r,e){var t,o,a,n=(e==null||(t=e.hot)===null||t===void 0||(o=t.data)===null||o===void 0?void 0:o.lastExportsMap)||new Map;e!=null&&(a=e.hot)!==null&&a!==void 0&&a.dispose&&(e.hot.accept(),e.hot.dispose(function(u){u.lastExportsMap=n}));var i=J(r),l=new Map;Array.from(i.entries()).filter(function(u){var s=g(u,2),d=s[1];return!!d.default}).filter(function(u){var s=g(u,2),d=s[0],v=s[1];return n.get(d)!==v}).forEach(function(u){var s=g(u,2),d=s[0],v=s[1];return l.set(d,v)});var c=new Map;return Array.from(n.keys()).filter(function(u){return!i.has(u)}).forEach(function(u){return c.set(u,n.get(u))}),n=i,{added:l,removed:c}}function R(r,e){return rr(r)||q(r,e)||Z(r,e)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(r,e){if(!!r){if(typeof r=="string")return T(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return T(r,e)}}function T(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=r[t];return o}function q(r,e){var t=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var o=[],a=!0,n=!1,i,l;try{for(t=t.call(r);!(a=(i=t.next()).done)&&(o.push(i.value),!(e&&o.length===e));a=!0);}catch(c){n=!0,l=c}finally{try{!a&&t.return!=null&&t.return()}finally{if(n)throw l}}return o}}function rr(r){if(Array.isArray(r))return r}var p=S.window,h=S.FEATURES,er=F(function(){},"`configure()` is deprecated and will be removed in Storybook 7.0. \nPlease use the `stories` field of `main.js` to load stories.\nRead more at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-configure"),f=function(e){return function(){throw new Error("@storybook/client-api:".concat(e," was removed in storyStoreV7."))}};function tr(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.decorateStory,o=e.render;if(p&&(p.IS_STORYBOOK=!0),h!=null&&h.storyStoreV7)return{forceReRender:f("forceReRender"),getStorybook:f("getStorybook"),configure:f("configure"),clientApi:{addDecorator:f("clientApi.addDecorator"),addParameters:f("clientApi.addParameters"),clearDecorators:f("clientApi.clearDecorators"),addLoader:f("clientApi.addLoader"),setAddon:f("clientApi.setAddon"),getStorybook:f("clientApi.getStorybook"),storiesOf:f("clientApi.storiesOf"),raw:f("raw")}};var a=$({page:"preview"});P.setChannel(a);var n=new L,i=new N,l=!1,c=function(d){return n.importFn(d)};function u(){var s=n.getStoryIndex();i.onStoriesChanged({storyIndex:s,importFn:c})}return n.onImportFnChanged=u,n.storyStore=i.storyStore,p&&(p.__STORYBOOK_CLIENT_API__=n,p.__STORYBOOK_ADDONS_CHANNEL__=a,p.__STORYBOOK_PREVIEW__=i,p.__STORYBOOK_STORY_STORE__=i.storyStore),{forceReRender:function(){return a.emit(W.FORCE_RE_RENDER)},getStorybook:function(){return[]},raw:function(){},clientApi:n,configure:function(d,v,I){var k=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;k&&er(),n.addParameters({framework:d});var b=function(){var w=Q(v,I),M=w.added,D=w.removed;return Array.from(M.entries()).forEach(function(_){var m=R(_,2),A=m[0],j=m[1];return n.facade.addStoriesFromExports(A,j)}),Array.from(D.entries()).forEach(function(_){var m=R(_,1),A=m[0];return n.facade.clearFilenameExports(A)}),Object.assign({render:o},n.facade.projectAnnotations,{renderToDOM:r,applyDecorators:t})};l?(b(),u()):(i.initialize({getStoryIndex:function(){return n.getStoryIndex()},importFn:c,getProjectAnnotations:b}),l=!0)}}}var x=S.window;x.STORYBOOK_REACT_CLASSES={};x.STORYBOOK_ENV="vue3";var y=tr(B,{decorateStory:K,render:U});y.clientApi.addDecorator;y.clientApi.addParameters;y.clientApi.clearDecorators;y.clientApi.setAddon;y.forceReRender;y.clientApi.getStorybook;y.clientApi.raw;var ar=Y;module&&module.hot&&module.hot.decline&&module.hot.decline();export{ar as a};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZmM0ZjIyZGYuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2NvcmUtY2xpZW50L2Rpc3QvZXNtL3ByZXZpZXcvZXhlY3V0ZUxvYWRhYmxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svY29yZS1jbGllbnQvZGlzdC9lc20vcHJldmlldy9zdGFydC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL3Z1ZTMvZGlzdC9lc20vY2xpZW50L3ByZXZpZXcvZ2xvYmFscy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL3Z1ZTMvZGlzdC9lc20vY2xpZW50L3ByZXZpZXcvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay92dWUzL2Rpc3QvZXNtL2NsaWVudC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMubWFwLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC50by1zdHJpbmcuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mcm9tLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmRlc2NyaXB0aW9uLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc2xpY2UuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLmV4ZWMuanNcIjtcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ0BzdG9yeWJvb2svY2xpZW50LWxvZ2dlcic7XG5cbi8qKlxuICogRXhlY3V0ZXMgYSBMb2FkYWJsZSAoZnVuY3Rpb24gdGhhdCByZXR1cm5zIGV4cG9ydHMgb3IgcmVxdWlyZSBjb250ZXh0KHMpKVxuICogYW5kIHJldHVybnMgYSBtYXAgb2YgZmlsZW5hbWUgPT4gbW9kdWxlIGV4cG9ydHNcbiAqXG4gKiBAcGFyYW0gbG9hZGFibGUgTG9hZGFibGVcbiAqIEByZXR1cm5zIE1hcDxQYXRoLCBNb2R1bGVFeHBvcnRzPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY3V0ZUxvYWRhYmxlKGxvYWRhYmxlKSB7XG4gIHZhciByZXFzID0gbnVsbDsgLy8gdG9kbyBkaXNjdXNzIC8gaW1wcm92ZSB0eXBlIGNoZWNrXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobG9hZGFibGUpKSB7XG4gICAgcmVxcyA9IGxvYWRhYmxlO1xuICB9IGVsc2UgaWYgKGxvYWRhYmxlLmtleXMpIHtcbiAgICByZXFzID0gW2xvYWRhYmxlXTtcbiAgfVxuXG4gIHZhciBleHBvcnRzTWFwID0gbmV3IE1hcCgpO1xuXG4gIGlmIChyZXFzKSB7XG4gICAgcmVxcy5mb3JFYWNoKGZ1bmN0aW9uIChyZXEpIHtcbiAgICAgIHJlcS5rZXlzKCkuZm9yRWFjaChmdW5jdGlvbiAoZmlsZW5hbWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgZmlsZUV4cG9ydHMgPSByZXEoZmlsZW5hbWUpO1xuICAgICAgICAgIGV4cG9ydHNNYXAuc2V0KHR5cGVvZiByZXEucmVzb2x2ZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlcS5yZXNvbHZlKGZpbGVuYW1lKSA6IGZpbGVuYW1lLCBmaWxlRXhwb3J0cyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgdmFyIGVycm9yU3RyaW5nID0gZXJyb3IubWVzc2FnZSAmJiBlcnJvci5zdGFjayA/IFwiXCIuY29uY2F0KGVycm9yLm1lc3NhZ2UsIFwiXFxuIFwiKS5jb25jYXQoZXJyb3Iuc3RhY2spIDogZXJyb3IudG9TdHJpbmcoKTtcbiAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJVbmV4cGVjdGVkIGVycm9yIHdoaWxlIGxvYWRpbmcgXCIuY29uY2F0KGZpbGVuYW1lLCBcIjogXCIpLmNvbmNhdChlcnJvclN0cmluZykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZXhwb3J0ZWQgPSBsb2FkYWJsZSgpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZXhwb3J0ZWQpICYmIGV4cG9ydGVkLmV2ZXJ5KGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmouZGVmYXVsdCAhPSBudWxsO1xuICAgIH0pKSB7XG4gICAgICBleHBvcnRzTWFwID0gbmV3IE1hcChleHBvcnRlZC5tYXAoZnVuY3Rpb24gKGZpbGVFeHBvcnRzLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gW1wiZXhwb3J0cy1tYXAtXCIuY29uY2F0KGluZGV4KSwgZmlsZUV4cG9ydHNdO1xuICAgICAgfSkpO1xuICAgIH0gZWxzZSBpZiAoZXhwb3J0ZWQpIHtcbiAgICAgIGxvZ2dlci53YXJuKFwiTG9hZGVyIGZ1bmN0aW9uIHBhc3NlZCB0byAnY29uZmlndXJlJyBzaG91bGQgcmV0dXJuIHZvaWQgb3IgYW4gYXJyYXkgb2YgbW9kdWxlIGV4cG9ydHMgdGhhdCBhbGwgY29udGFpbiBhICdkZWZhdWx0JyBleHBvcnQuIFJlY2VpdmVkOiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoZXhwb3J0ZWQpKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV4cG9ydHNNYXA7XG59XG4vKipcbiAqIEV4ZWN1dGVzIGEgTG9hZGFibGUgKGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBleHBvcnRzIG9yIHJlcXVpcmUgY29udGV4dChzKSlcbiAqIGFuZCBjb21wYXJlcyBpdCdzIG91dHB1dCB0byB0aGUgbGFzdCB0aW1lIGl0IHdhcyBydW4gKGFzIHN0b3JlZCBvbiBhIG5vZGUgbW9kdWxlKVxuICpcbiAqIEBwYXJhbSBsb2FkYWJsZSBMb2FkYWJsZVxuICogQHBhcmFtIG0gTm9kZU1vZHVsZVxuICogQHJldHVybnMgeyBhZGRlZDogTWFwPFBhdGgsIE1vZHVsZUV4cG9ydHM+LCByZW1vdmVkOiBNYXA8UGF0aCwgTW9kdWxlRXhwb3J0cz4gfVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlTG9hZGFibGVGb3JDaGFuZ2VzKGxvYWRhYmxlLCBtKSB7XG4gIHZhciBfbSRob3QsIF9tJGhvdCRkYXRhLCBfbSRob3QyO1xuXG4gIHZhciBsYXN0RXhwb3J0c01hcCA9IChtID09PSBudWxsIHx8IG0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfbSRob3QgPSBtLmhvdCkgPT09IG51bGwgfHwgX20kaG90ID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX20kaG90JGRhdGEgPSBfbSRob3QuZGF0YSkgPT09IG51bGwgfHwgX20kaG90JGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9tJGhvdCRkYXRhLmxhc3RFeHBvcnRzTWFwKSB8fCBuZXcgTWFwKCk7XG5cbiAgaWYgKG0gIT09IG51bGwgJiYgbSAhPT0gdm9pZCAwICYmIChfbSRob3QyID0gbS5ob3QpICE9PSBudWxsICYmIF9tJGhvdDIgIT09IHZvaWQgMCAmJiBfbSRob3QyLmRpc3Bvc2UpIHtcbiAgICBtLmhvdC5hY2NlcHQoKTtcbiAgICBtLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIGRhdGEubGFzdEV4cG9ydHNNYXAgPSBsYXN0RXhwb3J0c01hcDtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBleHBvcnRzTWFwID0gZXhlY3V0ZUxvYWRhYmxlKGxvYWRhYmxlKTtcbiAgdmFyIGFkZGVkID0gbmV3IE1hcCgpO1xuICBBcnJheS5mcm9tKGV4cG9ydHNNYXAuZW50cmllcygpKSAvLyBJZ25vcmUgZmlsZXMgdGhhdCBkbyBub3QgaGF2ZSBhIGRlZmF1bHQgZXhwb3J0XG4gIC5maWx0ZXIoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgZmlsZUV4cG9ydHMgPSBfcmVmMlsxXTtcblxuICAgIHJldHVybiAhIWZpbGVFeHBvcnRzLmRlZmF1bHQ7XG4gIH0pIC8vIElnbm9yZSBleHBvcnRzIHRoYXQgYXJlIGVxdWFsIChieSByZWZlcmVuY2UpIHRvIGxhc3QgdGltZSwgdGhpcyBtZWFucyB0aGUgZmlsZSBoYXNuJ3QgY2hhbmdlZFxuICAuZmlsdGVyKGZ1bmN0aW9uIChfcmVmMykge1xuICAgIHZhciBfcmVmNCA9IF9zbGljZWRUb0FycmF5KF9yZWYzLCAyKSxcbiAgICAgICAgZmlsZU5hbWUgPSBfcmVmNFswXSxcbiAgICAgICAgZmlsZUV4cG9ydHMgPSBfcmVmNFsxXTtcblxuICAgIHJldHVybiBsYXN0RXhwb3J0c01hcC5nZXQoZmlsZU5hbWUpICE9PSBmaWxlRXhwb3J0cztcbiAgfSkuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjUpIHtcbiAgICB2YXIgX3JlZjYgPSBfc2xpY2VkVG9BcnJheShfcmVmNSwgMiksXG4gICAgICAgIGZpbGVOYW1lID0gX3JlZjZbMF0sXG4gICAgICAgIGZpbGVFeHBvcnRzID0gX3JlZjZbMV07XG5cbiAgICByZXR1cm4gYWRkZWQuc2V0KGZpbGVOYW1lLCBmaWxlRXhwb3J0cyk7XG4gIH0pO1xuICB2YXIgcmVtb3ZlZCA9IG5ldyBNYXAoKTtcbiAgQXJyYXkuZnJvbShsYXN0RXhwb3J0c01hcC5rZXlzKCkpLmZpbHRlcihmdW5jdGlvbiAoZmlsZU5hbWUpIHtcbiAgICByZXR1cm4gIWV4cG9ydHNNYXAuaGFzKGZpbGVOYW1lKTtcbiAgfSkuZm9yRWFjaChmdW5jdGlvbiAoZmlsZU5hbWUpIHtcbiAgICByZXR1cm4gcmVtb3ZlZC5zZXQoZmlsZU5hbWUsIGxhc3RFeHBvcnRzTWFwLmdldChmaWxlTmFtZSkpO1xuICB9KTsgLy8gU2F2ZSB0aGUgdmFsdWUgZm9yIHRoZSBkaXNwb3NlKCkgY2FsbCBhYm92ZVxuXG4gIGxhc3RFeHBvcnRzTWFwID0gZXhwb3J0c01hcDtcbiAgcmV0dXJuIHtcbiAgICBhZGRlZDogYWRkZWQsXG4gICAgcmVtb3ZlZDogcmVtb3ZlZFxuICB9O1xufSIsImZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZnJvbS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5hc3NpZ24uanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuZGVzY3JpcHRpb24uanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zbGljZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAuZXhlYy5qc1wiO1xuaW1wb3J0IGdsb2JhbCBmcm9tICdnbG9iYWwnO1xuaW1wb3J0IGRlcHJlY2F0ZSBmcm9tICd1dGlsLWRlcHJlY2F0ZSc7XG5pbXBvcnQgeyBDbGllbnRBcGkgfSBmcm9tICdAc3Rvcnlib29rL2NsaWVudC1hcGknO1xuaW1wb3J0IHsgUHJldmlld1dlYiB9IGZyb20gJ0BzdG9yeWJvb2svcHJldmlldy13ZWInO1xuaW1wb3J0IGNyZWF0ZUNoYW5uZWwgZnJvbSAnQHN0b3J5Ym9vay9jaGFubmVsLXBvc3RtZXNzYWdlJztcbmltcG9ydCB7IGFkZG9ucyB9IGZyb20gJ0BzdG9yeWJvb2svYWRkb25zJztcbmltcG9ydCBFdmVudHMgZnJvbSAnQHN0b3J5Ym9vay9jb3JlLWV2ZW50cyc7XG5pbXBvcnQgeyBleGVjdXRlTG9hZGFibGVGb3JDaGFuZ2VzIH0gZnJvbSAnLi9leGVjdXRlTG9hZGFibGUnO1xudmFyIGdsb2JhbFdpbmRvdyA9IGdsb2JhbC53aW5kb3csXG4gICAgRkVBVFVSRVMgPSBnbG9iYWwuRkVBVFVSRVM7XG52YXIgY29uZmlndXJlRGVwcmVjYXRpb25XYXJuaW5nID0gZGVwcmVjYXRlKGZ1bmN0aW9uICgpIHt9LCBcImBjb25maWd1cmUoKWAgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIFN0b3J5Ym9vayA3LjAuIFxcblBsZWFzZSB1c2UgdGhlIGBzdG9yaWVzYCBmaWVsZCBvZiBgbWFpbi5qc2AgdG8gbG9hZCBzdG9yaWVzLlxcblJlYWQgbW9yZSBhdCBodHRwczovL2dpdGh1Yi5jb20vc3Rvcnlib29ranMvc3Rvcnlib29rL2Jsb2IvbmV4dC9NSUdSQVRJT04ubWQjZGVwcmVjYXRlZC1jb25maWd1cmVcIik7XG5cbnZhciByZW1vdmVkQXBpID0gZnVuY3Rpb24gcmVtb3ZlZEFwaShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQHN0b3J5Ym9vay9jbGllbnQtYXBpOlwiLmNvbmNhdChuYW1lLCBcIiB3YXMgcmVtb3ZlZCBpbiBzdG9yeVN0b3JlVjcuXCIpKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydChyZW5kZXJUb0RPTSkge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge30sXG4gICAgICBkZWNvcmF0ZVN0b3J5ID0gX3JlZi5kZWNvcmF0ZVN0b3J5LFxuICAgICAgcmVuZGVyID0gX3JlZi5yZW5kZXI7XG5cbiAgaWYgKGdsb2JhbFdpbmRvdykge1xuICAgIC8vIFRvIGVuYWJsZSB1c2VyIGNvZGUgdG8gZGV0ZWN0IGlmIGl0IGlzIHJ1bm5pbmcgaW4gU3Rvcnlib29rXG4gICAgZ2xvYmFsV2luZG93LklTX1NUT1JZQk9PSyA9IHRydWU7XG4gIH1cblxuICBpZiAoRkVBVFVSRVMgIT09IG51bGwgJiYgRkVBVFVSRVMgIT09IHZvaWQgMCAmJiBGRUFUVVJFUy5zdG9yeVN0b3JlVjcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9yY2VSZVJlbmRlcjogcmVtb3ZlZEFwaSgnZm9yY2VSZVJlbmRlcicpLFxuICAgICAgZ2V0U3Rvcnlib29rOiByZW1vdmVkQXBpKCdnZXRTdG9yeWJvb2snKSxcbiAgICAgIGNvbmZpZ3VyZTogcmVtb3ZlZEFwaSgnY29uZmlndXJlJyksXG4gICAgICBjbGllbnRBcGk6IHtcbiAgICAgICAgYWRkRGVjb3JhdG9yOiByZW1vdmVkQXBpKCdjbGllbnRBcGkuYWRkRGVjb3JhdG9yJyksXG4gICAgICAgIGFkZFBhcmFtZXRlcnM6IHJlbW92ZWRBcGkoJ2NsaWVudEFwaS5hZGRQYXJhbWV0ZXJzJyksXG4gICAgICAgIGNsZWFyRGVjb3JhdG9yczogcmVtb3ZlZEFwaSgnY2xpZW50QXBpLmNsZWFyRGVjb3JhdG9ycycpLFxuICAgICAgICBhZGRMb2FkZXI6IHJlbW92ZWRBcGkoJ2NsaWVudEFwaS5hZGRMb2FkZXInKSxcbiAgICAgICAgc2V0QWRkb246IHJlbW92ZWRBcGkoJ2NsaWVudEFwaS5zZXRBZGRvbicpLFxuICAgICAgICBnZXRTdG9yeWJvb2s6IHJlbW92ZWRBcGkoJ2NsaWVudEFwaS5nZXRTdG9yeWJvb2snKSxcbiAgICAgICAgc3Rvcmllc09mOiByZW1vdmVkQXBpKCdjbGllbnRBcGkuc3Rvcmllc09mJyksXG4gICAgICAgIHJhdzogcmVtb3ZlZEFwaSgncmF3JylcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdmFyIGNoYW5uZWwgPSBjcmVhdGVDaGFubmVsKHtcbiAgICBwYWdlOiAncHJldmlldydcbiAgfSk7XG4gIGFkZG9ucy5zZXRDaGFubmVsKGNoYW5uZWwpO1xuICB2YXIgY2xpZW50QXBpID0gbmV3IENsaWVudEFwaSgpO1xuICB2YXIgcHJldmlldyA9IG5ldyBQcmV2aWV3V2ViKCk7XG4gIHZhciBpbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gIHZhciBpbXBvcnRGbiA9IGZ1bmN0aW9uIGltcG9ydEZuKHBhdGgpIHtcbiAgICByZXR1cm4gY2xpZW50QXBpLmltcG9ydEZuKHBhdGgpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG9uU3Rvcmllc0NoYW5nZWQoKSB7XG4gICAgdmFyIHN0b3J5SW5kZXggPSBjbGllbnRBcGkuZ2V0U3RvcnlJbmRleCgpO1xuICAgIHByZXZpZXcub25TdG9yaWVzQ2hhbmdlZCh7XG4gICAgICBzdG9yeUluZGV4OiBzdG9yeUluZGV4LFxuICAgICAgaW1wb3J0Rm46IGltcG9ydEZuXG4gICAgfSk7XG4gIH0gLy8gVGhlc2UgdHdvIGJpdHMgYXJlIGEgYml0IHVnbHksIGJ1dCBkdWUgdG8gZGVwZW5kZW5jaWVzLCBgQ2xpZW50QXBpYCBjYW5ub3QgaGF2ZVxuICAvLyBkaXJlY3QgcmVmZXJlbmNlIHRvIGBQcmV2aWV3V2ViYCwgc28gd2UgbmVlZCB0byBwYXRjaCBpbiBiaXRzXG5cblxuICBjbGllbnRBcGkub25JbXBvcnRGbkNoYW5nZWQgPSBvblN0b3JpZXNDaGFuZ2VkO1xuICBjbGllbnRBcGkuc3RvcnlTdG9yZSA9IHByZXZpZXcuc3RvcnlTdG9yZTtcblxuICBpZiAoZ2xvYmFsV2luZG93KSB7XG4gICAgZ2xvYmFsV2luZG93Ll9fU1RPUllCT09LX0NMSUVOVF9BUElfXyA9IGNsaWVudEFwaTtcbiAgICBnbG9iYWxXaW5kb3cuX19TVE9SWUJPT0tfQURET05TX0NIQU5ORUxfXyA9IGNoYW5uZWw7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuXG4gICAgZ2xvYmFsV2luZG93Ll9fU1RPUllCT09LX1BSRVZJRVdfXyA9IHByZXZpZXc7XG4gICAgZ2xvYmFsV2luZG93Ll9fU1RPUllCT09LX1NUT1JZX1NUT1JFX18gPSBwcmV2aWV3LnN0b3J5U3RvcmU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZvcmNlUmVSZW5kZXI6IGZ1bmN0aW9uIGZvcmNlUmVSZW5kZXIoKSB7XG4gICAgICByZXR1cm4gY2hhbm5lbC5lbWl0KEV2ZW50cy5GT1JDRV9SRV9SRU5ERVIpO1xuICAgIH0sXG4gICAgZ2V0U3Rvcnlib29rOiBmdW5jdGlvbiBnZXRTdG9yeWJvb2soKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfSxcbiAgICByYXc6IGZ1bmN0aW9uIHJhdygpIHt9LFxuICAgIGNsaWVudEFwaTogY2xpZW50QXBpLFxuICAgIC8vIFRoaXMgZ2V0cyBjYWxsZWQgZWFjaCB0aW1lIHRoZSB1c2VyIGNhbGxzIGNvbmZpZ3VyZSAoaS5lLiBvbmNlIHBlciBITVIpXG4gICAgLy8gVGhlIGZpcnN0IHRpbWUsIGl0IGNvbnN0cnVjdHMgdGhlIHByZXZpZXcsIHN1YnNlcXVlbnRseSBpdCB1cGRhdGVzIGl0XG4gICAgY29uZmlndXJlOiBmdW5jdGlvbiBjb25maWd1cmUoZnJhbWV3b3JrLCBsb2FkYWJsZSwgbSkge1xuICAgICAgdmFyIHNob3dEZXByZWNhdGlvbldhcm5pbmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHRydWU7XG5cbiAgICAgIGlmIChzaG93RGVwcmVjYXRpb25XYXJuaW5nKSB7XG4gICAgICAgIGNvbmZpZ3VyZURlcHJlY2F0aW9uV2FybmluZygpO1xuICAgICAgfVxuXG4gICAgICBjbGllbnRBcGkuYWRkUGFyYW1ldGVycyh7XG4gICAgICAgIGZyYW1ld29yazogZnJhbWV3b3JrXG4gICAgICB9KTsgLy8gV2UgbmVlZCB0byBydW4gdGhlIGBleGVjdXRlTG9hZGFibGVGb3JDaGFuZ2VzYCBmdW5jdGlvbiAqaW5zaWRlKiB0aGUgYGdldFByb2plY3RBbm5vdGF0aW9uc1xuICAgICAgLy8gZnVuY3Rpb24gaW4gY2FzZSBpdCB0aHJvd3MuIFNvIHdlIGFsc28gbmVlZCB0byBwcm9jZXNzIGl0cyBvdXRwdXQgdGhlcmUgYWxzb1xuXG4gICAgICB2YXIgZ2V0UHJvamVjdEFubm90YXRpb25zID0gZnVuY3Rpb24gZ2V0UHJvamVjdEFubm90YXRpb25zKCkge1xuICAgICAgICB2YXIgX2V4ZWN1dGVMb2FkYWJsZUZvckNoID0gZXhlY3V0ZUxvYWRhYmxlRm9yQ2hhbmdlcyhsb2FkYWJsZSwgbSksXG4gICAgICAgICAgICBhZGRlZCA9IF9leGVjdXRlTG9hZGFibGVGb3JDaC5hZGRlZCxcbiAgICAgICAgICAgIHJlbW92ZWQgPSBfZXhlY3V0ZUxvYWRhYmxlRm9yQ2gucmVtb3ZlZDtcblxuICAgICAgICBBcnJheS5mcm9tKGFkZGVkLmVudHJpZXMoKSkuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICB2YXIgX3JlZjMgPSBfc2xpY2VkVG9BcnJheShfcmVmMiwgMiksXG4gICAgICAgICAgICAgIGZpbGVOYW1lID0gX3JlZjNbMF0sXG4gICAgICAgICAgICAgIGZpbGVFeHBvcnRzID0gX3JlZjNbMV07XG5cbiAgICAgICAgICByZXR1cm4gY2xpZW50QXBpLmZhY2FkZS5hZGRTdG9yaWVzRnJvbUV4cG9ydHMoZmlsZU5hbWUsIGZpbGVFeHBvcnRzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIEFycmF5LmZyb20ocmVtb3ZlZC5lbnRyaWVzKCkpLmZvckVhY2goZnVuY3Rpb24gKF9yZWY0KSB7XG4gICAgICAgICAgdmFyIF9yZWY1ID0gX3NsaWNlZFRvQXJyYXkoX3JlZjQsIDEpLFxuICAgICAgICAgICAgICBmaWxlTmFtZSA9IF9yZWY1WzBdO1xuXG4gICAgICAgICAgcmV0dXJuIGNsaWVudEFwaS5mYWNhZGUuY2xlYXJGaWxlbmFtZUV4cG9ydHMoZmlsZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIHJlbmRlcjogcmVuZGVyXG4gICAgICAgIH0sIGNsaWVudEFwaS5mYWNhZGUucHJvamVjdEFubm90YXRpb25zLCB7XG4gICAgICAgICAgcmVuZGVyVG9ET006IHJlbmRlclRvRE9NLFxuICAgICAgICAgIGFwcGx5RGVjb3JhdG9yczogZGVjb3JhdGVTdG9yeVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGlmICghaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgcHJldmlldy5pbml0aWFsaXplKHtcbiAgICAgICAgICBnZXRTdG9yeUluZGV4OiBmdW5jdGlvbiBnZXRTdG9yeUluZGV4KCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaWVudEFwaS5nZXRTdG9yeUluZGV4KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbXBvcnRGbjogaW1wb3J0Rm4sXG4gICAgICAgICAgZ2V0UHJvamVjdEFubm90YXRpb25zOiBnZXRQcm9qZWN0QW5ub3RhdGlvbnNcbiAgICAgICAgfSk7XG4gICAgICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRPRE8gLS0gd2h5IGRvbid0IHdlIGNhcmUgYWJvdXQgdGhlIG5ldyBhbm5vdGF0aW9ucz9cbiAgICAgICAgZ2V0UHJvamVjdEFubm90YXRpb25zKCk7XG4gICAgICAgIG9uU3Rvcmllc0NoYW5nZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59IiwiaW1wb3J0IGdsb2JhbCBmcm9tICdnbG9iYWwnO1xudmFyIGdsb2JhbFdpbmRvdyA9IGdsb2JhbC53aW5kb3c7XG5nbG9iYWxXaW5kb3cuU1RPUllCT09LX1JFQUNUX0NMQVNTRVMgPSB7fTtcbmdsb2JhbFdpbmRvdy5TVE9SWUJPT0tfRU5WID0gJ3Z1ZTMnOyIsImltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanNcIjtcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSAnQHN0b3J5Ym9vay9jb3JlJztcbmltcG9ydCAnLi9nbG9iYWxzJztcbmltcG9ydCB7IGRlY29yYXRlU3RvcnkgfSBmcm9tICcuL2RlY29yYXRlU3RvcnknO1xuaW1wb3J0IHsgcmVuZGVyLCByZW5kZXJUb0RPTSwgc3Rvcnlib29rQXBwIH0gZnJvbSAnLi9yZW5kZXInO1xudmFyIGZyYW1ld29yayA9ICd2dWUzJztcbnZhciBhcGkgPSBzdGFydChyZW5kZXJUb0RPTSwge1xuICBkZWNvcmF0ZVN0b3J5OiBkZWNvcmF0ZVN0b3J5LFxuICByZW5kZXI6IHJlbmRlclxufSk7XG5leHBvcnQgdmFyIHN0b3JpZXNPZiA9IGZ1bmN0aW9uIHN0b3JpZXNPZihraW5kLCBtKSB7XG4gIHJldHVybiBhcGkuY2xpZW50QXBpLnN0b3JpZXNPZihraW5kLCBtKS5hZGRQYXJhbWV0ZXJzKHtcbiAgICBmcmFtZXdvcms6IGZyYW1ld29ya1xuICB9KTtcbn07XG5leHBvcnQgdmFyIGNvbmZpZ3VyZSA9IGZ1bmN0aW9uIGNvbmZpZ3VyZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBhcGkuY29uZmlndXJlLmFwcGx5KGFwaSwgW2ZyYW1ld29ya10uY29uY2F0KGFyZ3MpKTtcbn07XG52YXIgYWRkRGVjb3JhdG9yID0gYXBpLmNsaWVudEFwaS5hZGREZWNvcmF0b3I7XG5leHBvcnQgeyBhZGREZWNvcmF0b3IgfTtcbnZhciBhZGRQYXJhbWV0ZXJzID0gYXBpLmNsaWVudEFwaS5hZGRQYXJhbWV0ZXJzO1xuZXhwb3J0IHsgYWRkUGFyYW1ldGVycyB9O1xudmFyIGNsZWFyRGVjb3JhdG9ycyA9IGFwaS5jbGllbnRBcGkuY2xlYXJEZWNvcmF0b3JzO1xuZXhwb3J0IHsgY2xlYXJEZWNvcmF0b3JzIH07XG52YXIgc2V0QWRkb24gPSBhcGkuY2xpZW50QXBpLnNldEFkZG9uO1xuZXhwb3J0IHsgc2V0QWRkb24gfTtcbnZhciBmb3JjZVJlUmVuZGVyID0gYXBpLmZvcmNlUmVSZW5kZXI7XG5leHBvcnQgeyBmb3JjZVJlUmVuZGVyIH07XG52YXIgZ2V0U3Rvcnlib29rID0gYXBpLmNsaWVudEFwaS5nZXRTdG9yeWJvb2s7XG5leHBvcnQgeyBnZXRTdG9yeWJvb2sgfTtcbnZhciByYXcgPSBhcGkuY2xpZW50QXBpLnJhdztcbmV4cG9ydCB7IHJhdyB9O1xuZXhwb3J0IHZhciBhcHAgPSBzdG9yeWJvb2tBcHA7XG5leHBvcnQgeyBhY3RpdmVTdG9yeUNvbXBvbmVudCB9IGZyb20gJy4vcmVuZGVyJzsiLCJleHBvcnQgeyBzdG9yaWVzT2YsIHNldEFkZG9uLCBhZGREZWNvcmF0b3IsIGFkZFBhcmFtZXRlcnMsIGNvbmZpZ3VyZSwgZ2V0U3Rvcnlib29rLCBmb3JjZVJlUmVuZGVyLCByYXcsIGFwcCwgYWN0aXZlU3RvcnlDb21wb25lbnQgfSBmcm9tICcuL3ByZXZpZXcnO1xuZXhwb3J0ICogZnJvbSAnLi9wcmV2aWV3L3R5cGVzLTYtMCc7XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmhvdCAmJiBtb2R1bGUuaG90LmRlY2xpbmUpIHtcbiAgbW9kdWxlLmhvdC5kZWNsaW5lKCk7XG59Il0sIm5hbWVzIjpbIl9zbGljZWRUb0FycmF5IiwiYXJyIiwiaSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJvIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJuIiwibGVuIiwiYXJyMiIsIl9pIiwiX2FyciIsIl9uIiwiX2QiLCJfcyIsIl9lIiwiZXJyIiwiZXhlY3V0ZUxvYWRhYmxlIiwibG9hZGFibGUiLCJyZXFzIiwiZXhwb3J0c01hcCIsInJlcSIsImZpbGVuYW1lIiwiZmlsZUV4cG9ydHMiLCJlcnJvciIsImVycm9yU3RyaW5nIiwibG9nZ2VyIiwiZXhwb3J0ZWQiLCJvYmoiLCJpbmRleCIsImV4ZWN1dGVMb2FkYWJsZUZvckNoYW5nZXMiLCJtIiwiX20kaG90IiwiX20kaG90JGRhdGEiLCJfbSRob3QyIiwibGFzdEV4cG9ydHNNYXAiLCJkYXRhIiwiYWRkZWQiLCJfcmVmIiwiX3JlZjIiLCJfcmVmMyIsIl9yZWY0IiwiZmlsZU5hbWUiLCJfcmVmNSIsIl9yZWY2IiwicmVtb3ZlZCIsImdsb2JhbFdpbmRvdyIsImdsb2JhbCIsIkZFQVRVUkVTIiwiY29uZmlndXJlRGVwcmVjYXRpb25XYXJuaW5nIiwiZGVwcmVjYXRlIiwicmVtb3ZlZEFwaSIsIm5hbWUiLCJzdGFydCIsInJlbmRlclRvRE9NIiwiZGVjb3JhdGVTdG9yeSIsInJlbmRlciIsImNoYW5uZWwiLCJjcmVhdGVDaGFubmVsIiwiYWRkb25zIiwiY2xpZW50QXBpIiwiQ2xpZW50QXBpIiwicHJldmlldyIsIlByZXZpZXdXZWIiLCJpbml0aWFsaXplZCIsImltcG9ydEZuIiwicGF0aCIsIm9uU3Rvcmllc0NoYW5nZWQiLCJzdG9yeUluZGV4IiwiRXZlbnRzIiwiZnJhbWV3b3JrIiwic2hvd0RlcHJlY2F0aW9uV2FybmluZyIsImdldFByb2plY3RBbm5vdGF0aW9ucyIsIl9leGVjdXRlTG9hZGFibGVGb3JDaCIsImFwaSIsImFwcCIsInN0b3J5Ym9va0FwcCJdLCJtYXBwaW5ncyI6IitKQUFBLFNBQVNBLEVBQWVDLEVBQUtDLEVBQUcsQ0FBRSxPQUFPQyxFQUFnQkYsQ0FBRyxHQUFLRyxFQUFzQkgsRUFBS0MsQ0FBQyxHQUFLRyxFQUE0QkosRUFBS0MsQ0FBQyxHQUFLSSxFQUFnQixDQUFLLENBRTlKLFNBQVNBLEdBQW1CLENBQUUsTUFBTSxJQUFJLFVBQVU7QUFBQSxtRkFBMkksQ0FBSSxDQUVqTSxT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
