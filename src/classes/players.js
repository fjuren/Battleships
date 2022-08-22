const gameboard = require('../bin/gameboard_setup'); // gameboard data
const Gameboard = require('../classes/gameboard') // Gameboard class

const newGame = new Gameboard(gameboard)

class Players {
    constructor(name, preventRepeatMove) {
        this.name = name; // STRING
        this.preventRepeatMove = []; // ARRAY
    }

    // [(1,1), (4,6), (5,5)]

    // number number gameboard -> gameboard
    // player takes an attacking move on the gameboard
    playerAttack = (index1, index2) => {
        if (this.checkRepeatedMove(index1, index2) == false) {
            return false
        };
        this.preventRepeatMove.push([index1, index2]);
        return newGame.receiveAttack(index1, index2);
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


// player1.playerAttack(3,3)
// player1.playerAttack(5,2)
// player1.playerAttack(1,1)
// player1.playerAttack(9,8)


// console.log(newGame.receiveAttack(index1, index2))
// console.log(player1.checkRepeatedMove(3,3))
// console.log(typeof(player1.preventRepeatMove[0]))
// console.log(player1.preventRepeatMove[0][1])

// console.log(gameboard)