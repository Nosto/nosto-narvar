/**
 * Returns the specified query params from the URL.
 * Note: The URLSearchParams is only available on modern broswers
 * and must be poly-filled for legacy browser compat.
 *
 * @param keys The list URL params to extract
 * @returns {string[]} The list of extracted URL params
 */
function getQueryParams(...keys) {
  const urlParams = new URLSearchParams(window.location.search)
  return keys.map(key => urlParams.get(key))
}

/**
 * Loads script
 *
 * @param url {String} the url of the JS source
 * @param type {String} type of script
 * @param async {boolean}
 */
function loadScript(url, type, async) {
  const script = document.createElement('script')
  script.type = type
  script.setAttribute('async', async)
  script.src = url
  document.getElementsByTagName('head')[0].appendChild(script)
}

export { loadScript, getQueryParams }
