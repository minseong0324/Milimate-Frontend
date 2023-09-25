import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { s } from "./style";
import ErrorModal from "src/components/ErrorModal/ErrorModal";
import ModalBasic from "src/components/SimpleModal/SimpleModal";
import { useDispatch } from "react-redux";
import { setUserInfo } from "src/components/Redux/Slices/userInfoSlice";
import { useToken } from "../../contexts/TokenProvider/TokenProvider";
function MoreInfo() {
  const userId = localStorage.getItem("userId");
  const { accessToken, refreshToken } = useToken();
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

  const [modalMessage, setModalMessage] = useState("");

  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };
  let finalCompletionYear = completionYear;
  let finalCompletionMonth = completionMonth;
  let finalCompletionDay = completionDay;
  // 각 달의 최대 일 수를 반환하는 함수
  const getMaxDayOfMonth = (month: number, year: number) => {
    switch (month) {
      case 2:
        return isLeapYear(year) ? 29 : 28;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      default:
        return 31;
    }
  };
  const handleMoreInfo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Case 3: 입대일과 이름은 필수값이다.
    if (!userName || !enlistmentYear || !enlistmentMonth || !enlistmentDay) {
      setModalMessage("필수 정보를 입력해주세요!");
      return setModalOpen(true);
    }

    // Case 2: 입대일과 수료일을 입력하는 모든 값들은 정수여야 한다.
    if (
      !isNumeric(enlistmentYear) ||
      !isNumeric(enlistmentMonth) ||
      !isNumeric(enlistmentDay) ||
      (completionYear && !isNumeric(completionYear)) ||
      (completionMonth && !isNumeric(completionMonth)) ||
      (completionDay && !isNumeric(completionDay))
    ) {
      setModalMessage("날짜를 숫자로 입력해주세요!");
      return setModalOpen(true);
    }

    // Case 4: 입대일의 달과 수료일의 달은 1 ~ 12의 값들을 가지고 있어야 한다.
    if (
      parseInt(enlistmentMonth) < 1 ||
      parseInt(enlistmentMonth) > 12 ||
      (completionMonth &&
        (parseInt(completionMonth) < 1 || parseInt(completionMonth) > 12))
    ) {
      setModalMessage("월은 1 ~ 12 사이의 값이어야 합니다!");
      return setModalOpen(true);
    }

    // Case 1: 입대일은 수료일보다 미래일 수 없다.
    const enlistDate = new Date(
      parseInt(enlistmentYear),
      parseInt(enlistmentMonth) - 1,
      parseInt(enlistmentDay)
    );
    const completeDate = new Date(
      parseInt(completionYear),
      parseInt(completionMonth) - 1,
      parseInt(completionDay)
    );

    if (completeDate < enlistDate) {
      setModalMessage("입대일은 수료일보다 미래일 수 없습니다!");
      return setModalOpen(true);
    }

    // Case 5: 수료일은 필수값이 아니기 때문에 입력하는 칸 3개 중에서 하나라도 잘못하면 서버한테 completionYear, completionMonth, completionDay를 전부 "0"으로 전송한다.
    if (
      !completionYear ||
      !completionMonth ||
      !completionDay ||
      !isNumeric(completionYear) ||
      !isNumeric(completionMonth) ||
      (completionDay && !isNumeric(completionDay)) || // completionDay가 있을 때만 숫자인지 확인
      parseInt(completionMonth) < 1 ||
      parseInt(completionMonth) > 12 ||
      (completionDay &&
        parseInt(completionDay) >
          getMaxDayOfMonth(parseInt(completionMonth), parseInt(completionYear))) // completionDay가 있을 때만 해당 월의 최대 일 수를 초과하는지 확인
    ) {
      setcompletionYear("0");
      setcompletionMonth("0");
      setcompletionDay("0");
      finalCompletionYear = "0";
      finalCompletionMonth = "0";
      finalCompletionDay = "0";
    }

    const today = new Date();
    console.log("수료일", completeDate);
    console.log("오늘 날짜", today);
    if (completeDate <= today) {
      setModalMessage("수료일은 현재 날짜보다 미래여야 합니다!");
      return setModalOpen(true);
    }

    const enlistmentDayInt = parseInt(enlistmentDay);
    const completionDayInt = parseInt(completionDay);

    if (
      enlistmentDayInt >
        getMaxDayOfMonth(parseInt(enlistmentMonth), parseInt(enlistmentYear)) ||
      completionDayInt >
        getMaxDayOfMonth(parseInt(completionMonth), parseInt(completionYear))
    ) {
      setModalMessage("입력한 날짜가 해당 달의 최대 일 수를 초과하였습니다!");
      return setModalOpen(true);
    }
    // 회원가입 API 요청
    try {
      console.log("유저 아이디", userId);
      console.log("토큰!! ", accessToken);
      console.log(completionYear);
      console.log(completionMonth);
      console.log(completionDay);
      const response = await axios.post(
        `https://api.mili-mate.com/api/user/${userId}/moreInfo`,
        {
          userName,
          enlistmentYear,
          enlistmentMonth,
          enlistmentDay,
          completionYear: finalCompletionYear,
          completionMonth: finalCompletionMonth,
          completionDay: finalCompletionDay,
        },
        {
          headers: {
            authorization: `${accessToken}`,
          },
        }
      );

      // 추가 정보 입력한 후 회원가입 성공, status 200일 때
      if (response.status === 200) {
        alert("회원가입에 성공하였습니다!");
        console.log("회원가입 응답 데이터", response);
        dispatch(
          setUserInfo({
            userName: userName,
            enlistmentYear: enlistmentYear,
            enlistmentMonth: enlistmentMonth,
            enlistmentday: enlistmentDay,
            completionYear: completionYear,
            completionMonth: completionMonth,
            completionday: completionDay,
          })
        );
        navigate("/showcharacter");
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
  const exceptionInfo = (e: React.FormEvent<HTMLFormElement>) => {};
  const handleErrorModalClose = () => {
    setErrorModalOpen(false);
  };

  const handleNavigate = () => {
    navigate('/signup');
  }
  return (
    <>
    <s.BackButton onClick = {handleNavigate}/>
    
    <s.BackgroundContainer>
    
      <s.Container>
        <s.Text>
          상세정보 입력
        </s.Text>
      </s.Container>
      <s.Wrapper>
        <s.MoreInfoForm>
            <s.TextsStyle>이름</s.TextsStyle>
            <s.MoreInfoInput
              type="text"
              placeholder="이름을 입력해주세요"
              value={userName}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setUserName(e.target.value)}
            />
            <s.TextsStyle>입대일</s.TextsStyle>
            <s.InputContainer>
            <s.MoreInfoInputYear
              type="text"
              placeholder="YYYY"
              value={enlistmentYear}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setEnlistmentYear(e.target.value)}
            />
            <s.TextsStyle2>년</s.TextsStyle2>
            <s.MoreInfoInputYMonthDay
              type="text"
              placeholder="MM"
              value={enlistmentMonth}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setEnlistmentMonth(e.target.value)}
            />
            <s.TextsStyle2>월</s.TextsStyle2>
            <s.MoreInfoInputYMonthDay
              type="text"
              placeholder="DD"
              value={enlistmentDay}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setEnlistmentDay(e.target.value)}
            />
            <s.TextsStyle2>일</s.TextsStyle2>
          </s.InputContainer>
            <s.TextsStyle>수료일</s.TextsStyle>
            <s.InputContainer>
            <s.MoreInfoInputYear
              type="text"
              placeholder="YYYY"
              value={completionYear}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setcompletionYear(e.target.value)}
            />
            <s.TextsStyle2>년</s.TextsStyle2>
            <s.MoreInfoInputYMonthDay
              type="text"
              placeholder="MM"
              value={completionMonth}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setcompletionMonth(e.target.value)}
            />
            <s.TextsStyle2>월</s.TextsStyle2>
            <s.MoreInfoInputYMonthDay
              type="text"
              placeholder="DD"
              value={completionDay}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setcompletionDay(e.target.value)}
            />
            <s.TextsStyle2>일</s.TextsStyle2>
          </s.InputContainer>
          <s.ButtonWrapper>
            <s.Button onClick={handleMoreInfo} type="submit">
            가입하기
          </s.Button>
          </s.ButtonWrapper>
          <s.RequiredInfoText>
            이름, 입대일은 필수정보입니다.
          </s.RequiredInfoText>
          <s.RequiredInfoText>
            수료일은 선택정보입니다. 마이페이지에서 수정 가능합니다.
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
          contentText={modalMessage}
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
    </>
  );
}

export default MoreInfo;
