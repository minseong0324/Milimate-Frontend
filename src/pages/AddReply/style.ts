import styled from "styled-components";
import SmallBubble from "../../assets/Logo/SoldierTag.svg";
import RegularBubble from "../../assets/SpeachBubble/ReqularImg.svg";
import SoliderTag from "../../assets/Logo/SoldierTag.svg";
import {darken} from "polished";

interface ButtonProps {
    backgroundColor: string;
}

interface ReplyContainerProps {
    backgroundColor?: string;  // ?를 사용해서 이 프롭스가 선택적임을 나타냅니다.
}

const Wrapper = styled.div`
  display: flex;
  //background-color: #ede8d7;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //padding-top: 88px;
  background: #f2f1ee no-repeat center center;
`;
const IconLayout = styled.div`
  flex-direction: row;
  width: 630px;
  margin-top: 56px;
  //margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  //background-color: grey;
  @media (max-width: 768px) {
    margin-top: 0px;
    width: 100%;
  }
`;
const ButtonDesign = styled.button`
  background-color: transparent;
  border: none;
`;
const SoldierTagContainer = styled.div`
  position: relative;
  width: 580px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  //padding-bottom: 32px;
  //margin-bottom: 32px;
  @media (max-width: 768px) {
    width: 80%;
    //  height: 20px;
  }
`;

const SoldierTagImage = styled.img.attrs({
    src: SoliderTag,
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%; // 부모 div의 너비에 맞게 이미지 너비 설정
  height: auto; // 이미지의 비율을 유지하면서 높이 조절
  background-image: url(${SmallBubble});
  background: #f2f1ee no-repeat center center;
  z-index: 1;

`;

const DayText = styled.p`
  position: relative;
  z-index: 2;
  border: 1px solid #f4efce;
  border-radius: 24px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #adc786;
  align-items: center;
  color: white;
  //padding: 8px;
  font-size: 24px;
  font-weight: bold;

  //padding: 8px;
  //overflow-y: auto; // 스크롤을 가능하게 하는 속성
  //max-height: 120px; // 원하는 최대 높이값을 지정하세요
  @media (max-width: 768px) {
    //max-height: 20px; // 원하는 최대 높이값을 지정하세요
    top: -20px;
    font-size: 18px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;
const QuestionText = styled.div`
  position: relative;
  font-size: 24px;
  z-index: 2;
  color: #4c544b;
  font-weight: bold;
  white-space: normal; // 필요하면 추가
  word-wrap: break-word;
  max-width: 90%; // 필요한 너비로 조절


  @media (max-width: 768px) {
    top: -30px;
    font-size: 18px;
  }
`;
const ButtonStyle = styled.button`
  position: relative;
  top: 200px;
  height: 50px;
  background-color: #4c544b;
  border: 1px solid #a39154;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  width: 630px;
  padding: 12px;
  margin-bottom:  250px;
  @media (max-width: 768px) {
    top: 70px;
    width : 95%;
    margin-bottom: 100px;
  }
`;
const TitleText = styled.p`
  font-size: 32px;
  text-align: start;
  @media (max-width: 768px) {
    font-size: 20px
  }
`;
const ReplyContainer = styled.div<ReplyContainerProps>`
  position: relative;
  width: 600px;
  height: 400px;
  display: flex;
  border: 1px solid white;
  border-radius: 20px;
  background-color: ${props => props.backgroundColor || 'white'}; // 프롭스 값이 주어지면 그 값을 사용하고, 아니면 기본값인 'white'를 사용합니다.
  top: 180px;
  padding: 16px;
  margin-bottom: 48px;
  flex-direction: column;
  box-shadow: 0px 5px 15px rgba(136, 136, 136, 0.3);
  @media (max-width: 768px) {
    width: 85%;
    top: 50px;
    height: 250px;
  }
`;
const ReplyText = styled.textarea`
  position: relative;
  z-index: 2;
  overflow-y: auto; // 스크롤을 가능하게 하는 속성
  height: 343px; // 원하는 최대 높이값을 지정하세요

  border: none; // 테두리 제거
  background: transparent; // 배경색 투명하게
  //background-color: grey;
  outline: none; // 클릭 시 테두리 제거
  color: #000; // 텍스트 색상
  font-size: 20px; // 폰트 크기
  width: 100%; // 부모 div의 너비에 맞게 너비 설정
  resize: none; // 사용자가 크기를 조절하지 못하게 함
  &::placeholder {
    color: black;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    width: 96%;
    height: 250px; // 원하는 최대 높이값을 지정하세요
  }
`;
const SenderDiv = styled.div`
  display: flex;
  //margin-left: 12px;
  justify-content: end;
  flex-direction: row;
  width: 100%;
  //background-color: green;
  align-items: center;
  @media (max-width: 768px) {
    top: 100px;
    //height: 50px; // 원하는 최대 높이값을 지정하세요
  }
`;
const SenderNameFrom = styled.p`
  display: flex;
  font-size: 24px;
  z-index: 2;
  color: #4c544b;
  font-weight: bold;
  //white-space: normal; // 필요하면 추가
  word-wrap: break-word;
  //max-width: 90%; // 필요한 너비로 조절
  justify-items: end;
  align-items: end;

  @media (max-width: 768px) {
    top: -30px;
    font-size: 22px;
  }
`;
const SenderReplyText = styled.input`
  text-align: center;
  display: flex;
  margin-left: 16px;
  border: 0;
  z-index: 3;
  //height: 50px;
  border-bottom: 1px solid black;
  background: transparent; // 배경색 투명하게
  outline: none; // 클릭 시 테두리 제거
  color: #000; // 텍스트 색상
  font-size: 20px; // 폰트 크기
  width: 30%; // 부모 div의 너비에 맞게 너비 설정
  resize: none; // 사용자가 크기를 조절하지 못하게 함
  &::placeholder {
    color: black;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    width: 40%;
    //height: 50px; // 원하는 최대 높이값을 지정하세요
  }
`;
const SelectColorDiv = styled.div`
  position: relative;
  flex-direction: row;
  top: 170px;
  width: 600px;
  //background-color: grey;
  @media (max-width: 768px) {
    font-size: 16px;
    top: 40px;
    width: 92%;
    //height: 50px; // 원하는 최대 높이값을 지정하세요
  }
`;
const RoundButton = styled.button<ButtonProps>`
  display: inline-block;
  width: 32px;
  height: 32px;
  background-color: ${props => props.backgroundColor || "#007BFF"};
  color: #FFF;

  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: inset 0 5px 4px rgba(0, 0, 0, 0.3); /* 내부 그림자 위쪽에만 위치 */
  margin-right: 16px;
  border: 2px solid white;

  &:hover {
    background-color: ${props => darken(0.1, props.backgroundColor) || "#0056b3"};
  }
`;

const ErrorCenterModalWrapper = styled.div` //에러 모달창 wrapper
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 60px;
`;

const ErrorModalTextsWrapper1 = styled.div` // 1줄짜리 에러창일 때 사용
  position: relative;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  line-height: 2; // 글자 간격
  margin-bottom: 10px;
`;

const ErrorModalTextsWrapper2 = styled.div` //2줄짜리 에러창일 때 사용
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
    SenderNameFrom,
    IconLayout,
    ButtonDesign,
    TitleText,
    SoldierTagContainer,
    DayText,
    SoldierTagImage,
    QuestionText,

    ReplyContainer,
    SenderReplyText,
    ReplyText,

    SenderDiv,
    ButtonStyle,
    SelectColorDiv,
    RoundButton,
    ErrorCenterModalWrapper,
    ErrorModalTextsWrapper1,
    ErrorModalTextsWrapper2
};
