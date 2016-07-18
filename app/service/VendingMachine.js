var App = App || {};
App.service = App.service || {};
App.service.VendingMachine = (function() {

	var currentAmount = 0;
	var validCoinsList = [
		{name: 'nickel', weight: 5, diameter: 0.835, thickness: 1.95, worth: 5},
		{name: 'dime', weight: 2.268, diameter: 0.705, thickness: 1.35, worth: 10},
		{name: 'quarter', weight: 5.670, diameter: 0.955, thickness: 1.75, worth: 25}
	];
	var returnedCoinsHolder = [];

	var returnCoin = function(coin) {

		returnedCoinsHolder.push(coin);
	};

	var getReturnedCoins = function() {

		var coinsToReturn = returnedCoinsHolder.slice();
		while (returnedCoinsHolder.length) { returnedCoinsHolder.pop(); }
		return coinsToReturn;
	};
	
	var insertCoin = function(insertedCoin) {

		var verifiedCoin = validCoinsList.filter(function ( validCoin ) {
		    return validCoin.weight === insertedCoin.weight && validCoin.diameter === insertedCoin.diameter && validCoin.thickness === insertedCoin.thickness;
		})[0];

		if(verifiedCoin !== undefined) {

			currentAmount += verifiedCoin.worth;
		} else {
			returnCoin(insertedCoin);
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

	var returnCoins = function() {

		currentAmount = 0;
	};

	return {
		insertCoin: insertCoin,
		getCurrentAmount: getCurrentAmount,
		getDisplay: getDisplay,
		returnCoins: returnCoins,
		getReturnedCoins: getReturnedCoins
	}

})();