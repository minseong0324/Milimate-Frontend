import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { s } from "./style";
import ErrorModal from "src/components/ErrorModal/ErrorModal";

function MoreInfo() {
  const [userName, setUserName] = useState("");
  const [enlistmentYear, setEnlistmentYear] = useState("");
  const [enlistmentMonth, setEnlistmentMonth] = useState("");
  const [enlistmentDay, setEnlistmentDay] = useState("");
  const [completionYear, setcompletionYear] = useState("");
  const [completionMonth, setcompletionMonth] = useState("");
  const [completionDay, setcompletionDay] = useState("");
  const navigate = useNavigate(); // useNavigate hook 사용
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorContent, setModalErrorContent] =
    useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.

  // 회원가입 처리 함수
  const handleMoreInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 회원가입 API 요청
    try {
      const response = await axios.post(
        `http://localhost:8080/user/{userId}/moreInfo`,
        {
          userName,
          enlistmentYear,
          enlistmentMonth,
          enlistmentDay,
          completionYear,
          completionMonth,
          completionDay,
        }
      );

      // 추가 정보 입력한 후 회원가입 성공, status 200일 때
      if (response.status === 200) {
        alert("회원가입에 성공하였습니다!");
        navigate("/showcharacter", { state: { userName } });
      }
    } catch (error: unknown) {
      //에러 일 경우
      if (error instanceof AxiosError) {
        const status = error?.response?.status;
        console.error("Failed to fetch user info:", error);
        setModalErrorContent(
          <s.ErrorCenterModalWrapper>
            <s.ErrorModalTextsWrapper1>
              정보 저장에 실패했습니다!
            </s.ErrorModalTextsWrapper1>
            <s.ModalButton onClick={handleErrorModalClose}>닫기</s.ModalButton>
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

  const handleErrorModalClose = () => {
    setErrorModalOpen(false);
  };

  return (
    <s.BackgroundContainer>
      <s.Wrapper>
        <s.Title>추가정보</s.Title>
        <s.MoreInfoForm onSubmit={handleMoreInfo}>
          <s.InputContainer>
            <s.TextsStyle>이름</s.TextsStyle>
            <s.MoreInfoInput
              type="text"
              value={userName}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setUserName(e.target.value)}
            />
          </s.InputContainer>
          <s.InputContainer>
            <s.TextsStyle>입대일</s.TextsStyle>
            <s.MoreInfoInputYear
              type="text"
              value={enlistmentYear}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setEnlistmentYear(e.target.value)}
            />
            <s.TextsStyle2>년</s.TextsStyle2>
            <s.MoreInfoInputYMonthDay
              type="text"
              value={enlistmentMonth}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setEnlistmentMonth(e.target.value)}
            />
            <s.TextsStyle2>월</s.TextsStyle2>
            <s.MoreInfoInputYMonthDay
              type="text"
              value={enlistmentDay}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setEnlistmentDay(e.target.value)}
            />
            <s.TextsStyle2>일</s.TextsStyle2>
          </s.InputContainer>
          <s.InputContainer>
            <s.TextsStyle>수료일</s.TextsStyle>
            <s.MoreInfoInputYear
              type="text"
              value={completionYear}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setcompletionYear(e.target.value)}
            />
            <s.TextsStyle2>년</s.TextsStyle2>
            <s.MoreInfoInputYMonthDay
              type="text"
              value={completionMonth}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setcompletionMonth(e.target.value)}
            />
            <s.TextsStyle2>월</s.TextsStyle2>
            <s.MoreInfoInputYMonthDay
              type="text"
              value={completionDay}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setcompletionDay(e.target.value)}
            />
            <s.TextsStyle2>일</s.TextsStyle2>
          </s.InputContainer>
          <s.Button type="submit">가입하기</s.Button>{" "}
          {/* onclick 이벤트로 회원가입하기를 누르면 로그인 페이지로 */}
          {/* <GoogleLoginButton buttonImage={GoogleSignUpImage}/> */}
        </s.MoreInfoForm>

        <ErrorModal
          isOpen={isErrorModalOpen}
          onClose={() => setErrorModalOpen(false)}
        >
          {modalErrorContent}
        </ErrorModal>
      </s.Wrapper>
    </s.BackgroundContainer>
  );
}

export default MoreInfo;
