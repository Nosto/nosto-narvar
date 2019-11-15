import {getQueryParams} from './helpers.js';

/**
 * Loads script
 *
 * @param url {String} the url of the JS source
 * @param type {String} type of script
 * @param async {boolean}
 */
function loadScript(url, type, async){

    var script = document.createElement("script");
    script.type = type;
    script.setAttribute('async', async);
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

const nostoMerchantId = getQueryParams('nosto-merchant-id')[0];
if (nostoMerchantId !== null) {
    // Load nosto-narvar.js script
    loadScript("https://cdn.jsdelivr.net/gh/Nosto/nosto-narvar/nosto-narvar.js", "module", false);

    // Load nosto main script
    let connectNostoUrl = `https://connect.nosto.com/include/${nostoMerchantId}`;
    loadScript(connectNostoUrl, "text/javascript", true);
}