import { GRID } from 'typings'
import getRandomIndex from 'utils/get-random-index'

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
    }

    return grid
}

export default removeNumbers
