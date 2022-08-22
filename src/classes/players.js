const gameboard = require('../bin/gameboard_setup'); // gameboard data
const Gameboard = require('../classes/gameboard') // Gameboard class

const newGame = new Gameboard(gameboard)

class Players {
    constructor(name, preventRepeatMove) {
        this.name = name; // STRING
        this.preventRepeatMove = []; // ARRAY
    }

    // number number gameboard -> gameboard
    // player takes an attacking move on the gameboard
    playerAttack = (index1, index2) => {
        if (!this.checkRepeatedMove(index1, index2) == true) {
            this.preventRepeatMove.push([index1, index2]);
            return newGame.receiveAttack(index1, index2);
        } else {
            return false // coordinate was already attacked so it's invalid to re-attack the coordinate
        }
    }

    checkRepeatedMove = (index1, index2) => {
        var counter = 0

        for (let i = 0; i < this.preventRepeatMove.length; i++) {
            if (this.preventRepeatMove[i][0] == index1 && this.preventRepeatMove[i][1] == index2) {
                counter++
            }
        } 
        console.log(counter)
        if (counter != 0) {
            return true // repeated move
        } else {
            return false // not a repeated move
        }
    }
}

module.exports = Players

const player1 = new Players("Fabian", [])
