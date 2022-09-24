// const Gameboard = require('../classes/gameboard')
// const Players = require('../classes/players');
const {stringToAIShip, stringToShip} = require('../gameflow_helpers/stringToShip')
const playerOneBoard = require('../setup/playerOneGameboard')
const playerOneMove = require('../gameflow_helpers/playerOneMove')
const {renderAttackColoring} = require ('../styles/renderColoring')
// const humanGameboard = new Gameboard(playerOneBoard)
// const player2_AI = new Players("Player 2 - AI", [])

// const {
//     Carrier,
//     Battleship,
//     Cruiser,
//     Submarine,
//     Destroyer
// } = require('../setup/createShips')

// var playerShips = [];
// playerShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer);

// var randomIndex1 =  Math.floor(Math.random() * 10);
// var randomIndex2 =  Math.floor(Math.random() * 10);
// var randomIndex1 = 8
// var randomIndex2 = 2

// humanGameboard.placeShip(Cruiser, 5, 3, true)
// humanGameboard.placeShip(Carrier, 1, 1, false)
// humanGameboard.placeShip(Battleship, 8, 6, false)
// humanGameboard.placeShip(Submarine, 2, 3, true)
// humanGameboard.placeShip(Destroyer, 7, 5, false)

// console.log("Dumb AI's turn")
// console.log("Dumb AI attacks at 2 1")
const dumbAIMove = (randomIndex1, randomIndex2, board, ships) => {
        // ship hit by AI
        if (board.playerBoard[randomIndex1][randomIndex2] != 'X') {
            let hitShip = stringToShip(board.playerBoard[randomIndex1][randomIndex2])
            console.log(`BOOM! You hit player 1's ${hitShip.type}`)
            console.log([randomIndex1])
            console.log([randomIndex2])
            renderAttackColoring(randomIndex1, randomIndex2, 'p1', 'red')
            hitShip.isSunk()
            // check if sunk
            if (hitShip.sunkStatus) {
                console.log(`AI sunk player 1's ${hitShip.type}`)
                // was this the last ship to sink? `If so, it's game over
                if (board.allShipsSunk(ships)) {
                    console.log("Game over - GG")
                }
            } else {
                console.log('Human turn')
                // human turn
                // playerOneMove
            }

        } else if (board.playerBoard[randomIndex1][randomIndex2] === 'X') {
            console.log('Splash. You missed and made a big splash on the human gameboard')
            console.log('dumbAI moved: ' + [randomIndex1])
            console.log('dumbAI moved: ' + [randomIndex2])
            renderAttackColoring(randomIndex1, randomIndex2, 'p1', '#00b8ff')
            // human turn
        } else {
            console.log("error??")
        }
    }
    
module.exports = dumbAIMove

// dumbAIMove(2, 1, humanGameboard, playerShips)
// dumbAIMove(1, 1, humanGameboard, playerShips)
// dumbAIMove(1, 2, humanGameboard, playerShips)
// dumbAIMove(1, 3, humanGameboard, playerShips)
// dumbAIMove(1, 4, humanGameboard, playerShips)
// dumbAIMove(1, 5, humanGameboard, playerShips)


// dumbAIMove(5,3, humanGameboard, playerShips)
// dumbAIMove(6,3, humanGameboard, playerShips)
// dumbAIMove(7,3, humanGameboard, playerShips)

// dumbAIMove(8,6, humanGameboard, playerShips)
// dumbAIMove(8,7, humanGameboard, playerShips)
// dumbAIMove(8,8, humanGameboard, playerShips)
// dumbAIMove(8,9, humanGameboard, playerShips)

// dumbAIMove(2,3, humanGameboard, playerShips)
// dumbAIMove(3,3, humanGameboard, playerShips)
// dumbAIMove(4,3, humanGameboard, playerShips)
// dumbAIMove(5,2, humanGameboard, playerShips)

// dumbAIMove(7,5, humanGameboard, playerShips)
// dumbAIMove(7,6, humanGameboard, playerShips)

// console.log(humanGameboard)
// console.log(playerShips)

// humanGameboard
