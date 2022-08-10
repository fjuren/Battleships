// // Back end build
// ship location???


class Ship {
    constructor(type, length, availableHitLocation, sunkStatus) {
        this.type = type; // STRING
        this.length = length; // INT
        this.availableHitLocation = availableHitLocation; // ARRAY
        this.sunkStatus = sunkStatus; // BOOL
    }

    // INT -> INT
    // Marks the given spot of the Ship as hit
    hit = (incomingHit) => {
        this.availableHitLocation.push(incomingHit);
    };

    // -> BOOL
    // determines whether a ship is sunk based on its length and availableHitLocation
    isSunk = () => {
        if (this.length == this.availableHitLocation.length) {
            this.sunkStatus = true;
        } else {
            this.sunkStatus = false;
        }
    };
};

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