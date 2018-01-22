
function buildBoard(row, col) {
if (!col) col = row
    let board = []
    for (let i = 0; i < row; i++) {
        let inner = []
        for (let j = 0; j < col; j++) {
            inner.push(0)
        }
        board.push(inner)
    }
    return board;
}
//console.log(buildBoard(10, 25))
module.exports = buildBoard