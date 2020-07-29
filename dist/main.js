(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";function getQueryParams(){for(var e=new URLSearchParams(window.location.search),t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return r.map(function(t){return e.get(t)})}function loadScript(e,t,r){var a=document.createElement("script");a.type=t,a.setAttribute("async",r),a.src=e,document.getElementsByTagName("head")[0].appendChild(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.loadScript=loadScript,exports.getQueryParams=getQueryParams;

},{}],2:[function(require,module,exports){
"use strict";var _nostoNarvar=require("./nosto-narvar"),_nostoNarvar2=_interopRequireDefault(_nostoNarvar),_nostoScriptLoader=require("./nosto-script-loader"),_nostoScriptLoader2=_interopRequireDefault(_nostoScriptLoader);function _interopRequireDefault(r){return r&&r.__esModule?r:{default:r}}(0,_nostoNarvar2.default)(),(0,_nostoScriptLoader2.default)();

},{"./nosto-narvar":3,"./nosto-script-loader":4}],3:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=appendNostoCustomerTag;var _helpers=require("./helpers");async function digestSHA256(e){var n=(new TextEncoder).encode(e),o=await crypto.subtle.digest("SHA-256",n);return Array.from(new Uint8Array(o)).map(function(e){return e.toString(16).padStart(2,"0")}).join("")}function appendNostoCustomerTagging(e){var n=document.createElement("div");n.className="nosto_customer",n.style="display:none";var o=document.createElement("span");o.className="customer_reference",o.innerHTML=e,n.appendChild(o),document.body.appendChild(n)}function appendNostoCustomerTag(){var e=(0,_helpers.getQueryParams)("id","domain");e.some(function(e){return null===e})?console.warn("Nosto: Id or domain param is missing."):digestSHA256(e.join("")).then(function(e){appendNostoCustomerTagging(e)}),nostojs(function(e){return e.loadRecommendations()})}!function(){var e="nostojs";window[e]=window[e]||function(n){(window[e].q=window[e].q||[]).push(n)}}(),nostojs(function(e){return e.setAutoLoad(!1)});

},{"./helpers":1}],4:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=appendNostoScript;var _helpers=require("./helpers");function appendNostoScript(){var e=(0,_helpers.getQueryParams)("nosto-merchant-id")[0];if(null!==e){var t="https://connect.nosto.com/include/"+e;(0,_helpers.loadScript)(t,"text/javascript",!0)}else console.warn("Nosto: merchant id is not present. Cannot add the nosto main script")}

},{"./helpers":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaGVscGVycy5qcyIsInNyYy9tYWluLmpzIiwic3JjL25vc3RvLW5hcnZhci5qcyIsInNyYy9ub3N0by1zY3JpcHQtbG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO2Z1bmN0aW9uIGdldFF1ZXJ5UGFyYW1zKCl7Zm9yKHZhciBlPW5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCksdD1hcmd1bWVudHMubGVuZ3RoLHI9QXJyYXkodCksYT0wO2E8dDthKyspclthXT1hcmd1bWVudHNbYV07cmV0dXJuIHIubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBlLmdldCh0KX0pfWZ1bmN0aW9uIGxvYWRTY3JpcHQoZSx0LHIpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7YS50eXBlPXQsYS5zZXRBdHRyaWJ1dGUoXCJhc3luY1wiLHIpLGEuc3JjPWUsZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKGEpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMubG9hZFNjcmlwdD1sb2FkU2NyaXB0LGV4cG9ydHMuZ2V0UXVlcnlQYXJhbXM9Z2V0UXVlcnlQYXJhbXM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1obGJIQmxjbk11YW5NaVhTd2libUZ0WlhNaU9sc2laMlYwVVhWbGNubFFZWEpoYlhNaUxDSjFjbXhRWVhKaGJYTWlMQ0pWVWt4VFpXRnlZMmhRWVhKaGJYTWlMQ0ozYVc1a2IzY2lMQ0pzYjJOaGRHbHZiaUlzSW5ObFlYSmphQ0lzSWw5c1pXNGlMQ0poY21kMWJXVnVkSE1pTENKc1pXNW5kR2dpTENKclpYbHpJaXdpUVhKeVlYa2lMQ0pmYTJWNUlpd2liV0Z3SWl3aWEyVjVJaXdpWjJWMElpd2liRzloWkZOamNtbHdkQ0lzSW5WeWJDSXNJblI1Y0dVaUxDSmhjM2x1WXlJc0luTmpjbWx3ZENJc0ltUnZZM1Z0Wlc1MElpd2lZM0psWVhSbFJXeGxiV1Z1ZENJc0luTmxkRUYwZEhKcFluVjBaU0lzSW5OeVl5SXNJbWRsZEVWc1pXMWxiblJ6UW5sVVlXZE9ZVzFsSWl3aVlYQndaVzVrUTJocGJHUWlMQ0pQWW1wbFkzUWlMQ0prWldacGJtVlFjbTl3WlhKMGVTSXNJbVY0Y0c5eWRITWlMQ0oyWVd4MVpTSmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNZVUZoUVN4VFFVRlRRU3hwUWtGSFVDeEpRVVpCTEVsQlFVbERMRVZCUVZrc1NVRkJTVU1zWjBKQlFXZENReXhQUVVGUFF5eFRRVUZUUXl4UlFVVXpRME1zUlVGQlQwTXNWVUZCVlVNc1QwRkJVVU1zUlVGQlQwTXNUVUZCVFVvc1IwRkJUMHNzUlVGQlR5eEZRVUZIUVN4RlFVRlBUQ3hGUVVGTlN5eEpRVU16UlVZc1JVRkJTMFVzUjBGQlVVb3NWVUZCVlVrc1IwRkhla0lzVDBGQlQwWXNSVUZCUzBjc1NVRkJTU3hUUVVGVlF5eEhRVU40UWl4UFFVRlBXaXhGUVVGVllTeEpRVUZKUkN4TFFWZDZRaXhUUVVGVFJTeFhRVUZYUXl4RlFVRkxReXhGUVVGTlF5eEhRVU0zUWl4SlFVRkpReXhGUVVGVFF5eFRRVUZUUXl4alFVRmpMRlZCUTNCRFJpeEZRVUZQUml4TFFVRlBRU3hGUVVOa1JTeEZRVUZQUnl4aFFVRmhMRkZCUVZOS0xFZEJRemRDUXl4RlFVRlBTU3hKUVVGTlVDeEZRVU5pU1N4VFFVRlRTU3h4UWtGQmNVSXNVVUZCVVN4SFFVRkhReXhaUVVGWlRpeEhRVzVEZGtSUExFOUJRVTlETEdWQlFXVkRMRkZCUVZNc1lVRkJZeXhEUVVNelEwTXNUMEZCVHl4SlFYRkRWRVFzVVVGQlVXSXNWMEZCWVVFc1YwRkRja0poTEZGQlFWRTFRaXhsUVVGcFFrRWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9ub3N0b05hcnZhcj1yZXF1aXJlKFwiLi9ub3N0by1uYXJ2YXJcIiksX25vc3RvTmFydmFyMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ub3N0b05hcnZhciksX25vc3RvU2NyaXB0TG9hZGVyPXJlcXVpcmUoXCIuL25vc3RvLXNjcmlwdC1sb2FkZXJcIiksX25vc3RvU2NyaXB0TG9hZGVyMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ub3N0b1NjcmlwdExvYWRlcik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyKXtyZXR1cm4gciYmci5fX2VzTW9kdWxlP3I6e2RlZmF1bHQ6cn19KDAsX25vc3RvTmFydmFyMi5kZWZhdWx0KSgpLCgwLF9ub3N0b1NjcmlwdExvYWRlcjIuZGVmYXVsdCkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTFoYVc0dWFuTWlYU3dpYm1GdFpYTWlPbHNpWDI1dmMzUnZUbUZ5ZG1GeUlpd2ljbVZ4ZFdseVpTSXNJbDl1YjNOMGIwNWhjblpoY2pJaUxDSmZhVzUwWlhKdmNGSmxjWFZwY21WRVpXWmhkV3gwSWl3aVgyNXZjM1J2VTJOeWFYQjBURzloWkdWeUlpd2lYMjV2YzNSdlUyTnlhWEIwVEc5aFpHVnlNaUlzSW05aWFpSXNJbDlmWlhOTmIyUjFiR1VpTENKa1pXWmhkV3gwSWwwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4aFFVVkJMRWxCUVVsQkxHRkJRV1ZETEZGQlFWRXNhMEpCUlhaQ1F5eGpRVUZuUWtNc2RVSkJRWFZDU0N4alFVVjJRMGtzYlVKQlFYRkNTQ3hSUVVGUkxIbENRVVUzUWtrc2IwSkJRWE5DUml4MVFrRkJkVUpETEc5Q1FVVnFSQ3hUUVVGVFJDeDFRa0ZCZFVKSExFZEJRVThzVDBGQlQwRXNSMEZCVDBFc1JVRkJTVU1zVjBGQllVUXNSVUZCVFN4RFFVRkZSU3hSUVVGVFJpeEpRVVYyUml4RlFVRkpTaXhqUVVGalRTeFpRVU5zUWl4RlFVRkpTQ3h2UWtGQmIwSkhJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5kZWZhdWx0PWFwcGVuZE5vc3RvQ3VzdG9tZXJUYWc7dmFyIF9oZWxwZXJzPXJlcXVpcmUoXCIuL2hlbHBlcnNcIik7YXN5bmMgZnVuY3Rpb24gZGlnZXN0U0hBMjU2KGUpe3ZhciBuPShuZXcgVGV4dEVuY29kZXIpLmVuY29kZShlKSxvPWF3YWl0IGNyeXB0by5zdWJ0bGUuZGlnZXN0KFwiU0hBLTI1NlwiLG4pO3JldHVybiBBcnJheS5mcm9tKG5ldyBVaW50OEFycmF5KG8pKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGUudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsXCIwXCIpfSkuam9pbihcIlwiKX1mdW5jdGlvbiBhcHBlbmROb3N0b0N1c3RvbWVyVGFnZ2luZyhlKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO24uY2xhc3NOYW1lPVwibm9zdG9fY3VzdG9tZXJcIixuLnN0eWxlPVwiZGlzcGxheTpub25lXCI7dmFyIG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7by5jbGFzc05hbWU9XCJjdXN0b21lcl9yZWZlcmVuY2VcIixvLmlubmVySFRNTD1lLG4uYXBwZW5kQ2hpbGQobyksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuKX1mdW5jdGlvbiBhcHBlbmROb3N0b0N1c3RvbWVyVGFnKCl7dmFyIGU9KDAsX2hlbHBlcnMuZ2V0UXVlcnlQYXJhbXMpKFwiaWRcIixcImRvbWFpblwiKTtlLnNvbWUoZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PT1lfSk/Y29uc29sZS53YXJuKFwiTm9zdG86IElkIG9yIGRvbWFpbiBwYXJhbSBpcyBtaXNzaW5nLlwiKTpkaWdlc3RTSEEyNTYoZS5qb2luKFwiXCIpKS50aGVuKGZ1bmN0aW9uKGUpe2FwcGVuZE5vc3RvQ3VzdG9tZXJUYWdnaW5nKGUpfSksbm9zdG9qcyhmdW5jdGlvbihlKXtyZXR1cm4gZS5sb2FkUmVjb21tZW5kYXRpb25zKCl9KX0hZnVuY3Rpb24oKXt2YXIgZT1cIm5vc3RvanNcIjt3aW5kb3dbZV09d2luZG93W2VdfHxmdW5jdGlvbihuKXsod2luZG93W2VdLnE9d2luZG93W2VdLnF8fFtdKS5wdXNoKG4pfX0oKSxub3N0b2pzKGZ1bmN0aW9uKGUpe3JldHVybiBlLnNldEF1dG9Mb2FkKCExKX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZjM1J2TFc1aGNuWmhjaTVxY3lKZExDSnVZVzFsY3lJNld5SlBZbXBsWTNRaUxDSmtaV1pwYm1WUWNtOXdaWEowZVNJc0ltVjRjRzl5ZEhNaUxDSjJZV3gxWlNJc0ltUmxabUYxYkhRaUxDSmhjSEJsYm1ST2IzTjBiME4xYzNSdmJXVnlWR0ZuSWl3aVgyaGxiSEJsY25NaUxDSnlaWEYxYVhKbElpd2lZWE41Ym1NaUxDSmthV2RsYzNSVFNFRXlOVFlpTENKdFpYTnpZV2RsSWl3aWJYTm5WV2x1ZERnaUxDSlVaWGgwUlc1amIyUmxjaUlzSW1WdVkyOWtaU0lzSW1oaGMyaENkV1ptWlhJaUxDSmpjbmx3ZEc4aUxDSnpkV0owYkdVaUxDSmthV2RsYzNRaUxDSkJjbkpoZVNJc0ltWnliMjBpTENKVmFXNTBPRUZ5Y21GNUlpd2liV0Z3SWl3aVlpSXNJblJ2VTNSeWFXNW5JaXdpY0dGa1UzUmhjblFpTENKcWIybHVJaXdpWVhCd1pXNWtUbTl6ZEc5RGRYTjBiMjFsY2xSaFoyZHBibWNpTENKamRYTjBiMjFsY2xSaFoyZHBibWNpTENKa2IyTjFiV1Z1ZENJc0ltTnlaV0YwWlVWc1pXMWxiblFpTENKamJHRnpjMDVoYldVaUxDSnpkSGxzWlNJc0ltNWxkMDV2WkdVaUxDSnBibTVsY2toVVRVd2lMQ0poY0hCbGJtUkRhR2xzWkNJc0ltSnZaSGtpTENKa1lYUmhJaXdpWjJWMFVYVmxjbmxRWVhKaGJYTWlMQ0p6YjIxbElpd2laV3dpTENKamIyNXpiMnhsSWl3aWQyRnliaUlzSW5Sb1pXNGlMQ0owWlhoMElpd2libTl6ZEc5cWN5SXNJbUZ3YVNJc0lteHZZV1JTWldOdmJXMWxibVJoZEdsdmJuTWlMQ0p1WVcxbElpd2lkMmx1Wkc5M0lpd2lZMklpTENKeElpd2ljSFZ6YUNJc0luTmxkRUYxZEc5TWIyRmtJbDBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hoUVVWQlFTeFBRVUZQUXl4bFFVRmxReXhSUVVGVExHRkJRV01zUTBGRE0wTkRMRTlCUVU4c1NVRkZWRVFzVVVGQlVVVXNVVUZCVlVNc2RVSkJSV3hDTEVsQlFVbERMRk5CUVZkRExGRkJRVkVzWVVGdlFuWkNReXhsUVVGbFF5eGhRVUZoUXl4SFFVVXhRaXhKUVVGSlF5eEhRVUZYTEVsQlFVbERMR0ZCUVdORExFOUJRVTlJTEVkQlJYQkRTU3hSUVVGdFFrTXNUMEZCVDBNc1QwRkJUME1zVDBGQlR5eFZRVUZYVGl4SFFVbDJSQ3hQUVVablFrOHNUVUZCVFVNc1MwRkJTeXhKUVVGSlF5eFhRVUZYVGl4SlFVVjZRazhzU1VGQlNTeFRRVUZWUXl4SFFVTTNRaXhQUVVGUFFTeEZRVUZGUXl4VFFVRlRMRWxCUVVsRExGTkJRVk1zUlVGQlJ5eFBRVU5xUTBNc1MwRkJTeXhKUVZWV0xGTkJRVk5ETERKQ1FVRXlRblpDTEVkQlEyeERMRWxCUVVsM1FpeEZRVUZyUWtNc1UwRkJVME1zWTBGQll5eFBRVU0zUTBZc1JVRkJaMEpITEZWQlFWa3NhVUpCUXpWQ1NDeEZRVUZuUWtrc1RVRkJVU3hsUVVWNFFpeEpRVUZKUXl4RlFVRlZTaXhUUVVGVFF5eGpRVUZqTEZGQlEzSkRSeXhGUVVGUlJpeFZRVUZaTEhGQ1FVTndRa1VzUlVGQlVVTXNWVUZCV1RsQ0xFVkJRM0JDZDBJc1JVRkJaMEpQTEZsQlFWbEdMRWRCUXpWQ1NpeFRRVUZUVHl4TFFVRkxSQ3haUVVGWlVDeEhRVTAxUWl4VFFVRlRkRUlzZVVKQlExQXNTVUZCU1N0Q0xFZEJRVThzUlVGQlNUbENMRk5CUVZNclFpeG5Ra0ZCWjBJc1MwRkJUU3hWUVVONlEwUXNSVUZCUzBVc1MwRkJTeXhUUVVGVlF5eEhRVU4yUWl4UFFVRmpMRTlCUVZCQkxFbEJUVkJETEZGQlFWRkRMRXRCUVVzc2VVTkJTbUpvUXl4aFFVRmhNa0lzUlVGQlMxZ3NTMEZCU3l4TFFVRkxhVUlzUzBGQlN5eFRRVUZWUXl4SFFVTjZRMnBDTERKQ1FVRXlRbWxDTEV0QlN5OUNReXhSUVVGUkxGTkJRVlZETEVkQlEyaENMRTlCUVU5QkxFVkJRVWxETEhsQ1FXcEZaaXhYUVVORkxFbEJRVWxETEVWQlFVOHNWVUZEV0VNc1QwRkJUMFFzUjBGQlVVTXNUMEZCVDBRc1NVRkJVeXhUUVVGVlJTeEpRVU4wUTBRc1QwRkJUMFFzUjBGQlRVY3NSVUZCU1VZc1QwRkJUMFFzUjBGQlRVY3NSMEZCU3l4SlFVRkpReXhMUVVGTFJpeEpRVWhxUkN4SFFVOUJUQ3hSUVVGUkxGTkJRVlZETEVkQlEyaENMRTlCUVU5QkxFVkJRVWxQTEdGQlFWa2lmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5kZWZhdWx0PWFwcGVuZE5vc3RvU2NyaXB0O3ZhciBfaGVscGVycz1yZXF1aXJlKFwiLi9oZWxwZXJzXCIpO2Z1bmN0aW9uIGFwcGVuZE5vc3RvU2NyaXB0KCl7dmFyIGU9KDAsX2hlbHBlcnMuZ2V0UXVlcnlQYXJhbXMpKFwibm9zdG8tbWVyY2hhbnQtaWRcIilbMF07aWYobnVsbCE9PWUpe3ZhciB0PVwiaHR0cHM6Ly9jb25uZWN0Lm5vc3RvLmNvbS9pbmNsdWRlL1wiK2U7KDAsX2hlbHBlcnMubG9hZFNjcmlwdCkodCxcInRleHQvamF2YXNjcmlwdFwiLCEwKX1lbHNlIGNvbnNvbGUud2FybihcIk5vc3RvOiBtZXJjaGFudCBpZCBpcyBub3QgcHJlc2VudC4gQ2Fubm90IGFkZCB0aGUgbm9zdG8gbWFpbiBzY3JpcHRcIil9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dmMzUnZMWE5qY21sd2RDMXNiMkZrWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHNpVDJKcVpXTjBJaXdpWkdWbWFXNWxVSEp2Y0dWeWRIa2lMQ0psZUhCdmNuUnpJaXdpZG1Gc2RXVWlMQ0prWldaaGRXeDBJaXdpWVhCd1pXNWtUbTl6ZEc5VFkzSnBjSFFpTENKZmFHVnNjR1Z5Y3lJc0luSmxjWFZwY21VaUxDSnViM04wYjAxbGNtTm9ZVzUwU1dRaUxDSm5aWFJSZFdWeWVWQmhjbUZ0Y3lJc0ltTnZibTVsWTNST2IzTjBiMVZ5YkNJc0lteHZZV1JUWTNKcGNIUWlMQ0pqYjI1emIyeGxJaXdpZDJGeWJpSmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNZVUZGUVVFc1QwRkJUME1zWlVGQlpVTXNVVUZCVXl4aFFVRmpMRU5CUXpORFF5eFBRVUZQTEVsQlJWUkVMRkZCUVZGRkxGRkJRVlZETEd0Q1FVVnNRaXhKUVVGSlF5eFRRVUZYUXl4UlFVRlJMR0ZCUzNaQ0xGTkJRVk5HTEc5Q1FVTlFMRWxCUVVsSExFZEJRV3RDTEVWQlFVbEdMRk5CUVZOSExHZENRVUZuUWl4eFFrRkJjVUlzUjBGRGVFVXNSMEZCZDBJc1QwRkJjRUpFTEVWQlFUQkNMRU5CUlRWQ0xFbEJRVWxGTEVWQlFXdENMSEZEUVVGMVEwWXNSMEZETjBRc1JVRkJTVVlzVTBGQlUwc3NXVUZCV1VRc1JVRkJhVUlzYlVKQlFXMUNMRkZCUlRkRVJTeFJRVUZSUXl4TFFVRkxJbjA9Il19
