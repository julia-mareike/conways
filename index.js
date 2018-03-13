// --> yarn start 'symbol' | size | rate | 'string' //

const generateBoard = require('./generate-board')
const checkEachCell = require('./check-each-cell')
const nextGeneration = require('./next-generation')
const displayBoard = require('./display-board')

const size = process.argv[3] || 60
const rate = process.argv[4] || 80
let board = generateBoard(size)

setInterval(() => {
    displayBoard(board)
    setTimeout(reset, 400)
}, rate)

function reset() {
    nextGeneration(board, checkEachCell(board))
}