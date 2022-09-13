// FOLDER FOR GAME LOOP

// import _ from 'lodash';
import Gameboard from './classes/gameboard';
import Players from './classes/players';
import './styles.css';
// import './ship.js';
const gameboardOne = require('./setup/playerOneGameboard')
const gameboardTwo = require('./setup/playerTwoGameboard')
const { Carrier, Battleship, Cruiser, Submarine, Destroyer, computerCarrier, computerBattleship, computerCruiser, computerSubmarine,  computerDestroyer } = require('../setup/createShips')

const player1 = new Players('Player 1 - Human', [])
const player2 = new Players('Player 2 - Computer', [])
const player1Gameboard = new Gameboard(gameboardOne)
const player2Gameboard = new Gameboard(gameboardTwo)

const humanShips = []
humanShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer)
const computerShips = []
computerShips.push(computerCarrier, computerBattleship, computerCruiser, computerSubmarine, computerDestroyer);

player1Gameboard.placeShip(Cruiser, 5, 3, true)
player1Gameboard.placeShip(Carrier, 1, 1, false)
player1Gameboard.placeShip(Battleship, 8, 6, false)
player1Gameboard.placeShip(Submarine, 2, 3, true)
player1Gameboard.placeShip(Destroyer, 7, 5, false)

player2Gameboard.placeShip(computerCarrier, 5, 3, true)
player2Gameboard.placeShip(computerCruiser, 1, 1, false)
player2Gameboard.placeShip(computerBattleship, 8, 6, false)
player2Gameboard.placeShip(computerSubmarine, 2, 3, true)
player2Gameboard.placeShip(computerDestroyer, 7, 5, false)

// Create players
// Create gameboards per player
// Populate each gameboard with ship positions (random for now)
// Take player moves by clicking on board coords 
// // take user click specific coordinates
// // render moves and hit/miss
// Contine turn by turn moves, informing user what happened each move and what is hit/missed
// // if you're missing methods, figure out where a new one belongs
// Inform users when game over happens and who won
// Figure out how you want players to place their ships










// function component() {
//     const element = document.createElement('div');
  
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');
//     return element;
//   }

//   greet('Hi')
  
//   document.body.appendChild(component());