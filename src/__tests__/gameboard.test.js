const Gameboard = require('../classes/gameboard')
const playerOneBoard = require('../setup/playerOneGameboard')

const {Carrier, Battleship, Cruiser, Submarine, Destroyer} = require('../setup/createShips')
var playerShips = [];
playerShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer);



const horizontalShipPlacement = new Gameboard(playerOneBoard);
const verticalShipPlacement = new Gameboard(playerOneBoard);

describe('Gameboard placeShip testing in isolation (no helper functions)', () => {
    test('A ship is placed on the board based on the type of ship given, its initial starting location, its HORIZONTAL axis direction, and the Ships length', () => {
        horizontalShipPlacement.placeShip(Carrier, 1, 1, false)
        expect(playerOneBoard).toStrictEqual([
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
        expect(playerOneBoard).toStrictEqual([
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
        expect(playerOneBoard).toStrictEqual([
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

describe("playerOneBoard placeShip function, testing ship overlap and wall hit methods together and seperately (i.e., placement should be possible in either cases", () => {
    test("New ship placement overlaps with a previously placed ship (checkOverlap method); should not be possible to do this", () => {
        verticalShipPlacement.placeShip(Destroyer, 5, 4, true);
        verticalShipPlacement.placeShip(Submarine, 3, 4, true);
        expect(playerOneBoard).toStrictEqual([
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
    test("New HORIZONTAL ship placement hits playerOneBoard wall (checkWallHit method); should not be possible to do this", () => {
        horizontalShipPlacement.placeShip(Destroyer, 9, 9, false);
        expect(playerOneBoard).toStrictEqual([
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
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
    test("New VERTICAL ship placement hits playerOneBoard wall (checkWallHit method); should not be possible to do this", () => {
        verticalShipPlacement.placeShip(Destroyer, 9, 9, true);
        expect(playerOneBoard).toStrictEqual([
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
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
    test("Multiple ship placements but some with either illegal ship overlaps, wallhits or both", () => {
        verticalShipPlacement.placeShip(Destroyer, 9, 9, true); // shouldn't work
        horizontalShipPlacement.placeShip(Carrier, 5, 2, false);
        verticalShipPlacement.placeShip(Battleship, 4, 2, true); // shouldn't work
        verticalShipPlacement.placeShip(Destroyer, 9, 8, true); // shouldn't work
        horizontalShipPlacement.placeShip(Destroyer, 1, 1, false);
        horizontalShipPlacement.placeShip(Submarine, 5, 0, false); // shouldn't work
        verticalShipPlacement.placeShip(Battleship, 4, 4, true) // shouldn't work
        expect(playerOneBoard).toStrictEqual([
            [null, null, null, null, null, null, null, null, null, null],
            [null, "Destroyer", "Destroyer", null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, "Carrier", "Carrier", "Carrier", "Carrier", "Carrier", null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
        ])
    })
})

describe("playerOneBoard checkOverlap test in isolation (true = no overlap occured; false = overlap occured)", () => {
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

describe("checkWallHit method testing in isolation (true = no wall hit; false = wall hit occured)", () => {
    test("Check when a wall hit doesn't occur (HORIZONTAL ship test)", () => {
        expect(horizontalShipPlacement.checkWallHit(Carrier, 3, 3, false)).toBe(true)
    })
    test("Check when a wall hit doesn't occur (VERTICAL ship test)", () => {
        expect(verticalShipPlacement.checkWallHit(Destroyer, 3, 9, true)).toBe(true)
    })
    test("Check when a wall hit occurs (HORIZONTAL ship test)", () => {
        expect(horizontalShipPlacement.checkWallHit(Carrier, 3, 8, false)).toBe(false)
    })
    test("Check when a wall hit occurs (VERTICAL ship test)", () => {
        expect(verticalShipPlacement.checkWallHit(Destroyer, 9, 9, true)).toBe(false)
    })
})

describe("Testing of receiveAttack method", () => {
    test("check if shot is a ship hit", () => {
        verticalShipPlacement.placeShip(Submarine, 5, 3, true)
        expect(verticalShipPlacement.receiveAttack(5, 3, playerShips)).toBe(undefined)
    })
    test("check if shot is a ship miss", () => {
        verticalShipPlacement.placeShip(Submarine, 5, 3, true)
        expect(verticalShipPlacement.receiveAttack(0, 0, playerShips)).toBe('X')
    })
    test("Check hit of multiple ships on board and name the ship that was hit", () => {
        verticalShipPlacement.placeShip(Carrier, 5, 3, true)
        verticalShipPlacement.placeShip(Submarine, 1, 1, true)
        horizontalShipPlacement.placeShip(Destroyer, 5, 6, false)
        expect(playerOneBoard[5][3]).toBe("Carrier")
        expect(playerOneBoard[3][1]).toBe("Submarine")
        expect(playerOneBoard[5][6]).toBe("Destroyer")
    })
    test("test that a Ship object records the hit shot for each shot that hit it", () => {
        horizontalShipPlacement.placeShip(Destroyer, 6, 2, false)
        horizontalShipPlacement.receiveAttack(6, 2, playerShips) // hit
        horizontalShipPlacement.receiveAttack(1, 8, playerShips) // miss
        horizontalShipPlacement.receiveAttack(6, 3, playerShips) // hit
        expect(Destroyer['availableHitLocation']).toStrictEqual(['6,2', '6,3'])
    })
    test("test that a playerOneBoard records a missed shot", () => {
        verticalShipPlacement.placeShip(Submarine, 2, 3, true)
        verticalShipPlacement.receiveAttack(1, 1, playerShips) // hit
        horizontalShipPlacement.receiveAttack(9, 9, playerShips) // miss
        expect(playerOneBoard).toStrictEqual([
            [null, null, null, null, null, null, null, null, null, null],
            [null, "X", null, null, null, null, null, null, null, null],
            [null, null, null, "Submarine", null, null, null, null, null, null],
            [null, null, null, "Submarine", null, null, null, null, null, null],
            [null, null, null, "Submarine", null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, "X"],
        ])
    })
})

describe("testing whether ships sink based on the number of direct hits of its position on the playerOneBoard", () => {
    test("Ship is not sunk, not enough hits", () => {
        verticalShipPlacement.placeShip(Cruiser, 3, 8, true)
        verticalShipPlacement.receiveAttack(3, 8, playerShips) // hit
        verticalShipPlacement.receiveAttack(1, 1, playerShips) // miss
        verticalShipPlacement.receiveAttack(5, 8, playerShips) // hit
        Cruiser.isSunk()
        expect(Cruiser.sunkStatus).toBe(false)
    })
    test("Ship is sunk, has enough hits (tracked by playerOneBoard Class)", () => {
        verticalShipPlacement.placeShip(Cruiser, 3, 8, true)
        verticalShipPlacement.receiveAttack(3, 8, playerShips) // hit
        verticalShipPlacement.receiveAttack(4, 1, playerShips) // miss
        verticalShipPlacement.receiveAttack(5, 8, playerShips) // hit
        verticalShipPlacement.receiveAttack(4, 8, playerShips) // hit
        Cruiser.isSunk()
        expect(Cruiser.sunkStatus).toBe(true)
    })
})

describe("testing whether all ships on the playerOneBoard have been sunk. This would mark the end of the game and a winner", () => {
    test("not all ships have sunk", () => {
        horizontalShipPlacement.placeShip(Carrier, 1, 1, false)
        horizontalShipPlacement.placeShip(Destroyer, 2, 2, false)
        horizontalShipPlacement.placeShip(Submarine, 3, 3, false)
        horizontalShipPlacement.placeShip(Cruiser, 4, 4, false)
        horizontalShipPlacement.placeShip(Battleship, 5, 5, false)
        horizontalShipPlacement.receiveAttack(1,1, playerShips)
        horizontalShipPlacement.receiveAttack(1,2, playerShips)
        horizontalShipPlacement.receiveAttack(1,3, playerShips)
        horizontalShipPlacement.receiveAttack(1,4, playerShips)
        horizontalShipPlacement.receiveAttack(1,5, playerShips)

        horizontalShipPlacement.receiveAttack(2,2, playerShips)
        horizontalShipPlacement.receiveAttack(2,3, playerShips)

        horizontalShipPlacement.receiveAttack(3,3, playerShips)
        horizontalShipPlacement.receiveAttack(3,4, playerShips)
        horizontalShipPlacement.receiveAttack(3,5, playerShips)

        horizontalShipPlacement.receiveAttack(4,4, playerShips)
        horizontalShipPlacement.receiveAttack(4,5, playerShips)
        horizontalShipPlacement.receiveAttack(4,6, playerShips)

        horizontalShipPlacement.receiveAttack(5,5, playerShips)
        horizontalShipPlacement.receiveAttack(5,6, playerShips)
        horizontalShipPlacement.receiveAttack(5,3, playerShips) // missed shot
        horizontalShipPlacement.receiveAttack(5,3, playerShips) // missed shot

        Carrier.isSunk()
        Destroyer.isSunk()
        Submarine.isSunk()
        Cruiser.isSunk()
        Battleship.isSunk()
        expect(horizontalShipPlacement.allShipsSunk(playerShips)).toBe(false)
    })
    test("all ships have sunk", () => {
        horizontalShipPlacement.placeShip(Carrier, 1, 1, false)
        horizontalShipPlacement.placeShip(Destroyer, 2, 2, false)
        horizontalShipPlacement.placeShip(Submarine, 3, 3, false)
        horizontalShipPlacement.placeShip(Cruiser, 4, 4, false)
        horizontalShipPlacement.placeShip(Battleship, 5, 5, false)

        horizontalShipPlacement.receiveAttack(1,1, playerShips)
        horizontalShipPlacement.receiveAttack(1,2, playerShips)
        horizontalShipPlacement.receiveAttack(1,3, playerShips)
        horizontalShipPlacement.receiveAttack(1,4, playerShips)
        horizontalShipPlacement.receiveAttack(1,5, playerShips)

        horizontalShipPlacement.receiveAttack(2,2, playerShips)
        horizontalShipPlacement.receiveAttack(2,3, playerShips)

        horizontalShipPlacement.receiveAttack(3,3, playerShips)
        horizontalShipPlacement.receiveAttack(3,4, playerShips)
        horizontalShipPlacement.receiveAttack(3,5, playerShips)

        horizontalShipPlacement.receiveAttack(4,4, playerShips)
        horizontalShipPlacement.receiveAttack(4,5, playerShips)
        horizontalShipPlacement.receiveAttack(4,6, playerShips)

        horizontalShipPlacement.receiveAttack(5,5, playerShips)
        horizontalShipPlacement.receiveAttack(5,6, playerShips)
        horizontalShipPlacement.receiveAttack(5,7, playerShips)
        horizontalShipPlacement.receiveAttack(5,8, playerShips) 
        
        Carrier.isSunk()
        Destroyer.isSunk()
        Submarine.isSunk()
        Cruiser.isSunk()
        Battleship.isSunk()
        // console.log(Battleship.sunkStatus)
        expect(horizontalShipPlacement.allShipsSunk(playerShips)).toBe(true)
        console.log(horizontalShipPlacement.allShipsSunk(playerShips))
    })
})
