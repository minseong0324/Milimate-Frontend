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
  @media (min-width: 600px) {
    width: 405px;
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
  @media (min-width: 600px) {
    width: 105px;
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
  @media (min-width: 600px) {
    width: 80px;
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
  color: #4A544A;
  @media (min-width: 600px) {
    top: 36px;
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
    top: 36px;

  }
  /* 가로모드용 스타일 */
  @media screen and (max-width: 767px) and (orientation: landscape) {
    top: 10px;
  }
`;

const RequiredInfoText = styled.p`
  font-size: 13px;
  margin: 0;
  text-align: center;
`;


const OkBtnStyle = styled.button`
  /* 버튼의 위치를 모달창의 가운데 하단으로 설정 */
  position: absolute;

  //left: 50%; // 버튼의 좌측을 모달창의 중앙에 위치시킵니다.
  top: 225px;
  //transform: translate(-50%, 0); // 버튼의 중앙을 기준으로 위치 조정
  //background-color: #ede8d7;
  border: transparent;
  border-radius: 12px;

  width: 120px;
  height : 50px;
  color : white;
  background-color: #4c534b;
  font-size: 16px;
  font-weight: bolder;
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const SmallCenterModalWrapper = styled.div`
  //에러 모달창 wrapper
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 80px;
`;

const SmallModalTextsWrapper2 = styled.div`
  //두줄짜리 에러창일 때 사용
  position: relative;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  line-height: 2; // 글자 간격
  margin-bottom: -10px;
`;

export const s = {
  Wrapper,
  MoreInfoForm,
  MoreInfoInput,
  Button,
  TextsStyle,
  Container,
  Text,
  BackgroundContainer,

  InputContainer,
  MoreInfoInputYear,
  MoreInfoInputYMonthDay,
  TextsStyle2,
  RequiredInfoText,
  ButtonWrapper,
  BackButton,
  OkBtnStyle,
  BtnDiv,
  SmallCenterModalWrapper,
  SmallModalTextsWrapper2
};
