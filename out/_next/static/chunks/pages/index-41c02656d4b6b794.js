(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8e3:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},9470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},2717:function(e,t,n){"use strict";var r=n(930);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=p,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(o=n(1585))&&o.__esModule?o:{default:o},s=n(8e3),u=n(5850),d=n(9470);n(9475);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce(f,[]).reverse().concat(p(t.inAmpMode).reverse()).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,u=h.length;s<u;s++){var d=h[s];if(a.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?o=!1:n.add(d);else{var l=a.props[d],p=r[d]||new Set;"name"===d&&i||!p.has(l)?(p.add(l),r[d]=p):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:o})}))}var _=function(e){var t=e.children,n=i.useContext(s.AmpStateContext),r=i.useContext(u.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:m,headManager:r,inAmpMode:d.isInAmpMode(n)},t)};t.default=_,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.headManager,n=e.reduceComponentsToState;function a(){if(t&&t.mountedInstances){var a=r.Children.toArray(t.mountedInstances).filter(Boolean);t.updateHead(n(a,e))}}if(o){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),a()}return i((function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),i((function(){return t&&(t._pendingUpdate=a),function(){t&&(t._pendingUpdate=a)}})),c((function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}})),null};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294));function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}var o=!1,i=o?function(){}:r.useLayoutEffect,c=o?function(){}:r.useEffect},3639:function(e,t,n){"use strict";n.r(t);var r=n(9008),a=n.n(r),o=n(6134),i=n.n(o),c=n(5893);t.default=function(){return(0,c.jsxs)("div",{className:i().container,children:[(0,c.jsxs)(a(),{children:[(0,c.jsx)("title",{children:"Create Next App"}),(0,c.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,c.jsxs)("main",{className:i().main,children:[(0,c.jsxs)("h1",{className:i().title,children:["Welcome to ",(0,c.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,c.jsxs)("p",{className:i().description,children:["Get started by editing"," ",(0,c.jsx)("code",{className:i().code,children:"pages/index.tsx"})]}),(0,c.jsxs)("div",{className:i().grid,children:[(0,c.jsxs)("a",{href:"https://nextjs.org/docs",className:i().card,children:[(0,c.jsx)("h2",{children:"Documentation \u2192"}),(0,c.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,c.jsxs)("a",{href:"https://nextjs.org/learn",className:i().card,children:[(0,c.jsx)("h2",{children:"Learn \u2192"}),(0,c.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,c.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:i().card,children:[(0,c.jsx)("h2",{children:"Examples \u2192"}),(0,c.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,c.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:i().card,children:[(0,c.jsx)("h2",{children:"Deploy \u2192"}),(0,c.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,c.jsx)("footer",{className:i().footer,children:(0,c.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,c.jsx)("span",{className:i().logo,children:(0,c.jsx)("img",{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3639)}])},6134:function(e){e.exports={container:"Home_container__Ennsq",main:"Home_main__EtNt2",footer:"Home_footer__7dKhS",title:"Home_title__FX7xZ",description:"Home_description__Qwq1f",code:"Home_code__aGV0U",grid:"Home_grid__c_g6N",card:"Home_card__7oz7W",logo:"Home_logo__80mSr"}},9008:function(e,t,n){e.exports=n(2717)}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);