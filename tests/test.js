/*global test expect*/

const buildBoard = require('../build-board')
const populateBoard = require('../populate-board')
const generateLife = require('../generate-life')
const countNeighbours = require('../count-neighbours')
const checkEachCell = require('../check-each-cell')
const nextGeneration = require('../next-generation')
const assignLetters = require('../assign-letters')
const typeOutBoard = require('../type-out-board')
const displayBoard = require('../display-board')

//build-board
test('generate rectangular board', () => {
    const board = buildBoard(3, 5)
    const expected = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
    const actual = board
    expect(actual).toEqual(expected)
})

test('generate default square board', () => {
    const board = buildBoard(5)
    const expected = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]
    const actual = board
    expect(actual).toEqual(expected)
})

//generate-life // re-write
test('life is generated randomly', () => {
    const actual = generateLife()
    expect(actual).toBeGreaterThanOrEqual(0)
})

//populate-board
test('board is populated with live cells', () => {
    const board = buildBoard(5)
    const lifeyBoard = populateBoard(board)
    const expected = lifeyBoard.includes(1)
    expect(expected).toBeTruthy
})

//count-neighbours
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

//check-each-cell
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
    expect(actual).toEqual(expected)
})

//next-generation
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

//assign-letters
test('input letter is returned as a board', () => {
    const expected =
        [
            [0, 1, 1, 1, 1],
            [0, 1, 0, 0, 0],
            [0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1],
            [0, 1, 1, 1, 1]
        ]
    const actual = assignLetters('s')
    expect(actual).toEqual(expected)
})

//type-out-board
test('string of letters is returned as concatenated board', () => {
    const actual = typeOutBoard('hello')
    const expected =
        [
            [0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1],
            [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1]
        ]
expect(actual).toEqual(expected)
})