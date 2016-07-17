var App = App || {};
App.converters = App.converters || {};
App.converters.RomanNumeralConverter = (function() {
	
	var convertToRoman = function(normalNumber) {

		if( !normalNumber  || Number.isInteger(normalNumber) == false) {

			console.error("Invalid normalNumber.");
			return normalNumber;
		}

		var normalInt = parseInt(normalNumber);

		if(normalInt === 1) {

			return "I";
		}

		console.info("Conversion for " + normalNumber + " has not been implemented yet.");
		return normalNumber;
	};

	return {
		convertToRoman: convertToRoman
	}

})();