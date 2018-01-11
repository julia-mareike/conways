function populateBoard (board) {
const liveCell = ['.']
for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
        console.log('sup')
        if (Math.random() > 0.5) {
            console.log('hi')
            board[i][j] = liveCell
        }
    }
//console.log(board)    
}

//board.forEach(item => {item.('.')})
return board
//console.log(board)
}

module.exports = populateBoard