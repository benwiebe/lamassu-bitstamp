const ticker = require('./lib/ticker')
const trader = require('./lib/trader')

const SUPPORTED_MODULES = ['ticker', 'trader']
const NAME = 'Gemini'

exports.purchase = trader.purchase
exports.sell = trader.sell

exports.balance = require('./lib/common').balance

module.exports = {
  NAME,
  SUPPORTED_MODULES,
  purchase: trader.purchase,
  sell: trader.sell,
  buy: trader.buy,
  ticker: ticker.ticker
}
