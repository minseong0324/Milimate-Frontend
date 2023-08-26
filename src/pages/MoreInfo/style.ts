import styled from "styled-components";
import bodyBackground from "../../assets/background/background.svg";

// import button1 from '../../assets/button/button1.png';
// import button4 from '../../assets/button/button4.png';
// import buttonMidium1 from '../../assets/button/button-midium-1.png';
// import buttonMidium2 from '../../assets/button/button-midium-2.png';

const Button = styled.button`
  width: 250px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정
  background-color: rgb(58 56 56);
  background-size: cover; // 이미지가 버튼에 맞게 조절
  color: black;
  border-radius: 30px;
  font-size: 17px;
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 2;
  &:active {
    // 버튼이 눌렸을 때의 스타일
    background-color: rgb(58 56 56);
    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
  color: white;
`;

const BackgroundContainer = styled.div`
  font-family: "EF_jejudoldam";
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${bodyBackground}) no-repeat center center; // 배경 이미지 중앙 배치
`;

//background: url(${button4}) no-repeat center center; // 이미지를 배경으로 사용
//background: url(${button1}) no-repeat center center; // 눌렸을 때의 배경 이미지
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
  InputContainer,
  MoreInfoInputYear,
  MoreInfoInputYMonthDay,
  TextsStyle2,
  RequiredInfoText,
};
