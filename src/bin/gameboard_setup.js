// gameboard size: 10x10 grids (x,y)

const gameboard = [];
const gridWidth = 10;
const gridHeight = 10;

const createGameboard= () => {
    for(let y = 0; y < gridHeight; y++) {
        gameboard.push([]);
        for(let x = 0; x < gridWidth; x++) {
            gameboard[y].push(null);
        };
    };
};

createGameboard(); // may need to move this to game_controller.js later

module.exports = gameboard
