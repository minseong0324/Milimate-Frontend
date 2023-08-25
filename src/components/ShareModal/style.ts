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
  height: 200px;

  /* 중앙 배치 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ede8d7;
  border: 1px solid black;
  border-radius: 8px;
`;
const BtnStyle = styled.button`
  /* 버튼의 위치를 모달창의 가운데 하단으로 설정 */
  position: absolute;

  left: 50%; // 버튼의 좌측을 모달창의 중앙에 위치시킵니다.
  top: 150px;
  transform: translate(-50%, 0); // 버튼의 중앙을 기준으로 위치 조정
  background-color: #ede8d7;
  border: 1px solid black;
  border-radius: 12px;
  padding-horizontal: 16px;
  //padding-vertical: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 100px;
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

export const s = {
  Wrapper,
  ModalBox,
  BtnStyle,
  ModalContent,
  TitleText,
  ContentText,
};
