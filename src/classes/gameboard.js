// class gameBoard
// --
// receiveAttack(x,y) -> hit? -> register as ship hit || register as ship miss
// Save missed attacks -> display
// allShipsSunk() -> y/n
const gameboard = require('../bin/gameboard_setup')
const allShips = require('../bin/ship_types');

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
        if (this.checkOverlap(ship, index1, index2, isVertical) === false) {
            console.log("can't place ship due to overlap")
        } else {
            console.log("no overlap");
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
        console.log("ran")
    };
    // 
    // Checks if the ship's board placement hits the wall
    // checkWallHit = 

    // 
    // Checks if the ship's board placement overlaps the placement of a previously placed ship
    // 5 , 4 
    checkOverlap = (ship, index1, index2, isVertical) => {
        var counter = 0
        if (isVertical === true) {
            for (let i = 0; i < ship.length; i++) {
                if (gameboard[index1 + i][index2] != null) {
                    // invalid placement
                    counter++
                }
            }
        } if (isVertical === false) {
            for (let i = 0; i < ship.length; i++) {
                if (gameboard[index1][index2 + i] != null) {
                    // invalid placement
                    counter++
                }
            }
        } if (counter != 0) {
            return false // overlap found
        } else {
            return true // no overlap
        }
    } 
};

// console.log(gameboard)

module.exports = Gameboard

const newGame = new Gameboard(gameboard);

// console.log(newGame.placeShip(Carrier, 0, 4, false));
// console.log(gameboard);
// console.log(newGame.checkOverlap(Carrier, 0, 4, false))
// newGame.placeShip(Cruiser, 5, 2, true)
// newGame.checkOverlap(Cruiser, 5, 2, true)
// console.log(newGame.checkOverlap(Cruiser, 0, 5, true))
// expect(verticalShipPlacement.checkOverlap(Cruiser, 5, 2, true)).toBe(false)
// expect(verticalShipPlacement.checkOverlap(Cruiser, 6, 4, true)).toBe(false)

// newGame.placeShip(Submarine, 7, 2, false)
// console.log(gameboard);
// console.log(newGame.checkOverlap(Battleship, 5, 4, true))

// newGame.placeShip(Battleship, 5, 4, true);
// console.log(gameboard);
// console.log(newGame.checkOverlap(Battleship, 5, 4, true))

// newGame.placeShip(Battleship, 4, 5, true)
// // newGame.checkOverlap(Submarine, 1, 5, false)
// // console.log(newGame.checkOverlap(Submarine, 1, 5, false))
// // console.log(newGame.checkOverlap(Submarine, 4, 5, false))
// newGame.placeShip(Submarine, 4, 5, false)

// console.log(gameboard);
// newGame.placeShip(Destroyer, 0, 4, true)
// console.log(newGame.checkOverlap(Destroyer, 0, 4, true))
// console.log(gameboard);
// newGame.placeShip(2, 1)
// newGame.placeShip(Carrier, true);
// console.log(newGame.placeShip(Carrier, gameboard[0][4], verticle));