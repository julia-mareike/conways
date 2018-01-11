/*global test expect*/
const createBoard = require('../createBoard')
const populateBoard = require('../populateBoard')

test('test runner working', function () {
    expect(true).toBeTruthy()
})

test('generate 5x5 board', function () {
    var board = createBoard(5)
    const expected = [
        ['', '', '', '', ''], 
        ['', '', '', '', ''], 
        ['', '', '', '', ''], 
        ['', '', '', '', ''], 
        ['', '', '', '', '']
    ]
    const actual = board
    expect(actual).toEqual(expected)
})

test('board is populated with live cells', function () {


})