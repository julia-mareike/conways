function countNeighbours(arr, row, col) {

    let neighbours = 0
    let testCell = arr[row][col]

    // Full credit to Peter for Math.max/min!
    const rowStart = Math.max(0, row - 1)
    const rowEnd = Math.min(arr.length - 1, row + 1)
    const colStart = Math.max(0, col - 1)
    const colEnd = Math.min(arr.length - 1, col + 1)

    for (let i = rowStart; i <= rowEnd; i++) {
        let rowArray = []
        for (let j = colStart; j <= colEnd; j++) {
            if (arr[i][j]) neighbours++
        }
    }
    if (testCell) neighbours--
    return neighbours
}

module.exports = countNeighbours