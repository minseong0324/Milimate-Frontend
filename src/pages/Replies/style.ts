import React from "react";
import styled, {css} from "styled-components";
//import SmallBubble from "../../assets/SpeachBubble/questionImg.svg";
import SmallBubble from "../../assets/SpeachBubble/questionImg.svg";
import SoliderTag  from "../../assets/Logo/SoldierTag.svg";
import RegularBubble from "../../assets/SpeachBubble/ReqularImg.svg";
import BackButtonImg from "../../assets/BackButton/BackButton.svg";
//import SmallBubble from "../../assets/SpeachBubble/questionImg.svg";
const isMobile = isMobileDevice();
interface ReplyContainerProps {
  backgroundColor?: string;  // ?를 사용해서 이 프롭스가 선택적임을 나타냅니다.
}


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
const Wrapper = styled.div`
  font-family: "";
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 70px;

  ${mobileLandscape};

  @media (min-width: 600px) {
    margin-top: 110px;

  }
`;

const IconLayout = styled.div`
  flex-direction: row;
  width: 630px;
  margin-top: 24px;
  //margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //background-color: grey;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ButtonDesign = styled.button`
  background-color: transparent;
  border: none;
`;
const TitleText = styled.p`
  
  text-align: start;
  font-size: 20px;
  font-weight: bolder;
  @media (max-width: 768px) {
    font-size: 18px;
    font-weight: bolder;
  }
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  //height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Text = styled.div`
  position: absolute;
  top: 13px;
  font-size: 18px;
  font-weight: bolder;z-index: 10;
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
const SoldierTagContainer = styled.div`
  position: relative;
  width: 346px;
  height: 145px;
  display: flex;
  align-items: flex-start;
  //margin-bottom: 20px;
  

  @media (min-width: 600px) {
    //margin-bottom: 30px;
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
  position: absolute;
  z-index: 2;
  border: 1px solid #f4efce;
  border-radius: 24px;

  padding-top: 4px;
  padding-bottom: 4px;

  padding-left: 12px;
  padding-right: 12px;
  top: 10px;
  left: 145px;
  background-color: #adc786;
  align-items: center;
  color: white;
  //padding: 8px;
  font-size: 14px;
  font-weight: bold;

  //padding: 8px;
  //overflow-y: auto; // 스크롤을 가능하게 하는 속성
  //max-height: 120px; // 원하는 최대 높이값을 지정하세요
  @media (min-width: 600px) {
    padding-left: 16px;
    padding-right: 16px;
    top: 10px;
    left: 136px;
    font-size: 16px;

  }
`;
const QuestionText = styled.div`
  //background-color: grey;
  position: absolute;
  font-size: 16px;
  top : 65px;
  left: 55px;
  z-index: 2;
  color: #4c544b;
  font-weight: bold;
  max-width: 250px; // 필요한 너비로 조절
  white-space: normal; // 필요하면 추가
  word-wrap: break-word;
  text-align: center;


  @media (min-width: 600px) {
    text-align: center;
    top: -30px;
    font-size: 17px;
    max-width: 250px;
    top : 65px;
    left: 55px;
    white-space: normal; // 필요하면 추가
    word-wrap: break-word;

  }
`;
const ReplyContainer = styled.div<ReplyContainerProps>`
  position: relative;
  width: 330px;
  height: auto;
  padding-top: 20px;
  padding-bottom: 30px;
  
  //padding : 32px;
  display: flex;
  border: 1px solid white;
  border-radius: 20px;
  background-color: ${props => props.backgroundColor || 'white'}; // 프롭스 값이 주어지면 그 값을 사용하고, 아니면 기본값인 'white'를 사용합니다.  
  margin-top: 20px;
  margin-bottom: 48px;
  ;
  flex-direction: column;
  
  box-shadow: 0px 5px 15px rgba(136, 136, 136, 0.3);
  @media (min-width: 600px) {
    width: 410px;
    //height: 402.827988px;
    margin-top: 30px;
    padding-bottom: 30px;
  }
`;
const ContentText = styled.p`
  font-size: 15px; // 폰트 크기
  padding-left :32px;
  padding-right: 48px ;
  color: #4c544b;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const SenderText = styled.p `
  font-size: 15px;
  font-weight: bold;
  color: #6d844c;
  margin: 0;
  text-align: end;
  padding-left :32px;
  padding-right: 32px;
  
  //padding-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const BubbleReplyImage = styled.img.attrs({
  src: RegularBubble,
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;

  background-image: url(${RegularBubble});
  background-size: cover;

  z-index: 1;
`;

export const s = {
  Wrapper,
  TitleText,
  SoldierTagContainer,
  SoldierTagImage,
  QuestionText,
  IconLayout,
  ReplyContainer,
  ContentText,
  BubbleReplyImage,
  ButtonDesign,
  DayText,
  SenderText,
  Container,
  Text,
  BackButton,
  BackgroundContainer
};
