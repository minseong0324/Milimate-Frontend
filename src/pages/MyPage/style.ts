import styled from "styled-components";
import CharacterFace from "../../assets/charater/CharacterFace.svg";
import SoliderTag from "../../assets/Logo/SoldierTag.svg";
import SmallBubble from "../../assets/Logo/SoldierTag.svg";
import deleteIcon from "../../assets/Icons/delete.svg";
import editIcon from "../../assets/Icons/editIcon.svg";
import logoutIcon from "../../assets/Icons/logout.svg";
import versionIcon from "../../assets/Icons/version.svg";
import personIcon from "../../assets/Icons/person.svg";


// import button1 from '../../assets/button/button1.png';
// import button4 from '../../assets/button/button4.png';
// import buttonMidium1 from '../../assets/button/button-midium-1.png';
// import buttonMidium2 from '../../assets/button/button-midium-2.png';

const Wrapper = styled.div`
  display: flex;
  //background-color: #ede8d7;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  //padding-top: 88px;
  background: #f2f1ee no-repeat center center;
`;
const IconLayout = styled.div`
  flex-direction: row;
  width: 380px;
  margin-top: 24px;
  //margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  //background-color: grey;
  @media (max-width: 768px) {
    margin-top: 0px;
    width: 100%;
  }
`;
const ButtonDesign = styled.button`
  background-color: transparent;
  border: none;
`;
const TitleText = styled.p`
  font-size: 20px;
  text-align: start;
  font-weight: bolder;
  @media (max-width: 768px) {
    font-size: 18px;
    font-weight: bolder;
  }
`;
const SoldierTagContainer = styled.div`
  position: relative;
  flex-direction: row;
  width: 580px;
  height: 70px;
  display: flex;
  //flex-direction: column;
  align-items: center;
  padding: 32px;
  //padding-bottom: 32px;
  //margin-bottom: 32px;
  @media (max-width: 768px) {
    width: 80%;
    //  height: 20px;
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
  //background-color: grey;
  align-items: center;
  border-bottom: 1px solid #adc786;
  
  width: 350px;
  @media (max-width: 768px) {
    //margin-top: 30px;
    justify-content: center;
    align-items: center;
    //padding-left:16px;
   // width: 90%;
    //margin-left: 12px;
    // font-size: 16px;
  }
`;

const PersonIcon = styled.img.attrs({
    src: personIcon,
})`
  //position: absolute;
  //top: 0;
  //left: 0;
  //right: 0;
  //bottom: 0;
  width: 30px; // 부모 div의 너비에 맞게 이미지 너비 설정
  
  //height: auto; // 이미지의 비율을 유지하면서 높이 조절
  background-image: url(${SmallBubble});
  background: #f2f1ee no-repeat center center;
  //z-index: 1;
`;
const EditIcon = styled.img.attrs({
    src: editIcon,
})`
  width: 30px; // 부모 div의 너비에 맞게 이미지 너비 설정

  //height: auto; // 이미지의 비율을 유지하면서 높이 조절
  background-image: url(${SmallBubble});
  background: #f2f1ee no-repeat center center;
`;
const VersionIcon = styled.img.attrs({
    src: versionIcon,
})`
  width: 30px; // 부모 div의 너비에 맞게 이미지 너비 설정

  //height: auto; // 이미지의 비율을 유지하면서 높이 조절
  background-image: url(${SmallBubble});
  background: #f2f1ee no-repeat center center;
`;
const LogoutIcon = styled.img.attrs({
    src: logoutIcon,
})`
  width: 30px; // 부모 div의 너비에 맞게 이미지 너비 설정

  //height: auto; // 이미지의 비율을 유지하면서 높이 조절
  background-image: url(${SmallBubble});
  background: #f2f1ee no-repeat center center;
`;
const DeleteIcon = styled.img.attrs({
    src: deleteIcon,
})`
  width: 30px; // 부모 div의 너비에 맞게 이미지 너비 설정

  //height: auto; // 이미지의 비율을 유지하면서 높이 조절
  background-image: url(${SmallBubble});
  background: #f2f1ee no-repeat center center;
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
    width: 35-;
    //margin-left: 12px;
    // font-size: 16px;
  }
  //maring : 20px;
`;
const SoldierTagImage = styled.img.attrs({
    src: SoliderTag,
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 343px; // 부모 div의 너비에 맞게 이미지 너비 설정
  height: auto; // 이미지의 비율을 유지하면서 높이 조절
  background-image: url(${SmallBubble});
  background: #f2f1ee no-repeat center center;
  z-index: 1;
`;
const SadCharImg = styled.img.attrs({
    src: CharacterFace,
})`
  display: flex;
  //margin-top: 160px;
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(-50%, -50%);
  margin-bottom: 16px;
  align-items: center;
  width: 104px;
  //height: 200px;
  z-index: 3;
  @media (max-width: 768px) {
    width: 100px;
    margin-top: 40px;
    position: absolute;
    top: 25%;
    left: 25%;
    transform: translate(-50%, -50%);
  }
`;
const InfoDiv = styled.div`
  flex-direction: column;
  display: flex;
  
  
  text-align: start;
  margin-left: 250px;
  margin-bottom: 140px;
  @media (max-width: 768px) {
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
  font-weight: bold;
  //margin-left: 32px;
  top: -30px;
  margin-top: 220px;
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
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
  color: black;
  border-radius: 30px;
  font-size: 18px;
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


const TextsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  font-size: 15px;
  margin-bottom: 50px;
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


const ButtonStyle = styled.button`
  background-color: transparent;
  
  //background-color: grey;
  width: 320px;
  height: 75px;
  border: none;
  text-align: start;
  font-size: 20px;
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
  @media (max-width: 768px) {
    font-size: 18px;
    margin-left: 0;
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
    IconLayout,
    ButtonDesign,
    TitleText,
    Button,
    InfoDiv,

    SoldierTagContainer,
    UserNameText,
    SadCharImg,
    UserEnlistmentText,
    SoldierTagImage,
    TextsStyle,
    ErrorCenterModalWrapper,
    ErrorModalTextsWrapper1,
    ErrorModalTextsWrapper2,
    ModalButton,
    BackgroundContainer,

    CharImgContainer,
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
    VersionText
};
