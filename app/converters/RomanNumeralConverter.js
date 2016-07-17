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
	
	var convertToRoman = function(normalNumber) {

		if( !normalNumber  || Number.isInteger(normalNumber) == false) {

			console.error("Invalid normalNumber: " + normalNumber);
			return null;
		}

		var normalInt = parseInt(normalNumber);

		var romanNumeralToReturn = null;

		if(normalInt < 10) {

			return convertSingleDigit(normalInt);
		}

		if(normalInt < 40) {

			return convertNumbersBetweenTenAndThirtyNine(normalInt);
		}

		if(normalInt < 50) {

			return convertNumbersBetweenFortyAndFortyNine(normalInt);
		}

		return romanNumeralToReturn;
	};

	return {
		convertToRoman: convertToRoman
	}

})();