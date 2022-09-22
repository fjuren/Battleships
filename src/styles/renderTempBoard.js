const placeRandShips = require('../gameflow_helpers/placeRandShips')
const renderColoring = require('./renderColoring')


// board ship(as an array)-> board html styling
// Renders of temporary ship placement  
const renderTempBoard = (temp, arrayOfShips) => {
    // first clear the board since the user can repeatedly place their starting ship positioning.
    temp.clearBoard();
    var forBoardRender = placeRandShips(temp, arrayOfShips);
    renderColoring(forBoardRender, '#B0E0E6')
  }

  module.exports = renderTempBoard