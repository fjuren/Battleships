// class gameBoard
// --
// place ship on board coordinate -> class Ship?
// receiveAttack(x,y) -> hit? -> register as ship hit || register as ship miss
// Save missed attacks -> display
// allShipsSunk() -> y/n
const gameboard = require('../bin/gameboard_setup')

class Gameboard{
    constructor(x, y) {
        this.x = x // INT (x-coordinate)
        this.y = y // INT (y-coordinate)
    }

    // INT (starting x-coordinate)
    placeShip = (x, y)
}