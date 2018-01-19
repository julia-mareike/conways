// yarn start symbol | size | rate | letters

const clear = require('clear')
const readline = require('readline')
const populateBoard = require('./populate-board')
const createBoard = require('./create-board')
const countNeighbours = require('./count-neighbours')
const checkEachCell = require('./check-each-cell')
const nextGeneration = require('./next-generation')
const displayBoard = require('./display-board')
const typeOutBoard = require('./type-out-board')

const size = process.argv[3] || 50
const rate = process.argv[4] || 200
let board = []

if (!process.argv[5]) {
    board = populateBoard(createBoard(size))
} else {
    const letters = typeOutBoard(process.argv[5])
    const padding = createBoard(10, 25)
    board = createBoard(10, 25).concat(letters, padding)
}

setInterval(tick, rate)

function tick() {
    clear()
    displayBoard(board)
    setTimeout(() => {
        let neighboursBoard = checkEachCell(board)
        board = nextGeneration(board, neighboursBoard)
    }, 600)
}

// try to make process.argv order flexible
//
// let word = null
// let symbol = 'o'
// let rate = 500
// let size = 50
// let input = 'process.argv'

//  for (let i = 2; i < input.length; i++) {
// switch (input[i]) {
//     case (Number(input[i]) === false) && input[i].length > 1: 
//     word = input[i];
//     break;
//     case (Number(input[i]) === false) && input[i].length === 1:
//     symbol = input[i];
//     break;
//     case (Number(input[i]) === true) && input[i].length <= 2:
//     size = input[i];
//     break;
//     case (Number(input[i]) === true) && input[i].length > 1:
//     rate = input[i]
//     break;
// }
//  }