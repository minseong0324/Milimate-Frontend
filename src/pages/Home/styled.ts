import styled from "styled-components";
import cabinet from "../../assets/Cabinet/cabinet.svg";
import tmpChar from "../../assets/ProfileHomeChar/tmpchar.svg";
// import button1 from '../../assets/button/button1.png';
// import button4 from '../../assets/button/button4.png';
// import buttonMidium1 from '../../assets/button/button-midium-1.png';
// import buttonMidium2 from '../../assets/button/button-midium-2.png';
const WrapperLayout = styled.div`
  background-color: #ede8d7;

  font-family: "EF_jejudoldam";
  //position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  marine: 0;
  align-items: center;
  justify-content: center;
  background-color: #ede8d7;
`;
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row; // Flexbox의 방향을 세로로 설정
  position: relative;
  background-color: #ede8d7;
  height: 100px;
  width: 395px;
  font-size: 48px;
  background-size: cover;
  border-radius: 10px;
  align-items: flex-start; // 이 부분을 수정

  margin: 0 auto;
  justify-content: start;
`;

const CenteredDiv = styled.div`
  border: 1px solid grey;

  margin: 0 auto;
  width: 150px;
  height: 150px;
  font-size: 12px;
`;
const MainTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //  align-items: flex-end;
  height: 100%; // 이 부분을 추가하여 전체 높이를 차지하도록 합니다.
  justify-content: flex-end;
  margin-left: 16px;
  margin-top: auto;
  //margin-bottom: 20px;
`;

const MainNameText = styled.p`
  color: #836c68;
  font-size: 28px;
  font-weight: bold;
  margin: 0; // 상하 간격을 제거합니다.
`;

const MainEnlistmentText = styled.p`
  color: #836c68;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 16px;
`;
const test = styled.div``;
const ImageContainer = styled.div`
  position: relative;

  display: flex;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;
  background-color: #ede8d7;
`;
const CabinetImg = styled.img.attrs({
  src: cabinet,
})`
  width: 100%;
  height: 670px;
  position: relative; // 이 부분 추가
`;

const TodayQuestionBtn = styled.button`
  position: absolute;
  top: 75px; // 이미지의 상단에서 10px 아래에 위치
  left: 110px; // 이미지의 왼쪽에서 10px 오른쪽에 위치
  z-index: 1; // 이 부분 추가
`;
const CheckReplyBtn = styled.button`
  position: absolute;
  top: 240px; // 이미지의 상단에서 10px 아래에 위치
  left: 70px; // 이미지의 왼쪽에서 10px 오른쪽에 위치
  z-index: 2; // 이 부분 추가
`;
const TotalQuestionList = styled.button`
  position: absolute;
  top: 200px; // 이미지의 상단에서 10px 아래에 위치
  left: 260px; // 이미지의 왼쪽에서 10px 오른쪽에 위치
  z-index: 3; // 이 부분 추가
`;
const ShareQuestion = styled.button`
  position: absolute;
  top: 370px; // 이미지의 상단에서 10px 아래에 위치
  left: 280px; // 이미지의 왼쪽에서 10px 오른쪽에 위치
  z-index: 3; // 이 부분 추가
`;
const MyCompletion = styled.button`
  position: absolute;
  top: 570px; // 이미지의 상단에서 10px 아래에 위치
  left: 260px; // 이미지의 왼쪽에서 10px 오른쪽에 위치
  z-index: 5; // 이 부분 추가
`;

const tmpCharImg = styled.img.attrs({
  src: tmpChar,
})`
  display: flex;

  align-items: center;
  width: 100px;
  height: 100px;
`;

//background: url(${button4}) no-repeat center center; // 이미지를 배경으로 사용
//background: url(${button1}) no-repeat center center; // 눌렸을 때의 배경 이미지
const LoginWrapper = styled.div`
  font-family: "DOSSaemmul";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  font-family: "DOSSaemmul";
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 67px;
`;

const LoginInput = styled.input`
  font-family: "DOSSaemmul";
  padding: 10px;
  font-size: 16px;
  width: 250px;
  border: none; // 모든 테두리를 제거합니다.
  border-bottom: 1px solid #777; // 아래쪽 테두리만 추가합니다.
  background-color: transparent;
  color: #111;
  z-index: 5;

  &::placeholder {
    color: #777;
  }

  &:focus {
    outline: none;
  }
`;

const TextsStyle = styled.div`
  font-family: "DOSSaemmul";
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2; // 글자 간격
  z-index: 0;
`;

const H3 = styled.h3`
  margin-bottom: 5px;
  font-size: 15px;
`;

const H1 = styled.h1`
  //margin-top: 0px;
  font-size: 28px;
  font-family: "DOSGothic";
`;

const P = styled.p`
  margin-top: 6px;
  font-size: 14px;
  padding-bottom: 30px;
`;

const ModalTextsWrapper = styled.div`
  position: relative;
  display: flex;
  font-size: 18px;

  line-height: 2; // 글자 간격
  margin-bottom: 10px;
`;

const ModalWrapper = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const ErrorCenterModalWrapper = styled.div`
  //에러 모달창 wrapper
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
`;

const ErrorModalTextsWrapper1 = styled.div`
  // 한줄짜리 에러창일 때 사용
  position: relative;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  line-height: 2; // 글자 간격
  margin-bottom: 10px;
`;

const ErrorModalTextsWrapper2 = styled.div`
  //두줄짜리 에러창일 때 사용
  position: relative;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  line-height: 2; // 글자 간격
  margin-bottom: -10px;
`;

const ModalButton = styled.button`
  margin-top: 45px;
  font-family: "DOSSaemmul";
  width: 170px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정

  background-size: cover; // 이미지가 버튼에 맞게 조절
  color: black;
  border-radius: 15px;
  font-size: 17px;
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 2;
  &:active {
    // 버튼이 눌렸을 때의 스타일

    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
`;
//background: url(${buttonMidium1}) no-repeat center center; // 이미지를 배경으로 사용
//background: url(${buttonMidium2}) no-repeat center center; // 눌렸을 때의 배경 이미지
export const s = {
  MainNameText,
  WrapperLayout,
  CenteredDiv,
  MainTextWrapper,
  ProfileWrapper,
  CabinetImg,
  MainEnlistmentText,
  tmpCharImg,
  ImageContainer,
  TodayQuestionBtn,
  CheckReplyBtn,
  TotalQuestionList,
  MyCompletion,
  ShareQuestion,
  test,
};
