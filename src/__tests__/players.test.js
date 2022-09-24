const playerOneBoard = require('../setup/playerOneGameboard');
const playerTwoBoard = require('../setup/playerTwoGameboard')
const Gameboard = require('../classes/gameboard') // Gameboard class
const Players = require('../classes/players')

const {Carrier, Battleship, Cruiser, Submarine, Destroyer} = require('../setup/createShips')
var playerShips = [];
playerShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer);

const p1Board = new Gameboard(playerOneBoard)
const p2Board = new Gameboard(playerTwoBoard)
const player1 = new Players("Fabian", [])
const player2AI = new Players("Fabian_AI", [])

describe("Testing playerAttack method", () => {
    test("Check that attack move works when a ship isn't present", () => {
        expect(player1.playerAttack(3,2, p2Board, playerShips)).toBe('X')
    })
    test("With checkRepeatedMove enabled; Already attacked coordinate should be prevented from re-attacking", () => {
        player1.playerAttack(4, 4, p2Board, playerShips)
        expect(player1.playerAttack(4,4, p2Board, playerShips)).toBe(false)
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
        const fakeAutoAttack = [7, 3]
        player2AI.dumbAIAttack(fakeAutoAttack, p1Board, playerShips)
        expect(playerOneBoard).toStrictEqual([
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 'X', null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
        ])
    })
    test("Dumb AI chooses a random number that's already been moved. A new random coordinate should be placed", () => {
        const fakeAutoAttack = [7, 3]
        player2AI.dumbAIAttack(fakeAutoAttack, p1Board, playerShips)
        player2AI.dumbAIAttack(fakeAutoAttack, p1Board, playerShips)
        expect(playerOneBoard).not.toStrictEqual([
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 'X', null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
        ])
    })
})

describe("Test of randomAttack method. Omitting test of values since Math.random() will always return expected results", () => {
    test("Calling should always return an array", () => {
        expect(player2AI.randomAttack()).toBeInstanceOf(Array)
    })
})