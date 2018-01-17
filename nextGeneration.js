

function nextGeneration(board, neighboursBoard) {

    let rebornArray = []
    for (let i = 0; i < board.length; i++) {
        let row = []
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j]) { //if alive
                if (neighboursBoard[i][j] === 2 || neighboursBoard[i][j] === 3) { // if 2 or 3 neigbours
                    board[i][j] = 1 // lives
                }
                else board[i][j] = 0 // else dies
            }
            if (!board[i][j] && neighboursBoard[i][j] === 3) { //if dead & 3 neighbours
                board[i][j] = 1 //lives!
            }
        }

    } return board
}
    // let board = [
    //     [1, 1, 0, 1, 1],
    //     [0, 0, 1, 0, 0],
    //     [1, 0, 0, 1, 0],
    //     [1, 0, 0, 1, 1],
    //     [1, 1, 0, 0, 0]
    // ]

    // let neighboursBoard = [
    //     [1, 2, 3, 2, 1],
    //     [3, 4, 3, 4, 3],
    //     [1, 3, 3, 3, 3],
    //     [3, 4, 3, 2, 2],
    //     [2, 2, 2, 2, 2]
    // ]

    // nextGeneration(board, neighboursBoard)
    // console.log('next gen\n', board)
    module.exports = nextGeneration