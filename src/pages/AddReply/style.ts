import styled, { css } from "styled-components";
import SmallBubble from "../../assets/Logo/SoldierTag.svg";
import BackButtonImg from "../../assets/BackButton/BackButton.svg"
import SoliderTag from "../../assets/Logo/SoldierTag.svg";
import {darken} from "polished";

interface ButtonProps {
    backgroundColor: string;
}

interface ReplyContainerProps {
    backgroundColor?: string;  // ?를 사용해서 이 프롭스가 선택적임을 나타냅니다.
}

//
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
  margin-top: 70px;

  ${mobileLandscape};

  @media (min-width: 600px) {
    margin-top: 110px;

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
width: 343px;
height: auto;
position: relative;
z-index: 2;
//margin-bottom: 45px;  // 위로 이동
//margin-top: 100px;  // 위로 이동
@media (min-width: 600px) {
  width: 400px;
}
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

  

  @media (min-width: 600px) {
    top: -30px;
    font-size: 17px;
    max-width: 250px;
    top : 65px;
    left: 55px;
    white-space: normal; // 필요하면 추가
    word-wrap: break-word;
    
  }
`;
const ButtonStyle = styled.button`
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
  margin-bottom: 60px;
  @media (min-width: 600px) {
    width: 410px;
    height: 50px;
    margin-top: 50px;
  margin-bottom: 70px;
  }
`;
const TitleText = styled.p`
  font-size: 20px;
  text-align: start;
  font-weight: bolder;
  @media (max-width: 768px) {
    font-size: 18px;
    font-weight: bolder;
  }
`;
const ReplyContainer = styled.div<ReplyContainerProps>`
  position: relative;
  width: 330px;
  height: 324.2274px;
  display: flex;
  border: transparent;
  border-radius: 20px;
  background-color: ${props => props.backgroundColor || 'white'}; // 프롭스 값이 주어지면 그 값을 사용하고, 아니면 기본값인 'white'를 사용합니다.  
  margin-top: 20px;
  margin-bottom: 48px;
  flex-direction: column;
  box-shadow: 0px 5px 15px rgba(136, 136, 136, 0.3);
  @media (min-width: 600px) {
    width: 410px;
    height: 402.827988px;
    margin-top: 30px;
  }
`;
const ReplyText = styled.textarea`
  position: relative;
  z-index: 2;
  overflow-y: auto; // 스크롤을 가능하게 하는 속성
  margin-top: 30px;
  width: 272px;
  height: 270px; // 원하는 최대 높이값을 지정하세요
  padding-right: 30px;
  padding-left: 30px;
  //padding-top: 40px;
  padding-bottom: 40px;
  border: none; // 테두리 제거
  background: transparent; // 배경색 투명하게
  //background-color: grey;
  outline: none; // 클릭 시 테두리 제거
  color: #4A544A; // 텍스트 색상
  font-size: 15px; // 폰트 크기
  //width: 100%; // 부모 div의 너비에 맞게 너비 설정
  resize: none; // 사용자가 크기를 조절하지 못하게 함
  //overflow: auto;
  &::placeholder {
    font-size: 18px;
    
    color: #4A544A; // 텍스트 색상
  }

  @media (min-width: 600px) {
    width: 350px;
    font-size: 17px;
    height: 250px; // 원하는 최대 높이값을 지정하세요
    padding-right: 30px;

  }
`;
const SenderDiv = styled.div`
  display: flex;
  //margin-left: 12px;
  justify-content: end;
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
  //top: 100px;
  //background-color: green;
  align-items: center;
  @media (min-width: 600px) {
    margin-bottom: 20px;
  }
`;
const SenderNameFrom = styled.p`
  display: flex;
  font-size: 14px;
  z-index: 2;
  color: #4c544b;
  font-weight: bold;
  //white-space: normal; // 필요하면 추가
  word-wrap: break-word;
  //max-width: 90%; // 필요한 너비로 조절
  justify-items: end;
  align-items: end;
  margin-bottom: 25px;
  @media (min-width: 600px) {
    font-size: 18px;

  }
`;
const SenderReplyText = styled.input`
  text-align: center;
  display: flex;
  margin-left: 16px;
  width: 120px;
  border: 0;
  z-index: 3;
  padding-bottom: 10px;
  //height: 50px;
  border-bottom: 1px solid black;
  background: transparent; // 배경색 투명하게
  outline: none; // 클릭 시 테두리 제거
  color: #A7C87E; // 텍스트 색상
  font-size: 16px; // 폰트 크기
  position:relative;
  resize: none; // 사용자가 크기를 조절하지 못하게 함
  margin-bottom: 3px;
  margin-right: 30px;

  &::placeholder {
    color: #A7C87E;
    font-size: 20px;
  }

  @media (min-width: 600px) {
    font-size: 17px;
    width: 175px;
    margin-bottom: -5px;
    margin-right: 30px;
    padding-bottom: 15px;

    }
`;
const SelectColorDiv = styled.div`
  
  font-size: 16px;
  //top: 10px;
  margin-left: -70px;
  //width: 92%;
  @media (min-width: 600px) {
    position: relative;
  flex-direction: row;
  margin-top: 10px;
  margin-left: -30px;
  width: 343px;
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
export const s = {
    Wrapper,
    SenderNameFrom,
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
    Container,
    Text,
    BackButton,
    BackgroundContainer
};
