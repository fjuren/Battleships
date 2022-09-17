// FOLDER FOR GAME LOOP

require('./styles.css')

// require('lodash');
const Gameboard = require('./classes/gameboard');
const Players = require('./classes/players');


// import './ship.js';
const gameboardOne = require('./setup/playerOneGameboard')
const gameboardTwo = require('./setup/playerTwoGameboard')
const { Carrier, Battleship, Cruiser, Submarine, Destroyer, computerCarrier, computerBattleship, computerCruiser, computerSubmarine,  computerDestroyer } = require('./setup/createShips');

const player1 = new Players('Player 1 - Human', [])
const player2 = new Players('Player 2 - Computer', [])
const player1Gameboard = new Gameboard(gameboardOne)
const player2Gameboard = new Gameboard(gameboardTwo)

const humanShips = []
humanShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer)
const computerShips = []
computerShips.push(computerCarrier, computerBattleship, computerCruiser, computerSubmarine, computerDestroyer);

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

// randomly selects position for ships

const randomtempShipPlacement = () => {
  var randomIndex1 =  Math.floor(Math.random() * 10);
  var randomIndex2 =  Math.floor(Math.random() * 10);
  tempGameboard = new Gameboard(gameboardOne)

  humanShips.forEach(ship => {
    var randomAxis = Math.random() < 0.5
    while (tempGameboard.placeShip(ship, randomIndex1, randomIndex2, randomAxis) == false) {
      randomIndex1 =  Math.floor(Math.random() * 10);
      randomIndex2 =  Math.floor(Math.random() * 10);
    }

  });
  return tempGameboard
}
console.log(randomtempShipPlacement())


// shows rendering of temporary ship placement. Requires confirmation

// document.getElementById('p1-col3').getElementsByClassName('p1-row')[5].style.backgroundColor = 'red'