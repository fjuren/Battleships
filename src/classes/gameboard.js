// class gameBoard
// --
// place ship on board coordinate -> class Ship?
// receiveAttack(x,y) -> hit? -> register as ship hit || register as ship miss
// Save missed attacks -> display
// allShipsSunk() -> y/n
const gameboard = require('../bin/gameboard_setup')
const allShips = require('../bin/ship_types');
const Ship = require('./ships');

const Carrier = new Ship("Carrier", 5, [], false);
const Battleship = new Ship("Battleship", 4, [], false);
const Cruiser = new Ship("Cruiser", 3, [], false);
const Submarine = new Ship("Submarine", 3, [], false);
const Destroyer = new Ship("Destroyer", 2, [], false);
// Data definitions for placeShip

// // ship
// allShips[0] = Carrier
// allShips[1] = Battleship
// allShips[2] = Cruiser
// allShips[3] = Submarine
// allShips[4] = Destroyer

// // position
// gameboard[][]

class Gameboard {
    constructor(gameboard) {
        this.gameboard = gameboard //ARRAY
    }

    // Ship number number bool -> Array
    // Randomly selects a point on the board to place a ship
    placeShip = (ship, xCoord, yCoord, isVertical) => {
        // ship starting position
        gameboard[xCoord][yCoord] = 0;
        // direction
        if (isVertical === true) {
            // assuming wall isn't hit
            for (let i = 1; i < ship.length; i++) {
                gameboard[xCoord + i][yCoord] = 0;
            }} 
        else 
        {
            for (let i = 1; i < ship.length; i++) {
                gameboard[xCoord][yCoord + i] = 0;
            }
        }
    }
    
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

const newGame = new Gameboard(gameboard);

newGame.placeShip(Carrier, 1, 1, true)
newGame.placeShip(Battleship, 9, 9, false)
// newGame.placeShip(2, 1)
// newGame.placeShip(Carrier, true);
console.log(gameboard);
// console.log(newGame.placeShip(Carrier, gameboard[0][4], verticle));
