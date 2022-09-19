require('./styles.css')
const Players = require('./classes/players');
const Gameboard = require('./classes/gameboard');

const tempBoardSelection = require('./setup/playerOneGameboard')

const { Carrier, Battleship, Cruiser, Submarine, Destroyer, computerCarrier, computerBattleship, computerCruiser, computerSubmarine,  computerDestroyer } = require('./setup/createShips');
const humanShips = []
humanShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer)
const computerShips = []
computerShips.push(computerCarrier, computerBattleship, computerCruiser, computerSubmarine, computerDestroyer);


const renderTempBoard = require('./gameflow_helpers/placeRandShips')

// gamebaords
const gameboardOne = require('./setup/playerOneGameboard')
const gameboardTwo = require('./setup/playerTwoGameboard')
// players
const player1 = new Players('Player 1 - Human', [])
const player2 = new Players('Player 2 - Computer', [])
// temporary board for rendering purposes
var temp = new Gameboard(tempBoardSelection)
// player boards
const player1Gameboard = new Gameboard(gameboardOne)
const player2Gameboard = new Gameboard(gameboardTwo)


const randBtn = document.getElementById("randBtn")
randBtn.addEventListener("click", () => {
    // player1Gameboard.clearBoard();
    renderTempBoard(temp, humanShips);
})

// // need to build functionality for player to place ships
// player1Gameboard.placeShip(Cruiser, 5, 3, true)
// player1Gameboard.placeShip(Carrier, 1, 1, false)
// player1Gameboard.placeShip(Battleship, 8, 6, false)
// player1Gameboard.placeShip(Submarine, 2, 3, true)
// player1Gameboard.placeShip(Destroyer, 7, 5, false)

// player2Gameboard.placeShip(computerCarrier, 5, 3, true)
// player2Gameboard.placeShip(computerCruiser, 1, 1, false)
// player2Gameboard.placeShip(computerBattleship, 8, 6, false)
// player2Gameboard.placeShip(computerSubmarine, 2, 3, true)
// player2Gameboard.placeShip(computerDestroyer, 7, 5, false)

// Confirm temp ship placement

