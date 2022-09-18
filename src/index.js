// FOLDER FOR GAME LOOP

require('./styles.css')

const renderTempBoard = require('./gameflow_helpers/placeRandShips')
// require('lodash');

const Players = require('./classes/players');


// import './ship.js';
const gameboardOne = require('./setup/playerOneGameboard')
const gameboardTwo = require('./setup/playerTwoGameboard')

const player1 = new Players('Player 1 - Human', [])
const player2 = new Players('Player 2 - Computer', [])
// const player1Gameboard = new Gameboard(gameboardOne)
// const player2Gameboard = new Gameboard(gameboardTwo)


renderTempBoard()

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

