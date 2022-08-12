const Gameboard = require('../classes/gameboard')
const gameboard = require('../bin/gameboard_setup')
const allShips = require('../bin/ship_types');

const Carrier = allShips[0] 
const Battleship = allShips[1] 
const Cruiser = allShips[2] 
const Submarine = allShips[3] 
const Destroyer = allShips[4] 

const horizontalShipPlacement = new Gameboard(gameboard);
const verticalShipPlacement = new Gameboard(gameboard);


describe('Gameboard placeShip testing', () => {
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
    test.only('Multiple ships can be placed on the same board, with their respective attributes (i.e., lenght, axis direction etc)', () => {
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