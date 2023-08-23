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

  width: 700px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const CustomLi = styled.li`
  padding: 10px;
  border-bottom: 1px solid grey;
  width: 90%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: start;
  color: grey;
  margin: 10px 5px; // 세로로 10px, 가로로 5px의 여백 추가
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
  width: 40px;
  height: 40px;
`;
export const s = {
  MainWrapper,
  CustomLi,
  CustomUl,
  BootImg,
  LiLayout,
  CommaText,
};
