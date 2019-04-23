const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaurs;
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('dippy', 'herbivore', 10);
    dinosaur3 = new Dinosaur('raptor', 'carnivore', 40);
    dinosaur4 = new Dinosaur('bronto', 'herbivore', 30);
    dinosaur5 = new Dinosaur('raptor', 'carnivore', 20);
    dinosaurs = [dinosaur1, dinosaur2, dinosaur3]
    park = new Park('Dino Emporium', 100, dinosaurs);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Dino Emporium");
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, dinosaurs);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur4);
    const expected = [dinosaur1, dinosaur2, dinosaur3, dinosaur4];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaur1);
    const expected = [dinosaur2, dinosaur3];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const expected = dinosaur1;
    const actual = park.mostPopularDinosaur();
    assert.strictEqual(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur5);
    const expected = [dinosaur3, dinosaur5]
    const actual = park.dinosaurBySpecies('raptor');
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur5);
    const expected = [dinosaur1, dinosaur2]
    park.removeDinosaurBySpecies('raptor');
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

});
