require('./styles/styles.css');
const Players = require('./classes/players');
const Gameboard = require('./classes/gameboard');

const {
  Carrier, Battleship, Cruiser, Submarine, Destroyer, computerCarrier, computerBattleship, computerCruiser, computerSubmarine, computerDestroyer,
} = require('./setup/createShips');

const humanShips = [];
humanShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer);
const computerShips = [];
computerShips.push(computerCarrier, computerBattleship, computerCruiser, computerSubmarine, computerDestroyer);

const placeRandShips = require('./gameflow_helpers/placeRandShips');
const renderTempBoard = require('./styles/renderTempBoard');
const { renderP1StartColoring } = require('./styles/renderColoring');

// gamebaords
const playerOneBoard = require('./setup/playerOneGameboard');
const playerTwoBoard = require('./setup/playerTwoGameboard');

// players
const player1 = new Players('human player', []);
const player2 = new Players('enemy player', []);

// temporary board for rendering purposes
const temp = new Gameboard(playerOneBoard);
// player boards
let player1Gameboard = null;
const player2Gameboard = new Gameboard(playerTwoBoard);

// // Player movement logic
const playerOneMove = require('./gameflow_helpers/playerOneMove');
const dumbAIMove = require('./gameflow_helpers/dumbAIMove');

// var confirmButton = document.createElement('button');
// confirmButton.type = 'button';
// confirmButton.innerHTML = 'Start';
// confirmButton.id = 'confirmPosBtn';
// confirmButton.className = 'btn';

const confirmPosBtn = document.getElementById('confirmPosBtn');

const randBtn = document.getElementById('randBtn');
randBtn.addEventListener('click', () => {
  renderTempBoard(temp, humanShips);
  confirmPosBtn.disabled = false;
  // randBtn.insertAdjacentElement('afterend', confirmButton)
});

// confirmButton.addEventListener("click", () => {
confirmPosBtn.addEventListener('click', () => {
  player1Gameboard = temp;
  renderP1StartColoring(player1Gameboard, '#A19B99');
  randBtn.remove();
  confirmPosBtn.remove();
  document.getElementById('instructions').innerHTML = "<span style='font-size:20px'>Attack the enemy board!</span>";

  // sets computer ship starting position (will not render ship positions)
  placeRandShips(player2Gameboard, computerShips);
});

console.log(player2Gameboard.playerBoard);
// START OF GAMELOOP

// gameflow
let ind1 = null;
let ind2 = null;

document.getElementById('player2Board').addEventListener('click', (e) => {
  ind1 = e.path[0].id[6];
  ind2 = e.path[1].id[6];
  player1Turn(ind1, ind2);

  try {
    document.getElementById('instructions').remove();
  } catch (error) {
    // do nothing
  }
});

const player1Turn = (index1, index2) => {
  // check if gameover? If not proceed
  playerOneMove(player1, index1, index2, player2Gameboard, computerShips);
  // If it isn't game over, player 2's turn
  setTimeout(player2Turn, 600);
};

const player2Turn = () => {
  const randomAttacks = player2.randomAttack();
  const validatedMoveSet = [];
  player2.dumbAIAttack(randomAttacks, player1Gameboard, humanShips).forEach((e) => {
    validatedMoveSet.push(e);
  });
  const randomIndex1 = validatedMoveSet[0];
  const randomIndex2 = validatedMoveSet[1];
  dumbAIMove(player2, randomIndex1, randomIndex2, player1Gameboard, humanShips);
};
