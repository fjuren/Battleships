// class gameBoard
// --
// receiveAttack(x,y) -> hit? -> register as ship hit || register as board hit (ie ship miss)
// Save missed attacks -> display
// allShipsSunk() -> y/n
const gameboard = require('../bin/gameboard_setup')
const Ship = require('./ships');

const {Carrier, Battleship, Cruiser, Submarine, Destroyer} = require('../bin/ship_types')
var allShips = [];
allShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer);


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
    // number number -> ship hit OR gameboard hit
    // Records whether the shot hits a ship or misses a ship
    receiveAttack = (index1, index2) => {
        var shipHit = []
        // var shipName = 
        for (let i = 0; i < allShips.length; i++) {
            if (gameboard[index1][index2] === allShips[i]['type']) {
                shipHit.push(allShips[i])
                break
            }
        }
        if (shipHit[0] != null) {
            // shipHit[0].hit([index1, index2])
            return shipHit[0].hit([index1, index2])
        } else {
            return gameboard[index1][index2] = "X"
        }
    }
};

module.exports = Gameboard

const newGame = new Gameboard(gameboard);

// newGame.receiveAttack(6, 2)
// // console.log(Carrier)

// console.log(allShips[0]['type'])
// console.log(Carrier.type)

// newGame.placeShip(Submarine, 2, 3, true)
//     newGame.receiveAttack(1, 1)
//     newGame.receiveAttack(9, 9) 
    
//         console.log(gameboard)
        // expect(gameboard).toStrictEqual([
        //     [null, null, null, null, null, null, null, null, null, null],
        //     [null, "X", null, null, null, null, null, null, null, null],
        //     [null, null, null, "Submarine", null, null, null, null, null, null],
        //     [null, null, null, "Submarine", null, null, null, null, null, null],
        //     [null, null, null, "Submarine", null, null, null, null, null, null],
        //     [null, null, null, null, null, null, null, null, null, null],
        //     [null, null, null, null, null, null, null, null, null, null],
        //     [null, null, null, null, null, null, null, null, null, null],
        //     [null, null, null, null, null, null, null, null, null, null],
        //     [null, null, null, null, null, null, null, null, null, "X"],
// WORKS
// newGame.placeShip(Destroyer, 6, 2, false)
// newGame.receiveAttack(6, 2)
// newGame.receiveAttack(6, 3)
// console.log(Destroyer['availableHitLocation'])
// console.log(Destroyer)
// console.log(gameboard)