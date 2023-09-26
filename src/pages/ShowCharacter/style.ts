import styled, { css } from "styled-components";
import BackButtonImg from "../../assets/BackButton/BackButton.svg"
import TwinkleImg from "../../assets/Twinkle/Twinkle.svg"
import CharSaluteImg from "../../assets/charater/CharacterSalute.png"
import SolierTagImg from "../../assets/Logo/SoldierTagBig.svg"

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
  @media (min-width: 600px) {
    width: 410px;
    height: 50px;
  }
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

const isMobile = isMobileDevice();

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
const mobileLandscape = isMobile && css`
  @media screen and (max-width: 767px) and (orientation: landscape) {
    margin-top: 150px;
  }

  @media screen and (min-width: 768px) and (orientation: landscape) {
    margin-top: 150px;
  }
`;


const Wrapper = styled.div`
  font-family: "";
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 160px;

  ${mobileLandscape}

`;

const Character = styled.img.attrs({
  src: CharSaluteImg
})`
  width: 150px;
  height: 244.63px;
  position: relative;
  z-index: 2;
  margin-bottom: 20px;  // 위로 이동
  margin-top: 15px;  // 위로 이동
  @media (min-width: 600px) {
    width: 170px;
    height: 277.247333px;
    margin-bottom: 25px;  // 위로 이동
    margin-top: 0px;  // 위로 이동
  }
`;

const SolierTag = styled.img.attrs({
  src: SolierTagImg
})`
  width: 340px;
  height: auto;
  position: relative;
  z-index: 2;
  margin-bottom: 45px;  // 위로 이동
  //margin-top: 100px;  // 위로 이동
  @media (min-width: 600px) {
    width: 400px;
  }
`;

const TextsStyle = styled.div`
  text-align: left !important;
  line-height: 0.2; // 글자 간격
  z-index: 0;
  font-size: 18px;
  position: absolute;
  top: 35px;
  left: 60px;
  color : #668444;
  @media (min-width: 600px) {
    top: 44px;
    left: 80px;
    font-size: 20px;
  }
`;

const TextsStyle_1 = styled(TextsStyle)`
  top: 71px;  // 또는 원하는 값으로 변경
  @media (min-width: 600px) {
    top: 87px;  // 미디어 쿼리에서도 top 값을 변경하려면 이렇게 설정
  }
`;

const TextsStyle_2 = styled(TextsStyle)`
  top: 107px;  // 또는 원하는 값으로 변경
  @media (min-width: 600px) {
    top: 130px;  // 미디어 쿼리에서도 top 값을 변경하려면 이렇게 설정
  }
`;


const TextsStyle2 = styled.div`
  text-align: left !important;
  line-height: 0.2; // 글자 간격
  z-index: 0;
  font-size: 18px;
  position: absolute;
  top: 35px;
  left: 130px;
  color : #4a544a;
  @media (min-width: 600px) {
    top: 44px;
    left: 160px;
    font-size: 20px;
  }
`;

const TextsStyle2_1 = styled(TextsStyle2)`
  top: 71px;  // 또는 원하는 값으로 변경
  @media (min-width: 600px) {
    top: 87px;  // 미디어 쿼리에서도 top 값을 변경하려면 이렇게 설정
  }
`;

const TextsStyle2_2 = styled(TextsStyle2)`
  top: 107px;  // 또는 원하는 값으로 변경
  @media (min-width: 600px) {
    top: 130px;  // 미디어 쿼리에서도 top 값을 변경하려면 이렇게 설정
  }
`;

const TagContainer = styled.div`
  position: relative;
  width: 100%;
  //height: 100vh;
  display: flex;
  align-items: flex-start;
  
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  //height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Twinkle = styled.img.attrs({
  src: TwinkleImg
})`
  position: absolute;
  top: -20px;
  right: 180px;
  font-size: 18px;
  @media (min-width: 600px) {
    top: -20px;
    right: 200px;
    font-size: 20px;
  }
`;

const Text = styled.div`
  position: absolute;
  top: 80px;
  font-size: 18px;
  font-weight: bolder;
  @media (min-width: 600px) {
    top: 100px;
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
  font-family: "";
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
    Wrapper,
    Button,
    TextsStyle,
    ErrorCenterModalWrapper,
    ErrorModalTextsWrapper1,
    ErrorModalTextsWrapper2,
    ModalButton,
    BackgroundContainer,
    TextsStyle2,
    Character,
    Container,
    TagContainer,
    Text,
    BackButton,
    Twinkle,
    SolierTag,
    TextsStyle_1,
    TextsStyle_2,
    TextsStyle2_1,
    TextsStyle2_2,
    ButtonWrapper
};