const should = require('should');

const ticker = require("../lib/ticker.js");


describe("ticker", function(){
	describe("#ticker", function(){
		it("should get USD/BTC rates", function(){
			return ticker.ticker(null, "USD", "BTC").should.be.fulfilled();
		});

		it("should get USD/ETH rates", function(){
			return ticker.ticker(null, "USD", "ETH").should.be.fulfilled();
		});

		it("should not accept CAD as a fiat currency", function(){
			return ticker.ticker(null, "CAD", "BTC").should.be.rejected();
		});

		it("should not accept XRP as a crypto currency", function(){
			return ticker.ticker(null, "USD", "XRP").should.be.rejected();
		});

		it("should not accept a blank fiat crrency", function(){
			return ticker.ticker(null, "", "BTC").should.be.rejected();
		});

		it("should not accept a blank crypto crrency", function(){
			return ticker.ticker(null, "USD", "").should.be.rejected();
		});
	});
});
