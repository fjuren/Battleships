const gameboard = require('../setup/createGameboard')
const Gameboard = require('../classes/gameboard')
const Players = require('../classes/players')
const Ship = require('../classes/ship')
const stringToShip = require('../gameflow_helpers/stringToShip')

const dumbAIMove = require('./dumbAIMove')

// const {Carrier, Battleship, Cruiser, Submarine, Destroyer} = require('../setup/createShips')
// var allShips = [];
// allShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer);

// this will ultimately go in placeShip.js
const player1 = new Players("Player 1", [])
const enemyGameboard = new Gameboard(gameboard)
const {
    Carrier,
    Battleship,
    Cruiser,
    Submarine,
    Destroyer
} = require('../setup/createShips')
const { concat } = require('lodash')

var allShips = [];
allShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer);


enemyGameboard.placeShip(Carrier, 5, 3, true)
enemyGameboard.placeShip(Cruiser, 1, 1, false)
enemyGameboard.placeShip(Battleship, 8, 6, false)
enemyGameboard.placeShip(Submarine, 2, 3, true)
enemyGameboard.placeShip(Destroyer, 7, 5, false)

const playerOneMove = (index1, index2) => {
    // check if there'as a winner. checkGameWinner.js placeholder

    if (!player1.playerAttack(index1, index2)) {
        let hitShip = stringToShip(enemyGameboard.gameboard[index1][index2])
        // set sunkStatus of the ship to true if it was hit enough times
        hitShip.isSunk()
        if (hitShip.sunkStatus) {
            console.log(`You sunk my ${hitShip.type}!`)
            // was this the last ship to sink? If so, it's game over
            if(enemyGameboard.allShipsSunk(allShips)) {
                console.log("Game over - GG")
            }
        } else {
            // contiue
        }

        dumbAIMove()

    } else {
        // 
    }
}

