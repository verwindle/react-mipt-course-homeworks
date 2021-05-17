import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        width: 100%;
        height: 90%;
        max-height: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #000;
        font-size: 20px;
        background-image: url('/images/tg_items.png');
        background-size: 50% 80%;
        background-repeat: space repeat;
    }
`;
