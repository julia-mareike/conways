const countNeighbours = require('./count-neighbours')

function checkEachCell (board) {
  let neighboursArray = []
  for (let i = 0; i < board.length; i++) {
    let row = []
    for (let j = 0; j < board[i].length; j++) {
      let total = countNeighbours(board, i, j)
      row.push(total)
    }
    neighboursArray.push(row)
  }
  return neighboursArray
}

module.exports = checkEachCell
