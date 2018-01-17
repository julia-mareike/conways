const populateBoard = require('./populateBoard')
const createBoard = require('./createBoard')
const countNeighbours = require('./countNeighbours')
const checkEachCell = require('./checkEachCell')
const nextGeneration = require('./nextGeneration')

const board = (populateBoard(createBoard(5)))

const neighboursBoard = checkEachCell(board)
const nextGen = nextGeneration(board, neighboursBoard)
console.log('ng', nextGen)



// console.log('board\n', board)
// console.log('neighbours\n', neighboursBoard)

