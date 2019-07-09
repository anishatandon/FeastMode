import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
    }
    
    *:focus { 
        outline: 0;
        outline: none;
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
        --color-main: ${props => props.theme.colors.main}
        --color-mainLight: ${props => props.theme.colors.mainLight}
        --color-title: ${props => props.theme.colors.titleColor};
        --color-text: ${props => props.theme.colors.textColor};
        --color-background: ${props => props.theme.colors.backgroundColor};
        --color-white: ${props => props.theme.colors.whiteColor};
        --color-border: ${props => props.theme.colors.borderColor};
        --shadowOne: ${props => props.theme.colors.shadowOne};
        --shadowTwo: ${props => props.theme.colors.shadowTwo};

        @media ${props => props.theme.mediaQueries.small} {
            font-size: 60%;
        }
        @media ${props => props.theme.mediaQueries.smallest} {
            font-size: 55%;
        }
    }

    body {
        font-family: "Helvetica Neue", Helvetica, sans-serif;
        font-weight: 400;
        line-height: 1.6;
    }

    a, button {
        cursor: pointer;
    }

    a, input, textarea, button {
        outline: none;
        text-decoration: none;
        font-family: inherit;
    }
`