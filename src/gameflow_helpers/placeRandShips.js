const placeRandShips = (temp, arrayOfShips) => {
  let randomIndex1 = Math.floor(Math.random() * 10);
  let randomIndex2 = Math.floor(Math.random() * 10);
  arrayOfShips.forEach((ship) => {
    const randomAxis = Math.random() < 0.5;
    while (temp.placeShip(ship, randomIndex1, randomIndex2, randomAxis) === false) {
      randomIndex1 = Math.floor(Math.random() * 10);
      randomIndex2 = Math.floor(Math.random() * 10);
    }
  });
  return temp;
};

module.exports = placeRandShips;
