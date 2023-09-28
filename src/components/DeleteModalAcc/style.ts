import styled from "styled-components";



const OkBtnStyle = styled.button`
  /* 버튼의 위치를 모달창의 가운데 하단으로 설정 */
  position: absolute;

  left: 73%; // 버튼의 좌측을 모달창의 중앙에 위치시킵니다.
  top: 225px;
  transform: translate(-50%, 0); // 버튼의 중앙을 기준으로 위치 조정
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
const CancelBtnStyle = styled.button`
  /* 버튼의 위치를 모달창의 가운데 하단으로 설정 */
  position: absolute;

  left: 27%; // 버튼의 좌측을 모달창의 중앙에 위치시킵니다.
  top: 225px;
  transform: translate(-50%, 0); // 버튼의 중앙을 기준으로 위치 조정
  
  
  border: transparent;
  border-radius: 12px;

  width: 120px;
  height : 50px;
  
  background-color: #f2f1ee;
  color : #4c534b;
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

const SmallModalTextsWrapper1 = styled.div`
  // 한줄 짜리 에러창일 때 사용
  position: relative;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  line-height: 2; // 글자 간격
  margin-bottom: 10px;
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
  OkBtnStyle,
  BtnDiv,
  CancelBtnStyle,
  SmallCenterModalWrapper,
  SmallModalTextsWrapper1,
  SmallModalTextsWrapper2
};
