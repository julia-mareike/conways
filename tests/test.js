/*global test expect*/

const createBoard = require('../createBoard')
const populateBoard = require('../populateBoard')
const generateLife = require('../generateLife')
const countNeighbours = require('../countNeighbours')
const checkEachCell = require('../checkEachCell')
const nextGeneration = require('../nextGeneration')


test('test runner working', function () {
    expect(true).toBeTruthy()
})

test('generate size specific board', function () {
    const board = createBoard(3)
    const expected = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    const actual = board
    expect(actual).toEqual(expected)
})

test('life is generated randomly', () => {
    const actual = generateLife()
    expect(actual).toBeGreaterThanOrEqual(0)
})

test('board is populated with live cells', () => {
    const board = createBoard(5)
    const lifeyBoard = populateBoard(board)
    const expected = lifeyBoard.find(function (life) {
        return life === 1
    })
    expect(expected).toBeTruthy
})

test('counts live neighbours around cell', () => {
    const board = [
        [0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 1, 1],
        [0, 1, 0, 1, 1],
        [0, 0, 0, 0, 0]]
    const actual = countNeighbours(board, 2, 3)
    expect(actual).toBe(5)
})

test('loop through cells and return neighbours array', () => {
    const board = [
        [0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 1, 1],
        [0, 1, 0, 1, 1],
        [0, 0, 0, 0, 0]]

    const expected = [
        [1, 1, 2, 1, 1],
        [1, 1, 4, 3, 3],
        [2, 3, 5, 5, 4],
        [1, 1, 4, 4, 3],
        [1, 1, 2, 2, 2]]

    const actual = checkEachCell(board)
    console.log(actual)
    expect(actual).toEqual(expected)
})

test('next generation is generated according to rules', () => {
    const board = [
        [1, 1, 0, 1, 1],
        [0, 0, 1, 0, 0],
        [1, 0, 0, 1, 0],
        [1, 0, 0, 1, 1],
        [1, 1, 0, 0, 0]
    ]

    const neighboursBoard = [
        [1, 2, 3, 2, 1],
        [3, 4, 3, 4, 3],
        [1, 3, 3, 3, 3],
        [3, 4, 3, 2, 2],
        [2, 2, 2, 2, 2]
    ]

    const expected = [
        [0, 1, 1, 1, 0],
        [1, 0, 1, 0, 1],
        [0, 1, 1, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 0, 0, 0]]

    const actual = nextGeneration(board, neighboursBoard)
    expect(actual).toEqual(expected)
})
