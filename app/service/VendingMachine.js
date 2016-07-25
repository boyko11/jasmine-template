var App = App || {};
App.service = App.service || {};
App.service.VendingMachine = (function() {

	var currentAmount = 0;

	var validCoinsList = [
		{name: 'nickel', weight: 5, diameter: 0.835, thickness: 1.95, worth: 5},
		{name: 'dime', weight: 2.268, diameter: 0.705, thickness: 1.35, worth: 10},
		{name: 'quarter', weight: 5.670, diameter: 0.955, thickness: 1.75, worth: 25}
	];

	var Products = {

		cola : new App.model.Product('cola', 100),
		chips : new App.model.Product('chips', 50),
		candy : new App.model.Product('candy', 65)		
	};

	var returnedCoinsHolder = [];
	var dispensedProducts = [];
	var itemsAttemptedToBeDispensedWithoutEnoughMoneyInserted = [];

	var returnCoin = function(coin) {

		returnedCoinsHolder.push(coin);
	};

	var returnClonedArrayAndClearOriginalArrayAfterCloning = function( arrayToCloneAndClearAfterCloning ) {

		var arrayToReturn = arrayToCloneAndClearAfterCloning.slice();
		while (arrayToCloneAndClearAfterCloning.length) { arrayToCloneAndClearAfterCloning.pop(); }
		return arrayToReturn;
	}

	var getReturnedCoins = function() {

		return returnClonedArrayAndClearOriginalArrayAfterCloning(returnedCoinsHolder);
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

		if(dispensedProducts.length > 0) {

			return "THANK YOU";
		}

		if(itemsAttemptedToBeDispensedWithoutEnoughMoneyInserted.length > 0) {

			var messageToReturn = 'PRICE ' + formatAmount( itemsAttemptedToBeDispensedWithoutEnoughMoneyInserted[0].price );
			while (itemsAttemptedToBeDispensedWithoutEnoughMoneyInserted.length) { itemsAttemptedToBeDispensedWithoutEnoughMoneyInserted.pop(); }
			return messageToReturn;
		}

		if(currentAmount == 0) {
			return 'INSERT COIN';
		}

		return formatAmount( currentAmount );
	};

	var formatAmount = function( amount ) {

		if(amount < 10) {
			return '0.0' + amount.toString();
		}
		if(amount < 100) {
			return '0.' + amount.toString();
		}
		var firstDigit = Math.floor(amount / 100);
		var remainder = amount % 100;

		return firstDigit.toString() + '.' + remainder.toString() + '0';
	};

	var returnCoins = function() {

		currentAmount = 0;
		while (itemsAttemptedToBeDispensedWithoutEnoughMoneyInserted.length) { itemsAttemptedToBeDispensedWithoutEnoughMoneyInserted.pop(); }
	};

	var pushColaButton = function() {

		pushButton(new App.model.Product(Products.cola.name, Products.cola.price));
	};

	var pushChipsButton = function() {

		pushButton(new App.model.Product(Products.chips.name, Products.chips.price));
	};

	var pushCandyButton = function() {

		pushButton(new App.model.Product(Products.candy.name, Products.candy.price));
	};	

	var pushButton = function( productToDispense ) {

		if(currentAmount === productToDispense.price) {

			dispensedProducts.push( productToDispense );
			currentAmount = 0;
			return;
		}

		if(currentAmount > productToDispense.price) {

			dispensedProducts.push( productToDispense );

			var changeAmount = currentAmount - productToDispense.price;

			var returnedChangeAmount = 0;
			var keepTryingQuarter = true;
			var keepTryingDime = true;
			var keepTryingNickel = true;
			var keepTryingPenny = true;

			while(returnedChangeAmount < changeAmount) {

				if(keepTryingQuarter && 
					returnedChangeAmount + App.service.CoinService.getCoinsNameValueMap().quarter <= changeAmount) {
					returnedChangeAmount += App.service.CoinService.getCoinsNameValueMap().quarter;
					returnedCoinsHolder.push(App.service.CoinService.getCoin('quarter'));
					continue;
				} else {
					keepTryingQuarter = false;
				}

				if(keepTryingDime && 
					returnedChangeAmount + App.service.CoinService.getCoinsNameValueMap().dime <= changeAmount) {
					returnedChangeAmount += App.service.CoinService.getCoinsNameValueMap().dime;
					returnedCoinsHolder.push(App.service.CoinService.getCoin('dime'));
					continue;
				} else {
					keepTryingDime = false;
				}

				if(keepTryingNickel && 
					returnedChangeAmount + App.service.CoinService.getCoinsNameValueMap().nickel <= changeAmount) {
					returnedChangeAmount += App.service.CoinService.getCoinsNameValueMap().nickel;
					returnedCoinsHolder.push(App.service.CoinService.getCoin('nickel'));
					continue;
				} else {
					keepTryingNickel = false;
				}

				if(keepTryingPenny && 
					returnedChangeAmount + App.service.CoinService.getCoinsNameValueMap().penny <= changeAmount) {
					returnedChangeAmount += App.service.CoinService.getCoinsNameValueMap().penny;
					returnedCoinsHolder.push(App.service.CoinService.getCoin('penny'));
					continue;
				} else {
					keepTryingPenny = false;
				}				

			}

			currentAmount = 0;
			return;
		}


		itemsAttemptedToBeDispensedWithoutEnoughMoneyInserted.push(productToDispense);

	};

	var getDispensedProducts = function() {

		return returnClonedArrayAndClearOriginalArrayAfterCloning(dispensedProducts);
	};

	return {
		insertCoin: insertCoin,
		getCurrentAmount: getCurrentAmount,
		getDisplay: getDisplay,
		returnCoins: returnCoins,
		getReturnedCoins: getReturnedCoins,
		pushColaButton: pushColaButton,
		pushChipsButton: pushChipsButton,
		pushCandyButton: pushCandyButton,
		getDispensedProducts: getDispensedProducts

	}

})();