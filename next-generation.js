function nextGeneration (board, neighboursBoard) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let neighbours = neighboursBoard[i][j]
      if (board[i][j]) {
        if (neighbours === 2 || neighbours === 3) {
          board[i][j] = 1
        } else board[i][j] = null
      }
      if (!board[i][j] && neighbours === 3) {
        board[i][j] = 1
      }
    }
  } return board
}

module.exports = nextGeneration
