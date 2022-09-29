const Ship = require('../classes/ship');

const Carrier = new Ship('Carrier', 5, [], false);
const Battleship = new Ship('Battleship', 4, [], false);
const Cruiser = new Ship('Cruiser', 3, [], false);
const Submarine = new Ship('Submarine', 3, [], false);
const Destroyer = new Ship('Destroyer', 2, [], false);
const computerCarrier = new Ship('computerCarrier', 5, [], false);
const computerBattleship = new Ship('computerBattleship', 4, [], false);
const computerCruiser = new Ship('computerCruiser', 3, [], false);
const computerSubmarine = new Ship('computerSubmarine', 3, [], false);
const computerDestroyer = new Ship('computerDestroyer', 2, [], false);

module.exports = {
  Carrier,
  Battleship,
  Cruiser,
  Submarine,
  Destroyer,
  computerCarrier,
  computerBattleship,
  computerCruiser,
  computerSubmarine,
  computerDestroyer,
};
