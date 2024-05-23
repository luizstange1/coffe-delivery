import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme["base-text"]};
    }

    body, input, textarea, button {
        -webkit-font-smoothing: antialiased;
        font-weight: 400;
        font-size: 1rem;
        font-family: "Baloo 2", sans-serif;
    }

    button {
        cursor: pointer;
        border: 0;
    }
`;
