import styled, { css } from "styled-components";
import React, { useState, useEffect } from 'react';
import BackButtonImg from "../../assets/BackButton/BackButton.svg"
import SolierTagImg from "../../assets/Logo/SoldierTagBig.svg"

import HeartCharacter1 from "../../assets/charater/HeartCharacter1.svg";
import HeartCharacter2 from "../../assets/charater/HeartCharacter2.svg";
import HeartCharacter3 from "../../assets/charater/HeartCharacter3.svg";
import HeartCharacter4 from "../../assets/charater/HeartCharacter4.svg";

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
  margin-top: 40px;
  margin-bottom: 30px;
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
  @media (min-width: 600px) {
    //margin-top: 200px;
  }

  /* 가로모드용 스타일 */
  @media screen and (max-width: 768px) and (orientation: landscape) {
    //margin-top: 150px;
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

  @media (min-width: 600px) {
    margin-top: 140px;

  }
`;

const images = [HeartCharacter1, HeartCharacter2, HeartCharacter3, HeartCharacter4];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const Character = styled.img.attrs({
  src: getRandomImage()
})`
  width: 150px;
  height: auto;
  position: relative;
  z-index: 2;
  margin-bottom: 20px;  // 위로 이동
  margin-top: 15px;  // 위로 이동
  @media (min-width: 600px) {
    width: 170px;
    margin-bottom: 25px;  // 위로 이동
    margin-top: 0px;  // 위로 이동
  }
`;


const QuotationStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  font-size: 60px;

  color: #777;

`;

const TagContainer = styled.div`
  position: relative;
  width: 343px;
  //height: 100vh;
  display: flex;
  align-items: flex-start;
  
`;

const SolierTag = styled.img.attrs({
  src: SolierTagImg
})`
  width: 343px;
  height: auto;
  position: relative;
  z-index: 2;
  margin-bottom: 45px;  // 위로 이동
  //margin-top: 100px;  // 위로 이동
  @media (min-width: 600px) {
    width: 400px;
  }
`;

const TextsStyle = styled.div`
  text-align: left !important;
  line-height: 0.2; // 글자 간격
  z-index: 0;
  font-size: 18px;
  position: absolute;
  top: 35px;
  left: 92px;
  color : #668444;
  @media (min-width: 600px) {
    top: 44px;
    left: 120px;
    font-size: 20px;
  }
`;

const TextsStyle2 = styled.div`
  text-align: left !important;
  line-height: 0.2; // 글자 간격
  z-index: 0;
  font-size: 18px;
  position: absolute;
  top: 35px;
  left: 135px;
  color : #4a544a;
  font-weight: bolder;
  @media (min-width: 600px) {
    top: 44px;
    left: 160px;
    font-size: 20px;
  }
`;

const TextsStyle2_1 = styled(TextsStyle2)`
  top: 71px;  // 또는 원하는 값으로 변경
  left: 75px;
  font-weight: normal;
  word-wrap: break-word;  // 긴 단어를 다음 줄로 래핑
  white-space: pre-wrap;  // 공백을 존중하면서 텍스트를 래핑
  max-width: 200px;  // 또는 원하는 값으로 변경. 이 값은 단어가 래핑되는 포인트를 제어합니다.
  text-align: center;
  @media (min-width: 600px) {
    top: 87px;  // 미디어 쿼리에서도 top 값을 변경하려면 이렇게 설정
    left: 100px;
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
  font-weight: bolder;
  @media (min-width: 600px) {
    top: 36px;
    font-size: 20px;
  }

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
//background: url(${buttonMidium1}) no-repeat center center; // 이미지를 배경으로 사용
//background: url(${buttonMidium2}) no-repeat center center; // 눌렸을 때의 배경 이미지
export const s = {
    Wrapper,
    Button,
    TextsStyle,
    ErrorCenterModalWrapper,
    ErrorModalTextsWrapper1,
    ErrorModalTextsWrapper2,
    ModalButton,
    BackgroundContainer,
    QuotationStyle,
    Character,
    Container,
    Text,
    ButtonWrapper,
    SolierTag,
    TagContainer,
    TextsStyle2,
    TextsStyle2_1
};
