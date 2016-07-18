var App = App || {};
App.service = App.service || {};
App.service.VendingMachine = (function() {

	var currentAmount = 0;
	var display = 'INSERT COIN'
	
	var insertCoin = function(coin) {

		if(coin.weight === 5 && coin.diameter === 0.835 && coin.thickness === 1.95) {
			currentAmount += 5;
		}
	};

	var getCurrentAmount = function() {

		return currentAmount;
	};

	var getDisplay = function() {

		return display;
	};

	return {
		insertCoin: insertCoin,
		getCurrentAmount: getCurrentAmount,
		getDisplay: getDisplay
	}

})();