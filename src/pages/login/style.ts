import styled from "styled-components";
import MainLogo2Img from "../../assets/Logo/Logo2.svg"
import SubTitleImg from "../../assets/SubTitle/SubTitle.svg";
import CharImg from "../../assets/charater/MainCharacter.svg"
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
  height: 100vh;

`;

const ButtonWrapper = styled.div`
  position: relative;
  bottom: 5vh;
  //left: 50%;
  //transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 100%;
  @media (min-width: 600px) {
    bottom: 2vh;
  }
`;

const LogoTitleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  top: -12%;  // 상단으로부터의 위치를 조정
  @media (min-width: 600px) {
    margin-top: 250px;
  }

  /* 가로모드용 스타일 */
  @media screen and (max-width: 767px) and (orientation: landscape) {
    margin-top: 600px;
  }

`;

const MainLogo = styled.img.attrs({
  src: MainLogo2Img
})`
  position: relative;
  top: -10%;  // 상단으로부터의 위치를 조정
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
  margin-top: 5%;  // 위로 이동
  @media (min-width: 600px) {
    width: 286px;
  }
`;

const Character = styled.img.attrs({
  src: CharImg
})`
  width: 110px;
  height: auto;
  position: relative;
  z-index: 2;
  margin-bottom: 20%;  // 위로 이동
  margin-top: -10%;  // 위로 이동
  @media (min-width: 600px) {
    width: 130px;
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
  @media (min-width: 600px) {
    top: 15px;
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
  }
  /* 가로모드용 스타일 */
  @media screen and (max-width: 767px) and (orientation: landscape) {
    top: 10px;
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

const ErrorCenterModalWrapper = styled.div`
  //에러 모달창 wrapper
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
`;

const ErrorModalTextsWrapper1 = styled.div`
  // 한줄짜리 에러창일 때 사용
  position: relative;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  line-height: 2; // 글자 간격
  margin-bottom: 10px;
`;

const ErrorModalTextsWrapper2 = styled.div`
  //두줄짜리 에러창일 때 사용
  position: relative;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  line-height: 2; // 글자 간격
  margin-bottom: -10px;
`;

const ModalButton = styled.button`
  margin-top: 45px;
  font-family: "DOSSaemmul";
  width: 170px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정

  background-size: cover; // 이미지가 버튼에 맞게 조절
  color: black;
  border-radius: 15px;
  font-size: 17px;
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 2;
  &:active {
    // 버튼이 눌렸을 때의 스타일

    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
`;


//background: url(${buttonMidium1}) no-repeat center center; // 이미지를 배경으로 사용
//background: url(${buttonMidium2}) no-repeat center center; // 눌렸을 때의 배경 이미지
export const s = {
  LoginWrapper,
  ButtonWrapper,

  ModalTextsWrapper,
  ModalWrapper,
  ErrorCenterModalWrapper,
  ErrorModalTextsWrapper1,
  ErrorModalTextsWrapper2,
  ModalButton,
  BackgroundContainer,
  SubTitle,
  MainLogo,
  LogoTitleWrapper,
  Character,
  Text,
  BackButton,
  Container
};