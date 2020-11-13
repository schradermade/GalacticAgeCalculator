import { Fruit } from './../src/js/fruit.js';

describe('Fruit', () => {

  test('should correctly create a fruit object with three flavors', () => {
    let fruit1 = new Fruit("sweet","crisp","clean");
    expect(fruit1.flavor1).toEqual("sweet");
    expect(fruit1.flavor2).toEqual("crisp");
    expect(fruit1.flavor3).toEqual("clean");
  });

  test('should correctly concatenate all 3 parameters', () => {
    let fruit1 = new Fruit("sweet", "crisp", "clean");
    expect(fruit1.displayFlavors()).toBe("The flavors you chose are sweet, crisp, and clean.");
  })
  
});


