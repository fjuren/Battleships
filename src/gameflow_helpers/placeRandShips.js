
const placeRandShips = (temp, arrayOfShips) => {
var randomIndex1 =  Math.floor(Math.random() * 10);
var randomIndex2 =  Math.floor(Math.random() * 10);
  arrayOfShips.forEach(ship => {
    var randomAxis = Math.random() < 0.5
    while (temp.placeShip(ship, randomIndex1, randomIndex2, randomAxis) == false) {
      randomIndex1 =  Math.floor(Math.random() * 10);
      randomIndex2 =  Math.floor(Math.random() * 10);
    }
  });
  return temp
}


module.exports = placeRandShips