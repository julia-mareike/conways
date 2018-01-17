
            // for (let i = 0; i < bL; i++) {
            //     for (let j = 0; j < bIL; j++) {

            //         if (i - 1) {
            //             if (j - 1) {

            //             }
            //         }
            //     }
            // }



            //     for (let i = 0; i < 10; i++) {
            //         for (let j = 0; j < 10; j++) {
            //             // const current = board[i][j]
            //             if (i == min || i == max){
            //                 if (j === min || j == max) {
            //                     console.log(i, j, 'corner')
            //                     pushLiveNeighbours(i, j, 3)
            //                 } else {
            //                     console.log(i, j, 'wall')
            //                     pushLiveNeighbours(i, j, 5)
            //                 }
            //             } console.log('done')
            //         }
            //     }
            //     return neighbours
            // }

             // return board = [['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    // ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    // ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    // ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    // ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    // ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    // ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    // ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    // ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    // ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']]



    //Junk ahoy

    // function createBoard(size) {
    //generate array for board => export to index


    //const size = 10
    //createBoard()

    // fillBoard(board)
    // console.log(board)
// }

// function fillBoard(board) {
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board.length; j++) {
//             board[i][j] = generateLife()
//         }
//     }
//     return board
// }

// function generateLife() {
//     let life = Math.random()
//     if (life < 0.8) {
//         return 'o'
//     } else {
//         return 'x'
//     }
// }



//Junk below
// let board = new Array
// let rows = new Array
// function generateBoard (size) {
// board = new Array(size)
// board.fill(new Array(size))
// board[0].fill('x')
// return board
// }

// let newBoard = generateBoard(10)
// console.log(newBoard)

// console.log(board[0])

// board[1].fill('.')
// console.log(board[1])
// console.log(board)
//  for (let i = 0; i < board.length; i++) {
//      for (let j = 0; j < board[i].length; j++) {
//         this.fill(generateLife)
//     }
//     this.fill(generateLife)
// }

//  console.log(board)


//         // const board = new Array(size)
//         // board.fill(new Array(size))
//         // for (let item of board) {
//         //     console.log('hi')
//         //     item.forEach(item => {
//         //       let life = Math.random()
//         //       console.log(life)
//         //       console.log('hello')
//         //         // if (life > 0.8) {
//         //         //     item.fill ('.')
//         //         // } else {
//         //         //     item.fill('')
//         //         // }
//         //     })
//         // }
//         //board.forEach(item => {
//         //    item.board.forEach(item => {
//         //         let life = Math.random()
//         //         if (life > 0.6) {
//         //             item.fill('.')
//         //         } else {
//         //             item.fill('')
//         //         }
//         //     })
//         // }

//         return board

// }


    // function generateLife() {
//         let life = Math.random()
//         if (life < 0.8) {
//             return 'o'
//         } else {
//             return 'x'
//         }
//     }

// newBoard.forEach(function(cell){
//     getSurrounding(newBoard)
// })


//Junk follows

// function createBoard() {

//     let board = [['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//     ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//     ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//     ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//     ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//     ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//     ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//     ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//     ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
//     ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']]

//     populateBoard(board)
//     console.log(board)
// }

    // function populateBoard(board) {
    //     for (let i = 0; i < board.length; i++) {
    //         for (let j = 0; j < board.length; j++) {
    //             board[i][j] = generateLife()
    //         }
    //     }
    //     return board
    // }

    // function generateLife() {
    //     let life = Math.random()
    //     if (life < 0.8) {
    //         return 'o'
    //     } else {
    //         return 'x'
    //     }
    // }

    //hoarding more junk

// function populateBoard (board) {
// const liveCell = ['.']
// for (var i = 0; i < board.length; i++) {
//     for (var j = 0; j < board.length; j++) {
//         console.log('sup')
//         if (Math.random() > 0.5) {
//             console.log('hi')
//             board[i][j] = liveCell
//         }
//     }
// //console.log(board)    
// }

// //board.forEach(item => {item.('.')})
// return board
// //console.log(board)
// }

// module.exports = populateBoard
//function getSurrounding(arr) {
    // const max = bL - 1
    // const min = 0
    // const minMax = min || max
    // const minMax = bL - 1 || 0
    // let neighbours = []
    // for (var j = 1; j < gridHeight – 1; j++)  //iterate through rows

    // //     for (var k = 1; k < gridWidth – 1; k++)  //iterate through columns
    // const row = arr[i]
    // const col = arr[i][j]
    // let neighbours = []
    // let current = arr[i][j]

    // const rowStart = Math.max(0, i - 1)
    // for (let i = rowStart; i <= rowEnd; i++) {
    //     let row = []
    //     for (let j = colStart; j <= colEnd; j++) {
    //         if (current) row.push(current)
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
//         console.log('hi')
//         return neighbours
//         console.log(neighbours)
//     }


// }
// let board = [
//     [1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 1]
// ]
// let answer = getSurrounding(board)
// console.log(answer)

// module.exports = getSurrounding