const countNeighbours = require('./countNeighbours')

function checkEachCell(board) {

    let neighboursArray = []
    for (let i = 0; i < board.length; i++) {
        let row = []                                 // create row array to be filled & pushed to neighboursArray at end
        for (let j = 0; j < board[i].length; j++) {
            let total = countNeighbours(board, i, j) // pass board & current cell indices to countNeighbours function
            row.push(total)
        }
        neighboursArray.push(row)
    }
    return neighboursArray
}

module.exports = checkEachCell