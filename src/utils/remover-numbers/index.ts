import global from 'global'
import { GRID } from 'typings'
import copyGrid from 'utils/copy-grid'
import getRandomIndex from 'utils/get-random-index'
import solveGrid from 'utils/solve-grid'

/**
 * Removes numbers from a full grid to create a Sudoku Puzzle
 * @param grid 9x9 Sudoku Grid
 * @param attempts Number of attempts to solve(higher means more difficult) - default 5
 * @returns
 */

function removeNumbers(grid: GRID, attempts = 5): GRID {
    while (attempts > 0) {
        let row = getRandomIndex()
        let col = getRandomIndex()

        while (grid[row][col] === 0) {
            row = getRandomIndex()
            col = getRandomIndex()
        }

        const backup = grid[row][col]
        grid[row][col] = 0

        const gridCopy = copyGrid(grid)
        global.counter = 0
        solveGrid(gridCopy)

        if (global.counter !== 1) {
            grid[row][col] = backup
            attempts--
        }
    }

    return grid
}

export default removeNumbers
