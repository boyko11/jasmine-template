var App = App || {};
App.converters = App.converters || {};
App.converters.RomanNumeralConverter = (function() {

	var convertToRoman = function(normalNumber) {

		if(normalNumber === 1) {
			return 'I';
		} else if( normalNumber === 2) {
			return 'II';
		}
		
		return normalNumber;
	};

	return {
		convertToRoman: convertToRoman
	}

})();