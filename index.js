const board = require('./createBoard')
const populateBoard = require('./populateBoard')


const newBoard = board(5)
const fullBoard = populateBoard(newBoard)

//return populateBoard(newBoard)
console.log(fullBoard)

