import styled from "styled-components";

const Wrapper = styled.div`
  /* 전체 화면 크기 */
  width: 100vw;
  height: 100vh;

  /* 최상단 위치 */
  z-index: 999;

  /* 중앙 배치 */
  position: fixed; // absolute에서 fixed로 변경
  top: 0;
  left: 0;

  /* 배경색을 회색으로 설정하고 투명도 조절 */
  background-color: rgba(0, 0, 0, 0.5); // 0.5는 투명도를 나타냅니다.
`;

const ModalBox = styled.div`
  /* 모달창 크기 */
  width: 300px;
  height: 400px;

  /* 중앙 배치 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f2f1ee no-repeat center center;
  border: 1px solid black;
  border-radius: 8px;
`;
const OkBtnStyle = styled.button`
  /* 버튼의 위치를 모달창의 가운데 하단으로 설정 */
  position: absolute;

  left: 75%; // 버튼의 좌측을 모달창의 중앙에 위치시킵니다.
  top: 300px;
  transform: translate(-50%, 0); // 버튼의 중앙을 기준으로 위치 조정
  //background-color: #ede8d7;
  border: 1px solid black;
  border-radius: 12px;
  //padding-horizontal: 16px;
  //padding-vertical: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  
  width: 130px;
  height: 40px;
  color : white;
  background-color: #4c534b;
  font-size: 16px;
`;
const CancelBtnStyle = styled.button`
  /* 버튼의 위치를 모달창의 가운데 하단으로 설정 */
  position: absolute;

  left: 25%; // 버튼의 좌측을 모달창의 중앙에 위치시킵니다.
  top: 300px;
  transform: translate(-50%, 0); // 버튼의 중앙을 기준으로 위치 조정
  //background-color: #ede8d7;
  border: 1px solid black;
  border-radius: 12px;
  //padding-horizontal: 16px;
  //padding-vertical: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 130px;
  height: 40px;

  background-color: #f2f1ee;
  color : black;
  font-size: 16px;
  
`;
const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const TitleText = styled.p`
  font-size: 24px;
  text-align: start;
  postion: absolute;
  transform: translate(16px, 0px); // 버튼의 중앙을 기준으로 위치 조정
`;
const ContentText = styled.p`
  font-size: 20px;
  text-align: start;
  transform: translate(16px, 0px); // 버튼의 중앙을 기준으로 위치 조정
`;
const ModalContent = styled.div`
  /* 모달 내용 크기 및 디자인 */
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #ede8d7;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center; // 만약 input들이 세로축에서 중앙에 위치하길 원한다면 추가
  justify-content: center;
  margin-top: 60px;
  & > *:not(:last-child) {
    margin-right: 10px; // 마지막 input을 제외한 모든 input에 오른쪽 마진 15px 부여
  }
`;

const TextsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2; // 글자 간격
  z-index: 0;
  font-size: 16px;
`;

const TextsStyle2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2; // 글자 간격
  z-index: 0;
  font-weight: bold;
  font-size: 16px;
`;
const MoreInfoInputYear = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 40px;
  border: 1px solid black; // 모든 테두리를 제거합니다.
  border-radius: 12px;
  background-color: white;
  color: #111;
  z-index: 5;

  &::placeholder {
    color: #777;
  }

  &:focus {
    outline: none;
  }
`;
const MoreInfoInputYMonthDay = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 30px;
  border: 1px solid black; // 모든 테두리를 제거합니다.
  border-radius: 12px;
  background-color: white;
  color: #111;
  z-index: 5;

  &::placeholder {
    color: #777;
  }

  &:focus {
    outline: none;
  }
`;

export const s = {
  TextsStyle,
  TextsStyle2,
  MoreInfoInputYMonthDay,
  MoreInfoInputYear,
  Wrapper,
  ModalBox,
  OkBtnStyle,
  ModalContent,
  TitleText,
  ContentText,
  BtnDiv,
  CancelBtnStyle,
  InputContainer,
};
