const generateLife = require('./generate-life')

function populateBoard(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            board[i][j] = generateLife()
        }
    }
    return board
}

module.exports = populateBoard