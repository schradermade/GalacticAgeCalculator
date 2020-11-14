export class Age  {
  
  constructor(earthAge, lifeExp)  {
    this.earthAge = parseInt(earthAge);
    this.lifeExp = parseInt(lifeExp);
    this.yearsLeft = this.yearsDynamic();
  }

  yearsDynamic() {
    if (this.earthAge <= this.lifeExp) {
      return this.yearsLeft = `Your remaining life is about`;
    } else  {
      return this.yearsLeft = `You have outlived your life expectancy by`;
    };
  }

  mercury()  {
    this.factor = .24;
    this.mercuryAge = this.earthAge * this.factor;
    this.mercuryExp = this.lifeExp * this.factor;
    this.mercuryAbs = Math.abs(this.mercuryExp - this.mercuryAge);
    return `Your Mercury stats: Age - ${this.mercuryAge}, Expected life - ${this.mercuryExp}, ${this.yearsLeft} ${this.mercuryAbs} years!`;
  }

  venus()  {
    this.factor = .62;
    this.venusAge = this.earthAge * this.factor;
    this.venusExp = this.lifeExp * this.factor;
    this.venusAbs = Math.abs(this.venusExp - this.venusAge);
    return `Your Venus stats: Age - ${this.venusAge}, Expected life - ${this.venusExp}, ${this.yearsLeft} ${this.venusAbs} years!`;
  }

  mars()  {
    this.factor = 1.88
    this.marsAge = this.earthAge * this.factor;
    this.marsExp = this.lifeExp * this.factor;
    this.marsAbs = Math.abs(this.marsExp - this.marsAge);
    return `Your Mars stats: Age - ${this.marsAge}, Expected life - ${this.marsExp}, ${this.yearsLeft} ${this.marsAbs} years!`;
  }

  jupiter()  {
    this.factor = 11.86;
    this.jupiterAge = Math.round(10 * (this.earthAge * this.factor))/10;
    this.jupiterExp = Math.round(10 * (this.lifeExp * this.factor))/10;
    this.jupiterAbs = Math.abs(this.jupiterExp - this.jupiterAge);
    return `Your Jupiter stats: Age - ${this.jupiterAge}, Expected life - ${this.jupiterExp}, ${this.yearsLeft} ${this.jupiterAbs} years!`;
  }
};