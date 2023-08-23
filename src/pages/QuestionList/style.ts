import styled from "styled-components";
import bootimg from "../../assets/boot/bootsicon.svg";
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  background-color: #ede8d7;
`;

const CustomUl = styled.ul`
  list-style-type: none; // 목록 항목 앞의 기호(점) 제거
  padding: 0; // 패딩 제거
  margin: 20px 0; // 상하 여백 설정
`;
const CustomLi = styled.li`
  padding: 10px;
  border-bottom: 1px solid grey;
  width: 300px; // 너비를 200px로 고정
  text-align: center; // 텍스트를 중앙 정렬 (선택 사항)
  overflow: hidden; // 너비를 초과하는 텍스트를 숨김
  text-overflow: ellipsis; // 너비를 초과하는 텍스트를 ...로 표시
  white-space: nowrap; // 텍스트를 한 줄로 표시
  text-align: start;
  color: grey;
`;

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
};
