import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import reportWebVitals from './core/service-worker'
import { ThemeProvider } from 'styled-components'

import { Card, Content, Grid, Title } from './components'
import { configureStore } from 'core'
import { GlobalStyles, theme } from './styles'

const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Provider store={store}>
            <Content data-cy="content">
                <Title data-cy="title"> Sudoku </Title>
                <Card data-cy="card">
                    <Grid />
                </Card>
            </Content>
        </Provider>
    </ThemeProvider>
)

reportWebVitals()

//  Parei em 23:23 do vídeo 2
