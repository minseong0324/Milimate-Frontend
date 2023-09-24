import styled from "styled-components";
import MainLogoImg from "../../assets/Logo/MainLogo.svg"
import SubTitleImg from "../../assets/SubTitle/SubTitle.svg";
import BackgroundImg from "../../assets/background/Background.svg"
import ButtonImg from "../../assets/Button/Button.svg"


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
  const buttonWidth = (343 / 375) * backgroundImageWidth;
  const buttonHeight = (48 / 812) * backgroundImageHeight;

  const mainLogoWidth = (340 / 375) * backgroundImageWidth;  // 80% of the background image width
  const subtitleWidth = (220 / 375) * backgroundImageWidth;  // 60% of the background image width
  
  const logoTitleTopMargin = (-10 / 812) * backgroundImageHeight;  // 이 값은 조절 가능

  return { width: buttonWidth, height: buttonHeight, mainLogoWidth,
    subtitleWidth, logoTitleTopMargin };
};


const Button = styled.button<{ width: number; height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: relative;
  font-family: "";
  border-radius: 10px;
  background: #4A544A;
  font-size: calc(17px * (100vw / 375));  // 폰트 크기를 화면 너비에 따라 조절
  border: 0px transparent;
  z-index: 2;
  color: white;
  margin-bottom: 2vh;
`;

const ButtonWrapper = styled.div`
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



const CenteredWrapper = styled.div`
  font-family: "";
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url(${BackgroundImg}) no-repeat center center;
  background-size: contain;
`;

const LogoTitleWrapper = styled.div<{ logoTitleTopMargin: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(props) => props.logoTitleTopMargin}px;
  top: -3%;  // 상단으로부터의 위치를 조정
`;

const MainLogo = styled.img.attrs({
  src: MainLogoImg
})<{ width: number }>`
  position: relative;
  left: -5%;
  top: -30%;  // 상단으로부터의 위치를 조정
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
  margin-top: -5%;  // 위로 이동
`;





export const s = {
  Button,
  CenteredWrapper,
  LogoTitleWrapper,
  ButtonWrapper,
  BackgroundContainer,
  SubTitle,
  MainLogo,
  calculateButtonSize,
};
