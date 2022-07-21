//  I can import GRID just using typings because of "baseUrl": "src" in tsconfig.json file.
import { GRID, NUMBERS } from 'typings'
import {
    checkGrid,
    identifySquare,
    isInCol,
    isInRow,
    shuffle,
    isInSquare,
} from 'utils'

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
/**
 * A backtracking/recursive function to check all the possible combinations of numbers a solution is found
 * @param grid:; 9X9 sSudoku Grid
 */

function fillGrid(grid: GRID) {
    let row = 0
    let col = 0

    for (let i = 0; i < 81; i++) {
        row = Math.floor(i / 9)
        col = i % 9

        if (grid[row][col] === 0) {
            shuffle(numbers)

            for (let value of numbers) {
                // is it not in grid row?
                if (!isInRow({ grid, row, value }))
                    if (!isInCol({ col, grid, value })) {
                        const square = identifySquare({ col, grid, row })
                        if (!isInSquare({ square, value })) {
                            grid[row][col] = value
                            //check grid if it is full, if yes, stop and return true
                            if (checkGrid(grid)) return true
                            //otherwise we run fillGrid(grid)
                            else if (fillGrid(grid)) return true
                        }
                    }
            }
            break
        }
    }

    grid[row][col] = 0
}

export default fillGrid
//  video 40:51
