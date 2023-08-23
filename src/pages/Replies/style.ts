import React from "react";
import styled from "styled-components";
//import SmallBubble from "../../assets/SpeachBubble/questionImg.svg";
import SmallBubble from "../../assets/SpeachBubble/questionImg.svg";
import RegularBubble from "../../assets/SpeachBubble/자산 6.svg";
//import SmallBubble from "../../assets/SpeachBubble/questionImg.svg";
const Wrapper = styled.div`
  display: flex;
  background-color: #ede8d7;
  align-items: center;

  justify-content: start;
  flex-direction: column;
  height: 1000px;
`;
const IconLayout = styled.div`
  width: 500px;
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  justify-content: start;
  align-items: start;
`;
const BubbleContainer = styled.div`
  position: relative;
  width: 500px;
  height: 90px;
  display: flex;

  padding: 32px;
  padding-bottom: 32px;
  margin-bottom: 24px;
`;

const BubbleImage = styled.img.attrs({
  src: SmallBubble,
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  background-image: url(${SmallBubble});
  background-size: cover;

  z-index: 1;
`;

const BubbleText = styled.div`
  position: relative;
  z-index: 2;
  overflow-y: auto; // 스크롤을 가능하게 하는 속성
  max-height: 80px; // 원하는 최대 높이값을 지정하세요
`;

const BubbleReplyContainer = styled.div`
  position: relative;
  width: 500px;
  height: 90px;
  display: flex;

  padding: 32px;
  padding-bottom: 32px;
  margin-bottom: 24px;
`;
const BubbleReplyText = styled.div`
  position: relative;
  z-index: 2;
  overflow-y: auto; // 스크롤을 가능하게 하는 속성
  max-height: 80px; // 원하는 최대 높이값을 지정하세요
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
  BubbleContainer,
  BubbleImage,
  BubbleText,
  IconLayout,
  BubbleReplyContainer,
  BubbleReplyText,
  BubbleReplyImage,
};
