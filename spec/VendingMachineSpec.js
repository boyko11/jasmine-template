describe("VendingMachine", function() {
  
  var vendingMachine;

  var penny = new App.model.Coin('penny', 2.5, 0.75, 1.52);
  var nickel = new App.model.Coin('nickel', 5, 0.835, 1.95);
  var dime = new App.model.Coin('dime', 2.268, 0.705, 1.35);
  var quarter = new App.model.Coin('quarter', 5.670, 0.955, 1.75);

  beforeEach(function() {
    vendingMachine = App.service.VendingMachine;
    vendingMachine.returnCoins();
  });

  it('should display INSERT COIN when no coins inserted', function() {
   
      expect(vendingMachine.getDisplay()).toEqual('INSERT COIN');
  });

  describe("when nickel inserted", function() {

      it("should add five to the current amount", function() {

          var amountBefore = vendingMachine.getCurrentAmount();

          vendingMachine.insertCoin(nickel);

          expect(vendingMachine.getCurrentAmount()).toEqual(amountBefore + 5);
      });

      it("should display 0.05 as the current amount", function() {

          vendingMachine.insertCoin(nickel);
          expect(vendingMachine.getDisplay()).toEqual('0.05');
      });      
  });

  describe("when dime inserted", function() {

    it("should add 10 to the current amount", function() {

        var amountBefore = vendingMachine.getCurrentAmount();
        vendingMachine.insertCoin(dime);

        expect(vendingMachine.getCurrentAmount()).toEqual(amountBefore + 10);
    });

    it("should display 0.10 as the current amount", function() {

        vendingMachine.insertCoin(dime);
        expect(vendingMachine.getDisplay()).toEqual('0.10');
    });    

  });

  describe("when RETURN COINS button pushed", function() {

      it("should reset the current amount to 0", function() {

          vendingMachine.insertCoin(nickel);
          vendingMachine.returnCoins();
          expect(vendingMachine.getCurrentAmount()).toEqual(0);
      });

      it("should reset the display to INSERT COIN", function() {

          vendingMachine.insertCoin(dime);
          vendingMachine.returnCoins();
          expect(vendingMachine.getDisplay()).toEqual('INSERT COIN');
      });      
  });  

});
