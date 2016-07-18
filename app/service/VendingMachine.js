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

	var getDisplay = function() {
		
		if(currentAmount == 0) {
			return 'INSERT COIN';
		}
		if(currentAmount < 10) {
			return '0.0' + currentAmount.toString();
		}
		if(currentAmount < 100) {
			return '0.' + currentAmount.toString();
		}
		var firstDigit = Math.floor(currentAmount / 100);
		var remainder = currentAmount % 100;
		return firstDigit.toString() + '.' + remainder.toString();
	};

	return {
		insertCoin: insertCoin,
		getCurrentAmount: getCurrentAmount,
		getDisplay: getDisplay
	}

})();