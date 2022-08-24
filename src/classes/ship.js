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