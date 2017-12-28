'use strict'

const querystring = require('querystring')
const axios = require('axios')
const crypto = require('crypto')
const _ = require('lodash')

const API_ENDPOINT = 'https://api.sandbox.gemini.com/v1';

let counter = -1
let lastTimestamp = Date.now()

function pad (num) {
  const asString = num.toString(10)
  if (num < 10) return '00' + asString
  if (num < 100) return '0' + asString
  return asString
}

function generateNonce () {
  const timestamp = Date.now()
  if (timestamp !== lastTimestamp) counter = -1
  lastTimestamp = timestamp
  counter = (counter + 1) % 1000
  return timestamp.toString(10) + pad(counter)
}

function authRequest (config, path, data) {
  if (!config.key || !config.secret || !config.clientId) {
    const err = new Error('Must provide key, secret and client ID')
    return Promise.reject(err)
  }

  if (!data.payload)
  {
    const err = new Error("Must provide request payload")
    return Promise.reject(err)
  }

  data = data || {}

  const nonce = generateNonce()
  
  _.merge(data.payload, {
    request: "/v1"+path,
    nonce: nonce
  });

  const signature = crypto
  .createHmac('sha384', Buffer.from(config.secret))
  .update(data.payload)
  .digest('hex')
  .toUpperCase()

  _.merge(data, {
    key: config.key,
    signature: signature
  })

  return request(path, 'POST', data)
}

function buildMarket (fiatCode, cryptoCode) {
  if (!(cryptoCode == 'BTC' || cryptoCode == 'ETH')) throw new Error('Unsupported crypto: ' + cryptoCode)
    cryptoCode = cryptoCode.toLowerCase();
  if (fiatCode === 'USD') return cryptoCode + 'usd'
  //if (fiatCode === 'EUR') return 'eur'
  throw new Error('Unsupported fiat: ' + fiatCode)
}

function request (path, method, data) {
  const options = {
    method: method,
    url: API_ENDPOINT + path,
    headers: {
      'User-Agent': 'Mozilla/4.0 (compatible; Lamassu client)',
      'Content-Type': 'text/plain'
    }
  }

  if(data && method == "POST")
  {
    _.merge(options.headers, {
      'X-GEMINI-APIKEY': data.key,
      'X-GEMINI-PAYLOAD': data.payload,
      'X-GEMINI-SIGNATURE': data.signature
    });
  }

  return axios(options)
  .then(r => r.data)
}

module.exports = {
  authRequest,
  request,
  buildMarket
}
