describe("RomanNumeralConverter", function() {
  
  var converter; 

  beforeEach(function() {
    converter = App.converters.RomanNumeralConverter;
  });

  describe("when converting a single digit number", function() {

      it("should convert 1 to I", function() {

          var converted = converter.convertToRoman(1)
          expect(converted).toEqual('I');
      });
  });

});
