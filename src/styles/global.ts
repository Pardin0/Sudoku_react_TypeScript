import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
    ${({ theme }) => css`
        html {
            height: 100%;

            body {
                display: flex;
                flex-direction: column;
                height: 100%;
                margin: 0;

                /* Referencing Index.html from public folder */
                #root {
                    background: ${theme.colors.background};
                    color: ${theme.colors.black};
                    display: flex;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    height: 100%;
                    justify-content: center;
                    padding: 15px;
                }
            }
        }
    `}
`
