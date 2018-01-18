const assignLetters = require('./assignLetters')

function typeOutBoard(string) {
    // string = hello
    // const boardSize = string.length * 5
    // let board = createBoard(boardSize)

    let board = []
    let characters = string.split("");

    for (let i = 0; i < characters.length; i++) {
        board.push(assignLetters(characters[i]))
    }

   // console.log(board)

//     let printBoard = []

// makeFinalBoard(board)
//    function makeFinalBoard(board) {
//         for (let i = 0; i < characters.length; i++) {
//         for (let j = 0; j < 5; j++) {
//         printBoard.push(board[j][i])
//     }
   
    // const rowStart = Math.max(0, row - 1)
    // const rowEnd = Math.min(arr.length - 1, row + 1)
    // const colStart = Math.max(0, col - 1)
    // const colEnd = Math.min(arr.length - 1, col + 1)

    // for (let i = rowStart; i <= rowEnd; i++) {
    //     let rowArray = []
    //     for (let j = colStart; j <= colEnd; j++) {
    //         if (arr[i][j]) neighbours++
    //     }
    // }
    // if (testCell) neighbours--
    // return neighbours
//console.log(board)
    return board
}
//typeOutBoard('ab')
module.exports = typeOutBoard