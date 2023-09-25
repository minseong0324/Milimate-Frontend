// styles.ts
import { createGlobalStyle } from "styled-components";
<<<<<<< HEAD
import Pretendard from "./static/font/Pretendard-Light.woff2"
=======
import EF_jejudoldam from "./static/font/EF_jejudoldam.ttf"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
>>>>>>> 2366ece (pull before push)
export const GlobalStyle = createGlobalStyle`
  
   @font-face {
    font-family: 'Pretendard';
    src: url(${Pretendard}) format('woff2');
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
        background: #F2F1EE; // 배경색 추가
        font-family: 'Pretendard';
        margin: 0; // 화면의 모든 공간을 채우기 위해 margin을 0으로 설정
    }

    #content {
        position: relative;
        height: 100%;
        overflow: auto;
        z-index: 1;
    }
`;
