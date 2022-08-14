const Gameboard = require('../classes/gameboard')
const gameboard = require('../bin/gameboard_setup')
const allShips = require('../bin/ship_types');
const { subtract } = require('lodash');

const Carrier = allShips[0] 
const Battleship = allShips[1] 
const Cruiser = allShips[2] 
const Submarine = allShips[3] 
const Destroyer = allShips[4] 



const horizontalShipPlacement = new Gameboard(gameboard);
const verticalShipPlacement = new Gameboard(gameboard);

describe('Gameboard placeShip testing in isolation (no helper functions)', () => {
    test('A ship is placed on the board based on the type of ship given, its initial starting location, its HORIZONTAL axis direction, and the Ships length', () => {
        horizontalShipPlacement.placeShip(Carrier, 1, 1, false)
        expect(gameboard).toStrictEqual([
            [null, null, null, null, null, null, null, null, null, null],
            [null, 'Carrier', 'Carrier', 'Carrier', 'Carrier', 'Carrier', null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
        ])
    })
    test('A ship is placed on the board based on the type of ship given, its initial starting location, its VERTICAL axis direction, and the Ships length', () => {
        verticalShipPlacement.placeShip(Destroyer, 4, 3, true)
        expect(gameboard).toStrictEqual([
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 'Destroyer', null, null, null, null, null, null],
            [null, null, null, 'Destroyer', null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
        ])
    })
    test('Multiple ships can be placed on the same board, with their respective attributes (i.e., lenght, axis direction etc)', () => {
        verticalShipPlacement.placeShip(Destroyer, 2, 2, true) // vertical
        horizontalShipPlacement.placeShip(Carrier, 0, 4, false) // horizonatl
        expect(gameboard).toStrictEqual([
            [null, null, null, null, 'Carrier', 'Carrier', 'Carrier', 'Carrier', 'Carrier', null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 'Destroyer', null, null, null, null, null, null, null],
            [null, null, 'Destroyer', null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
        ])
    })
})

describe("Gameboard placeShip function where checkOverlap function catches an overlap, preventing the placement of the ship", () => {
    test.only("New ship placement overlaps with a previously placed ship; should not be possible to do this", () => {
        verticalShipPlacement.placeShip(Destroyer, 5, 4, true);
        verticalShipPlacement.placeShip(Submarine, 3, 4, true);
        expect(gameboard).toStrictEqual([
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, "Destroyer", null, null, null, null, null],
            [null, null, null, null, "Destroyer", null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
        ])
    })
})

describe("Gameboard checkOverlap test in isolation (true = no overlap occured; false = overlap occured)", () => {
    test('Check if an overlap occurs against an empty board', () => {
        expect(horizontalShipPlacement.checkOverlap(Carrier, 1, 1, false)).toBe(true)
    })
    test('Check if an overlap occurs when the board isnt empty and an overlap isnt expected to occur', () => {
        verticalShipPlacement.placeShip(Battleship, 4, 5, true)
        expect(horizontalShipPlacement.checkOverlap(Submarine, 1, 5, false)).toBe(true)
    })
    test('Check if an overlap occurs if an overlap exists (where both ships start on the same start position)', () => {
        // horizontalShipPlacement.placeShip(Submarine, 7, 2, false)
        horizontalShipPlacement.placeShip(Carrier, 0, 4, false)
        // expect(verticalShipPlacement.checkOverlap(Cruiser, 5, 2, true)).toBe(false)
        expect(verticalShipPlacement.checkOverlap(Cruiser, 0, 5, true)).toBe(false)
    })
    test('Check if an overlap occurs if an overlap exists (where both ships start on different start position)', () => {
        // horizontalShipPlacement.placeShip(Submarine, 7, 2, false)
        horizontalShipPlacement.placeShip(Carrier, 1, 4, false)
        // expect(verticalShipPlacement.checkOverlap(Cruiser, 5, 2, true)).toBe(false)
        expect(verticalShipPlacement.checkOverlap(Cruiser, 0, 5, true)).toBe(false)
    })
    test('Check if an overlap occurs if an overlap exists (where both ships end the same end position)', () => {
        // horizontalShipPlacement.placeShip(Submarine, 7, 2, false)
        horizontalShipPlacement.placeShip(Carrier, 8, 0, false)
        // expect(verticalShipPlacement.checkOverlap(Cruiser, 5, 2, true)).toBe(false)
        expect(verticalShipPlacement.checkOverlap(Cruiser, 6, 4, true)).toBe(false)
    })
})
// newGame.placeShip(Carrier, 0, 4, false)
// console.log(newGame.checkOverlap(Cruiser, 0, 5, true))