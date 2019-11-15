/**
 * Returns the specified query params from the URL.
 * Note: The URLSearchParams is only available on modern broswers
 * and must be poly-filled for legacy browser compat.
 *
 * @param keys The list URL params to extract
 * @returns {string[]} The list of extracted URL params
 */
export function getQueryParams(...keys) {
    const urlParams = new URLSearchParams(window.location.search);
    return keys.map(key => urlParams.get(key))
}


