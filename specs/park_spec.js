const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaurs;
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Dippy', 'herbivore', 10);
    dinosaur3 = new Dinosaur('raptor', 'carnivore', 40);
    dinosaurs = [dinosaur1]
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
    park.addDinosaur(dinosaur2);
    const expected = [dinosaur1, dinosaur2];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    const expected = [dinosaur2];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const expected = dinosaur1;
    const actual = park.mostPopularDinosaur();
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
