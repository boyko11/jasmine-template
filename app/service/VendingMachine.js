var App = App || {};
App.service = App.service || {};
App.service.VendingMachine = (function() {

	var currentAmount = 0;
	
	var insertCoin = function(coin) {

		if(coin.weight === 5 && coin.diameter === 0.835 && coin.thickness === 1.95) {
			currentAmount += 5;
		}
	};

	var getCurrentAmount = function() {

		return currentAmount;
	};

	return {
		insertCoin: insertCoin,
		getCurrentAmount: getCurrentAmount
	}

})();