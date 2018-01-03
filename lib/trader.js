const common = require('./common')
const ticker = require('./ticker')

const SATOSHI_SHIFT = 8

function buy (account, cryptoAtoms, fiatCode, cryptoCode) {
  return trade('buy', account, cryptoAtoms, fiatCode, cryptoCode)
}

function sell (account, cryptoAtoms, fiatCode, cryptoCode) {
  return trade('sell', account, cryptoAtoms, fiatCode, cryptoCode)
}

function handleErrors (data) {
  if (!data.reason || !data.reason.__all__) return data

  const err = new Error(data.reason.__all__[0])

  if (data.reason.__all__[0].indexOf('Minimum order size is') === 0) {
    err.name = 'orderTooSmall'
  }

  throw err
}

function trade (type, account, cryptoAtoms, fiatCode, cryptoCode) {
  try {
    const market = common.buildMarket(fiatCode, cryptoCode)

    const orderid = "lamassu-gemini " + Date.now()

    ticker.ticker(account, fiatCode, cryptoCode).then(r =>{
        const data = 
        {
          payload: {
            client_order_id: orderid,
            symbol: market,
            amount: cryptoAtoms.shift(-SATOSHI_SHIFT).toFixed(8),
            //amount: cryptoAtoms, //this line was for testing the trader using numbers as opposed to cryptoAtoms' real type
            price: type == "buy" ? r.rates.ask : r.rates.bid,
            side: type,
            type: "exchange limit"
          }
        }

        return common.authRequest(account, '/order/new', data)
         .catch(e => {
          if (e.response) handleErrors(e.response.data)
           throw e
          })
        .then(handleErrors)
       });

  } catch (e) {
    return Promise.reject(e)
  }
}

module.exports = {
  buy,
  sell
}
