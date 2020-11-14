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
    this.factor = 11.86;
    this.ageRefactor = (this.earthAge * this.factor);
    this.expRefactor = (this.lifeExp * this.factor);
    this.jupiterAge = Math.round(10 * this.ageRefactor)/10;
    this.jupiterExp = Math.round(10 * this.expRefactor)/10;
    this.jupiterAbs = Math.abs(this.jupiterExp - this.jupiterAge);
    return `Your Jupiter stats: Age - ${this.jupiterAge}, Expected life - ${this.jupiterExp}, ${this.yearsLeft} ${this.jupiterAbs} years!`;
  }
};