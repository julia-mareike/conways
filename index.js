// this could look nicer ¯\_(ツ)_/¯

const clear = require('clear')

const populateBoard = require('./populateBoard')
const createBoard = require('./createBoard')
const countNeighbours = require('./countNeighbours')
const checkEachCell = require('./checkEachCell')
const nextGeneration = require('./nextGeneration')
const displayBoard = require('./displayBoard')

let board = (populateBoard(createBoard(50)))

setInterval(tick, 300)

function tick() {
    clear()
    displayBoard(board)
    let neighboursBoard = checkEachCell(board)
    let nextGen = nextGeneration(board, neighboursBoard)
    board = nextGen
}