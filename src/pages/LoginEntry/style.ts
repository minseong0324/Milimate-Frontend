import styled from "styled-components";
import bodyBackground from "../../assets/background/background.svg";
import titleimg from "../../assets/title/title.svg";

const Button = styled.button`
  margin-bottom: 15px;
  font-family: "EF_jejudoldam";
  width: 220px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정
  background: rgb(58 56 56);
  background-size: cover; // 이미지가 버튼에 맞게 조절
  color: black;
  border-radius: 30px;
  font-size: 17px;
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 2;
  color: white;
`;

const ButtonWrapper = styled.div`
  position: relative;
  bottom: -30px;
  top: -30px;
  z-index: 2;
`;

const CenteredWrapper = styled.div`
  font-family: "EF_jejudoldam";
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const BackgroundContainer = styled.div`
  font-family: "EF_jejudoldam";
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${bodyBackground}) no-repeat center center; // 배경 이미지 중앙 배치
`;

const Title = styled.text`
  font-size: 45px;
  line-height: 1; // 글자 간격
  color: rgb(56 87 35);
`;

const H2 = styled.h2``;

const H1 = styled.h1`
  //margin-top: 0px;
  font-family: "EF_jejudoldam";
  font-size: 60px;
  //margin: 0px;
  line-height: 0; // 글자 간격
`;

const P = styled.p`
  margin-top: 6px;
  font-size: 14px;
  padding-bottom: 30px;
`;

const Break = styled.br``;

const Form = styled.form``;

const TreeImg = styled.img``;

export const s = {
  Button,
  CenteredWrapper,
  H2,
  H1,
  P,
  Form,
  TreeImg,
  Break,
  ButtonWrapper,
  BackgroundContainer,
  Title,
};
