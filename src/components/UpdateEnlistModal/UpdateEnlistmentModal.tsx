import { useEffect, useRef, useState } from "react";
import { s } from "./style";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useToken } from "src/contexts/TokenProvider/TokenProvider";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCompletionDate,
  updateEnlistmentDate,
} from "../Redux/Slices/userInfoSlice";
import { RootState } from "../Redux/store";
import ModalBasic from "../SimpleModal/SimpleModal";
interface PropsType {
  setModalOpen: (open: boolean) => void;
}

interface ResponseData {
  completionYear: string;
  completionMonth: string;
  completionDay: string;
}
function UpdateEnlistmentModalBasic({ setModalOpen }: PropsType) {
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [enlistmentYear, setEnlistmentYear] = useState("");
  const [enlistmentMonth, setEnlistmentMonth] = useState("");
  const [enlistmentDay, setEnlistmentDay] = useState("");
  const [exModalOpen, setExModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
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
  const UpdateEnlistmentBtn = async () => {
    const isNumeric = (value: string) => {
      return /^\d+$/.test(value);
    };

    const isValidDate = (year: string, month: string, day: string) => {
      if (!isNumeric(year) || !isNumeric(month) || !isNumeric(day)) {
        return false;
      }
      const monthInt = parseInt(month);
      const yearInt = parseInt(year);
      if (monthInt < 1 || monthInt > 12) {
        return false;
      }
      const dayInt = parseInt(day);
      if (dayInt < 1 || dayInt > getMaxDayOfMonth(monthInt, yearInt)) {
        return false;
      }
      return true;
    };

    if (!isValidDate(enlistmentYear, enlistmentMonth, enlistmentDay)) {
      setModalMessage("올바른 날짜를 입력해주세요!");
      return setExModalOpen(true);
    }

    const enlistDate = new Date(
      parseInt(enlistmentYear),
      parseInt(enlistmentMonth) - 1,
      parseInt(enlistmentDay)
    );
    const completeDate = new Date(
      parseInt(userInfo.completionYear),
      parseInt(userInfo.completionMonth) - 1,
      parseInt(userInfo.completionday)
    );

    if (completeDate < enlistDate) {
      setModalMessage("입대일은 수료일보다 미래일 수 없습니다!");
      return setExModalOpen(true);
    }

    const today = new Date();
    if (completeDate <= today) {
      setModalMessage("수료일은 현재 날짜보다 미래여야 합니다!");
      return setExModalOpen(true);
    }

    const enlistmentDayInt = parseInt(userInfo.completionday);
    const completionDayInt = parseInt(enlistmentDay);

    if (
      enlistmentDayInt >
        getMaxDayOfMonth(parseInt(enlistmentMonth), parseInt(enlistmentYear)) ||
      completionDayInt >
        getMaxDayOfMonth(
          parseInt(userInfo.completionMonth),
          parseInt(userInfo.completionYear)
        )
    ) {
      setModalMessage("입력한 날짜가 해당 달의 최대 일 수를 초과하였습니다!");
      return setExModalOpen(true);
    }

    const accessToken = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");
    try {
      const response = await axios.put(
        `https://api.gomuring.com:8080/api/myPage/${userId}/editCompletion`,
        {
          enlistmentYear: enlistmentYear,
          enlistmentMonth: enlistmentMonth,
          enlistmentDay: enlistmentDay,
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
          updateEnlistmentDate({
            enlistmentYear: enlistmentYear,
            enlistmentMonth: enlistmentMonth,
            enlistmentDay: enlistmentDay,
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
  //       `http://gomuring.com:8080/myPage/${userId}/editCompletion`
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
        <s.TitleText>입대일</s.TitleText>
        <s.TitleText>
          {userInfo.enlistmentYear}년 {userInfo.enlistmentMonth}월{" "}
          {userInfo.enlistmentday}일
        </s.TitleText>
        <s.InputContainer>
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
        <s.BtnDiv>
          <s.OkBtnStyle onClick={UpdateEnlistmentBtn}>확인</s.OkBtnStyle>
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

export default UpdateEnlistmentModalBasic;
