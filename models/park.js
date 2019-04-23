const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  let pos = this.dinosaurs.indexOf(dinosaur);
  if (pos >= 0 ) {
    var removedItem = this.dinosaurs.splice(pos, 1);
  };
};

Park.prototype.mostPopularDinosaur = function () {
  var mostPopularDinosaur = this.dinosaurs[0]
  for (var dinosaur of this.dinosaurs) {
    if (dinosaur.guestsAttractedPerDay > mostPopularDinosaur.guestsAttractedPerDay) {
      mostPopularDinosaur = dinosaur;
    }
  };
  return mostPopularDinosaur;
};

Park.prototype.dinosaurBySpecies = function (species) {
  // var dinosaurs = []
  // for (var dinosaur of this.dinosaurs) {
  //   if (dinosaur.species == species) {
  //     dinosaurs.push(dinosaur);
  //   }
  // };
  // refactored using filter
  let dinosaurs = this.dinosaurs.filter(dinosaur => dinosaur.species == species);
  return dinosaurs;
};

Park.prototype.visitorsPerDay = function () {
  var visitors = 0;
  for (var dinosaur of this.dinosaurs) {
      visitors += dinosaur.guestsAttractedPerDay;
    };
  return visitors;
};

Park.prototype.visitorsPerYear = function () {
  let visitors = this.visitorsPerDay() * 365;
  return visitors;
};

Park.prototype.ticketSalesPerYear = function () {
  let visitors = this.visitorsPerYear();
  let ticketSales = visitors * this.ticketPrice;
  return ticketSales;
};

Park.prototype.removeDinosaurBySpecies = function (species) {
  let result = this.dinosaurs.filter(dinosaur => dinosaur.species != species);
  this.dinosaurs = result;
};

Park.prototype.dietObject = function () {
  var diets = {};
  for (var dinosaur of this.dinosaurs) {
      let diet = dinosaur.diet;
      if (diets[diet] >= 0) {
        diets[diet] += 1;
      } else {
        diets[diet] = 1
      };
    };
  return diets;
};

module.exports = Park;