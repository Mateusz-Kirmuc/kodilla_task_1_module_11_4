function Phone(brand, price, color) {
  this.brand = brand;
  this.price = price;
  this.color = color;
}

Phone.prototype.printInfo = function() {
  console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iphone6S = new Phone("apple", 2250, "silver");
var galaxyS6 = new Phone("samsung", 1900, "grey");
var oneplusOne = new Phone("oneplus", 1500, "gold");

iphone6S.printInfo();
galaxyS6.printInfo();
oneplusOne.printInfo();
