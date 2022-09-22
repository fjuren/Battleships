const {
    Carrier,
    Battleship,
    Cruiser,
    Submarine,
    Destroyer
} = require('../setup/createShips')
// string -> object
// Converts the string of a Ship to its object form 
const stringToShip = (shipAsString) => {

    let convertedShip = null

    switch (shipAsString) {
        case 'Carrier':
            convertedShip = Carrier
            break;
        case 'Cruiser':
            convertedShip = Cruiser
            break;
        case 'Battleship':
            convertedShip = Battleship
            break;
        case 'Submarine':
            convertedShip = Submarine
            break;
        case 'Destroyer':
            convertedShip = Destroyer
            break;
        default:
            break;
    }
    return convertedShip
}

const {
    computerCarrier,
    computerBattleship,
    computerCruiser,
    computerSubmarine,
    computerDestroyer
} = require('../setup/createShips')

// string -> object
// Converts the string of a Ship to its object form 
const stringToAIShip = (shipAsAIString) => {

    let convertedShip = null

    switch (shipAsAIString) {
        case 'computerCarrier':
            convertedShip = computerCarrier
            break;
        case 'computerCruiser':
            convertedShip = computerCruiser
            break;
        case 'computerBattleship':
            convertedShip = computerBattleship
            break;
        case 'computerSubmarine':
            convertedShip = computerSubmarine
            break;
        case 'computerDestroyer':
            convertedShip = computerDestroyer
            break;
        default:
            break;
    }
    return convertedShip
}

module.exports = {
    stringToShip,
    stringToAIShip
}