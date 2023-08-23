// styles.ts
import { createGlobalStyle } from "styled-components";

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
    body {
        background: #ede8d7; // 배경색 추가
        margin: 0; // 화면의 모든 공간을 채우기 위해 margin을 0으로 설정
    }

    #content {
        position: relative;
        height: 100%;
        overflow: auto;
        z-index: 1;
    }
`;
