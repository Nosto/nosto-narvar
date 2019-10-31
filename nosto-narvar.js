/**
 * Initialise Nosto
 */
(function(){var name="nostojs";window[name]=window[name]||function(cb){(window[name].q=window[name].q||[]).push(cb);};})();


nostojs(api => api.setAutoLoad(false));

/**
 * Generates a SHA-256 checksum for the given string. The
 * WebCrypto built-in is only available on modern browsers.
 *
 * @param message {String} the string to be hashed
 * @returns {Promise<string>} a promise with the resultant hash
 */
async function digestSHA256(message) {
    // encode as (utf-8) Uint8Array
    const msgUint8 = new TextEncoder().encode(message);
    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    // convert buffer to byte array
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    // convert bytes to hex string
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Returns the specified query params from the URL.
 * Note: The URLSearchParams is only available on modern broswers
 * and must be poly-filled for legacy browser compat.
 *
 * @param keys The list URL params to extract
 * @returns {string[]} The list of extracted URL params
 */
function getQueryParams(...keys) {
    const urlParams = new URLSearchParams(window.location.search);
    return keys.map(key => urlParams.get(key))
}

/**
 * Injects the customer-reference into the DOM. This is a
 * workaround since there is no JS API method exposed by Nosto
 * for this
 *
 * @param value {String} the customer-reference to be exposed
 */
function appendNostoCustomerTagging(value) {
    const customerTagging = document.createElement('div');
    customerTagging.className = "nosto_customer";
    customerTagging.style = "display:none";

    const newNode = document.createElement('span');
    newNode.className = "customer_reference";
    newNode.innerHTML = value;
    customerTagging.appendChild(newNode);
    document.body.appendChild(customerTagging);
}

/**
 * Parse the parameters, hash it, build the reference and reload recommendations
 */
const data = getQueryParams('id', 'domain');
digestSHA256(data.join(''))
    .then(text => {
        appendNostoCustomerTagging(text);
        nostojs(api => api.loadRecommendations()
        );
    });