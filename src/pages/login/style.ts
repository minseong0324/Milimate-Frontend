import styled from "styled-components";

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


const LoginButton = styled.button<{ width: number; height: number }>`
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

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
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

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 67px;
`;

const LoginInput = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 250px;
  border: none; // 모든 테두리를 제거합니다.
  border-bottom: 1px solid #777; // 아래쪽 테두리만 추가합니다.
  background-color: transparent;
  color: #111;
  z-index: 5;

  &::placeholder {
    color: #777;
  }

  &:focus {
    outline: none;
  }
`;

const TextsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2; // 글자 간격
  z-index: 0;
`;

const Title = styled.text`
  font-size: 45px;
  line-height: 1; // 글자 간격
  color: rgb(56 87 35);
`;

const H3 = styled.h3`
  margin-bottom: 5px;
  font-size: 15px;
`;

const H1 = styled.h1`
  //margin-top: 0px;
  font-size: 28px;
  font-family: "DOSGothic";
`;

const P = styled.p`
  margin-top: 6px;
  font-size: 14px;
  padding-bottom: 30px;
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
  LoginForm,
  LoginInput,
  LoginButton,
  TextsStyle,
  H3,
  H1,
  P,
  ModalTextsWrapper,
  ModalWrapper,
  ErrorCenterModalWrapper,
  ErrorModalTextsWrapper1,
  ErrorModalTextsWrapper2,
  ModalButton,
  BackgroundContainer,
  Title,
};
