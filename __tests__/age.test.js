import { Age } from './../src/js/age.js';

describe('Age', () => {

  test('should correctly take in user age and desired life expectancy', () => {
    let age1 = new Age("35", "100");
    expect(age1.earthYears).toEqual("35");
    expect(age1.lifeExp).toEqual("100");
  });
});



/*
  test('should correctly concatenate all 3 parameters', () => {
    let fruit1 = new Fruit("sweet", "crisp", "clean");
    expect(fruit1.displayFlavors()).toBe("The flavors you chose are sweet, crisp, and clean.");
  })
  

*/
