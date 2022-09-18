const Gameboard = require('../classes/gameboard');
const tempBoardSelection = require('../setup/playerOneGameboard')
// const tempGameboard = new Gameboard(tempBoardSelection)

const { Carrier, Battleship, Cruiser, Submarine, Destroyer, computerCarrier, computerBattleship, computerCruiser, computerSubmarine,  computerDestroyer } = require('../setup/createShips');
const humanShips = []
humanShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer)
const computerShips = []
computerShips.push(computerCarrier, computerBattleship, computerCruiser, computerSubmarine, computerDestroyer);

// -> gamebaord
// randomly selects position for ships
const placeRandShips = () => {
    var randomIndex1 =  Math.floor(Math.random() * 10);
    var randomIndex2 =  Math.floor(Math.random() * 10);
    var temp = new Gameboard(tempBoardSelection)
  
    humanShips.forEach(ship => {
      var randomAxis = Math.random() < 0.5
      while (temp.placeShip(ship, randomIndex1, randomIndex2, randomAxis) == false) {
        randomIndex1 =  Math.floor(Math.random() * 10);
        randomIndex2 =  Math.floor(Math.random() * 10);
      }
    });
    console.log(temp)
    return temp
  }
  
  // Renders of temporary ship placement  
  const renderTempBoard = () => {
    const rowTest = []
    const colTest = []
    var forBoardRender = placeRandShips();
    // console.log(forBoardRender)
    forBoardRender.playerBoard.forEach((row, rowInd) => {
      row.forEach((col, colInd) => {
        if (col != null) {
          document.getElementById(`p1-col${[colInd]}`).getElementsByClassName('p1-row')[`${rowInd}`].style.backgroundColor = '#B0E0E6'
        }
      })
    })
  }
  
  
module.exports = renderTempBoard