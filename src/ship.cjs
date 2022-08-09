// // Back end build

// class Ship
// --
// type (e.g., destroyer, submarine etc)
// length
// hitLocation; location hit(num) -> num = hit location
// sunk?; isSunk() -> y/n based on total hit = length
// ship location???

class Ship {
    constructor(type, length, availableHitLocation, isSunk) {
        this.type = type; // STRING
        this.length = length; // INT
        this.availableHitLocation = availableHitLocation; // ARRAY
        this.isSunk = isSunk; // BOOL
    }

    // INT -> INT
    // Marks the given spot of the Ship as hit
    hit = (incomingHit) => {
        this.availableHitLocation.push(incomingHit);
    }
}

let allShips = []

const Carrier = new Ship("Carrier", 5, [], false);
const Battleship = new Ship("Battleship", 4, [], false);
const Cruiser = new Ship("Cruiser", 3, [], false);
const Submarine = new Ship("Submarine", 3, [], false);
const Destroyer = new Ship("Destroyer", 2, [], false);
allShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer);

Carrier.hit(3)
console.log(Carrier.availableHitLocation)


// Ship, INT -> BOOL
// Checks if the spot of the Ship was already hit

module.exports = Ship // webpack may be interfering with importing/exporting. Changed file to cjs for temp fix.

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