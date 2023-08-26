import { useEffect, useRef, useState } from "react";
import { s } from "./style";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface PropsType {
  setModalOpen: (open: boolean) => void;
}

interface ResponseData {
  completionYear: string;
  completionMonth: string;
  completionDay: string;
}
function UpdateCompletionModalBasic({ setModalOpen }: PropsType) {
  const navigate = useNavigate();
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
  const UpdateCompletionBtn = async () => {
    const userId = await localStorage.getItem("userId");
    if (completionYear == "" || completionMonth == "" || completionDay == "") {
      alert("모든 필수 정보를 입력해주세요")!;
    } else {
      try {
        const response = await axios.put(
          `http://localhost:8080/api/myPage/${userId}/editCompletion`,
          {
            completionYear: completionYear,
            completionMonth: completionMonth,
            completionDay: completionDay,
          }
        );
        if (response.status == 200) {
          localStorage.clear();
          navigate("/", { replace: true });
          alert("회원탈퇴 성공");
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
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem("userId");
      const response = await axios.get(
        `http://localhost:8080/myPage/${userId}/editCompletion`
      );
      if (response.status == 200) {
        setResponseData(response.data);
      }
    };
  }, []);
  return (
    <s.Wrapper onClick={closeModal}>
      <s.ModalBox ref={modalRef} onClick={stopPropagation}>
        <s.TitleText>수료일</s.TitleText>
        <s.TitleText>2022년 05년 19일</s.TitleText>
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
    </s.Wrapper>
  );
}

export default UpdateCompletionModalBasic;
