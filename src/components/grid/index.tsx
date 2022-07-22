import { FC, Children, useEffect, useCallback } from 'react'
import useMouseTrap from 'react-hook-mousetrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { createGrid, IReducer, selectedBlock } from 'reducers'
import { AnyAction, Dispatch } from 'redux'
import { BLOCK_COORDS, GRID, INDEX } from 'typings'
import { createFullGrid } from 'utils'
import Block from './block'
import { Container, Row } from './styles'

interface IState {
    selectedBlock?: BLOCK_COORDS
}

const Grid: FC = () => {
    const state = useSelector<IReducer, IState>(({ selectedBlock }) => ({
        selectedBlock,
    }))
    const dispatch = useDispatch<Dispatch<AnyAction>>()
    const create = useCallback(() => dispatch(createGrid()), [dispatch])
    useEffect(() => {
        create()
    }, [create])

    function moveDown() {
        if (state.selectedBlock && state.selectedBlock[0] < 8)
            dispatch(
                selectedBlock([
                    (state.selectedBlock[0] + 1) as INDEX,
                    state.selectedBlock[1],
                ])
            )
    }
    function moveUp() {
        if (state.selectedBlock && state.selectedBlock[0] > 0)
            dispatch(
                selectedBlock([
                    (state.selectedBlock[0] - 1) as INDEX,
                    state.selectedBlock[1],
                ])
            )
    }
    function moveRight() {
        if (state.selectedBlock && state.selectedBlock[1] < 8)
            dispatch(
                selectedBlock([
                    state.selectedBlock[0],
                    (state.selectedBlock[1] + 1) as INDEX,
                ])
            )
    }
    function moveleft() {
        if (state.selectedBlock && state.selectedBlock[1] > 0)
            dispatch(
                selectedBlock([
                    state.selectedBlock[0],
                    (state.selectedBlock[1] - 1) as INDEX,
                ])
            )
    }

    useMouseTrap('down', moveDown)
    useMouseTrap('up', moveUp)
    useMouseTrap('right', moveRight)
    useMouseTrap('left', moveleft)

    return (
        <Container data-cy="grid-container">
            {Children.toArray(
                [...Array(9)].map((_, rowIndex) => (
                    <Row data-cy="grid-row-container">
                        {Children.toArray(
                            [...Array(9)].map((_, colIndex) => (
                                <Block
                                    colIndex={colIndex as INDEX}
                                    rowIndex={rowIndex as INDEX}
                                />
                            ))
                        )}
                    </Row>
                ))
            )}
        </Container>
    )
}

export default Grid
