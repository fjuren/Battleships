// // Back end build
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

// Carrier.hit(3)
// console.log(Carrier.availableHitLocation)


// Ship, INT -> BOOL
// Checks if the spot of the Ship was already hit

module.exports = Ship 

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