const gameboard = require('../bin/gameboard_setup'); // gameboard data
const Gameboard = require('../classes/gameboard') // Gameboard class

const newGame = new Gameboard(gameboard)

class Players {
    constructor(name, preventRepeatMove) {
        this.name = name; // STRING
        this.preventRepeatMove = preventRepeatMove; // ARRAY
    }

    // number number gameboard -> gameboard
    // player takes an attacking move on the gameboard
    playerAttack = (index1, index2) => {
        // will need to check if there was prior move at these coords
        return newGame.receiveAttack(index1, index2)
    }

}

module.exports = Players

// const player1 = new Players("Fabian", [])

// player1.playerAttack(3,3)

// console.log(gameboard)