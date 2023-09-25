import React from "react";
import styled from "styled-components";
//import SmallBubble from "../../assets/SpeachBubble/questionImg.svg";
import SmallBubble from "../../assets/SpeachBubble/questionImg.svg";
import SoliderTag  from "../../assets/Logo/SoldierTag.svg";
import RegularBubble from "../../assets/SpeachBubble/ReqularImg.svg";
//import SmallBubble from "../../assets/SpeachBubble/questionImg.svg";
const Wrapper = styled.div`
  display: flex;
  background: #f2f1ee no-repeat center center;
  align-items: center;
  
  justify-content: start;
  flex-direction: column;
  //height: 1000px;
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
  font-size: 24px;
  text-align: start;
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
  border :1px solid #f4efce;
  border-radius: 24px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #f4efce;
  align-items: center;
  color: #4c544b;
  //padding: 8px;
  font-size: 24px;
  font-weight: bold;
  
  //padding: 8px;
  //overflow-y: auto; // 스크롤을 가능하게 하는 속성
  //max-height: 120px; // 원하는 최대 높이값을 지정하세요
  @media (max-width: 768px) {
    //max-height: 20px; // 원하는 최대 높이값을 지정하세요
    top : -20px;
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
    top : -30px;
    font-size: 18px;
  }
`;
const ReplyContainer = styled.div`
  position: relative;
  width: 600px;
  //height: auto;
  //height: 270px;
  //display: flex;
  top:170px;
  border:1px solid white;
  border-radius: 20px;
  //padding: 32px;
  padding-top: 24px;
  padding-bottom: 16px;
  padding-left: 32px;
  padding-right: 32px;
  margin-top: 32px;
  background-color: white;
  margin-bottom: 400px;
  box-shadow: 0px 5px 15px rgba(136, 136, 136, 0.3);
  @media (max-width: 768px) {
    width: 78%;
    top : 32px;
    margin-bottom: 100px;
   // height: 150px;
  }
`;
const ContentText = styled.p`
  font-size : 24px;
  
  color: #4c544b;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const SenderText = styled.p `
  font-size: 20px;
  font-weight: bold;
  color: #6d844c;
  margin: 0;
  text-align: end;
  
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
  SenderText
};
