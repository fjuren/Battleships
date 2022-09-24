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
// var randomIndex1 =  null;
// var randomIndex2 =  null;

class Players {
    constructor(name) {
        this.name = name; // STRING
        this.preventRepeatMove = []; // ARRAY
    }

    // number number gameboard(as the class) ships -> gameboard
    // player takes an attacking move against opponent gameboard
    playerAttack = (index1, index2, board, ships) => {
        if (!this.checkRepeatedMove(index1, index2) == true) {
            this.preventRepeatMove.push([index1, index2]);
            return board.receiveAttack(index1, index2, ships);
        } else {
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
    // automatated player attacking move.
    dumbAIAttack = (autoAttacks, board, ships) => {
        var validatedMoves = null
        var randomIndex1 = autoAttacks[0]
        var randomIndex2 = autoAttacks[1]
        while (true) {
            if (this.playerAttack(randomIndex1, randomIndex2, board, ships) != false) {
                break;
            }
            var newAttacks = []
            this.randomAttack().forEach((e) => {
                newAttacks.push(e)
            })
            randomIndex1 = newAttacks[0]
            randomIndex2 = newAttacks[1]
        }
        this.playerAttack(randomIndex1, randomIndex2, board, ships)
        validatedMoves = [randomIndex1, randomIndex2]
        return validatedMoves
    }

    // -> num num
    // algorithm for random attack of board coordinates. This will be a 'dumb' algorithm for MVP
    randomAttack = () => {
        var randomAttackIndeces = []
        var randomIndex1 = Math.floor(Math.random() * 10);
        var randomIndex2 = Math.floor(Math.random() * 10);
        randomAttackIndeces.push(randomIndex1, randomIndex2)
        return randomAttackIndeces
    }
}

module.exports = Players

// const player2 = new Players("Computer", [])

// player2.randomAttack()


// save for now:
// while (this.playerAttack(randomIndex1,randomIndex2, board, ships) == false) {
//     randomIndex1 = Math.floor(Math.random() * 10);
//     randomIndex2 = Math.floor(Math.random() * 10);
//     console.log('Found repeated AI move')
//     console.log(`new move for index1: ${randomIndex1}`)
//     console.log(`new move for index2: ${randomIndex2}`)
// if (this.playerAttack(randomIndex1,randomIndex2, board, ships) === undefined){
//     break;
//     // return randomIndex1, randomIndex2
// }
// } 
// console.log(`redefined and validated index1: ${randomIndex1}`)
// console.log(`redefined and validated index2: ${randomIndex2}`)
// this.playerAttack(randomIndex1, randomIndex2, board, ships)
// return randomIndex1, randomIndex2
// } 