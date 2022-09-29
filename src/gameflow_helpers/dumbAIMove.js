const { stringToAIShip, stringToShip } = require('./stringToShip');
const playerOneBoard = require('../setup/playerOneGameboard');
const playerOneMove = require('./playerOneMove');
const { renderAttackColoring } = require('../styles/renderColoring');
const isGameOver = require('./isGameOver');

const dumbAIMove = (playerClass, randomIndex1, randomIndex2, board, ships) => {
  // ship hit by AI
  if (board.playerBoard[randomIndex1][randomIndex2] !== 'X') {
    const hitShip = stringToShip(board.playerBoard[randomIndex1][randomIndex2]);
    document.getElementById('player2Actions').innerHTML = `BOOM! The Enemy hit your ${hitShip.type}`;
    renderAttackColoring(randomIndex1, randomIndex2, 'p1', 'red');
    hitShip.isSunk();
    if (hitShip.sunkStatus) {
      document.getElementById('player2Actions').innerHTML = `The Enemy sunk your ${hitShip.type}`;
      if (board.allShipsSunk(ships)) {
        isGameOver(playerClass);
      }
    } else {
      // human turn
    }
  } else if (board.playerBoard[randomIndex1][randomIndex2] === 'X') {
    document.getElementById('player2Actions').innerHTML = 'Splash! The Enemy missed and made a big splash';
    renderAttackColoring(randomIndex1, randomIndex2, 'p1', '#00b8ff');
    // human turn
  } else {
    // do nothing
  }
};

module.exports = dumbAIMove;
