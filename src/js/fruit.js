export function Fruit(flavor1, flavor2, flavor3) {
  this.flavor1 = flavor1;
  this.flavor2 = flavor2;
  this.flavor3 = flavor3;
}

Fruit.prototype.displayFlavors = function() {
  let response = `The flavors you chose are ${this.flavor1}, ${this.flavor2}, and ${this.flavor3}.`;
  return response;
}
