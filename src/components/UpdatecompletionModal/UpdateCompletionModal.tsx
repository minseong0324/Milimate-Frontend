import { useEffect, useRef, useState } from "react";
import { s } from "./style";
import axios, { AxiosError } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateCompletionDate } from "../Redux/Slices/userInfoSlice";
import { RootState } from "../Redux/store";
import { useToken } from "../../contexts/TokenProvider/TokenProvider";
import SmallModal from "../../components/ErrorModal/ErrorModal"
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

interface PropsType {
  setModalOpen: (open: boolean) => void;
}

function UpdateCompletionModalBasic({ setModalOpen }: PropsType) {
  const userId = localStorage.getItem("userId");
  const { accessToken, refreshToken } = useToken();
  const dispatch = useDispatch();
  const [completionYear, setcompletionYear] = useState("");
  const [completionMonth, setcompletionMonth] = useState("");
  const [completionDay, setcompletionDay] = useState("");
  const [isSmallModalOpen, setSmallModalOpen] = useState(true);
  const [modalSmallContent, setModalSmallContent] =
    useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장
  const [errorState, setErrorState] = useState(2);
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    if(errorState === 1) {
      setModalOpen(false);
    }
  }, [errorState]);


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


    if (
        !userInfo.enlistmentYear ||
        !userInfo.enlistmentMonth ||
        !userInfo.enlistmentday
    ) {
      setErrorState(1);
      return alert("필수 정보를 입력해주세요!");
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
      setErrorState(1);
      return alert("날짜를 숫자로 입력해주세요!");
    }

    // Case 4: 입대일의 달과 수료일의 달은 1 ~ 12의 값들을 가지고 있어야 한다.
    if (
        parseInt(userInfo.enlistmentMonth) < 1 ||
        parseInt(userInfo.enlistmentMonth) > 12 ||
        (completionMonth &&
            (parseInt(completionMonth) < 1 || parseInt(completionMonth) > 12))
    ) {
      setErrorState(1);
      return alert("월은 1 ~ 12 사이의 값이어야 합니다!");
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
      console.log(completeDate);
      console.log(enlistDate);
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
    // alert(completeDate);
    // alert(enlistDate);
    if (completeDate <= today) {
      setErrorState(1);
      return alert("수료일은 현재 날짜보다 미래여야 합니다!");
    }
    if (completeDate <= enlistDate) {
      setErrorState(1);
      return alert("수료일은 입대일보다보다 미래여야 합니다!");
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
      setErrorState(1);
      return alert("입력한 날짜가 해당 달의 최대 일 수를 초과하였습니다!");
    }
    if (errorState != 1) {
      try {
        const response = await axios.put(
            `https://api.mili-mate.com/api/myPage/${userId}/editCompletion`,
            {
              completionYear: completionYear,
              completionMonth: completionMonth,
              completionDay: completionDay,
            },
            {
              headers: { //
                authorization: `${accessToken}`,
              },
            }
        );
          alert("수료일을 수정했습니다.");
          dispatch(
              updateCompletionDate({
                completionYear: completionYear,
                completionMonth: completionMonth,
                completionDay: completionDay,
              })
          );
          closeModal();
  
       
      } catch (error: unknown) {
        //에러 일 경우

        if (error instanceof AxiosError) {
          const status = error?.response?.status;
          const errorCode = error?.response?.data?.code;
          if (status === 404) {
            alert("추가정보를 입력하는 데에 실패했습니다.")
          } else if (status === 500) {
            alert("서버와의 연결이 원활하지 않습니다.")
          }
          else if (status === 400 && errorCode === "OVER 60") {
            alert('입대일과 수료일의 차이가 60일 이하이어야 합니다.');
          }
          else {
            alert("추가정보를 입력하는 데에 실패했습니다.")
          }
        }
      }
    }

  }
  const modalRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {  // event 타입을 MouseEvent로 지정
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setModalOpen(false);
      }
    }

    // any 대신 구체적인 타입을 사용
    document.addEventListener("mousedown", handleClickOutside as EventListener);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside as EventListener);
    };
  }, [modalRef, setModalOpen]);

  const userInfo = useSelector((state: RootState) => state.userInfo);
  return (
    <SmallModal isOpen={isSmallModalOpen} onClose={() => setSmallModalOpen(false)} >
       <s.SmallCenterModalWrapper ref = {modalRef}>
        <s.SmallModalTextsWrapper1>수료일 수정하기</s.SmallModalTextsWrapper1>
        <s.InputContainer>
          <s.MoreInfoInputYear
            type="text"
            value={completionYear}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setcompletionYear(e.target.value.replace(/\s/g, ''))}
          />
          <s.TextsStyle2>년</s.TextsStyle2>
          <s.MoreInfoInputYMonthDay
            type="text"
            value={completionMonth}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setcompletionMonth(e.target.value.replace(/\s/g, ''))}
          />
          <s.TextsStyle2>월</s.TextsStyle2>
          <s.MoreInfoInputYMonthDay
            type="text"
            value={completionDay}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setcompletionDay(e.target.value.replace(/\s/g, ''))}
          />
          <s.TextsStyle2>일</s.TextsStyle2>
        </s.InputContainer>
        <s.BtnDiv>
          <s.OkBtnStyle onClick={UpdateCompletionBtn}>확인</s.OkBtnStyle>
          <s.CancelBtnStyle onClick={closeModal}>취소</s.CancelBtnStyle>
        </s.BtnDiv>
      </s.SmallCenterModalWrapper>
    </SmallModal>
  );
}

export default UpdateCompletionModalBasic;
