import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  background: #f2f1ee no-repeat center center;
`;
const IconLayout = styled.div`
  flex-direction: row;
  width: 600px;
  margin-top: 24px;
  //margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //background-color: grey;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Spacer = styled.div`
  width: 36px;
  
`;
const ButtonDesign = styled.button`
  background-color: transparent;
  border: none;
  justify-content: start;
  align-items: start;
`;
const TitleText = styled.p`
  font-size: 24px;
  text-align: start;
;
`;
const CustomUl = styled.ul`
  list-style-type: none; // 목록 항목 앞의 기호(점) 제거
  padding: 24px;
  //margin: 20px 0; // 상하 여백 설정
  //background-color: grey;
  width: 600px;
  @media (max-width: 768px) {
    width: 80%;
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
  color: black;
  font-size: 20px;
  margin: 10px 5px; // 세로로 10px, 가로로 5px의 여백 추가
`;
const Splice = styled.div`
  border: 0.5px solid #adc786;
  //width : 600px;
  //maring : 20px;
`;
const DayText = styled.p`
  font-size:  20px;
  color: #6d844c;
`;
const LiLayout = styled.div`
  display: flex;
  
  flex-direction: row;
  //justify-content: center;
  align-items: center;
`;

export const s = {
  MainWrapper,
  CustomLi,
  CustomUl,

  LiLayout,
  DayText,
  IconLayout,
  ButtonDesign,
  TitleText,
  Spacer,
  Splice
};
