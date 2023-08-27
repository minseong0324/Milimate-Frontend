import { useEffect, useRef, useState } from "react";
import { s } from "./style";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface PropsType {
  setModalOpen: (open: boolean) => void;
  userName: string;
}

interface ResponseData {
  completionYear: string;
  completionMonth: string;
  completionDay: string;
}
function EditUserNameModalBasic({ setModalOpen, userName }: PropsType) {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [newUserName, setNewUserName] = useState("");
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
  const UpdateUserNameBtn = async () => {
    const userId = await localStorage.getItem("userId");
    if (newUserName.trim() == "") {
      alert("모든 필수 정보를 입력해주세요")!;
    } else {
      try {
        const accessToken = await localStorage.getItem("accessToken");
        const response = await axios.put(
          `http://localhost:8080/api/myPage/${userId}/editUserName`,

          {
            userName: newUserName,
          },
          {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (response.status == 200) {
          alert("이름변경 완료");
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
        <s.TitleText>현재 이름 : {userName}</s.TitleText>
        <s.ContentText>새 이름을 입력해 주세요!</s.ContentText>
        <s.InputContainer>
          <s.MoreInfoInputName
            type="text"
            value={newUserName}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setNewUserName(e.target.value)}
          />
        </s.InputContainer>
        <s.BtnDiv>
          <s.OkBtnStyle onClick={UpdateUserNameBtn}>확인</s.OkBtnStyle>
          <s.CancelBtnStyle onClick={closeModal}>취소</s.CancelBtnStyle>
        </s.BtnDiv>
      </s.ModalBox>
    </s.Wrapper>
  );
}

export default EditUserNameModalBasic;
