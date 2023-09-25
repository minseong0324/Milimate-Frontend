import styled from "styled-components";
import MainLogoImg from "../../assets/Logo/MainLogo.svg"
import SubTitleImg from "../../assets/SubTitle/SubTitle.svg";
import BackgroundTopImg from "../../assets/background/BackgroundTop.svg"
import BackgroundBottomImg from "../../assets/background/BackgroundBottom.svg"

const Button = styled.button`
  width: 343px;
  height: 48px;
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
  //bottom: 5vh;
  //left: 50%;
  //transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 100%;
  margin-top: 100px;
  @media (min-width: 600px) {
    margin-top: 200px;
  }

  /* 가로모드용 스타일 */
  @media screen and (max-width: 768px) and (orientation: landscape) {
    margin-top: 150px;
  }
`;

const CenteredWrapper = styled.div`
  font-family: "";
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const TopBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 600px;
  height: 300px;  // 높이를 조정하여 필요한 배경 이미지 크기를 얻으세요
  background: url(${BackgroundTopImg}) no-repeat center top;
  background-size: cover;
  flex-grow: 1;
  @media (min-width: 600px) {
    width: 600px;
    height: 400px;  // 높이를 조정하여 필요한 배경 이미지 크기를 얻으세요
}
`;

const BottomBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 600px;
  height: 300px;  // 높이를 조정하여 필요한 배경 이미지 크기를 얻으세요
  background: url(${BackgroundBottomImg}) no-repeat center bottom;
  background-size: cover;
  flex-grow: 1;
  @media (min-width: 600px) {
    width: 600px;
    height: 400px;  // 높이를 조정하여 필요한 배경 이미지 크기를 얻으세요
}
`;

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 800px;
  position: relative;  // 중요: 내부 절대 위치 div를위한 위치 지정 컨텍스트 제공
  overflow: auto;  // 선택 사항: 내부 배경이 컨테이너를 벗어나지 않도록합니다.
  @media (min-width: 600px) {
    margin: 0 auto;  // 좌우 중앙 정렬
    height: 1000px;
}
`;

const BackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 100%;
  position: absolute;  // 중요: 내부 절대 위치 div를위한 위치 지정 컨텍스트 제공

  @media (min-width: 600px) {
    margin: 0 auto;  // 좌우 중앙 정렬
    height: 1000px;
}
`;



const LogoTitleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 230px;
  top: -30px;  // 상단으로부터의 위치를 조정
  @media (min-width: 600px) {
    margin-top: 300px;
  }

  /* 가로모드용 스타일 */
  @media screen and (max-width: 768px) and (orientation: landscape) {
    margin-top: 150px;
  }

`;

const MainLogo = styled.img.attrs({
  src: MainLogoImg
})`
  position: relative;
  padding-top: 10px;
  width: 287px;
  height: auto;
  z-index: 2;
  @media (min-width: 600px) {
    padding-top: 13px;
    width: 373.1px;
  }
`;


const SubTitle = styled.img.attrs({
  src: SubTitleImg
})`
  width: 220px;
  height: auto;
  position: relative;
  z-index: 2;
  margin-top: 20px;  // 위로 이동
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
  TopBackground,
  BottomBackground,
  BackgroundWrapper
};
