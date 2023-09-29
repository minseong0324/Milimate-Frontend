import styled from 'styled-components';
import MainLogo from '../../assets/Logo/MainLogo.svg'


const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -10px;
  margin-top:-20px;
`;

const SubSubTitle = styled.span`
    margin-top: 5px;
    margin-left: 5px;
    font-weight: normal; // 명시적으로 굵기 설정
    font-size: 15px;
    font-weight: bolder;
    padding-right: 0px;
    padding-left: 0px;
    margin-bottom: 3px;
`;

const Text = styled.span`
    margin-top: 0px;
    margin-left: 5px;
    font-size: 13px;
    padding-right: 0px;
    padding-left: 0px;
    margin-left: 7px;
    margin-top: -4px;
    margin-bottom: 2px;
`;

const Break = styled.br``;

const Title = styled.img.attrs({
  src: MainLogo
})`
width : 200px;
height: 100px;
font-size: 30px;
margin-bottom: 10px;
text-align: center;
`;

 const SubTitle = styled.span`
  font-size: 16px;
  text-align: center;
`;


 const ModalTextsWrapper = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
    padding: 20px;
    margin-top: -10px;
`;



const HorizontalContainer = styled.div`
  display: flex;
  align-items: center;  // 아이템들을 세로 중앙 정렬
  justify-content: center;
`;

const HorizontalContainer2 = styled.div`
  display: flex;
  align-items: center;  // 아이템들을 세로 중앙 정렬
  margin-bottom: 5px;
`;

const HorizontalContainer3 = styled.div`
  display: flex;
  margin-left: 10px;
  margin-bottom: 5px;
`;

{/* 
const CollectionImg = styled.img.attrs({
    src: Collection 
  })`
      z-index: 2;
      width:240px;
      height:100px;
      //margin-left: 10px;
      margin-bottom: 2px;
      margin-top: 5px;
     align-items:center;
`;

const InstagramImg = styled.img.attrs({
    src: InstagramId
  })`
      z-index: 2;
      width:104px;
      height:20px;
      margin-left: 5px;
      margin-top: 2px;
     align-items:center;
`;
*/}
const InstagramButton = styled.button`
  background: url(${MainLogo}) no-repeat center;
  background-size: 104px 20px;
  z-index: 2;
  width:104px;
  height:20px;
  margin-left: 5px;
  margin-top: 2px;
  align-items:center;
  border: transparent;
  border-radius: 10px;
  background-color: #FFE5CC;
  &:active {
    background-color: rgba(128, 128, 128, 0.5);  // 반투명한 회색
    border-radius: 10px;
  }
`;

export const s = {
    TitleWrapper,
    Title,
    SubTitle,
    SubSubTitle,
    Text,
    Break,
    ModalTextsWrapper,
    //GinkgoLeafImage,
    //MapleLeafImage,
    HorizontalContainer,
    //GinkgoLeafImageSmall,
    //MapleLeafImageSmall,
    HorizontalContainer2,
    HorizontalContainer3,
    //CollectionImg,
    //InstagramImg,
    InstagramButton,
    //MapleLeafImageTransform
}