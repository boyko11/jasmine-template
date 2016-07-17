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

  describe("when converting a number between 10 and 39 inclusive", function() {

      it("should convert 10 to X", function() {

          var converted = converter.convertToRoman(10);
          expect(converted).toEqual('X');
      });

      it("should convert 11 to XI", function() {

          var converted = converter.convertToRoman(11);
          expect(converted).toEqual('XI');
      });

      it("should convert 12 to XII", function() {

          var converted = converter.convertToRoman(12);
          expect(converted).toEqual('XII');
      });

      it("should convert 13 to XIII", function() {

          var converted = converter.convertToRoman(13);
          expect(converted).toEqual('XIII');
      });

      it("should convert 14 to XIV", function() {

          var converted = converter.convertToRoman(14);
          expect(converted).toEqual('XIV');
      });

      it("should convert 15 to XV", function() {

          var converted = converter.convertToRoman(15);
          expect(converted).toEqual('XV');
      });

      it("should convert 16 to XVI", function() {

          var converted = converter.convertToRoman(16);
          expect(converted).toEqual('XVI');
      });      

      it("should convert 17 to XVII", function() {

          var converted = converter.convertToRoman(17);
          expect(converted).toEqual('XVII');
      });

      it("should convert 18 to XVIII", function() {

          var converted = converter.convertToRoman(18);
          expect(converted).toEqual('XVIII');
      });

      it("should convert 19 to XIX", function() {

          var converted = converter.convertToRoman(19);
          expect(converted).toEqual('XIX');
      });

      it("should convert 20 to XX", function() {

          var converted = converter.convertToRoman(20);
          expect(converted).toEqual('XX');
      });

      it("should convert 21 to XXI", function() {

          var converted = converter.convertToRoman(21);
          expect(converted).toEqual('XXI');
      });

      it("should convert 29 to XXIX", function() {

          var converted = converter.convertToRoman(29);
          expect(converted).toEqual('XXIX');
      });

      it("should convert 30 to XXX", function() {

          var converted = converter.convertToRoman(30);
          expect(converted).toEqual('XXX');
      });

      it("should convert 31 to XXXI", function() {

          var converted = converter.convertToRoman(31);
          expect(converted).toEqual('XXXI');
      });

      it("should convert 39 to XXXIX", function() {

          var converted = converter.convertToRoman(39);
          expect(converted).toEqual('XXXIX');
      });
  });

  describe('when converting a number between 40 and 49 inclusive', function() {

      it("should convert 40 to XL", function() {

          var converted = converter.convertToRoman(40);
          expect(converted).toEqual('XL');
      });
      it("should convert 41 to XLI", function() {

          var converted = converter.convertToRoman(41);
          expect(converted).toEqual('XLI');
      });
      it("should convert 42 to XLII", function() {

          var converted = converter.convertToRoman(42);
          expect(converted).toEqual('XLII');
      });
      it("should convert 43 to XLIII", function() {

          var converted = converter.convertToRoman(43);
          expect(converted).toEqual('XLIII');
      });
      it("should convert 44 to XLIV", function() {

          var converted = converter.convertToRoman(44);
          expect(converted).toEqual('XLIV');
      });
      it("should convert 45 to XLV", function() {

          var converted = converter.convertToRoman(45);
          expect(converted).toEqual('XLV');
      });

      it("should convert 46 to XLVI", function() {

          var converted = converter.convertToRoman(46);
          expect(converted).toEqual('XLVI');
      });
      it("should convert 47 to XLVII", function() {

          var converted = converter.convertToRoman(47);
          expect(converted).toEqual('XLVII');
      });
      it("should convert 48 to XLVIII", function() {

          var converted = converter.convertToRoman(48);
          expect(converted).toEqual('XLVIII');
      });
      it("should convert 49 to XLIX", function() {

          var converted = converter.convertToRoman(49);
          expect(converted).toEqual('XLIX');
      });              
  });

});
