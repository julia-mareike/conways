function countNeighbours (arr, row, col) {
  const rowStart = Math.max(0, row - 1)
  const rowEnd = Math.min(arr.length - 1, row + 1)
  const colStart = Math.max(0, col - 1)
  const colEnd = Math.min(arr.length - 1, col + 1)

  let neighbours = 0
  let testCell = arr[row][col]

  for (let i = rowStart; i <= rowEnd; i++) {
    for (let j = colStart; j <= colEnd; j++) {
      if (arr[i][j]) neighbours++
    }
  }
  if (testCell) neighbours--
  return neighbours
}

module.exports = countNeighbours
