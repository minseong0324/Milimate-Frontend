// styles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: 'EF_jejudoldam';
    src: url('./static/font/EF_jejudoldam.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
    }
    #content {
        position: relative;
        height: 100%;
        overflow: auto;
        z-index: 1;
    }
`;