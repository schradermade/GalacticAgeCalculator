import { Age } from './../src/js/age.js';

describe('Age', () => {

  test('should correctly take in user age and desired life expectancy', () => {
    let userAge = new Age("35", "100");
    expect(userAge.earthAge).toEqual("35");
    expect(userAge.lifeExp).toEqual("100");
  });

  test('should correctly output users age and expected years left to live, refactored in Mercury years', () => {
    let mercuryStats = new Age("35", "100");
    expect(mercuryStats.mercuryAge()).toEqual("8.4");
    expect(mercuryStats.mercuryAge()).toEqual("24");
  });

});



/*
  test('should correctly concatenate all 3 parameters', () => {
    let fruit1 = new Fruit("sweet", "crisp", "clean");
    expect(fruit1.displayFlavors()).toBe("The flavors you chose are sweet, crisp, and clean.");
  })
  

*/
