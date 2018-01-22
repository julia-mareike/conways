const buildBoard = require('./build-board')
const populateBoard = require('./populate-board')
const typeOutBoard = require('./type-out-board')
const padding = require('./letter-padding')

function generateBoard(size) {
    if (!process.argv[5]) {
        return populateBoard(buildBoard(size))
    } else {
        const letters = typeOutBoard(process.argv[5])
       return padding.concat(letters, buildBoard(10, 25))
    }
}

module.exports = generateBoard