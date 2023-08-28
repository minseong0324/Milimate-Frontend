import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { s } from "./style";
import ErrorModal from "src/components/ErrorModal/ErrorModal";
import ModalBasic from "src/components/SimpleModal/SimpleModal";
import { useDispatch } from "react-redux";
import { setUserInfo } from "src/components/Redux/Slices/userInfoSlice";
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
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [numericmodalOpen, setNumericModalOpen] = useState(false);
  const handleMoreInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userId = await localStorage.getItem("userId");
    // 회원가입 API 요청
    try {
      const response = await axios.post(
        `http://localhost:8080/api/user/${userId}/moreInfo`,
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
        dispatch(
          setUserInfo({
            userName: userName,
            enlistmentYear: enlistmentYear,
            enlistmentMonth: enlistmentMonth,
            enlistmentday: enlistmentDay,
            completionYear: enlistmentYear,
            completionMonth: completionMonth,
            completionday: completionDay,
          })
        );
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
  const isNumeric = (value: string) => {
    return /^\d+$/.test(value);
  };
  const exceptionInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      userName == "" ||
      enlistmentYear == "" ||
      enlistmentMonth == "" ||
      enlistmentDay == ""
    ) {
      return setModalOpen(true); // 모달창 띄우기
    }
    if (
      !isNumeric(enlistmentYear) ||
      !isNumeric(enlistmentMonth) ||
      !isNumeric(enlistmentDay) ||
      !isNumeric(completionYear) ||
      !isNumeric(completionMonth) ||
      !isNumeric(completionDay)
    ) {
      return setNumericModalOpen(true);
    }
  };
  const handleErrorModalClose = () => {
    setErrorModalOpen(false);
  };

  return (
    <s.BackgroundContainer>
      <s.Wrapper>
        <s.Title>추가정보</s.Title>
        <s.MoreInfoForm onSubmit={exceptionInfo}>
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
          <s.RequiredInfoText>
            이름, 입대일은 필수정보 입니다.
          </s.RequiredInfoText>
        </s.MoreInfoForm>

        <ErrorModal
          isOpen={isErrorModalOpen}
          onClose={() => setErrorModalOpen(false)}
        >
          {modalErrorContent}
        </ErrorModal>
      </s.Wrapper>
      {modalOpen && (
        <ModalBasic
          setModalOpen={setModalOpen}
          contentText="필수정보를 모두 입력해주세요!"
          modalType={0}
        />
      )}
      {numericmodalOpen && (
        <ModalBasic
          setModalOpen={setNumericModalOpen}
          contentText="입대일과 수료일은 숫자로 입력해주세요!"
          modalType={1}
        />
      )}
    </s.BackgroundContainer>
  );
}

export default MoreInfo;
