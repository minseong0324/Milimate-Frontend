import styled from "styled-components";
//import buttonMidium1 from '../../../assets/button/button-midium-1.png';
//import buttonMidium2 from '../../../assets/button/button-midium-2.png';


const NaverLoginButton = styled.button`
width: 343px;
height: 48px;
position: relative;
font-family: "";
background-color: transparent;
border-radius: 15px;
font-size: 17px;  // 폰트 크기를 화면 너비에 따라 조절
border: 0px transparent;
z-index: 2;
margin-bottom: 2vh;
@media (min-width: 600px) {
  background-size: cover;
  width: 440px;
  height: 62px;
  }
`;

const NaverWrapper = styled.div`
  position: relative;
  z-index: 2;
`;



export const s = {
  NaverLoginButton,
  NaverWrapper,

};
