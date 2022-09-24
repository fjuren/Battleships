// const Gameboard = require('../classes/gameboard')
// const Players = require('../classes/players')
const {stringToAIShip, stringToShip} = require('../gameflow_helpers/stringToShip')
const playerTwoBoard = require('../setup/playerTwoGameboard')
const dumbAIMove = require('./dumbAIMove')
const {renderAttackColoring} = require('../styles/renderColoring')
// const enemyGameboard = new Gameboard(playerTwoBoard)
// const player1 = new Players("Player 1", [])

// const {
//     AI_Carrier,
//     AI_Battleship,
//     AI_Cruiser,
//     AI_Submarine,
//     AI_Destroyer
// } = require('../setup/createShips')

// var AIShips = [];
// AIShips.push(AI_Carrier, AI_Battleship, AI_Cruiser, AI_Submarine, AI_Destroyer);

// enemyGameboard.placeShip(AI_Carrier, 5, 3, true)
// enemyGameboard.placeShip(AI_Cruiser, 1, 1, false)
// enemyGameboard.placeShip(AI_Battleship, 8, 6, false)
// enemyGameboard.placeShip(AI_Submarine, 2, 3, true)
// enemyGameboard.placeShip(AI_Destroyer, 7, 5, false)

// console.log("Player 1's turn")
// console.log("Player 1 attacks at 0 1")

// Num Num class array -> ??
// complete the move set of player 1
const playerOneMove = (playerClass, index1, index2, board, ships) => {
    if (playerClass.playerAttack(index1, index2, board, ships) === undefined) {
        let hitShip = stringToAIShip(board.playerBoard[index1][index2])
        renderAttackColoring(index1, index2, 'p2', 'red')
        document.getElementById('messaging').innerHTML = `BOOM! You hit the computer's ${hitShip.type.slice(8)}`
        // set sunkStatus of the ship to true if it was hit enough times
        hitShip.isSunk()
        if (hitShip.sunkStatus) {
            document.getElementById('messaging').innerHTML = `You sunk the computer's ${hitShip.type.slice(8)}`
            // was this the last ship to sink? If so, it's game over
            if(board.allShipsSunk(ships)) {
                console.log("Game over - GG")
            }
        } else {
            // contiue
            console.log('AI turn')
            // dumbAIMove
        }
    } else if (playerTwoBoard[index1][index2] == 'X') {
        renderAttackColoring(index1, index2, 'p2', '#00b8ff')
        document.getElementById('messaging').innerHTML = 'Splash! You missed and made a big splash'
        // dumbAIMove
    } else {
        console.log('try again')
    }
}

module.exports = playerOneMove

// playerOneMove(0, 1, enemyGameboard, AIShips)
// playerOneMove(1, 1, enemyGameboard, AIShips)
// playerOneMove(1, 2, enemyGameboard, AIShips)
// playerOneMove(1, 3, enemyGameboard, AIShips)
// playerOneMove(1, 5, enemyGameboard, AIShips)

// playerOneMove(5,3, enemyGameboard, AIShips)
// playerOneMove(6,3, enemyGameboard, AIShips)
// playerOneMove(7,3, enemyGameboard, AIShips)
// playerOneMove(8,3, enemyGameboard, AIShips)
// playerOneMove(9,3, enemyGameboard, AIShips)

// playerOneMove(8,6, enemyGameboard, AIShips)
// playerOneMove(8,7, enemyGameboard, AIShips)
// playerOneMove(8,8, enemyGameboard, AIShips)
// playerOneMove(8,9, enemyGameboard, AIShips)

// playerOneMove(2,3, enemyGameboard, AIShips)
// playerOneMove(3,3, enemyGameboard, AIShips)
// playerOneMove(4,3, enemyGameboard, AIShips)
// playerOneMove(5,2, enemyGameboard, AIShips)

// playerOneMove(7,5, enemyGameboard, AIShips)
// playerOneMove(7,6, enemyGameboard, AIShips)
// console.log(enemyGameboard)
// console.log(AIShips)