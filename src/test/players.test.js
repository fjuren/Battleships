const gameboard = require('../bin/gameboard_setup');
const Gameboard = require('../classes/gameboard') // Gameboard class
const Players = require('../classes/players')

const newGame = new Gameboard(gameboard)
const player1 = new Players("Fabian", [])

player1.playerAttack(4,4)

describe("Testing playerAttack method", () => {
    test("Check that attack move works when a ship isn't present", () => {
        expect(player1.playerAttack(3,2)).toBe('X')
    })
    test("With checkRepeatedMove enabled; Already attacked coordinate should be prevented from re-attacking", () => {
        expect(player1.playerAttack(4,4)).toBe('X')
    })
})

describe("Test whether a certain coordinate was already attacked (checkRepeatedMove tesing in isolation)", () => {
    test("First time attacking the specified coordinate", () => {
        expect(player1.checkRepeatedMove(5,6)).toBe(false)
    })
    test("Player has already attacked at the specific coordinate", () => {
        expect(player1.checkRepeatedMove(4,4)).toBe(true)
    })
})

