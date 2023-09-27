import styled from "styled-components";
import BackButtonImg from "../../assets/BackButton/BackButton.svg"

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

const MainWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

`;

const CustomUl = styled.ul`
  list-style-type: none; // 목록 항목 앞의 기호(점) 제거
  padding: 12px;
  //margin: 20px 0; // 상하 여백 설정
  //background-color: grey;
  width: 330px;
  margin-top: 60px;
  @media (min-width: 600px) {
    width: 550px;
    margin-top: 100px;
  }
`;
const CustomLi = styled.li`
  //padding: 10px;
  
  width: 100%;
  //text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: start;
  color: #4c544b;
  font-weight: bolder;
  font-size: 16px;
  margin: 10px 16px; // 세로로 10px, 가로로 5px의 여백 추가
`;

const GreyCustomLi = styled(CustomLi)`
    color: grey;
`;

const Splice =  styled.div`
  border: 0.5px solid #adc786;
  //width : 600px;
  //maring : 20px;
`;
const DayText = styled.p`
  font-size:  16px;
  color: #6d844c;
  font-weight: bolder;
`;
const GreyDayText = styled.p`
  font-size:  16px;
  color: grey;
`;
const LiLayout = styled.div`
  display: flex;
  
  flex-direction: row;
  //justify-content: center;
  align-items: center;
`;
const VoidQuestion = styled.div`
  margin-top: 200px;
  color : #4c544b;
  font-size: 20px;
  
`
export const s = {
  MainWrapper,
  CustomLi,
  CustomUl,
  VoidQuestion,
  LiLayout,
  DayText,
  Splice,
  GreyDayText,
  BackButton,
  BackgroundContainer,
  Container,
  Text,
  GreyCustomLi
};
