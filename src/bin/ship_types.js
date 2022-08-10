const Ship = require('../classes/ship.js')

const Carrier = new Ship("Carrier", 5, [], false);
const Battleship = new Ship("Battleship", 4, [], false);
const Cruiser = new Ship("Cruiser", 3, [], false);
const Submarine = new Ship("Submarine", 3, [], false);
const Destroyer = new Ship("Destroyer", 2, [], false);

let allShips = [];
allShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer);

