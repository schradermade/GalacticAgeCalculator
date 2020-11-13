export class Age  {
  
  constructor(earthAge, lifeExp)  {
    this.earthAge = parseInt(earthAge);
    this.lifeExp = parseInt(lifeExp);
  }

  mercury()  {
    this.ageRefactor = this.earthAge * .24;
    this.expRefactor = this.lifeExp * .24;
    this.mercuryAge = this.ageRefactor;
    this.mercuryExp = this.expRefactor;
    this.yearsLeft = this.expRefactor - this.ageRefactor;
    return `Your Mercury stats: Age - ${this.mercuryAge}, Expected life - ${this.mercuryExp}, Years left to live - ${this.yearsLeft}`;
  }

  venus()  {
    this.ageRefactor = this.earthAge * .62;
    this.expRefactor = this.lifeExp * .62;
    this.venusAge = this.ageRefactor;
    this.venusExp = this.expRefactor;
    this.yearsLeft = this.expRefactor - this.ageRefactor;
    return `Your Venus stats: Age - ${this.venusAge}, Expected life - ${this.venusExp}, Years left to live - ${this.yearsLeft}`;
  }

  mars()  {
    this.ageRefactor = this.earthAge * 1.88;
    this.expRefactor = this.lifeExp * 1.88;
    this.marsAge = this.ageRefactor;
    this.marsExp = this.expRefactor;
    this.yearsLeft = this.expRefactor - this.ageRefactor;
    return `Your Mars stats: Age - ${this.marsAge}, Expected life - ${this.marsExp}, Years left to live - ${this.yearsLeft}`;
  }

  jupiter()  {
    this.ageRefactor = (this.earthAge * 11.86).toFixed(1);
    this.expRefactor = (this.lifeExp * 11.86).toFixed();
    this.jupiterAge = this.ageRefactor;
    this.jupiterExp = this.expRefactor;
    this.yearsLeft = (this.expRefactor - this.ageRefactor).toFixed(1);
    return `Your Jupiter stats: Age - ${this.jupiterAge}, Expected life - ${this.jupiterExp}, Years left to live - ${this.yearsLeft}`;
  }
};







/*
export function Fruit(flavor1, flavor2, flavor3) {
  this.flavor1 = flavor1;
  this.flavor2 = flavor2;
  this.flavor3 = flavor3;
}

Fruit.prototype.displayFlavors = function() {
  let response = `The flavors you chose are ${this.flavor1}, ${this.flavor2}, and ${this.flavor3}.`;
  return response;
}
*/