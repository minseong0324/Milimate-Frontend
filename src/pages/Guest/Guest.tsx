import React, { useState, useEffect } from "react";
import { s } from "./style";
import { useParams, useNavigate } from "react-router-dom";
import CharacterImage from "../../assets/charater/MainCharacter.svg";
import { useLocation } from "react-router-dom";
import axios, { AxiosError } from "axios";

type UserNameProps = {
  userName?: string;
};

function Guest() {
  const location = useLocation();
  const [userName, setUserName] = useState<string>("훈련병");
  const [todayQuestion, setTodayQuestion] =
    useState<string>("질문을 불러오지 못했어요.");
  const navigate = useNavigate();
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorContent, setModalErrorContent] =
    useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장
  const { userId } = useParams<{ userId: string }>(); // URL에서 userId 값을 추출
  const getUserInfoFromServer = async (userId: string) => {
    try {
      // 백엔드 서버에 GET 요청을 보냅니다.
      const response = await axios.get(
        `https://api.mili-mate.com/api/guest/${userId}/reply`
      );

      // 응답에서 사용자 정보를 추출합니다.
      const userInfo = response.data;

      return {
        todayQuestion: userInfo.todayQuestion, // 오늘의 질문
        userName: userInfo.userName, // 사용자 이름을 추가합니다.
      };
    } catch (error: unknown) {
      //에러 일 경우
      if (error instanceof AxiosError) {
        const status = error?.response?.status;
        alert("유저의 정보를 불러오지 못했어요.")
        setModalErrorContent(
          <s.ErrorCenterModalWrapper>
            <s.ErrorModalTextsWrapper2>유저의 정보를</s.ErrorModalTextsWrapper2>
            <s.ErrorModalTextsWrapper2>
              불러오지 못했어요.
            </s.ErrorModalTextsWrapper2>
            <s.ModalButton onClick={handleUnLoggedInModalClose}>
              새로고침하기
            </s.ModalButton>
          </s.ErrorCenterModalWrapper>
        );
        if (status === 404) {
          // 리소스를 찾을 수 없음
        } else if (status === 500) {
          // 서버 내부 오류
        } else {
          // 기타 상태 코드 처리
        }
      }
      setErrorModalOpen(true);
      return null;
    }
  };

  const handleUnLoggedInModalClose = () => {
    setErrorModalOpen(false);
    navigate(`/guest/${userId}`);
  };

  // 컴포넌트가 마운트될 때 사용자 정보를 가져온다
  useEffect(() => {
    const fetchUserInfo = async () => {
      if (userId) {
        const userInfo = await getUserInfoFromServer(userId);
        if (userInfo) {
          // userInfo가 유효한 경우에만 상태 업데이트
          setUserName(userInfo.userName || "훈련병"); // 사용자 이름을 상태 변수에 저장
          setTodayQuestion(
            userInfo.todayQuestion || "질문을 불러오지 못했어요."
          ); // 오늘의 질문을 상태 변수에 저장
        }
      }
    };
    fetchUserInfo();
  }, [userId]);

  // 서비스 설명 함수
  const handleGoSend = () => {
    navigate(`/send/${userId}`);
  };

  return (
    <s.BackgroundContainer>
      <s.Wrapper>
        <s.QuotationStyle>"</s.QuotationStyle>
        <s.TextsStyle>{todayQuestion}</s.TextsStyle>
        <s.CharImgContainer>
          <s.CharImg src={CharacterImage} alt="Character Description" />
          <s.CharImgName>{userName}</s.CharImgName>
        </s.CharImgContainer>

        <s.Button onClick={handleGoSend}>답변 쓰러가기</s.Button>
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
