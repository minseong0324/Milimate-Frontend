import styled from "styled-components";
import MainLogoImg from "../../assets/Logo/MainLogo.svg"
import SubTitleImg from "../../assets/SubTitle/SubTitle.svg";
import BackgroundImg from "../../assets/background/Background.svg"
import ButtonImg from "../../assets/Button/Button.svg"


const Button = styled.button`
  width: 343px;
  height: 56px;
  position: relative;
  font-family: "";
  border-radius: 10px;
  background: #4A544A;
  font-size: 16px;
  border: 0px transparent;
  z-index: 2;
  color: white;
  margin-bottom: 2vh;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;  // 뷰포트 높이와 동일하게 설정
  background: url(${BackgroundImg}) no-repeat center center;
  background-position: center top;  // 배경 이미지의 위치를 중앙 상단으로 설정
  background-size: contain;
  overflow-y: auto;
  @media (min-width: 600px) {
    background-size: 820px auto;  // 가로 크기를 600px로 유지하고, 세로 크기는 자동으로 조절
    background-position: center top;  // 배경 이미지의 위치를 중앙 상단으로 설정
    margin: 0 auto;  // 좌우 중앙 정렬
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
  @media screen and (min-width: 600px) and (orientation: landscape) {
    margin-top: 600px;
  }

`;

const MainLogo = styled.img.attrs({
  src: MainLogoImg
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





export const s = {
  Button,
  CenteredWrapper,
  LogoTitleWrapper,
  ButtonWrapper,
  BackgroundContainer,
  SubTitle,
  MainLogo,
};
