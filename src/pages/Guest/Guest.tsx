import React, { useState, useEffect } from "react";
import { s } from "./style";
import { useNavigate } from "react-router-dom";
import CharacterImage from '../../assets/charater/character.svg'
import { useLocation } from 'react-router-dom';
import axios, {AxiosError} from 'axios';

type UserNameProps = {
    userName?: string;
  };

function Guest() {
    const location = useLocation();
    const { userName = "김민성" } = (location.state as UserNameProps) || {};
    const navigate = useNavigate(); // useNavigate hook 사용
    const [isErrorModalOpen, setErrorModalOpen] = useState(false);
    const [modalErrorContent, setModalErrorContent] =
    useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.

  // 서비스 설명 함수
  const handleGoSend = () => {
    navigate('/send');
  };
  
  return (
    <s.BackgroundContainer>
        <s.Wrapper>
        <s.QuotationStyle>
          "
        </s.QuotationStyle>
        <s.TextsStyle>
          해당 이미지는 답변 페이지 공유 시
        </s.TextsStyle>
        <s.CharImgContainer>
            <s.CharImg 
            src={CharacterImage} 
            alt="Character Description" 
            />
            <s.CharImgName>{userName}</s.CharImgName>
        </s.CharImgContainer>
        
        <s.Button onClick={handleGoSend}>
            답변 쓰러가기
        </s.Button>
      {/* <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
          {modalErrorContent}
      </ErrorModal> */}
      </s.Wrapper>
    </s.BackgroundContainer>
  );
}

export default Guest;

/*
function setIdToken(credential: string) {
  throw new Error('Function not implemented.');
}
*/
