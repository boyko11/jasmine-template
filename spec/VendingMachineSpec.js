describe("VendingMachine", function() {
  
  var vendingMachine;

  var penny = new App.model.Coin('penny', 2.5, 0.75, 1.52);
  var nickel = new App.model.Coin('nickel', 5, 0.835, 1.95);
  var dime = new App.model.Coin('dime', 2.268, 0.705, 1.35);
  var quarter = new App.model.Coin('quarter', 5.670, 0.955, 1.75);
  var randomCoin = new App.model.Coin('Canadian quarter', 5.83, 23.88, 1.52);

  var colaProduct = new App.model.Product('cola', 100);
  var chipsProduct = new App.model.Product('chips', 50);
  var candyProduct = new App.model.Product('candy', 65);

  var TestHelpers = {

    insertCoinsAndPushButton : function( coins, buttonName ) {

          for(let coin of coins) {
            vendingMachine.insertCoin(coin);
          }

          switch( buttonName ) {
            case 'cola' :
              vendingMachine.pushColaButton();
              break;
            case 'chips' :
              vendingMachine.pushChipsButton();
              break;
            case 'candy' :
              vendingMachine.pushCandyButton();
              break;
            default:
              break;
          }
          
    }

  }

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

  describe("when cola button pushed", function() {

      it("should dispense cola when enough money", function() {

          TestHelpers.insertCoinsAndPushButton([quarter, quarter, quarter, quarter], 'cola'); 

          var dispensedProducts = vendingMachine.getDispensedProducts();

          expect(dispensedProducts.length).toEqual(1);
          expect(dispensedProducts[0].name).toEqual('cola');
      });

      it("should display 'THANK YOU' followed by displaying 'INSERT COIN' when enough money", function() {

          TestHelpers.insertCoinsAndPushButton([quarter, quarter, quarter, quarter], 'cola');

          var displayMessage = vendingMachine.getDisplay();
          expect(displayMessage).toEqual('THANK YOU');

          var dispensedProducts = vendingMachine.getDispensedProducts();

          var followingDisplayMessage = vendingMachine.getDisplay();
          expect(followingDisplayMessage).toEqual('INSERT COIN');
      });

      it("should set current amount to 0 when enough money", function() {

          TestHelpers.insertCoinsAndPushButton([quarter, quarter, quarter, quarter], 'cola');
          vendingMachine.getDispensedProducts();

          var currentAmount = vendingMachine.getCurrentAmount();
          expect(currentAmount).toEqual(0);
      }); 

      it("should display PRICE + the price of the product when NOT enough money", function() {

          TestHelpers.insertCoinsAndPushButton([nickel], 'cola');
          var displayMessage = vendingMachine.getDisplay();

          expect(displayMessage).toEqual('PRICE 1.00');
      });

      it("should display PRICE + the price of the product when NOT enough money", function() {

          TestHelpers.insertCoinsAndPushButton([nickel], 'cola');
          
          var displayMessage = vendingMachine.getDisplay();
          expect(displayMessage).toEqual('PRICE 1.00');

          var followingDisplayMessage = vendingMachine.getDisplay();
          expect(followingDisplayMessage).toEqual('0.05');

          vendingMachine.pushColaButton();
          var messageAfterAnotherPushWithoutEnoughMoney = vendingMachine.getDisplay();
          expect(messageAfterAnotherPushWithoutEnoughMoney).toEqual('PRICE 1.00');

      });       


  });

  describe("when chips button pushed", function() {

      it("should dispense chips when enough money", function() {

          TestHelpers.insertCoinsAndPushButton([quarter, quarter, quarter, quarter], 'chips');

          var dispensedProducts = vendingMachine.getDispensedProducts();

          expect(dispensedProducts.length).toEqual(1);
          expect(dispensedProducts[0].name).toEqual('chips');
      });

      it("should display 'THANK YOU' followed by displaying 'INSERT COIN' when enough money", function() {

          TestHelpers.insertCoinsAndPushButton([quarter, quarter, quarter, quarter], 'chips');

          var displayMessage = vendingMachine.getDisplay();
          expect(displayMessage).toEqual('THANK YOU');

          var dispensedProducts = vendingMachine.getDispensedProducts();

          var followingDisplayMessage = vendingMachine.getDisplay();
          expect(followingDisplayMessage).toEqual('INSERT COIN');
      });

      it("should set current amount to 0 when enough money", function() {

          TestHelpers.insertCoinsAndPushButton([quarter, quarter, quarter, quarter], 'chips');
          vendingMachine.getDispensedProducts();

          var currentAmount = vendingMachine.getCurrentAmount();
          expect(currentAmount).toEqual(0);
      });

      it("should return correct change", function() {

          TestHelpers.insertCoinsAndPushButton([quarter, quarter, quarter, quarter], 'chips');
          vendingMachine.getDispensedProducts();

          var returnedCoins = vendingMachine.getReturnedCoins();
          var changeAmount = App.service.CoinService.getCoinsValue(returnedCoins);
          expect(changeAmount).toEqual(50);
      });         


  });

  describe("when candy button pushed", function() {

      it("should dispense candy when enough money", function() {

          TestHelpers.insertCoinsAndPushButton([quarter, quarter, quarter, quarter], 'candy');

          var dispensedProducts = vendingMachine.getDispensedProducts();

          expect(dispensedProducts.length).toEqual(1);
          expect(dispensedProducts[0].name).toEqual('candy');
      });

      it("should display 'THANK YOU' followed by displaying 'INSERT COIN' when enough money", function() {

          TestHelpers.insertCoinsAndPushButton([quarter, quarter, quarter, quarter], 'candy');

          var displayMessage = vendingMachine.getDisplay();
          expect(displayMessage).toEqual('THANK YOU');

          var dispensedProducts = vendingMachine.getDispensedProducts();

          var followingDisplayMessage = vendingMachine.getDisplay();
          expect(followingDisplayMessage).toEqual('INSERT COIN');
      });       

      it("should set current amount to 0 when enough money", function() {

          TestHelpers.insertCoinsAndPushButton([quarter, quarter, quarter, quarter], 'candy');
          vendingMachine.getDispensedProducts();

          var currentAmount = vendingMachine.getCurrentAmount();
          expect(currentAmount).toEqual(0);
      });

      it("should return correct change", function() {

          TestHelpers.insertCoinsAndPushButton([quarter, quarter, quarter, quarter], 'candy');
          vendingMachine.getDispensedProducts();
          
          var returnedCoins = vendingMachine.getReturnedCoins();
          var changeAmount = App.service.CoinService.getCoinsValue(returnedCoins);
          expect(changeAmount).toEqual(35);
      });

      it("should return correct change", function() {

          TestHelpers.insertCoinsAndPushButton([quarter, quarter, quarter], 'candy');
          vendingMachine.getDispensedProducts();
          
          var returnedCoins = vendingMachine.getReturnedCoins();
          var changeAmount = App.service.CoinService.getCoinsValue(returnedCoins);
          expect(changeAmount).toEqual(10);
      });       


  });     

});
