const { stringToAIShip, stringToShip } = require('./stringToShip');
const playerTwoBoard = require('../setup/playerTwoGameboard');
const dumbAIMove = require('./dumbAIMove');
const { renderAttackColoring } = require('../styles/renderColoring');
const isGameOver = require('./isGameOver');

const playerOneMove = (playerClass, index1, index2, board, ships) => {
  if (playerClass.playerAttack(index1, index2, board, ships) === undefined) {
    const hitShip = stringToAIShip(board.playerBoard[index1][index2]);
    renderAttackColoring(index1, index2, 'p2', 'red');
    document.getElementById('player1Actions').innerHTML = `BOOM! You hit the computer's ${hitShip.type.slice(8)}`;
    // set sunkStatus of the ship to true if it was hit enough times
    hitShip.isSunk();
    if (hitShip.sunkStatus) {
      document.getElementById('player1Actions').innerHTML = `You sunk the computer's ${hitShip.type.slice(8)}`;
      // was this the last ship to sink? If so, it's game over
      if (board.allShipsSunk(ships)) {
        isGameOver(playerClass);
      }
    } else {
      // contiue
      // dumbAIMove
    }
  } else if (playerTwoBoard[index1][index2] === 'X') {
    renderAttackColoring(index1, index2, 'p2', '#00b8ff');
    document.getElementById('player1Actions').innerHTML = 'Splash! You missed and made a big splash';
    // dumbAIMove
  } else {
    // do nothing
  }
};

module.exports = playerOneMove;
