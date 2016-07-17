var App = App || {};
App.converters = App.converters || {};
App.converters.RomanNumeralConverter = (function() {

	var convertSingleDigit = function( singleDigitNumber ) {

		var romanNumeralToReturn = null;

		switch( singleDigitNumber ) {

			case 0 :
				romanNumeralToReturn = '';
				break;
			case 1 :
				romanNumeralToReturn = 'I';
				break;
			case 2 :
				romanNumeralToReturn = 'II';
				break;		
			case 3 :
				romanNumeralToReturn = 'III';
				break;
			case 4 :
				romanNumeralToReturn = 'IV';
				break;
			case 5 :
				romanNumeralToReturn = 'V';
				break;
			case 6 :
				romanNumeralToReturn = 'VI';
				break;
			case 7 :
				romanNumeralToReturn = 'VII';
				break;
			case 8 :
				romanNumeralToReturn = 'VIII';
				break;
			case 9 :
				romanNumeralToReturn = 'IX';
				break;	
		}

		return romanNumeralToReturn;
	};

	var convertNumbersBetweenTenAndThirtyNine = function( numberBetweenTenAndForty ) {

		var firstDigit = Math.floor( numberBetweenTenAndForty/10 );
		var secondDigit = numberBetweenTenAndForty % 10;
		return 'X'.repeat(firstDigit) + convertSingleDigit(secondDigit);
	};

	var convertNumbersBetweenFortyAndFortyNine = function( numberBetweenFortyAndFortyNine ) {

		var secondDigit = numberBetweenFortyAndFortyNine % 10;
		return 'XL' + convertSingleDigit(secondDigit);
	};

	var convertNumbersBetweenFiftyAndEightyNine = function( numberBetweenFiftyAndEightyNine ) {

		return 'L' + convertToRoman( numberBetweenFiftyAndEightyNine - 50);
	};

	var convertNumbersBetweenNinetyAndNinetyNine = function( numberBetweenNinetyAndNinetyNine) {

		var secondDigit = numberBetweenNinetyAndNinetyNine % 10;
		return 'XC' + convertSingleDigit(secondDigit);
	};

	var convertNumbersBetween100and399 = function( numberBetween100And399 ) {

		var firstDigit = Math.floor( numberBetween100And399/100 );
		var secondAndThirdDigitNumber = numberBetween100And399 % 100;
		return 'C'.repeat(firstDigit) + convertToRoman(secondAndThirdDigitNumber);
	};

	var convertNumbersBetween400and499 = function( numberBetween400And499 ) {

		return 'CD' + convertToRoman(numberBetween400And499 - 400);
	};

	var convertNumbersBetween500and899 = function( numberBetween500And899 ) {

		return 'D' + convertToRoman(numberBetween500And899 - 500);
	};

	var convertNumbersBetween900and999 = function( numberBetween900and999) {

		return 'CM' + convertToRoman( numberBetween900and999 - 900);
	};

	var convertNumbersBetween1000and4999 = function( numberBetween1000and4999 ) {

		var firstDigit = Math.floor( numberBetween1000and4999/1000 );
		var secondThirdAndForthDigitNumber = numberBetween1000and4999 % 1000;
		return 'M'.repeat(firstDigit) + convertToRoman(secondThirdAndForthDigitNumber);
	};
	
	var convertToRoman = function(normalNumber) {

		if( !normalNumber  || Number.isInteger(normalNumber) == false) {

			console.error("Invalid normalNumber: " + normalNumber);
			return '';
		}

		var normalInt = parseInt(normalNumber);

		var romanNumeralToReturn = '';

		if(normalInt < 10) {

			return convertSingleDigit(normalInt);
		}

		if(normalInt < 40) {

			return convertNumbersBetweenTenAndThirtyNine(normalInt);
		}

		if(normalInt < 50) {

			return convertNumbersBetweenFortyAndFortyNine(normalInt);
		}

		if(normalInt < 90) {

			return convertNumbersBetweenFiftyAndEightyNine(normalInt);
		}

		if(normalInt < 100) {

			return convertNumbersBetweenNinetyAndNinetyNine(normalInt);
		}

		if(normalInt < 400) {

			return convertNumbersBetween100and399(normalInt);
		}

		if(normalInt < 500) {

			return convertNumbersBetween400and499(normalInt);
		}

		if(normalInt < 900) {

			return convertNumbersBetween500and899(normalInt);
		}

		if(normalInt < 1000) {

			return convertNumbersBetween900and999(normalInt);
		}

		if(normalInt < 5000) {

			return convertNumbersBetween1000and4999(normalInt);
		}

		return romanNumeralToReturn;
	};

	return {
		convertToRoman: convertToRoman
	}

})();