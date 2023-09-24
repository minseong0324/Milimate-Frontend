import styled from "styled-components";
//import buttonMidium1 from '../../../assets/button/button-midium-1.png';
//import buttonMidium2 from '../../../assets/button/button-midium-2.png';

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

  return { width: buttonWidth, height: buttonHeight, viewportHeight };
};

const KakaoLoginButton = styled.img<{ width: number; height: number }>`
width: ${(props) => props.width}px;
height: ${(props) => props.height}px;
position: relative;
font-family: "";
background-color: transparent;
border-radius: 15px;
font-size: calc(17px * (100vh / 375));  // 폰트 크기를 화면 너비에 따라 조절
border: 0px transparent;
z-index: 2;
margin-bottom: 2vh;

  `;
  

const KakaoWrapper = styled.div`
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
  KakaoLoginButton,
  KakaoWrapper,
  ModalTextsWrapper,
  ModalWrapper,
  ErrorCenterModalWrapper,
  ErrorModalTextsWrapper1,
  ErrorModalTextsWrapper2,
  ModalButton,
  calculateButtonSize
};
