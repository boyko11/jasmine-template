describe("VendingMachine", function() {
  
  var vendingMachine; 

  beforeEach(function() {
    vendingMachine = App.service.VendingMachine;
  });

  it('should display INSERT COIN when no coins inserted', function() {
   
      expect(vendingMachine.getDisplay()).toEqual('INSERT COIN');
  });

  describe("when nickel inserted", function() {

      it("should add five to the current amount", function() {

          var amountBefore = vendingMachine.getCurrentAmount();
          var nickel = new App.model.Coin('nickel', 5, 0.835, 1.95);

          vendingMachine.insertCoin(nickel);

          expect(vendingMachine.getCurrentAmount()).toEqual(amountBefore + 5);
      });

      it("should display the current amount", function() {

          expect(vendingMachine.getDisplay()).toEqual('0.05');
      });      
  });

});
