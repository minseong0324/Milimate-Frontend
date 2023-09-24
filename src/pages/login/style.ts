import styled from "styled-components";
import MainLogo2Img from "../../assets/Logo/Logo2.svg"
import SubTitleImg from "../../assets/SubTitle/SubTitle.svg";
import CharImg from "../../assets/charater/MainCharacter.svg"
import BackButtonImg from "../../assets/BackButton/BackButton.svg"
// 이 함수는 버튼의 크기를 계산합니다.
const calculateButtonSize = () => {
  // 뷰포트의 너비와 높이를 얻습니다.
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // 배경 이미지의 원래 비율을 계산합니다.
  const originalAspectRatio = 375 / 812;

  // 배경 이미지의 실제 크기를 계산합니다.
  let backgroundImageWidth;
  let backgroundImageHeight;
  if (viewportWidth / viewportHeight > originalAspectRatio) {
    backgroundImageHeight = viewportHeight;
    backgroundImageWidth = backgroundImageHeight * originalAspectRatio;
  } else {
    backgroundImageWidth = viewportWidth;
    backgroundImageHeight = backgroundImageWidth / originalAspectRatio;
  }

  // 버튼의 크기를 계산합니다.
  const buttonWidth = (343 / 375) * backgroundImageWidth * 1.2;
  const buttonHeight = (48 / 812) * backgroundImageHeight * 1.2;

  const mainLogoWidth = (234 / 375) * backgroundImageWidth * 1.2;  // 80% of the background image width
  const subtitleWidth = (220 / 375) * backgroundImageWidth * 1.2;  // 60% of the background image width
  
  const logoTitleTopMargin = (-10 / 812) * backgroundImageHeight ;  // 이 값은 조절 가능

  const charWidth = (109 / 375) * backgroundImageWidth * 1.2;  // 이 값은 조절 가능

  return { width: buttonWidth, height: buttonHeight, mainLogoWidth,
    subtitleWidth, logoTitleTopMargin, charWidth };
};


const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: contain;
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
  position: absolute;
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

const LogoTitleWrapper = styled.div<{ logoTitleTopMargin: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(props) => props.logoTitleTopMargin}px;
  top: -12%;  // 상단으로부터의 위치를 조정
`;

const MainLogo = styled.img.attrs({
  src: MainLogo2Img
})<{ width: number }>`
  position: relative;
  top: -10%;  // 상단으로부터의 위치를 조정
  width: ${(props) => props.width}px;
  height: auto;
  z-index: 2;
`;


const SubTitle = styled.img.attrs({
  src: SubTitleImg
})<{ width: number }>`
  width: ${(props) => props.width}px;
  height: auto;
  position: relative;
  z-index: 2;
  margin-top: 5%;  // 위로 이동
`;

const Character = styled.img.attrs({
  src: CharImg
})<{ width: number }>`
  width: ${(props) => props.width}px;
  height: auto;
  position: relative;
  z-index: 2;
  margin-bottom: 20%;  // 위로 이동
  margin-top: -10%;  // 위로 이동

`;

const Container = styled.div`
  position: relative;
  width: 100%;
  //height: 100vh;
  display: flex;
  align-items: flex-start;  /* 상단에 정렬 */
  justify-content: center;  /* 중앙에 정렬 */
`;

const Text = styled.div`
  position: relative;
  margin-top: 3%;
  font-size: 18px;
`;

const BackButton = styled.img.attrs({
  src: BackButtonImg
})`
  position: absolute;
  width: 24px;
  height: auto;
  left: 2%;  /* 화면의 좌측에서 약간 떨어진 정도 설정 */
  top: ${window.innerWidth <= 726 ? "725px" : "3%"};
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
  calculateButtonSize,
  Character,
  Text,
  BackButton,
  Container
};
