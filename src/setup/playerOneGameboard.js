// gameboard size: 10x10 grids (x,y)

const playerOneBoard = [];
const gridWidth = 10;
const gridHeight = 10;

const playerOneGameboard = () => {
    for(let y = 0; y < gridHeight; y++) {
        playerOneBoard.push([]);
        for(let x = 0; x < gridWidth; x++) {
            playerOneBoard[y].push(null);
        };
    };
};

playerOneGameboard(); // may need to move this to game_controller.js later

module.exports = playerOneBoard


// Delete after push. Testing push on different PC