import styled from "styled-components";
import MainLogo2Img from "../../assets/Logo/Logo2.svg"
import SubTitleImg from "../../assets/SubTitle/SubTitle.svg";
import CharImg from "../../assets/charater/MainCharacter.png"
import BackButtonImg from "../../assets/BackButton/BackButton.svg"
import { isMobile } from 'react-device-detect';


const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #f2f1ee no-repeat center center;
  
  @media (min-width: 600px) {
    background-size: 600px auto;/* 원하는 최대 너비 값으로 설정 */
    margin: 0 auto; /* 좌우 중앙 정렬 */
  }
`;

//background: url(${button4}) no-repeat center center; // 이미지를 배경으로 사용
//background: url(${button1}) no-repeat center center; // 눌렸을 때의 배경 이미지
const LoginWrapper = styled.div`
  font-family: "";
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

`;

const ButtonWrapper = styled.div`
  position: relative;
  //bottom: 5vh;
  //left: 50%;
  //transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 100%;
  //margin-top: 150px;
  @media (min-width: 600px) {
    //margin-top: 200px;
  }

  /* 가로모드용 스타일 */
  @media screen and (max-width: 768px) and (orientation: landscape) {
    //margin-top: 150px;
  }
`;

const LogoTitleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  top: -12%;  // 상단으로부터의 위치를 조정
  @media (min-width: 600px) {
    margin-top: 200px;
  }

  /* 가로모드용 스타일 */
  @media screen and (max-width: 767px) and (orientation: landscape) {
    margin-top: 150px;
  }

`;

const MainLogo = styled.img.attrs({
  src: MainLogo2Img
})`
  position: relative;
  //top: -10%;  // 상단으로부터의 위치를 조정
  width: 234px;
  height: auto;
  z-index: 2;
  @media (min-width: 600px) {
    width: 304.2px;
  }
`;


const SubTitle = styled.img.attrs({
  src: SubTitleImg
})`
  width: 220px;
  height: auto;
  position: relative;
  z-index: 2;
  margin-top: 15px;  // 위로 이동
  @media (min-width: 600px) {
    width: 286px;
  }
`;

const Character = styled.img.attrs({
  src: CharImg
})`
  width: 109px;
  height: 180px;
  position: relative;
  z-index: 2;
  margin-bottom: 60px;  // 위로 이동
  margin-top: 40px;  // 위로 이동
  @media (min-width: 600px) {
    width: 130px;
    height: 214.678899px;
    margin-bottom: 90px;  // 위로 이동
  margin-top: 60px;  // 위로 이동
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  //height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Text = styled.div`
  position: absolute;
  top: 13px;
  font-size: 18px;
  font-weight: bolder;
  color: #4A544A;
  @media (min-width: 600px) {
    top: 36px;
    font-size: 20px;
  }

`;

const BackButton = styled.img.attrs({
  src: BackButtonImg
})`
  position: absolute;
  width: 24px;
  height: auto;
  left: 2%;  /* 화면의 좌측에서 약간 떨어진 정도 설정 */
  top: 10px;
  @media (min-width: 600px) {
    left: calc(50% - 300px + 10px);
    top: 36px;

  }
  /* 가로모드용 스타일 */
  @media screen and (max-width: 767px) and (orientation: landscape) {
    top: 10px;
  }
`;

const PolicyTextsWrapper = styled.div`
  position: relative;
  margin-top: 30px;
  font-weight: lighter;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2;
  z-index: 2;
  margin-bottom: 30px;
  
`;

const PolicyTextsStyle = styled.p`
  margin-top: 6px;
  font-size: 9px;
  padding-bottom: 10px;
  color: #444;
`;

const PolicyStyledLink = styled.a`
  color: #444;
  text-decoration: underline;  // 밑줄 추가

  &:hover {
    color: darkblue;  // 마우스 오버 시 색상 변경
  }
`;

export const s = {
  LoginWrapper,
  ButtonWrapper,
  BackgroundContainer,
  SubTitle,
  MainLogo,
  LogoTitleWrapper,
  Character,
  Text,
  BackButton,
  Container,
  PolicyTextsWrapper,
  PolicyTextsStyle,
  PolicyStyledLink
};