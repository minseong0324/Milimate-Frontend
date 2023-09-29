import styled, { css } from "styled-components";
import CharacterFace from "../../assets/charater/CharacterFace.png";
import SoliderTag from "../../assets/Logo/SoldierTag.svg";
import SmallBubble from "../../assets/Logo/SoldierTag.svg";
import deleteIcon from "../../assets/Icons/delete.svg";
import editIcon from "../../assets/Icons/editIcon.svg";
import logoutIcon from "../../assets/Icons/logout.svg";
import versionIcon from "../../assets/Icons/version.svg";
import personIcon from "../../assets/Icons/person.svg";
import BackButtonImg from "../../assets/BackButton/BackButton.svg"


const BackButton = styled.img.attrs({
  src: BackButtonImg
})`
  position: absolute;
  width: 24px;
  height: auto;
  left: 2%;  /* 화면의 좌측에서 약간 떨어진 정도 설정 */
  top: 10px;
  @media (min-width: 600px) {
    left: calc(50% - 300px + 10px);
    top: 36px;

  }
  /* 가로모드용 스타일 */
  @media screen and (max-width: 767px) and (orientation: landscape) {
    top: 10px;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  //height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Text = styled.div`
  position: absolute;
  top: 13px;
  font-size: 18px;
  font-weight: bolder;
  color: #4A544A;
  @media (min-width: 600px) {
    top: 36px;
    font-size: 20px;
  }

`;

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #f2f1ee no-repeat center center;
  
  @media (min-width: 600px) {
    background-size: 600px auto;/* 원하는 최대 너비 값으로 설정 */
    margin: 0 auto; /* 좌우 중앙 정렬 */
  }

  
`;


const isMobile = isMobileDevice();

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
const mobileLandscape = isMobile && css`
  @media screen and (max-width: 767px) and (orientation: landscape) {
    margin-top: 100px;
  }

  @media screen and (min-width: 768px) and (orientation: landscape) {
    margin-top: 100px;
  }
`;


const Wrapper = styled.div`
  font-family: "";
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 70px;

  ${mobileLandscape}

  @media (min-width: 600px) {
    margin-top: 110px;

  }
`;

const SoldierTagContainer = styled.div`
  position: relative;
  width: 343px;
  height: 145px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;

  @media (min-width: 600px) {
    margin-bottom: 30px;
  }
`;
const TextsStyle = styled.div`
  text-align: left !important;
  line-height: 0.2; // 글자 간격
  z-index: 0;
  font-size: 17px;
  position: absolute;
  top: 40px;
  left: 140px;
  color : #4a534a;
  font-weight: bolder;
  @media (min-width: 600px) {
    top: 40px;
    left: 140px;
    font-size: 18px;
  }
`;

const TextsStyle_1 = styled(TextsStyle)`
  top: 79px;  // 또는 원하는 값으로 변경
  font-size: 14px;
  font-weight: bold;
  color : #668444;
  @media (min-width: 600px) {
    top: 79px;  // 또는 원하는 값으로 변경
    font-size: 15px;

  }
`;

const TextsStyle_2 = styled(TextsStyle)`
  top: 106px;  // 또는 원하는 값으로 변경
  font-size: 14px;
  font-weight: bold;
  color : #668444;
  @media (min-width: 600px) {
    top: 106px;  // 또는 원하는 값으로 변경
    font-size: 15px;

  }
`;


const TextsStyle2 = styled.div`
  text-align: left !important;
  line-height: 0.2; // 글자 간격
  z-index: 0;
  font-size: 14px;
  position: absolute;
  top: 79px;
  left: 190px;
  color : #4a544a;
  @media (min-width: 600px) {
    top: 79px;
    left: 190px;
    font-size: 15px;
  }
`;

const TextsStyle2_1 = styled(TextsStyle2)`
  top: 106px;  // 또는 원하는 값으로 변경
  @media (min-width: 600px) {
    top: 106px;  // 또는 원하는 값으로 변경
    font-size: 15px;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 343px;
  margin-bottom: 100px;
 // align-items: start;
  @media (max-width: 768px) {
    margin-top: 10px;
    width: 343px;
    //margin-left: 12px;
    // font-size: 16px;
  }
`;
const VersionText = styled.div`
  color: #adc786;
  text-align: end;
  font-size: 20px;
  @media  (max-width:  768px) {
    font-size: 18px;
  }
`;
const VersionDiv = styled.div`
  display: flex;
  flex-direction: row;
  //background-color: grey;
  align-items: center;
  justify-content: space-between;
  
  width: 310px;
  @media (max-width: 768px) {
    //margin-top: 30px;
    justify-content: space-between;
    //align-items: center;
    //padding-left:16px;
    width: 310px;
    //margin-left: 12px;
    // font-size: 16px;
  }
`
const MenuDiv = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #adc786;
  
  width: 350px;
  justify-content: center;

  @media (min-width: 600px) {
    margin-bottom: 5px;
  }
`;

const PersonIcon = styled.img.attrs({
    src: personIcon,
})`
  width: 24px;
  background-image: url(${SmallBubble});
  background: #f2f1ee no-repeat center center;
  @media (min-width: 600px) {
    font-size: 27px;
    margin-left: 0;
  }
  //z-index: 1;
`;
const EditIcon = styled.img.attrs({
    src: editIcon,
})`
  width: 24px; // 부모 div의 너비에 맞게 이미지 너비 설정

  //height: auto; // 이미지의 비율을 유지하면서 높이 조절
  background-image: url(${SmallBubble});
  background: #f2f1ee no-repeat center center;
  @media (min-width: 600px) {
    font-size: 27px;
    margin-left: 0;
  }
`;
const VersionIcon = styled.img.attrs({
    src: versionIcon,
})`
  width: 24px;

  //height: auto; // 이미지의 비율을 유지하면서 높이 조절
  background-image: url(${SmallBubble});
  background: #f2f1ee no-repeat center center;
  @media (min-width: 600px) {
    font-size: 27px;
    margin-left: 0;
  }
`;
const LogoutIcon = styled.img.attrs({
    src: logoutIcon,
})`
  width: 24px;

  //height: auto; // 이미지의 비율을 유지하면서 높이 조절
  background-image: url(${SmallBubble});
  background: #f2f1ee no-repeat center center;
  @media (min-width: 600px) {
    font-size: 27px;
    margin-left: 0;
  }
`;
const DeleteIcon = styled.img.attrs({
    src: deleteIcon,
})`
  width: 24px;

  //height: auto; // 이미지의 비율을 유지하면서 높이 조절
  background-image: url(${SmallBubble});
  background: #f2f1ee no-repeat center center;
  @media (min-width: 600px) {
    font-size: 27px;
    margin-left: 0;
  }
`;
const Splice = styled.div`
  border: 0.5px solid #adc786;
  margin-top: 8px;
  margin-bottom: 8px;
  width : 350px;
  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: -12px;
    //padding-left:16px;
    width: 350px;
    //margin-left: 12px;
    // font-size: 16px;
  }
  //maring : 20px;
`;
const SoldierTagImage = styled.img.attrs({
    src: SoliderTag,
})`
  width: 343px;
  height: auto;
  position: relative;
  z-index: 2;
  margin-bottom: 45px;  // 위로 이동
  //margin-top: 100px;  // 위로 이동
  @media (min-width: 600px) {
    width: 400px;
  }
`;
const CharImg = styled.img.attrs({
    src: CharacterFace,
})`
  display: flex;
  //margin-top: 160px;
  position: absolute;
  top: 70px;
  left: 80px;
  transform: translate(-50%, -50%);
  margin-bottom: 16px;
  align-items: center;
  width: 104px;
  height: 78px;
  z-index: 3;
  @media (min-width: 600px) {
    width: 115px;
    height: 86.25px;
    top: 73px;
    left: 80px;
  }
`;
const InfoDiv = styled.div`
  flex-direction: column;
  display: flex;
  
  
  text-align: start;
  margin-left: 250px;
  margin-bottom: 140px;
  @media (min-width: 600px) {
    //top: 0
    margin-left: 120px;
    margin-top: 80px;
  }
`;
const UserNameText = styled.p`
  position: relative;
  z-index: 2;
  //align-items: center;
  color: #4c544b;
  //color: #6a804a;
  //padding: 8px;
  font-size: 18px;
  font-weight: bolder;
  //margin-left: 32px;
  top: -30px;
  margin-top: 220px;
  @media (min-width: 600px) {
    //max-height: 20px; // 원하는 최대 높이값을 지정하세요
    top: -70px;
    //margin-left: 8px;
    //margin-top: 250px;
    font-size: 18px;
    
  }
`;

const userInfoContentDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  //background-color: grey;
  z-index: 4;
  margin-bottom: 30px;
  top: -20px;
  //background-color: grey;
  align-items: center;
  @media (min-width: 768px) {
    top: -20px;
    margin-bottom : 20px;
  }
  @media (min-width: 600px) {
    top: 0px;
    margin-top : 5px;
    margin-bottom: 16px;
  }
`;
const UserEnlistmentKey = styled.div`
  //background-color: grey;
  align-items: center;
  display: flex;
  padding: 0;
  height: 30px;
  font-size: 14px;
  z-index: 2;
  color: #6d844c;
  font-weight: bold;
  margin-top: -20px;
  //max-width: 90%; // 필요한 너비로 조절
  @media (min-width: 600px) {
    margin-top: -150px;
    font-size: 14px;
  }

`;
const UserEnlistmentText = styled.div`
  //background-color: grey;
  align-items: center;
  display: flex;
  padding: 0;
  height: 30px;
  font-size: 14px;
  z-index: 2;
  color: #4c544b;
  font-weight: bold;
  margin-top: -20px;
  margin-left: 12px;
  //max-width: 90%; // 필요한 너비로 조절
  @media (max-width: 768px) {
    margin-top: -150px;
    margin-left: 12px;
    font-size: 14px;
  }
`;

const Button = styled.button`
  width: 250px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정
  background-color: rgb(58 56 56);
  background-size: cover; // 이미지가 버튼에 맞게 조절
  border-radius: 30px;
  font-size: 18px;
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 2;
  color: rgb(58 56 56);
  &:active {
    // 버튼이 눌렸을 때의 스타일
    background-color: rgb(58 56 56);
    background-size: cover; // 이미지가 버튼에 맞게 조절
  }

  color: white;
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

const ButtonStyle = styled.button`
  background-color: transparent;
  
  //background-color: grey;
  width: 320px;
  height: 50px;
  border: none;
  text-align: start;
  font-size: 16px;
  color: #4c544b;
  //font-weight: bold;
  margin-left: 12px;
  &:focus {
    outline: none;  // 포커스 테두리 제거
  }

  &:active {
    transform: none;  // 클릭 시 버튼이 움직이는 효과 제거
    color: black;     // 클릭 시 글자 색상 변경 제거 (필요하다면)
  }
  @media (min-width: 600px) {
    font-size: 18px;
    margin-left: 25px;
  }
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
  //font-weight: light;
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
    InfoDiv,

    SoldierTagContainer,
    UserNameText,
    CharImg,
    UserEnlistmentText,
    SoldierTagImage,
    TextsStyle,
    TextsStyle_1,
    TextsStyle_2,
    TextsStyle2,
    TextsStyle2_1,
    BackgroundContainer,
    UserInfoContainer,
    MainTextWrapper,
    MainNameText,
    MainEnlistmentText,

    ButtonStyle,
    DesignReferDiv,
    DesignReferText,
    userInfoContentDiv,
    UserEnlistmentKey,

    MenuWrapper,
    DeleteIcon,
    LogoutIcon,
    EditIcon,
    PersonIcon,
    VersionIcon,
    MenuDiv,

    Splice,
    VersionDiv,
    VersionText,
    BackButton,
    Container,
    Text
};
