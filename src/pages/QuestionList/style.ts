import styled from "styled-components";
import bootimg from "../../assets/boot/bootsicon.svg";
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  background-color: #ede8d7;
`;

const CustomUl = styled.ul`
  list-style-type: none; // 목록 항목 앞의 기호(점) 제거
  padding: 32px;
  margin: 20px 0; // 상하 여백 설정
  border: 1px solid black;
`;
const CustomLi = styled.li`
  padding: 10px;
  border-bottom: 1px solid grey;
  width: 300px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: start;
  color: grey;
  margin: 10px 5px;

  @media (max-width: 320px) {
    // 320px 이하의 화면 크기에 대한 스타일
    width: 100%; // 너비를 100%로 설정
  }
`;

const CommaText = styled.h1``;
const LiLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const BootImg = styled.img.attrs({
  src: bootimg,
})`
  display: flex;

  align-items: center;
  width: 60px;
  height: 60px;
`;
export const s = {
  MainWrapper,
  CustomLi,
  CustomUl,
  BootImg,
  LiLayout,
  CommaText,
};
