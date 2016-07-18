describe("VendingMachine", function() {
  
  var vendingMachine;

  var penny = new App.model.Coin('penny', 2.5, 0.75, 1.52);
  var nickel = new App.model.Coin('nickel', 5, 0.835, 1.95);
  var dime = new App.model.Coin('dime', 2.268, 0.705, 1.35);
  var quarter = new App.model.Coin('quarter', 5.670, 0.955, 1.75);
  var randomCoin = new App.model.Coin('Canadian quarter', 5.83, 23.88, 1.52);

  beforeEach(function() {
    vendingMachine = App.service.VendingMachine;
    vendingMachine.returnCoins();
    vendingMachine.getReturnedCoins();
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

  describe("when quarter inserted", function() {

    it("should add 25 to the current amount", function() {

        var amountBefore = vendingMachine.getCurrentAmount();
        vendingMachine.insertCoin(quarter);

        expect(vendingMachine.getCurrentAmount()).toEqual(amountBefore + 25);
    });

    it("should display 0.25 as the current amount", function() {

        vendingMachine.insertCoin(quarter);
        expect(vendingMachine.getDisplay()).toEqual('0.25');
    });    

  });

  describe("when penny inserted", function() {

    it("should reject the penny", function() {

        var amountBefore = vendingMachine.getCurrentAmount();
        vendingMachine.insertCoin(penny);

        expect(vendingMachine.getCurrentAmount()).toEqual(amountBefore);
        expect(vendingMachine.getDisplay()).toEqual('INSERT COIN');
    });

    it('should return the penny', function() {

        vendingMachine.insertCoin(penny);
        var returnedCoins = vendingMachine.getReturnedCoins();
        expect(returnedCoins.length).toEqual(1);
        expect(returnedCoins[0].name).toEqual('penny');
    });    

  });

  describe("when unexpected coin inserted", function() {

    it("should reject the unexpected coin", function() {

        var amountBefore = vendingMachine.getCurrentAmount();
        vendingMachine.insertCoin(randomCoin);

        expect(vendingMachine.getCurrentAmount()).toEqual(amountBefore);
        expect(vendingMachine.getDisplay()).toEqual('INSERT COIN');
    });

    it('should return the unexpected coin', function() {

        vendingMachine.insertCoin(randomCoin);
        var returnedCoins = vendingMachine.getReturnedCoins();
        expect(returnedCoins.length).toEqual(1);
        expect(returnedCoins[0].name).toEqual('Canadian quarter');
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
