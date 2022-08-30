// gameboard size: 10x10 grids (x,y)

const playerTwoBoard = [];
const gridWidth = 10;
const gridHeight = 10;

const playerTwoGameboard = () => {
    for(let y = 0; y < gridHeight; y++) {
        playerTwoBoard.push([]);
        for(let x = 0; x < gridWidth; x++) {
            playerTwoBoard[y].push(null);
        };
    };
};

playerTwoGameboard();

module.exports = playerTwoBoard