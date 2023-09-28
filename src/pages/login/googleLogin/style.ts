import styled from "styled-components";
import GoogleLoginButtonSVG from "../../../assets/socialLoginButton/GoogleLogin.svg";

const GoogleLoginButton = styled.button`
width: 343px;
height: 48px;
position: relative;
font-family: "";
background-color: transparent;
border-radius: 15px;
font-size: calc(17px * (100vw / 375));  // 폰트 크기를 화면 너비에 따라 조절
border: 0px transparent;
z-index: 2;
margin-bottom: 2vh;
@media (min-width: 600px) {
  background-size: cover;
  width: 440px;
  height: 62px;
  }
  `;

const ModalTextsWrapper = styled.div`
  position: relative;
  display: flex;
  font-size: 18px;

  line-height: 2; // 글자 간격
  margin-bottom: 10px;
`;

const ModalWrapper = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const Wrapper = styled.div``;

const GoogleWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

export const s = {
  ModalTextsWrapper,
  ModalWrapper,
  Wrapper,
  GoogleLoginButton,
  GoogleWrapper,
};
