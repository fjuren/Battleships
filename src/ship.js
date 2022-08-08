// function greetSailor(name){
//     return "hello " + name + " you're cute"
// }

// console.log(greetSailor("Katie"));

// module.exports = greetSailor


// // Back end build

// class Ship
// --
// type (e.g., destroyer, submarine etc)
// length
// hitLocation; location hit(num) -> num = hit location
// sunk?; isSunk() -> y/n based on total hit = length
// ship location???

class Ship {
    constructor(type, length, hitLocation, sunk) {
        this.type = type; // STRING
        this.length = length; // INT
        this.hitLocation = hitLocation; // INT
        this.sunk = sunk; // BOOL
    }
}

let allShips = []

const createCarrier = new Ship("Carrier", 5, [], false);
const createBattleship = new Ship("Battleship", 4, [], false);
const createCruiser = new Ship("Cruiser", 3, [], false);
const createSubmarine = new Ship("Submarine", 3, [], false);
const createDestroyer = new Ship("Destroyer", 2, [], false);
allShips.push(createCarrier, createBattleship, createCruiser, createSubmarine, createDestroyer);

console.log(allShips);

// class gameBoard
// --
// place ship on board coordinate -> class Ship?
// receiveAttack(x,y) -> hit? -> register as ship hit || register as ship miss
// Save missed attacks -> display
// allShipsSunk() -> y/n


// players (create a class for this?)
// --
// 2 player turn based or dumb AI?

// // Front end UI build