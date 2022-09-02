const Ship = require('../classes/ship.js')

// export const shipLengths = {
//     Carrier: 5,
//     Battleship: 4,
//     Cruiser: 3,
//     Submarine: 3,
//     Destroyer: 2
// }

// export const shipStartingAvailableHitLocation = {
//     Carrier: [],
//     Battleship: [],
//     Cruiser: [],
//     Submarine: [],
//     Destroyer: []
// }

// export const shipSunkStatus = {
//     Carrier: false,
//     Battleship: false,
//     Cruiser: false,
//     Submarine: false,
//     Destroyer: false
// }

// // array dict dict dict -> class
// // creates a unique instance of ships for each player
// const createPlayerShips = (typeOfShip, lengthOfShip, hitLocationOfShip, sunkStatusOfShip) => {
//         new Ship(ship, lengthOfShip[ship], hitLocationOfShip[ship], sunkStatusOfShip[ship])
// }


// createPlayerShips(shipTypes, shipLengths, shipStartingAvailableHitLocation, shipSunkStatus)

// Ship; type, length, availableHitLocation, sunkStatus

const Carrier = new Ship("Carrier", 5, [], false);
const Battleship = new Ship("Battleship", 4, [], false);
const Cruiser = new Ship("Cruiser", 3, [], false);
const Submarine = new Ship("Submarine", 3, [], false);
const Destroyer = new Ship("Destroyer", 2, [], false);
const AI_Carrier = new Ship("AI_Carrier", 5, [], false);
const AI_Battleship = new Ship("AI_Battleship", 4, [], false);
const AI_Cruiser = new Ship("AI_Cruiser", 3, [], false);
const AI_Submarine = new Ship("AI_Submarine", 3, [], false);
const AI_Destroyer = new Ship("AI_Destroyer", 2, [], false);

module.exports = {
    Carrier,
    Battleship,
    Cruiser,
    Submarine,
    Destroyer,
    AI_Carrier,
    AI_Battleship,
    AI_Cruiser,
    AI_Submarine,
    AI_Destroyer
}