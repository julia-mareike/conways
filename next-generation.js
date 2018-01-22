function nextGeneration(board, neighboursBoard) {

    let rebornArray = []                    //outer array
    for (let i = 0; i < board.length; i++) {
        let row = []                        // inner array
        for (let j = 0; j < board[i].length; j++) {

            let neighbours = neighboursBoard[i][j]
            if (board[i][j]) {              //if alive
                if (neighbours === 2 || neighbours === 3) { // if 2 or 3 neigbours
                    board[i][j] = 1         // lives
                }
                else board[i][j] = null        // else dies
            }
            if (!board[i][j] && neighbours === 3) { //if dead & 3 neighbours
                board[i][j] = 1             //lives!
            }
        }
    } return board
}

module.exports = nextGeneration