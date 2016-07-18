describe("VendingMachine", function() {
  
  var vendingMachine; 

  beforeEach(function() {
    vendingMachine = App.service.VendingMachine;
  });

  it('should display INSERT COIN when no coins inserted', function() {
   
      expect('INSERT COIN').toEqual(vendingMachine.getDisplay());
  });

  describe("when nickel inserted", function() {

      it("should add five to the current amount", function() {

          var amountBefore = vendingMachine.getCurrentAmount();
          var nickel = new App.model.Coin('nickel', 5, 0.835, 1.95);

          vendingMachine.insertCoin(nickel);

          expect(amountBefore + 5).toEqual(vendingMachine.getCurrentAmount());
      });
  });

});
