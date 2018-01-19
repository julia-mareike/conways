function countNeighbours(arr, row, col) {

    let neighbours = 0
    let testCell = arr[row][col]

    // h/t to Peter for Math.max/min (•‿•)
    // creates delimited box around (& including) target cell to loop over

    const rowStart = Math.max(0, row - 1)
    const rowEnd = Math.min(arr.length - 1, row + 1)
    const colStart = Math.max(0, col - 1)
    const colEnd = Math.min(arr.length - 1, col + 1)

    for (let i = rowStart; i <= rowEnd; i++) { 
        let rowArray = []
        for (let j = colStart; j <= colEnd; j++) {
            if (arr[i][j]) neighbours++ // if cell is true (1), increase neighbours count
        }
    }
    if (testCell) neighbours--          // if target cell is true (1), minus it off neighbours
    return neighbours
}

module.exports = countNeighbours