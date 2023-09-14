// styles.ts
import { createGlobalStyle } from "styled-components";
import EF_jejudoldam from "./static/font/EF_jejudoldam.ttf"
export const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: 'EF_jejudoldam';
    src: url(${EF_jejudoldam}) format('truetype');
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
        background: #f2f1ee; // 배경색 추가
        margin: 0; // 화면의 모든 공간을 채우기 위해 margin을 0으로 설정
    }

    #content {
        position: relative;
        height: 100%;
        overflow: auto;
        z-index: 1;
    }
`;
