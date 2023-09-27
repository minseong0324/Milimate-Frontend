import { useEffect, useRef, useState } from "react";
import { s } from "./style";
import axios, { AxiosError } from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  updateEnlistmentDate,
} from "../Redux/Slices/userInfoSlice";
import { RootState } from "../Redux/store";
import { useToken } from "../../contexts/TokenProvider/TokenProvider";
import SmallModal from "../../components/ErrorModal/ErrorModal"

interface PropsType {
  setModalOpen: (open: boolean) => void;
}

function UpdateEnlistmentModalBasic({ setModalOpen }: PropsType) {
  const userId = localStorage.getItem("userId");
  const { accessToken, refreshToken } = useToken();
  const dispatch = useDispatch();
  const [enlistmentYear, setEnlistmentYear] = useState("");
  const [enlistmentMonth, setEnlistmentMonth] = useState("");
  const [enlistmentDay, setEnlistmentDay] = useState("");
  const [isSmallModalOpen, setSmallModalOpen] = useState(false);
  const [modalSmallContent, setModalSmallContent] =
    useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장
  const [errorState, setErrorState]= useState(2);
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    if(errorState === 1) {
      setModalOpen(false);
    }
  }, [errorState]);
  useEffect(() => {
    setSmallModalOpen(true)
    setModalSmallContent(
      <s.SmallCenterModalWrapper>
        <s.SmallModalTextsWrapper1>입대일 수정하기</s.SmallModalTextsWrapper1>
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
      </s.SmallCenterModalWrapper>
    );

  });

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
      return alert("올바른 날짜를 입력해주세요!");
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
      setErrorState(1);
      return alert("입대일은 수료일보다 미래일 수 없습니다!");
    }

    const today = new Date();
    if (completeDate <= today) {
      setErrorState(1);
      return alert("수료일은 현재 날짜보다 미래여야 합니다!");
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
      setErrorState(1);
      return alert("입력한 날짜가 해당 달의 최대 일 수를 초과하였습니다!");
    }

    if (errorState != 1) {
      try {
        const response = await axios.put(
            `https://api.mili-mate.com/api/myPage/${userId}/editEnlistment`,
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
          alert("입대일을 수정했습니다.");
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
          alert('입대일을 변경하는 데에 실패했어요.')
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
    }

  }
  const userInfo = useSelector((state: RootState) => state.userInfo);
  return (
    <SmallModal isOpen={isSmallModalOpen} onClose={() => setSmallModalOpen(false)} >
      {modalSmallContent}
    </SmallModal>
  );
}

export default UpdateEnlistmentModalBasic;
