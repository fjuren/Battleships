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

    switch(shipAsString) {
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
    AI_Carrier,
    AI_Battleship,
    AI_Cruiser,
    AI_Submarine,
    AI_Destroyer
} = require('../setup/createShips')
// string -> object
// Converts the string of a Ship to its object form 
const stringToAIShip = (shipAsAIString) => {
    
    let convertedShip = null

    switch(shipAsAIString) {
        case 'AI_Carrier':
            convertedShip = AI_Carrier
            break;
        case 'AI_Cruiser':
            convertedShip = AI_Cruiser
            break;
        case 'AI_Battleship':
            convertedShip = AI_Battleship
            break;
        case 'AI_Submarine':
            convertedShip = AI_Submarine
            break;
        case 'AI_Destroyer':
            convertedShip = AI_Destroyer
            break;
        default:
            break;
    }
    return convertedShip
}

module.exports = {stringToShip, stringToAIShip}