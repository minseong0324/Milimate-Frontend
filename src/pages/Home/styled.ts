import styled, {createGlobalStyle} from "styled-components";
import cabinet from "../../assets/Cabinet/cabinet.svg";
import sadCharacter from "../../assets/charater/ch_sad_character.png";
import heartSadCharacter from "../../assets/charater/HeartCharacter4.png";
import heartCharacter1 from "../../assets/charater/HeartCharacter1.png";
import heartCharacter2 from "../../assets/charater/HeartCharacter2.png";
import heartCharacter3 from "../../assets/charater/HeartCharacter3.png";


import noneEnvelope from '../../assets/EnvelopeImage/noneEnvelope.svg';
import existEnvelope from '../../assets/EnvelopeImage/trueEnvelope.svg';
import contentEnvelop from '../../assets/EnvelopeImage/contentEnvelope.svg';

import MilimateImg from '../../assets/Logo/Milimate.svg'


const WrapperLayout = styled.div`
  //background-color: #f2f1ee;

  //font-family: "EF_jejudoldam";
  //position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  //marine: 0;
  align-items: center;
  justify-content: center;
  background: #f2f1ee no-repeat center center;


  @media (min-width: 600px) {
    max-width: 600px; /* 원하는 최대 너비 값으로 설정 */
    margin: 0 auto; /* 좌우 중앙 정렬 */
  }
`;
const AppBarWrapperDiv = styled.div`
  background-color: #f2f1ee;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 20px;
  @media (min-width: 600px) {
    max-width: 600px; /* 원하는 최대 너비 값으로 설정 */
    margin-top: 40px;
  }
`;

const AppBarTitleText = styled.p`
  margin-left: 16px;
  font-size: 18px;
  color: #4c544b;
  @media (min-width: 600px) {
    
    font-size: 20px;
  }
`;

const MilimateLogo = styled.img.attrs({
  src: MilimateImg,
})`
margin-left: 16px;
width: 117px;
height: 16px;
  @media (min-width: 600px) {
    
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const D_dayText = styled.p`
  margin-top: 30px;
  margin-bottom: 16px;
  color: #4c544b;
  font-size: 16px;
  font-weight: bold;
  border : 1px solid white;
  padding-right : 16px;
  padding-left: 16px;
  border-radius: 12px;
  background-color : white;
  
`;
const MainContentText = styled.div`
  color: #4c544b;
  line-height: 1.2; // 글자 간격
  font-size: 18px;
  font-weight: bolder;
  margin-top: 30px;
  margin: 0;
  word-wrap: break-word;  // 긴 단어를 다음 줄로 래핑
  white-space: pre-wrap;  // 공백을 존중하면서 텍스트를 래핑
  max-width: 220px;  // 또는 원하는 값으로 변경. 이 값은 단어가 래핑되는 포인트를 제어합니다.
  text-align: center;
`;

const SadCharImg = styled.img.attrs({
    src: heartSadCharacter,
})`
  display: flex;
  margin-top: 25px;
  margin-bottom: 0px;
  align-items: center;
  width: 110px;
  height: 196px;
  @media (min-width: 600px) {
    width: 130px;
    height: 231.636364px;
  }
`;
const hearCharaImg1 = styled.img.attrs({
    src: heartCharacter1,
})`
  display: flex;
  margin-top: 25px;
  margin-bottom: 0px;
  align-items: center;
  width: 110px;
  height: 196px;
  @media (min-width: 600px) {
    width: 130px;
    height: 231.636364px;
  }
`;
const hearCharaImg2 = styled.img.attrs({
    src: heartCharacter2,
})`
  display: flex;
  margin-top: 25px;
  margin-bottom: 0px;
  align-items: center;
  width: 110px;
  height: 196px;
  @media (min-width: 600px) {
    width: 130px;
    height: 231.636364px;
  }
`;
const hearCharaImg3 = styled.img.attrs({
    src: heartCharacter3,
})`
  display: flex;
  margin-top: 25px;
  margin-bottom: 0px;
  align-items: center;
  width: 110px;
  height: 196px;
  @media (min-width: 600px) {
    width: 130px;
    height: 231.636364px;
  }
  
`;
const ShareBtnDiv = styled.button`
  display: flex;
  flex-direction: row;
  width: 343px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 16px;
  background-color: #4c544b;
  font-weight: bold;
  font-size: 16px;
  color: white;
  margin-bottom: 20px;
  @media (min-width: 600px) {
    width: 410px;
    height: 50px;
  }
`;

const NoneEnvelope = styled.img.attrs({
    src: noneEnvelope,
})`
  margin-top: 12px;
  margin-bottom: 24px;
  width: 343px;
  height: 201px;
  position: relative; // 이 부분 추가
  margin: auto;
  display: block; 
  @media (min-width: 600px) {
    width: 410px;
    height: 240.26px;
  }
`;

const ExistEnvelope = styled.img.attrs({
    src: existEnvelope,
})`
  margin-top: 12px;
  margin-bottom: 24px;
  width: 343px;
  height: 201px;
  position: relative; // 이 부분 추가
  margin: auto;
  display: block; 
  @media (min-width: 600px) {
    width: 410px;
    height: 240.26px;
  }
`;

const EnvelopeDiv = styled.div<{ blur?: boolean }>`
  margin-top: 10px;
  margin-bottom: 12px;
  width: 100%;
  //height: 300px;
  //background: url(${contentEnvelop}) no-repeat center;
  
  background-size: contain; // 이미지가 div를 채우도록 조절
  position: relative;
  filter: ${({ blur }) => (blur ? 'blur(5px)' : 'none')};
  //height: 300px; // 적절한 높이로 설정 (이미지 높이에 따라 조절 필요)
`;
const ContentEnvelope = styled.img.attrs({
  src: contentEnvelop,
})`
  margin: auto;
  display: block; 
  margin-bottom: -124px;
  width: 343px;
  height: 201px;
  position: relative; // 이 부분 추가
  @media (min-width: 600px) {
    width: 410px;
    height: 240.26px;
  }
`;
const CenteredText = styled.p`
  position: relative;
  //margin-bottom: 100px;
  top: -130px;
  //background-color: grey;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000; // 원하는 색상으로 변경하세요
  text-align: center;
  max-height: calc(1.4em * 3); // 1.2em은 한 줄의 높이로 가정, 3줄까지 표시
  width: 90%; // 원하는 폭으로 설정 (예: 이미지의 80%)

  overflow: hidden; // 텍스트가 박스 밖으로 나가지 않도록
  display: -webkit-box; // flexbox의 구형 구현
  -webkit-line-clamp: 3; // 표시될 최대 라인 수
  -webkit-box-orient: vertical; // 박스의 방향을 수직으로 설정

  padding: 10px; // 원하는 값으로 조정 가능
  box-sizing: border-box; // padding 값이 전체 높이/폭에 포함되도록
  z-index: 3;
  @media (max-width: 768px) {
    //left : 67%;
    top : -50px;
    
  }
`;


const NameText = styled.p`
  //position: absolute;
  
  //text-align: end;
  position: relative;
  top: -80px;
  left: 75%;
  //top  : 180px;
  font-size: 18px;
  color: #000; // 원하는 색상으로 변경하세요
  margin: 0;
  z-index: 4;
  margin-left: 8px;
  @media (max-width: 768px) {
    left : 67%;
    top : -30px;
  }
  
`;

const NormalText = styled.p`
  color: #4c544b;
  font-size: 16px;

  margin: 0;
  margin-left: 8px;
  
`;


const OkBtnStyle = styled.button`
  /* 버튼의 위치를 모달창의 가운데 하단으로 설정 */
  position: absolute;

  //left: 50%; // 버튼의 좌측을 모달창의 중앙에 위치시킵니다.
  top: 225px;
  //transform: translate(-50%, 0); // 버튼의 중앙을 기준으로 위치 조정
  //background-color: #ede8d7;
  border: transparent;
  border-radius: 12px;

  width: 120px;
  height : 50px;
  color : white;
  background-color: #4c534b;
  font-size: 16px;
  font-weight: bolder;
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const SmallCenterModalWrapper = styled.div`
  //에러 모달창 wrapper
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 80px;
`;

const SmallModalTextsWrapper2 = styled.div`
  //두줄짜리 에러창일 때 사용
  position: relative;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  line-height: 2; // 글자 간격
  margin-bottom: -10px;
`;

export const s = {

    WrapperLayout,
    AppBarWrapperDiv,
    AppBarTitleText,
    MainContent,
    D_dayText,
    MainContentText,
    SadCharImg,
    ShareBtnDiv,
    NoneEnvelope,
    NormalText,
    ExistEnvelope,
    EnvelopeDiv,
    CenteredText,
    ContentEnvelope,
    NameText,
    hearCharaImg1,
    hearCharaImg2,
    hearCharaImg3,
    MilimateLogo,
    OkBtnStyle,
    BtnDiv,
    SmallCenterModalWrapper,
    SmallModalTextsWrapper2
};
