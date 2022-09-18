const Ship = require('../classes/ship')

const CarrierTest = new Ship("Carrier", 5, [], false);
const DestroyerTest = new Ship("Destroyer", 4, [], false);
const DestroyerTestMulti = new Ship("Destroyer", 4, ["2","3"], false);
const SubmarineTestSunk = new Ship("Submarine", 3, ["2","3","1"], true);
const SubmarineTestSunk2 = new Ship("Submarine", 3, ["2","3"], false);

describe('Ship hit() function testing', () => {
    test('Ship should receive a hit and the number should be appended', () => {
        CarrierTest.hit(3)
        expect(CarrierTest.availableHitLocation).toEqual(["3"])
    });
    test('Ship can receive multiple hits', () => {
        DestroyerTest.hit(4);
        DestroyerTest.hit(2);
        DestroyerTest.hit(1);
        expect(DestroyerTest.availableHitLocation).toEqual(["4","2","1"])
    });
    test('An already hit ship can take more hits', () => {
        DestroyerTestMulti.hit(1);
        expect(DestroyerTestMulti.availableHitLocation).toEqual(["2","3","1"])
    })

});

describe('Ship isSunk() function testing', () => {
    test('Ship is not sunk', () => {
        CarrierTest.isSunk();
        expect(CarrierTest.sunkStatus).toEqual(false)
    });
    test('Ship is sunk', () => {
        SubmarineTestSunk.isSunk();
        expect(SubmarineTestSunk.sunkStatus).toEqual(true);
    })
    test('Ship is hit then sunk', () => {
        SubmarineTestSunk2.hit(1);
        SubmarineTestSunk2.isSunk();
        expect(SubmarineTestSunk2.sunkStatus).toEqual(true);
    })
})