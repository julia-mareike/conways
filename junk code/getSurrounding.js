function getSurrounding(arr) {
    // const max = bL - 1
    // const min = 0
    // const minMax = min || max
    // const minMax = bL - 1 || 0
    // let neighbours = []
    // for (var j = 1; j < gridHeight – 1; j++)  //iterate through rows

    //     for (var k = 1; k < gridWidth – 1; k++)  //iterate through columns
    const row = arr[i]
    const col = arr[i][j]
    let neighbours = []
    let current = arr[i][j]

    const rowStart = Math.max(0, i - 1)
    for (let i = rowStart; i <= rowEnd; i++) {
        let row = []
        for (let j = colStart; j <= colEnd; j++) {
            if (current) row.push(current)
            // const top = i - 1
            // const bottom = i + 1
            // const left = j - 1
            // const right = j + 1
            // const doesntExist = -1
            // let neighbours = 0

            // if (top == doesntExist) {
            //     console.log('top')
            //     if (left == doesntExist) {
            //         console.log('corner')
            //         if (board[i][right]) {console.log('add right'), neighbours++}
            //         if (board[bottom][i]) {console.log('add bottom'), neighbours++}
            //         if (board[bottom][right]) {console.log('add bottom right'), neighbours++
            //     }
            //     return('wall')
            // }
            //         if (arr[i - 1][j - 1]) {
            //             neighbours++
            //             console.log('neighbours added')
            //         } else return
            //         console.log(neighbours)
            //         console.log('.', arr[top])
            //     }
        }
        // neighbours += board[top][j]
        // neighbours += board[top][right]
        // neighbours += board[j][left]
        // neighbours += board[j][right]
        // neighbours += board[bottom][left]
        // neighbours += board[bottom][j]
        // neighbours += board[bottom][right]
        console.log('hi')
        return neighbours
        console.log(neighbours)
    }


}
let board = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
]
let answer = getSurrounding(board)
console.log(answer)

module.exports = getSurrounding