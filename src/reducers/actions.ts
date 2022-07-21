import { type } from 'os'
import { Action, AnyAction } from 'redux'
import { BLOCK_COORDS } from 'typings'
import * as types from './types'

export const createGrid = (): Action => ({ type: types.CREATE_GRID })

export const selectedBlock = (coords: BLOCK_COORDS): AnyAction => ({
    coords,
    type: types.SELECTED_BLOCK,
})
