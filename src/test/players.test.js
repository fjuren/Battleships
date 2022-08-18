const gameboard = require('../bin/gameboard_setup');
const Gameboard = require('../classes/gameboard') // Gameboard class
const Players = require('../classes/players')

const newGame = new Gameboard(gameboard)
const player1 = new Players("Fabian", [])

describe("Test player moves on board", () => {
    test("Check that attack move works when a ship isn't present", () => {
        expect(player1.playerAttack(3,2)).toBe('X')
    })
})

