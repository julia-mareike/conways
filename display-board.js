const blessed = require('blessed')
const screen = blessed.screen()
const box = blessed.box({
  top: 'center',
  left: 'center',
  width: '100%',
  height: '100%',
  tags: true,
  style: {
    fg: 'magenta'
  }
})

screen.title = 'Conway\'s Game of Life'
screen.key(['escape', 'q', 'C-c'], () => process.exit(0))
screen.append(box)

function displayBoard (board) {
  const symbol = process.argv[2]
  let liveCell = '✼'
  if (symbol && symbol !== 'ok') liveCell = symbol

  let finalBoard = []
  for (let i = 0; i < board.length; i++) {
    let row = board[i]
    let finalRow = (row.map((cell) => (!cell) ? (cell === null ? '.' : ' ') : liveCell))
    finalBoard.push((finalRow).join(' ') + '\n')
  }

  box.setContent(finalBoard.join(' '))
  screen.render()
}

module.exports = displayBoard
