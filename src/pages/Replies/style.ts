import React from "react";
import styled from "styled-components";
import SmallBubble from "../../assets/SpeachBubble/questionImg.svg";

const Wrapper = styled.div`
  display: flex;
  background-color: #ede8d7;
  align-items: start;
  justify-content: center;
  height: 1000px;
`;

const BubbleContainer = styled.div`
  position: relative;
  width: 500px;
  height: 90px;
  display: flex;
  background-color: grey;
  padding: 20px;
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
  max-height: 150px; // 원하는 최대 높이값을 지정하세요
`;
export const s = {
  Wrapper,
  BubbleContainer,
  BubbleImage,
  BubbleText,
};
