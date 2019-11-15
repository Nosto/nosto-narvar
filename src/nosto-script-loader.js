import { getQueryParams, loadScript } from './helpers'

/**
 * Append nosto script
 */
export default function appendNostoScript() {
  const nostoMerchantId = getQueryParams('nosto-merchant-id')[0]
  if (nostoMerchantId !== null) {
    // Load nosto main script
    const connectNostoUrl = `https://connect.nosto.com/include/${nostoMerchantId}`
    loadScript(connectNostoUrl, 'text/javascript', true)
  }
}
