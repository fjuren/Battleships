// class gameBoard
// --
// place ship on board coordinate -> class Ship?
// receiveAttack(x,y) -> hit? -> register as ship hit || register as ship miss
// Save missed attacks -> display
// allShipsSunk() -> y/n
const gameboard = require('../bin/gameboard_setup')
const allShips = require('../bin/ship_types');

const Carrier = allShips[0] 
const Battleship = allShips[0] 
const Cruiser = allShips[0] 
const Submarine = allShips[0] 
const Destroyer = allShips[0] 


class Gameboard {
    constructor(gameboard) {
        this.gameboard = gameboard //ARRAY
    }

    // Ship number number bool -> Array
    // Randomly selects a point on the board to place a ship
    placeShip = (ship, index1, index2, isVertical) => {
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
    };
    //     if (isVertical === true) {
    //         // assuming wall isn't hit
    //         for (let i = 1; i < ship.length; i++) {
    //             gameboard[index1 + i][index2] = 0;
    //         }} 
    //     else 
    //     {
    //         for (let i = 1; i < ship.length; i++) {
    //             gameboard[index1][index2 + i] = 0;
    //         }
    //     }
    // }
    
    // placeShip = (xCoord, yCoord) => {
    //     gameboard[xCoord][yCoord] = 0
    // }

    // placeShip = (ship, isVertical) => {
    //     gameboard[1][1] = 0;
    //             // direction
    //     if (isVertical === true) {
    //         // assuming wall isn't hit
    //         for (let i = 1; i < ship.length; i++) {
    //             gameboard[1 + i][1] = 0;
    //         }} 
    //     else 
    //     {
    //         for (let i = 1; i < ship.length; i++) {
    //             gameboard[1][1 + i] = 0;
    //         }
    //     }
    // }
}

// console.log(gameboard)

module.exports = Gameboard

const newGame = new Gameboard(gameboard);

// newGame.placeShip(Carrier, 1, 1, false)
// newGame.placeShip(Battleship, 3, 4, true)
// newGame.placeShip(2, 1)
// newGame.placeShip(Carrier, true);
console.log(gameboard);
// console.log(newGame.placeShip(Carrier, gameboard[0][4], verticle));
