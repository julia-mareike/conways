// const blessed = require('blessed')

// const screen = blessed.screen()
// const box = blessed.box({
//     top: '0',
//     left: '0',
//     width: '100%',
//     height: '100%',
//     tags: true,
//     style: {
//         fg: '#000000',
//         bg: '#eaf651'
//     }
// })
// screen.append(box)

// screen.key(['escape', 'q', 'C-c'], () => process.exit(0))

const symbol = process.argv[2]
// const symbol2 = process.argv[3]

let liveCell = 'o'

if (symbol) liveCell = symbol
// if (isNaN(symbol2)) liveCell = symbol2

function displayBoard(board) {
    let finalBoard = []
    for (let i = 0; i < board.length; i++) {
        let row = board[i]          // print out row by row

        /* map new values. For each cell, => if cell is 
        true (1) replace with '|', otherwise nothing.
        .join removes array brackets and commas */

        console.log(row.map((cell) => (cell) ? liveCell : ' ').join(' '))
        // let finalRow = (row.map((cell) => (cell) ? '|' : ' ').join(' '))
        // finalBoard.push(finalRow)
    }
    // "blessed" throws error:  content.replace is not a function
    // at Box.Element.parseContent (C:\Users\OEM\Documents\Git\workspace\conways\node_modules\blessed\lib\widgets\element.js:364:8)

    // box.setContent(finalBoard)
    // screen.render()
}

module.exports = displayBoard