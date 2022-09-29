const placeRandShips = require('../gameflow_helpers/placeRandShips');
const { renderP1StartColoring } = require('./renderColoring');

// board ship(as an array)-> board html styling
// Renders of temporary ship placement
const renderTempBoard = (temp, arrayOfShips) => {
  // first clear the board since the user can repeatedly place their starting ship positioning.
  temp.clearBoard();
  const forBoardRender = placeRandShips(temp, arrayOfShips);
  renderP1StartColoring(forBoardRender, '#B0E0E6');
};

module.exports = renderTempBoard;
