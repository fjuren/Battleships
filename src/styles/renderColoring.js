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

  module.exports = renderColoring;