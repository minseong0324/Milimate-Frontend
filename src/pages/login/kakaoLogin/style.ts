import styled from "styled-components";

const KakaoLoginButton = styled.button`
width: 343px;
height: 48px;
position: relative;
font-family: "";
background-color: transparent;
border-radius: 15px;
font-size: calc(17px * (100vh / 375));  // 폰트 크기를 화면 너비에 따라 조절
border: 0px transparent;
z-index: 2;
margin-bottom: 2vh;
@media (min-width: 600px) {
  background-size: cover;
  width: 440px;
  height: 62px;
  }
  `;
  

const KakaoWrapper = styled.div`
  position: fixed;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 100%;
`;


export const s = {
  KakaoLoginButton,
  KakaoWrapper,
};
