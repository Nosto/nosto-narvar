import getQueryParams from './helpers.js';

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
if (!data.some(el => el === null)) {
    digestSHA256(data.join(''))
        .then(text => {
            appendNostoCustomerTagging(text);
            nostojs(api => api.loadRecommendations()
            );
        });
}