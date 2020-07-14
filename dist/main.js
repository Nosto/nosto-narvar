(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";function getQueryParams(){for(var e=new URLSearchParams(window.location.search),t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return r.map(function(t){return e.get(t)})}function loadScript(e,t,r){var a=document.createElement("script");a.type=t,a.setAttribute("async",r),a.src=e,document.getElementsByTagName("head")[0].appendChild(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.loadScript=loadScript,exports.getQueryParams=getQueryParams;

},{}],2:[function(require,module,exports){
"use strict";var _nostoNarvar=require("./nosto-narvar"),_nostoNarvar2=_interopRequireDefault(_nostoNarvar),_nostoScriptLoader=require("./nosto-script-loader"),_nostoScriptLoader2=_interopRequireDefault(_nostoScriptLoader);function _interopRequireDefault(r){return r&&r.__esModule?r:{default:r}}(0,_nostoNarvar2.default)(),(0,_nostoScriptLoader2.default)();

},{"./nosto-narvar":3,"./nosto-script-loader":4}],3:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=appendNostoCustomerTag;var _helpers=require("./helpers");async function digestSHA256(e){var n=(new TextEncoder).encode(e),o=await crypto.subtle.digest("SHA-256",n);return Array.from(new Uint8Array(o)).map(function(e){return e.toString(16).padStart(2,"0")}).join("")}function appendNostoCustomerTagging(e){var n=document.createElement("div");n.className="nosto_customer",n.style="display:none";var o=document.createElement("span");o.className="customer_reference",o.innerHTML=e,n.appendChild(o),document.body.appendChild(n)}function appendNostoCustomerTag(){var e=(0,_helpers.getQueryParams)("id","domain");e.some(function(e){return null===e})?console.warn("Nosto: Id or domain param is missing."):digestSHA256(e.join("")).then(function(e){appendNostoCustomerTagging(e)}),nostojs(function(e){return e.loadRecommendations()})}!function(){var e="nostojs";window[e]=window[e]||function(n){(window[e].q=window[e].q||[]).push(n)}}(),nostojs(function(e){return e.setAutoLoad(!1)});

},{"./helpers":1}],4:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=appendNostoScript;var _helpers=require("./helpers");function appendNostoScript(){var e=(0,_helpers.getQueryParams)("nosto-merchant-id")[0];if(null!==e){var t="https://connect.nosto.com/include/"+e;(0,_helpers.loadScript)(t,"text/javascript",!0)}else console.warn("Nosto: merchant id is not present. Cannot add the nosto main script")}

},{"./helpers":1}]},{},[2])
//# sourceMappingURL=main.map
