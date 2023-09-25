import styled, { css } from "styled-components";
import BackButtonImg from "../../assets/BackButton/BackButton.svg"

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
  margin-top: 150px;
  @media (min-width: 600px) {
    margin-top: 200px;
  }

  /* 가로모드용 스타일 */
  @media screen and (max-width: 768px) and (orientation: landscape) {
    margin-top: 150px;
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
    margin-top: 100px;
  }

  @media screen and (min-width: 768px) and (orientation: landscape) {
    margin-top: 100px;
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
  margin-top: 90px;

  ${mobileLandscape}

`;

const MoreInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 67px;


`;

const MoreInfoInput = styled.input`
  font-family: '';
  padding: 10px;
  font-size: 16px;
  width: 313px;
  border: none; // 모든 테두리를 제거합니다.
  border-bottom: 1px solid #8fad6d; // 아래쪽 테두리만 추가합니다.
  border-radius: 0; 
  background-color: transparent;
  color: #222;
  z-index: 5;
  margin-bottom: 20px;

  &::placeholder {
    color: #8fad6d;
  }

  &:focus {
    outline: none;
  }
`;

const MoreInfoInputYear = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 80px;
  border: none; // 모든 테두리를 제거합니다.
  border-bottom: 1px solid #8fad6d; // 아래쪽 테두리만 추가합니다.
  border-radius: 0; 
  background-color: transparent;
  color: #222;
  z-index: 5;

  &::placeholder {
    color: #8fad6d;
  }

  &:focus {
    outline: none;
  }
`;

const MoreInfoInputYMonthDay = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 50px;
  border: none; // 모든 테두리를 제거합니다.
  border-bottom: 1px solid #8fad6d; // 아래쪽 테두리만 추가합니다.
  border-radius: 0; 
  background-color: transparent;
  color: #222;
  z-index: 5;
  &::placeholder {
    color: #8fad6d;
  }

  &:focus {
    outline: none;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center; // 만약 input들이 세로축에서 중앙에 위치하길 원한다면 추가
  margin-bottom: 20px;

  & > *:not(:last-child) {
    margin-right: 10px; // 마지막 input을 제외한 모든 input에 오른쪽 마진 15px 부여
  }
`;

const TextsStyle = styled.div`
  text-align: left !important;
  line-height: 0.2; // 글자 간격
  z-index: 0;
  font-size: 16px;
  margin-left: 10px;
`;

const TextsStyle2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2; // 글자 간격
  z-index: 0;
  font-size: 16px;
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
  position: absolute;
  top: 13px;
  font-size: 18px;
  font-weight: bolder;
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

const RequiredInfoText = styled.p`
  font-size: 13px;
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
  BackButton
};
