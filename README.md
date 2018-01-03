lamassu-gemini
================

master: [![Build Status](https://travis-ci.org/benwiebe/lamassu-gemini.svg?branch=master)](https://travis-ci.org/benwiebe/lamassu-gemini)
dev: [![Build Status](https://travis-ci.org/benwiebe/lamassu-gemini.svg?branch=dev)](https://travis-ci.org/benwiebe/lamassu-gemini)

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

#### Test Scripts
The `test` directory contains two files for testing the module:
* `test.sh` - a BASH script that will run `node -c` on the library files as well as `test_ticker.js` via `mocha`
* `test_ticker.js` - a Python script for use with `mocha` that will run some basic test cases on `lib/ticker.js`

Currently, there is NO test for `lib/trader.js` as it requires a Gemini account to run the authenticated requests and thus is not compatible with the automated testing run by TravisCI.

To run a test...
* On Linux: run `npm test`
* On Windows: run `npm run test-win`
	* Note: This script does not include the `node -c` checks included in the BASH script
