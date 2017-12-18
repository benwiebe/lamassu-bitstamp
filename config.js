'use strict';

var _ = require('lodash');

exports.NAME = 'Gemini';
exports.SUPPORTED_MODULES = ['ticker', 'trader'];
exports.API_ENDPOINT = 'https://api.gemini.com/v1/';


exports.SATOSHI_FACTOR = 1e8;
exports.FUDGE_FACTOR = 1.05;

exports.config = function config(localConfig) {
  if (localConfig) _.merge(exports, localConfig);
};
