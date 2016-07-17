var App = App || {};
App.converters = App.converters || {};
App.converters.RomanNumeralConverter = (function() {
	
	var convertToRoman = function(normalNumber) {

		if( !normalNumber  || Number.isInteger(normalNumber) == false) {

			console.error("Invalid normalNumber: " + normalNumber);
			return null;
		}

		var normalInt = parseInt(normalNumber);

		var romanNumeralToReturn = null;
		switch(normalInt) {
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
			case 10 :
				romanNumeralToReturn = 'X';
				break;		

		}

		return romanNumeralToReturn;
	};

	return {
		convertToRoman: convertToRoman
	}

})();