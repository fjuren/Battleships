const gameboard = require('../bin/createGameboard');
const Gameboard = require('../classes/gameboard') // Gameboard class
const Players = require('../classes/players')

const newGame = new Gameboard(gameboard)
const player1 = new Players("Fabian", [])
const playerAI = new Players("Fabian", [])

var randomIndex1 =  7;
var randomIndex2 =  3;

player1.playerAttack(4,4)

describe("Testing playerAttack method", () => {
    test("Check that attack move works when a ship isn't present", () => {
        expect(player1.playerAttack(3,2)).toBe('X')
    })
    test("With checkRepeatedMove enabled; Already attacked coordinate should be prevented from re-attacking", () => {
        expect(player1.playerAttack(4,4)).toBe(false)
    })
})

describe("Test whether a certain coordinate was already attacked (checkRepeatedMove tesing in isolation)", () => {
    test("First time attacking the specified coordinate", () => {
        expect(player1.checkRepeatedMove(5,6)).toBe(false)
    })
    test("Player has already attacked at the specific coordinate", () => {
        expect(player1.checkRepeatedMove(4,4)).toBe(true)
    })
    test("Player has already attacked at the specific index1 coordinate, but not index2 coordinate", () => {
        expect(player1.checkRepeatedMove(4,7)).toBe(false)
    })
    test("Player has already attacked at the specific index2 coordinate, but not index1 coordinate", () => {
        expect(player1.checkRepeatedMove(1,4)).toBe(false)
    })
})

describe("Testing logic of dumbAIPlayer method", () => {
    test("Dumb AI method runs as normal", () => {
        expect(playerAI.dumbAIPlayer()).toBe(false)
    })
    test("Dumb AI chooses a random number that's already been moved. Original nonrandom test coordinates (7,3) should not be moved", () => {
        playerAI.dumbAIPlayer()
        expect(gameboard).toStrictEqual([
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, 'X', null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 'X', null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
        ])
    })
})