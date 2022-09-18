// const playerOneBoard = require('../setup/playerOneGameboard'); // gameboard data
// const playerTwoBoard = require('../setup/playerTwoGameboard')
// const Gameboard = require('./gameboard') // Gameboard class

// const p1Board = new Gameboard(playerOneBoard)
// const p2Board = new Gameboard(playerTwoBoard)

// const {Carrier, Battleship, Cruiser, Submarine, Destroyer} = require('../setup/createShips')
// var playerShips = [];
// playerShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer);

// Required for testing dumbAI in jest
// var randomIndex1 =  7
// var randomIndex2 =  3

// variables used in dumbAIPlayer method
// var randomIndex1 =  Math.floor(Math.random() * 10);
// var randomIndex2 =  Math.floor(Math.random() * 10);

class Players {
    constructor(name) {
        this.name = name; // STRING
        this.preventRepeatMove = []; // ARRAY
    }

    // number number gameboard ships -> gameboard
    // player takes an attacking move against opponent gameboard
    playerAttack = (index1, index2, board, ships) => {
        if (!this.checkRepeatedMove(index1, index2) == true) {
            this.preventRepeatMove.push([index1, index2]);
            return board.receiveAttack(index1, index2, ships);
        } 
        else {
            return false // move is invalid
        }
    }

    // number number -> boolean
    // helper function for playerAttack. Checks whether the attacking move was previously taken at specified coordinates
    checkRepeatedMove = (index1, index2) => {
        var counter = 0

        for (let i = 0; i < this.preventRepeatMove.length; i++) {
            if (this.preventRepeatMove[i][0] == index1 && this.preventRepeatMove[i][1] == index2) {
                counter++
            }
        } 
        // console.log(counter)
        if (counter != 0) {
            return true // repeated move
        } else {
            return false // not a repeated move
        }
    }

    // -> number number (attacking coordinates)
    // automatated player attacking move using dumb/random logic. Allows for a 1 player game against an AI
    dumbAIAttack = (randomIndex1, randomIndex2, board, ships) => {
        while (this.playerAttack(randomIndex1,randomIndex2, board, ships) == false) {
            randomIndex1 =  Math.floor(Math.random() * 10);
            randomIndex2 =  Math.floor(Math.random() * 10); 
            return false
        } 
        return this.playerAttack(randomIndex1, randomIndex2, board, ships)
    }
}

module.exports = Players

// const player1 = new Players("Fabian", [])

// player1.playerAttack(1,1, p1Board, Ships)