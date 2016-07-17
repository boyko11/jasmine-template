describe("RomanNumeralConverter", function() {
  
  var converter; 

  beforeEach(function() {
    converter = App.converters.RomanNumeralConverter;
  });

  it("should not be able to convert Zero", function() {

      var converted = converter.convertToRoman(0);
      expect(converted).toEqual(null);
  });

  it("should not be able to convert non-numeric strings", function() {

      var converted = converter.convertToRoman("hello");
      expect(converted).toEqual(null);
  });

  describe("when converting a single digit number", function() {

      it("should convert 1 to I", function() {

          var converted = converter.convertToRoman(1);
          expect(converted).toEqual('I');
      });

      it("should convert 2 to II", function() {

          var converted = converter.convertToRoman(2);
          expect(converted).toEqual('II');
      });

      it("should convert 3 to III", function() {

          var converted = converter.convertToRoman(3);
          expect(converted).toEqual('III');
      });

      it("should convert 4 to IV", function() {

          var converted = converter.convertToRoman(4);
          expect(converted).toEqual('IV');
      });

      it("should convert 5 to V", function() {

          var converted = converter.convertToRoman(5);
          expect(converted).toEqual('V');
      });

      it("should convert 6 to VI", function() {

          var converted = converter.convertToRoman(6);
          expect(converted).toEqual('VI');
      });      

      it("should convert 7 to VII", function() {

          var converted = converter.convertToRoman(7);
          expect(converted).toEqual('VII');
      });

      it("should convert 8 to VIII", function() {

          var converted = converter.convertToRoman(8);
          expect(converted).toEqual('VIII');
      });

      it("should convert 9 to IX", function() {

          var converted = converter.convertToRoman(9);
          expect(converted).toEqual('IX');
      });       
  });

  describe("when converting a double digit number", function() {

      it("should convert 10 to X", function() {

          var converted = converter.convertToRoman(10);
          expect(converted).toEqual('X');
      });

      it("should convert 11 to XI", function() {

          var converted = converter.convertToRoman(11);
          expect(converted).toEqual('XI');
      });
  });

});
