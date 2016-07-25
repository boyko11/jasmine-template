describe("RomanNumeralConverter", function() {
  
  var converter; 

  beforeEach(function() {
    converter = App.converters.RomanNumeralConverter;
  });

  it("should be able to convert 1 to I", function() {

      var converted = converter.convertToRoman(1);
      expect(converted).toEqual('I');
  });

  describe("when converting a single digit number", function() {

      it("should convert 2 to II", function() {

          var converted = converter.convertToRoman(2);
          expect(converted).toEqual('II');
      });
  });

});
