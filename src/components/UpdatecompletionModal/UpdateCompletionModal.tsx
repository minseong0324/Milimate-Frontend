import { useEffect, useRef, useState } from "react";
import { s } from "./style";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCompletionDate } from "../Redux/Slices/userInfoSlice";
import { RootState } from "../Redux/store";
import { useToken } from "../../contexts/TokenProvider/TokenProvider";
import ModalBasic from "../SimpleModal/SimpleModal";

interface PropsType {
  setModalOpen: (open: boolean) => void;
}

interface ResponseData {
  completionYear: string;
  completionMonth: string;
  completionDay: string;
}
function UpdateCompletionModalBasic({ setModalOpen }: PropsType) {
  const [exModalOpen, setExModalOpen] = useState(false);
  const { accessToken, refreshToken } = useToken();
  const dispatch = useDispatch();
  const [modalMessage, setModalMessage] = useState("");

  const modalRef = useRef<HTMLDivElement | null>(null);
  const [completionYear, setcompletionYear] = useState("");
  const [completionMonth, setcompletionMonth] = useState("");
  const [completionDay, setcompletionDay] = useState("");
  // 모달 끄기
  const [responseData, setResponseData] = useState<ResponseData>();
  const closeModal = () => {
    setModalOpen(false);
  };

  // 모달 내부 클릭 시 이벤트 버블링 중지
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };
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
  const UpdateCompletionBtn = async () => {
    let finalCompletionYear = completionYear;
    let finalCompletionMonth = completionMonth;
    let finalCompletionDay = completionDay;
    const isNumeric = (value: string) => {
      return /^\d+$/.test(value);
    };
    const userId = await localStorage.getItem("userId");

    if (
      !userInfo.enlistmentYear ||
      !userInfo.enlistmentMonth ||
      !userInfo.enlistmentday
    ) {
      setModalMessage("필수 정보를 입력해주세요!");
      return setExModalOpen(true);
    }

    // Case 2: 입대일과 수료일을 입력하는 모든 값들은 정수여야 한다.
    if (
      !isNumeric(userInfo.enlistmentYear) ||
      !isNumeric(userInfo.enlistmentMonth) ||
      !isNumeric(userInfo.enlistmentday) ||
      (completionYear && !isNumeric(completionYear)) ||
      (completionMonth && !isNumeric(completionMonth)) ||
      (completionDay && !isNumeric(completionDay))
    ) {
      setModalMessage("날짜를 숫자로 입력해주세요!");
      return setExModalOpen(true);
    }

    // Case 4: 입대일의 달과 수료일의 달은 1 ~ 12의 값들을 가지고 있어야 한다.
    if (
      parseInt(userInfo.enlistmentMonth) < 1 ||
      parseInt(userInfo.enlistmentMonth) > 12 ||
      (completionMonth &&
        (parseInt(completionMonth) < 1 || parseInt(completionMonth) > 12))
    ) {
      setModalMessage("월은 1 ~ 12 사이의 값이어야 합니다!");
      return setExModalOpen(true);
    }

    // Case 1: 입대일은 수료일보다 미래일 수 없다.
    const enlistDate = new Date(
      parseInt(userInfo.enlistmentYear),
      parseInt(userInfo.enlistmentMonth) - 1,
      parseInt(userInfo.enlistmentday)
    );
    const completeDate = new Date(
      parseInt(completionYear),
      parseInt(completionMonth) - 1,
      parseInt(completionDay)
    );

    if (completeDate < enlistDate) {
      setModalMessage("입대일은 수료일보다 미래일 수 없습니다!");
      return setExModalOpen(true);
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
      return setExModalOpen(true);
    }

    const enlistmentDayInt = parseInt(userInfo.enlistmentday);
    const completionDayInt = parseInt(completionDay);

    if (
      enlistmentDayInt >
        getMaxDayOfMonth(
          parseInt(userInfo.enlistmentMonth),
          parseInt(userInfo.enlistmentYear)
        ) ||
      completionDayInt >
        getMaxDayOfMonth(parseInt(completionMonth), parseInt(completionYear))
    ) {
      setModalMessage("입력한 날짜가 해당 달의 최대 일 수를 초과하였습니다!");
      return setExModalOpen(true);
    }

    try {
      const response = await axios.put(
        `https://api.mili-mate.com/api/myPage/${userId}/editCompletion`,
        {
          completionYear: completionYear,
          completionMonth: completionMonth,
          completionDay: completionDay,
        },
        {
          headers: {
            authorization: `${accessToken}`,
          },
        }
      );
      if (response.status == 200) {
        alert("수료일 수정 성공");
        dispatch(
          updateCompletionDate({
            completionYear: completionYear,
            completionMonth: completionMonth,
            completionDay: completionDay,
          })
        );
        closeModal();
      }
    } catch (error: unknown) {
      //에러 일 경우
      if (error instanceof AxiosError) {
        const status = error?.response?.status;
        console.error("Failed to fetch user info:", error);

        if (status === 404) {
          // 리소스를 찾을 수 없음
        } else if (status === 500) {
          // 서버 내부 오류
        } else {
          // 기타 상태 코드 처리
        }
      }

      return null;
    }
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const userId = localStorage.getItem("userId");
  //     const response = await axios.get(
  //       `http://localhost:8080/myPage/${userId}/editCompletion`
  //     );
  //     if (response.status == 200) {
  //       setResponseData(response.data);
  //     }
  //   };
  // }, []);
  const userInfo = useSelector((state: RootState) => state.userInfo);
  return (
    <s.Wrapper onClick={closeModal}>
      <s.ModalBox ref={modalRef} onClick={stopPropagation}>
        <s.TitleText>수료일</s.TitleText>
        <s.TitleText>
          {userInfo.completionYear}년 {userInfo.completionMonth}월{" "}
          {userInfo.completionday}일
        </s.TitleText>
        <s.InputContainer>
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
        <s.BtnDiv>
          <s.OkBtnStyle onClick={UpdateCompletionBtn}>확인</s.OkBtnStyle>
          <s.CancelBtnStyle onClick={closeModal}>취소</s.CancelBtnStyle>
        </s.BtnDiv>
      </s.ModalBox>
      {exModalOpen && (
        <ModalBasic
          setModalOpen={setExModalOpen}
          contentText={modalMessage}
          modalType={0}
        />
      )}
    </s.Wrapper>
  );
}

export default UpdateCompletionModalBasic;
function setModalMessage(arg0: string) {
  throw new Error("Function not implemented.");
}
