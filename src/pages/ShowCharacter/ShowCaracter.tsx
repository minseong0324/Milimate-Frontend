import React, { useState, useEffect } from "react";
import { s } from "./style";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RootState } from "src/components/Redux/store";
import { useSelector } from "react-redux";

type UserNameProps = {
  userName?: string;
};

function ShowCaracter() {
  const userId = localStorage.getItem("userId");
  const userInfo = useSelector((state: RootState) => state.userInfo);
  const location = useLocation();
  const { userName = "김민성" } = (location.state as UserNameProps) || {};
  const navigate = useNavigate(); // useNavigate hook 사용
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorContent, setModalErrorContent] =
    useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.
    

  // 서비스 설명 함수
  const handleGoHome = async () => {
    navigate(`/home/${userId}`, { replace: true });
  };

  return (

    <s.BackgroundContainer>
      <s.Container>
        <s.Text>
          <s.Twinkle />
          캐릭터가 생성되었습니다!
        </s.Text>
      </s.Container>
      <s.Wrapper>

      <s.Character alt="Character Description" />
      <s.TagContainer>
        <s.SolierTag />
        <s.TextsStyle>이름  </s.TextsStyle>
        <s.TextsStyle2>{userInfo.userName}</s.TextsStyle2>
        <s.TextsStyle_1>입대일</s.TextsStyle_1>
        <s.TextsStyle2_1>
          {`${userInfo.enlistmentYear}년 ${userInfo.enlistmentMonth}월 ${userInfo.enlistmentday}일`}
        </s.TextsStyle2_1>
        <s.TextsStyle_2>수료일</s.TextsStyle_2>
        <s.TextsStyle2_2>
          {`${userInfo.completionYear}년 ${userInfo.completionMonth}월 ${userInfo.completionday}일`}
        </s.TextsStyle2_2>
      </s.TagContainer>
      <s.ButtonWrapper>
        <s.Button onClick={handleGoHome}>다음</s.Button>
      </s.ButtonWrapper>

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