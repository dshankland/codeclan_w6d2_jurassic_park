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

module.exports = Park;