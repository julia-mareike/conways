const assignLetters = require('./assign-letters')
const buildBoard = require('./build-board')

function typeOutBoard(string) {

    const characters = string.split('');
    let array = []
    for (let i = 0; i < 5; i++) {
        array.push(assignLetters(characters[i]) || buildBoard(5))
    }

    let letterArray = []

    for (let i = 0; i < 5; i++) {
        let rowArray = []
        for (let j = 0; j < 5; j++) {
            rowArray.push(array[j][i])
        }
        letterArray.push(rowArray)
    }

    let finalBoard = []

    for (let i = 0; i < 5; i++) {
        finalBoard.push(letterArray[i][0].concat(letterArray[i][1], letterArray[i][2], letterArray[i][3], letterArray[i][4]))
    }
    return finalBoard
}

module.exports = typeOutBoard