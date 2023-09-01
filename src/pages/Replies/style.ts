import React from "react";
import styled from "styled-components";
//import SmallBubble from "../../assets/SpeachBubble/questionImg.svg";
import SmallBubble from "../../assets/SpeachBubble/questionImg.svg";
import RegularBubble from "../../assets/SpeachBubble/ReqularImg.svg";
//import SmallBubble from "../../assets/SpeachBubble/questionImg.svg";
const Wrapper = styled.div`
  display: flex;
  background-color: #ede8d7;
  align-items: center;
  width: 100%;
  justify-content: start;
  flex-direction: column;
  height: 1000px;
`;
const IconLayout = styled.div`
  width: 550px;
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  justify-content: start;
  align-items: start;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const BubbleContainer = styled.div`
  position: relative;
  width: 500px;
  height: 70px;
  display: flex;

  padding: 32px;
  padding-bottom: 32px;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    width: 80%;
    height: 20px;
  }
`;

const BubbleImage = styled.img.attrs({
  src: SmallBubble,
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%; // 부모 div의 너비에 맞게 이미지 너비 설정
  height: auto; // 이미지의 비율을 유지하면서 높이 조절
  background-image: url(${SmallBubble});
  z-index: 1;
`;

const BubbleText = styled.div`
  position: relative;
  z-index: 2;
  padding: 8px;
  //overflow-y: auto; // 스크롤을 가능하게 하는 속성
  max-height: 120px; // 원하는 최대 높이값을 지정하세요
  @media (max-width: 768px) {
    max-height: 20px; // 원하는 최대 높이값을 지정하세요
  }
`;

const BubbleReplyContainer = styled.div`
  position: relative;
  width: 500px;
  height: 270px;
  display: flex;

  padding: 32px;
  padding-bottom: 32px;
  margin-bottom: 200px;
  @media (max-width: 768px) {
    width: 80%;
    height: 150px;
  }
`;
const BubbleReplyText = styled.div`
  position: relative;
  z-index: 2;
  overflow-y: auto; // 스크롤을 가능하게 하는 속성
  max-height: 270px; // 원하는 최대 높이값을 지정하세요
  @media (max-width: 768px) {
    max-height: 150px; // 원하는 최대 높이값을 지정하세요
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
const ButtonDesign = styled.button`
  background-color: transparent;
  border: none;
`;
export const s = {
  Wrapper,
  BubbleContainer,
  BubbleImage,
  BubbleText,
  IconLayout,
  BubbleReplyContainer,
  BubbleReplyText,
  BubbleReplyImage,
  ButtonDesign,
};
