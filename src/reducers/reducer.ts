import { AnyAction } from 'redux'
import { createFullGrid, removeNumbers } from 'utils'
import copyGrid from 'utils/copy-grid'
import { IReducer } from './interface'
import * as types from './types'

const initialState: IReducer = {}

function reducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case types.CREATE_GRID: {
            const solveGrid = createFullGrid()
            const gridCopy = copyGrid(solveGrid)
            const challengeGrid = removeNumbers(gridCopy)
            const workingGrid = copyGrid(challengeGrid)
            return {
                ...state,
                challengeGrid,
                solveGrid,
                workingGrid,
            }
        }

        case types.SELECTED_BLOCK:
            return { ...state, selectedBlock: action.coords }
        default:
            return state
    }
}

export default reducer
