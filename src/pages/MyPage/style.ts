import styled from "styled-components";
// import button1 from '../../assets/button/button1.png';
// import button4 from '../../assets/button/button4.png';
// import buttonMidium1 from '../../assets/button/button-midium-1.png';
// import buttonMidium2 from '../../assets/button/button-midium-2.png';

const Button = styled.button`
  width: 250px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정
  background-color: rgb(58 56 56);
  background-size: cover; // 이미지가 버튼에 맞게 조절
  color: black;
  border-radius: 30px;
  font-size: 17px;
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 2;
  &:active {
    // 버튼이 눌렸을 때의 스타일
    background-color: rgb(58 56 56);
    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
  color: white;
`;

const BackgroundContainer = styled.div`
  font-family: "EF_jejudoldam";
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //background: rgb(242 242 242) no-repeat center center;
`;

//background: url(${button4}) no-repeat center center; // 이미지를 배경으로 사용
//background: url(${button1}) no-repeat center center; // 눌렸을 때의 배경 이미지
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const UserInfoContainer = styled.div`
  position: relative; // 추가된 부분
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: rgb(242 242 242);
  width: 320px;
  height: 100px;
  border-radius: 30px;
  margin-bottom: 20px;
  margin-top: 60px;
  box-shadow: 3px 3px 7px 3px rgba(0, 0, 0, 0.2);
`;

const CharImgContainer = styled.div`
  position: relative; // 추가된 부분
  display: flex;
  flex-direction: row;
  margin-top: -30px;
  width: 320px;
  height: 320px;
  border-radius: 30px;
`;

const CharImgName = styled.span`
  position: absolute;
  font-family: "EF_jejudoldam";
  display: flex;
  bottom: 10%; // 추가된 부분: 이미지의 중앙에 위치하게 합니다. (조절 가능)
  left: 12%;
  font-size: 20px;
  color: rgb(255 255 0);
  z-index: 2;
  margin-bottom: 35px;
`;
const MainTextWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  //margin-left: 32px;
  top: 30px;
  left: 130px;
`;
const MainNameText = styled.p`
  font-size: 20px;
  margin: 0;
`;
const MainEnlistmentText = styled.p`
  font-size: 16px;
  margin: 0;
`;
const CharImg = styled.img`
  position: absolute; // 추가된 부분
  bottom: 10%; // 추가된 부분: 이미지의 중앙에 위치하게 합니다. (조절 가능)
  left: 10%;
  font-family: "EF_jejudoldam";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 130px;
`;

const TextsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  font-size: 15px;
  margin-bottom: 50px;
`;

const QuotationStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  font-size: 60px;

  color: #777;
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

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 320px;
  align-items: start;
`;
const ButtonStyle = styled.button`
  background-color: transparent;
  //background-color: grey;
  width: 320px;
  height: 75px;
  border: none;
  text-align: start;
  font-size: 16px;
  color: grey;
  font-weight: bold;
`;
const DesignReferDiv = styled.div`
  flex-direction: column;
  position: fixed;
  bottom: 2%;
  display: flex;

  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 12px;
  font-weight: light;
`;
const DesignReferText = styled.p`
  margin: 0;
  color: grey;
`;
//background: url(${buttonMidium1}) no-repeat center center; // 이미지를 배경으로 사용
//background: url(${buttonMidium2}) no-repeat center center; // 눌렸을 때의 배경 이미지
export const s = {
  Wrapper,
  Button,
  TextsStyle,
  ErrorCenterModalWrapper,
  ErrorModalTextsWrapper1,
  ErrorModalTextsWrapper2,
  ModalButton,
  BackgroundContainer,
  QuotationStyle,
  CharImgContainer,
  CharImgName,
  CharImg,
  UserInfoContainer,
  MainTextWrapper,
  MainNameText,
  MainEnlistmentText,
  MenuWrapper,
  ButtonStyle,
  DesignReferDiv,
  DesignReferText,
};
