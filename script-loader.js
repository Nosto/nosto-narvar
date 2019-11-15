import {getQueryParams} from './helpers.js';

/**
 * Loads script
 *
 * @param url {String} the url of the JS source
 * @param type {String} type of script
 * @param async {boolean}
 * @param callback {function}
 */
function loadScript(url, type, async, callback){

    var script = document.createElement("script");
    script.type = type;
    script.setAttribute('async', async);

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState === "loaded" ||
                script.readyState === "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

const nostoMerchantId = getQueryParams('nosto-merchant-id')[0];
if (nostoMerchantId !== null) {
    // Load nosto-narvar.js script
    loadScript("https://cdn.jsdelivr.net/gh/Nosto/nosto-narvar/nosto-narvar.js", "module", false, function(){});

    // Load nosto main script
    let connectNostoUrl = `https://connect.nosto.com/include/${nostoMerchantId}`;
    loadScript(connectNostoUrl, "text/javascript", true, function(){});
}