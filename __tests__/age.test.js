import { Age } from './../src/js/age.js';

describe('Age', () => {

  test('should correctly take in user age and desired life expectancy', () => {
    let userAge = new Age(35, 100);
    expect(userAge.earthAge).toEqual(35);
    expect(userAge.lifeExp).toEqual(100);
  });

  test('should correctly output: 1. users age 2. user life expectancy 3. years left, all refactored in Mercury years', () => {
    let mercuryStats = new Age(35, 100);
    expect(mercuryStats.mercury()).toEqual("Your Mercury stats: Age - 8.4, Expected life - 24, Years left to live - 15.6");
  });

  test('should correctly output: 1. users age 2. user life expectancy 3. years left, all refactored in Venus years', () => {
    let venusStats = new Age(35, 100);
    expect(venusStats.venus()).toEqual("Your Venus stats: Age - 21.7, Expected life - 62, Years left to live - 40.3");
  });
  
});



/*
  test('should correctly concatenate all 3 parameters', () => {
    let fruit1 = new Fruit("sweet", "crisp", "clean");
    expect(fruit1.displayFlavors()).toBe("The flavors you chose are sweet, crisp, and clean.");
  })
  

*/
