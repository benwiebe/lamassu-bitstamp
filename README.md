lamassu-gemini
================

[![Build Status](https://travis-ci.org/benwiebe/lamassu-gemini.svg?branch=master)](https://travis-ci.org/benwiebe/lamassu-gemini)

Lamassu Gemini ticker and trader.

Please note this is not an official module by Lamassu or Gemini and the developer is not affiliated with either company in any way. The module is, however, based upon
[the official Lamassu Bitstamp module](https://github.com/lamassu/lamassu-bitstamp).

This project is licensed under the 

### License
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

[A copy of this license has been included as part of the project.](https://github.com/benwiebe/lamassu-gemini/blob/master/LICENSE)

### Testing

*Note: It is suggested you use the Gemini sandbox site as opposed to the live trading site. The procedure below assumes you will use the sandbox site, however you can use live credentials and simply not
change the API URL if you so choose*

1. [Create a new Gemini sandbox API key](https://exchange.sandbox.gemini.com/settings/api).
2. On the API key creation page:
  * Copy your API key and API secret to a safe place (you will need these in the next step)
  * Make sure that `Fund Management` and `Trading` are checked, but NOT `Require session heartbeat`
3. Open [`mockConfig.template.json`](https://github.com/benwiebe/lamassu-gemini/blob/master/test/mockConfig.template.json) and input your API key and API secret
4. Rename `mockConfig.template.json` to `mockConfig.json`
5. Open [`config.js`](https://github.com/benwiebe/lamassu-gemini/blob/master/config.js) and change the `API_ENDPOINT` to `https://api.sandbox.gemini.com/v1/` (if using sandbox credentials)
6. Type this into your terminal:

```bash
npm update # in case you cloned via git
npm test
```

NOTE: Two last tests depend on your account having $5 of available balance (both in USD and BTC). This should not be a problem if you use sandbox credentials.
