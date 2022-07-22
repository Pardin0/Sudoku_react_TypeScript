import { BLOCK_COORDS, GRID } from 'typings'

export interface IReducer {
    challengeGrid?: GRID
    selectedBlock?: BLOCK_COORDS
    solveGrid?: GRID
    workingGrid?: GRID
}
