const gameboard = require('../setup/createGameboard')
const Gameboard = require('../classes/gameboard')
const Players = require('../classes/players')
const Ship = require('../classes/ship')
const stringToShip = require('../gameflow_helpers/stringToShip')

// const dumbAIMove = require('./dumbAIMove')


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
const dumbAIMove = require('./dumbAIMove')

var allShips = [];
allShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer);

enemyGameboard.placeShip(Carrier, 5, 3, true)
enemyGameboard.placeShip(Cruiser, 1, 1, false)
enemyGameboard.placeShip(Battleship, 8, 6, false)
enemyGameboard.placeShip(Submarine, 2, 3, true)
enemyGameboard.placeShip(Destroyer, 7, 5, false)

// enemyGameboard

const playerOneMove = (index1, index2) => {
    if (player1.playerAttack(index1, index2) === undefined) {
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
            console.log('AI turn')
            // dumbAIMove
        }
    } else if (enemyGameboard.gameboard[index1][index2] == 'X') {
        console.log('Splash. You missed and made a big splash')
        // dumbAIMove

    } else {
        console.log('try again')
    }
}

module.exports = playerOneMove

playerOneMove(1, 1)
// playerOneMove(1, 5)
enemyGameboard
// dumbAIMove()
// playerOneMove(1, 1)
// playerOneMove(1, 2)
// playerOneMove(1, 3)

// playerOneMove(5,3)
// playerOneMove(6,3)
// playerOneMove(7,3)
// playerOneMove(8,3)
// playerOneMove(9,3)

// playerOneMove(8,6)
// playerOneMove(8,7)
// playerOneMove(8,8)
// playerOneMove(8,9)

// playerOneMove(2,3)
// playerOneMove(3,3)
// playerOneMove(4,3)
// playerOneMove(5,2)

// playerOneMove(7,5)
// playerOneMove(7,6)