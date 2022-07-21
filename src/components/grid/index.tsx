import { FC, Children, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { createGrid } from 'reducers'
import { AnyAction, Dispatch } from 'redux'
import { GRID, INDEX } from 'typings'
import { createFullGrid } from 'utils'
import Block from './block'
import { Container, Row } from './styles'

const Grid: FC = () => {
    const dispatch = useDispatch<Dispatch<AnyAction>>()
    const create = useCallback(() => dispatch(createGrid()), [dispatch])
    useEffect(() => {
        create()
    }, [create])

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
