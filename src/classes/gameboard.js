class Gameboard {
    constructor(playerBoard) {
        this.playerBoard = playerBoard //ARRAY
    }

    // Ship number number bool -> Array
    // Randomly selects a point on the board to place a ship
    placeShip = (ship, index1, index2, isVertical) => {
        if (!this.checkWallHit(ship, index1, index2, isVertical) || !this.checkOverlap(ship, index1, index2, isVertical)) {
            // invalid ship placement
            return false
            // // if functionality is built to allow a user to place ship themselves, use this
            // console.log(`Can't place ${ship.type}. Please find another spot`)
        } else {
            // ship starting position
            this.playerBoard[index1][index2] = ship.type;
            for (let i = 1; i < ship.length; i++) {
                // direction
                if (isVertical === true) {
                    this.playerBoard[index1 + i][index2] = ship.type;
                } else {
                    this.playerBoard[index1][index2 + i] = ship.type;
                }
            }
        }
    };
    // Ship number number bool -> bool
    // Checks if the ship's board placement hits the wall
    checkWallHit = (ship, index1, index2, isVertical) => {
        if (isVertical === true) {
            if (index1 + ship.length > 10) {
                return false
            } else {
                return true
            }
        }
        if (isVertical === false) {
            if (index2 + ship.length > 10) {
                return false
            } else {
                return true
            }
        }
    }

    // Ship number number bool -> bool
    // Checks if the ship's board placement overlaps the placement of a previously placed ship
    checkOverlap = (ship, index1, index2, isVertical) => {
        var counter = 0
        if (isVertical === true) {
            for (let i = 0; i < ship.length; i++) {
                if (this.playerBoard[index1 + i][index2] != null) {
                    // invalid placement
                    counter++
                }
            }
        }
        if (isVertical === false) {
            for (let i = 0; i < ship.length; i++) {
                if (this.playerBoard[index1][index2 + i] != null) {
                    // invalid placement
                    counter++
                }
            }
        }
        if (counter != 0) {
            return false
        } else {
            return true
        }
    }
    // number number ships-> ship hit OR this.playerBoard hit
    // Records whether the shot hits a ship or misses a ship
    receiveAttack = (index1, index2, ships) => {
        var shipHit = []
        // var shipName = 
        for (let i = 0; i < ships.length; i++) {
            if (this.playerBoard[index1][index2] === ships[i]['type']) {
                shipHit.push(ships[i])
                break
            }
        }
        if (shipHit[0] != null) {
            return shipHit[0].hit([index1, index2])
        } else {
            return this.playerBoard[index1][index2] = "X"
        }
    }
    // ship classes -> bool
    // identifies whether the ship had enough direct hits and has sunk as a result, marking Ship.sunkStatus as true if so. 
    allShipsSunk = (ships) => {
        var sunkShips = []

        for (let i = 0; i < ships.length; i++) {
            if (ships[i].sunkStatus == true && !sunkShips.includes(ships[i])) {
                sunkShips.push(ships[i])
            }
        }
        if (sunkShips.length == 5) {
            return true // all ships have sunk
        } else {
            return false // not all ships have sunk
        }
    }

    //
    // clears the ships from the gameboard
    clearBoard = () => {
        this.playerBoard = [ 
            [ null, null, null, null, null, null, null, null, null, null ],
            [ null, null, null, null, null, null, null, null, null, null ],
            [ null, null, null, null, null, null, null, null, null, null ],
            [ null, null, null, null, null, null, null, null, null, null ],
            [ null, null, null, null, null, null, null, null, null, null ],
            [ null, null, null, null, null, null, null, null, null, null ],
            [ null, null, null, null, null, null, null, null, null, null ],
            [ null, null, null, null, null, null, null, null, null, null ],
            [ null, null, null, null, null, null, null, null, null, null ],
            [ null, null, null, null, null, null, null, null, null, null ] ]
    }
};

module.exports = Gameboard