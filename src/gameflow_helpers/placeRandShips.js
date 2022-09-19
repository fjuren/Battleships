// const Gameboard = require('../classes/gameboard');
// const tempBoardSelection = require('../setup/playerOneGameboard')
// // const tempGameboard = new Gameboard(tempBoardSelection)

// const { Carrier, Battleship, Cruiser, Submarine, Destroyer, computerCarrier, computerBattleship, computerCruiser, computerSubmarine,  computerDestroyer } = require('../setup/createShips');
// const humanShips = []
// humanShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer)
// const computerShips = []
// computerShips.push(computerCarrier, computerBattleship, computerCruiser, computerSubmarine, computerDestroyer);

// // temporary board for rendering purposes
// var temp = new Gameboard(tempBoardSelection)

// -> gamebaord
// randomly selects position for ships
const placeRandShips = (temp, humanShips) => {
var randomIndex1 =  Math.floor(Math.random() * 10);
var randomIndex2 =  Math.floor(Math.random() * 10);
  humanShips.forEach(ship => {
    var randomAxis = Math.random() < 0.5
    while (temp.placeShip(ship, randomIndex1, randomIndex2, randomAxis) == false) {
      randomIndex1 =  Math.floor(Math.random() * 10);
      randomIndex2 =  Math.floor(Math.random() * 10);
    }
  });
  return temp
}

// -> board html styling
// Renders of temporary ship placement  
const renderTempBoard = (temp, humanShips) => {
  // first clear the board since the user can repeatedly place their starting ship positioning.
  temp.clearBoard();
  var forBoardRender = placeRandShips(temp, humanShips);
  renderColoring(forBoardRender, '#B0E0E6')
}

// array color(as a string) -> board html syling
// applies color rendering of ship positions
const renderColoring = (array, color) => {
  array.playerBoard.forEach((row, rowInd) => {
    row.forEach((col, colInd) => {
      // Render a clear board each time this function is called
      document.getElementById(`p1-col${[colInd]}`).getElementsByClassName('p1-row')[`${rowInd}`].style.backgroundColor = ''
      // render new positions
      if (col != null) {
        document.getElementById(`p1-col${[colInd]}`).getElementsByClassName('p1-row')[`${rowInd}`].style.backgroundColor = color
      }
    })
  })
}


module.exports = {renderTempBoard, renderColoring}