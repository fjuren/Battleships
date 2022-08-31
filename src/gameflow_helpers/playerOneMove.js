const Gameboard = require('../classes/gameboard')
const Players = require('../classes/players')
const stringToShip = require('../gameflow_helpers/stringToShip')
const playerTwoBoard = require('../setup/playerTwoGameboard')
const dumbAIMove = require('./dumbAIMove')
const enemyGameboard = new Gameboard(playerTwoBoard)
const player1 = new Players("Player 1", [])

const {
    Carrier,
    Battleship,
    Cruiser,
    Submarine,
    Destroyer
} = require('../setup/createShips')

var allShips = [];
allShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer);

enemyGameboard.placeShip(Carrier, 5, 3, true)
enemyGameboard.placeShip(Cruiser, 1, 1, false)
enemyGameboard.placeShip(Battleship, 8, 6, false)
enemyGameboard.placeShip(Submarine, 2, 3, true)
enemyGameboard.placeShip(Destroyer, 7, 5, false)

console.log("Player 1's turn")
console.log("Player 1 attacks at 0 1")
const playerOneMove = (index1, index2, board) => {
    if (player1.playerAttack(index1, index2, board) === undefined) {
        let hitShip = stringToShip(playerTwoBoard[index1][index2])
        console.log(`BOOM! You hit the AI's ${hitShip.type}`)
        // set sunkStatus of the ship to true if it was hit enough times
        hitShip.isSunk()
        if (hitShip.sunkStatus) {
            console.log(`Player 1 sunk AI's ${hitShip.type}`)
            // was this the last ship to sink? If so, it's game over
            if(enemyGameboard.allShipsSunk(allShips)) {
                console.log("Game over - GG")
            }
        } else {
            // contiue
            console.log('AI turn')
            dumbAIMove
        }
    } else if (playerTwoBoard[index1][index2] == 'X') {
        console.log('Splash. You missed and made a big splash on the AI gameboard')
        dumbAIMove

    } else {
        console.log('try again')
    }
}

module.exports = playerOneMove

// playerOneMove(0, 1, enemyGameboard)
// playerOneMove(1, 1, enemyGameboard)
// playerOneMove(1, 2, enemyGameboard)
// playerOneMove(1, 3, enemyGameboard)
// playerOneMove(1, 5, enemyGameboard)
// console.log(enemyGameboard)
// console.log(allShips)
// dumbAIMove()

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