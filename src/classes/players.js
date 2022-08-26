const gameboard = require('../setup/createGameboard'); // gameboard data
const Gameboard = require('./gameboard') // Gameboard class

const newGame = new Gameboard(gameboard)

// variables used in dumbAIPlayer method
var randomIndex1 =  Math.floor(Math.random() * 10);
var randomIndex2 =  Math.floor(Math.random() * 10);

// Required for testing dumbAI in jest
// var randomIndex1 =  7
// var randomIndex2 =  3

class Players {
    constructor(name) {
        this.name = name; // STRING
        this.preventRepeatMove = []; // ARRAY
    }

    // number number gameboard -> gameboard
    // player takes an attacking move on the gameboard
    playerAttack = (index1, index2) => {
        if (!this.checkRepeatedMove(index1, index2) == true) {
            this.preventRepeatMove.push([index1, index2]);
            return newGame.receiveAttack(index1, index2);
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
        console.log(counter)
        if (counter != 0) {
            return true // repeated move
        } else {
            return false // not a repeated move
        }
    }

    // -> number number (attacking coordinates)
    // automatated player attacking move using dumb/random logic. Allows for a 1 player game against an AI
    dumbAIPlayer = () => {
        while (this.playerAttack(randomIndex1,randomIndex2) == false) {
            randomIndex1 =  Math.floor(Math.random() * 10);
            randomIndex2 =  Math.floor(Math.random() * 10); 
        } 
        return this.playerAttack(randomIndex1, randomIndex2)
    }
}

module.exports = Players
