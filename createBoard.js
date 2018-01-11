function createBoard(size) {
    //generate array for board => export to index
    const board = new Array(size)
    board.fill(new Array(size))
    board.forEach(item => { item.fill(' ') })
    return board
}

console.log(createBoard(5))

module.exports = createBoard