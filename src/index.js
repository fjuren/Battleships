require('./styles.css')
const Players = require('./classes/players');
const Gameboard = require('./classes/gameboard');

const { Carrier, Battleship, Cruiser, Submarine, Destroyer, computerCarrier, computerBattleship, computerCruiser, computerSubmarine,  computerDestroyer } = require('./setup/createShips');
const humanShips = []
humanShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer)
const computerShips = []
computerShips.push(computerCarrier, computerBattleship, computerCruiser, computerSubmarine, computerDestroyer);


const {placeRandShips, renderTempBoard, renderColoring} = require('./gameflow_helpers/placeRandShips')

// gamebaords
const gameboardOne = require('./setup/playerOneGameboard')
const gameboardTwo = require('./setup/playerTwoGameboard')
// players
const player1 = new Players('Player 1 - Human', [])
const player2 = new Players('Player 2 - Computer', [])

// temporary board for rendering purposes
var temp = new Gameboard(gameboardOne)
// player boards
var player1Gameboard = null
const player2Gameboard = new Gameboard(gameboardTwo)


const randBtn = document.getElementById("randBtn");
randBtn.addEventListener("click", () => {
    renderTempBoard(temp, humanShips);
    confirmPosBtn.disabled = false;
    // randBtn.insertAdjacentElement('afterend', confirmButton)
})

// var confirmButton = document.createElement('button');
// confirmButton.type = 'button';
// confirmButton.innerHTML = 'Start';
// confirmButton.id = 'confirmPosBtn';
// confirmButton.className = 'btn';

const confirmPosBtn = document.getElementById('confirmPosBtn')
// confirmButton.addEventListener("click", () => {
    confirmPosBtn.addEventListener("click", () => {
    player1Gameboard = temp
    renderColoring(player1Gameboard, '#7393B3')
    randBtn.remove();
    confirmPosBtn.remove();
    document.getElementById('instructions').remove();
})

placeRandShips(player2Gameboard, computerShips);

// player2Gameboard.placeShip(computerCarrier, 5, 3, true)
// player2Gameboard.placeShip(computerCruiser, 1, 1, false)
// player2Gameboard.placeShip(computerBattleship, 8, 6, false)
// player2Gameboard.placeShip(computerSubmarine, 2, 3, true)
// player2Gameboard.placeShip(computerDestroyer, 7, 5, false)

// Confirm temp ship placement

