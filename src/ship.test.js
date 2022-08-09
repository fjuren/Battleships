// import Ship from './ship.js';
const Ship = require('./ship')

// class Ship {
//     constructor(type, length, availableHitLocation, isSunk) {
//         this.type = type; // STRING
//         this.length = length; // INT
//         this.availableHitLocation = availableHitLocation; // ARRAY
//         this.isSunk = isSunk; // BOOL
//     }

//     // Ship, INT -> INT
//     // Marks the given spot of the Ship as hit
//     hit = (incomingHit) => {
//         this.availableHitLocation.push(incomingHit);
//     }
// }

// let allShips = []

// const Carrier = new Ship("Carrier", 5, [], false);
// // const Battleship = new Ship("Battleship", 4, [], false);
// // const Cruiser = new Ship("Cruiser", 3, [], false);
// // const Submarine = new Ship("Submarine", 3, [], false);
// // const Destroyer = new Ship("Destroyer", 2, [], false);
// // allShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer);
// allShips.push(Carrier);

describe('Ship function testing', () => {
    let CarrierTesting;
    CarrierTesting = new Ship("Carrier", 5, [], false);
    test('Ship should receive a hit and the number should be appended', () => {
        CarrierTesting.hit(3)
        expect(CarrierTesting.availableHitLocation).toEqual([3])
    });
});