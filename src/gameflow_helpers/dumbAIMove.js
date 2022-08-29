// const playerOneMove = require('../gameflow_helpers/playerOneMove')
const gameboard = require('../setup/createGameboard')
const Gameboard = require('../classes/gameboard')
const Players = require('../classes/players');
const stringToShip = require('../gameflow_helpers/stringToShip')
// const playerOneMove = require('../gameflow_helpers/playerOneMove')

const humanGameboard = new Gameboard(gameboard)
const player2_AI = new Players("Player 2 - AI", [])

// const enemyGameboard = new Gameboard(gameboard)
const {
    Carrier,
    Battleship,
    Cruiser,
    Submarine,
    Destroyer
} = require('../setup/createShips')

var allShips = [];
allShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer);

var randomIndex1 =  Math.floor(Math.random() * 10);
var randomIndex2 =  Math.floor(Math.random() * 10);
// var randomIndex1 = 8
// var randomIndex2 = 2

humanGameboard.placeShip(Cruiser, 5, 3, true)
humanGameboard.placeShip(Carrier, 1, 1, false)
humanGameboard.placeShip(Battleship, 8, 6, false)
humanGameboard.placeShip(Submarine, 2, 3, true)
humanGameboard.placeShip(Destroyer, 7, 5, false)

const dumbAIMove = (randomIndex1, randomIndex2) => {
        // check if there's a winner (checkGameWinner.js)
        player2_AI.dumbAIAttack(randomIndex1, randomIndex2)
        // ship hit by AI
        if (humanGameboard.gameboard[randomIndex1][randomIndex2] != 'X') {
            let hitShip = stringToShip(humanGameboard.gameboard[randomIndex1][randomIndex2])
            console.log(`BOOM! You hit my ${hitShip.type}`)
            hitShip.isSunk()
            // check if sunk
            if (hitShip.sunkStatus) {
                console.log(`AI sunk my ${hitShip.type}`)
                // was this the last ship to sink? If so, it's game over
                if (humanGameboard.allShipsSunk(allShips)) {
                    console.log("Game over - GG")
                }
            } else {
                console.log('Human turn')
                // human turn
            }

        } else if (humanGameboard.gameboard[randomIndex1][randomIndex2] === 'X') {
            console.log('Splash. You missed and made a big splash')
            // human turn
        } else {
            console.log("error??")
        }
    }

// dumbAIMove(2, 1)
// dumbAIMove(1, 1)
// dumbAIMove(1, 2)
// dumbAIMove(1, 3)
// dumbAIMove(1, 4)
// dumbAIMove(1, 5)

// dumbAIMove(5,3)
// dumbAIMove(6,3)
// dumbAIMove(7,3)

// dumbAIMove(8,6)
// dumbAIMove(8,7)
// dumbAIMove(8,8)
// dumbAIMove(8,9)

// dumbAIMove(2,3)
// dumbAIMove(3,3)
// dumbAIMove(4,3)
// dumbAIMove(5,2)

// dumbAIMove(7,5)
// dumbAIMove(7,6)


humanGameboard

module.exports = dumbAIMove