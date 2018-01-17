function createBoard(size) {

    let board = []
    for (let i = 0; i < size; i++) {
        let inner = []
        for (let j = 0; j < size; j++) {
            inner.push(0)
        }
        board.push(inner)
    }
    return board;
}
createBoard(5)
module.exports = createBoard

   