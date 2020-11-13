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

  test('should correctly output: 1. users age 2. user life expectancy 3. years left, all refactored in Mars years', () => {
    let marsStats = new Age(35, 100);
    expect(marsStats.mars()).toEqual("Your Mars stats: Age - 65.8, Expected life - 188, Years left to live - 122.2");
  });

  test('should correctly output: 1. users age 2. user life expectancy 3. years left, all refactored in Jupiter years', () => {
    let jupiterStats = new Age(35, 100);
    expect(jupiterStats.jupiter()).toEqual("Your Jupiter stats: Age - 415.1, Expected life - 1186, Years left to live - 770.9");
  });

  test('should correctly assign dynamic value to this.yearsLeft, depending on if users age is below or beyond the expected life', () => {
    let yearsDynamic = new Age(35, 100);
    expect(yearsDynamic.expectYears()).toEqual("Years left to live - 65");
  });
});



/*
  test('should correctly concatenate all 3 parameters', () => {
    let fruit1 = new Fruit("sweet", "crisp", "clean");
    expect(fruit1.displayFlavors()).toBe("The flavors you chose are sweet, crisp, and clean.");
  })
  

*/
