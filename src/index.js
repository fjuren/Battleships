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
const gameboardTwo = require('./setup/playerTwoGameboard');
// const playerOneMove = require('./gameflow_helpers/playerOneMove');
// const dumbAIMove = require('./gameflow_helpers/dumbAIMove');
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

// sets computer ship starting position (will not render ship positions)
placeRandShips(player2Gameboard, computerShips);

// random selection of player who goes first
if (Math.random() < 0.5) {
    console.log("player 1's turn")
} else {
    console.log("computer's turn")
    // var randomIndex1 =  Math.floor(Math.random() * 10);
    // var randomIndex2 =  Math.floor(Math.random() * 10);
    // dumbAIMove(randomIndex1, randomIndex2, player1Gameboard, humanShips)
}

// gameflow
var ind1 = null
var ind2 = null

document.getElementById("player2Board").addEventListener("click", (e) => {
    ind1 = e.path[0].id[6]
    ind2 = e.path[1].id[6]
    console.log(ind1)
    console.log(ind2)
    // player1Turn(ind1, ind2)
})


// const player1Turn = (ind1, ind2) => {
//     console.log(playerOneMove(ind1, ind2, player2Gameboard, computerShips))
// }
