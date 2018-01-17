
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

    