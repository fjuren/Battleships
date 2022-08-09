const Ship = require('./ship.cjs')

describe('Ship function testing', () => {
    const CarrierTesting = new Ship("Carrier", 5, [], false);
    test.only('Ship should receive a hit and the number should be appended', () => {
        CarrierTesting.hit(3)
        expect(CarrierTesting.availableHitLocation).toEqual([3])
    });
});