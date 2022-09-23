// array color(as a string) -> board html syling
// applies color rendering of ship positions
const renderP1StartColoring = (array, color) => {
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

// array num num string color(as a string) -> board html styling
// applies color rendering based on provided args
const renderAttackColoring = (index1, index2, p1orp2, hitOrMissColor) => {
  var element = document.getElementById(`${p1orp2}-col${[index2]}`).getElementsByClassName(`${p1orp2}-row`)[`${index1}`]

  const attackStyling = document.createElement("div")
  attackStyling.classList.add('attackingMove')
  element.appendChild(attackStyling)
  attackStyling.style.backgroundColor = hitOrMissColor
}
  module.exports = {renderP1StartColoring, renderAttackColoring};