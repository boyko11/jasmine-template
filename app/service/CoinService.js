var App = App || {};
App.service = App.service || {};
App.service.CoinService = (function() {

	var coinsNameValueMap = {
		penny : 1,
		nickel: 5,
		dime: 10,
		quarter: 25

	}

	var Coins = {

	  penny: new App.model.Coin('penny', 2.5, 0.75, 1.52),
      nickel: new App.model.Coin('nickel', 5, 0.835, 1.95),
      dime: new App.model.Coin('dime', 2.268, 0.705, 1.35),
      quarter: new App.model.Coin('quarter', 5.670, 0.955, 1.75)       
	}
  
  
  

	var getCoinsValue = function( coins ) {

		if(!coins || !Array.isArray(coins) || coins.length < 1) {
			return 0;
		}
		return coins.map(coin => coinsNameValueMap[coin.name]).reduce(function(previous, current) {
			return previous + current;
		}, 0)
	};

	var getCoinsNameValueMap = function() {
		return coinsNameValueMap;
	};

	var getCoin = function( coinName ) {

		return Object.assign({}, Coins[coinName]);
	}

	return {
		getCoinsValue: getCoinsValue,
		getCoinsNameValueMap: getCoinsNameValueMap,
		getCoin: getCoin
	}
})();