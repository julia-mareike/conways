function displayBoard(board) {
    for (let i = 0; i < board.length; i++) {
        let row = board[i]          // print out row by row

        /* map new values. For each cell, => if cell is 
        true (1) replace with '|', otherwise nothing.
        .join removes array brackets and commas */

        console.log(row.map((cell) => (cell) ? '|' : ' ').join(' '))
    }
}

module.exports = displayBoard