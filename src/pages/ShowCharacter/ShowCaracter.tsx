import React, { useState, useEffect } from "react";
import { s } from "./style";
import { useNavigate } from "react-router-dom";
import CharacterImage from "../../assets/charater/character.svg";
import { useLocation } from "react-router-dom";
import { RootState } from "src/components/Redux/store";
import { useSelector } from "react-redux";

type UserNameProps = {
  userName?: string;
};

function ShowCaracter() {
  const userInfo = useSelector((state: RootState) => state.userInfo);
  const location = useLocation();
  const { userName = "김민성" } = (location.state as UserNameProps) || {};
  const navigate = useNavigate(); // useNavigate hook 사용
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorContent, setModalErrorContent] =
    useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.

  // 서비스 설명 함수
  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <s.BackgroundContainer>
      <s.Wrapper>
        <s.CharImgContainer>
          <s.CharImg src={CharacterImage} alt="Character Description" />
          <s.CharImgName>{userInfo.userName}</s.CharImgName>
        </s.CharImgContainer>
        <s.TextsStyle>해당 이미지는 답변 페이지 공유 시</s.TextsStyle>
        <s.TextsStyle>친구들에게 보여지는 이미지입니다.</s.TextsStyle>
        <s.TextsStyle2>* 마이페이지에서 수정 가능</s.TextsStyle2>
        <s.Button onClick={handleGoHome}>내 홈으로 가기</s.Button>
        {/* <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
          {modalErrorContent}
      </ErrorModal> */}
      </s.Wrapper>
    </s.BackgroundContainer>
  );
}

export default ShowCaracter;

/*
function setIdToken(credential: string) {
  throw new Error('Function not implemented.');
}
*/
