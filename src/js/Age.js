export class Age  {
  
  constructor(earthAge, lifeExp)  {
    this.earthAge = parseInt(earthAge);
    this.lifeExp = parseInt(lifeExp);
    this.yearsLeft = this.yearsDynamic();
    this.factor = 0;
  }

  yearsDynamic() {
    if (this.earthAge <= this.lifeExp) {
      this.yearsLeft = `Your remaining life is about`;
      return this.yearsLeft;
    } else  {
      this.yearsLeft = `You have outlived your life expectancy by`;
      return this.yearsLeft;
    };
  }

  mercury()  {
    this.factor = .24;
    this.ageRefactor = this.earthAge * this.factor;
    this.expRefactor = this.lifeExp * this.factor;
    this.mercuryAge = this.ageRefactor;
    this.mercuryExp = this.expRefactor;
    this.mercuryAbs = Math.abs(this.mercuryExp - this.mercuryAge);
    return `Your Mercury stats: Age - ${this.mercuryAge}, Expected life - ${this.mercuryExp}, ${this.yearsLeft} ${this.mercuryAbs} years!`;
  }

  venus()  {
    this.factor = .62;
    this.ageRefactor = this.earthAge * this.factor;
    this.expRefactor = this.lifeExp * this.factor;
    this.venusAge = this.ageRefactor;
    this.venusExp = this.expRefactor;
    this.venusAbs = Math.abs(this.venusExp - this.venusAge);
    return `Your Venus stats: Age - ${this.venusAge}, Expected life - ${this.venusExp}, ${this.yearsLeft} ${this.venusAbs} years!`;
  }

  mars()  {
    this.factor = 1.88
    this.ageRefactor = this.earthAge * this.factor;
    this.expRefactor = this.lifeExp * this.factor;
    this.marsAge = this.ageRefactor;
    this.marsExp = this.expRefactor;
    this.marsAbs = Math.abs(this.marsExp - this.marsAge);
    return `Your Mars stats: Age - ${this.marsAge}, Expected life - ${this.marsExp}, ${this.yearsLeft} ${this.marsAbs} years!`;
  }

  jupiter()  {
    this.ageRefactor = (this.earthAge * 11.86).toFixed(1);
    this.expRefactor = (this.lifeExp * 11.86).toFixed();
    this.jupiterAge = this.ageRefactor;
    this.jupiterExp = this.expRefactor;
    return `Your Jupiter stats: Age - ${this.jupiterAge}, Expected life - ${this.jupiterExp}, ${this.yearsLeft}`;
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



"You have exceeded your life expectancy by `${this.yearsLeft}`"
*/