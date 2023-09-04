import styled from "styled-components";
import SmallBubble from "../../assets/SpeachBubble/questionImg.svg";
import RegularBubble from "../../assets/SpeachBubble/ReqularImg.svg";

const Wrapper = styled.div`
  display: flex;
  background-color: #ede8d7;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 88px;
`;

const ButtonStyle = styled.button`
  background-color: #a39154;
  border: 1px solid #a39154;
  border-radius: 20px;
  color: white;
  font-size: 16px;
  width: 200px;
  padding: 12px;
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
  align-items: center;
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

const BubbleText = styled.input`
  display: flex;
  position: relative;
  z-index: 2;
  padding: 8px;
  overflow-y: none; // 스크롤을 가능하게 하는 속성
  max-height: 120px; // 원하는 최대 높이값을 지정하세요
  border: none; // 테두리 제거
  background: transparent; // 배경색 투명하게
  outline: none; // 클릭 시 테두리 제거
  color: #000; // 텍스트 색상
  font-size: 16px; // 폰트 크기
  width: 100%; // 부모 div의 너비에 맞게 너비 설정

  @media (max-width: 768px) {
    max-height: 50px; // 원하는 최대 높이값을 지정하세요
  }
`;

const BubbleReplyContainer = styled.div`
  position: relative;
  width: 500px;
  height: 270px;
  display: flex;

  padding: 32px;
  padding-bottom: 32px;
  margin-bottom: 48px;
  @media (max-width: 768px) {
    width: 80%;
    height: 150px;
  }
`;
const BubbleReplyText = styled.textarea`
  position: relative;
  z-index: 2;
  overflow-y: auto; // 스크롤을 가능하게 하는 속성
  max-height: 270px; // 원하는 최대 높이값을 지정하세요
  border: none; // 테두리 제거
  background: transparent; // 배경색 투명하게
  outline: none; // 클릭 시 테두리 제거
  color: #000; // 텍스트 색상
  font-size: 16px; // 폰트 크기
  width: 100%; // 부모 div의 너비에 맞게 너비 설정
  resize: none; // 사용자가 크기를 조절하지 못하게 함

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
line-height: 2;  // 글자 간격
margin-bottom: 10px;
`;

const ErrorModalTextsWrapper2 = styled.div` //2줄짜리 에러창일 때 사용
position: relative;
display: flex;
font-size: 18px;
align-items: center;
  justify-content: center;
line-height: 2;  // 글자 간격
margin-bottom: -10px;
`;

export const s = {
  Wrapper,
  BubbleContainer,
  BubbleImage,
  BubbleText,
  BubbleReplyContainer,
  BubbleReplyImage,
  BubbleReplyText,
  ButtonStyle,
  ErrorCenterModalWrapper,
  ErrorModalTextsWrapper1,
  ErrorModalTextsWrapper2
};
