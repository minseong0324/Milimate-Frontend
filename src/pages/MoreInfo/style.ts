import styled from "styled-components";
// 이 함수는 버튼의 크기를 계산합니다.
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
  if (viewportWidth  > originalAspectRatio) {
    backgroundImageHeight = viewportHeight;
    backgroundImageWidth = backgroundImageHeight * originalAspectRatio;
  } else {
    backgroundImageWidth = viewportWidth;
    backgroundImageHeight = backgroundImageWidth / originalAspectRatio;
  }

  // 버튼의 크기를 계산합니다.
  const buttonWidth = (343 / 375) * backgroundImageWidth * 1.2;
  const buttonHeight = (48 / 812) * backgroundImageHeight * 1.2;

  const mainLogoWidth = (340 / 375) * backgroundImageWidth * 1.1;  // 80% of the background image width
  const subtitleWidth = (220 / 375) * backgroundImageWidth * 1.1;  // 60% of the background image width
  
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
  font-size: 16px;
  border: 0px transparent;
  z-index: 2;
  color: white;
  margin-bottom: 2vh;
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

const BackgroundContainer = styled.div`
  font-family: "";
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const MoreInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 67px;
`;

const MoreInfoInput = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 215px;
  border: none; // 모든 테두리를 제거합니다.
  border-radius: 30px;
  background-color: rgb(84 130 53);
  color: #111;
  z-index: 5;

  &::placeholder {
    color: #777;
  }

  &:focus {
    outline: none;
  }
`;

const MoreInfoInputYear = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 40px;
  border: none; // 모든 테두리를 제거합니다.
  border-radius: 30px;
  background-color: rgb(84 130 53);
  color: #111;
  z-index: 5;

  &::placeholder {
    color: #777;
  }

  &:focus {
    outline: none;
  }
`;
const MoreInfoInputYMonthDay = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 30px;
  border: none; // 모든 테두리를 제거합니다.
  border-radius: 30px;
  background-color: rgb(84 130 53);
  color: #111;
  z-index: 5;

  &::placeholder {
    color: #777;
  }

  &:focus {
    outline: none;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center; // 만약 input들이 세로축에서 중앙에 위치하길 원한다면 추가

  & > *:not(:last-child) {
    margin-right: 10px; // 마지막 input을 제외한 모든 input에 오른쪽 마진 15px 부여
  }
`;

const TextsStyle = styled.div`
  align-items: left;
  text-align: left;
  line-height: 0.2; // 글자 간격
  z-index: 0;
  font-size: 15px;
`;

const TextsStyle2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2; // 글자 간격
  z-index: 0;
  font-size: 12px;
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

const RequiredInfoText = styled.p`
  margin: 0;
`;

//background: url(${buttonMidium1}) no-repeat center center; // 이미지를 배경으로 사용
//background: url(${buttonMidium2}) no-repeat center center; // 눌렸을 때의 배경 이미지
export const s = {
  Wrapper,
  MoreInfoForm,
  MoreInfoInput,
  Button,
  TextsStyle,
  Container,
  Text,
  ModalTextsWrapper,
  ModalWrapper,
  ErrorCenterModalWrapper,
  ErrorModalTextsWrapper1,
  ErrorModalTextsWrapper2,
  ModalButton,
  BackgroundContainer,

  InputContainer,
  MoreInfoInputYear,
  MoreInfoInputYMonthDay,
  TextsStyle2,
  RequiredInfoText,
  ButtonWrapper,
  calculateButtonSize
};
