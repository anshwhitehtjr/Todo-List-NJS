(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(4869)}])},8418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);l=!0);}catch(c){i=!0,a=c}finally{try{l||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var o,l=(o=t(7294))&&o.__esModule?o:{default:o},i=t(6273),c=t(387),u=t(7190);var s={};function f(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,r=c.useRouter(),o=l.default.useMemo((function(){var n=a(i.resolveHref(r,e.href,!0),2),t=n[0],o=n[1];return{href:t,as:e.as?i.resolveHref(r,e.as):o||t}}),[r,e.href,e.as]),d=o.href,v=o.as,p=e.children,b=e.replace,h=e.shallow,y=e.scroll,m=e.locale;"string"===typeof p&&(p=l.default.createElement("a",null,p));var g=(n=l.default.Children.only(p))&&"object"===typeof n&&n.ref,j=a(u.useIntersection({rootMargin:"200px"}),2),x=j[0],w=j[1],N=l.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);l.default.useEffect((function(){var e=w&&t&&i.isLocalURL(d),n="undefined"!==typeof m?m:r&&r.locale,a=s[d+"%"+v+(n?"%"+n:"")];e&&!a&&f(r,d,v,{locale:n})}),[v,d,w,m,t,r]);var E={ref:N,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,l,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),n[a?"replace":"push"](t,r,{shallow:o,locale:c,scroll:l}))}(e,r,d,v,b,h,y,m)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(d)&&f(r,d,v,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var O="undefined"!==typeof m?m:r&&r.locale,_=r&&r.isLocaleDomain&&i.getDomainLocale(v,O,r&&r.locales,r&&r.domainLocales);E.href=_||i.addBasePath(i.addLocale(v,O,r&&r.defaultLocale))}return l.default.cloneElement(n,E)};n.default=d},7190:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);l=!0);}catch(c){i=!0,a=c}finally{try{l||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,r=o.useRef(),u=a(o.useState(!1),2),s=u[0],f=u[1],d=o.useCallback((function(e){r.current&&(r.current(),r.current=void 0),t||s||e&&e.tagName&&(r.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,l=r.elements;return l.set(e,n),o.observe(e),function(){l.delete(e),o.unobserve(e),0===l.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,s]);return o.useEffect((function(){if(!i&&!s){var e=l.requestIdleCallback((function(){return f(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=t(7294),l=t(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},4869:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(5893),a=(t(906),t(1664)),o=t(1163),l=(t(7294),function(e){var n=e.title,t=(0,o.useRouter)();return(0,r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{className:"navbar-brand",children:n})}),(0,r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{className:"navbar-toggler-icon"})}),(0,r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:(0,r.jsxs)("ul",{className:"navbar-nav",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{className:"nav-link ".concat("/"===t.pathname&&"active"),children:"Home"})})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(a.default,{href:"/about",children:(0,r.jsx)("a",{className:"nav-link ".concat("/about"===t.pathname&&"active"),children:"About"})})})]})})]})})});function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}var u=function(e){var n=e.Component,t=e.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{title:"Todo-List"}),(0,r.jsx)(n,c({},t))]})}},906:function(){},1664:function(e,n,t){e.exports=t(8418)},1163:function(e,n,t){e.exports=t(387)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(387)}));var t=e.O();_N_E=t}]);