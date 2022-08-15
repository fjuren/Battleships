// class gameBoard
// --
// receiveAttack(x,y) -> hit? -> register as ship hit || register as board hit (ie ship miss)
// Save missed attacks -> display
// allShipsSunk() -> y/n
const gameboard = require('../bin/gameboard_setup')
const allShips = require('../bin/ship_types');
const Ship = require('./ships');

const Carrier = allShips[0]
const Battleship = allShips[1]
const Cruiser = allShips[2]
const Submarine = allShips[3]
const Destroyer = allShips[4]


class Gameboard {
    constructor(gameboard) {
        this.gameboard = gameboard //ARRAY
    }

    // Ship number number bool -> Array
    // Randomly selects a point on the board to place a ship
    placeShip = (ship, index1, index2, isVertical) => {
        if (!this.checkWallHit(ship, index1, index2, isVertical) || !this.checkOverlap(ship, index1, index2, isVertical)) {
            console.log("can't place ship. Either wall hit or overlap or both happened")
        } else {
            // ship starting position
            gameboard[index1][index2] = ship.type;
            for (let i = 1; i < ship.length; i++) {
                // direction
                if (isVertical === true) {
                    gameboard[index1 + i][index2] = ship.type;
                } else {
                    gameboard[index1][index2 + i] = ship.type;
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
                if (gameboard[index1 + i][index2] != null) {
                    // invalid placement
                    counter++
                }
            } 
        }
        if (isVertical === false) {
            for (let i = 0; i < ship.length; i++) {
                if (gameboard[index1][index2 + i] != null) {
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
    // number number -> boolean (true if ship hit, false if board hit/ship miss)
    // Records whether the shot hits a ship or misses a ship
    receiveAttack = (index1, index2) => {
        var shipHit = 0
        for (let i = 0; i < allShips.length; i++) {
            if (gameboard[index1][index2] === allShips[i]['type']) {
                shipHit++
                return true
            }
        }
        if (shipHit != 0) {
            return true
        } else {
            return false
        }
    }
};

module.exports = Gameboard

const newGame = new Gameboard(gameboard);